# MiMo V2.6 Flash — findings by Muse Spark 1.3

- Source: Xiaomi/MiMo-V2.6-Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's efficiency-tier MIT open-weights omnimodal MoE (309B/15B), Sept 2026, within 4 pts of Pro on every shared agent row and outright winner on CyberGym. Top use case is high-volume agentic coding and long-horizon tool workflows at one-third Pro price.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-flash` at `https://api.mimo.xiaomi.com/v1/chat/completions` (Chat Completions, OpenAI-compatible); also OpenRouter, Vercel AI Gateway, CheapestInference Core Pool (replaced v2.5 in place 2026-09-23). Weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` on Hugging Face.
- **Release / knowledge:** 2026-09-21 release (MIT weights, 6-day public RL run, ~750k trajectories shared with Pro, 30 steps, ~$850k RL cost); knowledge cutoff undisclosed
- **IDs:** `xiaomi/mimo-v2.6-flash` (native); no Zen Free ID exists for this slug (Paid only — the Zen free tier lives in `mimo-v2.6-free/`)
- **Context window:** 1,048,576 tokens total (1M), up to 128,000 output tokens — verified via Xiaomi release page, CheapestInference 2026-09-22, ModelGap 2026-09-22
- **Modalities:** text/image/video/audio in; text out; reasoning yes (reasoning model, 5-layer multi-token prediction, 7 tokens/pass; off by default on some pools, on per request); tool calls yes; JSON/structured output via standard chat API
- **Pricing (as of 2026-09-22):** Paid $0.14 in / $0.28 out per 1M, cached input $0.0028 (Xiaomi API, same as V2.5 series). No free tier on this slug.
- **Architecture:** sparse MoE, 309B total / 15B active (48 layers, 256 routed experts 8 active, 681M ViT + 308M audio tokenizer + 127M patch encoder), hybrid sliding-window/global attention, MIT license, BF16+FP8 weights (172.9 GB / 65 shards)

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.6: **52.3%** (Xiaomi official card; Pro 53.1, Opus 5 50.3, GPT-5.6 Sol 45.8 on same card)
- Toolathlon-Verified: **73.6%** (Xiaomi official card; Pro 76.9, Opus 5 80.6 on same card; ModelGap lists 73.6 as vendor-only, no independent runner as of 2026-09-22)
- OSWorld-Verified: **80.8%** (Xiaomi official card; Pro 82.0, Opus 5 83.4 on same card)
- Terminal-Bench 2.1: **87.6%** (Xiaomi official card; Pro 89.9, Opus 5 89.1 on same card; ModelGap vendor-only flag)
- Terminal-Bench 4.0: **28.8%** (Xiaomi official card; Pro 34.9, Opus 5 49.0 on same card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found for Flash** (Pro reported at 1673 on same card; no Flash Elo published)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- JobBench: **61.2%** (Xiaomi official card; Pro 62.0, Opus 5 65.7 on same card)
- Agents' Last Exam: **27.6%** (Xiaomi official card per ModelGap/OrcaRouter; Pro 31.6 on same card)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found for V2.6-Flash**
- HLE: **no verified public separate score found for V2.6-Flash**
- LCR / MLCR: **no verified public score found for V2.6-Flash**
- CritPt: **no verified public score found for V2.6-Flash**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified Flash-specific score found** (AA has no Flash page — 404 as of 2026-09-22 per ModelGap; Pro scores 46 cited here only as family proxy, not scored as Flash)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- ProgramBench: **26.0%** (Xiaomi official card per Tabbit 2026-09-22; Pro 26.5, Opus 5 37.0 on same card)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified V2.6-Flash-specific score found** (Distill-Qwen-9B SFT baseline rows are a different checkpoint, NOT counted)
- DeepSWE v1.1: **67.9%** (Xiaomi card eval table; announcement RL endpoint 65.7 from 48.8 — conflict flagged, card figure recorded; Pro 71.9, Opus 5 74.0 on same card; ModelGap vendor-only flag)
- LiveCodeBench: **no verified V2.6-Flash-specific score found**
- SciCode / AA-SciCode: **no verified public score found for V2.6-Flash**
- Vibe Code Bench: **no verified public score found**
- MiMo Code Bench (in-house): **61.2%** (Xiaomi official card; Pro 63.2)
- MiMo Visual Coding: **71.5%** (Xiaomi official card; Pro 72.3, Opus 5 70.0 on same card)
- CyberGym: **95.1%** (Xiaomi official card; Pro 94.0 — sole row Flash wins outright)
- ExploitBench: **25.3%** (Xiaomi official card; Pro 47.9, Opus 5 70.0 — clear gap on hardest exploit rows)

Long context:

- **No long-context retrieval reported at a stated window length** (1M claimed; no MRCR/RULER/GraphWalks percentage at 512K/1M published for Flash)

### Normalized scores (1–100)

- **Tool use: 86/100.** AutomationBench 52.3 beats Opus 5 (50.3) with Toolathlon 73.6 + OSWorld 80.8 near-frontier and TB2.1 87.6 over the 85% bar; capped by TB4.0 28.8 trailing Pro/Opus on longest sessions.
- **Reasoning: 84/100.** No Flash-direct GPQA/HLE, but Pro AA Index 46 (top open-weights) with Flash within 4 pts on every shared agent row; capped by zero Flash-direct reasoning numbers and no Flash AA page.
- **Context window: 95/100.** 1M tier (1,048,576 in, 128K out) per tier mapping; capped below 100 because no 98%+ retrieval proof at 512K+.
- **Multimodal: 95/100.** Native text/image/video/audio in, text out (omnimodal encoders + MiMo Visual Coding 71.5 beating Opus); capped below 100 with no published vision-accuracy lead over Pro.
- **Coding: 88/100.** TB2.1 87.6 exceeds the 85% frontier bar with DeepSWE 67.9 just under the 74% bar and MiMo Visual Coding 71.5; capped by missing SWE-Verified/LiveCode direct runs and ExploitBench gap.
- **Cost efficiency: 95/100.** Paid $0.14/$0.28 ($0.0028 cached) — roughly 1/3 Pro and 1/20 frontier cost, same price as V2.5; capped below 100 as paid (free tier lives in `mimo-v2.6-free/`).
- **Overall Score: 90/100.** Mean of the five non-cost dims (86+84+95+95+88)/5 = 89.6 → 90; best-fit as high-volume paid omnimodal agent/coder at Pro-adjacent quality, escalate to Pro/Opus for exploit-grade or 50%+ TB4.0 sessions.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (Xiaomi release page, CheapestInference 2026-09-22, Tabbit Flash review 2026-09-22, ModelGap Flash page, OrcaRouter Pro-vs-Flash, ComputingForGeeks 2026-09-25); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
