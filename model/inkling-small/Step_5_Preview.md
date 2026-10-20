# Inkling-Small — findings by Step 5 Preview

- Source: Thinking Machines Lab (`thinkingmachines/inkling-small`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's second model (released 2026-07-30, two weeks after the 975B flagship Inkling) — a 276B-total/12B-active MoE that lands within one Intelligence-Index point of its 4x-larger sibling while beating it on several coding, reasoning and instruction-following evals. Apache 2.0 open weights; native text, image and audio input. The known trade: much weaker factual recall (SimpleQA 20.6% vs Inkling's 43.9%; AA-Omniscience −9.0).
- **Provider / access:** Open weights on Hugging Face (`thinkingmachines/Inkling-Small`, BF16/MXFP8/NVFP4, Apache 2.0); Thinking Machines Tinker API + Playground; OpenRouter `thinkingmachines/inkling-small` (DeepInfra, Together, BaseTen); Together AI.
- **Release / knowledge:** 2026-07-30. Knowledge cutoff not disclosed.
- **IDs:** `thinkingmachines/inkling-small` (OpenRouter/Tinker), `thinkingmachines/Inkling-Small` (HF weights).
- **Context window:** **Model card: up to 1M tokens; Artificial Analysis lists 256K; all current third-party endpoints cap at 524,288 (262,144 completion)** — the architecture supports more than anyone serves today. Hosted completions: 262,144 max.
- **Modalities:** Text, image (hierarchical patch encoder) and audio (16kHz WAV, discrete token encoding) in → text out; native reasoning with variable thinking effort; function calling (logprobs on one endpoint; no structured-output/response_format on hosted endpoints at launch).
- **Pricing (as of 2026-10-09):** First-party Tinker $0.30 / MTok input, $1.20 output, $0.06 cached (launch promo ~$0.58/$1.44 at 64K context); third-party endpoints $0.45–0.50 / $1.20 with $0.10 cache reads. ~$0.07 per Intelligence-Index task per Artificial Analysis — second-cheapest in its measured cohort.
- **Architecture:** 42-layer decoder-only MoE, 276B total / 12B active (6-of-256 routed experts + 2 shared); alternating local/global attention; trained on NVIDIA GB300 NVL72. BF16 checkpoint needs ≥600GB aggregate VRAM (4x B300 or 8x H200); NVFP4 ≥180GB (1x B300 W4A4 or 2x H200 W4A16).

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **79.6% public / 79.2% all** (model card)
- Terminal-Bench 2.1: **64.7%** (vendor best harness) / **55.1%** (Artificial Analysis) — AA ties it with Inkling at 55%
- BrowseComp: **77.4%** with context management (vendor)
- Toolathlon-Verified: **54.4%** (vendor)
- GDPval-AA v2: **Elo 1269** (vendor) / **31.2%** (AA)
- τ³-Banking: **15.5%** (vendor) / 18.8% (AA)
- Terminal-Bench 4.0: **1.0%** (AA) / **0.0%** (Vals)
- AA-Briefcase: **Elo 917**; Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (vendor and AA agree; Vals 83.6%)
- HLE: **31.6% text-only** (vendor) / **33.3%** (AA); **47.8% with tools**
- AIME 2026: **95.5%**; HMMT Feb 2026: **90.2%**; ARC-AGI-1 84.0%, ARC-AGI-2 40.1%
- CritPt: **8.3%**; SciCode: **48.7%** (vendor) / 49.7% (AA)
- SimpleQA Verified: **20.6%**; AA-Omniscience index **−9.0** (incorrect answers outweigh correct; accuracy 33.2%, non-hallucination 37.0% on AA)
- Artificial Analysis Intelligence Index: **40** on v4.1 (launch) / **25.7** on the current rebased v4.3.2 — 1 point below Inkling (41/—)
- IFBench: **82.2%**; Global-MMLU-Lite 86.7%; MMLU-Pro 85.6% (Vals)

Coding:

