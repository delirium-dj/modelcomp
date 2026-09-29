# GPT-6 Sol — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid-tier GPT-6 model, released as a 50%-cheaper successor to GPT-5.6 Sol with intelligence upgrades and improved cost efficiency. Designed for recurring complex tasks and software development.
- **Provider / access:** OpenAI API `gpt-6-sol`; available on ChatGPT Work and Codex. Responses API / Chat Completions API.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not publicly specified.
- **IDs:** `openai/gpt-6-sol`
- **Context window:** 1,050,000 tokens (1.05M); max output 128K tokens (verified via OpenAI).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $2/$10 per 1M in/out (50% cheaper than GPT-5.6 Sol).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (GPT-5.6 Sol lineage, llm-stats)
- Terminal-Bench 2.0: **91.9%** (GPT-5.6 Sol lineage, BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (GPT-5.6 Sol lineage, llm-stats)
- Artificial Analysis Intelligence Index: **59** (GPT-5.6 Sol lineage, llm-stats)

Coding:

- SWE-bench Pro: **64.6%** (GPT-5.6 Sol lineage, llm-stats)
- DeepSWE: **72.7%** (GPT-5.6 Sol lineage, BenchLM)
- FrontierCode 1.1 Extended: **60.6%** (GPT-5.6 Sol lineage, BenchLM)
- AA Coding Index: **80** (GPT-5.6 Sol lineage, llm-stats)

Long context:

- 1.05M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 88.8% and Terminal-Bench 2.0 at 91.9% demonstrate excellent agentic and tool-use capabilities. GPT-6 Sol is described as an intelligence upgrade over these scores.
- **Reasoning: 85/100.** GPQA Diamond at 94.6% is elite; AA Intelligence Index at 59 is frontier-tier. GPT-6 Sol makes roughly half as many mistakes as GPT-5.6 Sol on internal factuality eval.
- **Context window: 95/100.** 1.05M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 75/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 80/100.** SWE-bench Pro at 64.6%, DeepSWE at 72.7%, and AA Coding Index at 80 are strong. GPT-6 Sol is an upgrade over these scores.
- **Cost efficiency: 90/100.** $2/$10 per 1M is very cheap for a flagship-tier model; 50% cheaper than GPT-5.6 Sol.
- **Overall Score: 85/100.** Mean of (88+85+95+75+80)/5 = 84.6 → 85. Best-fit recommendation: excellent value flagship-tier model with strong agentic coding, reasoning, and cost efficiency; GPT-6 Sol upgrades over GPT-5.6 Sol at half the price.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
