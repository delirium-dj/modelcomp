# Gemini 1.5 Pro — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-1.5-pro-002`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (API ID `gemini-1.5-pro-002`, latest stable)
- **Short description:** Google's February 2024 multimodal MoE flagship — the first production model with a 2M-token context window and still the long-context benchmark reference for retrieval. It matched Gemini 1.0 Ultra quality at far less training compute, beat 1.0 Pro on 29/33 development benchmarks (+38.4% math/science/reasoning, +16.9% video understanding, +8.9% code), and famously learned English→Kalamang translation from a single grammar book (MTOB) at human-learner level. In 2026 it is a legacy model: not deprecated, still serving, but superseded by the Gemini 2.x/3.x/4 line (Gemini 4 Argon shipped 2026-09-30) — Google's own docs recommend the latest models for new projects.
- **Provider / access:** Closed API (Google AI Studio, Vertex AI).
- **Release:** 2024-02-15 (preview with 1M ctx private beta); 2024-05-24 GA with 2M ctx. Knowledge cutoff November 2023.
- **Context window:** 2,000,000 tokens (128K standard at launch, 1M preview, 2M at GA; research-tested to 10M).
- **Modalities:** Text, images (JPEG/PNG/WebP/HEIC/HEIF), audio (WAV/MP3/AIFF/AAC/OGG/FLAC), video (MP4/MPEG/MOV/AVI) and PDFs — all interleavable in one prompt → text out. Max output: 8,192 tokens.
- **Pricing (as of 2026-10-09):** $1.25/M input, $5.00/M output for prompts ≤128K; $2.50/$10.00 for prompts >128K (blended ~$2.19/M at a 3:1 in:out ratio).
- **Architecture:** Mixture-of-Experts transformer; details undisclosed.

### Raw benchmarks found

Google DeepMind technical report (May 2024):

- MMLU: **85.9%**; MMLU-Pro: **69%** (third-party catalog figure)
- GPQA Diamond: **46.2%** (a third-party catalog lists 50.6% — the tech-report figure is 46.2%)
- MATH: **58.5%** (tech report per Benchgen; another catalog lists 80.0% — source discrepancies noted)
- HumanEval: **84.1%**
- Needle-in-a-haystack: **>99% recall at 1M tokens**, 100% up to 530K, **99.2% at 10M tokens** (text); near-perfect (>>99.7%) needle recall at 1M across text, video and audio modalities
- VS-Gemini 1.0 Pro: wins 29/33 benchmarks; comparable to 1.0 Ultra (wins 19/33)
- Win-rates vs 1.0 Ultra: text 12/15, vision 6/13, audio 1/5

Third-party 2026 trackers (this is now a 2-year-old model):

- Arena ELO ~1230 (reasoning and overall) — far below the current ~1700+ frontier
- Multimodal capability: ~50.1% of the current leader (Vector Wire); "behind the leaders" in multimodal, with too few current results to rate reasoning/coding/agentic
- Intelligence index: 67/100, #13 of 22 tracked models (What's The Big Data catalog, 2026-06)
- SWE-bench, Terminal-Bench, τ-bench, MCP Atlas, GDPval, AIME, IFBench, LiveCodeBench: **no verified public score found** (these benchmarks did not exist or were not run at its 2024 launch)

### Normalized scores (1–100)

- **Tool use: 45/100.** Gemini 1.5 Pro shipped with native function calling and tool use in the API, but zero of the modern agentic harness benchmarks (TB2.1, τ³, MCP Atlas, GDPval) were run on it — no verified public score found — so this is a structural estimate: functional tool plumbing, no evidence of frontier agentic reliability.
- **Reasoning: 52/100.** GPQA Diamond 46.2% and MMLU 85.9% were mid-tier-equivalent in 2024 (close to GPT-4o era) and sit well below the 2026 frontier (GPQA 90%+, HLE 40%+); HLE/AIME/LiveBench: no verified public score found.
- **Context window: 98/100.** A 2M-token production window — double the ≥1M band worth 95–100 — with genuine verified retrieval (>99% at 1M, 100% to 530K, 99.2% even at 10M in research), which is exactly the retrieval-demonstrated-at-scale case the top band describes. The 8,192-token output cap is the only practical shortfall.
- **Multimodal: 90/100.** Text + image + audio + video input (interleaved) → text out is the 90–100 band; video understanding was a headline strength (+16.9% over 1.0 Pro) and it reads full PDFs and multi-hour media — no non-text output, so it stays at the bottom of the band.
- **Coding: 48/100.** HumanEval 84.1% is underwhelming even for its era and it never ran SWE-bench/Terminal-Bench style agentic coding evals; library-level Python generation only, with 8K output tokens capping any larger refactoring work.
- **Cost efficiency: 82/100.** Cheapest frontier-tier input price at launch ($1.25/$5 ≤128K) but anything above 128K doubles to $2.50/$10 — and a 2M window is exactly where you pay the premium; legacy-tier value in 2026, well behind modern flash models on price-performance.
- **Overall Score: 67/100.** Best-fit recommendation: still a defensible pick for massive-context ingestion (multi-hour video, huge PDF sets, 2M-token documents) at mid-tier pricing, but for reasoning, coding or agentic work the superseding Gemini generations and current flash models win decisively.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Gemini 1.5 technical report arXiv:2403.05530, Google launch blog, Google AI for Developers model docs, Benchgen/LLMversus/What's The Big Data/Vector Wire trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2_5_Flash.md`, using the same headings.
