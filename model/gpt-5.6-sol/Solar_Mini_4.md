# GPT-5.6 Sol — findings by Solar_Mini_4

- Source: OpenAI (`gpt-5.6-sol`), official API doc `https://developers.openai.com/api/docs/models/gpt-5.6-sol`; announcement `https://community.openai.com/t/introducing-gpt-5-6-series-sol-terra-and-luna-coming-july-9-10am-pt/1384931`; benchmarks Artificial Analysis July 9, 2026 (`https://artificialanalysis.ai/articles/gpt-5-6-has-landed`), BenchGap 2026-11-07 (`https://benchgap.net/model/gpt-5-6-sol`), 
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (OpenAI)
- **Short description:** OpenAI's flagship model for complex professional work, built for frontier reasoning and long-horizon agentic work. One of three GPT-5.6 variants (Sol, Terra, Luna); Sol leads the family on frontier reasoning and coding and is the "simple" flagship corresponding to the unsuffixed GPT-5.6 tier.
- **Provider / access:** OpenAI — GPT-5.6 Sol route via the GPT-5.6 alias (`gpt-5.6-sol` ID). APIs: Chat Completions, Responses, Realtime, Realtime translation/transcription, Assistants, Batch, Embeddings, Image generation/edit, Speech generation, Transcription, Translation, Moderation, Completions (legacy). Available via Cloud (Azure? no — OpenAI cloud) — check `https://platform.openai.com/docs/models/gpt-5.6-sol` for latest.


### Raw benchmarks found

> Sources: OpenAI announcement "Introducing GPT-5.6 series: Sol, Terra and Luna" (2026-06-26, community dev blog); OpenAI API model card (2026-11-08); Artificial Analysis "GPT-5.6 benchmarks across Intelligence, Speed and Cost" (2026-07-09); BenchGap 2026-11-07. Values for GPT-5.6 Sol per source, measured vs estimated noted.

> **Tool use / agentic:**
> - Terminal-Bench 2.1: **new SOTA** for GPT-5.6 Sol (OpenAI announcement 2026-06-26) — command-line workflows requiring planning, iteration and tool coordination.
> - AA Coding Agent Index (DeepSWE, Terminal-Bench v2, SWE-Atlas-QnA): **80 points — leading all three evaluations**, tying Grok 4.5 in SWE-Atlas-QnA (Artificial Analysis 2026-07-09).
> - Software engineering agentic index: **best-in-class per-task cost** vs Fable 5/Opus 4.8 in Claude Code (Artificial Analysis).
> - ExploitBench: **efficiency frontier** for vulnerability research/exploitation at ~1/3 of the output tokens of a leading frontier system (OpenAI announcement).
> - SecureBio evaluations: Virology Capabilities Test **53.5%**, Molecular Biology **60.0%**, Human Pathogen Capabilities **68.4%**, World-Class Bio **68.3%** (~9pp above GPT-5.5) (OpenAI announcement).
> - Brainbenchmark (long-horizon): **not verified** in my sources (no public figure found).

