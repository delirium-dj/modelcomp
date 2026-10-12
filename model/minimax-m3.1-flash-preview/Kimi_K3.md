# MiniMax M3.1-Flash-Preview — findings by Kimi K3

- Source: MiniMax/M3.1-Flash-Preview (`minimax-m3.1-flash-preview`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1-Flash-Preview
- **Short description:** MiniMax's lightweight coding-focused preview model, enabled on 2026-09-27 as the default model inside the MiniMax Code agent — first publicly usable M3.1-branded model.
- **Provider / access:** MiniMax Code agent product (default model; subscription surface); OpenCode Zen route `opencode/minimax-m3.1-flash-preview` now listed with a $0.00/$0.00 preview price.
- **Release / knowledge:** 2026-09-27 (OpenCode Data confirms my first-pass enablement date); knowledge cutoff not published.
- **IDs:** `minimax/M3.1-Flash-Preview`; `minimax/minimax-m3-1-flash-preview` (OpenCode Data).
- **Context window:** 1M tokens / **512K max output** (OpenCode Data catalog — resolves my first-pass "reported but unconfirmed" state; output previously unpublished).
- **Modalities:** text + image + **video** in (OpenCode Data catalog — CONFLICT with my first-pass "text-only" reading; catalog governs); text out. **Reasoning: tunable thinking depth** (catalog "Reasoning: Yes" — resolves the first-pass unconfirmed note); tool calling yes.
- **Pricing (as of 2026-10-11):** $0.00/$0.00/$0.00 cached (OpenCode Data — free preview; per-token price unpublished by MiniMax).
- **Architecture:** Undisclosed (no parameter count, no weights released — OpenCode Data lists "Open weights: No").

### Raw benchmarks found

> Evidence state: MiniMax has published no model card or benchmark table. Only community suite + catalog facts exist.

Coding:

- KingBench 3 (community generation-suite, 8 tasks): **66.25% (53/80)** — third-party run reported via daily.dev; big jump over the earlier M3 (31.25%) but well behind Opus 5.5 (93.75%). Small, informal harness — treat as provisional.
- SWE-bench Verified: **no verified public score found** (an aiintoai claim of 73.8% contradicts every other source's "no benchmarks published" reporting and could not be corroborated — excluded)
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / Terminal-Bench: no verified public score found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (ships as the MiniMax Code agent driver — practical tool use demonstrated in-product, but no measured numbers exist)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Long context:

- 1M/512K window catalog-verified (new this pass); no MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

> Provisional: still no public model card; the second pass resolved card facts (modality set, reasoning toggle, output cap, price) against the OpenCode catalog without changing any measured number.

- **Tool use: 55/100.** Unchanged: production agent driving inside MiniMax Code shows real tool-calling, but no public agentic benchmark exists to calibrate.
- **Reasoning: 55/100.** Unchanged: no reasoning benchmark published.
- **Context window: 88/100.** Unchanged: 1M-token input with 512K output — now catalog-verified, resolving first-pass uncertainty; capped by zero retrieval-at-length measurement.
- **Multimodal: 55/100.** Raised from 15: the catalog lists video + image input (first pass read the deployment as text-only); no vision benchmark rows keep it at the band floor for verified coverage.
- **Coding: 65/100.** Unchanged: KingBench 3 at 66.25% — one informal community suite; no SWE-bench/TB cross-check.
- **Cost efficiency: 90/100.** Raised from 70: currently free ($0/$0 preview) — access friction (subscription-bundled) keeps it short of 100.
- **Overall Score: 64/100.** Mean of the five non-cost dims (55+55+88+55+65)/5 = 63.6 → 64 (raised from 55.6 on the modality correction. Best fit: everyday coding assistance inside MiniMax Code while the preview is free — not yet an evidence-backed choice for production routing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: Public internet research (DataNorth and DataLearner launch reports, andrew.ooo FAQ, BenchLM model page, daily.dev community KingBench eval — first pass; **second pass 2026-10-11**: OpenCode Data `minimax/minimax-m3-1-flash-preview` — verified release 2026-09-27, 512K max output, video/image input, tunable reasoning, and the $0 preview price). Scores are normalized 1–100 interpretations, not official vendor scores; accessibility and modality corrections came from this pass.
- Future sources: add a new file next to this one using the same headings.
