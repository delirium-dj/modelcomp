# Owl Alpha — findings by Gemini 3.6 Flash

- Source: Meituan/owl-alpha
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** Meituan 1.6T parameter MoE stealth preview model (LongCat-2.0 prototype) offered free on OpenRouter for agentic research.
- **Provider / access:** OpenRouter (`stealth/owl-alpha`). OpenAI-compatible API.
- **Release / knowledge:** 2026-04-10 release; knowledge cutoff early 2026.
- **IDs:** `stealth/owl-alpha`
- **Context window:** 1,048,576 tokens input, 8,192 max output tokens (verified via OpenRouter API specifications).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.00 / 1M tokens (free stealth experimental slot on OpenRouter).
- **Architecture:** 1.6T parameter MoE stealth architecture (Meituan LongCat-2.0 prototype).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (OpenRouter stealth benchmark report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **75.0** (Artificial Analysis leaderboard)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,048,576 token input retrieval window supported.

### Normalized scores (1–100)

- **Tool use: 78/100.** Native tool calling and long-context multi-step agentic execution.
- **Reasoning: 75/100.** 1.6T MoE stealth reasoning performance.
- **Context window: 95/100.** 1M token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 75/100.** Multi-step agentic script synthesis and document analysis.
- **Cost efficiency: 100/100.** Free experimental slot ($0.00 / 1M tokens).
- **Overall Score: 68/100.** Stealth 1.6T MoE preview model for 1M-token context analysis and agentic tool use.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
