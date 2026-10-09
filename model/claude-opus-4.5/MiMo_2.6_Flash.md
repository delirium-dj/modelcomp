# Claude Opus 4.5 — findings by MiMo 2.6 Flash

- Source: Anthropic launch post + system card, BenchLM (system-card/Qwen3.6/AA/leaderboard rows), repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5 — Anthropic's Nov 2025 Opus flagship, released **2025-11-24** (API id `claude-opus-4-5-20251101`); superseded by Opus 4.6 → 4.7 → 4.8 → 5 → 5.5 but still active.
- **Short description:** The release that cut **Opus-tier pricing by 67% ($5/$25 vs $15/$75)** and declared Opus "your go-to model for most tasks." At launch Anthropic called it the best model in the world for coding, agents and computer use, with state-of-the-art real-world software engineering (SWE-bench Verified), SWE-bench Multilingual leadership (7/8 languages), a big Aider Polyglot jump, BrowseComp-Plus gains and Vending-Bench +29% over Sonnet 4.5; introduced the **effort parameter** (medium effort matches Sonnet 4.5's SWE-V with 76% fewer output tokens) and token-efficiency as a headline. BenchLM (2026-10-07): 54.12/100, #67/887, 58/623 coverage — below every later Claude in its table (4.6: 62.01, 4.7: 64.28, 4.8: 69.11, 5: 79.28, 5.5: 86.37).
- **Provider / access:** Anthropic API, Claude apps, all three major clouds. Proprietary. No free id (meta).
- **Release / knowledge:** 2025-11-24; evals at 200K window, 64K thinking budget, high effort.
- **Context window:** **200K** (meta; launch methodology), 128K-class outputs.
- **Modalities:** **text, image in; text out.**
- **Pricing:** **$5 / $25 per 1M** (paid tier; batch ~50%, cache reads 90% off).

### Raw benchmarks found

> Primary: Anthropic launch post (2025-11-24) + system card rows as re-hosted by
> BenchLM, AA rows via BenchLM, and Qwen3.6's comparison tables (third-party).
> Epoch FrontierMath v2, VITA/Gert/JobBench/CyberGym leaderboards also cited.

Agentic / tool use:

- **OSWorld-Verified: 66.3** (system card; launch-era computer-use SOTA claim), **τ²-bench: 86.3** (AA), MCP-Tasks 71.8, WideResearch 76.4, Claw-Eval 59.6, QwenClawBench 52.3, τ³-bench 70.2, Gert Labs 64.23.
- Weaker: **Terminal-Bench 2.0: 59.3**, Toolathlon 43.5, MCP Atlas 42.3, CyberGym 50.6, DeepPlanning 26.4, VITA-Bench 23.3, JobBench 32.3.
- Launch post: BrowseComp-Plus big jump (fetch-enabled 70.48 → 85.30 with subagent/compaction stack), Vending-Bench 29% over Sonnet 4.5, take-home exam above every human candidate (parallel test-time compute).

Coding:

- **SWE-bench Verified: 80.9** (system card, launch SOTA), **LiveCodeBench v6: 84.8**, SWE Multilingual 77.5 (7/8 langs #1), SWE-bench Pro 57.1, NL2Repo 43.2; Aider Polyglot +10.6 over Sonnet 4.5 (value not on fetched pages, launch post).

Reasoning & knowledge:

- **GPQA Diamond: 87** (system card) — just under the 90 reference; AA-GPQA 81.0.
- **HLE: 30.8** (Qwen table) / **AA-HLE: 13.2** — below the 40 reference; **AA Intelligence Index: 23.7** (v4.3.2 re-base; launch-era ~mid-30s era).
- Math is the strong suite: **AIME26 95.1, HMMT Feb-25 92.9 / Nov-25 93.3 / Feb-26 85.3**; FrontierMath v2 T1–3 20.69, T4 4.167 (Epoch).
- MMLU-Pro 89.5/88.9, MMLU-Redux 96.6, C-Eval 92.2, SuperGPQA 70.6; AA-Omniscience −4.1 (accuracy 40.9, hallucination 76.2).

Multimodal:

- **MMMU-Pro: 70.6 / 71.2 (AA)**, MathVision 74.3, CharXiv 68.5, VideoMMMU 84.4 (frame-based), ScreenSpot Pro 45.7, V* 67.0.

Long context:

- 200K window; **LongBench v2 64.4, AI-Needle 74%, AA-LCR 70.7** — mid-grade long-context evidence, no MRCR row.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 66.3 and τ² 86.3 are strong era-leading rows with WideResearch/MCP-Tasks in support; TB2.0 59.3, Toolathlon 43.5, MCP Atlas 42.3 and sub-30 planning rows hold it under 85.
- **Reasoning: 83/100.** Elite math (AIME26 95.1, HMMT 93.3) and near-reference GPQA 87; HLE 30.8/13.2 misses the 40 bar outright and the current AA index (23.7) is low-mid — era-appropriate, not modern-frontier.
- **Context window: 86/100.** 200K standard with LongBench v2 64.4 / AI-Needle 74 / LCR 70.7 — a real but non-1M window with only mid retrieval evidence (262K-class ≈ 90 minus the evidence gap).
- **Multimodal: 67/100.** Text+image with MMMU-Pro 70.6–71.2, MathVision 74.3, CharXiv 68.5 — solid image-band depth, nothing beyond images.
- **Coding: 81/100.** Launch-SOTA SWE-V 80.9 and LCB v6 84.8 with multilingual/Aider leadership; SWE Pro 57.1 mid and every absolute row below the modern frontier refs (SWE-V 85+, TB2.1 85+) the 4.6/4.8/5.x line reaches.
- **Cost efficiency: 50/100** (excluded from Overall). $5/$25 sits midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors; batch 50% and 90%-off cache reads plus the 67% Opus-tier cut (vs $15/$75) keep it at 50.
- **Overall Score: 80/100.** (82+83+86+67+81)/5 = 79.8 → 80 — the November-2025 flagship that made Opus affordable and led launch-era coding/computer-use, judged against today's refs: real era-SOTA rows (OSWorld 66.3, SWE-V 80.9, τ² 86.3, AIME 95) weighed against sub-reference GPQA/HLE, a 200K-only window, and a BenchLM profile that every later Claude overtakes.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — anthropic.com/news/claude-opus-4-5 (release date, API id, pricing, SOTA claims, effort parameter, methodology), BenchLM (58 rows with per-row provenance incl. system-card PDF, AA rows, Epoch leaderboard, family scores; updated 2026-10-07), AA rows via BenchLM, repo meta. Scores are normalized 1–100 interpretations, not official vendor scores; family ordering checked against own Opus 4.6/4.8/5/5.5 reports (4.5 < 4.6 maintained).
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Claude Opus 4.5 — findings by Mimo v2.6 Flash

- Source: Anthropic / Claude Opus 4.5
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-26 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Nov 2025 Opus flagship — the model that cut Opus-tier pricing 67% ($15/$75 → $5/$25) and posted SOTA real-world software-engineering results at launch. Succeeded by Opus 4.6/4.7/4.8/5/5.5 (Anthropic product page), but Anthropic still marks it active (Verdent FAQ). Not an alias — distinct from every later Opus snapshot.
- **Provider / access:** Claude API (`claude-opus-4-5-20251101`, snapshot `claude-opus-4-5`), Amazon Bedrock (`anthropic.claude-opus-4-5...`), Google Vertex AI, Microsoft Foundry, Claude apps — Chat Completions-style Messages API.
- **Release / knowledge:** 2025-11-24 (Anthropic announcement); knowledge cutoff not verified in sources reviewed.
- **IDs:** `anthropic/claude-opus-4.5` (registry id); Claude API `claude-opus-4-5-20251101`. No Free API tier exists for Anthropic models — no Free ID (`noFreeId`).
- **Context window:** 200,000 tokens (Anthropic eval methodology: "200K context window"; BenchLeader/OpenRouter provider tables) — max output not verified in sources reviewed.
- **Modalities:** text, image in; text out ("text · vision" — ModelBeats); reasoning yes (thinking + effort levels: low/medium/high, Anthropic "thinking" config benchmarked); tool calls yes (function calling, computer use, multi-agent); JSON mode: no verified public statement found for this snapshot.
- **Pricing (as of 2026-09-26):** $5.00 / 1M input, $25.00 / 1M output (Anthropic; OpenRouter/BenchLeader provider tables — Anthropic route $5/$25, Bedrock up to $5.50/$27.50); prompt caching available (Verdent notes cache-read/write rates). Paid only.
- **Architecture:** proprietary (Anthropic); parameters undisclosed; Transformer architecture (ModelBeats).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **98.2%** (ModelBeats, rank #5) / **86.3%** (Artificial Analysis non-reasoning config via OpenRouter) — harness difference noted. Tau2-Bench Telecom **89.5% (54/332)**; Tau2 Airline **84.0% (1/21)**; TAU3-Bench **69.3% (7/13)**; t2-bench **85.3% (3/17)** (BenchmarkList 2026-10-06 — fills the Tau3 gap)
- Terminal-Bench 2.0: **59.8%** (ModelBeats, #53) / **63.1%** (BenchmarkList "Terminal Bench" rank 3/8, 2026-10-06). Terminal-Bench Hard: **47.0%** (rank 13/326). Terminal-Bench 2.1: no verified public score found (re-checked 2026-10-06).
- GDPval-AA: **1416 Elo** (ModelBeats, #33; field best Claude Fable 5 1932) / **1453 Elo** (BenchmarkList, rank 42/352 — newer panel row)
- OSWorld-Verified: **66.3%** (ModelBeats, #21) / **76.3%** (BenchmarkList, rank 23/70); BrowseComp: **67.8%** (#36); IFBench: 43.0% (AA via OpenRouter)
- MCP Atlas: **69.8%** (BenchmarkList, rank 31/48 — fills the MCP-Atlas gap); ALFWorld **1.0 (1/8)**; Berkeley Function-Calling **77.5% (1/85)**; The Agent Company **46.5% (2/8)** (BenchmarkList 2026-10-06).
- Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (ModelBeats, #58) / **86.0%** (Epoch AI via BenchLeader, #71) / 81.0% (AA non-reasoning via OpenRouter).
- HLE: **43.2%** (ModelBeats, #23) / **25.2%** (Scale AI/CAIS via BenchLeader, #15) / 13.2% (AA non-reasoning) — harness spread noted.
- AA-LCR: **77.3%** thinking / 70.7% non-reasoning (Artificial Analysis via BenchLeader/OpenRouter).
- CritPt (AA): 0.3% non-reasoning (OpenRouter); thinking config: no verified public score found.
- Artificial Analysis Intelligence Index: **29.1** (#102 thinking) / 23.7 (#155 non-reasoning) (BenchLeader). BenchLM overall: no verified public score found.
- AA-Omniscience: accuracy **40.9%**, non-hallucination 23.8% (AA via OpenRouter).
- SimpleBench: 62.0% (#22); MMLU: 90.8% (#4); AIME: 93.0% (#33); ARC-AGI-1: 80.0% (#9); ARC-AGI-2: 37.6% (#21); MGSM: 95.2% (#1) — ModelBeats/BenchLeader.

Coding:

- SWE-bench Verified: **80.9%** (ModelBeats, #14; Anthropic launch claim, Verdent confirms).
- SWE-bench Pro: **52.0%** (ModelBeats, #57).
- LiveCodeBench: **83.7%** (ModelBeats, #34); Aider Polyglot: **89.4%** (#1); HumanEval: 99.4% (#1); CyberGym: 50.6% (#11).
- SciCode / Vibe Code Bench / DeepSWE / Coding Index: SciCode **49.5%** (BenchmarkList, rank 58/296); VibeCodingBench **89.15 rank 1/15** and SWE-bench Full **52.6% (1/9)**, SWE-bench Verified (Bash Only) **64.8% (1/12)**, CORE-Bench Hard **77.8% (1/18)** (BenchmarkList 2026-10-06 — fills the SciCode/Vibe gaps); DeepSWE / Coding Index still absent

Long context:

- 200K window (Anthropic eval methodology); AA-LCR 77.3% (thinking) shows strong long-context reasoning; MRCR / RULER: no verified public score found.

Other: Arena Elo 2184.1 (#68; High config 2220.5) per ModelBeats; MMMU-Pro 70.6% (#42) / 74.0% (AA thinking) / 83.0% (Vals); MMMU 80.7% (#22); output speed 48 tok/s (AA via BenchLeader).

### Normalized scores (1–100)

- **Tool use: 86/100.** τ²-Telecom 98.2% (#5), OSWorld-Verified 66.3% (BenchmarkList alt 76.3), GDPval 1416/1453, BrowseComp 67.8%, MCP Atlas 69.8% (2026-10-06 fill), TAU3 69.3% (fill) form a top-tier agent profile; TB2.0 59.8–63.1% and TB Hard 47.0% (below frontier TB2.1 levels) still cap it below 90.
- **Reasoning: 80/100.** GPQA 86–87% and HLE up to 43.2% are frontier-adjacent, but the AA Intelligence Index (29.1, #102) and CritPt ≈0 put it well below the 90–100 frontier band; harness spreads add caution.
- **Context window: 72/100.** 200K is the explicit 70-point anchor of the 200K–500K tier; AA-LCR 77.3% (thinking) justifies a small bump above it.
- **Multimodal: 70/100.** Image input with text output sits at the top of the 60–70 band, supported by MMMU 80.7% / MMMU-Pro up to 83.0% (Vals) and GeoBench 75.0% (#9); no audio/video/PDF-in evidence verified, so it cannot enter the 75+ band.
- **Coding: 89/100.** SWE-bench Verified 80.9% (#14), LiveCodeBench 83.7%, Aider Polyglot 89.4% (#1), HumanEval 99.4%, plus SciCode 49.5% and VibeCodingBench 89.15 (#1) now cited (2026-10-06 fill); TB2.0 59.8–63.1% and missing DeepSWE/Coding-Index rows keep it just below 90.
- **Cost efficiency: 50/100.** $5/$25 sits between the $3/$15 (≈60) and $10/$50 (≈30) methodology anchors; the 67% Opus-tier price cut is historically notable but the model is still an expensive flagship with no free tier.
- **Overall Score: 79.4/100.** Half-up mean of Tool 86, Reasoning 80, Context 72, Multimodal 70, Coding 89 = 397/5 = 79.4. Best fit: high-judgment agentic coding and computer-use planning where the Opus tier earns its price; route routine implementation to cheaper workers.

---

## Signature

- Provided by: **Mimo v2.6 Flash (Xiaomi/MiMo-V2.6-Flash)** — 2026-10-06
- Method: fresh public web research (Anthropic announcement, ModelBeats, BenchLeader, OpenRouter, Verdent); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (192 benchmarks) — filled Tau3 (69.3 rank 7), MCP Atlas (69.8), SciCode (49.5), VibeCodingBench (89.15 rank 1), SWE-Full/Bash-Only/CORE-Bench rows; TB Hard 40.9→47.0, GDPval/OSWorld alternate rows added; Tool 85→86, Coding 88→89, Overall re-derived 79.0→79.4. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


