# Claude Opus 4.8 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 86). Fresh sources this pass: BenchLM model page
> (updated 2026-11-07, 65 rows) and Artificial Analysis (GDPval-AA v2.1
> leaderboard, AA model page, LLM leaderboard).
> Changes: Tool use 90→88 (AA GDPval-AA v2.1 places Opus 4.8 at 1462 Elo,
> #66/309 — the 1890 figure was a different-scale vendor board); Reasoning
> 91→89 (AA-native Intelligence Index 41.8, not the cross-indexer 61.4);
> Coding 87→89 (AA Coding Index 74.3 clears the 70%+ ref; LiveCodeBench 87.8
> fills a missing anchor); Overall 86→85; Context, Multimodal, Cost held.

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** The final Opus 4.x model (released 2026-05-28, 41 days after 4.7) — led 6 of 7 Anthropic launch benchmarks and topped the AA Intelligence Index at release; billed as "most honest Opus yet" (code-flaw pass rate 4× lower than 4.7). Superseded by Opus 5 (2026-07-24) and Opus 5.5 (2026-09-22) at lower prices; AA now marks it **deprecated** (benchmarking every 18h instead of 6h) and still recommends Opus 5; legacy-but-available until at least 2027-05-28, and Fable 5's safety-classifier fallback. BenchLM composite 69.55, rank #17/1016 (updated 2026-11-07, 65 of 759 benchmark rows covered).
- **Provider / access:** Claude API (`claude-opus-4-8`, 1M variant `claude-opus-4-8[1m]`), Amazon Bedrock, Google Cloud Vertex, Microsoft Foundry (200K cap), Claude.ai/Code — 7 API providers per AA (Nov 2026); adopted at launch by Cursor, Copilot, Windsurf, CodeRabbit, Replit. Features: Effort Control (5-level), Dynamic Workflows (research preview), Fast Mode 2.5× speed.
- **Release / knowledge:** released 2026-05-28; reliable knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-opus-4-8` (gateway routes) / `claude-opus-4-8` (native).
- **Context window:** 1,000,000 tokens; max output 128,000 (300K Batch API beta) — AA confirms 1M (Nov 2026).
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking, default effort high, xhigh/max available); tool calls yes; non-default temperature/top_p/top_k rejected.
- **Pricing (as of 2026-11-08):** **$5.00 in / $25.00 out** per 1M (AA-confirmed Nov 2026; unchanged since 4.7) with 90% cache discount ($0.50 cache read), 5m write $6.25, 1h write $10; Fast Mode **$10/$50** (~2.5× speed); Batch 50% off ($2.50/$12.50); AA blended 7:2:1 rate $3.85/M. Paid — no free tier.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

> Fresh rows this pass from BenchLM `claude-opus-4-8` (updated 2026-11-07,
> citing the Anthropic Opus 4.8 system card, AA leaderboards, Vals AI, ARC
> Prize, Epoch AI, Cognition, Cursor evals) and the AA GDPval-AA v2.1
> leaderboard (fetched 2026-11-08). Rows unchanged from 2026-10-07 keep their
> original attribution.

Agent / tool use:

- GDPval-AA **v2.1: 1462 Elo, rank #66/309** <(AA leaderboard, fetched 2026-11-08 — field leader Claude Opus 5.5 1866, Muse Wonder 1770, MiMo-V2.6-Pro 1689; **well under the 1750+ frontier ref**. The previously cited 1890 was a different-scale vendor/LLM-Boss board and BenchLM's Anthropic-system-card row reads 1593 — scale conflict flagged, AA's own current board kept as the anchor). Claude Opus 4.7 (Max) sits at 1362 for comparison.
- **τ²-bench: 94.4%** <(AA tau2-bench leaderboard via BenchLM — new, far above the mid-band> but Tau3-Banking itself still absent.
- OSWorld-Verified: **83.4** (Anthropic/Vellum). Online-Mind2Web: **84**. MCP-Atlas: **82.2**. Toolathlon: **59.9 Pass@1** <(Anthropic system card via BenchLM — conflicts with the earlier 76.2 Toolathlon-Verified row; both retained>.
- Terminal-Bench 2.1: **74.6** (Anthropic, Terminus-2) / **84.6** (AA independent) / **71.9** (Vals) — all under the 88% frontier ref. Terminal-Bench 3.0: 21.1; Terminal-Bench Hard: 58.3 (AA); TB-Science 0.1: 10.5. Terminal-Bench 4.0: no verified public score found.
- BrowseComp 84.3 single-agent; DeepSearchQA 93.1; AutomationBench 41.0; Agents' Last Exam 27.0; Finance Agent v2 53.9; Harvey LAB-AA 10.0; MazeBench 0 (ASCII); AA Agentic Index 42.6; EnterpriseOps-Gym 44.0; AA-AnalystAgent 45.0; ResearchClawBench 21.1 (research-claw board — **not** Claw-Eval); OSWorld 2.0 20.6.
- Tau3-Banking / Claw-Eval: no verified public score found (re-checked 2026-11-08).

Reasoning / knowledge:

- GPQA Diamond: **93.6** (Anthropic; AA's independent run 92.0, Vals 92.4) — clears the 90%+ ref three ways.
- HLE: **49.8** no tools / **57.9** with tools (Anthropic); AA's independent HLE row **48.7** — all clear the 40%+ ref.
- Artificial Analysis Intelligence Index: **41.8 (AA-native)** <(AA model benchmarks via BenchLM, 2026-11-07> — on the current v5.0.1 scale, frontier = 60 (Gemini 4 Carbon); **the 61.4 in the previous pass was a cross-indexer figure (TokenMix), not AA's own index** — AA's page now shows N/A (deprecated, run less often).
- CritPt: **20.9** (AA). AA-Omniscience: index 28.8, accuracy 48.8%, hallucination rate 39.3% (AA).
- **FrontierMath v2: 80.000% Tiers 1–3, 56.098% Tier 4** <(Epoch AI FrontierMath v2 leaderboard via BenchLM — new, research-level math).
- ARC-AGI-1: **92.50**; ARC-AGI-2: **72.1**; ARC-AGI-3: 1.5 <(ARC Prize leaderboard>. USAMO 2026: **96.7** (Anthropic). MMLU-Pro (Vals): 89.6.

Coding:

- SWE-bench Verified: **88.6** (Anthropic; confirmed independently by Vals AI) — near saturation. SWE-bench Pro: **69.2** (+4.9 vs 4.7; Fable 5 later hit 80.4). SWE-bench Multilingual: 84.4. SWE-bench Multimodal: 38.4.
- **AA Coding Index: 74.3%** <(AA via BenchLM — **clears the 70%+ frontier ref**; new to this report>.
- **LiveCodeBench (Vals): 87.8%** <(Vals AI via BenchLM — fills the missing LiveCodeBench anchor>.
- **AA-SciCode: 54.4%** <(AA — just under the 55%+ ref; previously not captured>.
- DeepSWE v1.1: **58.0** (under the 74% frontier ref). FrontierCode 1.1: 46.5; FrontierCode 2.0: 14.7 (Cognition). CursorBench 3.1: 58.4 / 3.2: 62.3 (Cursor evals). PostTrainBench v1.1: 32.9.
- Terminal-Bench 2.1 as above (74.6 Anthropic / 84.6 AA / 71.9 Vals). Alignment/honesty: code-summary dishonesty 3.7% (≈4× better than 4.7's ~15%); prompt-injection success ~7%.

Long context:

- GraphWalks BFS: **85.9 f1 at 256K**, **68.1 f1 at 1M** (Anthropic) — usable 1M retrieval, no ≥98% needle result.
- AA-LCR: **77.7%** (AA via BenchLM — better than the 67.7% cited on the 2026-10-06 pass, still short of the ≥98%-at-512K bar for a 100). MRCR / RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Moved down 2: the previous pass's "GDPval-AA 1890 clears the frontier ref decisively" does not hold on AA's current **GDPval-AA v2.1 board (1462, #66/309)** — between the 900–1200 mid band and the 1750+ frontier ref — and TB2.1 (74.6/84.6/71.9) still sits under the 88 ref with no TB4.0/Tau3/Claw-Eval row anywhere; offset upward by the new **τ²-bench 94.4% (AA)** plus top-tier OSWorld 83.4, MCP-Atlas 82.2, Mind2Web 84 → 88, not 90.
- **Reasoning: 89/100.** Moved down 2: GPQA 93.6 (also AA 92.0 / Vals 92.4) and HLE 49.8–57.9 (AA 48.7) still clear both headline refs, and this pass adds research-level math (FrontierMath v2 80.0% T1–3 / 56.1% T4, USAMO 96.7, ARC-AGI-1 92.5) — but the third ref, the AA Intelligence Index, is **41.8 AA-native** on the current scale (frontier 60), not the cross-indexer 61.4 the 2026-10-07 pass credited; CritPt 20.9 and Omniscience remain soft.
- **Context window: 95/100.** Held: 1M window = ≥1M tier floor; GraphWalks 85.9/68.1 and the improved AA-LCR 77.7% show real retrieval but far below the ≥98%-at-512K+ condition → floor.
- **Multimodal: 66/100.** Held: text + image in, text out = image band (60–70); strong vision-adjacent agent scores (OSWorld, Mind2Web, ScreenSpot-Pro 87.9, CharXiv 89.9) but no video/audio/PDF-input tier and no non-text output.
- **Coding: 89/100.** Moved up 2: three previously-absent anchors now exist and clear or nearly clear their refs — **AA Coding Index 74.3% (≥70% frontier ref)**, **LiveCodeBench (Vals) 87.8%**, AA-SciCode 54.4% (just under 55) — on top of SWE-Verified 88.6 and SWE-Pro 69.2; still held below 90 by DeepSWE 58 (well under the 74 ref), TB2.1 74.6–84.6 (under 85), and Fable 5's later SWE-Pro lead.
- **Cost efficiency: 50/100.** Held: $5/$25 (AA-reconfirmed 2026-11-08) sits midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors (~48); 90% cache reads, 50% batch, and a cheaper fast mode lift it to 50 — but it is 2.5× Sonnet 5.5's rate for scores Sonnet 5.5 now matches or beats, and AA marks the model deprecated in favor of Opus 5.
- **Overall Score: 85/100.** (88 + 89 + 95 + 66 + 89) / 5 = 85.4 → 85 — the balanced-production pick of the Opus 4 line: GPQA/HLE/SWE-Verified class evidence with a complete tool panel, but below the current frontier on the AA composites (GDPval-AA 1462, Index 41.8) and superseded by Opus 5/5.5.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07, Artificial Analysis GDPval-AA v2.1 leaderboard + model page + LLM leaderboard, Epoch AI / ARC Prize / Cognition rows as cited); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts published rather than silently resolved (GDPval-AA 1462 AA v2.1 vs 1593 system-card vs 1890 vendor board; Toolathlon 59.9 vs 76.2); no number invented.
- Reference URLs:
  - [BenchLM — Claude Opus 4.8 (69.55, #17/1016, updated 2026-11-07)](https://benchlm.ai/models/claude-opus-4-8)
  - [Artificial Analysis — GDPval-AA v2.1 leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — Claude Opus 4.8 model page](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [Anthropic — Claude Opus 4.8 system card](https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf)
  - [Epoch AI — FrontierMath Tier 4 (v2) leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Claude Opus 4.8 — findings by Mimo V2.6 Flash

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-23 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May 2026 most-capable general-access Opus — upgrades Opus 4.7 on SWE-bench, GDPval-AA, Terminal-Bench, OSWorld and honesty metrics at unchanged price; ships Claude Code Dynamic Workflows and effort control. Not a variant of Fable/Mythos (different product line).
- **Provider / access:** Claude API (`claude-opus-4-8`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude apps / Claude Code. Messages API (Chat Completions-style).
- **Release / knowledge:** Released 2026-05-28 (Anthropic announcement; TokenMix; LLM Stats). Knowledge cutoff: not stated in consulted launch snippets (system card would carry it — no verified public score found in sources consulted).
- **IDs:** `anthropic/claude-opus-4-8`. No $0 Free API tier (paid only).
- **Context window:** 1M input tokens; max output 128K tokens (LLM Stats / Awesome Agents).
- **Modalities:** text + vision (image) in; text out; reasoning yes (effort levels: high default, plus `xhigh`/`max`); tool calls yes; cache + batch API yes.
- **Pricing (as of 2026-09-23):** $5.00 in / $25.00 out per 1M standard; Fast mode $10/$50 (2.5× speed); cache hit $0.50 / 1M; Batch 50% off ($2.50/$12.50); extended context >200K $10/$37.50 (TokenMix / Awesome Agents). Unchanged from Opus 4.7.
- **Architecture:** proprietary (params undisclosed).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (**agent**): **74.6%** (Anthropic launch, Terminus-2 public harness); higher peer-cited figures: **82.7%** (LLM Boss leaderboard), **84.6%** (AA Terminus-2 via Kimi/Qwen tables), **86.9% best-reported (BenchmarkList, rank 1 of 10, launch-post row; field leader Fable 5.1 91.4%) — primary Anthropic figure kept, range now 74.6–86.9 by harness
- Terminal-Bench 3.0: **21.1%** (BenchmarkList, rank 8/20); Terminal-Bench Hard: **58.3%** (rank 3/326); Terminal-Bench-Science 0.1: **10.5%** (rank 10/17)
- OSWorld-Verified: **83.4%** (Anthropic/TokenMix; BenchmarkList rank 1 of 6)
- MCP-Atlas: **82.2%** (Anthropic/TokenMix; +4.9 vs 4.7) / **83.6%** (BenchmarkList, rank 11/48)
- Toolathlon: **79.9% Pass@1 / 88.0% Pass@3 / 71.3% Pass^3, 20.4 turns** (BenchmarkList, rank 2/41 — fills the Toolathlon gap)
- Tau3-Banking: **34.2%** (BenchmarkList, rank 31/176 — fills the Tau3 gap)
- GDPval-AA: **1890 Elo** (Anthropic/LLM Boss; BenchmarkList rank 2/11)
- BrowseComp: **84.3%** single-agent / **88.5%** multi-agent (Anthropic; BenchmarkList small-field rank 3/3)
- AutomationBench: **15.5%** (LLM Boss) / **69.4%** (BenchmarkList rank 5 of 5 — different harness, both cited); Finance Agent v2: **53.9%**; Legal Agent Benchmark: **10.4%** (LLM Boss)
- ScreenSpot-Pro: **89.5% with tools / 82.4% no tools** (BenchmarkList, rank 4/59); WebArena-Verified **71.2% (2/14)**; APEX-Agents **59.4 (2/44)**; KernelBench CUDA **37.3% (1/4)**; GBA Eval **70.9% (1/11)**; CEO-Bench **213.41 (1/10)** (BenchmarkList 2026-10-06)
- Claw-Eval: no verified public score found (re-checked 2026-10-06)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (Anthropic/LLM Boss; −0.6 vs 4.7's 94.2%)
- HLE: **49.8%** no tools / **57.9%** with tools (Anthropic/LLM Boss)
- USAMO 2026: **96.7%** (Anthropic)
- ARC-AGI-2: **72.1%** (BenchmarkList, rank 18/99); ARC-AGI-1: **92.5%** (rank 21/97); ARC-AGI-3: **1.5%** (rank 10/13) (2026-10-06)
- AA-Omniscience net: **0.37 / 0.41 net** (rank 6/11 — BenchmarkList; fills the Omniscience gap)
- CharXiv Reasoning: **80.5%** no tools / **89.9%** with tools (LLM Boss)
- Artificial Analysis Intelligence Index: **42** (AA v4.3.2 model page, 2026-09-28 — #42/216; the TokenMix 61 was a different indexer, see Fresh-source note)
- CritPt / Omniscience / MLCR numeric: AA-LCR **67.7%** (LLM Boss); CritPt: no verified public score found in sources consulted

Coding:

- SWE-bench Verified: **88.6%** (Anthropic; #4 of 9 on LLM Boss)
- SWE-bench Pro (Public): **69.2%** (Anthropic; +4.9 vs 4.7)
- SWE-bench Multilingual: **84.4%** (Anthropic)
- DeepSWE v1.1: **59.0%** (LLM Boss, #5 of 7)
- FrontierSWE: **70.0%** / FrontierCode Diamond: **13.4%** (LLM Boss)
- LiveCodeBench / SciCode / Vibe: no verified public score found in sources consulted (re-checked on BenchmarkList 2026-10-06 — coding section shows GBA Eval/KernelBench/TB rows instead)

Long context:

- 1M window official; MRCR/RULER retrieval percentage: no verified public score found in sources consulted (AA-LCR 67.7% is the long-context proxy)

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): current AA-native **Intelligence Index 42** (#42/216) replaces the TokenMix-61 cross-index citation (different indexers are not on the same scale); AA now marks Claude Opus 4.8 **deprecated** (superseded by Claude Opus 5) — scores unchanged pending re-derivation.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`.

- **Tool use: 95/100.** GDPval-AA 1890 Elo is in the elite knowledge-work band (BenchmarkList rank 2/11), OSWorld 83.4% (rank 1) and MCP-Atlas 82.2–83.6% lead or near-lead their fields, Toolathlon 79.9/88.0 (rank 2), BrowseComp 84.3%, TB2.1 74.6–86.9 harness range — filled-gap re-rate 2026-10-06 (was capped by missing Tau3/Toolathlon; Tau3 34.2% is now the remaining mid-pack cap, Claw still absent).
- **Reasoning: 95/100.** GPQA 93.6% + HLE 49.8/57.9 both firmly in frontier band (HLE 40%+ → 90–100), AA Index 42 on v4.3.2 (refresh — see Fresh-source note); small discounts for the −0.6 GPQA regression vs 4.7 and no CritPt row.
- **Context window: 95/100.** Official 1M window → ≥1M tier floor; no MRCR ≥98% retrieval figure published, so cannot earn the retrieval-backed 100; AA-LCR 67.7% is merely mid-tier retrieval evidence.
- **Multimodal: 65/100.** Text + vision (image) in only (LLM Stats / launch docs) → image-in band 60–70; no audio/video/PDF input, no non-text output → mid image-in score. Vision-grounded work (OSWorld, ScreenSpot-class) supports the upper half of that band but not 70+.
- **Coding: 96/100.** SWE-V 88.6% and SWE-Pro 69.2% are at/near the top of public closed-model tables at release; SWE-Multilingual 84.4% and DeepSWE 59% round out a frontier coding profile; held just below 97+ because DeepSWE still trails GPT-5.6 Sol/Fable (~70–73) and TB2.1 is harness-sensitive (74.6 Anthropic vs 84.6 AA).
- **Cost efficiency: 48/100.** $5/$25 sits between methodology anchors ($3/$15 ≈ 60 and $10/$50 ≈ 30) — expensive list price with excellent cache/batch discounts that help agentic workloads but don't reach cheap-tier territory.
- **Overall Score: 89/100.** Mean of the five quality dims: (95 + 95 + 95 + 65 + 96) / 5 = 446/5 = 89.2. Best-fit: top general-access pick for frontier SWE-bench coding, GDPval knowledge work, and HLE-class reasoning when multimodal (audio/video) input is not required.

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Anthropic Claude Opus 4.8 announcement, LLM Stats/TokenMix/Awesome Agents/LLM Boss benchmark roundups); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (194 benchmarks) — filled Toolathlon (79.9/88.0 rank 2), Tau3 (34.2), TB3.0 (21.1), TB-Hard (58.3), TB-Science (10.5), ARC-AGI-1/2/3, AA-Omniscience (0.37), ScreenSpot-Pro, WebArena rows; TB2.1 range extended to 86.9 (rank 1); Tool 94→95, Overall 89.0→89.2 (display unchanged). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

