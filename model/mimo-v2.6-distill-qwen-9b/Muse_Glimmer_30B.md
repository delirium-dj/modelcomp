# MiMo-V2.6-Distill-Qwen-9B — findings by Muse Glimmer 30B

- Source: Xiaomi MiMo / XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** 9B agentic model developed by Xiaomi MiMo through supervised fine-tuning of Qwen3.5-9B on MiMo-generated data. Covers coding, general-purpose agent tasks, visual coding and cybersecurity. Released as an SFT checkpoint for open agentic research, not a vendor-hosted product.
- **Provider / access:** Self-host only. Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, MIT license. Serves via Transformers/SGLang/vLLM with an OpenAI-compatible endpoint. No OpenCode Zen ID, no OpenRouter/hosted API ID found.
- **Release / knowledge:** Hugging Face updated 2025-09-22; technical report cited 2026. Knowledge cutoff not published for the distill; base Qwen3.5-9B cutoff not disclosed.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`
- **Context window:** 262,144 tokens natively, extensible to ~1,010,000 via RoPE scaling per Qwen3.5-9B spec. Inherited from base, not independently measured for the distill.
- **Modalities:** Input text, image; output text. Reasoning yes via MiMo chat template with `enable_thinking` and `--reasoning-parser mimo`. Tool calls yes – agent SFT with `tool-use` tag. Audio/video input not documented in the model card; pipeline is `image-text-to-text`.
- **Pricing (as of 2026-10-25):** Open weights MIT, $0 license. Self-host cost is hardware only; no API price.
- **Architecture:** 9B dense. Base Qwen3.5-9B Apache-2.0, SFT released MIT. Training mixture 77.4B total tokens, 27.2B loss-bearing: Code 29.9%, General 28.5%, Visual 27.4%, Cyber 14.2%.

### Raw benchmarks found

> All measured numbers below are from the official Hugging Face model card “Evaluation” table, quoted as MiMo-V2.6 technical report results for the released SFT checkpoint. Internal evaluation sets marked †.

Agent / tool use:

- Terminal-Bench 2.1: **37.1%** avg@1 (official HF card; base Qwen3.5-9B 27.0%)
- Toolathlon-Verified: **35.2%** avg@1 (official HF card; base 25.9%)
- AutomationBench v1.0.6: **30.3%** avg@1 (official HF card; base 5.0%)
- OfficeQA: **19.5%** avg@1, JobBench: **18.3%** avg@1 (official HF card)
- MiMo General (mini)†: **62.2%** avg@1 (internal set)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / OSWorld / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Proxy evidence only: MiMo General (mini)† 62.2%, OfficeQA 19.5% – agentic/knowledge work, not science reasoning

Coding:

- SWE-bench Verified: **61.1%** avg@3 (official HF card; base 60.0%)
- SWE-bench Pro: **44.6%** avg@3 (official HF card; base 32.0%)
- MiMo Code (mini)†: **51.6%** avg@3 (internal set; base 19.5%)
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Context window 262,144 tokens inherited from Qwen3.5-9B. MRCR / RULER / GraphWalks: no verified public score found

Multimodal:

- MiMo Visual Coding (mini)†: **64.0%** avg@1 (internal set; base 61.7%)
- MMMU / CharXiv / VideoMME: no verified public score found

### Normalized scores (1–100)

- **Tool use: 45/100.** Terminal-Bench 2.1 37.1%, Toolathlon-Verified 35.2% and AutomationBench 30.3% show clear lift over base Qwen3.5-9B but remain below the 45–60% mid-tier reference. No Tau3/GDPval/Claw-Eval numbers to raise the score.
- **Reasoning: 40/100.** Zero public reasoning benchmarks for GPQA/HLE/AIME/LCR. Score rests on proxy agentic sets only; absence of science-reasoning eval caps the dimension.
- **Context window: 75/100.** 262,144 tokens places the model in the 200K–500K band. No retrieval measurement at that length to justify the top of the band.
- **Multimodal: 70/100.** Text+image in, text out inherited from Qwen3.5-9B with a visual-coding SFT domain. No documented audio/video input benchmarks; squarely in the image-in 60–70 band.
- **Coding: 65/100.** SWE-bench Verified 61.1% and SWE-Pro 44.6% are strong for a 9B SFT and improve over base. Missing LiveCodeBench/SciCode/Vibe scores keep it mid-tier.
- **Cost efficiency: 100/100.** MIT open weights, no API cost. $0 license anchor for self-hosters.
- **Overall Score: 59/100.** Mean of five quality dims (45 + 40 + 75 + 70 + 65) / 5 = 59. Best-fit: free-to-run 9B agentic coder/cyber agent for local deployments where data locality and zero per-token cost outweigh frontier reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; three independent sources: Hugging Face model card XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B, Hugging Face collection MiMo-V2.6, Qwen/Qwen3.5-9B base model card for context/modality inheritance. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `Muse_Glimmer_30B.md`, using the same headings.

---
