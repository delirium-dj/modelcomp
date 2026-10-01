# GPT 5.4 Mini — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Mini
- **Short description:** The mini size of OpenAI's GPT-5.4 generation (Mar 2026) — a fast, cheap reasoning model with the GPT-5.4 family's 400K context but below-average intelligence on the AA composite; very verbose at xhigh effort. Deprecated by GPT-5.6 Terra.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-mini` via `https://opencode.ai/zen/v1/responses` (paid, $0.75/$4.50); OpenAI Responses API (2 providers tracked by AA). GPT-5.4 and GPT-5.4 Pro are the family's full/maximum variants — different models.
- **Release / knowledge:** Released 2026-03-17 (Artificial Analysis; GPT-5.4 family announced Mar 5, 2026); knowledge cutoff Aug 31, 2025 (AA spec sheet).
- **IDs:** `opencode/gpt-5.4-mini` (Zen, paid); `gpt-5.4-mini` (OpenAI API)
- **Context window:** 400K tokens total (AA: 400k combined; ~600 A4 pages)
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`, AA evaluates at xhigh); tool calling; structured outputs; prompt caching
- **Pricing (as of 2026-10-01):** Paid — $0.75 / 1M input, $4.50 / 1M output (OpenAI first-party; identical on Zen, cache read $0.075). AA blended rate $0.65/1M, $0.45 cost per Intelligence Index task.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2 (composite incl. Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA v2.1, AA-Briefcase v1.1): **24** — #127/224, below the class median of 26
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA standalone: no verified public score found (AA breakdowns "not publicly available"; GPT-5.4 full: 83.0% wins/ties — family context only, not applied)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24** (above)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found for `gpt-5.4-mini`
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found (AA breakdown not publicly available)

Long context:

- no verified long-context retrieval reported (400K window; AA individual long-context evals not publicly available)

Performance:

- Output speed: **216.3 tokens/sec** (#6/224 — notably fast); TTFT: **122.03s** (Artificial Analysis, OpenAI API)
- Verbosity: **230M** output tokens on the Intelligence Index (vs median 81M — very verbose)

## Normalized scores (1–100)

- **Tool use: 46/100.** AA Index 24 — below average on the agentic composite (Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA); no standalone Terminal-Bench/Tau2 numbers for this ID. Just below the methodology mid band's 50 floor.
- **Reasoning: 55/100.** AA Index 24 sits at the low end of the Index 20–35 mid band (→ 55–65); Aug 2025 knowledge cutoff; no GPQA/HLE text evidence.
- **Context window: 75/100.** 400K tokens — near the top of the 200K–500K tier (65–84); no published retrieval numbers.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band.
- **Coding: 52/100.** No verified standalone SWE-bench/LiveCodeBench/SciCode numbers for this exact ID; AA Index 24 (weighting SciCode + Terminal-Bench 4.0) is below average — the mini tier trades coding depth for speed/cost.
- **Cost efficiency: 90/100.** $0.75/$4.50 per 1M tokens — cheaper input than the ~$1.25/$4.25 = ~88 reference, plus a $0.45/task AA cost that Pareto-leads the price band (methodology grants an adjustment for such leads).
- **Overall Score: 59/100.** Mean of the five quality dims (46+55+75+65+52)/5 = 58.6 → 59. Best fit: high-volume, latency-sensitive workloads at a very low price — not for deep coding or agentic quality; step up to GPT-5.4/5.6-class.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page, OpenCode Zen docs, OpenAI GPT-5.4 announcement for family context); scores are normalized 1–100 interpretations, not official vendor scores.
