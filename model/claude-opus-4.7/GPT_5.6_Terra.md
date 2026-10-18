# Claude Opus 4.7 - findings by GPT 5.6 Terra

- Source: OpenAI/gpt-5.6-terra
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's proprietary frontier model for long-running coding and agent workflows. It improves image resolution over Opus 4.6 and is positioned as a direct API upgrade.
- **Provider / access:** Anthropic Claude API model `claude-opus-4-7`; this target is also curated as OpenCode Zen `opencode/claude-opus-4.7`.
- **Release / knowledge:** Released 2026-04-16; Artificial Analysis lists a 2026-01-01 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-4-7`; `opencode/claude-opus-4.7`
- **Context window:** 1,000,000 tokens total and 128,000 output tokens in the target record; Anthropic and Artificial Analysis both confirm the 1M context class.
- **Modalities:** Text and image input; text output. Anthropic reports image support up to 2,576 pixels on the long edge, about 3.75 megapixels, and documents agentic API controls.
- **Pricing (as of 2026-10-18):** $5.00 input and $25.00 output per 1M tokens, with 90% cache discount, according to Anthropic and Artificial Analysis; no free production API tier is documented.
- **Architecture:** Proprietary; parameter count is not disclosed.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **77.3%** (Axis Intelligence review; reported as a benchmark result, with its core benchmark data attributed to Anthropic launch materials).
- OSWorld-Verified: **78.0%** (Axis Intelligence review; same attribution caveat).
- Terminal-Bench 2.1: no verified public exact-model score found in the consulted sources.

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Axis Intelligence review; reported against GPT-5.4).
- Artificial Analysis Intelligence Index: **41** (estimated; Artificial Analysis, not a direct independent run).
- HLE / CritPt / LCR: no verified public exact-model score found in the consulted sources.

Coding:

- SWE-bench Verified: **87.6%** (Axis Intelligence review, citing Anthropic launch data).
- SWE-bench Pro: **64.3%** (Axis Intelligence review, citing Anthropic launch data).
- CursorBench: **70%** (reported by Cursor's CEO in Anthropic's launch announcement; not a public leaderboard rerun).
- LiveCodeBench / SciCode: no verified public exact-model score found in the consulted sources.

Long context:

- 1,000,000-token context is confirmed by Anthropic and Artificial Analysis; no independently reproducible long-context retrieval score was found.

Evidence reconciliation: the task-level scores above are vendor-reported or vendor-attributed through the Axis review, while Artificial Analysis lists an estimated composite Intelligence Index of 41. Those are different methodologies, so the estimate is not used to validate or replace any task-level figure. The sources agree on release timing, 1M context, image input, and standard API pricing.

### Normalized scores (1-100)

- **Tool use: 84/100.** MCP-Atlas 77.3% and OSWorld-Verified 78.0% indicate strong agent execution; the lack of a directly comparable public Terminal-Bench result caps the score.
- **Reasoning: 88/100.** The reported 94.2% GPQA Diamond result is frontier-level, but the broader independent composite is only an estimate and several reasoning harnesses lack exact public results.
- **Context window: 95/100.** The verified 1M-token window reaches the top context tier, capped because no reproducible retrieval-at-length score was found.
- **Multimodal: 80/100.** Image input and high-resolution vision support justify a strong document-and-vision score, while the documented output remains text-only with no audio or video input evidence.
- **Coding: 92/100.** SWE-bench Verified 87.6%, SWE-bench Pro 64.3%, and the reported 70% CursorBench result support a frontier coding score; public same-harness corroboration remains limited.
- **Cost efficiency: 50/100.** $5/$25 per 1M tokens is premium paid pricing: materially above the methodology's $3/$15 reference but below its $10/$50 reference.
- **Overall Score: 88/100.** Half-up mean of Tool, Reasoning, Context, Multimodal, and Coding: (84 + 88 + 95 + 80 + 92) / 5 = 87.8; best suited to expensive, long-horizon coding and agent workflows.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** - 2026-10-18
- Method: Public internet research using Anthropic's release announcement, an independent review, and Artificial Analysis. Scores are normalized 1-100 interpretations, not official vendor scores.
- Sources: https://www.anthropic.com/news/claude-opus-4-7 ; https://axis-intelligence.com/claude-opus-review-tested/ ; https://artificialanalysis.ai/models/releases/claude-opus-4-7
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
