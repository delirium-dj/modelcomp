# GPT-5.1 Codex - findings by GPT 5.6 Terra

- Source: OpenAI/gpt-5.1-codex
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's proprietary GPT-5.1 variant optimized for agentic coding in Codex and similar environments. Artificial Analysis marks its high-reasoning profile deprecated, while OpenAI's model documentation still lists the mutable `gpt-5.1-codex` snapshot.
- **Provider / access:** OpenAI Responses API only (`v1/responses`); curated OpenCode route `opencode/gpt-5.1-codex`. The official model page lists function calling, web search, structured outputs, image input, and prompt caching.
- **Release / knowledge:** 2025-11-13 release date (Artificial Analysis and Vals); 2024-09-30 knowledge cutoff (OpenAI).
- **IDs:** `gpt-5.1-codex`; OpenCode `opencode/gpt-5.1-codex` (no Zen Free ID).
- **Context window:** 400,000 tokens total and 128,000 maximum output, documented by OpenAI.
- **Modalities:** Text and image input; text output; reasoning, function calling, web search, structured outputs, and prompt caching through the Responses API.
- **Pricing (as of 2026-10-18):** $1.25 input, $0.125 cached input, and $10.00 output per 1M tokens (OpenAI); paid only.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter counts.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **83%** (Artificial Analysis result indexed by BenchLM: https://benchlm.ai/models/gpt-5-1-codex).
- Gert Labs: **49.68%** (Gert Labs ranking, indexed by BenchLM: https://benchlm.ai/models/gpt-5-1-codex).
- JobBench: **26.2%** (JobBench paper result, indexed by BenchLM: https://benchlm.ai/models/gpt-5-1-codex).

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis, indexed by BenchLM: https://benchlm.ai/models/gpt-5-1-codex).
- HLE: **25.7%** (Artificial Analysis, indexed by BenchLM: https://benchlm.ai/models/gpt-5-1-codex).
- AA-LCR: **69.3%** (Artificial Analysis, indexed by BenchLM: https://benchlm.ai/models/gpt-5-1-codex).
- CritPt: **5.7%** (Artificial Analysis, indexed by BenchLM: https://benchlm.ai/models/gpt-5-1-codex).
- Artificial Analysis Intelligence Index: **23.7** (estimated; Artificial Analysis reports 24 and labels it an estimate: https://artificialanalysis.ai/models/gpt-5-1-codex).
- AA-Omniscience Accuracy / Hallucination Rate: **39.9% / 77.2%** (Artificial Analysis, indexed by BenchLM: https://benchlm.ai/models/gpt-5-1-codex).

Coding:

- LiveCodeBench: **85.55%** (Vals, high reasoning effort, 31/143: https://www.vals.ai/models/openai_gpt-5.1-codex).
- Vibe Code Bench v1.1: **13.12%** (Vals, high reasoning effort, 92/113: https://www.vals.ai/models/openai_gpt-5.1-codex).
- SWE-bench Verified / SWE-Pro: no verified public score found in the reviewed exact-model sources.

Long context:

- AA-LCR: **69.3%** (Artificial Analysis result indexed by BenchLM); no public 400K retrieval evaluation was found in the reviewed sources.

### Normalized scores (1-100)

- **Tool use: 72/100.** Tau2-Bench is strong at 83%, but Gert Labs and JobBench are materially lower and there is no exact-model Terminal-Bench result in the reviewed sources.
- **Reasoning: 68/100.** GPQA Diamond (86.0%) and AA-LCR (69.3%) are solid, while HLE (25.7%), CritPt (5.7%), the estimated 23.7 Intelligence Index, and low Omniscience accuracy cap the score.
- **Context window: 80/100.** The verified 400K window is in the 200K-500K tier; no 400K retrieval measurement supports the top of that tier.
- **Multimodal: 65/100.** Image input earns a multimodal score, but output is text-only and no audio or video support is documented.
- **Coding: 70/100.** LiveCodeBench is high at 85.55%, but Vibe Code Bench is 13.12% and no exact-model SWE-bench result was found.
- **Cost efficiency: 72/100.** $1.25 input is competitive, but $10.00 output per 1M tokens is materially above the $1.25/$4.25 reference tier.
- **Overall Score: 71/100.** `(72 + 68 + 80 + 65 + 70) / 5 = 71`; suitable for long-context coding workflows when its deprecated benchmark status and uneven coding evidence are acceptable.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-18
- Method: Public first-party documentation plus Artificial Analysis, BenchLM, and Vals research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
