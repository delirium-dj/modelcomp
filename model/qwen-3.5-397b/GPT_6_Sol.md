# Qwen3.5-397B-A17B — findings by GPT 6 Sol

- Source: Qwen (`Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B
- **Short description:** Alibaba's February 2026 open-weight visual-language sparse-MoE flagship, 397B parameters with 17B active. Project alias `qwen-3.5-397b/` is **the same checkpoint** as `Qwen/Qwen3.5-397B-A17B` per `RULES.md` identity; don't create another folder ([official card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)).
- **Provider / access:** Downloadable `Qwen/Qwen3.5-397B-A17B` weights, self-host via vLLM/SGLang **OpenAI-compatible Chat Completions**; [Qwen's card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B) calls hosted `qwen3.5-plus` a corresponding version with more production features, but production endpoint limits/benchmarks should be confirmed separately. Project `opencode/qwen-3.5-397b` is a catalog alias **not a verified live OpenCode Console ID**.
- **Release / knowledge:** February 16, 2026 per [AA](https://artificialanalysis.ai/models/qwen3-5-397b-a17b-non-reasoning); exact training cutoff not specified by the reviewed Qwen card.
- **IDs:** Upstream `Qwen/Qwen3.5-397B-A17B`; project slug `qwen-3.5-397b` with 397B as parameter count (not a dotted version); no verified free Zen API ID.
- **Context window:** [Qwen official card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B) **262,144 native**, extensible up to ~1,010,000 with configured YaRN; AA non-reasoning tested ~262K. Hosted Plus 1M default is a **different serving deployment**.
- **Modalities:** Native text/image/video input → text output, tool calling and switchable thinking ([official Qwen card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)); self-host media sampling depends on inference engine, no native audio input/output.
- **Pricing (as of 2026-10-15):** Apache-2.0 weights available ([HF](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)); self-host compute is not $0. [AA's **non-reasoning** Alibaba endpoint](https://artificialanalysis.ai/models/qwen3-5-397b-a17b-non-reasoning) quotes **$0.60 input / $3.60 output per 1M**; not a universal price for all checkpoints/efforts. Current OpenCode Console does not list a dedicated 397B ID ([catalog](https://opencode.ai/docs/zen/)).
- **Architecture:** [Qwen card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B): **397B total / 17B active sparse MoE**, Gated DeltaNet + attention, separate vision encoder, open weights Apache-2.0.

### Raw benchmarks found

Use the [Qwen checkpoint's own exact-column results](https://huggingface.co/Qwen/Qwen3.5-397B-A17B) to score the model, rather than the hosted Plus service's Vals benchmarks. [AA/BenchLM's non-reasoning profile](https://benchlm.ai/models/qwen3-5-397b) is a different thinking setting and often a smaller provider context. Tool/harness versions are labelled where possible.

Agent / tool use:

- [Qwen checkpoint BFCL-v4 **72.9%**, Tau2 **86.7%**, MCP-Mark **46.1%**, Tool Decathlon **38.3%**, BrowseComp **69.0% context-fold / 78.6% discard-all**, OSWorld-Verified **62.2%**](https://huggingface.co/Qwen/Qwen3.5-397B-A17B). Search-context-management variants are not repeated runs of the same prompt setup.
- [Qwen SWE-bench Verified **76.4%**, Terminal-Bench 2.0 **52.5%**](https://huggingface.co/Qwen/Qwen3.5-397B-A17B); independent [Claw-Eval **56.8%**](https://claw-eval.github.io/) attributed by [BenchLM](https://benchlm.ai/models/qwen3-5-397b). No verified TB4.0 score for exact upstream checkpoint.

Reasoning / knowledge:

- [Qwen checkpoint GPQA **88.4%**, HLE **28.7%** no tools, HLE-Verified **37.6%**, AIME 2026 **91.3%**, MMLU-Pro **87.8%**](https://huggingface.co/Qwen/Qwen3.5-397B-A17B). [AA non-reasoning HLE **19.8%**, CritPt **0.9%**, estimated Intelligence Index **21**](https://benchlm.ai/models/qwen3-5-397b) cannot be directly equated with thinking-mode Qwen results.

Coding:

- [Qwen SWE-bench Verified **76.4%**, SWE Multilingual **69.3%**, Terminal-Bench 2.0 **52.5%**, LiveCodeBench v6 **83.6%**](https://huggingface.co/Qwen/Qwen3.5-397B-A17B); [SWE-bench Pro **50.9%**](https://benchlm.ai/models/qwen3-5-397b) is Qwen-comparison attributed and separate from Verified. No DeepSWE exact checkpoint result found in reviewed card.

Long context / multimodal:

- [262K native, ~1.01M with YaRN](https://huggingface.co/Qwen/Qwen3.5-397B-A17B); [vendor AA-LCR **68.7%** and LongBench v2 **63.2%**](https://huggingface.co/Qwen/Qwen3.5-397B-A17B) do not certify 1M full-window retrieval.
- [Qwen MMMU-Pro **79.0%**, MathVision **88.6%**, OmniDocBench 1.5 **90.8%**, VideoMMMU **84.7%**](https://huggingface.co/Qwen/Qwen3.5-397B-A17B); [AA non-reasoning MMMU-Pro **52.7%**](https://benchlm.ai/models/qwen3-5-397b) shows effort/harness sensitivity, not absence of native vision.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau2 86.7%, OSWorld-Verified 62.2% and MCP-Mark 46.1%; terminal 52.5% and independent Claw 56.8% limit tougher workflows.
- **Reasoning: 79/100.** Thinking GPQA 88.4%, HLE 28.7% and AIME 91.3%; AA nonthinking CritPt 0.9% and index 21 are separate setting caps.
- **Context window: 88/100.** Native 262K and optional YaRN ~1M, without a verified full-range MRCR result.
- **Multimodal: 90/100.** Native image/video with MMMU-Pro 79%, VideoMMMU 84.7%, no audio.
- **Coding: 74/100.** SWE Verified 76.4%, Pro 50.9%, TB2.0 52.5% and LCB 83.6%; modern extended coding benchmark sparse.
- **Cost efficiency: 78/100.** Apache weights and AA $0.60/$3.60 nonthinking hosting, but compute and reasoning-mode prices vary and no verified free API.
- **Overall Score: 81/100.** (72 + 79 + 88 + 90 + 74) / 5 = 80.6, half-up 81; open-weight video/vision generalist for bounded agents when checkpoint, effort and true provider window are validated.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh Qwen upstream card and checkpoint-specific results contrasted with AA non-reasoning provider data; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
