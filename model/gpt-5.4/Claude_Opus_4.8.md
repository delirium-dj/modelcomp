# GPT 5.4 — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-5.4`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4
- **Short description:** OpenAI's GPT-5.4 reasoning model — strong tool use and agentic coding. Top use case: general agentic coding and reasoning (prior gen to 5.5/5.6).
- **Provider / access:** OpenAI API (`gpt-5.4`); OpenCode Zen `opencode/gpt-5.4`.
- **Release / knowledge:** GPT-5.4 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.4`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1.05M and AA-LCR runs long — **meta.json "128K" understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; MMMU-Pro 81.2% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price found. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **98.9%**; OSWorld-Verified **75%**; MCP Atlas **70.6%**; Terminal-Bench 2.0 **75.1%**; BrowseComp **82.7%**
- Claw-Eval **60.3%**; DeepSearchQA **73.6%**; CyberGym **79.0%**; GDPval-AA **1307 Elo**; ApprenticeBench 11%

Reasoning / knowledge:

- GPQA Diamond **92.8%**; HLE **52.1%** (w/ tools) / **39.8%** (w/o); ARC-AGI-2 **74.0%**; AA-LCR **82.0%**; AA Intelligence Index **39.0**; CritPt **23.4%**

Coding:

- LiveCodeBench Pro **87.5%**; SWE-bench Pro **57.7%**; React Native Evals **85.3%**; Vibe Code Bench **67.42%**; AA Coding Index **71.0%**

Multimodal:

- MMMU-Pro **81.2%**; CharXiv **82.8%**; ScreenSpot Pro **85.4%**; MedXpertQA (MM) **77.1%**

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-bench 98.9%, OSWorld-Verified 75%, BrowseComp 82.7%, DeepSearchQA 73.6%; GDPval 1307 and ApprenticeBench 11% cap it.
- **Reasoning: 82/100.** GPQA-D 92.8%, HLE 52.1% (tools), ARC-AGI-2 74%, AA-LCR 82%; AA Index 39 and CritPt 23.4% cap it.
- **Context window: 93/100.** 1.05M (BenchLM) with AA-LCR 82% (meta's 128K understated).
- **Multimodal: 66/100.** Image-in (MMMU-Pro 81.2%, ScreenSpot Pro 85.4%), text-only out — image-input tier.
- **Coding: 82/100.** LiveCodeBench Pro 87.5%, React Native 85.3%, Vibe Code 67.42%, Coding Index 71%; SWE-bench Pro 57.7% caps it.
- **Cost efficiency: 62/100.** No verified public price; scored provisionally.
- **Overall Score: 80.6/100.** Half-up mean of the five quality dims (80/82/93/66/82). A solid prior-gen agentic/reasoning GPT; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.4 launch, BenchLM, Artificial Analysis, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
