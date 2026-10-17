# Claude Opus 4.7 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April 2026 flagship Opus (proprietary, closed weights), a focused upgrade over Opus 4.6 for hard software engineering, multi-tool agents, computer use and high-resolution vision; superseded by Opus 4.8/5 and now cataloged as "Active (legacy)".
- **Provider / access:** Anthropic Claude API (Messages API), model ID `claude-opus-4-7`; Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; OpenRouter `anthropic/claude-opus-4-7` (Chat Completions; EU route $5.50/$27.50 via Bedrock/Vertex). Artificial Analysis tracks 4 API providers. Availability on OpenCode Zen not checked this pass — no Free ID claimed.
- **Release / knowledge:** 2026-04-16 (official docs + launch post); reliable-knowledge cutoff Jan 2026. Status: Active (legacy); Anthropic recommends considering Opus 5; retirement "not sooner than 2027-04-16" (official model page + Tabbit catalog snapshot 2026-09-20).
- **IDs:** `claude-opus-4-7` (Anthropic), `anthropic/claude-opus-4.7` (OpenRouter).
- **Context window:** 1,000,000 input tokens at standard pricing (official pricing docs: Claude 4.6+ include the full 1M window at flat per-token rates); max output 128,000. Conflict: llm-stats shows DeepInfra claiming 1M in / 1M out — unverified against official docs. New tokenizer: ~555K words per 1M tokens vs ~750K on the prior tokenizer (official tokenizer docs), i.e. same text ≈1.35× more tokens at the upper bound.
- **Modalities:** text + images in (up to 2,576 px long edge, ~3.75 MP — 3× prior Claude), PDF via API document blocks, text out; adaptive thinking (default effort `high`, new `xhigh` tier; Claude Code defaults to xhigh); tool calls yes; JSON mode not verified; no audio/video.
- **Pricing (as of 2026-10-16):** official first-party **$5 / $25** per 1M in/out; 5-min cache write $6.25, 1-h $10, cache hit $0.50 (0.1×); Batch API $2.50 / $12.50 (50% off); web search $10/1k searches. OpenRouter EU $5.50 / $27.50. Effective-cost caveat: pricing FAQ states the new tokenizer produces "approximately 30% more tokens for the same text" (Claude 4.7+), so per-task spend can exceed Opus 4.6 at identical list price (Vellum: 1.0–1.35×; Wunner: effectively pricier).
- **Architecture:** proprietary (parameters/training compute undisclosed — Epoch lists all training metadata as unknown).

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **77.3%** (official system card via Vellum/Artificial Analysis/Tabbit — leads 4.6 75.8, GPT-5.4 68.1, Gemini 3.1 Pro 73.9); grading-version conflict: Anthropic revised MCP-Atlas grading after launch (Wunner cites an earlier 4.6 figure of 62.7 under the old scheme).
- OSWorld-Verified: **78.0%** (official; vs 4.6 72.7, GPT-5.4 75.0, Mythos Preview 79.6)
- Terminal-Bench 2.0: **69.4%** (official system card; Anthropic footnote: Terminus-2 harness with thinking disabled) / **68.54%** (Vals AI independent rerun, Terminus-2 — within noise of official; Vals board: GPT-5.5 73.2, Opus 4.8 70.04, Gemini 3.1 Pro 67.42) / **no entry on the official tbench.ai leaderboard** (only Opus 4.6 rows exist: Terminus-2 62.9%, Claude Code 58.0%, third-party best 76.4% Meta-Harness) / 82.7% comparator for GPT-5.5 on the same benchmark (Tech Talk News cross-check). LLMLearner classifies 69.4 as provider-reported, not independent.
- Finance Agent v1.1: **64.4%** (official; vs 4.6 60.1, GPT-5.4 Pro 61.5, Gemini 59.7) — conflict: The Model Index reports Finance Agent **v2** 52% (different task version, not comparable)
- GDPval-AA: **1753 Elo, #1 at launch** (+79 over Opus 4.6) (Artificial Analysis article, 2026-04-16)
- BrowseComp: **79.3%** (official — regression from 4.6's 83.7; GPT-5.4 Pro 89.3, Mythos 86.9, Gemini 85.9)
- τ²-Bench / Toolathon / Claw-Eval: no verified public score found (AA launch notes report only a τ² delta of −3.5 vs 4.6)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (official; vs 4.6 91.3, Gemini 94.3, GPT-5.4 Pro 94.4, Mythos 94.6) / **90%** (Epoch AI via The Model Index) — harness conflict, official favored with the 94.2 cited
- HLE: **46.9%** no-tools / **54.7%** with tools (official; 4.6: 40.0/53.3) / **36%** (Epoch via The Model Index) — conflict
- Artificial Analysis Intelligence Index: **57.3, tied #1 at launch** (vs Gemini 3.1 Pro 57.2, GPT-5.4 56.8) → **41 (estimated), #53/217** current on the recalibrated v4.3.2 index (AA model page, now deprecated) — methodology-recalibration conflict; launch-era AA v4.0 also shows GPT-5.5 at 60 vs Opus 4.7 at 57 (Tech Talk News)
- AA-Omniscience: **#2 at launch** (non-hallucination rank, AA article; absolute values not re-verified this pass)
- FrontierMath Tiers 1-3 (v2): **70%** / Tier 4: **32%** (Epoch AI; Model Index independently lists 70)
- MMMLU: **91.5%** (official; Gemini 3.1 Pro 92.6)
- SimpleQA Verified: **52%** (Epoch AI)
- Epoch ECI: **156, #26/260** (rank #4/203 at release) / The Model Index: **171, #23/203** (range 154–187)
- CritPt / AA-LCR / BenchLM: no verified public score found this pass

Coding:

- SWE-bench Verified: **87.6%** (official system card) vs independent **83%–83.5%** (Epoch AI: 83.4711, measured 2026-10-02 — #1 of 33 models on the Epoch leaderboard as of 2026-10-16, ahead of GPT-5.5 pre-release 80.6, Gemini 3.5 Flash 79.3, Opus 4.6 78.7, GLM 5.2 78.7; BenchLeader/theknowngood/SuperIndex concur)
- SWE-bench Pro: **64.3%** (official; vs 4.6 53.4, GPT-5.4 57.7, Gemini 54.2; Mythos Preview 77.8) — no independent rerun found
- MirrorCode: **31%** (Epoch AI; benchmark best score 77% by another model)
- APEX: **49%** (The Model Index); Coding Index / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found this pass (AA launch notes report SciCode +2.6 vs 4.6)
- Partner evals (launch): CursorBench 58%→70%, +13% on a 93-task coding set, visual acuity 54.5%→98.5% (pen-testing partner), Warp passed Terminal-Bench tasks 4.6 failed
- Hands-on: Reddit heavy-use thread — 6 of 8 Opus 4.7 claims confirmed on code inspection (one inflated, one wrong); better code but "less consistent than 4.6"; long-session reports split (faster/less forgetting vs overcomplication, amnesia, quota pressure — one prompt hit Claude Code's 5-hour limit)

Long context:

- MRCR v2 at 512K–1M: **32.2%** vs GPT-5.5 74.0% (Tech Talk News cross-model comparison — secondary source, treat as provisional); no RULER / GraphWalks / Anthropic retrieval score found; official docs confirm 1M window at standard pricing, DeepInfra's 1M-output claim conflicts with the official 128K output cap.

Research notes (reliability & controversies):

- Official-vs-independent splits (flagged, not averaged): SWE-V 87.6 vs Epoch 83.5; GPQA 94.2 vs Epoch 90; HLE 46.9/54.7 vs Epoch 36; TB2 69.4 official vs Vals 68.54 (corroborates — Anthropic ran thinking disabled, which likely narrows the gap vs leaders); AA Index launch 57 #1 → current 41 #53 (recalibration + newer models, model deprecated).
- BrowseComp is the one published regression (83.7 → 79.3) while GPT-5.4 Pro/Gemini lead it — web-research-heavy agents need separate evaluation (Anthropic, Vellum and Wunner all agree).
- Cost realism: tokenizer change (+~30% tokens, up to 1.35×) means effective price above $5/$25; instruction-following is deliberately more literal than 4.6 (Anthropic recommends re-tuning prompts).
- Lifecycle: AA deprecated, The Model Index notes "replaced by Opus 4.8", Anthropic recommends Opus 5 for new builds; retirement no sooner than 2027-04-16. The official system card (>5 MB) could not be fetched directly this pass — official figures are quoted from Anthropic docs/news plus Vellum's and AA's renders of the same table.

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP-Atlas 77.3% (#1 among compared models), OSWorld-Verified 78.0%, Finance Agent v1.1 64.4%, launch GDPval-AA 1753 (#1), with the official TB2 69.4 corroborated by independent Vals 68.54; capped below frontier by BrowseComp 79.3 (regression, behind GPT-5.4 Pro 89.3), Terminal-Bench under 70 vs frontier TB2.1 ~88, and no τ²/Claw-Eval/Toolathon numbers.
- **Reasoning: 90/100.** GPQA 94.2 (Epoch 90 — both ≥90), HLE 46.9/54.7 (Epoch 36), launch AA Index 57.3 tied #1, FrontierMath T1-3 70%, GDPval-AA #1; sits at the floor of the 90–100 frontier band per tier refs (GPQA 90+, HLE 40+, Index ~60); capped by the recalibrated current Index 41 (#53), Tier-4 32%, SimpleQA 52%, and Epoch's lower HLE.
- **Context window: 95/100.** 1M input at standard per-token pricing maps to the ≥1M tier (95–100); capped at 95 because no ≥98%-retrieval proof exists and the sole long-context retrieval datapoint (MRCR v2 512K–1M 32.2%, secondary source) is weak; output 128K (unverified 1M-output provider claim discounted).
- **Multimodal: 88/100.** Text + high-res image input (3.75 MP / 2576 px, 3× prior) + PDF documents, text out; CharXiv reasoning 82.1/91.0 vs 4.6's 69.1/84.7 and OSWorld-Verified 78.0 show frontier-grade vision understanding; within the 75–90 image+PDF band — no video or audio caps it below 90.
- **Coding: 88/100.** SWE-V 87.6 official / 83.5 independent at #1 of 33 (Epoch), SWE-Pro 64.3 (#1 among generally-available models), TB2 69.4/68.54, partner coding gains; capped below the 90+ frontier refs — no public SciCode/LiveCodeBench numbers this pass, MirrorCode 31 (best 77), SWE-Pro/TB2 short of DeepSWE-74/TB2.1-85 thresholds, and the model is already replaced by Opus 4.8/5.
- **Cost efficiency: 51/100.** $5/$25 sits between the $3/$15 (≈60) and $10/$50 (≈30) anchors (linear ≈51); cache reads at 10× discount and Batch 50% help, but the +~30% tokenizer token inflation makes real per-task cost worse than the unchanged list price suggests.
- **Overall Score: 89/100.** (86 + 90 + 95 + 88 + 88) / 5 = 89.4 → 89 — best-fit: a top-tier paid flagship for hard coding, tool orchestration and vision/computer-use agents where budget is secondary; skip for deep web-research workflows (BrowseComp regression) and tight budgets (Opus-class pricing + token inflation), and compare Opus 5 first since this entry is legacy.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research (Anthropic official docs/news/pricing, Artificial Analysis article + model page, The Model Index, Epoch AI, Vals AI, BenchLeader/theknowngood/SuperIndex, tbench.ai, Vellum, Tabbit/Wunner, OpenRouter, llm-stats, Reddit-derived reviews) — 3 independent search passes; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
