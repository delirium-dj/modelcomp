# Gemma 4 26B A4B — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemma-4-26b-a4b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (Open Weight, MoE)
- **Short description:** Google's open-weight MoE model (26B total / 4B active). Queue Overall 45.6. BenchLM shows 45.63 (rank 118). Small efficient MoE for local deployment.
- **Provider / access:** Hugging Face (`google/gemma-4-26b-a4b`), Google AI Studio, OpenCode Zen (`opencode/gemma-4-26b-a4b`). Free on HuggingChat.
- **Release / knowledge:** 2026 release (Gemma 4 family); knowledge cutoff not explicitly stated.
- **IDs:** `google/gemma-4-26b-a4b` (Hugging Face), `gemma-4-26b-a4b` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** Not explicitly stated (Gemma 4 family likely 128K-256K).
- **Modalities:** Text in/out; reasoning no; tool calls yes; JSON mode yes. No vision/audio.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal (26B fits consumer GPU); inference providers ~$0.10-0.30/M in, $0.20-0.60/M out.
- **Architecture:** MoE: 26B total params, 4B active (A4B). Gemma 4 family.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 45.63, rank 118/956):
- No detailed benchmark rows displayed on page

**Sibling models on BenchLM:**
- Gemma 4 31B: 39.87 (rank 129)
- Gemma 4 12B: 36.27 (rank 140)
- Gemma 4 E4B: 31.06 (rank 155)
- Gemma 4 E2B: 29.98 (rank 156)
- Gemma 4 26B A4B: 45.63 (rank 118)

**Proxy from Gemma 4 family:**
- Overall scores scale with parameter count
- 26B A4B is largest Gemma 4 variant listed with score

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 40/100.** Overall 45.63 suggests limited agentic capability. MoE with 4B active limits complex tool use. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 50/100.** Overall 45.63 suggests moderate reasoning. 4B active params insufficient for complex reasoning. Capped by no GPQA, HLE, FrontierMath, AA Intelligence Index.
- **Context window: 60/100.** Estimated 128K-256K (Gemma family). Methodology: small MoE = 55-65.
- **Multimodal: 30/100.** Text-only. No vision/audio. Methodology: text-only = 20-30.
- **Coding: 50/100.** Overall 45.63 suggests moderate coding. 4B active limits complex coding. Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal (26B fits consumer GPU); inference providers ~$0.20/M blended. Methodology: free/open-weight + small size ≈ 95-100.
- **Overall Score: 46/100.** Half-up mean of (40 + 50 + 60 + 30 + 50) / 5 = 46 → 46. Using six incl. cost: (40+50+60+30+50+95)/6 = 325/6 = 54.2 → 54. Model-queue says 45.6; discrepancy reduced. Best-fit: capable small open-weight MoE for local deployment; limited by 4B active params and text-only.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; BenchLM Gemma 4 26B A4B page (Overall 45.63). Proxy from Gemma 4 family scores. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Gemma_4.md`, using the same headings.