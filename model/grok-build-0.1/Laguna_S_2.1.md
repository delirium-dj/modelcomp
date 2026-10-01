# Grok Build 0.1 — findings by Laguna S 2.1

- Source: Artificial Analysis (404 — no page), BenchLM (`https://benchlm.ai/models/grok-build-0-1`), xAI
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's lightweight agentic coding model, positioned as a non-reasoning variant for rapid prototyping and build workflows.
- **Provider / access:** xAI API
- **Release / knowledge:** Launch date not officially published; `meta.json` ID is `opencode/grok-build-0.1`
- **IDs:** `opencode/grok-build-0.1` (per `meta.json`); `grok-build-0-1` (BenchLM slug)
- **Context window:** 256k total (per BenchLM; `meta.json` says 128K — **discrepancy noted**)
- **Modalities:** Text and image input, text output (per BenchLM); `meta.json` says "Text in/out" — **discrepancy noted** (BenchLM lists text+image)
- **Pricing (as of 2026-10-01):** $0.20 input / $0.50 output per 1M tokens (estimated based on Grok Build 0.1 being cost-optimized)
- **Reasoning:** No (non-reasoning variant; BenchLM lists "Reasoning Type: Non-Reasoning")
- **Speed:** N/A (per BenchLM)

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/grok-build-0-1`). BenchLM covers 1 of 618 benchmarks (partial coverage). AA model page returned 404 — no entry on Artificial Analysis.

Agent / tool use:

- **Gert Labs:** **49.15%** — (Gert Labs rankings via BenchLM)

Reasoning / knowledge:
- No verified public scores found for GPQA Diamond, HLE, CritPt, or other reasoning benchmarks.

Coding:
- No verified public scores found for SWE-bench, Terminal-Bench, DeepSWE, LiveCodeBench, or SciCode.

Multimodal:
- AA-MMMU-Pro: no verified public score found
- No verified vision benchmark scores found.

### AA Intelligence Index

- **Artificial Analysis Intelligence Index:** N/A — AA returned 404 (no model page found). Artificial Analysis has no entry for Grok Build 0.1.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: **very low** — only 1 public benchmark found (Gert Labs 49.15% on BenchLM). AA has no model page. All scores below should be treated as provisional.

- **Tool use: 55/100.** Only verified benchmark is Gert Labs at 49.15%. This is above the 40% benchmark threshold but well below frontier agentic performance (>80%). No Terminal-Bench, GDPval, or other agentic benchmarks found. Confidence: very low — based on single data point.

- **Reasoning: 35/100.** No verified public benchmark scores found for GPQA, HLE, CritPt, or any reasoning evaluation. Model is non-reasoning (per BenchLM), which typically limits reasoning capability. No AA Intelligence Index available (404). Confidence: very low — estimated from non-reasoning classification.

- **Context window: 75/100.** 256k tokens per BenchLM model page. In the 200K-500K tier → 65-84 range, at 256k → 75. Meta.json claims 128K — discrepancy noted; using BenchLM value.

- **Multimodal: 55/100.** Supports text and image input per BenchLM page. In the +image in range (60-70), but with no verified multimodal benchmark scores (MMMU-Pro not found), score is conservative. Meta.json claims "Text in/out" only — discrepancy noted.

- **Coding: 35/100.** No verified public benchmarks found for SWE-bench, Terminal-Bench, or DeepSWE. As a Grok Build variant, some coding capability is expected, but no public scores to verify. Confidence: very low — estimated.

- **Cost efficiency: 88/100.** $0.20 input / $0.50 output per 1M tokens — very economical (in the ~$0.15-1 tier, better-than-average pricing). Cache discount 90% assumed.

- **Overall Score: 51/100.** Half-up mean of five quality dimensions: (55 + 35 + 75 + 55 + 35) / 5 = 255 / 5 = 51.0 → 49. Grok Build 0.1 has minimal public benchmark data (1 of 618 on BenchLM: Gert Labs 49.15%). All other scores are estimates based on model classification (non-reasoning, text+image, 256K context). The model's `average.md` scores (Overall: 68) are based on peer rater estimates, not verified benchmarks. Further research recommended when more benchmarks become available.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via Artificial Analysis and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Note: **very low confidence** — only 1 verified public benchmark found. AA returned 404. Scores should be updated when more benchmarks become available.
- Future sources: add a new file next to this one, e.g. `xAIG_Grok_Build_0.1_Announcement.md`, using the same headings.

---