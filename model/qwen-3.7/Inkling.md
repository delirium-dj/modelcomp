# Qwen 3.7 — findings by Inkling

- Source: Qwen / qwen-3.7
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Qwen 3.7 family base/reasoning model; dataset Overall 82.6 (fallback from 1 below-gate source); independent verification partial.
- **Provider / access:** Qwen / Alibaba (`qwen-3.7`).
- **Release / knowledge:** Qwen 3.7 family (late 2025 / early 2026); exact specs not fully independently verified in quick search.
- **IDs:** `qwen/qwen-3.7`.
- **Context window:** Large; dataset peers 90.3 (fallback); likely 1M class per family.
- **Modalities:** Text + image/video likely; dataset multimodal 69.4 suggests moderate multimodal coverage; audio not verified.
- **Pricing:** Competitive; dataset cost 82.5.
- **Architecture:** Large open/proprietary; exact params not independently verified.

### Raw benchmarks found

3 searches performed:
1. **Official Qwen site / docs:** brief reference; no full independent benchmark table fetched.
2. **Dataset peers (`average.md`):** fallback from 1 below-gate source (GLM 4.7 Flash) — Tool 83.4, Reasoning 86.2, Context 90.3, Multimodal 69.4, Coding 84.2, Cost 82.5, Overall 82.6. Note: this is a fallback average (no raters above gate), so dataset scores are less reliable.
3. **Cross-check:** no independent conflicting benchmark found; no Artificial Analysis / BenchLM independent entry fetched.

Scores provisional; independent benchmark verification (official Qwen benchmark table, AA entry) strongly recommended.

Agent / tool use: dataset 83.4 (fallback).
Coding: dataset 84.2 (fallback).
Reasoning: dataset 86.2 (fallback).
Multimodal: dataset 69.4 (fallback — lower than other Qwen variants).
Context: dataset 90.3 (fallback).

### Normalized scores (1–100) — provisional (fallback dataset)

- **Tool use: 82/100.** Provisional (83.4 fallback).
- **Reasoning: 85/100.** Provisional (86.2 fallback).
- **Context window: 90/100.** Provisional (90.3; large family context likely 1M).
- **Multimodal: 69/100.** Provisional (69.4 — moderate; lower than family peers).
- **Coding: 83/100.** Provisional (84.2 fallback).
- **Cost efficiency: 80/100.** Provisional (82.5 fallback).
- **Overall Score: 82/100.** Dataset 82.6; rounded to 82. Note: fallback from single below-gate rater — reliability lower; independent verification needed.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-25
- Method: Independent search partial; dataset peers used as provisional evidence; note this is a **fallback average** (only 1 below-gate rater), making scores less reliable. Independent verification strongly recommended.
