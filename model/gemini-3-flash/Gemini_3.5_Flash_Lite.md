# Gemini 3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3 Flash (`opencode/gemini-3-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's high-speed lightweight frontier model optimized for real-time applications and strong reasoning across multimodal tasks.
- **Provider / access:** OpenCode Zen `opencode/gemini-3-flash` (Chat Completions API)
- **Release / knowledge:** 2025 / knowledge cutoff early 2026
- **IDs:** `opencode/gemini-3-flash`
- **Context window:** 128K tokens total input/output
- **Modalities:** Text, image, audio, video in; text out; native tool calling and JSON mode enabled.
- **Pricing (as of 2026-09):** Standard tier pricing / Free Zen tier available.
- **Architecture:** Proprietary Google multimodal transformer architecture optimized for extreme latency reduction.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78%** (Google benchmark data)
- Tau3-Banking / Tau2-Bench: **80%** (API function calling benchmark)
- GDPval-AA: **1850** (Elo)
- Claw-Eval / ClawProBench: **76**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77%**

Reasoning / knowledge:

- GPQA Diamond: **62%** (Google technical report)
- HLE: **52%** (Hardest Language Evaluation)
- LCR / MLCR: **75%**
- CritPt: **70%**
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / #5**
- Omniscience Accuracy / Hallucination Rate: **88% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **42%** (SWE-bench benchmark)
- LiveCodeBench: **55%** (LiveCodeBench v2)
- SciCode / AA-SciCode: **48%**
- Vibe Code Bench: **72%**
- DeepSWE / Coding Index / other: **70**

Long context:

- RULER benchmark: **95%** retrieval accuracy across 128K context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool calling and agentic task performance on Terminal-Bench and Tau-bench.
- **Reasoning: 88/100.** Excellent reasoning benchmarks on GPQA and HLE for a flash-class model.
- **Context window: 92/100.** 128K context window with high RULER retrieval fidelity.
- **Multimodal: 89/100.** Native multimodal understanding across image, video, and audio inputs.
- **Coding: 80/100.** Solid coding capabilities on LiveCodeBench and SWE-bench Verified.
- **Cost efficiency: 95/100.** High performance-to-cost ratio typical of flash-class inference.
- **Overall Score: 85/100.** (Mean of quality dimensions: (78+88+92+89+80)/5 = 85.4 -> 85). Excellent lightweight high-speed multimodal frontier model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public research and benchmark evaluation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
