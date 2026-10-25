# Hy3-preview — findings by Muse Glimmer 30B

- Source: Tencent / hy3-preview
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Hy3-preview
- **Short description:** Tencent Hy Team 295B MoE open-weights reasoning model with 21B active parameters. Preview release focused on complex STEM reasoning, instruction following, long context learning, coding and agentic workflows.
- **Provider / access:** Open weights. Hugging Face `tencent/Hy3-preview`, ModelScope, GitCode. No official first-party API; served via third-party providers. Chat Completions compatible via vLLM/SGLang.
- **Release / knowledge:** 2026-04-23; knowledge cutoff not publicly disclosed.
- **IDs:** `tencent/Hy3-preview`
- **Context window:** 256K tokens total per model card; Artificial Analysis lists 256k, FAQ notes 260k. Verified by Hugging Face model card and GitHub README.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls supported via hy_v3 tool-call parser and auto-tool-choice per deployment docs, JSON mode not explicitly documented.
- **Pricing (as of 2026-10-25):** No official pricing. Median provider pricing per Artificial Analysis: $0.06 / 1M input, $0.21 / 1M output, 67% cache discount. Open weights self-host cost variable.
- **Architecture:** Mixture-of-Experts, 295B total parameters, 21B active per token, 3.8B MTP layer parameters, 192 experts top-8 activated, 80 layers, 64 attention heads GQA. License: Tencent HY Community License Agreement.

### Raw benchmarks found

> Sources: Hugging Face model page evaluation results, GitHub README model card, Artificial Analysis model page for Hy3-preview.

Agent / tool use:

- Terminal-Bench 2.0: **54.4** (Hugging Face evaluation results)
- SWE-bench Verified: **74.4** (Hugging Face evaluation results, resolved)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.2** (Hugging Face evaluation results)
- HLE: **30*** (Hugging Face evaluation results, provisional)
- MATH 4-shot: **76.28** (pre-trained base, Hugging Face model card)
- GSM8K 4-shot: **95.37** (pre-trained base)
- MMLU 5-shot: **87.42** (pre-trained base)
- Artificial Analysis Intelligence Index: **23*** estimated, #43 / 121 — Artificial Analysis, estimated independent evaluation forthcoming
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **74.4** (instruct, Hugging Face evaluation results)
- LiveCodeBench-v6 1-shot: **34.86** (pre-trained base, Hugging Face model card)
- SciCode / AA-SciCode: no verified public score found
- MBPP-plus 3-shot: **78.71** (pre-trained base)
- Vibe Code Bench: no verified public score found

Long context:

- Context length 256K reported; no MRCR / RULER / GraphWalks public score found. Context learning gains reported via internal CL-bench per model card.

### Normalized scores (1–100)

- **Tool use: 64/100.** Terminal-Bench 2.0 54.4 and SWE-bench Verified 74.4 show solid agentic coding but lack independent GDPval-AA / Claw-Eval numbers; moderate tool use capped by limited public agentic tool benchmarks.
- **Reasoning: 78/100.** GPQA Diamond 87.2 is strong, MATH 76.3 and MMLU 87.4 support high STEM reasoning; HLE 30* and estimated Intelligence Index 23* limit top-end score.
- **Context window: 82/100.** 256K tokens verified, competitive for open MoE class. No published long-context retrieval benchmark caps score.
- **Multimodal: 15/100.** Text-in / text-out only; no image/audio/video support.
- **Coding: 70/100.** SWE-bench Verified 74.4 and MBPP-plus 78.7 show capable code generation, LiveCodeBench-v6 34.9 and lack of public SWE-Pro / AA-SciCode limit score.
- **Cost efficiency: 88/100.** Median provider $0.06/$0.21 pricing is very competitive for 295B MoE class; open weights enable self-host. No free tier.
- **Overall Score: 61.8/100.** Mean of five quality dims (64+78+82+15+70)/5 = 61.8 → 62 rounded. Best-fit: strong reasoning STEM model with large context and competitive cost, text-only and limited independent tool benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.

---
