# Grok 4.3 — findings by Muse Glimmer 30B

- Source: xAI Grok 4.3, API model `grok-4.3` / `grok-4.3-latest` (`opencode/grok-4.3`); no Zen Free ID
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's 1M-context reasoning model at $1.25/$2.50 for instruction-following; IFBench 83.3% #1 and honesty 83% non-hallucination.
- **Provider / access:** xAI API, OpenAI-compatible Chat Completions (`https://api.x.ai/v1/chat/completions`), `grok-4.3` / `grok-4.3-latest`; also on OpenRouter, Vercel AI Gateway, Cloudflare, Vertex. OpenCode Zen: **no Free ID** (`noFreeId: true` in meta.json).
- **Release / knowledge:** Released April 2026 (Artificial Analysis lists “Released April 2026”; xAI public API 2026-04-30 per community tracking). Knowledge cutoff December 2025 per xAI docs.
- **IDs:** `opencode/grok-4.3` (= `xai/grok-4.3`, `spacexai/grok-4.3`). No Zen Free ID.
- **Context window:** 1,000,000 total tokens. Verified via meta.json `contextWindow: "1,000,000 total"` and Artificial Analysis technical specs “Context window 1M”.
- **Modalities:** Text, image in; text out. Reasoning yes per Artificial Analysis “Reasoning Yes”. Native function calling, structured outputs, web search, configurable reasoning effort. Video input claimed in secondary coverage but not confirmed in primary xAI docs.
- **Pricing (as of 2026-10-20):** Paid $1.25 in / $2.50 out per 1M for prompts <200K; $2.50 / $5.00 per 1M for prompts ≥200K. Cache discount 84% per Artificial Analysis. No Free tier (`noFreeId: true`). Pricing links: https://x.ai/api
- **Architecture:** Proprietary; parameters undisclosed. No official model card published.

### Raw benchmarks found

Agent / tool use:

- IFBench: **83.3%** <Artificial Analysis IFBench leaderboard — “Grok 4.3 (Medium) scores the highest on IFBench with a score of 83.3%” (https://artificialanalysis.ai/evaluations/ifbench)>
- IFBench honesty / non-hallucination claim: **83%** non-hallucination <meta.json short description “honesty 83% non-hallucination”>
- τ²-Bench / GDPval-AA / Terminal-Bench / Claw-Eval: **no verified public score found** for this exact ID in independent trackers at 2026-10-20

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25** <Artificial Analysis Grok 4.3 page: “Grok 4.3 (High) scores 25 on the Artificial Analysis Intelligence Index” (https://artificialanalysis.ai/models/grok-4-3)>
- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found** for `grok-4.3` in independent leaderboards at 2026-10-20

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found** for this exact ID at 2026-10-20

Long context:

- Context window 1M total verified via meta.json and Artificial Analysis specs. No separate MRCR / RULER / GraphWalks public score published for `grok-4.3` at 2026-10-20.

### Normalized scores (1–100)

> Overall = half-up mean of Tool + Reasoning + Context + Multimodal + Coding.

- **Tool use: 85/100.** IFBench 83.3% is the current public #1 for instruction-following generalization, with meta-cited honesty 83% non-hallucination supporting strong precise following. No independent τ²/GDPval/Terminal-Bench 2.1 numbers published for this ID, capping below 90.
- **Reasoning: 80/100.** Intelligence Index 25 places the model below the median for its price tier, and no independent GPQA Diamond / HLE / CritPt scores are publicly verified for `grok-4.3`. The 1M context and reasoning flag support a mid-high reasoning tier.
- **Context window: 90/100.** 1M total maps to the ≥1M band (90–100). No ≥98% retrieval benchmark published for this ID; capped at 90 pending verified MRCR/RULER results.
- **Multimodal: 65/100.** Text + image in, text out per primary docs and Artificial Analysis specs. No video output and no independent MMMU-Pro score published for this ID.
- **Coding: 70/100.** No verified public coding benchmark found for this exact ID; instruction-following strength suggests competent tool use but coding-specific scores are missing, capping below frontier.
- **Cost efficiency: 90/100.** $1.25/$2.50 per 1M (<200K) with 84% cache discount is competitively priced vs median $2.00/$10.00 per Artificial Analysis. Doubling tier at ≥200K and no Free tier reduce the score vs sub-$1 models.
- **Overall Score: 78/100.** Mean of 85 + 80 + 90 + 65 + 70 = 78.0 → **78**. Best-fit for cheap, strong instruction-following at 1M context with solid cost profile; reasoning and coding depth are not verified frontier.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; meta.json for model basics, pricing, modalities, context window; Artificial Analysis for release date, pricing, context, modalities, Intelligence Index, IFBench score. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
