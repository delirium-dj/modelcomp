# MiMo-V2.6-Flash — findings by Laguna XS 2.1

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's smaller MiMo-V2.6 sibling (2026-09-21) — 309B-parameter sparse MoE (15B active), MIT-licensed, same 1M context and omni-modal input as Pro at roughly one-third the API price; #1 open-weights model on the Vals Index.
- **Provider / access:** MiMo API platform (`mimo-v2.6-flash`), Xiaomi AI Studio, MiMo Code/Desktop, OpenRouter, Hugging Face weights (MIT); Token Plan subscriptions; Batch at 50%.
- **Release / knowledge:** 2026-09-21; knowledge cutoff not published in sources found.
- **IDs:** `mimo-v2.6-flash` (MiMo API); `xiaomi/mimo-v2.6-flash` (OpenRouter). OpenCode made it free for a launch week (time-limited); no permanent Zen Free ID found.
- **Context window:** 1,048,576 tokens; max output up to 128K.
- **Modalities:** text, image, video, audio in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $0.14 / $0.28 per 1M in/out; cache-hit input $0.0028 (~99% discount); reported RL training cost ~$850K.
- **Architecture:** 309B total / 15B active parameters, sparse MoE; MIT license; 30 large RL steps (~750K trajectories shared with Pro run).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi vendor table; vs Pro 89.9)
- AutomationBench: **52.3%** (Xiaomi; vs Pro 53.1)
- JobBench: **61.2%** (Xiaomi; vs Pro 62.0)
- Vals Index (GDP-weighted knowledge work): **59.58%** (#1 open-weights, ahead of Pro's 59.47 within noise; 15 proprietary models ahead)
- Vals CyberBench v1.1: **75.36%** (rank 1 of 9, $0.05/test)
- CyberGym: **95.1** (Xiaomi; outpaces Pro's 94.0 — vendor caveat: not evidence of general cyber superiority)
- Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index: no separate verified public figure found for Flash (Pro: 46.32; Xiaomi positions Flash just behind)
- GPQA / HLE / CritPt / LCR: no verified public score found in sources checked

Coding:

- DeepSWE v1.1: **67.9%** (Xiaomi vendor table; vs Pro 71.9)
- MiMo Code Bench: **61.2%** (Xiaomi; vs Pro 63.2)
- MiMo Visual Coding: **71.5%** (Xiaomi; vs Pro 72.3)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- 1,048,576-token window shared with Pro (AA-LCR 86.3% measured on Pro); no separate Flash retrieval number published

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 87.6%, AutomationBench 52.3%, JobBench 61.2% and Vals CyberBench #1 are excellent for a 15B-active model; capped by vendor-run harnesses on the headline rows and missing Tau3/MCP-Atlas.
- **Reasoning: 76/100.** Vals Index 59.58% (#1 open-weights) implies strong applied reasoning; capped by the absence of any public GPQA/HLE/AA-Index row for Flash itself.
- **Context window: 94/100.** Same 1M window as Pro (95–100 tier) with Pro's AA-LCR 86.3% as family evidence; no Flash-specific retrieval measurement keeps it just below Pro.
- **Multimodal: 90/100.** Native text/image/video/audio in (audio-in tier 90–100) shared with Pro; text-only output; no Flash-specific vision benchmark published.
- **Coding: 84/100.** DeepSWE 67.9% and TB 2.1 87.6% at $0.14/$0.28 are outstanding value; capped below Pro (71.9 DeepSWE) and no independent SWE-bench row.
- **Cost efficiency: 97/100.** $0.14/$0.28 with $0.0028 cache hits is near the bottom of the market (second-cheapest major frontier model per VentureBeat), plus MIT weights and 50% Batch; only the lack of a permanent free tier keeps it from 100.
- **Overall Score: 85.6/100.** Mean of (84, 76, 94, 90, 84) = 85 — the default choice for high-volume agent workloads; pay 3x for Pro only when you need the last few points of capability.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (VentureBeat MiMo-V2.6 launch coverage, DeepLearning.AI The Batch, DataNorth, TensorFeed, Xiaomi MiMo model page, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
