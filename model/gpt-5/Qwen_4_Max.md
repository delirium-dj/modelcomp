# GPT-5 — findings by Qwen 4 Max

- Source: OpenAI / gpt-5
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) and [../../model-findings.md](../../model-findings.md)

## Model card

- Name: GPT-5
- Short description: OpenAI's August 2025 unified flagship — merged the o-series reasoning line and the standard GPT line into one model with configurable reasoning effort (real-time routing in ChatGPT); first reasoning model offered to free users. Now deprecated.
- Provider/access: OpenAI API (Chat Completions + Responses + Batch); AA tracks 2 providers, llm-stats 1 (OpenAI). OpenCode Zen resells at $1.07/$8.50 (carried from OpenCode Console pricing — differs from list). Distinct from siblings GPT-5 mini / GPT-5 nano / GPT-5 pro, from GPT-5-Codex, and from GPT-5.1.
- Release/knowledge: released August 7, 2025; snapshot `gpt-5-2025-08-07` (deprecated). Knowledge cutoff September 30, 2024 (docs, AA, llm-stats agree). Successor conflict labelled: AA deprecation banner names GPT-5.1; official docs recommend the latest GPT-6 Astra.
- IDs: `gpt-5`; snapshot `gpt-5-2025-08-07` (deprecated).
- Context window: 400,000 tokens; maximum input 272,000; max output 128,000 (including reasoning tokens). Conflict: BenchLM lists 128K context — official docs win, labelled. No long-context surcharge.
- Modalities: text + image input, text output. Reasoning effort minimal / low / medium / high (minimal was new at launch); verbosity parameter low/medium/high. Tools (Responses): function calling, web_search, file_search, image_generation, code_interpreter, mcp. Streaming, structured outputs, prompt caching, file uploads supported.
- Pricing (as of 2026-11-13, official docs): $1.25 input / $0.125 cached input / $10 output per 1M tokens (90% cache discount). Batch via OpenRouter $0.625/$5 (50% off). AA blended $1.34 (7:2:1); no live cost/task (deprecated). Rate limits: Build 5K RPM/1M TPM → Grow 15K RPM/40M TPM.
- Architecture: proprietary; parameter count undisclosed. Unified reasoning/non-reasoning system with a real-time router in ChatGPT (press carriage).

### Raw benchmarks found

Vendor launch post (openai.com/index/introducing-gpt-5/) is 403 to my fetch; vendor numbers below are carried via independent press (gradually.ai, Nov 5 2026 snapshot) and corroborated by search snippets of the launch post. Independent AA numbers are the **medium** variant via BenchLM carriage; the AA model page itself tracks **High**.

