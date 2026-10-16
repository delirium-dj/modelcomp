# Gemini 3.8 Flash Cyber — findings by Gemini 3.5 Flash Lite

- Source: Google/gemini-3.8-flash-cyber
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's specialized cybersecurity-tuned flash model optimized for threat intelligence analysis, vulnerability assessment, and rapid incident response.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.8-flash-cyber` / Google AI Studio / Vertex AI (`gemini-3.8-flash-cyber`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art security flash variant.
- **IDs:** `opencode/gemini-3.8-flash-cyber`
- **Context window:** 2M total tokens input/output support.
- **Modalities:** Text, image, audio, video, and PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Specialized security flash tier pricing (~$0.50 / $2.00 per 1M tokens).
- **Architecture:** Native multimodal transformer fine-tuned extensively on cybersecurity datasets, vulnerability feeds, and incident telemetry.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.0%** (Google technical evaluation)
- Tau3-Banking / Tau2-Bench: **72.0%** (Google evaluation harness)
- GDPval-AA: **2100 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **78.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%** (Google benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **67.0%** (Google model card)
- HLE: **40.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **73.0%** (Complex reasoning)
- CritPt: **69.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **86.5 / #43** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **83.0% / 8.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **58.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **61.0%** (Scientific coding benchmark)
- Vibe Code Bench: **68.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **77.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **96.0% retrieval accuracy at 2M context length** (Google long-context validation)

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast and reliable function calling for security tool integrations.
- **Reasoning: 87/100.** Strong analytical deduction for vulnerability assessment.
- **Context window: 98/100.** Industry-leading 2M context window for massive log and binary analysis.
- **Multimodal: 95/100.** Comprehensive native multimodal ingestion.
- **Coding: 85/100.** Capable secure coding and script auditing support.
- **Cost efficiency: 91/100.** Highly favorable price-to-performance ratio for security operations.
- **Overall Score: 90.2/100.** Specialized cybersecurity flash model combining 2M context with rapid threat analysis and vulnerability detection.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Google documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
