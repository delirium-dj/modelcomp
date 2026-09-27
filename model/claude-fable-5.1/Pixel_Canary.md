# Claude Fable 5.1 — findings by Pixel Canary

- Source: Anthropic / Claude Fable 5.1 (`claude-fable-5-1`, routers list `anthropic/claude-fable-5.1`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 — Anthropic's generally available, production-safeguarded flagship between Claude Opus 5 and the Mythos research line.
- **Short description:** GA frontier model for demanding reasoning and long-horizon agentic work with adaptive thinking, tool use, vision and a 1M-token window. Not an alias of Opus 5.5 (which scores higher on trackers) — Fable is the "safe-by-default" GA tier.
- **Provider / access:** Anthropic Claude API (Messages API, ID `claude-fable-5-1`, adaptive thinking, 128K max output on the synchronous Messages API); 28 tracked offerings (Bedrock, Vertex, ZenMux `anthropic/claude-fable-5.1`, Tempr, AIHubMix, Venice AI, NanoGPT).
- **Release / knowledge:** released 2026-09-01; knowledge cutoff not published (Unknown per LLMBoard spec sheet) — no verified public figure.
- **IDs:** `claude-fable-5-1` (Anthropic), `anthropic/claude-fable-5.1` / `anthropic/claude-fable-5-1` (routers). No Free ID — paid only.
- **Context window:** 1,000,000 input / 128,000 max output tokens (LLMBoard: 1M context, 128K max output).
- **Modalities:** text + image in; text out. Tool use yes (LM Arena Agent, OSWorld 2.0, GDPval-AA all tool-augmented), vision yes, multilingual yes; structured output yes. No audio/video input, no image or audio generation.
- **Pricing (as of 2026-09-27):** $10 / 1M input, $50 / 1M output on the Anthropic API; AIHubMix $11 / $55, Venice AI $12 / $60, cheapest third-party route $10 / $50 (NanoGPT). Prompt-caching / batch discounts not published for this ID (no verified public figure). Paid only.
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-13 → 2026-09-26), 27 rows published, coverage 40% across 6 benchmark families; "#x/y" = rank among models with a score on that benchmark.

Agent / tool use:

- GDPval-AA: **1853 points** (#1/12 — real-world knowledge-work tasks)
- OSWorld 2.0 (computer use): **77.90%** (#2/14)
- CursorBench v3.2 (repo-scale agent edits): **73.40%** (#1/2)
- LM Arena Agent Leaderboard: **13.80%** (#1/39); Task Outcome (explicit) **17.26%** (#1/39); Bash Recovery Steps **11.65%** (#2/39); Praise/Complaint **32.31%** (#2/39)
- Terminal-Bench 2.1 / 4.0, τ²-Bench, Claw-Eval, Toolathon, MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **65.00%** (#1/104); AA HLE (text, no tools) **59.13%** (#1/200)
- AA Omniscience Accuracy: **67.23%** (#1/201) — the highest anti-hallucination accuracy in that pool
- LM Arena Text: **1510.83** (#2/218); Text Factuality **1500.90** (#1/128); Document **1512.58** (#2/38)
- GPQA Diamond / CritPt / ARC-AGI for this ID: no verified public score found (LLMBoard coverage is only 6 families)
- Composite: LLMBoard **94.3** (below Claude Opus 5.5 at 100.00, above Opus 5 at 92.12)

Coding:

- AA SciCode Subtasks: **63.08%** (#1/89)
- CursorBench v3.2: **73.40%** (#1/2 — thin comparison field, treat cautiously)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / DeepSWE / Terminal-Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID; only the 1M window and 128K output are verified.

Runtime: **7.4 tok/s** output with **19.55 s** catalog latency on Anthropic — by far the slowest frontier endpoint in this cohort; heavy thinking-token overhead.

### Normalized scores (1–100)

- **Tool use: 95/100.** #1 on GDPval-AA 1853 and LM Arena Agent rows plus OSWorld 2.0 77.90% is frontier agentic performance; capped by missing Terminal-Bench / τ² evidence and weak Bash recovery (11.65%).
- **Reasoning: 96/100.** HLE 65.00% (#1/104), AA HLE 59.13% and Omniscience accuracy 67.23% (#1/201) mean it is both the strongest and the least hallucinatory model in the pool; capped only by GPQA/CritPt being unpublished for this ID.
- **Context window: 91/100.** 1M input / 128K output; capped because no measured retrieval benchmark (MRCR/GraphWalks) exists for this ID.
- **Multimodal: 76/100.** Vision is strong (LM Arena Vision 1322.34, #2/111) but input is text + image only — no audio, video or PDF-native input and no generation.
- **Coding: 89/100.** CursorBench v3.2 73.40% and AA SciCode 63.08% (#1/89) are strong, but only 6 benchmark families are published and no SWE-bench-class number exists.
- **Cost efficiency: 58/100.** $10 / $50 per 1M with no published cache discount, no free tier, and 7.4 tok/s throughput that inflates wall-clock cost for long agent runs.
- **Overall Score: 89.4/100.** Half-up mean of (95 + 96 + 91 + 76 + 89) = 447 / 5 = 89.4, Cost excluded. Best fit: high-stakes knowledge work, document/office agents and research synthesis where factual reliability matters more than speed or price.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
