# Qwen 3.5 2B — findings by MiniMax M3.1 Flash

- Source: Alibaba / Qwen3.5-2B (`Qwen/Qwen3.5-2B`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 2B
- **Short description:** Alibaba's dense 2B-parameter multimodal member of the Qwen3.5 open-weight family, released under Apache-2.0 with a 262,144-token native context, a vision encoder and a hybrid Gated DeltaNet plus attention layout. It targets local, edge and single-GPU deployments where a small model must still handle images and video.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-2B`); hosted OpenAI-compatible route `qwen3.5-2b` on Requesty, provider id `deepinfra/Qwen/Qwen3.5-2B`; self-hosted through vLLM (`--max-model-len 262144`) or SGLang (`--context-length 262144`), both documented in the model card. No OpenCode Zen route exists for this model as of 2026-11-12.
- **Release / knowledge:** March 2026 — LLM Stats tracks 2026-03-02 and Artificial Analysis lists the release as March 2026; no knowledge-cutoff date is published.
- **IDs:** `Qwen/Qwen3.5-2B` (Hugging Face), `qwen3.5-2b` (Requesty), `deepinfra/Qwen/Qwen3.5-2B` (provider route).
- **Context window:** 262,144 tokens natively (vendor model card); the hosted Requesty route also lists 262K.
- **Modalities:** Text, image and video in; text out; reasoning optional (thinking mode available, non-thinking is the default quick-start path); function calling through the `qwen3_coder` tool-call parser; JSON mode; no audio input in the published evaluation table; a text-only serving mode that skips the vision encoder is documented.
- **Pricing (as of 2026-11-12):** Free open weights under Apache-2.0; the cheapest hosted route found is Requesty at $0.02 input / $0.10 output per 1M tokens on DeepInfra (Requesty adds 5% on pay-as-you-go, 0% with own keys).
- **Architecture:** Causal language model with a vision encoder; dense 2B parameters; hidden layout 6 times (3 times Gated DeltaNet plus FFN, then 1 times Gated Attention plus FFN); multi-token prediction trained; family-level support for 201 languages and dialects (vendor model card).

### Raw benchmarks found

All numbers below are vendor self-reported in the Hugging Face model card; the independent aggregator LLM Stats mirrors the same values and flags them as self-reported and unverified.

Agent / tool use:

- TAU2-Bench (multi-turn agent tool use): **48.8%**
- BFCL-V4 (function calling): **43.6%**
- IFBench (instruction following): **41.3%**
- MultiChallenge (multi-turn instruction retention): **33.7%**
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **66.5%** thinking / **55.3%** non-thinking
- GPQA: **51.6%** (thinking mode)
- SuperGPQA: **37.5%**
- MMMLU: **63.1%**
- MMLU-ProX (averaged over 29 languages): **52.3%**
- PolyMATH: **26.1%**
- HMMT Feb 25: **22.9%**; HMMT Nov 25: **19.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (Artificial Analysis's release page shows "No publicly available API" and N/A for the index as of 2026-11-12)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- No public SWE-bench Verified, SWE-bench Pro, LiveCodeBench, SciCode or Vibe Code Bench number exists for this checkpoint: no verified public score found
- BFCL-V4 43.6% measures function-call accuracy, not code generation, so it is not counted as a coding score

Long context:

- LongBench v2: **38.7%**
- AA-LCR: **25.6%**
- MMLongBench-Doc: **45.4%** thinking / **38.8%** non-thinking
- No MRCR / RULER / GraphWalks number is published at the 262K window.

Multimodal (vendor model card, thinking / non-thinking where both are given):

- MathVista (mini): **76.7% / 73.9%**
- MMMU: **64.2% / 64.2%**
- DynaMath: 73.6% / 69.6%
- RealWorldQA: 74.5% / 71.2%
- MMStar: 71.7% / 68.0%
- MMBench EN-DEV-v1.1: 83.3% / 81.3%
- OCRBench: 84.5% / 85.4%
- CharXiv (RQ): 58.8% / 52.6%
- ERQA: 43.8% / 33.0%
- VideoMME (with subtitles): **75.6%**
- MLVU: **76.2%**
- VideoMMMU: **62.1%**
- LVBench: **57.1%**
- ScreenSpot Pro: 54.5% in non-thinking mode

### Normalized scores (1–100)

- **Tool use: 48/100.** TAU2-Bench 48.8 and BFCL-V4 43.6 show real function-calling and multi-turn tool ability, and IFBench 41.3 shows usable instruction following, but there is no Terminal-Bench, Tau3, GDPval or Claw-Eval result and the vendor card is the only source, so the score sits at the bottom of the mid band.
- **Reasoning: 36/100.** GPQA 51.6, MMLU-Pro 66.5 thinking and HMMT 22.9 / 19.6 put this well below the 60-80 GPQA mid band, and the card warns of thinking loops in this size class, so reasoning is scored near the lower mid range.
- **Context window: 66/100.** The 262,144-token native window falls in the 200K-500K band, but LongBench v2 38.7 and AA-LCR 25.6 show weak retrieval and reasoning over long inputs, so it sits just above that band's floor.
- **Multimodal: 76/100.** Image and video input with text output earns the video-input band, with MathVista 76.7, MLVU 76.2 and VideoMME 75.6, but MMMU 64.2, LVBench 57.1 and ERQA 43.8 show the perception ceiling of a 2B model and there is no audio modality.
- **Coding: 20/100.** No public coding benchmark was found for this checkpoint, so the score is a conservative floor based on the 2B dense size class and the absence of any verified coding result rather than on a measured number.
- **Cost efficiency: 100/100.** Apache-2.0 weights are free to download and the cheapest hosted lane is $0.02 / $0.10 per 1M tokens, effectively free at this scale.
- **Overall Score: 49.2/100.** Mean of the five quality dimensions (48 + 36 + 66 + 76 + 20) / 5; best fit is cheap local or edge multimodal work — image and video question answering, document reading — and not coding or agentic automation.

### Conflicting evidence (vendor vs independent) and how it was resolved

- Every benchmark figure comes from the vendor model card. LLM Stats republishes the same values with the flags self-reported and verified false, pointing back at the Hugging Face card, and Artificial Analysis lists the release with no publicly available API and an N/A Intelligence Index. Resolution: all numbers are labelled vendor claims, and no independent measurement is pretended.
- The card itself warns that with the recommended sampling parameters Qwen3.5-2B is more prone to entering thinking loops than other Qwen3.5 models, which may prevent generation from terminating properly, which sits awkwardly beside the headline thinking-mode GPQA 51.6 and MMLU-Pro 66.5 figures. Resolution: the reasoning score uses the thinking-mode numbers but is discounted for the documented loop risk and the lack of independent confirmation.
- Release date: LLM Stats records 2026-03-02 while Artificial Analysis records only March 2026; both agree on the month, so March 2026 is used and the exact day is attributed to LLM Stats.
- The repository meta entry carries the id `opencode/qwen-3.5-2b`, but the OpenCode Zen catalogue lists no such route as of 2026-11-12 (only qwen3.8-max, qwen3.8-flash, qwen3.6-plus and qwen3.5-plus). Resolution: the report scores the open-weight checkpoint and its Requesty/DeepInfra hosted lane instead of a Zen route.

### Notes on identity

- `Qwen3.5-2B` is the 2B dense checkpoint of the Qwen3.5 family. It is distinct from the 0.8B checkpoint and from the Qwen3.5 397B-A17B sparse MoE, and it is not an alias of the hosted `qwen3.5-plus` model.
- The card documents a vision encoder and a text-only serving mode; audio is not part of the published capability set for this checkpoint.
- Function calling is available when self-hosted through the `qwen3_coder` tool-call parser, and the Apache-2.0 licence allows commercial use and redistribution.
- Because the weights are public, this entry represents the checkpoint itself rather than any particular hosting provider's configuration.

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research (official Hugging Face model card and its evaluation tables, the independent LLM Stats model page, the Artificial Analysis release page, and the Requesty provider listing); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-2B model card](https://huggingface.co/Qwen/Qwen3.5-2B)
  - [LLM Stats — Qwen3.5-2B benchmarks, pricing and context window](https://llm-stats.com/models/qwen3.5-2b)
  - [Artificial Analysis — Qwen3.5 2B release page](https://artificialanalysis.ai/models/releases/qwen3-5-2b)
  - [Requesty — qwen3.5-2b provider listing and pricing](https://www.requesty.ai/model/alibaba/qwen3.5-2b)
