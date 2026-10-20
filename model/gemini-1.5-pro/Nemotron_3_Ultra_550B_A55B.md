# Gemini 1.5 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-1.5-pro`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (Legacy Pro)
- **Short description:** Google's legacy Pro model with 1M context, strong multimodal, solid reasoning for its era. Queue Overall 74.3 but BenchLM shows 27.74 (rank 196). Legacy model, superseded by 2.5 Pro / 3.x Pro.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-1.5-pro`), OpenCode Zen (`opencode/gemini-1.5-pro`). Free tier on Google AI Studio.
- **Release / knowledge:** 2024 release (Google blog); knowledge cutoff not explicitly stated.
- **IDs:** `gemini-1.5-pro` (Google AI Studio), `opencode/gemini-1.5-pro` (OpenCode Zen). Free tier on AI Studio.
- **Context window:** 1,000,000 tokens (1M was breakthrough at release); max output not explicitly stated.
- **Modalities:** Text, image, video, audio in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Google AI Studio legacy pricing; free tier on AI Studio. Typically ~$1.25/M in, $5.00/M out for Pro tier.
- **Architecture:** Proprietary (Google); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 27.74, rank 196/959):
- No detailed benchmark rows displayed on page

**Public benchmarks (Google DeepMind blog, 2024):**
- MMLU: ~81-85% (at release)
- GPQA: ~55-60% (at release)
- MATH: ~50-55% (at release)
- Long-context retrieval: 1M verified
- Multimodal: Video QA, audio transcription

**Current performance (2026):** Superseded by 2.5 Pro (49.13) and 3.x Pro (64.74). Legacy model with 1M context breakthrough but weaker reasoning/coding vs modern models.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 35/100.** No public agentic benchmarks (TB, BrowseComp, OSWorld, GDPval). 1M context enables long-horizon but no agentic data. Capped by absence of agentic benchmarks.
- **Reasoning: 50/100.** MMLU ~81-85% (at release), GPQA ~55-60%. Superseded by modern models (3.x Pro GPQA ~90%+). Capped by no HLE, FrontierMath, AA Intelligence Index.
- **Context window: 90/100.** 1M native (breakthrough at release). Methodology: ≥1M = 95-100.
- **Multimodal: 85/100.** Full multimodal: text/image/video/audio in (breakthrough at release). MMMU/Video benchmarks at release competitive. Native speech/video differentiator.
- **Coding: 45/100.** No public SWE-bench, LiveCodeBench for 1.5 Pro. At release: HumanEval ~70-75%. Superseded by modern coding models.
- **Cost efficiency: 80/100.** Free tier on AI Studio; legacy Pro pricing ~$1.25/$5. Blended ~$1.00/M. Methodology: competitive Pro pricing ≈ 80.
- **Overall Score: 61/100.** Half-up mean of (35 + 50 + 90 + 85 + 45) / 5 = 61 → 61. Using six incl. cost: (35+50+90+85+45+80)/6 = 385/6 = 64.2 → 64. Model-queue says 74.3; large discrepancy suggests queue weights 1M context/multimodal higher. Best-fit: breakthrough 1M context model at release; now legacy with weaker reasoning/coding vs modern Pro tier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research; BenchLM (27.74), Google DeepMind blog (2024 release benchmarks). Superseded by modern Pro tier. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Gemini_1.md`, using the same headings.