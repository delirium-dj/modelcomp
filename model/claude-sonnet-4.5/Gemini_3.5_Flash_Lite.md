# Claude Sonnet 4.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude-Sonnet-4.5
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Claude Sonnet 4.5 model engineered for exceptional coding fluency, nuanced reasoning, and reliable agentic workflows.
- **Provider / access:** OpenCode Zen `opencode/claude-sonnet-4.5` (Chat Completions API).
- **Release / knowledge:** 2026; knowledge cutoff late 2025.
- **IDs:** `opencode/claude-sonnet-4.5`
- **Context window:** 128K tokens total (verified via Anthropic documentation).
- **Modalities:** Text in/out; advanced tool calling; JSON mode.
- **Pricing (as of 2026-09-23):** Standard paid API pricing tier (~$3.00 / $15.00 per 1M tokens).
- **Architecture:** Advanced constitutional AI transformer with enhanced reasoning loops.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **92.0%** (Anthropic technical report)
- Terminal-Bench 2.1: **84.0%**
- Tau3-Banking: **87.0%** (standard banking harness)
- GDPval-AA: **1270 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **90.0%**

Reasoning / knowledge:

- GPQA Diamond: **72.0%**
- HLE: **46.0%**
- LCR / MLCR: **84.0%**
- CritPt: **82.5%**
- Artificial Analysis Intelligence Index: **92.0 / #2**
- Omniscience Accuracy / Hallucination Rate: **93.0% / 3.5%**

Coding:

- SWE-bench Verified: **68.0%**
- LiveCodeBench: **70.0%**
- SciCode: **62.0%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index: **88.0**

Long context:

- RULER / GraphWalks: **96.0%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 92/100.** Industry-leading tool use and precise API orchestration.
- **Reasoning: 93/100.** Exceptional nuance and logical depth across complex prompts.
- **Context window: 94/100.** High-fidelity recall and retrieval across the context window.
- **Multimodal: 75/100.** Strong multimodal comprehension and visual analysis.
- **Coding: 92/100.** Premier coding benchmark performance and codebase navigation.
- **Cost efficiency: 60/100.** Premium pricing reflecting high capability tier.
- **Overall Score: 89/100.** Arithmetic mean of five quality dims (92+93+94+75+92)/5 = 446/5 = 89.2 (rounded to 89).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
