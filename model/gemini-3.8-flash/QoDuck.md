# Gemini 3.8 Flash — findings by QoDuck

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's cheap, fast, multimodal Flash model (released 2026-09-02, GA) — fourth Flash release in under four months, focused on agentic workflows, coding and interactive video understanding. Top-10 Artificial Analysis Intelligence Index (59) at a fraction of frontier price. **Variant flag:** the sibling **Gemini 3.8 Flash Cyber** is a separate cybersecurity specialist routed to `models_cybersecurity/gemini-3.8-flash-cyber/` (RULES.md `-cyber` suffix rule) and is NOT researched here; this report covers the base Flash only.
- **Provider / access:** Google Cloud / Gemini API `gemini-3.8-flash` (also `google/gemini-3.8-flash`); GA, Global/Multi-region. OpenCode Zen lists a **paid** route `opencode/gemini-3.8-flash` (1M context; mastra.ai shows $0.75 in / $4 out — Zen rounds the native $3.75 output up to $4). **No Free ID exists on Zen** (the `gemini-3.1-flash-free` route is a different model). Primary focus per Google: agentic workflows, coding, interactive video understanding.
- **Release / knowledge:** Released 2026-09-02 (stable/GA); knowledge cutoff **March 2026** (llm-stats; kingy notes some domains possibly January 2025).
- **IDs:** `gemini-3.8-flash` (Gemini API / Google Cloud), `google/gemini-3.8-flash` (provider-prefixed), `opencode/gemini-3.8-flash` (Zen, paid). No Free ID.
- **Context window:** 1,048,576 input tokens; max output **65,536** tokens. Verified against the Google Cloud developer-guide specs table and llm-stats.
- **Modalities:** Text, image, audio, video and PDF in → **text out only** (no native image/audio generation, no Live API). Reasoning: yes — thinking levels LOW / MEDIUM (default) / HIGH; `MINIMAL` is rejected with a validation error. Tool calls: yes. Strong video/chart understanding (LVBench 87.1%, CharXiv-R 86.2%).
- **Pricing (as of 2026-11-09):** Paid, introductory through **2026-12-31**: **$0.75 / $3.75 per 1M** (input / output), cached input $0.075. **From 2027-01-01 the price doubles to $1.50 / $0.15 / $7.50.** Batch & Flex $0.375/$0.0375/$1.875 (→ $0.75/$0.075/$3.75 in 2027); Priority $1.35/$0.135/$6.75 (→ $2.70/$0.27/$13.50); cache storage $0.50 → $1.00 per 1M/hour; grounding 5,000 free shared requests then $14 per 1,000 queries. Confirmed by Google Cloud Model Garden pricing, kingy.ai and llmgateway.io.
- **Architecture:** Proprietary; Google does not disclose parameter counts.

### Raw benchmarks found

> The defining conflict for this model is **Terminal-Bench version inflation**: ~89–90% on TB2.1 (rank 4th) but ~19% on the harder, realistic TB4.0 (rank 30th). Vendor (Google) and independent (AA / DeepSWE leaderboard / llm-stats) figures are both listed; scores below lean on the realistic TB4 and independent DeepSWE, NOT the inflated TB2.1. GPQA Diamond, MRCR and SWE-bench Verified are **not published** for this ID.

Agent / tool use:

