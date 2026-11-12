# Qwen 3.5 0.8B — findings by MiniMax M3.1 Flash

- Source: Alibaba / Qwen3.5-0.8B (`Qwen/Qwen3.5-0.8B`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 0.8B
- **Short description:** Alibaba's smallest published multimodal member of the Qwen3.5 open-weight family, released under Apache-2.0 with a 262,144-token native context and a vision encoder on a 0.8B dense backbone. It is meant for edge assistants and on-device multimodal tasks, and the vendor card warns that this size is prone to thinking loops.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-0.8B`); self-hosted through vLLM (`--max-model-len 262144`) or SGLang (`--context-length 262144`), both documented in the model card, with function calling via the `qwen3_coder` tool-call parser and a text-only serving mode that skips the vision encoder. No OpenCode Zen route and no hosted route with a publicly listed price was found as of 2026-11-12.
- **Release / knowledge:** March 2026 — LLM Stats tracks 2026-03-02 and Artificial Analysis lists the release as March 2026; no knowledge-cutoff date is published.
- **IDs:** `Qwen/Qwen3.5-0.8B` (Hugging Face).
- **Context window:** 262,144 tokens natively (vendor model card).
- **Modalities:** Text, image and video in; text out; reasoning optional (thinking mode available, non-thinking is the default quick-start path); function calling and JSON mode; no audio input in the published evaluation table.
- **Pricing (as of 2026-11-12):** Free open weights under Apache-2.0; no hosted provider listing with a verifiable public price was found on 2026-11-12, so the free open-weight route is the evaluated tier.
- **Architecture:** Causal language model with a vision encoder; dense 0.8B parameters; hidden layout 6 times (3 times Gated DeltaNet plus FFN, then 1 times Gated Attention plus FFN); multi-token prediction trained; family-level support for 201 languages and dialects (vendor model card).

### Raw benchmarks found

All numbers below are vendor self-reported in the Hugging Face model card; the independent aggregator LLM Stats mirrors the same values and flags them as self-reported and unverified.

Agent / tool use:

- BFCL-V4 (function calling): **25.3%**
- IFBench (instruction following): **21.0%**
- MultiChallenge (multi-turn instruction retention): **18.9%**
- TAU2-Bench (multi-turn agent tool use): **11.6%**
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **42.3%** thinking / **29.7%** non-thinking
- MMMLU: **44.3%**
- MMLU-ProX (averaged over 29 languages): **34.6%**
- SuperGPQA: **21.3%**
- PolyMATH: **8.2%**
- GPQA: **11.9%** (thinking mode)
- HMMT Feb 25: **--**; HMMT Nov 25: **--** (not reported in the card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (Artificial Analysis's release page shows "No publicly available API" and N/A for the index as of 2026-11-12)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- No public SWE-bench Verified, SWE-bench Pro, LiveCodeBench, SciCode or Vibe Code Bench number exists for this checkpoint: no verified public score found
- BFCL-V4 25.3% measures function-call accuracy, not code generation, so it is not counted as a coding score

Long context:

- LongBench v2: **26.1%**
- AA-LCR: **4.7%**
- MMLongBench-Doc: **33.6%** thinking / **28.1%** non-thinking
- No MRCR / RULER / GraphWalks number is published at the 262K window, and the AA-LCR 4.7 result indicates the long window is not usable for reasoning.

Multimodal (vendor model card, thinking / non-thinking where both are given):

- OCRBench: **74.5% / 79.1%**
- MLVU: **65.6%**
- RealWorldQA: 63.4% / 61.6%
- MathVista (mini): 62.2% / 58.6%
- VideoMME (with subtitles): **63.8%**; without subtitles: 57.7%
- MMStar: 58.3% / 55.9%
- MMBench EN-DEV-v1.1: 69.9% / 68.0%
- MMMU: 49.0% / 47.4%
- CharXiv (RQ): 41.3% / 38.2%
- ERQA: 34.5% / 23.8%
- LVBench: **45.1%**
- VideoMMMU: **44.3%**
- SimpleVQA: 31.3% / 30.4%
- HallusionBench: 53.1% / 46.7%
- ScreenSpot Pro: 46.5% in non-thinking mode

### Normalized scores (1–100)

- **Tool use: 28/100.** BFCL-V4 25.3 and IFBench 21.0 show that the model can emit function calls, but TAU2-Bench 11.6 and MultiChallenge 18.9 show it loses multi-turn state, and there is no Terminal-Bench, Tau3, GDPval or Claw-Eval result, so it stays in the low band.
- **Reasoning: 20/100.** GPQA 11.9, PolyMATH 8.2, SuperGPQA 21.3 and MMLU-Pro 42.3 thinking place it far below the mid band, and the card's thinking-loop warning applies to this checkpoint directly.
- **Context window: 50/100.** The 262,144-token native window belongs to the 200K-500K band, but AA-LCR 4.7 and LongBench v2 26.1 show that long inputs are not actually processed reliably, so the score sits below that band's floor.
- **Multimodal: 62/100.** Image and video input with text output earns the video-input coverage band, with OCRBench 74.5 and MLVU 65.6, but MMMU 49.0, LVBench 45.1 and ERQA 34.5 show weak perception and there is no audio modality.
- **Coding: 12/100.** No public coding benchmark was found for this checkpoint, so the score is a conservative floor based on the 0.8B size class and the absence of any verified coding result rather than on a measured number.
- **Cost efficiency: 100/100.** Apache-2.0 weights are free to download and no paid hosted lane was verifiable, so the evaluated tier costs $0.
- **Overall Score: 34.4/100.** Mean of the five quality dimensions (28 + 20 + 50 + 62 + 12) / 5; best fit is cheap on-device perception and short extraction tasks, not reasoning, long-context work or coding.

### Conflicting evidence (vendor vs independent) and how it was resolved

- Every benchmark figure comes from the vendor model card. LLM Stats republishes the same values with the flags self-reported and verified false, pointing back at the Hugging Face card, and Artificial Analysis lists the release with no publicly available API and an N/A Intelligence Index. Resolution: all numbers are labelled vendor claims, and no independent measurement is pretended.
- The card warns that with the recommended sampling parameters Qwen3.5-0.8B is more prone to entering thinking loops than other Qwen3.5 models, which may prevent generation from terminating properly, yet it also reports thinking-mode scores such as GPQA 11.9 and MMLU-Pro 42.3. Resolution: the reasoning score uses those numbers but is discounted for the documented loop risk and the absence of independent confirmation.
- Release date: LLM Stats records 2026-03-02 while Artificial Analysis records only March 2026; both agree on the month, so March 2026 is used and the exact day is attributed to LLM Stats.
- The repository meta entry carries the id `opencode/qwen-3.5-0.8b`, but the OpenCode Zen catalogue lists no such route as of 2026-11-12 (only qwen3.8-max, qwen3.8-flash, qwen3.6-plus and qwen3.5-plus), and no priced hosted route for this checkpoint was verifiable. Resolution: the report scores the open-weight checkpoint itself.

### Notes on identity

- `Qwen3.5-0.8B` is the 0.8B dense checkpoint of the Qwen3.5 family. It is distinct from the 2B checkpoint and from the Qwen3.5 397B-A17B sparse MoE, and it is not an alias of the hosted `qwen3.5-plus` model.
- The card documents a vision encoder and a text-only serving mode; audio is not part of the published capability set for this checkpoint.
- Because the weights are public, this entry represents the checkpoint itself rather than any particular hosting provider's configuration, and the vendor's own loop warning is part of the checkpoint's documented behaviour.

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research (official Hugging Face model card and its evaluation tables, the independent LLM Stats model page and the Artificial Analysis release page); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-0.8B model card](https://huggingface.co/Qwen/Qwen3.5-0.8B)
  - [LLM Stats — Qwen3.5-0.8B benchmarks, pricing and context window](https://llm-stats.com/models/qwen3.5-0.8b)
  - [Artificial Analysis — Qwen3.5 0.8B release page](https://artificialanalysis.ai/models/releases/qwen3-5-0-8b)
