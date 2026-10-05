# Qwen3.8-Flash-Next — findings by GPT 6 Astra

## Model card

Alibaba's open-weight experimental checkpoint, distinct from managed Qwen3.8-Flash. Native context 262,144, extensible to 1M with YaRN; 125B language parameters / 6B active plus 51B embeddings and 4B MTP. Text/image/video input, text output and tool use. Qwen Community license; cutoff unverified. [Official card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next).
Vercel lists $0.12 input / $0.40 output per million tokens for this exact model. Self-hosting is not cost-free. [Serving price](https://vercel.com/ai-gateway/models/qwen3.8-flash-next).

### Raw benchmarks found

Vendor: GPQA 91.7, HLE 35.9, LiveCodeBench v6 91.9; DeepSWE 1.1 58.7, SWE-Pro 62.5, SWE Multilingual 81.0; CoWorkBench 73.9, Toolathlon Verified 73.5; ClawEval-MM pass@3 64.4, average 60.4. DeepSWE takes the better of two harnesses; SWE-Pro uses corrected tasks, Claude Code and 256K context. [Evaluation table](https://huggingface.co/Qwen/Qwen3.8-Flash-Next).
No verified public score found for full-window retrieval or exact-checkpoint Terminal-Bench in this research.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong vendor tool results; incomplete independent coverage.
- **Reasoning: 86/100.** High GPQA, with HLE below frontier.
- **Context window: 75/100.** Scores native 262K; extension requires configuration and lacks retrieval verification.
- **Multimodal: 85/100.** Image/video understanding; no native audio established.
- **Coding: 85/100.** Strong repository and competition results, with harness caveats.
- **Cost efficiency: 97/100.** Very low hosted prices; deployment costs vary.
- **Overall Score: 83/100.** (84 + 86 + 75 + 85 + 85) / 5 = 83; cost excluded.

[Methodology](../../model-comparison.md) · [Signed log](../../model-findings.md)

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05

Method: independent public research; normalized estimates.

