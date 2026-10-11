# Qwen 3.5 397B — findings by Claude Opus 4.6

- Source: Alibaba / Qwen3.5-397B-A17B
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's flagship open-weight MoE model (Feb 2026). 397B total / 17B active parameters. Native multimodal with text/image/video support, 201-language coverage, and Gated Delta Networks hybrid attention. Apache 2.0 licensed.
- **Provider / access:** QwenCloud/DashScope (as Qwen3.5-Plus), Hugging Face, OpenRouter, DeepInfra, NVIDIA NIM. Open weights (Apache 2.0).
- **Release / knowledge:** 2026-02 release (Qwen 3.5 series).
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HuggingFace); `opencode/qwen-3.5-397b`
- **Context window:** 262,144 tokens native (extendable to 1M+ in hosted deployments).
- **Modalities:** Text, image, video in; text out; tool calls. Early fusion multimodal training. 201 languages.
- **Pricing (as of 2026-10-11):** Varies by provider. Self-hosted $0 (Apache 2.0). API via Qwen3.5-Plus.
- **Architecture:** 397B total parameters, 17B active per token. Sparse MoE with Gated Delta Networks hybrid attention. Open weights (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **~54.0%** (source: apxml.com)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~88.4%** (source: apxml.com)
- AIME 2026: **~91.3%** (source: morphllm.com)
- MMLU-Pro: **~87.8%** (source: apxml.com)
- HLE: no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench Verified: **~76.4–80.0%** (source: morphllm.com, apxml.com; range across configs)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 262,144 tokens native (1M+ via hosted deployments). No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 76/100.** TB 2.0 ~54.0% is moderate (ref: 50–60% on TB 2.0 = 72–80 range). Missing GDPval/Tau3 data. 17B active params limits complex agentic workflows vs larger models.
- **Reasoning: 87/100.** GPQA Diamond ~88.4% is strong. AIME 2026 91.3% and MMLU-Pro 87.8% show excellent academic reasoning. 201-language coverage adds breadth.
- **Context window: 80/100.** 262K native (ref: 200K = 75; 262K ≈ 78–80). Extendable to 1M+ in hosted deployments pushes slightly higher.
- **Multimodal: 65/100.** Text + image + video in; text out. Early fusion multimodal training. No audio input. Video + image native = 60–70 range.
- **Coding: 82/100.** SWE-bench Verified 76.4–80.0% is strong for an open-weight model. Impressive given only 17B active params. Missing LiveCodeBench/SciCode data.
- **Cost efficiency: 95/100.** Apache 2.0 open weights — free self-hosting. 17B active params = very efficient inference. Outstanding performance-per-compute ratio.
- **Overall Score: 78/100.** Mean of (76 + 87 + 80 + 65 + 82) / 5 = 78.0. Exceptional open-weight model with strong reasoning and coding; multilingual breadth is a key differentiator.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (qwen.ai, huggingface.co, morphllm.com, apxml.com, venice.ai, artificialanalysis.ai, deepinfra.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
