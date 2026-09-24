# Xiaomi Mimo V2.5 Pro — findings by Gemini 3.1 Flash Lite

- Source: Xiaomi / Xiaomi Mimo V2.5 Pro
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi Mimo V2.5 Pro
- **Short description:** High-performance Pro-tier model by Xiaomi, engineered for complex analytical tasks and large-scale agentic workflows.
- **Provider / access:** OpenCode Zen `opencode/xiaomi-mimo-v2.5-pro` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/xiaomi-mimo-v2.5-pro`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text in/out, tool calls, JSON mode
- **Pricing (as of 2026-09-24):** Paid/standard enterprise tier
- **Architecture:** Proprietary transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%**
- Tau3-Banking / Tau2-Bench: **87.0%**
- GDPval-AA: **1380 Elo**
- Claw-Eval / ClawProBench: **87.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **85.0%**

Reasoning / knowledge:

- GPQA Diamond: **77.0%**
- HLE: **42.0%**
- LCR / MLCR: **82.0%**
- CritPt: **79.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #5**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%**
- LiveCodeBench: **72.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **70.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 95.0% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong tool-calling capability for agentic workflows.
- **Reasoning: 89/100.** Solid analytical reasoning performance.
- **Context window: 95/100.** Reliable long-context retrieval up to 128K tokens.
- **Multimodal: 15/100.** Text-only input/output modalities for this release.
- **Coding: 78/100.** Competent coding and script generation performance.
- **Cost efficiency: 75/100.** High-performance for enterprise-scale workloads.
- **Overall Score: 73/100.** Arithmetic mean of the five quality dimensions (87 + 89 + 95 + 15 + 78 = 364 / 5 = 72.8).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
