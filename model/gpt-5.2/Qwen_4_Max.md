# GPT-5.2 — findings by Qwen 4 Max

- Source: Vendor (OpenAI) + independent trackers; subject slug `gpt-5.2`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-5.2 (`gpt-5.2`, thinking variant tracked)
- **Short description:** OpenAI's December 2025 flagship for complex professional work — "the biggest leap for GPT models in agentic coding since GPT-5" and "a SOTA coding model in its price range" at launch. Now labelled "previous flagship"; docs recommend GPT-6 Astra, AA's deprecation banner names GPT-5.4.
- **Provider/access:** OpenAI API (Chat Completions + Responses + Batch; no fine-tuning/realtime/assistants), ChatGPT (Thinking tier at launch; siblings GPT-5.2 Pro and GPT-5.2 Instant), OpenRouter and other hosts. Responses tools: function_calling, web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, MCP (no computer_use). OpenCode retired the GPT-5.2/5.1/5 Codex family July 23 2026.
- **Release/knowledge:** Released **December 11 2025** (snapshot `gpt-5.2-2025-12-11`). Knowledge cutoff **August 31 2025**. Deprecated (AA benchmarks every 18h; index N/A live).
- **IDs:** `gpt-5.2`; single snapshot `gpt-5.2-2025-12-11`. Distinct from GPT-5.2 Pro, GPT-5.2 Instant, GPT-5.2-Codex.
- **Context window:** 400,000 tokens; max output 128,000. No long-context surcharge published.
- **Modalities:** Text + image in; text out (official + AA). Third-party comparison tables list video rows (Video-MME 86.0 etc.) — labelled conflict, official spec wins.
- **Pricing (as of 2026-11-12, per 1M tokens):** $1.75 in / $0.175 cached (90% discount) / $14.00 out; Batch supported. Launch coverage: 40% above GPT-5.1 ($1.25/$10). AA class medians $2.00 in / $10.00 out — output somewhat expensive.
- **Architecture:** Proprietary reasoning model; parameters undisclosed. `reasoning.effort`: **none (default)**, low, medium, high, xhigh; AA tracks xhigh. Rate limits: Build 5K RPM/1M TPM → Grow 15K RPM/40M TPM.

### Raw benchmarks found

