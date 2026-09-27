# GPT-6 Astra — findings by Pixel Canary

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra`, routers list `openai/gpt-6-astra`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra — OpenAI's September 2026 flagship, top of the current GPT-6 line (Astra above Sol above Terra tiers).
- **Short description:** Frontier reasoning model for end-to-end work: complex reasoning, coding, computer use, research and document creation, offered with effort levels from low through max.
- **Provider / access:** OpenAI API (`gpt-6-astra`, Responses API; official docs `developers.openai.com` / launch post `openai.com/index/gpt-6-astra/`); Amazon Bedrock as `openai.gpt-6-astra`; also ZenMux, AIHubMix, Opper, Ofox and ~25 tracked offerings; Vercel AI Gateway carries a premium `openai/gpt-6-astra-fast` variant.
- **Release / knowledge:** released 2026-09-04; knowledge cutoff 2026-04-30 (LLMBoard / LLM Stats: April 2026).
- **IDs:** `openai/gpt-6-astra`; Bedrock `openai.gpt-6-astra`; fast tier `openai/gpt-6-astra-fast`. No Free ID on Zen — paid only.
- **Context window:** 1,050,000 (1.1M) input / 128,000 max output tokens (LLMBoard and LLM Stats agree).
- **Modalities:** text + image in; text out. Reasoning yes (effort low→max); tool calls and computer use supported (evaluated on ScreenSpot Pro and Agents' Last Exam); structured output supported. **No** audio/video input and no image/audio generation in the tracked modality record.
- **Pricing (as of 2026-09-27):** $10 / 1M input, $50 / 1M output, cached input $1 / 1M (OpenAI); Bedrock $11 / $55; cheapest third-party route $8 / $40 (Ofox); `gpt-6-astra-fast` $20 / $100. Blended $11.9/1M at 20:1 in:out. Paid only — no free tier.
- **Architecture:** proprietary, parameters undisclosed, hosted-only.

### Raw benchmarks found

> LLMBoard profile (rows evaluated 2026-09-25 / 26); "#x/y" is LLMBoard's rank among models with a published score on that benchmark.

Agent / tool use:

- Agents' Last Exam: **59.30%** (#1/21)
- ScreenSpot Pro (GUI / computer use): **92.70%** (#1/26)
- SEC-bench Pro (security engineering): **85.40%** (#1/7)
- Terminal-Bench-Science 0.1: **64.60%** (#1/3)
- LM Arena Agent (praise/complaint): **34.62%** (#1/39)
- Terminal-Bench 2.1 / 4.0, GDPval-AA, τ²-Bench, Claw-Eval, Toolathon, MCP-Atlas: no verified public score found on the sources consulted

Reasoning / knowledge:

- GPQA: **96.00%** (#1/250); AA GPQA Diamond re-run **96.26%** (#1/199)
- ARC-AGI v2: **95.00%** (#1/19); ARC-AGI (v1): **98.50%** (#1/11); ARC-AGI-3: **99.90%** (#1/5)
- FrontierMath Tier 4 (v2): **97.60%** (#1/4)
- LiveBench (2026-06-25): reasoning **92.65**, math **96.81**
- LifeSciBench: **60.30%** (#1/4); GeneBench-Pro: **37.80%** (#1/4)
- HLE / CritPt / Omniscience-hallucination for this ID: no verified public score found
- Composite: LLMBoard score **95.8** (80% coverage, 22 benchmark families) — highest of the tracked OpenAI line (GPT-5.6 Sol 88.99, GPT-6 Sol 79.88)

Coding:

- LM Arena Webdev: **1791.65** rating (#1/100)
- ExploitBench: **100.00%** (#1/8); ExploitGym: **42.40%** (#1/8)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE: no verified public score found on the sources consulted (LLMBoard lists 45 benchmark rows, 30 exposed publicly in the profile table)

Long context:

- MRCR / RULER / GraphWalks for this exact ID: no verified public score found (the same family's GPT-5.6 Sol posts GraphWalks BFS 90.70% at >128k and 77.10% at 1M, which bounds — but does not prove — Astra's retrieval quality).

Runtime: **30 tok/s** output, **5.15 s** p95 TTFT via OpenAI; Bedrock/Vercel fast tier trades price for latency.

### Normalized scores (1–100)

- **Tool use: 96/100.** #1 on Agents' Last Exam 59.30%, ScreenSpot Pro 92.70%, SEC-bench Pro 85.40% and LM Arena Agent — best measured agent in the tracker; capped because Terminal-Bench 2.1/4.0 and GDPval-AA evidence is missing for this ID.
- **Reasoning: 97/100.** GPQA 96.00% / AA 96.26%, ARC-AGI v2 95.00%, ARC-AGI-3 99.90% and FrontierMath T4 97.60% are the current frontier ceiling; only the unprobed knowledge-hallucination (Omniscience) axis caps a perfect score.
- **Context window: 92/100.** 1.1M input / 128K output with $1/1M cached input; capped by the absence of published long-context retrieval numbers for this ID.
- **Multimodal: 74/100.** Text + image input with text-only output — no audio, video or PDF input recorded and no image/audio generation; strong within its modalities (ScreenSpot Pro 92.70%) but the narrowest modality set among frontier models.
- **Coding: 94/100.** LM Arena Webdev 1791.65 (#1/100) plus ExploitBench 100% and SEC-bench Pro 85.40% show top-of-board real-world engineering; capped because SWE-bench Verified / Terminal-Bench numbers are not published for this ID.
- **Cost efficiency: 60/100.** $10 / $50 per 1M with $1 cached input and a $8/$40 third-party floor, no free tier, and measured blended $11.9/1M — frontier pricing that only cache-heavy agent workloads make defensible.
- **Overall Score: 90.6/100.** Half-up mean of (96 + 97 + 92 + 74 + 94) = 453 / 5 = 90.6, Cost excluded. Best fit: maximum-autonomy agent and research workloads where being #1 on agents/reasoning outweighs the $10/$50 price and the image-and-text-only modality set.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile with provider pricing table, LLM Stats model page incl. cache pricing and knowledge cutoff); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
