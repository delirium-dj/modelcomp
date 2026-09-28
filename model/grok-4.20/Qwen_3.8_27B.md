# Grok 4.20 — Evaluation Report

**Model:** Grok 4.20 (`opencode/grok-4.20`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Grok 4.20
**Short:** xAI's speed-and-truthfulness workhorse: agentic tool calling, lowest measured hallucination rate, tiered pricing with a 200K long-context step.
**Provider:** xAI — API model `grok-4.20-0309-reasoning` (checkpoint 2026-03-09; experimental beta 0304). Also served on third-party gateways (Inworld, OpenRouter, etc.).
**Release date:** March 2026 (experimental beta 0304; GA `0309` checkpoint).
**Architecture:** Proprietary reasoning model; function calling + structured outputs; Batch API with 20% discount; 37 rps / 10M tpm limits.
**Context window:** 1,000,000 tokens per official xAI docs (several third parties — Inworld, contextwindows.dev, BenchLM — advertise 2M; scored on the official figure).
**Modalities:** Text + image in; text out.
**Pricing:** <200K prompt: $1.25/M input, $0.20/M cached, $2.50/M output. ≥200K prompt: $2.50 / $0.40 / $5.00 (entire request billed at the higher tier). Batch: −20%.
**Knowledge cutoff:** Nov 2024 (mitigated in X by live data access).

### Raw benchmarks found

**BenchLM.ai source rows (xAI Grok 4.20, 2026-09-28; overall 59.76/100, #46 of 512):**
- SWE-bench Verified: **76.7%**; SWE-bench Pro: **51.8%**; LiveCodeBench (Vals): **84.3%**; LiveCodeBench Pro: **74.2%**; SWE-bench (Vals): 72.2%; Vibe Code Bench: 4.06%
- Terminal-Bench 2.0: **47.1%**; Terminal-Bench 2.1 (Vals): 44.2%; DeepSearchQA: **62.8%**; Gert Labs: 38.36%
- MMMU-Pro: **75.2%**; CharXiv: 60.9%; ERQA: 54.1%; SimpleVQA: 57.4%; MedXpertQA (MM): 65.8%
- GPQA-Diamond: **88.5%** (Vals: 88.6%); MMLU-Pro (Vals): **86.3%**; HLE w/o tools: **31.6%**; ARC-AGI-2: 53.3%; ARC-AGI-3: 0.1%; HealthBench Hard: 20.3%; MedXpertQA (text): 50.2%

**Third-party positioning:**
- "Lowest hallucination rate on the market" / record non-hallucination claim at launch (digitalapplied, tokencost); strict prompt adherence; #1 instruction-following claim.
- ~235 tok/s; ~1493 Arena Elo (aimlapi).
- Official claim: "industry-leading speed and agentic tool calling."

**Gaps:** TB2.0/TB2.1 in the 44–47% range vs 87–89% for current leaders; HLE 31.6% is low for a reasoning model; SWE-V 76.7% below the ~80 cohort band; official context 1M vs advertised 2M is unresolved.

### Normalized scores (1–100)

- **Tool use: 58/100.** TB2.0 47.1% and TB2.1 (Vals) 44.2% sit in the 45–60% → 50–70 band; DeepSearchQA 62.8% is a decent agentic-retrieval result; xAI markets agentic tool calling as a core strength, but absolute terminal performance trails the frontier's 80s and Gert Labs 38.4% is weak.
- **Reasoning: 74/100.** GPQA-Diamond 88.5–88.6% just under the 90+ frontier line and MMLU-Pro 86.3% confirm strong graduate-level knowledge; ARC-AGI-2 53.3% is competitive. HLE w/o tools 31.6% and ARC-AGI-3 0.1% cap the score.
- **Context window: 86/100.** Official 1M-token window with a dedicated ≥200K pricing tier (evidence the long-context path is a first-class, tested mode); third-party 2M claims unconfirmed by xAI docs. No published retrieval/synthesis measurement at 1M, so upper-mid of the 85–94 band.
- **Multimodal: 42/100.** Text + image in, text out; MMMU-Pro 75.2% (solid mid-field image reasoning), CharXiv 60.9%, ERQA 54.1%, SimpleVQA 57.4% — functional vision without audio/video or a standout benchmark.
- **Coding: 78/100.** SWE-V 76.7% is solid (just under the ~80.4–80.9 cohort band), SWE-Pro 51.8% matches Claude Opus 4.6's thinking score (51.9%) on Scale's public set, LCB 84.3% and LCB Pro 74.2% confirm strong code generation. Vibe Code Bench 4.06% and TB2.1 44.2% are the drags.
- **Cost efficiency: 84/100.** $1.25/$2.50 under 200K with $0.20 cached input beats the $1.25/$4.25 ≈ 88 anchor's output price, though the ≥200K tier doubles to $2.50/$5.00 and batch is only −20%. Excellent short-context economics, middling long-context economics.
- **Overall Score: 68/100.** Half-up mean of (58 + 74 + 86 + 42 + 78) / 5 = 67.6.

### Why not higher
Grok 4.20 is a speed/cheap/truthful model, not a frontier-coding model: terminal benchmarks in the mid-40s vs 80s for leaders, HLE 31.6%, and SWE-V 76.7% keep it a tier below the 2026 flagship band, while the official-vs-advertised context question (1M vs 2M) adds uncertainty. Its genuine edge — cheapest frontier-tier pricing under 200K with 1M context and record-low hallucination — is captured in Cost 84 and Context 86.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
