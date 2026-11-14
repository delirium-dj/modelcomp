# MiMo-V2.6-Pro — findings by Hy3

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open MIT-licensed flagship (2026-09-22); 1.02T/42B MoE, natively omnimodal (text/image/audio/video). Large gains over V2.5-Pro via mixed RL + multi-teacher distillation.
- **Provider / access:** Xiaomi API (`mimo-v2.6-pro`), open MIT weights. Chat Completions API.
- **Release / knowledge:** Released 2026-09-22.
- **IDs:** `xiaomi/mimo-v2.6-pro`
- **Context window:** 1,000,000 tokens in; 128,000 out (verified).
- **Modalities:** text, image, audio, video in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** In $0.43 / Out $0.87 per 1M tokens; UltraSpeed tier sold separately.
- **Architecture:** sparse MoE, 1.02T total / 42B active, MIT open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi, #2 field)
- AutomationBench: **53.1%** (#2)
- Toolathlon (Verified): **76.9%** (#2)
- OSWorld-Verified: **82.0%** (#5)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- DeepSWE v1.1: **71.9%** (up from 19.0 on V2.5-Pro)
- SEC-Bench Pro: **66.3%** (#1)
- CyberGym: **94.0%** (#2)
- ExploitBench: **47.9%** (behind closed frontier)

Long context:

- 1,000,000-token window verified; Artificial Analysis Long Context Reasoning 86.3 (BenchGecko).

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 89.9% and Toolathlon 76.9% are strong; AutomationBench 53.1% and ExploitBench 47.9% cap it.
- **Reasoning: 85/100.** Long-context reasoning 86.3 and strong agentic signals; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 90/100.** Native omnimodal (text/image/audio/video) — broad coverage.
- **Coding: 85/100.** DeepSWE 71.9%, OSWorld 82.0%, SEC-Bench #1; held below elite by ExploitBench 47.9%.
- **Cost efficiency: 95/100.** $0.43/$0.87 per 1M with open weights — exceptional value.
- **Overall Score: 89/100.** Mean of the five non-cost dims (85+85+99+90+85)/5 = 88.8 → 89. Best-fit: top open-weight omnimodal agentic model with elite terminal/security benchmarks, gated by mixed exploit coding.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — BenchGecko, Vals AI, ModelBeats, Van Data Team, Model Picker; independent of peer `model/` findings.
- Reference URLs:
  - [MiMo-V2.6-Pro — BenchGecko](https://benchgecko.ai/model/mimo-v2-6-pro)
  - [MiMo V2.6 Pro — Vals AI](https://vals.ai/models/xiaomi_mimo-v2.6-pro)
  - [MiMo-VII.6-Pro — ModelBeats](https://modelbeats.com/models/mimo-v2-6-pro)
  - [MiMo-V2.6-Pro benchmarks (Van Data Team)](https://vandatateam.com/ai-model-benchmarks/mimo-v2-6-pro)
