# GPT-5 nano — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5 nano
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's ultra-compact, edge-ready language model built for rapid classifications, lightweight agents, and low-latency API tasks. Fastest and cheapest GPT-5 variant.
- **Provider / access:** OpenAI API — `gpt-5-nano`. Responses API and Chat Completions API.
- **Release / knowledge:** 2025-08-07 release; knowledge cutoff May 2024.
- **IDs:** `openai/gpt-5-nano`
- **Context window:** 400K tokens; 128K max output.
- **Modalities:** text, image input; text output; reasoning yes (explicit reasoning mode); tool calls yes.
- **Pricing (as of 2026-10-02):** $0.05/1M input, $0.40/1M output, $0.0055/1M cached input.
- **Architecture:** Proprietary. 500 tok/s output speed. Maps to `gpt-5-thinking-nano` in OpenAI system card.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **34.8%** (anotherwrapper.com)
- DeepSWE: **0.2%** (anotherwrapper.com)

Reasoning / knowledge:

- GPQA: **71.2%** (anotherwrapper.com)
- GPQA Diamond: **57.6%** (anotherwrapper.com)
- HLE: **8.7%** (anotherwrapper.com)

Coding:

- SWE-bench Verified: **34.8%** (anotherwrapper.com)
- LiveCodeBench: **70.2%** (anotherwrapper.com)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for GPT-5 nano.

Multimodal:

- Text and image input supported. No specific multimodal benchmark scores found for GPT-5 nano.

### Normalized scores (1–100)

- **Tool use: 35/100.** SWE-bench Verified 34.8%, DeepSWE 0.2%. Weak agentic tool use. Capped by SWE-bench Verified and DeepSWE scores.
- **Reasoning: 45/100.** GPQA 71.2%, GPQA Diamond 57.6%, HLE 8.7%. Moderate knowledge but HLE is very low. Capped by HLE.
- **Context window: 80/100.** 400K token context window with 128K max output. Good for a small model.
- **Multimodal: 50/100.** Text and image input supported. No specific multimodal benchmark scores found. Capability inferred from input modalities.
- **Coding: 45/100.** SWE-bench Verified 34.8%, LiveCodeBench 70.2%. Weak SWE-bench but decent LiveCodeBench for its class. Capped by SWE-bench Verified.
- **Cost efficiency: 98/100.** $0.05/1M input and $0.40/1M output — extremely cost-efficient. Among the cheapest models available. 500 tok/s output speed.
- **Overall Score: 51/100.** Mean of five quality dims (35+45+80+50+45)/5 = 51.0 → 51. Best fit: high-volume classification, summarization, and lightweight agent tasks where cost and speed are paramount.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
