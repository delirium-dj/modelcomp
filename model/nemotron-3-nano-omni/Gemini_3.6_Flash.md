# Nemotron 3 Nano Omni — findings by Gemini 3.6 Flash

- Source: NVIDIA/nemotron-3-nano-omni
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA 30B total / 3B active hybrid Mamba-Transformer MoE open-weights multimodal model processing text, vision, video, and audio.
- **Provider / access:** NVIDIA NGC, Hugging Face (`nvidia/nemotron-3-nano-omni`), OpenRouter (`nvidia/nemotron-3-nano-omni`). Open-weights.
- **Release / knowledge:** 2026-04-14 release; knowledge cutoff early 2026.
- **IDs:** `nvidia/nemotron-3-nano-omni`
- **Context window:** 256,000 tokens input, 8,192 max output tokens (verified via NVIDIA release documentation).
- **Modalities:** text, image, video, audio in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.05 / 1M input, $0.20 / 1M output tokens (open weights self-hosting $0.00 / 1M).
- **Architecture:** 30B total / 3B active parameter hybrid Mamba-Transformer MoE, open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (NVIDIA perception sub-agent report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **75.0** (Artificial Analysis leaderboard)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256,000 token context window supported with hybrid Mamba sequence processing.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast perception sub-agent execution and tool routing.
- **Reasoning: 75/100.** Hybrid Mamba-Transformer 30B MoE reasoning capability.
- **Context window: 80/100.** 256k token context window support.
- **Multimodal: 85/100.** Unified processing of text, vision, video, and audio inputs natively.
- **Coding: 72/100.** Compact MoE code synthesis performance.
- **Cost efficiency: 98/100.** Ultra-low API cost ($0.05/$0.20 per 1M tokens) with free open-weights self-hosting option.
- **Overall Score: 78/100.** High-throughput open-weights omni perception model for sub-agent orchestration.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
