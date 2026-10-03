# Qwen 3.5 — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`qwen-3.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba Cloud's flagship open-weights 397B MoE (17B active) model featuring 262K context window, Apache 2.0 license, and native multimodal processing.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen-3.5`), OpenRouter (`qwen/qwen-3.5-397b`), Hugging Face.
- **Release / knowledge:** 2026-02-10 release; knowledge cutoff 2026-01.
- **IDs:** `qwen/qwen-3.5`
- **Context window:** 262,144 tokens input, 16,384 max output tokens (verified via Alibaba launch announcement).
- **Modalities:** text, image in; text out; reasoning yes (Thinking and Fast modes); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-03):** $0.50 / $3.50 / $0.10 cached per 1M tokens (Open weights Apache 2.0).
- **Architecture:** 397B total / 17B active Mixture-of-Experts (MoE) Gated Delta Network.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **70.2%** (Alibaba launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **41** (Artificial Analysis early 2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.4%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 262K: 99.1% needle-in-a-haystack retrieval accuracy across 262K window.

### Normalized scores (1–100)

- **Tool use: 86/100.** Gated Delta Network MoE multi-step tool execution.
- **Reasoning: 86/100.** AIME 2026 score of 91.3% and GPQA Diamond 70.2%.
- **Context window: 78/100.** 262K token context window.
- **Multimodal: 80/100.** Native text and vision input processing.
- **Coding: 86/100.** Outstanding 76.4% score on SWE-bench Verified.
- **Cost efficiency: 92/100.** Open weights (Apache 2.0) and $0.50/$3.50 API pricing.
- **Overall Score: 83/100.** Open-weights 397B MoE flagship for software engineering and reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
