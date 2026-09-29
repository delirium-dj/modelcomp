# Google Gemini 2.5 Flash Lite — findings by Kimi K3

- Source: Google DeepMind (`gemini-2.5-flash-lite`; Zen listing `opencode/google-gemini-2.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's budget-tier 2.5 model — fastest/cheapest of the family (70ms TTFT, 240 tok/s), built for high-volume classification, translation and summarization. Preview June 17, 2025; GA July 22, 2025. Scheduled for shutdown October 20, 2026 (Vertex AI listing) with Gemini 3.1 / 3.5 Flash-Lite as replacement. Note: this folder tracks the OpenCode Zen listing, distinct from the `google-gemini-2.5-flash-lite` folder.
- **Provider / access:** Google AI Studio / Gemini API, Vertex AI, OpenRouter, Vercel AI Gateway, 20+ aggregators; OpenCode Zen listing `opencode/google-gemini-2.5-flash-lite`. Google restricts 2.5 access to projects with past usage; new projects are steered to 3.5 Flash-Lite / 3.8 Flash (ai.google.dev note). OpenAI-compatible endpoints available via gateways.
- **Release / knowledge:** Preview 2025-06-17, GA 2025-07-22 (OpenRouter/pricepertoken listing date); knowledge cutoff Jan 2025 (serenitiesai tracker, re-verified 2026-09-14).
- **IDs:** `opencode/google-gemini-2.5-flash-lite` (Zen); `gemini-2.5-flash-lite` (Google API). No Zen Free ID on this listing — standard pricing.
- **Context window:** Zen listing caps at 128K total (scored tier); native model is 1M tokens (1,048,576) in / 65,536 max out (OpenRouter).
- **Modalities:** Zen listing: text in/out (scored tier). Native model accepts text, image, file, audio, video in; text out. Reasoning (thinking, off by default on Lite) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-29):** Google list price $0.10 / $0.40 per 1M in/out ($0.30/1M for audio input; cached input $0.01/1M); aggregated identical across ~20 providers (serenitiesai provider table, aipricing.guru, calculatetokens.com); batch/halved ($0.05/$0.20) on OpenRouter. Deprecated: retirement cited 2026-10-20 (referencesource.org, Vertex) with 2026-10-16 as earliest possible date (modeldeprecations.dev).
- **Architecture:** Proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Airline: **47.3%** (OpenRouter-measured, via serenitiesai — 75th of 93)
- Terminal-Bench / Tau3 / GDPval / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **55.0%** (serenitiesai, 107th of 140)
- MMLU-Pro: **63.0%**; MATH: **62.0%**; GSM8K: **83.0%**; ARC-AGI: **14.0%** (serenitiesai)
- Chatbot Arena ELO: **1230** (62nd of 74)
- HLE / LCR / CritPt / AA Intelligence Index: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **22.0%** (serenitiesai, 57th of 67)
- LiveCodeBench: **28.0%**; HumanEval+: **70.0%** (serenitiesai)
- SciCode / Vibe / DeepSWE: no verified public score found

Long context / speed:

- 1M native context (18th of 451 tracked); TTFT **70 ms** (#1 of 92), output **240 tok/s** (#5 of 94) — Artificial Analysis aggregates via serenitiesai
- BenchLeader Index: **46.7 (#370)** (benchleader, Sep 2026)

### Normalized scores (1–100)

- **Tool use: 55/100.** Tau2-Airline 47.3% is mid-band with working function calling; capped by no harder agentic-suite evidence (TB/Tau3/GDPval all missing).
- **Reasoning: 58/100.** GPQA 55%, MMLU-Pro 63%, MATH 62% hover at the low-mid band (mid band starts ~60% GPQA); Arena 1230 confirms entry-level; capped by ARC-AGI 14%.
- **Context window: 58/100.** Scored on the 128K-total Zen listing (100K–200K band → 50–64). Note: native model is 1M (would score 95) — the cap belongs to this listing.
- **Multimodal: 15/100.** Zen listing is text in/out (10–20 band). The native model is omni-input (image/audio/video/file) but that isn't what this ID serves.
- **Coding: 42/100.** SWE-bench 22% and LCB 28% are firmly entry-level; HumanEval+ 70% shows basic competence. Capped hard by real-task results.
- **Cost efficiency: 95/100.** $0.10/$0.40 (audio in $0.30) with $0.01 cached input sits at the top of the legacy cheap-tier band (80–95) — held back from max by the announced October 2026 retirement, which makes new integrations short-lived.
- **Overall Score: 46/100.** (55+58+58+15+42)/5 = 45.6 → 46. Best fit: ultra-cheap, ultra-fast text classification/summarization pipelines on the Zen listing through the Oct 2026 shutdown — not a reasoning or coding choice; use Google's native endpoint if you need its 1M window or omni input.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (serenitiesai benchmark aggregation incl. per-source links and provider pricing table, benchleader, llmboard, whichllmmodel; referencesource.org / modeldeprecations.dev lifecycle trackers; aipricing.guru pricing); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed GA 2025-07-22, pricing unchanged ($0.10/$0.40, audio-in $0.30, batch $0.05/$0.20), added retirement date 2026-10-20 (Vertex) / earliest 2026-10-16, past-user access restriction, and Gemini 3.1 / 3.5 Flash-Lite as replacement; Cost 97→95 per updated band rules; quality scores unchanged (no benchmark drift found).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
