# Gemini 3.5 Flash — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3.5 Flash
- Date: 2026-10-09 (UTC); user-authorized refresh of the October 3 report.
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

### Original launch evidence

The publisher model card was reopened on October 9. The original figures below remain the launch configuration evidence; missing-data statements reflect the October 3 search and are superseded by newly located evidence below.

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

### Fresh evidence checked October 9

- Vibe Code Bench v1.1: **48.68%**, OpenHands, **$2.54/test**, displayed duration **14m53s**. The row identifies Gemini 3.5 Flash, not Flash Lite. This is application-building performance, not SWE-bench or Vibe1-100. The page is dated October 7; retrieval date is not the evaluation date. [Vals leaderboard](https://www.vals.ai/benchmarks/vibe-code)
- MCP Atlas: **83.60 ± 2.30**, high effort, on Scale's displayed leaderboard. The point estimate agrees with the original vendor-card 83.6%; this adds evaluator attribution and uncertainty, not a new capability gain. [Scale MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas)

Google's published deprecation table lists May 19, 2026 as release date and no announced shutdown date for this exact ID. This is documentation status, not an authenticated endpoint test. [Google lifecycle table](https://ai.google.dev/gemini-api/docs/deprecations?hl=en)

### Comparison with October 3 and remaining gaps

The independent tool and app-building results broaden evidence but do not justify changing the existing ratings. Tool 84, Reasoning 87, Context 95, Multimodal 95, Coding 81 and Cost 77 remain unchanged; Overall remains 88 (raw mean 88.4). These judgments compare different task families; raw benchmark percentages are not averaged together. Newly found evidence is not proof of improvement since October 3.

The low full-window MRCR result remains a material limitation; capacity does not establish retrieval reliability. The previous pricing is explicitly an October 3 snapshot: the current pricing page was retrieved but exact-model numeric rows were not recovered in this pass, so no current-price change is asserted. Vals task costs are evaluation metadata, not a current API quote. Knowledge cutoff, DeepSWE and exact-ID hallucination rates remain unverified in this refresh. No neighboring Gemini version or customtools configuration is substituted.

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

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent public web research; normalized scores are interpretations, not vendor scores.
- Future sources: Add a separate signed findings file alongside this report.
