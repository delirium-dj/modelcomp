# Claude Opus 5.5 — findings by QoDuck

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship Claude 5.5 family model (released 2026-09-22), positioned for long-running agentic coding and knowledge work; Anthropic's recommended default over the pricier Fable 5.1 for most workloads.
- **Provider / access:** Anthropic Claude API (Messages API) `claude-opus-5-5`; OpenCode Zen `opencode/claude-opus-5-5` via `https://opencode.ai/inference/anthropic/v1/messages` (paid, no Free ID); OpenRouter `anthropic/claude-opus-5.5`; AWS Bedrock `anthropic.claude-opus-5-5`; also Google Cloud and Microsoft Foundry. Fast mode (up to 2.5× speed) on Claude Code/Platform at 2× price.
- **Release / knowledge:** Released 2026-09-22; knowledge + training-data cutoff Jun 2026 (per Claude Platform docs). Retirement not sooner than 2027-09-22.
- **IDs:** `claude-opus-5-5` (Anthropic), `opencode/claude-opus-5-5` (Zen — no Free ID exists), `anthropic/claude-opus-5.5` (OpenRouter), `anthropic.claude-opus-5-5` (Bedrock).
- **Context window:** 1,000,000 tokens total; 128K max output on the synchronous Messages API, up to 300K output on the Message Batches API with the `output-300k-2026-03-24` beta header (verified via Claude Platform docs).
- **Modalities:** Text + image input, text output; vision, tool use, multilingual; adaptive extended thinking always on (cannot be disabled; default effort medium, max effort used for headline benchmarks). Reasoning tokens billed as output. No audio/video I/O.
- **Pricing (as of 2026-11-09):** $4.00 / 1M input, $20.00 / 1M output, $0.20 / 1M cache read, $5.00 / 1M cache write (Anthropic + OpenCode Zen agree). Fast mode $8 / $40. Batch API 50% off; US-only inference 1.1× multiplier (secondary source). Zero data retention offered; EU AI Act watermarking; "preserved thinking" anti-distillation safeguard for API accounts created on/after 2026-08-31.
- **Architecture:** Proprietary; Anthropic's system card discloses no parameter count or MoE details. Third-party claims of a dense GQA decoder are uncorroborated by first-party sources — treat as unknown.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh effort, ±2.6 pts s.e.) vs **59.6%** (Artificial Analysis independent run, ties GPT-6 Astra) — harness/effort conflict, see notes. Vals AI measured 61.6% (secondary aggregator).
- GDPval-AA v2.1: **1846 Elo** (Anthropic; independently corroborated by Artificial Analysis coverage) — ahead of Fable 5.1 (1735), Opus 5 (1708), GPT-6 Astra (1542).
- AA-Briefcase v1.1: **1822 Elo** (Artificial Analysis private eval, +143 over Fable 5.1; secondary table lists 1800 — conflict noted).
- OSWorld 2.1: **81.8% partial** (Anthropic; secondary aggregator lists 48.7% strict on OSWorld 2.0 — partial-vs-strict gap).
- AutomationBench: **40.0%** (Zapier harness, no fallback models; safeguard interventions counted as failures). GPT-6 Astra narrowly leads at 41.4%.
- Toolathlon Verified: **77.8%** (secondary aggregator, provisional).
- Tau3-Banking: no verified public score found. TAU-2 Airline: **75.3%** (secondary aggregator, provisional).
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **58** at max effort — #1, highest AA has measured (AA via Trending Topics). Variants circulate: 57.62 "max with fallback" (OSChina), 59.1 (secondary table) — treat 57.6–59.1 as the measured band around the headline 58.
- GPQA Diamond: **90.2%** (secondary aggregator only; Anthropic publishes no GPQA figure — provisional).
- HLE: **61.4% no tools** (Artificial Analysis) / **67.7% with tools** (Anthropic) — both frontier-leading; secondary no-tools variants 64.4% conflict with AA's 61.4%, AA figure preferred.
- ARC-AGI-1: **97.5%**, ARC-AGI-2: **91.7%** (secondary aggregator, provisional).
- SimpleBench: **88.4%** (secondary aggregator, provisional).
- CritPt: **31.7%** (secondary; AA coverage says Opus 5.5 trails on CritPt — v2 Hard variant 68.0% also circulates, harness unclear).
- FrontierMath Tiers 1–3: **91.2%**, Tier 4: **95.0%** (secondary aggregator, provisional — no first-party figure).
- Omniscience: AA-Omniscience Index **48.1** (secondary aggregator).

Coding:

- SWE-bench Verified: no verified public score found (aggregator's 1.0% row is flagged anomalous/implausible and is discarded; Anthropic itself questions SWE-bench memorization).
- SWE-bench Pro: **89.9%**; SWE-bench Multilingual: **93.9%**; SWE-bench Multimodal: **61.4%** (secondary aggregator, provisional).
- FrontierCode v1.1 (Main): **54.4%** at max effort / **54.6%** at default medium (Anthropic) — above GPT-6 Astra's 53.3%. Secondary variants 52.2% / 63.6% extended conflict; first-party figures preferred.
- CursorBench 4.0: **57.8%** max / **52.5%** default medium (Anthropic) vs Fable 5.1 51.8%, Opus 5 46.6%.
- DeepSWE v1.1: **74.2%** (secondary aggregator, provisional).
- LiveCodeBench: no verified public number found (Vals leaderboard described as "top-tier" only).
- SciCode: **66.9%** (Artificial Analysis, vs 63.1% next-best).
- Vibe Code Bench (Vals): **90.3%** (1.1 scale) / 30.4% (1–100 variant) — scale conflict, provisional.
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic; GPT-6 Astra leads at 64.6%).
- AA Coding Index: 0.6 (secondary aggregator, scale unclear — provisional).

