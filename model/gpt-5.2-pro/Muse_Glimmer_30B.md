# GPT-5.2 Pro — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-5.2-pro
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI quality-first reasoning variant for complex professional work; more compute per request than standard GPT-5.2 Thinking.
- **Provider / access:** OpenAI. API Responses API only, `v1/responses` supported; Chat Completions/Live/Realtime/Batch/Fine-tuning not supported. ChatGPT-5.2 Pro for paid plans.
- **Release / knowledge:** Released 11 December 2025. Succeeds GPT-5.1. Knowledge cutoff Aug 31, 2025 per API docs.
- **IDs:** `gpt-5.2-pro`; snapshot `gpt-5.2-pro-2025-12-11`
- **Context window:** 400,000 tokens input; 128,000 max output tokens per API docs.
- **Modalities:** Input text, image; Output text with reasoning token support.
- **Pricing as of 2026-10-24:** $21 /1M input, $168 /1M output. No cached input price.
- **Architecture:** Proprietary GPT-series multimodal transformer-based foundation model. Parameter count not public.

### Raw benchmarks found

**OpenAI announcement Introducing GPT-5.2 2025-12-11**

Professional
- GDPval wins or ties: Thinking 70.9%, Pro 74.1%
- GDPval clear wins: Thinking 49.8%, Pro 60.0%
- Investment banking spreadsheet internal: Thinking 68.4%, Pro 71.7%

Coding
- SWE-Bench Pro Public: Thinking 55.6%
- SWE-bench Verified: Thinking 80.0%

Factuality
- ChatGPT answers without errors w/ search: Thinking 93.9%

Long context
- MRCRv2 8 needles 4k–8k: Thinking 98.2%

Vision
- CharXiv Reasoning w/ Python: Thinking 88.7%

Tool usage
- Tau2-bench Telecom: Thinking 98.7%

Academic
- GPQA Diamond no tools: Thinking 92.4%, Pro 93.2%
- Humanity’s Last Exam no tools: Thinking 34.5%, Pro 36.6%
- HLE w/ search, Python: Thinking 45.5%, Pro 50.0%
- AIME 2025 no tools: Thinking 100.0%, Pro 100.0%
- FrontierMath Tier 1–3 w/ Python: Thinking 40.3%
- FrontierMath Tier 4 w/ Python: Thinking 14.6%

Abstract reasoning
- ARC-AGI-1 Verified: Thinking 86.2%, Pro 90.5%
- ARC-AGI-2 Verified: Thinking 52.9%, Pro 54.2%

Sources: https://openai.com/index/introducing-gpt-5-2/ ; https://developers.openai.com/api/docs/models/gpt-5.2-pro ; https://en.wikipedia.org/wiki/GPT-5.2 ; https://benchable.ai/models/openai/gpt-5.2-pro-20251211

**Conflicts / notes**
- Context window: API docs 400K input; blog long-context evals shown to 256k. API spec governs usage.
- Terminal-Bench, GDPval-AA, LiveCodeBench specific numeric tables not published in accessed official docs; numbers above from OpenAI blog.

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval wins/ties 74.1% Pro, clear wins 60.0%, Tau2-bench Telecom 98.7% Thinking.
- **Reasoning: 88/100.** GPQA Diamond 93.2% Pro, HLE no tools 36.6% Pro, AIME 100%, ARC-AGI-1 90.5% Pro.
- **Context window: 90/100.** 400K verified.
- **Multimodal: 70/100.** Image input supported; CharXiv Reasoning 88.7%.
- **Coding: 82/100.** SWE-bench Verified 80.0% Thinking, SWE-Bench Pro Public 55.6%.
- **Cost efficiency: 35/100.** $21/$168 per 1M.
- **Overall Score: 82/100.** Mean of Tool 80, Reasoning 88, Context 90, Multimodal 70, Coding 82. High-performance pro reasoning model with premium pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
