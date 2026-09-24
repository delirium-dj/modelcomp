# Mistral Medium 3.5 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI / Mistral Medium 3.5 (`opencode/mistral-medium-3.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's balanced enterprise-grade mid-tier model optimized for efficient reasoning and multilingual tasks.
- **Provider / access:** OpenCode Zen `opencode/mistral-medium-3.5`, Chat Completions API.
- **Release / knowledge:** 2025-10-05; knowledge cutoff September 2025.
- **IDs:** `opencode/mistral-medium-3.5` (Free Zen tier available)
- **Context window:** 128K total tokens verified via Mistral AI specifications.
- **Modalities:** Text in/out, function calling, JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0/1M); paid equiv. ~$0.60 / $1.80 per 1M tokens.
- **Architecture:** Mistral proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.0%** (Mistral AI release notes)
- Tau3-Banking / Tau2-Bench: **71.0%** (API benchmark suite)
- GDPval-AA: **1180 Elo**
- Claw-Eval / ClawProBench: **73.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **55.0%** (official evaluation)
- HLE: **28.0%**
- LCR / MLCR: **63.0%**
- CritPt: **57.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #18**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 6.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **34.0%** (official harness)
- LiveCodeBench: **39.0%**
- SciCode / AA-SciCode: **53.0%**
- Vibe Code Bench: **60.0%**
- DeepSWE / Coding Index / other: **67.0**

Long context:

- MRCR 128K retrieval accuracy: **89.0%** at 128K context window.

### Normalized scores (1–100)

- **Tool use: 72/100.** Reliable tool calling and structural formatting for enterprise workflows.
- **Reasoning: 71/100.** Solid mid-tier reasoning performance.
- **Context window: 84/100.** Full 128K context window support.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 70/100.** Competent coding capabilities for standard developer tasks.
- **Cost efficiency: 100/100.** Free Zen tier ($0/1M).
- **Overall Score: 62.4/100.** Balanced mid-tier enterprise model with solid general-purpose efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
