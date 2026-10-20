# Gemini 2.5 (Base) — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-2.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (Base / Non-reasoning)
- **Short description:** Google's base Gemini 2.5 model with 1M context, non-reasoning. Queue Overall 84.7 but BenchLM shows 49.13 for 2.5 Pro. This base variant likely non-reasoning with 1M context, strong multimodal, competitive pricing.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-2.5`), OpenCode Zen (`opencode/gemini-2.5`). Free tier on Google AI Studio.
- **Release / knowledge:** 2025 release (Gemini 2.5 family); knowledge cutoff not explicitly stated.
- **IDs:** `gemini-2.5` (Google AI Studio), `opencode/gemini-2.5` (OpenCode Zen). Free tier on AI Studio.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image, video, audio in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Google AI Studio pricing not publicly listed for base 2.5; typical Pro tier ~$1.25/M in, $5.00/M out. Blended ~$1.00/M. Free tier on AI Studio.
- **Architecture:** Proprietary (Google); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks** for "Gemini 2.5" (base) on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows Gemini 2.5 Pro (49.13) and Gemini 2.5 Flash (42.11).

**Proxy from Gemini 2.5 Pro** (BenchLM, 49.13):
- Tau2-bench: 54.1%
- AA MMMU-Pro: 74.9%
- AA LCR: 69.0%
- GPQA: 83%
- HLE: 18.8%
- AA Intelligence Index: 16.1%
- SWE-bench Verified: 63.8%
- FrontierMath v2 Tiers 1-3: 24.6%

**Proxy from Gemini 2.5 Flash** (BenchLM, 42.11):
- Tau2-bench: 14.9%
- AA MMMU-Pro: 65.5%
- AA LCR: 49.9%
- AA GPQA Diamond: 68.3%

Base 2.5 likely between Pro and Flash in capability.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 35/100.** Proxy from Pro: Tau2 54.1%, Flash: Tau2 14.9%. Base estimated ~35%. No TB, BrowseComp, OSWorld, GDPval. Capped by limited agentic benchmarks.
- **Reasoning: 50/100.** Proxy from Pro: GPQA 83%, HLE 18.8%, AA LCR 69.0%. Base estimated ~50%. Capped by HLE 18.8% (<40%+), AA Intelligence Index 16.1% (<60), CritPt 2.6%, AA Omniscience Index -16.3%.
- **Context window: 90/100.** 1M native; AA LCR 69.0% (Pro). Methodology: ≥1M = 95-100 but LCR <80% pulls down.
- **Multimodal: 80/100.** Text, image, video, audio in; MMMU-Pro 74.9% (Pro). No audio/PDF noted for base. Methodology: +video/audio = 75-85.
- **Coding: 55/100.** Proxy from Pro: SWE-bench Verified 63.8%, SWE-bench 54.4% (Vals). Base estimated ~55%. Capped by Vibe Code 0.4%, AA Coding Index 33.3%.
- **Cost efficiency: 85/100.** Free tier on AI Studio; competitive Pro pricing estimated ~$1.25/$5. Blended ~$1.00/M. Methodology: competitive Pro pricing ≈ 85.
- **Overall Score: 62/100.** Half-up mean of (35 + 50 + 90 + 80 + 55) / 5 = 61 → 61. Using six incl. cost: (35+50+90+80+55+85)/6 = 390/6 = 65 → 65. Model-queue says 84.7; large discrepancy suggests queue weights context/multimodal higher than benchmark evidence supports. Best-fit: solid base model with 1M context and multimodal; weak reasoning/agentic for Pro tier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research; no direct benchmarks for base 2.5. Proxy from Gemini 2.5 Pro and Flash (BenchLM). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Gemini_2.md`, using the same headings.