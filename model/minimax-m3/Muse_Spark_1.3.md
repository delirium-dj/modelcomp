# MiniMax M3 — findings by Muse Spark 1.3 Contributor

- Source: MiniMax/M3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: vendor table added, scores recomputed 83 → 86)
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
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M (curated metadata; no Zen Free ID)
- **Architecture:** open-weights MoE (sparse MSA attention); ~230B/9.8B per Codex KB vs ~428B/23B per InferenceX/HF — vendor-undisclosed exact (amended 2026-09-27).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66%** (curated short); **53.6% Vals lane** (BenchLM mirror — harness differs)
- Terminal-Bench 2.0: **66.0%** (vendor table)
- BrowseComp: **83.5%** (vendor table)
- OSWorld-Verified: **70.1%** (BenchLM); **75.2%** (vendor table — harness differs)
- MCP Atlas: **74.2%** (vendor table)
- Claw-Eval: **74.5%** (BenchLM mirror); **BankerToolBench 76.1%** (BenchLM mirror); **ResearchClawBench 19.8%** (BenchLM mirror — weak tail)
- Apex-Agents: **27.7%** (vendor table — weak tail)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found** (MCP Atlas 74.2% row above)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- MMMU-Pro: **78.1%** (vendor table); **LMArena Elo 1443** (ModelIndex, rank 76)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **59% SWE-Bench Pro** (curated short); **80.5% SWE-bench Verified** (vendor table); **75.0% SWE Vals** (BenchLM mirror)
- LiveCodeBench (Vals): **82.2%** (BenchLM mirror)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **50.1% VIBE V2** (BenchLM mirror)
- DeepSWE / Coding Index / other: **no verified DeepSWE score found**; **42.1% NL2Repo**, **63.7% SVG-Bench** (beats Opus 4.7), **28.8% KernelBench Hard**, **48.4% OpenHarmony Bench**, **37.1 PostTrainBench (#3)** (vendor/BenchLM rows); **29.3% SWE-Lite** (pricepertoken board — weak tail)

Long context:

- **1M window with 512K output verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 66% plus MCP Atlas 74.2%, Claw-Eval 74.5%, BrowseComp 83.5% and BankerToolBench 76.1% show broad orchestration; capped by no Tau/GDPval numbers.
- **Reasoning: 78/100.** MMMU-Pro 78.1% with LMArena 1443 is the lone measured reasoning signal; capped by zero GPQA/HLE/LCR/CritPt/Index numbers.
- **Context window: 100/100.** 1M / 512K out verified; top tier.
- **Multimodal: 75/100.** Text/image/video in, text out; capped below audio/PDF omni models.
- **Coding: 88/100.** SWE-V 80.5% plus SWE-Pro 59%, LiveCode 82.2%, SWE Vals 75.0% and SVG-Bench 63.7% show strong full-spectrum coding; capped by the SWE-Lite 29.3% tail and no DeepSWE/SciCode numbers.
- **Cost efficiency: 85/100.** Paid $0.30/$1.20 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 86/100.** Mean of the five non-cost dims (87+78+100+75+88)/5 = 85.6; best-fit cheap paid flagship open MoE coding pick — vendor table now confirms it.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (curated metadata: 59% SWE-Pro, 66% TB2.1, 230B/9.8B sparse attention); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
