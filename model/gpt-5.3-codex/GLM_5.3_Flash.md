# GPT 5.3 Codex — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** OpenAI's Codex-line agentic coding model from the GPT-5.3 generation (Feb 2026) — the reasoning model tuned for agentic coding work in Codex CLI and coding agents; above-average intelligence on the AA composite.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.3-codex` via `https://opencode.ai/zen/v1/responses` (paid, $1.75/$14.00); OpenAI API (the AA-tracked provider). GPT-5.3 Codex Spark sibling exists (`gpt-5.3-codex-spark`).
- **Release / knowledge:** Released 2026-02-05 (Artificial Analysis); knowledge cutoff Aug 31, 2025 (AA spec sheet).
- **IDs:** `opencode/gpt-5.3-codex` (Zen, paid); `gpt-5.3-codex` (OpenAI API)
- **Context window:** 400K tokens total (AA: 400k combined; ~600 A4 pages)
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`, AA evaluates at xhigh); tool calling; structured outputs; prompt caching
- **Pricing (as of 2026-10-01):** Paid — $1.75 / 1M input, $14.00 / 1M output (OpenAI first-party; identical on Zen, cache read $0.175). AA blended rate $1.87/1M.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2 (composite incl. Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA v2.1, AA-Briefcase v1.1): **33** — #84/224, above the class median of 26 (estimate; independent evaluation forthcoming)
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA standalone: no verified public score found (AA breakdowns "not publicly available")
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **33** (above)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found for `gpt-5.3-codex`
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found (AA breakdown not publicly available)

Long context:

- no verified long-context retrieval reported (400K window; AA individual long-context evals not publicly available)

Performance:

- Output speed: **93.0 tokens/sec**; TTFT: **69.43s** (Artificial Analysis, OpenAI API)

## Normalized scores (1–100)

- **Tool use: 54/100.** AA Index 33 — above average on the agentic composite (Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA, AA-Briefcase); as a Codex-line agent model tool use is its focus, but no standalone TB/Tau2 numbers exist for this ID; mid band (50–70), lower half.
- **Reasoning: 63/100.** AA Index 33 tops the Index 20–35 mid band (→ 55–65); Aug 2025 knowledge cutoff; no GPQA/HLE text evidence.
- **Context window: 75/100.** 400K tokens — near the top of the 200K–500K tier (65–84); no published retrieval numbers.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band.
- **Coding: 64/100.** Codex variant tuned for agentic coding with an above-average AA composite; no verified standalone SWE-bench/LiveCodeBench/SciCode numbers, keeping it out of the 90–100 frontier band.
- **Cost efficiency: 66/100.** $1.75/$14.00 per 1M tokens — between the ~$1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, closer to $3/$15 on output; AA blended $1.87/1M.
- **Overall Score: 64/100.** Mean of the five quality dims (54+63+75+65+64)/5 = 64.2. Best fit: agentic coding in Codex CLI/coding agents on a budget — for frontier coding or long-horizon work, step up to GPT-5.4/5.5-class models.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page, OpenCode Zen docs, OpenAI release notes); scores are normalized 1–100 interpretations, not official vendor scores.