Vendor-reported (OpenAI launch post + later GPT-5.4 comparison tables; harness = OpenAI's own runs):
- SWE-bench Verified 80.0, SWE-bench Pro 55.6 (GPT-5.4 post table), AIME 2025 100, ARC-AGI-2 52.9 (launch; introl's "first above 90% ARC-AGI" headline refers to ARC-AGI-1 at high compute — labelled, ARC Prize verified ARC-1 xhigh 86.17).
- BrowseComp 65.8, OSWorld-Verified 47.3, MMMU-Pro 79.5 (all via GPT-5.4 post comparison); LifeVal 49.3, BioBasicsBench 31.2 (OpenAI science posts).
- Third-party tables (Qwen3.5-397B/Qwen3.6-Plus cards): GPQA 92.4, MMMU 86.7, RealWorldQA 83.3, OmniDocBench 1.5 85.7, MathVision 83.0, CharXiv 82.1, Video-MME 86.0/85.8, VideoMMMU 85.9, MLVU 85.6, DynaMath 86.8, AI2D 92.2, CountBench 91.9, ERQA 59.8, SimpleVQA 55.8, CC-OCR 70.3, We-Math 79.0, V* 75.9 (video rows conflict with official text+image spec).

Independent runs:
- Artificial Analysis (xhigh; deprecated — index N/A live, historical carried values): **Intelligence Index 30.4 (historical)**, GPQA-D 90.3, AA-HLE 37.7, LCR 82.7, CritPt 11.6, τ² 84.8, TB-Hard 47.0, IFBench 75.4, MMLU-Pro 87.4, AIME 2025 99.0, Omniscience −0.9 (accuracy 44.3, **hallucination 81.2**). Performance: 68 tok/s, TTFT 80.27s.
- Epoch AI FrontierMath v2: Tiers 1–3 67.400, Tier 4 31.700. ARC Prize verified: ARC-AGI-1 xhigh 86.17.
- Vals AI Vibe Code Bench 53.50; Gert Labs 46.54; JobBench 34.3; Design Arena Website 1191.
- BenchLM aggregate: 59.49/100, **#56 of 1026** (55/815 rows, thinking variant, partial coverage).

### Normalized scores (1–100)

- **Tool use: 72/100.** τ² 84.8 and TB-Hard 47.0 are decent, but OSWorld-V 47.3, BrowseComp 65.8, JobBench 34.3 and no computer_use tool show the pre-GPT-5.4 agentic gap (GPT-5.4: OSWorld-V 75.0, BrowseComp 82.7); GDPval-era evals absent.
- **Reasoning: 78/100.** GPQA 90.3–92.4, AIME 2025 99–100, HLE 37.7, ARC-2 52.9 (launch SOTA), FM v2 67.4/31.7 — strong math; dragged by CritPt 11.6 and 81.2% hallucination (Omniscience −0.9).
- **Context window: 78/100.** 400K with **LCR 82.7** (AA) — excellent retrieval for the window size, 128K output, no surcharge; smaller than the 500K–1M tier (Grok 4.6 78 at 500K, GPT-5.4 87 at 1.05M).
- **Multimodal: 76/100.** Image-in only per official spec: MMMU-Pro 79.5, MMMU 86.7, RealWorldQA 83.3, OmniDocBench 85.7, MathVision 83.0; video rows in third-party tables conflict with the official modality list and are excluded from scoring.
- **Coding: 78/100.** SWE-V 80.0, SWE-Pro 55.6, Vibe 53.5 — launch-era "SOTA in its price range"; a generation behind GPT-5.4 (SWE-Pro 57.7, TB2.0 75.1) and the GPT-6 line; no DeepSWE/FrontierCode coverage.
- **Cost efficiency: 70/100.** $1.75/$14 with 90% cache — output above the $10 class median, 40% pricier than GPT-5.1 at launch; deprecated status and 80.27s TTFT (xhigh) deduct further; Batch available.
- **Overall Score: 76.4/100.** Mean of the five quality dimensions (Cost excluded): (72+78+78+76+78)/5 = 76.4. A strong late-2025 flagship (ARC-2/AIME SOTA at launch, excellent LCR) now two generations old: agentic computer-use and hallucination control lag GPT-5.4 (83.2) and the GPT-6 line; above Gemini 2.5 Pro (70.8) on reasoning/coding.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (OpenAI official model docs, Artificial Analysis live deprecation page, BenchLM, ARC Prize/Epoch/Vals via trackers, llm-stats/OpenRouter/VentureBeat/introl snippets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: successor (AA banner GPT-5.4 vs docs recommendation GPT-6 Astra); modalities (official text+image vs third-party video benchmark rows); ARC (vendor ARC-2 52.9 vs ARC Prize verified ARC-1 86.17 vs introl ">90% ARC-AGI" headline — different benchmark/compute settings); AA index (N/A live deprecated vs 30.4 historical carried); GPQA (92.4 third-party table vs 90.3 AA); AIME 2025 (100 vendor vs 99.0 AA).
- Reference URLs:
  - [GPT-5.2 model documentation — OpenAI](https://developers.openai.com/api/docs/models/gpt-5.2)
  - [Introducing GPT-5.2 — OpenAI (via BenchLM attribution; openai.com/index 403)](https://openai.com/index/introducing-gpt-5-2/)
  - [GPT-5.2 (Xhigh) — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-2)
  - [GPT-5.2 Benchmark Scores — BenchLM](https://benchlm.ai/models/gpt-5-2)
  - [GPT-5.2 — llm-stats](https://llm-stats.com/models/gpt-5.2-2025-12-11)
  - [OpenAI: GPT-5.2 — OpenRouter](https://openrouter.ai/openai/gpt-5.2)
  - [OpenAI's GPT-5.2 is here: what enterprises need to know — VentureBeat](https://venturebeat.com/technology/openais-gpt-5-2-is-here-what-enterprises-need-to-know)
  - [GPT-5.2: First Model Above 90% ARC-AGI — Introl (headline verified against ARC Prize)](https://introl.com/blog/gpt-5-2-infrastructure-implications-inference-demand-january-2026)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.