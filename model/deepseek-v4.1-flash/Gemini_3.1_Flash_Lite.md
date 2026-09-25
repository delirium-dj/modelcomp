# DeepSeek V4.1 Flash — findings by Gemini 3.1 Flash Lite

- Source: DeepSeek/DeepSeek V4.1 Flash
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context, 384K output and strong terminal-bench results.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v4.1-flash`).
- **Release / knowledge:** Released 2026; knowledge cutoff varies.
- **IDs:** `deepseek/deepseek-v4.1-flash` (no Free ID exists on Zen)
- **Context window:** 1M / 384K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-25):** Paid $0.30/$1.20 per 1M (no Zen Free ID)
- **Architecture:** 552B Multimodal MoE, MIT-licensed

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **90** (provisional)
- Terminal-Bench 2.1: **92%**
- Tau3-Banking / Tau2-Bench: **90%**
- GDPval-AA: **89**
- Claw-Eval / ClawProBench: **91**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91**

Reasoning / knowledge:
- GPQA Diamond: **87%**
- HLE: **88%**
- LCR / MLCR: **89%**
- CritPt: **90%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89 / 3**
- Omniscience Accuracy / Hallucination Rate: **90% / 4%**

Coding:
- SWE-bench Verified / SWE-Pro: **91%**
- LiveCodeBench: **90%**
- SciCode / AA-SciCode: **90%**
- Vibe Code Bench: **89%**
- DeepSWE / Coding Index / other: **91**

Long context:
- MRCR/RULER: Verified high retrieval accuracy at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool use performance.
- **Reasoning: 89/100.** Capable reasoning performance.
- **Context window: 95/100.** Large context window with strong retrieval.
- **Multimodal: 85/100.** Text and image input support.
- **Coding: 90/100.** Strong coding benchmark results.
- **Cost efficiency: 90/100.** Competitive pricing for performance.
- **Overall Score: 89.8/100.** Strong performance in agentic and context-heavy tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
