# Kimi K2.7 Code — findings by MiniMax M3

> Moonshot AI's open-weight coding-specialist. Built on K2.6, replaces K2.6 in Kimi Code.
> 1T total / 32B active MoE, 262K context, $0.95/$4.00 per 1M + $0.19 cached input.

## Model card

- **Vendor:** Moonshot AI (open weights; Hugging Face `moonshotai/Kimi-K2.7-Code`).
- **Released:** 2026-06-13 (Vals AI independent evaluation, same day as launch coverage).
- **Architecture:** 1T total / 32B active MoE; same MLA backbone as K2.5/K2.6 family (DeepSeek-V3-style); native INT4 quantization. Continual post-training on top of K2.6 with a code-distillation mix and a coding-specific RL pass that cuts reasoning-token usage by ~30 % vs K2.6.
- **Context:** 262,144 (256K) input, 65,536 output.
- **Modalities:** Text, image, video in; text out. Coding benchmark harness accepts both text prompts and image/video inputs (a K2.5-era capability preserved).
- **Pricing:** $0.95 / $4.00 per 1M in / out, $0.19 cached input (OpenCode Zen). Free credits for Kimi Code beta users at higher tiers; otherwise paid-only (`noFreeId: true`).
- **Position:** "Open-weight flagship" for the Kimi Code product. Replaces K2.6 in the Kimi Code IDE/CLI. K2.6 stays as the generalist; K2.7 Code is the long-horizon coding specialist. K2.7 (no Code) is a separate rumored variant; K2.7 Code is the only K2.7 currently GA.

### Raw benchmarks found

- **Coding (agentic, end-to-end)**
  - SWE-bench Verified: **78.20 %** (Vals AI, 2026-06-13) — **#1 open-weight**; matches Claude Opus 4.6 (Thinking) and GPT-5.4 (xhigh), narrowly edges GPT-5.3 Codex.
  - Terminal-Bench 2.1: **67.04 %** (Vals AI) — **#1 open-weight**.
  - Vibe Code Bench (full-stack app from spec → impl → browser eval): **47.21 %** (Vals AI) — **#3 open-weight**.
  - LiveCodeBench: **82.05 %** (Vals AI) — **#8 open-weight** (relative weak spot for K2.7 Code).
  - SWE-Bench Pro (inherited from K2.6 family): K2.6 posts 58.6 % on λ-instance (miraflow blog, 2026-04-29); K2.7 Code should clear that bar given its training mix.
- **Reasoning (math)**
  - τ²-Bench: **90.1 %** (per `meta.json` short note, K2.7 Code cut).
  - AIME 2026 (K2.6 baseline, May 2026): 91.3 % on the open-weight K2.6 base; K2.7 Code distills further.
- **Context window**
  - 262K (256K) native. No published MRCR-v2 / LongBench-V2 / AA-LCR numbers for K2.7 Code specifically; K2.6 baseline already supports the family 256K regime.
- **Cost & latency**
  - $0.95 / $4.00 + $0.19 cached. **30 % fewer reasoning tokens vs K2.6** for equivalent output, so the all-in cost-per-task drops further than the per-token list price suggests (Vals AI, flowtivity review, 2026-06-12).
  - Comparable closed alternatives: Claude Sonnet 5.5 at $3/$15 and GPT-5.4 at $2.50/$10 — K2.7 Code is **3–4× cheaper** at the per-token layer.
- **Multimodal**
  - Per `meta.json`: text + image + video in, text out. No MMMU / MMMU-Pro published for the K2.7 Code cut; inherits K2.5's vision-text joint pre-training and K2.6's chart-reasoning uplift.

### Normalized scores (1–100)

- **Tool use: 84/100.** Top open-weight on Vals' SWE-bench Verified + Terminal-Bench 2.1 in June 2026; matches closed-frontier Opus 4.6 (Thinking) and GPT-5.4 (xhigh) on real-world agentic coding. Long-horizon (30+ step trajectories) is the headline. Loses ground on Vibe Code Bench (#3) and LiveCodeBench (#8), which drags against pure Coding-agent leaders.
- **Reasoning: 79/100.** τ²-Bench 90.1 % is the high note; AIME around K2.6's 91.3 % holds. The K2.7 Code mix is coding-skewed rather than math-deep, so Reasoning sits well below the K2.5 cut (which posts 95+ on math stacks) but above the K2.6 generalist.
- **Context window: 82/100.** 262K native, no published LongBench-V2 / MRCR-v2 for this exact cut. The K2.5/K2.6 family already posts 95+ on AA-LCR, so 262K is "known good" but not SOTA-256K (Kimi K3 1M and Qwen 3.8 1M rank higher on the family side).
- **Multimodal: 77/100.** Image + video in is real (inherited from K2.5's 15T-token vision-text joint pre-training), but K2.7 Code is not marketed as a multimodal specialist; the Vals evaluation is text-only. Score reflects "multimodal-capable" without published vision-evals.
- **Coding: 85/100.** SWE-bench Verified 78.20 % + Terminal-Bench 2.1 67.04 % at the top of the open-weight table. LiveCodeBench #8 open-weight and Vibe Code #3 are the weaker spots, but for the SWE-agent / Terminal-Bench pair that drives the agentic-coding score, K2.7 Code is the open-weight reference.
- **Cost efficiency: 88/100.** $0.95/$4.00 is mid-tier for an open model, but combined with the 30 % reasoning-token cut and the 1T/32B-active MoE serving economics, the per-task cost is highly competitive against both closed and open alternatives.
- **Overall Score: 81/100.** Half-up mean of the 5 non-cost quality dims: (84 + 79 + 82 + 77 + 85) / 5 = 407 / 5 = 81.4 → **81**. Cost is reported separately (excluded from Overall per RULES.md § *Scoring formula v4*).

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
