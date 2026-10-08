# GPT-5.3 Codex — findings by MiMo 2.6 Flash

- Source: OpenAI GPT-5.3-Codex System Card (cdn.openai.com PDF), Artificial Analysis, BenchLM, Vals AI, OpenRouter
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex — OpenAI's agentic coding model released **2026-02-05** (AA; meta: "Feb 2026"), unifying **GPT-5.2-Codex coding ability with GPT-5.2 reasoning** for long-horizon tool-using engineering work (meta). Served as `gpt-5.3-codex` with **xhigh** reasoning effort benchmarked by AA; lightweight sibling **GPT-5.3-Codex-Spark** exists (queue entry, 60.4).
- **Short description:** Coding-focused derivative in the GPT-5.3 line: proprietary reasoning model positioned between the 5.2 generation and later 5.4/5.5/6.x flagships. AA describes it as "above average in intelligence but somewhat expensive" — a specialist pick for SWE work rather than a general flagship.
- **Provider / access:** OpenAI API only (AA: 1 provider), OpenRouter `openai/gpt-5.3-codex` (400K ctx, $1.75/$14.00 confirmed). Proprietary.
- **Release / knowledge:** 2026-02-05; knowledge cutoff **2025-08-31** (AA) — older than most queue entrants, flagged.
- **Context window:** **400,000 total / 128,000 out** (meta; AA/OpenRouter confirm 400K).
- **Modalities:** **text, image in; text out** — AA's spec and the **MMMU-Pro 78.5** row prove image input; the repo meta's "Text in/out" is stale, flagged (Codex screenshot-driven workflows are the reason image input exists here).
- **Pricing:** **$1.75 in / $14.00 out per 1M**, **cached input $0.175 (90% discount)**; blended (7:2:1) $1.87/1M (AA). Serving: 87 t/s (above tier median) but **TTFT 71.5 s at xhigh** — heavy thinking latency, flagged.

### Raw benchmarks found

> Primary: GPT-5.3-Codex System Card (OpenAI, 2026) for card rows; AA for independent
> rows (index estimated, modality/spec); Vals/Gert/SWE-Rebench/JobBench leaderboards for
> third-party verification.

Agentic / tool use:

- **OSWorld-Verified: 64.7** (system card) — strong computer-use tier.
- **τ²-bench: 86** (AA) — strong.
- **Terminal-Bench 2.0: 77.3** (system card).
- Gert Labs 57.47; JobBench 33.7 (arXiv:2605.26329). No BrowseComp/GDPval/TB2.1 rows found.

Coding:

- **SWE-bench Verified: 85** (system card) — clears the coding references outright.
- SWE-bench Pro **56.8** (system card) — mid-pack (Grok 4.5 64.7, Opus 4.6 ~64, Fable 80.4).
- SWE-Rebench 58.2 (leaderboard); **LiveCodeBench (Vals) 87.3**; SWE-bench (Vals) 78.0; Vibe Code Bench 61.77.

Reasoning & knowledge:

- **AA-GPQA Diamond: 91.5** — clears the 90+ reference. **AA-HLE: 42.5** — clears 40+.
- **AA Intelligence Index (v4.3.2): 33 (estimated)**, #86/225 (median 26) — AA flags "independent evaluation forthcoming."
- AA-LCR 83.3; CritPt 16.9; AA-Omniscience Index 10.9 (accuracy 52.9, hallucination 89.2 — weak knowledge reliability); AA-IFBench 75.4.

Multimodal:

- **AA-MMMU-Pro: 78.5** (image input confirmed); Design Arena Website 1169 (OpenRouter).

Long context:

- 400K window; **AA-LCR 83.3** supports solid long-context reasoning; no MRCR-style retrieval row.

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld-Verified 64.7, τ² 86, TB2.0 77.3 are genuine frontier-band agent rows; held down by thin coverage (no BrowseComp/GDPval/TB2.1) and mid workflow rows (JobBench 33.7).
- **Reasoning: 85/100.** Both references cleared (GPQA 91.5, HLE 42.5) with LCR 83.3; the AA Index of 33 (estimated) is only above-median, Omniscience is weak (10.9), and the Aug-2025 cutoff is stale relative to peers.
- **Context window: 90/100.** 400K/128K — well above the 262K ≈ 90 tier anchor's little brother but under 1M; LCR 83.3 with no retrieval row.
- **Multimodal: 70/100.** Image input with MMMU-Pro 78.5 (top of the image band) and a Design Arena presence; text-only repo meta contradicted by AA spec + measured row, flagged; no video/audio/PDF surface.
- **Coding: 87/100.** SWE-bench Verified 85 is elite (only frontier flagships beat it), LCB 87.3 solid; SWE Pro 56.8 and Vibe 61.77 keep it off the ceiling — a Verified-king, Pro-mid coder.
- **Cost efficiency: 64/100** (excluded from Overall). $1.75/$14 sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (cheaper in, near-anchor out), 90% cache discount helps; a 71.5 s xhigh TTFT is a real latency cost.
- **Overall Score: 84/100.** (86+85+90+70+87)/5 = 83.6 → 84 — OpenAI's Feb-2026 coding specialist: SWE-Verified 85, OSWorld 64.7, τ² 86, GPQA/HLE both clearing references, image input — held from the frontier by a stale cutoff, mid composite index, and Pro-tier (not flagship) coding depth.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — AA model page (release date, spec, modality conflict resolution, index/speed/cost telemetry, GPQA/HLE/MMMU-Pro/LCR/Omniscience rows), BenchLM aggregate (system-card rows with PDF provenance URL, leaderboard rows, updated 2026-10-07), OpenRouter API + benchmarks page (pricing/context), repo meta (positioning, tiers). Scores are normalized 1–100 interpretations, not official vendor scores; AA index marked as its own estimate.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
