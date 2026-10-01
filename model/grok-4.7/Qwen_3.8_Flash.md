# Grok 4.7 — findings by Qwen 3.8 Flash

- Source: xAI / Grok 4.7 (`opencode/grok-4.7`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (base)
- **Short description:** xAI's agentic flagship — broad tool-use coverage (Terminal-Bench 2.1 73.4%, GDPval-AA 1695, DeepSWE 71.0%) with strong reasoning (HLE 43.1%) and an unusually **low 29.3% hallucination rate**, on a 500K window. BenchLM shows partial coverage (26/618) and no published overall rank yet.
- **Provider / access:** xAI API (`grok-4.7`); OpenCode Zen (`opencode/grok-4.7`); OpenRouter. Reasoning + tool calls.
- **Release / knowledge:** Grok 4.7 launch (xAI newsroom); knowledge cutoff not disclosed.
- **IDs:** `opencode/grok-4.7` / xAI `grok-4.7`.
- **Context window:** BenchLM lists **500K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 500K.
- **Modalities:** Design Arena Website row indicates image-in; curated `meta.json` lists "Text in/out". Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (xAI flagship-class; exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (26 of 618 rows; **no public overall score yet — unranked**), citing the xAI Grok 4.7 launch post, plus Artificial Analysis, Vals AI, Cursor, Collinear, Proximal and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- Terminal-Bench 2.1 (Vals) **73.4%**; GDPval-AA **59.8%** / **1695** Elo; AA Briefcase 1657
- AA AutomationBench 65.6%; AA ITBench 42.1%; Terminal-Bench 4.0 38.0% / AA-Terminal-Bench 4.0 25.8%; CWE-bench v1 68.0%; AA Harvey LAB 19.6%; GDP.pdf 20.0%

Coding:

- DeepSWE **71.0%**; EEBench **64.0%**; AA-SciCode **57.4%** (clears 55 bar)
- CursorBench 4.0 46.3%; FrontierSWE v2 29.5% (no SWE-bench Verified / LiveCodeBench rows published)

Reasoning / knowledge:

- **AA-HLE 43.1%** (clears the 40% bar); AA Intelligence Index 46.5; AA-LCR 76.7; CritPt 17.7; MLCR-AA 15.0
- AA-Omniscience Index 32.0 / Accuracy 47.4% / **Hallucination 29.3%** — notably low confabulation; HealthBench Professional 56.7%

Multimodal / long context:

- Design Arena Website 1222 (only image-grounded row)
- 500K window (AA-LCR 76.7 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 79/100.** Broad, genuinely agentic coverage — Terminal-Bench 2.1 73.4%, GDPval-AA 1695 Elo / 59.8%, AutomationBench 65.6% and Briefcase 1657 — but the headline agentic scores sit mid-band (no τ² / ≥85% Terminal-Bench read) and Harvey LAB 19.6% / GDP.pdf 20.0% are weak, so a strong-but-not-frontier placement.
- **Reasoning: 82/100.** AA-HLE 43.1% clears the 40% bar, Intelligence Index 46.5 is solid, and the **29.3% hallucination rate** (Omniscience Index 32.0, Accuracy 47.4%) is one of the most grounded profiles in this queue — trimmed by CritPt 17.7% and MLCR 15.0%.
- **Context window: 80/100.** BenchLM's 500K window sits between the 100–200K (50–64) and ≥1M (95–100) bands, well into the upper half; AA-LCR 76.7 supports it and no ≥98% MRCR is demonstrated (curated meta conflicts at 128K).
- **Multimodal: 62/100.** The only grounded non-text row is image (Design Arena Website 1222) — a +image band (60–70); no audio/video/document rows and curated meta says text-only, so no higher-tier credit.
- **Coding: 82/100.** DeepSWE 71.0% (near the 74 bar), EEBench 64.0% and SciCode 57.4% (clears 55) are strong agentic-code signals, trimmed by CursorBench 46.3%, FrontierSWE v2 29.5% and the absence of SWE-bench Verified / LiveCodeBench rows.
- **Cost efficiency: 75/100.** xAI flagship-class "standard pricing" is low-to-mid; exact per-1M rate not published in curated meta, so provisional. Cost is excluded from Overall.
- **Overall Score: 77/100.** Mean of Tool 79, Reasoning 82, Context 80, Multimodal 62, Coding 82 = 81.0 → 81. Best fit: agentic software/engineering work and long-horizon tool tasks where grounding matters — its low hallucination rate and strong HLE/DeepSWE make it a dependable autonomous coder, but the thin multimodal profile and unranked status mean it is not yet a breadth flagship.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the xAI Grok 4.7 launch post, plus Artificial Analysis, Vals AI, Cursor, Collinear, Proximal and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
