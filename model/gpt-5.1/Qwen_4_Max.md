# GPT-5.1 — findings by Qwen 4 Max

- Source: OpenAI / gpt-5.1
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) and [../../model-findings.md](../../model-findings.md)

## Model card

- Name: GPT-5.1
- Short description: OpenAI's November 2025 flagship refresh ("a smarter, more conversational ChatGPT"), marketed as the best model for coding and agentic tasks with configurable reasoning; now deprecated in favor of GPT-5.2.
- Provider/access: OpenAI API (Chat Completions + Responses + Batch); AA tracks 2 providers, llm-stats 1 (OpenAI). OpenCode Zen resells at $1.07/$8.50 (carried from OpenCode Console pricing, at-cost resale — differs from list). Distinct from GPT-5.1 Instant / GPT-5.1 Thinking (ChatGPT variants) and GPT-5.1-Codex (separate coding SKU).
- Release/knowledge: announced Nov 12, 2025 (ChatGPT rollout); API snapshot `gpt-5.1-2025-11-13` released Nov 13, 2025 (AA, llm-stats, OpenRouter). Knowledge cutoff September 30, 2024 (docs, AA, llm-stats agree). Status: Deprecated (docs); AA banner names GPT-5.2 as successor.
- IDs: `gpt-5.1`; snapshot `gpt-5.1-2025-11-13` (deprecated).
- Context window: 400,000 tokens, max output 128,000 (docs + llm-stats; AA confirms 400K). Conflict: BenchLM lists 200K — official docs win, labelled.
- Modalities: text + image input, text output. Reasoning efforts none (default), low, medium, high; AA benchmarks High. Tools (Responses): function calling, web_search, file_search, image_generation, code_interpreter, apply_patch, mcp. Streaming, structured outputs, prompt caching supported.
- Pricing (as of 2026-11-13, official docs): $1.25 input / $0.125 cached input / $10 output per 1M tokens (90% cache discount). No long-context surcharge. AA blended $1.34 (7:2:1); no live cost/task (deprecated). Rate limits: Build 5K RPM/1M TPM → Grow 15K RPM/40M TPM.
- Architecture: proprietary; parameter count undisclosed.

### Raw benchmarks found

Vendor launch post (openai.com/index/gpt-5-1/) is 403 to my fetch; no vendor benchmark table extracted. All numbers below are independent runs or carriages via BenchLM (Nov 13 snapshot).

- Intelligence Index: AA live N/A (deprecated); historical carriage 24.7 (version unstated — not comparable to current v5.0.1 scores).
- Knowledge/reasoning (AA independent): GPQA-Diamond 87.3% (Vals 86.6%), AA-HLE 28.5%, CritPt 4.9%, MMLU-Pro 87.0% (Vals 86.4%), AIME 2025 94.0% (AA carriage), GMMLU-Lite 90.6%, IFBench 72.9%, Omniscience +5.4 (accuracy 37.7%, hallucination 51.9% — high).
- ARC Prize (verified, Thinking High): ARC-AGI-1 72.83%.
- Agentic/tool use: τ²-bench 81.9% (AA carriage), GDPval-AA 930 Elo / normalized 16.3% (weak), Terminal-Bench Hard 45.5% (AA carriage), Gert Labs 41.24%.
- Coding: Vals SWE-bench 69.8%, AA LiveCodeBench 86.8% (Vals 86.5%), AA Coding Index 49.4%, Vals Vibe Code Bench 24.61% (weak).
- Multimodal: AA-MMMU-Pro 75.5% (single static vision row); Design Arena Website 1,183 Elo (OpenRouter carriage).
- Long context: AA-LCR 80.0% (independent) — solid for the 400K window; no MRCR/MLCR surfaced.
- Performance (AA, deprecated 18h cadence): 88 tok/s, TTFT 37.46s; llm-stats p95 TTFT 2.00s (different metric: first token vs first answer token). Time/task and verbosity N/A.
- BenchLM overall 56.41/100, #62 of 1033 (31 benchmarks covered). Sibling context: GPT-5.2 58.88, GPT-5.1-Codex 50.9, GPT-5 (medium) 45.57.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 81.9% and TB-Hard 45.5% show competent tool use, but GDPval 930 Elo / 16.3% normalized is weak for a flagship, and no BrowseComp/OSWorld/MCP evidence surfaced — below Qwen3.6-Plus (GDPval 1,066, τ² 97.7 → 74).
- **Reasoning: 76/100.** GPQA 87.3%, HLE 28.5%, AIME25 94.0%, MMLU-Pro 87.0%, ARC-1 72.83% — solid late-2025 frontier reasoning, but CritPt 4.9% is very weak, hallucination 51.9% is high, and every metric trails successor GPT-5.2 (GPQA 90.3, HLE 37.7, CritPt 11.6).
- **Context window: 77/100.** 400K tokens with LCR 80.0% and 128K max output, no long-context surcharge — just below the GPT-5.2/GPT-5.3-Codex anchor of 78 (LCR 82.7/83.3 on the same 400K window).
- **Multimodal: 74/100.** Image input with a single MMMU-Pro 75.5% row and no video/audio/grounding evidence — single-row image-in calibration, a notch below GPT-5.3-Codex (75 at MMMU-Pro 78.5).
- **Coding: 75/100.** Vals SWE-bench 69.8%, LCB 86.5–86.8%, Coding Index 49.4% — respectable competitive-programming and repo-fix ability, but Vibe Code Bench 24.61% and TB-Hard 45.5% show shallow agentic coding; no SWE-Pro/DeepSWE/FrontierCode evidence.
- **Cost efficiency: 76/100.** $1.25/$10 with 90% cache discount matches the Gemini 2.5 Pro deprecated-price anchor exactly (76); blended $1.34, 88 tok/s, no surcharge, but deprecated status and no measurable cost/task cap the score.
- **Overall Score: 74.4/100.** Mean of the five quality dimensions (70+76+77+74+75)/5 = 74.4; cost excluded per methodology. A deprecated late-2025 flagship that sits cleanly below GPT-5.2 (76.4) on every quality axis — consistent with BenchLM 56.41 vs 58.88.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official developers.openai.com model page, Artificial Analysis deprecated-model page, BenchLM aggregator with Who-ran-it carriages, llm-stats provider table); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: context 400K (docs/AA/llm-stats) vs BenchLM 200K; AA index N/A live vs 24.7 historical carriage (version unstated); AA vs Vals harness pairs (GPQA 87.3/86.6, MMLU-Pro 87.0/86.4, LCB 86.8/86.5); Nov 12 announcement vs Nov 13 API snapshot; OpenCode resale $1.07/$8.50 vs list $1.25/$10. Vendor launch post openai.com/index/gpt-5-1/ returned 403 and is excluded; GPT-5.1 kept distinct from GPT-5.1 Instant/Thinking/Codex variants.
- Reference URLs:
  - [GPT-5.1 — OpenAI API Docs](https://developers.openai.com/api/docs/models/gpt-5.1)
  - [GPT-5.1 (High) — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-1)
  - [GPT-5.1 — BenchLM](https://benchlm.ai/models/gpt-5-1)
  - [GPT-5.1 (gpt-5.1-2025-11-13) — LLM Stats](https://llm-stats.com/models/gpt-5.1-2025-11-13)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.