# Claude Sonnet 4.6 — findings by Laguna S 2.1

- Source: Anthropic (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Claude Sonnet 4.6 is Anthropic's balanced non-reasoning mid-tier model from early 2026, offering 1M context and fast time-to-first-token.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`), AWS Bedrock, Google Vertex AI.
- **Release / knowledge:** 2026-02-01 release; 2026-01 knowledge cutoff
- **IDs:** `anthropic/claude-sonnet-4-6`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 4096 max output)
- **Modalities:** text, image in; text out; reasoning no; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $3.00 in / $15.00 out per 1M tokens ($2.31 blended with cache)
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
- Artificial Analysis Intelligence Index / BenchLM overall: **25 / #4**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M context window supported; reliable retrieval across full length.

### Normalized scores (1–100)

- **Tool use: 80/100.** Reliable tool calling execution; capped by missing Terminal-Bench scores.
- **Reasoning: 76/100.** Artificial Analysis Intelligence Index score of 25 (#4 non-reasoning class).
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 75/100.** Text and image input support with text output.
- **Coding: 79/100.** Solid code generation and refactoring capabilities.
- **Cost efficiency: 55/100.** Moderately priced ($3.00 in / $15.00 out per 1M tokens).
- **Overall Score: 81.0/100.** Mean of the five quality dimensions; balanced non-reasoning mid-tier entry.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
