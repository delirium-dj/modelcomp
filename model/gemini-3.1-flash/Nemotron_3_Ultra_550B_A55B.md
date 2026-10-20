# Gemini 3.1 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.1-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash (Non-reasoning)
- **Short description:** Google's non-reasoning Flash model with 1M context, multimodal (text/image/speech/video), fast speed, competitive pricing. Queue Overall 80.8. BenchLM doesn't list this specific variant separately.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3.1-flash`), OpenCode Zen (`opencode/gemini-3.1-flash`). Free tier on Google AI Studio.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `gemini-3.1-flash` (Google AI Studio), `opencode/gemini-3.1-flash` (OpenCode Zen). Free tier on AI Studio.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image, speech, video in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Estimated ~$0.50/M in, $2.00/M out (similar to Gemini 3 Flash). Blended ~$0.40/M. Free tier on AI Studio.
- **Architecture:** Proprietary (Google); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks found** for "Gemini 3.1 Flash" on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows Gemini 3 Flash (54.31) and Gemini 3.5 Flash (61.91).

Proxy from Gemini 3 Flash (BenchLM, 54.31):
- LiveCodeBench (Vals): 85.6%
- SWE-bench (Vals): 75.0%
- AA GPQA Diamond: 81.2%
- AA MMMU-Pro: 78.6%
- AA LCR: 55.3%
- FrontierMath v2 Tiers 1-3: 51.2%
- Speed: 217 t/s

Proxy from Gemini 3.5 Flash (BenchLM, 61.91):
- Expected stronger across all benchmarks

Estimated 3.1 Flash: between 3 Flash and 3.5 Flash.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** Proxy from 3 Flash: limited agentic benchmarks. Capped by no direct TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 55/100.** Proxy from 3 Flash: GPQA Diamond 81.2%, MMLU-Pro 88.6%, FrontierMath Tiers 1-3 51.2%. Capped by AA Intelligence Index 18 (<60), AA HLE 15%, FrontierMath Tier 4 17%.
- **Context window: 90/100.** 1M native; AA LCR 55.3% (3 Flash). Methodology: ≥1M = 95-100 but LCR <80% pulls down.
- **Multimodal: 85/100.** Full multimodal: text/image/speech/video in; MMMU-Pro 78.6% (3 Flash). Native speech/video differentiator.
- **Coding: 72/100.** Proxy from 3 Flash: LiveCodeBench 85.6% (Vals), SWE-bench 75.0% (Vals). Capped by Vibe Code 20%.
- **Cost efficiency: 95/100.** Estimated ~$0.50/$2.00 per 1M, blended ~$0.40/M, free tier on AI Studio. Methodology: <$1/$3 ≈ 95-100.
- **Overall Score: 70.4/100.** Half-up mean of (50 + 55 + 90 + 85 + 72) / 5 = 70.4 → 70. Using six incl. cost: (50+55+90+85+72+95)/6 = 447/6 = 74.5 → 75. Model-queue says 80.8; discrepancy suggests queue weights multimodal/speed higher. Best-fit: fast multimodal non-reasoning Flash at low cost; reasoning/agentic limited.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research; proxy from Gemini 3 Flash and 3.5 Flash (BenchLM) due to missing direct benchmarks. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.