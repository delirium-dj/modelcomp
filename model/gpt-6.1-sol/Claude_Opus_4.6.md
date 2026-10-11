# GPT-6.1 Sol — findings by Claude Opus 4.6

- Source: OpenAI / GPT-6.1 Sol
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's efficiency-optimized frontier reasoning model (Sep 2026). Delivers near-Astra performance for agentic coding, computer use, and professional workflows at ~5x lower cost than the flagship GPT-6 Astra.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), Azure OpenAI, OpenRouter. Responses API for tool calling.
- **Release / knowledge:** 2026-09-29 release; knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens total; 128,000 max output tokens.
- **Modalities:** Text, image in; text out; tool calls; JSON mode. Reasoning effort: low/medium/high/xhigh/max.
- **Pricing (as of 2026-10-11):** $2.00 / $10.00 per 1M tokens (input/output). Cached input: $0.10/1M. Batch/Flex ~50% lower.
- **Architecture:** Proprietary; GPT-6 family efficiency variant. Same safeguard stack as GPT-6 Astra.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **58.2%** (source: multiple aggregators, max reasoning config)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~94.2%** (source: evaluation aggregators; varies by reasoning config, 82.7–94.2% range reported)
- HLE (Humanity's Last Exam): reported on leaderboard but no verified standalone percentage found
- ARC-AGI-2: **94.2%** (source: benchmark aggregators; near-saturation for GPT-6 family)
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **59.6%** (source: docsbot.ai aggregator)
- DeepSWE v1.1: reported to match GPT-6 Astra performance (source: datacamp, layer3labs)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 1,050,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 4.0 58.2% is strong for agentic work (ref: 55–65% on TB 4.0 = 78–85 range). Near-Astra agentic capabilities confirmed across sources. Missing GDPval/Tau3 data caps higher.
- **Reasoning: 93/100.** GPQA Diamond ~94.2% is near-frontier. ARC-AGI-2 94.2% shows strong abstract reasoning. GPT-6 family near-saturation on standard benchmarks. Missing HLE verified number prevents 95+.
- **Context window: 94/100.** 1.05M verified (production-stable). 128K max output is generous. No published retrieval benchmarks reduce confidence slightly vs 2M+ models.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Image understanding present but not multimodal-first.
- **Coding: 88/100.** SWE-bench Verified 59.6% is solid. DeepSWE v1.1 reportedly matches Astra. Strong agentic coding with computer-use capabilities. Missing LiveCodeBench/SciCode data.
- **Cost efficiency: 88/100.** $2/$10 is very competitive for frontier-class performance. ~5x cheaper than Astra with near-Astra quality. Cached input at $0.10 is exceptional.
- **Overall Score: 82/100.** Mean of (82 + 93 + 94 + 55 + 88) / 5 = 82.4, rounded to 82. Strong efficiency-focused frontier model; text-only multimodal holds it back.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (OpenAI docs, vellum.ai, openrouter.ai, docsbot.ai, datacamp.com, artificialanalysis.ai, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
