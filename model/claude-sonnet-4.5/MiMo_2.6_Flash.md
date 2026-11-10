# Claude Sonnet 4.5 — findings by MiMo 2.6 Flash

- Source: Anthropic launch post (Sep 29, 2025), BenchLM (Opus 4.5 system card + Epoch/leaderboard rows), Ars Technica, RD World, repo meta
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-07 (Overall 78). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-10, **47.22/100, #112/1020, 20/804 rows** — was 48.6
> #100/887, 12/623) with per-row provenance (Opus 4.5 system card PDF, Epoch
> AI FrontierMath v2 leaderboards, VITA/Gert/JobBench, OpenRouter), plus
> fresh web confirmation of the context-policy change (platform.claude.com,
> claudelab.net, note.com, endoflife.ai results via DuckDuckGo). Change:
> **Context 91→68** — the previous score's stated basis ("1M beta available
> … held … only by the beta's existence") is void: the `context-1m-2025-08-07`
> beta was **deprecated 2026-04-30 and 1M is now disabled for Sonnet
> 4.5/Sonnet 4** → effective window is 200K GA (methodology tier "200K =
> 70"); with zero retrieval rows at 200K and the model's only-ever retrieval
> measurement (MRCR v2 8-needle **18.5%** at 1M, yage.ai — already recorded
> in the merged-duplicate section below) the score lands at **68**, matching
> that same-stem section's independent Context 68. **Overall 78→74** (mean
> 78.4 → 73.8). Recorded, not credited as a move: **FrontierMath v2 revised**
> — T1–3 13.495→**23.860**, T4 4.167→**2.439** (mixed revision, still far
> below the 60–75 frontier T1–3 band) → Reasoning held at 78. Also fresh: the
> model is **deprecated 2026-09-30, retiring 2026-11-30, replaced by Sonnet
> 5.5**. Held: Tool 80 (TB2.0 50, OSWorld-V 61.4, VITA 17.0, Gert 48.51,
> JobBench 27.7 re-confirm byte-identically), Multimodal 64 (no vision
> rows), Coding 79 (SWE-V 77.2 re-confirms), Cost 62 (pricing unchanged
> $3/$15). Design Arena 1196→1186 = noise. Merged-duplicate section below
> untouched.

## Model card

