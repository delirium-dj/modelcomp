# Claude Sonnet 5 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Sonnet 5 (`anthropic/claude-sonnet-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model of the pre-5.5 line, built for the agentic era with adaptive thinking and 1M context at a lower cost than Opus — now superseded by Sonnet 5.5, which beat it on every axis.
- **Provider / access:** Anthropic API (`claude-sonnet-5`); no OpenCode Zen free ID (`noFreeId`). Adaptive thinking + tool calls.
- **Release / knowledge:** mid 2026 (Sonnet 5 system card); knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-sonnet-5`.
- **Context window:** 1M in / 128K max out (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, file (PDF) in; text out; reasoning on; tool calls. No audio/video, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $3 / $15 per 1M; no free tier.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (41 of 618 rows; 67.35/100, #26 of 645), citing the Anthropic Claude Sonnet 5 system card, Artificial Analysis, Vals AI, Cognition, Cursor, NeoCognition, VulcanBench and OpenRouter (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (system card; Vals 74.5%) — TB 3.0 only 14.6%
- BrowseComp **84.7%**; OSWorld-Verified **81.2%**; GDPval-AA **1603** (AA normalized 47.5%)
- AA Agentic Index 44.3%; ApprenticeBench 16%

Reasoning / knowledge:

- AA-GPQA Diamond: **91.1%** (Vals 88.9); HLE **57.4%** w/ tools (43.2% w/o, AA 41.3; HLE-Verified 31.0)
- AA-LCR 82.0%; CritPt 16.9%; Intelligence Index **38.2**
- Omniscience Accuracy / Hallucination: 40.1% / **39.4%** (low); MMLU-Pro (Vals) 87.5; LABBench2 80.1

Coding:

- SWE-bench Verified **85.2%** (also Vals 79.6); SWE Multilingual 78.3%; LiveCodeBench (Vals) 82.4%
- SWE-bench Pro 63.2%; AA Coding Index 71.5%; Terminal-Bench 2.1 80.4%; VulcanBench CII v1 89.2
- AA-SciCode 54.3% (under 55 ref); FrontierCode 1.1 42.7%; SWE Multimodal 28.1%; CursorBench 3.2 61.5 / 4.0 34.1

Multimodal / long context:

- CharXiv **88.3** (w/o tools 77.0); AA-MMMU-Pro 77.3; Design Arena 1284
- AA-LCR 82.0 at 1M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 80/100.** BrowseComp 84.7%, OSWorld-Verified 81.2% and GDPval-AA 1603 are respectable, but TB 2.1 80.4% sits under the 88 ref and TB 3.0 14.6%, Agentic Index 44.3% and ApprenticeBench 16% show the 5.5 generation left it behind.
- **Reasoning: 84/100.** GPQA-Diamond 91.1% and HLE 57.4% (43.2% no-tools) clear both bars with a low 39.4% hallucination rate; Index 38.2, HLE-Verified 31.0 and CritPt 16.9 cap it.
- **Context window: 95/100.** 1M-token window / 128K output meets the ≥1M tier and AA-LCR 82.0 is supportive; no ≥98% retrieval-at-length metric published, so the band floor.
- **Multimodal: 78/100.** Text+image+file(PDF) in / text out — the +PDF band (75–90), backed by strong chart work (CharXiv 88.3) and MMMU-Pro 77.3; no audio/video in and no non-text output.
- **Coding: 80/100.** SWE-bench Verified 85.2% and VulcanBench CII 89.2 are good; SWE-bench Pro 63.2%, Coding Index 71.5%, SciCode 54.3% (under ref), SWE Multimodal 28.1% and CursorBench 4.0 34.1% keep it mid.
- **Cost efficiency: 60/100.** $3 / $15 per 1M sits exactly on the $3/$15 ≈ 60 anchor; no free tier. Cost is excluded from Overall.
- **Overall Score: 83/100.** Mean of Tool 80, Reasoning 84, Context 95, Multimodal 78, Coding 80 = 83.4 → 83. Best fit: cost-capped everyday agents and document/chart workflows still on the Sonnet 5 API; new projects should default to Sonnet 5.5 (same $3/$15-class lane, +6 overall) unless pinned to this exact model.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Sonnet 5 system card, plus Artificial Analysis, Vals AI, Cognition, Cursor, NeoCognition, VulcanBench and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
