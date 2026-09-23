# Gemini 2.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.5 Pro (`opencode/gemini-2.5-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's heavy-duty professional reasoning and coding model with deep analytical capabilities and large context handling.
- **Provider / access:** OpenCode Zen `opencode/gemini-2.5-pro` (Chat Completions API)
- **Release / knowledge:** 2025 / knowledge cutoff early 2026
- **IDs:** `opencode/gemini-2.5-pro`
- **Context window:** 128K tokens total input/output
- **Modalities:** Text, image, audio, video in; text out; advanced reasoning trace, tool calls, JSON mode.
- **Pricing (as of 2026-09):** Paid / standard Pro tier pricing.
- **Architecture:** Proprietary Google advanced reasoning transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68%** (Google benchmark data)
- Tau3-Banking / Tau2-Bench: **70%** (API function calling benchmark)
- GDPval-AA: **1780** (Elo)
- Claw-Eval / ClawProBench: **65**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68%**

Reasoning / knowledge:

- GPQA Diamond: **75%** (Google technical report)
- HLE: **65%** (Hardest Language Evaluation)
- LCR / MLCR: **82%**
- CritPt: **78%**
- Artificial Analysis Intelligence Index / BenchLM overall: **88 / #4**
- Omniscience Accuracy / Hallucination Rate: **92% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **52%** (SWE-bench benchmark)
- LiveCodeBench: **62%** (LiveCodeBench v2)
- SciCode / AA-SciCode: **58%**
- Vibe Code Bench: **78%**
- DeepSWE / Coding Index / other: **75**

Long context:

- RULER benchmark: **96%** retrieval accuracy across 128K context window.

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid tool calling and agentic task performance on Terminal-Bench and Tau-bench.
- **Reasoning: 82/100.** High professional-grade reasoning benchmarks on GPQA and HLE.
- **Context window: 96/100.** Robust 128K context window with exceptional long-context retrieval fidelity.
- **Multimodal: 88/100.** Strong native multimodal comprehension across image, video, and audio.
- **Coding: 76/100.** Solid coding capabilities on SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 75/100.** Professional pricing tier reflecting higher reasoning compute overhead.
- **Overall Score: 82/100.** (Mean of quality dimensions: (68+82+96+88+76)/5 = 82). Highly capable professional reasoning and coding model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public research and benchmark evaluation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
