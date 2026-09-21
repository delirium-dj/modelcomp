# GPT-6 Astra — findings by Gemma 4 31B IT

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-09-20 (UTC)

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's GPT-6-family flagship (Sep 2026) — best-in-class terminal agentic coding and science workflows with 1M+ retrieval, at premium pricing with a 272K long-context price cliff.
- **Provider / access:** OpenAI API (`gpt-6-astra`), Azure, Bedrock; ChatGPT Plus/Pro/Business/Enterprise rollout. Trusted Access first.
- **Release / knowledge:** Announced 2026-09-03, API 2026-09-04; knowledge cutoff 2026-04-30.
- **IDs:** `gpt-6-astra` (no Free ID; free API tier unsupported)
- **Context window:** 1,050,000 tokens (922K max input); 128,000 max output (verified via API docs).
- **Modalities:** Text + image in; text out. Reasoning effort `low`–`max`; web/file search, code execution, computer use, MCP.
- **Pricing (as of 2026-09-20):** $10 in / $50 out per 1M (cached $1, writes $12.50); above 272K input the whole request reprices to $20/$75. Batch/Flex 50% off; Fast mode 2x.
- **Architecture:** Proprietary; first OpenAI model at Critical cybersecurity level (Preparedness Framework).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.9%** (OpenAI) / **59%** independent (Artificial Analysis, leads Fable 5.1 52%)
- AutomationBench-AA: **69%** (Artificial Analysis, leads Grok 4.6 67%)
- Agents' Last Exam: **59.3%** (OpenAI, vs Sol 53.6%); OSWorld 2.0: **72.6%** offline partial
- ScreenSpot-Pro: **92.7%** (OpenAI); GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; saturated band, all frontier 92–96%)
- FrontierMath T4 v2: **97.6%** (OpenAI, vs Fable 5.1 87.8%)
- HLE with tools: **57.2%** (OpenAI; trails Fable 5.1 65.0%)
- AA Intelligence Index: **61.2** (Artificial Analysis); LCR / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI) / **68%** in Codex (Artificial Analysis)
- FrontierCode 1.1 Extended: **64.5%** / Main: **53.3%** (OpenAI)
- AA Coding Agent Index: **67** (Codex; ties Fable-family leads)
- TB Science 0.1: **64.6%** (OpenAI, vs Fable 5.1 52.6%); LiveCodeBench: no verified public score found

Long context:

- MRCR 8-needle 512K–1M: **96.3%** (OpenAI; just under the 98% top bar)
- 1.05M window verified; RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 4.0 best-in-class (57.9 vendor / 59 AA), AutomationBench 69, Agents' Last Exam 59.3; capped by OSWorld offline-partial provenance.
- **Reasoning: 92/100.** GPQA 96, FrontierMath 97.6, AA Index 61.2; capped by HLE trailing Fable 5.1 (57.2 vs 65.0) and GPQA saturation.
- **Context window: 96/100.** 1.05M verified with 96.3% MRCR retrieval at 512K–1M — just under the 98% bar for higher.
- **Multimodal: 85/100.** Text+image in with ScreenSpot-Pro 92.7%; text-only output, no video/audio.
- **Coding: 91/100.** DeepSWE 74.1, TB 4.0 57.9, FrontierCode 64.5/53.3, AA Coding Index 67; capped by Codex-harness DeepSWE dip (68) and no LiveCodeBench row.
- **Cost efficiency: 35/100.** $10/$50 list (2.5x Sol) with a 272K full-request reprice cliff; partial offset via fewer tokens per task and 50% batch.
- **Overall Score: 91/100.** Mean of the five quality dims (93+92+96+85+91)/5 = 91.4 → 91. Best fit: hardest terminal agentic coding and science workflows where best-in-class execution outweighs premium price; route routine work to cheaper tiers.

---

## Signature

- Provided by: **Gemma 4 31B IT (`google/gemma-4-31b-it`)** — 2026-09-20
- Method: public web research from zero (OpenAI launch page + API docs, Artificial Analysis Astra benchmark article, LLM Stats/CometAPI/AshnaAI independent tables); vendor vs independent rows flagged; scores are normalized 1–100 interpretations, not official vendor scores.
