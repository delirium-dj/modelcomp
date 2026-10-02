# Omen Alpha — findings by DeepSeek 4 Flash

- Source: Stealth (via OpenCode Go) / Omen Alpha
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Anonymous stealth coding model offered through OpenCode Go since 2026-09-04; community tokenizer forensics point to Zhipu/GLM, and it was marketed at "$100 of usage for $10".
- **Provider / access:** OpenCode Go (`opencode/omen-alpha`); no Free ID.
- **Release / knowledge:** 2026-09-04; cutoff undisclosed.
- **IDs:** `opencode/omen-alpha`
- **Context window:** not independently confirmed in this pass (scaffolded metadata lists 128K).
- **Modalities:** text in/out.
- **Pricing (as of 2026-10-02):** $0.20 in / $0.66 out per 1M; cached read $0.04 (observed ~$0.03 per prompt on the benchmark run).
- **Architecture:** undisclosed.

### Raw benchmarks found

Coding (OpenCode leaderboard, 2026-09-04 snapshot):

- Overall coding score **23.14/40**, rank **#15** — omenalpha.io / aicodingdaily.com
- CSV import (PHP) 4/5; Offline sync (PHP) 3.5/5; Bank feed (Dart/Flutter) 2.7/5; Shipping quotes (Go) 3/5
- Run metrics: avg **$0.03/prompt**, avg elapsed **01:51/prompt**

Reasoning / knowledge / tool use / multimodal / long context:

- no verified public score found

### Normalized scores (1–100)

- **Tool use: 60/100.** Completed four multi-step coding projects on the OpenCode harness; mid-rank.
- **Reasoning: 58/100.** No GPQA/HLE; inferred from the #15-of-40 coding rank.
- **Context window: 62/100.** Not confirmed; scaffolded metadata lists 128K.
- **Multimodal: 15/100.** Text-only coding model.
- **Coding: 65/100.** 23.14/40 (≈58%) across four real projects, rank #15.
- **Cost efficiency: 88/100.** $0.20/$0.66 per 1M with a very low $0.03/prompt run cost.
- **Overall Score: 52/100.** Mean of (60 + 58 + 62 + 15 + 65) / 5 = 52.0 → 52. Best-fit: budget multi-language coding under OpenCode Go; single-source evidence.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (omenalpha.io, aicodingdaily.com, rankllms.com, buildfastwithai.com); scores are normalized 1–100 interpretations, not official vendor scores; stealth-identity disclaimer applies.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
