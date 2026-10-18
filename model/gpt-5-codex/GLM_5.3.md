# GPT-5 Codex — findings by GLM 5.3

- Source: OpenAI (`opencode/gpt-5-codex`)
- Date: 2026-10-17 (UTC) — new folder discovered via the live Zen models endpoint scan
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's September 2025 agentic-coding model of the GPT-5 Codex line — the Codex CLI/IDE engine that briefly topped Terminal-Bench and SWE-bench Verified at release. Artificial Analysis marks it **deprecated** in favor of GPT-5.1 Codex; Zen deprecated it 2026-07-23 but still serves it.
- **Provider / access:** OpenAI Responses API (`gpt-5-codex`); Codex CLI/IDE; OpenCode Zen `opencode/gpt-5-codex` ($1.07 in / $8.50 out per 1M — Zen pricing table; deprecated 2026-07-23, still on the live endpoint per the 2026-10-17 scan).
- **Release / knowledge:** released 2025-09-23 (Artificial Analysis; Vals concurs); knowledge cutoff **September 2024** (AA).
- **IDs:** `opencode/gpt-5-codex` (Zen); `gpt-5-codex` (OpenAI). No Free ID.
- **Context window:** 400,000 tokens with 128K max output (AA + Vals; the high-effort reasoning variant is what AA tracks).
- **Modalities:** text and image in (AA-verified); text out; reasoning yes (effort levels; Vals runs at high); tool calls; file input (Vals listing); Codex-harness agentic use.
- **Pricing (as of 2026-10-17):** $1.25 in / $10.00 out per 1M via OpenAI (AA median), $1.07/$8.50 on Zen; 90% cache discount; 182.6 tok/s output (notably fast, class median 83.4), TTFT 9.36s.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

> Coverage caveat: BenchLM has no page for this ID; the rows below come from Vals (measured at release, effort=high) and the AA model page (composite + specs only — AA does not display per-benchmark rows for this model). All measurements are from 2025-era boards.

Agent / tool use:

- Terminal-Bench (original v1 board, at release): **58.8% — #1**, a 10% improvement over the then-#1 GPT-5, at lower cost and latency than the other top three (Vals AI eval, 2025-09-24)
- τ²-bench / GDPval-AA / Tau3: **no verified public score found** for this ID
- Codex-harness agentic use: verified product capability (Codex CLI/IDE engine); "optimized for agentic coding, particularly within OpenAI's Codex offering" (Vals)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25** (estimated; #123/217 in its price class, below the median 27; AA model page)
- GPQA / HLE / CritPt / Omniscience: **no verified public score found** (not displayed for this ID on AA; no BenchLM page)
- IOI v1: **9.8%** (Vals, 2025 — low; "the first model we've seen receive full credit on a single question" is the anecdote, not the score)

Coding:

- LiveCodeBench (Vals): **84.72%** (±1.03; #37 of 143 on the current board — strong at release, mid-field as the board matured)
- SWE-bench Verified: **#1 at release** (Vals, 2025-09: "narrowly outperforming GPT-5, which ranks 2nd by less than a percentage point" — exact value in image-only chart, not extracted)
- Terminal-Bench (coding-side view): **58.8%** at release (see agent rows)

Long context:

- 400K window verified (AA); no MRCR/RULER/AA-LCR row published for this ID.

Multimodal:

- AA-MMMU-Pro / vision benchmarks: **no verified public score found** (image input verified as a capability on AA; no measured vision score displayed).

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 58.8% was a genuine #1-at-release result and the Codex harness ships full agentic tooling, but the measurement is a year old on the original TB board, no τ²/GDPval/Tau3 rows exist for this ID, and every successor (5.1/5.2/5.3 Codex) has surpassed it.
- **Reasoning: 58/100.** AA Intelligence Index 25 lands in the 20–35 mid band (55–65 per methodology); the entire per-benchmark reasoning suite (GPQA/HLE/CritPt) is unpublished for this ID and the Sep-2024 cutoff is the oldest in the Codex line — provisional mid score.
- **Context window: 78/100.** 400K verified (200K–500K tier) with 128K max output; no retrieval-quality measurement exists.
- **Multimodal: 65/100.** Text + image input verified (AA + Vals listing) with no measured vision score; text-only output — mid image-in band.
- **Coding: 72/100.** SWE-bench Verified #1 and Terminal-Bench #1 at 2025 release plus LCB 84.72% are a strong coding-agent pedigree; capped by IOI 9.8%, the current-board mid rank, the year-old measurement set, and deprecation.
- **Cost efficiency: 80/100.** $1.25/$10 (Zen $1.07/$8.50) with a 90% cache discount sits at the ~$1.25/$4.25 (≈88) anchor with an output premium; 182.6 tok/s is the best speed figure in the Codex family — a cheap, fast, deprecated workhorse.
- **Overall Score: 67/100.** Half-up mean of the five quality dims (62 + 58 + 78 + 65 + 72) / 5 = 67.0. Best-fit recommendation: a deprecated-but-live budget coding agent at the cheapest Codex-family price — fine for legacy Codex workflows and high-speed iteration loops; every successor (5.1 → 5.2 → 5.3 Codex) beats it on capability, so prefer those for new work.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-17
- Method: public internet research (Artificial Analysis model page — deprecated in favor of GPT-5.1 Codex, Vals AI model page with release-era evals and the 2025-09-24 coding-benchmarks write-up, live Zen models endpoint + pricing + deprecation table, BenchLM check (no page)); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
