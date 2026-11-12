# Xing4.0-29B-A4B — findings by GPT-6 Luna

- Source: China Telecom/XingChen-AGI/Xing4.0-29B-A4B
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0-29B-A4B
- **Short description:** China Telecom's open-weight agent-oriented MoE, a successor to the TeleChat series. It targets coding, long-context and tool-use workloads, with 4B parameters active per token.
- **Provider / access:** Official weights at Hugging Face `XingChen-AGI/Xing4.0-29B-A4B`; supported deployment stacks include vLLM, SGLang, and KTransformers, but the model card warns that vLLM/SGLang support requires out-of-tree plugins. OpenRouter currently lists `xingchen-agi/xing4.0-29b-a4b:free`. No direct OpenCode Zen route independently verified.
- **Release / knowledge:** Model card and public registry place release in September 2026. No exact training-data cutoff found.
- **IDs:** Official checkpoint `XingChen-AGI/Xing4.0-29B-A4B`; OpenRouter `xingchen-agi/xing4.0-29b-a4b:free`.
- **Context window:** 256K native, extendable to 512K using YaRN.
- **Modalities:** Text input and text output only. Tool calling and reasoning are supported. The model-card inference example enables thinking; the benchmark table does not specify a separate mode for every result.
- **Pricing (as of 2026-11-01):** Apache-2.0 weights are available for self-hosting; OpenRouter currently lists its `:free` route at $0/$0 per 1M tokens. Hosted availability and free-tier limits can change.
- **Architecture:** 29B total / 4B active MoE; 64 routed experts, 4 active per token plus one shared expert; 40 layers; MLA attention. The vendor reports training on Ascend NPUs with MindSpore. Apache-2.0 license.

### Raw benchmarks found

All benchmark values below are vendor-published in the exact-model card. The card provides setup details and repeat counts for many rows, but does not unambiguously label a per-task thinking toggle; preserve this limitation when comparing with explicitly non-thinking baselines.

Agent / tool use:

- Tau3-Bench: **64.63 avg pass@1** over four runs.
- Claw-Eval: **76.55**, official harness, average over three runs.
- DeepresearchBII: **60.80**, OpenCode harness with Exa MCP enabled.
- IFBench: **69.67**.

Reasoning / knowledge:

- AIME 2026: **90.00**, average over five independent runs.
- AA-LCR: **61.00**, average over three runs.
- No exact-model GPQA Diamond or HLE result found.

Coding:

- SWE-bench Verified: **75.00%** using SWE-agent, temperature 1.0, top_p 0.95, and 210K context.
- Terminal-Bench 2.1: **57.50%**, Terminus-2, 24-hour timeout, average over three runs, max output 64K.
- SWE-bench Multilingual: **66.00%** using SWE-agent and 210K context.

Long context:

- Native context: **256K**, extendable to 512K by YaRN. AA-LCR is 61.00 (three-run average); no specific needle-in-haystack result at 512K was found.

### Normalized scores (1–100)

- **Tool use: 83/100.** Tau3-Bench at 64.63, Claw-Eval at 76.55, and DeepresearchBII at 60.80 indicate broad agent capability, although results are all vendor-published and use distinct setups. [Official model card](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B).
- **Reasoning: 80/100.** AIME 2026 at 90.0 is strong and AA-LCR is 61.0, but no GPQA/HLE result or detailed task-level effort breakdown is published. [Official model card](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B).
- **Context window: 77/100.** The 256K window falls in the 200K–500K tier; YaRN extends the nominal limit to 512K, but no retrieval evidence at that extension was found. [Official model card](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B).
- **Multimodal: 15/100.** Text-only input and output. [Official model card](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B); [OpenRouter model record](https://openrouter.ai/api/v1/models).
- **Coding: 77/100.** SWE-bench Verified at 75% and Terminal-Bench 2.1 at 57.5% are strong for this size, with multilingual SWE-bench at 66%; results remain vendor-run. [Official model card](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B).
- **Cost efficiency: 100/100 (current OpenRouter free route).** The Apache-2.0 weights can be self-hosted and the current OpenRouter registry lists a free route; underlying compute and route limits still apply. [OpenRouter model registry](https://openrouter.ai/api/v1/models); [official model card](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B).
- **Overall Score: 66/100.** Half-up mean of the five quality dimensions: (83 + 80 + 77 + 15 + 77) / 5 = 66.4 → 66. Cost is excluded. Best suited to text-only coding and agent workloads when the operator can install the model-specific serving plugins; do not assume the 512K YaRN extension has validated retrieval quality.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three exact-model searches; cross-checked the official model card/repository against live provider registry data. Only Xing4.0-29B-A4B results are included; no TeleChat, Xing sibling, or derivative scores are transferred. Per-benchmark settings and repeat counts are retained where the vendor reports them; thinking mode is flagged as under-specified. Scores are normalized interpretations, not vendor scores.
- Reference URLs:
  - [Official Xing4.0-29B-A4B model card](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
  - [Official repository](https://github.com/XingChen-AGI/Xing4.0-29B-A4B)
  - [OpenRouter live model registry](https://openrouter.ai/api/v1/models)
  - [Models.dev catalog](https://models.dev)
  - [BenchmarkList model record](https://benchmarklist.com/models/xingchen-agi-xing4-0-29b-a4b/)

---

---

## Archived research pass — `GPT_6_Luna.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GPT_6_Luna.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Xing 4.0 29B A4B — findings by GPT-6 Luna

- Source: Xing/Xing 4.0 29B A4B
- Archived date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Xing 4.0 29B A4B
- **Short description:** Model tracked under Xing 4.0 29B A4B. Three independent public searches did not verify the publisher, authoritative model card, or exact API/weights identity; no parameter or architecture claims are treated as independently established.
- **Provider / access:** no verified exact-model provider or API route found.
- **Release / knowledge:** no verified release date or cutoff.
- **IDs:** tracked subject `xing_4.0_29b_a4b`; canonical ID unverified.
- **Context window:** no exact-model specification verified.
- **Modalities:** no exact-model modality evidence verified.
- **Pricing (as of 2026-10-28):** no exact-model pricing verified.
- **Architecture:** slug encodes 29B/A4B, but this was not confirmed from an authoritative source in this pass.

## Raw benchmarks found

No exact-model benchmark results with sufficient traceable provenance were found in three independent searches.

Agent / tool use:

- no verified public score found

Reasoning / knowledge:

- no verified public score found

Coding:

- no verified public score found

Long context:

- no verified exact-model long-context result found

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
