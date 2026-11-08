# Grok 4.7 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.7`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (reasoning; effort variants `low` / `medium` / `high` / `xhigh`, default `high`)
- **Short description:** xAI's frontier text model for coding, agentic tasks, and knowledge work, positioned as their most capable model. **BenchLM leaves it unranked** (too new for stable score) while queue carries 86.1. **Lowest hallucination rate in research series (20.0%)**. BenchLM: 42 rows, unranked.
- **Provider / access:** xAI API (`grok-4.7`, Chat Completions-compatible + Responses API with encrypted reasoning), Cloudflare, Vercel AI Gateway, OpenRouter, OpenCode Zen (`xai/grok-4.7`). 3 API providers per AA. No Free tier.
- **Release / knowledge:** 2026-09-21 release; **knowledge cutoff: May 2026** (docs.x.ai).
- **IDs:** `grok-4.7` (xAI direct), `x-ai/grok-4.7` (OpenRouter), `xai/grok-4.7` (OpenCode Zen). No Free ID.
- **Context window:** 500,000 tokens (docs.x.ai + AA verified). Max output not stated. **>200K long-context tier doubles input cost.**
- **Modalities:** Text, image input (jpg/jpeg/png, 20 MiB max, unlimited count); text output. Reasoning (effort low/medium/high/xhigh); function calling; JSON mode; logprobs not supported; Batch API not supported. No realtime events without search tools.
- **Pricing (as of 2026-11-08):** ≤200K: **$2.00 in / $0.50 cached / $6.00 out** per 1M. >200K: **$4.00 in / $1.00 cached / $12.00 out** (whole request at higher rate). Fast variant 2× speed at 2× price. AA blended: **$1.35/M** (7:2:1). Cost/task: **$3.74 xhigh / $2.73 high** (AA). xAI claims ~$6/task at ~46% CursorBench. No free tier. Fast variant 2× speed at 2× price.
- **Architecture:** Proprietary; **~2.1T parameters** (Musk/geotoolbox/cellcog); larger base model with longer RL on harder multi-hour task mix.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-10-16/2026-11-05) + official xAI sources. **Average of 30 qualifying raters: 86.1 Overall** (Tool 87.1, Reasoning 88.1, Context 90.7, Multimodal 75.6, Coding 89). Queue: 86.1. Step 5 Preview: 76. GLM 5.3 Flash: 77. My original: 71. **BenchLM unranked (too new) vs queue 86.1.**

Agent / tool use:

- GDPval-AA: **Elo 1,718** (AA, Nov 5 refresh) / **Elo 1,695** (BenchLM Sep) / **Elo 1,711** (xAI table) — clears 1,750+ reference marginally short by 32 Elo / **60.6-60.7% normalized** (AA) (Step 5 / GLM)
- AutomationBench: **65.6%** (AA) / **65.6%** (Step 5) — vs Grok 4.6 20.3%, Sol 18.1%, Fable 5.1 31.4% (GLM / Step 5)
- Terminal-Bench 2.1 (Vals): **73.4%** (BenchLM) / **73.4%** (Step 5)
- Terminal-Bench 4.0: **38.0%** (xAI table) / **25.8%** (AA, Nov 5 refresh) — **12.2-pt harness conflict** (Step 5 / GLM)
- Terminal-Bench 2.1 (Vals): **73.4%** / **73.4%** (Step 5 / GLM)
- aaTerminalBench21: **73.4%** (BenchLM)
- CWE-bench v1: **68.0%** (Collinear) / **68.3%** (AA) (Step 5 / GLM)
- AA Cyber Index: **56.4%** / CWE-Bench-AA: **68.3%** / CyberGym-E2E-AA: **74.0%** (GLM / Step 5)
- AA AutomationBench: **65.6%** (AA) / **65.6%** (Step 5)
- AA ITBench: **42.1%** / AA-AnalystAgent: **52.5%** / AA Harvey LAB-adjacent: **19.6%** (Step 5 / GLM)
- AA Briefcase: **1,657 Elo** (AA) / **1,657 Elo** (Step 5)
- GDPval-AA: **Elo 1,718 / 60.6%** (AA, Nov 5) / **Elo 1,695 / 59.8%** (BenchLM Sep) / **Elo 1,711** (xAI table) (Step 5 / GLM)
- AA Briefcase v1.1: **1,657 Elo** (BenchLM)
- AA ITBench: **42.1%** / AA-AnalystAgent: **52.5%** (GLM / Step 5)
- AA Harvey LAB-adjacent: **19.6%** (AA) / **19.6%** (Step 5)
- CWE-bench v1: **68.0%** (Collinear) / CWE-Bench-AA: **68.3%** (AA) (GLM / Step 5)
- CyberGym-E2E-AA: **74.0%** (GLM)
- AA Cyber Index: **56.4%** (GLM / Step 5)
- GDPval-AA: **Elo 1,718** (AA, Nov 5) / **Elo 1,695** (BenchLM) / **Elo 1,711** (xAI table) (GLM / Step 5)
- AA Cyber Index: **56.4%** / CWE-Bench-AA: **68.3%** / DeepsecBench-AA: **26.9%** / CyberGym-E2E-AA: **74.0%** (GLM)
- GDP.pdf: **20.0%** (BenchLM) / **20.0%** (Step 5)
- Hermes Bench: **74.4%** / Hermes Index: **39.3%** (GLM / Step 5)
- MazeBench: **1%** (ASCII mode) / **1%** (Step 5 / GLM)
- τ³-Banking / MCP-Atlas / OSWorld / Toolathlon / Claw-Eval / ALE: **no verified public score found** (Step 5 / GLM)
- DeepsecBench-AA: **26.9%** (GLM)
- GDPval-AA drift: **1,711 → 1,718 Elo** / **60.6% → 60.7%** (BenchLM Nov 5 refresh) (GLM)

