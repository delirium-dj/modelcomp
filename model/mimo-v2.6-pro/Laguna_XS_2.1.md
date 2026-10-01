# MiMo V2.6 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights omnimodal MoE (1.02T/42B), Sept 2026 release; top open-weights on AA Intelligence Index (46).
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-pro` (Chat Completions); OpenRouter; Vercel AI Gateway; weights on Hugging Face.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff undisclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro` (paid); no Free ID on Zen.
- **Context window:** 1,048,576 tokens (1M) / 128K output; verified.
- **Modalities:** Text, image, video, audio in; text out; reasoning support; tool calls; JSON output.
- **Pricing (as of 2026-10-01):** $0.435 input / $0.87 output per 1M; cached $0.0036; ~$0.13 per Index task.
- **Architecture:** Sparse MoE 1.02T total/42B active; hybrid sliding-window/global attention; MIT license; FP8 weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%**
- OSWorld-Verified: **82.0%**
- Toolathlon: **76.9%**
- AutomationBench: **53.1%**
- GDPval-AA: **1673 Elo**
- JobBench: **62.0%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** (#1 open-weights)

Coding:

- DeepSWE: **71.9%**
- MiMo Code Bench: **63.2%**
- CyberGym: **94.0%**
- ExploitBench: **47.9%**

Long context:

- No published MRCR/RULER at 512K+/1M.

Multimodal:

- Native text/image/video/audio input; verified omnimodal.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 87/100.** TB 89.9% exceeds frontier 85% bar + GDPval 1673 Elo near Opus 1708; capped by TB4.0 34.9% trailing Opus on long sessions.
- **Reasoning: 86/100.** AA Index 46 top open-weights; GDPval 1673 near Opus 1708; no direct GPQA/HLE caps higher tier.
- **Context window: 95/100.** Full 1M verified; no 98%+ retrieval at 512K+ caps from 100.
- **Multimodal: 95/100.** Native video/audio input with text output; strong omnimodal; no vision-accuracy lead over closed models caps at 95.
- **Coding: 87/100.** DeepSWE 71.9% near 74% frontier + TB 89.9%; ExploitBench 47.9% moderate; capped by missing SWE-V/LiveCode absolutes.
- **Cost efficiency: 87/100.** $0.435/$0.87 + Pareto frontier cost ranking (~1/20 Opus); excellent open-weights value.
- **Overall Score: 90/100.** Mean of (87+86+95+95+87)/5 = 90.0 → 90. Best fit: flagship open-weights agent/coder for long-horizon work at frontier-adjacent quality.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Xiaomi docs, Artificial Analysis, BenchLM); scores normalized 1-100 interpretations, not official vendor scores. Reference: Muse Spark 1.3 authoritative report with official Xiaomi card data.
- Future sources: add a new file next to this one, e.g. `MiMo_Pro_3.0.md`, using the same headings.