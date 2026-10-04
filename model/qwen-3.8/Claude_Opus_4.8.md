# Qwen 3.8 — findings by Claude Opus 4.8

- Source: Alibaba (`opencode/qwen-3.8`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Qwen 3.8 flagship-generation model. The unqualified "Qwen 3.8" slug is ambiguous between tiers (Max / 27B / Flash); this report uses verified Qwen 3.8-family numbers as a labeled proxy. Top use case: multimodal long-context agentic/coding.
- **Provider / access:** Alibaba Cloud / OpenCode Zen `opencode/qwen-3.8`.
- **Release / knowledge:** Qwen 3.8 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.8` — **unqualified slug; orchestrator should confirm which Qwen 3.8 tier this folder tracks (Max vs 27B).**
- **Context window:** curated `meta.json` lists 128K; the Qwen 3.8 family is 262K–1M — **meta.json understated; verify.**
- **Modalities:** `meta.json` lists text in/out; the Qwen 3.8 family is multimodal (image/video in) — **flag for verification.**
- **Pricing (as of 2026-10-03):** no verified exact price for this slug; Qwen tiers are low-cost. Scored provisionally.
- **Architecture:** proprietary/open depending on tier (family MoE + dense variants).

### Raw benchmarks found

> Qwen 3.8-family verified numbers (labeled proxy; the unqualified "Qwen 3.8" variant is ambiguous). Primary anchor: Qwen 3.8 Max flagship + Qwen3.8-27B open.

Agent / tool use:

- Terminal-Bench 2.1 **86.6%** (Max); OSWorld-Verified **86.1%** (Max) / **84.3%** (27B); AndroidWorld **85.3%** (Max); GDPval-AA Max tier

Reasoning / knowledge:

- GPQA Diamond **92.6%** (Max) / 89.2% (27B); MMLU-Pro **88.6%** (Max); MRCRv2 **92.9%** (Max); AA-LCR **82%**

Coding:

- SWE-bench **85.6%** (Max, Vals); LiveCodeBench **87.9%** (Max); FrontierSWE **73.5%** (Max); SWE-bench Pro **67.7%** (Max)

Multimodal:

- MMMU-Pro **82.3%** (Max); Video-MME **90.4%** (Max); CharXiv **93.5%** (Max); OmniDocBench **92.1%** (Max)

### Normalized scores (1–100)

- **Tool use: 83/100.** Qwen 3.8 family agentics (OSWorld-Verified 84–86%, TB2.1 86.6%, AndroidWorld 85.3%); automation/agentic-index weaknesses in the family cap it.
- **Reasoning: 81/100.** GPQA-D 92.6%, MMLU-Pro 88.6%, MRCRv2 92.9%, AA-LCR 82%; family AA Index is mid.
- **Context window: 94/100.** Family 1M (Max) / 262K–1M (27B) with strong MRCRv2/AA-LCR.
- **Multimodal: 87/100.** Family image+video in with top vision/video (Video-MME 90.4%, CharXiv 93.5%), text out.
- **Coding: 83/100.** SWE-bench 85.6%, LiveCodeBench 87.9%, FrontierSWE 73.5%.
- **Cost efficiency: 82/100.** No verified exact price for this slug; Qwen tiers are low-cost / open. Scored provisionally.
- **Overall Score: 85.6/100.** Half-up mean of the five quality dims (83/81/94/87/83). A strong multimodal long-context agentic/coding generation; **slug is ambiguous and `meta.json` context/modality need confirmation** — treat as family-proxy pending variant resolution.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Qwen 3.8 release benchmarks for Max + 27B, Artificial Analysis, BenchLM, Vals AI). The unqualified "Qwen 3.8" slug is ambiguous; scores use verified Qwen 3.8-family numbers as a labeled proxy and should be re-confirmed once the tracked tier is pinned. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
