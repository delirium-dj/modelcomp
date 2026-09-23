# GPT-5.4 — findings by Laguna S 2.1

> Source: opencode/gpt-5.4 (OpenAI), e.g. Artificial Analysis
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GPT-5.4 — here the **GPT-5.4 (xhigh) reasoning variant** (OpenAI). Proprietary flagship reasoning model, deprecated by Artificial Analysis in favor of GPT-5.5 (xhigh).
- Short description: OpenAI's March-2026 reasoning model with a 1.1M context window, text+image input, fast ~143 tok/s output, and strong at-launch intelligence; currently ranked above-average (AA Index 39/#51) but overtaken by GPT-5.5.
- Released: March 2026 (Artificial Analysis "Released March 2026"; TechCrunch March 2026).
- Architecture: Decoder-only, proprietary, closed weights (parameter count undisclosed) (Artificial Analysis).
- Context window: 1,100,000 tokens (AA FAQ "1.1M"; ≥1M tier). Max output: NOT FOUND precisely (likely 32K–64K).
- Modalities: text + image input → text output (multimodal; +image-in). No audio/video/PDF verified on this page.
- Knowledge cutoff: August 31, 2025 (Artificial Analysis).
- Reasoning: Yes — (xhigh) extended-thinking / chain-of-thought variant; a non-reasoning variant also exists (Artificial Analysis).
- Pricing: $2.50 / $15.00 per 1M in/out (OpenAI API); cache discount 90%; blended 7:2:1 ≈ $2.17/MTok. Cost per Intelligence Index task: NOT FOUND (Artificial Analysis lists it "Unknown"). Proprietary API only (no free Zen ID).
- Speed: 143.4 output tokens/second (#24/212, fast) (Artificial Analysis).

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **39** (#51/212; class median 25; "well above average among comparable models") (Artificial Analysis model page, 2026-09). [One AA FAQ spot marks it "(estimated)" but it is published as 39.]
- Intelligence Index v4.3.2 component evals (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR): NOT FOUND as standalone public figures for this model in fetched pages (Index 39 is their aggregate).
- Terminal-Bench 2.0/2.1/Hard/4.0 / SWE-bench Verified / Pro / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Toolathon / MCP-Atlas / Tau3-Banking / Tau3-general / GDPval-AA Elo / GPQA Diamond / HLE / AA-Omniscience / CritPt / LCR / AA-LCR / MMMU-Pro / MRCR / RULER: NOT FOUND for this model in fetched pages.
- Source note: OpenAI announcement (`openai.com/index/introducing-gpt-5-4`) returned HTTP 403; modelcap.ai page returned HTTP 404. The Artificial Analysis model page is the verified source.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Uses current AA v4.3.2 Index 39 (Claude Fable 5.1 = 26 → 67 here on the same scale; GPT-5.4's higher Index 39 lifts Tool/Reasoning/Coding accordingly).

- **Tool use: 62/100.** AA Intelligence Index v4.3.2 = 39 (#51/212, above median); Terminal-Bench 4.0 is an Index component. No standalone Terminal-Bench / SWE-bench % located.
- **Reasoning: 63/100.** Index 39; xhigh extended-thinking variant; no standalone GPQA / HLE / AA-Omniscience / CritPt ranks located.
- **Context window: 90/100.** 1,100,000 native tokens (≥1M tier); max-output NOT FOUND (likely 32K–64K) → small caution vs the 64K caveats; full-window accuracy unverified.
- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no audio/video/PDF verified).
- **Coding: 60/100.** Index 39 (Terminal-Bench 4.0 is an Index component); no standalone SWE-bench / DeepSWE / LiveCodeBench % located → floor capped.
- **Cost efficiency: 50/100.** $2.50/$15.00 per 1M (cheaper than Fable $10/$50 → cost 30; pricier than GPT-5.5 $5/$30 → cost 82); 90% cache discount.
- **Overall Score: 69/100.** (62 + 63 + 90 + 70 + 60) / 5 = 345 / 5 = 69.0 → 69.

> **Scale note / discrepancy:** The repo AI-Rankings average for this model is **80.7** (audit/model-comparison.md v4, 2026-09-17). My score (69) uses the **current AA Intelligence Index v4.3.2 = 39**, on the same Sept-2026 scale where Claude Fable 5.1 = 26 (→ 67). The repo's 80.7 reflects the at-launch / legacy rating from when GPT-5.4 was a March-2026 flagship; AA now marks GPT-5.4 **deprecated** in favor of GPT-5.5. Both figures preserved for reconciliation.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis GPT-5.4 (xhigh) model page; OpenAI announcement HTTP 403, modelcap.ai 404 — both blocked, AA used as verified source). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.