# Gemma 4 31B IT — findings by Big Pickle

- Source: Google (`gemma-4-31b-it`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google's open weights 31B instruction-tuned model with strong reasoning, tool use, and coding capabilities.
- **Provider / access:** Google open weights
- **Release / knowledge:** 2026
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 256K tokens (corrected from 128K on 2026-10-08; BenchLM profile).
- **Modalities:** Text + image input (MMMU-Pro rows; corrected from "Text in/out only" on 2026-10-08); audio/video input not confirmed.
- **Pricing (as of 2026-09-20):** Free open weights / standard hosting

### Normalized scores (1–100)

- **Tool use: 70/100.** Real data now grounds this (was a bare estimate): τ²-bench 59.9% is solid for the class, but AA Agentic Index 6.7%, Gert Labs 35.3%, and GDPval-AA 755/6.1% show agentic ceilings well below flagship/top-OSS levels.
- **Reasoning: 82/100.** GPQA Diamond 85.7% (AA) / 84.3%, MMLU-Pro 85.2%, AA-HLE 23.6%, HLE 26.5% w-tools / 19.5% without — strong knowledge for a 31B open-weight, dragged down on frontier corners: CritPt 1.4%, AA-Omniscience Index −47.9 with an 85% hallucination rate.
- **Context window: 80/100.** 256K context (up from recorded 128K); AA-LCR 69.7% — a solid mid-tier long-context-reasoning figure for the window.
- **Multimodal: 75/100.** Corrected from 50: the 31B variant is multimodal — MMMU-Pro 76.9% (model card) / 73.4% (AA) — though text-oriented vs the omni Gemma 4 E-series; audio/video unconfirmed.
- **Coding: 68/100.** AA Coding Index 43.4%, AA-SciCode 45.5%, SWE-Rebench 41.6%, React Native Evals 75.2% — a sound open-weight coder, but the AA Coding Index lands a rung below 3.5 Flash-Lite (49.3) and well under the 26B-A4B sibling's efficiency class.
- **Cost efficiency: 95/100.** Free open weights.
- **Overall Score: 75/100.** (70+82+80+75+68)/5 = 75 (lowered from 76 on 2026-10-08, see Re-verification).

---

## Re-verification — 2026-10-08 (18 days after original)

Original research was a thin capability sketch with **no raw benchmarks and two wrong card fields**; this re-run grounds every dimension on verified data (BenchLM profile, updated 2026-10-07, 24/623 covered; AA; HF model card).

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 85 (estimate) | 70 | −15 |
| Reasoning | 84 (estimate) | 82 | −2 |
| Context window | 80 | 80 | — (window corrected 128K→256K) |
| Multimodal | 50 (wrong: "text-only") | 75 | +25 |
| Coding | 83 (estimate) | 68 | −15 |
| Cost efficiency | 95 | 95 | — |
| **Overall** | **76** | **75** | **−1** |

New and corrected data:

- **Model card corrections:** context is **256K** (was recorded 128K) and the 31B instruct model **is multimodal** — MMMU-Pro 76.9% is reported on the HF `google/gemma-4-31B` card and 73.4% is independently measured by AA (MMMU-Pro is a vision benchmark; a text-only model cannot score it). Both field errors corrected inline.
- **Reasoning grounded:** GPQA Diamond 85.7% (AA) / 84.3% (HF blog), MMLU-Pro 85.2%, AA-HLE 23.6%, HLE 26.5% w-tools / 19.5% no-tools — strong for open-weight 31B. AA Intelligence Index 14.7.
- **Frontier corners are weak:** CritPt 1.4%, AA-Omniscience Index −47.9 (accuracy 20.0%, hallucination **85%**) — a clear divergence from the original "strong reasoning" impression.
- **Coding real numbers:** AA Coding Index 43.4%, AA-SciCode 45.5%, SWE-Rebench 41.6%, React Native Evals 75.2%; original 83 was an ungrounded guess.
- **Agentic rows fill the Tool-use gap:** τ²-bench 59.9%, AA Agentic Index 6.7%, Gert Labs 35.26%, GDPval-AA 755 (6.1% normalized).
- BenchLM overall 40.56, **#131/887**; family: Gemma 4 26B A4B 46.11, 12B 31.9, E4B 31.36, E2B 30.24. Pricing unchanged: free open weights (hosted inference via standard providers).

Gaps still open after re-run: audio/video modality confirmation, TB2.1/SWE "Vals" rows, MRCR long-context retrieval figure, hosted API pricing from a concrete provider, AA-GPQA/rank cross-datum if any.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research; scores are normalized 1–100 interpretations.
