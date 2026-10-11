# Qwen 3.8 Flash Next — findings by Claude Opus 4.6

- Source: Alibaba / Qwen 3.8 Flash Next
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's experimental Qwen4-architecture preview model (Aug 2026). 125B MoE with only 6B active params per token. Introduces Gated DeltaNet + Qwen Sparse Attention for next-gen efficiency in agentic coding and tool use.
- **Provider / access:** Qwen Cloud (DashScope) as Qwen3.8-Flash, Hugging Face open weights, OpenRouter. Qwen Community License 1.0.
- **Release / knowledge:** 2026-08-26 release; experimental preview of Qwen4 architecture.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (HuggingFace); `opencode/qwen-3.8-flash-next` (Zen)
- **Context window:** 262,144 tokens native (1M via YaRN extension).
- **Modalities:** Text, image, video in; text out; tool calls.
- **Pricing (as of 2026-10-11):** ~$0.20 / $0.50 per 1M tokens (varies by provider). Self-hosted via open weights.
- **Architecture:** 125B total parameters, 6B active per token. Sparse MoE with Gated DeltaNet (GDN), Qwen Sparse Attention (QSA), 51B N-gram embedding table, Gated Residual branches. Muon optimizer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3–86.6** (source: qwen.ai, cellcog.ai; range across evaluation configs)
- CoWorkBench: **73.9** (source: qwen.ai)
- Toolathlon: **73.5** (source: cellcog.ai)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~91.7%** (source: benchmark aggregators, traictory.com)
- HLE (Humanity's Last Exam): **35.9%** (source: huggingface.co model card)
- ARC-AGI-2: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Pro: **62.5** (source: cellcog.ai, qwen.ai)
- SWE-bench Multilingual: **81.0** (source: benchmark reports)
- DeepSWE 1.1: **58.7** (source: cellcog.ai)
- LiveCodeBench v6: **91.9%** (source: huggingface.co model card)
- SciCode: no verified public score found

Long context:

- 262K native (1M via YaRN). Hybrid GDN+QSA attention designed for long-sequence efficiency. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 89/100.** TB 2.1 84.3–86.6 is near-frontier (ref: 80%+ on TB 2.1 = 87–92 range). CoWorkBench 73.9 and Toolathlon 73.5 show strong agentic capabilities. Excellent for a 6B-active model.
- **Reasoning: 88/100.** GPQA Diamond ~91.7% is strong frontier-class. HLE 35.9% is moderate-strong. Missing ARC-AGI data. Novel architecture shows promising reasoning capability.
- **Context window: 80/100.** 262K native with YaRN to 1M. GDN+QSA architecture specifically optimized for long context. No published retrieval benchmarks. Same tier as Qwen 3.8 base.
- **Multimodal: 65/100.** Text + image + video in; text out. Multimodal native. No audio input. Video + image = 60–70 range.
- **Coding: 88/100.** LiveCodeBench v6 91.9% is near-frontier. SWE-bench Pro 62.5 and Multilingual 81.0 are strong. DeepSWE 58.7 is competitive. Outstanding coding with only 6B active params.
- **Cost efficiency: 96/100.** ~$0.20/$0.50 is extremely affordable. 6B active params = ultra-efficient inference. Open weights for self-hosting. Among the most cost-effective frontier performers.
- **Overall Score: 82/100.** Mean of (89 + 88 + 80 + 65 + 88) / 5 = 82.0. Remarkable efficiency model punching far above its weight; a preview of Qwen4's architectural innovations.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (qwen.ai, huggingface.co, cellcog.ai, benchlm.ai, github.com, activepieces.com, unsloth.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
