# GPT 5.4 Pro — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-5.4-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Pro
- **Short description:** OpenAI's reasoning-maximized "Pro" variant of GPT-5.4 — extended-compute deliberation for hard reasoning/math. Shares the GPT-5.4 base model at maximum reasoning effort.
- **Provider / access:** OpenAI API (Responses API, `gpt-5.4-pro`); OpenCode Zen `opencode/gpt-5.4-pro`.
- **Release / knowledge:** GPT-5.4 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.4-pro` (no verified Free ID).
- **Context window:** curated `meta.json` lists 128K; BenchLM reports the GPT-5.4 family at 1.05M and base AA-LCR runs to long context — **meta.json "128K" is understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; GPT-5.4 base is text+image in (MMMU-Pro 81.2%) — **meta.json modality likely understated; flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public Pro price found; premium extended-compute tier. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Pro-specific (OpenAI launch / ARC Prize / Epoch / Meta chart):

- BrowseComp **89.3%** (base 82.7%); HLE **58.7%** (w/ tools) / **42.7%** (w/o)
- ARC-AGI-2 **83.3%**; CritPt **30.0%**; FrontierMath legacy **50%**; IPhO 2025 Theory **93.5%**; FrontierScience **36.7%**

GPT-5.4 family (base variant — labeled proxy for tool/coding/multimodal):

- Agent/tool: τ²-bench **98.9%**, OSWorld-Verified **75%**, MCP Atlas **70.6%**, Terminal-Bench 2.0 **75.1%**, Claw-Eval **60.3%**, GDPval-AA **1307 Elo**
- Coding: LiveCodeBench Pro **87.5%**, SWE-bench Pro **57.7%**, React Native Evals **85.3%**, Vibe Code Bench **67.42%**, AA Coding Index **71.0%**
- Reasoning/knowledge: GPQA-D **92.8%**, AA-LCR **82.0%**, AA Intelligence Index **39.0** (base), AA-Omniscience Hallucination Rate 91.7%
- Multimodal: MMMU-Pro **81.2%**, CharXiv **82.8%**, ScreenSpot Pro **85.4%**, MedXpertQA-MM **77.1%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Family tool use strong (τ²-bench 98.9%, OSWorld-Verified 75%, MCP Atlas 70.6%, BrowseComp 89.3% Pro); GDPval 1307 and ApprenticeBench 11% cap it.
- **Reasoning: 87/100.** Pro reasoning edge: HLE 58.7% (tools), ARC-AGI-2 83.3%, IPhO 93.5%, FrontierMath 50%, GPQA-D 92.8%; AA Index 39 (base) and CritPt 30% limit the top.
- **Context window: 93/100.** Family 1.05M with base AA-LCR 82% (meta's 128K understated).
- **Multimodal: 65/100.** Image-in via base (MMMU-Pro 81.2%), text-only out — image-input tier.
- **Coding: 83/100.** LiveCodeBench Pro 87.5%, React Native 85.3%, Vibe Code 67.42%, Coding Index 71%; SWE-bench Pro 57.7% caps it.
- **Cost efficiency: 45/100.** No verified public Pro price; premium extended-compute tier. Scored provisionally.
- **Overall Score: 82/100.** Half-up mean of the five quality dims (82/87/93/65/83). Best when deep reasoning/math justifies Pro compute; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.4 launch, BenchLM GPT-5.4 Pro + base, Artificial Analysis, ARC Prize, Epoch AI). Tool/coding/multimodal use GPT-5.4 base as a labeled family proxy where Pro-specific numbers are unpublished. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
