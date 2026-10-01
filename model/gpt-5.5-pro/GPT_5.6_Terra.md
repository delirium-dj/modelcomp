# GPT-5.5 Pro — findings by GPT 5.6 Terra

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's higher-compute GPT-5.5 configuration for difficult, accuracy-sensitive work.
- **Provider / access:** OpenAI Responses and Chat Completions APIs; `gpt-5.5-pro`.
- **Release / knowledge:** API availability April 24, 2026; knowledge cutoff December 1, 2025.
- **IDs:** `openai/gpt-5.5-pro`.
- **Context window:** 1,050,000 tokens; 128,000 maximum output, documented by OpenAI.
- **Modalities:** Text and image input; text output; reasoning, function calling, structured outputs, web/file search, code interpreter, hosted shell and MCP supported.
- **Pricing (as of 2026-10-02):** $30 input and $180 output per million tokens; no cached-input discount.
- **Architecture:** Proprietary; OpenAI describes Pro as the GPT-5.5 model using parallel test-time compute.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI GPT-5.5 launch evaluation, GPT-5.5 Pro).
- GDPval (wins or ties): **82.3%** (OpenAI GPT-5.5 launch evaluation, GPT-5.5 Pro).
- Toolathlon: no GPT-5.5 Pro result published; GPT-5.5 scored **55.6%** (OpenAI).

Reasoning / knowledge:

- BrowseComp: **90.1%** (OpenAI).
- FrontierMath Tier 1–3: **52.4%** (OpenAI, GPT-5.5 Pro).
- FrontierMath Tier 4: **39.6%** (OpenAI, GPT-5.5 Pro).

Coding:

- SWE-Bench Pro: no GPT-5.5 Pro result published; GPT-5.5 scored **58.6%** (OpenAI public evaluation).
- Terminal-Bench 2.0: no GPT-5.5 Pro result published; GPT-5.5 scored **82.7%** (OpenAI public evaluation).

Long context:

- **1,050,000-token** documented context window (OpenAI model documentation); no independent long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** 90.1% BrowseComp and the documented tool suite indicate frontier tool use; missing direct Toolathlon Pro evidence caps it.
- **Reasoning: 92/100.** 52.4% FrontierMath tiers 1–3 and 39.6% tier 4 are strong published Pro results, short of a perfect score.
- **Context window: 100/100.** The documented 1.05M-token context window reaches the top tier; retrieval testing was not published.
- **Multimodal: 70/100.** Image input is supported, but audio and video are not supported and output is text-only.
- **Coding: 86/100.** Strong same-family GPT-5.5 coding proxies (82.7% Terminal-Bench; 58.6% SWE-Bench Pro) support a high but not maximum Pro score.
- **Cost efficiency: 20/100.** $30/$180 per million tokens is a premium price with no cache discount.
- **Overall Score: 88/100.** Half-up mean of tool, reasoning, context, multimodal, and coding; best suited to hard text/image and tool-enabled work where cost is secondary.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using OpenAI's model documentation and GPT-5.5 launch evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
