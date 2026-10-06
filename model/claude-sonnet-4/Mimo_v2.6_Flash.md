# Claude Sonnet 4 — findings by Mimo v2.6 Flash

- Source: Anthropic / Claude Sonnet 4
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-26 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 balanced Claude 4 model — a dense hybrid-reasoning Sonnet that matched Opus 4 on SWE-bench Verified at a fraction of the price. Legacy generation: superseded by Sonnet 4.5/4.6/5 (BenchLeader version history), still served and marked active.
- **Provider / access:** Claude API (Messages API, Chat-Completions-style), Amazon Bedrock (`$3/$15` route verified), Google Vertex AI; Claude apps. Model snapshot: `claude-sonnet-4` family (dated `claude-sonnet-4-20250514` per Anthropic naming convention — dated ID not re-verified in this research).
- **Release / knowledge:** 2025-05-22 (ModelBeats, BenchLeader). Knowledge cutoff not verified in sources reviewed.
- **IDs:** `anthropic/claude-sonnet-4` (registry id). No Free API tier for Anthropic models — no Free ID (`noFreeId`).
- **Context window:** 200,000 tokens (ModelBeats, BenchLeader provider tables) — max output not verified in sources reviewed.
- **Modalities:** text, image in; text out ("text · vision" — ModelBeats); reasoning yes (hybrid reasoning; thinking effort configs benchmarked by BenchLeader); tool calls yes (function calling; tau-bench measured); JSON mode: no verified public statement found for this snapshot.
- **Pricing (as of 2026-09-26):** $3.00 / 1M input, $15.00 / 1M output (ModelBeats; BenchLeader provider tables), prompt cache reads ~$0.30/1M (BenchLeader cost model). Paid only.
- **Architecture:** proprietary (Anthropic); dense transformer, hybrid-reasoning; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- tau-bench: **80.5%** (ModelBeats, rank #4; field best Claude Opus 4.1 82.4%). Tau2-Bench Telecom **64.6%** (BenchmarkList, rank 118/332); Tau2 Airline **60.0%** (13/21).
- Terminal-Bench 2.1: **36.3%** (BenchmarkList 2026-10-06, rank 103/194 — fills the former TB2.1 gap; field leader Fable 5.1 91.4%). Terminal-Bench (2.0-era harness): **35.5%** (ModelBeats, #10). Terminal-Bench Hard: **31.1%** (rank 67/326).
- Tau3-Banking: **16.7%** (BenchmarkList, rank 64/176 — fills the Tau3 gap)
- GDPval-AA: **877 Elo** (BenchmarkList, rank 132/352 — fills the GDPval gap)
- OSWorld-Verified: **43.9%** (BenchmarkList, rank 49/70 — fills the OSWorld gap)
- ChronosBench **98.2% (1/13)** · AndroidWorld **94.8% (2/22)** · OSWorld-MCP **45.0% (1/7)** · WildAgtEval **67.5% (1/6)** · MCP-Universe **29.4% (5/27)** · ALFWorld **0.917 (5/8)** · Online Mind2Web (HAL) **40.0% (5/15)** (BenchmarkList 2026-10-06)
- Claw-Eval / ClawProBench, Toolathon / MCP-Atlas: no verified public score found (re-checked 2026-10-06)

Reasoning / knowledge:

- GPQA Diamond: **75.4%** (ModelBeats, #118) / **79.2%** (Epoch AI via BenchLeader, #117) / 77.7% (AA non-reasoning) / 68.3% (AA thinking).
- HLE: **7.8%** (Scale AI/CAIS via BenchLeader, #35) / 10.7% (AA non-reasoning) / 4.3% (AA thinking).
- AA-LCR: **70.3%** thinking (#181) / 44.0% non-reasoning (Artificial Analysis via BenchLeader).
- CritPt: no verified public score found. ARC-AGI-2: **5.9%** (BenchmarkList, rank 58/99); ARC-AGI-1: **40.0%** (rank 67/97).
- Artificial Analysis Intelligence Index: **18.9** (#214 thinking) / 16.6 (#239 non-reasoning) (BenchLeader). BenchLM overall: no verified public score found.
- SimpleBench: 45.5% (#56); AIME: 70.5% (#107); MMLU: 86.5% (#40) — BenchLeader/ModelBeats.

Coding:

- SWE-bench Verified: **72.7%** (ModelBeats, #61).
- SWE-bench Lite: **60.3%** (BenchmarkList 2026-10-06, rank 1 of 18 — field leader)
- LiveCodeBench: **62.4%** (BenchmarkList, rank 87/123; second row 55.9% rank 41/50 — fills the former LCB gap)
- SciCode: **40.0%** (BenchmarkList, rank 113/296 — fills the SciCode gap); Aider Polyglot: **61.3%** (rank 14/47)
- SWE-bench Multimodal: **35.6%** (rank 8/17); NL2Repo **37.0% (24/34)**; ArtifactsBench **57.28 (6/8)**
- Vibe Code Bench, SWE-bench Pro, DeepSWE / Coding Index: no verified public score found

Long context:

- 200K window; AA-LCR 70.3% (thinking); Fiction.LiveBench 120k: 36.4% (#29) — BenchLeader. MRCR / RULER: no verified public score found.

Other: MMMU 74.4% (#16 validation / #38 ModelBeats); MMMU-Pro 61.8–62.4% (AA) / 74.9% (Vals); LMArena Text 1401 (thinking, #135); Arena Elo 1532.8 (#138, ModelBeats); MASK honesty 95.3% (#3); output speed 53 tok/s (OpenRouter median via BenchLeader).

### Normalized scores (1–100)

- **Tool use: 62/100.** tau-bench 80.5% is elite (#4), but TB2.1 36.3% and TB-2.0 35.5% are weak, GDPval 877 (rank 132) is mid-pack, OSWorld-Verified 43.9% low, Tau3 16.7% low — mixed agentic profile holds the low 60s (gap rows filled 2026-10-06).
- **Reasoning: 63/100.** GPQA 75–79% sits at the top of the methodology's mid band, while HLE 4–11%, AA Index 18.9 and ARC-AGI-2 5.9% are well below frontier — mid-band overall.
- **Context window: 70/100.** 200K is the methodology's explicit 70-point anchor; AA-LCR 70.3% (thinking) and the weak Fiction.LiveBench 120k result (36.4%) leave it exactly there.
- **Multimodal: 66/100.** Image input with text output (60–70 band) plus MMMU 74.4% / MMMU-Pro up to 74.9% (Vals) but no audio/video/PDF-in evidence.
- **Coding: 73/100.** SWE-bench Verified 72.7% (#61), SWE-Lite 60.3% (rank 1), LCB 62.4%, SciCode 40.0%, Aider 61.3% — filled-gap re-rate 2026-10-06; TB2.1 36.3% and absence of SWE-Pro/DeepSWE/Vibe rows keep it out of the 80s.
- **Cost efficiency: 60/100.** $3/$15 matches the methodology's "$3/$15 = ~60" reference exactly; no free tier.
- **Overall Score: 67/100.** Half-up mean of Tool 62, Reasoning 63, Context 70, Multimodal 66, Coding 73 = 66.8 → 67. Best fit: budget paid coding/agent workhorse for teams standardized on Anthropic; upgrade to Sonnet 4.5+ for reasoning-heavy jobs.

---

## Signature

- Provided by: **Mimo v2.6 Flash (Xiaomi/MiMo-V2.6-Flash)** — 2026-10-06
- Method: fresh public web research (ModelBeats, BenchLeader aggregating AA/Epoch/Scale/Vals, Anthropic docs); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (147 benchmarks) — filled TB2.1 (36.3), Tau3 (16.7), GDPval (877), OSWorld-Verified (43.9), LiveCodeBench (62.4), SciCode (40.0), ARC-AGI-1/2 gaps; SWE-Lite rank 1; Coding 72→73 (Overall re-derived 66.6→66.8, display unchanged at 67). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

