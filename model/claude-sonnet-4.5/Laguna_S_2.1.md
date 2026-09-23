# Claude 4.5 Sonnet — findings by Laguna S 2.1

> Source: anthropic/claude-sonnet-4.5 (Anthropic), e.g. Artificial Analysis, Anthropic Pricing docs
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 4.5 Sonnet — reasoning build (Anthropic). Mid-2025 generation reasoning/light agentic model; Artificial Analysis marks it deprecated in favor of Claude Sonnet 4.6 (max).
- **Short description:** Anthropic's balanced September-2025 reasoning model with a 1M context window, text+image input, extended thinking, and strong cost efficiency on cached/agentic loops — now superseded by Sonnet 4.6.
- **Provider / access:** Anthropic API (`claude-sonnet-4-5` / `claude-sonnet-4-5-thinking`); also Bedrock, Google Cloud, Microsoft Foundry. New-API-key free credits only for testing (no perpetual free tier; noFreeId).
- **Release:** September 2025 (Artificial Analysis "Released September 2025").
- **IDs:** `anthropic/claude-sonnet-4.5` (paid API).
- **Context window:** 1,000,000 tokens (Artificial Analysis "1M"). Max output tokens: **NOT FOUND** (Anthropic docs do not state; Sonnet-class typical ~8K–200K — flagged). ≥1M tier.
- **Modalities:** text + image input → text output (+image-in only; no audio/video/PDF on this page).
- **Reasoning / tools:** Yes — extended thinking (this page is the thinking variant); tool calling + JSON/structured outputs via the API.
- **Knowledge cutoff:** July 1, 2025 (Artificial Analysis).
- **Pricing (as of 2026-09-23, Anthropic official):** $3.00 / $15.00 per 1M in/out; cache hits $0.30/MTok (90% discount), cache writes $3.75 (5m) / $6.00 (1h) per 1M; Batch API 50% off standard rates. No per-token free tier (Anthropic: "New users receive a small amount of free credits to test the API").

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

- Artificial Analysis Intelligence Index v4.3.2: **21** (#139/212; below the class median of 25; "below average among comparable models") — model flagged deprecated vs Claude Sonnet 4.6 (max) (Artificial Analysis, September-2025 era page, Sept 2026 view).
- Speed: **44.8 tokens/second** (#148/212, "notably slow" — below the 71 median).
- Cost-per-Intelligence-Index task: **$0.56** (#26/212, "2 out of 4 units for Cost").
- Intelligence Index v4.3.2 components (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR): **NOT FOUND** as standalone public figures on this page (Index 21 is the only published aggregate).
- Terminal-Bench 2.0/2.1/Hard/4.0 / SWE-bench Verified / Pro / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Tau3-Banking / Tau3-general / GDPval-AA Elo / GPQA Diamond / HLE / AA-Omniscience / CritPt / LCR / AA-LCR / MMMU-Pro / Toolathon / MCP-Atlas / MRCR / RULER: **NOT FOUND** on the AA page or Anthropic docs.
- Note: the Claude Fable 5.1 page (also Anthropic) had no component %s either, so this is a source-coverage gap, not an attempt to cherry-pick.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Uses current AA Intelligence Index v4.3.2 = 21 (Claude Fable 5.1 = 26 → 67 in this batch; 4.5's lower Index 21 justifies a still lower score).

- **Tool use: 54/100.** AA Intelligence Index 21 (#139/212, below median); Terminal-Bench 4.0 is an Index component. No standalone Terminal-Bench / GDPval-AA / SWE-bench % found.
- **Reasoning: 56/100.** Index 21 + extended-thinking variant + July 2025 knowledge; no standalone GPQA / HLE / AA-Omniscience / CritPt figures found.
- **Context window: 90/100.** 1,000,000 native window (≥1M tier) clears the context floor; max-output NOT published (flagged) so it sits below the fully-verified 95 tier, and no retrieval-acuity figure (no MRCR/RULER).
- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no video/audio/PDF verified) — mid-band for image-in families.
- **Coding: 55/100.** Index 21 (Terminal-Bench 4.0 is an Index component); no standalone SWE-bench / DeepSWE / LiveCodeBench % located → floors the coding score.
- **Cost efficiency: 40/100.** $3.00/$15.00 per 1M is expensive vs frontier peers ($1–$4 input / $5–$20 output); $0.56/task is cheap-ish but the per-token band is the driver → mid-low cost band (Fable $10/$50 = cost 30; GPT-5.5 $2/$10 = cost 55; 4.5 $3/$15 sits below those).
- **Overall Score: 65/100.** (54 + 56 + 90 + 70 + 55) / 5 = 325 / 5 = 65.0 → 65. Deprecated September-2025 reasoning model whose current AA Intelligence Index (21/#139) places it below the class median.

> **Scale note / discrepancy:** The repo AI-Rankings average for this model is **77.0** (audit/model-comparison.md v4, 2026-09-17). My score (65) uses the **current AA Intelligence Index v4.3.2 = 21** (#139/212), consistent with this batch's current-Index interpretation (Claude Fable → 67, GPT-5.4 → 69, Grok 4.5 → 69, GPT-6 Sol → 71, Kimi K2.8 → 66). The repo's 77.0 reflects the higher legacy/at-launch rating when Claude 4.5 Sonnet was current (September 2025); AA now marks it deprecated. Both figures preserved for reconciliation.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis Claude 4.5 Sonnet (Reasoning) model page; Anthropic Pricing docs). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.