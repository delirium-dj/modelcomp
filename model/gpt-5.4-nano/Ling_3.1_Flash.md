# GPT-5.4 nano — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / GPT-5.4 nano
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's smallest, cheapest GPT-5.4 variant — for classification, data extraction, ranking, and simpler coding subagents; a significant upgrade over GPT-5 nano.
- **Provider / access:** OpenAI — **API only** (unlike GPT-5.4 mini, which is also in Codex and ChatGPT); served via OpenAI and Azure on OpenRouter (automatic failover); OpenAI Flex tier available ($0.10/$0.625, 92.44% uptime).
- **Release / knowledge:** 2026-03-17 (with GPT-5.4 mini; "our most capable small models yet"). Knowledge cutoff August 31, 2025.
- **IDs:** `gpt-5.4-nano`; snapshot `gpt-5.4-nano-2026-03-17`; folder `gpt-5.4-nano`.
- **Context window:** 400,000 tokens.
- **Modalities:** Text and image in, text out (multimodal understanding; computer use supported in the API per the mini/nano post's mini description — nano supports tool use per OpenAI docs).
- **Pricing (as of 2026-10):** $0.20 / $1.25 per 1M input/output; cached input $0.02; Batch API discounts; regional processing (data residency) endpoints +10% uplift. Price increases vs GPT-5 nano: +300% input, +300% cached, +213% output.
- **Reasoning effort:** none (default), low, medium, high, xhigh.
- **Architecture:** Not publicly disclosed (proprietary).

### Raw benchmarks found

**Vendor-reported (OpenAI, 2026-03-17; xhigh effort unless noted; comparators GPT-5.4 xhigh / GPT-5.4 mini xhigh / GPT-5 mini high):**
- SWE-Bench Pro (Public) **52.4%** (57.7 / 54.4 / 45.7) — "approaches the performance of the larger GPT-5.4."
- Terminal-Bench 2.0 **46.3%** (75.1 / 60.0 / 38.2).
- Toolathlon **35.5%** (54.6 / 42.9 / 26.9).
- GPQA Diamond **82.8%** (93.0 / 88.0 / 81.6).
- OSWorld-Verified **39.0%** (75.0 / 72.1 / 42.0).
- MMMUPro w/ Python **69.5%** (81.5 / 78.0 / 74.1); MMMUPro **66.1%** (81.2 / 76.6 / 67.5).
- OmniDocBench **0.2419** (lower is better; 0.109 / 0.1263 / 0.1791).

**Artificial Analysis (independent; xhigh unless noted):**
- Intelligence Index **20.7** (medium 20; Non-Reasoning 12); Coding Index **56.1**; Agentic Index **16.0**.
- GPQA Diamond **81.7%**; HLE **28.3%**; IFBench **75.9%**; τ²-Bench Telecom **76.0%**; AA-LCR **76.7%**; GDPval-AA **21.8%**; CritPt **9.3%**; SciCode **47.2%**; Terminal-Bench Hard **42.4%**; AA-Omniscience accuracy 25.7% / non-hallucination rate **25.8%** (≈74% hallucination rate — weak).
- Non-Reasoning variant: GPQA 55.8%, HLE 4.1%, IFBench 32.7%, τ²-Telecom 34.8%, AA-LCR 29.7%, CritPt 0.0%, TB Hard 24.2%. Medium variant: GPQA 76.1%, HLE 15.9%, IFBench 64.4%, τ²-Telecom 52.6%, AA-LCR 67.3%, CritPt 5.1%, TB Hard 33.3%.
- Speed: fastest 180 tok/s (medium); 171 tok/s (xhigh); TTFT 0.71s (Non-Reasoning); OpenRouter providers: OpenAI 0.94s/60 tok/s/100% uptime, Azure 1.95s/50 tok/s/100%.
- BenchGecko (23 benchmarks, 33.6% average, rank #220): top rows OTIS Mock AIME 2024-2025 87.8%, GPQA Diamond 71.3% (effort setting not captured — conflicts with AA's 81.7% xhigh and OpenAI's 82.8%; flagged), LiveBench Coding 61.9%.

## Scores

- **Tool use: 61/100.** Toolathlon 35.5% (vendor) and Agentic Index 16.0 are modest, but τ²-Bench Telecom 76.0% (AA, xhigh) is strong; OSWorld-Verified 39.0% for computer use; function calling, web search, file search supported.
- **Reasoning: 63/100.** GPQA Diamond 82.8% (vendor) / 81.7% (AA) and HLE 28.3% are solid for the class; CritPt 9.3% weak; AA-Omniscience non-hallucination 25.8% (≈74% hallucination rate) is a material weakness; Intelligence Index 20.7.
- **Context window: 73/100.** 400K tokens with AA-LCR 76.7% measured long-context retrieval.
- **Multimodal: 61/100.** Text and image in, text out; MMMUPro 66.1% (76.6% for mini, 81.2% for full 5.4); OmniDocBench 0.2419.
- **Coding: 63/100.** SWE-Bench Pro 52.4%, TB 2.0 46.3%, Coding Index 56.1, SciCode 47.2%, TB Hard 42.4%, LiveBench Coding 61.9% — capable supporting-code model, well behind GPT-5.4 (SWE-Bench Pro 57.7%, TB 2.0 75.1%).
- **Cost efficiency: 96/100.** $0.20/$1.25 per 1M with $0.02 cache reads (Flex $0.10/$0.625) — among the cheapest frontier-lab models.
- **Overall Score: 64.2/100.** Mean of Tool use 61, Reasoning 63, Context window 73, Multimodal 61, Coding 63 = 64.2.

> **Gap vs folder average (61.8): +2.4.** This report lands slightly above the peer set, driven by the AA-measured rows (τ²-Bench Telecom 76.0%, AA-LCR 76.7%, GPQA Diamond 81.7%) and the 400K multimodal profile at $0.20/$1.25. The ≈74% hallucination rate (AA-Omniscience) and the sub-50% agentic rows (Toolathlon 35.5%, Agentic Index 16.0) are the main drags.

## Notes

- Verification trail: OpenAI announcement "Introducing GPT-5.4 mini and nano" (2026-03-17; benchmark table; pricing; availability), OpenAI API docs (reasoning effort settings; cached input $0.02; Batch API; regional +10% uplift; snapshots), Artificial Analysis release page (Intelligence 20.7/20/12; 180 tok/s; $0.18 cost per task), OpenRouter page (provider rows; full AA benchmark table; knowledge cutoff), BenchGecko (23-benchmark average; top rows), OpenAI community post (price-increase comparison vs GPT-5 nano/mini).
- Known conflicts: GPQA Diamond 82.8% (OpenAI xhigh) vs 81.7% (AA xhigh) vs 71.3% (BenchGecko, effort setting unknown); nano availability "API only" (OpenAI) vs community post's "available in the API, Codex, and ChatGPT" (which refers to the mini/nano pair — nano itself is API-only per OpenAI's own page).
- Open questions: parameter count; whether computer use is enabled for nano or only mini; the BenchGecko GPQA row's effort setting.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: independent replications, hallucination-rate confirmation, parameter disclosure.
