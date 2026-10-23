# GPT-5.1 Codex Max — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-5.1-Codex-Max (`gpt-5.1-codex-max`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's December 2025 frontier coding model — the first Codex trained to work across multiple context windows via native compaction, with an `xhigh` reasoning effort for long-horizon tasks. API shut down 2026-07-23 in favour of GPT-5.6 Sol.
- **Provider / access:** OpenAI Responses API (`gpt-5.1-codex-max`), OpenCode Zen (`opencode/gpt-5.1-codex-max`); Responses-API only.
- **Release / knowledge:** 2025-12-04; knowledge cutoff 2024-09-30.
- **IDs:** `gpt-5.1-codex-max`, `opencode/gpt-5.1-codex-max`. No Free ID.
- **Context window:** 400,000 total; 128,000 max output — OpenAI model docs.
- **Modalities:** text and image in; text out; reasoning tokens; tool calls.
- **Pricing (as of 2026-10-23):** $1.25/$10.00 per 1M in/out, $0.125 cached (native and Zen identical).
- **Architecture:** proprietary GPT-5.1 Codex variant with native compaction.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** (n=89, OpenAI launch post; 53.9% original → 53.9% after retries on the independent xdotli/gpt-5.2-tb2 run)
- SWE-Lancer IC SWE: **79.9%** (OpenAI; vs 66.3% for GPT-5.1-Codex)
- Claw-Eval / MCP-Atlas / GDPval-AA / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / Artificial Analysis Intelligence Index: **no verified public score found** for the Codex Max variant

Coding:

- SWE-bench Verified: **77.9%** (n=500, `xhigh`, OpenAI launch post)
- SWE-bench Verified: **73.7%** at the same `medium` effort as GPT-5.1-Codex (OpenAI)
- LiveCodeBench / Vibe Code Bench: **no verified public score found**

Long context:

- Native compaction across multiple 400K windows is the headline capability; no MRCR/RULER figure was published.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 58.1% and SWE-Lancer 79.9% show strong long-horizon agent behavior; no other agentic suites exist (OpenAI launch post).
- **Reasoning: 74/100.** No GPQA/HLE row for the Codex variant; `xhigh` effort and refactor depth imply strong reasoning, but the score is capped by missing direct benchmarks.
- **Context window: 80/100.** 400K per window with native compaction is effectively unbounded for long sessions; no retrieval measurement (developers.openai.com).
- **Multimodal: 45/100.** Image in, text out only.
- **Coding: 84/100.** SWE-bench Verified 77.9%, SWE-Lancer 79.9% and Terminal-Bench 58.1% made it the coding frontier at launch (OpenAI).
- **Cost efficiency: 65/100.** $1.25/$10.00 with 30% fewer thinking tokens than 5.1-Codex is fair, but the retired id and high per-task cost cap it.
- **Overall Score: 69/100.** Mean of the five quality dims (62+74+80+45+84)/5 = 69.0 → 69. Best-fit: multi-hour autonomous refactors and review on the Codex scaffold; superseded by GPT-5.6 Sol.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (OpenAI launch post and model docs, OpenAI Deployment Safety Hub system card, independent Terminal-Bench 2.0 run, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
