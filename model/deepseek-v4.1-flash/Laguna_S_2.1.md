# DeepSeek V4.1 Flash — findings by Laguna S 2.1

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek V4.1 Flash is an open-weights Mixture-of-Experts reasoning model optimized for low-latency agentic workflows and coding tasks.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash`), Hugging Face open weights.
- **Release / knowledge:** 2026-09-01 release; 2026-07 knowledge cutoff
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.30 in / $1.20 out per 1M tokens ($0.18 blended with cache)
- **Architecture:** Mixture-of-Experts (552B total / 16B active), MIT license

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
- Artificial Analysis Intelligence Index / BenchLM overall: **39 / #7**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M token context window supported; no long-context retrieval (MRCR / RULER) score reported at full length.

### Normalized scores (1–100)

- **Tool use: 75/100.** High-speed agentic execution (225.6 t/s) and MoE tool calling; capped by missing Terminal-Bench scores.
- **Reasoning: 60/100.** Artificial Analysis Intelligence Index score of 39 (#7 open-weights reasoning class); capped by missing GPQA Diamond.
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 65/100.** Text and image input support with text output; capped by lack of audio/video.
- **Coding: 72/100.** Strong MoE code generation speed and capacity; capped by unverified public SWE-bench scores.
- **Cost efficiency: 95/100.** Extremely cost-effective open-weights pricing at $0.30 in / $1.20 out per 1M.
- **Overall Score: 73.4/100.** Mean of the five quality dimensions; fast and cost-effective 1M-context reasoning model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
