# GPT-5 — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's 2025 flagship foundation system integrating a high-throughput primary model with test-time reasoning via dynamic routing for general problem solving, coding, and math.
- **Provider / access:** OpenAI API (`gpt-5`), ChatGPT, Microsoft Azure AI Foundry.
- **Release / knowledge:** 2025-08-07 release; knowledge cutoff September 30, 2024.
- **IDs:** `openai/gpt-5`. No Zen Free tier available.
- **Context window:** 400,000 tokens total (400K context window); max output 128,000 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; integrated dynamic reasoning routing.
- **Pricing (as of 2025-08):** $1.25 / 1M input tokens, $0.125 / 1M prompt cache read (90% discount), $10.00 / 1M output tokens.
- **Architecture:** Unified system combining high-throughput direct response and chain-of-thought thinking transformers with a real-time router.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench (Telecom): **96.7%** pass^1 (evals.report, unverified Aug 2025)
- BrowseComp: **54.9%** accuracy (evals.report, verified Aug 2025)
- GAIA: **42.1%** accuracy (evals.report, unverified Aug 2025)
- GDPval: **1294** Elo (evals.report, official Aug 2025)
- MCP-Atlas: **44.5%** pass rate (evals.report, official Aug 2025)

Reasoning / knowledge:

- AIME 2025 (no tools): **94.6%** accuracy (evals.report / AI/TLDR, official Aug 2025)
- GPQA Diamond (no tools): **86.2%** / **88.4%** accuracy (evals.report / AI/TLDR, official Aug 2025)
- FrontierMath: **32.41%** accuracy (Tier 4: 12.5%) (evals.report, official Aug 2025)
- Humanity's Last Exam: **25.32%** accuracy (evals.report, official Aug 2025)
- Artificial Analysis Intelligence Index: **44.6** Index (evals.report, Aug 2025)

Coding:

- SWE-bench Verified: **73.6%** / **74.9%** resolved (evals.report / AI/TLDR, official Aug 2025)
- SWE-bench Pro: **41.78%** resolved (evals.report, official Aug 2025)
- LiveCodeBench: **84.6%** pass@1 (evals.report, unverified Aug 2025)
- Aider Polyglot: **88.0%** correct (evals.report / AI/TLDR, official Aug 2025)
- SciCode: **42.9%** accuracy (evals.report, Aug 2025)

Long context:

- 400K token context window with up to 128K output tokens supporting full-repo reasoning.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool coordination evidenced by 96.7% on Tau2-Bench Telecom, 54.9% on BrowseComp, and 1294 Elo on GDPval, capped by mid-range MCP-Atlas scores (44.5%).
- **Reasoning: 88/100.** Excellent competition-level mathematics and scientific reasoning (94.6% AIME 2025, 88.4% GPQA Diamond, 32.41% FrontierMath).
- **Context window: 80/100.** 400K context window with large 128K output buffer, sitting comfortably between 256K and 1M tiers.
- **Multimodal: 78/100.** Solid visual reasoning across images and diagrams (78.4% MMMU-Pro, 84.2% MMMU, 84.6% Video-MMMU), text and image input.
- **Coding: 85/100.** High-level coding capabilities demonstrated by 74.9% on SWE-bench Verified, 84.6% on LiveCodeBench, and 88.0% on Aider Polyglot.
- **Cost efficiency: 74/100.** Priced moderately at $1.25 / $10.00 per 1M tokens with prompt caching at $0.125.
- **Overall Score: 83/100.** Landmark 2025 unified frontier system balancing rapid general responses with deep test-time reasoning for software engineering and mathematics.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into OpenAI announcements, technical reports, and benchmark tracking platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
