# Claude Haiku 4.5 — findings by Mercury 3

- Source: Anthropic (Claude Haiku 4.5)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's small, fast, cheap tier (released 2025-10-15) — the first Haiku with extended thinking, computer use, and context awareness. Roughly level with the older Sonnet 4 flagship on SWE-bench Verified at one-third the cost and more than twice the speed. Now legacy (Haiku 5.5 is current).
- **Provider / access:** Claude API (`claude-haiku-4-5-20251001` / alias `claude-haiku-4-5`), claude.ai free/pro tiers, Bedrock, Vertex AI, Foundry, GitHub Copilot.
- **Release / knowledge:** Released 2025-10-15; knowledge cutoff 2025-02 (reliable; trained to 2025-07).
- **IDs:** `anthropic/claude-haiku-4.5`.
- **Context window:** 200K tokens; max output 64K.
- **Modalities:** multimodal input (text/image); text output; extended thinking (128K budgets); computer use; tool use.
- **Pricing (as of 2025-10+):** $1.00 in / $5.00 out per 1M (batch $0.50/$2.50; cached input $0.10; AA lists blended $1.25).
- **Architecture:** proprietary (parameters undisclosed); ASL-2 safety standard.

### Raw benchmarks found

Coding:

- SWE-bench Verified: **73.3%** (Anthropic) — ~level with Sonnet 4 flagship at launch
- Terminal-Bench (Terminus-2): **~41%** (Anthropic)
- OSWorld-Verified: **50.7%** (Anthropic) — highest of any Haiku; ahead of old Sonnet 4 (42.2%)

Reasoning / knowledge:

- GPQA Diamond: **73.0%** (Anthropic)
- AIME 2025: **80.7%** no tools → **96.3%** with Python tools + thinking
- MMMU (vision): **73.2%**; τ²-bench Retail/Telecom: **83.2%/83.0%**
- AA Intelligence Index (independent, non-reasoning): **31**; output ~93 tok/s
- Vals Index: 40.9% (3rd at launch)

Long context:

- 200K verified (no 1M option); no independent long-context retrieval benchmark captured

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-bench 83.2/83.0% and OSWorld 50.7% are strong for the tier; agentic terminal work trails Sonnet.
- **Reasoning: 78/100.** GPQA 73.0% and AIME 96.3% with tools; a real tier ceiling for hard science.
- **Context window: 78/100.** 200K verified.
- **Multimodal: 80/100.** Multimodal input with MMMU 73.2%; text output.
- **Coding: 82/100.** SWE-bench Verified 73.3% — flagship-level at launch for the price.
- **Cost efficiency: 72/100.** $1/$5 with batch/cache discounts; not the cheapest small model (GPT-5 mini/Gemini Flash-Lite undercut it).
- **Overall Score: 80/100.** Mean of the five non-cost dims (80+78+78+80+82)/5 = 79.6 → 80. Best-fit: the fast, reliable worker tier for high-volume/latency-sensitive work; superseded in Anthropic's lineup by Haiku 5.5.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude Haiku 4.5](https://www.anthropic.com/news/claude-haiku-4-5)
  - [Anthropic docs: Haiku 4.5 overview (legacy status)](https://platform.claude.com/docs/en/models/haiku-4-5/overview)
  - [The AI Rankings: Claude Haiku 4.5 review](https://theairankings.com/anthropic/claude-haiku-4-5/)
  - [Artificial Analysis: Claude Haiku 4.5](https://artificialanalysis.ai/models/claude-haiku-4-5)
  - [llm-stats: Claude Haiku 4.5](https://llm-stats.com/models/claude-haiku-4-5-20251001)
  - [OpenRouter: anthropic/claude-haiku-4.5](https://openrouter.ai/anthropic/claude-haiku-4.5)
- Future sources: add a new file next to this one using the same headings.
