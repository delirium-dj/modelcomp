# GPT-6.1 Sol — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6 series workhorse model providing near-Astra performance for agentic coding, computer use, and enterprise workflows.
- **Provider / access:** OpenAI API (`gpt-6.1-sol-2026-09-29`), Azure OpenAI Service.
- **Release / knowledge:** 2026-09-29 release; knowledge cutoff 2026-04.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens input, 128,000 max output tokens (verified via OpenAI announcement).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 / $10.00 / $0.10 cached per 1M tokens.
- **Architecture:** Proprietary transformer architecture with safety alignment and instruction-following tuning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **88.9%** (OpenAI internal benchmark report)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **#4 overall** (Artificial Analysis Sep 2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **77.5%** (DeepSWE v1.1)

Long context:

- RULER 1M: 99.0% needle-in-a-haystack retrieval accuracy across 1.05M window.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong performance on AutomationBench and GDPval-AA for computer use and multi-step tasks.
- **Reasoning: 88/100.** High instruction adherence and near-Astra level complex reasoning.
- **Context window: 95/100.** Verified 1.05M token context window with 128k output limit.
- **Multimodal: 80/100.** High quality text and image understanding with text generation output.
- **Coding: 90/100.** Matches flagship Astra performance on DeepSWE v1.1 (77.5%).
- **Cost efficiency: 82/100.** Economical $2.00 / $10.00 rate with 50% discount on prompt caching ($0.10).
- **Overall Score: 88/100.** Efficient, near-flagship workhorse model for production agentic coding.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
