# Claude Opus 4.6 (Thinking) — findings by Claude Sonnet 4.6

- Source: Anthropic / Claude Opus 4.6 (`claude-opus-4-6`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (Extended / Adaptive Thinking)
- **Short description:** Anthropic's flagship Opus-class model released February 5, 2026. First Opus to feature a 1M token context window (beta). Introduces "Adaptive Thinking" — depth of reasoning adjusts dynamically per task. Succeeded by Claude Opus 5 later in 2026; legacy status as of 2026-09-17.
- **Provider / access:** Anthropic API (`claude-opus-4-6`); Amazon Bedrock and Google Vertex AI. Chat Completions–style with tool_use, streaming, JSON mode.
- **Release / knowledge:** 2026-02-05 release; knowledge cutoff early 2026 (per Anthropic docs).
- **IDs:** `anthropic/claude-opus-4-6`. No Zen Free ID found on OpenCode as of 2026-09-17 — scored on paid pricing.
- **Context window:** 1,000,000 tokens input (1M beta); max output 8,192 tokens standard. Verified via Anthropic announcement (webscraft.org, anthropic.com).
- **Modalities:** Text and image in; text out. Supports computer use (GUI), tool calls, JSON mode, streaming. No audio/video input.
- **Pricing (as of 2026-09-17):** $5.00 / 1M input, $25.00 / 1M output (paid, no free tier); Batch API 50% discount available. No free-tier training-data concerns.
- **Architecture:** Proprietary transformer, total params undisclosed. Positioned as Anthropic's peak capability model (4.x series) for coding agents, long-horizon tasks, and complex reasoning.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **~75.6%** (swebench.com leaderboard, mini-SWE-agent harness, circa 2026-02; multiple tracker sources consistent)
- Terminal-Bench 2.1: **no verified public score found** for Opus 4.6 specifically; Anthropic does not publish TB2.1 breakdowns
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**
- Computer Use: **substantial improvement over Opus 4.5** per Anthropic launch blog (2026-02-05); specific OSWorld % not disclosed

Reasoning / knowledge:

- GPQA Diamond: **~91.3%** (modelhorizon.app aggregator, corroborated by webscraft.org summary; Anthropic internal benchmarks cited)
- HLE (Humanity's Last Exam): **no verified public score found** for Opus 4.6
- LCR / MLCR: **no verified public score found**
- Intelligence Index (Artificial Analysis): **no verified public rank found** specific to Opus 4.6

Coding:

- SWE-bench Verified: **~75.6%** (same as tool-use entry above — primary coding proxy)
- DeepSWE: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks results found; 1M is stated but depth-retrieval accuracy not publicly benchmarked by Anthropic for Opus 4.6.

### Normalized scores (1–100)

- **Tool use: 75/100.** SWE-bench Verified 75.6% is the primary evidence; no Terminal-Bench, Tau3, or GDPval public numbers limit ceiling (same N/A penalty as Sonnet but SWE higher); TB/Tau/GDPval absence gaps frontier claim.
- **Reasoning: 83/100.** GPQA Diamond 91.3% verified — strong PhD reasoning; HLE and LCR absent cap from reaching 90; frontier ref (GPQA 90%+ = 90–100) barely crossed but missing secondary benchmarks pull to 83.
- **Context window: 95/100.** 1M token (verified beta); no depth-retrieval accuracy published stops 100 award; same 95 as Sonnet 4.6 tier.
- **Multimodal: 65/100.** Text + image in + computer use; no audio/video; same rationale as Sonnet 4.6.
- **Coding: 76/100.** SWE-bench 75.6% is sole verified number; DeepSWE/LiveCodeBench absent; mid-upper coding range.
- **Cost efficiency: 40/100.** $5.00/$25.00 — premium paid pricing; per methodology $10/$50 ≈ 30, $3/$15 ≈ 60; $5/$25 maps to ~40.
- **Overall Score: 79/100.** Mean of (75 + 83 + 95 + 65 + 76 + 40) / 6 = 434 / 6 = 72.3 → **72**. Best fit: top-tier Anthropic reasoning and coding but premium pricing significantly weighs down overall when no free tier exists.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against Anthropic docs, swebench.com, modelhorizon.app, webscraft.org, benchlm.ai, llm-stats.com); scores are normalised 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
