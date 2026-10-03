# MAI-Thinking-1 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / MAI-Thinking-1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** The `mai-experimental-test` folder tracks Microsoft AI's model in experimental/test deployment. The only MAI model with public evidence is **MAI-Thinking-1** (Microsoft AI's first LLM and first dedicated reasoning model, 2026-08-12); scored here under that identity note. Evidence base is thin: four headline benchmarks, a human-preference study, and no published per-token price.

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's from-scratch reasoning model — 35B-active / ~1T-total sparse MoE trained exclusively on clean, enterprise-grade data with no third-party distillation, optimized for math, coding, and long-horizon enterprise tasks.
- **Provider / access:** Microsoft — Azure AI Foundry / Microsoft Foundry Labs catalog (`MAI-Thinking-1`); Chat Completions API; function calling and developer instructions out of the box.
- **Release / knowledge:** 2026-08-12. Knowledge cutoff not captured.
- **IDs:** `MAI-Thinking-1`; repo folder `mai-experimental-test`.
- **Context window:** 200,000 tokens.
- **Modalities:** Text in, text out (no vision documented). Chain of thought with adaptive effort allocation by prompt complexity.
- **Pricing (as of 2026-10):** Not published in the captured sources; Azure catalog claims "best price-to-performance ratio in its weight class."
- **Architecture:** Sparse MoE, 35B active / ~1T total; pre-trained from scratch on 8K GB200 GPUs (Microsoft-operated Azure cluster); 30T-token main pre-training + 3.55T mid-training; post-training = SFT on model-generated completions + RL across verifiable reasoning, software-engineering, tool-use, and instruction-following environments (8M+ RLE environments).

### Raw benchmarks found

**Vendor-reported (Microsoft AI launch + technical report, 2026-08-12):**
- SWE-Bench Pro **52.8%** — "toe-to-toe with Claude Opus 4.6" (Opus 4.6's published SWE-Bench Pro is 57.3% per GLM-5.1's comparison table — the "toe-to-toe" claim is Microsoft's framing).
- AIME 2025 **97.0%**; AIME 2026 **94.5%** (Azure Foundry Labs page cites 95.9% on AIME 2025 — conflicting value, flagged).
- LiveCodeBench v6 **87.7%**.
- "SOTA performance on maths, knowledge and coding for its weight class" (no weight-class table captured).
- **Surge blind human side-by-side** (1,276 tasks, single- and multi-turn, professional raters): users **preferred MAI-Thinking-1 over Claude Sonnet 4.6** (launch claim; the Foundry Labs page describes the same study as "parity with Claude Sonnet 4.6" — conflicting framing, flagged).
- Full post-trained evaluation table (Table 1 of the technical report) was not captured.

## Scores

- **Tool use: 58/100.** Function calling documented and post-training covered tool-use environments (8M+ RLE), but no Tau-bench/MCP-Atlas/Toolathlon measurement captured; neutral-to-mid band.
- **Reasoning: 73/100.** AIME 2025 97.0% and AIME 2026 94.5% are frontier-tier math; no GPQA/HLE captured, so the score rests on the AIME pair plus the "strongest in weight class" claim.
- **Context window: 70/100.** 200K tokens; no long-context retrieval benchmark captured.
- **Multimodal: 15/100.** Text-only per captured evidence (general-purpose text corpus; no vision input documented).
- **Coding: 73/100.** LiveCodeBench v6 87.7% is strong and SWE-Bench Pro 52.8% respectable (Opus 4.6: 57.3%); no Terminal-Bench/SWE-bench Verified captured.
- **Cost efficiency: 70/100.** Not $/M-based: no per-token price published; scored on the vendor's price-to-performance claim with the caveat flagged.
- **Overall Score: 57.8/100.** Mean of Tool use 58, Reasoning 73, Context window 70, Multimodal 15, Coding 73 = 57.8 (Cost efficiency excluded per methodology).

> **Gap vs folder average (69.0): −11.2.** The evidence base is four benchmark numbers and a preference study — no GPQA/HLE, no tool-use evals, no published price, and a 200K text-only profile. The model's genuine strengths (AIME 97.0%, LiveCodeBench 87.7%) are fully credited in Reasoning and Coding; the gap reflects what was not measurable, not a verdict on the model.

## Notes

- Verification trail: Microsoft AI launch post (2026-08-12; 35B/1T; SWE-Bench Pro 52.8%; AIME 97.0/94.5; Surge 1,276-task study), technical report "MAI-Thinking-1: Building a Hill-Climbing Machine" (LiveCodeBench v6 87.7%; 30T + 3.55T tokens; 8K GB200 GPUs; no-distillation principle; 8M+ RLE environments), MAI-Thinking-1 model card (Chat Completions API; function calling; enterprise-grade clean data), Azure AI Foundry Labs page (200K context; 95.9% AIME 2025 — conflicting; "parity with Sonnet 4.6" — conflicting; "best price-to-performance"), Surge write-up (blind-preference methodology).
- Known conflicts: AIME 2025 97.0% (launch/report) vs 95.9% (Foundry Labs page); Sonnet 4.6 preferred (launch) vs parity (Foundry Labs); SWE-Bench Pro "toe-to-toe with Opus 4.6" vs Opus 4.6's published 57.3%.
- Open questions: full Table 1 evaluation suite; per-token pricing; whether the experimental-test deployment differs from the production endpoint.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: official MAI-Thinking-1 evaluation table, per-token pricing, GPQA/HLE and tool-use benchmarks, independent replications of the Surge preference study.