- SWE-bench Verified: **80.2%** (vendor, bash-only harness; beats Inkling's 77.6%); Vals SWE-bench: **82.2%**
- SWE-bench Pro (public): **55.9%** (vendor; Inkling 54.3%)
- LiveCodeBench: **85.9%** (Vals)
- Vibe Code Bench v1.1: **19.1%** (Vals); ProgramBench 0.5% (Vals); Code Migration 13.7% (Vals); IOI 9.3% (Vals); ProofBench 6.0% (Vals)

Multimodal:

- MMMU-Pro: **74.0%**; CharXiv RQ: **77.4% / 81.3% with Python**
- Audio: AudioMC 54.9%, MMAU 77.0%, **VoiceBench 90.1%** (all fractionally below Inkling's 91.4%)
- Vals Multimodal Index: **50.1%**

Long context:

- AA-LCR: **75.7%** (AA); no MRCR/RULER published; hosted endpoints currently at 524K despite the 1M card claim
- Third-pass verification (2026-10-19): BenchLM composite **52.72/100** (#89/956, 41/644 benchmarks); Artificial Analysis now lists a **1M** window (partially resolving the card-1M/AA-256K discrepancy in the card's favor — the hosted 524K caps still apply), Index **26** (#30/121 — matches the file's 25.7 rebased read), 189.9 tok/s, TTFT 1.77s, $0.30/$1.20 confirmed (80% cache discount, blended $0.22/M, $0.09/task), 266B/12B, Apache 2.0, 2 providers
- New corroborating rows (2026-10-19): ARC-AGI-1 **84.00%** / ARC-AGI-2 **40.1%** (ARC Prize semi-private — independent confirmation of the file's ARC rows), AA Agentic Index **24.9%** (weak), GDPval-AA Elo **1,191** (AA — updates the vendor 1,269), AA Coding Index **53.0%**, Epoch FrontierMath v2 Tiers 1–3 **46.3%** / Tier 4 **17.1%** (mid-band math)

### Normalized scores (1–100)

- **Tool use: 68/100.** MCP-Atlas 79.6%, BrowseComp 77.4% and Toolathlon 54.4% are genuinely mid-frontier, and it beats Inkling on Toolathlon; capped by Terminal-Bench 2.1 at 55.1% (AA) / 64.7% (vendor harness), GDPval-AA 31.2%, τ³-Banking 15.5–18.8% and Terminal-Bench 4.0 at ~0–1% — the hard new suites are far from solved.
- **Reasoning: 78/100.** GPQA 89.5% (vendor and AA agree), AIME 95.5%, HMMT 90.2% and ARC-AGI-2 40.1% are strong for 12B active parameters, and the AA Index of 40 (v4.1) is 1 point off Inkling; capped by HLE 31.6–33.3%, CritPt 8.3%, SimpleQA 20.6% and the negative AA-Omniscience index (factual recall is the documented weak spot).
- **Context window: 88/100.** The card advertises up to 1M tokens, but AA lists 256K and every hosted endpoint caps at 524,288 (262,144 completion) — scored between the 500K–1M (85–94) and 1M tiers on the discrepancy, with AA-LCR 75.7% and no MRCR data.
- **Multimodal: 88/100.** Text + image + audio in → text out is the top modality band (audio input), anchored by VoiceBench 90.1%, MMAU 77.0%, MMMU-Pro 74.0% and CharXiv 77.4–81.3%; the long-audio regression vs Inkling (2-minute vs 20-minute recommended inputs) and Vals Multimodal Index 50.1% keep it off a higher mark.
- **Coding: 79/100.** SWE-bench Verified 80.2–82.2% (beating Inkling), SWE-bench Pro 55.9% and LiveCodeBench 85.9% are solidly mid-frontier for an open model of this size; capped by Vibe Code Bench 19.1%, ProgramBench 0.5%, Code Migration 13.7% and IOI 9.3% — end-to-end and competitive coding remain weak.
- **Cost efficiency: 94/100.** $0.30/$1.20 per MTok first-party ($0.06 cache reads) sits just above the methodology's ~$0.10/$0.20 = 97–99 tier, with a measured ~$0.07 per Index task — 18x cheaper per task than GPT-5.6 Sol at a comparable (older-scale) index score; hosted endpoints add a 50–67% input premium.
- **Overall Score: 80/100.** Best-fit recommendation: the efficient open-weights pick for coding agents, multimodal experiments and fine-tuning — Inkling-class capability at a third of the per-token compute, provided factual recall and >512K hosted context are not requirements.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (Index 26 #30/121 — unchanged; **AA now lists a 1M window**, partially resolving the documented card-1M/AA-256K discrepancy — the hosted 524K caps still apply; 189.9 tok/s; $0.30/$1.20 confirmed) and BenchLM (composite 52.72/100, #89/956, 41/644 benchmarks): new rows ARC-AGI-1 84.00%/ARC-AGI-2 40.1% (ARC Prize — independent confirmation), AA Agentic Index 24.9%, GDPval-AA Elo 1,191 (updates the vendor 1,269), AA Coding Index 53.0%, Epoch FrontierMath v2 46.3%/17.1% — all consistent with the existing Tool use 68 / Reasoning 78 / Context 88 / Multimodal 88 / Coding 79 / Cost 94 reads, no score change. Second-pass verification (2026-10-10): benchmarklist.com has no standalone Inkling-Small page; the AA article/OpenRouter tables and Vals AI confirmed the same reads. Prior pass (2026-10-09) used Thinking Machines Lab announcement + model card, HuggingFace weights page, Artificial Analysis article/OpenRouter/AA tables, Vals AI, VentureBeat, OrcaRouter, Kingy, Opper.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
