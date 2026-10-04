# DeepSeek V4 Flash Vision Exp

## Model card

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

- **Tool use: 85/100.** Strong vendor tool and terminal results support advanced agent use; weaker public automation results temper the score. Harness-sensitive estimate. [Evidence](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
- **Reasoning: 82/100.** High provider-measured GPQA supports strong reasoning, but incomplete independent coverage makes this provisional. [Evidence](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp)
- **Context window: 95/100.** Approximately one million advertised tokens; effective full-window retrieval remains unverified. [Specification](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp)
- **Multimodal: 70/100.** Verified image understanding and visual agent evaluations; no verified native audio input or image/audio generation. [Evidence](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
- **Coding: 85/100.** Terminal, repository and software-engineering evaluations support strong coding, with material harness and benchmark-version limitations. [Evidence](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
- **Cost efficiency: 95/100.** Standard third-party token pricing is inexpensive for the measured capability; promotional rates are not assumed permanent. [Prices](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp)
- **Overall Score: 83/100.** Rounded arithmetic mean of tool use, reasoning, context, multimodal and coding: (85 + 82 + 95 + 70 + 85) / 5 = 83.4. Cost is excluded.

See [model comparison](../../model-comparison.md) and [model findings](../../model-findings.md).

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
