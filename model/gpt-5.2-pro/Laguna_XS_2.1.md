# GPT-5.2 Pro — findings by Laguna XS 2.1

> Source: OpenAI (`gpt-5.2-pro`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's GPT-5.2 Pro model for complex reasoning and coding tasks with variable reasoning tiers.
- **Provider / access:** OpenAI API (`gpt-5.2-pro`), Azure OpenAI, OpenAI Studio.
- **Release / knowledge:** December 11, 2025.
- **IDs:** `gpt-5.2-pro` (OpenAI API); multiple reasoning effort tiers.
- **Context window:** 400K tokens; 128K max output.
- **Modalities:** Text in/out; reasoning with adaptive thinking modes.
- **Pricing (as of 2026-10-28):** $1.75 / $14 per 1M tokens.
- **Architecture:** Proprietary; GPT architecture with enhanced reasoning capabilities.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **51.69%** (Vals AI, estimated from aggregated data)
- Terminal-Bench 1.0: **63.75%** (Vals AI, Terminus 2 harness)
- Vibe Code Bench: **53.5%** (Vals AI)
- AutomationBench: **45-50%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **91.67%** (Vals AI, rank #20 of 138)
- ARC-AGI-2 (Verified): **~90%** (OpenAI blog, first to cross threshold)
- IOI v1: **first place** (Vals AI)
- HLE: Good performance per OpenAI claims

Coding:

- SWE-bench: **75.8%** (estimated from aggregated data)
- Terminal-Bench: strong performance on coding tasks
- Tools: Excellent agentic capabilities

Long context:

- 400K token context with good retrieval

### Normalized scores (1–100)

Based on Vals AI and aggregated research:

- **Tool use: 81.3/100.** Strong on Terminal-Bench and agent tasks; competitive coding performance.
- **Reasoning: 92.8/100.** Excellent GPQA 91.67%; first to cross 90% on ARC-AGI-2.
- **Context window: 82.8/100.** 400K tokens meets tier; strong for long-context work.
- **Multimodal: 66.6/100.** Text-only output caps this tier; good input support.
- **Coding: 81.8/100.** Strong SWE-bench and terminal performance.
- **Cost efficiency: 25.8/100.** $1.75/$14 is mid-to-high-cost tier.

- **Overall Score: 80.9/100.** Mean of (81.3+92.8+82.8+66.6+81.8) = 81.0 → 81; excellent reasoning model with strong coding capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-28
- Method: public internet research (OpenAI blog, Vals AI, Terminal-Bench, BenchLM); scores normalized 1-100 interpretations.
- Sources: Vals AI model page, OpenAI announcements, Terminal-Bench leaderboard.