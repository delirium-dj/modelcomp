# Claude Opus 4.8 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-opus-4.8`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's 4.8-generation Opus reasoning model — advanced multi-step execution, deep code comprehension, long-horizon thinking; now also the sanctioned cyber-task fallback for the Claude 5.x safeguards. Top use case: agentic coding and reasoning.
- **Provider / access:** Anthropic Claude Platform `claude-opus-4-8` (Messages API); AWS/GCP/Azure. No Zen Free ID.
- **Release / knowledge:** Claude Opus 4.x generation (2026); knowledge cutoff not published.
- **IDs:** `anthropic/claude-opus-4.8` (no Free ID).
- **Context window:** curated `meta.json` lists 200K; BenchLM reports 1M and AA-LCR runs long — **meta.json "200K" is understated; orchestrator should verify.**
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** paid Opus tier; no exact per-token price verified for 4.8. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **94.4%**; DeepSearchQA **93.1%**; OSWorld-Verified **83.4%**; MCP Atlas **82.2%**; BrowseComp **84.3%**
- GDPval-AA **1593 Elo**; Toolathlon **59.9%**; Terminal-Bench 2.1 **74.6%**; AA Agentic Index **42.6%**; TB3.0 21.1%

Reasoning / knowledge:

- GPQA Diamond **93.6%**; HLE **57.9%** (w/ tools) / **49.8%** (w/o); USAMO 2026 **96.7%**
- ARC-AGI-2 **72.1%**; AA-LCR **77.7%**; MMLU-Pro **89.6%** (Vals); AA Intelligence Index **41.8**; CritPt **20.9%**

Coding:

- SWE-bench Verified **88.6%**; SWE-bench Pro **69.2%**; SWE Multilingual **84.4%**; LiveCodeBench **87.8%** (Vals)
- AA Coding Index **74.3%**; CursorBench 3.2 **62.3%**; FrontierCode 1.1 Main **46.5%**

Multimodal:

- CharXiv **89.9%**; ScreenSpot Pro **87.9%**; OfficeQA Pro **66.2%**; SWE Multimodal **38.4%**

### Normalized scores (1–100)

- **Tool use: 88/100.** τ²-bench 94.4%, OSWorld-Verified 83.4%, MCP Atlas 82.2%, DeepSearchQA 93.1%, GDPval 1593; TB3.0 21.1% caps the top.
- **Reasoning: 88/100.** GPQA-D 93.6%, HLE 57.9% (tools), USAMO 96.7%, ARC-AGI-2 72.1%, MMLU-Pro 89.6%; AA Index 41.8 and CritPt 20.9% cap it.
- **Context window: 94/100.** ~1M window with AA-LCR 77.7% (meta's 200K understated).
- **Multimodal: 68/100.** Image-in (CharXiv 89.9%, ScreenSpot Pro 87.9%), text-only out — image-input tier.
- **Coding: 89/100.** SWE-bench Verified 88.6%, SWE-bench Pro 69.2%, SWE Multilingual 84.4%, LiveCodeBench 87.8%.
- **Cost efficiency: 40/100.** Paid Opus tier; no exact 4.8 price verified. Scored provisionally at premium Opus norms.
- **Overall Score: 85.4/100.** Half-up mean of the five quality dims (88/88/94/68/89). A strong agentic-coding/reasoning Opus; image-only multimodal caps Overall and `meta.json` context needs correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Claude Opus 4.8 system card, Artificial Analysis, BenchLM, Vals AI, ARC Prize, Epoch AI). Independent normalized read of my own namesake model; scores are 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
