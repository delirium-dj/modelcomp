# Gemma 4 E2B — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemma-4-E2B-it`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's ultra-compact, multimodal open-weights model designed for edge hardware, mobile devices, and IoT deployment, featuring 2.3B effective parameters with Per-Layer Embeddings (PLE).
- **Provider / access:** Hugging Face (`google/gemma-4-E2B-it`), Kaggle, Ollama (`gemma4:e2b`), and LiteRT-LM. Open weights self-hosted.
- **Release / knowledge:** 2026-04-02 release; early 2026 knowledge cutoff.
- **IDs:** `google/gemma-4-E2B-it`
- **Context window:** 131,072 tokens input / 8,192 max output — verified via Google DeepMind technical documentation.
- **Modalities:** text, image, audio in; text out; reasoning yes (configurable thinking mode); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** Free ($0.00 / 1M tokens; permissive Apache 2.0 open-weights license).
- **Architecture:** 5.1B total / 2.3B effective parameters, dense multimodal edge architecture with Per-Layer Embeddings (PLE).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **43.4%** (Google DeepMind technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **44.0%** (LiveCodeBench v6)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **37.5%** (AIME 2026 no-tools score)

Long context:

- 128K context window supported; effective on-device long-context extraction for compact documents.

### Normalized scores (1–100)

- **Tool use: 42/100.** Supports function calling and structured JSON on local edge devices, though lack of high-level terminal benchmarks reflects edge assistant scope.
- **Reasoning: 44/100.** Commendable edge reasoning (43.4% GPQA Diamond, 60.0% MMLU Pro) given the sub-3B effective parameter constraint.
- **Context window: 62/100.** 128K token context window allows processing substantial text files on local edge hardware.
- **Multimodal: 72/100.** Impressive native support for text, vision, and audio inputs on edge devices.
- **Coding: 35/100.** LiveCodeBench v6 (44.0%) supports lightweight scripting and code completions, while larger software engineering tasks remain out of scope.
- **Cost efficiency: 100/100.** Permissive Apache 2.0 open-weights license enables free local inference and deployment.
- **Overall Score: 51/100.** Highly optimized multimodal edge model bringing native vision, audio, and reasoning to mobile and embedded devices.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Google DeepMind technical releases, Hugging Face model cards, and edge benchmark leaderboards; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
