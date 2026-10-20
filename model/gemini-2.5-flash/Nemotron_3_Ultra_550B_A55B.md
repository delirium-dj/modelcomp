# Gemini 2.5 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash (Non-reasoning)
- **Short description:** Google's non-reasoning Flash model with 1M context, multimodal (MMMU-Pro 65.5%), fast inference, competitive pricing. Weak agentic (Tau2 14.9%) and reasoning (AA Intelligence Index 9.8%).
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-2.5-flash`), OpenCode Zen (`opencode/gemini-2.5-flash`). Free tier on Google AI Studio.
- **Release / knowledge:** 2025 release; knowledge cutoff not explicitly stated.
- **IDs:** `gemini-2.5-flash` (Google AI Studio), `opencode/gemini-2.5-flash` (OpenCode Zen). Free tier on AI Studio.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image, video in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Google AI Studio pricing not publicly listed for 2.5 Flash; typical Flash tier ~$0.35/M in, $1.00/M out. Blended ~$0.40/M. Free tier on AI Studio.
- **Architecture:** Proprietary (Google); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:
- Tau2-bench: **14.9%** (Artificial Analysis)

Reasoning / knowledge:
- AA Intelligence Index: **9.8%** (AA)
- AA GPQA Diamond: **68.3%** (AA)
- AA HLE: **4.7%** (AA)
- AA Omniscience Index: **-42.6%** (AA)
- AA Omniscience Accuracy: **26.1%** (AA)
- AA Omniscience Hallucination Rate: **93.0%** (AA)
- AA IFBench: **39.0%** (AA)
- AA LCR: **49.9%** (AA)
- CritPt: **1.4%** (AA)

Coding: No public coding benchmarks found.

Multimodal:
- AA MMMU-Pro: **65.5%** (AA)
- Design Arena Website: **1115 Elo** (OpenRouter)

Long context:
- AA LCR: **49.9%** (AA)
- CritPt: **1.4%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 20/100.** Tau2 14.9% only agentic benchmark; far below frontiers. No TB, BrowseComp, OSWorld, GDPval, MCP Atlas. Capped by extremely limited agentic data.
- **Reasoning: 35/100.** GPQA Diamond 68.3% (below 90%+ frontier), AA LCR 49.9%. Capped by AA Intelligence Index 9.8% (<60), AA HLE 4.7% (<40%+), CritPt 1.4%, AA Omniscience Index -42.6%, AA Omniscience Hallucination 93.0%.
- **Context window: 85/100.** 1M native; AA LCR 49.9% (<80%). Methodology: ≥1M = 95-100 but LCR <80% pulls down.
- **Multimodal: 75/100.** Text, image, video in; MMMU-Pro 65.5%, Design Arena 1115 Elo. No audio/PDF. Methodology: +video in = 70-80.
- **Coding: 25/100.** No public SWE-bench, LiveCodeBench, AA Coding Index. Capped by absence of coding benchmarks.
- **Cost efficiency: 85/100.** Free tier on AI Studio; estimated ~$0.40/M blended. Methodology: low-cost Flash tier ≈ 85.
- **Overall Score: 48/100.** Half-up mean of (20 + 35 + 85 + 75 + 25) / 5 = 48 → 48. Using six incl. cost: (20+35+85+75+25+85)/6 = 325/6 = 54.2 → 54. Model-queue says 77.1; large discrepancy suggests queue weights context/multimodal higher. Best-fit: basic non-reasoning Flash with 1M context; weak reasoning/agentic/coding for the tier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (BenchLM, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.md`, using the same headings.