# GPT-5.6 Luna — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's July 2026 budget tier of the GPT-5.6 family — frontier-class-a-year-ago capability at ~6 cents-per-task.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`), ChatGPT Work, Codex.
- **Release / knowledge:** 2026-07-09 GA; knowledge cutoff Feb 2026.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 1,050,000 tokens; 128K max output; >272K reprices.
- **Modalities:** text + image in; text out; reasoning none→max.
- **Pricing (as of 2026-10-02):** $0.20/M in, $0.02/M cache, $1.20/M out (cut 80% from $1/$6 on 2026-07-30); >272K: $0.40/$1.80.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **50.3%** (vs Sol 52.7%, Fable 5 40.5%, Opus 4.8 45.2% at lower cost-per-task than either)
- Terminal-Bench 2.1: **84.7%** (AA 80.9% independent)
- GDPval-AA v2: **1591.8 Elo**; OSWorld 2.0: **45.6%** (weak vs Sol 62.6%)
- AutomationBench: **14.9%**; BrowseComp: **83.3%**
- MRCR v2 long-context recall: **41.3%** (OpenAI launch table)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI) / **91.7%** (vals.ai)
- HLE: **39.5%** (AA); AA Intelligence Index: **51.2** (v4.1) / **37** (v4.3.2 re-basis)
- FrontierMath Tier 1–3: 78.6%; Tier 4: 58.5%

Coding:

- SWE-bench Verified: **79.8%** (OpenAI) / **93.0%** (vals.ai saturated)
- SWE-Bench Pro: **62.7%**; DeepSWE v1.1: **67.2%** (AA 67%); Terminal-Bench 2.1 as above
- AA Coding Agent Index v1.1: **74.6 Index** (vs Sol's 80, Terra 77.4)

Long context:

- 1.05M window; MRCR v2 recall 41.3% (mid-tier long-context).

### Normalized scores (1–100)

- **Tool use: 78/100.** Agents' Last Exam 50.3% (best cost-adjusted), Terminal-Bench 2.1 ~81–85%, GDPval 1592 Elo; OSWorld 45.6% is the weakest row.
- **Reasoning: 76/100.** GPQA 92.3% and HLE 39.5% are strong on paper; AA Index 37 (v4.3.2 basis) tempers it relative to the Sol/Terra tiers.
- **Context window: 93/100.** Same 1.05M window as the Sol/Terra tier, with a 272K repricing cliff.
- **Multimodal: 65/100.** Text + image in.
- **Coding: 78/100.** SWE-bench Verified 93% (saturated), Pro 62.7%, DeepSWE 67% — within a few points of Sol at ~1/10th the cost/task.
- **Cost efficiency: 95/100.** $0.20/$1.20 with 90% cache discount — the most aggressive frontier-adjacent rate in the catalog.
- **Overall Score: 78/100.** Mean of the five quality dims; best fit for high-volume agent automation where Sol-class scores aren't worth the bill.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch tables, benchr, The Model Gap, OpenAI builders guide); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
