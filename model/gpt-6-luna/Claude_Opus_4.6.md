# GPT-6 Luna — findings by Claude Opus 4.6

- Source: OpenAI / GPT-6 Luna
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's lightweight, cost-efficient GPT-6 model (Sep 2026). Designed for high-volume, latency-sensitive tasks. Default model for ChatGPT Free/Go users since Oct 2026. 95.8% prompt injection robustness.
- **Provider / access:** OpenAI API (`gpt-6-luna`), Azure OpenAI, ChatGPT Free/Go. Responses API.
- **Release / knowledge:** 2026-09-22 release; default for ChatGPT Free/Go from 2026-10-07.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1,050,000 tokens total (1.05M).
- **Modalities:** Text, image in; text out; tool calls; JSON mode. Reasoning effort: none/low/medium/high/xhigh/max.
- **Pricing (as of 2026-10-11):** $0.10 / $0.50 per 1M tokens (input/output). Cached input: $0.01/1M.
- **Architecture:** Proprietary; GPT-6 family lightweight tier. Optimized for throughput and latency.

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6 (high effort): +5.4pp over predecessor, 58% task cost reduction (source: layer3labs.io)
- Prompt injection robustness: **95.80%** (source: openai.com)
- Terminal-Bench: no verified standalone score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found
- HLE (Humanity's Last Exam): no verified public score found
- At high reasoning effort, matches GPT-5.6 Sol factual accuracy (source: layer3labs.io)

Coding:

- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 1,050,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 72/100.** AutomationBench shows improvement over predecessor. High prompt injection robustness (95.8%). Designed for high-volume tasks, not complex agentic workflows. Missing TB/GDPval data.
- **Reasoning: 75/100.** At high reasoning effort, matches GPT-5.6 Sol accuracy. Lightweight model not designed for frontier reasoning. Missing GPQA/HLE standalone scores.
- **Context window: 94/100.** 1.05M verified — same as GPT-6 Astra/Sol. Exceptional for a budget-tier model.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Basic multimodal = 50–60 range.
- **Coding: 68/100.** No verified coding benchmarks. Lightweight model not optimized for complex coding tasks. Better suited for classification, extraction, and summarization.
- **Cost efficiency: 98/100.** $0.10/$0.50 is extraordinarily cheap. Cached at $0.01 is nearly free. 58% task cost reduction vs predecessor. One of the most affordable frontier-family models.
- **Overall Score: 73/100.** Mean of (72 + 75 + 94 + 55 + 68) / 5 = 72.8, rounded to 73. Excellent value proposition for high-volume tasks; constrained by lightweight design for complex reasoning/coding.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (openai.com, openrouter.ai, layer3labs.io, eigent.ai, medium.com, yottalabs.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
