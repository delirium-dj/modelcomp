# GPT-6.1 Sol — findings by Gemini (google/gemini-2.5-flash)

* Source: OpenAI/gpt-6.1-sol
* Date: 2026-10-09
* Overview and scoring methodology: `../../model-comparison.md`
* Cross-model signed log: `../../model-findings.md`

## Model card

* **Name:** GPT-6.1 Sol (Paid tier; no standard free-tier model ID on OpenCode Zen)
* **Short description:** OpenAI's mid-tier reasoning and agentic model in the GPT-6 series, designed for complex coding, computer use, and professional workflows. It delivers near-Astra capability at approximately one-fifth of the API token cost, positioning between GPT-6 Astra and GPT-6 Luna.
* **Provider / access:** OpenAI API, Microsoft Azure AI Foundry, Cloudflare AI (`gpt-6.1-sol`). Agentic tools require the Responses API (tool calling is unavailable via the legacy Chat Completions API).
* **Release / knowledge:** 2026-09-29 release; knowledge cutoff April 2026.
* **IDs:** `openai/gpt-6.1-sol` (state explicitly: no Free ID exists on Zen)
* **Context window:** 1,050,000 tokens total input (~1.05M); 128,000 max output tokens (verified via OpenAI documentation and Microsoft Foundry catalog).
* **Modalities:** Text and image input; text output; reasoning support (low, medium, high, xhigh, max effort levels); tool calling (function calling, computer use, web search, code interpreter, MCP, tool search); JSON mode / structured outputs. Native audio and video inputs are not supported.
* **Pricing (as of 2026-10-09):** $2.00 per 1M input tokens, $10.00 per 1M output tokens, $0.10 per 1M cached input tokens. Paid API model; free-tier API access is not offered natively by OpenAI.
* **Architecture:** Proprietary architecture with configurable reasoning effort; open-weights license not available.

### Raw benchmarks found

Agent / tool use:

* Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0 reported at 56.1% max effort by Artificial Analysis)
* Tau3-Banking / Tau2-Bench: **no verified public score found**
* GDPval-AA: **53.8%** (Artificial Analysis max effort; GDP.pdf outscores Claude Opus 5.5)
* Claw-Eval / ClawProBench: **no verified public score found**
* Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (OSWorld 2.0 offline set reported at 71.4% max effort in OpenAI System Card Addendum; AutomationBench 1.0.6 at 36.1%)
Reasoning / knowledge:
* GPQA Diamond: **no verified public score found** (94.8% reported in composite Bedrock auto-routing evaluations)
* HLE: **52.9%** (Artificial Analysis max effort / ShawnHack 51.8%)
* LCR / MLCR: **83.0%** (Artificial Analysis AA-LCR max effort)
* CritPt: **31.7%** (Artificial Analysis CritPt max effort)
* Artificial Analysis Intelligence Index / BenchLM overall: **52 / #6** (Artificial Analysis Intelligence Index: 52 / #6 overall; BenchLM overall score: 81.36 / #6 of 216)
* Omniscience Accuracy / Hallucination Rate: **62.1% / 54.0%** (Artificial Analysis AA-Omniscience Accuracy 62.1% max effort; Hallucination rate 54.0%)
Coding:
* SWE-bench Verified / SWE-Pro: **no verified public score found**
* LiveCodeBench: **no verified public score found**
* SciCode / AA-SciCode: **55.8%** (Artificial Analysis AA-SciCode high effort)
* Vibe Code Bench: **88.9%** (Vals AI Vibe Code Bench v1.1)
* DeepSWE / Coding Index / other: **75.2%** (DeepSWE v1.1 high effort, OpenAI System Card Addendum / Artificial Analysis; BenchLM CodingRank 70.8 / #8)
Long context:
* no long-context retrieval reported (1.05M token context window documented, but MRCR/RULER retrieval accuracy at 512K+ not publicly reported)

### Normalized scores (1-100)

* **Tool use: 76/100.** Strong agentic performance evidenced by 71.4% on OSWorld 2.0 (max effort) and 56.1% on Terminal-Bench 4.0; capped by lack of official Terminal-Bench 2.1 and Tau3 public scores.
* **Reasoning: 87/100.** Verified 52.9% on HLE (max effort, exceeding frontier 40%+ threshold) and #2 ReasoningRank on BenchLM; capped by AA Intelligence Index of 52 relative to top-tier 60+ benchmark baseline.
* **Context window: 95/100.** Verified 1,050,000 (1.05M) token context window (>=1M tier); capped below 100 due to lack of public 512K+ MRCR/RULER retrieval accuracy data.
* **Multimodal: 68/100.** Native text and vision (image) input with text output (+image tier); capped by absence of native audio/video inputs or non-text outputs.
* **Coding: 91/100.** Frontier coding capability evidenced by 75.2% on DeepSWE v1.1 (high effort) and 55.8% on SciCode; capped slightly below flagship models like GPT-6 Astra.
* **Cost efficiency: 78/100.** Standard API pricing of $2.00/1M input and $10.00/1M output ($0.10 cached) delivers near-Astra performance at ~20% of the cost.
* **Overall Score: 83.4/100.** Mean of five non-cost dimensions ((76 + 87 + 95 + 68 + 91) / 5 = 83.4); best suited as a high-efficiency default for agentic software engineering, repository reviews, and multi-step enterprise workflows.

---

## Signature

* Provided by: **Gemini (google/gemini-2.5-flash)** — 2026-10-09
* Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
* Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.