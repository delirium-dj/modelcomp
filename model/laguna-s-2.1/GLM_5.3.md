# Laguna S 2.1 — findings by GLM 5.3

- Source: Poolside (`poolside/laguna-s-2.1`)
- Date: 2026-10-16 (UTC) — re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B-total / 8B-active open-weights MoE for agentic coding and long-horizon work (OpenMDW-1.1 permissive license). Top use case: very cheap agentic coding with a 1M window.
- **Provider / access:** open weights (Hugging Face/Poolside; OpenMDW-1.1); hosted API ~$0.10/$0.20 per 1M (curated pricing note); no OpenCode Zen listing (no Zen Free ID).
- **Release / knowledge:** released **2026-07-21** (official Poolside blog, verified this pass; pre-training began 2026-05-22, <9 weeks to launch). Knowledge cutoff **November 2025** (stated in the blog's Erdős case study).
- **IDs:** `poolside/laguna-s-2.1` (no Zen ID); HF `poolside/laguna-s-2.1` (BF16, FP8, INT4, NVFP4, GGUF, MLX, DFlash draft models; OpenMDW-1.1).
- **Context window:** 1M in thinking and no-thinking modes (official blog) — OpenRouter free endpoint caps at 256K; the dedicated 1M endpoint is paid. Runs on a single NVIDIA DGX Spark.
- **Modalities:** text in / text out only (per template: text-only); reasoning yes; tool calls yes (Toolathlon/TB rows); JSON mode not separately verified.
- **Pricing (as of 2026-10-16):** verified officially: **$0.10 in / $0.20 out / $0.01 cache-read per 1M** on the dedicated OpenRouter 1M endpoint (was a curated note); free OpenRouter endpoint at 256K; open weights = $0 license self-host; also on Baseten, Vercel AI Gateway, vLLM/SGLang/Ollama.
- **Architecture:** open-weights MoE, 118B total / 8B active (curated metadata; BenchLM variant tag "118B-A8B").

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (official blog, thinking; 60.4% no-thinking — max thinking adds +9.8)
- Toolathlon-Verified: **49.7%** (official blog, 3-run average)
- Terminal-Bench 4.0 / Tau2 / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: **no verified public score found**

Coding:

- SWE Multilingual: **78.5%** (official blog, thinking; 71% no-thinking) — outperforming Tencent Hy3 295B (75.8%) and Nemotron 3 Ultra (67.7%) at a fraction of the size
- SWE-bench Pro: **59.4%** (official blog, thinking; 53% no-thinking)
- Terminal-Bench 2.1: **70.2%** (official blog, thinking; 60.4% no-thinking) — **#11 on the vendor's TB 2.1 leaderboard**, above Nemotron 3 Ultra 56.4% and close to Hy3 71.7%
- SWE Atlas (Codebase QnA): **46.2%** (official blog — new row this pass; judged by Opus 4.5)
- DeepSWE v1.1: **40.4%** (official blog, pool harness, thinking; 16.5% no-thinking) — #13 on the vendor's DeepSWE board, just below GLM 5.2 (44.0)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**
- Long-horizon case studies (official blog, qualitative): built a working HTML/CSS browser engine in a 50-min/181-step session; improved Poolside's own harness by 5.2% wall-clock and −71% allocations; independently re-derived a proof of Erdős problem #397 (a rediscovery distinct from the Jan-2026 GPT-5.2 Pro construction).

Long context:

- 1M window verified officially (thinking and no-thinking modes); OpenRouter free endpoint caps at 256K; no MRCR/RULER/GraphWalks value — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 65/100.** TB 2.1 70.2% (official, #11 on the vendor board, top sub-150B disclosed model) and Toolathlon-Verified 49.7% are strong; still no GDPval/Tau/MCP evidence — provisional score capped by thin coverage.
- **Reasoning: 55/100.** Zero direct reasoning rows found (provisional); coding-agent performance and the Erdős #397 re-derivation (qualitative, official case study) imply mid-band reasoning for its size class, flagged as inferred.
- **Context window: 95/100.** 1M verified officially (thinking + no-thinking); free endpoint caps at 256K; no retrieval-at-length data.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 72/100.** SWE Multilingual 78.5%, TB 2.1 70.2%, SWE Pro 59.4% and the new SWE Atlas 46.2% are excellent for an 8B-active MoE (vendor: "most capable agentic coding model in its weight class by a wide margin"); DeepSWE 40.4% and missing SWE-bench Verified cap it. (Was 70; the new SWE-Atlas row and verified TB ranking support a small lift.)
- **Cost efficiency: 98/100.** $0.10/$0.20/$0.01 verified officially on the dedicated 1M endpoint — the methodology's cheapest anchor (97–99), with open weights (BF16→NVFP4, GGUF/MLX) and permissive OpenMDW-1.1 licensing on top.
- **Overall Score: 60/100.** Half-up mean of the five quality dims (65+55+95+15+72)/5 = 60.4 → 60 — unchanged. An ultra-cheap 1M-context open coding agent; reasoning evidence is the main gap, so treat that dimension as provisional.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16 (first researched 2026-09-25)
- Method: public internet research (official Poolside "Introducing Laguna S 2.1" blog with full benchmark tables + trajectories release, BenchLM, Bing search). Re-research verified: release 2026-07-21, Nov-2025 knowledge cutoff, official $0.10/$0.20/$0.01 pricing, SWE-Atlas 46.2% row, thinking-mode deltas, and the #11 TB 2.1 vendor-board standing — Coding 70→72 (small, evidence-backed), Overall unchanged at 60. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
