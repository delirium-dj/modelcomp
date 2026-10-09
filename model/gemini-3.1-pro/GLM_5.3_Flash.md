# Gemini 3.1 Pro — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.1-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's point-version upgrade to Gemini 3 Pro, released in preview February 19, 2026, focused on reasoning depth, factual grounding, and coding/agentic performance. Google's most advanced model for complex tasks and agentic workflows at release.
- **Provider / access:** Gemini API (`https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview`), Google AI Studio, Gemini CLI, Google Antigravity, Vertex AI, Gemini Enterprise, Gemini app, NotebookLM. Also on OpenCode Zen as `opencode/gemini-3.1-pro` ($2.00/$12.00).
- **Release / knowledge:** 2026-02-19 (preview); knowledge cutoff January 1, 2025 (airank.dev).
- **IDs:** `google/gemini-3.1-pro` (Zen: `opencode/gemini-3.1-pro`; native API id `gemini-3.1-pro-preview`).
- **Context window:** 1,048,576 tokens total / 65,536 max output (models.dev OpenCode listing, corroborated by llm-stats 1.0M/64K and the official model card "1 million token context"). airank.dev reports max context 1.1M — treated as rounded/extended; spec-verified at 1M.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes; tool calls (plus a companion endpoint optimized for custom tool use in agentic pipelines); structured/JSON mode yes (models.dev).
- **Pricing (as of 2026-10-09):** $2.00/M input, $12.00/M output (models.dev, llm-stats, airank.dev); free tier available in the Gemini app (rate-limited); AI Pro/Ultra tiers give higher limits. No pricing changes announced at release.
- **Architecture:** proprietary; incremental iteration on Gemini 3 Pro (not an architectural overhaul, per Google).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (official model card via serenitiesai.com, 2026-02-19; leads Opus 4.6 65.4% by 3.1 pts) — airank.dev lists **74.8%** (#1 on its board; harness/version difference, both listed)
- Tau2-bench Retail: **90.8%** (official model card; trails Opus 4.6 91.9% / Sonnet 4.6 91.7%)
- MCP Atlas: **69.2%** (official model card; leads all competitors — Opus 4.6 59.5%)
- APEX-Agents: **33.5%** (official model card; leads Opus 4.6 29.8%, GPT-5.2 23.0%)
- BrowseComp: **85.9%** (official model card; leads Opus 4.6 84.0%, +26.7 pts over Gemini 3 Pro)
- Finance Agent: **59.72** (airank.dev, Finance category 59.7%)

Reasoning / knowledge:

- ARC-AGI-2 (verified): **77.1%** (official model card via serenitiesai.com; #1 — Opus 4.6 68.8%, GPT-5.2 52.9%; +46.0 pts / +148% over Gemini 3 Pro's 31.1%)
- GPQA Diamond: **94.3%** (official model card; highest among all models tested)
- HLE (no tools): **44.4%** (official model card; Opus 4.6 40.0%)
- HLE (Search+Code): **51.4%** (official model card; trails Opus 4.6 53.1%)
- MMMLU: **92.6%** (official model card)
- airank.dev average: **73.1%** across 4 benchmarks

Coding:

- SWE-Bench Verified: **80.6%** (official model card; trails Opus 4.6 80.8% by 0.2 pts)
- SWE-Bench Pro: **54.2%** (official model card; trails GPT-5.2 55.6%)
- LiveCodeBench Pro (Elo): **2887** (official model card; ~500 above GPT-5.2's 2393, +448 over Gemini 3 Pro)
- SciCode: **59%** (official model card)
- airank.dev Coding category: **77.7%**

Long context:

- no long-context retrieval reported (MRCR/RULER not in the official card table; 1M window is spec-verified, unmeasured)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.0 68.5–74.8 (near-frontier), MCP Atlas 69.2 (leads all rivals), Tau2 Retail 90.8, APEX-Agents 33.5, BrowseComp 85.9 — dominant agentic package just below the TB2.1 ~88%+ frontier band.
- **Reasoning: 96/100.** ARC-AGI-2 77.1 (#1, largest lead on any major reasoning benchmark), GPQA Diamond 94.3 (field-best), HLE 44.4/51.4 — clear frontier-band placement (GPQA 90%+, HLE 40%+).
- **Context window: 95/100.** 1,048,576 tokens (≥1M band = 95–100); no measured retrieval (MRCR/RULER absent) caps it below 100; 65K max output noted as caveat.
- **Multimodal: 90/100.** Text/image/audio/video/PDF in, text out — top of the +video/PDF band (75–90).
- **Coding: 90/100.** SWE-V 80.6, SWE-Pro 54.2, LiveCodeBench Pro 2887 Elo (field-best), SciCode 59% — frontier band (SciCode 55%+, SWE-V strong); SWE-Pro and the 0.2-pt SWE-V trail to Opus 4.6 cap it below 95.
- **Cost efficiency: 72/100.** $2.00/$12.00 per 1M sits between the ~$0.60/$2.20 = 92 and $3/$15 = 60 bands; free tier available in the Gemini app but scored on API pricing.
- **Overall Score: 92/100.** Mean of the five quality dims (90 + 96 + 95 + 90 + 90) / 5 = 92.2 → 92 — best-fit for agentic pipelines, abstract reasoning, and large multimodal/codebase work; Opus 4.6 remains a hair ahead on tool-augmented HLE and SWE-Bench Verified.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (DuckDuckGo search; official model card via serenitiesai.com, airank.dev, llm-stats.com, models.dev cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: replaces the 2026-09-20 draft with sourced raw benchmarks, corrected 1M context (was 2M), and evidence-backed scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.2.md`, using the same headings.
