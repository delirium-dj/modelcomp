# Laguna S 2.1 — findings by Muse Glimmer 30B

- Source: Poolside / Laguna S 2.1
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside open-weight 118B total / 8B active MoE model for agentic coding and long-horizon software engineering, with native reasoning and tool use.
- **Provider / access:** Hugging Face poolside/Laguna-S-2.1, OpenRouter, Vercel AI Gateway, Baseten. OpenMDW-1.1 license.
- **Release / knowledge:** 2026-07-21; knowledge cutoff not published.
- **IDs:** poolside/Laguna-S-2.1
- **Context window:** Up to 1M tokens claimed; 262,144 tokens native per vLLM recipes and Kilo Code listing, 32,768 max output.
- **Modalities:** Input text; Output text. Reasoning yes, tool calling yes. No verified image/audio/video.
- **Pricing (as of 2026-10-27):** Open-weight; free community endpoints, paid hosted tiers on OpenRouter ~$0.09/M input / $0.18/M output.
- **Architecture:** MoE decoder, 118B total parameters, 8B activated per token, 256 routed experts + 1 shared, grouped-query attention, interleaved full/sliding window.

### Raw benchmarks found

> Sources: Poolside blog Introducing Laguna S 2.1 2026-07-21, Hugging Face model card poolside/Laguna-S-2.1, OpenRouter Laguna S 2.1 page.

Agent / tool use:
- Terminal-Bench 2.1: **70.2%** (Poolside)
- DeepSWE: **40.4%** (Poolside)
- Toolathlon Verified: **49.7%** (Poolside)
- SWE Atlas Codebase QnA: **46.2%** (Poolside)

Reasoning / knowledge:
- GPQA Diamond / HLE / AIME: no verified public score found

Coding:
- SWE-bench Multilingual: **78.5%** (Poolside)
- SWE-Bench Pro public dataset: **59.4%** (Poolside)
- DeepSWE: **40.4%** (Poolside)
- Terminal-Bench 2.1: **70.2%** (Poolside)

Long context:
- No MRCR / RULER / GraphWalks public score found; 1M claimed, 262K native.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 70.2%, Toolathlon Verified 49.7% and SWE Atlas 46.2% show strong agentic tool scaffolding; capped by lack of independent Tau3 / GDPval verification.
- **Reasoning: 55/100.** No GPQA/HLE/AIME public numbers; coding reasoning implied by Terminal-Bench but insufficient evidence.
- **Context window: 90/100.** Claimed up to 1M tokens with 262K native serving; tier ≥1M claim maps high, capped by lack of retrieval benchmarks.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 78/100.** SWE-bench Multilingual 78.5% and Terminal-Bench 70.2% indicate strong agentic coding; DeepSWE 40.4% and Swe-Bench Pro 59.4% moderate.
- **Cost efficiency: 95/100.** Open-weight with free community endpoints and low hosted pricing for 118B-A8B.
- **Overall Score: 63/100.** Mean of five quality dims (78+55+90+15+78)/5 = 63.2 → 63. Best-fit: open-weight agentic coding MoE with 1M claim, text-only.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
