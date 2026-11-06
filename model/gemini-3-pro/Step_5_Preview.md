# Gemini 3 Pro — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro. The 3-generation Pro flagship, now **two generations behind** Gemini 4 (Argon, Carbon) and behind even its own 3.7 Flash successor on BenchLM (3.7 Flash 66.53 vs 3 Pro 60.68). BenchLM also classifies it as **Non-Reasoning** — the only such model in this batch.
- **Short description:** A model whose entire reputation rests on **multimodality and window size**: a **2M-token context window** (the largest measured in this research series) and the most comprehensive visual benchmark coverage of any model examined — CountBench 97.3%, AI2D 94.1%, OmniDocBench 88.5%, V* 88.0%, Video-MME 88.4% — while its reasoning and agentic layers have decayed badly (ARC-AGI-1 75.0%, CritPt 9.1%, AA Intelligence Index 28.0, hallucination rate 91.5%).
- **Provider / access:** **Deprecated on OpenCode Zen.** Zen's deprecated-models table lists `Gemini 3 Pro` with a deprecation date of **2026-03-09**, and it is absent from Zen's current model list (which carries Gemini 4 Argon, 3.8/3.7/3.6/3.5 Flash, 3.5 Flash Lite, 3.1 Pro, 3 Flash and 2.5 Pro). It remains benchmarked by BenchLM and Artificial Analysis and is presumably still available on Google's own Gemini API and OpenRouter.
- **Release / knowledge:** the Gemini 3 generation launched late 2025; BenchLM and Artificial Analysis still track it. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-3-pro` (Gemini API); `google/gemini-3-pro` (OpenRouter). No current Zen route.
- **Context window:** **2M tokens** — BenchLM's figure, and the largest context window of any model in this research series, double the 1M standard. AA-LCR is 76.0%. Max output not published.
- **Modalities:** **text, image, video and audio in; text out**, with by far the most extensive measured coverage of any model here. BenchLM classifies its profile as **Non-Reasoning** — it does not expose an explicit reasoning mode in the way the GPT-6 / Claude-5.5 generations do.
- **Pricing (as of 2026-11-05):** Zen's historical rate card for this model was **$2 input / $0.20 cached / $12 output per 1M, with a >200K tier at $4 / $0.40 / $18** — but since it is deprecated there, the practical price is Google's own Gemini API, which Zen mirrored. No free tier.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

BenchLM's 42-row catalog is the index, and it is unusually lopsided: **roughly two-thirds of all rows are multimodal benchmarks sourced from Alibaba's Qwen3.5-397B-A17B and Qwen3.6-Plus comparison tables** — i.e. third-party vendor tables rather than Google's own measurements. Where Google and AA measure the same benchmark, both are shown.

Agent / tool use — **the weakest dimension, and nearly unmeasured**:

- τ²-bench: **87.1%** (AA); Gert Labs: **63.23%**; **JobBench: 11.4%**
- **Terminal-Bench 2.1, Terminal-Bench 4.0, τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp, Claw-Eval: no verified public score found** — the agentic benchmark set is essentially absent
- Vibe Code Bench: **14.30%** (Vals) — the weakest agentic-coding figure in this batch

Reasoning / knowledge:

- **AA-GPQA Diamond: 90.8%** — just clears the 90%+ frontier reference
- **AA-HLE: 39.7%** — just misses the 40%+ frontier reference
- **AA AIME 2025: 95.7%**; AA MMLU-Pro: **89.8%**; AA Global-MMLU-Lite: **92.2%**; AA-IFBench: 70.4%
- **ARC-AGI-1: 75.0%** (ARC Prize verified) — the lowest ARC-AGI-1 in this research series; **ARC-AGI-2: 31.1%**
- AA Intelligence Index: **28.0** — the second-lowest in this batch
- **CritPt: 9.1%**; AA-LCR: **76.0%**
- **AA-Omniscience: index 15.3, accuracy 55.8%, hallucination rate 91.5%** — the worst hallucination figure measured anywhere in this research series
- **MRCR: no verified public score found**

Coding — nearly unmeasured, and what exists is poor:

- **AA LiveCodeBench: 91.7%** — the one strong coding result
- **Vibe Code Bench: 14.30%** (Vals)
- SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, FrontierCode: **no verified public score found**

Multimodal — **the strongest dimension by a wide margin, and the most comprehensively measured of any model in this research series**:

- **CountBench: 97.3%**; **AI2D_TEST: 94.1%**; OmniDocBench 1.5: **88.5%**; **V*: 88.0%**; **Video-MME (with subtitle): 88.4%** / without subtitle 87.7%; **VideoMMMU: 87.6%**; MMMU: **87.2%**; MathVision: 86.6%; We-Math: 86.9%; DynaMath: 85.1%; RealWorldQA: 83.3%; MLVU (M-Avg): 83.0%; RefCOCO (avg): 84.1%; MMMU-Pro: **81.0%** (Google) / 80.2% (AA); CharXiv: 81.4%; CC-OCR: 79.0%; SimpleVQA: 73.2%; ScreenSpot Pro: 72.7%; ERQA: 70.5%; MMLongBench-Doc: 60.5%; **ODINW13: 46.3%**

### Normalized scores (1–100)

- **Tool use: 45/100.** Low, and honestly so: the agentic benchmark set is almost entirely absent for this model. τ²-bench 87.1% is the one respectable figure and Gert Labs 63.23% is middling, but **JobBench is 11.4%, Vibe Code Bench is 14.30%, and Terminal-Bench, τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp and Claw-Eval all have no verified public score** — so none of the methodology's frontier references can be checked. Scored in the low-mid band on the strength of τ²-bench alone.
- **Reasoning: 55/100.** At the bottom of the methodology's mid band. GPQA Diamond 90.8% just clears the 90% reference and AIME 2025 95.7% is strong, but HLE 39.7% just misses the 40% reference, and ARC-AGI-1 is 75.0% (the lowest in this series), ARC-AGI-2 is 31.1%, CritPt is 9.1%, the AA Intelligence Index is 28.0, and the hallucination rate is **91.5% — the worst measured anywhere in this research series**, worse even than MiniMax M3's 91.4% and Gemini 3 Pro's own successor 3.7 Flash's 64.5%. A model with exam-grade knowledge that cannot be trusted to report it.
- **Context window: 97/100.** **2M tokens — the largest context window of any model in this research series**, double the 1M standard the rest of the frontier occupies, with AA-LCR 76.0% as the only measured long-context reasoning figure. Held just under 100 because there is no MRCR retrieval run, no published max-output limit, and AA-LCR at 76.0% is only mid-tier — so the window's size is verified but its *usable* depth at the top is not.
- **Multimodal: 95/100.** The strongest multimodal profile in this entire research series. Text + image + video + **audio** input places it in the methodology's 90–100 "audio in" tier, and the depth is unmatched: CountBench 97.3%, AI2D 94.1%, OmniDocBench 88.5%, V* 88.0%, Video-MME 88.4%, VideoMMMU 87.6%, MMMU 87.2%, MathVision 86.6%, We-Math 86.9% — a genuinely comprehensive visual suite rather than one or two flagship numbers. Held at 95 rather than higher by text-only output and the weak ODINW13 (46.3%) and MMLongBench-Doc (60.5%) rows.
- **Coding: 55/100.** Bottom of the mid band. AA LiveCodeBench 91.7% is the sole strong result, but Vibe Code Bench is 14.30%, and **SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index and FrontierCode are all unpublished** for this ID — the entire coding frontier-reference set is unmeasurable. Scored mid-low rather than lower only because LiveCodeBench 91.7% is a genuine signal.
- **Cost efficiency: 60/100.** Zen's historical card was $2/$12 with a >200K tier at $4/$18, which sits above the methodology's ~$3/$15 (≈60) anchor in output price. Drawn down from a pure rate-card reading by the **deprecation**: Zen retired Gemini 3 Pro on 2026-03-09 and removed it from the current model list, so the $2/$12 route is no longer purchasable there, and the surviving Gemini API pricing has to be confirmed directly. No free tier.
- **Overall Score: 69/100.** (45 + 55 + 97 + 95 + 55) / 5 = 69.4 → **69** → 69. Recommendation: a **2M-window multimodal analysis engine and little else**. If the job is long-video or long-document visual understanding at scale — video comprehension, chart/table extraction, OCR, diagram reasoning — this is the best-equipped model in this research series, and nothing else here comes close on breadth of visual coverage. Do not use it for reasoning or agentic work: it has the worst hallucination rate measured anywhere (91.5%), the lowest ARC-AGI-1 (75.0%), a 9.1% CritPt, essentially no agentic benchmarks, and it is deprecated on Zen. For anything text-centric, Gemini 3.7 Flash at $1.50/$7.50 dominates it on both price and BenchLM rank.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Google's Gemini 3 launch material and DeepMind model cards as the primary source, cross-checked against BenchLM's 42-row catalog — which is unusual in that roughly two-thirds of its multimodal rows come from **Alibaba's Qwen3.5-397B-A17B and Qwen3.6-Plus third-party comparison tables** rather than Google's own measurements, a provenance caveat recorded explicitly — plus Artificial Analysis, ARC Prize, Vals AI, the JobBench paper and OpenCode Zen's deprecated-models table. Missing benchmarks (Terminal-Bench, τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp, Claw-Eval, MRCR, SWE-bench Verified/Pro, DeepSWE, AA-SciCode, AA Coding Index, FrontierCode) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3 launch (MMMU-Pro and VideoMMMU figures)](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
  - [Google DeepMind — Gemini Pro model card (ARC-AGI-2 figure)](https://deepmind.google/models/gemini/pro/)
  - [BenchLM — Gemini 3 Pro benchmark scores (42 rows, 60.68/100, #51/1009)](https://benchlm.ai/models/gemini-3-pro)
  - [Artificial Analysis — Gemini 3 Pro](https://artificialanalysis.ai/models/gemini-3-pro)
  - [ARC Prize — Gemini 3 Pro verified results](https://arcprize.org/leaderboard)
  - [Hugging Face — Qwen3.5-397B-A17B comparison table (source of most multimodal rows)](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Qwen — Qwen3.6-Plus multimodal comparison table](https://qwen.ai/blog?id=qwen3.6)
  - [OpenCode Zen — model list and deprecated-models table](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
