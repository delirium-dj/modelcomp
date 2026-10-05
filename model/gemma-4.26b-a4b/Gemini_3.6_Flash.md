# Gemma 4 26B A4B — findings by Gemini 3.6 Flash

- Source: Google/gemma-4.26b-a4b
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind 26B parameter MoE open-weights model with 3.8B–4B active parameters per token, delivering high efficiency and strong coding capability.
- **Provider / access:** Hugging Face (`google/gemma-4-26b-a4b`), Kaggle, Ollama (`gemma4:26b-a4b`). Open weights self-hosted.
- **Release / knowledge:** 2026-04-02 release; knowledge cutoff early 2026.
- **IDs:** `google/gemma-4-26b-a4b`
- **Context window:** 256,000 tokens input, 8,192 max output tokens (verified via Google DeepMind tech report).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-05):** $0.00 / 1M tokens (open weights self-hosting under Apache 2.0).
- **Architecture:** 26B total parameters MoE (3.8B–4B active per token), open-weights.

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
- MMLU Pro: **82.6%** (Google DeepMind official benchmark report)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **77.1%** (LiveCodeBench v6, Google DeepMind tech report)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256,000 token context window supported.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong function calling and system-prompt support on local MoE inference backends.
- **Reasoning: 78/100.** MMLU Pro score of 82.6% demonstrates high reasoning efficiency.
- **Context window: 80/100.** 256k token context window support.
- **Multimodal: 65/100.** Text and vision input support.
- **Coding: 75/100.** LiveCodeBench v6 score of 77.1% caps coding capability.
- **Cost efficiency: 100/100.** Free open-weights release under Apache 2.0 license.
- **Overall Score: 74/100.** Highly efficient open MoE model for local developer workstations.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
