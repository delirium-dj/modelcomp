# GPT-5.5 Pro — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-accuracy Pro tier model featuring 1.05M context window, test-time reasoning compute, and advanced computer use.
- **Provider / access:** OpenAI API (`gpt-5.5-pro-2026-04-23`), Azure OpenAI Service.
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff 2026-02.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** 1,050,000 tokens input, 128,000 max output tokens (verified via OpenAI announcement).
- **Modalities:** text, image in; text out; reasoning yes (test-time reasoning compute); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $30.00 / $180.00 / $7.50 cached per 1M tokens.
- **Architecture:** Proprietary high-capacity multimodal transformer model with test-time compute.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **79.4%** (OpenAI launch report)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (OpenAI launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **49** (Artificial Analysis mid-2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **86.2%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: 99.6% needle-in-a-haystack retrieval accuracy across 1M window.

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval 79.4% score for professional agentic tool execution.
- **Reasoning: 94/100.** GPQA Diamond 81.2% score with test-time reasoning compute.
- **Context window: 90/100.** Verified 1.05M token context window with 128K max output.
- **Multimodal: 80/100.** High performance text and vision input capabilities.
- **Coding: 94/100.** Outstanding 86.2% score on SWE-bench Verified.
- **Cost efficiency: 50/100.** Premium professional pricing tier ($30.00 in / $180.00 out per 1M).
- **Overall Score: 90/100.** Flagship professional model for complex software engineering and high-accuracy research.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