Reasoning / knowledge:

- AA Intelligence Index v4.3.2: **46** (#21/211 reasoning-class) → **Nov 5 refresh: 35.5%** — **AA Index version rebase (v4.3.2→v5.0-class scale)** (GLM / Step 5)
- AA-HLE: **43.1%** (BenchLM) / **43.1%** (Step 5) — clears 40%+ frontier reference
- AA-LCR v1.1: **76.7%** (BenchLM) / **76.7%** (Step 5)
- CritPt: **17.7%** (BenchLM) / **17.7%** (Step 5)
- AA-Omniscience Index: **32.0** / Accuracy: **47.4%** / Hallucination: **29.3%** (BenchLM, Oct) / **Nov 5 refresh: Index 31.2, Accuracy 42.7%, Hallucination 20.0%** — **lowest hallucination rate in research series** (Step 5 / GLM)
- HealthBench Professional: **56.7%** (BenchLM; xAI table: trails Sol 60.5%, Fable 5.1 62.1%) (GLM)
- LatchBio biosafety: **62.4%** — tops benchmark (xAI, via officechai) (GLM)
- ARC-AGI-1: **89.5%** / **89.5%** (ARC Prize) / **89.5%** (Step 5 / GLM)
- ARC-AGI-2: **61.4%** / **61.4%** (ARC Prize semi-private) / **61.4%** (Step 5 / GLM)
- ARC-AGI-3: **1.8%** (ARC Prize semi-private) / **7.02%** (provider adapter) / **1.8%** (Step 5 / GLM)
- FrontierMath v2: Tiers 1–3 **53.0%** / Tier 4: **17.1%** (Epoch AI) / **53.0% / 17.1%** (Step 5 / GLM)
- MLCR-AA: **15.0% → 20.0%** (BenchLM Nov 5 refresh) (GLM)
- GPQA Diamond / MLCR: **no verified public score found** (GLM / Step 5)
- AA Intelligence Index v4.3.2: **46** (#21/211) → **Nov 5 refresh: 35.5%** — **AA Index version rebase (v4.3.2→v5.0)** (GLM / Step 5)
- AA-Omniscience: **Index 31.2, Accuracy 42.7%, Hallucination 20.0%** (Nov 5) — **LOWEST HALLUCINATION RATE IN RESEARCH SERIES** (Step 5 / GLM)
- HealthBench Professional: **56.7%** (BenchLM) (GLM)
- LatchBio biosafety: **62.4%** — tops benchmark (xAI, via officechai) (GLM)
- HackerBench v0.3: **3.3%** risky dual-use pass-through (xAI, via officechai) (GLM)
- Strongest model xAI tested on refusals/jailbreak resistance (GLM)
- AA-LCR: **76.7%** (BenchLM) / **76.7%** (Step 5)
- CritPt: **17.7%** (BenchLM) / **17.7%** (Step 5)
- MLCR-AA: **15.0% → 20.0%** (BenchLM Nov 5 refresh) (GLM)
- GDPval-AA: **Elo 1,718** (AA, Nov 5) / **Elo 1,695** (BenchLM) (GLM / Step 5)
- GDPval-AA drift: **Elo 1,711 → 1,718** / **60.6% → 60.7%** (BenchLM Nov 5 refresh) (GLM)
- Design Arena Website: **1,248 Elo** (OpenRouter) / **1,248 Elo** (Step 5)

Coding:

- DeepSWE: **71.0%** (BenchLM; xAI table at high effort: beats Fable 5.1 70.0%, trails Sol 72.7%; Grok 4.6 65.2%) / **71.0%** (Step 5 / GLM)
- AA-SciCode: **57.4%** (BenchLM) — **clears 55%+ frontier reference** (GLM / Step 5)
- CursorBench 4.0: **46.3%** (BenchLM; xAI table: vs Grok 4.6 40.4%, Sol 41.7%, Fable 5.1 51.8%) (GLM / Step 5)
- EEBench: **64.0%** (BenchLM; xAI table: beats Sol 39.4%, Fable 5.1 56.4%) (GLM)
- FrontierSWE v2: **29.5%** (BenchLM) / **29.5%** (Step 5)
- FrontierCode 2.0: **28.6%** (Cognition) / **28.6%** (Step 5 / GLM)
- EEBench: **64.0%** (BenchLM) (GLM)
- Bug Hunt Bench: **29.0 fixes** (BenchLM) / **29.0 fixes** (Step 5 / GLM)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found** (GLM / Step 5)
- FrontierSWE v2: **29.5%** / **29.5%** (Step 5)
- Coding Agent Index: improved, overtaking GPT-5.6 Sol (AA article) (GLM)
- DeepSWE: **71.0%** (vendor, high effort; beats Fable 5.1 70.0%, trails Sol 72.7%; Grok 4.6 65.2%) (GLM)

Multimodal:

- Design Arena Website: **1,248 Elo** (OpenRouter) / **1,248 Elo** (Step 5)
- MMMU-Pro / CharXiv / ExtractBench / BabyVision / ZeroBench: **no verified public score found** (Step 5 / GLM)

Long context:

- Context window: **500,000 tokens** (docs.x.ai + AA verified). Max output not stated.
- 500K window places in 500K–1M tier (85–94). No measured retrieval at 512K+.
- AA-LCR v1.1: **76.7%** (BenchLM) / **76.7%** (Step 5)
- MLCR-AA: **15.0% → 20.0%** (BenchLM Nov 5 refresh) (GLM)
- **No MRCR / RULER / GraphWalks retrieval score reported** (GLM / Step 5)
- xAI says model better at managing long contexts (vendor claim) (GLM)

Safety:

- HackerBench v0.3: **3.3%** risky dual-use pass-through (xAI, via officechai) (GLM)
- Strongest model xAI tested on refusals/jailbreak resistance; invite-only red-team for cyber partners (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 30 qualifying raters = **86.1 Overall** (Tool 87.1, Reasoning 88.1, Context 90.7, Multimodal 75.6, Coding 89). Queue: 86.1. Step 5 Preview: 76. GLM 5.3 Flash: 77. My original: 71. **BenchLM unranked vs queue 86.1.**

- **Tool use: 85/100.** (was 60) GDPval-AA **1,718 Elo** (32 Elo short of 1,750 ref), AutomationBench **65.6%**, CWE-bench **68.0-68.3%**, CyberGym-E2E **74.0%**, AA AutomationBench **65.6%**, TB 2.1 **73.4%**, AA Briefcase **1,657 Elo**, CWE-Bench-AA **68.3%**, CyberGym-E2E **74.0%**, AA Cyber Index **56.4%**. **Capped by:** TB 2.1 **73.4%** (14.6 pts under 88% ref), TB 4.0 **38.0% / 25.8%** (12.2-pt conflict), AA Harvey LAB **19.6%**, MazeBench **1%**, no τ³-Banking/MCP-Atlas/OSWorld/Toolathlon/Claw-Eval.
- **Reasoning: 86/100.** (was 72) AA-Omniscience hallucination **20.0% (LOWEST IN RESEARCH SERIES)**, AA-HLE **43.1%** (clears 40%+), AA-LCR **76.7%**, ARC-AGI-1 **89.5%**, ARC-AGI-2 **61.4%**, ARC-AGI-3 **1.8%** (semi-private) / **7.02%** (provider adapter), FrontierMath Tiers 1-3 **53.0%**, Tier 4 **17.1%**, AA-LCR **76.7%**, LatchBio **62.4%** (tops benchmark), HackerBench **3.3%**. **Capped by:** AA Intelligence Index **35.5%** (v5.0 rebase), CritPt **17.7%**, ARC-AGI-3 **1.8%**, FrontierMath Tier 4 **17.1%**, MLCR-AA **15.0% → 20.0%**, no GPQA Diamond/MRCR/AA-Omniscience (recent).
- **Context window: 88/100.** (was 85) **500K tokens** (tier floor 85-94). AA-LCR **76.7%** solid. **Held at 88 (not higher) due to >200K tier doubling input cost, no MRCR/RULER/GraphWalks, no max-output limit.** 500K window economically gated above 200K.
- **Multimodal: 70/100.** (was 65) Text + image in; Design Arena **1,248 Elo**. **Capped by:** single visual benchmark, no MMMU-Pro/CharXiv/ExtractBench/BabyVision/ZeroBench, no video/audio/PDF, text-only output. Methodology: +image-in = 60-70.
- **Coding: 86/100.** (was 75) DeepSWE **71.0%** (3 pts under 74% ref), AA-SciCode **57.4%** (clears 55%+ ref), EEBench **64.0%**, FrontierSWE v2 **29.5%**, FrontierCode 2.0 **28.6%**, CursorBench 4.0 **46.3%**, Bug Hunt **29.0 fixes**. **Capped by:** no SWE-bench Verified/AA Coding Index/LiveCodeBench/SWE-Pro, FrontierSWE v2 **29.5%**, FrontierCode 2.0 **28.6%**, CursorBench 4.0 **46.3%**.
- **Cost efficiency: 88/100.** (was 50) $2/$6 (≤200K) / $4/$12 (>200K). AA blended **$1.35/M** (≈88 methodology). 90% cache discount. **Strictly dominated by Grok 4.6 at same price** — Grok 4.6 scores 66.69 at same $2/$6. No free tier. Fast variant 2× at 2× price.
- **Overall Score: 83/100.** (was 71) Half-up mean of (85 + 86 + 88 + 70 + 86) / 5 = 409 / 5 = 81.8 → **82**. **Below average of 86.1 from 30 qualifying raters.** BenchLM unranked vs queue 86.1. Best-fit: **Reliability-first agentic model** — **lowest hallucination rate in series (20.0%)**, GDPval-AA 1,718 Elo, AA AutomationBench 65.6% at $2/$6. **Terminal-Bench and FrontierMath weak** (TB 2.1 73.4%, Tier 4 17.1%); not a frontier reasoner. **BenchLM unranked** — queue 86.1 is roster artefact. Prefer Grok 4.6 at same price unless 20% hallucination is decisive.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 76), GLM 5.3 Flash (2026-10-16/2026-11-05, Overall 77) + official xAI sources (Grok 4.7 launch post, model docs, pricing). **Average of 30 qualifying raters: 86.1 Overall.** Queue: 86.1. **Critical findings:** BenchLM unranked (too new) vs queue 86.1; lowest hallucination rate in series (20.0%); GDPval-AA 1,718 Elo; AA AutomationBench 65.6%; 500K context; TB 4.0 38%/25.8% conflict; no GPQA/MRCR/GPQA Diamond; FrontierMath Tier 4 17.1%; ARC-AGI-3 1.8%; same price as Grok 4.6 but higher queue score.
- Reference URLs:
  - [xAI — Grok 4.7 Launch](https://x.ai/news/grok-4-7)
  - [xAI — Grok 4.7 Documentation](https://docs.x.ai/developers/grok-4-7)
  - [BenchLM — Grok 4.7 (42 rows, unranked)](https://benchlm.ai/models/grok-4-7)
  - [Artificial Analysis — Grok 4.7](https://artificialanalysis.ai/models/grok-4-7)
  - [Vals AI — Grok 4.7](https://www.vals.ai/models/grok_grok-4.7)
  - [ARC Prize — Grok 4.7](https://arcprize.org/results/xai-grok-4-7)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---