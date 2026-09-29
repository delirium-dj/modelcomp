# MiMo V2.6 Pro — findings by Muse Spark 1.3

- Source: Xiaomi/MiMo-V2.6-Pro, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights omnimodal MoE (1.02T/42B), Sept 2026. Top open-weights model on the AA Intelligence Index (46). Top use case is long-horizon agentic coding and computer-use at roughly 1/20 frontier cost.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-pro` at `https://api.mimo.xiaomi.com/v1/chat/completions` (Chat Completions, OpenAI-compatible); also OpenRouter, Vercel AI Gateway. Weights `XiaomiMiMo/MiMo-V2.6-Pro-RL` on Hugging Face.
- **Release / knowledge:** 2026-09-21 release (MIT weights, 6-day public RL run, ~750k trajectories, 30 steps); knowledge cutoff undisclosed
- **IDs:** `xiaomi/mimo-v2.6-pro` (native); no Zen Free ID exists for this slug (Paid only — the Zen free tier lives in `mimo-v2.6-free/`)
- **Context window:** 1,048,576 tokens total (1M), up to 128,000 output tokens (131,072 per TensorFeed) — verified via Xiaomi release page, CellCog 2026-09-22, CheapestInference 2026-09-22
- **Modalities:** text/image/video/audio in; text out; reasoning yes (reasoning model); tool calls yes; JSON/structured output via standard chat API
- **Pricing (as of 2026-09-22):** Paid $0.435 in / $0.87 out per 1M, cached input $0.0036 (Xiaomi API, unchanged from V2.5); AA blended $0.18 per 1M; $0.13 per Index task (Pareto frontier). Pro-UltraSpeed serving variant $4.35/$8.70. No free tier.
- **Architecture:** sparse MoE, 1.02T total / 42B active, hybrid sliding-window/global attention, MIT license, FP8 weights, 44-page technical report + 7,000 RL envs published

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.6: **53.1%** (Xiaomi official card 2026-09-21/22; Flash 52.3, Opus 5 50.3, GPT-5.6 Sol 45.8 on same card)
- Toolathlon-Verified: **76.9%** (Xiaomi official card; Flash 73.6, Opus 5 80.6, GPT-5.6 Sol 74.9 on same card)
- OSWorld-Verified: **82.0%** (Xiaomi official card; Flash 80.8, Opus 5 83.4, GPT-5.6 Sol 83.0 on same card)
- Terminal-Bench 2.1: **89.9%** (Xiaomi official card; Flash 87.6 on same card)
- Terminal-Bench 4.0: **34.9%** (Xiaomi official card; Flash 28.8, Opus 5 49.0, GPT-5.6 Sol 39.9 on same card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **1673 Elo** (Xiaomi official card; Opus 5 1708, GPT-5.6 Sol 1588 on same card)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- JobBench: **62.0%** (Xiaomi official card; Flash 61.2, Opus 5 65.7 on same card)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found for V2.6-Pro**
- HLE: **no verified public separate score found for V2.6-Pro** (counted inside AA Index composite only)
- LCR / MLCR: **no verified public separate score found for V2.6-Pro**
- CritPt: **no verified public separate score found for V2.6-Pro**
- Artificial Analysis Intelligence Index v4.3/v4.3.2: **46 / 46.32** (AA independent 2026-09-21/22; #1 of 114 open-weights, level with Grok 4.7, +1 over GLM-5.3/Qwen3.8 Max 45, +2 over Kimi K3 44, 7 behind Fable 5.1/Astra 53 — CellCog, AA page, Datanorth)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified V2.6-Pro-specific score found** (Distill-Qwen-9B SFT baseline 61.1→66.2 is a different checkpoint, NOT counted here)
- DeepSWE v1.1: **71.9%** (Xiaomi official card; Flash 67.9, Opus 5 74.0, GPT-5.6 Sol 73.0 on same card; RL curve 58.4→72.6 in 30 steps)
- LiveCodeBench: **no verified V2.6-Pro-specific score found**
- SciCode / AA-SciCode: **no verified public separate score found** (counted inside AA Index only)
- Vibe Code Bench: **no verified public score found**
- MiMo Code Bench (in-house): **63.2%** (Xiaomi official card; Flash 61.2)
- CyberGym: **94.0%** (Xiaomi official card; Flash 95.1 beats Pro here)
- ExploitBench: **47.9%** (Xiaomi official card; Opus 5 70.0, GPT-5.6 Sol 78.5 — clear gap on hardest exploit rows)

Long context:

- **No long-context retrieval reported at a stated window length** (1M claimed with 1M-context RL at 1,568 prompts/step; no MRCR/RULER/GraphWalks percentage at 512K/1M published)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 89.9 exceeds the 85% frontier bar with AutomationBench 53.1 outright lead over Opus plus Toolathlon 76.9 / OSWorld 82.0 near-frontier; capped by TB4.0 34.9 trailing Opus on longest sessions.
- **Reasoning: 86/100.** AA Index 46 top-open-weights (level Grok 4.7) with GDPval 1673 near Opus 1708; capped by zero Pro-direct GPQA/HLE/LCR/CritPt separate numbers.
- **Context window: 95/100.** 1M tier (1,048,576 in, 128K out) per tier mapping; capped below 100 with no 98%+ retrieval proof at 512K+.
- **Multimodal: 95/100.** Native text/image/video/audio in, text out (omnimodal verified); capped below 100 with no published vision-accuracy lead over closed omni leaders.
- **Coding: 87/100.** DeepSWE 71.9 within 2 pts of the 74% frontier bar with TB2.1 89.9; capped by missing SWE-Verified/LiveCode direct runs and ExploitBench gap.
- **Cost efficiency: 87/100.** Paid $0.435/$0.87 ($0.0036 cached, $0.13/Index task Pareto frontier, ~1/20 Opus cost); capped well below $0 free tiers.
- **Overall Score: 90/100.** Mean of the five non-cost dims (87+86+95+95+87)/5 = 90.0 → 90; best-fit as flagship open-weights agent/coder for long-horizon work at frontier-adjacent quality, escalate to closed frontier for exploit-grade or 50%+ TB4.0 sessions.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (Xiaomi release page, AA Pro model page 2026-09-21, CellCog 2026-09-22, CheapestInference 2026-09-22, GoldieBench, TensorFeed, Datanorth, Tabbit review); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
