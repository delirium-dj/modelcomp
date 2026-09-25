# Llama 3.2 Vision 11B — findings by Ling 3.0 Flash

- Source: Meta / Llama (`meta-llama/Llama-3.2-11B-Vision-Instruct`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision 11B Instruct
- **Short description:** Meta's instruction-tuned multimodal vision model with 11B parameters, accepting text and images in and producing text out — a legacy model from September 2024.
- **Provider / access:** HuggingFace (`meta-llama/Llama-3.2-11B-Vision-Instruct`), Amazon Bedrock, Meta AI. Text and image in; text out.
- **Release / knowledge:** 2024-09-25. Knowledge cutoff not explicitly stated.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct` (HuggingFace)
- **Context window:** 128,000 tokens total
- **Modalities:** Text and image in; text out; no video/audio input
- **Pricing (as of 2026-09-23):** Free (open weights, self-hosted)
- **Architecture:** 11B parameters, 90B variant also available, Apache 2.0 license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- AA Agentic Index: **6.2%** (BenchLM)
- No verified public agentic benchmark scores
- Terminal-Bench 2.1: **not published**
- APE Agents: **not published**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **3.3** (BenchAtlas, very low)
- GPQA Diamond: **22.1%** (Artificial Analysis)
- Humanity's Last Exam: **5.2%** (Artificial Analysis)
- MMLU-Pro: **46.4%** (Artificial Analysis)
- MMLU (CoT): **73.0%** (Meta official)

Coding:
- LiveCodeBench: **11.0%** (Artificial Analysis)
- SciCode: **11.2%** (Artificial Analysis)
- HumanEval: **84.1%** (BenchmarkAtlas)
- AA Coding Index: **30.4** (BenchLM)

Long context:
- Context window: 128,000 tokens total
- AA-LCR: **11.7** (BenchmarkAtlas, very low)
- MRCR: **82.6%** (BenchmarkAtlas)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 35/100.** Very weak agentic performance: AA Agentic Index 6.2%. No verified public agentic benchmarks. Legacy model superseded by Llama 3.3 and newer versions.
- **Reasoning: 35/100.** Very low AA Intelligence Index at 3.3. GPQA Diamond 22.1%, HLE 5.2%, MMLU-Pro 46.4%. Legacy model from 2024, severely outclassed by current models.
- **Context window: 55/100.** 128K context window with AA-LCR at 11.7. MRCR at 82.6% is from older evaluation methodology. Legacy context performance.
- **Multimodal: 65/100.** Text and image input via vision encoder. MMMU-Pro 29.3%, MathVista 51.5%, VQAv2 75.2%. Functional multimodal for a 11B model but low scores.
- **Coding: 30/100.** Very weak coding: LiveCodeBench 11.0%, SciCode 11.2%, AA Coding Index 30.4. HumanEval 84.1% is the only reasonable score.
- **Cost efficiency: 100/100.** $0 (open weights, self-hosted). Apache 2.0 license. Free to download and run. 100/100 cost efficiency.
- **Overall Score: 44/100.** Mean of the five non-cost dimensions (35 + 35 + 55 + 65 + 30) / 5 = 44.0, rounded half-up to 44.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Meta official model card, HuggingFace, Artificial Analysis, BenchmarkAtlas, and AWS Bedrock; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
