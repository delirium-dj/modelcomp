# MiMo V2.5 Pro — findings by Iceman

- Source: Xiaomi MiMo/MiMo-V2.5-Pro
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi MiMo’s MiMo-V2.5-Pro is an MIT open-weight 1.02T/42B-active MoE model optimized for long-horizon agentic tasks, with 1M context (Base 256K) and strong instruction-following and coding performance.
- **Provider / access:** Open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.5-Pro`, MIT license) and hosted providers. Local metadata lists `xiaomi/mimo-v2.5-pro`, pricing ~$0.435/$0.87 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `MiMo-V2.5-Pro`, `XiaomiMiMo/MiMo-V2.5-Pro`.
- **Context window:** 1,000,000 tokens (Base model 256K; post-trained supports 1M per HF card/local metadata).
- **Modalities:** Text input/output (text-only).
- **Pricing (as of 2026-11-10):** Open weights free to self-host (MIT). Xiaomi FP8 route $0.435/$0.87 per 1M in/out, $0.0036 cached read (local metadata); provider pricing varies.
- **Architecture:** Sparse MoE transformer, 1.02T total parameters / 42B active (per card), optimized for long-horizon reasoning and agent workflows.

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `XiaomiMiMo/MiMo-V2.5-Pro` (benchmark table) unless noted.

Agent / tool use:

- ClawEval: **63.8**
- ClawEval: ATM Assistant: **89.0**
- ClawEval: Web Tasks: **76.5**
- ClawEval: Multi-Agent: **61.4**
- ClawEval: IRL Tasks: **72.5**
- ClawEval: Coding: **85.1**
- ClawEval: File Ops: **75.0**
- Terminal-Bench 2.1: **68.6** (Terminus-2) / **70.2** (Best reported harness per card context)
- Tool use / agentic coding emphasized; strong long-horizon task performance.

Reasoning / knowledge:

- HLE: **48.0**
- GPQA Diamond: **88.7**
- AIME 2026: **95.0**
- MMLU-Pro: **87.0**

Coding:

- SWE-bench Verified: **78.9%**
- SWE-bench Pro: **62.8%**
- LiveCodeBench: **79.2%**
- Terminal-Bench 2.1: **68.6**

Long context:

- 1M context supported; no standalone MRCR/RULER/AA-LCR numeric score extracted from reviewed table.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 88/100.** Strong long-horizon agent/tool performance (ClawEval 63.8 overall with high subtask scores, Terminal-Bench 2.1 68.6) indicating capable agentic execution.
- **Reasoning: 88/100.** Excellent reasoning/knowledge results (HLE 48.0, GPQA Diamond 88.7, AIME 2026 95.0, MMLU-Pro 87.0).
- **Context window: 93/100.** 1M-token context designed for long-horizon agents (Base 256K).
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 88/100.** Strong coding/agentic coding (SWE-bench Verified 78.9%, SWE-bench Pro 62.8%, LiveCodeBench 79.2%, Terminal-Bench 2.1 68.6).
- **Cost efficiency: 90/100.** MIT open weights and competitive hosted pricing (~$0.435/$0.87 per 1M, low cached read) with 42B active parameters offer strong value.
- **Overall Score: 79/100.** Mean of the five non-cost dims (88, 88, 93, 40, 88) = 79.4 → 79. Best fit for long-horizon, text-only agentic coding and reasoning workflows requiring 1M context.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [MiMo-V2.5-Pro model card (Hugging Face)](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)
  - Local repository metadata consulted: `model/mimo-v2.5-pro/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
