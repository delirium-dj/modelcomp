# MiMo V2.6 Pro — findings by Kimi K3

- Source: Xiaomi/MiMo-V2.6-Pro (`mimo-v2.6-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open-weight (MIT) omnimodal flagship, released 2026-09-22, built around a single mixed RL run across coding, agents, vision and cybersecurity; tops the Artificial Analysis open-weight leaderboard as of launch week. Flagship of a four-model series (Pro / Flash / Pro-UltraSpeed / Distill-Qwen-9B).
- **Provider / access:** Xiaomi MiMo API platform (`platform.xiaomimimo.com`, model ID `mimo-v2.6-pro`, OpenAI-compatible chat completions) and OpenRouter (`xiaomi/mimo-v2.6-pro`); also MiMo Studio / MiMo Code / MiMo Desktop. Self-hostable via vLLM/SGLang (`XiaomiMiMo/MiMo-V2.6-Pro-RL`). Not on OpenCode Zen (Zen carries only `mimo-v2.6-flash-free` from this series).
- **Release / knowledge:** Announced 2026-09-22 (UTC+8); Hugging Face repos live late 2026-09-21 UTC (Artificial Analysis lists 2026-09-21). Technical report on HF. Knowledge cutoff not stated publicly.
- **IDs:** `xiaomi/mimo-v2.6-pro` (OpenRouter), `mimo-v2.6-pro` (Xiaomi platform). No Free ID exists on Zen.
- **Context window:** 1,048,576 tokens total (1M) — verified via HF model card metadata, vendor pricing page, and Artificial Analysis; hybrid attention (60 of 70 layers use a 128-token sliding window, 10 global) is what makes the window practical to serve. Max output not publicly specified.
- **Modalities:** Text + image + video + audio in; text out; reasoning model (explicit reasoning mode; `mimo` reasoning/tool-call parsers); tool calls supported (vLLM `--enable-auto-tool-choice` with the mimo parser); JSON/structured output supported via the OpenAI-compatible API.
- **Pricing (as of 2026-09-29):** $0.435/M input, $0.0036/M cached input (99% cache discount), $0.87/M output on Xiaomi's API (per Artificial Analysis and OpenRouter, checked 2026-09-22). Pro-UltraSpeed API-only variant at 10x ($4.35/$8.70). Paid API, but MIT weights are free to self-host.
- **Architecture:** Sparse MoE, 1.02T total / 42B active parameters, 384 routed experts (8 active), no shared experts; 70 layers; 681M-param MiMo ViT vision encoder; 308M AudioTokenizer + 127M audio patch encoder; 5-layer MTP speculative drafter (7 tokens/pass); ~573 GB packed checkpoint. MIT license.

### Raw benchmarks found

Agent / tool use:

- Toolathon — Toolathlon-Verified: **76.9** (Xiaomi model card; Claude Opus 5: 80.6, GPT-5.6 Sol: 74.9)
- OSWorld-Verified: **82.0%** (Xiaomi model card; Opus 5: 83.4)
- AutomationBench v1.0.6 (agentic SaaS workflows): **53.1** (Xiaomi model card; Opus 5: 50.3, GPT-5.6 Sol: 45.8)
- GDPval-AA v2.1: **1673 Elo** (Xiaomi model card; Opus 5: 1708)
- Terminal-Bench 4.0: **34.9** (Xiaomi model card; Opus 5: 49.0)
- Terminal-Bench 2.1: **89.9** (Xiaomi model card; Opus 5: 89.1, GPT-5.6 Sol: 88.8)
- Claw-Eval / ClawProBench: no verified public score found
- SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.x: **46** — **#1 of ~114 tracked open-weight models** (Artificial Analysis; next: GLM-5.3 max 45, Kimi K3 max 44, DeepSeek V4.1 Flash 39; ties Grok 4.7 per VentureBeat; Claude Opus 5.5 at 58 shows the remaining frontier gap)
- GPQA Diamond: no verified public score found
- HLE: no verified standalone score found (included in AA index mixture)
- CritPt: no verified standalone score found
- AA-Omniscience Accuracy / Hallucination Rate: measured in the AA index but per-model values not publicly visible without subscription
- AA-LCR v1.1 (long-context reasoning): measured in the AA index; standalone value not publicly visible

Coding:

- DeepSWE v1.1: **71.9** (Xiaomi model card; Opus 5: 74.0, GPT-5.6 Sol: 73.0; V2.5-Pro was 19.0)
- ProgramBench: **26.5** (Xiaomi model card; Opus 5: 37.0)
- Terminal-Bench 4.0 / 2.1: 34.9 / 89.9 (see above)
- MiMo VisualCoding (vendor-internal): 72.3 — provisional, not independently reproducible
- SWE-bench Verified / SWE-Pro: no verified public score found for this model (only for the 9B distill sibling)
- LiveCodeBench: no verified public score found
- SciCode: included in AA index; standalone value not publicly visible

Security (vendor-reported):

- ExploitBench: **47.9** (Opus 5: 70.0, GPT-5.6 Sol: 78.5)
- CyberGym: **94.0**

Long context:

- 1M-token window vendor- and AA-verified; no public MRCR / RULER / GraphWalks retrieval score found (AA-LCR v1.1 contributes to the index but the per-model figure is not published openly).

### Normalized scores (1–100)

- **Tool use: 84/100.** Toolathlon-Verified 76.9, OSWorld-Verified 82.0 and AutomationBench 53.1 are near Claude Opus 5 / GPT-5.6 Sol level — exceptional for open weights. Capped: the hardest agentic suites still show a clear gap (Terminal-Bench 4.0 34.9 vs 49.0; ExploitBench 47.9 vs 70+), and most numbers are vendor-harness results.
- **Reasoning: 82/100.** AA Intelligence Index 46 makes it the #1 open-weight model — but that's a statistical tie with GLM-5.3 (45) and Kimi K3 (44), ~12 points below the closed frontier (Opus 5.5: 58).
- **Context window: 90/100.** Full 1M-token window, cheap cached input ($0.0036/M) and an architecture (sliding-window hybrid attention) designed to serve it. Capped: no independent long-context retrieval score published.
- **Multimodal: 80/100.** True omnimodal input — text, image, video and audio with dedicated 681M ViT and audio encoders — but text-only output and no independently verified MMU-style score beyond the vendor-internal VisualCoding number.
- **Coding: 80/100.** DeepSWE 71.9 nearly matches Opus 5 (74.0) and the V2.5→V2.6 jump (19.0→71.9) is dramatic; Terminal-Bench 2.1 at 89.9 ties the frontier. Capped by Terminal-Bench 4.0 (34.9 vs 49.0) and ProgramBench (26.5 vs 37.0) showing the hardest current coding evals still favor closed models; no SWE-bench Verified number published.
- **Cost efficiency: 92/100.** $0.435/$0.87 per million with a 99% cache discount is the cheapest price point of any top-5 open-weight flagship (≈7x cheaper input, 17x cheaper output than Kimi K3), plus free MIT self-hosting for those with hardware. Capped slightly by verbosity (140M output tokens across the AA index) and a slow 42 t/s default speed.
- **Overall Score: 83/100.** Mean of the five non-cost dims (84+82+90+80+80)/5 = 83. Best fit: teams wanting frontier-adjacent open-weight capability for agentic/coding loops at the lowest flagship API price, or MIT-licensed self-hosting with data residency.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (Artificial Analysis model page, Hugging Face model card as quoted via independent coverage, Codersera guide reproducing the vendor benchmark table, OpenCode Zen docs, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
