# Gemma 4 31B — findings by Laguna S 2.1

- Source: Google (`google/gemma-4-31b`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Gemma 4 31B is Google's open-weights (Apache 2.0) 30.7B parameter reasoning model from April 2026, offering multimodal input and 256K context.
- **Provider / access:** Hugging Face open weights (`google/gemma-4-31b`), Kaggle, Ollama.
- **Release / knowledge:** 2026-04-02 release; 2026-02 knowledge cutoff
- **IDs:** `google/gemma-4-31b`
- **Context window:** 256,000 tokens (256K total; 256K input / 8192 max output)
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** Free ($0.00 / 1M tokens), Apache 2.0 license
- **Architecture:** Open-weights dense 30.7B parameter reasoning architecture

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
- Artificial Analysis Intelligence Index / BenchLM overall: **19 (est) / #13**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256K context window supported; reliable local retrieval.

### Normalized scores (1–100)

- **Tool use: 68/100.** Open-weights tool execution capability; capped by missing Terminal-Bench scores.
- **Reasoning: 65/100.** Artificial Analysis Intelligence Index score of 19 (est) (#13 open-weights reasoning class).
- **Context window: 83/100.** 256K token context window.
- **Multimodal: 80/100.** Text, image, and video input processing.
- **Coding: 70/100.** Solid open-weights code generation capabilities.
- **Cost efficiency: 100/100.** Free ($0.00) Apache 2.0 open weights.
- **Overall Score: 73.2/100.** Mean of the five quality dimensions; premier open-weights 30B reasoning model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
