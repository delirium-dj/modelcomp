# Mercury 2.5 — findings by Muse Spark 1.3

- Source: Inception Labs/Mercury 2.5 (`mercury-2.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs diffusion LLM (dLLM), largest diffusion LM trained. Top use case is latency-sensitive coding subagents, compaction, and tool routing at 1,100 tok/s.
- **Provider / access:** Inception Labs API (`mercury-2.5`); Krater.ai catalog. Chat Completions API.
- **Release / knowledge:** 2026-09-08 release; knowledge cutoff not publicly disclosed
- **IDs:** `mercury-2.5` (Inception); no Zen Free ID confirmed
- **Context window:** 260K total; 65.5K max output — verified via vendor and catalog listings
- **Modalities:** text in; text out; reasoning yes (tunable); tool calls yes (parallel); JSON mode yes; no image/audio/video input found
- **Pricing (as of 2026-09-29):** $0.20 in / $0.75 out per 1M standard; launch 80% off $0.04 / $0.15 per 1M (BusinessWire, Inception blog). No $0 free tier.
- **Architecture:** diffusion LLM (parallel refine, not autoregressive); proprietary, weights not released; largest dLLM per vendor

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **34.1%** (BenchLM Mercury 2.5 compare pages, Sep 28 2026)
- Tau3-bench results: **96.0%** (BenchLM Mercury 2.5 lane)
- DeepSearchQA: **34.0%** (BenchLM)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA-D: **79.0%** (BenchLM Mercury 2.5 lane)
- HLE: **12%** (themodelbeat.com Grok 4.6 vs Mercury 2.5 comparison)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **34.3 independent public score, 6 benchmarks covered** (BenchLM, Sep 2026)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- IFBench: **77%** (BenchLM); LMSYS Arena Elo **1343** (lmmarketcap.com)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode: **38%** (BenchLM); **39%** (themodelbeat.com — same lane)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks: **no verified public score found**; 260K length verified via listings with no retrieval score reported

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau3-bench 96.0 is elite but TB2.1-Vals 34.1 and DeepSearchQA 34.0 cap it hard; no GDPval/Claw.
- **Reasoning: 68/100.** GPQA-D 79.0 plus IFBench 77 is solid mid with HLE 12; capped well below 90 frontier with no LCR/CritPt.
- **Context window: 73/100.** 260K total fits 200K-500K band above 200K=70; capped with 65K output and no retrieval evidence.
- **Multimodal: 15/100.** Text-only in/out per catalogs; no image/audio/video input found.
- **Coding: 62/100.** SciCode 38-39 alone is mid-low without SWE/LiveCode/Vibe; capped as supporting-subagent grade, not primary coder.
- **Cost efficiency: 95/100.** $0.20/$0.75 standard ($0.04/$0.15 launch) is near-free-tier cheap; capped below $0 100.
- **Overall Score: 57/100.** Mean of five quality dims (68+68+73+15+62)/5=57.2; best-fit for fast cheap subagent/routing work, not frontier reasoning.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
