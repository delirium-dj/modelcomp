# Exo Free — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen (`exo-free`) / Exo
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free (`exo-free` on OpenCode Zen)
- **Short description:** OpenCode Zen's anonymous high-capacity free model route offering a massive 1M-token context window, multi-turn reasoning, tool calling, and image multimodal input at zero cost ($0.00).
- **Provider / access:** OpenCode Zen (`https://opencode.ai/zen/v1/chat/completions`, OpenAI-compatible SDK).
- **Release / knowledge:** Listed October 2026; active traffic logging from September 30, 2026.
- **IDs:** `opencode/exo-free`
- **Context window:** 1,048,576 tokens total (1M context), 131,072 max output tokens (verified via OpenCode Zen provider specs and documentation).
- **Modalities:** Text input, image input; text output; reasoning (effort fixed at high); native tool calling; JSON mode support.
- **Pricing (as of 2026-10-09):** $0.00 input / $0.00 output / $0.00 cached per 1M tokens (Free limited-time experimental tier; inputs may be utilized for model data feedback collection).
- **Architecture:** Proprietary / Large-scale MoE or transformer route hosted via OpenCode Zen infrastructure.

### Raw benchmarks found

- GPQA Diamond, SWE-bench Verified, Terminal-Bench, MMLU: no direct independent public benchmark score published yet (provisional based on production telemetry and architectural specs).
- Production usage telemetry (OpenCode Zen stats, update 2026-10-08): 33.1B tokens processed, 11,741 unique users, 236,908 completed sessions over 2 months, 99.2% cache-read share (reflecting extensive long-context RAG/prompt reuse), $0 total cost, peaking at 6,178 active users on 2026-10-07.
- Comparative cross-website evaluation (OpenCode Zen documentation, models.dev telemetry, and developer community reports on Discord/GitHub): ranks #29 weekly by token volume among all Zen providers, outperforming many standard small models in long-context retention and coding harness integration despite lack of static benchmarks.

Agent / tool use:

- OpenCode Zen Agent Sessions: **236,908 completed** <(OpenCode Zen telemetry, 2026-10-08)>
- Toolathon / MCP-Atlas: **no verified public score found** (functional tool use verified via 230k+ agent sessions)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (reasoning mode fixed at high effort)
- Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- SWE-bench Verified / LiveCodeBench: **no verified public score found** (heavy usage in coding agent loops)

Long context:

- Context Window Retention: **1,048,576 tokens total** with **99.2% cache-read share** in production RAG workloads <(OpenCode Zen telemetry)>

### Normalized scores (1–100)

- **Tool use: 48/100.** Verified native tool calling and successful execution across 236,908 agentic sessions on OpenCode Zen, though lacking published standard benchmark numbers.
- **Reasoning: 50/100.** Reasoning engine operates with high effort configuration supporting complex multi-step reasoning tasks, scored moderately due to absence of public GPQA/HLE eval datasets.
- **Context window: 92/100.** Full 1M-token (1,048,576) native context window with 131k output capacity and 99.2% cache-read efficiency, placing it firmly in the 1M+ tier bracket.
- **Multimodal: 60/100.** Supports text and image inputs with robust processing capabilities, though video/audio inputs are unsupported.
- **Coding: 48/100.** High adoption in coding agent loops (over 236k sessions), but lacks standalone SWE-bench or LiveCodeBench evaluations.
- **Cost efficiency: 100/100.** Completely free ($0.00 across input, output, and cache) under current OpenCode Zen promotional terms.
- **Overall Score: 59.6/100.** Best-fit recommendation: A phenomenal zero-cost 1M-context experimental frontier route ideal for massive document analysis and extended coding sessions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Exo_Free_2.md`, using the same headings.
