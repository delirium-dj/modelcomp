# Gemma 4 31B — findings by GLM 5.3

- Source: Google (`gemma-4-31b`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open-weights Gemma 4 flagship size (31B dense, 256K context) — the largest of the Gemma 4 family (26B-A4B / E4B / E2B / 12B siblings). Top use case: self-hosted multimodal assistant and fine-tuning base.
- **Provider / access:** Hugging Face / Google AI Studio (open weights); **no OpenCode Zen ID** (Zen carries no Gemma models).
- **Release / knowledge:** Gemma 4 generation, late 2025 (exact date not verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** Google `gemma-4-31b` (HF: `google/gemma-4-31b`); no Zen ID, no Free ID — open weights
- **Context window:** 256K tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** open weights (Gemma license) — self-hosting at cost; 31B is single-node deployable; no per-token list price.
- **Architecture:** open weights, dense ~31B parameters (family also ships A4B MoE variants); full spec not published this session.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **59.9%** (BenchLM `gemma-4-31b`)
- GDPval-AA: **755 Elo** (BenchLM; normalized 5.3% — weak)
- AA Agentic Index: **6.7%**; Gert Labs **35.26%** (BenchLM)
- Terminal-Bench / Claw-Eval / MCP-Atlas / Tau3: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (BenchLM; AA harness 85.7% — below the 90% frontier bar)
- HLE: **23.6%** AA harness / **26.5%** w/ tools / **19.5%** w/o tools (BenchLM — weak)
- AA-LCR: **69.7%**; CritPt **1.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **19.0** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **20.0% / 85.0%** (BenchLM — very high hallucination, negative Omniscience Index)
- MMLU-Pro **85.2%**; AA-IFBench **75.6%** (BenchLM)

Coding:

- SWE-Rebench: **41.6%** (BenchLM)
- SciCode / AA-SciCode: **45.5%**; AA Coding Index **43.4%**; React Native Evals **75.2%** (BenchLM)
- SWE-bench Verified / LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 256K window (BenchLM); AA-LCR 69.7%; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- MMMU-Pro **76.9%** (AA 73.4%) (BenchLM); image input per the Gemma 4 family.

### Normalized scores (1–100)

- **Tool use: 48/100.** Tau2 59.9% is decent for a 31B open model, but GDPval 755 and Agentic Index 6.7% are near the bottom of the field.
- **Reasoning: 55/100.** GPQA 84.3% and MMLU-Pro 85.2% are respectable for the size class; HLE ~20–27%, CritPt 1.4%, AA Index 19 and an 85% hallucination rate are weak.
- **Context window: 78/100.** 256K total — high-mid of the 200K–500K band; no retrieval verification.
- **Multimodal: 68/100.** Text+image input with MMMU-Pro 76.9% — good for the class; no audio/video verified.
- **Coding: 45/100.** SWE-Rebench 41.6%, SciCode 45.5% and Coding Index 43.4% all sit far below frontier refs; mainstream SWE harnesses unpublished.
- **Cost efficiency: 92/100.** Open weights at 31B — cheap single-node self-hosting, no per-token fees; among the best local cost profiles.
- **Overall Score: 58.8/100.** (48 + 55 + 78 + 68 + 45) / 5 = 58.8. Best-fit: local multimodal assistant / fine-tune base where data sovereignty matters — not an agent engine.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
