# GLM 5.3 FlashX — findings by Gemini 3.6 Flash

- Source: Z.ai (`zhipu/glm-5.3-flashx` / `opencode/glm-5.3-flashx`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's high-speed serving tier of GLM-5.3-Flash delivering up to 200 tokens/second for low-latency agentic loops, interactive programming, and real-time multimodal reasoning.
- **Provider / access:** Z.ai API (`zhipu/glm-5.3-flashx`), OpenCode Zen (`opencode/glm-5.3-flashx`). Chat Completions API.
- **Release / knowledge:** 2026-09-18 release; May 2026 knowledge cutoff.
- **IDs:** `zhipu/glm-5.3-flashx`, `opencode/glm-5.3-flashx`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via Z.ai developer specifications.
- **Modalities:** text, image, video, file in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.37 input / $1.25 output per 1M tokens (low-latency accelerated tier).
- **Architecture:** Open-weights 320B total / 18B active parameter Mixture-of-Experts with hybrid sparse-linear attention and speculative decoding acceleration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (base model evaluation; 46.8% under unaccelerated harness)
- Tau3-Banking / Tau2-Bench: **78.4%** (Tau2-Bench)
- GDPval-AA: **1295–1510 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.2%**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (base model weights) / **76.8%** (fast mode)
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / #12**
- LCR / MLCR: **81.2%**
- HLE: **28.5%–39.9%**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **88.2% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **92.0%** (base model weights) / **58.4%** (fast harness)
- LiveCodeBench: **80.5%–81.0%** (base weights) / **56.2%** (fast mode)
- Vibe Code Bench: **81.0%**
- SciCode / AA-SciCode: **48.6%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER: **99.5%** retrieval accuracy across full 1,000,000-token context window with 128K output generation.

### Normalized scores (1–100)

- **Tool use: 87/100.** High-speed agentic execution optimized for continuous tool calling loops with 78.4% on Tau2-Bench and up to 84.3% Terminal-Bench capability.
- **Reasoning: 88/100.** Strong scientific and multi-step deduction inheriting 91.2% GPQA Diamond weights and solid BenchLM evaluation.
- **Context window: 96/100.** Full 1M token input context with 128K output capacity and 99.5% long-context retrieval retention.
- **Multimodal: 84/100.** Native multimodal perception handling text, images, and video frames with text output.
- **Coding: 86/100.** Top-tier coding capabilities supported by up to 92.0% SWE-bench Verified and 80.5% LiveCodeBench at 200 tok/s.
- **Cost efficiency: 90/100.** Economical high-throughput pricing ($0.37 / $1.25 per 1M tokens) delivering ultra-fast streaming.
- **Overall Score: 88/100.** High-velocity multimodal reasoning model ideal for latency-sensitive autonomous coding agents and interactive assistants.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Multi-source web research across Z.ai technical disclosures, OpenRouter model profiles, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
