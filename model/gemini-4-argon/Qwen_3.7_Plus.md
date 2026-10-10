# Gemini 4 Argon — findings by Qwen 3.7 Plus

- Source: Google/Gemini 4 Argon (`opencode/gemini-4-argon`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's first proprietary model above Flash class in over 7 months, released September 30, 2026. Features the highest reasoning available from Google, with industry-leading low hallucination rates and strong agentic performance. Currently being rolled out to selected users — not yet publicly available.
- **Provider / access:** Gemini API (`gemini-4-argon`); OpenCode Zen `opencode/gemini-4-argon`. Currently limited rollout to selected users. No free tier confirmed.
- **Release / knowledge:** 2026-09-30 release (limited rollout); knowledge cutoff not precisely documented.
- **IDs:** `opencode/gemini-4-argon` (OpenCode Zen). No free ID confirmed.
- **Context window:** 1,048,576 tokens (1M) total; 262,144 (256K) max output standard; up to 1M output via Long Decode Continuation feature.
- **Modalities:** Text, image, video, and speech input; text out. Reasoning yes (high reasoning level). Tool calls supported.
- **Pricing (as of 2026-10-10):** Introductory (50% discount, at least one month): $2 in / $10 out per 1M tokens. Standard: $4 in / $20 out per 1M tokens. Cached input: 95% discount ($0.10/M at discounted pricing).
- **Architecture:** Proprietary; parameter count not disclosed. Part of Google's Gemini 4 family.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **78%** (Artificial Analysis; #1; leads Claude Sonnet 5.5's 71%)
- Terminal-Bench 4.0: **57%** (Artificial Analysis; behind Claude Sonnet 5.5's 64%, Claude Opus 5.5's 60%, GPT-6 Astra's 59%; +53 points from Gemini 3.1 Pro)
- AA-Briefcase v1.1: **1494 Elo** (Artificial Analysis; 65% rubric pass rate — highest recorded; lower Analytical Quality 1576 Elo and Presentation Quality 1308 Elo)
- GDPval-AA v2.1: no specific score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (ties with GPT-6 Astra at max effort; #1 jointly; 23 points above Gemini 3.1 Pro)
- AA-Omniscience hallucination rate: **15%** (lowest among models scoring 45+ on Intelligence Index; vs GPT-6 Astra's 51%)
- AA-Omniscience accuracy: **50%** (5 points below Gemini 3.1 Pro; 13 points below GPT-6 Astra's 63%)
- AA-Omniscience overall: **42** (in line with GPT-6 Astra's 43)

Coding:

- Terminal-Bench 4.0: **57%** (also listed under tool use)
- Code Arena: ranks **8th** (dev.to analysis — noted as a weakness)
- SWE-bench Verified: no specific score found
- SWE-bench Pro: no specific score found
- DeepSWE: no specific score found
- LiveCodeBench: no specific score found

Long context:

- 1M-token context with Long Decode Continuation (up to 1M output tokens)
- No specific MRCR retrieval scores published

### Normalized scores (1–100)

- **Tool use: 89/100.** AutomationBench-AA 78% is #1. Terminal-Bench 4.0 at 57% is strong (top 4). AA-Briefcase 1494 Elo with highest-ever rubric pass rate (65%). The agentic improvement over previous Gemini models is dramatic (+53 points on Terminal-Bench 4.0 from Gemini 3.1 Pro). Capped by the lower Analytical Quality and Presentation Quality sub-scores on AA-Briefcase.
- **Reasoning: 89/100.** Intelligence Index 53 ties for #1 with GPT-6 Astra. AA-Omniscience shows the lowest hallucination rate (15%) among leading models — a major differentiator. However, accuracy at 50% is 13 points below GPT-6 Astra. The combination of top Intelligence Index with lowest hallucination is exceptional, but the accuracy trade-off caps the score.
- **Context window: 90/100.** 1M-token context with up to 1M output via Long Decode Continuation — unique feature. 256K standard max output is generous. No long-context premium reported. No specific MRCR retrieval scores. The Long Decode Continuation feature is innovative.
- **Multimodal: 83/100.** Text, image, video, and speech input — broad input set including speech. Text-only output. No specific multimodal benchmark scores found (MMMU-Pro, etc.). Capped by text-only output and absence of multimodal benchmark data.
- **Coding: 72/100.** Terminal-Bench 4.0 at 57% is strong. However, Code Arena ranking of 8th is a notable weakness. No SWE-bench, DeepSWE, or LiveCodeBench scores found. The coding performance is the weakest dimension — described as "code isn't one" of its winning areas (dev.to). Capped by the Code Arena ranking and absence of key coding benchmark results.
- **Cost efficiency: 78/100.** At introductory 50% discount ($2/$10), cost per Intelligence Index task is $1.99 — 60% of GPT-6 Astra's. Even at standard pricing ($4/$20), cost per task would be $3.98 — ~1.2x GPT-6 Astra. 95% cache discount is the best available. The introductory pricing makes it very competitive; standard pricing is moderate. Discount end date not confirmed.
- **Overall Score: 84.6/100.** Mean of five quality dims: (89 + 89 + 90 + 83 + 72) / 5 = 84.6, rounded to 85. A strong new frontier model from Google with leading agentic performance (AutomationBench #1), lowest hallucination rates, and innovative Long Decode Continuation. Best fit for business automation, knowledge work requiring low hallucination, and long-horizon tasks. The coding weakness (Code Arena 8th) and limited availability are the main trade-offs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Artificial Analysis, Google official blog, NeuralTrust, dev.to, MindStudio, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
