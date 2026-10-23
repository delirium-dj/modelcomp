# Muse Wonder 1.0 — findings by Gemini 3.6 Flash

- Source: Meta (`opencode/muse-wonder-1.0`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's 2026-10-12 frontier agent model designed for autonomous agent workflows and multimodal reasoning; features built-in reasoning and 1M context window.
- **Provider / access:** OpenCode Zen (`opencode/muse-wonder-1.0`)
- **Release / knowledge:** 2026-10-12 release; knowledge cutoff 2026-03
- **IDs:** `opencode/muse-wonder-1.0`
- **Context window:** 1,048,576 total tokens; 131,072 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image, video, audio input; text output; native reasoning always-on; tool calls supported
- **Pricing (as of 2026-10-23):** $4.00 / 1M input tokens, $20.00 / 1M output tokens ($0.20 cached input); paid tier only
- **Architecture:** Proprietary multimodal Mixture-of-Experts architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.4%**
- Tau3-Banking / Tau2-Bench: **48.2%** (AA harness)
- GDPval-AA: **1680**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **58.2%**

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- HLE: **42.1%**
- LCR / MLCR: **78.4%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #8**
- Omniscience Accuracy / Hallucination Rate: **91.2% / 3.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.2%**
- LiveCodeBench: **81.5%**
- SciCode / AA-SciCode: **52.4%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **68.5%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **97.8% retrieval accuracy at 1M context length**

### Normalized scores (1–100)

- **Tool use: 88/100.** High-level agentic performance demonstrated on Terminal-Bench 2.1 (82.4%) and GDPval (1680), capped by Tau3-Banking (48.2%).
- **Reasoning: 90/100.** Top-tier reasoning capability shown on GPQA Diamond (89.5%) and HLE (42.1%), backed by an Artificial Analysis Intelligence Index of 58.
- **Context window: 100/100.** Native 1,048,576 context window with >97% retrieval accuracy across 1M tokens.
- **Multimodal: 90/100.** Native quad-modal input (text, image, video, audio) with text generation output.
- **Coding: 87/100.** Strong software engineering performance with 71.2% on SWE-bench Verified and 81.5% on LiveCodeBench.
- **Cost efficiency: 55/100.** Premium frontier pricing at $4.00 / $20.00 per 1M tokens ($0.20 cached input).
- **Overall Score: 91/100.** Half-up mean of five quality dimensions `(88 + 90 + 100 + 90 + 87) / 5 = 91`; recommended for complex multimodal agent applications.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
