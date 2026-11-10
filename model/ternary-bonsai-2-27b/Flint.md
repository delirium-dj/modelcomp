# Ternary Bonsai 2 27B — findings by Flint

- Source: PrismML (`prismml/ternary-bonsai-2-27b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B (PrismML; ternary-quantized 27B reasoning model derived from Qwen3.8-27B)
- **Short description:** PrismML's 1.58-bit ternary-quantized 27B model (every language-model weight in {-1, 0, +1} in a fixed rotated basis, FP16 scale per group of 128 weights), derived from Qwen3.8-27B with unchanged architecture; ~8.6 GB memory footprint, near-lossless retention, aimed at local and on-device inference.
- **Provider / access:** PrismML / Hugging Face open weights (Apache 2.0); hosted API route (~$0.07/$0.50 per 1M); open weights self-host ($0).
- **Release / knowledge:** Released 2026-09-17; knowledge cutoff not publicly disclosed (derived from the Qwen3.8-27B lineage).
- **IDs:** `prismml/ternary-bonsai-2-27b`; underlying Qwen3.8-27B (`qwen/qwen-3.8-27b`).
- **Context window:** 262,144 total tokens; max output 32,768 — per PrismML docs/whitepaper.
- **Modalities:** Text in; text out; thinking mode with agentic tool use and vision evaluations.
- **Pricing (as of 2026-11-10):** hosted ~$0.07/$0.50 per 1M; open weights $0 self-host.

### Raw benchmarks found

Thinking-mode retention (15-benchmark suite; near-lossless compression):

- Math: **93.40** (full-precision within two points; thinking mode) — PrismML.
- Coding: **85.96** (thinking mode) — PrismML.
- Agentic tool use: **74.01** (thinking mode; the behavior sub-4-bit quantization loses first) — PrismML.
- Vision: **65.19** (thinking mode) — PrismML.
- Retains ~95% of the full-precision baseline average across the suite; 1-bit Bonsai 27B retains 90%.

- Ternary Bonsai 2 27B: overall **53.6** out of 100, rank #84 of 214 (BenchLM); strongest eligible category Instruction Following at #73; 21 source-displayable benchmark rows.

Agent / tool use:

- WildClawBench-MM: no verified public score found for this exact ternary profile.
- Terminal-Bench 2.1: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- Math: **93.40** (see above) — PrismML.
- GPQA Diamond: no verified public score found for this exact ternary profile.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.

Coding:

- Coding: **85.96** (thinking mode; see above) — PrismML.
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.

Long context:

- MRCR / RULER / GraphWalks at window length: no long-context retrieval reported for this exact profile; context shipped at 262,144 total / 32,768 max out.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Agentic tool use verified at 74.01 in thinking mode; caps: no Terminal-Bench/GDPval/Claw-Eval coverage for this exact ternary profile.
- **Reasoning: 86/100.** Math verified at 93.40, within two points of full precision; thinking-mode retention ~95%; caps: HLE/LCR/MRCR not verified for this exact profile.
- **Context window: 75/100.** 262,144 total / 32,768 max out (200K-500K tier; 262K ≈ 75); caps: no long-context retrieval reported at this window.
- **Multimodal: 60/100.** Image-in band via thinking-mode vision at 65.19 / optional image input; text in; text out per curated meta; caps: text-native models score higher in the text-only band.
- **Coding: 86/100.** Coding verified at 85.96 in thinking mode; caps: no SWE-bench/LiveCode/SciCode coverage for this exact ternary profile.
- **Cost efficiency: 99/100.** Open weights $0 self-host; hosted ~$0.07/$0.50 per 1M.
- **Overall Score: 75/100.** Mean of the five quality dims = (70+86+75+60+86)/5 = 75.4 (rounded to 75); best-fit: near-lossless ternary retention with frontier coding/reasoning at a self-hostable price.

---

## Signature

Provided by: **Flint (recursive/flint-v1.0)** — 2026-11-10
Method: public internet research (vendor/model docs, benchmark leaderboards, whitepapers); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Bonsai 27B: The First 27B-Class Model to Run on a Phone — PrismML](https://prismml.com/news/bonsai-27b)
  - [Ternary Bonsai 2 27B — docs.prismml.com](https://docs.prismml.com/models/bonsai-2-27b)
  - [Ternary Bonsai 27B — Together AI](https://www.together.ai/models/prism-ml-ternary-bonsai-27b)
  - [Ternary Bonsai 2 27B — BenchLM decision reading](https://benchlm.ai/models/ternary-bonsai-2-27b)
  - [Bonsai 27B — ternary quantization tradeoffs (rohitraj.tech)](https://rohitraj.tech/notes/bonsai-27b-ternary-quantization-guide-2026)
- Future sources: add a new file next to this one, e.g. `Flint_2.md`, using the same headings.
