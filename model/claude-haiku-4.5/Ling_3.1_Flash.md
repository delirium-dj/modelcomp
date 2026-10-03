# Claude Haiku 4.5 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Claude Haiku 4.5
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **META NOTE:** This folder's meta.json is a stale scaffold stub ("128K total", "Text in/out", "Standard pricing"). Verified specs below come from Anthropic's launch post (anthropic.com/news/claude-haiku-4-5, 2025-10-15) and provider listings.

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest, most cost-efficient Claude 4.5-tier model — the first Haiku with extended thinking; Anthropic states it matches Claude Sonnet 4 on coding, computer use and agentic workflows at substantially lower cost and higher speed; built for parallelized execution, sub-agents and high-volume operations.
- **Provider / access:** Anthropic — API (model id `claude-haiku-4-5`), AWS Bedrock, Google Vertex AI, Azure AI Foundry.
- **Release / knowledge:** 2025-10-15. Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/claude-haiku-4.5` (repo meta.json, stale stub); `claude-haiku-4-5` (API).
- **Context window:** 200K tokens; 64K max output (extended-thinking tokens consume the output budget).
- **Modalities:** Text, image, files in; text out; extended thinking (controllable depth; summarized or interleaved thought output).
- **Pricing (as of 2026-10):** $1 input / $5 output per 1M; prompt caching $1.25 write / $0.10 read (90% discount), 1-hour cache write $2.00; Batch API 50% off. 52–129 tok/s and 0.4–0.8 s TTFT depending on provider.

### Raw benchmarks found

Vendor launch post (anthropic.com/news/claude-haiku-4-5, 2025-10-15):

- SWE-bench Verified: **73.3%** — "one of the world's best coding models" (Sonnet 4.5: 77.2%; Opus 4.1: 74.5%). Simple scaffold with two tools (bash + file editing via string replacements); averaged over 50 trials, no test-time compute, 128K thinking budget, default sampling, full 500-problem dataset.
- OSWorld (computer use): **50.7%** — the highest any Haiku has achieved (per Caylent's launch coverage).
- Anthropic claims parity with Sonnet 4 on coding, computer use and agentic workflows.

Third-party (Artificial Analysis via OpenRouter; provider measurements):

- Reasoning mode: Intelligence Index **16.9**, Coding Index **43.9**, Agentic Index **8.0**; GPQA Diamond **67.2%**; HLE **10.4%**; IFBench **54.3%**; τ²-Bench Telecom **54.7%**; AA-LCR **74.3%**; GDPval-AA **10.9**; CritPt **0.0%**; SciCode **42.2%**; Terminal-Bench Hard **27.3%**; AA-Omniscience accuracy 18.0% / non-hallucination rate 72.7%.
- Non-reasoning mode: GPQA Diamond **64.6%**; HLE **4.2%**; IFBench **42.0%**; τ²-Telecom **32.5%**; AA-LCR **49.7%**; Terminal-Bench Hard **27.3%**; Omniscience accuracy 14.4% / non-hallucination 74.3%.
- Provider-level measurements (OpenRouter, across Bedrock/Azure/Vertex/Anthropic): GPQA Diamond **71.9–73.7%**; TAU-bench **62.6–67.0%** (auto-routing 65.4%).
- AnotherWrapper comparison: GPQA Diamond **71.2%** (vs Opus 4.1: 76.8%); SWE-bench Verified 73.3% (vs Opus 4.1: 74.5%).
- Multimodal: OSWorld 50.7% is the only captured vision/computer-use score; no MMMU/CharXiv captured.

### Normalized scores (1–100)

- **Tool use: 63/100.** TAU-bench ~65% (provider measurements) and τ²-Telecom 54.7% (reasoning) are solid, but OSWorld 50.7% and Terminal-Bench Hard 27.3% lag the 2026 agentic frontier.
- **Reasoning: 60/100.** GPQA Diamond 67.2% (AA reasoning; 71.2–73.7% provider-measured) is mid-pack, HLE 10.4% is weak, and CritPt scores 0.0%; IFBench 54.3% and AA-LCR 74.3% are decent.
- **Context window: 70/100.** 200K tokens — standard for its era; no long-context retrieval figure captured.
- **Multimodal: 65/100.** Text + image + file input with computer-use capability (OSWorld 50.7%); no video/audio input; no MMMU-class vision benchmark captured.
- **Coding: 71/100.** SWE-bench Verified 73.3% matches Sonnet 4 (72.7%) and nearly touches Opus 4.1 (74.5%) — remarkable for the efficiency tier; Coding Index 43.9 and SciCode 42.2% are mid-pack.
- **Cost efficiency: 87/100.** $1/$5 per 1M with $0.10 cache reads (90% off) and 50% Batch discount — no longer the cheapest tier in 2026 (Gemini 3.5 Flash-Lite undercuts it 3×) but far below frontier pricing.
- **Overall Score: 65.8/100.** Mean of the five quality dimensions. A 2025-10 model assessed against the 2026-10 frontier; the folder's peer average (73.8) is higher, likely weighting the Sonnet-4-parity claim and era-relative value.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
