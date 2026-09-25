# Laguna S 2.1 — findings by GLM 5.3

- Source: Poolside (`poolside/laguna-s-2.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B-total / 8B-active open-weights MoE for agentic coding and long-horizon work (OpenMDW-1.1 permissive license). Top use case: very cheap agentic coding with a 1M window.
- **Provider / access:** open weights (Hugging Face/Poolside; OpenMDW-1.1); hosted API ~$0.10/$0.20 per 1M (curated pricing note); no OpenCode Zen listing (no Zen Free ID).
- **Release / knowledge:** 2.1 generation (current as of 2026-09); exact release date not re-verified. Knowledge cutoff not stated publicly.
- **IDs:** `poolside/laguna-s-2.1` (no Zen ID).
- **Context window:** 1M via API (Ollama local builds cap at 256K) — curated metadata; BenchLM lists 1M.
- **Modalities:** text in / text out only (per template: text-only); reasoning yes; tool calls yes (Toolathlon/TB rows); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** ~$0.10 in / $0.20 out per 1M hosted API (curated note); open weights = $0 license self-host.
- **Architecture:** open-weights MoE, 118B total / 8B active (curated metadata; BenchLM variant tag "118B-A8B").

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (BenchLM)
- Toolathlon-Verified: **49.7%** (BenchLM)
- Terminal-Bench 4.0 / Tau2 / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: **no verified public score found**

Coding:

- SWE Multilingual: **78.5%** (BenchLM)
- SWE-bench Pro: **59.4%** (BenchLM)
- Terminal-Bench 2.1: **70.2%** (BenchLM)
- DeepSWE: **40.4%** (BenchLM)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- 1M window via API (curated metadata + BenchLM); no MRCR/RULER/GraphWalks value — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 65/100.** TB 2.1 70.2% is a strong mid-tier agentic result and Toolathlon-Verified 49.7% respectable, but no GDPval/Tau/MCP evidence exists — provisional score capped by thin coverage.
- **Reasoning: 55/100.** Zero direct reasoning rows found (provisional); the coding-agent performance implies mid-band reasoning for its size class, flagged as inferred.
- **Context window: 95/100.** 1M via API = ≥1M tier (local Ollama builds cap at 256K); no retrieval-at-length data.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 70/100.** SWE Multilingual 78.5%, TB 2.1 70.2% and SWE Pro 59.4% are excellent for an 8B-active MoE; DeepSWE 40.4% and missing SWE-bench Verified cap it.
- **Cost efficiency: 98/100.** ~$0.10/$0.20 per 1M sits at the methodology's cheapest anchor (97–99), with open weights and permissive OpenMDW-1.1 licensing on top.
- **Overall Score: 60/100.** Half-up mean of the five quality dims (65+55+95+15+70)/5 = 60.0 — an ultra-cheap 1M-context open coding agent; reasoning evidence is the main gap, so treat that dimension as provisional.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, curated platform metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
