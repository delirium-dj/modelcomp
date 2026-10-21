# MiniMax M2.5 — findings by MiniMax M3.1 Flash

- Source: MiniMax (MiniMax-M2.5), `MiniMaxAI/MiniMax-M2.5`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's February 2026 open-weight (Modified MIT) MoE — the same 228.7B/10B-active architecture as M2.7 but a generation earlier, with SWE-bench Verified 80.2% claimed (74.2% on Vals AI), LiveCodeBench 79.2% and τ²-bench 95.3% on Artificial Analysis, at $0.15–$0.30 per 1M in.
- **Provider / access:** Hugging Face `MiniMaxAI/MiniMax-M2.5` (Modified MIT), MiniMax API, OpenRouter `minimax/minimax-m2.5` ($0.27/$0.95), Groq, Together, Vercel, and an "M2.5-Lightning" speed profile at $0.30/$2.40 with 100 tok/s (vs 50 tok/s for the standard build).
- **Release / knowledge:** **2026-02-12** (MiniMax blog, AA, BenchLM, OpenRouter created timestamp). Knowledge cutoff not published.
- **IDs:** `MiniMaxAI/MiniMax-M2.5` (HF), `minimax/minimax-m2.5` (OpenRouter, models.dev).
- **Context window:** **196,608** tokens (`max_position_embeddings`) — AA's spec box says 205K, OpenRouter 204,800, BenchLM 128K, Vals 197k.
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$0.30/M in, $1.20/M out** (AA, Vals, models.dev, OpenCode); OpenRouter lists $0.27/$0.95; the launch README priced the standard build at **$0.15/$1.20** and the Lightning profile at $0.30/$2.40 — a wide, provider-dependent spread.
- **Architecture:** MoE `minimax_m2`, 228,689,764,864 total (≈229B) / **10B active**, 62 layers, 256 experts with 8 active, hidden 3072 — identical to M2.7, one generation earlier. **Licence: Modified MIT** (commercial use permitted, with the standard large-revenue exception).

### Raw benchmarks found

> Vendor figures from the M2.5 launch README against Vals AI and Artificial Analysis; the SWE-bench and Terminal-Bench gaps are both harness-driven.

Reasoning / knowledge:

- GPQA Diamond: **85.2%** (vendor) / **84.85%** (AA) / **82.07%** (Vals AI) · HLE (no tools): **19.4%** (vendor) / **20.53%** (AA) · AIME 2025: **86.3%** (vendor) · MMLU-Pro: **80.09%** (Vals) / **80.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **23** (estimated) · Tau2-bench: **95.32%** (AA) · AA-LCR: **73.33%** (AA) / **69.5%** (vendor) · CritPt: **1.14%** (AA) · IFBench: **71.63%** (AA) / **70.0%** (vendor)
- Omniscience Accuracy / Hallucination Rate: **26.18% / 88.12%** (AA) · SciCode: **44.4%** (vendor) · Output speed: **50 tok/s** (vendor), 64.5 (AA), 68 (BenchLM)

Agent / tool use:

- Tau2-bench: **95.32%** (AA) · Terminal-Bench 2: **51.7%** (vendor) vs **41.57%** (Vals AI) — conflict flagged · Terminal-Bench Hard: **34.8%** (AA) · GDPval-AA: no verified public score found (AA field null) · GDPval-MM: **59%** average win rate (vendor) · BFCL multi-turn: **76.8%** (vendor) · BrowseComp (with context): **76.3%** (vendor) · JobBench: **14.8%** (BenchLM) · Gert Labs: **39.11%** (BenchLM) · Vibe Code Bench v1.1: **14.85%** (BenchLM)

Coding:

- SWE-bench Verified: **80.2%** (vendor) vs **74.20%** (Vals AI, #49/88) — conflict flagged; vendor also lists 79.7% on Droid and 76.1% on OpenCode scaffolds
- LiveCodeBench: **79.21%** (Vals AI) / **79.2%** (BenchLM) · SWE-bench Pro: **55.4%** (vendor) · Multi-SWE-Bench: **51.3%** (vendor) · SWE-bench Multilingual: **74.1%** (vendor) · VIBE-Pro: **54.2%** (vendor) · MEWC (Excel): **74.4%** (vendor) · SciCode: **44.4%** (vendor)

Long context:

- No MRCR / RULER measurement published for MiniMax M2.5.

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 95.3%, BFCL multi-turn 76.8% and BrowseComp 76.3% are good, but Terminal-Bench 2 is 41.6–51.7%, no GDPval-AA figure exists, JobBench is 14.8% and Gert Labs 39.1%.
- **Reasoning: 68/100.** GPQA 82.1–85.2%, AIME 2025 86.3%, MMLU-Pro 80.1% and τ² 95.3% are mid-band, capped by HLE 19.4–20.5%, CritPt 1.14% and an 88.1% hallucination rate.
- **Context window: 70/100.** 196,608 tokens is the 200K class and no retrieval measurement was published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 70/100.** SWE-bench Verified 74.2–80.2%, SWE-bench Pro 55.4%, LiveCodeBench 79.2% and Multi-SWE 51.3% are solid mid-band numbers, capped by Vibe Code Bench 14.9% and SciCode 44.4%.
- **Cost efficiency: 92/100.** $0.30/M in and $1.20/M out (as low as $0.15/$1.20 at launch) is cheap, and the Modified MIT licence allows commercial self-hosting.
- **Overall Score: 56/100.** Mean of the five quality dims = (58 + 68 + 70 + 15 + 70) / 5 = 56.2 → **56**. Best fit: open-weight agentic coding where the licence and the price matter — one generation behind M2.7, which is better post-trained and nearly free at the API.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (MiniMax M2.5 launch post and Hugging Face model card/README, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenRouter API, MiniMax M2.7 comparison figure); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M2.7.md`, using the same headings.
