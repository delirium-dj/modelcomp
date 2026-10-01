# Claude Opus 5 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's 5th-generation Opus flagship for the deepest reasoning and longest autonomous coding/research runs, with a 1M-token window; surpassed by Opus 5.5 in the same line.
- **Provider / access:** Anthropic Messages API (`claude-opus-5`); also AWS Bedrock / Google Vertex. No OpenCode Zen free ID (`noFreeId`).
- **Release / knowledge:** 2026 (Claude Opus 5); knowledge cutoff not disclosed in the system card index.
- **IDs:** `anthropic/claude-opus-5`.
- **Context window:** 1,000,000 in / 128,000 max out (curated meta).
- **Modalities:** text, image, PDF in; text out; reasoning on; tool calls; JSON mode. No audio/video input, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $5 / $25 per 1M (no free tier).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (96 of 618 rows — the deepest coverage in this run), citing the Anthropic "Introducing Claude Opus 5" post and Claude Opus 5 System Card, plus Artificial Analysis, Vals AI, Epoch, Cursor and VulcanBench (fetched 2026-10-02).

Agent / tool use:

- GDPval-AA: **1862** (System Card; AA normalized 60.4%) — top of set; AA Briefcase 1720
- Toolathlon-Verified: **80.6%** (Pass@3 87.0%, avg 23.5 turns); MCP Atlas **85.8%** (claim coverage 89.1%)
- Terminal-Bench 2.1 (Vals) **84.6%**; Terminal-Bench 3.0 42.7%
- BrowseComp **90.8%**; DeepSearchQA 95.0%; OSWorld 2.0 70.6%; DRACO 88.6%
- AA Agentic Index 56.2%; AA Harvey LAB 93.5%; AutomationBench 26.0% (weak)

Reasoning / knowledge:

- GPQA-Diamond: **93.2%** (Vals 93.4%); HLE (w tools / no tools): **64.7% / 56.3%**
- ARC-AGI-1 / ARC-AGI-2 / ARC-AGI-3: **97.5% / 90.4% / 30.2%** (System Card)
- AA-LCR 79.3%; MLCR-AA 55.6%; CritPt 29.1%
- IMO 2026: **42/42** (perfect); RiemannBench 60.0/79.0; ArXivMath 90.8/91.3
- Artificial Analysis Intelligence Index **50.8**; Omniscience accuracy 60.9 / hallucination 60.8

Coding:

- SWE-bench Verified: **96%** (Vals 97%); SWE-bench Pro 79.2%; SWE Multilingual 89.5%
- ProgramBench: **93.0%**; LiveCodeBench (Vals) **89.0%**; AA Coding Index **78.0%**
- DeepSWE 68.8%; AA-SciCode 56.4%; VulcanBench v3 87.0 / CII v1 96.4; FrontierSWE v2 52.0%; CursorBench 4.0 46.6%

Multimodal / long context:

- GDP.pdf (tools) 85.5, Chartography (tools) 83.0, AA-MMMU-Pro 84.7, BenchCAD Vision2Code (tools) 0.821; 1M window (BenchLM context "coming soon"; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 95/100.** GDPval-AA 1862, Toolathlon-Verified 80.6%, MCP Atlas 85.8% and Terminal-Bench 2.1 84.6% are frontier; only AutomationBench 26.0% and ApprenticeBench 36% dent an otherwise elite agentic profile.
- **Reasoning: 95/100.** ARC-AGI-2 90.4%, IMO 2026 42/42, GPQA 93.2%, HLE 64.7% and strong RiemannBench/ArXivMath sit at the ceiling; the mid Intelligence Index (50.8) and Omniscience accuracy 60.9% are the only caps.
- **Context window: 96/100.** 1M-token window / 128K output qualifies for the ≥1M tier; long-context retrieval evidence is moderate (AA-LCR 79.3, no ≥98% MRCR), so short of 100.
- **Multimodal: 78/100.** Accepts image + PDF in (GDP.pdf 85.5, MMMU-Pro 84.7) but is text+image/PDF in / text out with no audio or video — the +PDF band (75–90), mid-range.
- **Coding: 96/100.** SWE-bench Verified 96%, ProgramBench 93%, LiveCodeBench 89%, AA Coding Index 78% and VulcanBench CII 96.4% are record-class; only FrontierSWE v2 52.0% and CursorBench 4.0 46.6% are middling.
- **Cost efficiency: 50/100.** Paid $5 / $25 per 1M (between the $3/$15 ≈60 and $10/$50 ≈30 anchors). No free tier. Cost is excluded from Overall.
- **Overall Score: 92/100.** Mean of Tool 95, Reasoning 95, Context 96, Multimodal 78, Coding 96 = 92.0 → 92. Best fit: premier autonomous coding/research agent and the reference pick for deep reasoning where text+image/PDF suffices; add an omni model when audio/video input or non-text output is required.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Claude Opus 5 post and System Card, plus Artificial Analysis, Vals AI, Epoch, Cursor and VulcanBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
