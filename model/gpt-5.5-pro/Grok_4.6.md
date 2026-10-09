# GPT-5.5 Pro — findings by Grok 4.6

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI’s extra-compute GPT-5.5 deployment for harder reasoning and high-stakes work. Same 1.05M-class window and image+text I/O as GPT-5.5, billed at Pro rates with no cached-input discount. Not a separate open-weights family.
- **Provider / access:** OpenAI Responses API (including Batch); background mode recommended because some requests take minutes. Reasoning effort: `medium`, `high` (default), `xhigh`. Default snapshot `gpt-5.5-pro-2026-04-23`. No verified OpenCode Zen Free ID found.
- **Release / knowledge:** API listed 2026-04-23/24; knowledge cutoff 2025-12-01.
- **IDs:** `openai/gpt-5.5-pro` (snapshot `gpt-5.5-pro-2026-04-23`); no Free ID on Zen
- **Context window:** 1,050,000 tokens total, 128,000 max output (OpenAI model docs)
- **Modalities:** Text and image in → text out; reasoning tokens; tool calling; structured outputs. Official docs do not list native audio/video out.
- **Pricing (as of 2026-10-09):** $30 / $180 per 1M input/output; no cached-input discount; regional processing +10%. Batch listed around $10 / $45 on secondary price sheets. Paid.
- **Architecture:** Proprietary extra-compute serving of GPT-5.5 (closed weights).

### Raw benchmarks found

> Several aggregator rows copy **standard GPT-5.5** scores onto the Pro page and label them “standard weights.” Those are marked as proxies. Numbers below prefer Pro-labeled or launch-table Pro-column results.

Agent / tool use:

- GDPval (OpenAI launch table, Pro column): **82.3%** wins-or-ties vs human (BenchmarkList same figure)
- GDPval-AA: **1785 Elo** listed for GPT-5.5 Pro on LLM Reference (observed 2026-06-26); Artificial Analysis attributes **1785 Elo** to GPT-5.5 **xhigh** — treat as high-compute / Pro-adjacent, not a separately published Pro-only AA page score
- BrowseComp: **90.1%** (OpenAI launch table Pro column / BenchmarkList)
- Tau3-Banking / Tau2-Bench: no verified public score found for the Pro ID (39.0% Tau3-Banking on BenchmarkList is the standard GPT-5.5 page)
- Terminal-Bench 2.0 / 2.1: no verified Pro-isolated score found (launch table leaves Pro TB 2.0 blank; 82.7% / 78.2% are standard GPT-5.5)
- Claw-Eval: no verified public score found
- MCP Atlas: no verified Pro-isolated score found (75.3% on LLMRef compare is tied to standard listing)

Reasoning / knowledge:

- HLE: **57.2% with tools / 43.1% without** (BenchmarkList citing 2026-06-09 system card; BenchLM Pro vs standard comparison)
- ARC-AGI-2: **84.6%** (BenchmarkList Pro page)
- ARC-AGI-1: **96.5%** (BenchmarkList Pro page)
- FrontierMath Tier 1–3: **52.4%**; Tier 4: **39.6%** (OpenAI launch table Pro column)
- GeneBench: **33.2%**; GeneBench-Pro: **20.5%** (BenchmarkList Pro page)
- GPQA Diamond: no verified Pro-isolated public score found (93.6% is the GPT-5.5 launch figure; BenchLM lists Pro GPQA as coming soon)
- Artificial Analysis Intelligence Index: **55.0** listed on LLM Reference as GPT-5.5 **xhigh** compute (not a Pro-named AA product page)

Coding:

- SWE-bench Verified: **82.6** listed as tied for GPT-5.5 and GPT-5.5 Pro (LLM Reference compare; Vals.ai / standard-weights note on the Pro model page)
- SWE-bench Pro: **58.6** same-source tie / standard-weights listing — not an independent Pro-only SWE-Pro rerun
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found for the Pro ID
- BLXBench: **44.5%** (BenchmarkList Pro page; community harness)

Long context:

- 1,050,000-token window on the official card. No verified MRCR / AA-LCR number found for `gpt-5.5-pro` specifically.

### Normalized scores (1–100)

- **Tool use: 89/100.** BrowseComp 90.1% and GDPval-AA ~1785 (xhigh/Pro listing) sit at the agentic frontier; launch GDPval 82.3% is still elite. Capped because Tau3/TB/MCP are not Pro-isolated, and the launch GDPval column is slightly below standard GPT-5.5’s 84.9%.
- **Reasoning: 92/100.** HLE 57.2% with tools and ARC-AGI-2 84.6% clear the frontier HLE/abstract-reasoning bar; FrontierMath T4 39.6% is a Pro-column gain vs standard 35.4%. Capped by missing Pro GPQA and Index 55 being an xhigh alias rather than a Pro-named AA score.
- **Context window: 95/100.** Official 1.05M / 128K out is the ≥1M tier; no ≥98% long-context retrieval figure for this ID, so not 100.
- **Multimodal: 68/100.** Documented I/O is image-in / text-out (60–70 band). Capped by no native audio/video on the OpenAI card.
- **Coding: 87/100.** Shared SWE-bench Verified 82.6 and SWE-Pro 58.6 are strong but below the 90–100 SWE ~95% / SWE-Pro ~80% refs; Pro-only BLXBench 44.5% does not lift the band. Capped by absent Pro-isolated LiveCode/SciCode/TB.
- **Cost efficiency: 18/100.** $30 / $180 with no cache discount is well above the $10 / $50 ≈ 30 reference; regional +10% makes it worse.
- **Overall Score: 86/100.** Mean of 89, 92, 95, 68, 87 = 86.2 → 86. Best-fit: paid high-stakes reasoning/research in ChatGPT Pro or Responses API when extra compute is worth ~6× GPT-5.5 list price; use standard `gpt-5.5` for most agentic coding.

---

## Signature

- Provided by: **Grok 4.6 (xai/grok-4.6)** — 2026-10-09
- Method: public internet research (OpenAI docs and launch post, Artificial Analysis, BenchmarkList, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
