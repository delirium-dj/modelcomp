# North Mini Code 1.0 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / North Mini Code
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code 1.0
- **Short description:** Cohere / Cohere Labs' first agentic coding model and the inaugural member of the North family — a small open-weights sparse MoE built for code generation, agentic software engineering, and terminal tasks.
- **Provider / access:** Cohere — Hugging Face weights (BF16, FP8, w4a16), Cohere API, Cohere Model Vault, OpenRouter, Microsoft Foundry; trained for compatibility with OpenCode but works with most coding agents (SWE-Agent, ReAct/Harbor Tmux harness).
- **Release / knowledge:** 2026-06-09 (Cohere blog "North Mini Code: Agentic Coding for Developers"). Knowledge cutoff not captured.
- **IDs:** `CohereLabs/North-Mini-Code-1.0`; folder `north_mini_code`.
- **Context window:** 256,000 tokens (Cohere/HF) vs **320,000** on the Microsoft Foundry catalog — conflicting, flagged; max output 64,000.
- **Modalities:** Text in, text out (per Artificial Analysis).
- **Pricing (as of 2026-10):** **Free** on OpenRouter (Cohere provider: Free/Free, 0.45s latency, 74 tok/s, 100.00% uptime); Cohere API list price not published in the captured sources; open weights under Apache 2.0.
- **Architecture:** Sparse MoE, 30B total / 3B active; interleaved reasoning (reasoning field) supported; minimum hardware 1x H100 @ FP8 or 1x H100 @ FP4; up to 2.8x throughput vs similarly sized models (~3x the work rate of Devstral Small 2 at identical concurrency).

### Raw benchmarks found

**Vendor-reported (Cohere; methodology: SWE-agent harness v1.1.0 for SWE-Bench Verified/Pro; simple ReAct harness with a single terminal-use tool on Harbor's Tmux implementation for Terminal-Bench v2; Terminus-2 for Terminal-Bench Hard (same methodology as the AA Intelligence Index); SciCode and LiveCodeBench v6 for non-tool code generation; 3 seeds averaged, temperature 1.0, top_p 0.95; competitor scores from original reports or the AA Intelligence Index; Gemma 4 agentic scores as reported by the Qwen team; * = run internally):**
- SWE-bench Verified **67.6%** (pass@1, SWE-Agent harness; LLMReference, observed 2026-06-09).
- SWE-bench Pro **40.2%** (pass@1; LLMReference; rank 43 of 46).
- Terminal-Bench 2.0 **36.0%** (pass@1, Terminus-2 harness; LLMReference).
- AA Coding Index **33.4** (Cohere) / **36.5** (OpenRouter AA page) — "outperforming Qwen3.5 (35B-A3B), Gemma 4 (26B-A4B), Devstral Small 2 (24B dense), and substantially larger models such as Nemotron 3 Super (120B-A12B), Mistral Small 4 (119B-A6B), and Devstral 2 (123B)" (HF blog).
- SciCode and LiveCodeBench v6 values were not captured in text (vendor chart is an image).

**Artificial Analysis (OpenRouter page; AA Intelligence Index v4.3.2):**
- Intelligence Index **9.9-10** (above average; median 8); Agentic Index **1.1**; GPQA Diamond **75.7%**; HLE **11.1%**; IFBench **57.6%**; τ²-Bench Telecom **37.4%**; AA-LCR **37.3%**; GDPval-AA **0.0%**; CritPt **0.3%**; SciCode **38.8%**; Terminal-Bench Hard **31.1%**; AA-Omniscience accuracy **18.9%** / non-hallucination rate **16.8%** (≈81% hallucination rate — a major weakness); 82M tokens generated on the Index (median-concise).

## Scores

- **Tool use: 51/100.** τ²-Bench Telecom 37.4%, Terminal-Bench Hard 31.1%, AA Agentic Index 1.1 — weak general agentics despite the coding-agent positioning.
- **Reasoning: 59/100.** GPQA Diamond 75.7% (AA) is solid, but HLE 11.1%, CritPt 0.3%, GDPval-AA 0.0%, and an 81% hallucination rate (Omniscience non-hallucination 16.8%) cap the score.
- **Context window: 70/100.** 256K (320K per Foundry — conflict flagged); AA-LCR 37.3% indicates weak long-context retrieval; no MRCR captured.
- **Multimodal: 15/100.** Text-only per captured sources.
- **Coding: 69/100.** SWE-bench Verified 67.6%, SWE-bench Pro 40.2%, TB 2.0 36.0%, SciCode 38.8%, AA Coding Index 33.4-36.5 — genuinely class-leading for its size (beats much larger open models on the coding index), mid-tier in absolute terms.
- **Cost efficiency: 100/100.** Free on OpenRouter/Cohere routes; Apache 2.0 weights runnable on a single H100.
- **Overall Score: 52.8/100.** Mean of Tool use 51, Reasoning 59, Context window 70, Multimodal 15, Coding 69 = 52.8.

> **Gap vs folder average (68.0): −15.2.** North Mini Code is a narrow coding specialist: its coding rows (SWE-bench Verified 67.6%, class-leading AA Coding Index) are strong, but every general-reasoning row captured (HLE 11.1%, GDPval-AA 0.0%, CritPt 0.3%, τ²-Telecom 37.4%, Omniscience non-hallucination 16.8%) is weak, and it is text-only. The folder average appears to weight the coding-index story heavily; this report weights all five quality dimensions per the methodology.

## Notes

- Verification trail: Cohere product page (256K; 2.8x throughput; AA Coding Index 33.4), Cohere blog 2026-06-09 (release; specs; benchmark methodology; size-class comparisons), HF model card `CohereLabs/North-Mini-Code-1.0` (30B/3B; Apache 2.0; OpenCode config; benchmarking methodology), OpenRouter page (free pricing; AA benchmark table; 74 tok/s; 100% uptime), Artificial Analysis (Intelligence Index 10; median comparisons; conciseness), Microsoft Foundry catalog (320K context — conflict; same benchmark methodology text), LLMReference (SWE-bench Verified 67.6%, SWE-bench Pro 40.2%, TB 2.0 36.0%; provider price ladder empty).
- Known conflicts: context window 256K (Cohere/HF) vs 320K (Foundry); AA Coding Index 33.4 (Cohere) vs 36.5 (OpenRouter AA); the vendor's SciCode/LiveCodeBench v6 chart values were not captured in text.
- Open questions: Cohere API list price; vendor chart values (SciCode, LiveCodeBench v6); independent SWE-bench replications; the ~81% hallucination rate needs independent confirmation.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: independent replications, Cohere API pricing, captured vendor chart values, hallucination-rate confirmation.
