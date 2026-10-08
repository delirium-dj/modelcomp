# Claude Fable 5.1 — findings by Laguna XS 2.1

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's top-tier Fable refresh (2026-09-01) — "the world's most advanced model for coding and knowledge work" per Anthropic; big gains in agentic coding/science over Fable 5 with cache reads cut 75%. Sibling Mythos 5.1 (same capabilities, fewer classifiers) is Project Glasswing-only.
- **Provider / access:** Claude API (`claude-fable-5-1`), Amazon Bedrock, Google Cloud, Microsoft Foundry/Azure, Claude Platform on AWS. Adaptive thinking always on; default effort `high` (Claude Code) / `medium` (Cowork, claude.ai).
- **Release / knowledge:** 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `claude-fable-5-1` (Claude API); `anthropic/claude-fable-5.1` (OpenRouter). No Zen Free ID found.
- **Context window:** 1M tokens; 128K max output (300K via Message Batches beta header).
- **Modalities:** text + image in; text out; reasoning yes (adaptive, always on); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $10 / $50 per 1M in/out; cache read $0.25 (75% below Fable 5), cache write $12.50 (5m) / $20 (1h); Batch 50% off; US-only inference 1.1x.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic launch; Mythos 5.1 60.9%)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic; vs Fable 5 24.7, Opus 5 29.0)
- GDPval-AA v2: **1853 Elo** (Anthropic launch; vs Fable 5 1723, Opus 5 1824, Sol 1711); AA-measured GDPval-AA **61.7%**
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Anthropic, August 2026 task release)
- AutomationBench: **31.4%** (Anthropic; vs Fable 5 17.1)
- TAU-Bench: **79.3%** (OpenRouter/Anthropic)
- AA Agentic Index: **57.9** (Artificial Analysis, max effort, default fallback)
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE: **60.9% no tools / 65.0% with tools** (Anthropic launch); **59.1%** (AA independent)
- GPQA Diamond: **93.7%** (AA); 92.6% per Data Science Dojo's table
- CritPt: **29.7%** (AA)
- ProofBench v1.1 (Lean 4): **100%** (Anthropic via Data Science Dojo)
- AA Intelligence Index: **53.4** (AA, max effort)
- AA-Omniscience: accuracy **67.2%** / non-hallucination **27.4%** (AA)

Coding:

- SWE-bench Verified: **95.0%**; SWE-bench Pro: **80.0%** (Anthropic via Data Science Dojo; vs GPT-5.5 58.6, Gemini 3.1 Pro 54.2 on Pro)
- LiveCodeBench: **90.52%** (ranked first across models tested, per Data Science Dojo)
- CursorBench 3.2.0: **73.4%** (Anthropic; vs Fable 5 70.5, Opus 5 70.0, Sol 67.2)
- AA Coding Index: **81.6** (AA)
- SciCode: **63.1%** (AA)
- FrontierCode 1.1 Extended: score peaked at medium effort; **$2.68/task** (Cognition measurement, down from Fable 5's $5.84)

Long context:

- AA-LCR: **85.3%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval-AA v2 1853 (top of its launch table), TAU-Bench 79.3%, OSWorld 77.9% partial and Agentic Index 57.9 are frontier-topping; capped by AutomationBench 31.4% behind GPT-6 Astra (41.4) and safeguard-intervention zeroes on some OSWorld/AutomationBench tasks.
- **Reasoning: 94/100.** HLE 65.0% with tools (beat every rival on its launch table), GPQA 93.7%, ProofBench 100% and AA-LCR 85.3%; capped by AA's independent HLE 59.1% and CritPt 29.7% sitting below the very top.
- **Context window: 96/100.** 1M window (95–100 tier) with AA-LCR 85.3% — above Opus 5.5's 84.7 but short of the ≥98% retrieval-at-512K+ bar for 100.
- **Multimodal: 65/100.** Text + image in, text out only (image-in band 60–70); no video/audio/PDF-in evidence found in sources checked.
- **Coding: 95/100.** SWE-bench Verified 95.0%, Pro 80.0%, LiveCodeBench 90.52% (#1), CursorBench 73.4% and Coding Index 81.6 clear every coding frontier ref; capped by TB 4.0 55.8% trailing Opus 5.5's 66.4% SOTA.
- **Cost efficiency: 35/100.** $10/$50 is the methodology's ~30 band; lifted by $0.25 cache reads (typical workloads ~25% cheaper, agentic up to ~45%) though AA measured max-effort cost per task 20% above Fable 5 due to 1.7x output tokens.
- **Overall Score: 88.8/100.** Mean of (94, 94, 96, 65, 95) = 88.8 — Anthropic's strongest reasoning/coding model; use Opus 5.5 for most workloads and reserve Fable 5.1 for the hardest long-horizon tasks.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Anthropic launch post + platform docs, OpenRouter, Artificial Analysis via OpenRouter, Implicator.ai, DataNorth, Data Science Dojo, Cognition via Implicator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
