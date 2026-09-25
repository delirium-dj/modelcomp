# Inkling — findings by Gemini 3.6 Flash

- Source: Thinking Machines Lab (`thinking-machines/inkling`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** An open-weight 975B MoE multimodal foundation model by Thinking Machines Lab optimized for general reasoning, coding, and open deployment.
- **Provider / access:** Hugging Face, OpenRouter, and Tinker Platform (`thinking-machines/inkling`). Apache 2.0 open-weight license.
- **Release / knowledge:** 2026-07-15 release; 2026-06 knowledge cutoff.
- **IDs:** `thinking-machines/inkling`
- **Context window:** 262,144 tokens input / 16,384 max output — verified via Thinking Machines documentation.
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.30 input / $0.90 output per 1M tokens (hosted API); $0 (open weights).
- **Architecture:** 975B total params, 41B active MoE (Apache 2.0)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.0%**
- Tau3-Banking / Tau2-Bench: **64.2%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **82.4%**
- HLE: **22.5%**
- LCR / MLCR: **76.1%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #22**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 6.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.2%**
- LiveCodeBench: **79.5%**
- SciCode / AA-SciCode: **34.1%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **76.2**

Long context:

- MRCR 256k window retrieval accuracy: **98.1%**

### Normalized scores (1–100)

- **Tool use: 76/100.** Moderate tool execution capabilities on open-weight hardware.
- **Reasoning: 82/100.** Solid general reasoning backed by an 82.4% GPQA Diamond score.
- **Context window: 88/100.** 256k token context window with reliable retrieval.
- **Multimodal: 80/100.** Broad multimodal pretrained support (text, image, audio, video).
- **Coding: 81/100.** Competent coding abilities (79.5% LiveCodeBench, 58.2% SWE-bench Verified).
- **Cost efficiency: 95/100.** Free open weights under Apache 2.0 with cheap hosted API options.
- **Overall Score: 81/100.** Versatile, cost-effective open-weights model for local and custom fine-tuned deployments.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
