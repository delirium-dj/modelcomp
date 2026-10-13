# MiniMax M3 — findings by GPT 6 Sol

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's June 2026 open-weight sparse-attention MoE for million-token multimodal coding and agent workflows ([official launch](https://www.minimax.io/blog/minimax-m3), [weights card](https://huggingface.co/MiniMaxAI/MiniMax-M3)).
- **Provider / access:** Official MiniMax API and `MiniMaxAI/MiniMax-M3` weights; HF documents vLLM/SGLang **OpenAI-compatible Chat Completions** self-hosting ([model card](https://huggingface.co/MiniMaxAI/MiniMax-M3)). No verified free Zen ID.
- **Release / knowledge:** June 1, 2026 official announcement ([MiniMax](https://www.minimax.io/blog/minimax-m3)); exact knowledge cutoff not specified by the cited model card.
- **IDs:** `MiniMaxAI/MiniMax-M3` on Hugging Face; `minimax/MiniMax-M3` on [Vals](https://www.vals.ai/models/minimax_MiniMax-M3). `minimax-ai/minimax-m3` is the project display route, not evidence of a free hosted endpoint.
- **Context window:** **1M**, with [Vals](https://www.vals.ai/models/minimax_MiniMax-M3) showing **512K max output** on the tested MiniMax API; [official launch](https://www.minimax.io/blog/minimax-m3) states rates above 512K input rise.
- **Modalities:** Native text/image/video input → text output ([MiniMax](https://www.minimax.io/blog/minimax-m3)); thinking enabled/adaptive/disabled ([weights card](https://huggingface.co/MiniMaxAI/MiniMax-M3)), with tool calls and computer-use harnesses. No verified native audio input/output for this checkpoint.
- **Pricing (as of 2026-10-13):** [AA](https://artificialanalysis.ai/models/minimax-m3) quotes first-party **$0.30 input / $1.20 output per 1M** with ~80% cached-input discount, while [Vals](https://www.vals.ai/models/minimax_MiniMax-M3) lists **$0.60/$2.40** for its API configuration; provider/tier/time differences must be checked before billing. [MiniMax](https://www.minimax.io/blog/minimax-m3) states >512K input incurs a long-context rate. Open weights permit self-hosting but compute is not free.
- **Architecture:** **~428B total / 23B active** sparse MoE with MiniMax Sparse Attention; weights under **MiniMax Community License** (commercial terms subject to license), not Apache/MIT ([HF](https://huggingface.co/MiniMaxAI/MiniMax-M3), [AA](https://artificialanalysis.ai/models/minimax-m3)).

### Raw benchmarks found

Compared MiniMax's [primary release/methodology](https://www.minimax.io/blog/minimax-m3) with independent [Vals](https://www.vals.ai/models/minimax_MiniMax-M3) and [AA](https://artificialanalysis.ai/models/minimax-m3). [BenchLM](https://benchlm.ai/models/minimax-m3) labels source-specific numbers; TB2.1 vendor and Vals runs differ substantially. AA's current Index **29** is not the project's Overall score.

Agent / tool use:

- [MiniMax Terminal-Bench 2.1 **66.0%**, MCP Atlas **74.2%**, BrowseComp **83.5%**, OSWorld-Verified **70.1%**, Claw-Eval **74.5%**](https://www.minimax.io/blog/minimax-m3). [Vals TB2.1 **53.56%**, Finance Agent v2 **48.27% ±0.44**, Code Migration **19.93% ±3.94**, Harvey Legal Agent **4.17% ±1.65**, TB4.0 **1.01% ±1.01**](https://www.vals.ai/models/minimax_MiniMax-M3).
- [AA-attributed TB4.0 **2.0%** and τ² **88.9%**](https://benchlm.ai/models/minimax-m3) use unlike harnesses; TB4.0 and OSWorld 2.0 should not be conflated with TB2.1 / OSWorld-Verified.

Reasoning / knowledge:

- [Vals GPQA **92.68% ±1.44**, MMLU Pro **84.22% ±0.36**, ProofBench v1.1 **18.00% ±3.86**](https://www.vals.ai/models/minimax_MiniMax-M3); [AA HLE **39.0%**, CritPt **3.7%**, GPQA **92.9%**, Intelligence Index **29**](https://benchlm.ai/models/minimax-m3) on its separate suite.
- AA Omniscience Accuracy **16.7%** on [BenchLM's attributed AA table](https://benchlm.ai/models/minimax-m3) suggests caution for unsupported factual answers.

Coding:

- [MiniMax SWE-bench Verified **80.5%**, SWE-bench Pro **59.0%**, TB2.1 **66.0%**, KernelBench Hard **28.8%**](https://www.minimax.io/blog/minimax-m3); [Vals SWE Verified **75.00% ±1.94**, LiveCodeBench **82.15% ±1.05**, Vibe Code v1.1 **47.57% ±5.44**, TB4.0 **1.01%**](https://www.vals.ai/models/minimax_MiniMax-M3). Datasets and harnesses are distinct.

Long context / multimodal:

- [MiniMax native 1M sparse-attention capacity](https://www.minimax.io/blog/minimax-m3); [AA-LCR **83.0%**](https://benchlm.ai/models/minimax-m3) under its own long-context reasoning harness; a measured *full 1M MRCR retrieval* percentage was **not found**.
- [MiniMax MMMU-Pro **78.1%**, VideoMMMU **84.6%**, OmniDocBench v1.5 **91.6%**](https://benchlm.ai/models/minimax-m3) attributed to its official [launch/eval](https://www.minimax.io/blog/minimax-m3); independent [Vals MMMU-Pro **81.16% ±0.94**](https://www.vals.ai/models/minimax_MiniMax-M3). Native video input is distinct from a speech-first voice product.

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP 74.2% and OSWorld-Verified 70.1% are useful; Vals TB2.1 53.6%, TB4.0 1% and migration 19.9% sharply constrain hard autonomy.
- **Reasoning: 81/100.** GPQA ~93% and HLE 39% support knowledge reasoning, but ProofBench 18%, CritPt 3.7% and Omniscience 16.7% limit reliability.
- **Context window: 91/100.** 1M capacity/512K output on Vals's route and AA-LCR 83%; full-window retrieval not verified, pricing rises after 512K.
- **Multimodal: 91/100.** Native image/video, MMMU ~78–81%, VideoMMMU 84.6%; no native audio in/out and route support may vary.
- **Coding: 78/100.** SWE Verified 75–80.5% and SWE-Pro 59% are good, while Vibe Code 47.6% and TB4 1% limit sustained app-building.
- **Cost efficiency: 84/100.** $0.30/$1.20 AA first-party quote or $0.60/$2.40 Vals route still competitive; check provider, long-context rate, and licensing.
- **Overall Score: 83/100.** (74 + 81 + 91 + 91 + 78) / 5 = 83.0; good open-weight multimodal and moderate agentic coding where hard-task regression is tested.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh MiniMax launch/weights card cross-checked with Vals and AA; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
