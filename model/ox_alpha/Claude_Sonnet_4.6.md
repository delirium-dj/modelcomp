# Ox Alpha — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (subsequently revealed as GLM-5.3-Flash preview)
- **Short description:** Anonymous "stealth" model that appeared on OpenCode and OpenRouter from August 20–26, 2026; revealed on August 26 as GLM-5.3-Flash from Z.ai (Zhipu AI). Open-weights (MIT license), 320B/18B MoE with hybrid sparse+linear attention, native multimodal, 1M context.
- **Provider / access:** OpenCode / OpenRouter (anonymous as "Ox Alpha"); now identified as Z.ai GLM-5.3-Flash available on Hugging Face and Z.ai API. Chat Completions API.
- **Release / knowledge:** 2026-08-20 (stealth preview as Ox Alpha), 2026-08-26 (revealed as GLM-5.3-Flash; weights released 2026-08-28 MIT license).
- **IDs:** Listed as `ox_alpha` in the project slug; underlying model `zhipu/glm-5.3-flash`. No Zen Free ID found; open-weights available for self-hosting.
- **Context window:** 1,000,000 tokens (1M); verified via Z.ai/GLM-5.3-Flash documentation.
- **Modalities:** Text + image + video input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-08-26):** Open-weights (MIT license) — self-hosting at zero per-token cost; API pricing varies by provider (~1/10 of flagship GLM-5.3).
- **Architecture:** 320B total / 18B active parameters (MoE); hybrid sparse + linear attention; first natively multimodal model in GLM-5 series; trained on 30T-token multimodal corpus.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (published benchmark data, August 2026 — as GLM-5.3-Flash)
- AutomationBench: **48.8%** (Z.ai published, 2026 — vs GLM-5.2 at 26.2%)
- Terminal-Bench 3.0: **28.3%** (GLM-5.3 flagship for context; Flash variant not separately published on 3.0)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Early stealth benchmark claims (80% DeepSWE) were based on 10-task subsets — not representative

Coding:

- DeepSWE v1.1: **63.4–66.9%** (Z.ai published comprehensive eval, 2026; early inflated 80% claim was 10-task subset)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M context window confirmed; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1 84.3% approaches frontier (ref ~88%+ = 90–100; 80–87% ≈ 82–88); AutomationBench 48.8 is solid. No Tau3/GDPval/Claw-Eval. Scored 83.
- **Reasoning: 80/100.** No verified GPQA/HLE for Ox Alpha / GLM-5.3-Flash. TB2.1 84.3% implies strong reasoning in agentic contexts; 30T multimodal training. Scored 80 provisionally.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100; scored 95.
- **Multimodal: 80/100.** Text + image + video input confirmed (first natively multimodal GLM-5 model). Per methodology: image+video in = 75–90; scored 80.
- **Coding: 82/100.** DeepSWE 63.4–66.9% is high mid-tier (frontier ref ≥74%+ = 90–100); TB2.1 84.3% is approaching frontier. Scored 82 using the Z.ai comprehensive eval (not inflated stealth numbers).
- **Cost efficiency: 98/100.** Open-weights MIT license for self-hosting = near $0; API at ~1/10 flagship cost = negligible pricing. Scored 98.
- **Overall Score: 84/100.** Mean of (Tool 83 + Reasoning 80 + Context 95 + Multimodal 80 + Coding 82) / 5 = 420 / 5 = 84.0 → 84. Best-fit: cost-efficient frontier Flash model for agentic coding and multimodal workflows; same underlying model as GLM-5.3-Flash reviewed under this slug.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (Z.ai published benchmarks, published Ox Alpha reveal analysis, Hugging Face GLM-5.3-Flash card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
