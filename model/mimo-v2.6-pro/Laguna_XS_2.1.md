# MiMo-V2.6-Pro — findings by Laguna XS 2.1

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's flagship open-weight model (2026-09-21) — 1.02T-parameter sparse MoE (42B active), MIT-licensed, omni-modal input, 1M context; top open-weights score on Artificial Analysis' Intelligence Index (46), tied with Grok 4.7 at ~1/5 the token price.
- **Provider / access:** MiMo API platform (`mimo-v2.6-pro`), Xiaomi AI Studio, MiMo Code/Desktop, OpenRouter (`xiaomi/mimo-v2.6-pro` via DeepInfra/NovitaAI/GMICloud/Xiaomi), Hugging Face weights (`XiaomiMiMo/MiMo-V2.6-Pro-RL`); Token Plan subscriptions ($6–$100/mo); UltraSpeed tier at 10x price; Batch at 50%.
- **Release / knowledge:** 2026-09-21 (weights + technical report + 7,000 RL environments + RL code same week); knowledge cutoff not published in sources found.
- **IDs:** `mimo-v2.6-pro` (MiMo API); `xiaomi/mimo-v2.6-pro` (OpenRouter); `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF). No Zen Free ID found (OpenCode Go carries it; OpenCode made V2.6-Flash free for a launch week).
- **Context window:** 1,048,576 tokens; max output 128K (131,072 per TensorFeed).
- **Modalities:** text, image, video, audio in; text out; reasoning yes (reasoning mode); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $0.435 / $0.87 per 1M in/out; cache-hit input $0.0036 (~99% discount); UltraSpeed $4.35 / $8.70; CNY list ¥3 / ¥6 (cache ¥0.025).
- **Architecture:** 1.02T total / 42B active parameters, sparse MoE; MIT license; trained with 30 large RL steps (~750K trajectories, reported cost ~$2.62M).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi vendor table — no rival figure published alongside; treat as vendor-run)
- Terminal-Bench 4.0: **~34.9%** (TensorFeed; BenchmarkScores table lists 24.8 — conflicting, both far below the closed frontier)
- AutomationBench: **53.1%** (Xiaomi; ahead of the Claude Opus 5 row on Xiaomi's own chart)
- Toolathlon-Verified: **76.9%** (Xiaomi)
- JobBench: **62.0%** (Xiaomi)
- TAU-Bench: **~80.0%** (OpenRouter, Xiaomi provider)
- GDPval-AA: **58.9%** (Artificial Analysis via OpenRouter)
- OSWorld-Verified: **82.0%** (Xiaomi via TensorFeed — different task set from OSWorld 2.0)
- Cyber: CyberGym **94.0**; Vals CyberBench v1.1 **72.86%** (rank 3/9, ahead of Muse Spark 1.3 Max and Fable 5.1); ExploitGym/ExploitBench/SEC-Bench Pro strong per VentureBeat (no numbers)

Reasoning / knowledge:

- AA Intelligence Index v4.3: **46.32** (top open-weights; tied Grok 4.7 46, ahead of GLM-5.3 45, Kimi K3 44)
- HLE: **49.4%** (Artificial Analysis)
- GPQA Diamond: **~90.0%** (OpenRouter, Xiaomi provider)
- CritPt: **26.6%** (AA)
- AA-Omniscience: accuracy **34.8%** / non-hallucination **59.4%** (AA)
- Vals Index: **59.47%** (2nd open-weights behind V2.6-Flash's 59.58, within noise; 15 proprietary models ahead)

Coding:

- DeepSWE v1.1: **71.9%** (Xiaomi vendor table; vs V2.5-Pro 19.0)
- MiMo Code Bench: **63.2%** (Xiaomi); MiMo Visual Coding: **72.3%**
- SciCode: **60.9%** (AA)
- SWE-bench Verified / LiveCodeBench: no verified public independent score found in sources checked

Long context:

- AA-LCR: **86.3%** (Artificial Analysis) over the 1M window

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 89.9%, Toolathlon 76.9%, TAU-Bench ~80% and OSWorld-Verified 82% are frontier-adjacent; capped by TB 4.0 (~24.8–34.9%) far behind closed leaders and the strongest numbers being vendor-run without named harnesses.
- **Reasoning: 82/100.** AA Index 46.32 (open-weights #1), HLE 49.4% and GPQA ~90% are strong for the class; capped by CritPt 26.6% and Omniscience accuracy 34.8% trailing closed frontier models.
- **Context window: 96/100.** 1,048,576-token window (95–100 tier) with AA-LCR 86.3% — above Fable 5.1's 85.3; short of the ≥98%-at-512K+ bar for 100.
- **Multimodal: 92/100.** Native text/image/video/audio in (audio-in tier 90–100), text out; omni-modal positioning confirmed by AA and Xiaomi — text-only output caps it.
- **Coding: 87/100.** DeepSWE 71.9% (near the 74% frontier ref), TB 2.1 89.9%, SciCode 60.9%; capped by vendor-run headlines and TB 4.0 weakness on the longest-horizon tasks.
- **Cost efficiency: 95/100.** $0.435/$0.87 beats the methodology's $0.60/$2.20 (~92) anchor, with $0.0036 cache hits, $0.13 per AA Index task, MIT weights for free self-hosting, and Batch at 50% — only the slow 37 t/s output dents it.
- **Overall Score: 89/100.** Mean of (88, 82, 96, 92, 87) = 89 — the open-weights value king: near-frontier agentic/coding ability at a tenth of Opus-class pricing, if you can accept Xiaomi-hosted or self-managed serving.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Xiaomi MiMo model page, Artificial Analysis, OpenRouter, VentureBeat, DeepLearning.AI The Batch, DataNorth, TensorFeed, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
