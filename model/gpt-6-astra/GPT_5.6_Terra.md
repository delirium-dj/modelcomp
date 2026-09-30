# GPT-6 Astra — findings by GPT-5.6 Terra

- Source: OpenAI / GPT-6 Astra
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's highest-capability model for difficult end-to-end reasoning, coding, computer use, research, and document creation.
- **Provider / access:** OpenAI Responses and Chat Completions APIs as `gpt-6-astra`; also available through ChatGPT, Azure, and AWS Bedrock. Supports function calling, structured outputs, web/file search, computer use, hosted shell, MCP, and other Responses tools.
- **Release / knowledge:** 2026 release; April 30, 2026 knowledge cutoff.
- **IDs:** `openai/gpt-6-astra`.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens (OpenAI model page).
- **Modalities:** Text and image input; text output; reasoning effort low/medium/high/xhigh/max; audio and video are not supported as direct inputs.
- **Pricing (as of 2026-09-18):** $10 input / $50 output per 1M tokens; cached input $1 and cache writes $12.50 per 1M. Batch and Flex are 50% of Standard pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **59.3%** (OpenAI launch evaluation, computer use).
- OSWorld 2.0: **72.6%** offline-set partial score (OpenAI launch evaluation).
- ScreenSpot-Pro: **92.7%** without tools (OpenAI launch evaluation).
- AutomationBench: **41.4%** (OpenAI launch evaluation).
- BrowseComp: **91.5%** (OpenAI launch evaluation).
- Terminal-Bench 4.0: **57.9%** (OpenAI launch evaluation).

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI launch evaluation).
- Humanity's Last Exam with tools: **57.2%** (OpenAI launch evaluation).
- FrontierMath Tier 4 v2: **97.6%** (OpenAI launch evaluation).
- ARC-AGI-3: **99.9%** (OpenAI launch evaluation).
- Artificial Analysis Intelligence Index v4.1.1: **61.2** (OpenAI launch comparison).

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI launch evaluation).
- FrontierCode 1.1 Extended / Main: **64.5% / 53.3%** (OpenAI launch evaluation).
- Artificial Analysis Coding Agent Index v1.4: **67.0** (OpenAI launch comparison).
- SRE-Bench: **88.0%** single attempt and **99.2%** within four attempts (OpenAI launch evaluation).

Long context:

- OpenAI MRCR v2, 8-needle: **100.0%** at 256K–512K and **96.3%** at 512K–1M (OpenAI launch evaluation).

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong OSWorld, ScreenSpot-Pro, BrowseComp, and Terminal-Bench 4.0 results demonstrate leading computer and browser operation; some broad automation tasks remain difficult.
- **Reasoning: 98/100.** GPQA 96.0%, FrontierMath 97.6%, and ARC-AGI-3 99.9% support a near-ceiling score, while HLE-with-tools is materially lower.
- **Context window: 100/100.** A 1.05M-token window with 100% and 96.3% measured MRCR retrieval across 256K–1M supports the ceiling.
- **Multimodal: 60/100.** Native image input and image-generation tooling are useful, but direct audio and video input are explicitly unsupported and output is text-only.
- **Coding: 96/100.** DeepSWE 74.1%, Terminal-Bench 4.0 57.9%, and especially the SRE-Bench result establish exceptional coding and software-analysis ability; public independent results remain limited.
- **Cost efficiency: 26/100.** $10/$50 per 1M tokens is premium pricing, even though batch/Flex discounts and lower task-token use can improve effective cost.
- **Overall Score: 89.6/100.** Mean of Tool, Reasoning, Context, Multimodal, and Coding; best for high-stakes, long-context agent workflows where capability outweighs token cost.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: Fresh public-web research using OpenAI's model page and launch evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
