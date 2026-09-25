# Laguna XS 2.1 — findings by GLM 5.3

- Source: Poolside (`opencode/laguna-xs-2.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's smallest Laguna — a 33B-total / 3B-active open-weights MoE built for agentic coding and local deployment (OpenMDW-1.1 permissive license). Top use case: near-free coding agent on local or cheapest-tier hosted hardware.
- **Provider / access:** open weights `poolside/Laguna-XS-2.1` on Hugging Face (BenchLM model card link); OpenRouter at $0.06/$0.12 per 1M with a free tier (curated pricing note); curated ID references `opencode/laguna-xs-2.1`.
- **Release / knowledge:** 2.1 generation (current as of 2026-09); exact release date not re-verified. Knowledge cutoff not stated publicly.
- **IDs:** `opencode/laguna-xs-2.1` (free tier available per curated note; not on the current Zen endpoint snapshot — verify).
- **Context window:** 262K (Hugging Face; 256K in benchmark runs) — curated metadata; BenchLM lists 262K.
- **Modalities:** text in / text out only; reasoning yes; tool calls yes (TB agent rows); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $0.06 in / $0.12 out per 1M on OpenRouter, free tier available (curated note); open weights = $0 license self-host.
- **Architecture:** open-weights MoE, 33B total / 3B active (curated metadata).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (BenchLM)
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathlon / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: **no verified public score found**

Coding:

- SWE-bench Verified: **70.9%** (BenchLM — remarkable for a 3B-active model)
- SWE Multilingual: **63.1%** (BenchLM)
- SWE-bench Pro: **47.6%** (BenchLM)
- Terminal-Bench 2.0: **37.5%** (BenchLM)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- 262K window verified (HF via curated metadata + BenchLM); no MRCR/RULER value — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 45/100.** TB 2.0 37.5% is weak-mid (below the methodology's mid band on the older suite) and nothing else agentic exists — provisional.
- **Reasoning: 50/100.** Zero direct reasoning rows found (provisional); the 70.9% SWE-bench Verified implies solid code-reasoning for its size, flagged as inferred.
- **Context window: 72/100.** 262K verified sits in the 200K–500K tier; no retrieval-at-length data.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 66/100.** SWE-bench Verified 70.9% is elite for a 33B/3B model, with SWE Multilingual 63.1% solid; SWE Pro 47.6% and TB 2.0 37.5% show the size limit.
- **Cost efficiency: 99/100.** $0.06/$0.12 per 1M with a free tier beats even the $0.10/$0.20 (97–99) anchor; open weights with permissive licensing.
- **Overall Score: 50/100.** Half-up mean of the five quality dims (45+50+72+15+66)/5 = 49.6 → 50 — the cheapest credible coding agent found; agentic breadth and reasoning evidence are the gaps.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, curated platform metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
