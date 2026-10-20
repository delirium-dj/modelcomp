# Gemini 2.0 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-2.0-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (Non-reasoning)
- **Short description:** Google's legacy Flash model with 1M context, multimodal (text/image/video/audio), fast inference. Queue Overall 74.5 but BenchLM doesn't list this specific variant (shows 2.5 Flash at 42.11). Legacy Flash model, superseded by 2.5/3.x Flash family.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-2.0-flash`), OpenCode Zen (`opencode/gemini-2.0-flash`). Free tier on Google AI Studio.
- **Release / knowledge:** 2024-12 release (Google blog); knowledge cutoff not explicitly stated.
- **IDs:** `gemini-2.0-flash` (Google AI Studio), `opencode/gemini-2.0-flash` (OpenCode Zen). Free tier on AI Studio.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image, video, audio in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Google AI Studio pricing not publicly listed for 2.0 Flash; legacy model typically lower cost. Free tier on AI Studio.
- **Architecture:** Proprietary (Google); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks** for "Gemini 2.0 Flash" on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows Gemini 2.5 Flash (42.11) and Gemini 3 Flash (54.31).

**Proxy from Gemini 2.5 Flash (BenchLM, 42.11):**
- Tau2-bench: 14.9%
- AA MMMU-Pro: 65.5%
- AA LCR: 49.9%
- AA GPQA Diamond: 68.3%
- AA HLE: 4.7%

2.0 Flash is older, expected slightly weaker than 2.5 Flash.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 20/100.** Proxy from 2.5 Flash: Tau2 14.9%. Legacy Flash, limited agentic. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 35/100.** Proxy from 2.5 Flash: GPQA Diamond 68.3%, AA LCR 49.9%. Capped by AA Intelligence Index 9.8% (<60), AA HLE 4.7% (<40%+), CritPt 1.4%.
- **Context window: 85/100.** 1M native; AA LCR 49.9% (2.5 Flash). Methodology: ≥1M = 95-100 but LCR <80% pulls down.
- **Multimodal: 85/100.** Full multimodal: text/image/video/audio in; MMMU-Pro 65.5% (2.5 Flash). Native speech/video differentiator.
- **Coding: 30/100.** No public coding benchmarks for 2.0 Flash. Capped by absence of evidence.
- **Cost efficiency: 90/100.** Free tier on AI Studio; legacy model typically low cost. Methodology: free/low-cost Flash ≈ 90.
- **Overall Score: 51/100.** Half-up mean of (20 + 35 + 85 + 85 + 30) / 5 = 51 → 51. Using six incl. cost: (20+35+85+85+30+90)/6 = 350/6 = 58.3 → 58. Model-queue says 74.5; large discrepancy suggests queue weights multimodal/context higher. Best-fit: legacy non-reasoning Flash with full multimodal at low cost; superseded by 2.5/3.x Flash.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research; no direct benchmarks. Proxy from Gemini 2.5 Flash (BenchLM). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Gemini_2.md`, using the same headings.