# GPT-5.2 — findings by Laguna XS 2.1

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (Thinking)
- **Short description:** OpenAI's December 2025 flagship refresh (2025-12-11) — first model at/above human-expert level on GDPval (70.9%) and launch SOTA on SWE-bench Pro (55.6%); introduced the `xhigh` reasoning effort. Now the "previous flagship" behind the GPT-5.4/5.6/6 line.
- **Provider / access:** OpenAI API (`gpt-5.2`, Responses + Chat Completions), ChatGPT (Instant/Thinking/Pro), Azure. Snapshot `gpt-5.2-2025-12-11`.
- **Release / knowledge:** 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.2` (Thinking), `gpt-5.2-chat-latest` (Instant); `openai/gpt-5.2` (OpenRouter). No Zen Free ID found.
- **Context window:** 400,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; reasoning yes (efforts none default/low/medium/high/xhigh); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $1.75 / $14 per 1M in/out; cached input $0.175 (90% off); Batch 50%.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- GDPval (wins/ties vs industry professionals): **70.9%** (OpenAI — SOTA at launch, first model at/above expert level)
- Tau2-bench: Telecom **98.7%** / Retail **82.0%** (OpenAI)
- Scale MCP-Atlas: **60.6%**; Toolathlon: **46.3%** (OpenAI)
- Terminal-Bench: **64.9%** (Epoch via Model Beat); TB Hard **47.0%** (AA xhigh)
- BrowseComp: **65.8%** (Thinking) / **77.9%** (Pro)
- τ²-Bench Telecom (AA, xhigh): **84.8%**; IFBench **75.4%** (AA xhigh)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (OpenAI) / **90.3%** (AA xhigh)
- HLE: **34.5% no tools / 45.5% w/ search+Python** (OpenAI); **37.7%** (AA xhigh)
- ARC-AGI-1 (Verified): **86.2%**; ARC-AGI-2 (Verified): **52.9%** (OpenAI)
- AIME 2025: **100%**; HMMT Feb 2025: **99.4%** (OpenAI)
- FrontierMath: Tier 1–3 **40.3%** / Tier 4 **14.6%** (OpenAI, w/ Python)
- CritPt: **11.6%** (AA xhigh)
- AA-Omniscience: accuracy **44.3%** / non-hallucination **18.8%** (AA xhigh)

Coding:

- SWE-bench Pro (Public): **55.6%** (OpenAI — SOTA at launch)
- SWE-bench Verified: **80.0%** (OpenAI; 73.8% per Epoch)
- SWE-Lancer IC Diamond: **74.6%** (OpenAI)
- LiveCodeBench: **88.9%** (Epoch via Model Beat)
- SciCode: **52.1%** (Epoch via Model Beat)

Long context:

- OpenAI MRCRv2 (8-needle): **98.2%** at 4–8K, **92.0%** at 32–64K, **85.6%** at 64–128K, **77.0%** at 128–256K; near-100% on the 4-needle variant to 256K (OpenAI)
- GraphWalks BFS <128K: **94.0%**; BrowseComp Long Context 128K: **92.0%** (OpenAI)
- AA-LCR: **82.7%** (AA xhigh)

Multimodal (supporting): MMMU-Pro **79.5%**; Video MMMU **85.9%**; CharXiv **82.1%** no tools / **88.7%** w/ Python; ScreenSpot Pro **86.3%** (OpenAI)

### Normalized scores (1–100)

- **Tool use: 86/100.** GDPval 70.9% (launch SOTA), Tau2 98.7/82.0% and MCP-Atlas 60.6% are frontier-grade for its era; capped by Toolathlon 46.3% and TB Hard 47.0% against 2026 models.
- **Reasoning: 85/100.** GPQA 92.4%, ARC-AGI-1 86.2%, AIME 100% and ARC-AGI-2 52.9% led its generation; capped by HLE 34.5% and CritPt 11.6% well behind current frontier.
- **Context window: 84/100.** 400K window lands at the top of the 200–500K band (65–84) on the strength of MRCRv2 77–98% retrieval out to 256K — excellent within its window but half the current 1M standard.
- **Multimodal: 65/100.** Text + image in, text out (image-in band); Video MMMU 85.9% and ScreenSpot Pro 86.3% show strong frame-level vision, but no native audio and text-only output.
- **Coding: 86/100.** SWE-bench Pro 55.6% (launch SOTA), Verified 80.0%, LiveCodeBench 88.9% and SWE-Lancer 74.6%; capped by newer models pushing Pro past 80.
- **Cost efficiency: 80/100.** $1.75/$14 with 90% cached-input discount and 50% Batch sits between the methodology's $1.25/$4.25 (~88) and $3/$15 (~60) anchors — very good for a frontier-grade model.
- **Overall Score: 81.2/100.** Mean of (86, 85, 84, 65, 86) = 81.2 — still a cost-effective professional-work model; superseded by GPT-5.6 Terra at similar price with a 1.05M window.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (OpenAI launch post + developer docs + system card update, OpenRouter, llm-stats, Model Beat/Epoch, DataCamp, Artificial Analysis via OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
