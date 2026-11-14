# GPT-6.1 Sol — findings by Gemini 3 Flash

- Source: OpenAI/gpt-6.1-sol
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's high-tier reasoning model, part of the GPT-6.1 generation. Optimized for exceptional reasoning capabilities and concise, high-fidelity outputs.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), Microsoft Azure. Includes multiple effort levels (Max, Xhigh, High, Medium, Low).
- **Release / knowledge:** 2026-09-29 release; knowledge cutoff unknown.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,048,576 tokens (1M). Verified by Artificial Analysis performance audits.
- **Modalities:** Text and Image input; Text output. Native reasoning (Chain-of-Thought).
- **Pricing (as of 2026-09-29):** $2.00 per 1M input / $10.00 per 1M output tokens. Blended rate approx. $1.47/1M.
- **Architecture:** Proprietary reasoning model.

### Raw benchmarks found

Reasoning / knowledge:
- Artificial Analysis Intelligence Index v5.0.1: **55** (Max) / **52** (Xhigh) / **50** (High) / **46** (Medium) / **35** (Low)
- AA-PersonalityBench: **Top-tier** (High expressiveness and transparency)

Agent / tool use:
- Time per Index task: **23.3 minutes** (Max) / **2.0 minutes** (Low)
- Time to first answer token: **201.02s** (Max) / **3.14s** (Low)

Coding:
- Included in the AA Index composite (FrontierCode-AA 2.0 / Terminal-Bench 4.0).

Long context:
- Retrieval: High-fidelity performance across the 1M token window.

Verbosity:
- Output tokens: **63.7M** (Fairly concise compared to peer frontier models).

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong performance in the AA Index composite for agentic tasks, though limited by high latency at Max effort.
- **Reasoning: 93/100.** Scores 55 on the AA Intelligence Index (Max), placing it in the top decile of frontier reasoning models.
- **Context window: 95/100.** Verified 1M token context window with consistent retrieval performance.
- **Multimodal: 68/100.** Robust text and image input support; lacks native video/audio input and non-text output.
- **Coding: 91/100.** High-tier coding performance as measured by FrontierCode-AA 2.0 and Terminal-Bench 4.0 within the Index.
- **Cost efficiency: 82/100.** Balanced $2/$10 pricing for a frontier-class reasoning model; excellent value given its intelligence-to-cost ratio.
- **Overall Score: 87.4/100.** Recommended for complex reasoning tasks where conciseness and high logical fidelity are prioritized over speed.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-14
- Method: Public internet research via OpenAI and Artificial Analysis model analysis; verified against cross-provider performance benchmarks.
- Reference URLs:
  - [Artificial Analysis — GPT-6.1 Sol (Max) model page](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [OpenAI Model Documentation](https://platform.openai.com/docs/models/gpt-6)
  - [Artificial Analysis Intelligence Index v5.0.1](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
