# GPT-5 Codex — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-5-Codex (`gpt-5-codex`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's September 2025 coding specialist — a GPT-5 variant tuned for Codex with dynamic thinking time, code review and large refactors. Removed from Codex surfaces in April 2026 and deprecated on Zen in favour of the 5.1/5.3 Codex line.
- **Provider / access:** OpenAI Responses API (`gpt-5-codex`), OpenCode Zen (`opencode/gpt-5-codex`); Responses-API only, not Chat Completions.
- **Release / knowledge:** 2025-09-15; knowledge cutoff 2024-09-30.
- **IDs:** `gpt-5-codex`, `opencode/gpt-5-codex`. No Free ID.
- **Context window:** 400,000 total; 128,000 max output — OpenAI model docs.
- **Modalities:** text and image in; text out; reasoning tokens; tool calls.
- **Pricing (as of 2026-10-23):** $1.25/$10.00 per 1M in/out, $0.125 cached (native); Zen $1.07/$8.50 (legacy).
- **Architecture:** proprietary GPT-5-family decoder, coding post-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **41.3%** (Mini-SWE-Agent, tbench.ai leaderboard)
- SWE-rebench: **44.0%** (airank.dev model page)
- Claw-Eval / MCP-Atlas / GDPval-AA / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / Artificial Analysis Intelligence Index: **no verified public score found** for the Codex variant specifically

Coding:

- SWE-bench Verified: **74.5%** (OpenAI/apidog launch coverage; llm-stats.com leaderboard)
- Internal code-refactor benchmark: **51.3%** (vs 33.9% for GPT-5, OpenAI)
- Codex code-review benchmark: **72.8%** (OpenAI, as reported by apidog.com)
- LiveCodeBench / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR/RULER figure published; 400K window is vendor-stated only.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 41.3% under Mini-SWE-Agent is a modest agentic result; no Tau2/OSWorld data exists (tbench.ai).
- **Reasoning: 70/100.** No GPQA/HLE row was published for the Codex variant; the score is a conservative GPT-5-family inference, capped by missing direct evidence.
- **Context window: 80/100.** 400K total / 128K output is frontier-tier on paper, but no retrieval benchmark was published (developers.openai.com).
- **Multimodal: 45/100.** Image input only, text output — enough for screenshots/diagrams in coding, nothing more.
- **Coding: 80/100.** SWE-bench Verified 74.5%, refactor 51.3% and code review 72.8% made it the reference coding model of late 2025 (apidog.com; llm-stats.com).
- **Cost efficiency: 72/100.** $1.25/$10.00 is mid-frontier pricing; Zen's $1.07/$8.50 legacy lane helped, but the model is retired.
- **Overall Score: 66/100.** Mean of the five quality dims (55+70+80+45+80)/5 = 66.0 → 66. Best-fit: legacy Codex workflows that still pin the id; newer Codex models are cheaper per task.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (OpenAI model docs, Terminal-Bench leaderboard, llm-stats, airank.dev, apidog launch analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
