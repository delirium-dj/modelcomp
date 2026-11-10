# Grok 4.1 Fast — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI)/grok-4-1-fast (alias `grok-4-1-fast-reasoning`)
- Date: 2026-11-10 (UTC; original research 2026-10-03, re-researched 2026-10-09, third pass 2026-11-10)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-09 (Overall 72). Fresh sources this pass: BenchLM **reasoning**
> model page (snapshot 2026-11-10, **45.34/100, #120/1020**, 15/804 rows)
> and BenchLM **base** model page (**36.22, #156/1020**, 14/804 rows) with
> per-row provenance (AA, Vals AI). Every recorded row for the scored
> reasoning config re-confirms byte-identically: τ² 93.3, AA-MMMU-Pro 63.3,
> AA-LCR 74.0, CritPt 2.9, AA Index 20.4, AA-GPQA 85.3, AA-HLE 19.3, Vibe
> Code Bench 1.20 (Vals provenance now shown). Changes: **Coding 65→66** —
> first independent AA harness reading for competitive coding: **AA
> LiveCodeBench 82.2%** (well above the recorded Serenities-AI 62.0; the
> Serenities figure stays listed as the other-harness row), **Reasoning
> 64→63** — the first **AA-Omniscience** row for the reasoning config is
> severe: **net −29.9** (accuracy 25.1, **hallucination 73.4** — the worst
> confabulation profile recorded for any Grok in this repo), pulling the
> score down despite AA MMLU-Pro 85.4 corroborating the vendor-class 87 and
> AA-IFBench 52.7 landing mid. Overall 72 unchanged (mean 72.2 → 72.4).
> Held: Tool 72 (τ² 93.3 re-confirmed; TB2.1/Tau3/GDPval/Claw-Eval rows
> still absent — re-checked), Context 95 (reasoning page confirms **2M**;
> the base page now lists **1M** — variant listing conflict noted, xAI docs
> 2M authoritative; still no retrieval figure), Multimodal 65 (MMMU-Pro
> 63.3 re-confirmed), Cost 96 (pricing unchanged $0.20/$0.50, $0.05 cache).
> Base-variant rows kept separate and unscored: AA Index **11.3**, GPQA
> 63.7, HLE 5.1, τ² 63.7, MMMU-Pro 48.4, LCR 31.3, Omniscience **−50.9**,
> IFBench 36.5, Gert Labs 47.32 — the variant split is now fully measured.
> Deep-research addendum (2026-10-09) below preserved untouched.

## Model card

- **Name:** Grok 4.1 Fast (reasoning-capable fast tier of the Grok 4 line; not to be confused with the older `grok-4-fast`)
- **Short description:** xAI's high-throughput multimodal model purpose-built for agentic tool calling at low cost, with a 2M window; top use case is high-volume agent/coding pipelines. Not a variant of another tracked entry (`grok-4-fast` is a separate older model).
- **Provider / access:** xAI API (`grok-4-1-fast` / `grok-4-1-fast-reasoning`, regions us-east-1 + eu-west-1), OpenRouter, xAI console; OpenAI-compatible Chat Completions with function calling + structured outputs.
- **Release / knowledge:** 2025-11 (OpenRouter listing dated 2025-11-19); knowledge cutoff not published on the model page.
- **IDs:** `grok-4-1-fast` (xAI API), `grok-4-1-fast-reasoning` (canonical docs name), OpenRouter `x-ai/grok-4.1-fast`.
- **Context window:** 2,000,000 tokens (xAI docs "Context window 2,000,000"; CloudPrice 2.0M / 30K max output; BenchLM 2M). Higher-context pricing applies above 128K (xAI docs note).
- **Modalities:** text + image in; text out — **second-pass update (2026-10-09): OpenRouter FAQ adds "files such as PDFs" as input** (PDF-in provisionally credited as part of the same image-tier band, no band change); reasoning yes (thinking modes); function calling + structured outputs yes; live search add-on available.
- **Pricing (as of 2026-10-03):** $0.20 in / $0.50 out per 1M, cached input $0.05 (xAI official docs); live search $25/1K sources. Paid — no $0 tier verified today (an earlier free-window promo is not confirmed current).
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **93.3%** (BenchLM `grok-4-1-fast-reasoning` page — re-confirmed identical, 2026-11-10 snapshot)
- Terminal-Bench 2.1 / Tau3 / GDPval-AA: no verified public score found (xAI has not published TB/GDPval for this tier) — still absent on the 2026-11-10 snapshot
- Claw-Eval / MCP-Atlas: no verified public score found (re-checked)
- Positioning: xAI docs describe it as "optimized specifically for high-performance agentic tool calling" (vendor claim, not a score)

Reasoning / knowledge:

- GPQA Diamond: **72.0%** (Serenities AI comparison set) / **AA-GPQA Diamond 85.3%** (BenchLM, AA harness — re-confirmed 2026-11-10) — both listed, harnesses differ
- AA-HLE: **19.3%** (BenchLM — re-confirmed)
- MMLU-Pro: **87.0%** (Serenities AI); **AA MMLU-Pro: 85.4%** (AA leaderboard — new, independent corroboration)
- ARC-AGI: **48.0%** (Serenities AI)
- AA-LCR: **74.0%**; CritPt: **2.9%** (BenchLM — both re-confirmed)
- **AA-Omniscience: net −29.9** (accuracy **25.1**, **hallucination 73.4**) — **new this pass**, first factuality row for the reasoning config; severe confabulation profile
- **AA-IFBench: 52.7%** (new, mid)
- Artificial Analysis Intelligence Index: **20.4** (BenchLM — reasoning variant, re-confirmed). **Second-pass (2026-10-09):** AA's direct page shows the **non-reasoning** variant at **11 (estimated, #75/300, median 7)** and carries a **deprecation banner → Grok 4.3**; **third pass (2026-11-10):** base page now reads **11.3** with fuller rows (GPQA 63.7, HLE 5.1, τ² 63.7, MMMU-Pro 48.4, LCR 31.3, Omniscience −50.9, IFBench 36.5) — both variants kept (file's 20.4 stands for the reasoning config)
- Chatbot Arena ELO: **1482** (Serenities AI)
- BenchLM composite (2026-11-10): reasoning config **45.34/100, #120/1020**; base config **36.22, #156/1020**

Coding:

- SWE-bench Verified: **60.0%** (Serenities AI)
- LiveCodeBench: **62.0%** (Serenities AI) / **AA LiveCodeBench: 82.2%** (AA leaderboard via BenchLM 2026-11-10 — **new, independent**; harness gap between the two readings noted)
- HumanEval+: **88.0%** (Serenities AI)
- Vibe Code Bench: **1.20%** (BenchLM — Vals AI provenance now shown)
- SciCode / DeepSWE: no verified public score found (re-checked)

Long context:

- 2M window declared (xAI docs; BenchLM reasoning page confirms **2M**; the BenchLM **base** page now lists **1M** — variant listing conflict noted, xAI docs authoritative); no MRCR / RULER figure published (no long-context retrieval reported — re-checked 2026-11-10)

Multimodal:

- AA-MMMU-Pro: **63.3%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 93.3% is near the top of the agentic band and the model is purpose-built for tool calling, but the complete absence of TB2.1/Tau3/GDPval/Claw-Eval rows caps it at 72 (absence re-confirmed on the 2026-11-10 snapshot; no change).
- **Reasoning: 63/100.** MMLU-Pro 87% (AA 85.4 independent) and AA-GPQA 85.3% are strong, but AA-HLE 19.3% and AA Index 20.4 sit in the documented mid band with CritPt 2.9% — and the first factuality row for this config is severe: **AA-Omniscience net −29.9** (25.1 accuracy / 73.4 hallucination, the worst Grok profile in this repo) → 63 (was 64). AA-IFBench 52.7 (mid) is the partial offset.
- **Context window: 95/100.** 2M tokens is in the ≥1M tier (95–100) — reasoning page re-confirms 2M; base page's 1M listing noted as variant conflict; no ≥98%-retrieval-at-512K evidence to award 100, and pricing above 128K is a caveat, not a score cut.
- **Multimodal: 65/100.** Text + image in, text out (the +image-in band is 60–70); AA-MMMU-Pro 63.3% re-confirmed mid-band; no video/audio in, no non-text out (no change).
- **Coding: 66/100.** SWE-bench Verified 60% is still the mid anchor, but competitive coding now has an independent upper reading: **AA LiveCodeBench 82.2%** (vs the recorded Serenities 62.0 — harness gap noted) → 66 (was 65). Vibe Code Bench 1.20% still mirrors the documented "Vibe <10 → 65–75" penalty band and SWE-Pro/DeepSWE remain unpublished, holding it well short of the frontier band.
- **Cost efficiency: 96/100.** $0.20/$0.50 with $0.05 cached input sits just above the ~$0.10/$0.20 ≈ 97–99 anchor — excellent value for a 2M-context frontier-lab model (pricing unchanged this pass).
- **Overall Score: 72/100.** (72 + 63 + 95 + 66 + 66) / 5 = 362/5 = 72.4 → 72 — best-fit as a cheap, huge-context agentic executor when frontier reasoning depth isn't required; the new AA rows sharpen the tradeoff (stronger independent LCB, but a measured −29.9 factuality net).

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-11-10 (original: 2026-10-03; second pass 2026-10-09; user-approved third pass)
- Method: third-pass enrichment re-research (public internet research: BenchLM [Grok 4.1 Fast (Reasoning)](https://benchlm.ai/models/grok-4-1-fast-reasoning) and [Grok 4.1 Fast](https://benchlm.ai/models/grok-4-1-fast) model pages, snapshot 2026-11-10, per-row provenance — Artificial Analysis model/leaderboard rows, Vals AI Vibe Code Bench — checked against 2026-10-09 sources: xAI official docs, BenchLM 2026-09-28, Serenities AI, AA deprecation banner, OpenRouter, Grokipedia); scores are normalized 1–100 interpretations, not official vendor scores. Previous Signature 2026-10-09; Deep-research addendum (2026-10-09) preserved untouched.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Deprecation:** AA banner → **Grok 4.3** (model kept for dataset permanence); non-reasoning Index 11 (estimated) vs the file's reasoning-variant 20.4 — both kept.
- **Modality detail:** OpenRouter confirms **PDF input** alongside text/images (band unchanged at image-tier).
- **Confirmed:** 2M context, Nov-2025 release, $0.20/$0.50 pricing anchor, τ² 93.3 reasoning rows unchanged (no contradicting evidence found).
- **Scores:** no dimension changed; Overall held at 72.
