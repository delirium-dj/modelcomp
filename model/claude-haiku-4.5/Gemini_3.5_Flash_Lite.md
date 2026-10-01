# Claude Haiku 4.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic (`anthropic/claude-haiku-4-5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast and lightweight near-frontier model optimized for low-latency chat, agentic sub-tasks, and efficient pair programming.
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com`), Amazon Bedrock, Google Vertex, and OpenCode Zen (`opencode/claude-haiku-4-5`).
- **Release / knowledge:** Released October 2025; knowledge cutoff February 2025.
- **IDs:** `claude-haiku-4-5-20251001`; Zen ID `opencode/claude-haiku-4-5` (no Free tier ID on Zen).
- **Context window:** 200K tokens total input / 64K max output (verified via official Anthropic documentation).
- **Modalities:** Text and image input, text output; tool use; extended thinking budget; multilingual.
- **Pricing (as of 2026-10-01):** $1 / $5 per MTok in/out; prompt caching and batch discounts available; no free tier.
- **Architecture:** Proprietary transformer architecture with extended thinking support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **43.8%** (Vals / BenchLM)
- JobBench: **16.0%** (JobBench evaluation report)
- Tau3-Banking / Tau2-Bench: no verified public score found in text (vendor evaluation image-only)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **72.2%** (Vals / BenchLM)
- MMLU-Pro: **78.7%** (Vals / BenchLM)
- FrontierMath v2 (Tiers 1-3): **5.90%** (Epoch AI / BenchLM)
- HLE / LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **73.3%** (official Anthropic evaluation, 50-trial average)
- LiveCodeBench: **41.2%** (Vals / BenchLM)
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- RULER / MRCR: 200K long-context window supported; specific passkey retrieval scores not independently published in text.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.1 at 43.8% and JobBench at 16% reflect solid sub-agent capabilities, though limited by modest advanced task suites.
- **Reasoning: 62/100.** GPQA Diamond at 72.2% and MMLU-Pro at 78.7% demonstrate strong middle-tier reasoning, capped by a FrontierMath v2 ceiling of ~5.9%.
- **Context window: 70/100.** Standard 200K token context window with 64K output support maps to the 200K reference tier.
- **Multimodal: 65/100.** Native text and image input support with text output places it in the solid image-in tier.
- **Coding: 75/100.** Official SWE-bench Verified score of 73.3% indicates robust coding performance, tempered by LiveCodeBench at 41.2%.
- **Cost efficiency: 88/100.** Priced at $1/$5 per MTok in/out with prompt caching discounts, providing high efficiency for paid production workloads.
- **Overall Score: 65/100.** Half-up mean of quality dimensions: (55 + 62 + 70 + 65 + 75) / 5 = 65.4 → 65. An efficient, low-latency model well-suited for high-throughput coding and agent tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-01
- Method: independent public research and verified benchmark aggregation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
