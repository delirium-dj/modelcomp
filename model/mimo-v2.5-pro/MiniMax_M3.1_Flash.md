# MiMo V2.5 Pro — findings by MiniMax M3.1 Flash

- Source: Xiaomi (MiMo-V2.5-Pro), `XiaomiMiMo/MiMo-V2.5-Pro`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's April 2026 open-weight (MIT) long-horizon coding MoE — 1.02T total / 42B active, 1M context, text-only, and an unusually low hallucination rate (24.7% on the AA omniscience probe) with ClawEval 63.8 and SWE-bench Verified 78.9 at $0.435/$0.87 per 1M.
- **Provider / access:** Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro` (MIT, FP8), OpenRouter `xiaomi/mimo-v2.5-pro` (snapshot `20260422`), AtlasCloud, Novita, GMICloud, DigitalOcean. **Not on OpenCode Zen** — Zen only carries the free MiMo-V2.5 and MiMo-V2.6-Flash slots.
- **Release / knowledge:** **2026-04-27** (vendor blog; HF repo created 2026-04-27). Knowledge cutoff not published.
- **IDs:** `XiaomiMiMo/MiMo-V2.5-Pro` (HF), `xiaomi/mimo-v2.5-pro` (OpenRouter — dots, not dashes), `xiaomi/mimo-v2.5-pro` (models.dev).
- **Context window:** **1,048,576** tokens for the instruct model (**256K** for the `-Base` checkpoint).
- **Modalities:** text in / text out only — the Pro variant is deliberately text-only; the sibling MiMo-V2.5 is the omnimodal one.
- **Pricing (as of 2026-10-20):** **$0.435/M in, $0.87/M out**, cache read **$0.0036** (Xiaomi FP8 route and AtlasCloud); Novita $0.48/$0.96, GMICloud $0.30/$0.61, DigitalOcean $0.48/$1.80. Self-host $0 (MIT).
- **Architecture:** MoE, 1,023,182,841,600 parameters, 70 layers (1 dense + 69 MoE), 384 routed experts with top-8, 10 full-attention + 60 sliding-window layers (6:1), hidden 6144, 3 MTP layers, 27T pretraining tokens.

### Raw benchmarks found

> Xiaomi's own comparison figure against DeepSeek V4 Pro / Kimi K2.6 / GLM 5.1 / GPT-5.4 / Claude Opus 4.6, with Vals AI and Artificial Analysis runs alongside.

Agent / tool use:

- Tau3-bench: **72.9** (vendor) · Tau2-bench: **94.15%** (AA) · ClawEval (pass^3): **63.8** (vendor + claw-eval.github.io) · Gert Labs Composite Game: **62.70%**
- Terminal-Bench 2.0: **68.4%** (vendor) · Terminal-Bench 2.1: **57.3%** (Vals AI) · Terminal-Bench Hard: **43.2%** (AA) · Terminal-Bench 4.0: **0%** (AA)
- GDPval-AA: **1581 Elo** (vendor) vs **1120.77 / 31.0% normalized** (AA) — conflict flagged · IT-Bench-SRE: **38.2%** (AA) · APEX-Agents: **2.4%** (AA) · AutomationBench: **13.7%** (AA)

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (AA) vs **82.6%** (Vals AI) · HLE: **48.0%** (vendor) / **35.7%** (AA) / **34.0%** without tools (vendor) · MMLU-Pro: **84.6%** (Vals AI)
- AA-LCR: **79.7%** (AA) · AA-IFBench: **79.9%** (AA) · AA-SciCode: **50.6%** (AA) · CritPt: **4.0%** (AA)
- Artificial Analysis Intelligence Index: **26.0** · Omniscience Accuracy / Hallucination Rate: **22.4% / 24.7%** (AA) — the low hallucination rate is the standout
- Agentic Index: **22.7** (AA) · Coding Index: **60.2** (AA) · FrontierMath v2 / AIME: no verified public score found for this model

Coding:

- SWE-bench Verified: **78.9%** (vendor) vs **74.0%** (Vals AI) · SWE-bench Pro: **57.2%** (vendor) · LiveCodeBench: **81.4%** (Vals AI) · FrontierSWE (implementation rank): **#3.4** (vendor)

Long context:

- GraphWalks F1 (vendor, BFS): 32k 0.81 · 64k 0.79 · 128k 0.82 · 256k 0.77 · 512k 0.56 · **1M 0.37**; parents variant: 0.98 → **0.62** at 1M — real retrieval that degrades hard near the ceiling
- MRCR / Terminal-Bench 3.0: no verified public score found

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-bench 94.2%, τ³-bench 72.9, ClawEval 63.8, Terminal-Bench 2.0 68.4% and Gert Labs 62.7% are good mid-to-high band agentic results, capped by GDPval-AA's conflicting 1581/1121 readings, APEX-Agents 2.4% and AutomationBench 13.7%.
- **Reasoning: 78/100.** GPQA 82.6–86.6%, HLE 35.7–48.0%, MMLU-Pro 84.6%, AA-LCR 79.7% and IFBench 79.9% are strong, and the 24.7% hallucination rate is excellent — the cap is an AA Intelligence Index of 26.0.
- **Context window: 80/100.** The 1M window is real but measured retrieval degrades sharply: GraphWalks BFS F1 falls to 0.37 and parents to 0.62 at 1M, so the score sits below the 95+ band.
- **Multimodal: 15/100.** Text-in/text-out only — the omni sibling MiMo-V2.5 is the one with image/audio/video.
- **Coding: 78/100.** SWE-bench Verified 78.9% (74.0% independent), LiveCodeBench 81.4% and SWE-bench Pro 57.2% are strong mid-to-high band coding numbers, held back by a missing DeepSWE figure.
- **Cost efficiency: 97/100.** $0.435/M in and $0.87/M out with a $0.0036/M cache read is very cheap for a 1.02T model, and MIT weights are free to self-host.
- **Overall Score: 63/100.** Mean of the five quality dims = (66 + 78 + 80 + 15 + 78) / 5 = 63.4 → **63**. Best fit: long-horizon coding agents that need accuracy and low hallucination without multimodal — pair with an omni model for images.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Xiaomi MiMo model card and vendor blog, Artificial Analysis, BenchLM + Vals AI, OpenRouter API endpoints, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Flash.md`, using the same headings.
