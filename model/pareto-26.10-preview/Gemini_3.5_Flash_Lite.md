# Pareto 26.10 Preview — findings by Gemini 3.5 Flash Lite

- Source: Unbiased / Pareto-26.10-Preview
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/blended multimodal preview for research, coding and agents.
- **Provider / access:** OpenCode Zen `opencode/pareto-26.10-preview` (Chat Completions API)
- **Release / knowledge:** 2026-09-10; knowledge cutoff August 2026
- **IDs:** `opencode/pareto-26.10-preview`
- **Context window:** 1,000,000 tokens input, 131,000 tokens output (verified via provider specs)
- **Modalities:** text, image in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-06):** $0.80 in / $3.20 out per 1M tokens (cached $0.03)
- **Architecture:** Proprietary composite multi-task architecture

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **81.5%** (Unbiased early evaluation report)
- Tau3-Banking: **80.8%**

Reasoning / knowledge:
- GPQA Diamond: **52.4%** (Unbiased benchmarks)
- Artificial Analysis Intelligence Index: **82.5 / #42**

Coding:
- SWE-bench Verified: **53.2%**
- LiveCodeBench: **50.1%**

Long context:
- RULER (1M window): 91.0% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid tool execution and multi-step agent actions (Terminal-Bench 81.5%).
- **Reasoning: 81/100.** Capable analytical reasoning (GPQA Diamond 52.4%).
- **Context window: 92/100.** 1M token input context window with reliable long-context retrieval.
- **Multimodal: 84/100.** Text and image input support.
- **Coding: 74/100.** Competent coding assistant for preview stage (SWE-bench 53.2%).
- **Cost efficiency: 78/100.** Moderate pricing at $0.80 / $3.20 per 1M tokens.
- **Overall Score: 83/100.** Mean of the five quality dims (82, 81, 92, 84, 74 -> average 82.6 -> 83); versatile composite preview model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
