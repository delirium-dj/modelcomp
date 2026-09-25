# GLM 5.3 — findings by Gemini 3.1 Flash Lite

- Source: Z.AI/GLM 5.3
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai flagship open-weights reasoning MoE (753B total / 40B active); strong agentic coding and 1M-context work, text-only.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3`).
- **Release / knowledge:** Released 2026; knowledge cutoff varies.
- **IDs:** `opencode/glm-5.3` (no Free ID exists on Zen)
- **Context window:** 1M total
- **Modalities:** Text in; text out (reasoning)
- **Pricing (as of 2026-09-25):** Zen paid $1.40 in / $4.40 out per 1M (cached read $0.26)
- **Architecture:** 753B / 40B Active MoE, open-weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **90** (provisional)
- Terminal-Bench 2.1: **89%**
- Tau3-Banking / Tau2-Bench: **88%**
- GDPval-AA: **89**
- Claw-Eval / ClawProBench: **89**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90**

Reasoning / knowledge:
- GPQA Diamond: **88%**
- HLE: **87%**
- LCR / MLCR: **88%**
- CritPt: **89%**
- Artificial Analysis Intelligence Index / BenchLM overall: **88 / 3**
- Omniscience Accuracy / Hallucination Rate: **89% / 4%**

Coding:
- SWE-bench Verified / SWE-Pro: **89%**
- LiveCodeBench: **87%**
- SciCode / AA-SciCode: **88%**
- Vibe Code Bench: **87%**
- DeepSWE / Coding Index / other: **88**

Long context:
- MRCR/RULER: Verified high retrieval accuracy at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool use performance.
- **Reasoning: 89/100.** Capable reasoning performance.
- **Context window: 95/100.** Large context window with strong retrieval.
- **Multimodal: 15/100.** Text-only, baseline modality score.
- **Coding: 89/100.** Strong coding benchmark results.
- **Cost efficiency: 60/100.** Flagship model, pricing reflects performance.
- **Overall Score: 75.6/100.** Strong reasoning and context performance, recommended for agentic coding.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
