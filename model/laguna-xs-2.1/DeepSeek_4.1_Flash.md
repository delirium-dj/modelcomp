# Laguna XS 2.1 — findings by DeepSeek 4.1 Flash

- Source: Poolside / Laguna XS 2.1 (`poolside/Laguna-XS-2.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1. No "Free" wording — open weights (OpenMDW-1.1) with a hosted free tier.
- **Short description:** Poolside's 33B-total / ~3B-active mixture-of-experts coding agent built to run on a developer's own machine, an upgrade of Laguna XS.2 with +5.4 pts on SWE-bench Multilingual. The active-parameter count decides whether it fits one GPU; the OpenMDW-1.1 licence decides how far it spreads.
- **Provider / access:** open weights `poolside/Laguna-XS-2.1` (OpenMDW-1.1, fully permissive) on Hugging Face, with FP8 / NVFP4 / INT4 quantized variants; Ollama and llama.cpp recipes in the card; served through OpenRouter and other hosts.
- **Release / knowledge:** released 2026-07-02 (Poolside release post, via dreaming.press); training cutoff not disclosed.
- **IDs:** `poolside/laguna-xs-2.1` (HF/OpenRouter); tracked here as `opencode/laguna-xs-2.1` with a free tier (`noFreeId: false`).
- **Context window:** 262,144 tokens (model card). Benchmark runs used a 256K context; no retrieval measurement at that length was published. Sliding-window attention is 512 tokens on 30 of 40 layers.
- **Modalities:** text in, text out only; reasoning supported with interleaved thinking between tool calls, preserved-reasoning mode, and per-request thinking toggle (`enable_thinking`); tool calls yes; KV cache quantized to FP8.
- **Pricing (as of 2026-09-25):** $0.06 in / $0.12 out per 1M on OpenRouter (project `meta.json`, curated from the provider listing), plus a free tier; self-hosting a 33B MoE in int4 fits ~20GB (24GB GPU / 32GB Mac) — "Runs on one consumer GPU: yes" (dreaming.press).
- **Architecture:** MoE, 33B total / ~3B activated per token, 40 layers (10 global attention, 30 sliding-window), 256 experts + 1 shared, Muon optimizer, 3:1 mixed SWA/global attention with per-layer rotary scales.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (model card)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Claw-Eval: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt / LCR: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **70.9%** (model card; Laguna XS.2 69.9%)
- SWE-bench Multilingual: **63.1%** (model card; XS.2 57.7% — the +5.4-pt headline gain)
- SWE-bench Pro (public dataset): **47.6%** (model card)
- Terminal-Bench 2.0: **37.5%** (model card) — "stronger terminal-style tasks" than XS.2, but no XS.2 value published
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / Aider: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks or AA-LCR result reported for Laguna XS 2.1.

### Normalized scores (1–100)

- **Tool use: 52/100.** Terminal-Bench 2.0 37.5% sits just below the 45–60% mid band, and multi-step agency is otherwise unmeasured (no Tau3, GDPval, OSWorld or MCP rows) — scored provisionally on the terminal-agent evidence plus a permissive local deployment story.
- **Reasoning: 55/100.** No GPQA/HLE/index result exists; the score is a conservative mid-band placement inferred from SWE-bench-style multi-step task completion at ~3B active parameters, and is explicitly provisional.
- **Context window: 71/100.** 262K lands in the lower half of the 200K–500K tier (65–84); no retrieval measurement is published, and 512-token sliding windows on most layers are a caveat for very long inputs.
- **Multimodal: 15/100.** Text-to-text only (model card lists no vision, audio or PDF path) — the 10–20 text-only band.
- **Coding: 72/100.** SWE-bench Verified 70.9%, Multilingual 63.1% and SWE-bench Pro 47.6% are solid mid-tier results for a 3B-active local model; the absence of LiveCodeBench/SciCode/DeepSWE keeps it from the 80s.
- **Cost efficiency: 98/100.** $0.06/$0.12 per 1M is below the $0.10/$0.20 = 97–99 anchor, there is a free tier, and OpenMDW-1.1 weights run on a 24GB consumer GPU — near-free at the margin.
- **Overall Score: 53/100.** (52 + 55 + 71 + 15 + 72) / 5 = 53.0 → 53. Best fit: local, licence-clean agentic coding — cheap and permissive, but with no verified reasoning, tool-use depth or multimodal breadth beyond SWE-bench-style tasks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-25 UTC
- Method: public internet research (Poolside Hugging Face model card, release coverage on dreaming.press, provider pricing listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
