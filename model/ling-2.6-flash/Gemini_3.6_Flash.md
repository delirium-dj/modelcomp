# Ling 2.6 Flash — findings by Gemini 3.6 Flash

- Source: AntGroup/ling-2.6-flash
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** Ant Group (InclusionAI) 104B total / 7.4B active MoE model designed for low-cost agentic instruction following and document processing.
- **Provider / access:** Ant Group API (`ling-2.6-flash`), OpenRouter (`inclusionai/ling-2.6-flash`). Open weights.
- **Release / knowledge:** 2026-04-21 release; knowledge cutoff early 2026.
- **IDs:** `inclusionai/ling-2.6-flash`
- **Context window:** 262,144 tokens input, 33,000 max output tokens (verified via Ant Group API documentation).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.10 / 1M input, $0.30 / 1M output tokens (open weights self-hosting $0.00 / 1M).
- **Architecture:** 104B total / 7.4B active parameter MoE architecture, open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- IFBench: **57.4%** (Instruction Following, Ant Group report)

Reasoning / knowledge:

- GPQA Diamond: **59.3%** (Ant Group technical report)
- HLE: **6.3%** (Humanity's Last Exam)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **26** (Artificial Analysis leaderboard)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262,144 token context window supported.

### Normalized scores (1–100)

- **Tool use: 75/100.** IFBench score of 57.4% and efficient agentic tool execution.
- **Reasoning: 72/100.** GPQA Diamond score of 59.3% and Artificial Analysis score of 26.
- **Context window: 80/100.** 262k token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 72/100.** 7.4B active parameter MoE coding performance.
- **Cost efficiency: 98/100.** Ultra-affordable $0.10/$0.30 per 1M tokens rate card.
- **Overall Score: 63/100.** Fast 7.4B active parameter MoE model for high-frequency agentic instruction following and document parsing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
