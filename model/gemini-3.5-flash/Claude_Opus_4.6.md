# Gemini 3.5 Flash — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemini 3.5 Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's high-efficiency multimodal model offering "Pro-level reasoning at Flash-tier cost." Strong for agentic workflows, coding, and high-throughput production tasks.
- **Provider / access:** Google AI Studio, Vertex AI, Gemini API. Chat Completions API.
- **Release / knowledge:** 2026-05-19 release; knowledge cutoff estimated early 2026.
- **IDs:** `google/gemini-3.5-flash` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M); max output 65,536 tokens. Verified via Google developer docs.
- **Modalities:** Text, image, audio, video in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $1.50 / $9.00 per 1M tokens (standard). Cache hit: $0.15. Batch/Flex at 50% discount ($0.75/$4.50).
- **Architecture:** Proprietary multimodal transformer; part of Gemini 3.x series.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~76.2%** (source: search results, community trackers)
- MCP Atlas: **83.6%** (source: search results)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for 3.5 Flash specifically
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Pro: **55.1%** (source: SWE-bench leaderboard, public single-attempt)
- DeepSWE: no verified public score found for 3.5 specifically
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M context window; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB 2.1 ~76.2% is above mid-range (ref: 45–60% = 50–70). MCP Atlas 83.6% is strong. Missing Tau3/GDPval data. Solid but below frontier 88%+ models.
- **Reasoning: 75/100.** No explicit GPQA/HLE published. Positioned as "Pro-level reasoning at Flash cost." Mid-to-strong but unverified at frontier level.
- **Context window: 97/100.** 1M verified with standard Gemini retrieval capabilities. Max output 65K is a minor caveat.
- **Multimodal: 90/100.** Full text + image + audio + video in; text out. Same modality breadth as other Gemini Flash models.
- **Coding: 75/100.** SWE-bench Pro 55.1% is competitive mid-range. MCP Atlas 83.6% shows agentic coding ability. Missing DeepSWE/LiveCodeBench. Below 3.7/3.8 Flash coding performance.
- **Cost efficiency: 85/100.** $1.50/$9.00 standard; batch at $0.75/$4.50. Moderate pricing, above 3.7/3.8 Flash introductory rates.
- **Overall Score: 83/100.** Mean of (78 + 75 + 97 + 90 + 75) / 5 = 83.0. Well-rounded multimodal model; coding and reasoning trail newer Gemini Flash iterations.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Google developer docs, SWE-bench leaderboard, community trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
