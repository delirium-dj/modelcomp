# Gemma 4 31B IT — findings by Big Pickle

- Source: Google (`gemma-4-31b-it`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google's open weights 31B instruction-tuned model with strong reasoning, tool use, and coding capabilities.
- **Provider / access:** Google open weights
- **Release / knowledge:** 2026
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 128K tokens
- **Modalities:** Text in/out only
- **Pricing (as of 2026-09-20):** Free open weights / standard hosting

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool use capabilities for an open-weights model.
- **Reasoning: 84/100.** Solid reasoning across standard benchmarks.
- **Context window: 80/100.** 128K context window.
- **Multimodal: 50/100.** Text-only modalities.
- **Coding: 83/100.** Competent open weights code generation.
- **Cost efficiency: 95/100.** Free open weights.
- **Overall Score: 76/100.** (85+84+80+50+83)/5 = 76.4 -> 76.

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved; this pass found that three of the six scores were factually wrong.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 85 | 62 | **−23** |
| Reasoning | 84 | 76 | **−8** |
| Context window | 80 | 75 | **−5** |
| Multimodal | 50 | 76 | **+26** |
| Coding | 83 | 70 | **−13** |
| Cost efficiency | 95 | 95 | — |
| **Overall** | **76** | **72** | **−4** |

**Why this file needed the most correction: it had no raw benchmarks at all.** The original was written from a one-line model description, and the capability scores were inferred from marketing. BenchLM now carries 30 rows and Google's HF card publishes a first-party table, so the guesses can be replaced with measurements.

**Multimodal was simply wrong: 50 → 76.** Gemma 4 31B is **multimodal** — text, image and video input, text output. The HF card states the family "handles text and image input (with audio supported on E2B, E4B, and 12B)" and that all sizes process video; audio is the only channel the 31B lacks. Measured: **MMMU-Pro 76.9%**, AA-MMMU-Pro **73.4%**, ParseBench **62.40%**. The methodology band for image+video input is 75–90, so 76 replaces a text-only floor that never applied.

**Context was also wrong: 128K → 256K.** The HF card is explicit: "the small models feature a 128K context window, while the medium models support 256K." The 31B is a medium model. Re-scored 80 → 75 on the 200K–500K tier.

**Tool use 85 was unsupported and collapses under measurement: 85 → 62.** Vendor **τ²-bench 76.9%** is decent, but the independent rows are not: **AA Agentic Index 6.7%**, **GDPval-AA 5.9% / 755 Elo**, **AA ITBench 37.3%**, Gert Labs **35.26%**. A 31B open model with no terminal/browser evidence does not belong in the 85 band.

**Reasoning 84 → 76.** First-party: **GPQA 84.3%**, **AIME 2026 (no tools) 89.2%**, **MMLU-Pro 85.2%**, **HLE 19.5%** (26.5% with search). Independent: AA-GPQA **85.7%**, AA-HLE **23.6%**, **AA Intelligence Index 4.4**. Good for 31B, not 84-good.

**Coding 83 → 70.** **LiveCodeBench v6 80.0%** is genuinely strong, but **SWE-Rebench 41.6%**, **AA Coding Index 43.4%**, AA-SciCode **45.5%** and React Native Evals **75.2%** show the repo-level ceiling.

**License and cost.** **Apache 2.0**, open weights, free to self-host — Cost stays 95. No hosted per-token price is attached to this slug.

**BenchLM composite: 29.24/100, #183 of 1014** — the lowest in this cohort, from 30 rows. The composite is not comparable to this project's normalized scores, but the ranking is directionally consistent with the corrections above.

**Net assessment.** The original overstated the model on every capability axis and understated its modality coverage. Corrected to a competent 31B open model that is strong at single-file code and image/video understanding, weak as an autonomous agent — Overall 76 → 72.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (Google DeepMind Gemma 4 model card and HF card, BenchLM, Artificial Analysis); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-31b-it model card](https://huggingface.co/google/gemma-4-31b-it)
  - [Google — Gemma 4 launch blog](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
  - [Gemma 4 technical report (arXiv:2607.02770)](https://arxiv.org/abs/2607.02770)
  - [BenchLM — Gemma 4 31B](https://benchlm.ai/models/gemma-4-31b)
- Future sources: add a new file next to this one, e.g. `Gemma_4_31B_2.md`, using the same headings.
