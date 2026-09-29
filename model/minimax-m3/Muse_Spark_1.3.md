# MiniMax M3 — findings by Muse Spark 1.3 Contributor

- Source: MiniMax/M3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: vendor table added, scores recomputed 83 → 86); re-verified 2026-09-29 (UTC, user-signed-off re-research: vendor-table breadth — SpreadSheet/QnA/efficiency/kernel — + video trio + 229.9B/9.8B + Community License + permanent-discount pricing added, GPQA-rumor explicitly rejected; Reasoning 78 → 79, Context 100 → 98, Multimodal 75 → 78, Coding 88 → 87 — Overall holds 86)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (flagship open-weight MoE)
- **Short description:** MiniMax flagship open-weight MoE (~230B total / 9.8B active) with 1M context and sparse attention; strong SWE-Bench Pro and Terminal-Bench profile.
- **Provider / access:** MiniMax via API + HF weights; no Zen Free ID under minimax-ai/ namespace (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-06-01 release (MiniMax blog); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `minimax-ai/minimax-m3` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) / 512K out — verified via curated repo metadata
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M (permanent 50% off $0.60/$2.40 list; cached $0.06; >512K 2x; Token Plans $20/50/120 — re-verified 2026-09-29; no Zen Free ID)
- **Architecture:** open-weights MoE, 229.9B total / 9.8B active (256 experts; MiniMax Sparse Attention); MiniMax Community License, weights ~10 days post-launch (filed 428B/23B InferenceX outlier retired — re-verified 2026-09-29)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66%** (curated short); **53.6% Vals lane** (BenchLM mirror — harness differs)
- Terminal-Bench 2.0: **66.0%** (vendor table)
- BrowseComp: **83.5%** (vendor table)
- OSWorld-Verified: **70.1%** (BenchLM); **75.2%** (vendor table — harness differs)
- MCP Atlas: **74.2%** (vendor table)
- Claw-Eval: **74.5%** (BenchLM mirror); **BankerToolBench 76.1%** (BenchLM mirror); **ResearchClawBench 19.8%** (BenchLM mirror — weak tail)
- SpreadSheetBench-v1: **89.35%**; SWE Atlas-QnA: **37.9%**; GDPval rubrics: **74.78%** (vendor table — re-verified 2026-09-29)
- Apex-Agents: **27.7%** (vendor table — weak tail)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found** (MCP Atlas 74.2% row above)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (~92.9% aggregator figure explicitly unconfirmed per HokAI — not recorded — re-verified 2026-09-29)
- HLE: **no verified public score found**
- MMMU-Pro: **78.1%** (vendor table); **LMArena Elo 1443** (ModelIndex, rank 76)
- Video-MME: **84.8%**; VideoMMMU: **81.4%**; OmniDocBench: **80.8%** (vendor table — re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **59% SWE-Bench Pro** (curated short); **80.5% SWE-bench Verified** (vendor table); **75.0% SWE Vals** (BenchLM mirror)
- LiveCodeBench (Vals): **82.2%** (BenchLM mirror)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **50.1% VIBE V2** (BenchLM mirror)
- DeepSWE / Coding Index / other: **no verified DeepSWE score found**; **42.1% NL2Repo**, **63.7% SVG-Bench** (beats Opus 4.7), **28.8% KernelBench Hard**, **34.8% SWE-fficiency**, **48.4% OpenHarmony Bench**, **37.1 PostTrainBench (#3)** (vendor/BenchLM rows); **29.3% SWE-Lite** (pricepertoken board — weak tail)

Long context:

- **1M window with 512K output verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 66% plus MCP Atlas 74.2%, Claw-Eval 74.5%, BrowseComp 83.5% and BankerToolBench 76.1% show broad orchestration; capped by no Tau/GDPval numbers.
- **Reasoning: 79/100.** MMMU-Pro 78.1% plus VideoMMMU 81.4% and OmniDocBench 80.8% show solid multimodal reasoning; capped by zero confirmed GPQA/HLE/LCR/CritPt/Index numbers.
- **Context window: 98/100.** 1M / 512K out verified; capped with no retrieval-saturation proof.
- **Multimodal: 78/100.** Text/image/video in with measured video trio (84.8/81.4/80.8); capped below audio omni models.
- **Coding: 87/100.** SWE-V 80.5% plus SWE-Pro 59%, LiveCode 82.2%, SWE Vals 75.0% and SVG-Bench 63.7% (beats Opus 4.7) show strong full-spectrum coding; capped by SWE-fficiency 34.8%, SWE-Lite 29.3% tails and no DeepSWE/SciCode numbers.
- **Cost efficiency: 85/100.** Paid $0.30/$1.20 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 86/100.** Mean of the five non-cost dims (87+79+98+78+87)/5 = 85.8 → 86; best-fit cheap paid flagship open MoE coding pick — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (curated metadata: 59% SWE-Pro, 66% TB2.1, 230B/9.8B sparse attention); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
