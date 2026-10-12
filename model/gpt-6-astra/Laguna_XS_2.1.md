# GPT-6 Astra — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's first GPT-6-generation flagship (announced 2026-09-03), succeeding GPT-5.6 Sol; state-of-the-art computer use, agentic coding and frontier math, first OpenAI model at the "Critical" cybersecurity threshold (advanced cyber gated behind OpenAI Daybreak).
- **Provider / access:** OpenAI API (`gpt-6-astra`, Chat Completions + Responses + Batch), Microsoft Azure, AWS Bedrock, ChatGPT Plus/Pro/Business/Enterprise.
- **Release / knowledge:** announced 2026-09-03, API release 2026-09-04; knowledge cutoff 2026-04-30.
- **IDs:** `gpt-6-astra` (OpenAI API). No Zen Free ID; free tier unsupported.
- **Context window:** 1,050,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; reasoning yes (efforts low/medium/high/xhigh/max); tool calls yes; JSON mode yes.
- **Pricing:** $10 / $50 per 1M in/out; cached input $1.00; cache write $12.50; Batch/Flex 50% of Standard; Fast mode 2x rates.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0: **72.6%** (OpenAI; vs Sol 65.7, Opus 5 70.2) at ~40 min/task
- ScreenSpot-Pro: **92.7%** (OpenAI)
- Agents' Last Exam: **59.3%** (OpenAI; vs Opus 5 55.5, Sol 53.6)
- AutomationBench: **41.4%** (OpenAI launch table)
- BrowseComp: **91.5%** (OpenAI)
- Terminal-Bench 4.0: **57.9%** (OpenAI)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; near-saturated)
- FrontierMath Tier 4 v2: **97.6%** (OpenAI)
- HLE (with tools): **57.2%**; no-tools **53.2%** (LLMPodium)
- ARC-AGI-1 / 2 / 3: **98.5 / 95.0 / 99.9**
- AA Intelligence Index v4.1.1: **61.2**

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI)
- SWE-bench Verified: **90.2%**; Pro: **67.0%** (LLMPodium)
- FrontierCode 1.1 Extended: **64.5%** / 53.3%
- LiveCodeBench: **76.2%** (LLMPodium)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI)
- Cyber: ExploitBench **100%**, ExploitGym **42.4%**, SEC-Bench Pro **85.4%**

Long context:

- OpenAI MRCR v2 (8-needle): **100.0%** at 256K–512K; **96.3%** at 512K–1M

### Normalized scores (1–100)

- **Tool use: 94/100.** OSWorld 72.6%, ScreenSpot-Pro 92.7%, Agents' Last Exam 59.3% and BrowseComp 91.5% are frontier-topping; capped by missing GPAUG rows and all figures mostly vendor self-reports.
- **Reasoning: 94/100.** GPQA 96.0%, FrontierMath T4 97.6% and ARC-AGI-2 95.0 are at/near saturation; capped by HLE-with-tools (57.2%).
- **Context window: 97/100.** 1.05M window with MRCR v2 100% at 256–512K and 96.3% at 512K–1M — just under ≥98%-at-512K+ bar for 100.
- **Multimodal: 65/100.** Text + image in, text out only (image-in band 60–70); ScreenSpot-Pro 92.7% shows strong vision, but no audio/video input.
- **Coding: 93/100.** DeepSWE 74.1% and TB 4.0 57.9% meet frontier refs; capped by vendor-run tables.
- **Cost efficiency: 35/100.** $10/$50 is ~30 band; lifted slightly by $1.00 cached input and up to ~3x fewer output tokens than Sol.
- **Overall Score: 88.6/100.** Mean of (94, 94, 97, 65, 93) = 88.6 — pick for computer-use agents, frontier math/science and coding when premium pricing acceptable.