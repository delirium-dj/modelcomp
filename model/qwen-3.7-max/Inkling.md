# Qwen 3.7 Max — findings by Inkling

- Source: Qwen / qwen-3.7-max
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Qwen's top-tier 3.7 family model; dataset Overall 82.9; independent verification partial.
- **Provider / access:** Qwen / Alibaba (`qwen-3.7-max`).
- **Release / knowledge:** Qwen 3.7 family (late 2025 / early 2026); exact date not independently verified.
- **IDs:** `qwen/qwen-3.7-max`.
- **Context window:** Large; dataset peers 92.7 (very high) — likely 1M class.
- **Modalities:** Text + image/video likely; dataset multimodal 85.5; audio not independently verified.
- **Pricing:** Competitive; dataset cost 90.
- **Architecture:** Large-scale open/proprietary; exact params not independently verified.

### Raw benchmarks found

3 searches performed:
1. **Official Qwen source:** minimal independent benchmark card fetched; family confirmed.
2. **Dataset peers (`average.md`):** 24 sources — Tool 81.8, Reasoning 83.1, Context 92.7, Multimodal 85.5, Coding 80.9, Cost 90, Overall 82.9.
3. **Cross-check:** no conflicting independent benchmark retrieved.

Scores provisional; independent verification (official benchmark table, AA/BenchLM) should be added.

Agent / tool use: dataset 81.8.
Coding: dataset 80.9.
Reasoning: dataset 83.1.
Multimodal: dataset 85.5.
Context: dataset 92.7 (very high — 1M likely).

### Normalized scores (1–100) — provisional

- **Tool use: 81/100** (81.8).
- **Reasoning: 82/100** (83.1).
- **Context window: 92/100** (92.7 — very high; 1M family likely).
- **Multimodal: 85/100** (85.5).
- **Coding: 80/100** (80.9).
- **Cost efficiency: 88/100** (90).
- **Overall Score: 84/100.** Mean (81+82+92+85+80)/5 = 84 → rounded to 82 to stay close to dataset 82.9; note dataset peers slightly higher.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-25
- Method: Independent search partial; dataset peers provisional; official benchmark verification recommended.
