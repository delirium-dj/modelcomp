# GPT-6 Astra — findings by Laguna XS 2.1

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's first GPT-6-generation flagship (announced 2026-09-03), succeeding GPT-5.6 Sol; state-of-the-art computer use, agentic coding and frontier math, first OpenAI model at the "Critical" cybersecurity threshold (advanced cyber gated behind OpenAI Daybreak).
- **Provider / access:** OpenAI API (`gpt-6-astra`, Chat Completions + Responses + Batch), Microsoft Azure, AWS Bedrock, ChatGPT Plus/Pro/Business/Enterprise (GPT-6 Astra Pro tier for paid business plans).
- **Release / knowledge:** announced 2026-09-03, API release 2026-09-04; knowledge cutoff 2026-04-30.
- **IDs:** `gpt-6-astra` (OpenAI API). No Zen Free ID found; free tier unsupported.
- **Context window:** 1,050,000 tokens; 128K max output (131,072 per LLMPodium). Prompts >272K input bill at 2x input/cache and 1.5x output.
- **Modalities:** text + image in; text out; reasoning yes (efforts low/medium/high/xhigh/max); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $10 / $50 per 1M in/out; cached input $1.00; cache write $12.50; Batch/Flex 50% of Standard; Fast mode 2x rates (up to ~2x speed).
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (offline, partial): **72.6%** (OpenAI; vs Sol 65.7, Opus 5 70.2) at ~40 min/task (~47% less time than Sol)
- ScreenSpot-Pro (no tools): **92.7%** (OpenAI)
- Agents' Last Exam: **59.3%** (OpenAI; vs Opus 5 55.5, Sol 53.6)
- AutomationBench: **41.4%** (OpenAI launch table; ahead of Fable 5.1 31.4, Sol 18.1)
- BrowseComp: **91.5%** (OpenAI)
- Terminal-Bench 4.0: **57.9%** (OpenAI; 57.7 per llm-stats; vs Fable 5.1 55.8, Opus 5 52.3)
- Artificial Analysis Coding Agent Index v1.4: **67.0** (OpenAI table; Opus 5 leads at 68.1)
- Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found (no GDPval row on launch page)
- Claw-Eval / ClawProBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; near-saturated)
- FrontierMath Tier 4 v2: **97.6%** (OpenAI; vs Fable 5.1 87.8)
- HLE (with tools): **57.2%**; no-tools **53.2%** (LLMPodium) — behind Fable 5.1 (65.0% with tools)
- ARC-AGI-1 / 2 / 3: **98.5 / 95.0 / 99.9** (OpenAI; ARC-AGI-3 via OpenAI's Responses-API provider harness — ARC Prize stateless runs score far lower)
- AA Intelligence Index v4.1.1: **61.2** (behind Fable 5.1 65.7, Opus 5 63.1)
- CritPt / LCR: no verified public score found

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI; vs Sol 72.7, Opus 5 73.7, Fable 5.1 67.4)
- SWE-bench Verified: **90.2%**; SWE-bench Pro: **67.0%** (LLMPodium — single secondary source, treat as provisional)
- FrontierCode 1.1 Extended / Main: **64.5% / 53.3%** (OpenAI)
- LiveCodeBench: **76.2%** (LLMPodium)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI; vs Fable 5.1 52.6)
- SRE-Bench (reverse engineering): **88.0%** single-attempt (OpenAI)
- Cyber: ExploitBench **100%**, ExploitGym **42.4%**, SEC-Bench Pro **85.4%** (OpenAI)

Long context:

- OpenAI MRCR v2 (8-needle): **100.0%** at 256K–512K; **96.3%** at 512K–1M (OpenAI; vs Sol 91.5 / 73.8)

### Normalized scores (1–100)

- **Tool use: 94/100.** OSWorld 72.6% (computer-use ceiling at launch), ScreenSpot-Pro 92.7%, Agents' Last Exam 59.3% and BrowseComp 91.5% are frontier-topping; capped by AA Coding Agent Index trailing Opus 5 and missing Tau3/GDPval rows. Nearly all figures are vendor self-reports.
- **Reasoning: 94/100.** GPQA 96.0%, FrontierMath T4 97.6% and ARC-AGI-2 95.0 are at/near saturation; capped by HLE-with-tools (57.2%) and AA Index (61.2) both trailing Claude Fable 5.1.
- **Context window: 97/100.** 1.05M window with MRCR v2 100% at 256–512K and 96.3% at 512K–1M — just under the ≥98% retrieval-at-512K+ bar for 100; the 272K long-context billing step is a practical caveat.
- **Multimodal: 65/100.** Text + image in, text out only (image-in band 60–70); ScreenSpot-Pro 92.7% shows strong vision grounding, but no audio/video input and no non-text output found.
- **Coding: 93/100.** DeepSWE 74.1% and TB 4.0 57.9% meet frontier refs; SWE-bench Verified 90.2% / Pro 67.0% (LLMPodium) would push higher but rest on one secondary source — capped for that plus vendor-run tables.
- **Cost efficiency: 35/100.** $10/$50 is the methodology's ~30 band; lifted slightly by $1.00 cached input, 50% Batch/Flex, and up to ~3x fewer output tokens than Sol in Codex (Artificial Analysis via LLMPodium).
- **Overall Score: 88.6/100.** Mean of (94, 94, 97, 65, 93) = 88.6 — the pick for computer-use agents, frontier math/science and long-horizon coding when premium pricing is acceptable.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (OpenAI launch post + model docs, DataCamp, AshnaAI, stats-data, llm-stats, Convly, UseRightAI, LLMPodium); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
