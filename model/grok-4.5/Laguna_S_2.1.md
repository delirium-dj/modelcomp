# Grok 4.5 — findings by Laguna S 2.1

> Source: opencode/grok-4.5 (SpaceXAI / xAI), e.g. Artificial Analysis, xAI docs
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Grok 4.5 — here the **Grok 4.5 (high) reasoning variant** (xAI / SpaceXAI). xAI's intelligent coding model for agentic software, engineering, and workflow tasks. Artificial Analysis marks it deprecated in favor of Grok 4.6.
- Short description: xAI's July-2026 reasoning model; 500K context, text+image in, fast tool use/structured outputs, AA Intelligence Index 39 (#52/212, "well above average"), reasonably priced ($2.00/$6.00).
- Released: July 2026 (Artificial Analysis "Released July 2026").
- Architecture: Proprietary, closed weights (parameter count undisclosed) (Artificial Analysis, xAI docs).
- Context window: 500,000 tokens (Artificial Analysis; xAI docs "500,000"). High-context tier (≥200K); xAI charges different rates for requests above 200K. Max output: NOT FOUND precisely (likely 32K–64K).
- Modalities: text + image input → text output (multimodal) (+image-in); no audio/video/PDF verified on these pages (xAI docs "Modalities: Text, Image Text").
- Knowledge cutoff: NOT FOUND on the AA model page or xAI docs page (not stated).
- Reasoning: Yes — extended-thinking variant; xAI lists reasoning efforts low/medium/high/xhigh (default high) (xAI docs).
- Pricing: $2.00 / $6.00 per 1M in/out (xAI / SpaceXAI API); cached input $0.30/1M; cache discount 85%; cost per Intelligence Index task $1.04 (#46/212, cheap) (Artificial Analysis). Higher-context (above 200K) requests billed at a different (higher) rate (xAI docs). Batch API: NOT supported (xAI docs). No free token tier (proprietary API; meta.json noFreeId).
- Speed: 55.1 output tokens/second (#125/212 — slower than average) (Artificial Analysis).
- Access/providers/regions: API provider xAI/SpaceXAI; regions us-east-1, us-west-2; aliases grok-4.5-latest (xAI docs).

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **39** (#52/212; class median 25; "well above average among comparable models") (Artificial Analysis, 2026-09).
- Intelligence Index v4.3.2 components (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR): NOT FOUND as standalone figures for this model in fetched pages (Index 39 is the published aggregate).
- Terminal-Bench 2.0/2.1/Hard/4.0 / SWE-bench Verified / Pro / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Toolathon / MCP-Atlas / Tau3-Banking / Tau3-general / GDPval-AA Elo / GPQA Diamond / HLE / AA-Omniscience (acc/halluc) / CritPt / LCR / AA-LCR / MMMU-Pro / MRCR / RULER: NOT FOUND for this model in fetched pages.
- Cost per Intelligence Index task: $1.04 (#46/212) (Artificial Analysis). Output verbosity: 77M tokens (fairly concise vs median 88M) (Artificial Analysis).
- Source note: AA model page (verified) + xAI official developer docs (verified).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Uses current AA v4.3.2 Index 39 (Claude Fable 5.1 = 26 → 67; GPT-5.4 Index 39 → 69 on the same Sept-2026 scale — Grok 4.5 here is ~GPT-5.4-equivalent on intelligence but with half the context).

- **Tool use: 62/100.** AA Intelligence Index v4.3.2 = 39 (#52/212, above median); Terminal-Bench 4.0 is an Index component. No standalone Terminal-Bench / SWE-bench % located.
- **Reasoning: 63/100.** Index 39; xhigh extended-thinking variant with configurable reasoning effort; no standalone GPQA / HLE / AA-Omniscience / CritPt located.
- **Context window: 80/100.** 500,000 native tokens (large, ≥200K high-context tier); max output NOT FOUND (likely 32K–64K) → small caution; no retrieval-at-512K figure. (GPT-5.4's 1.1M scores 90 on the same scale.)
- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no audio/video/PDF verified — xAI docs list "Text, Image Text").
- **Coding: 60/100.** Index 39 (Terminal-Bench 4.0 is an Index component); no standalone SWE-bench / DeepSWE / LiveCodeBench % located → floor capped.
- **Cost efficiency: 60/100.** $2.00/$6.00 per 1M (cheaper than Claude Fable 5.1 $10/$50 → cost 30; pricer than GPT-5.5 $5/$30 → cost 82) + $0.23–$1.04/task + 85% cache.
- **Overall Score: 67/100.** (62 + 63 + 80 + 70 + 60) / 5 = 335 / 5 = 67.0 → 67.

> **Scale note / discrepancy:** The repo AI-Rankings average for this model is **80.2** (audit/model-comparison.md v4, 2026-09-17). My score (67) uses the **current AA Intelligence Index v4.3.2 = 39**, on the same Sept-2026 scale where Claude Fable 5.1 = 26 (→ 67) and GPT-5.4 = 39 (→ 69). The repo's 80.2 reflects the at-launch / legacy rating from when Grok 4.5 was a July-2026 flagship; AA now marks it deprecated in favor of Grok 4.6. Both figures preserved for reconciliation.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis Grok 4.5 (high) model page; xAI official developer docs "Grok 4.5"). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.