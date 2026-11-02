# Kimi K2.7 Code — findings by GPT 5.6 Luna

- Source: Moonshot AI / Kimi K2.7 Code
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot's coding-focused agentic checkpoint, built on Kimi K2.6 for long-horizon software engineering. It is a distinct code variant, not a substitute for the general Kimi K2.5 report.
- **Provider / access:** Kimi Code and the Kimi API, with OpenAI/Anthropic-compatible interfaces. Thinking and preserve-thinking are forced for this variant; non-thinking requests in Kimi Code are served by K2.6 instead.
- **Release / knowledge:** Official resource page updated 2026-10-08; knowledge cutoff not published.
- **IDs:** Weights `moonshotai/Kimi-K2.7-Code`; API model `kimi-k2.7-code`; no verified OpenCode Zen Free ID.
- **Context window:** 256K / 262,144 tokens (official Moonshot page and model card); a separate max-output limit was not verified.
- **Modalities:** Text, image, and video input; text output; forced reasoning, tool calls, structured agent workflows, and preserve-thinking.
- **Pricing (as of 2026-11-02):** Kimi API $0.19 cached input / $0.95 cache-miss input / $4.00 output per 1M tokens; Kimi Code annual-billing plan prices are $15, $31, $79, and $159 per month. No separate free API tier was verified.
- **Architecture:** 1T-total / 32B-activated MoE, 384 experts with eight selected per token, MLA attention, and a 400M MoonViT vision encoder; modified MIT license.

### Raw benchmarks found

> Moonshot's coding and agent rows were run with Kimi Code CLI, thinking enabled, and a 262,144-token context. GPT-5.5 and Claude Opus 4.8 comparison columns use their own agent harnesses and are not imported as Kimi scores.

Agent / tool use:

- Kimi Claw 24/7 Bench: **46.9%**; MCP Atlas: **76.0%**; MCP Mark Verified: **81.1%** (Moonshot official card).
- tau2-bench: **90.1%**; GDPval-AA: **1114 Elo**; AA Agentic Index: **22.5%**; Terminal-Bench 2.1 (Vals): **67.0%**; terminalBenchHard: **44.7%** (BenchLM/independent profiles).
- BenchLM's partial composite is **53.59/100**, rank **#84/1004**, across 26/724 tracked benchmarks.

Reasoning / knowledge:

- Artificial Analysis GPQA Diamond: **89.6%**; AA-HLE: **35.0%**; AA-LCR: **79.3%**; CritPt: **10.0%**.
- FrontierMath v2 tiers 1–3 / tier 4: **54.035% / 12.195%**; AA IFBench: **63.1%**.

Coding:

- Kimi Code Bench v2: **62.0%**; Program Bench: **53.6%**; MLS-Bench Lite: **35.1%** (Moonshot official card).
- CursorBench 3.2: **49.7%**; AA-SciCode: **47.8%**; LiveCodeBench: **82.1%**; SWE-bench (Vals): **78.2%**; AA Coding Index: **60.8%** (independent profiles with separate harnesses).

Multimodal:

- The official checkpoint accepts image and video input, but no broad exact-model multimodal leaderboard was found. OpenRouter Design Arena reports **1263**, which is a preference score rather than a capability benchmark.

Long context:

- Official context: **256K**; AA-LCR: **79.3%**. No exact MRCR/RULER full-window retrieval result was verified.

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Mark 81.1%, MCP Atlas 76%, tau2-bench 90.1%, and TB2.1 67% support capable agents, while the 46.9% persistent-agent score and partial coverage cap it.
- **Reasoning: 77/100.** GPQA 89.6%, HLE 35%, and LCR 79.3% are useful, but FrontierMath tier 4 is 12.195% and the independent index is only 22.5.
- **Context window: 78/100.** The verified 256K window and 79.3% LCR are useful, but this is below 1M and lacks a full-window retrieval curve.
- **Multimodal: 82/100.** Native image/video input earns a high multimodal band, but no exact capability suite was found and output is text-only.
- **Coding: 84/100.** Official Kimi Code 62%, Program Bench 53.6%, and strong independent SWE/LiveCode rows establish a capable coding agent; MLS-Bench 35.1% and SciCode 47.8% cap it below the frontier.
- **Cost efficiency: 80/100.** The API is reasonably priced for a 1T open-weight model, but $4 output pricing and paid-only access reduce value.
- **Overall Score: 80.2/100.** `(80 + 77 + 78 + 82 + 84) / 5 = 80.2`; best fit is long-horizon repository work through Kimi Code, with benchmark comparisons kept harness-specific.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Moonshot resource/model cards, Kimi API pricing, BenchLM's October 29 profile, and independent leaderboard checks. Kimi's official harness was kept separate from GPT/Claude comparison harnesses; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K2.7 Code official resource](https://www.kimi.ai/resources/kimi-k2-7-code)
  - [Kimi K2.7 Code model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
  - [Kimi API pricing](https://platform.kimi.ai/docs/pricing/chat)
  - [BenchLM Kimi K2.7 Code profile](https://benchlm.ai/models/kimi-k2-7-code)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
