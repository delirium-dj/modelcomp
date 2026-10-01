# Grok 4.6 — findings by Qwen 3.8 Flash

- Source: xAI / Grok 4.6 (`xai/grok-4.6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (base)
- **Short description:** xAI's frontier flagship for coding and agentic work — elite SWE-bench (Vals 95.6%) / LiveCodeBench (Vals 88.2%) / Coding-Index (76.8%), top-tier reasoning (GPQA 94.9%, HLE 42.9%, ARC-AGI-2 67.1%) on a 500K window. BenchLM ranks it #22 of 645 (69.38), with 37/618 rows covered.
- **Provider / access:** xAI API (`grok-4.6`); OpenRouter. Reasoning + tool calls; no free ID.
- **Release / knowledge:** Grok 4.6 launch (xAI newsroom); knowledge cutoff not disclosed.
- **IDs:** `xai/grok-4.6` / xAI `grok-4.6`.
- **Context window:** 500K (curated meta and BenchLM agree).
- **Modalities:** Text and image in; text out (curated meta); Design Arena Website row confirms image grounding. Reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** $2 in / $6 out per 1M (cached $0.50) under 200K prompt; doubles to $4 / $12 above 200K.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (37 of 618 rows; 69.38/100, #22 of 645), citing the xAI Grok 4.6 launch post, plus Artificial Analysis, Vals AI, ARC Prize, Cursor, Collinear, Proximal, VulcanBench and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Coding:

- SWE-bench (Vals) **95.6%**; LiveCodeBench (Vals) **88.2%**; AA Coding Index **76.8%** (clears 70 bar)
- DeepSWE 65.9%; CursorBench 3.2 70.8% / 4.0 41.4%; AA-SciCode 56.5%; VulcanBench v3 87.0%; FrontierCode 1.1 61.3%; FrontierSWE v2 25.3%

Reasoning / knowledge:

- **AA-GPQA Diamond 94.9%** / Vals GPQA 94.7% (clear 90); **AA-HLE 42.9%** (clears 40 bar); MMLU-Pro (Vals) 89.4; AA Intelligence Index 44.3
- **ARC-AGI-1 87.0%, ARC-AGI-2 67.1%** (standout abstraction), ARC-AGI-3 2.1%; CritPt 17.1; Omniscience Index 30.5 / Accuracy 48.2% / Hallucination 34.3%

Agent / tool use:

- Terminal-Bench 2.1 (Vals) **78.3%**; GDPval-AA 1643 / 55.5%; AA AutomationBench 66.7%; AA Agentic Index 53.4%; APEX-Agents 57.5%
- AA τ3-Banking 50.7%; EnterpriseOps-Gym 48.3%; Terminal-Bench 3.0 26.5%; CWE-bench v1 57.0%; ApprenticeBench 13% (weak)

Multimodal / long context:

- Design Arena Website 1299 (only image-grounded row); text+image in per curated meta
- 500K window (AA-LCR 80.3 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 78/100.** Terminal-Bench 2.1 78.3%, AutomationBench 66.7% and GDPval-AA 1643 are solid agentic reads, but τ3-Banking 50.7%, EnterpriseOps-Gym 48.3% and especially ApprenticeBench 13% / Terminal-Bench 3.0 26.5% show the harder long-horizon suites still bite — strong, not frontier.
- **Reasoning: 87/100.** GPQA-Diamond 94.9% and HLE 42.9% clear their bars, MMLU-Pro 89.4 is high, and **ARC-AGI-2 67.1% / ARC-AGI-1 87%** are genuinely frontier abstraction results; a 34.3% hallucination rate and CritPt 17.1 hold it under the top band.
- **Context window: 80/100.** The 500K window sits between the 100–200K (50–64) and ≥1M (95–100) bands, well into the upper half; AA-LCR 80.3 supports it and no ≥98% MRCR is demonstrated.
- **Multimodal: 65/100.** Text+image in with a strong single image-grounded row (Design Arena 1299) — a +image band (60–70); no audio/video/document benchmark rows, so no higher-tier credit.
- **Coding: 89/100.** SWE-bench (Vals) 95.6%, LiveCodeBench (Vals) 88.2% and AA Coding Index 76.8% (clears 70) are elite agentic-code results; DeepSWE 65.9% and CursorBench 4.0 41.4% trim the very top, but this is a genuine frontier coder.
- **Cost efficiency: 78/100.** $2 / $6 per 1M (cached $0.50) is under the $3/$15≈60 anchor, but pricing doubles above a 200K prompt, so long-context use erodes the value; net upper-mid. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 78, Reasoning 87, Context 80, Multimodal 65, Coding 89 = 79.8 → 80. Best fit: frontier agentic software engineering and abstract reasoning (ARC/SWE/LiveCodeBench) where its coding and reasoning cores shine; keep it in text/image lanes, watch the >200K price step, and verify factual output given the 34.3% hallucination rate.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the xAI Grok 4.6 launch post, plus Artificial Analysis, Vals AI, ARC Prize, Cursor, Collinear, Proximal, VulcanBench and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
