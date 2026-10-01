# Kimi K2.7 Code HighSpeed — findings by Muse Spark 1.3

- Source: Moonshot AI/Kimi K2.7 Code HighSpeed (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Moonshot's high-speed serving tier of Kimi K2.7 Code (Jun 2026): identical 1T/32B open-weights coding model at ~180 tok/s (260 short-context) for 2x the base rate; built for interactive coding agents where latency shapes the experience.
- **Provider / access:** Moonshot Kimi API (`kimi-k2.7-code-highspeed`, OpenAI/Anthropic-compatible + Kimi Code CLI); Vercel AI Gateway (`moonshotai/kimi-k2.7-code-highspeed`, moonshotai/fireworks routes); kimi.com chat + agent mode; HuggingFace `moonshotai/Kimi-K2.7-Code` (self-hostable). Chat API.
- **Release / knowledge:** K2.7 Code released 2026-06-12 (ai-tldr version row; reddit launch 2026-07-01); HighSpeed tier live ~2026-06-15 (vercel page). Knowledge cutoff not published — no verified cutoff found.
- **IDs:** `kimi-k2.7-code-highspeed` (Moonshot API); `moonshotai/kimi-k2.7-code-highspeed` (Gateway); `opencode/kimi-k2.7-code-highspeed` (Zen catalogue / meta.json)
- **Context window:** 262,144 total (256K) with 32,768 max output — verified via Vercel Gateway row (262.1K/32.8K) and benchr platform read (262,144)
- **Modalities:** Text, vision, and video in (ai-tldr modalities row + Vercel "native image and video input"); text out; thinking always-on; tool calls yes (native, OpenAI/Anthropic-compatible)
- **Pricing (as of 2026-10-01):** $1.90 per 1M input / $8.00 per 1M output; cached input $0.38 (benchr platform read 2026-06-23 + Vercel Gateway row — exactly 2x the $0.95/$4.00/$0.19 base tier). ~30% fewer thinking tokens than K2.6 lowers effective run cost. No $0 tier — scored on paid pricing.
- **Architecture:** 1T-total / 32B-active MoE (384 experts, 8 + 1 shared per token, 61 layers), Modified MIT open weights; same weights as standard K2.7 Code — only serving speed differs

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **76.0** (moonshot forum 2026-06-16 SOTA-with-tools table + ai-tldr eval table; vs K2.6 69.4, GPT-5.5 79.4, Opus 4.8 81.3; Kimi Code CLI, thinking on, temp 1.0/top_p 0.95, multi-run avg)
- MCP Mark Verified: **81.1** (same vendor tables; vs 72.8 / 92.9 / 76.4)
- Kimi Claw 24/7 Bench: **46.9** (same vendor tables; vs 42.9 / 52.8 / 50.4)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- MLS Bench Lite: **35.1** (same vendor tables; vs 26.7 / 35.5 / 42.8 — agentic-ML proxy, not a science exam)
- Reasoning efficiency: ~30% fewer thinking tokens than K2.6 (vendor measurement — efficiency claim, not a score)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Kimi Code Bench V2: **62.0** (same vendor tables; vs 50.9 / 69 / 67.4 — long-horizon coding incl. 4,000+ tool-call / 12h+ runs, Rust/Go/Python)
- Program Bench: **53.6** (same vendor tables; vs 48.3 / 69.1 / 63.8)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 256K window with vendor-claimed long-context instruction compliance and 12h+ trajectory support is capability evidence only

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 76.0 plus MCP Mark Verified 81.1 and Claw 24/7 46.9 show strong MCP/claw agency; capped by missing Terminal-Bench/Tau/GDPval harnesses.
- **Reasoning: 65/100.** MLS Bench Lite 35.1 with vendor-measured instruction-compliance gains and 30% thinking-token efficiency show solid agentic reasoning; capped hard by zero GPQA/HLE/LCR/CritPt/Index science coverage.
- **Context window: 78/100.** 256K/32.8K mid-way in the 200K-500K 65-84 tier with long-horizon trajectory evidence (4,000+ calls, 12h+ runs); capped by no measured at-limit retrieval.
- **Multimodal: 78/100.** Text + vision + video in lands the +video/PDF-in 75-90 band lower end; capped by no measured vision benchmark for this exact ID.
- **Coding: 76/100.** Code Bench V2 62.0 (+21.8% over K2.6) plus Program Bench 53.6 show strong long-horizon coding below the GPT-5.5/Opus-4.8 line; capped by missing SWE/LiveCode/SciCode/Vibe/DeepSWE.
- **Cost efficiency: 78/100.** $1.90/$8.00 per 1M interpolates between the ~$1.25/$4.25 ~88 tier and the $3/$15 ~60 tier on both legs (cache $0.38 + 30% fewer thinking tokens soften); 2x base rate buys ~180-260 tok/s — pay for latency only.
- **Overall Score: 75/100.** Mean of the five quality dims (78+65+78+78+76)/5 = 75.0; best fit as fast interactive open-weights coding agent; standard tier for batch/overnight at half price.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (platform.kimi.ai K2.7 Code quickstart, moonshot forum launch post 2026-06-16 with 6-benchmark SOTA table, ai-tldr.dev specs/eval/pricing with cross-vendor table, benchr.org 2026-06-23 platform pricing read, Vercel AI Gateway model page, reddit r/kimi launch thread); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
