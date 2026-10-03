# Claude Opus 5 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus 5-generation flagship (released 2026-07-24) for the deepest reasoning and longest autonomous coding and research runs — close to Fable 5's frontier intelligence at half the price; new state of the art on Frontier-Bench and GDPval-AA, behind Mythos 5 on cybersecurity.
- **Provider / access:** Anthropic Claude API (`claude-opus-5`), Claude Platform, AWS, Google Cloud, Microsoft Foundry; Claude Pro/Max/Team/Enterprise. Effort settings low→max; Fast mode 2.5x speed at 2x price; US-only inference at 1.1x.
- **Release / knowledge:** 2026-07-24; knowledge cutoff not stated in the card.
- **IDs:** `anthropic/claude-opus-5`. No Free ID on OpenCode Zen (`noFreeId`) — scored on paid pricing.
- **Context window:** 1M tokens total; 128,000 max output.
- **Modalities:** text, image, PDF in; text out; tool calls, structured outputs, code execution.
- **Pricing (as of 2026-10-02):** $5/$25 per 1M input/output (unchanged from Opus 4.8); up to 90% savings with prompt caching, 50% with Batch.
- **Architecture:** proprietary (Anthropic); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Frontier-Bench v0.1 (Terminal-Bench team, 74 tasks across coding/finance/music/biology/hardware): **43.3** mean reward (card Table; prose reads 44.4 at xhigh; internal run, mini-SWE-agent harness, GKE backend, mean over 5 attempts — vs Fable 5 33.7, Opus 4.8 18.7) — new state of the art
- GDPval-AA v2: **1708** (per Anthropic's Opus 5.5 comparison table) — SOTA at release
- CursorBench 3.2 (max effort): within 0.5% of Fable 5's peak score at half the cost per task; best performance-per-cost at high/xhigh/max
- Zapier AutomationBench: **26.9%** (Zapier public leaderboard; ~1.5x the next-best model's pass rate for the same cost; even at its lowest effort setting it passes more tasks than any other model)
- OSWorld 2.0 (computer use): outperforms every other model at any given cost, surpassing Fable 5's best result at just over a third of the cost (no single numeric score in the card)
- Terminal-Bench 2.1: dropped from the Opus 5 card; public Claude Code leaderboard reports **51.8%** (5 trials/task)
- Terminal-Bench-Science 0.1: **30.0%** (public leaderboard, 3 trials/task, Claude Code harness)
- DeepSearchQA: listed among Anthropic's best/cost-efficient evals; no numeric score published
- Claw-Eval / ClawProBench / Toolathlon-Verified: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **63.6%** (per Anthropic's Opus 5.5 comparison table)
- GPQA Diamond: **93.7%** (per OpenAI's GPT-6 Astra comparison table)
- ARC-AGI-3: **30.2%** (card; vs Opus 4.8 1.5% — "three times as high as the next-best model"; absolute level still low on this new benchmark)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **96.0%** (system card §8.2 prose, mean over five trials; absent from the card's summary table and the announcement page; note OpenAI retired SWE-bench Verified reporting in Feb 2026, estimating 59.4%+ of audited failed problems had flawed tests)
- SWE-bench Pro: **79.2%** (card Table 8.1.A; vs Fable 5 80.0, Sonnet 5 63.2, Opus 4.8 69.2)
- LiveCodeBench / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 1M-token window; no MRCR / RULER / GraphWalks retrieval score published

### Normalized scores (1–100)

- **Tool use: 90/100.** Frontier-Bench v0.1 43.3 (new SOTA, 1.3x Fable 5), GDPval-AA 1708, best-in-class OSWorld 2.0 cost-efficiency, and AutomationBench's 1.5x-next-best pass rate clear the frontier band; the dropped Terminal-Bench 2.1 row (public leaderboard 51.8%) and unpublished Claw-Eval/MCP-Atlas cap it below 93.
- **Reasoning: 92/100.** HLE 63.6% with tools and GPQA 93.7% both sit firmly in the frontier reference band; ARC-AGI-3 30.2% (3x next-best but low absolute) and the unpublished AA Intelligence Index keep it out of the 94+ band.
- **Context window: 95/100.** 1M tokens / 128K out; no ≥98% retrieval-at-512K+ figure published, so 100 is not justified.
- **Multimodal: 78/100.** text + image + PDF in with text out — the +PDF-in band (75–90); no audio/video input.
- **Coding: 93/100.** SWE-bench Verified 96.0% (5-trial mean) and SWE-bench Pro 79.2% plus the Frontier-Bench SOTA are top-of-set; capped below 95 because SWE-bench Verified itself is a retired/flawed benchmark and LiveCodeBench/DeepSWE/SciCode are unpublished.
- **Cost efficiency: 51/100.** $5/$25 per 1M sits between the $3/$15 (~60) and $10/$50 (~30) references; up to 90% cache savings materially help long agentic runs.
- **Overall Score: 90/100.** (90+92+95+78+93)/5 = 89.6 → 90 — the value flagship: Fable-class coding and knowledge work at half the price, with PDF-in support and best-in-class computer-use cost efficiency.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Anthropic Opus 5 system card and launch page, Zapier AutomationBench leaderboard, Jesse Moraga's verified-numbers breakdown, OpenAI GPT-6 Astra comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
