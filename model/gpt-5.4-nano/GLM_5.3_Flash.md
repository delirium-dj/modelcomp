# GPT 5.4 Nano — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Nano
- **Short description:** The nano size of OpenAI's GPT-5.4 generation (Mar 2026) — a very fast, ultra-cheap reasoning model with the family's 400K context; among the leading models in its price class on the AA composite (well above the class median), though far from frontier in absolute terms. Deprecated by GPT-5.6 Luna.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-nano` via `https://opencode.ai/zen/v1/responses` (paid, $0.20/$1.25); OpenAI Responses API (1 provider tracked by AA). GPT-5.4/Pro/Mini are the family's larger variants — different models.
- **Release / knowledge:** Released 2026-03-17 (Artificial Analysis; GPT-5.4 family announced Mar 5, 2026); knowledge cutoff Aug 31, 2025 (AA spec sheet).
- **IDs:** `opencode/gpt-5.4-nano` (Zen, paid); `gpt-5.4-nano` (OpenAI API)
- **Context window:** 400K tokens total (AA: 400k combined; ~600 A4 pages)
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`, AA evaluates at xhigh); tool calling; structured outputs; prompt caching
- **Pricing (as of 2026-10-01):** Paid — $0.20 / 1M input, $1.25 / 1M output (OpenAI first-party; identical on Zen, cache read $0.02). AA blended rate $0.18/1M, $0.18 cost per Intelligence Index task.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2 (composite incl. Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA v2.1, AA-Briefcase v1.1): **21** — #42/175, well above its price-class median of 12 (absolute score is low)
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA standalone: no verified public score found (AA breakdowns "not publicly available")
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **21** (above)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found for `gpt-5.4-nano`
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found (AA breakdown not publicly available)

Long context:

- no verified long-context retrieval reported (400K window; AA individual long-context evals not publicly available)

Performance:

- Output speed: **163.5 tokens/sec** (#31/175 — notably fast); TTFT: **86.00s** (Artificial Analysis, OpenAI API)
- Verbosity: **190M** output tokens on the Intelligence Index (vs median 92M — very verbose)

## Normalized scores (1–100)

- **Tool use: 45/100.** AA Index 21 — a low absolute agentic composite score (Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA included), despite being strong for its price class; no standalone Terminal-Bench/Tau2 numbers for this ID. Below the mid band's 50 floor.
- **Reasoning: 55/100.** AA Index 21 sits at the low end of the Index 20–35 mid band (→ 55–65); Aug 2025 knowledge cutoff; no GPQA/HLE text evidence.
- **Context window: 75/100.** 400K tokens — near the top of the 200K–500K tier (65–84); no published retrieval numbers.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band.
- **Coding: 50/100.** No verified standalone SWE-bench/LiveCodeBench/SciCode numbers for this exact ID; AA Index 21 (weighting SciCode + Terminal-Bench 4.0) is low in absolute terms — the nano tier trades coding depth for speed/cost.
- **Cost efficiency: 95/100.** $0.20/$1.25 per 1M tokens with a $0.18/1M blended rate and $0.18 per Intelligence Index task — near the ~$0.10/$0.20 = 97–99 methodology reference; paid, so short of 100.
- **Overall Score: 58/100.** Mean of the five quality dims (45+55+75+65+50)/5 = 58.0. Best fit: ultra-high-volume, cost-sensitive micro-tasks (classification, extraction, routing) where its price/speed dominate — not for coding or deep reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page, OpenCode Zen docs, OpenAI GPT-5.4 announcement for family context); scores are normalized 1–100 interpretations, not official vendor scores.
