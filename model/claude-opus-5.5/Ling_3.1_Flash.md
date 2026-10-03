# Claude Opus 5.5 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-opus-5-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5-family model and enterprise Opus workhorse — adaptive thinking, 1M context, built for long-running agentic coding, computer use, and knowledge work; performs at Fable 5.1 level on most work at 40% less cost than Opus 5.
- **Provider / access:** Anthropic Claude API (`claude-opus-5-5`, Messages API), Claude Platform, AWS, Google Cloud, Microsoft Foundry. No Free ID on OpenCode Zen (`noFreeId`) — scored on paid pricing.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not published in the system card.
- **IDs:** `anthropic/claude-opus-5-5` (Claude API); `opencode/claude-opus-5.5` tracking slug on this site.
- **Context window:** 1,000,000 tokens total (default and ceiling); 128,000 max output synchronous, extendable to 300,000 via Message Batches API (`output-300k-2026-03-24` beta header).
- **Modalities:** text and image in; text out (no audio/video input — not a fit for audio/video agents); adaptive thinking with effort levels (default/medium, high, xhigh, max); tool calls, JSON mode, prompt caching, Files API, PDF input.
- **Pricing (as of 2026-10-02):** $4.00/$20.00 per 1M input/output (20% below Opus 5); cache reads $0.20/M (5% of input), cache writes $5/M (5-min TTL) / $8/M (1-hr TTL); Batch API 50% off ($2/$10); research-preview Fast Mode $8/$40 (up to 2.5x speed).
- **Architecture:** proprietary (Anthropic); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh effort, Anthropic system card, ±2.6; public Claude Code leaderboard reproduces Opus 5 at 51.8% vs 52.3%)
- FrontierCode v1.1 (Main): **54.4%** (max effort, vendor)
- CursorBench 4.0: **57.8%** (max effort; 52.5% at default medium)
- GDPval-AA v2.1: **1846** (vendor, run by Artificial Analysis)
- AutomationBench: **40.0%** (Zapier, early access; without fallback models, so safeguard interventions counted as failures — understates real performance)
- Terminal-Bench-Science 0.1: **58.7%** (max effort, ±3.5–5)
- VulcanBench Frontier v4 (independent, Claude Code 2.1.280, 2026-09-22/24): **91.11** combined at high effort (medium 90.86, $2.84/task; max 90.22, $8.75/task) — second only to Fable 5.1 (91.84)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **67.7%** (vendor; vs Opus 5 63.6%, Fable 5.1 65.6%, GPT-6 Astra 57.2%)
- Artificial Analysis Intelligence Index: **58** (composite of 10 AA evaluations)
- GPQA Diamond: no verified public score found (not published in the 5.5 system card; Opus 5 published it, 5.5 did not)
- AIME 2025 / MMLU-Pro / ARC-AGI-2: no verified public score found (not published for 5.5)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **89.9%** (vendor system card; vs Opus 5 79.2%, Fable 5.1 81.2%)
- SWE-bench Multilingual: **93.9%** (vendor; vs Opus 5 89.5%)
- SWE-bench Multimodal: **61.4%** (vendor; vs Opus 5 59.4%)
- SWE-bench Verified: no verified public score found for 5.5 (not published in the system card)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- ProgramBench (Anthropic long-context eval): run across the full 1M-token window; no numeric retrieval score published
- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval-AA 1846 leads the professional-work frontier, TB 4.0 66.4% tops the new agentic-CLI scale, and VulcanBench 91.11 is second only to Fable 5.1; AutomationBench 40.0% (Zapier, no-fallback methodology) and the absent Claw-Eval/MCP-Atlas rows cap it below 96.
- **Reasoning: 92/100.** HLE 67.7% with tools is far above the frontier reference (40%+) and the best published HLE-with-tools figure in this comparison set; the AA Intelligence Index of 58 (just under the 60+ frontier bar) and the unpublished GPQA Diamond cap the score.
- **Context window: 97/100.** Full 1M default-and-ceiling window with ProgramBench exercised across it, but no independent ≥98% retrieval-at-512K+ figure is published, so 100 is not justified.
- **Multimodal: 65/100.** text + image in, text out — the +image-in band; no video/audio/PDF-native input beyond PDF via Files API.
- **Coding: 94/100.** SWE-bench Pro 89.9% and Multilingual 93.9% (vendor) plus VulcanBench 91.11 independent are top-of-set; capped below 96 because SWE-bench Verified, LiveCodeBench, and SciCode are unpublished for this release and the headline coding numbers are vendor self-reports.
- **Cost efficiency: 56/100.** Paid-only pricing $4/$20 per 1M (cache reads $0.20) — roughly 40% cheaper than Opus 5 per task, but well above the ~$1.25/$4.25 (~88) reference tier; Batch 50% off helps agentic workloads.
- **Overall Score: 88/100.** (94+92+97+65+94)/5 = 88.4 → 88 — the value pick at the Opus tier: Fable-class agentic coding and knowledge work at 20% lower per-token price, with text+image-only input as the main limitation.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Anthropic system card, Artificial Analysis, Zapier AutomationBench leaderboard, VulcanBench, HokAI, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
