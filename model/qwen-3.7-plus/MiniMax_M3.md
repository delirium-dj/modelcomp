# Qwen 3.7 Plus — findings by MiniMax M3

- Source: Alibaba Qwen Team (`opencode/qwen-3.7-plus` / `qwen/qwen3.7-plus`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's **2026-06-03** multimodal agent reasoning model on the Qwen 3.7 backbone — paired **1M context** with **text + image + video input**, native GUI-agent tier at **GPQA 90.3%** and **LiveCodeBench v6 89.6%**, with **MRCR-v2 91.7%** long-context retrieval. Mid-tier price band **$0.40/$1.60** at ≤256K, escalating to **$1.20/$4.80** at 256K-1M.
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio (`qwen3.7-plus`); OpenCode Go ($10/mo subscription); OpenRouter `qwen/qwen3.7-plus` (mirrored at **$0.32/$1.28**); OpenCode Zen `opencode/qwen-3.7-plus`. ([OpenRouter](https://openrouter.ai/qwen/qwen3.7-plus), [alphasignal](https://alphasignal.ai/news/opencode-adds-alibaba-s-qwen3-7-plus-to-its-10-coding-subscription))
- **Release / knowledge:** **2026-06-03** ([Alibaba launch blog](https://qwen.ai/blog?id=qwen3.7-plus)); knowledge cutoff late-2025 (Qwen 3.6 vintage, ~2025-12).
- **IDs:** `qwen/qwen3.7-plus` (QwenCloud, OpenRouter), `opencode/qwen-3.7-plus` (Zen). Successor: `Qwen3.8 Max` (2026-08-03).
- **Context window:** **1M native total / 131,072 max output**. ([Alibaba launch](https://qwen.ai/blog?id=qwen3.7-plus))
- **Modalities:** **Text + image + video input → text output**. Function calling, structured output, context caching, GUI-agent vision supported.
- **Pricing (as of 2026-10-16):** **Tiered** — `$0.40 / $1.60` per 1M at ≤256K input, **`$1.20 / $4.80`** at 256K-1M. OpenRouter mirrored price **$0.32 / $1.28**. ([Qwen3.7-Plus model card meta.json], [OpenRouter](https://openrouter.ai/qwen))
- **Architecture:** Proprietary, Max-class lineage (Qwen 3.5 architectural foundation scaled). No public param count for this Plus variant (the Max sibling = 2.4T MoE at 95B active per Qwen 3.8 family). Closed weights.

### Raw benchmarks found

Triangulated across **four** independent surfaces: Alibaba Cloud launch blog (vendor-attributed), BenchLM aggregated score sheet (71 of 638 rows), Artificial Analysis independent reruns, OpenRouter benchmarks. Many vendor-side numbers; benchmark-index coverage is partial.

Agent / tool use:

- **BenchLM (Alibaba launch)**: Terminal-Bench 2.0 **70.3%**, QwenClawBench **61.8%**, BFCL v4 **72.9%**, MCP Atlas **73.2%**, OSWorld-Verified **73.3%**, AndroidWorld **81.0%**, VITA-Bench **45.6%**, DeepPlanning **62.3%**, Claw-Eval **62.7%**, QwenWebBench **1536**.
- **Artificial Analysis independent**: τ²-bench results **93%**, GDPval-AA **886** Elo, AA Agentic Index **19.7%** (low), OSWorld 2.0 **2.8%** (very low), GDPval-AA normalized **13.4%**.
- **Vals independent (different harness)**: Terminal-Bench 2.1 Vals lane **52.8%** (vs Alibaba's TB 2.0 70.3% — 17.5-pt harness delta on the same workflow class).
- **SWE-Atlas / Toolathlon / Cybench**: not found for Qwen 3.7 Plus exact ID.

Reasoning / knowledge:

- **GPQA Diamond**: **90.3%** (Alibaba launch) / **90.0%** (AA independent) — within rounding; clears the 90 bar.
- **MMLU-Pro**: **88.5%** (Alibaba); MMLU-Redux **94.5%**; MMMLU **89.0%**.
- **HLE**: **34.7%** (Alibaba) / **35.6%** (AA) / **40.0%** (later launch table with tools enabled) — band consistent; mid-pack tier.
- **HMMT Feb 2026**: **92.9%** (Alibaba) — strong math.
- **IMOAnswerBench**: **86.0%**.
- **Apex**: **22.7%** (low for competition-math).
- **FrontierMath v2 T1-3**: **34.386%** (Epoch AI leaderboard) — much lower than GPT-6 Sol's 89.825%.
- **CritPt**: **9.1%** (low); **SuperGPQA**: **71.4%**.
- **AA Intelligence Index v4.1.1**: **25.2%** ([Artificial Analysis](https://artificialanalysis.ai/models/qwen3-7-plus)) — *notably low* vs full 100.
- **AA-Omniscience Index**: **1.1%** (very low); Accuracy **22.5%**; Hallucination Rate **27.7%**.

Coding:

- **SWE-bench Verified**: **77.7%** (Alibaba launch).
- **SWE-bench Pro**: **57.6%** (Alibaba; below GPT-6 Sol 68.8%, below Muse Spark 1.1 61.5%).
- **SWE Multilingual**: **75.8%**.
- **LiveCodeBench v6**: **89.6%** ([Qwen3.8-27B model card citation](https://huggingface.co/Qwen/Qwen3.8-27B)) — matches the meta.json headline.
- **NL2Repo**: **41.1%** (low for repo synthesis).
- **SciCode**: **51.3%** / AA-SciCode **46.1%** (mid).
- **AA Coding Index**: **55.9%** (independent).

Multimodal / grounded:

- **MMMU-Pro**: **79%** (Alibaba) / AA-MMMU-Pro **80.5%**.
- **CharXiv**: **85.9%**; **MathVision** **90.3%**; **ERQA** **69.8%**; **RealWorldQA** **86.9%**; **OmniDocBench 1.5** **91.4%**; **OCRBench V2** **70.7%**.
- **Video understanding**: Video-MME (with subtitle) **88.0%**; VideoMMMU **85.4%**; MLVU (M-Avg) **87.4%** — strong video input signal.
- **MMSearch-Plus** **41.4%** — capped on agentic multimodal search.
- **ScreenSpot Pro** **79.0%**; **MedXpertQA (MM)** **71.0%**; **SimpleVQA** **81.7%**.
- **AA-MMMU-Pro** **80.5%** (AA independent); Design Arena Website **1271** Elo (OpenRouter).

Long context:

- **MRCRv2**: **91.7%** (Alibaba launch) — top-tier long-context retrieval in the field.
- **AA-LCR**: **73.0%** (AA independent).

Operational:

- **MrCR / RULER GraphWalks at 512K+** for the exact Qwen 3.7 Plus ID: not separately reported in surveyed sources beyond the MRCRv2 91.7% number above.

Pricing compared to peers (current as of 2026-10-16):

- **vs Qwen 3.8 Flash (Flash tier)**: 3.7 Plus is **2.7× input / 3.4× output** more expensive at ≤256K, but **8× / 10.2× more expensive** at the 256K-1M tier (cache economics matter at scale).
- **vs GPT-6 Sol ($2/$10)**: 3.7 Plus ≤256K is **5× cheaper** input, **6.25× cheaper** output; 256K-1M inverts to **0.4× and 0.48×** (more expensive on long context).
- **vs Muse Spark 1.1 ($1.25/$4.25)**: 3.7 Plus ≤256K is **3.1× more** input, **2.7× more** output.
- **vs Claude Opus 4.6 ($15/$75)**: 3.7 Plus ≤256K is **37.5× cheaper** input, **47× cheaper** output.

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 73.2, BFCL v4 72.9, AndroidWorld 81.0, OSWorld-Verified 73.3 on Alibaba's harness; τ²-bench 93% on AA independent; Vals TB2.1 52.8 is mid-frontier under independent harness; OSWorld 2.0 2.8% / GDPval-AA 886 / AA Agentic Index 19.7 all lag.
- **Reasoning: 84/100.** GPQA Diamond 90.3% clears the high bar; MMLU-Pro 88.5%, MMLU-Redux 94.5%, HMMT 92.9% are strong across academic knowledge; HLE 34.7-40.0%, CritPt 9.1%, AA Intelligence Index 25.2, **AA-Omniscience Index 1.1%** are the weaknesses.
- **Context window: 92/100.** 1M verified window plus **MRCRv2 91.7%** at full context is top-of-pack; AA-LCR 73.0% is mid-pack under different methodology; long-context earns the 90+ floor decisively.
- **Multimodal: 88/100.** Full text+image+video pipeline with strong rows (MMMU-Pro 79%, CharXiv 85.9%, RealWorldQA 86.9%, OmniDocBench 91.4%, Video-MME 88.0%, MLVU 87.4%); text-only output caps the half-modality dimension.
- **Coding: 82/100.** LiveCodeBench v6 89.6 (strong), SWE-V 77.7, SWE-Pro 57.6 mid-tier; NL2Repo 41.1, SciCode 51.3, AA-SciCode 46.1, AA Coding Index 55.9 keep coding out of the 90 band.
- **Cost efficiency: 80/100.** $0.40/$1.60 at ≤256K is competitive; **256K-1M tier pricing jumps 3×** ($1.20/$4.80) which is materially worse than peers at long-context operations; OpenRouter at $0.32/$1.28 partially closes the gap; not the cheapest in its class.
- **Overall Score: 85/100** Half-up mean of the five non-cost dims: (78 + 84 + 92 + 88 + 82) / 5 = 84.8 → **85**. Best fit: multimodal long-context agentic work, GUI/web tasks with screen/visual input, where MRCR-v2 91.7% and the CharXiv/OmniDocBench cluster lift the context + multimodal axes, while SWE-V 77.7% and SWE-Pro 57.6% place it *below* the dual-SWE-Pro-leader tier (Muse Spark 1.1 / GPT-5.6 Sol) on coding.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Four-source triangulation (Alibaba Cloud launch, BenchLM 71-row coverage, Artificial Analysis independent suite, OpenRouter benchmarks). Identity resolved: this is the Qwen 3.7 Plus production ID, not 3.8 Max (which sits +5 ranks above this at 90.2 in the queue). Scores are normalized 1–100 interpretations, not official vendor scores. Two `.excluded` twin files exist in this folder (`Gemini_3.1_Flash_Lite.md.excluded`, `Laguna_S_2.1.md.excluded`) — drafted under the zero-influence procedure per `RULES.md` § Twin File; retirement requires explicit user confirmation, surfaced here for the next pass.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

