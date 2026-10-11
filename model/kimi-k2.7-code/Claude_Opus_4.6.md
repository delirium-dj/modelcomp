# Kimi K2.7 Code — findings by Claude Opus 4.6

- Source: Moonshot AI / Kimi K2.7 Code
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's agentic coding-focused MoE model (Jun 2026). 1T total / 32B active parameters. Optimized for long-horizon SWE tasks with always-on thinking mode and 30% reasoning-token reduction vs K2.6. Open weights (modified MIT).
- **Provider / access:** Kimi API, OpenRouter, Hugging Face open weights (modified MIT license). ~605GB disk for full precision.
- **Release / knowledge:** 2026-06-12 release. Succeeded by K2.8 Preview and K3.
- **IDs:** `moonshot/kimi-k2.7-code` (open weights)
- **Context window:** 262,144 tokens.
- **Modalities:** Text, image, video in; text out; tool calls. Always-on thinking mode for coding tasks.
- **Pricing (as of 2026-10-11):** Varies by provider. Open weights for self-hosting (modified MIT).
- **Architecture:** 1T total parameters, 32B active per token. Sparse MoE. 30% reasoning-token reduction vs K2.6. Modified MIT license.

### Raw benchmarks found

Agent / tool use:

- MCP Mark Verified: **81.1** (source: moonshot.ai)
- MCP Atlas: **76.0** (source: moonshot.ai)
- Terminal-Bench: no verified standalone score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- Kimi Code Bench v2: **+21.8% over K2.6** (source: marktechpost.com, saascity.io)
- Program Bench: **+11% over K2.6** (source: puter.com)
- MLS Bench Lite: **+31.5% over K2.6** (source: puter.com)
- SWE-bench Pro: strong — reportedly ahead of GPT-5.4 and Claude Opus 4.6 in specific agentic coding metrics (source: okou.ai, saascity.io)
- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified standalone score found

Long context:

- 262,144 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Mark 81.1 and MCP Atlas 76.0 show strong tool integration. Always-on thinking mode optimized for agentic coding loops. Missing Terminal-Bench standalone data.
- **Reasoning: 78/100.** Always-on thinking mode improves reasoning for complex tasks. 30% reasoning-token reduction shows efficiency. Missing GPQA/HLE/ARC-AGI standalone scores.
- **Context window: 78/100.** 262K context (ref: 200K = 75; 262K ≈ 78). Below 1M models but adequate for most SWE tasks.
- **Multimodal: 65/100.** Text + image + video in; text out. Native multimodal from K2 family. No audio input. Video + image = 60–70 range.
- **Coding: 87/100.** Major improvements across all coding benchmarks vs K2.6 (+21.8% Code Bench, +31.5% MLS Bench). Reportedly outperforms GPT-5.4 and Claude Opus 4.6 in specific metrics. Strong agentic coding with multi-file refactoring.
- **Cost efficiency: 88/100.** Open weights (modified MIT) for self-hosting. 30% reasoning-token reduction means lower cost per task. Competitive with frontier coding models.
- **Overall Score: 78/100.** Mean of (82 + 78 + 78 + 65 + 87) / 5 = 78.0. Specialized coding model with excellent agentic capabilities; constrained by missing standalone reasoning benchmarks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (moonshot.ai, kimi.ai, marktechpost.com, puter.com, okou.ai, openrouter.ai, unsloth.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
