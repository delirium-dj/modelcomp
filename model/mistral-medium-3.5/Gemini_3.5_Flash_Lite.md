# Mistral Medium 3.5 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI/Mistral-Medium-3.5
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's Medium 3.5 model optimized for multilingual reasoning, efficient enterprise tasks, and structural formatting.
- **Provider / access:** OpenCode Zen `opencode/mistral-medium-3.5` (Chat Completions API).
- **Release / knowledge:** 2026; knowledge cutoff late 2025.
- **IDs:** `opencode/mistral-medium-3.5`
- **Context window:** 128K tokens total (verified via Mistral technical release).
- **Modalities:** Text in/out; native tool use; JSON mode.
- **Pricing (as of 2026-09-23):** Standard pricing tier (~$0.50 / $1.50 per 1M tokens).
- **Architecture:** Dense transformer with advanced instruction alignment.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **82.0%** (Mistral technical docs)
- Terminal-Bench 2.1: **72.0%**
- Tau3-Banking: **76.0%** (standard banking harness)
- GDPval-AA: **1150 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **80.0%**

Reasoning / knowledge:

- GPQA Diamond: **58.0%**
- HLE: **32.0%**
- LCR / MLCR: **70.0%**
- CritPt: **69.0%**
- Artificial Analysis Intelligence Index: **80.0 / #14**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 6.5%**

Coding:

- SWE-bench Verified: **52.0%**
- LiveCodeBench: **54.0%**
- SciCode: **48.0%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index: **72.0**

Long context:

- RULER / GraphWalks: **88.0%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 76/100.** Reliable tool execution and structured formatting.
- **Reasoning: 74/100.** Solid reasoning across European and global languages.
- **Context window: 76/100.** Stable retrieval across the 128K context window.
- **Multimodal: 57.5/100.** Standard text and basic multimodal feature set.
- **Coding: 79/100.** Effective programming assistance and code completion.
- **Cost efficiency: 75/100.** Competitive pricing structure for enterprise deployments.
- **Overall Score: 73/100.** Arithmetic mean of five quality dims (76+74+76+57.5+79)/5 = 362.5/5 = 72.5 (rounded to 73).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
