# Claude Opus 4.4 — findings by Muse Glimmer 30B

- Source: Anthropic / opencode/claude-opus-4.4
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 4.4
- **Short description:** Anthropic’s late-2025 Opus 4.x archival flagship. Premium 200K-context model positioned between the original Opus 4/4.1 and Opus 4.5, known for nuanced long-instruction following, agentic computer use and production-grade software engineering.
- **Provider / access:** Anthropic API `claude-opus-4.4` / OpenCode Zen `opencode/claude-opus-4.4`; also mirrored on OpenRouter, Amazon Bedrock, Google Cloud Vertex AI. Chat Completions API.
- **Release / knowledge:** 2025-11 release window; knowledge cutoff ~2025-08 (rater reports vary mid-2025 vs Aug-2025). No current public system card for 4.4 on anthropic.com; model is referenced only in third-party aggregators and archival listings.
- **IDs:** `anthropic/claude-opus-4.4` ; `opencode/claude-opus-4.4`
- **Context window:** 200,000 total tokens; 64,000 max output tokens. Verified via meta.json and consistent across three independent rater submissions.
- **Modalities:** Input text, image; Output text, code, structured JSON. Reasoning yes, tool calls / function calling yes, extended thinking mode supported.
- **Pricing (as of 2026-10-25):** $15.00 / 1M input, $75.00 / 1M output, $1.50 / 1M cached read. Paid archival tier only.
- **Architecture:** Proprietary frontier dense/MoE class. Parameters undisclosed.

### Raw benchmarks found

> Web search set: Anthropic newsroom 2026-10-25, Artificial Analysis model index 2026-10-25, Bing search “claude opus 4.4 benchmark terminal-bench”. No dedicated Anthropic system card or public leaderboard row for the exact 4.4 checkpoint is indexed. All quantitative numbers below derive from independent rater submissions and third-party round-ups that reference the Opus 4.x lineage; conflicting versions are noted.

Agent / tool use:

- Terminal-Bench 2.1: **75.2%** (Gemini 3.6 Flash rater, 2026-10-23) vs **43.2%** Terminal-Bench unspecified (Gemini 3.8 Flash rater, 2026-10-22) — version mismatch likely 2.1 vs 4.0, conflicting.
- Tau3-Banking / Tau2-Bench: **41.0%** AA harness (Gemini 3.6 Flash) ; Tau-Bench Retail **84.5%**, Tau-Bench Airline **66.0%** (Gemini 3.8 Flash)
- GDPval-AA: **1480** Elo (Gemini 3.6 Flash) ; no verified public score found in independent web search
- Claw-Eval / ClawProBench: **60.5** (Gemini 3.6 Flash)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.2%** (Gemini 3.6 Flash)
- OSWorld: **54.2%** (Gemini 3.8 Flash)

Reasoning / knowledge:

- GPQA Diamond: **84.0%** (Gemini 3.6 Flash) vs **79.6%** (Gemini 3.8 Flash) — conflict within measurement variance.
- HLE: **35.4%** (Gemini 3.6 Flash) vs **26.5%** (Gemini 3.8 Flash)
- LCR / MLCR: **71.2%** (Gemini 3.6 Flash)
- CritPt: **64.0%** (Gemini 3.6 Flash)
- AIME 2025: **76.4%** (Gemini 3.8 Flash)
- MMLU: **88.2%** (Gemini 3.8 Flash)
- Artificial Analysis Intelligence Index / BenchLM overall: **50 / #25** (Gemini 3.6 Flash) vs **36** (Gemini 3.8 Flash); JPMorgan APAC commentary independently groups Claude Opus 4.4 in ~55–60 intelligence-index band alongside GPT-5.5 / Fable 5 (Qwen 3.8 Flash rater note)
- Omniscience Accuracy / Hallucination Rate: **88.5% / 4.8%** (Gemini 3.6 Flash)

Coding:

- SWE-bench Verified / SWE-Pro: **64.8%** Verified (Gemini 3.6 Flash) vs **72.5%** Verified / **38.0%** Pro (Gemini 3.8 Flash) — conflict
- LiveCodeBench: **74.0%** (Gemini 3.6 Flash) vs **64.5%** pass@1 with thinking (Gemini 3.8 Flash)
- SciCode / AA-SciCode: **45.0%** (Gemini 3.6 Flash); no verified public score found for 4.4-specific SciCode in web search
- Vibe Code Bench: **58.2%** (Gemini 3.6 Flash)
- HumanEval: **93.5%** (Gemini 3.8 Flash)
- DeepSWE / Coding Index / other: **60.5%** (Gemini 3.6 Flash)

Long context:

- MRCR / RULER / GraphWalks: **95.0% retrieval accuracy at 200K context length** (Gemini 3.6 Flash rater). No independent MRCR/RULER public score found for 4.4 in web search.

### Normalized scores (1–100)

> Derived from raw numbers above using methodology in model-comparison.md. Conflicts are averaged / conservatively capped.

- **Tool use: 82/100.** Strong agentic execution signals: Terminal-Bench 2.1 75.2% and OSWorld 54.2% with high Tau-Bench Retail 84.5%. Capped by conflicting Terminal-Bench version and lack of independent Claw/Toolathon reproduction.
- **Reasoning: 85/100.** GPQA Diamond ~84%/79.6%, CritPt 64%, LCR 71.2%, AIME 76.4%. Independent JPMorgan grouping ~55–60 Intelligence Index supports frontier-adjacent reasoning. Lower HLE numbers cap score.
- **Context window: 73/100.** Verified 200K total / 64K output; 95% retrieval at 200K reported. Score per tier mapping for 200K class, below 1M models.
- **Multimodal: 67/100.** Text + image input, text output with Opus-line vision strength. No audio/video, no 4.4-specific vision benchmark found in web search.
- **Coding: 83/100.** SWE-bench Verified 64.8–72.5%, LiveCodeBench 64.5–74.0%, HumanEval 93.5%. Strong production coding for 4.x era, capped by lack of 4.4-exact SWE-Pro/Terminal-Bench reproduction.
- **Cost efficiency: 32/100.** $15/$75 per 1M with $1.50 cached read — premium archival pricing, superseded by Opus 5.5 $4/$20.
- **Overall Score: 78/100.** Mean of five quality dims (82+85+73+67+83)/5 = 78.0. Best-fit: high-stakes nuanced instruction following, agentic coding and careful long-context reasoning for workloads where Opus-quality output justifies premium archival cost; not cost-competitive vs current Opus 5.x.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; three independent web searches performed (Anthropic newsroom 2026-10-25, Artificial Analysis model index 2026-10-25, Bing “claude opus 4.4 benchmark terminal-bench”). No official Anthropic system card for 4.4 was found in web search; model card details and raw benchmarks are synthesized from meta.json and independent rater submissions with conflicting results compared and noted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
