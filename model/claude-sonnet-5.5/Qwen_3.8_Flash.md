# Claude Sonnet 5.5 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Sonnet 5.5 (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model (released 2026-09-28) succeeding Claude Sonnet 5 — thinking always on with effort control, 1M context, tuned for feature work, bug fixes and polished documents.
- **Provider / access:** Anthropic API (`claude-sonnet-5.5`); no OpenCode Zen free ID (`noFreeId`). Reasoning always on + tool calls.
- **Release / knowledge:** 2026-09-28 (launch post + system card); knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-sonnet-5.5`.
- **Context window:** 1M total (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image in; text out; reasoning on; tool calls. No audio/video, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $2 / $10 per 1M; no free tier.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (63 of 618 rows; #3 of 645 at 83.28), citing Anthropic "Introducing Claude Sonnet 5.5", the Claude Sonnet 5.5 system card, Artificial Analysis, Cursor and Proximal (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic; AA 63.6%) — above Fable 5.1 (55.8%) and Mythos 5.1 (60.9%)
- GDPval-AA: **1844** (Anthropic; AA normalized 67.2%); AA Briefcase Elo **1811**; AA Harvey LAB 93.1%
- Toolathlon-Verified 77.8% (Pass@3 **85.2%**, avg 31.6 turns); AA AutomationBench 71.3%; DRACO **87.0%**
- Terminal-Bench-Science 59.9%; GDP.pdf 25.8%; LAB all-pass 10.0% (criterion-pass 93.1%)

Reasoning / knowledge:

- HLE w/ tools **64.5%** (w/o tools 56.9%, AA 55.0%); ArXivMath Aug-2026 **95.2%** w/ tools (86.8% w/o)
- Artificial Analysis Intelligence Index **56.0**; MLCR-AA **75.0%**; AA-LCR 82.7%; CritPt 31.4%
- HealthBench Professional 69.2; BioMysteryBench 89.2 human-solvable; deep life-sciences rows (SpatialBench 72.5, protein-binder design 82.3)
- Omniscience Accuracy / Hallucination: 54.0% / 47.0%; GMMLU 92.1 / MILU 91.6

Coding:

- SWE-bench Pro **81.3%**; SWE Multilingual **90.3%**; SWE Multimodal 54.3%
- DeepSWE 71.0% (under 74 ref); ProgramBench 79.7%; FrontierSWE v2 **61.9%**; AA-SciCode 61.0%
- FrontierCode 1.1 Main 46.2% / Extended 59.1%; CursorBench 4.0 55.5%

Multimodal / long context:

- Chartography 90.2 w/ tools (61.6 w/o); BenchCAD Vision2Code 0.963 w/ tools; biomedical image analysis 72.2
- OfficeQA 76.9 / OfficeQA Pro 65.6; 1M window, MLCR 75.0 (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 96/100.** TB 4.0 70.6% leads the whole tracked field, GDPval-AA 1844 clears the 1750 ref, Briefcase 1811, Harvey LAB 93.1% and Toolathlon Pass@3 85.2% are frontier; only LAB all-pass 10.0% and mid GDP.pdf hold it back from 98+.
- **Reasoning: 92/100.** HLE 64.5% w/ tools, ArXivMath 95.2%, Intelligence Index 56.0 and MLCR 75.0 clear the high bars; no GPQA row, CritPt 31.4% and a 47% Omniscience hallucination rate cap it.
- **Context window: 96/100.** 1M-token window meets the ≥1M tier with MLCR 75.0 / AA-LCR 82.7 supportive, but no ≥98% long-context retrieval metric is reported, so short of 100.
- **Multimodal: 70/100.** Text+image in / text out — the +image-in band ceiling; image work is genuinely strong (Chartography 90.2, BenchCAD 0.963 with tools) but there is no audio/video input and no non-text output.
- **Coding: 90/100.** SWE-bench Pro 81.3%, SWE Multilingual 90.3%, FrontierSWE v2 61.9% and ProgramBench 79.7% are top-tier for a Sonnet; DeepSWE 71.0% (under the 74 ref) and FrontierCode Main 46.2% trim it.
- **Cost efficiency: 68/100.** $2 / $10 per 1M sits just under the $3/$15 ≈ 60 anchor — strong value for near-frontier work; no free tier. Cost is excluded from Overall.
- **Overall Score: 89/100.** Mean of Tool 96, Reasoning 92, Context 96, Multimodal 70, Coding 90 = 88.8 → 89. Best fit: the default everyday agentic-coding and document/workbench model at Sonnet price — it beats its own Opus/Fable line on TB 4.0 and GDPval; keep image-only inputs in mind (no audio/video) and ground factual recall.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing Anthropic's Sonnet 5.5 launch post and system card, plus Artificial Analysis, Cursor and Proximal); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