- Terminal-Bench 2.1 (**group**): **89.4%** (llm-stats, Terminus-2 default harness; rank 4th) / **90.8%** (Google Cloud developer guide, vs 3.7's 81.6%) / 87.6% (flowtivity) — harness/config variance, all vendor-favorable.
- Terminal-Bench 4.0: **19.1%** (llm-stats public leaderboard, highest thinking; rank **30th**) / 19.7% (askclash, flowtivity). For context, frontier models reach GPT-6 Astra 59.6%, Claude Fable 5.1 55.1%, Claude Opus 5 51.8% on TB4 — Gemini 3.8 Flash is far below.
- GDPval-AA: **1545 Elo** (llm-stats, normalized 0.515 of 3000; rank 8th; kingy Google-reported vs 3.7's 1482).
- OSWorld 2.0 (partial, computer use): **59.0%** (llm-stats, batched tools, best of 3; rank 11th; vs 3.7's 50.6%).
- τ³-bench Banking: **38.1%** (developer guide, vs 3.7's 30.9%) — below the ~50% top-band anchor.
- Vals Finance Agent v2: **61.4%**; Harvey's Legal Agent: **10.0%** (all-pass rate, weak); GDP.pdf: **35.0%** (all-pass, no tools; rank 2nd).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1.1: **59** at high reasoning (AA launch tweet; kingy; vs 3.7's 56) — top 10, just below the 60+ top-band threshold.
- Humanity's Last Exam: **45.4%** (developer guide, vs 3.7's 45.7% — slightly *lower*) vs **HLE-Verified 54.9%** (llm-stats, full 1,811-item verified set, self-computed; kingy 54.9% vs 3.7's 53.6%). Different sets/configs — see conflict notes.
- BioMysteryBench: **56.5%** (hard human subset, restricted tools); LABBench2: **86.2%** (terminal, bioinformatics tools, internet).
- GPQA Diamond / CritPt / LCR / MLCR: **no verified public score found**.

Coding:

- DeepSWE v1.1: **73.7%** vendor (llm-stats, mini-swe-agent harness, high thinking; rank 14th) / **74% ±1%** independent (kingy, Oct-8 public leaderboard, high effort, $2.36 avg run cost, 143K output tokens, 166 steps). Not like-for-like vs 3.7 medium's 65% ±3%.
- SWE-Bench Pro: **61.6%** (developer guide, vs 3.7's 60.4%).
- SWE-Atlas: **51.9%** (developer guide, vs 3.7's 48.0%).
- Terminal-Bench 4.0 (agentic coding): **19.1%** (rank 30th) — the realistic agentic-coding/terminal measure, far below the inflated TB2.1 89.4%.
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**.

Long context:

- **No MRCR / RULER retrieval figure published.** 1M window confirmed by the developer guide + llm-stats, but no retrieval-at-length measurement exists for this ID.

Multimodal:

- CharXiv-R (chart reasoning, no tools): **86.2%** (developer guide + llm-stats, self-computed; rank 18th).
- LVBench (video, static 1024 frames, no tools): **87.1%** (llm-stats; rank **2nd**).
- GDP.pdf (PDF understanding, all-pass, no tools): **35.0%** (rank 2nd).

### Normalized scores (1–100)

> Derived from the raw numbers above per `model-comparison.md`. Tool use and Coding deliberately lean on the realistic Terminal-Bench 4.0 (19.1%, 30th) and independent DeepSWE (74%), NOT the harness-inflated TB2.1 (89.4%, 4th). Overall = half-up mean of the five quality dims (Cost excluded).

- **Tool use: 80/100.** GDPval-AA **1545** Elo (rank 8th, below the 1750 top band), OSWorld 2.0 **59.0%** (11th), τ³-Banking **38.1%** (below the ~50% anchor). Capped well below 90 because the realistic Terminal-Bench **4.0 is 19.1% (30th)** — the TB2.1 89.4% is harness-inflated and not representative of real agentic-terminal capability.
- **Reasoning: 88/100.** AA Intelligence Index **59** (top 10, just under the 60+ band) and HLE **45.4%** (dev guide) / **54.9%** (verified set), both above the 40% anchor. Held at 88 because Index 59 < 60, GPQA Diamond is unpublished, and HLE varies by set (45.4% vs 54.9%, and slightly below 3.7 on the dev-guide config).
- **Context window: 95/100.** 1M-token window (≥1M tier = 95–100). Not 100 because no MRCR/RULER retrieval-at-512K+ measurement is published for this ID.
- **Multimodal: 90/100.** Text/image/audio/video/PDF in → text out, with strong video (LVBench **87.1%**, 2nd), chart (CharXiv-R **86.2%**) and PDF (GDP.pdf 2nd) understanding. Top of the +video/PDF/audio-in band; capped at 90 (not 95+) because output is text-only — no native image/audio generation and no Live API.
- **Coding: 84/100.** Independent DeepSWE v1.1 **74%** (14th, meets the ≥74 anchor) shows real coding ability, but SWE-Bench Pro **61.6%**, SWE-Atlas **51.9%** and the realistic Terminal-Bench **4.0 19.1% (30th)** cap it below the 90 band. The vendor TB2.1 89.4% is not used.
- **Cost efficiency: 87/100.** Intro **$0.75/$3.75** is the cheapest per-token headline in this batch (below the $1.25/$4.25≈88 anchor), with $0.075 cached and half-price Batch/Flex; absolute cost/task is low ($0.58 per index task, $2.36 per DeepSWE run). Tempered marginally by the **2027-01-01 doubling to $1.50/$7.50** and the ~40% higher cost/task vs 3.7 Flash ($0.58 vs $0.40, ~48K output tokens/task).
- **Overall Score: 87.4/100.** Half-up mean of the five quality dims (80 + 88 + 95 + 90 + 84) / 5 = 437 / 5 = **87.4**. Best fit: high-volume, cost-sensitive multimodal and long-document work plus benchmark-style coding (DeepSWE) at Medium/High thinking — but NOT heavy real-world agentic terminal automation, where TB4 exposes a sharp weakness.

### Conflicting-results notes

1. **Terminal-Bench version inflation (the central conflict).** TB2.1 **89.4%** (Terminus-2 harness, rank 4th) / 90.8% (Google Enterprise config) / 87.6% (flowtivity) versus TB4.0 **19.1%** (public leaderboard, rank 30th) / 19.7% (askclash). flowtivity frames this as "TB4 exposes inflated AI scores" (87.6%→19.7%); kingy frames TB4 as merely "rising" vs 3.7's 11.2%. Both agree the absolute TB4 score is ~19% and far below frontier (GPT-6 Astra 59.6%, Fable 5.1 55.1%, Opus 5 51.8%). Tool/Coding scored on the realistic TB4 + independent DeepSWE, not the inflated TB2.1.
2. **HLE set/config variance.** Developer guide HLE **45.4%** (3.8 slightly *below* 3.7's 45.7%) vs llm-stats **HLE-Verified 54.9%** (full 1,811-item verified set, self-computed). Different benchmark sets/configurations; both reported, neither treated as a contradiction.
3. **DeepSWE vendor vs independent + effort mismatch.** Google reports 73.7%; the independent Oct-8 leaderboard shows 74% ±1% at *high* effort vs 3.7's 65% ±3% at *medium* — not like-for-like (kingy's cost-per-pass proxy ≈ $3.19 vs $3.12 once effort is normalized).
4. **Cost: smarter but token-heavier than 3.7.** AA cost/task **$0.58 (3.8) vs $0.40 (3.7)** (~40% higher), ~48K output tokens/index task, 305 tokens/sec, 2.5 vs 2.2 min/task. The developer guide explicitly "suggests 3.7 Flash if compute efficiency matters." Headline per-token price is still very cheap; the intro rate doubles on 2027-01-01.
5. **Zen output-price rounding.** mastra.ai lists `opencode/gemini-3.8-flash` at $0.75/$4; Google native output is $3.75 (llmgateway, Model Garden). The $4 is a Zen route rounding/markup; the $3.75 native figure is used for scoring.
6. **Cyber variant is out of scope.** Gemini 3.8 Flash Cyber (pass@1 47.2% on a cyber benchmark; Wiz +7.5–9.7% recall at 2.3–5.2× lower cost) is a separate `-cyber` model routed to `models_cybersecurity/`, not scored here.
7. **GPQA / MRCR / SWE-bench Verified not published.** No values invented; long-context scored on the confirmed 1M window only.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: Public internet research — four successful independent web searches plus primary/independent source verification (Google Cloud developer-guide specs + benchmark table, kingy.ai independent AA review, llm-stats benchmark aggregator, Artificial Analysis launch tweet, flowtivity/askclash TB4 analyses, OpenCode Zen route via mastra/models.dev). The official blog.google announcement body returned truncated (CSS only), so release/pricing were corroborated via the developer guide, llm-stats and Model Garden pricing. Scores are normalized 1–100 interpretations, not official vendor scores; the Terminal-Bench version conflict is resolved toward the realistic TB4 figure.
- Reference URLs:
  - [Developer's guide to Gemini 3.8 Flash (Google Cloud, official specs + benchmark table)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash)
  - [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber (Google official announcement)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
  - [Agent Platform / Model Garden Pricing (Google Cloud — $0.75/$3.75 intro)](https://cloud.google.com/model-garden/pricing)
  - [Gemini 3.8 Flash Review: Benchmarks, Specs, Pricing (kingy.ai — independent AA Index 59, cost/task, DeepSWE)](https://kingy.ai/blog/gemini-3-8-flash-review-benchmarks-specs-pricing/)
  - [Gemini 3.8 Flash Benchmarks, Pricing & Context Window (llm-stats aggregator)](https://llm-stats.com/models/gemini-3.8-flash)
  - [Terminal-Bench 4.0 Exposes Inflated AI Scores: Gemini 3.8 Flash (flowtivity.ai)](https://flowtivity.ai/blog/terminal-bench-4-score-crash/)
  - [Gemini 3.8 Flash benchmarks (AskClash LLM Leaderboard — TB4 19.7, overall #17)](https://askclash.ai/ai-leaderboard/gemini-3-8-flash)
  - [Artificial Analysis launch tweet — Gemini 3.8 Flash scores 59 on the Intelligence Index](https://x.com/ArtificialAnlys/status/2095177419489739063)
  - [OpenCode Models: IDs, Pricing & Usage (mastra.ai — opencode/gemini-3.8-flash)](https://mastra.ai/models/providers/opencode)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.