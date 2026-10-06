# Llama 3.2 Vision Instruct — findings by Claude Opus 4.8

- Source: Meta (`opencode/llama_3.2_vision_instruct`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's Sept-2024 open-weight multimodal Llama (11B & 90B Vision), image+text in, text out, 128K context — a legacy foundational vision-language model. Top use case: cheap self-hosted document/image understanding. (Folder does not specify size; scored to the family, leaning on the 90B profile.)
- **Provider / access:** Llama-license open weights (`meta-llama/Llama-3.2-11B/90B-Vision-Instruct`); OpenCode Zen `opencode/llama_3.2_vision_instruct`.
- **Release / knowledge:** 2024-09; knowledge cutoff Dec 2023.
- **IDs:** `opencode/llama_3.2_vision_instruct` (open weights).
- **Context window:** 128K total.
- **Modalities:** text + image in; text out (stub says text-only — **flag**; this is a Vision model).
- **Pricing (as of 2026-10-03):** free self-host (open weights); low hosted pricing.
- **Architecture:** 11B / 90B dense + vision adapter (open weights).

### Raw benchmarks found

> No BenchLM/AA page at this slug; scored from Meta's official Llama 3.2 release benchmarks (well-documented public figures). 2024-era model — no modern agentic/reasoning-index coverage.

Multimodal (Meta official):

- MMMU (val) **50.7% (11B) / 60.3% (90B)**; DocVQA **88.4% / 90.1%**; ChartQA ~83–85%; AI2D ~91–92%; VQAv2 ~75%

Reasoning / knowledge (text, Meta official):

- MMLU **73% (11B) / 86% (90B)**; GPQA ~32–46%; MATH ~51–68%

Agentic / coding:

- Not a focus of this 2024 release; no modern Terminal-Bench/SWE-bench figures published

### Normalized scores (1–100)

- **Tool use: 25/100.** 2024 release not built for agentic tool loops; no modern agentic benchmarks — weak by 2026.
- **Reasoning: 44/100.** MMLU 73–86% is respectable but 2024-era; GPQA ~32–46% and no reasoning-index place it well below current models.
- **Context window: 55/100.** 128K total.
- **Multimodal: 70/100.** MMMU 50.7–60.3%, DocVQA ~90% — strong document/image understanding for its era; its defining strength.
- **Coding: 28/100.** Not a coding model; minimal published coding ability.
- **Cost efficiency: 90/100.** Free self-host (open weights) plus cheap hosted inference.
- **Overall Score: 44.4/100.** Half-up mean of the five quality dims (25/44/55/70/28). A legacy open vision-language model — multimodal/document understanding carry it; reasoning/agentics/coding are dated. `meta.json` modality needs correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Meta Llama 3.2 release benchmarks; no BenchLM/AA slug located). Figures are Meta's official 11B/90B Vision numbers; normalized 1–100 interpretations, not official vendor scores. Size unspecified in folder — scored to the family.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
