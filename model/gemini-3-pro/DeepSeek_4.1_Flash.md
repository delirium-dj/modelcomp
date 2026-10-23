# Gemini 3 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3 Pro (`gemini-3-pro`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-pro`, 27 rows) computes an overall **61.17/100 (#54 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: Vals AI GPQA Diamond **91.67%**, MMLU-Pro 90.10%, SWE-bench Verified **76.40%**, Terminal-Bench 2.0 55.06%, LiveCodeBench 86.41%, MMMU-Pro 87.51%, LegalBench 87.03% (#6/149), SAGE 47.62%, MortgageTax 69.08% (#7), τ²-bench ~87%, **Vibe Code Bench v1.1 14.30% (#86/110)**. Google/self: GPQA 91.9%, HLE 37.5% no-tools, SWE-bench Verified 76.2%, MMMU-Pro 81%, Video-MMMU 87.6%, LMArena ~1501 Elo, TB2.0 54.2%, SWE-bench Pro 43.3%, ARC-AGI-1 75% / ARC-AGI-2 31.1%, AIME 2025 95%, 5/6 IMO 2025. Artificial Analysis: Intelligence Index **28 (deprecated/estimated)**, GPQA 90.8%, HLE 39.7%, MMLU-Pro ~90%, AA-LCR 76.0%, τ² 87.1%, Omniscience Accuracy 55.8% / Hallucination 91.5%. BenchLM 59.42 (#~22); context billed $2/$12 (≤200K), $4/$18 (>200K), $0.20 cached, Batch 50%.
> **Conflicts surfaced:** (1) **AA Index 28 (deprecated/estimated) vs GPQA ~91 / HLE ~38–40** — internally inconsistent; AA flags the index deprecated. (2) **Coding is bimodal** — SWE-bench 76.4% / LiveCodeBench 86.4% vs Vibe Code Bench 14.30% (Vals). (3) **GPQA** — Vals 91.67% and self 91.9% vs an outlier AI-Flash-Report 78.5%. (4) **Context 1M** (Google/AA/Vals/CloudPrice) vs **2M** (BenchLM outlier; 2M belongs to Gemini 3.1 Pro). (5) **Superseded** — Google/AA now redirect to Gemini 3.1 Pro; the "3 Pro Preview" endpoint was deprecated 2026-03-09.
> Sources: https://deepmind.google/models/model-cards/gemini-3-pro · https://blog.google/products/gemini/gemini-3/ · https://www.vals.ai/models/google_gemini-3-pro-preview · https://artificialanalysis.ai/models/gemini-3-pro · https://cloudprice.net/models/google-gemini-3-pro · https://aiwiki.ai/wiki/gemini_3_pro

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's flagship announced 2025-11-18 — the model that introduced Deep Think reasoning and native agentic execution alongside a 1M-token context. One generation behind the 3.1 Pro tier now; the "3 Pro Preview" endpoint is deprecated.
- **Provider / access:** Gemini API, AI Studio (launch free tier), Vertex AI, Gemini App, Antigravity, Gemini CLI. Proprietary.
- **Release / knowledge:** 2025-11-18; knowledge cutoff Jan 2025.
- **IDs:** `gemini-3-pro`; Zen `opencode/gemini-3-pro`.
- **Context window:** 1,000,000 input / 64,000–66,000 output (ignore BenchLM's 2M outlier).
- **Modalities:** text, image, video, audio, PDF in; text out; Deep Think; agentic execution; function calling, code execution, file search.
- **Pricing (as of 2026-10-16):** standard **$2 in / $12 out** per 1M (≤200K); $4/$18 above 200K; cache read $0.20; Batch 50% off.
- **Architecture:** sparse MoE transformer (TPU/JAX), native multimodal; no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **55.06%** (Vals) / 54.2% (self); τ²-bench Telecom 85.4% / 87.1% (Vals)
- MCP Atlas 54.1%; BFCL 72.51%; GDPval 1195 Elo (self); METR 224.3 min; Claw-Eval / Gert Labs: partial
- OSWorld / Tau3-Banking: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **91.67% (Vals)** / 90.8% (AA) / 91.9% (self); HLE 39.7% (AA) / 37.5% (self)
- MMLU-Pro 90.10% (Vals) / 89.4–90% (others); ARC-AGI-1 75% / ARC-AGI-2 31.1% (ARC Prize); AIME 2025 95%
- Artificial Analysis Intelligence Index **28 (deprecated/estimated)**; AA-LCR 76.0%; CritPt 9.1%
- Omniscience Accuracy 55.8% / Hallucination 91.5%

Coding:

- SWE-bench Verified **76.40%** (Vals) / 76.2% (self) / 68.2% (outlier); LiveCodeBench 86.41% (Vals); **Vibe Code Bench v1.1 14.30% (#86/110)** (Vals)
- SWE-bench Pro 43.30% (self); SciCode 56% (self); LMArena 1501; WebDev Arena 1438

Long context:

- MRCR v2 (8-needle, 128k) **77.0%**; no full-window (1M) figure.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-bench 87.1%, TB2.0 55.06%, MCP Atlas 54.1% and BFCL 72.51% are upper-mid; capped by GDPval 1195 (frontier ref 1750+), no OSWorld and no TB2.1.
- **Reasoning: 85/100.** GPQA 91.67% clears the 90%+ frontier reference with MMLU-Pro 90.10%; held by HLE 39.7% (just under 40%) and the deprecated/estimated AA Index of 28.
- **Context window: 96/100.** 1M input / 64K output (≥1M band) with the batch's best measured retrieval (MRCR v2 77.0%); short of the ≥98% needed for 100.
- **Multimodal: 90/100.** Text, image, video, audio and PDF in → text out (audio band 90–100; MMMU-Pro 87.51%, Video-MMMU 87.6%); text-only output holds it at the floor.
- **Coding: 78/100.** SWE-bench 76.4%, LiveCodeBench 86.4% and SciCode 56% are solid but generational; SWE-bench Pro 43.3% and Vibe Code Bench 14.30% cap it.
- **Cost efficiency: 70/100.** $2/$12 standard ($4/$18 extended, Batch 50%, $0.20 cached) between the ~88 and ~60 anchors; no Zen Free ID verified.
- **Overall Score: 85/100.** (74 + 85 + 96 + 90 + 78) / 5 = 84.6 → 85. Best fit: native omni-modal long-context science/reasoning work — verify the stable endpoint still exists and expect to pay more for 3.1 Pro on agentic coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: rewrite-pass public internet research (Google DeepMind Gemini 3 model card + blog, Vals AI model page, Artificial Analysis model page, CloudPrice, AI Wiki, ModHub). Independent Vals/AA rows were promoted over the mix of official and unverified rows; the deprecated-index, GPQA-outlier, context-2M and bimodal-coding conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
