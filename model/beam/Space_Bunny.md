# Beam 1.0 — findings by Space Bunny

- Source: Reflection AI (`reflection/Beam-1.0-501B-A23B`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 (501B-A23B)
- **Short description:** Reflection AI's first open-weight model — a sparse 501B/23B-active Mixture-of-Experts reasoning model for coding, reasoning and long-horizon agentic work, pitched explicitly as delivering GLM-5.2-class quality at 3–4× lower inference compute. It is Reflection's flagship launch (2026-10-05), not an alias of any other tracked model. NVIDIA-backed; US-based, positioned in coverage as "America's answer to the Chinese open-weight frontier."
- **Provider / access:** Hugging Face `reflection/Beam-1.0-501B-A23B` (BF16), `-FP8`, `-NVFP4`, plus an optional `-DFlash2` speculative drafter. Served via OpenRouter (4 providers) and on-demand Fireworks deployments (`accounts/fireworks/models/beam-1p0-501b-a23b`, context listed as 1040k). vLLM 0.33.0+ serves it with `--tool-call-parser beam --reasoning-parser beam`. Not on OpenCode Zen.
- **Release / knowledge:** launched 2026-10-05 (launch blog); Artificial Analysis measured it 2026-10-15/16; weights published on Hugging Face in BF16/FP8/NVFP4 during October 2026. **Knowledge cutoff: June 30, 2026** — among the most recent of any model in this dataset.
- **IDs:** `reflection/Beam-1.0-501B-A23B` (BF16), `reflection/Beam-1.0-501B-A23B-FP8`, `reflection/Beam-1.0-501B-A23B-NVFP4`, `reflection/beam-1.0-501b-a23b` (OpenRouter). No Free tier ID.
- **Context window:** **1,048,576 tokens** (1M) — verified from the HF model card, vLLM recipes, Fireworks and Artificial Analysis. Midtraining explicitly extended the effective context to 1M.
- **Modalities:** **text in, text out only.** Reasoning via a Harmony-format analysis channel with `<|call|>` / `<|return|>` turn control; tool calling supported natively; no image, audio or video input, no image output.
- **Pricing (as of 2026-10-17):** **$0.70 input / $2.10 output per 1M** with an 84% cache discount ($0.57 cache hit); blended 7:2:1 rate $0.43/1M (Artificial Analysis median across 4 providers). Cost per Intelligence Index task: **$0.57**. Both rates sit *above* the open-weight class medians ($0.43 in / $1.68 out), so Beam is not the cheapest open model per token — its cost argument rests on ~3–4× lower inference compute (FLOPs ≈ 2 × active params × generated tokens) rather than on a low sticker price. Weights are **Apache 2.0**, free to self-host.
- **Architecture:** sparse MoE, **501.3B total / 23.4B active**; 52 layers (3 dense + 49 MoE); gated GQA with 512-token sliding-window attention plus NoPE full-attention layers; 256 experts, 8 routed per token; 152k vocab; modified Harmony chat template; pretrained on 23.8T curated tokens, post-trained with RL on 100M+ rollouts. Numerics: BF16 (1,003 GB), FP8 (503 GB), NVFP4 (294 GB); an NVFP4 deployment fits one GB200/GB300 tray or 4× B200/B300.

### Raw benchmarks found

> Two independent families of figures exist and they disagree slightly: Reflection's **launch-blog** numbers (reproduced by the independent reflectionbeam.com tracker, table updated 2026-10-08) and Reflection's **Hugging Face model card** numbers, further split across BF16/FP8/NVFP4. Where they differ the model card is used, and both are reported below.

Agent / tool use:

- MCP Atlas: **80.8%** (BF16 model card) / 81.5% (FP8) / 80.5% (NVFP4); launch blog reports **78.7**
- AutomationBench-AA: **48.5%** (Artificial Analysis, independent) — 11 points ahead of K2 Horizon (37.2%) and level with Qwen3.8 27B (48.2%); the public-split vendor figure is 39.3%
- Tau3 banking: **36.1%** (BF16) / 36.8% (FP8) / 35.4% (NVFP4); launch blog **38.0**
- BrowseComp (with context management): **76.8%** (BF16) / 76.7% (FP8) / 75.6% (NVFP4)
- DeepSearchQA (with context management): **80.5%** (BF16) / 79.6% / 81.1%
- AA-Briefcase v1.1: **976 Elo** (Artificial Analysis — its weakest Intelligence Index component)
- Artificial Analysis Cyber Index: **34% task completion** — the leading US open-weights model on that index, and on the Cyber-Index-vs-output-tokens frontier alongside GPT-6 Sol
- **Terminal-Bench 4.0: 3.0%** (Artificial Analysis) — an explicit weak point; behind Qwen3.8 27B (5.6%) and Muse Spark Open (8.1%), and far behind Cognition's SWE-2 (27.3%)
- IFBench (instruction following): **79.6%** (BF16) / 80.7% (FP8) / 79.2% (NVFP4); launch blog 79.7

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30 / #19 of 120** open-weight models in the index display, **#2 among US open-weight models** (behind Meta's Muse Spark Open at 39), **#10 among all open-weight models** (one point behind K2 Horizon at 31); class median 19
- GPQA Diamond: **90.6%** (model card) / 90.5% (launch blog)
- AIME 2026: **97.7%** (BF16) / 98.0% (FP8) / 97.5% (NVFP4); launch blog 97.8
- Humanity's Last Exam: **36%** without tools / **51.1%** with tools (model card); launch blog 36.2 no-tools
- CritPt: **13.1%** (Artificial Analysis); **16.3%** (launch blog) — more than double K2 Horizon (4.6%) and Qwen3.8 27B (5.4%)
- SciCode: **49.2%** (model card) / 49.7% (launch blog)
- AA-Omniscience: **33% accuracy / 47% hallucination rate / index 1.5** (Artificial Analysis) — "knows more, guesses more"; peers K2 Horizon 18%/26%/−3.0 and Qwen3.8 27B 16%/30%/−10.0. The vendor's own public-split index is 10.8 (BF16) / 8.8 (FP8) / 9.8 (NVFP4), launch blog 13.0.
- Token efficiency: **~26k output tokens per Intelligence Index task** (~19k reasoning + ~7k answer) vs K2 Horizon's ~52k; only 26% of output is final answer

Coding:

- SWE-bench Verified: **81.6%** (BF16) / 80.2% (FP8) / 80.7% (NVFP4); launch blog **80.9**
- SWE-bench Pro v1: **66.1%** (BF16) / 65.9% (FP8) / 65.6% (NVFP4); launch blog 65.5 — ahead of GLM 5.2 (62.1), Qwen 3.8 Max (67.7 is higher), Nemotron 3 Ultra (46.4), Inkling (54.3)
- SWE-bench Pro v2-Hard: **76.5%** (BF16) / 78.4% (FP8) / 78.6% (NVFP4); launch blog 77.2
- SWE-bench Multilingual: **78.3%** (BF16) / 78.1% / 77.5%; launch blog 78.0
- Terminal-Bench v2.1: **80.1%** (BF16) / 78.9% (FP8) / 78.4% (NVFP4) — note this is the *old* 2.1 harness; on AA's newer **Terminal-Bench 4.0 it scores only 3.0%**
- LiveCodeBench: **88.3%** (BF16) / 88.1% (FP8) / 87.4% (NVFP4)
- DeepSWE v1.1: **43.3%** (BF16) / 43.0% / 42.7%; launch blog 44.4 — GLM 5.2 is 44.0, GLM 5.3 61.0, Kimi K3 68.0, DeepSeek V4.1 Flash 74.2
- SWE-Atlas Codebase QnA: **31.8%** (BF16) / 32.2% / 31.4% — a clear weak spot (GLM 5.3 61.0, Kimi K3 68.0)
- **Artificial Analysis Coding Agent Index: 28** running in Mirror, Reflection's own open-source CLI harness — 15 points behind Claude Code + Qwen3.8 Max (43) and 40 behind the leaders (68), though among the most token-frugal setups tested

Long context:

- AA-LCR v1.1: **78.2%** (BF16) / 79.4% (FP8) / 78.7% (NVFP4); launch blog 79.3
- LongBench v2: **67.5%** (BF16) / 67.6% / 67.2%; launch blog 65.5
- **No long-context retrieval degradation reported** at 1M; midtraining explicitly extended effective context to 1M

Multimodal:

- **None — text-only.** Artificial Analysis: "Can Beam process images? No." Fireworks metadata: "Support image input: Not supported." No MMMU-Pro, MMMU, CharXiv or OCR figure exists because no such benchmark was run.

Speed (independent):

- **227.9 tokens/s** output — **#2 of 77** open-weight models in size class (class median 68.2); TTFT **1.33 s** (class median 1.71 s)
- Cost rank #29 of 42 on blended price; verbosity rank #10 of 467 (79M tokens on the Index vs class median 130M — "very concise")

### Normalized scores (1–100)

- **Tool use: 86/100.** The strongest dimension and the one Reflection actually optimised for: MCP Atlas 80.8%, AutomationBench-AA 48.5% (best in class, independently measured), Tau3 banking 36.1%, BrowseComp 76.8%, DeepSearchQA 80.5%, and the leading US open-weight score on the AA Cyber Index at 34%. Capped below the top band by **Terminal-Bench 4.0 at just 3.0%** — an unusually severe collapse from its own 80.1% on Terminal-Bench 2.1, meaning "works in a terminal" does not survive the harder, recalibrated 4.0 harness — and by a weak AA-Briefcase Elo of 976, its lowest Intelligence Index component.
- **Reasoning: 82/100.** Genuinely strong: GPQA Diamond 90.6%, AIME 2026 97.7%, HLE 51.1% with tools, CritPt 13.1% (2× its nearest peers), and an AA Intelligence Index of 30 that is #2 among US open weights and #10 among all open weights. Held below 85 by clear losses to the Chinese frontier on hard reasoning — Kimi K3 scores HLE 46.9 no-tools vs Beam's 36.2, GPQA 93.5 vs 90.5, CritPt 23.4 vs 16.3 — and by a **47% hallucination rate** on AA-Omniscience, which is the highest of its peer group despite the best raw accuracy. Beam knows more and guesses more; in production that is a real liability.
- **Context window: 90/100.** A genuine 1,048,576-token window confirmed by four independent sources, with no reported degradation at length and midtraining explicitly extended to 1M; AA-LCR 78.2–79.4% and LongBench v2 67.5% are solid mid-class long-context results. Not higher because Kimi K3 (88.7 LCR) and Nemotron 3.5 Super VL (GraphWalks 89.7) demonstrate stronger retrieval, and Beam publishes no MRCR/RULER curve.
- **Multimodal: 15/100.** **Text-only, confirmed by both the vendor model card and Artificial Analysis, with Fireworks explicitly refusing image input.** No image, audio or video in; text out only. There is no proxy that would justify scoring this above the text-only floor.
- **Coding: 87/100.** The best-evidenced part of the profile after tool use: SWE-bench Verified 81.6%, SWE-bench Pro v2-Hard 76.5–78.6%, SWE-bench Pro v1 66.1%, LiveCodeBench 88.3%, SWE Multilingual 78.3%, Terminal-Bench 2.1 80.1%. Capped by three honest gaps — **SWE-Atlas Codebase QnA at 31.8%** (a third of GLM 5.3's 61.0), **AA Coding Agent Index at 28** even in Reflection's own Mirror harness, and **DeepSWE v1.1 at 43.3%** against GLM 5.3's 61.0 and DeepSeek V4.1 Flash's 74.2. Strong static patcher, weaker long-horizon autonomous engineer.
- **Cost efficiency: 78/100.** Apache 2.0 weights are free to self-host, serving is fast (228 t/s, #2 in class), and the model's headline claim — ~26k output tokens per task vs K2 Horizon's ~52k — is the real economic story and is corroborated by AA's verbosity ranking (#10 of 467, "very concise"). Marked down because the actual sticker price ($0.70/$2.10) is **above** the open-weight class medians ($0.43/$1.68) and vendor pricing was never officially announced at launch; the 3–4× compute advantage is a vendor claim measured against a single comparator (GLM 5.2), not a price anyone can shop against today.
- **Overall Score: 72/100.** Mean of the five non-cost dims (86 + 82 + 90 + 15 + 87) / 5 = 72.0. Best-fit recommendation: an excellent **text-only** Apache-2.0 workhorse for enterprise coding agents and long-horizon tool use where 1M context, token frugality and self-hostability matter and images are irrelevant — and a poor fit for any document/vision pipeline, and one to pilot carefully anywhere factual reliability matters given the 47% hallucination rate.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: public internet research across Reflection's launch blog (`reflection.ai/blog/introducing-beam`, including its 2026-10-08 results update), all three Hugging Face model cards (BF16, FP8, NVFP4) with their full per-numerics benchmark tables and architecture/config data, the independent reflectionbeam.com benchmark tracker and its Beam-vs-GLM-5.2 comparison page, Artificial Analysis's Beam launch article and model page (index, speed, cost, Coding Agent Index, Cyber Index, AA-Omniscience, Terminal-Bench 4.0), vLLM serving recipes, Fireworks and OpenRouter listings, BenchLM's Beam profile, and Fortune coverage. All launch-blog-vs-model-card discrepancies (SWE-bench Verified 80.9 vs 81.6, MCP Atlas 78.7 vs 80.8, Tau3 38.0 vs 36.1, AA-LCR 79.3 vs 78.2, CritPt 16.3 vs 13.1) and the Terminal-Bench 2.1 (80.1%) vs 4.0 (3.0%) split are recorded explicitly rather than silently merged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.