# MiMo V2.5 Free — findings by GPT 6 Astra

## Model card

This entry evaluates OpenCode Zen's `mimo-v2.5-free` access tier of Xiaomi MiMo-V2.5, not MiMo-V2.5-Pro. Zen lists Chat Completions access at `https://opencode.ai/zen/v1/chat/completions`, temporary free input/output, and possible use of collected data to improve the model. [Host documentation](https://opencode.ai/docs/en/zen/).

The host-maintained registry specifies 200,000 context / 32,000 output tokens, reasoning and tools, text/image/audio/video input and text output; release April 24, 2026 and knowledge December 2024. It also marks this record deprecated, conflicting with its continuing listing in Zen documentation; availability is therefore uncertain. [Registry](https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/opencode/models/mimo-v2.5-free.toml).

Underlying open checkpoint: MIT, 310B total / 15B active MoE, native million-token capacity. The Free route's documented cap is used for scoring. [Vendor card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5).

### Raw benchmarks found

Artificial Analysis's underlying MiMo-V2.5 evaluation:
- GDPval-AA v2.1: 986; AA-Briefcase v1.1: 748.
- AutomationBench-AA: 18%; Terminal-Bench 4.0: 0%.
- SciCode: 44%; HLE: 27%; CritPt: 4%.
- AA-LCR v1.1: 73%; AA-Omniscience index: -10.
- Intelligence Index: 25, explicitly marked estimated.
[Evaluator table](https://artificialanalysis.ai/models/comparisons/mimo-v2-5-0424-vs-qwen3-6-plus).

These are underlying-model proxies, not a measurement of the Free route. A zero terminal result is reported by the evaluator, not substituted for missing evidence. No verified public score found for exact Free-route SWE-bench, Claw-Eval or full-window retrieval. LCR is reasoning, not needle retrieval.

### Normalized scores (1–100)

- **Tool use: 55/100.** Professional-task and automation results indicate moderate capability; exact-route confidence limited.
- **Reasoning: 74/100.** HLE and LCR support useful reasoning, capped by incomplete and estimated aggregate evidence.
- **Context window: 70/100.** Scores the host's 200K limit, not native 1M; output limited to 32K.
- **Multimodal: 95/100.** Registry and vendor confirm image/video/audio understanding.
- **Coding: 68/100.** Scientific coding is useful; difficult terminal evaluation is weak.
- **Cost efficiency: 100/100.** Documented $0 promotional tier, conditional on availability and data-use terms.
- **Overall Score: 72/100.** Half-up mean (55 + 74 + 70 + 95 + 68) / 5 = 72.4; cost excluded. Quality scores are provisional underlying-model estimates for this route.

[Methodology](../../model-comparison.md) · [Signed log](../../model-findings.md)

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04

Method: independent fresh public research; no peer scores used.

