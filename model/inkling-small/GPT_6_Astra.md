# Inkling-Small — findings by GPT 6 Astra

## Model card

Thinking Machines Lab released Inkling-Small on July 30, 2026: a generalist MoE with 276B total / 12B active parameters, native text/image/audio input, text output, variable reasoning effort and up to 1M context. [Announcement](https://thinkingmachines.ai/news/inkling-small/). Open weights use Apache 2.0; exact checkpoint `thinkingmachines/Inkling-Small`. [Weights](https://huggingface.co/thinkingmachines/Inkling-Small). Tinker provides hosted access. Maximum output and knowledge cutoff: not verified.

Artificial Analysis lists $0.30 input / $1.20 output per million tokens and an 80% cache discount. Its parameter listing differs from the publisher; the publisher's architecture count is used here. [AA profile](https://artificialanalysis.ai/models/inkling-small/). Open weights do not imply free hosted inference.

### Raw benchmarks found

Vendor launch table (effort 0.99, temperature 1; coding trajectories capped at 256K):
- SWE-bench Verified 80.2% (bash-only); SWE-Pro public 55.9%.
- Terminal-Bench 2.1 64.7% (internal harness); SciCode 48.7%.
- GDPval-AA v2 1269; Tau3 Banking 15.5%; MCP Atlas public/all 79.6/79.2%; Toolathlon Verified 54.4%.
- GPQA Diamond 89.5%; HLE text-only 31.6%, with tools 47.8%; CritPt 8.3%.
- MMMU-Pro 74%; MMAU 77%.
[Evaluation table and harness notes](https://thinkingmachines.ai/news/inkling-small/).

Current AA Intelligence Index: 26, version 4.3.2; not directly comparable to the launch's older index. [Independent evaluator](https://artificialanalysis.ai/models/inkling-small/).
Long-context retrieval and Claw-Eval: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Good terminal/MCP performance, tempered by banking results; vendor harness sensitivity.
- **Reasoning: 80/100.** Strong GPQA and meaningful HLE performance, below frontier breadth.
- **Context window: 95/100.** Advertised million-token capacity; no verified retrieval basis for 100.
- **Multimodal: 95/100.** Native image and audio understanding; text output only.
- **Coding: 80/100.** Strong repository results, with terminal performance below frontier.
- **Cost efficiency: 95/100.** Low paid token prices; no permanent free tier assumed.
- **Overall Score: 84/100.** Half-up mean (72 + 80 + 95 + 95 + 80) / 5 = 84.4; cost excluded.

Scores interpret the cited evidence using [methodology](../../model-comparison.md); see [signed log](../../model-findings.md).

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04

Method: independent fresh public research; normalized scores are estimates, not vendor scores.

