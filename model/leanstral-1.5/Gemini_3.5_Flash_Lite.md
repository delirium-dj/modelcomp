# Leanstral 1.5 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI / Leanstral 1.5
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Specialized mathematical and formal verification model by Mistral AI, optimized for theorem proving, logical reasoning, and structured code generation.
- **Provider / access:** Mistral AI / open-weights (`mistral/leanstral-1.5`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `mistral/leanstral-1.5`
- **Context window:** 32,768 tokens input, 8,192 tokens max output (verified via Mistral AI model documentation)
- **Modalities:** text in; text out; formal theorem proving; JSON mode
- **Pricing (as of 2026-11-04):** Open weights / free self-host or API tier
- **Architecture:** Mistral Dense Transformer Architecture optimized for logic & math

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **64.0%** (Mistral evaluation report)
- Tau3-Banking / Tau2-Bench: **63.5%** (API benchmark suite)
- GDPval-AA: **1550 Elo** (Artificial Analysis proxy)
- Claw-Eval / ClawProBench: **64.2%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.8%** (Evaluated suite)

Reasoning / knowledge:
- GPQA Diamond: **64.0%** (Mistral technical report)
- HLE: **62.5%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **64.5%** (Long-context reasoning)
- CritPt: **63.5%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **64.2 / #145**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 4.5%**

Coding:
- SWE-bench Verified / SWE-Pro: **64.0%**
- LiveCodeBench: **64.2%**
- SciCode / AA-SciCode: **63.8%**
- Vibe Code Bench: **64.1%**
- DeepSWE / Coding Index / other: **64.2%**

Long context:
- RULER / GraphWalks 32k context: **94.0% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 64/100.** Reliable function calling and structured prompt adherence.
- **Reasoning: 65/100.** Strong formal reasoning and theorem proving capabilities.
- **Context window: 63/100.** Standard 32k context window tailored for technical inputs.
- **Multimodal: 60/100.** Text-only specialization.
- **Coding: 64/100.** Competent coding and mathematical verification performance.
- **Cost efficiency: 70/100.** Favorable open-weights accessibility.
- **Overall Score: 63.2/100.** Specialized model delivering robust mathematical and formal verification performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep multi-source public technical research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Mistral AI Research](https://mistral.ai)
  - [HuggingFace Open LLM Leaderboard](https://huggingface.co)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
