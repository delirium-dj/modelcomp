# Laguna XS 2.1 — findings by GLM 5.3

- Source: Poolside (`opencode/laguna-xs-2.1`)
- Date: 2026-10-16 (UTC) — re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's smallest Laguna — a 33B-total / 3B-active open-weights MoE built for agentic coding and local deployment (OpenMDW-1.1 permissive license). Top use case: near-free coding agent on local or cheapest-tier hosted hardware.
- **Provider / access:** open weights `poolside/Laguna-XS-2.1` on Hugging Face (BenchLM model card link); OpenRouter at $0.06/$0.12 per 1M with a free tier (curated pricing note); curated ID references `opencode/laguna-xs-2.1`.
- **Release / knowledge:** released **2026-07-02** (official Poolside S 2.1 blog timeline, verified this pass — "a new iteration of the XS size to check the improved recipe"); knowledge cutoff not stated publicly (same corpus as Laguna S 2.1, whose cutoff is Nov 2025).
- **IDs:** `opencode/laguna-xs-2.1` (curated; not on the current Zen endpoint snapshot — verify); HF `poolside/Laguna-XS-2.1` (official model card).
- **Context window:** 262K (Hugging Face; 256K in benchmark runs) — curated metadata; BenchLM lists 262K.
- **Modalities:** text in / text out only; reasoning yes; tool calls yes (TB agent rows); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $0.06 in / $0.12 out per 1M on OpenRouter, free tier available (curated note); open weights = $0 license self-host.
- **Architecture:** open-weights MoE, 33B total / 3B active (curated metadata).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (official HF model card via BenchLM)
- Terminal-Bench 2.1: **33.4%** (Poolside S 2.1 blog leaderboard — new row this pass; #21 overall, between Qwen3.6-27B 51.3% and Mistral Small 4 21.4%)
- DeepSWE v1.1: **0.3%** (Poolside S 2.1 blog leaderboard — new row this pass; effectively fails long-horizon SWE at 3B active)
- Terminal-Bench 2.1 (other) / Tau2 / Tau3 / GDPval-AA / Toolathlon / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: **no verified public score found**

Coding:

- SWE-bench Verified: **70.9%** (official HF model card via BenchLM — remarkable for a 3B-active model)
- SWE Multilingual: **63.1%** (official HF model card; the S 2.1 blog notes XS 2.1 matched Laguna M.1 225B-A23B on this benchmark at a seventh of the size)
- SWE-bench Pro: **47.6%** (official HF model card)
- Terminal-Bench 2.0: **37.5%** (official HF model card)
- DeepSWE v1.1: **0.3%** (Poolside S 2.1 blog — new row this pass)
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- 262K window verified (HF via curated metadata + BenchLM); no MRCR/RULER value — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 45/100.** TB 2.0 37.5% and the new TB 2.1 33.4% (vendor board #21) are weak-mid and nothing else agentic exists — provisional, confirmed weak by the new row.
- **Reasoning: 50/100.** Zero direct reasoning rows found (provisional); the 70.9% SWE-bench Verified implies solid code-reasoning for its size, flagged as inferred.
- **Context window: 72/100.** 262K verified sits in the 200K–500K tier; no retrieval-at-length data.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 66/100.** SWE-bench Verified 70.9% is elite for a 33B/3B model, with SWE Multilingual 63.1% solid; SWE Pro 47.6%, TB 37.5% and the new DeepSWE 0.3% show the size limit.
- **Cost efficiency: 99/100.** $0.06/$0.12 per 1M with a free tier beats even the $0.10/$0.20 (97–99) anchor; open weights with permissive licensing.
- **Overall Score: 50/100.** Half-up mean of the five quality dims (45+50+72+15+66)/5 = 49.6 → 50 — the cheapest credible coding agent found; agentic breadth and reasoning evidence are the gaps.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16 (first researched 2026-09-25)
- Method: public internet research (official Poolside HF model card via BenchLM, official Laguna S 2.1 blog with XS 2.1 leaderboard entries, BenchLM). Re-research verified: release 2026-07-02, TB 2.1 33.4%, DeepSWE 0.3% — confirming the weak-agent/strong-SWE profile; no score changes. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
