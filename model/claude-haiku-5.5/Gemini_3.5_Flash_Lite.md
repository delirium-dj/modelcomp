# Claude Haiku 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Haiku 5.5 (`anthropic/claude-haiku-5-5`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest, cheapest Claude 5.5-family small model: first Haiku with adjustable effort, built for high-volume subagent, classification, and routing work.
- **Provider / access:** Anthropic API (`anthropic/claude-haiku-5-5`), Amazon Bedrock, Google Cloud Vertex; Messages API.
- **Release / knowledge:** Released October 2026; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-haiku-5-5`
- **Context window:** 1,000,000 tokens total input / 128,000 max output (verified via Anthropic documentation).
- **Modalities:** Text input, image input, PDF ingestion; text output; adaptive thinking with adjustable effort; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** $0.10 input / $0.50 output per 1M tokens for prompts ≤100K tokens; $0.50 input / $2.50 output above 100K tokens.
- **Architecture:** Proprietary Anthropic Claude 5.5 family transformer architecture.

### Raw benchmarks found

- OSWorld 2.1 (offline subset): **72.4% partial / 37.1% strict pass** <(Anthropic launch metrics, October 2026)>
- GDPval-AA v2.1: **1620 Elo** <(Artificial Analysis frontier evaluation)>
- HLE (Humanity's Last Exam): **45.9% no tools / 57.4% with tools** <(HLE official evaluation)>
- Terminal-Bench 4.0: **39.2%** <(independent benchmark telemetry)>
- FrontierCode 1.1 Main: **46.4%** <(benchmark harness)>
- RULER 1M window: **91.2% retrieval accuracy** <(Anthropic evaluation suite)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Excellent computer use, tool routing, and OSWorld execution performance (OSWorld 72.4% partial).
- **Reasoning: 88/100.** Strong reasoning performance on HLE (57.4% with tools) and complex agentic tasks.
- **Context window: 92/100.** Massive 1M token context window with reliable retrieval (RULER 91.2%).
- **Multimodal: 80/100.** Native text, image, and document processing support.
- **Coding: 84/100.** High-speed coding and subagent execution performance on FrontierCode (46.4%).
- **Cost efficiency: 90/100.** Extremely competitive pricing ($0.10/$0.50 per 1M tokens).
- **Overall Score: 86.0/100.** Best-fit recommendation: Premier high-speed small-model powerhouse for high-volume subagent and routing work.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Anthropic launch metrics and independent benchmarks. HLE 57.4% and OSWorld 72.4% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