- **Name:** Claude Sonnet 4.5 — Anthropic's Sept 2025 Sonnet flagship, released **2025-09-29** (API id `claude-sonnet-4-5`), launched together with Claude Code 2.0 and the Claude Agent SDK; superseded by Sonnet 4.6 → 5 → 5.5; **deprecated 2026-09-30, scheduled to retire 2026-11-30, replaced by Sonnet 5.5** (fresh confirmation 2026-11-10).
- **Short description:** "**The best model in the world for agents, coding, and computer use**" at launch: **SOTA SWE-bench Verified 77.2** (82.0 with parallel test-time compute), **OSWorld 61.4** (up from Sonnet 4's 42.2 four months earlier — a 45% jump), observed **maintaining focus for 30+ hours** on complex multi-step tasks, and Anthropic's most accurate/detailed model for long-running tasks with enhanced domain knowledge in coding, finance and cybersecurity. Drove the Claude for Chrome extension. BenchLM (2026-11-10): 47.22/100, #112/1020 (20/804 rows — thin, flagged conservative), below Sonnet 4.6's 55.51.
- **Provider / access:** Anthropic API, Claude apps, clouds. Proprietary. No free id (meta).
- **Release / knowledge:** 2025-09-29.
- **Context window:** **200K standard (64K out)** — the 1M beta (`context-1m-2025-08-07`) was **deprecated 2026-04-30 and 1M is now disabled for Sonnet 4.5/Sonnet 4** (fresh confirmation 2026-11-10: platform.claude.com, claudelab.net, note.com, endoflife.ai); no longer a 1M-tier model.
- **Modalities:** **text, image, file in; text out.**
- **Pricing:** **$3.00 / $15.00 per 1M** (flat at 200K — same tariff as Sonnet 4), **cached input $0.30 (90% off)**.

### Raw benchmarks found

> Primary: Anthropic launch post (2025-09-29) + rows as re-hosted by BenchLM
> (Opus 4.5 system card, Epoch leaderboard, VITA/Gert/JobBench leaderboards),
> press coverage (Ars Technica, RD World). BenchLM now lists 20 rows
> (snapshot 2026-11-10; was 12 at the previous pass) — still a thin
> profile, flagged.

Agentic / tool use:

- **OSWorld-Verified: 61.4** (system card; launch SOTA, 100 max steps, 4-run avg).
- **Terminal-Bench 2.0: 50** (Opus 4.5 system card comparison) — mid.
- Weak: VITA-Bench 17.0, Gert Labs 48.51, JobBench 27.7; Design Arena Website Elo 1186 (OpenRouter — was 1196, noise-level revision).
- Qualitative: 30-hour continuous focus on multi-step tasks (launch), Claude for Chrome production use.

Coding:

- **SWE-bench Verified: 77.2** (10-trial avg, no TTC, 200K thinking budget; 82.0 with parallel test-time compute) — SOTA at launch; no TB2.1/LCB/SciCode row in current coverage.

Reasoning & knowledge:

- **GPQA: 83.4** (Opus 4.5 system card) — misses the 90 reference. **AIME 2025: 87.**
- FrontierMath v2 T1–3 **23.860**, T4 **2.439** (Epoch, revised on the 2026-11-10 BenchLM snapshot — was T1–3 13.495, T4 4.167; mixed revision, still far below the 60–75 frontier T1–3 band); ARC-AGI-2 13.6.
- No HLE row for 4.5 in current coverage (launch-era HLE ~mid-20s per era, not on fetched pages — flagged absent).

Multimodal / long context:

- No MMMU/vision row in the 20-row profile (text+image+file input per spec); no MRCR/LCR retrieval row at the 200K GA window. The model's only-ever retrieval measurement is the deprecated 1M beta's **MRCR v2 8-needle 18.5%** (yage.ai timeline — recorded in the merged-duplicate section below), and the beta itself was retired 2026-04-30.

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld 61.4 was genuine launch-SOTA computer use with strong qualitative long-horizon evidence; TB2.0 50 is mid and VITA/JobBench-class rows are weak — all agentic rows re-confirm byte-identically on the 2026-11-10 snapshot (no change).
- **Reasoning: 78/100.** AIME25 87 is solid, but GPQA 83.4 misses 90, FrontierMath v2 is mid-tier (revised this pass: T1–3 13.495→23.860, T4 4.167→2.439 — mixed, still far below frontier), and no HLE/AI-index row exists for this model in current coverage (no change).
- **Context window: 68/100.** The previous 91 rested explicitly on the 1M beta's existence — that beta was **deprecated 2026-04-30 and 1M is disabled for Sonnet 4.5** (freshly confirmed 2026-11-10), leaving 200K GA → methodology tier "200K = 70"; with zero retrieval rows at 200K and the model's only-ever retrieval figure (MRCR v2 8-needle 18.5% at 1M) it lands at 68 (was 91), matching the merged-duplicate section's independent reading.
- **Multimodal: 64/100.** Text+image+file in with no vision benchmark evidence — image band, evidence-free edge (no change).
- **Coding: 79/100.** Launch-SOTA SWE-V 77.2 (82 with TTC) re-confirms on the 2026-11-10 snapshot; absolute level now sits under the 85 ref and modern TB2.1/SciCode anchors have no 4.5 rows to confirm against (no change).
- **Cost efficiency: 62/100** (excluded from Overall). $3/$15 sits on the $3/$15 ≈ 60 anchor; 90%-off cache ($0.30) and flat pricing (no 200K premium) nudge it to 62 (pricing unchanged this pass).
- **Overall Score: 74/100.** (80+78+68+64+79)/5 = 369/5 = 73.8 → 74 — the September-2025 coding/computer-use champion (SWE-V 77.2, OSWorld 61.4, 30-hour focus) now priced as a legacy 200K-tier model: its 1M beta is gone (deprecated 2026-04-30), the SKU itself is deprecated with retirement set for 2026-11-30, and the benchmark rows the 4.6/5.x line has moved well past remain.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 with per-row provenance — Opus 4.5 system card PDF, Epoch AI FrontierMath v2 leaderboards, VITA/Gert/JobBench, OpenRouter — plus fresh web confirmation of the 1M-beta deprecation [platform.claude.com, claudelab.net, note.com, endoflife.ai] and the model's own deprecation/retirement dates; checked against the 2026-10-07 sources: anthropic.com launch post, anthropic.com/claude/sonnet, BenchLM 2026-10-07, Ars Technica, RD World, repo meta). Scores are normalized 1–100 interpretations, not official vendor scores; thin-coverage flagged; family ordering checked against own Sonnet 4.6 (80), Sonnet 5 (84), Sonnet 5.5 (88) and Opus 4.5 (80) reports — 4.5 (74) now correctly sits below Sonnet 4.6. Previous Signature 2026-10-07; merged-duplicate section (2026-10-06, Context 68) preserved untouched.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Claude Sonnet 4.5 — findings by Mimo v2.6 Flash

- Source: Anthropic / Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-23 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September 2025 hybrid-reasoning Sonnet that led SWE-bench Verified and computer-use at launch; legacy-but-active SKU (successor: Sonnet 4.6 → Sonnet 5) still widely used in Claude Code and third-party agents. Paired with `claude-sonnet-4-5-thinking` variant.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude apps / Claude Code. Folder meta id `opencode/claude-sonnet-4.5`.
- **Release / knowledge:** **2025-09-29**; reliable knowledge cutoff **Jan 2025**, training-data cutoff **Jul 2025**. Status Active (legacy); retirement not sooner than 2026-09-29.
- **IDs:** `claude-sonnet-4-5-20250929` (alias `claude-sonnet-4-5`); Bedrock `anthropic.claude-sonnet-4-5-20250929-v1:0`.
- **Context window:** **200K** standard (max output **64K**). 1M beta (`context-1m-2025-08-07`) existed but was **deprecated 2026-04-30** and performed poorly (MRCR v2 8-needle **18.5%** at 1M — yage.ai timeline). Effective long-context tier is therefore the 200K GA window, not 1M.
- **Modalities:** text / image / PDF in; text out; extended thinking (budget_tokens, interleaved thinking on for vendor scores); tool use, prompt caching, batch API.
- **Pricing (as of 2026-09-23):** **$3.00 / $15.00** per 1M in/out; cache read **$0.30** (−90%); 5m cache write $3.75; Batch **50%** off. No Free ID.
- **Architecture:** proprietary (undisclosed params). Released under ASL-3.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **61.4%** (Anthropic launch table — led the field at Sep 2025; ModelBeats rank now #25/29 as later models hit 75–85%)
- Terminal-Bench 2.0: **51.0%** (Claude Sonnet 4.6 system card comparison table) / **50%** (BenchLM shared row)
- τ²-bench (retail): **86.2%** (llm-stats); airline/telecom reported with prompt addenda (Anthropic methodology footnote)
- MCP-Atlas: **43.8%** pass rate, 62.1% mean coverage (Scale AI arXiv 2602.00933 Table 3)
- Toolathlon / MCP Atlas / OSWorld 2.0 / Tau3-Banking: previously missing — BenchmarkList 2026-10-06 fills: **Toolathlon 41.0% (38/41)**, **MCP Atlas 59.5% (41/48)**, **Tau3-Banking 24.5% (43/176)**, **OSWorld 62.9% (11/72) / OSWorld-Verified 62.9% (34/70)**, **GDPval-AA 1055 Elo (100/352)**, **TAU3-Bench 62.9% (13/13)** (Anthropic launch table had OSWorld-Verified 61.4%)
- JobBench: **27.7%**; VITA-Bench **17.0%**; Gert Labs **48.51%** (BenchLM ledger)
- Agentic public-lane composite: **55.4 / #~100 of 151** (BenchLM directional index)

Reasoning / knowledge:

- GPQA (Diamond): **83.4%** (BenchLM / Anthropic Opus 4.5 system-card cross-list); Vals GPQA-D **84.5%** cited in some mirrors
- AIME 2025: **87.0%** (llm-stats)
- ARC-AGI-2: **13.6%** (BenchLM / Opus 4.5 system card — far below 2026 frontier 50–92%)
- HLE: **~9.4%** (BenchGecko cross-list; exact harness label differs from Anthropic launch table — treat as low-single-digit-to-teens, not frontier 40%+)
- MMMLU (multilingual): **89.1%** (llm-stats); MMLU-Pro **83.0%** (Serenities aggregate)
- Artificial Analysis Intelligence Index: **37** (reasoning variant) / **23–29** (non-reasoning / estimated rows — AA page now marked deprecated)
- LMArena Text (style-control): **1453–1456** (OfoxAI / Serenities; ~#47–49 of 374)
- CritPt / LCR / Omniscience standalone rows: **no verified public score found** for this ID in reviewed rows

Coding:

- SWE-bench Verified: **77.2%** (Anthropic, 10-trial mean, 200K thinking budget, full 500-problem set); **82.0%** with parallel test-time compute (high-compute row); 1M-context config 78.2% (not primary)
- LiveCodeBench: **62.0%** (Serenities) / **71.4%** (AA via Kilo — harness labels differ; both mid-band)
- Aider Polyglot: **68.0%** (Serenities)
- HumanEval+: **90.0%**; MATH **87.0%**; GSM8K **95.5%** (Serenities aggregate)
- AA Coding Index: **52.1%** (AA / Kilo)
- SWE-bench Pro / DeepSWE / Terminal-Bench 2.1: **no verified public score found** for this ID in reviewed rows

Long context:

- GA window **200K**; no published MRCR/RULER score at 200K in reviewed rows
- Historical 1M beta: MRCR v2 8-needle **18.5%** at 1M (yage.ai long-context timeline; Anthropic did not market this as a strength)
- Net: solid within 200K for code+chat agents; not a long-context model by 2026 standards

Multimodal:

- MMMUval: **77.8%** (llm-stats shared row)
- CharXiv / MMMU-Pro / video/audio: **no verified public score found** for this ID in reviewed rows (text+image+PDF in; text out only — no native video/audio pipeline)

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld 61.4/62.9% and τ²-retail 86.2% were launch-frontier and still respectable; TB2.0 ~50–51%, MCP-Atlas 59.5% (BenchmarkList rank 41/48) and Toolathlon 41.0% (rank 38/41) sit mid/low-band — filled-gap re-rate 2026-10-06 — short of 2026 75%+/60%+ refs; Tau3 24.5% also low.
- **Reasoning: 71/100.** GPQA 83.4% and AIME 87% clear the strong-upper band, but ARC-AGI-2 13.6% and HLE ~9% are far below frontier (50%+/40%+); AA Index 37 (reasoning) is mid-pack. No CritPt/LCR rows to push higher.
- **Context window: 68/100.** 200K GA is the honest number (1M beta deprecated and scored 18.5% MRCR); usable for agent loops with context editing/memory tools shipped alongside, but no ≥1M tier and no strong published retrieval scores at depth.
- **Multimodal: 68/100.** Text/image/PDF in with MMMUval 77.8% is solid image-in quality; no video/audio, text-only output, and no CharXiv/MMMU-Pro rows block the 75+ multimodal band.
- **Coding: 78/100.** SWE-bench Verified 77.2% (82% high-compute) was SOTA at launch and remains upper-mid; LiveCodeBench 62–71%, Aider 68%, AA Coding 52% are solid but short of 2026 DeepSWE 74%+ / SWE-Pro 60%+ / Coding Index 70%+ frontier refs; no SWE-Pro or DeepSWE row for this ID.
- **Cost efficiency: 60/100.** $3/$15 is the methodology's ~$3/$15 ≈60 tier with −90% cache and 50% batch helping repetitive agents; no Free ID; competitive vs Opus but no longer price-performance leader vs Sonnet 5 ($2/$10 intro → permanent) or open-weight peers.
- **Overall Score: 71.8/100.** Mean of (74 + 71 + 68 + 68 + 78) / 5 = 71.8; best-fit as Anthropic's proven agentic-coding workhorse when 200K context is enough and the mature Claude Code / Agent SDK ecosystem matters more than topping 2026 leaderboards.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: fresh public web research (Anthropic launch post + methodology footnotes, Sonnet 4.6 system card comparison, BenchLM ledger, llm-stats, Artificial Analysis, ModelBeats OSWorld, Scale MCP-Atlas arXiv, yage.ai long-context timeline, Serenities/Kilo aggregates); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (196 benchmarks) — filled Toolathlon (41.0), MCP Atlas (59.5), Tau3 (24.5), OSWorld (62.9), GDPval (1055), GAIA/Berkeley-FC/ARC-AGI rows; Tool 73→74, Overall 71.6→71.8. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

