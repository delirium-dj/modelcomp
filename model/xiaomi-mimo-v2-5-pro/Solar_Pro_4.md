# Xiaomi MiMo-V2.5-Pro — findings by Solar Pro 4

- Source: Xiaomi/MiMo-V2.5-Pro, e.g. Xiaomi (`mimo-v2.5-pro`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro (Xiaomi open-weight, MiMo V2.5 family)
- **Short description:** Xiaomi's MiMo-V2.5-Pro model — the Pro tier of MiMo V2.5, text-only long-horizon model. No Free ID found on Zen as of 2026-09-17 — scored on Xiaomi platform pricing ($0.435 miss / $0.87 out, or $1.00/$3.00 routes). Listed in model-comparison.md with Overall Score 74 — described as top open long-horizon Pro; pair with V2.5 Free when vision/audio needed. MIT license.
- **Provider / access:** Xiaomi API (native endpoint), OpenCode Zen (no Free ID), Hugging Face (open weights — MIT license). Also available via other providers.
- **Release / knowledge:** Released 2026 (MiMo V2.5 Pro release). Knowledge cutoff not explicitly stated.
- **IDs:** `mimo-v2.5-pro` or `xiaomi-mimo-v2.5-pro` (Xiaomi API, OpenCode Zen). No Free ID on Zen.
- **Context window:** 1M tokens native (Xiaomi endpoint). Max output not explicitly stated (likely 128K+). Zen cap not applicable for Pro tier (no Free ID).
- **Modalities:** Text input; text output. Tool calls: yes. Structured output: yes. Reasoning: yes. NO image, video, or audio I/O (text-only long-horizon model — contrast with V2.5 Free which is omni-modal). This is the key difference from V2.5 Free.
- **Pricing (as of 2026-09-17):** $0.435 miss / $0.87 out (Xiaomi platform pricing per model-comparison.md). Or $1.00/$3.00 routes. No Free ID on Zen — scored on Xiaomi platform pricing. Cost scored 85 per model-comparison.md.
- **Architecture:** Open-weight (MIT license). MoE or dense architecture not disclosed. MiMo (Mini Max Model) series from Xiaomi. Text-only (contrast with V2.5 Free omni-modal).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for MiMo-V2.5-Pro specifically.
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for MiMo-V2.5-Pro specifically.
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **43** (AA; https://artificialanalysis.ai/models/comparisons/mimo-v2-5-0424-vs-mimo-v2.5-pro — Index 43 for Pro vs 38 for V2.5). Above V2.5 Free's 38.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (AA MiMo-V2.5 vs Pro comparison lists Coding Index? Not found for Pro specifically.)

Long context:

- Long-context recall: no verified public score found for MiMo-V2.5-Pro specifically. 1M native context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Score from model-comparison.md. No direct benchmark scores found for MiMo-V2.5-Pro specifically in this research. The 82 score from model-comparison.md reflects the model's positioning as top open long-horizon Pro. AA Intelligence Index of 43 is above V2.5 Free's 38. Capped by: lack of direct benchmark verification for this specific model version.
- **Reasoning: 78/100.** Score from model-comparison.md. No direct benchmark scores found for MiMo-V2.5-Pro specifically. The 78 score from model-comparison.md reflects the model's reasoning capabilities. AA Intelligence Index of 43 is above V2.5 Free's 38. Capped by: lack of direct benchmark verification.
- **Context window: 100/100.** 1M tokens native context window (Xiaomi endpoint). Per methodology: ≥1M = 95-100. Score 100 reflects top-tier context window.
- **Multimodal: 15/100.** Text input; text output. NO image, video, or audio I/O (text-only long-horizon model — this is the key difference from V2.5 Free which is omni-modal). Per methodology: text-only = 10-20. Score 15 reflects text-only I/O with no multimodal capability.
- **Coding: 82/100.** Score from model-comparison.md. No direct benchmark scores found for MiMo-V2.5-Pro specifically. The 82 score from model-comparison.md reflects the model's positioning as top open long-horizon Pro. Capped by: lack of direct benchmark verification.
- **Cost efficiency: 85/100.** $0.435 miss / $0.87 out (Xiaomi platform pricing) or $1.00/$3.00 routes. Per methodology: ~$0.435/$0.87 = ~85-90 range. Capped by: paid pricing (no free tier available on Zen) and pricing relative to cheaper alternatives.
- **Overall Score: 74/100.** Mean of (82 + 78 + 100 + 15 + 82 + 85) / 6 = 73.7 → **74**. Best-fit recommendation: Xiaomi MiMo-V2.5-Pro is the top open long-horizon Pro model — text-only (contrast with V2.5 Free omni-modal). Best paired with V2.5 Free when vision/audio needed. For teams needing omni-modal capabilities, V2.5 Free (Overall 82, MIT, omni-modal) is the better choice despite lower reasoning/coding scores. For teams needing higher reasoning/coding scores, other models like Claude Opus 5 (SWE-bench 97.0%, $5/$25) or DeepSeek V4.1 Flash (TB2.1 90.6%, MIT, $0.15/$0.60) are better choices. For teams needing lower cost, V2.5 Free ($0 free tier) is better value. This matches the model-comparison.md score of 74.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, HokAI, Artificial Analysis), vendor documentation (OpenCode Zen, Xiaomi), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: text-only long-horizon model (contrast with V2.5 Free omni-modal). No Free ID on Zen as of 2026-09-17.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Free.md`, using the same headings.
