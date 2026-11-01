# GPT-5.4 — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.4`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's general-purpose model for professional work, coding and computer-use agents, distinct from GPT-5.4 Pro.
- **Provider / access:** OpenAI Responses or Chat Completions API `gpt-5.4`; default snapshot `gpt-5.4-2026-03-05`.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.4`; no Zen Free ID verified.
- **Context window:** OpenAI documents 1,050,000 total tokens and 128,000 max output.
- **Modalities:** Text and image input; text output, function calling and Responses API tools.
- **Pricing (2026-11-01):** $2.50 input / $15 output / $0.25 cached per million; prompts over 272K input incur 2× input and 1.5× output rates.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI reports Terminal-Bench 2.0 **75.1%**, MCP Atlas **67.2%**, Toolathlon **54.6%** and OSWorld-Verified **75.0%**, generally xhigh effort; not TB 2.1.

Reasoning / knowledge:

- OpenAI reports GPQA Diamond **92.8%**, HLE **39.8% without tools** and **52.1% with tools**, xhigh unless otherwise specified.

Coding:

- OpenAI reports SWE-bench Pro public **57.7%**; Vals Vibe Code Bench v1.1 **48.47% ± 5.07** is an independent, different task suite.

Long context:

- OpenAI reports MRCR v2 eight-needle **36.6% at 512K–1M**, and Graphwalks BFS **21.4% at 256K–1M**. Advertised capacity is not equivalent to reliable recall.

### Normalized scores (1–100)

- **Tool use: 88/100.** OpenAI's MCP, tool and computer-use evaluations support strong agent capability, with vendor harness limits.
- **Reasoning: 90/100.** Vendor GPQA and no-tools HLE are strong; tool-assisted HLE is separately labeled.
- **Context window: 95/100.** 1.05M documented, but 36.6% MRCR at 512K–1M falls short of the criterion for 100.
- **Multimodal: 65/100.** Native text and image input with text output; image generation is a tool, not native output.
- **Coding: 85/100.** SWE-bench Pro and TB 2.0 support agentic coding, tempered by Vals Vibe Code.
- **Cost efficiency: 60/100.** Paid $2.50/$15 per million with long-input surcharges.
- **Overall Score: 85/100.** Half-up mean of five quality dimensions; suited to tool-heavy professional workflows.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: OpenAI documentation and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.4 model specifications](https://developers.openai.com/api/docs/models/gpt-5.4)
  - [OpenAI launch and evaluation tables](https://openai.com/index/introducing-gpt-5-4/)
  - [Vals evaluation](https://www.vals.ai/models/openai_gpt-5.4)
- Future sources: add a separate signed findings file alongside this one.
