# GPT 5.2 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2
- **Short description:** OpenAI's GPT-5.2 generation reasoning model (Dec 2025) — an above-average intelligence upgrade over GPT-5.1 with a 400K context window. Deprecated by GPT-5.4 (only the default 10k-token workload is still benchmarked per Artificial Analysis).
- **Provider / access:** OpenCode Zen `opencode/gpt-5.2` via `https://opencode.ai/zen/v1/responses` (paid, $1.75/$14.00); OpenAI Responses API + Chat Completions. GPT-5.2 Codex sibling exists (`gpt-5.2-codex`, deprecated on Zen Jul 23, 2026).
- **Release / knowledge:** Released 2025-12-11 (Artificial Analysis); knowledge cutoff Aug 31, 2025 (AA spec sheet).
- **IDs:** `opencode/gpt-5.2` (Zen, paid); `gpt-5.2` (OpenAI API)
- **Context window:** 400K tokens total (AA: 400k combined; ~600 A4 pages)
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`, AA page evaluates at xhigh); tool calling; structured outputs; prompt caching
- **Pricing (as of 2026-10-01):** Paid — $1.75 / 1M input, $14.00 / 1M output (OpenAI first-party; identical on Zen, cache read $0.175). AA blended rate $1.87/1M.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2 (composite incl. Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA v2.1, AA-Briefcase v1.1): **30** — #89/224, above the class median of 26 (estimate; independent evaluation forthcoming)
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA standalone: no verified public score found (AA breakdowns "not publicly available")
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30** (above)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found for `gpt-5.2`
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found (AA breakdown not publicly available)

Long context:

- no verified long-context retrieval reported (400K window; AA individual long-context evals not publicly available)

Performance:

- Output speed: **75.0 tokens/sec**; TTFT: **123.10s** (Artificial Analysis, OpenAI API)

## Normalized scores (1–100)

- **Tool use: 50/100.** AA Index 30 — above average on the agentic composite (Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA), but no standalone Terminal-Bench/Tau2 numbers for this ID; enters the methodology mid band (50–70) at its floor.
- **Reasoning: 62/100.** AA Index 30 in the Index 20–35 mid band (→ 55–65), with a fresher Aug 2025 knowledge cutoff than GPT-5.1; no GPQA/HLE text evidence to move it higher.
- **Context window: 75/100.** 400K tokens puts it near the top of the 200K–500K tier (65–84), under the ≥1M = 95–100 band; no published retrieval numbers.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band.
- **Coding: 58/100.** No verified SWE-bench/LiveCodeBench/SciCode numbers for this exact ID; AA Index 30 (weighting SciCode + Terminal-Bench 4.0) is above average but not frontier.
- **Cost efficiency: 66/100.** $1.75/$14.00 per 1M tokens — between the ~$1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, closer to the $3/$15 point on output price; AA blended $1.87/1M.
- **Overall Score: 62/100.** Mean of the five quality dims (50+62+75+65+58)/5 = 62.0. Best fit: a solid, now-deprecated mid-tier reasoning model with strong 400K context — use for legacy reproducibility; step up to GPT-5.4/5.5-class for current work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page, OpenCode Zen docs, OpenAI release notes); scores are normalized 1–100 interpretations, not official vendor scores.
