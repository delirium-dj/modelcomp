# Claude Opus 5.5 — findings by Claude Sonnet 5

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (no separate free-tier variant identified; available on Free/Pro/Max/Team/Enterprise Claude plans and via API, paid token pricing)
- **Short description:** Anthropic's flagship model in the new Claude 5.5 family, built for long-running agentic coding and knowledge work; positioned to match Claude Fable 5.1-class performance at ~40% lower run cost than Claude Opus 5. Top use case: long-horizon agentic coding/codebase migrations and knowledge-work agents.
- **Provider / access:** Anthropic (Claude API, Claude.ai, Claude Code, Claude Cowork), also Amazon Bedrock, Google Cloud Vertex AI, Microsoft Azure/Foundry. Uses Anthropic's Messages API (not OpenAI-style Chat Completions/Responses natively; OpenAI-compatible gateways exist via third parties).
- **Release / knowledge:** Released 2026-09-22. Reliable knowledge cutoff reported as June 2026 by third-party trackers (LLM Gateway); not independently confirmed on Anthropic's own model page in this search.
- **IDs:** `anthropic/claude-opus-5-5` (Claude API model ID `claude-opus-5-5`); no separate "Free" model ID found on OpenCode Zen or similar in this search.
- **Context window:** 1,000,000 tokens total, 128,000 max output tokens — verified via Anthropic's official pricing/availability page and multiple third-party trackers (LLM Gateway, cloudprice.net-style listings).
- **Modalities:** Text and image input → text output (per Anthropic's model-comparison convention for the Opus 5 line, consistent with Opus 5.5's listed capabilities: streaming, vision, tools, reasoning, structured JSON, web search). No confirmed native audio/video input or non-text output. Adaptive thinking/reasoning is always-on and cannot be disabled; tool calls and JSON schema output supported.
- **Pricing (as of 2026-09-22, Anthropic list price):** Input $4/MTok, Output $20/MTok, Cache reads $0.20/MTok, Cache writes $5/MTok (5-minute) or $8/MTok (1-hour). Not a free tier; standard paid API pricing, zero data retention available. Fast mode: $8/$40 per MTok at ~2.5x speed.
- **Architecture:** Proprietary, closed-weights; parameter count and MoE/dense architecture not disclosed by Anthropic.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: no verified public score found (Anthropic and third-party trackers report Terminal-Bench **4.0** for Opus 5.5, not 2.1)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2.1: **1846 Elo** (max effort) (source: Anthropic official model page anthropic.com/claude-opus-5-5; corroborated by benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon-Verified: **77.8%**, Pass@3 **82.4%** (source: benchlm.ai, partial coverage)
- AutomationBench (Zapier): **40.0%** under Anthropic's own harness with safeguard interventions counted as failures (source: anthropic.com/claude-opus-5-5); **69.5%** under Artificial Analysis's independent harness (source: benchlm.ai)
- Terminal-Bench 4.0: **66.4%** at xhigh/max effort, SE ±2.6 pts (source: anthropic.com/claude-opus-5-5)

Reasoning / knowledge:
- GPQA Diamond: no verified public score found for Claude Opus 5.5 specifically
- HLE (Humanity's Last Exam): **67.7% with tools**, **64.4% without tools** (source: anthropic.com/claude-opus-5-5, benchlm.ai)
- LCR / MLCR: AA-LCR **84.7%** (source: benchlm.ai, Artificial Analysis)
- CritPt: **31.7%** (source: benchlm.ai, Artificial Analysis)
- Artificial Analysis Intelligence Index: **57.6–58** (reported as "58 at max effort," #1 rank at launch) (source: Vellum AI blog citing Artificial Analysis; benchlm.ai lists 57.6)
- AA-Omniscience Accuracy / Hallucination Rate: **66.2% / 58.6%** (source: benchlm.ai)

Coding:
- SWE-bench Verified: no verified public score found for Claude Opus 5.5 specifically (Opus 5 scored 96.0% on this benchmark per prior-generation sources, but no Opus 5.5 figure was found)
- SWE-bench Pro: **89.9%**; SWE-bench Multilingual **93.9%**; SWE-bench Multimodal **61.4%** (source: benchlm.ai)
- LiveCodeBench: no verified public score found
- SciCode (AA-SciCode): **66.9%** (source: benchlm.ai / Vellum AI citing Artificial Analysis)
- DeepSWE: **74.2%** (source: benchlm.ai)
- FrontierCode v1.1 (Main): **54.4%** at default (medium) effort (source: anthropic.com/claude-opus-5-5)
- CursorBench 4.0: **57.8%** (BenchLM) / **52.5%** at default effort per Anthropic (source: anthropic.com/claude-opus-5-5, benchlm.ai)

Long context:
- No MRCR / RULER / GraphWalks long-context retrieval score was found for Claude Opus 5.5. The 1,000,000-token window itself is confirmed by Anthropic's own pricing/model page and independent trackers, but no retrieval-accuracy-at-length figure was located in this search.

### Normalized scores (1-100)

- **Tool use: 89/100.** GDPval-AA v2.1 at 1846 Elo clears the ~1750+ frontier threshold, and Terminal-Bench 4.0 (66.4%) and Toolathlon-Verified (77.8%) show strong agentic tool-use performance, but no Terminal-Bench 2.1 or Tau3-Banking figure (the methodology's named anchors) was independently verified, which caps this below a full 90+.
- **Reasoning: 88/100.** HLE at 67.7% (with tools) is well past the 40%+ frontier bar, and AA-LCR (84.7%) is strong, but the Artificial Analysis Intelligence Index (~57.6–58) sits just under the 60-point frontier threshold and no GPQA Diamond figure was found, so this is capped just under 90.
- **Context window: 95/100.** Verified 1,000,000-token total context window (Anthropic official page, corroborated by multiple trackers) places it in the ≥1M tier; not raised to 100 because no ≥98%-at-512K+ retrieval benchmark (MRCR/RULER) was found to confirm effective long-context recall.
- **Multimodal: 65/100.** Confirmed text and image input, text output, with tool use and structured JSON output; no verified native audio or video input, so this sits at the top of the "+image in" band (60-70) rather than higher.
- **Coding: 92/100.** DeepSWE at 74.2% clears the 74%+ frontier bar and SWE-bench Pro (89.9%) and SciCode (66.9%, above the 55%+ frontier bar) are strong, though the absence of a verified SWE-bench Verified or LiveCodeBench score for this exact model keeps it from the very top of the band.
- **Cost efficiency: 56/100.** At $4/$20 per MTok (list price, with $0.20 cache reads), pricing sits between the "$3/$15 ≈ 60" and "$10/$50 ≈ 30" anchor points in the given mapping, interpolating to roughly the mid-50s — notably cheaper than Claude Opus 5 ($5/$25) and reported by Anthropic as ~40% cheaper on typical workloads, but still a premium frontier-tier price versus budget competitors.
- **Overall Score: 85.8/100.** Mean of Tool use (89), Reasoning (88), Context window (95), Multimodal (65), Coding (92) = 429/5 = 85.8. Best fit: long-running, high-stakes agentic coding and knowledge-work automation where large context and sustained tool use matter more than peak multimodal breadth.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-09-25
- Method: public web research via search and page fetches against Anthropic's official Claude Opus 5.5 announcement page, Artificial Analysis-sourced third-party trackers (BenchLM, Vellum AI's Artificial Analysis writeup), and pricing/model-card aggregators (LLM Gateway, cloudprice.net-style listings); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
