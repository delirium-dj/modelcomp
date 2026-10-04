# Qwen3.8-27B — findings by Claude Opus 4.8

- Source: Alibaba (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27B vision-language open-weights model (Apache-2.0) with image/video understanding and strong agentic coding. Top use case: free self-hosted multimodal coding at mid context.
- **Provider / access:** Open weights on HF (`Qwen/Qwen3.8-27B`); various API providers. No Zen Free ID.
- **Release / knowledge:** Qwen 3.8 generation (2026); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-27B` (Apache-2.0 open weights).
- **Context window:** 262,144 native (extensible to 1M with YaRN) (per curated `meta.json`; BenchLM 262K).
- **Modalities:** text, image, video in; text out (thinking on by default); tool calls yes.
- **Pricing (as of 2026-10-03):** open weights (Apache-2.0) — free self-host; API provider pricing varies.
- **Architecture:** dense 27B vision-language, Apache-2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified **84.3%**; Terminal-Bench 2.1 **73.0%**; CoWorkBench **70.7%**; AndroidWorld **81.9%**
- GDPval-AA **1423 Elo**; AA Agentic Index **46.5%**; AA Tau3-Banking **48.0%**; TB4.0 5.6%

Reasoning / knowledge:

- GPQA Diamond **89.2%**; MMLU-Pro **84.3%** (Vals); AA-LCR **82.0%**; AA Intelligence Index **33.7**; HLE **30.8%**; CritPt **5.4%**

Coding:

- SWE-bench **86.0%** (Vals); LiveCodeBench v6 **90.3%**; SWE-bench Pro **61.7%**; VulcanBench v3 **82.6%**; AA Coding Index **68.1%**; DeepSWE **42.2%**

Multimodal:

- MathVision **90.0%**; CharXiv **90.2%**; OmniDocBench 1.5 **91.1%**; RealWorldQA **85.9%**; AA-MMMU-Pro **76.3%**

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld-Verified 84.3%, AndroidWorld 81.9%, TB2.1 73%, GDPval 1423; TB4.0 5.6% caps the top.
- **Reasoning: 77/100.** GPQA-D 89.2%, AA-LCR 82%, MMLU-Pro 84.3%; AA Index 33.7, CritPt 5.4% and negative Omniscience cap it.
- **Context window: 90/100.** 262K native, extensible to 1M (YaRN), AA-LCR 82%.
- **Multimodal: 86/100.** Image+video in (MathVision 90%, CharXiv 90.2%, OmniDocBench 91.1%), text out.
- **Coding: 82/100.** SWE-bench 86%, LiveCodeBench v6 90.3%, SWE-bench Pro 61.7%; DeepSWE 42.2% is the floor.
- **Cost efficiency: 90/100.** Free self-host (Apache-2.0 open weights); cheap provider APIs.
- **Overall Score: 83/100.** Half-up mean of the five quality dims (80/77/90/86/82). A strong free open-weights multimodal coding model; reasoning depth is the weak point.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Qwen3.8-27B HF model card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
