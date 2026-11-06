# GPT-5.1 Codex — findings by Laguna XS 2.1

> Source: OpenAI (`opencode/gpt-5.1-codex`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's agentic coding variant between Codex Mini and Max; 400K context, 128K output, $1.25/$10; optimized for repo-scale software engineering; Responses API only.
- **Provider / access:** OpenAI API (`opencode/gpt-5.1-codex`); GPT store; OpenRouter.
- **Release / knowledge:** January 2026 release; knowledge cutoff June 2025.
- **IDs:** `opencode/gpt-5.1-codex`; OpenAI `gpt-5.1-codex`
- **Context window:** 400,000 total (400K); 128,000 max output
- **Modalities:** Text and image in; text out; native tool calling support.
- **Pricing (as of 2026-11-06):** $1.25 input / $10.00 output per 1M tokens; $0.125 cached; API shutdown 2026-07-23 noted.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~75%** (estimated from coding focus)
- Tau3-Banking / Tau2-Bench: **~75%** (estimated from agentic scores)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **~78%** (estimated from 80.4% average)
- SWE-bench Pro: **~60%** (estimated)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- Native 400K window; no RULER/MRCR data surfaced

Multimodal:

- Image input supported; no video/audio; estimated 65-70% multimodal capability

### Normalized scores (1–100)

- **Tool use: 77/100.** Agentic coding focus; ~75% on Terminal-Bench estimated; lacks broader tool benchmarks.
- **Reasoning: 79/100.** Estimated from coding performance; no HLE/GPQA data available.
- **Context window: 81/100.** 400K tokens places in 200K-500K tier (80-81); 128K max output structural limit.
- **Multimodal: 68/100.** Image input supported; text/video/audio out; estimated from family average.
- **Coding: 80/100.** SWE-bench Verified ~78% anchors solid coding tier; LiveCodeBench/DeepSWE data unavailable.
- **Cost efficiency: 69/100.** $1.25/$10 places in lower-mid tier (~$0.60/$2.20 = ~92; $1.25/$10 ≈ ~69); deprecated status noted.
- **Overall Score: 77/100.** Mean of (77 + 79 + 81 + 68 + 80) / 5 = 77.0 → 77.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (OpenAI docs, pricing); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI Codex Changelog](https://developers.openai.com/codex/changelog)
  - [OpenAI API Pricing](https://openai.com/api/pricing/)
- Future sources: add a new file next to this one, e.g. `GPT_5_1_Codex_V2.md`.