# DeepSeek V4 Flash Vision Exp

## Research refresh — 2026-10-10

Compared with 2026-10-04. Sources accessed today; access dates are not evaluation execution dates. This section supersedes conflicting statements or missing-data claims in the preserved snapshot. No local model benchmark was run.

The [official launch](https://api-docs.deepseek.com/news/news260821/) confirms August 21, 2026 rather than relying only on a serving catalog. The [September 10 changelog](https://api-docs.deepseek.com/updates/) dates first-party retirement and routing to V4.1 Flash. This report continues to assess the preserved experimental weights; a live first-party alias call would test the replacement.

The [weight card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) reconfirms prior benchmarks and adds **DSBench-Hard 63.6%**, vendor internal. Its 305B stored-parameter display must not be conflated with the 284B language-backbone description; additional vision/speculative modules make these different counting scopes.

[AA's exact Vision max comparison](https://artificialanalysis.ai/models/comparisons/deepseek-v4-flash-vision-vs-deepseek-v4-flash) closes major gaps: Index **35**, HLE **34%**, CritPt **11%**, Omniscience index **−18**, LCR v1.1 **81%**, SciCode **50%**, Terminal 4.0 **12%**, Automation **47%**, Briefcase **1425**, GDPval v2.1 **1547**. These measurements support reasoning beyond the old provider-only GPQA proxy, but expose factual reliability limitations. LCR is not full-window needle recall.

[OpenRouter](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp) still lists $0.44/$1.32 standard input/output pricing and DeepInfra's temporary 51% discount. Its own AutoExacto GPQA remains provider-dependent, 88.0–91.2%; TAU version remains unspecified. Reprinted AA values on that page are not a separate independent evaluator.

Reasoning 82→84; other scores unchanged. No verified exact-checkpoint Vibe Code, SWE-bench/LiveCodeBench, cutoff or full-window retrieval was found. V4.1 and text-only 0731 results are not substitutes.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **85, 82, 95, 70, 85, 95**; current: **85, 84, 95, 70, 85, 95**. Overall: **83 → 84**. Changes reflect revised evidence, not necessarily changed model weights.

## Prior research snapshot — 2026-10-04

Preserved for comparison; current corrections are above.

### Model card

This folder represents **DeepSeek-V4-Flash-Vision-Exp**, the experimental visual extension of V4 Flash. Its published weights remain available under MIT. DeepSeek describes visual modules added through continued training; the checkpoint supports image and text input with text output. [Official checkpoint](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)

OpenRouter lists an August 21, 2026 release, a 284B-parameter backbone with 13B active parameters, 1,048,576-token context and 262,144-token maximum completion. It advertises function calling and structured output. These are serving specifications, not demonstrated effective retrieval limits. [Serving catalog](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp)

The original first-party API name is now an alias: DeepSeek says requests to `deepseek-v4-flash-vision-exp` run V4.1 Flash because the old model was retired. This report evaluates the preserved Vision Exp checkpoint, not that replacement. [Current API documentation](https://api-docs.deepseek.com/quick_start/pricing/?tab=case-studies)

Third-party standard pricing is $0.44 input / $1.32 output per million tokens, with cache reads from $0.014. DeepInfra currently advertises promotional $0.2156 / $0.6468 pricing; the cost score uses standard pricing. Hosting open weights yourself still incurs infrastructure costs. [Provider prices](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp)

## Raw benchmarks found

The vendor reports the following using DeepSeek's minimal harness, maximum effort, temperature 1 and top-p 0.95:

| Benchmark | Reported result |
| --- | ---: |
| Terminal-Bench 2.1 | 83.9 |
| NL2Repo | 57.7 |
| CyberGym | 75.3 |
| DeepSWE | 59.3 |
| Toolathlon Verified | 75.9 |
| AutomationBench Public | 25.7 |
| ApexBench pass@1 | 36.5 |
| Agents' Last Exam | 27.3 |
| Chartography | 64.3 |
| ZeroBench pass@5 | 35.0 |

These are vendor measurements, and pass@5 is not interchangeable with pass@1. [Checkpoint evaluation tables](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)

OpenRouter's AutoExacto table reports provider-dependent GPQA Diamond results of 88.0–91.2% and TAU-Bench results of 74.2–77.3% among providers with results. It does not identify the TAU version or expose a matching vendor evaluation setup on this page. [AutoExacto results](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp)

For the exact checkpoint, no verified public score found for Humanity's Last Exam, an Artificial Analysis Intelligence Index, or long-context retrieval. No verified public audio capability found. Missing measurements are not zero scores.

## Normalized scores (1–100)

- **Tool use: 85/100.** Vendor tool evidence now supplemented by independent AA automation.
- **Reasoning: 84/100.** Independent HLE/CritPt/LCR close gaps; negative Omniscience limits confidence.
- **Context window: 95/100.** Million-token serving capacity, not verified full-window retrieval.
- **Multimodal: 70/100.** Image understanding; no verified native audio/video capability.
- **Coding: 85/100.** Vendor repository/terminal evidence and independent SciCode; harder terminal limits retained.
- **Cost efficiency: 95/100.** Unchanged standard third-party rates, with temporary provider promotions separate.
- **Overall Score: 84/100.** Half-up mean (85 + 84 + 95 + 70 + 85) / 5; cost excluded. Previous overall 83.

See [model comparison](../../model-comparison.md) and [model findings](../../model-findings.md).

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-10
