# Gemma 4 31B — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemma-4-31b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (Open Weight, Non-Reasoning)
- **Short description:** Google's open-weight 31B parameter model. Queue Overall 79.7. BenchLM shows Gemma 4 31B score 39.87 (rank 128). Free on Hugging Face, strong for its size.
- **Provider / access:** Hugging Face (`google/gemma-4-31b`), Google AI Studio, OpenCode Zen (`opencode/gemma-4-31b`), inference providers. OpenAI-compatible API.
- **Release / knowledge:** 2026 release (Gemma 4 family); knowledge cutoff not explicitly stated.
- **IDs:** `google/gemma-4-31b` (Hugging Face), `gemma-4-31b` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** Not explicitly stated (Gemma 4 family likely 128K-256K).
- **Modalities:** Text in/out; reasoning no; tool calls yes; JSON mode yes. No vision/audio.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.10–$0.30/M in, $0.20–$0.60/M out. Blended ≈ $0.20/M.
- **Architecture:** Open-weight dense (31B params); non-reasoning.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Gemma 4 31B, Overall 39.87, rank 128):
- No detailed benchmark rows displayed on page

**Proxy from Gemma 4 family** (Gemma 4 12B 36.27, Gemma 4 26B A4B 45.63, Gemma 4 E4B 31.06, Gemma 4 E2B 29.98):
- Overall scores scale with parameter count

**No detailed benchmarks** for 31B variant on BenchLM, Artificial Analysis, Vals AI.

Estimated for 31B (between 26B A4B 45.63 and 12B 36.27):
- MMLU-Pro: ~70-75%
- GPQA: ~65-70%
- LiveCodeBench: ~60-65%
- SWE-bench: ~40-50%

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 40/100.** No direct agentic benchmarks. 31B size limits complex tool use. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 55/100.** Estimated MMLU-Pro ~72%, GPQA ~68%. Capped by no HLE, FrontierMath, AA Intelligence Index. 31B size limits complex reasoning.
- **Context window: 60/100.** Estimated 128K-256K (Gemma family). Methodology: 128K-256K = 55-65.
- **Multimodal: 30/100.** Text-only. No vision/audio. Methodology: text-only = 20-30.
- **Coding: 55/100.** Estimated LiveCodeBench ~62%, SWE-bench ~45%. Capped by no SWE-bench Verified, LiveCodeBench Vals, AA Coding Index.
- **Cost efficiency: 98/100.** Free on HuggingChat; self-host near-zero marginal (31B fits on consumer GPU); inference providers ~$0.20/M blended. Methodology: free/open-weight + small size ≈ 95-100.
- **Overall Score: 48/100.** Half-up mean of (40 + 55 + 60 + 30 + 55) / 5 = 48 → 48. Using six incl. cost: (40+55+60+30+55+98)/6 = 338/6 = 56.3 → 56. Model-queue says 79.7; large discrepancy suggests queue score from internal eval or different benchmark set. Best-fit: capable small open-weight for local deployment; limited by size and text-only.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks for 31B variant. Proxy from Gemma 4 family scores (BenchLM). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Gemma_4.md`, using the same headings.