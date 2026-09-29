# Muse Spark 1.3 (Contributor Free Tier) — findings by LongCat 2.5 Preview

- Source: Meta/Muse Spark 1.3 Contributor (`muse-spark-1.3-contributor`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (free data-for-access tier)
- **Short description:** Meta's frontier multimodal reasoning model for long-horizon agentic and coding workflows, available in a Contributor tier that trades data usage for heavily discounted pricing.
- **Provider / access:** Meta Model API `muse-spark-1.3-contributor`; Muse Code terminal agent. Chat Completions API.
- **Release / knowledge:** 2026-09-02; knowledge cutoff not publicly specified.
- **IDs:** `meta/muse-spark-1.3-contributor` (Contributor), `meta/muse-spark-1.3` (Standard)
- **Context window:** 1,048,576 tokens (1M); max output 943.7K tokens (verified via Meta Model API docs).
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes (minimal/low/medium/high/xhigh); tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** Contributor: $0.10/$0.20 per 1M in/out (cached $0.002); Standard: $1.25/$4.25 per 1M (cached $0.15). Contributor tier allows Meta to use prompts/completions for training.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (xhigh; Meta/MarkTechPost)
- JobBench: **64.9%** (Meta/MarkTechPost)
- OSWorld 2.0: **66.9%** (Meta/MarkTechPost)
- AutomationBench: **49.4%** (Meta/MarkTechPost)
- Tau3-Bench Banking: **47%** (xhigh), **52%** (max) — #1 among all models (Artificial Analysis)
- GDPval-AA v2: **1754 Elo** (xhigh) (Artificial Analysis)
- DeepSearchQA: **89.4%** (Meta/MarkTechPost)
- Agentic IF Index: **57.8** (Meta/MarkTechPost)

Reasoning / knowledge:

- GPQA Diamond: **94%** (xhigh) (Artificial Analysis)
- HLE: **47%** (xhigh) (Artificial Analysis)
- CritPt: **26%** (xhigh) (Artificial Analysis)
- Artificial Analysis Intelligence Index: **61** (xhigh), **62** (max) — #3 behind Claude Fable 5.1 and Opus 5 (Artificial Analysis)
- MRCR v2 256K-512K: **98.5%** (BenchLM)
- MRCR v2 512K-1M: **98.1%** (BenchLM)

Coding:

- DeepSWE v1.1: **75.4%** (max only; ahead of Opus 5 at 74.0 and GPT-5.6 Sol at 72.7) (Meta/MarkTechPost)
- SWE-Atlas Codebase QnA: **59.4%** (Meta/MarkTechPost)
- Terminal-Bench 2.1: **88.8%** (xhigh) (Meta/MarkTechPost)

Long context:

- MRCR v2 256K-512K: **98.5%**; MRCR v2 512K-1M: **98.1%** — near-perfect retrieval across the full 1M window (BenchLM)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 88.8% and OSWorld 2.0 at 66.9% place it among the strongest agentic models; Tau3-Bench Banking #1 overall. Capped by AutomationBench at 49.4%.
- **Reasoning: 80/100.** GPQA Diamond at 94% is elite; AA Intelligence Index at 61 (xhigh) is frontier-tier. Capped by HLE at 47% and CritPt at 26%.
- **Context window: 96/100.** 1M token window with MRCR v2 at 98.5%/98.1% across 256K-1M ranges — best-in-class long-context retrieval.
- **Multimodal: 86/100.** Accepts text, image, video, audio, and PDF input with text output; strong multimodal reasoning capabilities.
- **Coding: 83/100.** DeepSWE v1.1 at 75.4% beats Opus 5 and GPT-5.6 Sol; SWE-Atlas Codebase QnA at 59.4% leads the frontier. Capped by Terminal-Bench 2.1 at 88.8% being the primary coding signal.
- **Cost efficiency: 94/100.** Contributor tier at $0.10/$0.20 per 1M is 12.5x cheaper than Standard input and among the cheapest frontier models; $0.55 per AA Intelligence Index task.
- **Overall Score: 86/100.** Mean of (86+80+96+86+83)/5 = 86.2 → 86. Best-fit recommendation: top-tier agentic coding model with exceptional long-context retrieval and unbeatable Contributor-tier pricing.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
