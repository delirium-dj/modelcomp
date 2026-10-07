# Qwen 3.5 397B — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen (`Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397b
- **Short description:** Alibaba's flagship open-weights 397B/17B active MoE with hybrid linear-attention and sparse-MoE architecture for advanced reasoning and agents.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`, Apache 2.0); hosted via OpenRouter (`qwen/qwen3.5-397b-a17b`) and OpenCode Zen (`opencode/qwen-3.5-397b`).
- **Release / knowledge:** 2026-02 release; knowledge cutoff current
- **IDs:** `qwen/qwen3.5-397b-a17b`
- **Context window:** 262,144 native (extensible to ~1M via YaRN RoPE)
- **Modalities:** Text, image, video in; text out; tool calling and reasoning
- **Pricing (as of 2026-10-07):** ~$0.39/$2.34 per 1M in/out on API providers; open weights free (Apache 2.0)
- **Architecture:** Hybrid Gated DeltaNet linear attention + sparse MoE, 397B total / 17B active

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.5% Terminal Bench 2**
- Tau3-Banking / Tau2-Bench: **86.7% TAU2-Bench**
- GDPval-AA: **14.8% GDPval-AA**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.9% BFCL-V4**

Reasoning / knowledge:

- GPQA Diamond: **88.4%**
- HLE: **28.7% (37.6% HLE-Verified)**
- LCR / MLCR: **no verified public score found**
- CritPt: **1.7%**
- Artificial Analysis Intelligence Index / BenchLM overall: **87.8% MMLU-Pro, 94.9% MMLU-Redux**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.4% SWE-bench Verified**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **68.3% SecCodeBench**

Long context:

- RULER / GraphWalks value at 256K window length: **94.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional tool calling and benchmark results across BFCL and Tau2.
- **Reasoning: 90/100.** Top-tier reasoning capabilities on GPQA Diamond and MMLU-Pro.
- **Context window: 93/100.** Native 256K context with high retrieval accuracy.
- **Multimodal: 85/100.** Strong native vision-language and OCR integration.
- **Coding: 89/100.** Outstanding coding performance on SWE-bench Verified.
- **Cost efficiency: 88/100.** Highly cost-effective API pricing and open weights.
- **Overall Score: 89.0/100.** Mean of the five quality dims (88 + 90 + 93 + 85 + 89 = 445 / 5 = 89.0).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-07
- Method: public internet research and benchmark verification; scores are normalized 1–100 interpretations.
