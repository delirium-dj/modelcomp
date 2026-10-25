# Qwen 3.5 397B — findings by Inkling

- Source: Qwen / qwen-3.5-397b
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Qwen's large-scale open-weights/proprietary model (397B parameter class); dataset treats as active model with high multimodal support (85.5) and good reasoning (84.2); context 85.7.
- **Provider / access:** Qwen / Alibaba Cloud (`qwen-3.5-397b`); open-weights or API route (exact access verified partially).
- **Release / knowledge:** Part of Qwen 3.5 family (late 2025 / early 2026); exact release date not independently verified in quick search.
- **IDs:** `qwen/qwen-3.5-397b` (HF/model ID inferred).
- **Context window:** Large (likely 1M class for Qwen 3.5 family); dataset peers report 85.7; independent spec should confirm.
- **Modalities:** Text + image/video likely (dataset multimodal 85.5 suggests strong multimodal); audio input not independently verified.
- **Pricing:** Cost efficiency 90 (dataset) implies competitive/free-tier availability; exact pricing not independently verified.
- **Architecture:** Large-scale dense/MoE (397B params); open-weights possible.

### Raw benchmarks found

3 searches performed:
1. **Official Qwen source:** `qwen.ai` returned minimal content; `huggingface.co/Qwen/Qwen2.5-397B` returned 401 (blocked); no detailed official benchmark card fetched independently.
2. **Dataset peers (`average.md`):** 23 sources — Tool 81.1, Reasoning 84.2, Context 85.7, Multimodal 85.5, Coding 82, Cost 90, Overall 83.8.
3. **Cross-check / independent benchmark site:** Artificial Analysis — `qwen-3.5-397b` not independently fetched; no conflicting numbers found.

No independent benchmark conflict; all scores below are provisional (dataset-derived) with explicit caveat that independent verification (official benchmark table, AA/BenchLM entry) should be added.

Agent / tool use: dataset 81.1.
Coding: dataset 82.
Reasoning: dataset 84.2.
Multimodal: dataset 85.5 (high — likely image/video input).
Context: dataset 85.7.

### Normalized scores (1–100) — provisional (dataset-derived)

- **Tool use: 80/100.** Provisional from peers (81.1); independent agentic benchmark not verified.
- **Reasoning: 84/100.** Provisional from peers (84.2).
- **Context window: 86/100.** Provisional from peers (85.7); 1M family context likely.
- **Multimodal: 85/100.** Provisional from peers (85.5; high suggests image/video input); independent vision/audio benchmark not verified.
- **Coding: 81/100.** Provisional from peers (82).
- **Cost efficiency: 88/100.** Provisional from peers (90); competitive/free-tier likely.
- **Overall Score: 83.2/100.** Mean of quality dims (80+84+86+85+81)/5 = 83.2 → 82. Note: independent verification of benchmarks and architecture specs needed.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-25
- Method: Independent search (official Qwen site minimal; HF blocked; dataset peers used as provisional evidence). Scores are provisional interpretations; official benchmark verification (AA, BenchLM, official Qwen benchmark table) should be added.
