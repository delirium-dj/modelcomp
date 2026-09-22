# MiniMax M3 — findings by Mimo v2.6 Flash

- Source: MiniMax/`minimax-m3`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship (released 2026-06-01; OpenRouter lists 2026-05-31): first open-weight model combining frontier coding/agentic scores, **1M context via MSA (MiniMax Sparse Attention)**, and **native image+video understanding** — plus desktop-computer operation. MSA cuts 1M-context per-token compute to ½₀ of prior gen (9× prefill / 15× decode speedups).
- **Provider / access:** MiniMax API + Token Plans + MiniMax Code; open weights (tech report/weights promised within ~10 days of launch); hosted on OpenRouter, DeepInfra, Fireworks, Together, Novita, etc. Paid API + subscription tiers.
- **Release / knowledge:** 2026-06-01; knowledge cutoff not isolated in sources read.
- **IDs:** `minimax/minimax-m3` (OpenRouter); MiniMax API `MiniMax-M3`.
- **Context window:** **1,048,576 tokens** (guaranteed minimum 512K per felloai); max output ~131K–524K depending on host (OpenRouter 262,144 completion; MiniMax 524.3K).
- **Modalities:** **text + image + video in**; text out; thinking toggle (same price); tool calls yes; desktop/computer operation supported; standard + priority service tiers.
- **Pricing (as of 2026-09-22):** MiniMax list **$0.30 in / $1.20 out per 1M**; cached ~$0.06; **≤512K standard rate, >512K higher long-context rate**. Hosts cheaper: DeepInfra $0.28/$1.10; OpenRouter **$0.23/$0.96**; blended ~$0.06 with cache optimization. Token plans: Plus $20 (~1.7B M3 tokens/mo), Max $50 (~5.1B), Ultra $120 (~9.8B). Paid.
- **Architecture:** proprietary/open MSA sparse-attention transformer (params not isolated in launch coverage; weights on HF post-launch).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. Many launch rows are MiniMax-infrastructure + agent-scaffolding runs — independent replication pending per launch coverage.

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax launch; mid-pack vs frontier 78–90 class)
- MCP Atlas: **74.2%** (MiniMax)
- BrowseComp: **83.5** (MiniMax; claimed > Opus 4.7's 79.3)
- Claw-Eval: **top spot claimed** (MiniMax — end-to-end autonomous agent; no numeric score isolated)
- τ²-Bench Telecom: **88.9** (AA via OpenRouter)
- GDPval-AA: **40.2%** (AA — percent metric, not Elo; different scale from Elo tables)
- AA Agentic Index: **30.8** (AA via OpenRouter)
- OSWorld / Toolathlon / Tau3: no verified public score found
- AA Terminal-Bench Hard: **42.4 / 42.0** (AA / SWEN)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (Epoch via themodelbeat) / **92.9%** (AA) / **93.0%** (SWEN) — range across evaluators
- Humanity's Last Exam: **39.0%** (Epoch; improved from 37.1 on 2026-08-06) / **37.0%** (SWEN)
- AA Intelligence Index: **29.6** (OpenRouter/AA listing) / **45.4** (SWEN) — large evaluator/version spread; cite both
- CritPt: **3.7%** (AA — very low)
- SciCode: **45.4 / 47.1 / 45.0** (themodelbeat / AA / SWEN)
- AA-Omniscience accuracy: **16.7%** (non-hallucination 81.6%) (AA)
- IFBench: **82.9–83.0** (AA/SWEN)
- AA-LCR: **74.0** (SWEN) / **83.0** (AA) — spread
- ARC-AGI / FrontierMath: no verified public score found

Coding:

- SWE-Bench Pro: **59.0%** (MiniMax; beats GPT-5.5 & Gemini 3.1 Pro, approaches Opus 4.7 — vendor claim)
- Terminal-Bench 2.1: **66.0%** (see agent row)
- SWE-fficiency: **34.8%** (MiniMax)
- KernelBench Hard: **28.8%** (MiniMax)
- AA Coding Index: **58.6** (AA)
- LiveBench Coding: **68.2** (SWEN/LiveBench)
- DeepSWE / SWE-bench Verified: no verified public score found for M3

Long context:

- 1M via MSA (efficiency story strong: 1/20 compute at 1M); **AA-LCR 74–83** as long-context proxy (spread above)
- MRCR / GraphWalks: no verified public score found

Multimodal:

- **Native image + video input** (first open-weight to combine coding frontier + 1M + native multimodal — vendor framing)
- OmniDocBench: claimed > Gemini 3.1 Pro (no numeric score isolated)
- SVG-Bench: claimed > Opus 4.7 (no numeric score isolated)
- WebDev Arena: **1528** (Epoch/themodelbeat); LMArena Elo: **1443** (SWEN)
- MMMU / CharXiv: no verified public score found for M3

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas 74.2, BrowseComp 83.5, τ²-Telecom 88.9, Claw-Eval #1 claim; capped hard by TB2.1 66.0 (mid), AA Agentic Index 30.8, GDPval 40.2% (not Elo-class), missing OSWorld/Toolathlon/Tau3.
- **Reasoning: 82/100.** GPQA 90.9–93 solid; capped by HLE 37–39, CritPt 3.7 (very weak), AA Intelligence Index 29.6–45.4 spread (well below Sol/Fable 57–60+), Omniscience 16.7% accuracy.
- **Context window: 90/100.** 1M documented with MSA efficiency (guaranteed ≥512K); AA-LCR 74–83 mid-strong but no MRCR ≥98% row → 90 (not 95).
- **Multimodal: 90/100.** **Native text+image+video in** (audio not mentioned → not 95); OmniDocBench/SVG-Bench claims + WebDev Arena 1528; no MMMU row → 90.
- **Coding: 80/100.** SWE-Pro 59.0 (solid, not top), TB2.1 66.0 (clearly mid), SWE-fficiency 34.8, KernelBench 28.8, AA Coding Index 58.6, LiveBench Coding 68.2 — good open-weight coding, not frontier-terminal class.
- **Cost efficiency: 98/100.** $0.30/$1.20 list (hosts to $0.23/$0.96), blended ~$0.06 cache, token plans down to ~$0.012/1M effective on Ultra, open weights — extreme value.
- **Overall Score: 84/100.** Mean of five quality dims (80+82+90+90+80)/5 = 84.4 → 84. Best-fit: cheap native video/image long-context agent and coding workloads where TB2.1 isn't the bottleneck; not the pick for HLE/CritPt-grade science or terminal-SOTA coding.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (MiniMax M3 blog, themodelbeat, felloai, OpenRouter, llm-stats, SWEN.AI); scores are normalized 1–100 interpretations, not official vendor scores; several headline rows are vendor-run with agent scaffolding.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
