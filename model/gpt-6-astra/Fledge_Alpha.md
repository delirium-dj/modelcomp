# GPT-6 Astra — findings by Fledge Alpha

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's Sept 3, 2026 flagship (GPT-6 generation), first model gated at the Preparedness Framework's "Critical" cyber threshold.
- **Provider / access:** OpenAI API (`gpt-6-astra`), Azure, AWS Bedrock, ChatGPT; Responses and Chat Completions.
- **Release / knowledge:** 2026-09-03/04; knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 1,050,000 tokens; 128K max output; >272K prompt billed at $20/$75.
- **Modalities:** text + image in; text out; reasoning effort low→max; full tool surface incl. hosted shell, computer use, MCP.
- **Pricing (as of 2026-10-02):** $10/M in, $1/M cached, $12.50/M cache write, $50/M out; Fast 2x; Batch/Flex 50% off.
- **Architecture:** proprietary, MoE lineage, undisclosed params.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4–89.1%** (tbench.ai / AA)
- Terminal-Bench 4.0: **57.9%** (OpenAI; AA independent 59.6% at xhigh)
- OSWorld 2.0 (offline): **72.6%** (OpenAI)
- AutomationBench: **41.4%** (Zapier/OpenAI)
- Agents' Last Exam: **34.2%** (Snorkel)
- BrowseComp: **91.5%** (OpenAI)

Reasoning / knowledge:

- GPQA Diamond: **96.0–96.1%** (OpenAI/AA)
- Humanity's Last Exam: **54.7%** no-tools (AA) / **57.2%** with tools (OpenAI)
- ARC-AGI-2: **95.0%** (arcprize.org)
- FrontierMath Tier 4 v2: **97.6%** (OpenAI)
- AA Intelligence Index: **53** max (AA, matching Claude Sonnet 5.5 tier)

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI; tied for board top with Gemini 3.8 Flash, Claude Opus 5)
- FrontierCode 1.1 Main: **53.3%**; Extended: **64.5%**
- AA Coding Agent Index v1.4: **67.0**
- Terminal-Bench-Science 0.1: **64.6–68.1%**

Long context:

- MRCR v2 8-needle: **100%** @256K–512K, **96.3%** @512K–1M (OpenAI).

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 ~88% and OSWorld 72.6% are frontier; AutomationBench 41.4% is mid-pack.
- **Reasoning: 92/100.** GPQA 96%, FrontierMath T4 97.6%, HLE-with-tools 57.2% — top published tier; ARC-AGI-3 vendor number unreliable (harness-dependent).
- **Context window: 97/100.** 1.05M window with 96.3% MRCR at 512K–1M — the strongest verified long-context result in the catalog.
- **Multimodal: 68/100.** Text and image input; no audio/video input modality.
- **Coding: 84/100.** DeepSWE 74.1% tied for the lead; FrontierCode 64.5% strong; no SWE-bench Verified published.
- **Cost efficiency: 55/100.** $10/$50 is premium; justified only for frontier-agentic workloads, with a hard surcharge past 272K input.
- **Overall Score: 85/100.** Mean of the five quality dims; best fit for maximum-capability long-horizon agents where cost is secondary.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch post, AA, tbench.ai, deepswe.datacurve.ai, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
