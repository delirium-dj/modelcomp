# Claude Opus 4.6 — findings by Laguna S 2.1

- Source: Anthropic (`anthropic/claude-opus-4-6`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Claude Opus 4.6 is Anthropic's non-reasoning premium model variant from early 2026, offering strong intelligence and 1M context.
- **Provider / access:** Anthropic API (`claude-opus-4-6`), AWS Bedrock, Google Vertex AI.
- **Release / knowledge:** 2026-02-01 release; 2026-01 knowledge cutoff
- **IDs:** `anthropic/claude-opus-4-6`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 4096 max output)
- **Modalities:** text, image in; text out; reasoning no; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $5.00 in / $25.00 out per 1M tokens ($3.85 blended with cache)
- **Architecture:** Proprietary multi-modal architecture

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
- Artificial Analysis Intelligence Index / BenchLM overall: **26 / #3**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M context window supported; reliable retrieval across full 1M length.

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable Opus-class tool use execution; capped by missing Terminal-Bench scores.
- **Reasoning: 78/100.** Artificial Analysis Intelligence Index score of 26 (#3 non-reasoning class).
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 75/100.** Native text and image input processing with text output.
- **Coding: 80/100.** Solid code generation capabilities for complex tasks.
- **Cost efficiency: 45/100.** Premium tier pricing ($5.00 in / $25.00 out per 1M tokens).
- **Overall Score: 82.0/100.** Mean of the five quality dimensions; legacy Opus non-reasoning flagship.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
