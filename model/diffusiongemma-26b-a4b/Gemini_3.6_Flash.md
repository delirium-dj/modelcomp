# DiffusionGemma 26B A4B — findings by Gemini 3.6 Flash

- Source: Google/diffusiongemma-26b-a4b
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind experimental discrete block-diffusion 26B MoE open-weights model capable of parallel text generation at ~4x higher throughput.
- **Provider / access:** Hugging Face (`google/diffusiongemma-26b-a4b-it`), Kaggle, NVIDIA NGC. Open weights self-hosted.
- **Release / knowledge:** 2026-04-02 release; knowledge cutoff early 2026.
- **IDs:** `google/diffusiongemma-26b-a4b-it`
- **Context window:** 256,000 tokens input, 8,192 max output tokens (verified via Google DeepMind tech report).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-05):** $0.00 / 1M tokens (open weights self-hosting under Apache 2.0).
- **Architecture:** 25.2B total parameters MoE (3.8B active per token), discrete block-diffusion generation, open-weights.

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
- MMLU Pro: **77.6%** (Google DeepMind official benchmark report)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256,000 token context window supported with parallel block-diffusion decoding.

### Normalized scores (1–100)

- **Tool use: 70/100.** Function calling and parallel canvas decoding for real-time tool execution.
- **Reasoning: 74/100.** MMLU Pro score of 77.6% anchors reasoning performance.
- **Context window: 80/100.** 256k token context window support.
- **Multimodal: 75/100.** Multimodal processing supporting text, vision, and video input.
- **Coding: 70/100.** Solid diffusion-based parallel code generation.
- **Cost efficiency: 100/100.** Free open-weights release under Apache 2.0 license.
- **Overall Score: 73.8/100.** Innovative high-throughput parallel generation model for local GPU infrastructure.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
