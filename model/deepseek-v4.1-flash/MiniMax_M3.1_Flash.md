# DeepSeek V4.1 Flash — findings by MiniMax M3.1 Flash

- Source: DeepSeek (`deepseek-v4.1-flash` — the 1017 snapshot)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's September-2026 open-weight MoE model — "DeepSeek V4.1 Flash is a sparse mixture-of-experts model from DeepSeek, and the first built on the company's Causal Encoder-Decoder (CED) architecture" — and one of the fastest and cheapest capable models in the dataset (210–232 output t/s at $0.15–$0.30 per 1M input). The API model id is `deepseek-flash`, which the vendor now serves as the **1017** snapshot; the earlier 0910 build remains the undated OpenRouter id.
- **Provider / access:** DeepSeek API `deepseek-flash` (OpenAI-compatible, `https://api.deepseek.com`); **open weights under MIT** at `huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash` and `…-1017` (763B safetensors parameters, 552B backbone, 8B/16B active, KV cache 890 bytes/token) with a technical report; OpenRouter `deepseek/deepseek-v4.1-flash` (undated = 0910) and `deepseek/deepseek-v4.1-flash-1017`; OpenCode Zen `opencode/deepseek-v4.1-flash` (plus a `deepseek-v4.1-flash-free` route).
- **Release / knowledge:** 0910 snapshot **2026-09-10**; **1017 snapshot 2026-10-17** ("DeepSeek V4.1 Flash has been upgraded to DeepSeek-V4.1-Flash-1017. The official web and APP models have also been updated"). Knowledge cutoff: **not published** (OpenRouter `knowledge_cutoff: null`).
- **IDs:** `deepseek-flash` (DeepSeek API, serving 1017), `deepseek/deepseek-v4.1-flash` (OpenRouter, canonical `deepseek-v4.1-flash-20260910`), `deepseek/deepseek-v4.1-flash-1017` (canonical `…-20261017`), `opencode/deepseek-v4.1-flash` (Zen), `deepseek-ai/DeepSeek-V4.1-Flash` (HF weights).
- **Context window:** **1M tokens** ("CONTEXT LENGTH | 1M"); **max output 384K** (1017) — OpenRouter's undated id lists 943,718.
- **Modalities:** text and image in, text out ("Video input not supported"). Reasoning: "Supports both non-thinking and thinking (default) modes", with a "continuously controllable reasoning effort setting (integer 1–100)"; OpenRouter supports efforts max/high/low/none, default high.
- **Pricing (as of 2026-10-19, per 1M tokens):** **off-peak** cache hit $0.003 / cache miss $0.15 / output $0.60; **peak** cache hit $0.006 / cache miss **$0.30** / output **$1.20** — "Off-peak rates are half of the peak rates", with "Peak hours are 01:00 - 04:00 and 06:00 - 10:00 UTC, Monday through Friday". Concurrency limit 2500 (v4-pro is 500). OpenCode Zen lists $0.30 / $1.20 / $0.006 (peak rates).
- **Architecture:** open weights, **MIT licence** — "This repository and the model weights are licensed under the MIT License"; sparse MoE, 763B parameters on a 552B backbone, 8B/16B active per token, Causal Encoder-Decoder (CED) attention, 890 bytes/token KV cache.

### Raw benchmarks found

