# Kimi K2.7 Code HighSpeed — findings by Fledge Alpha

- Source: Moonshot AI (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Moonshot's June 12/16, 2026 same-weights high-throughput SKU of Kimi K2.7 Code, priced exactly 2× the standard tier for ~180–260 tok/s coding throughput.
- **Provider / access:** Kimi API (`kimi-k2.7-code-highspeed`), platform.kimi.ai; Modified MIT open weights inherited from K2.7 Code.
- **Release / knowledge:** 2026-06-12 (HighSpeed SKU); updated 2026-08-12 docs.
- **IDs:** `moonshotai/kimi-k2.7-code-highspeed`
- **Context window:** 262,144 tokens.
- **Modalities:** Vision-capable (MoonViT 400M) with text output; always-on thinking mode.
- **Pricing (as of 2026-10-02):** $1.90/M in, $0.38/M cache, $8/M out — exactly 2× the K2.7 Code tier. Standard K2.7 Code: $0.95/$0.19/$4 with the same weights and benchmark profile.
- **Architecture:** K2.7 Code = 1T-MoE/32B-active tuning on the K2.6 backbone; HighSpeed is a serving SKU, not a reasoning-effort tier.

### Raw benchmarks found

HighSpeed shares K2.7 Code's benchmark profile — six Moonshot-administered suites, no independent run yet published at launch coverage:

Agent / tool use:

- MCP Atlas: **76.0** (vs K2.6 69.4)
- MCP Mark Verified: **81.1** (vs K2.6 72.8; Opus 4.8 76.4)
- Kimi Claw 24/7 Bench: **46.9** (vs K2.6 42.9)

Reasoning / knowledge:

- No independent GPQA/HLE/MMLU row published for K2.7 Code / HighSpeed — vendor coverage on Moonshot's proprietary tables only.

Coding:

- Kimi Code Bench v2: **62.0** (vs K2.6 50.9; GPT-5.5 in Codex xhigh 69.0; Opus 4.8 xhigh 67.4)
- Program Bench: **53.6** (vs K2.6 48.3)
- MLS Bench Lite: **35.1** (vs K2.6 26.7; GPT-5.5 35.5; Opus 4.8 42.8)

Multimodal: MoonViT enabled but no published MMMU-class value for K2.7 Code HighSpeed.

Long context: 256K window; no MRCR published.

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP Atlas 76 and MCP Mark 81.1 improve on K2.6; no verified Terminal-Bench row.
- **Reasoning: 66/100.** Index-style coverage is missing — vendor-published numbers but no independently verified reasoning row for the same checkpoint.
- **Context window: 62/100.** 256K window, identical to K2.6, well below 1M-class peers.
- **Multimodal: 80/100.** MoonViT 400M presence documented on the same K2.7 stack.
- **Coding: 76/100.** Kimi Code Bench v2 62.0 and MCP Mark Verified 81.1 — solid mid-tier; no SWE-bench Verified/Pro row, so the high-confidence score is capped.
- **Cost efficiency: 70/100.** $1.90/$8 is exactly 2× the standard K2.7 Code tier for the same numbers; justifiable only when throughput blocks the loop.
- **Overall Score: 72/100.** Mean of the five quality dims. Recommend defaulting to the same-price grade K2.7 Code or another cataloged option; reach for HighSpeed only when a human coding session is latency-blocked.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Moonshot forum post + pricing page, benchr, modelbeats, commandcode, modelbenchmark.io); scores are normalized 1–100 interpretations, not official vendor scores. Note that all K2.7 Code / HighSpeed agentic scores are vendor-run — no independent SWE-bench/LiveBench/GPQA row exists as of 2026-10-02.
- Future sources: add a new file next to this one using the same headings.
