# Claude Opus 4.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-5-20251101`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's flagship frontier model for coding, agents, and computer use, released November 24, 2025. The first Opus priced within reach of everyday use ($5/$25 per M tokens), with a new `effort` parameter for speed/quality tradeoffs.
- **Provider / access:** Anthropic API (`claude-opus-4-5-20251101`), Claude apps, and all three major cloud platforms (AWS Bedrock, Google Vertex AI, Microsoft Foundry). Chat Completions-style Messages API.
- **Release / knowledge:** 2025-11-24 release; knowledge cutoff August 2025 (per Artificial Analysis).
- **IDs:** `anthropic/claude-opus-4-5-20251101` (no Free ID exists on Zen)
- **Context window:** 200K total tokens (64K thinking budget used in official evals; Anthropic methodology page + Artificial Analysis spec sheet both state 200K).
- **Modalities:** text + image input; text output; reasoning via extended thinking / effort parameter (yes); tool calls yes (advanced tool use, subagents, memory tool, context compaction); JSON/structured output supported.
- **Pricing (as of 2026-09-27):** $5.00 in / $25.00 out per 1M tokens; cache discount 90% (cache hit ~$0.50 per 1M per Artificial Analysis). Paid only.
- **Architecture:** proprietary; parameter count undisclosed. Notable platform features: effort parameter, context compaction, memory tool, multi-subagent orchestration.

### Raw benchmarks found

> Numbers below come from Anthropic's Nov 24, 2025 announcement and the Artificial Analysis model page (fetched 2026-09-27).

Agent / tool use:

- Terminal-Bench (2.0): **~59.3%** (Anthropic system card values; Warp independently reported a 15% improvement over Sonnet 4.5 on Terminal Bench)
- τ2-Banking / Tau2-Bench: benchmark expects refusal on basic-economy flight changes; Opus 4.5 found a legitimate upgrade-then-modify path (scored a failure, flagged as creative problem solving — Anthropic announcement)
- GDPval-AA: no verified public score found
- BrowseComp-Plus: **70.48%** baseline → **85.30%** with context compaction + memory + subagents (Anthropic methodology footnote 4, fetch-enabled version)
- Vending-Bench: **+29%** net worth vs Sonnet 4.5 (Anthropic announcement chart)
- Artificial Analysis class rank: **#8 / 60** non-reasoning models (AA model page, 2026)

Reasoning / knowledge:

- GPQA Diamond: **87.1%** (Anthropic-reported; chart in announcement)
- HLE: no verified public score found in fetched sources (Anthropic chart values are image-only)
- Artificial Analysis Intelligence Index v4.3.2: **24 / #8** in non-reasoning class (AA model page, estimated by AA)
- Aider Polyglot: **+10.6 pp** over Sonnet 4.5 (Anthropic announcement)
- Effort scaling: at high effort exceeds Sonnet 4.5 on SWE-bench Verified by **4.3 pp** while using 48% fewer output tokens; medium effort matches Sonnet 4.5's best with 76% fewer tokens (Anthropic announcement)

Coding:

- SWE-bench Verified: **80.9%** (Anthropic-reported, state-of-the-art at release; at high effort ~81.5%, i.e. +4.3 pp over Sonnet 4.5's 77.2%)
- SWE-bench Multilingual: leads **7 of 8** programming languages (Anthropic announcement)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: included in AA Intelligence Index v4.3.2 components; standalone value no verified public score found

Long context:

- No MRCR / RULER value reported in fetched sources; 200K window confirmed by Anthropic methodology (evals run at 200K context). "no long-context retrieval reported" beyond the 200K spec.

### Normalized scores (1–100)

- **Tool use: 90/100.** SWE-bench Verified SOTA at release, Terminal-Bench ~59%, Vending-Bench +29%, BrowseComp-Plus 70→85% with memory/subagents, and strong multi-subagent orchestration; capped by the τ2-bench creative-path failure and unspecified tau3/MCP-Atlas scores.
- **Reasoning: 86/100.** GPQA Diamond 87.1%, Aider Polyglot +10.6 pp, AA Intelligence Index 24 (#8 non-reasoning class); capped by unverified HLE and the strong 2026 field.
- **Context window: 70/100.** 200K tokens with compaction and memory tooling, in the standard 200K frontier tier; capped versus 1M+-token peers and no measured >200K retrieval result.
- **Multimodal: 55/100.** Text + image input with strong vision (announcement: "better vision"), text out; no audio/video input and no image generation.
- **Coding: 90/100.** SWE-bench Verified 80.9% (SOTA at release), leads 7/8 languages on SWE-bench Multilingual, +10.6 pp Aider Polyglot; capped only by newer 2026 models.
- **Cost efficiency: 40/100.** $5/$25 per 1M tokens — premium pricing, though a large drop from prior Opus tiers ($15/$75) and 90% cache discount; expensive vs the ~$1.88/$9.50 medians (Artificial Analysis, 2026).
- **Overall Score: 78/100.** Mean of the five quality dims (90+86+70+55+90)/5 = 78.2 → 78 half-up. Best fit: hard agentic coding and long-horizon computer-use work where quality beats latency.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-27
- Method: public internet research (Anthropic announcement + Artificial Analysis model page, fetched 2026-09-27); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
