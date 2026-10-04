# Qwen 3.7 Plus — findings by Claude Opus 4.8

- Source: Alibaba (`opencode/qwen-3.7-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's Qwen 3.7 Plus — multimodal agent-intelligence model with 1M context, strong vision/video and multilingual coverage. Top use case: cheap multimodal agentic and multilingual work.
- **Provider / access:** Alibaba Cloud (`qwen3.7-plus`); OpenCode Zen `opencode/qwen-3.7-plus`.
- **Release / knowledge:** Qwen 3.7 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.7-plus`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M and MRCRv2 runs long — **meta.json "128K" is understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; launch benchmarks include video/image (Video-MME 88%, VideoMMMU 85.4%) — **meta.json modality is understated; flag for verification.**
- **Pricing (as of 2026-10-03):** no exact public price verified; Qwen Plus tier is low-cost. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **93%**; MCP Atlas **73.2%**; OSWorld-Verified **73.3%**; AndroidWorld **81.0%**; BFCL v4 **72.9%**
- Claw-Eval **62.7%**; QwenWebBench **1536**; Terminal-Bench 2.0 **70.3%**; GDPval-AA **886 Elo**; AA Agentic Index **19.7%**

Reasoning / knowledge:

- GPQA Diamond **90.3%**; MMLU-Pro **88.5%**; MMLU-Redux **94.5%**; HMMT Feb 2026 **92.9%**; IMOAnswerBench **86.0%**
- MRCRv2 **91.7%**; AA-LCR **73.0%**; HLE **34.7%**; AA Intelligence Index **25.2**; CritPt **9.1%**

Coding:

- LiveCodeBench **89.6%**; SWE-bench Verified **77.7%**; SWE-bench Pro **57.6%**; SWE Multilingual **75.8%**; AA Coding Index **55.9%**; SciCode **51.3%**

Multimodal / long context:

- MMMU-Pro **79%**; MathVision **90.3%**; Video-MME **88.0%**; VideoMMMU **85.4%**; OmniDocBench 1.5 **91.4%**; RealWorldQA **86.9%**; ScreenSpot Pro **79.0%**

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 93%, MCP Atlas 73.2%, OSWorld-Verified 73.3%, AndroidWorld 81%; dragged by GDPval 886, AA Agentic Index 19.7% and OSWorld 2.0 2.8%.
- **Reasoning: 80/100.** GPQA-D 90.3%, MMLU-Redux 94.5%, HMMT 92.9%, MRCRv2 91.7%; AA Index 25.2 and CritPt 9.1% cap the top.
- **Context window: 94/100.** 1M total with MRCRv2 91.7% and AA-LCR 73%.
- **Multimodal: 88/100.** Image+video in (Video-MME 88%, VideoMMMU 85.4%, OmniDocBench 91.4%), text out — broad vision/video.
- **Coding: 82/100.** LiveCodeBench 89.6%, SWE-bench Verified 77.7%, SWE Multilingual 75.8%; Coding Index 55.9% caps it.
- **Cost efficiency: 82/100.** No exact verified price; Qwen Plus is a low-cost tier. Scored provisionally.
- **Overall Score: 84.4/100.** Half-up mean of the five quality dims (78/80/94/88/82). A cheap multimodal/multilingual agentic model; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Alibaba Cloud Qwen3.7-Plus launch benchmarks, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
