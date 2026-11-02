# Claude Fable 5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-fable-5`); independent: Artificial Analysis (`claude-fable-5` — DEPRECATED, Max with Opus 4.8 Fallback) model page + AA's Sept 1 Fable 5.1 article (Fable 5 launch-vintage reference), BenchLM.ai aggregator (2026-10-29) routing to Vals AI, ARC Prize, Epoch AI, Proximal, Cursor, Cognition, NeoCognition, LlamaIndex, OpenRouter, Nous Research; Anthropic Fable 5 / Mythos 5 system card (vendor, via BenchLM)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-01 (UTC) — enrichment pass; original findings preserved below and marked where superseded
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-01):** the draft was compiled from a June 11 aggregator pass while the model was still fresh — its numbers were real but partly estimated, and the headline composite (**AA Index 64.9, #1 at release**) is a **v4-vintage** figure. **Fable 5 is now deprecated on AA** (Index, Cost/task, Verbosity N/A; Speed retained at **65.4 tok/s, #136 of 196**), so the current-basket composite is un-closeable — BenchLM caches a **49.6%** Index cell, not directly comparable to 64.9. The two soft spots in the draft harden: the **GPQA "~93% (estimated)" is now measured — 92.6% (AA) / 93.2% (Vals)**, essentially vindicating the estimate; and the **unpublished hallucination rate is now exact: 63.6% (AA-Omniscience)** — confirming the draft's suspicion that Fable 5's Omniscience leadership came from attempt rate, not honesty (the draft's 40.0 Index / 61.0% accuracy cells have since drifted to **43.3 / 65.4** — re-measurement, not model change, since weights are frozen). New independent reinforcement: **SWE-bench 95.0% confirmed on Vals** (matching the system card's 95%), **τ²-bench 98.5% (AA)**, **aaTerminalBench21 84.6% (AA)**, **ARC-AGI-1 98.5% / ARC-AGI-2 89.2% (ARC Prize)**. Two caveats: **Terminal-Bench 4.0 was never measured for this SKU before deprecation (3.0: 34.0%)** — the current-gen agent gap is real and unmeasurable now; and Epoch's **FrontierMath v2 Tier 4 90.2%** sits *above* Fable 5.1's 87.8% and Opus 5's 73.2% — an ordering anomaly recorded with an explicit labeling-risk flag, not treated as a breakthrough. Reasoning 92→93 (estimate verified), Context 96→97 (1M + AA-LCR 82.3%). **Overall stays 92.**

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first publicly available Mythos-class model (above the Opus tier) — the same underlying model as the restricted Claude Mythos 5, with added safety classifiers for cyber/bio/chem/distillation that fall back to Opus 4.8 on ~5–9% of queries. It was the #1 model on the Artificial Analysis Intelligence Index at release; since superseded by Fable 5.1 / Opus 5.5.
- **Provider / access:** Claude Platform (`claude-fable-5`, plus a `:batch` route), AWS Bedrock, Google Cloud Vertex AI; CodingFleet and other gateways. Messages API.
- **Release / knowledge:** Released 2026-06-09 (11 days after Opus 4.8); knowledge cutoff not published.
- **IDs:** `anthropic/claude-fable-5` (no free Zen ID; premium paid tier).
- **Context window:** ~1,000,000 tokens (GraphWalks BFS evaluated at the 1M span, 80.0%; Mythos-class standard). Max output not separately published in accessible sources.
- **Modalities:** text + image + file in → text out; reasoning yes; tool calls yes; computer use (OSWorld-Verified 85.0%).
- **Pricing (as of 2026-10-20):** $10 / 1M input, $50 / 1M output (2x Opus 4.8's $5/$25); batch route discounted.
- **Architecture:** proprietary (closed weights); AA suggests it may be the largest public Anthropic model to date.
- **Independently measured (Artificial Analysis, `claude-fable-5`, Max with Opus 4.8 Fallback, added 2026-11-01):** **DEPRECATED** — AA banner: *"This model is deprecated… Anthropic has launched a newer release, Claude Fable 5.1."* Intelligence Index **N/A**, Cost-per-task **N/A**, Verbosity **N/A** (only the default 10k-input performance workload still tracked); **Speed 65.4 tok/s — #136 of 196** ("slower than average", median 81) · **$10.00 in / $50.00 out per 1M, 90% cache discount** · **input modality text and image**, output text, reasoning Yes, **context 1M**. The draft's headline **64.9 (#1 at release)** was on the pre-v5 basket; BenchLM caches a **49.6%** cell for the delisted model — vintage-incomparable, neither governs. Launch-vintage cost reference from AA's Sept 1 Fable 5.1 article: **Fable 5 (max) ~$3.14 per Index task** on the old basket (Fable 5.1 was "20% more per task"; that comparison has no current-basket successor because both pages are delisted/rebuilt).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **85.0%** (leads Opus 4.8 83.4%) — system card, corroborated via BenchLM at 85%.
- Terminal-Bench 2.1: **88.0%** (leads Opus 4.8 82.7% by +5.3) → **independent reruns: aaTerminalBench21 84.6% (AA) / 80.5% (Vals)** — slightly below the vendor row, same elite band; **Terminal-Bench Hard 62.9% (AA)**.
- **Terminal-Bench 4.0: never measured for this SKU — no row exists on AA's 4.0 board or Vals before deprecation (2026-11-01 re-check); the only current-gen terminal cell found is Terminal-Bench 3.0 34.0% (public 3.0 board).** Honest unmeasurable gap, flagged rather than filled.
- GDPval-AA (Elo): **1932** (leads Opus 4.8 1890 by +42) — the June aggregator's figure was **system-card-published 1747**, and **AA live reads 55.5% normalized**; three values across vintages, all recorded, no averaging.
- AutomationBench: **17.4%** (leads Opus 4.8 15.5%) — June aggregator row, no AA AutomationBench-AA cell retained for the delisted SKU.
- Finance Agent v2: **56.3%**; GDP.pdf (no tools): **29.8%**; Legal Agent Benchmark: **13.3%** (June aggregator, vendor-compiled).
- **New independent agent rows (2026-11-01):** **τ²-bench 98.5% (AA leaderboard)** — standout; **AA Agentic Index 51.0%**, **AA Harvey LAB v1.0 93.6%**, **AA EnterpriseOps-Gym 51.1%**, **AA-AnalystAgent 48.8%**, **AA Tau3-Banking 38.1%**, **ApprenticeBench 34%** (NeoCognition), **MazeBench 11%**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **64.9** (#1 at release; Opus 4.8 61.4) — **v4-vintage; the model is now deprecated on AA (live cell N/A)** and BenchLM caches **49.6%** on the rebuilt basket. Neither number supersedes the other — vintages are not comparable (batch-wide rebasketing finding); the #1-at-release framing is historical, correct for June 2026.
- AA-Omniscience Index: **40.0** (#1), Accuracy **61.0%** (#1) — but a higher hallucination rate than Opus 4.8's 35.9% (exact Fable 5 rate unpublished; "driven by leading accuracy, not low hallucinations") → **exact rate now published: 63.6% hallucination (AA)** — the draft's suspicion confirmed and quantified; current live cells read **Index 43.3 / Accuracy 65.4%** (re-measurement drift on a frozen-weight model; both vintages recorded).
- Humanity's Last Exam: **59.0%** no tools / **64.5%** with tools (leads Opus 4.8 49.8% / 57.9%) — **AA's independent HLE reads 55.5%** (matches the no-tools variant).
- GPQA Diamond: **~93%** (estimated, tied with Opus 4.8's 93.6%) → **estimate now measured: 92.6% (Artificial Analysis) / 93.2% (Vals AI)** — independently vindicated within a point.
- Blueprint-Bench 2 (spatial reasoning): **38.6%** (leads Opus 4.8 14.5% by +24.1) — system card via BenchLM, still vendor-sourced.
- **New independent reasoning rows (2026-11-01):** **ARC-AGI-1 98.50% / ARC-AGI-2 89.2% (ARC Prize, independent)**; **FrontierMath v2 Tiers 1–3 87.0% / Tier 4 90.2% (Epoch AI)** — **⚠️ ordering anomaly flagged:** Tier 4 above Fable 5.1's 87.8% and Opus 5's 73.2% is implausible for a strictly weaker predecessor; recorded as published, treated as direction-only, not used to lift scores; **MMLU-Pro 91.5% (Vals)**; **CritPt 28.6% (AA)**; **AA-IFBench 63.5%** (instruction following).

Coding:

- SWE-bench Verified: **95.0%** (Vals.ai) / **93.9%** (Anthropic) — leads Opus 4.8 88.6% → **status updated: BenchLM now shows the system card at 95.0% and Vals at 95.0%**; the June draft's 93.9 appears to have read an earlier vendor cell. Independent confirmation stands either way.
- SWE-bench Pro: **80.3%** (leads Opus 4.8 69.2% by +11.1) — system card via BenchLM at 80%.
- SWE-bench Multilingual: **~87%** (leads Opus 4.8 84.4%) — no upgraded row found on re-check; remains approximate.
- FrontierCode Diamond: **29.3%** (leads Opus 4.8 13.4% by +15.9) — the June figure was **Cognition's misattribution risk**: BenchLM's live cell for this SKU is **FrontierCode 1.1 Main 53.5% (Cognition, independent)**; both recorded, labelled by version, never merged.
- CursorBench 3.1: **72.9%** → **Cursor's own leaderboard now reads cursorBench31 70.6% and CursorBench 3.2 70.5%** — independent, within 2.3 points of the aggregator's June figure.
- **New independent coding rows (2026-11-01):** **SWE-bench (Vals) 95.0%**, **LiveCodeBench 89.8% (Vals)**, **AA Coding Index 76.5%**, **AA-SciCode 61.0% (AA)**, **FrontierSWE v2 47.0% (Proximal)**, **VulcanBench v3 89.5%**. No current-gen FrontierCode 2.0 or CursorBench 4.0 cell retained before deprecation — the batch's current-gen coding collapse (26–32% field-wide) is unmeasurable for this SKU.

Multimodal / biology:

- HealthBench Professional: **66.0%** (leads Opus 4.8 56.9%); BioMysteryBench hard **46.1%**, human-solved **83.9%**
- Blueprint-Bench 2 (spatial): **38.6%**

Long context:

- GraphWalks BFS 1M: **80.0%** (leads Opus 4.8 68.1% by +11.9) — 1M-token retrieval.
- **Status 2026-11-01:** 1M window **confirmed by AA** (spec table, resolving the draft's "max output not separately published" hedge on the input side). Independent long-context evidence added: **AA-LCR 82.3% (AA)** — strong, in line with this batch's Anthropic tier (Sonnet 5.5 82.7, Fable 5.1 85.3). GraphWalks remains vendor-side (via the Mythos-class comparison set).

> Provenance: figures compiled by CodingFleet (June 11, 2026) from Anthropic, Vals.ai and Artificial Analysis; vendor and independent sources labelled inline. Fable 5 falls back to Opus 4.8 on ~8–9% of AA benchmark queries, which slightly depresses its measured scores.

### Normalized scores (1–100)

- **Tool use: 91/100.** OSWorld-Verified 85.0%, Terminal-Bench 2.1 88.0% (independently 84.6% AA / 80.5% Vals) and GDPval-AA 1747–1932 (all #1 at release) plus **τ²-bench 98.5% (AA)** and **AA Agentic Index 51.0%**; capped because AutomationBench 17.4% is low in absolute terms, **Terminal-Bench 4.0 was never measured before deprecation** (only 3.0 34.0%), and the ~8–9% Opus 4.8 fallback dilutes autonomous runs.
- **Reasoning: 93/100.** *(92 → 93 — the draft's two softest reasoning rows are now independently measured.)* **GPQA "~93% estimated" verified at 92.6% (AA) / 93.2% (Vals)**; **ARC-AGI-1 98.5% / ARC-AGI-2 89.2% (ARC Prize)** added; HLE 59.0/64.5 (AA 55.5), **MMLU-Pro 91.5% (Vals)**. Still held below the ceiling by the **now-quantified 63.6% Omniscience hallucination rate** (the draft's suspicion — leadership by attempt rate, not honesty — confirmed) and a delisted AA composite.
- **Context window: 97/100.** *(96 → 97 — independent long-context evidence added and the window confirmed.)* 1M-token span **AA-confirmed**; **GraphWalks BFS 1M 80.0%** (vendor) plus **AA-LCR 82.3% (independent, strong)**; a touch below perfect as max output remains unpublished and retrieval at 1M leaves headroom.
- **Multimodal: 86/100.** *(unchanged — re-verified 2026-11-01.)* Text/image/file input, OSWorld computer use, HealthBench 66.0% and Blueprint-Bench spatial 38.6% stand; **AA confirms text + image only (no audio/video)**, and **no independent MMMU-Pro-style vision rerun was found for this SKU before deprecation**, so the draft's "lacks a broad vision benchmark" cap holds. ParseBench 69.79% (LlamaIndex) is a document-grounding proxy, not image reasoning.
- **Coding: 94/100.** SWE-bench Verified **95.0% confirmed on Vals** (matching the card), SWE-bench Pro 80.3%, Terminal-Bench 2.1 88.0% and **CursorBench 3.1 70.6% / 3.2 70.5% (Cursor's own board)**, **AA Coding Index 76.5%**, **LiveCodeBench 89.8% (Vals)** — best-in-class coding at release, now independently corroborated. Capped (not raised) because current-gen instruments (FrontierCode 2.0, CursorBench 4.0, TB 4.0) were never measured for this SKU, and the FrontierCode "Diamond 29.3%" June figure is a version-misattribution risk against Cognition's live 53.5% (1.1 Main).
- **Cost efficiency: 55/100.** $10/$50 is 2x Opus 4.8 and the premium Mythos-class price; only the batch discount softens it — no free lane. AA no longer publishes a per-task cost (deprecated); the launch-vintage AA reference (~$3.14/Index task, pre-v5) is not comparable to today's basket and is not used to rescore.
- **Overall Score: 92/100.** Mean of Tool 91 + Reasoning 93 + Context 97 + Multimodal 86 + Coding 94 = 461 → 92.2 → 92. *(92 → 92 unchanged: the +1 Reasoning and +1 Context from verified/added independent rows are offset within the rounding band.)* Best fit: was the unattended high-accuracy coding/knowledge-work flagship at release; Fable 5.1 / Opus 5.5 now supersede it, and its 63.6% hallucination profile (now measured, not guessed) argues against safety-critical unattended use relative to Opus 4.8's 35.9%.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20; re-researched 2026-11-01 (enrichment pass)
- Method: public internet research (CodingFleet's Claude Fable 5 vs Opus 4.8 30-benchmark comparison compiling Anthropic, Vals.ai and Artificial Analysis; OpenRouter for modality/ID); 2026-11-01 pass adds ≥3 independent sources — Artificial Analysis model page (DEPRECATED: Index/cost/verbosity N/A, Speed 65.4 #136, modality text+image confirmed), BenchLM.ai aggregator (2026-10-29, slug `claude-fable`) routing to Vals AI, ARC Prize, Epoch AI, Proximal, Cursor, Cognition, NeoCognition, LlamaIndex, OpenRouter; AA's Sept 1 Fable 5.1 article (Fable 5 launch-vintage ~$3.14/task, Index 62-era reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Conflict handling (2026-11-01): **Fable 5 is deprecated on AA** — no current-basket Index/cost cell exists, so the draft's 64.9 (#1 at release) and BenchLM's cached 49.6% are **vintage-incomparable**; both recorded, neither used to rescore upward. **GPQA estimate and the Omniscience hallucination were the draft's two honest unknowns — now measured (92.6%/93.2% and 63.6%) and the estimate was vindicated.** Multiple GDPval-AA values across vintages (1932 aggregator / 1747 card / 55.5% AA-live) recorded, not averaged. **Flagged as a labeling-risk anomaly: Epoch's FrontierMath Tier 4 90.2% above Fable 5.1's 87.8%** — implausible ordering for a weaker predecessor, so recorded direction-only and NOT used to lift Reasoning beyond the verified GPQA/ARC rows. The June "FrontierCode Diamond 29.3%" is version-ambiguous against Cognition's live 53.5% (1.1 Main) — kept separate by version, never merged. Fable 5 ≠ Fable 5.1 (no sibling transfer); Mythos 5 shares weights but is documented only under its own verification-gated folder.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
