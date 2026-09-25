# Inkling — findings by Gemini 3.8 Flash

- Source: Thinking Machines (`thinking-machines/inkling`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' leading open-weights foundation model (975B MoE, 41B active) featuring native multimodal perception (text, vision, audio) and strong agentic performance.
- **Provider / access:** Thinking Machines Tinker platform API (`thinking-machines/inkling`), HuggingFace open weights.
- **Release / knowledge:** 2026-07-15 release; knowledge cutoff mid-2026.
- **IDs:** `thinking-machines/inkling`. No Zen Free tier available.
- **Context window:** 256,000 tokens on Tinker API (open weights architecture supports up to 1,000,000 tokens).
- **Modalities:** Text, image, and audio input; text, code, and tool calling output.
- **Pricing (as of 2026-07):** $1.87 / 1M input ($0.374 cached), $4.68 / 1M output for ≤64K context; $3.74 / 1M input ($0.748 cached), $9.36 / 1M output for ≤256K context.
- **Architecture:** 975B parameter mixture-of-experts (41B active parameters per token) with joint multimodal projection.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1238** Elo (Artificial Analysis, Jul 2026)
- Tau3-Banking: **24%** (Artificial Analysis, Jul 2026)
- Terminal-Bench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **41** (debutes as leading U.S. open-weights model, AA, Jul 2026)
- AA-Omniscience Index: **+2** (Accuracy 40%, Hallucination Rate 63%, AA, Jul 2026)
- GPQA Diamond: no verified public score found

Coding:

- Coding Agent performance: competitive with open-weights cohort; token-efficient at 25K output tokens per task.
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 256K on Tinker platform evaluated across agent benchmarks; 1M supported on raw weights.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid agent and tool orchestration evidenced by 1238 Elo on GDPval-AA v2 and 24% on Tau3-Banking, beating Kimi K2.6 and DeepSeek V4 Flash.
- **Reasoning: 80/100.** Leading open-weights reasoning represented by an AA Intelligence Index of 41, capped by 63% hallucination rate on Omniscience.
- **Context window: 78/100.** 256K native API context window with full 1M support in open weights.
- **Multimodal: 82/100.** Strong native multimodal architecture supporting text, vision, and audio natively into a joint embedding space.
- **Coding: 76/100.** Capable code generation and agentic task execution, though trailing dedicated frontier proprietary coding specialists.
- **Cost efficiency: 74/100.** Priced at $1.87 / $4.68 per 1M tokens ($3.74 / $9.36 for 256K), with the added benefit of downloadable open weights.
- **Overall Score: 79/100.** Impressive open-weights multimodal frontier model combining 975B MoE scale, native audio/image perception, and strong agentic tool handling.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into verified vendor disclosures and independent benchmark reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
