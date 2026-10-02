# Kimi K2.7 Code Highspeed — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI / Kimi K2.7-Code HighSpeed (`kimi-k2-7-code-highspeed`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** A throughput-optimised serving variant of Moonshot's Kimi K2.7-Code coding model — same 1T-parameter MoE weights, ~6× faster (~180 tokens/s, up to 260 on short contexts). Best for interactive/latency-bound coding; the standard variant is preferred for correctness-sensitive long-horizon agentic work.
- **Provider / access:** Moonshot AI Kimi platform (single route); OpenAI-compatible. Open weights (Modified MIT) on Hugging Face — the standard K2.7-Code checkpoint, not a separate model.
- **Release / knowledge:** HighSpeed variant announced 2026-06-15 (three days after the standard K2.7-Code release on 2026-06-12); knowledge cutoff not separately published.
- **IDs:** `kimi-k2-7-code-highspeed` (Moonshot Kimi); OpenCode Zen tracks it as `opencode/kimi-k2.7-code-highspeed`. No Zen Free ID.
- **Context window:** 262,144 tokens (262K), **65,536 max output**.
- **Modalities:** text and image in (MoonViT vision encoder); text out. Thinking mode always on, reasoning content preserved across turns; tool use, structured outputs, prompt caching.
- **Pricing (as of 2026-10-01):** **$1.90 / $8.00 per 1M** in/out (cache read $0.38) — a premium over the standard K2.7-Code ($0.612/$3.07 on OpenRouter; $0.95/$4.00 on Moonshot) paid for the speed.
- **Architecture:** 1T total-parameter MoE, **32B active**, 384 experts (8 selected per token), 61 layers, MoonViT 400M vision encoder; MIT licence.

### Raw benchmarks found

> The HighSpeed SKU publishes no separate benchmark table ("no task-mapped benchmark peers"). The verified numbers below are the **documented base model, Kimi K2.7-Code** (identical weights/architecture, Moonshot-reported), which the HighSpeed variant serves faster.

Agent / tool use:

- MCP-Atlas: **76.0%**; MCP Mark Verified: **81.1%**; Kimi Claw 24/7 Bench: **46.9%** (all Moonshot-reported, observed 2026-06-12)
- Terminal-Bench 2.1 / GDPval / OSWorld: **no verified public score found for this family ID**

Reasoning / knowledge:

- No GPQA / HLE / AA-Index number is published for K2.7-Code: **no verified public score found**
- Relative gains over K2.6 (Moonshot-reported): **+21.8% Kimi Code Bench v2**, **+11.0% Program Bench**, **+31.5% MLS Bench Lite**, with ~30% fewer reasoning tokens

Coding:

- Kimi Code Bench v2: **62.0**; Program Bench: **53.6**; MLS Bench Lite: **35.1**; CursorBench 3.2: **49.7** (Cursor vendor-reported, $1.43/task, 31,247 tokens/task, 58 steps/task); GeneBench-Pro: **2.3**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:

- 262K-token window documented; **no MRCR/RULER/GraphWalks retrieval score published** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 76.0% and MCP Mark Verified 81.1% are strong for a coding-specialist MoE, with a mid Kimi Claw 46.9%; no Terminal-Bench number caps it below the frontier band.
- **Reasoning: 76/100 (provisional).** No GPQA/HLE/AA-Index value is published for this family, so Reasoning is scored provisionally on the documented coding-reasoning gains and the MCP/claw agentic numbers rather than on a knowledge benchmark.
- **Context window: 74/100.** 262K tokens sits in the 200K–500K band (200K = 70, between 70 and 85).
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 84/100.** Kimi Code Bench v2 62.0, Program Bench 53.6, MCP Mark Verified 81.1% and a CursorBench 3.2 of 49.7 make it a strong coding specialist; lacked SWE-bench/SciCode to confirm a top-band score.
- **Cost efficiency: 74/100.** $1.90 / $8.00 per 1M is a premium over the standard variant — the throughput is the value, not the price (the standard K2.7-Code route is ~3× cheaper).
- **Overall Score: 76/100.** (80 + 76 + 74 + 68 + 84) / 5 = 76.4 → 76. Best fit: interactive, latency-bound coding where throughput matters more than the last few points of correctness.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (LLM Reference pages for Kimi K2.7-Code HighSpeed and base Kimi K2.7-Code; Moonshot-reported benchmark rows). No number invented; capability is inherited from the documented base model and Reasoning is flagged provisional.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.