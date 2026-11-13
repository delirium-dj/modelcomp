# Ternary Bonsai 2 27B — findings by GPT 6 Astra

- Source: PrismML / `prism-ml/Ternary-Bonsai-2-27B-gguf`
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's low-bit Qwen3.8-27B-derived model for local reasoning, coding and vision. This is the second-generation ternary model, distinct from the earlier Qwen3.6-based Bonsai 27B and its one-bit version.
- **Provider / access:** Downloadable GGUF and MLX checkpoints, run with PrismML-compatible low-bit runtimes. API compatibility depends on the chosen local server; no vendor-hosted inference endpoint is assumed.
- **Release / knowledge:** Released **2026-09-17**, per the [publisher announcement](https://prismml.com/news/bonsai-2-27b). Knowledge cutoff not verified.
- **IDs:** `prism-ml/Ternary-Bonsai-2-27B-gguf`, `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit`. No Zen Free ID verified.
- **Context window:** **262,144 tokens**, used in the publisher's agent evaluations; separate native output ceiling not verified. The evaluation's 80,000-token per-turn budget is a harness setting, not a model-wide output specification.
- **Modalities:** Text and image input with the corresponding vision components; text output, thinking and tool-call workflows. No verified native audio/video input or generated media output.
- **Pricing (as of 2026-11-13):** Apache-2.0 downloadable weights with no per-token model license charge; local hardware, electricity and serving costs remain. No verified hosted per-token tariff found.
- **Architecture:** Approximately **27B** dense-model parameters; ternary {-1, 0, +1} weights with group-wise FP16 scaling, **1.76 effective bits/weight**, **5.93 GB** language-model weights in the technical table. [Publisher whitepaper](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf).

### Raw benchmarks found

Source: [PrismML whitepaper](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf), benchmark protocol and Appendix C. Results are publisher-run, thinking at **Xhigh**, temperature **1.0**, top-p **0.95**, top-k **20**. All numbers below use the **Ternary Bonsai 2 27B** column, never the full-precision parent or IQ2_XXS columns.

Agent / tool use:

- Terminal-Bench **2.1: 52.8%**, Harbor/Terminus-2, all **89 tasks**, one attempt each, 262,144 context and 80,000 output budget per turn.
- Tau2-Bench: **80.22%**, airline/retail/telecom, **278 tasks**, one trial, DeepSeek-V4-Flash user simulator.
- BFCL v3: **74.92%**, all **4,441 items**, sample-weighted accuracy; tool schemas placed in the prompt and calls parsed from text, not native structured tool-call messages.
- GDPval-AA, Claw-Eval/ClawProBench and Toolathon/MCP-Atlas/SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **85.76%**, five samples per question, mean accuracy rather than majority vote.
- MMLU-Redux: **89.09%**; AA-LCR: **77.00%**.
- AIME 2025: **95.00%**; AIME 2026: **95.83%**, avg@8 rather than pass@8.
- HLE, CritPt, Artificial Analysis Intelligence Index and Omniscience accuracy/hallucination rate: no verified public score found.

Coding:

- SWE-bench Verified: **60.8%**, mini-swe-agent, all **500 instances**, resolved rate.
- LiveCodeBench **v6: 90.07%**, **1,055 problems**, test-based grading.
- HumanEval+: **95.12%**; MBPP+: **83.07%**.
- BigCodeBench: **58.07%**, complete split, **1,140 problems**, calibrated pass@1; not the Hard subset.
- SWE-Pro, SciCode, Vibe Code Bench and DeepSWE: no verified public score found.

Long context:

- AA-LCR **77.00%** supplies long-context reasoning evidence, but does not establish retrieval accuracy at the full **262,144-token** limit. No MRCR/RULER/GraphWalks result found.

Multimodal:

- CharXiv: **80.00%**, combined descriptive/reasoning evaluation; OmniDocBench **v1.6: 89.13**, native composite metric.
- RealWorldQA: **80.13%**; OCRBench v2: **56.88%**.
- The publisher's **83.9** average and **98.2%** parent-performance retention summarize its selected 20-test suite. They are not ModelComp Overall or a guarantee of equivalent long-horizon agent behavior.

### Normalized scores (1–100)

- **Tool use: 74/100.** Tau2 80.22% and BFCL 74.92% support tool workflows; terminal success 52.8% and prompt-parsed function calls cap native-agent claims.
- **Reasoning: 85/100.** GPQA 85.76%, AA-LCR 77% and strong math support capable local reasoning; publisher-only evidence and lower broad-knowledge coverage limit the score.
- **Context window: 76/100.** Verified 262,144 capacity and AA-LCR evidence place it within the 200K–500K tier; no full-window retrieval proof supports its upper end.
- **Multimodal: 68/100.** Image/document measurements support strong image input, capped by OCRBench 56.88%, required vision components and text-only output.
- **Coding: 79/100.** LiveCodeBench 90.07% is strong, but SWE-bench Verified 60.8% and Terminal-Bench 52.8% constrain repository/agent expectations.
- **Cost efficiency: 95/100.** A 5.93 GB Apache-licensed checkpoint has favorable local deployment economics; hardware/runtime costs prevent treating it as a universally free API.
- **Overall Score: 76/100.** Half-up mean: (74 + 85 + 76 + 68 + 79) / 5 = 76.4 → 76. Best fit is memory-efficient local coding and document reasoning; cost is excluded.

---

## Signature

- Provided by: **GPT 6 Astra (agentrouter/gpt-6-astra)** — 2026-11-13
- Method: Fresh public search, publisher release, exact checkpoint registry and full publisher whitepaper extraction. Parent-model columns, sampling conventions, coding splits and compression-retention claims were distinguished. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [PrismML: Bonsai 2 27B release](https://prismml.com/news/bonsai-2-27b)
  - [PrismML: Bonsai 2 27B whitepaper](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [PrismML: exact GGUF checkpoint](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  - [PrismML: exact MLX checkpoint](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)
- Future sources: add a separate signed findings file using the same headings.
