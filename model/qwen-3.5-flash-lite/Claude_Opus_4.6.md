# Qwen 3.5 Flash Lite — findings by Claude Opus 4.6

- Source: Alibaba Cloud (`qwen/qwen-3.5-flash-lite`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba Cloud's ultra-efficient, cost-optimized variant of the Qwen 3.5 Flash family. Hybrid architecture combining linear attention (Gated Delta Networks) with sparse MoE for maximum inference efficiency and minimal latency. Native vision-language support.
- **Provider / access:** Alibaba Cloud Model Studio, OpenRouter, Hugging Face. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff not publicly disclosed
- **IDs:** `qwen/qwen-3.5-flash-lite`; related to Qwen3.5-35B-A3B hosted config
- **Context window:** 1,000,000 tokens (1M) total — verified via Hugging Face and Model Studio
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11):** ~$0.065–0.10 / $0.26–0.40 per 1M input/output tokens depending on gateway; cache hits up to 90% discount
- **Architecture:** Hybrid linear attention + sparse MoE; ~35B total / ~3B active parameters; open weights (Apache 2.0)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- BrowseComp: competitive scores noted for Qwen 3.5 Flash tier (source: qwen.ai)

Reasoning / knowledge:

- GPQA Diamond: **~82.3–83%** (source: metatext.io / broader Qwen 3.5 Flash evaluations)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- LiveCodeBench: competitive scores noted relative to parameter scale (source: qwen.ai)
- SWE-bench Verified: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- 1M token context window verified; no MRCR/RULER/GraphWalks retrieval benchmarks found

### Normalized scores (1–100)

- **Tool use: 70/100.** Native tool calling and agentic workflow support. BrowseComp performance noted as competitive for the Flash tier. Capped by lack of specific Terminal-Bench or Claw-Eval scores and the ultra-lightweight parameter budget (~3B active).
- **Reasoning: 76/100.** GPQA Diamond ~82–83% is impressive for a 3B-active-parameter model. RL-optimized reasoning at minimal compute cost. Capped slightly below larger models due to parameter budget constraints.
- **Context window: 88/100.** 1M native context window matches frontier offerings despite the tiny active parameter count. No independent retrieval benchmarks found.
- **Multimodal: 55/100.** Native vision-language support with text and image inputs. Strong document understanding and layout parsing. No audio or video. No specific vision benchmark scores found.
- **Coding: 72/100.** Competitive LiveCodeBench scores noted for the Flash tier. The 3B active parameter budget limits complex repository-level reasoning compared to larger models. Strong for its weight class.
- **Cost efficiency: 95/100.** ~$0.065–0.10/$0.26–0.40 per 1M tokens is among the cheapest frontier-competitive models available. 90% cache discount. Open weights allow self-hosting at near-zero marginal cost.
- **Overall Score: 72/100.** Mean of (70 + 76 + 88 + 55 + 72) / 5 = 72.2, rounded to 72. An exceptional value model punching well above its weight class, ideal for high-volume cost-sensitive applications with strong reasoning at minimal compute.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-04
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen 3.5 Flash Hugging Face Model Card](https://huggingface.co)
  - [Qwen Official Blog](https://qwen.ai)
  - [Alibaba Cloud Model Studio Pricing](https://alibabacloud.com)
  - [OpenRouter Qwen 3.5 Flash Lite](https://openrouter.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
