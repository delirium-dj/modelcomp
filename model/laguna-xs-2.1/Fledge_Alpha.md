# Laguna XS 2.1 — findings by Fledge Alpha

- Source: Poolside AI (`laguna-xs-2.1`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's smallest/lightest agentic-coding MoE — 33B total / 3B active, designed to run on a local machine; released Jul 2, 2026.
- **Provider / access:** OpenRouter `poolside/laguna-xs-2.1` (free tier), Poolside API, HF weights (BF16/FP8/NVFP4/INT4), Ollama local builds.
- **Release / knowledge:** July 2, 2026; knowledge cutoff shared with Laguna line (Nov 2025).
- **IDs:** `poolside/laguna-xs-2.1`, `opencode/laguna-xs-2.1`; free tier available.
- **Context window:** 262,144 (HF); 256K served on API/OpenRouter.
- **Modalities:** text in/out only; reasoning + tool calling; no vision.
- **Pricing (as of 2026-10-05):** $0.06–0.10 in / $0.12–0.20 out per 1M depending on route; free tier on OpenRouter/Krater.
- **Architecture:** 33B MoE, 3B active, same architecture as XS.2, OpenMDW-1.1 license.

### Raw benchmarks found

Agent / tool use:

- No verified published agentic-tool row specific to XS 2.1 (DeepSWE/Toolathlon rows not in launch table excerpt).

Reasoning / knowledge:

- No verified GPQA/HLE/MMLU rows published for XS 2.1.

Coding:

- SWE-bench Multilingual: **63.1%** (up +5.4 vs XS.2; poolside launch blog)
- SWE-bench Verified, SWE-Bench Pro, Terminal-Bench 2.0: vendor table exists but per-model numeric values were not published with the excerpt read; XS 2.1 "stronger on terminal-style tasks" claim is qualitative.

Long context:

- 256K context verified per HF + OpenRouter listing; no MRCR/RULER row published.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 60/100.** Tool-calling support documented; only vendor qualitative claim for TB; no verified row.
- **Reasoning: 58/100.** General reasoning not measured publicly for XS tier.
- **Context window: 88/100.** 262K native; strongest of the XS tier claims but below the 1M cohort.
- **Multimodal: 15/100.** Text-only by design.
- **Coding: 64/100.** SWE-bench Multilingual 63.1% is the only verified numeric; terminal-task gains are qualitative.
- **Cost efficiency: 93/100.** $0.06/$0.12 per 1M plus a free tier make the XS tier very cheap.
- **Overall Score: 57/100.** Mean of five non-cost dims (60+58+88+15+64)/5 = 57.0 → 57; best fit: 3B-active coding model for local deployment; expect re-scoring once XS 2.1's full benchmark table is verifiable.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (poolside.ai XS 2.1 launch post, OpenRouter/ModelBench/LM Market Cap, token tape); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
