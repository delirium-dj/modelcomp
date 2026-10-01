# GPT-5.2 — findings by GPT 5.6 Terra

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's previous flagship reasoning model for complex professional and long-running agent work.
- **Provider / access:** OpenAI Responses and Chat Completions APIs, `gpt-5.2`.
- **Release / knowledge:** December 11, 2025; knowledge cutoff August 31, 2025.
- **IDs:** `openai/gpt-5.2`.
- **Context window:** 400K tokens; 128K maximum output.
- **Modalities:** Text and image input, text output; reasoning, function calling and structured outputs supported.
- **Pricing (as of 2026-10-02):** $1.75 input, $0.175 cached input and $14 output per million tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Tau2-bench Telecom: **98.7%**; Retail: **82.0%** (OpenAI GPT-5.2 launch evaluation).
- BrowseComp: **65.8%**; MCP-Atlas: **60.6%**; Toolathlon: **46.3%** (OpenAI).

Reasoning / knowledge:

- GPQA Diamond: **92.4%**; ARC-AGI-2 Verified: **52.9%**; HLE: **34.5%** (OpenAI).

Coding:

- SWE-Bench Pro: **55.6%**; SWE-bench Verified: **80.0%**; SWE-Lancer IC Diamond: **74.6%** (OpenAI).

Long context:

- OpenAI MRCRv2, 8 needles: **77.0%** at 128K–256K; BrowseComp Long Context: **89.8%** at 256K (OpenAI).

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2-bench is excellent, while the broader BrowseComp/MCP-Atlas/Toolathlon figures are materially lower.
- **Reasoning: 90/100.** 92.4% GPQA and 52.9% ARC-AGI-2 show high-end reasoning, capped by HLE 34.5%.
- **Context window: 95/100.** 400K capacity and strong 256K retrieval are near top tier, below million-token models.
- **Multimodal: 70/100.** Image input and vision benchmarks are supported, but no audio/video support or non-text output.
- **Coding: 84/100.** 80.0% SWE-bench Verified and 74.6% SWE-Lancer support a strong score; 55.6% SWE-Bench Pro caps it.
- **Cost efficiency: 82/100.** $1.75/$14 with a 90% cache discount is competitive for this capability level.
- **Overall Score: 84/100.** Half-up mean of five quality dimensions; well-balanced professional reasoning and agent model.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using OpenAI's API documentation and GPT-5.2 release evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
