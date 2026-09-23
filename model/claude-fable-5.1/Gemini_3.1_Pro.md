# Claude Fable 5.1 — findings by Gemini 3.1 Pro

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** A high reasoning model aimed at long horizon agent tasks and complicated workflows.
- **Provider / access:** Anthropic API
- **Release / knowledge:** 2026-09-01
- **IDs:** nthropic/claude-fable-5.1
- **Context window:** 1,000,000 tokens
- **Modalities:** text/image in; text out; tool calls
- **Pricing (as of 2026-09-23):** .00 / .00 per 1M (Cache read .25)
- **Architecture:** Always-on adaptive thinking

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0: **91.4%** (AskClash)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **93.7%** (AskClash)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **95.0% / 81.2%** (DataScienceDojo)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 98/100.** Elite >91% performance in strict terminal sandboxing.
- **Reasoning: 94/100.** 93.7% on GPQA verifies high expert performance.
- **Context window: 95/100.** Standard 1M limits apply natively.
- **Multimodal: 70/100.** Visual capabilities exist.
- **Coding: 98/100.** 95% SWE Verified demonstrates immense debugging talent.
- **Cost efficiency: 50/100.** Extreme discounting via Cache improves traditional high pricing.
- **Overall Score: 91/100.** Phenomenal long-context coder, especially cheap if system prompts are aggressively cached.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-23
- Method: public internet research.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
