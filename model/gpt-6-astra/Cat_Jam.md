# GPT-6 Astra — findings by Cat Jam

- Source: OpenAI / GPT-6 Astra (`opencode/gpt-6-astra`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's most capable flagship model for demanding end-to-end work: SOTA on computer use, browsing, software engineering, cybersecurity (Critical under Preparedness Framework), science, and professional work.
- **Provider / access:** OpenAI API (`gpt-6-astra`), Microsoft Azure, AWS Bedrock, ChatGPT Plus/Pro/Business/Enterprise. Chat Completions and Responses APIs. Text/image input, text output. No fine-tuning/Realtime.
- **Release / knowledge:** Released 2026-09-03/04 (limited then broad); knowledge cutoff 2026-04-30.
- **IDs:** `gpt-6-astra` (OpenAI), `openai/gpt-6-astra` (OpenRouter)
- **Context window:** 1,050,000 tokens (922,000 max input / 128,000 max output). New Codex context-preservation feature across windows. Long-context repricing above 272K input.
- **Modalities:** Text, image in; text out. Reasoning effort low/medium/high/xhigh/max. Tool use (computer use, web search, file search, code interpreter, image gen). PDF? gateway-exposed only; official modality text+image only. No audio/video input.
- **Pricing (as of 2026-10-16):** Standard $10/$50 per 1M (cached $1, cache write $12.50); >272K input $20/$75; Batch/Flex 50%; Fast mode 2x. Premium-priced flagship.
- **Architecture:** Proprietary transformer; hybrid reasoning. No open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59.1%** (AA max) / GPT-5.6 Sol 37.3, C Fable 55.8
- AutomationBench-AA: **68.5%** (AA max)
- GDPval-AA v2.1: **1573** Elo (AA) — drops ~45 Elo vs GPT-5.6 Sol
- AA-Briefcase v1.1: **1570** (AA)
- OSWorld/computer use: OpenAI claims SOTA on computer/browser use; no single OSWorld number in sampled data
- FrontierCode 1.1 Main: **53.3%** / Extended **64.5%**
- Internal DB migration tasks: **63.9%** (OpenAI)
- MCP Atlas / ClawProBench: no verified public score found in sampled data

Reasoning / knowledge:

- AA Intelligence Index (max): **52.7/53** (AA article/OnlySOTA)
- GPQA Diamond: **96.0/96.1%**
- HLE: AA-HLE **54.7%**, HLE est 67.4% (benchgap)
- AA-LCR v1.1: **80.7%**
- CritPt: **31.7%**
- Omniscience Accuracy / Non-Halluc: **62.6% / 48.7%**
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI vendor)
- FrontierMath Tier 4: **98%** saturation, open problems solved (OpenAI)
- ARC-AGI-3: **99.9%** (OpenAI)
- ExploitBench: **100%** (OpenAI)
- AIME26 (est): ~98
- Knowledge cutoff April 2026

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI table)
- Terminal-Bench 4.0: **59.1%**
- Terminal-Bench Science 0.1: **64.6%**
- FrontierCode 1.1 Main/Extended: **53.3% / 64.5%**
- SWE-bench Verified (est): ~95.3
- SWE-bench Pro (est): ~86.7
- LiveCodeBench (Vals): ~89.0
- FrontierSWE v2 (not reported in open table) — no number found
- AA Coding Agent Index (max): **62** (Codex)

Long context:

- 1,050,000 context with cross-window note preservation in Codex. No independent MRCR/RULER score in sampled data; long-context repricing above 272K.

### Normalized scores (1–100)

- **Tool use: 93/100.** TB4.0 59.1, AutomationBench 68.5, FrontierCode, computer/browser use SOTA per OpenAI, GDPval 1573 (drops vs Sol). Strong agentic computer use.
- **Reasoning: 94/100.** GPQA 96.0, AA Index 52.7, HLE 54.7/67.4, LCR 80.7, CritPt 31.7; FrontierMath 98% / ARC-AGI-3 99.9% saturated support frontier reasoning; Omniscience 62.6 caps slightly.
- **Context window: 94/100.** 1,050,000 tokens with cross-window retrieval agent. No published retrieval benchmark caps from perfect.
- **Multimodal: 78/100.** Official modalities text+image input, text output. No native audio/video/PDF input (gateway may expose PDF). Strong image reasoning but narrower native coverage than multimodal-native rivals.
- **Coding: 93/100.** DeepSWE 74.1, TB4.0 59.1, Terminal-Bench Science 64.6, FrontierCode Main/Extended 53.3/64.5, SWE-Atlas QnA 62. Lead on Coding Agent Index w/ Codex. SWE-bench Verified est 95+.
- **Cost efficiency: 35/100.** $10/$50 per 1M with premium pricing, no free tier, cached $1. Strong unit-cost savings via fewer tokens/retries but headline price is high; batch halves to $5/$25. Premium flagship.
- **Overall Score: 90/100.** Mean of (93 + 94 + 94 + 78 + 93) / 5 = 90.4. Best all-around flagship for computer use and science/coding, at premium pricing.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs/blog/model page, AWS docs, Artificial Analysis, benchgap, OnlySOTA, apidog, llmtr, layer3labs, qcode); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
