# Gemini 3.1 Flash — findings by Big Pickle

- Source: Google (`gemini-3.1-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's mid-rung speed-tier model in the 3.1 series, slotting between Gemini 3 Flash (Dec 17, 2025) and the cheaper Gemini 3.1 Flash-Lite (Mar 3, 2026); a fast, multimodal, 1M-context workhorse aimed at high-volume production and agent-loop traffic.
- **Provider / access:** Google Gemini API (Developer API / Vertex AI / AI Studio), `gemini-3.1-flash`.
- **Release / knowledge:** Early 2026 — between Gemini 3.1 Pro (Feb 19, 2026) and Gemini 3.1 Flash-Lite (Mar 3, 2026); knowledge cutoff late 2025 / early 2026 per the 3.1 family.
- **IDs:** `gemini-3.1-flash` (Google; proprietary, no open weights)
- **Context window:** 1M-token 3.1-family spec (1,048,576 input; max output ~64K–66K) per DeepMind 3.1-series model cards.
- **Modalities:** text, image, audio, and video input; text output; native multimodal; tool calling; no separate transcription step.
- **Pricing (as of 2026-09-20):** model-specific list price not verified; 3.1-family band is $0.25–$2.00 in / $1.50–$12.00 out (3.1 Flash-Lite $0.25/$1.50; 3.1 Pro $2/$12, rising to $4/$18 over 200K context).
- **Architecture:** Proprietary, undisclosed (family is mixture-of-experts, native multimodal).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / SWE-bench Pro for Gemini 3.1 Flash itself: **no verified public score found** (family context: 3.1 Flash-Lite Terminal-Bench 2.1 34.1%; 3.1 Pro 70.3% Terminal-Bench 2.1 / 70.8% Vals — deepmind.google, benchmarklist.com).
- Community-averaged Tool use: **69.1/100** (10 sources, model/gemini-3.1-flash/average.md).

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for 3.1 Flash itself (family context: 3.1 Flash-Lite 86.9% vendor / 81.1–83.8% harness; 3.1 Pro 94.3%).
- Community-averaged Reasoning: **72/100** (10 sources).

Coding:

- SWE-bench Verified / LiveCodeBench: **no verified public score found** for 3.1 Flash itself (family context: 3.1 Flash-Lite 62.8% SWE-bench Verified, 80.1% LiveCodeBench; 3.1 Pro 80.6%).
- Community-averaged Coding: **70.2/100** (10 sources).

Long context:

- GDM-MRCR v2 for 3.1 Flash itself: **no verified public score found** (family context: 3.1 Flash-Lite 60.1% avg @128K, 12.3% @1M pointwise; 3.1 Pro 84.9% @128K, 26.3% @1M).
- Community-averaged Context window: **94.7/100** (10 sources; consistent with the 1M family spec).

Multimodal:

- Input modalities: text/image/audio/video in, text out (DeepMind 3.1-series card). Dedicated 3.1 Flash MM benchmark scores: **no verified public score found**.
- Community-averaged Multimodal: **84/100** (10 sources).

### Normalized scores (1–100)

- **Tool use: 70/100.** Community 69.1; no independently verified agentic milestone for this exact tier, and 3.1-class Flash siblings sit mid-pack on Terminal-Bench 2.1.
- **Reasoning: 73/100.** Community 72; family GPQA implies solid but sub-frontier science reasoning, well under 3.1 Pro's 94.3%.
- **Context window: 95/100.** Full 1M window per 3.1-family spec (community 94.7); a large-window score — verified high-depth recall exists only for 3.1 Pro.
- **Multimodal: 84/100.** Native text/image/audio/video input at Flash-tier price points (community 84).
- **Coding: 70/100.** Community 70.2; a capable volume-coding model, clearly below the 3.1 Pro / Opus-line frontier.
- **Cost efficiency: 88/100.** Cheap, high-throughput Flash-tier pricing consistent with the family band ($0.25–$2 / $1.50–$12); not the cheapest rung (Lite is).
- **Overall Score: 78/100.** Mean of the five quality dims (70+73+95+84+70)/5 = 78.4 → 78 (unchanged). A fast, solid, multimodal 1M-context workhorse — one or two steps below the 3.1 Pro reasoning/coding frontline.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 70 | 70 | — |
| Reasoning | 73 | 73 | — |
| Context window | 95 | 95 | — |
| Multimodal | 84 | 84 | — |
| Coding | 70 | 70 | — |
| Cost efficiency | 88 | 88 | — |
| **Overall** | **78** | **78** | **—** |

New and corrected data (all found 2026-10-08):

- **No standalone primary data has ever appeared for this exact tier.** BenchLM still returns no page for `gemini-3-1-flash` (404); Vals' release index does not list a standalone Gemini 3.1 Flash; llm-stats carries no row. The original report's reliance on community averages (`average.md`) is therefore still the only signal — and it remains uncorroborated.
- **Family anchors refreshed:** Gemini 3.1 Flash-Lite (Vals): Terminal-Bench 2.1 34.1%, LiveCodeBench 80.1%, SWE-bench 62.8%, GPQA Diamond 81.1%, MMLU-Pro 86.2%, CharXiv 73.2% — all still mid-tier and consistent with the 70-73 quality band assigned to 3.1 Flash.
- **Supersession confirmed:** the 3.1 Flash tier has effectively been retired inside the line — Google's current catalog runs 3.5 Flash (2026-05-19), 3.6 Flash (07-21), 3.7 Flash (08-13), 3.8 Flash (09-02), all at $0.75/$3.75 promo (→$1.50/$7.50 from 2027-01-01). The 3.1 family's only surviving listings are 3.1 Flash-Lite ($0.25/$1.50), 3.1 Flash Image ($0.50/$3.00, 131K), and 3.1 Flash Live.
- **Pricing:** no clean unique rate was ever published for the standalone 3.1 Flash; the family band ($0.25–$2.00 / $1.50–$12.00) with the $0.25/$1.50 Flash-Lite anchor remains the best estimate — note 3.1 Flash Image's $0.50/$3.00 as the most likely Flash-tier rate.
- **Positioning note:** 3.5 Flash (BenchLM 62.5) is the cheapest current model with verified rows in this band; 3.1 Flash sits between it and 3.1 Flash-Lite (48.15) on quality but has no verified rows of its own — if a user needs this capability tier today, 3.5 Flash or 3.6 Flash should be chosen instead.

Gaps still open after re-run: every verified row for `gemini-3.1-flash` itself (TB2.1, GPQA, SWE-bench, MRCR, MMMU-Pro), unique list price, BenchLM/llm-stats coverage.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (deepmind.google, benchmarklist.com, aireleasetracker.com, hokai.io, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.