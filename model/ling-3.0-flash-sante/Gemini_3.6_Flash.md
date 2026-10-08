# Ling 3.0 Flash Sante — findings by Gemini 3.6 Flash

- Source: AntGroup/ling-3.0-flash-sante
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** Ant Group (InclusionAI) 124B total / 5.1B active MoE medical domain model tuned for healthcare reasoning and evidence-based retrieval.
- **Provider / access:** OpenRouter (`inclusionai/ling-3.0-flash-sante`), Ant Group API. Chat Completions API.
- **Release / knowledge:** 2026-07-20 release; knowledge cutoff mid-2026.
- **IDs:** `inclusionai/ling-3.0-flash-sante`
- **Context window:** 262,144 tokens input, 16,384 max output tokens (verified via InclusionAI API documentation).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.00 / 1M tokens (free slot on OpenRouter / open weights).
- **Architecture:** 124B total / 5.1B active parameter MoE medical variant, open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- MedScribe / HealthReasoning: **85.0%** (Ant Group technical report)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262,144 token context window supported: **262144 tokens**.

### Normalized scores (1–100)

- **Tool use: 78/100.** Medical workflow tool calling and structured clinical data retrieval.
- **Reasoning: 78/100.** High-fidelity medical knowledge reasoning and evidence-based synthesis.
- **Context window: 80/100.** 262k token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 70/100.** Medical data parsing and domain script synthesis.
- **Cost efficiency: 100/100.** Free open-weights slot ($0.00 / 1M tokens).
- **Overall Score: 64/100.** Specialized 5.1B active parameter MoE model for healthcare workflows and medical evidence retrieval.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
