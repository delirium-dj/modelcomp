# GPT-5.5 Pro — findings by GPT 5.6 Sol

- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** Higher-compute GPT-5.5 configuration for difficult, high-accuracy professional reasoning; it uses the same underlying model with parallel test-time compute.
- **Provider / access:** OpenAI Responses API as `gpt-5.5-pro`, Batch API, and ChatGPT Pro/Business/Enterprise; long jobs support background mode.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff 2025-12-01.
- **IDs:** `openai/gpt-5.5-pro`; no free API access.
- **Context window:** 1,050,000 tokens with 128,000 maximum output.
- **Modalities:** Text and image input; text output; reasoning at medium/high/xhigh and native tools. Audio and video input are unsupported.
- **Pricing (as of 2026-10-04):** $30/1M input and $180 output, without cached-input discount; regional processing costs 10% more. Batch API is supported.
- **Architecture:** Proprietary; same underlying model as GPT-5.5 using parallel test-time compute.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI, Pro-specific).
- GDPval wins or ties: **82.3%** (OpenAI, Pro-specific).
- Investment Banking Modeling Tasks: **88.6%** (OpenAI, Pro-specific).
- Terminal-Bench / Toolathlon / OSWorld: no Pro-specific verified public score found; base GPT-5.5 scores 82.7%, 55.6%, and 78.7%, respectively.

Reasoning / knowledge:

- FrontierMath Tier 1–3 / Tier 4: **52.4% / 39.6%** (OpenAI, Pro-specific).
- HLE / GPQA Diamond / CritPt: no stable Pro-specific public score found in the consulted sources.

Coding:

- No Pro-specific SWE-bench or Terminal-Bench result was published; same-model GPT-5.5 scores **58.6%** SWE-Bench Pro Public, **82.7%** Terminal-Bench 2.0, and **73.1%** Expert-SWE internal.

Long context:

- No Pro-specific MRCR value found; the API documents a 1.05M-token window, and base GPT-5.5 led a public 8-needle GDM-MRCRv2 context leaderboard after release.

Multimodal:

- Image input is supported; no Pro-specific MMMU number found. Same-model GPT-5.5 scores **81.2%** MMMU Pro without tools and **83.2%** with tools.

Sources: [OpenAI API model reference](https://developers.openai.com/api/docs/models/gpt-5.5-pro), [OpenAI GPT-5.5 launch and evaluations](https://openai.com/index/introducing-gpt-5-5/), and [OpenAI GPT-5.5 system card](https://deploymentsafety.openai.com/gpt-5-5/evaluations-with-representative-prompts).

### Normalized scores (1–100)

- **Tool use: 95/100.** Pro-specific BrowseComp and professional results plus the underlying model's tool suite show elite agency, capped by missing direct terminal/computer-use results.
- **Reasoning: 96/100.** Parallel compute and strong FrontierMath results support exceptional difficult-task reasoning, though sparse independent Pro-specific evidence limits certainty.
- **Context window: 97/100.** The 1.05M-token window and strong underlying MRCR record are excellent, with no direct Pro-specific retrieval run.
- **Multimodal: 70/100.** Strong image understanding complements text, but native audio/video and Pro-specific multimodal evidence are absent.
- **Coding: 94/100.** The underlying model's Terminal-Bench and Expert-SWE performance plus extra compute indicate elite coding, but direct Pro-specific coding scores were not published.
- **Cost efficiency: 22/100.** $30/$180 pricing with no cache discount is exceptionally expensive despite high accuracy and Batch support.
- **Overall Score: 90/100.** Half-up mean of the five quality dimensions; best reserved for high-stakes problems where marginal accuracy matters far more than latency or cost.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official OpenAI documentation; same-underlying-model GPT-5.5 proxies are explicitly labeled and scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
