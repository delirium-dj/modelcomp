# GPT-6.1 Terra — findings by Beam

- Source: OpenAI / GPT-6.1 Terra (gpt-6.1-terra)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, efficient mid-range model (released 2026-10-26) combining detailed visual reasoning, precise computer use, and natural writing; positioned for desktop automation, form-filling, and coding at a fraction of frontier cost.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`); ChatGPT Work/Codex for Plus/Pro/Enterprise/Edu. Chat Completions + Responses API.
- **Release / knowledge:** 2026-10-26; knowledge cutoff 2026-06 (per models.dev).
- **IDs:** `gpt-6.1-terra` (OpenAI); `openai/gpt-6.1-terra` (gateway alias).
- **Context window:** 1,050,000 tokens total; 128,000 max output (verified via models.dev/OpenAI docs).
- **Modalities:** text, image in; text out; reasoning yes (minimal→xhigh); tool calls yes; JSON/structured output yes.
- **Pricing (as of 2026-10-29):** $1.00 / $0.05 cached / $5.00 per 1M in/cached/out (OpenAI standard API).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **+15 pts vs GPT-5.6 Terra at medium effort**; matches GPT-6 Astra at 1/10 token price (OpenAI)
- OSWorld 2.1 (desktop agents): **beats GPT-5.6 Terra's best at medium effort** (OpenAI)
- AutomationBench-AA: **60%** (AA comparison vs GPT-6.1 Sol 65%)
- AA-Briefcase v1.1: **1333 Elo** (AA)
- GDPval-AA v2.1: **1415 Elo** (AA)
- AA-Omniscience: **29** (AA)
- Internal error-rate benchmark: **16.7% at low effort** (down from 53.6% for GPT-5.6 Terra); **4.3% at max effort** (OpenAI)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **45** (AA, Xhigh)
- AA-HLE: **44%** (AA)
- AA-LCR v1.1: **82%** (AA)
- AA-Omniscience Accuracy/Hallucination: accuracy +2 pts; guessing rate 38% (down from 88%) (AA)
- MMMU-Pro (visual reasoning): outperforms GPT-5.6 Terra at every reasoning level; nearly matches GPT-6 Astra/Sol (OpenAI)
- HealthBench: on-par with GPT-5.6 Terra on production benchmarks (OpenAI system card)

Coding:

- Terminal-Bench 4.0: **50.3% at max effort** (OpenAI); **49.49%** on Vals AI leaderboard
- Terminal-Bench-Science 0.1: within 5 pts of Claude Opus 5.5 at <1/5 cost (OpenAI)
- SciCode: **53%** (AA comparison)
- Coding Index: improved sharply vs GPT-5.6 Terra (OpenAI)

Long context:

- Context window 1.05M; AA-LCR 82% (AA comparison)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong computer-use/agent gains (Agents' Last Exam +15 pts, OSWorld 2.1 beats predecessor, AutomationBench 60%, AA-Briefcase 1333); capped by absence of a published Terminal-Bench 2.1/Tau3 row.
- **Reasoning: 85/100.** AA Intelligence Index 45, HLE 44%, LCR 82%, Omniscience 29, and sharply lower hallucination (4.3% at max); capped by mid-tier knowledge-heavy evals.
- **Context window: 98/100.** 1.05M-token window with 82% long-context retrieval.
- **Multimodal: 75/100.** Text + image input with text output; no audio/video/PDF beyond image.
- **Coding: 82/100.** Terminal-Bench 4.0 50.3%, SciCode 53%, strong scientific coding; capped by mid-range absolute scores.
- **Cost efficiency: 95/100.** $1/$0.05-cached/$5 per 1M with 9x lower cost per task than Opus 5.5; among the best price/performance frontier (AA).
- **Overall Score: 86/100.** (88+85+98+75+82)/5 = 85.6 → 86; best fit for cost-sensitive visual reasoning, desktop automation, and high-volume coding.

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-10-29
- Method: public internet research (OpenAI blog/system card, Artificial Analysis, independent reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
