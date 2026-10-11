# Qwen 3.8 — findings by Claude Opus 4.6

- Source: Alibaba / Qwen 3.8
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Apache-2.0 open-weight 27B dense model (Aug 2026). Near-flagship coding and reasoning performance on a single 24GB GPU, with native vision-language capabilities.
- **Provider / access:** QwenCloud/DashScope API, OpenCode Zen `opencode/qwen-3.8`, Hugging Face open weights, OpenRouter. Chat Completions API.
- **Release / knowledge:** 2026-08 release (Qwen 3.8 series); knowledge cutoff estimated mid-2026.
- **IDs:** `opencode/qwen-3.8` (Qwen/Qwen3.8-27B on HuggingFace)
- **Context window:** 262,144 tokens native (1M via YaRN extension); 33,000 max output tokens.
- **Modalities:** Text, image, video in; text out; tool calls. Default reasoning effort: xhigh.
- **Pricing (as of 2026-10-11):** ~$0.42 / $3.00 per 1M tokens (API). $0 self-hosted (Apache 2.0 open weights).
- **Architecture:** 27B dense parameters. Open-weight (Apache 2.0). Vision-language native support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (source: orcarouter.ai model card)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (source: official model card; OpenRouter reports 88.9%)
- HLE (Humanity's Last Exam): **30.8%** (source: huggingface.co model card)
- ARC-AGI-2: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Pro: **61.7%** (source: official model card)
- LiveCodeBench v6: **90.3%** (source: orcarouter.ai, huggingface.co model card)
- SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- 262K native context window (1M via YaRN). No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 73.0% is very strong (ref: 70%+ on TB 2.1 = 82–88 range). Open-weight model with proven agentic capabilities. Missing GDPval/Tau3/Claw-Eval data.
- **Reasoning: 87/100.** GPQA Diamond 89.2% is strong frontier-class (ref: 88–92% = 85–90 range). HLE 30.8% is moderate. No ARC-AGI-2 data limits ceiling.
- **Context window: 80/100.** 262K native is generous for a 27B model (ref: 200K = 75; 262K with YaRN to 1M pushes toward 80). No published retrieval benchmarks reduce confidence.
- **Multimodal: 65/100.** Text + image + video in; text out. Vision-language native. No audio input. Video + image multimodal = 60–70 range.
- **Coding: 90/100.** SWE-bench Pro 61.7% is strong. LiveCodeBench v6 90.3% is near-frontier. Competitive with much larger models on coding tasks. Missing SciCode/DeepSWE data.
- **Cost efficiency: 95/100.** ~$0.42/$3.00 is very affordable for this performance level. Apache 2.0 open weights allow free self-hosting. Among the best value-per-performance in the dataset.
- **Overall Score: 81/100.** Mean of (85 + 87 + 80 + 65 + 90) / 5 = 81.4, rounded to 81. Exceptional open-weight model punching far above its weight class; multimodal output limitations hold it back.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (Alibaba/Qwen docs, huggingface.co, orcarouter.ai, OpenRouter, emergent.sh, qwen.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
