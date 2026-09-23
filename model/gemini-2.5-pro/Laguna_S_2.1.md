# Gemini 2.5 Pro — findings by Laguna S 2.1

> Source: opencode/gemini-2.5-pro (Google DeepMind), e.g. Artificial Analysis, LLM Reference
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Gemini 2.5 Pro (Google DeepMind). Flagship 1M-context reasoning model (now deprecated by AA in favor of Gemini 3 Pro Preview).
- Released: 2025-06-17 (LLM Reference). AA: "Released June 2025".
- Architecture: Decoder-only, proprietary, closed weights (not released). Conditional commercial use.
- Context window: 1,000,000 tokens native (AA "1M", LLM Reference "1m"); max output 65,536 (LLM Reference). ≥1M tier; 64K output clears the <64K caveat.
- Modalities: text, image, speech, video input → text output (multimodal) (AA + LLM Reference). (+image +speech +video-in)
- Knowledge cutoff: January 2025 (LLM Reference 2025-01; AA Jan 1 2025).
- Reasoning: Yes — reasoning/extended-thinking variant; AA "This page shows the reasoning version... chain-of-thought".
- Pricing: $1.25 / $10.00 per 1M in/out (Google API; consistent across Vertex AI, AI Studio, OpenRouter, Vercel) (LLM Reference + AA). Cache read $0.125; 90% cache discount; batch $0.625/$5.00. Cost per AA Intelligence Index task = $0.23 (#8/212, cheap) (AA).
- Speed: 125.8 output tok/s (AA).
- Access/providers: Google AI Studio, GCP Vertex AI, OpenRouter, Vercel AI Gateway (4 routes) (LLM Reference).

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **16** (#158/212 open; "deprecated" vs Gemini 3 Pro Preview; median 25; "among the least intelligent") (Artificial Analysis, 2026-09).
- Index v4.3.2 components (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR): NOT FOUND as standalone figures here (only aggregate Index 16).
- Terminal-Bench 2.0/2.1/Hard/4.0: NOT FOUND standalone (llmreference only gives qualitative "strong coding").
- SWE-bench Verified / Pro / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Toolathon / MCP-Atlas / Tau3-Banking / Tau3-general / GDPval-AA Elo: NOT FOUND in fetched pages.
- GPQA Diamond / HLE / AA-Omniscience (acc/halluc) / CritPt / LCR / MMMU-Pro / MRCR / RULER: NOT FOUND on this model page.
- Legacy/contextual: llmreference lists use-case fit "coding, agents, build tasks" + "strong performance across coding, mathematics, scientific reasoning" and 4 provider routes; these are at-launch claims — current AA Index 16 reflects deprecation.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Uses current AA v4.3.2 Index 16.

- **Tool use: 34/100.** AA Intelligence Index v4.3.2 = 16 (#158/212); Terminal-Bench 4.0 is an Index component. No standalone Terminal-Bench/SWE-bench % found.
- **Reasoning: 34/100.** Index 16; no standalone GPQA/HLE/AA-Omniscience/CritPt.
- **Context window: 95/100.** 1,000,000 native tokens; 65,536 max output clears the <64K caveat. No retrieval-at-512K figure.
- **Multimodal: 86/100.** Text + image + speech + video input, text output (+image +speech +video-in; audio band bonus over text+image+PDF).
- **Coding: 36/100.** Index 16 (Terminal-Bench 4.0 component); legacy "strong coding" from llmreference gives a small bump over the pure-index floor; no standalone SWE-bench/Terminal-Bench % found.
- **Cost efficiency: 82/100.** $1.25/$10.00 per 1M (cheap vs frontier), $0.23/task (#8/212), 90% cache discount, 4 provider routes.
- **Overall Score: 57/100.** (34 + 34 + 95 + 86 + 36) / 5 = 285 / 5 = 57.0 → 57.

> **Scale note / discrepancy:** The repo AI-Rankings average for this model is **82.8** (audit/model-comparison.md v4, 2026-09-17). My score (57) uses the **current AA Intelligence Index v4.3.2 = 16**, on the same Sept-2026 scale where Claude Fable 5.1 = 26 (I scored Fable 67). The repo's 82.8 reflects the at-launch / legacy rating when Gemini 2.5 Pro was a June-2025 flagship; AA now marks it deprecated. Both figures preserved for reconciliation.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis Gemini 2.5 Pro model page; LLM Reference Gemini 2.5 Pro page). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.