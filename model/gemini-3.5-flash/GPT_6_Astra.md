# Gemini 3.5 Flash — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3.5 Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Gemini 3.5 Flash.
- **Short description:** Multimodal reasoning model with configurable thinking.
- **Provider / access:** Gemini API, AI Studio, Gemini apps and Enterprise Agent Platform; native Gemini API.
- **Release / knowledge:** May 19, 2026; cutoff unverified.
- **IDs:** `gemini-3.5-flash`; Google free tier, no verified Free Zen ID.
- **Context window:** 1M; 64K output.
- **Modalities:** Text/image/audio/video input; text output, reasoning and agent tools.
- **Pricing (as of 2026-10-03):** $1.50 input / $9 output / $0.15 cached per million, plus storage/grounding. Free-tier data may improve products; paid-tier data does not. [Pricing](https://ai.google.dev/gemini-api/docs/pricing).
- **Architecture:** Proprietary; counts undisclosed. Specifications and vendor evaluations: [model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **76.2%** (Terminus-2), MCP Atlas **83.6%**, Toolathlon **56.5%**, OSWorld-Verified **78.4%**; launch GDPval-AA **1656 Elo**, not current v2.1. Source: model card above.
- Tau3/Tau2, Claw-Eval/ClawProBench and SWE Atlas: no verified public score found.

Reasoning / knowledge:

- HLE full text+multimodal **40.2%**, ARC-AGI-2 **72.1%**, same vendor card.
- GPQA, LCR/MLCR, CritPt, AA Intelligence Index, BenchLM and Omniscience: no verified public score found in reviewed primary measurements.

Coding:

- SWE-Bench Pro Public **55.1%**, single attempt, same vendor card.
- SWE-bench Verified, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified public score found in reviewed primary measurements.

Long context:

- MRCR v2 eight-needle **77.3% at 128K average**, **26.6% at 1M pointwise**, same card.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong MCP and terminal results support agents; Toolathlon shows substantial remaining failures.
- **Reasoning: 87/100.** HLE and ARC indicate strong reasoning; vendor-only evidence caps confidence.
- **Context window: 95/100.** Million-token capacity meets the tier; low full-window recall prevents 100 and requires retrieval safeguards.
- **Multimodal: 95/100.** Native audio/video/image input is broad; output is text only.
- **Coding: 81/100.** SWE-Pro and terminal evidence are useful, but broader coding evaluations remain unverified.
- **Cost efficiency: 77/100.** $1.50/$9 is moderate, with cheaper newer Flash options and extra tool/storage fees.
- **Overall Score: 88/100.** Half-up mean of 84, 87, 95, 95 and 81 is 88; good for multimodal agents with selective context retrieval.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not vendor scores.
- Future sources: Add a separate signed findings file alongside this report.
