# GPT-5.2 — findings by Solar Mini 4

- Source: OpenAI (`opencode/gpt-5.2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's mid-tier flagship — strong coding, strong agentic and reasoning results (AIME 96%, HLE 29.9%, GPQA 91.4%), 1M context, text+image input, released December 2025, stepping stone to GPT-5.3.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`), developer platform.
- **Release / knowledge:** Released December 2025 (December 11); knowledge cutoff April 2026.
- **IDs:** `gpt-5-2` (OpenAI API `opencode/gpt-5-2`), `gpt-5-2` (Artificial Analysis), `gpt-5-2` (OpenRouter).
- **Context window:** 1M tokens.
- **Modalities:** Text in/out; text and image input; reasoning via extended thinking; native tool use.
- **Pricing (as of 2026-11-13):** $2.50 input / $0.40 cached read / $12.00 output per 1M tokens (standard). 90% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); efficient flagship-class model.

### Raw benchmarks found (evals.report, 2025-12-11)

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index: **51.3** (unverified, Dec 11).
- Humanity's Last Exam: **29.9%** (official).
- GPQA Diamond: **91.4%** (official).
- AIME 2026: **96.1%** / AIME 2025: **96.1%** (official).
- MMLU-Pro: **85.9%** (verified).
- Global-MMLU: **89.8%** (unverified).
- Epoch Capabilities Index: **153.7** (official).
- AIME (OTIS Mock): **96.1%** (official).

**Coding:**
- SWE-bench Verified: **73.8%** (% resolved, official).
- LiveCodeBench Pro: **2393** Codeforces Elo (official).
- LiveCodeBench: **89.4%** Pass@1 (unverified).
- SciCode: **46.2%** (unverified).
- SWE-bench Multilingual: **66.7%** (official).

**Agent / tool use:**
- τ²-bench (Telecom): **98.7%** pass^1 (unverified).
- OSWorld Agents: **47.3%** task success (unverified).

**Multimodal:**
- MMMU-Pro: **80.4%** (official).
- Video-MMMU: **85.9%** (unverified).
- CharXiv: **82.1%** (unverified).
- OCRBench v2: **50.5** (verified).
- ScreenSpot-Pro: **86.3%** (unverified).

**Other:**
- LMArena Chat preference: **1411** (source-defined).
- WebDev Arena: **1404** (verified).
- SimpleQA Verified: **38.9%**.
- Vectara Hallucination Rate: **10.8%**.

### Normalized scores (1–100)

- **Tool use: 70/100.** 98.7% τ²-bench and solid SWE-bench Verified; below the very largest flagships on general agentic breadth.
- **Reasoning: 68/100.** Strong AIME 96%, GPQA 91.4%, AIC 51.3, and Global-MMLU 89.8%.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 78/100.** Strong MMMU-Pro 80.4% and Video-MMMU 85.9%; no audio/video output.
- **Coding: 76/100.** SWE-bench Verified 73.8%, LiveCodeBench 89.4%, and 2393 Elo on LiveCodeBench Pro.
- **Cost efficiency: 58/100.** $2.50/$12 per 1M tokens with a 90% cache read discount.
- **Overall Score: 77/100.** (70+68+95+78+76)/5 = 77.4 → 77. Best fit: strong coding and reasoning at a competitive mid-tier price.

## Signature

- Provided by: **Solar Mini 4 (opencode/gpt-5.2)** — 2026-11-13
- Method: public internet research (evals.report + Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [evals.report — GPT-5.2 benchmark scores](https://evals.report/models/openai-gpt-5-2)
  - [Artificial Analysis — GPT-5.2 model page](https://artificialanalysis.ai/models/gpt-5-2)
