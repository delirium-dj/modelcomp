# Claude Sonnet 4 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Sonnet 4
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 balanced Claude 4 model that matched Opus 4 on SWE-bench Verified (72.7%) at $3/$15; legacy tier, now far behind 2026 models.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-sonnet-4`); no Free ID.
- **Release / knowledge:** released May 2025; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-sonnet-4`
- **Context window:** 200,000 tokens — verified from OpenRouter and curated metadata.
- **Modalities:** text/image in; text out; non-reasoning; tool calls yes.
- **Pricing (as of 2026-10-01):** $3.00 in / $15.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Browsing suite **52.3%**; Gert Labs **39.66%**; JobBench **18.4%**
- Terminal-Bench / OSWorld / Tau3 / MCP Atlas: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond **68.3%** (AA)
- HLE (AA): **4.3%**
- AA-LCR **44.0%**; CritPt **1.1%**; AA Index **16.6%**
- AA-Omniscience Index **−9.0%**; Accuracy / Hallucination Rate **22.7% / 41.0%**
- AA-IFBench **45.4%**

Coding:

- SWE-bench Verified **72.7%** (Anthropic)

Long context:

- AA-LCR 44.0%

Multimodal:

- AA-MMMU-Pro **62.4%**; Design Arena **1154 Elo**

### Normalized scores (1–100)

- **Tool use: 48/100.** Browsing 52.3% is mid; JobBench 18.4% is weak.
- **Reasoning: 42/100.** GPQA 68.3%, HLE 4.3% and AA Index 16.6% are legacy-level.
- **Context window: 68/100.** 200K with AA-LCR 44%.
- **Multimodal: 68/100.** Text + image in with MMMU-Pro 62.4%; text-only output.
- **Coding: 72/100.** SWE Verified 72.7% was best-in-class in 2025 but is midline now.
- **Cost efficiency: 58/100.** $3/$15 per 1M is poor value in 2026.
- **Overall Score: 60/100.** Mean of (48 + 42 + 68 + 68 + 72) / 5 = 59.6 → 60. Best-fit: legacy coding/work tasks.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Anthropic, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
