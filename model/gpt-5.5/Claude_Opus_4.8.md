# GPT-5.5 — findings by Claude Opus 4.8

- Source: OpenAI (`openai/gpt-5.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's GPT-5.5 base reasoning model — strong tool use, coding, and long-context reasoning. Top use case: general agentic coding and reasoning at the GPT-5.5 standard tier.
- **Provider / access:** OpenAI API `openai/gpt-5.5` (Responses API). No Zen Free ID.
- **Release / knowledge:** GPT-5.5 generation (2026); knowledge cutoff not published.
- **IDs:** `openai/gpt-5.5` (no Free ID).
- **Context window:** curated `meta.json` lists "no verified public value"; BenchLM reports the GPT-5.5 family at 1M, and MRCR v2 is reported to 128K–256K — **meta.json needs a verified value; orchestrator should update.**
- **Modalities:** `meta.json` lists "no verified public matrix"; MMMU-Pro 81.2% evidences image input (text+image in, text out) — **flag for meta.json verification.**
- **Pricing (as of 2026-10-03):** no verified public price found. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **98%**; OSWorld-Verified: **78.7%**; MCP Atlas: **75.3%**; Terminal-Bench 2.0: **82%**
- BrowseComp **84.4%**; Toolathlon **55.6%**; CyberGym **81.8%**; GDPval-AA **1396 Elo**; AA Agentic Index **37.3%**

Reasoning / knowledge:

- GPQA Diamond: **93.6%**; HLE **52.2%** (w/ tools) / **41.4%** (w/o); MMLU-Pro **88.1%** (Vals)
- ARC-AGI-2 **85%**; AA-LCR **84.3%**; MRCR v2 128K–256K **87.5%**; AA Intelligence Index **38.4**; CritPt **27.1%**; FrontierMath legacy **51.7%**
- AA-Omniscience Hallucination Rate **89.0%** (high)

Coding:

- SWE-bench **82.6%** (Vals); LiveCodeBench **85.3%** (Vals); SWE-bench Pro **58.6%**; AA Coding Index **74.9%**
- Terminal-Bench 2.0 **82%**; Vibe Code Bench **69.85%**; FrontierCode 1.1 Main **43.0%**

Multimodal:

- MMMU-Pro **81.2%** (83.2% w/ Python); AA-MMMU-Pro **79.9%**

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-bench 98%, OSWorld-Verified 78.7%, MCP Atlas 75.3%, BrowseComp 84.4%; GDPval 1396 and AA Agentic Index 37.3% keep it mid-upper.
- **Reasoning: 86/100.** GPQA-D 93.6%, ARC-AGI-2 85%, AA-LCR 84.3%, MMLU-Pro 88.1%; AA Index 38.4, 89% hallucination rate cap it.
- **Context window: 94/100.** MRCR 87.5% at 128K–256K and AA-LCR 84.3% evidence a ~1M window (meta value unverified).
- **Multimodal: 65/100.** Image-in (MMMU-Pro 81.2%), text-only out — image-input tier.
- **Coding: 85/100.** SWE-bench 82.6%, LiveCodeBench 85.3%, Coding Index 74.9%, TB2.0 82%; SWE-bench Pro 58.6% and FrontierCode 43% cap it.
- **Cost efficiency: 65/100.** No verified public price; scored provisionally at the OpenAI standard tier.
- **Overall Score: 83/100.** Half-up mean of the five quality dims (85/86/94/65/85). Solid general agentic/reasoning base; `meta.json` context/modality/pricing fields need verified values.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.5 launch, BenchLM, Artificial Analysis, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
