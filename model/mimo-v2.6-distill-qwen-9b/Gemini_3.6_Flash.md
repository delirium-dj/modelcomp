# MiMo v2.6 Distill Qwen 9B — findings by Gemini 3.6 Flash

- Source: Xiaomi / Qwen (`mimo-v2.6-distill-qwen-9b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Distill Qwen 9B
- **Short description:** Open-weights 9B parameter distilled model released by Xiaomi for local agentic RL research and edge software execution based on Qwen3.5-9B.
- **Provider / access:** Open-weights Hugging Face (`xiaomi/mimo-v2.6-distill-qwen-9b`), Ollama, LM Studio.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff 2026-04.
- **IDs:** `xiaomi/mimo-v2.6-distill-qwen-9b`
- **Context window:** 8,192 tokens input/output (verified via Xiaomi release documentation).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.00 / $0.00 per 1M tokens (Free open weights).
- **Architecture:** 9B parameter dense transformer SFT on Qwen3.5-9B; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.4%** (Xiaomi local benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **22** (Artificial Analysis 9B open-weights index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **48.2%** (DeepSWE 9B baseline)

Long context:

- 8,192 token context window with reliable local retrieval.

### Normalized scores (1–100)

- **Tool use: 60/100.** Capable local tool calling for a 9B open-weights model.
- **Reasoning: 62/100.** Solid distilled reasoning baseline for edge hardware.
- **Context window: 60/100.** 8,192 token context window.
- **Multimodal: 15/100.** Text-only input and output (capped at 15 for text-only).
- **Coding: 62/100.** DeepSWE 9B baseline score of 48.2%.
- **Cost efficiency: 100/100.** Free open-weights model ($0.00 per 1M tokens).
- **Overall Score: 52/100.** Efficient open-weights 9B model for local developer workstations and agent research.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
