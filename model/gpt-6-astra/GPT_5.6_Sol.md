# GPT-6 Astra — findings by GPT 5.6 Sol

- Source: OpenAI/GPT-6 Astra
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's proprietary flagship reasoning model for demanding coding, research, professional, computer-use, and long-running agent workflows.
- **Provider / access:** OpenAI Responses and Chat Completions APIs as `gpt-6-astra`, ChatGPT, Codex, Microsoft Azure, and AWS Bedrock.
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6-astra`; no free API tier.
- **Context window:** 1,050,000 tokens with up to 128,000 output tokens.
- **Modalities:** Text and image input; text output; reasoning tokens, streaming, function calling, structured output, web/file search, code interpreter, hosted shell, computer use, MCP, and skills. Audio and video input are unsupported.
- **Pricing (as of 2026-10-04):** $10/1M input, $1 cached input, $12.50 cache writes, and $50/1M output. Requests above 272K input cost 2x input/cache and 1.5x output; Batch/Flex are 50% of Standard and Fast is 2x.
- **Architecture:** Proprietary; OpenAI does not disclose parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59.09%** (Artificial Analysis independent run); OpenAI reports **57.9%**.
- Tau3-Banking: **41.44%** (Artificial Analysis).
- OSWorld 2.0 offline partial score: **72.6%** (OpenAI).
- Agents' Last Exam: **59.3%** (OpenAI).
- AutomationBench: **41.4%** (OpenAI).
- GDPval-AA v2.1: **1541.89 Elo** (Artificial Analysis).

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI).
- HLE: **54.68%** (Artificial Analysis independent run); OpenAI reports **57.2%** with tools.
- MLCR-AA: **35.00%** (Artificial Analysis).
- Artificial Analysis Intelligence Index: **53** (independent current index; OpenAI's cited v4.1.1 result was 61.2).
- ARC-AGI-3: **62.71%** standard ARC Prize run and **99.95%** with provider adapter.
- FrontierMath Tier 4 v2: **97.6%** (OpenAI).

Coding:

- SWE-Bench Pro V2 Full / Hard: **96.90% / 90.20%** (Scale AI / SEAL).
- DeepSWE v1.1: **74.12%** (Datacurve, rank 1 of 28 listed by AIEvals).
- Vibe Code Bench v1.1: **89.59%** (Vals AI).
- FrontierCode 1.1 Extended / Main: **64.5% / 53.3%** (OpenAI).
- Code Migration: **67.74%** (Vals AI).

Long context:

- OpenAI MRCR v2 8-needle: **100.0%** at 256K–512K and **96.3%** at 512K–1M.

Multimodal:

- ScreenSpot-Pro without tools: **92.7%** (OpenAI image/UI understanding evaluation).
- Audio/video benchmarks: no verified public score found; the API model does not accept either modality.

Sources: [OpenAI launch and evaluations](https://openai.com/index/gpt-6-astra/), [official API model reference](https://developers.openai.com/api/docs/models/gpt-6-astra), [OpenAI safety overview](https://openai.com/index/safety-overview-gpt-6-astra/), and [AIEvals evidence index](https://aievals.app/models/gpt-6-astra).

### Normalized scores (1–100)

- **Tool use: 97/100.** Top-tier Terminal-Bench, OSWorld, AutomationBench, and broad native tool support demonstrate exceptional agency, with Tau3-Banking leaving some headroom.
- **Reasoning: 98/100.** GPQA 96%, FrontierMath 97.6%, and leading ARC-AGI results place Astra at the frontier, capped by imperfect HLE and MLCR.
- **Context window: 99/100.** A 1.05M-token window with 96.3% MRCR across 512K–1M is nearly best-in-class measured long-context use.
- **Multimodal: 70/100.** Strong image and UI understanding is useful, but native audio and video input are absent and output is text-only.
- **Coding: 97/100.** SWE-Bench Pro, DeepSWE, Terminal-Bench, and migration results show elite real-world engineering performance.
- **Cost efficiency: 55/100.** Capability is exceptional, but $10/$50 standard pricing and long-context surcharges are expensive despite caching and batch discounts.
- **Overall Score: 92/100.** Half-up mean of the five quality dimensions; best for difficult autonomous coding, research, computer-use, and million-token workflows where quality outweighs price.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official OpenAI documentation and independent benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
