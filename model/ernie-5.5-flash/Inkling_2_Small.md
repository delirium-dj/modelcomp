# ERNIE 5.5 Flash — findings by Inkling 2 Small

- Source: Baidu (`ernie-5.5-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ERNIE 5.5 Flash Preview (post-trained; `ERNIE 5.5 Flash Base` released 2026-11-05 as open weights)
- **Short description:** Baidu's efficient MoE follow-up to ERNIE 5.0 — 280B total / 14B active parameters, 1M-token context, post-trained from the open ERNIE-5.5-Flash-Base checkpoint. Launch post (2026-11-11) leads with long-horizon agentic work (11-hour Unreal Engine 5.8 game build, ~100 mobile mini-games, 3D modeling in Blender/FreeCAD, 20-page research reports). Preview is explicitly an intermediate post-training checkpoint; Baidu says it is "already competitive with models of its size" but not finished. Not text-only-capable-vision in the usual sense — see Modalities.
- **Provider / access:** Baidu Qianfan platform API (billing started 2026-11-10); third-party resellers may follow. Weights for the Preview are promised "soon" under Apache 2.0 — not yet released as of 2026-11-11 (Base weights ARE on Hugging Face: FP8 and BF16 under the ERNIE 5.5 Flash Base Model License v1.0).
- **Release / knowledge:** Base released 2026-11-05; Preview (post-trained) launched 2026-11-11 (live on Qianfan since 2026-11-10 per endpoint reports). Knowledge cutoff not published.
- **IDs:** `ernie-5.5-flash-preview` (Qianfan, billed); HF `baidu/ERNIE-5.5-Flash-Base` and `…-BF16` (open weights, custom license). No generally available GA ID yet.
- **Context window:** 1,024,000 tokens (1M) per Qianfan spec (output ceiling ~921,600 tokens, per endpoint listings); launch post states 1M as well. Base trained at up to 128K pre-train context with 1M context support for fine-tuning/inference. Everyone agrees on ~1M.
- **Modalities:** text in → text out (native). No native image understanding: Baidu's own benchmark footnote states that at least some vision-dependent rows were "provided through a tool powered by Claude Opus 5.5". Reasoning mandatory at a single high effort level (cannot be disabled, per endpoint specs); tool calling effectively required for vision/3D tasks; JSON via Qianfan tooling.
- **Pricing (as of 2026-11-11):** ~$0.28 / 1M input, ~$1.13 / 1M output, cached input reads ~$0.028 / 1M (per Qianfan endpoint listing; Baidu publishes no independent rate card in the launch post). No free tier announced. Base weights: free to download under the ERNIE 5.5 Flash Base Model License Agreement v1.0 — **restricted community license**: excludes the European Union, United Kingdom, and South Korea; free commercial use capped by related annual revenue; "Powered by ERNIE" attribution required. Preview weights promised under Apache 2.0 (date unspecified).
- **Architecture:** sparse MoE, 280B total / 14B active (43 layers, hidden 4096, 64 heads; 512 routed experts top-10 + 1 shared; 33.5T pre-train tokens; Muon optimizer FP8; hybrid MLA + HCA sparse attention with mHC residuals; ECHO speculative-decoding-friendly output head; ~200K BPE tokenizer). Open-weights Base, proprietary Preview. License: Preview = TBD (Apache 2.0 promised); Base = ERNIE 5.5 Flash Base Model License v1.0.

### Raw benchmarks found

All Preview rows are **vendor-reported (Baidu), produced on Baidu's own harnesses with Baidu-selected judges**, and none has been reproduced outside the company. No Artificial Analysis / LMArena / LiveCodeBench third-party row exists for this ID as of 2026-11-11. Base rows are likewise vendor-reported but measured against named peer base checkpoints on the same harness.

Agent / tool use (Baidu-reported, Preview):

- Terminal-Bench 4.0: **46.5%**
- Terminal-Bench-Science 0.1: **21.0%**
- DeepSWE v1.1: **71.2%**
- ProgramBench (Almost Solved): **29.5%**
- NL2Repo-Bench: **64.8%**
- CookieBench: **88.2%**
- AutomationBench: **61.9%**
- APEX-Agents 1.1: **64.2%**
- DRACO: **84.9%**
- SpreadsheetBench V2: **36.4%**
- Agents' Last Exam (CLI): **29.0%**
- SkillsBench 1.1 (text-only): **73.5%**
- Toolathlon-Verified: **75.0%** (BenchLM reading; OrcaRouter read 79.0 off the same image table — figures may vary; single image-sourced table)
- MCP-Atlas: **84.6%**
- BrowseComp: **87.4%**
- BlenderWorld (text-only): **79.0%**

Reasoning / knowledge (Baidu-reported, Preview unless noted):

- HLE (without tools): **46.4%** (vendor-reported; AA-instrumented but Baidu's own run — not an Artificial Analysis leaderboard row)
- AA-Omniscience-Public: **25.2%** (vendor-reported run of an AA benchmark)
- AA-LCR v1.1: **79.0%** (vendor-reported run of an AA benchmark)
- GPQA (Base, 5-shot, EM): **60.2%** (vs DeepSeek-V4-Flash-Base 55.9, Hy3-preview-Base 50.2, MiMo-V2.5-Base 51.4)
- BBH (Base): **77.1%** direct / **89.2%** CoT
- MMLU (Base, 5-shot, EM): **93.3%**; MMLU-Redux **94.1%**; MMLU-Pro **78.4%**; CMMLU **90.0%**
- MGSM (Base, 8-shot CoT): **87.0%**; MathBench-CN **80.8%**; BBH/WinoGrande/PIQA **87.8 / 96.0**

Coding (Baidu-reported):

- DeepSWE v1.1: **71.2%**; Terminal-Bench 4.0 **46.5%**; NL2Repo **64.8%**; ProgramBench **29.5%** (Preview)
- HumanEval+ (Base, 1-shot Pass@1): **82.3%**; MBPP+ **81.5%**; LiveCodeBench (Base, 1-shot Pass@1): **40.1%**; FullStackBench **54.6%**; RepoBench **50.3%**

Long context (Baidu-reported, Base):

- HELMET-RAG (2-shot SubEM): **71.5%**; HELMET-Rerank (NDCG@10): **56.2%**; HELMET-ICL (many-shot EM): **85.9%**
- RepoQA (0-shot Pass@1): **91.7%**; LongBench-v2 (0-shot EM): **48.7%**; InfiniteBench (Avg): **46.5%**
- No independently reported long-context score for the Preview

Multimodal:

- no verified public multimodal score found (Preview is natively text-only; Baidu's own footnote routes image understanding through a Claude Opus 5.5-powered tool)

### Normalized scores (1–100)

Scores normalized from the vendor-reported table above; nothing has been third-party reproduced, so everything is capped conservatively. Cost efficiency scored separately (never counts toward Overall).

- **Tool use: 78/100.** Strong vendor-reported agentic suite (MCP-Atlas 84.6, BrowseComp 87.4, DRACO 84.9, CookieBench 88.2, Toolathlon-Verified ~75–79, DeepSWE 71.2), marred by SpreadsheetBench 2 (36.4), Agents' Last Exam CLI (29.0) and Terminal-Bench-Science (21.0), and by the fact that every number is Baidu's own harness/judge with no external reproduction — caps the score below independently verified frontier raters.
- **Reasoning: 58/100.** HLE w/o tools 46.4 is respectable but only vendor-measured; AA-Omniscience-Public 25.2 is weak; the Base checkpoint's GPQA 60.2 is mid-pack vs frontier; no third-party confirmation of anything.
- **Context window: 75/100.** Real 1M window with vendor long-context rows leaning strong (HELMET-ICL 85.9, RepoQA 91.7, LongBench-v2 48.7) — but Preview-specific context claims are unmeasured, and all figures are vendor-reported.
- **Multimodal: 15/100.** Text-only design — image understanding is delegated to a competitor's model (Claude Opus 5.5) via a tool per Baidu's own footnote; no native multimodal capability, so the 15 text-only floor applies.
- **Coding: 62/100.** DeepSWE v1.1 71.2 (vendor) and Base HumanEval+ 82.3 / MBPP+ 81.5 are good, but Terminal-Bench 4.0 46.5, ProgramBench 29.5 and Base LiveCodeBench 40.1 are ordinary next to frontier coding models; none of it reproduced.
- **Cost efficiency: 80/100.** ~$0.28 in / ~$1.13 out per 1M with $0.028 cached reads is far cheaper than Western frontier raters; Base weights already open (license-restricted) and Preview promised Apache 2.0 — strong cost case if open weights land.
- **Overall Score: 58/100.** Mean of (78+58+75+15+62)/5 = 288/5 = 57.6 → half-up 58. Best fit: a cheap, tool-use-strong long-horizon agentic route for Chinese-market or open-weights-curious builds — treat every score as vendor-claimed until Artificial Analysis or another independent harness publishes a row; re-evaluate on GA.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-11 UTC
- Method: public internet research (official Baidu ERNIE launch posts for Base (2026-11-05) and Preview (2026-11-11) with full benchmark tables and appendix footnotes, BenchLM tracked rows, OrcaRouter launch analysis, endpoint listings on Qianfan). All benchmark numbers are Baidu-reported and unreproduced; flagged as such throughout.
- Reference URLs:
  - [Introducing ERNIE 5.5 Flash Preview · ERNIE](https://ernie.baidu.com/release/ernie-5-5-flash-preview/)
  - [ERNIE 5.5 Flash Base · ERNIE](https://ernie.baidu.com/release/ernie-5-5-flash-base/)
  - [ERNIE 5.5 Flash Preview — BenchLM (17 rows, no public overall score)](https://benchlm.ai/models/ernie-5-5-flash-preview)
  - [ERNIE 5.5 Flash Preview: launch post and twenty benchmarks — OrcaRouter](https://www.orcarouter.ai/blog/ernie-5-5-flash-preview-launch-post-benchmarks)
  - [baidu/ERNIE-5.5-Flash-Base — Hugging Face](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
