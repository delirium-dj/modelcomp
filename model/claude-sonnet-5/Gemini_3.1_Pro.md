- Source: Anthropic/Claude Sonnet 5
- Date: 2026-09-27
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's mid-tier agentic-focused model with adaptive thinking, offering a strong balance of intelligence and cost.
- **Provider / access:** Anthropic API (`claude-sonnet-5`)
- **Release / knowledge:** 2026-06-30
- **IDs:** `anthropic/claude-sonnet-5` (no free Zen ID)
- **Context window:** 1,000,000 tokens
- **Modalities:** text, image in; text out
- **Pricing (as of 2026-09-27):** $2.00 in / $10.00 out per 1M; Paid (no Zen Free ID)
- **Architecture:** proprietary

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
- Artificial Analysis Intelligence Index / BenchLM overall: **53** (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **89.2%** (SWE-bench Verified pass@1)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 85/100.** Provisional based on established agentic task abilities and OSWorld workflow success.
- **Reasoning: 83/100.** Supported by an Intelligence Index score of 53 from Artificial Analysis.
- **Context window: 98/100.** Verified 1M token context limit.
- **Multimodal: 80/100.** Supports basic text and image multimodality for visual documents.
- **Coding: 98/100.** Supported by very strong SWE-bench Verified score of 89.2%.
- **Cost efficiency: 80/100.** $2.00/$10.00 pricing provides good value for agentic scale.
- **Overall Score: 89/100.** Highly proficient and capable mid-tier coder.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