> **Reasoning / knowledge:**
> - Artificial Analysis Intelligence Index: **59** at max reasoning (1 point below Claude Fable 5, ranking #2 overall 2026-07-09).
> - GDPval-AA v2: **similar ability to complete economically valuable tasks** to Claude Fable 5 (max) (Artificial Analysis 2026-07-09).
> - AA-Omniscience Index: **minor improvement over GPT-5.5** (accuracy uplift with higher hallucination rate) (Artificial Analysis).
> - AA-Briefcase: **highest Presentation Elo of any model**; ranks #2 only to Fable 5 (Rubric Score 42% vs 56% for Fable 5); Analytical Quality Elo 1592 vs Fable 5's 1764 (Artificial Analysis).
> - HLE / GPQA Diamond: **no verified public score** for GPT-5.6 in my sources (not reported on the public leaderboard snapshot).

> **Coding:**
> - Terminal-Bench 2.1: **new SOTA** for the model family (OpenAI announcement 2026-06-26).
> - Code interpreter, computer use, MCP, web search, file search, hosted shell, skills, tool search, apply patch — all supported (OpenAI API card).


### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 2.1 new SOTA for the family (OpenAI announcement 2026-06-26), AA Coding Agent Index 80 leading all three of its evaluations (DeepSWE, Terminal-Bench v2, SWE-Atlas-QnA) and tying Grok 4.5 in SWE-Atlas-QnA; ExploitBench efficiency frontier at ~1/3 of the output tokens of a leading frontier system. Cap: no verified standalone tool-use leaderboard row for Sol (family claims; image-input-only modality).
- **Reasoning: 92/100.** Artificial Analysis Intelligence Index 59 at max reasoning (1 point below Claude Fable 5, ranking #2 overall); GDPval-AA v2 similar to Fable 5 (max); new max reasoning effort plus ultra mode (subagents) for long-horizon work. Cap: HLE/GPQA Diamond not reported in the public snapshot for GPT-5.6.
- **Context window: 95/100.** 1,050,000 tokens total — the largest of the GPT-5.6 trio — with 128K max output; cache-write pricing introduced at $5/MTok (1.25x input rate).
- **Multimodal: 68/100.** Text + image input only; no audio or video support; image-input capability cited via AA-Briefcase (highest Presentation Elo of any model at launch).
- **Coding: 95/100.** Terminal-Bench 2.1 new SOTA; AA Coding Agent Index 80 leading all three evaluations; SecureBio evaluations (Virology Capabilities Test 53.5%, Molecular Biology 60.0%, Human Pathogen Capabilities 68.4%, World-Class Bio 68.3%) ~9pp above GPT-5.5; strong function calling, computer use, MCP and hosted-shell tooling. Cap: FrontierCode (FrontierCode 1.1 Main 53.2% estimated) remains a hard frontier-coding outlier.
- **Cost efficiency: 93/100.** $4/$20 per 1M is a 20% input / 33% output reduction vs GPT-5.5, with $1.04 per-task cost at max reasoning on the AA Intelligence Index (about 1/3 the cost of Fable 5); promotional pricing until 2026-11-30.
- **Overall Score: 89/100.** (95 + 92 + 95 + 68 + 95) / 5 = 89.0 → 89 (half-up). Best-fit: the frontier "Sol" SKU of the GPT-5.6 family — strongest coding/agentic and science-reasoning performance at ~1/3 of Fable 5's cost, capped by image-input-only multimodal and a 128K output cap.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (OpenAI API model card 2026-11-08; OpenAI Developer Community announcement 2026-06-26; Artificial Analysis GPT-5.6 benchmarks article 2026-07-09; BenchGap 2026-11-07); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI API — GPT-5.6 Sol model](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
  - [OpenAI Developer Community — Introducing GPT-5.6 series: Sol, Terra and Luna](https://community.openai.com/t/introducing-gpt-5-6-series-sol-terra-and-luna-coming-july-9-10am-pt/1384931)
  - [Artificial Analysis — GPT-5.6 benchmarks across Intelligence, Speed and Cost](https://artificialanalysis.ai/articles/gpt-5-6-has-landed)
  - [BenchGap — GPT-5.6 Sol benchmark scores](https://benchgap.net/model/gpt-5-6-sol)
  - [Artificial Analysis — GPT-5.6 Sol model page](https://artificialanalysis.ai/models/gpt-5-6-sol)


> **Long context / multimodal:**
> - Context window 1,050,000 tokens (largest of the GPT-5.6 trio) with 128K max output (OpenAI API card).
> - Video/audio: **not supported** — text + image input only.

- **Release / knowledge:** Preview 2026-06-26; general availability July 9, 2026; knowledge cutoff 2026-02-16 (official).
- **IDs:** `gpt-5.6-sol` (OpenAI API; the `gpt-5.6` alias routes to Sol); `openai.gpt-5.6-sol` (Amazon Bedrock).
- **Context window:** 1,050,000 total tokens, 128,000 max output (official API docs).
- **Modalities:** Text input/output; image input only; audio and video NOT supported.
- **Pricing (as of 2026-11-08):** $4/MTok input, $20/MTok output (20% lower input and 33% lower output vs GPT-5.5); cached input $0.40/MTok; cache writes $5/MTok (1.25x input rate); promotional pricing until 2026-11-30. Other family tiers: Terra $2.50/$15, Luna $1/$6 (same cache structure).
- **Architecture:** Proprietary, closed weights (OpenAI); parameter count not disclosed.
