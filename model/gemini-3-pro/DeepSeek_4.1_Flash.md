# Gemini 3 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3 Pro (`gemini-3-pro`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Independent Vals AI: GPQA Diamond **91.67%**, MMLU-Pro 90.10%, SWE-bench Verified **76.40%**, Terminal-Bench 2.0 55.06%, LiveCodeBench 86.41%, MMMU-Pro 87.51%, LegalBench 87.03% (#6/149), τ²-bench 87.1%, **Vibe Code Bench v1.1 14.30% (#86/110)**. Artificial Analysis: Intelligence Index **28 (deprecated/estimated)**, GPQA 90.8%, HLE 39.7%, MMMU-Pro 80.2%, AA-LCR 76.0%, τ² 87.1%, Omniscience Accuracy 55.8% / Hallucination 91.5%. LMArena 1501.
> **Conflicts surfaced:** (1) **AA Index 28 (deprecated/estimated) vs GPQA ~91–92 / HLE ~38–40** — internally inconsistent, and AA explicitly flags the index as deprecated; (2) coding is bimodal — SWE-bench 76.4% / LiveCodeBench 86.4% vs Vibe Code Bench 14.30% (Vals); (3) context 1M (Google/AA/Vals) vs 2M (BenchLM outlier); (4) **superseded** — Google/AA now redirect to Gemini 3.1 Pro; the original "3 Pro Preview" endpoint is shut down.
> Sources: https://blog.google/products/gemini/gemini-3/ · https://www.vals.ai/models/google_gemini-3-pro-preview · https://artificialanalysis.ai/models/gemini-3-pro · https://llm-stats.com/models/gemini-3-pro-preview · https://deepmind.google/models/gemini/pro/

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's flagship announced 2025-11-18 — the model that introduced Deep Think reasoning and native agentic execution alongside a 1M-token context. One generation behind the 3.1 Pro tier now; the "3 Pro Preview" endpoint is shut down.
- **Provider / access:** Gemini API, AI Studio (launch free tier), Vertex AI, Gemini App. Proprietary.
- **Release / knowledge:** 2025-11-18; knowledge cutoff Jan 2025.
- **IDs:** `gemini-3-pro`; Zen `opencode/gemini-3-pro`.
- **Context window:** 1,000,000 input / 64,000 output (ignore BenchLM's 2M outlier).
- **Modalities:** text, image, video, audio, PDF in; text out; Deep Think; agentic execution.
- **Pricing (as of 2026-10-09):** standard **$2 in / $12 out** per 1M; extended $4/$18; Batch 50% off.
- **Architecture:** proprietary; no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **55.06%** (Vals) / 54.2% (self); τ²-bench Telecom 85.4% / 87.1% (Vals)
- MCP Atlas 54.1%; BFCL 72.51%; GDPval 1195 Elo (self); METR 224.3 min
- OSWorld / Tau3-Banking / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **91.67% (Vals)** / 90.8% (AA) / 91.9% (self); HLE 39.7% (AA) / 37.5% (self)
- MMLU-Pro 90.10% (Vals); ARC-AGI-1 75% / ARC-AGI-2 31.1% (ARC Prize)
- Artificial Analysis Intelligence Index **28 (deprecated/estimated)**; AA-LCR 76.0%; CritPt 9.1%
- Omniscience Accuracy 55.8% / Hallucination 91.5%

Coding:

- SWE-bench Verified **76.40%** (Vals); LiveCodeBench 86.41% (Vals); **Vibe Code Bench v1.1 14.30% (#86/110)** (Vals)
- SWE-bench Pro 43.30% (self); SciCode 56% (self); LMArena 1501; WebDev Arena 1438

Long context:

- MRCR v2 (8-needle, 128k) **77.0%**; no full-window (1M) figure.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-bench 87.1%, TB2.0 55.06%, MCP Atlas 54.1% and BFCL 72.51% are upper-mid; capped by GDPval 1195 (frontier ref 1750+), no OSWorld and no TB2.1.
- **Reasoning: 85/100.** GPQA 91.67% clears the 90%+ frontier reference with MMLU-Pro 90.10%; held by HLE 39.7% (just under 40%) and the deprecated/estimated AA Index of 28.
- **Context window: 96/100.** 1M input / 64K output (≥1M band) with the batch's best measured retrieval (MRCR v2 77.0%); short of the ≥98% needed for 100.
- **Multimodal: 90/100.** Text, image, video, audio and PDF in → text out (audio band 90–100; MMMU-Pro 87.51%, Video-MMMU 87.6%); text-only output holds it at the floor.
- **Coding: 78/100.** SWE-bench 76.4%, LiveCodeBench 86.4% and SciCode 56% are solid but generational; SWE-bench Pro 43.3% and Vibe Code Bench 14.30% cap it.
- **Cost efficiency: 70/100.** $2/$12 standard ($4/$18 extended, Batch 50%) between the ~88 and ~60 anchors; no Zen Free ID verified.
- **Overall Score: 85/100.** (74 + 85 + 96 + 90 + 78) / 5 = 84.6 → 85. Best fit: native omni-modal long-context science/reasoning work — verify the stable endpoint still exists and expect to pay more for 3.1 Pro on agentic coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Google Gemini 3 blog, Vals AI model page, Artificial Analysis model page, Google DeepMind model page, LLM Stats). Independent Vals/AA rows were promoted over the mix of official and unverified rows; the deprecated-index and bimodal-coding conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
