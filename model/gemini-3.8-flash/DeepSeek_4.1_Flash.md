# Gemini 3.8 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.8 Flash (`gemini-3.8-flash`; separate sibling `gemini-3.8-flash-cyber` and TTS variant are different models)
- Date: 2026-10-16 (UTC) — deep rewrite pass; re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-8-flash`, 34 rows) computes an overall **68.99/100 (#21 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources re-run).
> Now sourced with numerics this pass: Google model card / Cloud guide — Terminal-Bench 2.1 **90.8%**, SWE-Bench Pro **61.6%**, SWE-Atlas **51.9%**, τ³-bench Banking **38.1%**, HLE **45.4%**, HLE-Verified **54.9%**; Google eval table — DeepSWE v1.1 **73.7%**, GDPval-AA v2 **1545 Elo**, Vals Finance Agent v2 **61.4%**, Harvey Legal Agent **10.0%**, Terminal-Bench 4.0 **19.1%**, OSWorld-2.0 **59.0%**, GDP.PDF 35.0%, CharXiv 86.2%, LVBench 87.1–87.8%, BioMysteryBench 88.8%/56.5%, LABBench2 86.2%. Independent: Vals Index 54.83%, GPQA-Diamond **94.4%**, LiveCodeBench **89.5%**, SWE-bench (Vals) **80.0%**, CursorBench 4.0 39.6%, Tau3-Banking 45% (AA). ARC-AGI-1 98.5% / ARC-AGI-2 89.2%.
> **Conflicts surfaced:** (1) Terminal-Bench 2.1 **90.8% (Google Cloud doc)** vs **89.4% (Google eval table via FelloAI/DeepMind)** vs **81.3% (Vals, 3 trials)** — harness/effort spread. (2) AA Intelligence Index **59 (launch, v4.1.1)** vs **41 / 40.9 (current v4.3.2)** — index-basket rebase, not a capability change; never compare across versions. (3) Pricing basis: official intro **$0.75/$3.75** (through 2026-12-31) vs the post-2027 **$1.50/$7.50** — both listed. (4) GPQA Diamond **95.3%** (pricepertoken) vs **94.4%** (Vals). (5) Terminal-Bench 4.0 19.1% is a clear weak spot vs Opus 5's 51.8%.
> Sources: https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash · https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash · https://deepmind.google/models/gemini/flash · https://felloai.com/gemini-3-8-flash/ · https://benchlm.ai/compare/gemini-3-5-flash-vs-gemini-3-8-flash · https://www.vals.ai/comparisons/google_gemini-3.8-flash-vs-openai_gpt-6-sol · https://pricepertoken.com/pricing-page/model/google-gemini-3.8-flash

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's production Flash upgrade (2026-09-02), built directly on Gemini 3.7 Flash — more test-time compute, more reasoning steps and more persistent tool use for long-horizon coding/agentic work at the cost of latency and tokens.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`, stable ID), AI Studio, Gemini app; relayed by gateways (OpenRouter, Vertex). Free tier available on AI Studio, and on OpenCode Zen. No `noFreeId`.
- **Release / knowledge:** 2026-09-02 (GA); knowledge cutoff March 2026 (some domains January 2025).
- **IDs:** `gemini-3.8-flash`.
- **Context window:** 1,048,576 input / 65,536 output tokens.
- **Modalities:** text, image, video, audio and PDF input; text output only; thinking levels low/medium(default)/high (MINIMAL not supported).
- **Pricing (as of 2026-10-16):** intro **$0.75 in / $3.75 out** per 1M (holds through 2026-12-31); **$1.50/$7.50** from 2027-01-01; cached input 90% off ($0.075 → $0.15); Batch/Flex $0.375/$1.875.
- **Architecture:** proprietary; 3.7-Flash foundation with more test-time compute.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **90.8%** (Google Cloud doc) / **89.4%** (Google eval table) / **81.3%** (Vals)
- Terminal-Bench 4.0 **19.1%** (Google/Vals) — weak spot; τ³-bench Banking **38.1%**; OSWorld-2.0 **59.0%**
- Vals Finance Agent v2 **61.4%** (#2 class); Harvey Legal Agent **10.0%**; ApprenticeBench 24%
- GDPval-AA v2 **1545 Elo** (self); AA Tau3-Banking 45% (independent)

Reasoning / knowledge:

- GPQA Diamond **95.3%** (pricepertoken) / **94.4%** (Vals); HLE **45.4%** / HLE-Verified **54.9%**
- ARC-AGI-1 98.5%, ARC-AGI-2 **89.2%**, ARC-AGI-3 10.4%; MMLU-Pro 90.2% (Vals)
- AA Intelligence Index **59** (launch v4.1.1) vs **41** (current v4.3.2) — conflict; AA Coding Index 76.3%

Coding:

- DeepSWE v1.1 **73.7%**; SWE-Bench Pro **61.6%**; SWE-Atlas **51.9%**; SWE-bench (Vals) **80.0%**
- LiveCodeBench (Vals) **89.5%**; CursorBench 3.2 69.2%, CursorBench 4.0 39.6%; Bug Hunt 18.0 fixes

Multimodal / long context:

- CharXiv Reasoning **86.2%**; LVBench **87.1–87.8%**; GDP.PDF 35.0%; BioMysteryBench 88.8%/56.5%; LABBench2 86.2%
- 1M window; no model-specific MRCR reproduced — no verified retention value.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 81–91% and Finance Agent v2 61.4% make it a strong agentic pick; capped by GDPval 1545 (below the >1750 frontier ref) and a weak Terminal-Bench 4.0 (19.1%).
- **Reasoning: 90/100.** GPQA 94–95%, ARC-AGI-2 89.2% and HLE-Verified 54.9% are frontier-level; the AA Index rebase (59 vs 41) and HLE 45.4% hold it under 93.
- **Context window: 95/100.** 1,048,576 input (≥1M band) with a 65,536 output cap; no recall-at-depth benchmark for this checkpoint.
- **Multimodal: 90/100.** Text + image + video + audio + PDF input (audio band 90–100) with text-only output.
- **Coding: 89/100.** DeepSWE 73.7%, SWE-Bench Pro 61.6% and LiveCodeBench 89.5% are strong; DeepSWE sits just below the 74% frontier ref and no independent SWE-bench Pro was located.
- **Cost efficiency: 88/100.** $0.75/$3.75 intro with 90% cache discount sits in the low-90s band; rates double in Jan 2027.
- **Overall Score: 90/100.** (87 + 90 + 95 + 90 + 89) / 5 = 90.2 → 90. Best fit: autonomous coding agents, terminal tasks and finance/document workflows at Flash prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep rewrite-pass public internet research (Google Gemini API model page, Cloud Enterprise Agent Platform guide, DeepMind Flash page, FelloAI's transcription of Google's eval table, BenchLM, Vals AI comparison, pricepertoken). Vendor self-reported rows are separated from independent rows; the TB2.1 harness spread, AA index rebase and pricing-schedule conflict are flagged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
