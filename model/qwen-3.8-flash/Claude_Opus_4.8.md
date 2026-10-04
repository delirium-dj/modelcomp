# Qwen 3.8 Flash — findings by Claude Opus 4.8

- Source: Alibaba (`opencode/qwen-3.8-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's Qwen 3.8 Flash-tier model — fast multimodal reasoning with 262K+ context. Top use case: cheap multimodal agentic/coding daily driver.
- **Provider / access:** Alibaba Cloud / OpenCode Zen `opencode/qwen-3.8-flash`.
- **Release / knowledge:** Qwen 3.8 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.8-flash` — **an exact "Qwen 3.8 Flash" base listing is not separate on BenchLM; using Qwen3.8-Flash-Next as a labeled family proxy — orchestrator should confirm the tracked variant.**
- **Context window:** curated `meta.json` lists 128K; Qwen 3.8 Flash family reports 262K — **meta.json understated; verify.**
- **Modalities:** `meta.json` lists text in/out; the family is multimodal (image/video in) — **flag for verification.**
- **Pricing (as of 2026-10-03):** low Flash-tier pricing (family). Scored provisionally.
- **Architecture:** open-weight Flash MoE (family).

### Raw benchmarks found

> Qwen3.8-Flash-Next verified numbers (labeled proxy).

Agent / tool use:

- AndroidWorld **84.5%**; CoWorkBench **73.9%**; Toolathlon-Verified **73.5%**; JobBench **55.7%**; GDPval-AA **1648 Elo**; OSWorld 2.0 19.4%

Reasoning / knowledge:

- GPQA Diamond **91.7%**; AA-LCR **79.7%**; HLE **35.9%**; AA Intelligence Index **39.8**; CritPt **11.1%**

Coding:

- LiveCodeBench v6 **91.9%**; SWE Multilingual **81%**; SWE-bench Pro **62.5%**; DeepSWE **58.7%**; AA Coding Index **73.0%**

Multimodal:

- MathVision **90.6%**; CharXiv **90.6%**; RealWorldQA **88.5%**; LVBench **76.6%** (video); AA-MMMU-Pro **79.8%**

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval 1648, AndroidWorld 84.5%, Toolathlon 73.5%; OSWorld 2.0 19.4% caps it.
- **Reasoning: 81/100.** GPQA-D 91.7%, AA-LCR 79.7%, AA Index 39.8; HLE 35.9% and CritPt 11.1% cap it.
- **Context window: 88/100.** 262K (family) with AA-LCR 79.7% (meta's 128K understated).
- **Multimodal: 87/100.** Image+video in (MathVision/CharXiv 90.6%, LVBench 76.6%), text out.
- **Coding: 84/100.** LiveCodeBench v6 91.9%, SWE Multilingual 81%, SWE-bench Pro 62.5%, Coding Index 73%.
- **Cost efficiency: 90/100.** Low Flash-tier pricing; open weights. Scored provisionally.
- **Overall Score: 84.4/100.** Half-up mean of the five quality dims (80/81/88/87/84). A strong cheap multimodal agentic/coding Flash; the exact variant is unconfirmed — `meta.json` context/modality need verification.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Qwen3.8-Flash-Next HF model card, Artificial Analysis, BenchLM). The tracked "Qwen 3.8 Flash" variant is unconfirmed; scores use the Flash-Next family as a labeled proxy. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