Long context:

- AA-LCR v1.1: **84.7%** (secondary aggregator); AA launch coverage notes Opus 5.5 trails leaders on AA-LCR. No verified ≥98% retrieval-at-512K figure; aggregator warns effective recall degrades before the nominal 1M ceiling. MRCR / RULER / GraphWalks: no verified public score found.

Vision (supporting):

- MMMU Pro: **87.7%** (secondary aggregator, provisional). Chartography: **89.0% with tools** (Anthropic; secondary table's 66.3% conflicts — first-party preferred).

**Conflicting-results notes:** (1) Terminal-Bench 4.0: Anthropic 66.4% (xhigh) vs AA 59.6% vs Vals 61.6% — effort/harness differences; both first-party and independent figures retained. (2) "40% cheaper than Opus 5" (Anthropic, typical workloads) vs AA: at max effort Opus 5.5 burns ~119K output tokens/task vs Opus 5's ~73K (GPT-6 Astra ~27K), so cost per task is roughly unchanged — sticker price cut ≠ task-cost cut at max effort. (3) Safeguard fallbacks (cyber→Opus 4.8, biology/frontier-LLM→Opus 5) likely depress Anthropic's own headline scores; AutomationBench counted interventions as failures. (4) Secondary aggregator (armes.ai) mixes table/prose values and includes an implausible SWE-bench Verified 1.0% — its uncorroborated rows are marked provisional above.

### Normalized scores (1–100)

- **Tool use: 95/100.** GDPval-AA 1846 Elo clears the ~1750+ frontier reference, Terminal-Bench 4.0 leads all reported models (66.4% vendor / 59.6% independent), OSWorld 81.8% partial and AutomationBench 40.0% are frontier; capped below 98 by the independent TB gap and missing Tau3/Claw-Eval evidence.
- **Reasoning: 94/100.** AA Intelligence Index 58 (#1 ever measured by AA), HLE 61.4%/67.7% far above the 40% frontier reference, GPQA 90.2% and ARC-AGI-2 91.7% (provisional) meet frontier refs; capped by Index just under the 60+ anchor and CritPt/AA-LCR trailing.
- **Context window: 95/100.** Verified 1M window maps to the 95–100 tier; no verified ≥98% retrieval at 512K+ (AA-LCR 84.7%, trails leaders), so no 100. 128K synchronous output (300K batch beta) noted as caveat.
- **Multimodal: 68/100.** Text + image input, text output only → 60–70 tier; strong vision evidence (MMMU Pro 87.7%, Chartography 89.0%) places it near the top of the tier; no native video/audio I/O caps it.
- **Coding: 95/100.** DeepSWE 74.2% meets the 74%+ frontier ref, SciCode 66.9% clears 55%+, FrontierCode/CursorBench/Terminal-Bench all lead; capped by missing trustworthy SWE-bench Verified and LiveCodeBench numbers.
- **Cost efficiency: 54/100.** $4/$20 sits between the $3/$15≈60 and $10/$50≈30 anchors; $0.20 cache reads and 50% batch discount help, but AA's max-effort token bloat (~119K output/task, cost/task ≈ Opus 5) caps the effective value.
- **Overall Score: 89.4/100.** Mean of (95+94+95+68+95)/5 = 89.4 — frontier-best for long-horizon agentic coding and knowledge work where image-in/text-out suffices; multimodal ceiling and max-effort token costs are the trade-offs.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: public internet research — 4 independent web searches plus direct fetches of Anthropic's announcement, Claude Platform docs, OpenCode Zen model docs, and independent coverage (Artificial Analysis via Trending Topics, OSChina, ARMES aggregator); conflicting vendor-vs-independent figures compared and labelled; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5.5 — Anthropic](https://www.anthropic.com/claude-opus-5-5)
  - [Models overview — Claude Platform Docs](https://platform.claude.com/docs/en/models/overview)
  - [OpenCode Console Models (Zen routes + pricing)](https://opencode.ai/v2/docs/console/models/)
  - [Claude Opus 5.5: Anthropic Launches New Top Model — Trending Topics (Artificial Analysis results)](https://www.trendingtopics.eu/claude-opus-5-5-anthropic-launches-new-top-model-despite-calling-for-ai-slowdown/)
  - [Claude Opus 5.5 Intelligence Index — OSChina](https://www.oschina.net/news/502689/artificialanalysis-ai-claude-opus-5-5)
  - [Opus 5.5 Parameters, Benchmarks & Specs — ARMES (secondary aggregator)](https://armes.ai/docs/models/anthropic/claude-opus-5.5)
  - [Anthropic releases Claude Opus 5.5 — VentureBeat](https://venturebeat.com/technology/anthropic-releases-claude-opus-5-5-beating-fable-5-1-on-key-agentic-benchmarks-at-60-cheaper-api-price)
  - [Best AI Model for Coding, October 2026 — MorphLLM](https://www.morphllm.com/best-ai-model-for-coding)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.