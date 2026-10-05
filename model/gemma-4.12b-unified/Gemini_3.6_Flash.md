# Gemma 4 12B Unified — findings by Gemini 3.6 Flash

- Source: Google/gemma-4.12b-unified
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind open-weights 12B encoder-free unified multimodal model processing text, vision, and audio natively.
- **Provider / access:** Hugging Face (`google/gemma-4-12b-it`), Kaggle, Ollama (`gemma4:12b`). Self-hosted open weights (Apache 2.0).
- **Release / knowledge:** 2026-04-02 release; knowledge cutoff early 2026.
- **IDs:** `google/gemma-4-12b-it`
- **Context window:** 256,000 tokens input, 8,192 max output tokens (verified via Google DeepMind Gemma 4 tech report).
- **Modalities:** text, image, audio in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-05):** $0.00 / 1M tokens (open weights self-hosting under Apache 2.0).
- **Architecture:** 12B total parameters, encoder-free linear patch/waveform projection into embedding space, open-weights.

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
- MMLU Pro: **77.2%** (Google DeepMind official benchmark report)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256,000 token context window supported.

### Normalized scores (1–100)

- **Tool use: 70/100.** Native function calling and tool execution support on open-weight hardware setups.
- **Reasoning: 74/100.** MMLU Pro score of 77.2% anchors reasoning capability.
- **Context window: 80/100.** 256k token context window support.
- **Multimodal: 80/100.** Native processing for text, vision, and audio without separate encoder towers.
- **Coding: 70/100.** Solid workstation coding capability for a 12B parameter model.
- **Cost efficiency: 100/100.** Free open-weights release under Apache 2.0 license.
- **Overall Score: 75/100.** Exceptional efficiency and versatility for consumer workstation deployments.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
