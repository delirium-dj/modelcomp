# Muse Spark 1.3 — findings by Muse Glimmer 30B

- Source: Meta / muse-spark-1.3
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs proprietary multimodal reasoning model for long-running agentic, multi-agent and coding workflows. Released Sep 2 2026, successor to Muse Spark 1.2 with emphasis on sustained long-horizon work, clarification questions and multitasking.
- **Provider / access:** Meta Model API `meta/muse-spark-1.3` / Muse Code. Chat Completions API.
- **Release / knowledge:** 2026-09-02; knowledge cutoff not publicly disclosed.
- **IDs:** `meta/muse-spark-1.3`
- **Context window:** 1.0M tokens total, ~944K output. Verified by Meta dev docs and LLM Stats.
- **Modalities:** Input text, image, video; Output text. Reasoning yes, tool calls yes, JSON mode supported.
- **Pricing (as of 2026-10-25):** $1.25 / 1M input, $0.150 / 1M cached input, $4.25 / 1M output via Meta Model API. Contributor tier $0.10/$0.002/$0.20.
- **Architecture:** proprietary, parameters undisclosed. Multimodal reasoning stack.

### Raw benchmarks found

> Sources: Meta research blog introducing Muse Spark 1.3 2026-09-02, LLM Stats model page, Artificial Analysis article 2026-09-02 and model page for Muse Spark 1.3 xhigh.

Agent / tool use:

- Terminal-Bench 2.1: **85%** (xhigh) / 86% (max) — Artificial Analysis
- Tau3-Bench Banking / Tau2-Bench: **47%** xhigh, **52%** max — Artificial Analysis; #1 for max variant
- GDPval-AA v2: **1,709 Elo** xhigh, **1,754 Elo** max — Artificial Analysis
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94%** — Artificial Analysis, +4 vs 1.2
- HLE: **47%** xhigh — Artificial Analysis, +2-3 vs 1.2
- LCR / MLCR: **79%** AA-LCR v1.1 — Artificial Analysis, -4 vs 1.2
- CritPt: **26%** xhigh — Artificial Analysis, +8 vs 1.2
- Artificial Analysis Intelligence Index / BenchLM overall: **61** xhigh, **62** max — Artificial Analysis article; model page shows Intelligence Index 45 on v4.3.2
- Omniscience Accuracy / Hallucination Rate: **42%** accuracy xhigh, hallucination rate reduced vs 1.2 — Artificial Analysis

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **59%** — Artificial Analysis
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- AA-LCR v1.1 79% at 1M window; long-context retrieval reported via Terminal-Bench and agentic evaluations.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong Terminal-Bench 85% xhigh /86% max and Tau3-Bench Banking 47-52%; gains from agentic training. Capped by lack of independent Claw/Toolathon scores.
- **Reasoning: 88/100.** GPQA Diamond 94%, CritPt 26% (+8), HLE 47%, GDPval-AA 1,709 Elo. High agentic reasoning, minor LCR regression caps score.
- **Context window: 95/100.** 1.0M tokens verified, competitive multimodal long context. No RULER/GraphWalks public score.
- **Multimodal: 75/100.** Text, image, video in; text out. Proprietary multimodal reasoning, limited public multimodal benchmark numbers.
- **Coding: 80/100.** SciCode 59% and strong Terminal-Bench agentic coding signals; no public SWE-bench/LiveCodeBench numbers.
- **Cost efficiency: 78/100.** $1.25/$4.25 pricing, $0.55 per Intelligence Index task per Artificial Analysis, most cost-efficient at 61+ index. Cached pricing improves efficiency.
- **Overall Score: 84.8/100.** Mean of five quality dims (86+88+95+75+80)/5 = 84.8 → 85 rounded. Best-fit: strong agentic/coding reasoning model with large context and competitive cost.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
