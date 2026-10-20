# GPT-5.2 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (Thinking)
- **Short description:** OpenAI's December 2025 flagship (released 2025-12-11; now the "previous flagship" after GPT-5.4/5.5/6) — the first model OpenAI measured at or above human-expert level on GDPval knowledge work (70.9% wins-or-tes across 44 occupations), with then-state-of-the-art SWE-bench Pro (55.6%) and MRCR v2 long-context integration. Shipped as Thinking / Pro / Instant; also spawned GPT-5.2-Codex (2025-12-18).
- **Provider / access:** OpenAI API `gpt-5.2` (Responses + Chat Completions; `gpt-5.2-pro` Responses-only); ChatGPT paid plans. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.2` (Thinking), `gpt-5.2-pro`, `gpt-5.2-chat-latest` (Instant); snapshot `gpt-5.2-2025-12-11`.
- **Context window:** 400,000 tokens; 128,000 max output; `/compact` endpoint extends effective context.
- **Modalities:** Text, image and file in → text out. Reasoning effort none/low/medium/high/xhigh; function calling; tool search.
- **Pricing (as of 2026-10-09):** $1.75 / MTok input, $14.00 output, cached input $0.175 (90% off); GPT-5.2 Pro $21/$168; Azure first-party route observed at $0.88/$7.00.
- **Architecture:** Proprietary.

### Raw benchmarks found

- BenchLM composite (2026-10-19): **59.88/100** overall, #57 of 956 models, 43 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **30** (estimated, #93/217 — matches the prior rebased 30), 80.6 tok/s (#103/186 — slow), TTFT 86.48s, $1.75/$14.00 with 90% cache discount (blended $1.87/M), 400k context, text+image, 2 providers, knowledge cutoff 2025-08-31 — DEPRECATED on AA (suggests GPT-5.4)

Agent / tool use (OpenAI launch table, Thinking at xhigh):

- τ²-Bench: Telecom **98.7%** / Retail **82.0%**
- BrowseComp: **65.8%** (Pro 77.9%); BrowseComp Long Context: **92.0% @128K / 89.8% @256K**
- Scale MCP-Atlas: **60.6%** (GPT-5.1 44.5%); Toolathlon: **46.3%**
- Terminal-Bench 2.0: **64.7%** (Codex CLI harness, per the Claude Opus 4.6 system card); GDPval: **70.9% wins-or-ties / 49.8% clear wins** (Pro 74.1%)
- Investment-banking spreadsheet tasks (internal): 68.4%
- Claw-Eval / ClawProBench / GDPval-AA Elo: **no verified public score found**
- New independent rows (2026-10-19): OSWorld-Verified **47.3%** (GPT-5.4 launch chart — modest computer use), τ²-Bench **84.8%** (AA read, below the launch Telecom 98.7%), Gert Labs **46.54%**, JobBench **34.3%**

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** (Pro 93.2% — the highest in its benchmark cohort at launch)
- HLE: **34.5% no tools / 45.5% with search + Python** (Pro 36.6% / 50.0%)
- MMMLU: **89.6%**; HMMT Feb 2025: **99.4%**; AIME 2025: **100.0%**
- FrontierMath: Tier 1–3 **40.3%** (then-SOTA) / Tier 4 **14.6%** (with Python)
- ARC-AGI-1 (Verified): **86.2%**; ARC-AGI-2 (Verified): **52.9%** (Pro 54.2%)
- Artificial Analysis Intelligence Index: **30** (xhigh, rebased v4.3.2)
- New independent rows (2026-10-19): AA-GPQA Diamond **90.3%**, AA-HLE **37.7%** (both at/above the prior reads), AA AIME 2025 **99.0%**, Epoch FrontierMath v2 Tiers 1–3 **67.400%** / Tier 4 **31.700%** (far above the v1-era 40.3%/14.6%), AA-LCR **82.7%**, CritPt **11.6%**, ARC-AGI-1 **86.17%** (ARC Prize, matches the launch row); AA-Omniscience index **−0.9%** / accuracy **44.3%** / hallucination-rate metric **81.2%** — weak calibration

Coding:

- SWE-bench Pro (public): **55.6%** — state of the art at release; SWE-bench Verified: **80.0%**; SWE-Lancer IC Diamond: 74.6%; SWE-bench Multilingual: 66.7%
- LiveCodeBench Pro: **Elo 2393**; Arena Code Elo 1521
- GPT-5.2-Codex (sibling): Terminal-Bench 66.5%, SciCode 54.6%, GPQA 89.9%

Long context (the release's headline strength):

- OpenAI MRCR v2 8-needle: **98.2% (4–8K), 89.3% (8–16K), 95.3% (16–32K), 92.0% (32–64K), 85.6% (64–128K), 77.0% (128–256K)** — first model near 100% on the 4-needle variant out to 256K
- GraphWalks: BFS **94.0%** / parents **89.0%** (<128K)

Multimodal:

- MMMU-Pro: **79.5% no tools / 80.4% with Python**; Video-MMMU: 85.9%; CharXiv Reasoning: 82.1% / 88.7% with Python; ScreenSpot-Pro (w/ Python): 86.3%
- Independent multimodal corroboration (2026-10-19, via Qwen3.5/3.6 card tables): MMMU **86.7%**, RealWorldQA **83.3%**, OmniDocBench 1.5 **85.7%**, Video-MME **86.0%** w/ and **85.8%** w/o subtitles, MathVision **83.0%**, DynaMath **86.8%**, AI2D **92.2%**, CountBench **91.9%**, MLVU **85.6%**; soft spots SimpleVQA **55.8%**, ERQA **59.8%**, CC-OCR **70.3%**, V* **75.9%**; Design Arena Website **1196** (OpenRouter). Note: the launch table's Video-MMMU/Video-MME rows imply video input capability even though the API modality row lists text+image+file

### Normalized scores (1–100)

- **Tool use: 78/100.** τ² Telecom 98.7% / Retail 82.0%, BrowseComp 65.8% (92.0% long-context) and MCP-Atlas 60.6% are solidly mid-frontier, and it was the first model at expert level on GDPval; capped by Toolathlon 46.3% and no published Terminal-Bench 4.0/AutomationBench numbers.
- **Reasoning: 88/100.** GPQA 92.4%, AIME 100%, HMMT 99.4%, ARC-AGI-2 52.9% and FrontierMath T1–3 40.3% are frontier-band; capped by HLE 34.5% without tools (the December generation's level), FrontierMath T4 14.6% and the rebased AA Index of 30.
- **Context window: 84/100.** 400K-token window with 128K output sits at the top of the 200K–500K band, and it backs it with the best MRCR v2 profile of its generation (98.2% → 77.0% out to 256K) plus GraphWalks 94.0%; the ≥1M tier is reserved for 1M-window models.
- **Multimodal: 70/100.** Text + image + file in → text out is the 60–70 band, at its top on MMMU-Pro 79.5–80.4%, CharXiv 88.7% (with Python) and ScreenSpot-Pro 86.3%; no video/audio input or non-text output.
- **Coding: 82/100.** SWE-bench Pro 55.6% (SOTA at release), SWE-bench Verified 80.0%, SWE-Lancer 74.6% and LCB Pro Elo 2393 are frontier-adjacent; capped by SWE-bench Multilingual 66.7% and the newer generations' 64–81% SWE-Pro range that now leads the field.
- **Cost efficiency: 70/100.** $1.75/$14 per MTok (cached $0.175) sits between the methodology's ~$1.25/$4.25 ≈ 88 and ~$3/$15 ≈ 60 tiers; Azure's observed $0.88/$7.00 route helps, but the December-generation output price is high by current standards and there is no free tier.
- **Overall Score: 80/100.** Best-fit recommendation: a proven previous-generation flagship — expert-level GDPval knowledge work, top-tier MRCR long-context integration and strong SWE-Pro coding; superseded on price-performance by GPT-5.5/5.6/GPT-6 Sol but still one of the best-documented 400K-context models.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (deprecated page, suggests GPT-5.4: Index 30 estimated #93/217, 80.6 tok/s, TTFT 86.48s, pricing unchanged) and BenchLM (composite 59.88/100, #57/956, 43/644 benchmarks): new rows OSWorld-Verified 47.3%, AA τ² 84.8% (vs launch 98.7%), Gert Labs 46.54%, JobBench 34.3%, Vibe Code 53.5%, AA-GPQA 90.3%, AA-HLE 37.7%, Epoch FrontierMath v2 67.4%/31.7% (well above the v1-era rows), AA-LCR 82.7%, ARC-AGI-1 86.17%, AA-Omniscience accuracy 44.3%/hallucination 81.2%, and an independent multimodal corroboration table (MMMU 86.7%, Video-MME 86.0%, AI2D 92.2%, ZeroBench-style soft spots SimpleVQA 55.8%/ERQA 59.8%). All consistent with the existing Tool use 78 / Reasoning 88 / Context 84 / Multimodal 70 / Coding 82 reads — no score change warranted. Second-pass verification (2026-10-10) re-checked the OpenAI launch table, Artificial Analysis (Intelligence Index 30 rebased), evals.report and BenchmarkList GPT-5.2 rows — GPQA 92.4%, HLE 34.5% no-tools, ARC-AGI-2 52.9%, SWE-bench Pro 55.6%, SWE-bench Verified 80.0% and the standout MRCR v2 profile (98.2% → 77.0% out to 256K) all confirmed the same reads; the 400K window (not 1M) keeps Context at 84 and the rebased AA index of 30 keeps Reasoning at 88. Prior pass (2026-10-09) used OpenAI GPT-5.2 launch page + model/pricing docs, GPT-5.2-Codex post, Artificial Analysis, evals.report, The Known Good, DataCamp.
- Future sources: add a new file next to this one, e.g. `GPT_5.2_Codex.md`, using the same headings.
