# ByteDance Seed 2.0 Pro — findings by Muse Spark 1.3

- Source: ByteDance/Seed 2.0 Pro (`deepinfra/ByteDance/Seed-2.0-pro`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance Seed's Feb 2026 flagship: a long-chain-reasoning multimodal model with frontier math (AIME 2025 98.3) and strong coding (SWE-bench Verified 76.5), ranked 6th text / 3rd vision on LMSYS Arena at launch. Top use case: math-heavy reasoning and visual-reasoning agents at mid-tier pricing.
- **Provider / access:** ByteDance Seed (Doubao App, TRAE, BytePlus/DeepInfra routes); OpenCode Zen-adjacent ID `deepinfra/ByteDance/Seed-2.0-pro`.
- **Release / knowledge:** 2026-02-14 official launch (ByteDance Seed blog); AnotherWrapper lists knowledge cutoff 2024-01-01 (unverified — treat as provisional).
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (no Zen Free ID — paid only).
- **Context window:** 256K total / 65K max output (folder meta.json, consistent with llm-stats 256K in / 65,536 out; Opper lists 262K with 131K max output on some routes — route-dependent, noted not scored).
- **Modalities:** Text, image, video in; text out; reasoning yes (adjustable thinking modes); function calling + structured outputs yes (Opper model record).
- **Pricing (as of 2026-09):** $0.50 input / $3.00 output per 1M (Opper via BytePlus/DeepInfra routes; AnotherWrapper; llm-stats). Paid only.
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- BrowseComp (agentic search): **77.3%** (AnotherWrapper Seed 2.0 Pro benchmark table)
- Terminal-Bench 2.1: **no verified public score found** (DigitalApplied notes "Terminal Bench for autonomous search and coding" claimed at launch without a published number)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA: **88.9%** (AnotherWrapper benchmark table)
- AIME 2025: **98.3%** (Opper model record; DigitalApplied launch summary)
- AIME 2026: **94.2%** (AnotherWrapper benchmark table)
- HMMT: **97.3** (Opper model record)
- FrontierSci-olympiad: **74.0** (Opper model record)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- LMSYS Arena (human preference, launch): **6th text / 3rd vision** (ByteDance Seed launch blog, Feb 2026)

Coding:

- SWE-bench Verified: **76.5%** (Opper model record; AnotherWrapper table; DigitalApplied launch summary)
- LiveCodeBench v6: **87.8%** (AnotherWrapper benchmark table)
- SWE-bench Pro: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (no public MRCR/RULER/GraphWalks number; 256K window verified via meta.json/llm-stats)

### Normalized scores (1–100)

- **Tool use: 76/100.** BrowseComp 77.3% plus verified function-calling support evidences capable search/tool agents; capped by zero public TB/Tau/GDPval/Claw numbers.
- **Reasoning: 89/100.** AIME 2025 98.3 / AIME 2026 94.2 / HMMT 97.3 is frontier math, GPQA 88.9 and FrontierSci-olympiad 74.0 back broad STEM; just under the GPQA-90 frontier line with no HLE, so 89.
- **Context window: 74/100.** Verified 256K total / 65K out sits just above the 200K (= 70) anchor in the 200K–500K tier (65–84); no retrieval evidence to push higher.
- **Multimodal: 85/100.** Text/image/video in with 3rd-place LMSYS Vision Arena at launch lands mid-band of the 75–90 video-in tier; text-only out caps it below 90.
- **Coding: 85/100.** SWE-bench Verified 76.5% plus LiveCodeBench v6 87.8% is a strong verified pair; capped by missing SWE-bench Pro, SciCode, and DeepSWE numbers.
- **Cost efficiency: 90/100.** $0.50/$3.00 paid pricing undercuts the $0.60/$2.20 (≈92) input reference with a pricier output leg — 90 on balance.
- **Overall Score: 82/100.** Mean of the five non-cost dims (76 + 89 + 74 + 85 + 85) / 5 = 81.8 → 82; best fit as a math-strong multimodal Pro for reasoning agents that fit in 256K.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (ByteDance Seed launch blog, Opper model record, AnotherWrapper benchmark table, llm-stats compare pages, DigitalApplied launch summary, pricepertoken pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
