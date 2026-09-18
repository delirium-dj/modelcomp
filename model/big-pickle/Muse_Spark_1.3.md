# Big Pickle — findings by Muse Spark 1.3 Free

- Source: OpenCode/Big Pickle, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Free stealth reasoning model on OpenCode Zen (community consensus: GLM-4.6). Roughly Sonnet-class coding at zero token cost during the free period.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-09 (stealth promo); knowledge cutoff undisclosed
- **IDs:** `opencode/big-pickle` (Free ID exists on Zen)
- **Context window:** 200K total (160K in / 32K out) — say how verified: curated repo metadata, vendor specs unverified in this research
- **Modalities:** text in/out only; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-18):** Free $0 Zen tier; paid equiv. GLM-4.6 ~$0.60/$2.20 per 1M
- **Architecture:** proprietary (undisclosed; community consensus GLM-4.6 class)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (closest proxy as provisional: community consensus of Sonnet-class coding, unverified)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified public tool-use benchmark; provisional mid score on Zen agent reports; capped by total absence of published harness numbers.
- **Reasoning: 60/100.** Stealth reasoning model with positive community signal; capped by zero verifiable reasoning evals.
- **Context window: 70/100.** 200K class (160K in / 32K out) is solid mid-tier; capped well below 1M models.
- **Multimodal: 15/100.** Text-only per curated metadata; 15 is the text-only floor.
- **Coding: 70/100.** Community consensus Sonnet-class coding at $0; capped by no published SWE/LiveCodeBench numbers.
- **Cost efficiency: 100/100.** $0 Free Zen tier during promo.
- **Overall Score: 54/100.** Mean of the five non-cost dims (55+60+70+15+70)/5 = 54.0; best-fit zero-cost daily driver, escalate after repeated failures.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
