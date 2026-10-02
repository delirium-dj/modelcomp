# GPT-5.4 nano — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5.4 nano
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's smallest and cheapest GPT-5.4 variant, optimized for tasks where speed and cost matter most. Designed for classification, data extraction, ranking, and simpler auxiliary coding subagent tasks.
- **Provider / access:** OpenAI API — `gpt-5.4-nano`. Responses API and Chat Completions API.
- **Release / knowledge:** 2026-03-17 release.
- **IDs:** `openai/gpt-5.4-nano`
- **Context window:** 400K tokens; 128K max output.
- **Modalities:** text, image, file input; text output; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-02):** $0.20/1M input, $1.25/1M output, $0.02/1M cached input.
- **Architecture:** Proprietary. Most cost-effective OpenAI model; cheaper than Gemini 3.1 Flash-Lite.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **56.1%** (OpenAI blog)
- Toolathlon: **35.5%** (OpenAI blog)
- τ²-bench (telecom): **92.5%** (OpenAI blog)

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (OpenAI blog)
- HLE w/ tools: **37.7%** (OpenAI blog)
- HLE w/o tools: **24.3%** (OpenAI blog)

Coding:

- SWE-bench Pro (Public): **52.4%** (OpenAI blog)
- Terminal-Bench 2.0: **46.3%** (OpenAI blog)

Long context:

- MRCR v2 (8 needles, 64K–128K): **44.2%** (OpenAI blog)

Multimodal:

- Text, image, and file input supported. No specific multimodal benchmark scores found for GPT-5.4 nano.

### Normalized scores (1–100)

- **Tool use: 55/100.** MCP Atlas 56.1%, Toolathlon 35.5%, τ²-bench 92.5%. Moderate tool use; Toolathlon is a relative weakness. Capped by Toolathlon score.
- **Reasoning: 60/100.** GPQA Diamond 82.8%, HLE w/ tools 37.7%. Decent GPQA for a small model but HLE is low. Capped by HLE.
- **Context window: 80/100.** 400K token context window with 128K max output. Good for a small model. MRCR v2 44.2% shows moderate long-context capability.
- **Multimodal: 55/100.** Text, image, and file input supported. No specific multimodal benchmark scores found. Capability inferred from input modalities.
- **Coding: 55/100.** SWE-bench Pro 52.4%, Terminal-Bench 2.0 46.3%. Moderate coding for its class. Capped by Terminal-Bench 2.0.
- **Cost efficiency: 98/100.** $0.20/1M input and $1.25/1M output — extremely cost-efficient. Among the cheapest models available. Cheaper than Gemini 3.1 Flash-Lite.
- **Overall Score: 61/100.** Mean of five quality dims (55+60+80+55+55)/5 = 61.0 → 61. Best fit: high-volume simple tasks, classification, data extraction, ranking, and coding subagent tasks where cost and speed are paramount.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
