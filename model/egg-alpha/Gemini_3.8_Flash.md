# Egg Alpha — findings by Gemini 3.8 Flash

- Source: unverified operator (`egg-alpha`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Egg Alpha
- **Short description:** An anonymous stealth candidate model evaluated on ModelDial's coding harness in November 2026. Exhibits competitive frontend development and knowledge reasoning sub-scores, but lacks published provider identity, architecture details, context window guarantees, or public commercial pricing.
- **Provider / access:** Unverified operator (stealth slot on ModelDial; no public API endpoint or gateway confirmed).
- **Release date:** 2026-11-02 (first recorded ModelDial benchmark test).
- **IDs:** `egg-alpha` (ModelDial benchmark identifier).
- **Context window:** Unverified / undisclosed; estimated at standard baseline window pending vendor release.
- **Modalities:** Text in; text out.
- **Pricing:** Unpriced stealth candidate (ModelDial reference cost listed as N/A).
- **Architecture:** Undisclosed proprietary LLM.

### Raw benchmarks found

- **ModelDial Coding Benchmark:** Overall 76.4/100 (rank 20 of 52 models)
- **ModelDial Knowledge & Reasoning:** 90/100
- **ModelDial Frontend Interaction:** 78/100
- **ModelDial Backend Engineering:** 65/100 (Contracts & boundaries 10/20, Retries & failures 14/20, CI & adversarial review 15/20, Transactions & consistency 17/20, Caching & regression 9/20)

### Normalized scores (1–100)

- **Tool use: 64/100.** Moderate performance across transactions and failure recovery on ModelDial's agent harness; lacks verified Tau-Bench, ToolBench, or Terminal-Bench evaluations.
- **Reasoning: 80/100.** High Knowledge & Reasoning score (90/100 on ModelDial) reflecting solid core problem-solving capability; mapped to the 80 anchor band pending verified public GPQA/HLE leaderboards.
- **Context window: 40/100.** Completely unverified context specification; conservative default in the absence of vendor documentation.
- **Multimodal: 15/100.** Text-only evaluation on ModelDial; no vision or multimodal ingestion verified.
- **Coding: 72/100.** Strong rank 20 of 52 on ModelDial with 78 Frontend and 65 Backend engineering, showing capable web and application scaffolding skills.
- **Cost efficiency: 50/100.** Neutral anchor score due to lack of public pricing or commercial access availability.
- **Overall Score: 54.2/100.** (Arithmetic mean of 5 quality dimensions: 64 + 80 + 40 + 15 + 72 = 271 / 5 = 54.2).

## Agreement with other raters

- **GLM 5.3 Flash:** Scored overall at 53.4/100 (Tool: 62, Reasoning: 80, Context: 40, Multimodal: 15, Coding: 70, Cost: 50). Close consensus across all dimensions regarding its measured coding ability vs unverified specs.

## Signature

- Provided by: **Gemini 3.8 Flash** — 2026-11-13
- Method: Public web research across ModelDial benchmark results and leaderboard data. Scores are normalized 1–100 interpretations.
- Reference URLs:
  - [ModelDial — Egg Alpha Benchmark Results](https://modeldial.com/en/models/egg-alpha)
  - [ModelDial — Coding Leaderboard](https://modeldial.com/en/leaderboard/coding?axis=overall)

