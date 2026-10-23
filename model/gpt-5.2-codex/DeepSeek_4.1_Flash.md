# GPT-5.2 Codex — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-5.2-Codex (`gpt-5.2-codex`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's GPT-5.2 derivative tuned for agentic coding inside Codex, adding native context compaction, better long-context understanding and native Windows support. Responses-API only.
- **Provider / access:** OpenAI Responses API (`gpt-5.2-codex`), OpenCode Zen (`opencode/gpt-5.2-codex`).
- **Release / knowledge:** GPT-5.2 generation (December 2025); knowledge cutoff not stated in the sources found.
- **IDs:** `gpt-5.2-codex`, `opencode/gpt-5.2-codex`. No Free ID.
- **Context window:** 400,000 total; 272,000 max input; 128,000 max output — OpenAI model docs.
- **Modalities:** text and image in; text out; reasoning tokens; tool calls; native compaction.
- **Pricing (as of 2026-10-23):** $1.75/$14.00 per 1M in/out, $0.175 cached.
- **Architecture:** proprietary GPT-5.2-family decoder, Codex post-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **64.0%** (timewell.jp Codex guide; OpenAI reports state-of-the-art but does not print the figure in the launch page)
- Independent re-run on 89 tasks: GPT-5.2 base 53.9% → 59.6% after retries; GPT-5.2-Codex not separately run (xdotli/gpt-5.2-tb2)
- Tau2-Bench / OSWorld / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / Artificial Analysis Intelligence Index: **no verified public score found** for the Codex variant

Coding:

- SWE-Bench Pro: **55.6%** (OpenAI launch claim, four languages; aiweekly.co)
- SWE-bench Verified: **not evaluated by OpenAI** — "Why we no longer evaluate SWE-bench Verified" (contamination concerns)
- LiveCodeBench / Vibe Code Bench: **no verified public score found**

Long context:

- Native compaction across 400K windows; no MRCR/RULER figure published.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.0 64.0% is clearly above GPT-5.1 Codex Max's 58.1%, though no other agentic suite exists (timewell.jp; OpenAI).
- **Reasoning: 78/100.** No direct GPQA/HLE row for the Codex variant; GPT-5.2 base scores GPQA 92.4 and this is a tuned derivative, so the score is capped by missing direct evidence (rankedagi.com).
- **Context window: 82/100.** 400K total with 272K max input and compaction is frontier-tier; no retrieval benchmark (developers.openai.com).
- **Multimodal: 45/100.** Image in, text out.
- **Coding: 85/100.** SWE-Bench Pro 55.6% and Terminal-Bench 2.0 64.0% made it launch state-of-the-art for agentic coding (OpenAI; aiweekly.co).
- **Cost efficiency: 68/100.** $1.75/$14.00 is premium; compaction reduces long-session token cost but the headline rate is high.
- **Overall Score: 72/100.** Mean of the five quality dims (70+78+82+45+85)/5 = 72.0 → 72. Best-fit: long-horizon Codex sessions on Windows or Unix where terminal reliability matters more than price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (OpenAI launch post and model docs, independent Terminal-Bench 2.0 run, aiweekly.co, timewell.jp, Vals AI SWE-bench page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
