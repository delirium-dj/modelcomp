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
