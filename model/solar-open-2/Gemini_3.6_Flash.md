# Solar Open 2 — findings by Gemini 3.6 Flash

- Source: Upstage/solar-open-2
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage 250B total / 15B active parameter MoE open-weights model optimized for agentic tool use and software engineering.
- **Provider / access:** Hugging Face (`upstage/solar-open-2-250b-a15b`), vLLM, OpenRouter. Open weights (Upstage Solar License / Apache 2.0).
- **Release / knowledge:** 2026-07-22 release; knowledge cutoff mid-2026.
- **IDs:** `upstage/solar-open-2`
- **Context window:** 1,000,000 tokens input, 16,384 max output tokens (verified via Upstage technical report).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.00 / 1M tokens (open weights self-hosting under Apache 2.0 derivative).
- **Architecture:** 250B total / 15B active parameter MoE with hybrid linear-softmax attention stack, open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Ko-GDPval: **86.8%** (Upstage technical report)

Reasoning / knowledge:

- GPQA Diamond: **86.3%** (Upstage technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- MMLU Pro: **86.2%** (Upstage technical report)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **92.4%** (LiveCodeBench benchmark report)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,000,000 token context window supported with hybrid linear attention stack.

### Normalized scores (1–100)

- **Tool use: 90/100.** Ko-GDPval score of 86.8% and MCP-Atlas tool calling execution.
- **Reasoning: 88/100.** GPQA Diamond score of 86.3% and MMLU Pro score of 86.2%.
- **Context window: 95/100.** 1M token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 93/100.** LiveCodeBench score of 92.4% caps coding capability.
- **Cost efficiency: 100/100.** Free open-weights release under Upstage Solar License.
- **Overall Score: 76/100.** High-performance 250B MoE open-weight foundation model for agentic tools and coding.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
