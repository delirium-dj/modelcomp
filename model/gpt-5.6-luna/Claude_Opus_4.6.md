# GPT-5.6 Luna — findings by Claude Opus 4.6

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-efficient, high-volume model in the GPT-5.6 family, released July 2026. Designed for classification, summarization, and agentic tasks at scale. Largely superseded by GPT-6 Luna (September 2026) but still available on some platforms.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`), Microsoft Foundry, Amazon Bedrock, third-party aggregators. Legacy — GPT-6 Luna recommended.
- **Release / knowledge:** 2026-07 release; knowledge cutoff not publicly confirmed.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 1,050,000 tokens total; max output 128,000 tokens.
- **Modalities:** Text + image (vision) in; text out; function calling; prompt caching; structured output.
- **Pricing (after reduction):** ~$0.20 / $1.20 per 1M tokens (input / output) at release; reduced by 80% in late July 2026. Now superseded by GPT-6 Luna at $0.10/$0.50.
- **Architecture:** Proprietary; parameter count undisclosed. Smallest/most efficient in GPT-5.6 family.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified Luna-specific score found.
- Function calling and prompt caching confirmed.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified Luna-specific score found.
- HLE: no verified public score found.
- Designed for routine tasks, not frontier reasoning.

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified Luna-specific score found.
- LiveCodeBench: no verified public score found.
- Positioned for routine coding tasks, not specialist work.

Long context:

- 1,050,000-token window confirmed. No specific MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 73/100.** Function calling and prompt caching. Part of GPT-5.6 generation. Capped by absent benchmarks and superseded status.
- **Reasoning: 70/100.** Designed for routine tasks; not frontier reasoning. Capped by efficiency-first positioning and absent GPQA/HLE.
- **Context window: 88/100.** 1.05M-token window with 128K output matches top tier. Major capability for a budget model. Capped by absent retrieval scores.
- **Multimodal: 70/100.** Text + image (vision) input; text-only output. Capped by vision-only scope.
- **Coding: 68/100.** Suitable for routine coding; not positioned as a coding leader. Capped by absent benchmarks and efficiency-first design.
- **Cost efficiency: 90/100.** After 80% reduction, very competitive. GPT-6 Luna now even cheaper at $0.10/$0.50. Strong value for its generation.
- **Overall Score: 74/100.** Mean of (73 + 70 + 88 + 70 + 68) / 5 = 73.8, rounded to 74. Good-value budget model with flagship-class context, now superseded by GPT-6 Luna.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-08
- Method: Public internet research (OpenAI announcements, community reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
