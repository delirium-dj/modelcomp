# GPT-5.3 Codex — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.3 Codex
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's dedicated agentic coding model (Feb 2026). 25% faster than GPT-5.2-Codex, first OpenAI model to help debug its own training. Specialized for long-running SWE tasks with mid-task steerability. Now deprecated in favor of GPT-6 family.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`), Azure OpenAI, Cursor. Now deprecated; succeeded by GPT-6 family.
- **Release / knowledge:** 2026-02-05 release. Deprecated as of late 2026.
- **IDs:** `openai/gpt-5.3-codex`
- **Context window:** 400,000 tokens.
- **Modalities:** Text, image in; text out; tool use; web search; terminal execution. Mid-task steerability.
- **Pricing (as of 2026-10-11):** $1.75 / $14.00 per 1M tokens (input/output). Now deprecated.
- **Architecture:** Proprietary; OpenAI agentic coding model. Supports reasoning and multimodal input.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: led the benchmark at release (source: cursor.com, datacamp.com; exact % not publicly pinned)
- OSWorld-Verified: strong computer-use capability demonstrated (source: openai.com)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found
- HLE (Humanity's Last Exam): no verified public score found
- ARC-AGI-2: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Pro: led the benchmark at release (source: cursor.com, datacamp.com; exact % not publicly pinned)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- 400,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 82/100.** Led Terminal-Bench at release (Feb 2026). OSWorld-Verified capability demonstrated. Mid-task steerability is unique agentic feature. Since superseded by GPT-6 family. Missing exact scores and GDPval data.
- **Reasoning: 78/100.** Strong reasoning inferred from coding agent capabilities. No standalone GPQA/HLE/ARC-AGI benchmarks published. Positioned as frontier-class at release but now legacy.
- **Context window: 68/100.** 400K is good but below 1M models (ref: 200K = 75; 400K ~= 68). Below current frontier context windows.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Basic multimodal = 50–60 range.
- **Coding: 85/100.** Led SWE-bench Pro and Terminal-Bench at release. 25% faster than predecessor. First self-debugging model. Now surpassed by GPT-6 family but was frontier at launch.
- **Cost efficiency: 68/100.** $1.75/$14.00 is expensive, especially output at $14/1M. Deprecated model with better successors at lower prices.
- **Overall Score: 74/100.** Mean of (82 + 78 + 68 + 55 + 85) / 5 = 73.6, rounded to 74. Pioneering agentic coding model that set benchmarks; now a legacy product surpassed by GPT-6 at better pricing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (openai.com, cursor.com, datacamp.com, benchlm.ai, laravel-news.com, azure.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
