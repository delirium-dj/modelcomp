# Claude Opus 4.8 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** The final Opus 4.x model (released 2026-05-28, 41 days after 4.7) — led 6 of 7 Anthropic launch benchmarks and took #1 on the AA Intelligence Index (61.4) at release; billed as "most honest Opus yet" (code-flaw pass rate 4× lower than 4.7, misalignment near Mythos Preview levels). Superseded by Opus 5 (2026-07-24) and Opus 5.5 (2026-09-22) at lower prices; legacy-but-available until at least 2027-05-28, and still Fable 5's safety-classifier fallback plus Anthropic's recommended replacement target for retired Opus 4/4.1.
- **Provider / access:** Claude API (`claude-opus-4-8`, 1M variant `claude-opus-4-8[1m]`), Amazon Bedrock (`anthropic.claude-opus-4-8`), Google Cloud Vertex, Microsoft Foundry (200K cap), Claude.ai/Code; adopted at launch by Cursor, Copilot, Windsurf, CodeRabbit, Replit. Features: Effort Control (5-level), Dynamic Workflows (up to 1,000 parallel subagents, research preview), Fast Mode 2.5× speed.
- **Release / knowledge:** released 2026-05-28; reliable knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-opus-4-8` (gateway routes) / `claude-opus-4-8` (native).
- **Context window:** 1,000,000 tokens; max output 128,000 (300K Batch API beta).
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking, default effort high, xhigh/max available); tool calls yes; non-default temperature/top_p/top_k rejected.
- **Pricing (as of 2026-10-07):** **$5.00 in / $25.00 out** per 1M (unchanged from 4.7); Fast Mode **$10/$50** (~2.5× speed, 3× cheaper than prior fast tiers); cache read $0.50, 5m write $6.25, 1h write $10; Batch 50% off ($2.50/$12.50); US-only inference 1.1×. Paid.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1890** Elo (Anthropic — clears the 1750+ frontier ref; +137 over 4.7, 121 over GPT-5.5). Note: the v2 board (AA's later GDPval-AA v2) lists Opus 4.8 at **1582** — scale/version difference flagged.
- OSWorld-Verified: **83.4** (Vellum/Anthropic launch; Anthropic's restated harness figure 82.3; 4.7 restated to 82.3 too — part of the delta was harness change). Online-Mind2Web: **84**. MCP-Atlas: **82.2** (vs 77.3 on 4.7).
- Terminal-Bench 2.1: **74.6** (Anthropic, Terminus-2 public harness — lost this row to GPT-5.5's 78.2 at launch) / **85.0** (AA's independent Terminus-2 run cited in later comparison tables).
- AutomationBench: 41.0; Toolathlon-Verified 76.2; Agents' Last Exam 27.0 (rows from vendors' later comparison sets). Finance Agent v2: 53.9. BrowseComp single-agent: 84.3.
- Tau3 / Claw-Eval / Terminal-Bench 4.0: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **93.6** (Anthropic — clears the 90%+ ref; 4.7 was 94.2, flat).
- HLE: **49.8** no tools / **57.9** with tools (both clear the 40%+ ref).
- AA Intelligence Index: **61.4** at launch (#1 of the board, above GPT-5.5's 60.2 — clears the 60+ ref).
- CritPt: 20.9. AA-Omniscience: 27.4 index, hallucination rate 35.9%.
- ARC-AGI / FrontierMath / LiveBench: no verified public score found for this tier.

Coding:

- SWE-bench Verified: **88.6** (Anthropic; +1.0 vs 4.7 — near saturation). SWE-bench Pro: **69.2** (+4.9 — the headline gain; Fable 5 later hit 80.4).
- SWE-bench Multilingual: 84.4. SWE-bench Multimodal: 38.4.
- DeepSWE v1.1: **58.0** (vendor-comparison rows — under the 74% frontier ref; Sol 73, Fable 70).
- Terminal-Bench 2.1 as above (74.6 Anthropic / 85.0 AA). Alignment/honesty: code-summary dishonesty 3.7% (≈4× better than 4.7's ~15%); prompt-injection success ~7%.

Long context:

- GraphWalks BFS: **85.9 f1 at 256K**, **68.1 f1 at 1M** (Anthropic) — usable 1M retrieval, no ≥98% needle result.

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA 1890 clears the frontier ref decisively, OSWorld 83.4 / MCP-Atlas 82.2 / Mind2Web 84 are top-tier; TB2.1 splits (74.6 Anthropic vs 85.0 AA, below the 88 ref either way) and mid ALE/AutomationBench hold it at 90.
- **Reasoning: 91/100.** All three refs cleared: GPQA 93.6 (90+), HLE 49.8–57.9 (40+), AA Index 61.4 (60+, #1 at launch); CritPt 20.9 and Omniscience are the soft spots.
- **Context window: 95/100.** 1M window = ≥1M tier floor; GraphWalks 85.9/68.1 shows real retrieval but far below the ≥98%-at-512K+ condition → floor.
- **Multimodal: 66/100.** Text + image in, text out = image band (60–70); strong vision-adjacent agent scores (OSWorld, Mind2Web) but no video/audio/PDF-specific or non-text output.
- **Coding: 87/100.** SWE-Verified 88.6 and SWE-Pro 69.2 (+4.9 gen jump) are frontier-adjacent, SWE-Multilingual 84.4 solid; held below 90 by TB2.1 74.6 (lost to GPT-5.5 at launch), DeepSWE 58 (under ref), and Fable 5's later +11 SWE-Pro lead showing the ceiling.
- **Cost efficiency: 50/100.** $5/$25 sits midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors (~48); 90% cache reads, 50% batch, and a cheaper fast mode lift it to 50 — but it is 2.5× Sonnet 5.5's rate for scores Sonnet 5.5 now matches or beats (TB4.0 70.6 vs 74.6-on-2.1, GDPval 1844 vs 1890).
- **Overall Score: 86/100.** (90+91+95+66+87)/5 = 85.8 → 86 — the balanced-production pick of the Opus 4 line: every reasoning ref cleared and GDPval leadership, now visibly superseded by Opus 5/5.5 and price-pressured by Sonnet 5.5.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic launch post + model page, benchr review, AIModelsNavi, TECHSY, ExpertRanking, LLM Stats); scores are normalized 1–100 interpretations, not official vendor scores.
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

