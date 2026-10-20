# Gemini 2.5 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro (Non-reasoning)
- **Short description:** Google's Pro-tier non-reasoning model with 1M context, strong multimodal (MMMU-Pro 74.9%), moderate coding (SWE-bench Verified 63.8%), weak agentic (GDPval 0%, AA Agentic Index 3.5%), at competitive pricing.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-2.5-pro`), OpenCode Zen (`opencode/gemini-2.5-pro`). Free tier on Google AI Studio.
- **Release / knowledge:** 2025-03 release (Google blog); knowledge cutoff not explicitly stated.
- **IDs:** `gemini-2.5-pro` (Google AI Studio), `opencode/gemini-2.5-pro` (OpenCode Zen). Free tier on AI Studio.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image, video in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Google AI Studio pricing not publicly listed for 2.5 Pro specifically; typical Pro tier ~$1.25/M in, $5.00/M out. Blended ~$1.00/M. Free tier on AI Studio.
- **Architecture:** Proprietary (Google); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2-bench: **54.1%** (Artificial Analysis)
- Gert Labs: **42.01%** (Gert Labs)
- GDPval-AA normalized: **0.0%** (AA) / Elo **616** (AA)
- AA Agentic Index: **3.5%** (AA)
- GDPval-AA Elo: **616** (AA)

Reasoning / knowledge:

- AA LCR: **69.0%** (AA)
- CritPt: **2.6%** (AA)
- GPQA: **83%** (Google DeepMind)
- HLE: **18.8%** (Google blog)
- AA Intelligence Index: **16.1%** (AA)
- AA GPQA Diamond: **84.4%** (AA)
- AA HLE: **22.5%** (AA)
- AA Omniscience Index: **-16.3%** (AA)
- AA Omniscience Accuracy: **39.1%** (AA)
- AA Omniscience Hallucination Rate: **90.9%** (AA)
- AA IFBench: **48.7%** (AA)
- AIME 2024: **92%** (Phi-4 comparison)
- FrontierMath v2 Tiers 1-3: **24.561%** (Epoch AI)
- FrontierMath v2 Tier 4: **0.000%** (Epoch AI)

Coding:

- SWE-bench Verified: **63.8%** (Google blog)
- Vibe Code Bench: **0.40%** (Vals AI)
- AA SciCode: **46.3%** (AA)
- AA Coding Index: **33.3%** (AA)
- SWE-bench (Vals): **54.4%** (Vals AI leaderboard)

Multimodal:

- AA MMMU-Pro: **74.9%** (AA)
- Design Arena Website: **1167 Elo** (OpenRouter)

Long context:

- AA LCR: **69.0%** (AA)
- CritPt: **2.6%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 30/100.** Tau2 54.1% only agentic benchmark. GDPval 0% (Elo 616, far below 1750+), AA Agentic Index 3.5%. Capped by no TB, BrowseComp, OSWorld, MCP Atlas.
- **Reasoning: 45/100.** GPQA 83%, AA LCR 69.0%, AA GPQA Diamond 84.4%. Capped by HLE 18.8% (<40%+), FrontierMath Tiers 1-3 24.6%, Tier 4 0%, AA Intelligence Index 16.1% (<60), CritPt 2.6%, AA Omniscience Index -16.3%, AA Omniscience Hallucination 90.9%.
- **Context window: 90/100.** 1M native; AA LCR 69.0%. Methodology: ≥1M = 95-100 but LCR <80% pulls down.
- **Multimodal: 80/100.** Text, image, video in; MMMU-Pro 74.9%, Design Arena 1167 Elo. No audio, PDF noted.
- **Coding: 55/100.** SWE-bench Verified 63.8% (below 80%+ frontier), SWE-bench 54.4% (Vals), AA Coding Index 33.3% (<70%+), AA SciCode 46.3% (<55%+). Capped by Vibe Code 0.4%.
- **Cost efficiency: 85/100.** Free tier on AI Studio; competitive Pro pricing estimated ~$1.25/$5. Blended ~$1.00/M. Methodology: ~$1/$5 ≈ 85.
- **Overall Score: 60/100.** Half-up mean of (30 + 45 + 90 + 80 + 55) / 5 = 60 → 60. Using six incl. cost: (30+45+90+80+55+85)/6 = 385/6 = 64.2 → 64. Model-queue says 84.7; large discrepancy suggests queue weights multimodal/context higher. Best-fit: solid Pro-tier non-reasoning with strong multimodal (MMMU-Pro 74.9%) and 1M context at low cost; weak agentic/reasoning/coding for Pro tier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Google DeepMind blog), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Epoch AI, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.md`, using the same headings.