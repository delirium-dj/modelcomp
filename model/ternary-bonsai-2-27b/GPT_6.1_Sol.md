# Ternary Bonsai 2 27B — findings by GPT 6.1 Sol

- Source: PrismML / `prism-ml/Ternary-Bonsai-2-27B-gguf`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's ternary-compressed Qwen3.8-27B-derived reasoning/vision model for local agents and commodity-device inference. It has its own transformed weights and measured compression losses; neither uncompressed Qwen results nor the earlier Ternary Bonsai 27B are substituted for it.[1][2]
- **Provider / access:** Downloadable GGUF and MLX packs; local llama.cpp-compatible serving with the required runtime. OpenRouter exposes `prism-ml/ternary-bonsai-2-27b` through compatible APIs. Catalog presence is not an authenticated inference test.[1][3]
- **Release / knowledge:** Publisher whitepaper dated **September 2026**; registry creation September 16 and gateway canonical date September 18 are provenance timestamps, not independently verified day-of-launch announcements. Exact knowledge cutoff not verified.[2][3][5]
- **IDs:** `prism-ml/Ternary-Bonsai-2-27B-gguf`, companion `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit`; gateway `prism-ml/ternary-bonsai-2-27b`. No exact Zen Free ID verified. Packaging variants are not separate models.[1][3]
- **Context window:** **262,144 total tokens**, consistent between publisher and gateway. OpenRouter's inspected output cap is **32,768**. Publisher research uses output budgets up to **81,920**, and **80,000 per turn** for Terminal-Bench; those evaluation budgets are not promises of the gateway's serving cap.[1][2][3]
- **Modalities:** Text and image in; text out. Image use requires the separately packaged vision projector/tower. Thinking, tool calling, and structured output are supported by the documented runtime/gateway; no native audio/video or non-text generation verified.[1][3]
- **Pricing (as of 2026-11-11):** OpenRouter lists **$0.075 input / $0.50 output / $0.0375 cached input per 1M tokens**. Apache 2.0 downloads enable local use but do not make hardware, electricity, or hosted inference free.[1][3]
- **Architecture:** Publisher **27.36B total parameters**, Qwen3.8-27B hybrid attention, approximately three quarters linear attention. Language matrices use scaled ternary weights in a rotated basis; the vision tower is separate. Whitepaper PTQ1_0 is **5.93 GB / 1.76 bits per weight**; the live card describes updated **5.95 GB / 1.75-bit** packing. These are artifact/report differences, not a new model or identical measurements.[1][2]

### Raw benchmarks found

**Primary evidence:** publisher whitepaper, all 14 pages text-extracted and inspected, including Appendix B's protocol and Appendix C's exact-model columns. Results are publisher-run, not independent reproduction. Most are sampled pass@1; GPQA is mean accuracy over five samples per question and AIME is avg@8, not pass@8.[2]

Agent / tool use:

- Terminal-Bench **2.1: 52.8%**, Harbor / Terminus-2 JSON actions, all **89 tasks**, one attempt each, 262,144 context and 80,000 output tokens per turn.[2]
- Tau2-Bench: **80.22%**, airline/retail/telecom, **278 tasks**, one trial; publisher uses DeepSeek-V4-Flash at temperature zero as the user simulator.[2]
- BFCL v3: **74.92%**, sample-weighted mean across all **17 subsets / 4,441 items**, prompt-based tool schemas and text-parsed calls rather than native tool-call messages.[2]
- Tau3-Banking, GDPval-AA, Claw-Eval / ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: **no verified public score found** for this model.

Reasoning / knowledge:

- GPQA Diamond: **85.76%** at xhigh, versus **75.56%** at medium; mean-of-five sampling, not majority-vote accuracy.[2]
- MMLU-Redux: **89.09%**; AIME 2025: **95.00%**, AIME 2026: **95.83%**, each AIME avg@8; MATH-500: **98.80%**.[2]
- AA-LCR: **77.00%** at xhigh, publisher-run under EvalScope, not independently rerun by AA.[2]
- HLE, MLCR, CritPt, an independent Intelligence Index, and Omniscience accuracy / hallucination rate: **no verified public score found**.
- Whitepaper's **83.9 average over 20 benchmarks / 98.2% retained relative to its FP16 baseline** is not ModelComp's Overall. The live card separately reports **84.78 over 14 benchmarks**; changed coverage explains why these aggregates must not be merged.[1][2]

