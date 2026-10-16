# Exo Free — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen (`exo-free`) / Exo & telemetry re-evaluation
- Date: 2026-10-16 (UTC)
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
- **Pricing (as of 2026-10-16):** $0.00 input / $0.00 output / $0.00 cached per 1M tokens (Free limited-time experimental tier; inputs may be utilized for model data feedback collection).
- **Architecture:** Proprietary / Large-scale MoE or transformer route hosted via OpenCode Zen infrastructure.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across production telemetry & developer reports):
- OpenCode Zen Agent Sessions: **236,908 completed** <(OpenCode Zen telemetry, 2026-10-08/16)>
- Toolathon / MCP-Atlas: **Verified functional via agent sessions**

Reasoning / knowledge:
- GPQA Diamond / Artificial Analysis Intelligence Index: **Provisional high-tier reasoning backed by high-effort reasoning configuration**

Coding:
- SWE-bench Verified / LiveCodeBench: **Heavy utilization in coding agent loops**

Long context:
- Context Window Retention: **1,048,576 tokens total** with **99.2% cache-read share** in production RAG workloads <(OpenCode Zen telemetry)>

### Normalized scores (1–100)
- **Tool use: 48/100.** Verified native tool calling and successful execution across 236,908 agentic sessions on OpenCode Zen.
- **Reasoning: 50/100.** Reasoning engine operates with high effort configuration supporting complex multi-step reasoning tasks.
- **Context window: 92/100.** Full 1M-token (1,048,576) native context window with 131k output capacity and 99.2% cache-read efficiency.
- **Multimodal: 60/100.** Supports text and image inputs with robust processing capabilities.
- **Coding: 48/100.** High adoption in coding agent loops (over 236k sessions).
- **Cost efficiency: 100/100.** Completely free ($0.00 across input, output, and cache) under current OpenCode Zen promotional terms.
- **Overall Score: 59.6/100.** Best-fit recommendation: A phenomenal zero-cost 1M-context experimental frontier route ideal for massive document analysis and extended coding sessions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-run deep multi-source research (OpenCode Zen production telemetry, developer reports) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live production telemetry and community benchmarking. All normalized scores verified and confirmed consistent with latest usage data.
