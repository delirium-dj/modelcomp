# Claude Opus 4.7 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-16)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-16 (Overall 89). Fresh sources this pass: BenchLM model page
> (updated 2026-11-07, 65.07/100, #32/1016, 29 of 759 rows) and Artificial
> Analysis (GDPval-AA v2.1 leaderboard, model page — now deprecated).
> Changes: Tool use 86→85 (launch-era GDPval-AA 1753 #1 is gone — the current
> v2.1 board shows 1362 Elo, #95/309 — partially offset by the newly captured
> τ²-bench 74%); Reasoning 90→86 (AA-native Intelligence Index is 30.9 on the
> current v5.0.1 scale with frontier 60, not the estimated 41 of the previous
> pass; AA-GPQA 88.5 / AA-HLE 33.3 sit below their frontier refs); Overall
> 89→88; Context, Multimodal, Coding, Cost held.

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April 2026 flagship Opus (proprietary, closed weights), a focused upgrade over Opus 4.6 for hard software engineering, multi-tool agents, computer use and high-resolution vision; superseded by Opus 4.8/5 and now cataloged as "Active (legacy)". BenchLM composite 65.07/100, rank #32/1016 (updated 2026-11-07; coverage note: 29 of 759 benchmark rows, so the composite is conservative).
- **Provider / access:** Anthropic Claude API (Messages API), model ID `claude-opus-4-7`; Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; OpenRouter `anthropic/claude-opus-4-7` (Chat Completions; EU route $5.50/$27.50 via Bedrock/Vertex). Artificial Analysis tracks 4 API providers. Availability on OpenCode Zen not checked this pass — no Free ID claimed.
- **Release / knowledge:** 2026-04-16 (official docs + launch post); reliable-knowledge cutoff Jan 2026. Status: Active (legacy); Anthropic recommends considering Opus 5; retirement "not sooner than 2027-04-16" (official model page + Tabbit catalog snapshot 2026-09-20). AA now marks the model **deprecated** (benchmarking runs less often).
- **IDs:** `claude-opus-4-7` (Anthropic), `anthropic/claude-opus-4.7` (OpenRouter).
- **Context window:** 1,000,000 input tokens at standard pricing (official pricing docs: Claude 4.6+ include the full 1M window at flat per-token rates; BenchLM re-confirms 1M); max output 128,000. Conflict: llm-stats shows DeepInfra claiming 1M in / 1M out — unverified against official docs. New tokenizer: ~555K words per 1M tokens vs ~750K on the prior tokenizer (official tokenizer docs), i.e. same text ≈1.35× more tokens at the upper bound.
- **Modalities:** text + images in (up to 2,576 px long edge, ~3.75 MP — 3× prior Claude), PDF via API document blocks, text out; adaptive thinking (default effort `high`, new `xhigh` tier; Claude Code defaults to xhigh); tool calls yes; JSON mode not verified; no audio/video.
- **Pricing (as of 2026-11-08):** official first-party **$5 / $25** per 1M in/out — re-confirmed on OpenRouter 2026-11-08 (Anthropic, Claude Platform on AWS, Azure, Amazon Bedrock, Google Vertex rows all $5/$25; EU in-region routes $5.50/$27.50); 5-min cache write $6.25, 1-h $10, cache hit $0.50 (0.1×); Batch API $2.50 / $12.50 (50% off); web search $10/1k searches. Effective-cost caveat: pricing FAQ states the new tokenizer produces "approximately 30% more tokens for the same text" (Claude 4.7+), so per-task spend can exceed Opus 4.6 at identical list price (Vellum: 1.0–1.35×; Wunner: effectively pricier).
- **Architecture:** proprietary (parameters/training compute undisclosed — Epoch lists all training metadata as unknown).

### Raw benchmarks found

> Fresh rows this pass from BenchLM `claude-opus-4-7` (updated 2026-11-07,
> citing AA model benchmarks, Vals AI, Epoch AI, ARC Prize, Cognition, Gert
> Labs, ParseBench), the AA GDPval-AA v2.1 leaderboard, AA's deprecated model
> page, and the OpenRouter pricing guide (all fetched 2026-11-08). Rows
> unchanged from 2026-10-16 keep their original attribution.

Agent / tool use:

- GDPval-AA **v2.1: 1362 Elo, rank #95/309** <(AA leaderboard, fetched 2026-11-08 — field leader Claude Opus 5.5 1866; **between the 900–1200 mid band and the 1750+ frontier ref**. The previously cited **1753 Elo, #1 at launch** (AA article 2026-04-16) is a launch-era board position that no longer holds on the current v2.1 scale — for reference Claude Opus 4.8 (Max) sits at 1462, #66. Scale/version conflict flagged; AA's current board kept as the anchor).
- **τ²-bench: 74%** <(AA via BenchLM — newly captured; clears the ~50%+ frontier ref for Tau3-class evidence, though the old file's "no verified public score found" is now resolved only for τ², not Tau3-Banking or Claw-Eval).
- Terminal-Bench 2.1: **68.5%** (Vals AI) / **69.4%** (official system card, Terminus-2 with thinking disabled) — unchanged, both under the 88% frontier ref. Terminal-Bench Hard: **54.5%** (AA via BenchLM — new). No official tbench.ai entry (only Opus 4.6 rows exist).
- OSWorld-Verified: **78.0%** (official; vs 4.6 72.7, GPT-5.4 75.0). **OSWorld 2.0: 13.9%** <(OSWorld 2.0 paper via BenchLM — new, much harder successor benchmark; Opus 4.8 scores 20.6 on it).
- MCP-Atlas: **77.3%** (official system card via Vellum/AA/Tabbit — leads 4.6 75.8, GPT-5.4 68.1, Gemini 3.1 Pro 73.9); grading-version conflict: Anthropic revised MCP-Atlas grading after launch (Wunner cites an earlier 4.6 figure of 62.7 under the old scheme).
- Finance Agent v1.1: **64.4%** (official; vs 4.6 60.1, GPT-5.4 Pro 61.5, Gemini 59.7) — conflict: The Model Index reports Finance Agent **v2** 52% (different task version, not comparable).
- BrowseComp: **79.3%** (official — regression from 4.6's 83.7; GPT-5.4 Pro 89.3, Mythos 86.9, Gemini 85.9).
- ResearchClawBench: **20.7%** <(ResearchClawBench leaderboard via BenchLM — research-claw board, **not** Claw-Eval; Opus 4.8 is at 21.1). Gert Labs: **65.59%** (gertlabs.com rankings via BenchLM). ApprenticeBench: **7%** (NeoCognition GUI results via BenchLM). Claw-Eval / Toolathon: no verified public score found (re-checked 2026-11-08).

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (official; vs 4.6 91.3, Gemini 94.3, GPT-5.4 Pro 94.4) / **90%** (Epoch AI via The Model Index) — harness conflict, official favored with the 94.2 cited / **88.5%** (AA independent run, new) / **90.2%** (Vals AI, new) — the independent runs land at/below the 90%+ frontier ref where the official figure clears it.
- HLE: **46.9%** no-tools / **54.7%** with tools (official; 4.6: 40.0/53.3) / **36%** (Epoch via The Model Index) / **33.3%** (AA independent, new) — official clears the 40%+ ref, AA's run does not; conflict retained.
- Artificial Analysis Intelligence Index: **30.9 (AA-native, current v5.0.1 scale)** <(AA model benchmarks via BenchLM 2026-11-07 — frontier = 60, Gemini 4 Carbon high; the previous pass's "41 (#53/217)" was an estimate on the retired v4.3.2 scale, and the launch-era **57.3, tied #1** (AA article 2026-04-16) is history). AA's own model page now shows N/A (deprecated, run less often).
- FrontierMath v2 (Epoch): **70.175% Tiers 1–3**, **31.707% Tier 4** <(Epoch AI FrontierMath v2 leaderboard via BenchLM — consistent with the previously cited 70/32>.
- AA-LCR: **75.7%** <(AA via BenchLM — new; fills the old "CritPt / AA-LCR / BenchLM: no verified public score found" gap). CritPt: **5.1%** (AA via BenchLM — new; Opus 4.8 is at 20.9). AA-Omniscience: index **14.8**, accuracy **44.7%**, hallucination rate **54.1%** <(AA — absolute values now captured; the old file only had the launch "#2 non-hallucination rank).
- MMMLU: **91.5%** (official; Gemini 3.1 Pro 92.6). MMLU-Pro: **89.9%** (Vals, new). SimpleQA Verified: **52%** (Epoch AI).
- ARC-AGI-3: **0.2%** (ARC Prize leaderboard via BenchLM — new; Opus 4.8 is at 1.5). AA-IFBench: **43.6%** (AA via BenchLM — new instruction-following row).
- Epoch ECI: **156, #26/260** (rank #4/203 at release) / The Model Index: **171, #23/203** (range 154–187).

Coding:

- SWE-bench Verified: **87.6%** (official system card) vs independent **82.0% (Vals AI, new rerun)** / **83%–83.5%** (Epoch AI: 83.4711, measured 2026-10-02 — #1 of 33 models on the Epoch leaderboard as of 2026-10-16, ahead of GPT-5.5 pre-release 80.6, Gemini 3.5 Flash 79.3, Opus 4.6 78.7, GLM 5.2 78.7; BenchLeader/theknowngood/SuperIndex concur).
- SWE-bench Pro: **64.3%** (official; vs 4.6 53.4, GPT-5.4 57.7, Gemini 54.2; Mythos Preview 77.8) — no independent rerun found.
- **LiveCodeBench (Vals): 85.1%** <(Vals AI via BenchLM — fills the previous pass's missing LiveCodeBench anchor). **Vibe Code Bench: 71.00%** (Vals v1.1 via BenchLM — new).
- **FrontierCode 1.1 Main: 38.5%** <(Cognition via BenchLM — new; Opus 4.8 scores 46.5 on it). PostTrainBench v1.1: 28.6%; React Native Evals: 82.8% (both new via BenchLM).
- MirrorCode: **31%** (Epoch AI; benchmark best score 77% by another model). APEX: **49%** (The Model Index). SciCode / AA Coding Index: no verified public score found this pass (AA launch notes report SciCode +2.6 vs 4.6).
- Partner evals (launch): CursorBench 58%→70%, +13% on a 93-task coding set, visual acuity 54.5%→98.5% (pen-testing partner), Warp passed Terminal-Bench tasks 4.6 failed.
- Hands-on: Reddit heavy-use thread — 6 of 8 Opus 4.7 claims confirmed on code inspection (one inflated, one wrong); better code but "less consistent than 4.6"; long-session reports split (faster/less forgetting vs overcomplication, amnesia, quota pressure — one prompt hit Claude Code's 5-hour limit).

Long context:

- **AA-LCR: 75.7%** (AA via BenchLM — the strongest long-context retrieval datapoint now available for this model).
- MRCR v2 at 512K–1M: **32.2%** vs GPT-5.5 74.0% (Tech Talk News cross-model comparison — secondary source, treat as provisional); no RULER / GraphWalks / Anthropic retrieval score found; official docs confirm 1M window at standard pricing, DeepInfra's 1M-output claim conflicts with the official 128K output cap.

Multimodal:

- **AA-MMMU-Pro: 76.4%** <(AA via BenchLM — new; corroborates frontier-grade multimodal understanding). **ParseBench: 63.34%** (LlamaIndex leaderboard, 2026-11-06 snapshot via BenchLM — new).
- CharXiv reasoning **82.1 / 91.0** vs 4.6's 69.1 / 84.7 (official system card).

Research notes (reliability & controversies):

- Official-vs-independent splits (flagged, not averaged): SWE-V 87.6 vs Vals 82.0 / Epoch 83.5; GPQA 94.2 vs AA 88.5 / Epoch 90; HLE 46.9/54.7 vs AA 33.3 / Epoch 36; TB2 69.4 official vs Vals 68.54 (corroborates — Anthropic ran thinking disabled); AA Index launch 57.3 #1 → v4.3.2-era estimate 41 → **AA-native 30.9 current** (v5.0.1 recalibration + newer models, model deprecated).
- GDPval-AA is the biggest anchor correction this pass: **1753 #1 at launch → 1362 #95/309 on the current v2.1 board** (same evaluator, rescaled/re-baselined board with a deeper field).
- BrowseComp is the one published regression (83.7 → 79.3) while GPT-5.4 Pro/Gemini lead it — web-research-heavy agents need separate evaluation (Anthropic, Vellum and Wunner all agree).
- Cost realism: tokenizer change (+~30% tokens, up to 1.35×) means effective price above $5/$25; instruction-following is deliberately more literal than 4.6 (Anthropic recommends re-tuning prompts).
- Lifecycle: AA deprecated, The Model Index notes "replaced by Opus 4.8", Anthropic recommends Opus 5 for new builds; retirement no sooner than 2027-04-16. The official system card (>5 MB) could not be fetched directly this pass — official figures are quoted from Anthropic docs/news plus Vellum's and AA's renders of the same table.

### Normalized scores (1–100)

- **Tool use: 85/100.** Moved down 1: the launch-era **GDPval-AA 1753 (#1)** anchor is superseded — AA's current **GDPval-AA v2.1 board shows 1362 Elo, #95/309**, between the 900–1200 mid band and the 1750+ frontier ref — while the newly captured **τ²-bench 74% (AA)** clears the ~50%+ Tau3 frontier ref and offsets part of that drop; still capped by TB2.1 68.5–69.4 (under the 88 ref), OSWorld-Verified 78.0 / OSWorld 2.0 13.9, MCP-Atlas 77.3, BrowseComp 79.3 (regression), ResearchClawBench 20.7, and missing Claw-Eval/Toolathon/Tau3 rows (slight penalty, never invented).
- **Reasoning: 86/100.** Moved down 4: the index anchor is now **AA-native 30.9 on the current v5.0.1 scale (frontier 60)** — the previous pass's "41" was an estimate on the retired v4.3.2 scale and launch-era 57.3 #1 no longer reflects the field — and AA's independent GPQA **88.5** / HLE **33.3** sit at or below the 90%+ / 40%+ frontier refs where the official 94.2 / 46.9–54.7 clear them; CritPt 5.1 and Omniscience index 14.8 are soft. Held well above the mid band by FrontierMath v2 70.175% T1–3 / 31.707% T4, Vals GPQA 90.2 / MMLU-Pro 89.9, AA-LCR 75.7%, and official GPQA/HLE rows.
- **Context window: 95/100.** Held: 1M input at standard pricing = the ≥1M tier floor (BenchLM re-confirms 1M); the new **AA-LCR 75.7%** shows real retrieval but far short of the ≥98%-at-512K+ condition for a higher score, and MRCR v2 512K–1M 32.2% (secondary) remains weak; output capped at 128K (unverified 1M-output provider claim discounted).
- **Multimodal: 88/100.** Held: text + high-res image in (3.75 MP / 2576 px, 3× prior Claude) + PDF documents, text out → within the 75–90 image+PDF band; the new **AA-MMMU-Pro 76.4** and ParseBench 63.34 plus CharXiv reasoning 82.1/91.0 and OSWorld-Verified 78.0 support the upper half of that band; no video or audio input and no non-text output cap it below 90.
- **Coding: 88/100.** Held: SWE-bench Verified 87.6 official / 82.0 Vals / 83.5 Epoch (#1 of 33 at last count) with SWE-Pro 64.3 (#1 among generally-available models), and the previously missing **LiveCodeBench anchor now filled at 85.1 (Vals)** plus Vibe Code Bench 71.0; still capped below the 90+ frontier refs — FrontierCode 1.1 38.5 (vs Opus 4.8's 46.5), no SciCode / AA Coding Index row, TB2.1 under 85, MirrorCode 31 (best 77), and the model already replaced by Opus 4.8/5.
- **Cost efficiency: 51/100.** Held: $5/$25 re-confirmed on OpenRouter 2026-11-08 across first-party and cloud routes (EU in-region $5.50/$27.50) — sits between the $3/$15 (≈60) and $10/$50 (≈30) anchors (linear ≈51); cache reads at 10× discount and Batch 50% help, but the ~30% tokenizer token inflation makes real per-task cost worse than the unchanged list price suggests.
- **Overall Score: 88/100.** (85 + 86 + 95 + 88 + 88) / 5 = 88.4 → 88 — best-fit: a legacy-but-strong paid flagship for hard coding, tool orchestration and high-res vision/computer-use agents on 1M context where budget is secondary; the current-scale anchors (Index 30.9, GDPval-AA 1362) place it below today's frontier, so compare Opus 5/5.5 first, and skip for deep web-research workflows (BrowseComp regression) or tight budgets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07, Artificial Analysis GDPval-AA v2.1 leaderboard + deprecated model page, OpenRouter pricing guide, Vals AI / Epoch AI / ARC Prize / Cognition / ParseBench rows as cited); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts published rather than silently resolved (GDPval-AA 1753 launch vs 1362 v2.1; GPQA 94.2 official vs 88.5 AA vs 90.2 Vals; HLE 46.9/54.7 official vs 33.3 AA; AA Index 57.3 launch → 41 v4.3.2 estimate → 30.9 v5.0.1); no number invented.
- Reference URLs:
  - [BenchLM — Claude Opus 4.7 (65.07, #32/1016, updated 2026-11-07)](https://benchlm.ai/models/claude-opus-4-7)
  - [Artificial Analysis — GDPval-AA v2.1 leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — Claude Opus 4.7 model page (deprecated)](https://artificialanalysis.ai/models/claude-opus-4-7)
  - [OpenRouter — anthropic/claude-opus-4.7 pricing guide](https://openrouter.ai/anthropic/claude-opus-4-7)
  - [Epoch AI — FrontierMath Tier 4 (v2) leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