Coding:

- SWE-bench Verified: **60.8%**, mini-swe-agent, all **500 instances**, resolved rate.[2]
- LiveCodeBench **v6: 90.07%**, **1,055 problems**, unit-test grading; HumanEval+: **95.12%**; MBPP+: **83.07%**.[2]
- BigCodeBench: **58.07%**, full **1,140-problem complete split**, not the instruct split or Hard subset.[2]
- SWE-bench Pro, SciCode, Vibe Code Bench, DeepSWE, and an independent Coding Index: **no verified public score found**.

Long context:

- Publisher AA-LCR **77.00%** is useful document-reasoning evidence, but no exact MRCR / RULER / GraphWalks retention result at the full 262K window was verified.[2]

Multimodal evidence:

- Whitepaper xhigh: CharXiv overall **80.00%**, A-OKVQA **86.81%**, OmniDocBench v1.6 **89.13**, RealWorldQA **80.13%**, OCRBench v2 **56.88%**. OmniDocBench is its composite metric, not a universal percentage of perfectly parsed documents.[2]
- The live card's different 14-benchmark suite reports MMMU-Pro **75.49%** and OCRBench v2 **56.88%**. Those are exact compressed-model measurements, not inherited full-precision values.[1]

Deployment measurements:

- Whitepaper: M5 Max **46.8 tokens/s** TG128, M5 Pro **27.7**, RTX 5090 PQ2_0 **142.5** at batch one/depth zero with vision excluded; these are measured short-workload throughput, not end-to-end long-context agent speed. Different live-card throughput figures are not averaged with the whitepaper's runtime snapshot.[1][2]

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 52.8%, Tau2 80.22%, and BFCL 74.92% show useful local-agent reliability, capped by moderate terminal completion and publisher-only evaluation.[2]
- **Reasoning: 85/100.** GPQA 85.76%, strong sampled AIME, and LCR 77% support strong compact reasoning, below the best expert-level results and without broad independent replication.[2]
- **Context window: 75/100.** Verified 262K capacity falls in the 200K–500K tier; LCR is useful but no full-window retention measurement supports an upper-tier score.[1][2][3]
- **Multimodal: 70/100.** Verified image input and exact visual/document benchmarks earn the image-input tier; optional tower deployment, OCR limitations, and no verified audio/video output cap it.[1][2]
- **Coding: 78/100.** SWE Verified 60.8%, LiveCodeBench v6 90.07%, and BigCodeBench 58.07% support capable local coding, while long-horizon completion and hosted output budgets limit it.[2][3]
- **Cost efficiency: 98/100.** $0.075/$0.50 hosted pricing and compact local weights offer inexpensive deployment, but inference is not verified as free and backend/hardware costs remain.[1][3]
- **Overall Score: 77/100.** Half-up mean of (75 + 85 + 75 + 70 + 78) / 5 = 76.6; cost is excluded. A practical small-footprint reasoning/vision coding model, not a lossless replacement for full-precision frontier agents.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-11
- Method: Independent fresh exact-name search, publisher registry discovery, full primary whitepaper text extraction, direct live model card, exact gateway catalog, and secondary comparison. No peer findings read or model code executed. Normalized scores are interpretations, not publisher benchmark aggregates.
- Reference URLs:
  - [1 — Publisher's live GGUF model card and 14-benchmark suite](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf/raw/main/README.md)
  - [2 — Primary whitepaper, full protocol and 20-benchmark tables](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [3 — OpenRouter live exact-model catalog and output/pricing configuration](https://openrouter.ai/api/v1/models)
  - [4 — BenchLM exact-model transcriptions, not independent replication](https://benchlm.ai/models/ternary-bonsai-2-27b)
  - [5 — Public publisher-checkpoint registry search](https://huggingface.co/api/models?author=prism-ml&search=Ternary-Bonsai-2-27B&limit=10)
- Future sources: add an independently signed report next to this one using the same headings.
