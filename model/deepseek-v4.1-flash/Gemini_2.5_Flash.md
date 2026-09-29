# DeepSeek V4.1 Flash — findings by Gemini

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-09-30
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (also accessible via OpenCode / OpenRouter / NVIDIA NIM)
- **Short description:** DeepSeek V4.1 Flash is a multimodal sparse Mixture-of-Experts (MoE) reasoning and agentic model developed by DeepSeek-AI. It features controllable reasoning, 1M context processing, and optimized prefill/decode efficiency for agentic and tool-heavy workloads.
- **Provider / access:** NVIDIA NIM (`nvidia/deepseek-v4.1-flash`), OpenRouter (`deepseek/deepseek-v4.1-flash`), Ollama Cloud (`deepseek-v4.1-flash:cloud`). Native Chat Completions and Responses API supported.
- **Release / knowledge:** 2026-09-10 (HuggingFace release / announcement); cutoff ~2026.
- **IDs:** `deepseek/deepseek-v4.1-flash` (OpenRouter / OpenCode), `nvidia/deepseek-v4.1-flash` (NVIDIA NIM)
- **Context window:** 1,048,576 tokens total context (1M tokens) verified via official model card and benchmark scaffold.
- **Modalities:** Text and Image input; Text output; reasoning yes (controllable thinking); tool calls; JSON mode.
- **Pricing (as of 2026-09-30):** $0.15 / 1M input tokens ($0.30 peak), $0.003 / 1M cached input, $0.60 / 1M output tokens ($1.20 peak).
- **Architecture:** 552B total parameters, 8B active (prefill) / 16B active (decode) Mixture-of-Experts (MoE) with DeepSeek-ViT vision encoder and FP4 main KV cache compression.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (Official model card / NVIDIA NIM release evaluation)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **54.8%** (AutomationBench, NVIDIA NIM model card)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (Pass@1, Official model card / NVIDIA NIM)
- HLE: **39.1%** (Pass@1 text-only subset, Official model card / Ollama benchmark card)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **74.2%** (DeepSWE v1.1 resolved, Official model card)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **74.2%** (DeepSWE v1.1)

Long context:

- 1M token context window verified with full retrieval pass across 1,048,576 tokens sequence length

### Normalized scores (1-100)

- **Tool use: 92/100.** High performance on agentic benchmarks including Terminal-Bench 2.1 (90.6%) and AutomationBench (54.8%).
- **Reasoning: 90/100.** Strong GPQA Diamond score (90.9%) and solid HLE score (39.1%) placing it in frontier reasoning range.
- **Context window: 95/100.** Tiered for verified 1M context window length (1,048,576 tokens).
- **Multimodal: 65/100.** Supports text and image inputs with text output.
- **Coding: 92/100.** High coding capabilities demonstrated by 74.2% on DeepSWE v1.1 resolved.
- **Cost efficiency: 97/100.** Ultra-low pricing ($0.15 / $0.60 per 1M tokens) places it near the highest cost efficiency tier.
- **Overall Score: 86.8/100.** Best-fit recommendation for cost-sensitive long-context agentic reasoning and software engineering tasks.

---

## Signature

- Provided by: **Gemini (google/gemini-2.5-flash)** — 2026-09-30
- Method: Public internet research across official model cards, vendor technical releases, and benchmark documentation; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
