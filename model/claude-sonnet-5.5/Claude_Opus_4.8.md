# Claude Sonnet 5.5 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model (2026-09-28), succeeding Sonnet 5 — thinking always on with effort control, 1M context, tuned for feature work, bug fixes, and polished documents. Top use case: high-quality agentic coding and knowledge work at mid pricing.
- **Provider / access:** Anthropic Claude Platform `claude-sonnet-5-5` (Messages API); AWS/GCP/Azure. No Zen Free ID.
- **Release / knowledge:** 2026-09-28; knowledge cutoff not published.
- **IDs:** `anthropic/claude-sonnet-5.5` (no Free ID).
- **Context window:** 1M total (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text, image in; text out; reasoning (always on, effort control); tool calls yes.
- **Pricing (as of 2026-10-03):** $2 in / $10 out per 1M; no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (AA 63.6%); GDPval-AA **1844 Elo** (AA-normalized 67.2%)
- Toolathlon Verified Pass@3: **85.2%** (Verified 77.8%); AutomationBench (Zapier) **44.7%** (AA 71.8%)
- HLE w/ tools **64.5%**; AA Harvey-LAB **93.1%**; DRACO **87.0%**; AA-AnalystAgent **57.5%**

Reasoning / knowledge:

- AA Intelligence Index: **56.0**; AA-HLE **55.0%**; HLE w/o tools **56.9%**; AA-LCR **82.7%**
- CritPt **31.4%**; MLCR-AA **75.0%**; GMMLU **92.1%**; ArXivMath Aug 2026 **95.2%** (tools)

Coding:

- SWE-bench Pro **81.3%**; SWE Multilingual **90.3%**; DeepSWE **71.0%**; ProgramBench **79.7%**
- FrontierSWE v2 **61.9%**; FrontierCode 1.1 Extended **59.1%**; CursorBench 4.0 **55.5%**; AA-SciCode **61.0%**

Multimodal:

- Chartography (tools) **90.2%**; BenchCAD Vision2Code (tools) **0.963**; OfficeQA **76.9%**; Biomedical image analysis **72.2%**

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval 1844, TB4.0 70.6%, Toolathlon Pass@3 85.2%, Harvey-LAB 93.1%, HLE-tools 64.5% — frontier agentics for a Sonnet-tier model.
- **Reasoning: 89/100.** AA Index 56, HLE 56.9% (no tools), MLCR 75%, GMMLU 92.1%, ArXivMath 95.2%; CritPt 31.4% caps the top.
- **Context window: 95/100.** 1M total with AA-LCR 82.7%.
- **Multimodal: 67/100.** Image-in (Chartography 90.2% tools, OfficeQA 76.9%), text-only out, no audio/video — image-input tier.
- **Coding: 90/100.** SWE-bench Pro 81.3%, SWE Multilingual 90.3%, FrontierSWE v2 61.9%, ProgramBench 79.7%, DeepSWE 71%.
- **Cost efficiency: 68/100.** $2 in / $10 out per 1M, no free tier — mid pricing.
- **Overall Score: 86.4/100.** Half-up mean of the five quality dims (91/89/95/67/90). A frontier-adjacent everyday agentic-coding workhorse; image-only multimodal is the main cap.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic launch post + system card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
