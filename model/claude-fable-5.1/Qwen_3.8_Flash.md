# Claude Fable 5.1 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Fable 5.1 (`anthropic/claude-fable-5.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model above Opus 5 for the most demanding reasoning and long-horizon agentic work, with 1M context and 128K output.
- **Provider / access:** Anthropic API (`claude-fable-5.1`); no OpenCode Zen free ID (`noFreeId`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (Fable 5.1 system card, with Mythos 5.1); knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-fable-5.1`.
- **Context window:** 1M in / 128K max out (curated meta).
- **Modalities:** text, image, PDF in; text out; reasoning on; tool calls. No audio/video in, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $10 / $50 per 1M; no free tier.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (54 of 618 rows), citing the Anthropic Claude Fable 5.1 & Mythos 5.1 system card, Artificial Analysis, Vals AI, Cursor, NeoCognition and OpenRouter (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (AA; Vals 85.0%) — TB 4.0 **55.8%** (AA 52.0%) — elite on the hard new tier
- Toolathlon-Verified: **77.8%** (Pass@3 81.5%, avg 23.7 turns); τ³-Banking 47.2%
- GDPval-AA: **1735** (AA normalized 61.7%); AA Briefcase Elo 1678; AA Harvey LAB 93.0%
- AA Agentic Index **58.0%**; ApprenticeBench 72%; OSWorld 2.0 41.7%; AutomationBench 31.4% (AA 59.4%); CWE-bench v1 58.0%

Reasoning / knowledge:

- HLE: **65%** (w/o tools 60.9%, AA 59.1%); GPQA-Diamond **93.7%** (Vals 93.4%)
- ARC-AGI-1 **97.50%** / ARC-AGI-2 **90%** (system card); MLCR-AA **71.1%**; AA-LCR 85.3%
- Artificial Analysis Intelligence Index **53.4**; MMLU-Pro (Vals) 92.4; CritPt 29.7%
- Omniscience Accuracy / **Hallucination Rate: 67.2% / 72.6%** (high hallucination flag)

Coding:

- SWE-bench Pro **81.2%**; SWE Multilingual 89.1%; SWE Multimodal 54.7%
- LiveCodeBench (Vals) **90.5%**; ProgramBench **87.6%**; AA Coding Index **81.6%**
- DeepSWE 67.4% (under 74 ref); FrontierSWE v2 56.3%; CursorBench 3.2 73.4% / 4.0 51.8%; AA-SciCode 63.1%; Bug Hunt 43 fixes

Multimodal / long context:

- Design Arena Website 1319 (OpenRouter); GraphWalks BFS 256K–1M 65.0%; MLCR 71.1 at 1M window.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 95/100.** Terminal-Bench 2.1 91.4% plus a benchmark-leading TB 4.0 55.8%, Toolathlon-Verified 77.8% and GDPval-AA 1735 sit in the 90–100 frontier band; mid OSWorld 41.7% and AutomationBench 31.4% keep it shy of the ceiling.
- **Reasoning: 93/100.** HLE 65%, GPQA-Diamond 93.7%, ARC-AGI-1 97.5% / ARC-AGI-2 90% and MLCR-AA 71.1% all clear the high bars; capped by CritPt 29.7%, Index 53.4 and a 72.6% Omniscience hallucination rate.
- **Context window: 96/100.** 1M-token window / 128K output meets the ≥1M tier; MLCR 71.1, AA-LCR 85.3 and GraphWalks 65% at 256K–1M are strong but no ≥98% retrieval metric is reported, so short of 100.
- **Multimodal: 76/100.** Text+image+PDF in / text out — PDF ingestion puts it in the 75–90 band, but evidence is thin (Design Arena 1319 only), no audio/video in and no non-text output, so the floor of the band.
- **Coding: 92/100.** SWE-bench Pro 81.2%, LiveCodeBench 90.5%, ProgramBench 87.6%, AA Coding Index 81.6% and SciCode 63.1% clear the frontier refs; DeepSWE 67.4% (under the 74 ref) and SWE Multimodal 54.7% trim it.
- **Cost efficiency: 30/100.** $10 / $50 per 1M lands exactly on the $10/$50 ≈ 30 anchor; no free tier. Cost is excluded from Overall.
- **Overall Score: 90/100.** Mean of Tool 95, Reasoning 93, Context 96, Multimodal 76, Coding 92 = 90.4 → 90. Best fit: the toughest long-horizon agentic coding and reasoning jobs where price is no object; ground factual recall (72.6% Omniscience hallucination) and route heavy multimodal/audio work elsewhere.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Fable 5.1/Mythos 5.1 system card, plus Artificial Analysis, Vals AI, Cursor, NeoCognition and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
