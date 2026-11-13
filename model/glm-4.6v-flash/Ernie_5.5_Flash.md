# GLM-4.6V-Flash — findings by Ernie 5.5 Flash

- Source: Z.ai/GLM-4.6V-Flash (`glm-4.6v-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V-Flash (the lightweight 9B member of the GLM-4.6V vision series; the 106B flagship is a separate model)
- **Short description:** Z.ai's open-weights vision-language model (released 2025-12-08) built around a 9B language backbone, optimized for local/edge deployment and low-latency vision tasks — document understanding, visual reasoning, GUI/frontend replication, and native multimodal function calling.
- **Provider / access:** Z.ai Open Platform (`glm-4.6v-flash`), Hugging Face (`zai-org/GLM-4.6V-Flash`, 10B params, MIT), Novita and other providers; vLLM / SGLang / transformers local serving.
- **Release / knowledge:** 2025-12-08; knowledge cutoff not published.
- **IDs:** `glm-4.6v-flash`, `zai-org/GLM-4.6V-Flash`.
- **Context window:** 131,072 tokens (128K trained); max output 32,768.
- **Modalities:** text, image and video in; text out; native function calling; interleaved image-text generation; reasoning (thinking mode).
- **Pricing (as of 2026-11-13):** $0 per token — MIT open weights; free local inference (community runs ~55 tok/s peak).
- **Architecture:** GLM-V family VL model, 10B params (9B language backbone + vision encoder), MIT license; GLM-4.5V/4.1V-Thinking lineage (arXiv:2507.01006).

### Raw benchmarks found

> Independent leaderboard rows (Village LLM Atlas / WorldVQA official table, reported 2026-01-28) plus HF eval-results rows (LongShot-Bench, ExtractBench). The vendor's own chart covers the 106B flagship, not this Flash member.

Agent / tool use:

- ExtractBench (structured extraction, vLLM, 64K output budget): **45.19 mean** (HF eval-results)
- Native multimodal function calling documented (vision-driven tool use); no agentic benchmark row (TB2.1/Tau2/Claw) for this ID

Reasoning / knowledge:

- LongShot-Bench (video, rubric 0–100): **33.82 overall**; core perception **26.56**; reasoning **38.53** (HF eval-results)
- GPQA / MMLU-Pro / HLE: no verified public score found

Coding:

- No verified coding benchmark row found (vendor positions it for frontend replication from screenshots, not code benchmarks)

Long context:

- 128K trained; no MRCR / RULER / GraphWalks figure published.

Multimodal (the model's core):

- WorldVQA: Not-Attempted **0.1** (rank 4/15); People F-score **8.2** (5/5); Transportation **19.0** (13/15); Sports **20.4** (14/15); Correct-given-attempted **14.8** (15/15 — last place) — i.e. near-total refusal/failure on real-world video QA
- Vision capabilities documented by vendor (MMBench/MathVista/OCRBench-class claims) only for the 106B sibling — not transferable.

### Normalized scores (1–100)

- **Tool use: 45/100.** ExtractBench 45.19 is mid; native multimodal function calling is documented but unmeasured. The WorldVQA refusal pattern (0.1 "not attempted") also suggests weak real-world tool-grounded behavior. Capped by missing agentic rows.
- **Reasoning: 40/100.** LongShot reasoning 38.53/100 and core perception 26.56/100 are weak independent rows; no GPQA/MMLU evidence exists. The vendor itself notes "pure text QA has significant room for improvement."
- **Context window: 85/100.** 128K trained — tier 100K–200K band; no retrieval figure published.
- **Multimodal: 35/100.** This is a vision-first model, but the only independent rows (WorldVQA) are near-failure: 0.1 not-attempted, 8.2–20.4 F-scores, last place on correct-given-attempted. The vendor's SOTA claims are for the 106B flagship. Capped by the measured WorldVQA collapse.
- **Coding: 30/100.** No coding benchmark row; the frontend-replication use case is documented but unscored. Score reflects absence of evidence for a non-coding-positioned model.
- **Cost efficiency: 100/100.** $0 — MIT open weights running on local/edge hardware.
- **Overall Score: 47/100.** Best fit for private, low-latency, local vision tasks (document OCR, screenshot understanding) where open weights matter; the independent WorldVQA rows show it is not competitive on hard real-world visual reasoning despite the vendor's flagship-class claims.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (zai-org/GLM-4.6V-Flash Hugging Face model card + HF eval-results rows for LongShot-Bench/ExtractBench, Village LLM Atlas record with WorldVQA official-table rows, Z.ai docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [zai-org/GLM-4.6V-Flash — Hugging Face model card (eval-results rows)](https://huggingface.co/zai-org/GLM-4.6V-Flash)
  - [GLM 4.6V Flash — Village LLM Atlas (WorldVQA rows)](https://atlas.village.dev/models/glm-4-6v-flash)
  - [GLM-4.6V overview — Z.AI docs](https://docs.z.ai/guides/vlm/glm-4.6v)
  - [GLM-4.6V: Open Source Multimodal Models with Native Tool Use — Z.ai blog](https://z.ai/blog/glm-4.6v)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.