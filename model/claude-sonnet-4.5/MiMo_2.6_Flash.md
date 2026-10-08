# Claude Sonnet 4.5 — findings by MiMo 2.6 Flash

- Source: Anthropic launch post (Sep 29, 2025), BenchLM (Opus 4.5 system card + Epoch/leaderboard rows), Ars Technica, RD World, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5 — Anthropic's Sept 2025 Sonnet flagship, released **2025-09-29** (API id `claude-sonnet-4-5`), launched together with Claude Code 2.0 and the Claude Agent SDK; superseded by Sonnet 4.6 → 5 → 5.5 but still active.
- **Short description:** "**The best model in the world for agents, coding, and computer use**" at launch: **SOTA SWE-bench Verified 77.2** (82.0 with parallel test-time compute), **OSWorld 61.4** (up from Sonnet 4's 42.2 four months earlier — a 45% jump), observed **maintaining focus for 30+ hours** on complex multi-step tasks, and Anthropic's most accurate/detailed model for long-running tasks with enhanced domain knowledge in coding, finance and cybersecurity. Drove the Claude for Chrome extension. BenchLM (2026-10-07): 48.6/100, #100/887 (12/623 rows — thin, flagged conservative), below Sonnet 4.6's 55.33.
- **Provider / access:** Anthropic API, Claude apps, clouds. Proprietary. No free id (meta).
- **Release / knowledge:** 2025-09-29.
- **Context window:** **200K standard (64K out) / 1M beta** (Tier 4+ or custom limits, per meta).
- **Modalities:** **text, image, file in; text out.**
- **Pricing:** **$3.00 / $15.00 per 1M** (flat at 200K — same tariff as Sonnet 4), **cached input $0.30 (90% off)**.

### Raw benchmarks found

> Primary: Anthropic launch post (2025-09-29) + rows as re-hosted by BenchLM
> (Opus 4.5 system card, Epoch leaderboard, VITA/Gert/JobBench leaderboards),
> press coverage (Ars Technica, RD World). Only 12 BenchLM rows — thin profile, flagged.

Agentic / tool use:

- **OSWorld-Verified: 61.4** (system card; launch SOTA, 100 max steps, 4-run avg).
- **Terminal-Bench 2.0: 50** (Opus 4.5 system card comparison) — mid.
- Weak: VITA-Bench 17.0, Gert Labs 48.51, JobBench 27.7; Design Arena Website Elo 1196 (OpenRouter).
- Qualitative: 30-hour continuous focus on multi-step tasks (launch), Claude for Chrome production use.

Coding:

- **SWE-bench Verified: 77.2** (10-trial avg, no TTC, 200K thinking budget; 82.0 with parallel test-time compute) — SOTA at launch; no TB2.1/LCB/SciCode row in current coverage.

Reasoning & knowledge:

- **GPQA: 83.4** (Opus 4.5 system card) — misses the 90 reference. **AIME 2025: 87.**
- FrontierMath v2 T1–3 13.495, T4 4.167 (Epoch); ARC-AGI-2 13.6.
- No HLE row for 4.5 in current coverage (launch-era HLE ~mid-20s per era, not on fetched pages — flagged absent).

Multimodal / long context:

- No MMMU/vision row in the 12-row profile (text+image+file input per spec); no MRCR/LCR retrieval row.

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld 61.4 was genuine launch-SOTA computer use with strong qualitative long-horizon evidence; TB2.0 50 is mid and VITA/JobBench-class rows are weak.
- **Reasoning: 78/100.** AIME25 87 is solid, but GPQA 83.4 misses 90, FrontierMath 13.5 is mid-tier, and no HLE/AI-index row exists for this model in current coverage.
- **Context window: 91/100.** 200K standard with 1M beta available — but zero retrieval-quality rows for this model, held below the 262K-class 90-plus range only by the beta's existence.
- **Multimodal: 64/100.** Text+image+file in with no vision benchmark evidence — image band, evidence-free edge.
- **Coding: 79/100.** Launch-SOTA SWE-V 77.2 (82 with TTC) is a real headline row; absolute level now sits under the 85 ref and modern TB2.1/SciCode anchors have no 4.5 rows to confirm against.
- **Cost efficiency: 62/100** (excluded from Overall). $3/$15 sits on the $3/$15 ≈ 60 anchor; 90%-off cache ($0.30) and flat pricing (no 200K premium) nudge it to 62.
- **Overall Score: 78/100.** (80+78+91+64+79)/5 = 78.4 → 78 — the September-2025 coding/computer-use champion (SWE-V 77.2, OSWorld 61.4, 30-hour focus), judged against today's references: sub-reference GPQA, mid TB2.0, a 12-row evidence profile, and benchmark rows the 4.6/5.x line has moved well past.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — anthropic.com/news/claude-sonnet-4-5 (release date, SWE-V methodology, OSWorld claims, 30-hour focus), anthropic.com/claude/sonnet (positioning), BenchLM (12 rows with provenance incl. Opus 4.5 system card PDF and Epoch leaderboard; updated 2026-10-07), Ars Technica + RD World (SWE-V 82 TTC variant, pricing confirmation), repo meta. Scores are normalized 1–100 interpretations, not official vendor scores; thin-coverage flagged; family ordering checked against own Sonnet 4.6 (80), Sonnet 5 (84), Sonnet 5.5 (88) and Opus 4.5 (80) reports.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
