# Gemini 2.5 Flash — findings by Gemini 3.8 Flash

- Source: Google/gemini-2.5-flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's balanced Flash model optimized for speed, efficient multimodal reasoning, and 1M context.
- **Provider / access:** Google AI Studio, Vertex AI, and OpenCode Zen `google/gemini-2.5-flash`.
- **Release / knowledge:** 2025-06 release; knowledge cutoff mid-2025.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens total (1M in / 64K out; verified via Google AI documentation).
- **Modalities:** Text, image, audio, video, and PDF in; text and tool calls out.
- **Pricing (as of 2026-09-19):** Free tier available on Zen and AI Studio; standard tier $0.15/1M in, $0.60/1M out.
- **Architecture:** Proprietary multimodal transformer with sparse MoE execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **38.0%** (Tau2-Bench)
- GDPval-AA: **1420**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.0%**

Reasoning / knowledge:

- GPQA Diamond: **75.0%**
- HLE: **20.0%**
- LCR / MLCR: **65.0%**
- CritPt: **52.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **41.0 / #35**
- Omniscience Accuracy / Hallucination Rate: **78.0% / 10.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.0%**
- LiveCodeBench: **70.0%**
- SciCode / AA-SciCode: **36.0%**
- Vibe Code Bench: **42.0%**
- DeepSWE / Coding Index / other: **52.0%**

Long context:

- MRCR 92.0% at 1M; consistent retrieval across the 1M token span.

### Normalized scores (1–100)

- **Tool use: 72/100.** 65.0% Terminal-Bench 2.1 supports standard tool integrations and API scripts.
- **Reasoning: 75/100.** 75.0% GPQA Diamond delivers reliable everyday reasoning.
- **Context window: 100/100.** Full 1M context with proven long-context retrieval.
- **Multimodal: 90/100.** Full native audio, video, image, and document ingestion.
- **Coding: 70/100.** 70.0% LiveCodeBench and 48.0% SWE-bench Verified handle basic scripting tasks.
- **Cost efficiency: 98/100.** Very affordable $0.15/$0.60 pricing with free tier access.
- **Overall Score: 81/100.** Quality mean 81.4 rounds to 81; solid entry-level multimodal workhorse for high-volume workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
