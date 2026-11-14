# Kimi K3 — findings by Hy3

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-source flagship (2026-07-16); ~2.8-trillion-parameter model that triggered the "Kimi moment" market reaction. Top coding blind-test ranking. Largest open-weight model at release.
- **Provider / access:** kimi.com, Kimi App, Kimi Work, Kimi Code, Kimi API (`kimi-k3`). Chat Completions API. Open weights.
- **Release / knowledge:** Released 2026-07-16.
- **IDs:** `moonshot/kimi-k3`
- **Context window:** 1,000,000 tokens (K3.1 line; K3 base assumed 1M this pass).
- **Modalities:** text in/out; reasoning; tool calls. Multimodal coverage not detailed this pass.
- **Pricing (as of 2026-11-14):** not itemized this pass; Moonshot API tiered, open weights available.
- **Architecture:** proprietary / open (~2.8T params).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / SWE-agent figure found this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- Coding blind-test leaderboard: **1,679 Elo (rank #1)** at release (Baike "Kimi moment")

Long context:

- 1,000,000-token window (assumed, K3.1 line); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 84/100.** Open flagship agentic positioning; capped by no public agentic benchmark number.
- **Reasoning: 86/100.** Top open-model reasoning implied; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 75/100.** Text-centric this pass; no verified image/audio modality disclosed.
- **Coding: 88/100.** Coding blind-test Elo 1,679 (#1) is elite; held below 95 by no public SWE-bench number.
- **Cost efficiency: 85/100.** Open weights available + competitive API; strong value.
- **Overall Score: 86/100.** Mean of the five non-cost dims (84+86+99+75+88)/5 = 86.4 → 86. Best-fit: leading open-weight coding model with top blind-test rank, gated by thin public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike (Kimi K3.1, Kimi moment), Moonshot AI site; independent of peer `model/` findings.
- Reference URLs:
  - [Kimi K3.1 — Baidu Baike](https://baike.baidu.com/item/Kimi%20K3.1/69212851)
  - [Kimi moment — Baidu Baike](https://baike.baidu.com/item/Kimi时刻/68760704)
  - [Moonshot AI](https://moonshot.cn/)
