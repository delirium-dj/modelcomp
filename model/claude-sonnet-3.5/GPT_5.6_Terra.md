# Claude 3.5 Sonnet — findings by GPT 5.6 Terra

- Source: Anthropic public announcements for `claude-3-5-sonnet`
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet
- **Short description:** Anthropic’s 2024 mid-tier Claude model, with an October refresh that added computer-use capability and substantially improved agentic coding.
- **Provider / access:** Anthropic API, Claude.ai, Amazon Bedrock, and Google Cloud Vertex AI.
- **Release / knowledge:** released 2024-06-21; updated 2024-10-22. No verified knowledge cutoff found.
- **IDs:** `anthropic/claude-3-5-sonnet`; no current Zen Free ID verified.
- **Context window:** 200K tokens.
- **Modalities:** text and image input; text output; the update offered computer-use beta through the API.
- **Pricing (as of launch):** $3 input / $15 output per million tokens.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- TAU-bench retail: **69.2%** (Anthropic, updated model).
- TAU-bench airline: **46.0%** (Anthropic, updated model).

Reasoning / knowledge:

- GPQA Diamond: **59.4%** (Anthropic’s reported June 2024 Claude 3.5 Sonnet result).

Coding:

- SWE-bench Verified: **49.0%** (Anthropic, updated model).
- HumanEval: **93.7%** (Anthropic/GitHub Copilot announcement).

Long context:

- **200K tokens** documented context window; no retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 72/100.** TAU-bench results and the computer-use release show real agent capability, capped by the weak airline-domain result.
- **Reasoning: 70/100.** GPQA Diamond at 59.4% was strong for its release period but is no longer frontier-level.
- **Context window: 85/100.** 200K is substantial, though materially below current million-token tiers and without a retrieval result.
- **Multimodal: 72/100.** Text-plus-image input and computer use are useful coverage, but no native audio/video output is documented.
- **Coding: 88/100.** 49.0% SWE-bench Verified and 93.7% HumanEval support a high coding score.
- **Cost efficiency: 68/100.** $3/$15 per million tokens was competitive for capability, but paid and now comparatively expensive.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions; a still capable legacy coding and vision model.

---

## Refresh note

Anthropic's current deprecation record lists Claude 3.5 Sonnet as retired; its historical scores are retained for comparison rather than treated as current availability.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: fresh public internet research; key sources: [launch announcement](https://www.anthropic.com/news/claude-3-5-sonnet), [updated model and computer use](https://www.anthropic.com/news/3-5-models-and-computer-use), and [GitHub Copilot announcement](https://www.anthropic.com/news/github-copilot). Scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
