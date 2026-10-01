# Grok 4.1 — findings by Laguna S 2.1

- Source: BenchLM (`https://benchlm.ai/models/grok-4-1`), Artificial Analysis model page (404), OpenCode Zen docs (`https://opencode.ai/docs/zen`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's Grok 4.1 reasoning model from the Grok 4.1 family. Minimal public information available; only 1 benchmark found on BenchLM.
- **Provider / access:** xAI; OpenCode Zen: not listed in Zen model table (not a Zen model)
- **Release / knowledge:** Release date not found; knowledge cutoff not published
- **IDs:** `opencode/grok-4.1` (per `meta.json`); `grok-4-1` (BenchLM canonical slug)
- **Context window:** 128K total (per `meta.json`; no other public source to verify)
- **Modalities:** Text input, text output (per `meta.json`; no other public source to verify)
- **Pricing (as of 2026-10-01):** Not specified in `meta.json` ("Standard pricing"); not listed in Zen docs pricing table
- **Architecture:** Proprietary; parameters not disclosed
- **License:** Proprietary; not open weights
- **Reasoning:** Non-reasoning (per BenchLM model details)
- **Speed:** Not available
- **Status:** Unknown (possibly deprecated; Grok 4.6/4.7 family exists)

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/grok-4-1`). Only 1 of 618 benchmarks found. AA model page returns 404. No DeepSeek/HF model card found.

Agent / tool use:

- **ResearchClawBench:** **13.5%** — (ResearchClawBench official leaderboard at `https://internscience.github.io/ResearchClawBench-Home/`)
- **τ²-bench:** no verified public score found
- **Terminal-Bench 2.0:** no verified public score found
- **Terminal-Bench 2.1:** no verified public score found
- **GDPval-AA:** no verified public score found
- **AA Agentic Index:** no verified public score found
- **OSWorld-Verified:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** no verified public score found (AA model page 404)
- **BenchLM Intelligence Index:** not computed (BenchLM shows "Coming soon" / "Unranked")
- **GPQA Diamond:** no verified public score found
- **HLE:** no verified public score found
- **LCR:** no verified public score found
- **CritPt:** no verified public score found

Coding:

- **SWE-bench Verified:** no verified public score found
- **SWE-bench Pro:** no verified public score found
- **LiveCodeBench:** no verified public score found
- **DeepSWE:** no verified public score found

Multimodal:

- Text input, text output only (per `meta.json`)
- No image, video, or speech support documented
- No multimodal benchmarks found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
  > Confidence: very low — only 1 verified public benchmark found (ResearchClawBench at 13.5% on BenchLM). All other dimensions scored based on `meta.json` specifications only.

- **Tool use: 35/100.** Single benchmark: ResearchClawBench at 13.5% — far below the 40% threshold for agentic performance. The model failed to pass basic research agent tasks. No other agentic benchmarks (τ²-bench, Terminal-Bench, GDPval-AA, OSWorld) found. Non-reasoning variant (per BenchLM model details) limits agentic capability. Very low confidence.

- **Reasoning: 40/100.** No reasoning benchmarks found (no GPQA, HLE, LCR, CritPt, or Intelligence Index). The model is non-reasoning (no extended thinking). Score inferred from the single agentic benchmark (13.5% on ResearchClawBench suggests poor reasoning). Baseline estimate for a non-reasoning model without benchmark data.

- **Context window: 62/100.** 128K tokens (per `meta.json`). At the methodology's 100K+ tier (60–62, 128K ≈ 62). Note: `meta.json` is minimal and may be incomplete; no independent source to verify.

- **Multimodal: 30/100.** Text input, text output only (per `meta.json`). No image or video input support documented. Baseline score for text-only models.

- **Coding: 30/100.** No coding benchmarks found (no SWE-bench, LiveCodeBench, DeepSWE, SciCode, or AA Coding Index). Baseline score for a model with no verified coding benchmarks.

- **Cost efficiency: 60/100.** Not specified in `meta.json` ("Standard pricing"). Grok 4 Fast (non-reasoning) is priced at $0.20/$0.50 on Zen. Grok 4.1 may have similar pricing. Mid-range estimate. No Zen Free ID found.

- **Overall Score: 39/100.** Mean of five non-cost dimensions: (35 + 40 + 62 + 30 + 30) / 5 = 197 / 5 = 39.4 → 39. Extremely low confidence — only 1 verified public benchmark (ResearchClawBench 13.5%). The AI Intelligence Index is "Coming soon" / "Unranked" on BenchLM. No AA model page available. This model should be re-evaluated when more benchmark data is published.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Confidence: very low (1 of 618 benchmarks on BenchLM). Re-evaluate when AA model page or additional benchmarks become available.

---
