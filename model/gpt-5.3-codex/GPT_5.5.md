# GPT 5.3 Codex — findings by GPT 5.5

- Source: OpenAI/GPT 5.3 Codex
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** GPT-5.3-Codex is OpenAI's coding/terminal-agent specialist model, optimized for Codex cloud agents and software engineering workflows.
- **Provider / access:** OpenAI API / Codex.
- **Release / knowledge:** Released 2026-02-05 per public Codex coverage.
- **IDs:** `opencode/gpt-5.3-codex`
- **Context window:** Repo route is 128K; OpenAI API docs list 400K context for `gpt-5.3-codex`.
- **Modalities:** Repo route is text in/out.
- **Pricing (as of 2026-10-05):** OpenAI pricing lists $1.75/M input, $0.175/M cached input, and $14/M output.
- **Architecture:** Proprietary OpenAI Codex-specialized model.

### Raw benchmarks found

Agent / tool use:

- OpenAI API docs: list `gpt-5.3-codex` with a 400,000-token context window (`https://developers.openai.com/api/docs/models/gpt-5.3-codex`).
- OpenAI deployment safety card: includes production benchmark comparisons between GPT-5.2-Thinking and GPT-5.3-Codex; Codex cloud runs in an isolated container with network disabled by default (`https://deploymentsafety.openai.com/gpt-5-3-codex/gpt-5-3-codex.pdf`).
- Terminal-Bench 2.0: **77.3%** community-cited from release benchmarks, versus Opus 4.6 at 65.4%.
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- Codex specialization is coding/tool oriented; no GPQA/HLE rows found for exact model.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Production Rails codebase benchmark report: GPT-5.3 Codex delivered about **0.70 quality score** at under $1/ticket in that user's setup (`https://www.reddit.com/r/ClaudeAI/comments/1qxr7vs/gpt53_codex_vs_opus_46_we_benchmarked_both_on_our/`).
- Terminal-Bench 2.0: **77.3%**
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- API docs list 400K, while repo metadata tracks 128K for the OpenCode route; no MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.0 and Codex container-agent design support strong tool use.
- **Reasoning: 82/100.** Strong task reasoning for code, but not a general reasoning flagship.
- **Context window: 80/100.** API can be 400K, repo route is 128K; scored between them.
- **Multimodal: 15/100.** Tracked route is text-only.
- **Coding: 91/100.** Codex specialization and Terminal-Bench evidence justify a high coding score.
- **Cost efficiency: 74/100.** Input is reasonable, but $14/M output is costly for verbose agents.
- **Overall Score: 71/100.** Mean of the five quality dimensions; best fit is coding/terminal-agent work rather than general multimodal comparison.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
