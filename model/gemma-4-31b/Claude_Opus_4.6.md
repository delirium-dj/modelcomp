# Gemma 4 31B — findings by Claude Opus 4.6

- Source: Google / Gemma 4 31B
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's flagship dense open-weight model (Apr 2026). 30.7B parameters with 256K context, configurable thinking mode, and native function calling. Top-tier reasoning in an open-weights format under Apache 2.0.
- **Provider / access:** Google AI, Hugging Face, OpenRouter, Ollama, LM Studio. Apache 2.0 open weights.
- **Release / knowledge:** 2026-04-02 release.
- **IDs:** `google/gemma-4-31b-it` (instruction-tuned)
- **Context window:** 256,000 tokens.
- **Modalities:** Text, image in; text out; function calling; configurable thinking/reasoning mode.
- **Pricing (as of 2026-10-11):** ~$0.09 / $0.34 per 1M tokens (API via OpenRouter). $0 self-hosted (Apache 2.0).
- **Architecture:** 30.7B dense parameters. Open weights (Apache 2.0). Configurable thinking mode. Native function calling.

### Raw benchmarks found

Agent / tool use:

- Tau2 (Agentic Tasks): **76.9%** (source: myclaw.ai)
- Terminal-Bench: no verified standalone score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (source: myclaw.ai, sotaaz.com)
- AIME 2026: **89.2%** (source: myclaw.ai, sotaaz.com, cloudinsight.cc)
- MMLU-Pro: **85.2%** (source: myclaw.ai, cloudinsight.cc, ollama.com)
- HLE: no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- LiveCodeBench v6: **80.0%** (source: dev.to, myclaw.ai, sotaaz.com)
- SWE-bench Verified: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 256,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 76.9% shows strong agentic task capability. Native function calling. Configurable thinking mode adds flexibility. Missing Terminal-Bench/GDPval data.
- **Reasoning: 85/100.** GPQA Diamond 84.3% is solid. AIME 2026 89.2% is excellent math. MMLU-Pro 85.2% is strong general knowledge. Very impressive for a 31B dense model.
- **Context window: 78/100.** 256K is good (ref: 200K = 75; 256K ≈ 78). No retrieval benchmarks published.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Basic vision = 50–60 range.
- **Coding: 82/100.** LiveCodeBench v6 80.0% is strong for an open-weight 31B model. Missing SWE-bench Verified standalone but competitive performance reported.
- **Cost efficiency: 97/100.** ~$0.09/$0.34 API is extremely cheap. Apache 2.0 = free self-hosting. 31B dense = feasible on consumer hardware. Outstanding value.
- **Overall Score: 76/100.** Mean of (78 + 85 + 78 + 55 + 82) / 5 = 75.6, rounded to 76. Excellent open-weight dense model with frontier-class reasoning; limited multimodal holds it back.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (artificialanalysis.ai, myclaw.ai, sotaaz.com, dev.to, huggingface.co, openrouter.ai, ollama.com, cloudinsight.cc); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
