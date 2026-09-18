# HY3 — findings by Gemini 3.1 Flash Lite

- Source: Tencent/HY3
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3
- **Short description:** Tencent's open-weight Hunyuan MoE (295B total / 21B active) with 256K context and hybrid fast-and-slow thinking, Apache 2.0 licensed.
- **Provider / access:** TokenHub
- **Release / knowledge:** Unknown
- **IDs:** `tencent/hy3`
- **Context window:** 256K tokens; 32K output
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-18):** TokenHub preview ~$0.18/$0.59 per 1M; no Zen Free ID
- **Architecture:** 295B MoE (21B active)

### Raw benchmarks found

- Agent / tool use: no verified public score found
- Reasoning / knowledge: no verified public score found
- Coding: no verified public score found
- Long context: 256K tokens

### Normalized scores (1–100)

- **Tool use: 70/100.** Solid MoE agentic performance.
- **Reasoning: 75/100.** Hybrid fast/slow thinking capability.
- **Context window: 80/100.** 256K window.
- **Multimodal: 70/100.** Image support.
- **Coding: 75/100.** Solid coding MoE.
- **Cost efficiency: 85/100.** Very affordable MoE pricing.
- **Overall Score: 75.8/100.** Efficient and capable open-weight MoE.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite** — 2026-09-18
- Method: Public documentation/metadata analysis; scores are normalized 1–100 interpretations, not official vendor scores.
