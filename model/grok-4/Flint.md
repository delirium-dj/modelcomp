# Grok 4 — findings by Flint

- Source: xAI / Grok 4
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 (xAI; Grok family — flagship tier); Grok 4 Heavy is the higher-tier variant.
- **Short description:** xAI's flagship model, positioned by xAI as "the most intelligent model in the world"; native tool use with real-time X / web search integration; released Jul 2025; also the base for Grok 4 Heavy.
- **Provider / access:** xAI API (SuperGrok / Premium+ subscribers; xAI API); Grok 4 Heavy tier; later surfaced via third-party provider Azure (per Artificial Analysis).
- **Release / knowledge:** Release date 2025-07-09 (xAI blog; Epoch AI); knowledge cutoff not stated in verified sources.
- **IDs:** `grok-4`; `grok-4-heavy`.
- **Context window:** 256,000 tokens (xAI blog API spec) — conflicting report of 260k (Artificial Analysis FAQ); max output not stated in verified sources.
- **Modalities:** Reasoning yes (extended thinking); text + image input, text output; multimodal (vision) per xAI; Grok Voice Mode adds camera / video understanding; no audio / PDF coverage found in verified sources.
- **Pricing (as of 2026-10-28):** $3.00 input / $15.00 output per 1M tokens (xAI, Epoch AI, Artificial Analysis); blended cache-hit/input/output (7:2:1) ≈ $4.20 per 1M tokens; Artificial Analysis rated input as "somewhat expensive" vs median.
- **Architecture:** Proprietary (xAI / SpaceXAI); ~3.0e12 total parameters (Epoch AI) with 5.0e26 FLOPs training compute.

### Raw benchmarks found

- Reasoning / knowledge:
  - ARC-AGI-2: **16%** (xAI claim of state-of-the-art for closed models; Grok 4 Heavy **50%** on Humanity's Last Exam — first model to reach 50%).
  - Humanity's Last Exam (Grok 4 Heavy): **50%** (first model to score 50%; text-only subset 50.7%).
  - USAMO'25 (Grok 4 Heavy): **61.9%**.
  - GPQA Diamond: **87%** (Epoch AI).
  - SimpleBench: **61%** (Epoch AI); OTIS Mock AIME 2024-2025: **84%** (Epoch AI).
  - Epoch AI Capabilities Index (ECI): **146** — ranked **#78** of 253 tracked models; **#3** of 140 at release.
- Agent / tool use:
  - Vending-Bench (agentic tool use): Grok 4 **~$4,694 net worth / 4,569 units sold** (Epoch AI) — vs Claude Opus 4 $2,077 / 1,412 units.
  - GDPval (agentic knowledge work): **21%** (Epoch AI).
  - Terminal-Bench 2.0: **27%** (Epoch AI).

### Cross-source comparison

- Context: xAI official **256K** vs Artificial Analysis **260K** (FAQ) — conflict; primary source (xAI) used for scoring.
- Reasoning vs Heavy: Grok 4 (base) vs Grok 4 Heavy (parallel test-time compute) carry most verified benchmark numbers; Heavy is the stronger reasoning artifact.
- Multimodal: xAI positions Grok 4 API as frontier-level multimodal (text+vision); Independent coverage (AA) confirms text+image in / text out; Grok Voice adds camera/video.

### Normalized scores (1–100)

- **Tool use: 65/100.** Vending-Bench agentic tool use strong (**~$4,694 net worth**); native tool use + real-time X/web search; Terminal-Bench 2.0 **27%** → mid band; capped mid-low.
- **Reasoning: 72/100.** ECI **146**, GPQA Diamond **87%**, SimpleBench **61%**, OTIS AIME **84%**; xAI Heavy reached **50% HLE** (SOTA closed); frontier-tier reasoning evidence. Capped below top proprietary tier on ECI rank (#78).
- **Context window: 75/100.** ~256K per xAI (AA conflict at 260K); mid-high band (200K–500K tier) — comparable to Flint's 262K-class context handling.
- **Multimodal: 70/100.** Text + image in, text out; frontier-level multimodal per xAI; Grok Voice camera/video; lacks audio/PDF coverage → mid band.
- **Coding: 55/100.** Terminal-Bench 2.0 **27%** (Epoch) — mid-low band; METR Time Horizons strong; xAI targeted agentic reliability over coding in messaging.

- **Cost efficiency: 45/100.** $3 in / $15 out per 1M tokens — paid, above-average cost tier; excluded from Overall.
- **Overall Score: 67/100.** Mean of the five quality dims (Tool 65 + Reasoning 72 + Context 75 + Multimodal 70 + Coding 55) / 5 = 67; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (xAI blog) plus independent benchmarks/reviews (Artificial Analysis, Epoch AI) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
