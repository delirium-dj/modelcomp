# Grok Build 0.1 — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI)/Grok Build 0.1
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's first model purpose-built for agentic software engineering — the engine behind the terminal-native Grok Build CLI (Rust), tuned for web development, debugging and MCP tool use at high speed and low cost. A cheap fast coder, not a general flagship.
- **Provider / access:** xAI API (`https://api.x.ai/v1`, Chat Completions, public beta) and **OpenCode Zen `opencode/grok-build-0.1`** (ai-sdk openai-compatible, `https://opencode.ai/zen/v1/chat/completions`); also OpenRouter, Vercel AI Gateway, Kilo Code. Function calling and structured outputs confirmed by docs.x.ai.
- **Release / knowledge:** Grok Build CLI launched 2026-05-14; the model hit the xAI API in public beta 2026-05-20 (announcement 2026-05-29). Knowledge cutoff not published.
- **IDs:** `grok-build-0.1` (aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825` per docs.x.ai). **No Free ID exists on OpenCode Zen** — Zen sells it paid at $1.00/$2.00 (verified on the Zen docs pricing table, 2026-09-25).
- **Context window:** 256,000 tokens (docs.x.ai); max completion 230,400 tokens (Kilo model card).
- **Modalities:** text + image in; text out; **always-on reasoning** (cannot be disabled — cost/latency caveat for trivial calls); function calling; structured outputs; native MCP support (`"type": "mcp"` tools).
- **Pricing (as of 2026-09-25):** $1.00 input / $2.00 output / $0.20 cached input per 1M tokens on both the xAI API and OpenCode Zen. (The Grok Build *CLI product* sits behind SuperGrok/X Premium+ subscriptions at $99–299/mo — third-party cost analyses; the API itself is pay-as-you-go.)
- **Architecture:** proprietary; purpose-trained coding/agent model, parameters undisclosed. Note: Artificial Analysis marks its "Grok Build 0.1 0616" snapshot **deprecated** (only the default 10K-input workload keeps updating), and BenchLM excludes the model from its leaderboard for "lacking enough non-generated benchmark coverage".

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **52.1%** (BenchmarkList / Artificial Analysis, 65th pct, rank 65 of 182, verified 2026-07-21)
- Kilo Bench (Terminal-Bench 2.0 harness): **50.6%** completion, average **$30.70** per attempt (Kilo Code official eval)
- GDPval-AA: **1212 Elo** (84th pct, rank 55 of 340, verified 2026-09-02)
- Tau3-Banking: **13.4%** pass@1 (56th pct, rank 77 of 174, 2026-09-02) — field leader GLM-5.3 at 50.3%
- PinchBench (OpenClaw-style agent tasks): **88.9%** average, **#7 of 50** official models (Kilo, 5 runs; best categories Log Analysis 97.0%, CSV Analysis 96.1%)
- AA Agentic Index: **28.9** (Artificial Analysis via modelpricewatch); Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (91st pct, rank 42 of 464, 2026-09-02)
- Humanity's Last Exam: **38.3%** (93rd pct, rank 34 of 466, 2026-09-02)
- Artificial Analysis Intelligence Index: **40.7** (86th pct, rank 58 of 418, BenchmarkList/modelpricewatch) — AA's own page for the deprecated `0616` snapshot shows **27** (v4.3.2); both cited, snapshots differ
- AA-LCR (long-context reasoning): **70.0%** (78th pct, rank 89 of 409)
- AA-Omniscience: **6.4** (modelpricewatch, AA composite); CritPt / MRCR: **no verified public score found**

Coding:

- SWE-bench Verified: **71.40% ±2.02** (Vals AI independent test) — the widely repeated **70.8%** figure originally belongs to predecessor `grok-code-fast-1` on xAI's internal harness; xAI has not published an updated number for grok-build-0.1 itself
- SciCode: **50.2%** accuracy (93rd pct, rank 34 of 458, verified 2026-07-21)
- Benchable independent eval: coding accuracy **95.0%** (90th pct), hallucination/ethics baselines **100%**, instruction following **60.0%** (53rd pct — identified weak spot)
- LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- 256,000-token window (docs.x.ai); AA-LCR **70.0%** at long context; MRCR / RULER / GraphWalks: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 64/100.** Terminal-Bench 2.1 52.1% and GDPval-AA 1212 Elo both sit mid-band (TB2.1 45–60%, GDPval 900–1200 reference) with a strong PinchBench #7/50 result, but Tau3-Banking 13.4% is only mid-low and there is no Claw-Eval/Toolathon evidence — that combination caps it in the 60s.
- **Reasoning: 84/100.** GPQA Diamond 89.5% (91st pct) and HLE 38.3% (93rd pct) are within reach of the frontier references (90%+ / 40%+), backed by AA Intelligence Index 40.7 and AA-LCR 70.0%; capped just below frontier by HLE under 40% and the Index sitting in the upper-mid pack rather than the leaders.
- **Context window: 74/100.** 256K maps into the 200K–500K tier (65–84, where 200K = 70), pushed to the upper half by AA-LCR 70.0%; no retrieval curve at the window edge and 256K trails the 500K–1M field, so it cannot reach the 85+ tiers.
- **Multimodal: 60/100.** Image input is confirmed by docs.x.ai, but no vision benchmark (MMMU/CharXiv-class) was found, so it sits at the floor of the +image band (60–70); output is text-only.
- **Coding: 78/100.** SWE-bench Verified 71.4% (independent Vals), SciCode 50.2% (93rd pct, near the 55% frontier reference), Terminal-Bench 2.1 52.1% and Benchable 95% coding accuracy with 100% hallucination/ethics baselines; capped below the 85+ frontier by the ~17-point gap to top SWE-bench agents, weak instruction following (60%), and zero LiveCodeBench/Vibe/DeepSWE coverage.
- **Cost efficiency: 92/100.** $1.00/$2.00 with $0.20 cached input matches the ~$0.60/$2.20 ≈ 92 anchor and undercuts nearly every capable coding agent; only the hidden Grok Build CLI subscription economics (if you want the product, not the API) and Kilo's $30.70/task harness cost keep it from 95+.
- **Overall Score: 72/100.** (64 + 84 + 74 + 60 + 78) / 5 = 72.0 → **72** — best fit: the cheapest verified near-frontier science-reasoning coder for high-volume agentic loops; accept weaker structured-output discipline and a 256K ceiling.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: public internet research (docs.x.ai model card, xAI launch post, Artificial Analysis / BenchmarkList / Vals AI / Kilo / Benchable evaluations, OpenCode Zen pricing docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
