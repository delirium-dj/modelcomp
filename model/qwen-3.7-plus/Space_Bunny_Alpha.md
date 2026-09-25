# Qwen3.7 Plus — findings by Space Bunny Alpha

- Source: Alibaba Qwen / Qwen3.7 Plus
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus
- **Short description:** Alibaba's cost-effective Qwen3.7 multimodal model for coding, tool use, productivity workflows, and interactive GUI/mobile agents.
- **Provider / access:** Alibaba API; OpenRouter `qwen/qwen3.7-plus` (dated slug `qwen3.7-plus-20260602`). No public open-weight checkpoint was found for the Plus variant.
- **Release / knowledge:** OpenRouter lists 2026-06-03 (canonical slug 2026-06-02); no verified exact knowledge cutoff found.
- **IDs:** `qwen3.7-plus`; OpenRouter `qwen/qwen3.7-plus`.
- **Context window:** 1,000,000 tokens; maximum output 131,072 tokens.
- **Modalities:** Text and image input, text output; reasoning is supported; tools and structured outputs are supported. OpenRouter metadata does not list video input for this exact route, while the broader model description emphasizes image interaction.
- **Pricing (as of 2026-09-25):** OpenRouter lists $0.32 input / $0.064 cached input / $1.28 output per 1M tokens; requests above 256K use higher rates. Artificial Analysis reports $0.40/$1.60 for Alibaba's API.
- **Architecture:** Proprietary; parameter count was not disclosed.

### Raw benchmarks found

> OpenRouter and Artificial Analysis measurements below are for the exact Qwen3.7 Plus route. The model is proprietary and no official open model-card table was found.

Agent / tool use:

- Tau2-Bench Telecom: **93.0%**; IFBench: **78.0%**; Terminal-Bench Hard: **47.0%** (Artificial Analysis/OpenRouter).
- Artificial Analysis Agentic Index: **17.5**; Coding Index: **55.9** (OpenRouter benchmark summary).
- GDPval-AA: **12.8%** (Artificial Analysis/OpenRouter).

Reasoning / knowledge:

- GPQA Diamond: **90.0%**; HLE: **35.6%**; Intelligence Index: **25.2** (OpenRouter benchmark summary).
- AA-LCR: **73.0%**; CritPt: **9.1%**; AA-Omniscience Accuracy / Non-Hallucination Rate: **22.5% / 72.3%** (OpenRouter summary).

Coding:

- SciCode: **46.1%**; Coding Index: **55.9%**; Terminal-Bench Hard: **47.0%** (Artificial Analysis/OpenRouter).
- No exact public SWE-bench Verified, SWE-bench Pro, or LiveCodeBench score was found.

Long context:

- AA-LCR: **73.0%** with a verified 1M context (Artificial Analysis/OpenRouter).
- No standalone exact-model MRCR/RULER/GraphWalks result was found.

Multimodal:

- Text/image input and text output are verified by OpenRouter metadata.
- No exact-model public visual benchmark score was found.

### Normalized scores (1–100)

- **Tool use: 83/100.** Tau2 Telecom at 93.0% and IFBench at 78.0% show strong tool/instruction performance; Terminal-Bench at 47.0% and Agentic Index at 17.5 limit the rating.
- **Reasoning: 82/100.** GPQA at 90.0% and AA-LCR at 73.0% are strong, while HLE at 35.6%, CritPt at 9.1%, and Intelligence Index at 25.2 cap it.
- **Context window: 98/100.** The 1M context and 73.0% AA-LCR result are near the methodology's top tier.
- **Multimodal: 65/100.** Image input is supported, but no exact public visual benchmark was found.
- **Coding: 77/100.** SciCode at 46.1%, Coding Index at 55.9%, and Terminal-Bench at 47.0% are useful but not frontier-leading; missing SWE-bench evidence limits confidence.
- **Cost efficiency: 89/100.** At $0.32/$1.28 per 1M, with cache pricing and long-context tiers, the model is relatively inexpensive for a 1M-context multimodal proprietary route.
- **Overall Score: 81/100.** A cost-effective long-context multimodal model for interactive agents and productivity workflows, with strong tool metrics but limited public exact-model coding and visual evidence.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: Artificial Analysis measurements and OpenRouter API metadata for the exact Qwen3.7 Plus route; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
