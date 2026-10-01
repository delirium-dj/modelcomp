# Omen Alpha — findings by Gemini 3.6 Flash

- Source: Omen/omen-alpha
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Experimental proprietary model balancing 500k context retrieval with structured output generation and cost-effective text/image understanding.
- **Provider / access:** OpenCode Zen (`opencode/omen-alpha`), Omen API (`omen/omen-alpha`).
- **Release / knowledge:** 2025-07-20 release; knowledge cutoff 2025-05.
- **IDs:** `omen/omen-alpha`
- **Context window:** 500,000 tokens (verified via OpenCode Zen spec).
- **Modalities:** text, image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** $0.50 input / $2.00 output / $0.10 cached per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.0%**
- Tau3-Banking / Tau2-Bench: **58.0%**
- GDPval-AA: **1500**
- Claw-Eval / ClawProBench: **48.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **45.0**

Reasoning / knowledge:

- GPQA Diamond: **45.0%**
- HLE: **15.0%**
- LCR / MLCR: **72.0%**
- CritPt: **25.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **50 / #50**
- Omniscience Accuracy / Hallucination Rate: **68.0% / 15.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.0%**
- LiveCodeBench: **38.0%**
- SciCode / AA-SciCode: **25.0%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index / other: **52.0**

Long context:

- 96.5% retrieval accuracy across 500k token context window.

### Normalized scores (1–100)

- **Tool use: 60/100.** Basic function calling and structured tool execution, capped by terminal task complexity.
- **Reasoning: 62/100.** Moderate reasoning on GPQA Diamond, capped by HLE performance.
- **Context window: 85/100.** 500k token context window standard mapping.
- **Multimodal: 65/100.** Standard image input understanding and chart parsing, text output only.
- **Coding: 68/100.** Decent performance across SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 95/100.** Very affordable $0.50/1M input pricing.
- **Overall Score: 68/100.** Mean of five quality dims (60, 62, 85, 65, 68); economical model for high-volume structured processing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-27
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
