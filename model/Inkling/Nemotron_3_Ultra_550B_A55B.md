# Inkling — findings by Nemotron 3 Ultra 550B A55B

- Source: Inclusion AI (`Inkling`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (Base / xHigh reasoning tier)
- **Short description:** Inclusion AI's open-weight reasoning model with strong coding (LiveCodeBench 85.9% Vals, SWE-bench 82.0% Vals), solid HLE (46.2% AA), and 1M+ context. Free on Hugging Face / cheap via inference providers.
- **Provider / access:** Hugging Face (`InclusionAI/Inkling` or similar), OpenCode Zen (`opencode/Inkling`), inference providers. Open-weight, free on HuggingChat.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `Inkling` (OpenCode Zen / Inclusion AI). Free tier on HuggingChat.
- **Context window:** 1,000,000+ tokens; max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes (xHigh); tool calls yes; JSON mode yes. No vision/audio noted in benchmarks.
- **Pricing (as of 2026-10-19):** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.30–$0.80/M in, $0.60–$1.50/M out. Blended ≈ $0.50/M.
- **Architecture:** Open-weight reasoning model; parameter count not explicitly stated.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

From BenchLM (Inkling, Overall 85.2, rank 59):

Agent / tool use:
- Terminal-Bench 2.1 (Vals): **69.3%**

Reasoning / knowledge:
- AA Intelligence Index: **33.7%**
- AA HLE: **46.2%**
- AA LCR: **77.7%**
- AA Omniscience Index: **28.1%**
- AA Omniscience Accuracy: **52.1%**
- AA Omniscience Hallucination Rate: **50.0%**

Coding:
- LiveCodeBench (Vals): **85.9%**
- SWE-bench (Vals): **82.0%**
- AA Coding Index: **71.3%**

Multimodal:
- CharXiv: **88.4%**
- BabyVision: **76.3%**
- Design Arena Website: **1270 Elo** (OpenRouter)

Long context:
- AA LCR: **77.7%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** TB 2.1 69.3% (Vals) — below 88%+ frontier. No OSWorld, BrowseComp, GDPval. Capped by limited agentic benchmarks.
- **Reasoning: 70/100.** AA HLE 46.2% (exceeds 40%+), AA LCR 77.7%, AA Omniscience Index 28.1%. Capped by AA Intelligence Index 33.7% (<60 frontier), AA Omniscience Hallucination 50%.
- **Context window: 85/100.** 1M+ native; AA LCR 77.7%. Capped by no MRCR ≥98% at 512K+ for 100 tier.
- **Multimodal: 70/100.** CharXiv 88.4%, BabyVision 76.3%, Design Arena 1270 Elo. Text + image only. No video/audio/PDF. Methodology: +image in = 60-70.
- **Coding: 82/100.** LiveCodeBench 85.9% (Vals, exceeds 80%+ frontier), SWE-bench 82.0% (Vals, exceeds 80%+), AA Coding Index 71.3% (exceeds 70%+). Strong Vals scores.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.50/M blended. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 74.4/100.** Half-up mean of (65 + 70 + 85 + 70 + 82) / 5 = 74.4 → 74. Using six incl. cost: (65+70+85+70+82+95)/6 = 467/6 = 77.8 → 78. Model-queue says 85.2; discrepancy suggests queue weights coding higher. Best-fit: exceptional open-weight coding (LiveCodeBench 85.9%, SWE-bench 82.0%) at zero cost; agentic tool use weaker.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (BenchLM Inkling page), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Inkling_Small.md`, using the same headings.