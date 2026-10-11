# GPT-6 Sol — findings by Claude Opus 4.6

- Source: OpenAI / GPT-6 Sol
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid-tier GPT-6 model (Sep 2026). Cost-efficient workhorse for agentic coding and professional workflows, positioned between GPT-6 Luna and GPT-6 Astra. Superseded by GPT-6.1 Sol one week later.
- **Provider / access:** OpenAI API (`gpt-6-sol`), Azure OpenAI, OpenRouter. Responses API for tool calling.
- **Release / knowledge:** 2026-09-22 release; rolled out to all ChatGPT users 2026-10-07 (replacing GPT-5.6 versions). Knowledge cutoff estimated early 2026.
- **IDs:** `opencode/gpt-6-sol` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens total; 128,000 max output tokens.
- **Modalities:** Text, image, file in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $2.00 / $10.00 per 1M tokens (input/output). Cached input: $0.20/1M.
- **Architecture:** Proprietary; GPT-6 family mid-tier. Same safety framework as GPT-6 Astra.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **43.9** (source: askclash.ai)
- AutomationBench: **33.2%** (source: emergent.sh)
- Agents' Last Exam: **56.4%** (source: emergent.sh)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- HLE (Humanity's Last Exam): **47.9** (source: askclash.ai)
- GPQA Diamond: no verified standalone score found
- ARC-AGI-2: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- DeepSWE: **68.8** (source: askclash.ai, emergent.sh)
- SWE-Atlas: **57.5** (source: askclash.ai)
- FrontierCode 1.1: **49.3%** (source: emergent.sh)
- Coding Agent Index: **56.7** (source: askclash.ai)
- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified public score found

Long context:

- 1,050,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 75/100.** TB 43.9 is moderate for GPT-6 family (lower than 6.1 Sol's 58.2%). AutomationBench 33.2% and Agents' Last Exam 56.4% show decent but not frontier agentic capability. Superseded by 6.1 Sol within a week.
- **Reasoning: 85/100.** HLE 47.9 is strong (ref: 40%+ = high tier). No standalone GPQA Diamond verification; inferred upper-80s from GPT-6 family positioning. Missing ARC-AGI data.
- **Context window: 94/100.** 1.05M verified. 128K max output. Same window as GPT-6.1 Sol. Production-stable.
- **Multimodal: 58/100.** Text + image + file in; text out. No audio/video input. File parsing adds modest utility over pure text+image.
- **Coding: 80/100.** DeepSWE 68.8 is solid. SWE-Atlas 57.5 and FrontierCode 49.3% are mid-range. Coding Agent Index 56.7 is competitive. 6.1 Sol improves on all these; Sol is the pre-improvement baseline.
- **Cost efficiency: 85/100.** $2/$10 is competitive but cached input at $0.20 is 2x more than 6.1 Sol's $0.10. Good value for a frontier-family model, but successor is strictly better at same price.
- **Overall Score: 78/100.** Mean of (75 + 85 + 94 + 58 + 80) / 5 = 78.4, rounded to 78. Decent mid-tier frontier model, quickly superseded by the stronger GPT-6.1 Sol at identical pricing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (OpenAI docs, askclash.ai, emergent.sh, vellum.ai, openrouter.ai, wikipedia.org, datacamp.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
