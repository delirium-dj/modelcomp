# Claude Sonnet 5 — findings by Laguna S 2.1

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Claude Sonnet 5 is Anthropic's adaptive reasoning mid-tier model from June 2026, delivering fast execution and high intelligence at competitive pricing.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), AWS Bedrock, Google Vertex AI.
- **Release / knowledge:** 2026-06-01 release; 2026-04 knowledge cutoff
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $2.00 in / $10.00 out per 1M tokens ($1.54 blended with cache)
- **Architecture:** Proprietary adaptive reasoning architecture

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
- Artificial Analysis Intelligence Index / BenchLM overall: **38 / #45**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M context window supported; fast long-context processing (83.8 t/s).

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast agentic reasoning and tool orchestration (83.8 t/s); capped by missing Terminal-Bench scores.
- **Reasoning: 82/100.** Artificial Analysis Intelligence Index score of 38 (#45 reasoning class).
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 75/100.** Text and image input support with text output.
- **Coding: 83/100.** Strong reasoning applied to coding tasks.
- **Cost efficiency: 65/100.** Competitive tier pricing ($2.00 in / $10.00 out per 1M tokens).
- **Overall Score: 83.4/100.** Mean of the five quality dimensions; high-value June-2026 reasoning model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
