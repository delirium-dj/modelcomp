- Source: SpaceXAI/Grok 4.6
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** SpaceXAI's 2026-08-13 successor to Grok 4.5, a 1.5T-parameter model tuned for complex long-horizon agent tasks with improved SFT and RL. Re-entered the frontier tier on the Artificial Analysis index. A distinct model; Grok 4.5 and Grok 4.7 are separate, and Grok Bot is an agent product that calls this model.
- **Provider / access:** Grok Build, Cursor (acquired by SpaceXAI), API, OpenRouter, Vercel, Cloudflare, Amazon Bedrock (overseas regions). First-week double included usage on Cursor and Grok Build. Grok Bot (a 24/7 cloud-computer agent team) calls Grok 4.6.
- **Release / knowledge:** 2026-08-13 Beijing / 2026-08-12 US Eastern (teased 2026-08-05 at SpaceX Q2 earnings); knowledge cutoff: no verified public score found.
- **IDs:** `grok-4.6` family ID as cited. No free Zen ID verified.
- **Context window:** **500,000 tokens** (documented as 50万 / 500K — smaller than DeepSeek V4 Pro's 1M); **four reasoning-effort levels**.
- **Modalities:** **text and image in, text out**; agentic coding, knowledge work, kernel optimisation, web development and CAD, with stronger initial quality on visual/interactive apps. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$2 / 1M input, $6 / 1M output**; **80 TPS** output speed.
- **Architecture:** **1.5 trillion total parameters**; longer supplementary training than 4.5 with regenerated, model-checked training trajectories across reasoning strengths / agent frameworks / task domains; broad agent RL across knowledge work, coding, kernel optimisation, web dev and CAD; trained/served on **NVIDIA GB300 NVL72** with NVLink. Parameter count disclosed, activation count not.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1753 Elo** (above GPT-5.6 Sol's 1728 and Claude Fable 5's 1741; second only to Claude Opus 5)
- AA-Briefcase (private long-horizon knowledge-work agent): **1577 Elo** — second only to Claude Opus 5
- APEX-Agents: **57.5%**, up from 4.5's **47.1%** (Claude Fable 5 Max still leads)
- Harvey LAB (legal): **15.8%**, up from Grok 4.5 High's **12.9%**
- Cost efficiency on AA-Briefcase: ~**53 interaction rounds / 500M input tokens** vs Claude Opus 5 Max's ~103 rounds / 2B tokens
- CursorBench v3.2: **69.9%** (above GPT-5.6 Sol Max 67.2%, below Claude Fable 5 Max 70.5%)
- Known weakness: long-chain agent tasks — understands/frames/starts quickly but **does not close reliably**
- Tau3-Banking / Tau2-Bench / OSWorld / Terminal-Bench 4.x / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61** — tied with GPT-5.6 Sol Max, below Claude Opus 5 (63) and Claude Fable 5 (62), above Kimi K3 (60) and DeepSeek V4 Pro (53)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **65.9%**, up from **54%** (GPT-5.6 Sol 73%, Claude Fable 5 70% — Grok trails)
- Terminal-Bench v3.0: **26%**, up from **15.7%** (GPT-5.6 Sol 34.6%, Claude Fable 5 34.1% — Grok trails)
- CursorBench v3.2 **69.9%** as above
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- 500K-token window with training for long sequences and frequent self-check/verify pauses; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 90/100.** 1753 GDPval-AA v2 and 1577 AA-Briefcase (both second only to Opus 5), APEX-Agents 57.5% and ~4x better token efficiency than Opus 5 Max on Briefcase, plus a mature Grok Bot/Cursor/Build agent ecosystem; capped by the documented unreliable long-chain task closure and no τ-bench/OSWorld figure.
- **Reasoning: 90/100.** AA index 61 (frontier tier, tied with GPT-5.6 Sol Max) with 1.5T params and four effort levels; capped by no GPQA/HLE numbers and trailing Opus 5 / Fable 5 on the index.
- **Context window: 86/100.** A 500K window with strong long-sequence training and self-verification behaviour; capped by being half the 1M class and having no long-context retrieval measurement.
- **Multimodal: 83/100.** Text + image input with notably better initial visual/interactive app quality; capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 87/100.** DeepSWE 65.9% (from 54%), Terminal-Bench v3.0 26% (from 15.7%) and CursorBench 69.9%; capped by trailing GPT-5.6 Sol and Claude Fable 5 on both DeepSWE and Terminal-Bench.
- **Cost efficiency: 90/100.** $2/$6 per 1M at 80 TPS with ~4x fewer tokens/rounds than Opus 5 Max on Briefcase and a first-week double usage allowance. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 90, 90, 86, 83, 87 = 87.2 → 87. Best fit: cost-sensitive long-horizon knowledge-work and coding agents inside the Cursor/Grok Build ecosystem; validate end-to-end task closure before unattended use.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Grok 4.6 article (release, 1.5T params, 500K context, pricing, 80 TPS, full benchmark table with before/after deltas, ecosystem, known weaknesses). Comparison rows measured under other IDs (GPT-5.6 Sol, Claude Fable 5, Claude Opus 5, Kimi K3, DeepSeek V4 Pro, Grok 4.5) are labelled by harness and never merged into Grok 4.6's own rows. Grok Bot is treated as an agent product, not a model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Grok 4.6 — 百度百科 (specs, pricing, full benchmark table, architecture, weaknesses)](https://baike.baidu.com/item/Grok%204.6/68439175)