> DeepSeek's own model cards (0910 and 1017) are marked "vendor"; Artificial Analysis, Vals AI, Collinear's CWE-bench board, OpenHarmony and the BenchLM ledger are independent. The two snapshots are listed separately, because they differ materially.

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (0910 card) / 74.53% (Vals AI, 0910); Terminal-Bench 3.0 **30.0%** (0910)
- Terminal-Bench 4.0: **42.3%** (1017 card, Claude Code harness) / 31.2% (0910 card) / **31.82%** (Vals AI, 1017) / 19.70% (Vals AI, 0910) / 26.77% (AA, undated/0910)
- AutomationBench: **60.5%** (1017 card, v1.0.6) / 54.8% (0910) / 68.89% (AA partial score)
- Agents' Last Exam **35.4%** (via BenchLM) / 31.8% (0910 card); CyberGym **88.1%** (0910); SEC-Bench Pro **62.8%** (0910); ExploitGym **15.3%** (0910); CWE-bench v1 **55.0%** (Collinear: 55% / 74% / 53% / 75%, $0.09); OpenHarmony Bench **60.3%** (58.2–61.4); SkillsBench 69.80% (#1/35, Vals); Vibe Code 87.73% (Vals 1017)
- GDPval-AA 1600 (AA); tau2/tau3 not published; Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **90.9%** (0910 card); HLE **42.6%** (1017) / 44.0% (1017, text-only variant) / 36.8% (0910) / 63.9% with tools (0910); CritPt 14.29% (AA); MLCR-AA 22.78%
- Codeforces rating **3471** (0910 card); MathArena Apex **65.6%** (0910) / Apex Bench v1.1 72.1% (1017); FrontierMath v2 T1–3 **67.368%** / T4 **26.829%** (Epoch, via BenchLM); STEMBench120 2.49
- Artificial Analysis Intelligence Index: **45** for the 1017 build (#2 of 121 open-weight models) / 39 for the 0910 build (#10) — OpenRouter's mirror agrees (39.5 / 24.7)
- Omniscience: index **-5.3**, accuracy **46.4%**, hallucination rate **96.46%** (AA, 0910 build) — the weakest knowledge-reliability profile in this entire dataset

Coding:

- DeepSWE v1.1: **77.0%** (1017 card) / 74.2% (0910) — no independent tracker reproduced it
- Terminal-Bench 2.1 90.6% (0910) / 74.53% (Vals); Terminal-Bench 4.0 42.3% (1017) / 31.82% (Vals 1017); Terminal-Bench-Science 0.1 9.05% (AA)
- NL2Repo: **68.2%** (1017) / 65.4% (0910 changelog) / 64.0% (0910 HF card); ProgramBench **29.1%** (1017) / 20.3% (0910) / 0.50% (Vals 0910); Bug Hunt Bench 39.1 fixes
- FrontierCode 1.1 **44.03%** (AA); SciCode 51.85% (AA); LCB **87.85%** (Vals, "Qwen 3.8 Max" row is a different model — not used); no SWE-bench Verified or LiveCodeBench figure for DeepSeek V4.1 Flash

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement** for either snapshot. 1M context with a 384K max output.
- AA-LCR v1.1 84.0% (short band only)

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). This report scores the **1017** build (the one the API id and the dataset's tracker reference), with the 0910 build's numbers shown alongside. Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 82/100.** Strong agentic and tool profile — Terminal-Bench 2.1 90.6% (vendor, 0910) / 74.53% (Vals), Terminal-Bench 4.0 42.3% (1017 card) / 31.82% (Vals 1017), AutomationBench 60.5% (1017) / 68.89% (AA), CWE-bench v1 55.0% (Collinear, $0.09 per task), OpenHarmony 60.3%, SkillsBench 69.80% (#1/35, Vals), Vibe Code 87.73%, CyberGym 88.1%, SEC-Bench Pro 62.8%, Agents' Last Exam 35.4%, GDPval-AA 1600. Capped below 88 by the rubric's anchors (tau3 ~50%+ → not published; GDPval ~1750+ → 1600), by Terminal-Bench 2.1's own 90.6-vs-74.53 spread, and by the absence of τ-bench, Claw-Eval, Toolathlon and MCP-Atlas rows.
- **Reasoning: 76/100.** Codeforces rating **3471** and MathArena Apex 65.6% / 72.1% are genuinely elite, GPQA 90.9%, FrontierMath v2 67.368% (T1–3) and an AA Intelligence Index of **45 (#2 open-weight)**. Capped by the **Omniscience index of -5.3 with a 96.46% hallucination rate** (the worst knowledge-reliability profile measured in this project — the model is often wrong *and* does not hedge), by HLE 42.6% (1017), CritPt 14.29%, FrontierMath Tier 4 26.829%, STEMBench120 2.49, and the fact that AA measures **no GPQA value** for it.
- **Context window: 95/100.** 1M context with a **384K max output** — the rubric's top tier (≥1M = 95–100), and the largest output cap of any model in this dataset. Not 100: **no long-context retrieval measurement exists** for either snapshot (no MRCR, RULER or GraphWalks), and AA-LCR 84.0% covers the short band only.
- **Multimodal: 85/100.** Text and image in (video explicitly not supported), with strong published vision numbers on the 1017 card — BabyVision **92.5%** (best-verified in the BenchLM catalog), ZeroBench-main **51.0%** (best-verified), Chartography 83.0% — plus MMMU-Pro 76.99% (AA). The rubric's "+image in = 60–70" band is the ceiling; 85 reflects the measured vision strength but stays below the 90–100 band because there is no audio input and no non-text output.
- **Coding: 84/100.** Terminal-Bench 2.1 **90.6%** (vendor) — above the rubric's 85% anchor — DeepSWE **77.0%** (1017) / 74.2% (0910), Terminal-Bench 4.0 42.3% (1017), NL2Repo 68.2%, Codeforces 3471, Vibe Code 87.73%, FrontierCode 44.03%, SciCode 51.85%. Capped by the absence of any SWE-bench Verified or LiveCodeBench figure, by ProgramBench at 29.1% (0.50% on Vals' harness), by Terminal-Bench-Science 9.05%, and by the 90.6-vs-74.53 Terminal-Bench 2.1 spread.
- **Cost efficiency: 95/100.** The evaluated route — OpenCode Zen `opencode/deepseek-v4.1-flash` — is billed at **$0.30 in / $1.20 out** per 1M at peak with a $0.006 cache hit, and DeepSeek's own off-peak rate is **$0.15 / $0.60 with a $0.003 cache hit** — below every rubric anchor above "~$0.60/$2.20 ≈ 92". Artificial Analysis measures **$0.49 per Index task** (0910) / $0.26 (1017) and ranks it #27 of 43 open-weight models for cost. The weights are **MIT-licensed and downloadable**, so self-hosting is a genuine option, and a free route exists on Zen. The only deductions are the peak-hour doubling of the token price and the 2500-concurrency account limit.
- **Overall Score: 84.4/100.** (82 + 76 + 95 + 85 + 84) / 5 = 84.4 — best-fit: the best **price-performance open-weight** model in the dataset (MIT weights, 1M context, 384K output, ~$0.15–$0.30 in / $0.60–$1.20 out, 210–232 t/s) with elite competitive-coding raw scores (Codeforces 3471) and the fastest open-weight AA index (45); the honest caveats are the 96.46% hallucination rate and the near-total absence of published long-context and SWE-bench measurements.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Snapshot identity — the core conflict.** The undated OpenRouter id `deepseek/deepseek-v4.1-flash` is the **0910** build (canonical `…-20260910`), while DeepSeek's API id `deepseek-flash` now serves the **1017** build, and BenchLM's ledger for this folder is an explicit **blend** of 1017-card numbers (Terminal-Bench 4.0 42.3, DeepSWE 77.0, NL2Repo 68.2, BabyVision 92.5) and 0910-card numbers (Terminal-Bench 2.1 90.6, TB 3.0 30, Codeforces 3471, GPQA 90.9, CyberGym 88.1). This report scores the 1017 build and labels every figure by its snapshot.
2. **AA index — 45 (1017) vs 39 (0910) vs OpenRouter's mirror 39.5 / 24.7.** Two different models; BenchLM's "39.5" row cites the *undated* AA URL while the number belongs to 1017 — a mis-attribution, recorded.
3. **Terminal-Bench 4.0 — four values: 42.3% (1017 card, Claude Code) / 31.82% (Vals, 1017) / 31.2% (0910 card) / 19.70% (Vals, 0910) / 26.77% (AA, 0910).** Harness and snapshot both differ; the 1017 card figure is used with the independent Vals reading beside it.
4. **Terminal-Bench 2.1 — 90.6% (vendor) vs 74.53% (Vals, "74.53% across three full trials").** A 16-point gap on the same snapshot; the vendor figure is not treated as the model score.
5. **ProgramBench — 29.1% (1017 card) / 20.3% (0910) vs 0.50% (Vals, 0910).** Same benchmark, three numbers; the vendor figures are used with Vals' outlier recorded.
6. **NL2Repo — 65.4% (0910 changelog) vs 64.0% (0910 HF card table) vs 68.2% (1017).** A transcription conflict inside DeepSeek's own material.
7. **DeepSWE 77.0%** exists only on DeepSeek's 1017 card; no independent tracker reproduced it, and the tbench/AA Terminal-Bench tables are JS-rendered with no per-model value retrievable.
8. **Price anomaly on OpenRouter.** The undated id lists $0.0352/M in and $0.0112/M out — roughly a tenth of DeepSeek's own $0.30/$1.20 peak rate. The vendor rate is used; the aggregator figure is recorded as unverified.
9. **Tool-call repetition (vendor-acknowledged, Sept 2026):** "the model would sometimes issue the same or highly similar tool calls repeatedly, consuming substantial time and context without making meaningful progress" and "the response-level repetition rate exceeded 0.05%" — a real agentic caveat, reflected in the tool-use cap.

### Notes on identity

- `deepseek-v4.1-flash` covers **two snapshots** (0910 and 1017) that differ materially (Terminal-Bench 4.0 31.2% → 42.3%, DeepSWE 74.2% → 77.0%, AutomationBench 54.8% → 60.5%, BabyVision 89.6% → 92.5%). The folder's slug has no date; the API id `deepseek-flash` is the 1017 build, which is what this report scores.
- `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` (the dataset's `deepseek-v4-flash-vision-exp` entry is a different folder) are retired ids that still route to `deepseek-flash` — and there is **no** `deepseek-v4-flash-0420` model on OpenRouter (the id is `deepseek/deepseek-v4-flash` = "V4 Flash 0423").
- MIT-licensed open weights make this the most freely deployable capable model in the dataset, alongside MiMo-V2.6-Pro/Flash and GLM-5.3-Flash.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — DeepSeek's API docs and news/changelog (0910 and 1017 model cards, peak/off-peak pricing, CED architecture), the Hugging Face weight repositories (763B parameters, MIT licence, KV cache), the technical report; independent trackers Artificial Analysis (both snapshots, per-evaluation payload, provider speed spread), Vals AI (both snapshots), Collinear's CWE-bench board, OpenHarmony Bench, the BenchLM evidence ledger, OpenRouter and OpenCode Zen catalogs, plus the vendor's own tool-call-repetition post. Conflicting figures — including the snapshot blend and the Terminal-Bench 2.1 gap — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4.1_Flash.md`, using the same headings.
