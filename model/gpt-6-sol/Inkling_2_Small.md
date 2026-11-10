# GPT-6 Sol — findings by Fledge Alpha

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid-tier GPT-6 reasoning model (Sept 22, 2026), priced for agentic coding at roughly half of GPT-5.6 Sol's rates.
- **Provider / access:** OpenAI API (`gpt-6-sol`), ChatGPT Work/Codex; Responses API and Chat Completions.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-04-20.
- **IDs:** `openai/gpt-6-sol`
- **Context window:** 1,050,000 tokens (922K input, 128K max output); >272K input billed at 2x input / 1.5x output.
- **Modalities:** text + image in; text out; reasoning effort none→max; full tool suite (web/file search, code interpreter, computer use, MCP).
- **Pricing (as of 2026-10-02):** $2/M input, $0.20/M cached input, $2.50/M cache writes, $10/M output; batch/flex 50% off.
- **Architecture:** proprietary; GPT-6 family below flagship Astra.

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6: **33.2%** at xhigh, $0.27/task (OpenAI)
- Agents' Last Exam V1: **56.4%** at max (OpenAI)
- OSWorld 2.0 (offline): **60.5%** at xhigh, **64.4%** at max (OpenAI)
- GDPval-AA: **1487 Elo** (Artificial Analysis)

Reasoning / knowledge:

- AA Intelligence Index: **48** (Artificial Analysis, max effort)
- AA-Omniscience hallucination rate: **60%** (vs 92% for GPT-5.6 Sol)
- Factual error rate (internal): ~4.5–4.6% at high/xhigh effort

Coding:

- DeepSWE v1.1: **68.8%** at max, $2.74/task (OpenAI)
- FrontierCode 1.1: **49.3%** at max (OpenAI)
- AA Coding Agent Index: **57** (Artificial Analysis)
- Terminal-Bench 4.0: no verified public score found

Long context:

- 1.05M window verified across listings; no public MRCR/RULER retrieval number.

### Normalized scores (1–100)

- **Tool use: 78/100.** Agents' Last Exam 56.4% and OSWorld 64.4% at max effort are strong mid-tier results; AutomationBench 33.2% is modest.
- **Reasoning: 72/100.** Intelligence Index 48 and improved factuality (60% hallucination rate) are competitive for its tier; no public GPQA/HLE figures to confirm frontier standing.
- **Context window: 95/100.** 1.05M tokens, 128K output, though >272K inputs incur a price surcharge.
- **Multimodal: 65/100.** Text + image input, text-only output; no audio/video native I/O.
- **Coding: 78/100.** DeepSWE 68.8% and FrontierCode 49.3% sit just below GPT-5.6 Sol/Fable 5 at ~1/5 the cost per task.
- **Cost efficiency: 85/100.** $2/$10 with 90% cached-read discount makes it one of the cheapest 1M-context reasoning options.
- **Overall Score: 78/100.** Mean of the five quality dims; best fit for default agentic coding at budget pricing.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch post, Artificial Analysis, bench aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
