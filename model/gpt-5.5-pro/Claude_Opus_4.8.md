# GPT 5.5 Pro — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-5.5-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's reasoning-maximized "Pro" variant of GPT-5.5 — extended-compute deliberation for the hardest reasoning, math, and research tasks. Shares the GPT-5.5 base model; Pro runs it at maximum reasoning effort.
- **Provider / access:** OpenAI API (Responses API, `gpt-5.5-pro`); OpenCode Zen `opencode/gpt-5.5-pro`.
- **Release / knowledge:** GPT-5.5 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.5-pro` (no verified Free ID).
- **Context window:** curated `meta.json` lists 128K total; BenchLM lists the GPT-5.5 family at 1M, and MRCR v2 is reported to 128K–256K — **meta.json "128K total" appears understated; orchestrator should verify.**
- **Modalities:** text in/out per `meta.json`; the GPT-5.5 base is text+image in (MMMU-Pro 81.2%), so Pro likely accepts image input too — **flagged for meta.json verification.**
- **Pricing (as of 2026-10-03):** no verified public price found for the Pro tier; OpenAI "Pro" reasoning tiers are premium (extended compute). Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Pro-specific (OpenAI launch / ARC Prize / Epoch / AA):

- BrowseComp: **90.1%** (Pro; base 84.4%)
- HLE: **57.2%** (w/ tools) / **43.1%** (w/o tools)
- CritPt: **30.6%**; FrontierMath legacy **52.4%** (v2 T1–3 51.0%, T4 39.6%)
- ARC-AGI-1 **95.0%** / ARC-AGI-2 **84.2%** (ARC Prize)

GPT-5.5 family (base variant — proxy for coding/tool/multimodal, labeled):

- Agent/tool: τ²-bench **98%**, OSWorld-Verified **78.7%**, MCP Atlas **75.3%**, Terminal-Bench 2.0 **82%**, Toolathlon **55.6%**, GDPval-AA **1396 Elo**, AA Agentic Index **37.3%**
- Coding: SWE-bench **82.6%** (Vals), LiveCodeBench **85.3%** (Vals), SWE-bench Pro **58.6%**, AA Coding Index **74.9%**, Vibe Code Bench **69.85%**, FrontierCode 1.1 **43.0%**
- Reasoning/knowledge: GPQA-D **93.6%**, MMLU-Pro **88.1%** (Vals), AA-LCR **84.3%**, MRCR v2 128K–256K **87.5%**, AA Intelligence Index **38.4**
- Multimodal: MMMU-Pro **81.2%** (83.2% w/ Python), OfficeQA Pro **54.1%**, AA-MMMU-Pro **79.9%**

### Normalized scores (1–100)

- **Tool use: 86/100.** GPT-5.5 family tool use is excellent (τ²-bench 98%, OSWorld-Verified 78.7%, MCP Atlas 75.3%, BrowseComp 90.1% for Pro); GDPval 1396 and Agentic Index 37.3% keep it below the very top.
- **Reasoning: 90/100.** Pro's reasoning edge is clear: HLE 57.2% (tools), FrontierMath 52.4%, CritPt 30.6%, ARC-AGI-2 84.2%, GPQA-D 93.6%. Capped by AA Index 38.4 and ARC-AGI-3 ~0.4% (family).
- **Context window: 88/100.** MRCR 87.5% at 128K–256K and AA-LCR 84.3% evidence a large window (family listed 1M); scored on the verified ≥256K+ evidence, not the possibly-stale 128K meta.
- **Multimodal: 65/100.** Image-in via the GPT-5.5 base (MMMU-Pro 81.2%), text-only out, no audio/video — image-input tier.
- **Coding: 86/100.** SWE-bench 82.6%, LiveCodeBench 85.3%, Coding Index 74.9%, Terminal-Bench 2.0 82%; SWE-bench Pro 58.6% and FrontierCode 43% cap it.
- **Cost efficiency: 40/100.** No verified public Pro price; premium extended-compute tier scored provisionally on OpenAI Pro-tier norms.
- **Overall Score: 83/100.** Half-up mean of the five quality dims (86/90/88/65/86). Best when deep reasoning/math/research justifies Pro-tier compute; use base GPT-5.5 or a cheaper model for routine agentic/coding volume.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI launch post, BenchLM GPT-5.5 Pro + GPT-5.5 base, Artificial Analysis, Vals AI, ARC Prize, Epoch AI). Coding/tool/multimodal use GPT-5.5 base as a labeled family proxy where Pro-specific numbers are unpublished. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
