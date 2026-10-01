# Claude Sonnet 3.5 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Sonnet 3.5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's mid-2024 workhorse Sonnet generation — balanced text/image reasoning and coding for its era, now a legacy model far behind 2026 peers.
- **Provider / access:** Anthropic API (legacy); no Free ID.
- **Release / knowledge:** 2024 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-3-5-sonnet`
- **Context window:** 200K total (64K max output) — verified from curated metadata and BenchLM.
- **Modalities:** text + image in; text out; non-reasoning; tool calls yes.
- **Pricing (as of 2026-10-01):** $3.00 in / $15.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- no verified public agentic/tool benchmark found for this ID

Reasoning / knowledge:

- GPQA **59.4%** (BenchLM)
- FrontierMath v2 Tier 4 **0.00%**
- HLE / AA Index / LCR / CritPt: no verified public score found for this ID

Coding:

- SWE-bench Verified **49%** (BenchLM)

Long context:

- no verified long-context retrieval number found

Multimodal:

- text + image in; no public MMMU number found

### Normalized scores (1–100)

- **Tool use: 35/100.** No verified agentic benchmark; 2024-era tool use only.
- **Reasoning: 35/100.** GPQA 59.4% and FrontierMath near-zero are well behind modern models.
- **Context window: 68/100.** 200K window; no retrieval benchmark.
- **Multimodal: 68/100.** Text + image in; text-only output.
- **Coding: 58/100.** SWE-bench Verified 49% was strong in 2024 but is legacy now.
- **Cost efficiency: 55/100.** $3/$15 per 1M is poor value for 2026 capability.
- **Overall Score: 53/100.** Mean of (35 + 35 + 68 + 68 + 58) / 5 = 52.8 → 53. Best-fit: historical reference only.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Anthropic); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
