# MiMo-V2.6-Distill-Qwen-9B — findings by GPT-6 Luna

- Source: Xiaomi MiMo/MiMo-V2.6-Distill-Qwen-9B
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi MiMo's 9B supervised-fine-tuning checkpoint for agentic-RL research. It is Qwen3.5-9B fine-tuned on Xiaomi-generated data, not the full MiMo-V2.6 Pro or Flash model.
- **Provider / access:** Official MIT checkpoint `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` on Hugging Face; local serving recipes use SGLang, vLLM, and Transformers. As of the model card, it is not deployed by a Hugging Face Inference Provider; no hosted API route was verified.
- **Release / knowledge:** BenchmarkList records September 22, 2026 as release date. No training-data cutoff found.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`.
- **Context window:** 262,144 tokens, from the published checkpoint configuration.
- **Modalities:** Text and image input, text output. The model card demonstrates an image request; video input was not independently confirmed for this checkpoint and is not claimed.
- **Pricing (as of 2026-11-01):** MIT weights can be self-hosted, with hardware and inference costs paid by the operator. No hosted per-token price or provider route found.
- **Architecture:** 9B dense SFT model based on Qwen3.5-9B; BF16 weights. Xiaomi describes it as a starting checkpoint for open agentic-RL research.

### Raw benchmarks found

Xiaomi reports the released SFT checkpoint in its MiMo-V2.6 technical report/model card. Rows marked “mini” are internal evaluation sets, not standard public benchmarks. Results for MiMo-V2.6-Pro or Flash are excluded.

Agent / tool use:

- AutomationBench v1.0.6: **30.3 avg@1**; Terminal-Bench 2.1: **37.1 avg@1**; Toolathlon-Verified: **35.2 avg@1**; JobBench: **18.3 avg@1** (vendor).
- MiMo General (mini): **62.2 avg@1** (internal set).
- Independent BenchmarkList record: JobBench **18.3%** and Terminal-Bench 2.1 **37.1%**; these match the vendor's figures and are not separate evaluations.

Reasoning / knowledge:

- No exact-checkpoint GPQA Diamond, HLE, AIME, or other standard reasoning result was verified in the public model card/technical report.
- MiMo General (mini) is **62.2 avg@1**, but it is an internal Xiaomi evaluation set and not a substitute for a public reasoning benchmark.

Coding / security:

- SWE-bench Verified: **61.1 avg@3**; SWE-bench Pro: **44.6 avg@3**; MiMo Code (mini): **51.6 avg@3** (internal); MiMo Cyber (mini): **31.3 avg@3** (internal).
- Visual coding (mini): **64.0 avg@1** (internal).
- Terminal-Bench 2.1: **37.1 avg@1**, listed above.

Long context:

- Maximum configuration: **262,144 tokens**. No long-context retrieval score was verified for this distilled checkpoint.

### Normalized scores (1–100)

- **Tool use: 58/100.** Toolathlon-Verified is 35.2%, AutomationBench 30.3%, and Terminal-Bench 2.1 37.1%; MiMo General mini is stronger but internal. The evidence supports basic agent execution, not frontier tool reliability. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B).
- **Reasoning: 50/100.** No standard reasoning benchmark was found for the exact SFT checkpoint; the internal general set is insufficient to justify a higher result. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B).
- **Context window: 70/100.** The 262K advertised/configured window falls in the 200K–500K tier, but there is no retrieval score to confirm performance at long context. [Checkpoint config](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B/resolve/main/config.json).
- **Multimodal: 65/100.** The exact model card demonstrates image input and text output; video and audio capabilities are not assumed from the Qwen family or larger MiMo variants. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B).
- **Coding: 65/100.** SWE-bench Verified at 61.1% and SWE-bench Pro at 44.6% are promising for a 9B SFT checkpoint, but Terminal-Bench 2.1 at 37.1% and the internal-only auxiliary coding results limit confidence. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B); [BenchmarkList](https://benchmarklist.com/models/xiaomi-mimo-v2.6-distill-qwen-9b/).
- **Cost efficiency: 100/100 (self-hosted weights only).** MIT weights have no per-token license fee, but compute is not free and no hosted rate is published. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B); [BenchmarkList](https://benchmarklist.com/models/xiaomi-mimo-v2.6-distill-qwen-9b/).
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions: (58 + 50 + 70 + 65 + 65) / 5 = 61.6 → 62. Cost is excluded. Best suited as a small research starting point for agentic fine-tuning; evidence is not strong enough to position it as a general reasoning or hosted assistant model.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three exact-model searches; cross-checked Xiaomi's model card/technical report, the checkpoint configuration, and BenchmarkList. Public averages and proprietary “mini” evaluation sets are separated. No benchmark results from the MiMo-V2.6 Pro/Flash siblings are used. Scores are normalized interpretations, not vendor scores.
- Reference URLs:
  - [Xiaomi MiMo distilled checkpoint](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)
  - [Checkpoint configuration](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B/resolve/main/config.json)
  - [MiMo-V2.6 technical report](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [BenchmarkList model record](https://benchmarklist.com/models/xiaomi-mimo-v2.6-distill-qwen-9b/)

---
