# Ember-1 — findings by Claude Opus 4.6

- Source: Fireworks AI (`ember-1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** A reasoning-efficiency-optimized model by Fireworks AI, built on Moonshot AI's Kimi K3 via post-training. Released September 23, 2026, it achieves Kimi K3-level quality with ~40% fewer reasoning tokens.
- **Provider / access:** Fireworks AI serverless API (Research Preview), OpenRouter (`fireworks/ember-1`).
- **Release / knowledge:** 2026-09-23 release (Research Preview); knowledge cutoff not publicly confirmed (inherits from Kimi K3 base).
- **IDs:** `fireworks/ember-1`
- **Context window:** 1,048,576 tokens (~1M); max output not separately confirmed (inherits Kimi K3 specification).
- **Modalities:** Text + image in; text out; extended reasoning; function calling.
- **Pricing (as of 2026-10-03):** $3.00 / $15.00 per 1M tokens (input / output) via Fireworks AI and OpenRouter.
- **Architecture:** Built on Kimi K3 (Moonshot AI) via post-training optimization for reasoning efficiency. Parameter count not disclosed separately.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks AI / zeniteq.com; Kimi K3 max effort: 80.9%).
- SWE-Interact: **20.0%** (Fireworks AI; Kimi K3 max: 21.3%).
- Bedside Bench (Doximity SII): sets new Pareto frontier on cost-per-task (Fireworks AI).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: no verified score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.
- Logic & Probability: matches Kimi K3 accuracy (14/15 vs 15/15 on tested sets) with 23–40% fewer tokens (thenewstack.io).

Coding:

- SWE-bench Verified: **92.2%** (500 samples; Fireworks AI; Kimi K3 max: 93.2%).
- SWE-bench Pro: no separate Pro score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- ~1M-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 82.0% is strong; function calling support confirmed. Efficiency-optimized for agentic token cost reduction. Capped by missing Tau/Claw/Toolathon and being a Research Preview.
- **Reasoning: 85/100.** Matches Kimi K3 reasoning accuracy with 40% fewer tokens; logic/probability near-perfect. Capped by absent GPQA/HLE data and reliance on Fireworks internal benchmarks.
- **Context window: 87/100.** ~1M-token window matches top-tier 2026 models. No published retrieval benchmarks. Capped by unverified long-context performance data.
- **Multimodal: 65/100.** Text + image input only; no audio or video inputs. Text-only output. Capped by limited modality scope compared to omnimodal competitors.
- **Coding: 90/100.** SWE-bench Verified 92.2% is among the highest scores (near Kimi K3 at 93.2%). Terminal-Bench 2.1 at 82.0% is excellent. Capped slightly by missing SWE-bench Pro and LiveCodeBench data.
- **Cost efficiency: 60/100.** $3/$15 per 1M is mid-range; however the 40% token reduction effectively lowers cost-per-task significantly. Best cost-per-quality at Pareto frontier for some workloads. Capped by headline pricing.
- **Overall Score: 83/100.** Mean of (86 + 85 + 87 + 65 + 90) / 5 = 82.6, rounded to 83. Excellent coding efficiency model, constrained by limited multimodal and Research Preview status.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Fireworks AI blog, zeniteq.com, thenewstack.io, OpenRouter, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
