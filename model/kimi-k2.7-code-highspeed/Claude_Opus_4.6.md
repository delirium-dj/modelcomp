# Kimi K2.7 Code Highspeed — findings by Claude Opus 4.6

- Source: Moonshot AI / Kimi K2.7 Code Highspeed
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Moonshot AI's high-speed serving tier of Kimi K2.7 Code. Identical open-weight model served at ~180 tok/s (260 tok/s short-context) for 2x the base rate. Built for interactive edit-run-fix agent loops requiring low latency.
- **Provider / access:** Moonshot AI API (`kimi-k2.7-code-highspeed`), OpenCode Zen. High-speed tier — same model, faster inference.
- **Release / knowledge:** 2026 (same model as K2.7 Code; high-speed serving tier).
- **IDs:** `opencode/kimi-k2.7-code-highspeed`
- **Context window:** 262,144 tokens (256K); 32,768 max output.
- **Modalities:** Text, image, video in; text out; tool calls. Always-on thinking mode.
- **Pricing (as of 2026-10-11):** $1.90 / $8.00 per 1M tokens (input/output); $0.38 cached input. 2x base K2.7 Code rate for speed.
- **Architecture:** Same as K2.7 Code — 1T total, 32B active per token. Sparse MoE. High-speed inference tier (~180 tok/s).

### Raw benchmarks found

Same model as K2.7 Code — identical capabilities, different serving speed/cost:

Agent / tool use:

- MCP Mark Verified: **81.1** (from K2.7 Code; source: moonshot.ai)
- MCP Atlas: **76.0** (from K2.7 Code; source: moonshot.ai)

Reasoning / knowledge:

- Same reasoning capabilities as K2.7 Code base model.

Coding:

- Kimi Code Bench v2: **+21.8% over K2.6** (from K2.7 Code)
- Program Bench: **+11% over K2.6** (from K2.7 Code)
- MLS Bench Lite: **+31.5% over K2.6** (from K2.7 Code)

Long context:

- 262,144 tokens; 32,768 max output (lower than base K2.7 Code's output limit).

### Normalized scores (1–100)

- **Tool use: 82/100.** Same capabilities as K2.7 Code. High-speed serving optimized for interactive agent loops (edit-run-fix).
- **Reasoning: 78/100.** Same model as K2.7 Code — identical reasoning quality. Speed tier, not quality tier.
- **Context window: 76/100.** 256K input same as K2.7 Code, but 32K max output is more restrictive (ref: 262K ≈ 78, reduced for output cap).
- **Multimodal: 65/100.** Same as K2.7 Code — text + image + video in; text out.
- **Coding: 87/100.** Same model as K2.7 Code — identical coding quality. Speed advantage enables faster agentic iterations.
- **Cost efficiency: 72/100.** $1.90/$8.00 is 2x the base rate — paying for speed, not quality. Less efficient than base K2.7 Code for cost-sensitive workloads.
- **Overall Score: 78/100.** Mean of (82 + 78 + 76 + 65 + 87) / 5 = 77.6, rounded to 78. Same quality as K2.7 Code at higher speed/cost; ideal for interactive agent loops.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (moonshot.ai, kimi.ai, model meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
