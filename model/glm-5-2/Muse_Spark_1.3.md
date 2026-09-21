# GLM 5.2 — findings by Muse Spark 1.3

- Source: Z.AI/GLM-5.2 (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 (Z.AI open-weights flagship, June 2026)
- **Short description:** Z.AI's 744B-class open-weights MoE flagship for long-horizon agentic engineering with 1M context, IndexShare sparse attention, and MIT-licensed self-hostable weights.
- **Provider / access:** Z.AI via API + Hugging Face open weights; OpenCode Zen `opencode/glm-5.2` (Chat Completions, tool calling, structured output, context caching).
- **Release / knowledge:** 2026-06-13 Coding Plan early access; 2026-06-16 public weights + technical blog; knowledge cutoff undisclosed
- **IDs:** `opencode/glm-5.2` (Free Zen tier exists)
- **Context window:** 1,000,000 total / 131K max out — verified via provider directory (1M, 131K out) and Opper gateway card (1M context)
- **Modalities:** text in/out; reasoning yes (High/Max thinking effort); tool calls yes; structured output yes; PDF input on some routes
- **Pricing (as of 2026-09-21):** Free Zen tier available; API reference $1.40 in / $4.40 out per 1M ($0.26 cached) via CloudPrice panel
- **Architecture:** open-weights MoE, ~744–753B total / ~40B active, Dense-Sparse-Alternating attention with IndexShare (2.9x less compute at 1M), native MTP reasoning traces; MIT license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Vendor numbers below are Z.AI's official full benchmark table (Hugging Face blog, Jun 2026) unless noted.

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Z.AI official table; Apidog confirms 81.0 vs GLM-5.1 62.0–63.5, within points of Opus 4.8 85.0)
- MCP-Atlas: **76.8–77.0%** (Z.AI table 76.8; Apidog 77.0 vs Opus 4.8 77.8)
- Tool-Decathlon: **48.2** (Brocker/NVIDIA NGC summary, vs GLM-5.1 40.7)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.AI official table, vs GLM-5.1 86.2)
- HLE: **40.5% HLE / 54.7% HLE with tools** (Z.AI official table, vs GLM-5.1 31.0/52.3)
- AIME 2026: **99.2%** (Z.AI official table)
- CritPt: **16.7** (Z.AI official table, vs GLM-5.1 4.6)
- LCR / MLCR: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **62.1% SWE-bench Pro** (Z.AI official table, ahead of GPT-5.5 58.6 and GLM-5.1 58.4, trailing Opus 4.8 69.2)
- NL2Repo: **48.9** (Z.AI official table, vs GLM-5.1 42.7)
- FrontierSWE: **highest open-source rank, within 1% of Opus 4.8** (Hugging Face blog; no absolute percentage published)
- SWE-Marathon: **13.0%** (Qubrid deep dive, vs Opus 4.8 26.0%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public DeepSWE absolute found**

Long context:

- **1M context with IndexShare long-range recall (less compute than GLM-5.1 at 128K training)** (Hugging Face blog); no verified MRCR v2 / RULER / GraphWalks percentage found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 87/100.** TB2.1 81.0% (first open model past 80) with MCP-Atlas 76.8% shows frontier open tool use; capped by missing Tau3/GDPval/Claw harnesses.
- **Reasoning: 88/100.** GPQA 91.2%, HLE 40.5/54.7-tools and AIME 99.2 show strong open reasoning; capped by the weak CritPt 16.7 and missing LCR confirmation.
- **Context window: 97/100.** Verified 1M/131K with IndexShare recall maps to the top tier; capped below 100 without published retrieval-saturation proof.
- **Multimodal: 15/100.** Text-only per spec panels; 15 is the text-only floor.
- **Coding: 85/100.** SWE-Pro 62.1% beating GPT-5.5 with FrontierSWE open lead and NL2Repo 48.9 show strong open engineering; capped by SWE-Marathon 13.0% trailing Opus badly.
- **Cost efficiency: 100/100.** Free Zen tier available during promo.
- **Overall Score: 74/100.** Mean of the five non-cost dims (87+88+97+15+85)/5 = 74.4; best-fit free open long-horizon engineering flagship for self-hosted agentic coding.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: deeper public internet research superseding the 2026-09-18 excluded attempt (Z.AI Hugging Face blog table, developer docs, Apidog/Qubrid/Brocker summaries, CloudPrice and provider-directory spec panels); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
