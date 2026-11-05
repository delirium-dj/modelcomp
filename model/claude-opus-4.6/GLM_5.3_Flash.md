# Claude Opus 4.6 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09, 2026-10-16): official docs now state
> **Status: Active (legacy), migrate to Claude Opus 5.5** (retirement floor 2027-02-05),
> knowledge cutoff filled (**May 2025**), fast mode removed 2026-06-29, and a **text-watermark
> retrofit lands 2026-11-16** (sampling-default loophole documented). New Vals/LiveBench
> measurements and AA effort-split rows (Index 31.9 max vs 26.4 non-reasoning) added;
> all dimensions hold; Overall stays 90 (90.2).

## Model card

- **Name:** Claude Opus 4.6 (legacy flagship — superseded by Opus 4.7/4.8, Opus 5/5.5 and Fable 5/5.1)
- **Short description:** Anthropic's early-2026 Opus-class flagship for coding and long-running professional/agentic tasks, released 2026-02-05. First Opus-class 1M-token context (beta at launch, GA 2026-03-13); SOTA on TB2.0, HLE, GDPval-AA and BrowseComp at release. Now an **Active (legacy)** model — Anthropic's docs point migrations to Opus 5.5, which is both newer and cheaper ($4/$20 vs $5/$25).
- **Provider / access:** Anthropic — Messages API, ID `claude-opus-4-6`; Amazon Bedrock (InvokeModel), Claude Models on Google Cloud (both managed flavors), Microsoft Foundry, Claude Platform on AWS, OpenRouter (`anthropic/claude-opus-4.6`). Messages (not Chat Completions) API. **No Free ID anywhere.**
- **Release / knowledge:** released 2026-02-04/05; knowledge cutoff **May 2025** (official comparison table — filled this pass; the last Opus whose world knowledge stops in 2025).
- **Context window:** 1,000,000 tokens GA with flat standard pricing (no long-context premium; a 900K request bills like a 9K one), full rate limits at every length; max output 128K; up to 600 images or PDF pages per request.
- **Modalities:** text + image in, text out; PDF input; tool calls (native + programmatic); adaptive thinking (extended `budget_tokens` mode **deprecated** on this generation; effort high default); context compaction; structured output/JSON. No audio/video I/O. Prefill not supported; `temperature`/`top_p`/`top_k` non-default values are rejected on successor models (still accepted here — and they dodge the watermark, see below).
- **Pricing (as of 2026-11-05, official docs):** $5.00 in / $25.00 out per 1M; 5m cache write $6.25, 1h write $10, **cache read $0.50** (90% off); Batch 50% off ($2.50/$12.50); `inference_geo` US-only routing at 1.1x. **Fast mode removed 2026-06-29** (requests silently run at standard speed/rates). Successor Opus 5.5 undercuts it on both axes.
- **Compliance (NEW):** Anthropic's **text watermark** retrofit reaches Opus 4.6 on **2026-11-16** (delayed from Nov 3; Bedrock a few days later). On 4.6 the watermark only applies when `temperature`/`top_p`/`top_k` are left at defaults — a documented loophole Anthropic itself warns about for compliance-reliant users.
- **Architecture:** proprietary, closed weights, parameters undisclosed; effort/adaptive-thinking variants (AA benchmarks reasoning and non-reasoning modes separately).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** — best at release (system card; Opus 4.5 59.8%)
- Terminal-Bench Hard: **48.5%** (benchgap measured); Terminal-Bench 2.1 (Vals): 60.1% (estimate — excluded)
- Tau2-bench: **84.8%** (AA); τ² Retail **91.9%** / Telecom **99.3%** (Anthropic) / AA Telecom 92.1%; best-of-suite τ² **92.1%** (#44/321 per Sophon)
- OSWorld-Verified: **72.7%** (system card, #5/13 per Shawn Hack)
- BrowseComp: **83.7–84.0%** (86.8% multi-agent harness, compaction to 10M total tokens)
- GDPval-AA: **1606 Elo** (launch; +144 over GPT-5.2, +190 over Opus 4.5)
- AutomationBench: **56.1%** (Sophon — NEW, strong); InfraResolutionBench **84.9%**; Claw-Eval **70.4%**; CyberGym 66.6%; DeepSearchQA 73.7%; Gert Labs 61.85%; ResearchClawBench 19.9%; JobBench 36.7%; ApprenticeBench 5%
- AndroidWorld: **62.0%**; SWE-bench Multilingual: **72%** (NEW)
- MCP Atlas: 61.8% max-effort (benchgap estimate) / 62.7% at high effort per launch footnote (regression vs 4.5 flagged in prior pass)

Reasoning / knowledge:

- GPQA: **91.3%** (system card) / GPQA-D **89.2%** (Arcee) / **89.6%** (Vals, #47/159 — NEW) / AA-GPQA-D **84.0%**
- HLE: **53% with tools** (system card, corrected 2026-02-23 for 3 flagged cheats) / **40.0%** without (Muse chart) / AA-HLE **19.1%** (standard set)
- ARC-AGI-2: **68.8%** (max effort, 120K budget; ModelPicker reads 69.2) — ~2x Opus 4.5
- LiveBench (NEW): Overall **78.8**, Reasoning **88.7**, Math **89.3**, Language 83.3, Data Analysis 69.9, IF 63.3
- FrontierMath v2: Tiers 1–3 **66.0%** / Tier 4 **26.8%** (Epoch re-scored); AIME25 **99.8%** (Arcee) / 94.4% (ModelPicker)
- Artificial Analysis Intelligence Index effort split (NEW): **31.9 max** vs **26.4 non-reasoning-high** — the prior 26.4 was the non-reasoning reading; AA page deprecated/historical
- AA-LCR: **67.0%** (BenchLM) vs **78%** (max effort, Sophon) — effort split, both cited; CritPt **2.8%** / **12.6% max**; IFBench **44.6%** / **53.1% max**
- MMLU-Pro: **82%** (Qwen) / **89.1%** (Arcee) / **89.1%** (Vals #5/73); SuperGPQA 95%; MMMLU 91.1%; MMLU 91%; MATH 93%; HumanEval 95%
- MMMU Pro: **73.9%** / **77.3%** with tools; AA-MMMU-Pro 72.5% / 75.4% max; MedXpertQA Text 52.1% / MM 64.8%; HealthBench Hard 14.8%; ERQA 51.6%; ScreenSpot Pro 83.1%
- AA-Omniscience hallucination rate **80.1%** / accuracy 45.8% / index 2.4; AA hallucination-rate row 61.3% (#47/109)

Coding:

- SWE-bench Verified: **80.8%** (25-trial average; 81.42% prompt-modified) — **Vals independent: 78.2%** (#19/78, NEW); Arcee table 75.6%
- SWE-bench Pro: **53.4%**; LiveCodeBench Pro: **70.7%**; LiveCodeBench (Vals): **84.7%** (#11/47 — NEW); SWE-Rebench 65.3%; React Native Evals 84.1%; Vibe Code Bench 57.57% (Vals v1.1); FrontierCode 1.1 Main 26.9%; SWE-Multi/SciCode/DeepSWE: no verified public score found
- Arena Elo: **1503-1504** (#7-9/151 — NEW)
- Successor context: Fable 5 SWE-V 95.0%, Opus 4.8 88.1% — two-plus generations ahead by now

Long context:

- 1M GA flat pricing (2026-03-13); AA-LCR **67.0–78.0%** (effort split); MRCRv2 **93** (Sophon row — conflicts with benchgap's 58.0 estimate; measured Sophon value cited); no RULER/GraphWalks for 4.6 specifically

### Normalized scores (1–100)

- **Tool use: 94/100.** Unchanged — the new AutomationBench 56.1%, TB-Hard 48.5%, SWE-Multilingual 72% and InfraResolution 84.9% rows reinforce the release story (τ² 92.1% best-of-suite, OSWorld #5/13, BrowseComp 83.7–86.8%); capped by MCP-Atlas regression and ApprenticeBench 5%.
- **Reasoning: 89/100.** Unchanged — LiveBench Reasoning 88.7/Math 89.3 and the max-effort AA readings (Index 31.9, CritPt 12.6, LCR 78) lift the evidence base while the non-reasoning rows (Index 26.4, AA-HLE 19.1, CritPt 2.8) explain the effort sensitivity; GPQA 89.2–91.3% and ARC-AGI-2 68.8% hold the band.
- **Context window: 96/100.** Unchanged — 1M GA flat pricing with the MRCRv2 93 (Sophon) and AA-LCR 67–78% rows evidencing usable depth; successor models have since matched the window.
- **Multimodal: 85/100.** Unchanged — text+image+PDF (600 pages) in, text out; MMMU Pro 73.9/77.3 with AA 72.5/75.4 corroboration; ScreenSpot Pro 83.1%; no audio/video.
- **Coding: 87/100.** Unchanged — SWE-V 80.8% (25-trial) with the new independent Vals 78.2% corroboration, LCB Pro 70.7%, LiveBench Coding 78.2%, SWE-Multilingual 72%; capped by SWE-Pro 53.4%, FrontierCode 26.9% and successors resetting the bar (Fable 5 95.0, Opus 4.8 88.1).
- **Cost efficiency: 20/100.** Unchanged — $5/$25 flagship pricing, no free route, ~10–25x the repo's paid open tiers; cache read $0.50 and Batch $2.50/$12.50 are the only relief; successor Opus 5.5 is strictly cheaper AND newer, so the legacy premium buys nothing.
- **Overall Score: 90/100.** (94 + 89 + 96 + 85 + 87) / 5 = 451/5 = 90.2 → 90 (unchanged). Best fit: a pinned-integration legacy model — still an excellent agent/knowledge-work platform of its generation with 1M flat-priced context, but Opus 5.5 (same family, cheaper, fresher knowledge) is the rational default and the Nov 16 watermark retrofit adds a compliance variable for sampling-default users.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: official platform docs (overview, pricing, release notes) + endoflife.date + claudiai lifecycle checks, the-decoder watermark coverage (Nov 4), Vals/TPS/Sophon/LiveBench/ModelPicker/Shawn Hack measurement rows, benchlm + benchgap measured-vs-estimated screen); effort-split rows documented separately rather than averaged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Opus_4.7.md`, using the same headings.
