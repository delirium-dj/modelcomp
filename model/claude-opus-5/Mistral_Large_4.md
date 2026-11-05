# Claude Opus 5 — findings by Mistral Large 4

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's July 2026 flagship Opus — first model billed for sustained, very long-running agentic tasks (thousands of steps); superseded as flagship by Opus 5.5 (2026-09-22) but remains the reference point Fable 5.1/Opus 5.5 are measured against.
- **Provider / access:** Claude API / Claude Platform (`claude-opus-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry. Messages API.
- **Release / knowledge:** Released July 2026 (system card dated 2026-07-20); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `claude-opus-5` (Claude API); `anthropic/claude-opus-5` (OpenRouter).
- **Context window:** 1,000,000 tokens (Claude 5.x family standard, per OpenRouter/family docs).
- **Modalities:** Text + image in, PDF in, text out; adaptive thinking with effort levels; tool calls; JSON mode.
- **Pricing (as of 2026-11-05):** $5 / $25 per 1M input/output (per Google's 3.8 Flash model-card price row and Anthropic pricing pages); Opus 5.5 undercut this to $4/$20. No free tier.
- **Architecture:** Proprietary, weights not disclosed; pre-Fable lineage (no preserved-thinking anti-distillation safeguard — that debuted with Fable 5.1).

### Raw benchmarks found

Anthropic launch/system card + downstream tables (Opus 5.5 launch page, Google 3.8 Flash card) cross-checked against morphllm, Vals, BenchLM, AA, llmlearner; conflicts listed side by side:

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (morphllm launch table); Terminal-Bench 4.0: **52.3%** (Opus 5.5 launch table — different harness, not comparable)
- GDPval-AA v2.1: **1708 Elo** (Opus 5.5 1846, Fable 5.1 1735) (Anthropic)
- AutomationBench: **26.9%** (Opus 5.5 launch table)
- OSWorld 2.0 partial: **74.0%** (Opus 5.5 81.8% on the same table) (Anthropic)
- Chartography with tools: **83.4%** (Anthropic)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- HLE with tools: **63.6%** (Opus 5.5 launch table; Fable 5.1 65.6% edges it)
- Artificial Analysis Intelligence Index: **56 at max** (AA opus-5 article) vs **51** in a later v4.3-era reading (kingy/tosea) — version drift, both cited; below the Sept 2026 wave (Opus 5.5 58–59)
- GPQA / LCR / CritPt: no verified public score found for claude-opus-5 in reviewed sources

Coding:

- SWE-bench Verified: **97.00%, #1 on the Vals board as of 2026-09-01** (Mini-SWE-agent harness; ahead of DeepSeek V4 Pro 0813 96.40%, GPT-5.6 Sol 96.20%) (Vals AI)
- DeepSWE v1.1: **74.0%** (Google 3.8 Flash card; trails Argon 77.9%, Astra 74.1%)
- SWE-bench Pro: **69.2%** (morphllm)
- LiveCodeBench / SciCode: no verified public score found for this exact ID

Long context:

- 1M window (family standard); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 89.1% is frontier-tier and GDPval 1708 is top-3, but AutomationBench 26.9% and OSWorld 74.0% trail the 5.5 generation.
- **Reasoning: 88/100.** HLE-tools 63.6% strong at launch, AA Index 51–56 depending on version; no GPQA/LCR published.
- **Context window: 96/100.** 1M family window in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Text/image/PDF in, text out; no audio/video or non-text output.
- **Coding: 94/100.** SWE-bench Verified 97.0% was #1 on the Vals board, TB 2.1 89.1%, DeepSWE 74.0%, SWE-Pro 69.2% — frontier band.
- **Cost efficiency: 45/100.** $5/$25 per 1M sits between the $3/$15 (~60) and $10/$50 (~30) methodology bands; Opus 5.5 now delivers more at $4/$20; no free tier.
- **Overall Score: 91/100.** Half-up mean of (90 + 88 + 96 + 85 + 94) / 5 = 90.6 → 91. Best fit: proven long-horizon agentic workhorse at a legacy price point; prefer Opus 5.5 (92, $4/$20) for new work.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official anthropic.com/news/claude-opus-5 fetched, 2026-11-05 UTC); official Anthropic news/system card prioritized, cross-checked against morphllm, Vals AI, BenchLM, AA, OpenRouter, Google's 3.8 Flash model card; conflicting readings (AA Index 56 vs 51; TB 2.1 89.1 vs TB 4.0 52.3 different harnesses) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5 — Anthropic news (official, July 2026)](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 System Card (PDF, 2026-07-20)](https://www.anthropic.com/research/claude-opus-5-system-card)
  - [Claude Opus — Anthropic product page](https://www.anthropic.com/claude/opus)
  - [Claude Opus 5 — Claude Platform Docs](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [morphllm — Claude benchmarks 2026 (Opus 5: TB 2.1 89.1%, SWE-Pro 69.2%)](https://www.morphllm.com/claude-benchmarks)
  - [Vals AI — SWE-bench Verified leaderboard (Opus 5 #1 at 97.00%, 2026-09-01)](https://www.vals.ai/benchmarks/swebench)
  - [Artificial Analysis — Opus 5 article (Index 56 at max)](https://artificialanalysis.ai/articles/opus-5)
  - [BenchLM — claude-opus-5](https://benchlm.ai/models/claude-opus-5)
  - [OpenRouter — anthropic/claude-opus-5](https://openrouter.ai/anthropic/claude-opus-5)
  - [DataCamp — Claude Opus 5 blog](https://www.datacamp.com/blog/claude-opus-5)
  - [coursiv — Claude Opus 5 (July 2026 release)](https://coursiv.io/blog/claude-opus-5)