- Vendor launch (Aug 7, 2025): AIME 2025 94.6% (no tools), SWE-bench Verified 74.9% (vs o3 69.1%), Aider Polyglot 88.0%, GPQA-Diamond 85.7%, MMMU 84.2%, HealthBench Hard 46.2%. Vendor factuality claim: with web search, responses 45% less error-prone than GPT-4o and 80% less than o3.
- Intelligence Index: AA live N/A (High, deprecated); historical carriage 22.9 (medium, version unstated — not comparable to current v5.0.1 scores).
- Knowledge/reasoning (AA medium, independent): GPQA-Diamond 84.2% (vendor 85.7% — harness/variant difference labelled), AA-HLE 25.4%, CritPt 0.0%, AA-IFBench 70.6%, Omniscience −10.9 (accuracy 39.5%, hallucination 83.2% — very high; different eval from the vendor's web-search factuality claim).
- Agentic/tool use: τ²-bench 86.5% (AA carriage — notably above successor GPT-5.1's 81.9%). No GDPval/BrowseComp/OSWorld evidence (those evals postdate this model's tracking).
- Coding: vendor SWE-bench Verified 74.9% and Aider Polyglot 88% (launch SOTA). Press summary of Vals independent runs: no significant GPT-5 vs GPT-5.1 difference on AIME, SWE-bench, Terminal-Bench; LiveCodeBench slightly favors 5.1, LiveCodeBench Pro slightly favors GPT-5.
- Multimodal: vendor MMMU 84.2%; AA-MMMU-Pro 74.3% (medium, single static vision row); Design Arena Website 1,179 Elo (OpenRouter carriage).
- Long context: AA-LCR 76.0% (medium, independent) — below GPT-5.1's 80.0% on the same 400K window.
- Performance (AA High, deprecated 18h cadence): 79 tok/s, TTFT 56.86s (first answer token; slower than 5.1's 37.46s); llm-stats p95 TTFT 2.00s (first-token metric — different). Time/task and verbosity N/A.
- BenchLM overall 45.57/100, #117 of 1033 (14 benchmarks, coverage-conservative); GPT-5 (high) not computed. Sibling context: GPT-5 mini 48.01, GPT-5 nano 36.91, GPT-5.1 56.41, GPT-5.2 58.88.

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 86.5% is genuinely strong (above GPT-5.1), but there is no GDPval, BrowseComp, OSWorld, or Terminal-Bench evidence in fetched sources — thinner agentic coverage than GPT-5.1 (70), which at least carries GDPval 930 and TB-Hard 45.5.
- **Reasoning: 72/100.** AIME25 94.6% and GPQA 84.2–85.7% were frontier in Aug 2025, but HLE 25.4%, CritPt 0.0%, and Omniscience −10.9 with 83.2% hallucination trail GPT-5.1 (76) on every independent axis; historical index 22.9 vs 24.7 confirms the gap.
- **Context window: 75/100.** 400K tokens, 128K max output, no surcharge — but LCR 76.0% is below GPT-5.1's 80.0% (77) and well below GPT-5.2's 82.7% (78) on the same window; 272K max input partition noted.
- **Multimodal: 73/100.** Image input with vendor MMMU 84.2% and a single AA-MMMU-Pro 74.3% row; no video/audio/grounding evidence — single-row image-in calibration, a notch below GPT-5.1 (74 at MMMU-Pro 75.5).
- **Coding: 74/100.** Launch SWE-bench Verified 74.9% + Aider 88% were state of the art in Aug 2025, and Vals runs show rough parity with GPT-5.1 (75) on SWE/Terminal-Bench with a slight LCB-Pro edge — but no SWE-Pro/DeepSWE/FrontierCode evidence and thin AA coverage keep it a point below 5.1.
- **Cost efficiency: 75/100.** $1.25/$10 with 90% cache discount and blended $1.34 matches the deprecated $1.25/$10 anchor (GPT-5.1 76), but 79 tok/s with 56.86s TTFT is slower than 5.1, and deprecated status with no measurable cost/task caps it one point lower.
- **Overall Score: 72.4/100.** Mean of the five quality dimensions (68+72+75+73+74)/5 = 72.4; cost excluded per methodology. The original unified flagship sits cleanly below GPT-5.1 (74.4) and GPT-5.2 (76.4) — consistent with BenchLM 45.57 < 56.41 < 58.88 and historical index 22.9 < 24.7 < 30.4.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official developers.openai.com model page, Artificial Analysis deprecated-model page for High, BenchLM aggregator with AA medium-variant carriages, llm-stats provider table, gradually.ai press carriage of the vendor launch table); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: successor GPT-5.1 (AA banner) vs GPT-6 Astra (docs recommendation); context 400K (docs/AA/llm-stats) vs BenchLM 128K; GPQA vendor 85.7% vs AA-medium 84.2%; AA index N/A live (High) vs 22.9 historical (medium, version unstated); vendor web-search factuality claim vs AA-Omniscience 83.2% hallucination (different evals); OpenCode resale $1.07/$8.50 vs list $1.25/$10. Vendor launch post returned 403 and is excluded; its numbers are carried via press and search-snippet corroboration. Variant labels kept distinct: BenchLM/AA rows are medium, AA performance page is High, vendor table effort unspecified. GPT-5 kept distinct from GPT-5 mini/nano/pro/Codex and GPT-5.1.
- Reference URLs:
  - [GPT-5 — OpenAI API Docs](https://developers.openai.com/api/docs/models/gpt-5)
  - [GPT-5 (High) — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5)
  - [GPT-5 (medium) — BenchLM](https://benchlm.ai/models/gpt-5-medium)
  - [GPT-5 (gpt-5-2025-08-07) — LLM Stats](https://llm-stats.com/models/gpt-5-2025-08-07)
  - [ChatGPT Models: All GPT Versions — gradually.ai](https://www.gradually.ai/en/chatgpt-versions/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.