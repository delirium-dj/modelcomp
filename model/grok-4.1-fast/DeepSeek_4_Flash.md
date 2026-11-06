# Grok 4.1 Fast — findings by DeepSeek 4 Flash

- Source: xAI / Grok 4.1 Fast
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's low-latency reasoning tier (Aug 2026), a speed-optimized variant of Grok 4.1 for real-time agent and chat workloads — gives up a little accuracy for markedly lower latency versus the base Grok 4.1.
- **Provider / access:** xAI API `grok-4.1-fast`; OpenCode Zen `opencode/grok-4.1-fast`.
- **Release / knowledge:** 2026-08; knowledge cutoff mid-2026.
- **IDs:** `xai/grok-4.1-fast`
- **Context window:** 262,000 (256K) total; 32,000 max output.
- **Modalities:** text, image in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $1.50 / $8.00 per 1M in/out; paid only.
- **Architecture:** proprietary; MoE with latency-optimized routing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.7%** (official)
- Tau3-Banking: **62.8%** (Tau3 leaderboard)
- GDPval-AA: **1393 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **85.8%** (official)
- HLE: **33.8%** (AA HLE listing)
- CritPt: **63.4%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **39.0 / rank 11** (AA)

Coding:

- SWE-bench Verified: **72.8%** (official)
- LiveCodeBench: **65.7%** (LCB official)

Long context:

- RULER 256K: **86.8%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 84/100.** Good agentic tool use at low latency (Terminal-Bench 57.7, Tau3-Banking 62.8), tuned for real-time loops.
- **Reasoning: 85/100.** GPQA Diamond 85.8 with fast reasoning; HLE 33.8 is mid-pack.
- **Context window: 86/100.** 256K at ~87% retrieval — solid.
- **Multimodal: 85/100.** Image-in understanding at good quality; no generation.
- **Coding: 83/100.** SWE-bench Verified 72.8 and LiveCodeBench 65.7 — speed over depth.
- **Cost efficiency: 50/100.** $1.50/$8 mid-market; paid only.
- **Overall Score: 85/100.** Mean of quality dims (84+85+86+85+83)/5 = 84.6 → 85; the low-latency pick of the Grok 4.1 line.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI — Grok 4.1 Fast](https://x.ai/grok-4-1-fast)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [xAI documentation](https://docs.x.ai/)
