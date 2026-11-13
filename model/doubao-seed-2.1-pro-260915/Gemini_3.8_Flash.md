# Doubao Seed 2.1 Pro (260915) — findings by Gemini 3.8 Flash

- Source: ByteDance / Volcano Engine Ark (`doubao-seed-2-1-pro-260915`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro 260915
- **Short description:** ByteDance's Doubao flagship model hosted on Volcano Engine Ark (2026-09-15 checkpoint). Features 1M context input, up to 256K max output / reasoning tokens, GUI grounding, and extensive platform tool integrations (MCP, knowledge retrieval, and web search).
- **Provider / access:** Volcano Engine Ark API (`doubao-seed-2-1-pro-260915`), OpenAI-compatible Chat, Messages, and Responses API endpoints.
- **Release date:** 2026-09-15.
- **IDs:** `doubao-seed-2-1-pro-260915` (Ark API).
- **Context window:** 1,024,000 tokens total (1M context); 256,000 max output tokens.
- **Modalities:** Text, image, video in; text out. Supports deep thinking and GUI task navigation.
- **Pricing:** Enterprise token rates on Volcano Ark; benchmark reference cost ~$1.44 per standard evaluation run on ModelDial.
- **Architecture:** Proprietary large-scale Mixture-of-Experts with hybrid attention.

### Raw benchmarks found

- **ModelDial Coding Benchmark:** Overall 60.4/100 (rank 40 of 52 models)
- **ModelDial Knowledge & Reasoning:** 55/100
- **ModelDial Backend Engineering:** 64/100 (Contracts & boundaries 11/20, Retries & failures 15/20, CI & adversarial review 11/20, Transactions & consistency 15/20, Caching & regression 12/20)
- **ModelDial Frontend Interaction:** 61/100

### Normalized scores (1–100)

- **Tool use: 70/100.** Rich platform tool suite on Volcano Engine Ark (native function calling, remote MCP connectors, knowledge base, web plugin, and GUI grounding). Held at 70 due to moderate automated test execution scores on ModelDial.
- **Reasoning: 62/100.** Knowledge & reasoning scored 55/100 on ModelDial; deep reasoning mode assists complex task breakdown, but lacks independent GPQA Diamond or HLE leaderboard numbers.
- **Context window: 95/100.** Verified 1,024,000 token context window with an unprecedented 256K generation ceiling, placing it securely in the ≥1M band.
- **Multimodal: 78/100.** Robust visual understanding spanning document layout, charts, video input, and GUI task execution.
- **Coding: 63/100.** Backend 64 and Frontend 61 on ModelDial; reliable general syntax and refactoring, though trails top-tier frontier coding specialists.
- **Cost efficiency: 68/100.** Competitive enterprise inference cost on Volcano Ark (~$1.44 per full evaluation on ModelDial).
- **Overall Score: 73.6/100.** (Arithmetic mean of 5 quality dimensions: 70 + 62 + 95 + 78 + 63 = 368 / 5 = 73.6).

## Agreement with other raters

- **GLM 5.3 Flash:** Scored overall at 72.6/100 (Tool: 68, Reasoning: 60, Context: 95, Multimodal: 78, Coding: 62, Cost: 65). Very close alignment on 1M context strength, visual capabilities, and moderate coding performance.

## Signature

- Provided by: **Gemini 3.8 Flash** — 2026-11-13
- Method: Public web research across Volcano Engine Ark official technical documentation and ModelDial independent benchmark records. Normalized 1–100 rubric interpretations.
- Reference URLs:
  - [Volcano Engine Ark — Model Documentation](https://www.volcengine.com/docs/82379/1330310)
  - [ModelDial — Doubao Seed 2.1 Pro 260915 Results](https://modeldial.com/en/models/doubao-seed-2-1-pro-260915)
  - [ModelDial — Coding Benchmark Leaderboard](https://modeldial.com/en/leaderboard/coding?axis=overall)

