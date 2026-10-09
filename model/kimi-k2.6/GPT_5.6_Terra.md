# Kimi K2.6 — findings by GPT 5.6 Terra

- Source: Moonshot AI/Kimi K2.6
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights agentic/reasoning model, aimed at tool-driven research and software work.
- **Provider / access:** Moonshot AI API at `platform.moonshot.ai`, documented as OpenAI- and Anthropic-compatible; weights are published on [Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.6).
- **Release / knowledge:** 2026; training cutoff not published in the cited card.
- **IDs:** `moonshotai/Kimi-K2.6`.
- **Context window:** 262,144 tokens in the published evaluations ([model card](https://huggingface.co/moonshotai/Kimi-K2.6)).
- **Modalities:** text, image and video input; text output; tool use supported through its API.
- **Pricing (as of 2026-09-29):** API pricing was not independently verified in the source reviewed; open weights permit self-hosting, with infrastructure cost dependent on deployment.
- **Architecture:** open weights; the cited K2.6 card does not state the parameter count in the reviewed material.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **83.2%** (Moonshot AI [model card](https://huggingface.co/moonshotai/Kimi-K2.6), agent benchmark).
- DeepSearchQA: **92.5 F1 / 83.0% accuracy** (Moonshot AI model card).
- MCPMark: **55.9%** (Moonshot AI model card).
- Toolathlon: **50.0%** (Moonshot AI model card).
- Terminal-Bench 2.0: **66.7%** (Moonshot AI model card).

Reasoning / knowledge:

- HLE (full): **34.7%** (Moonshot AI model card).
- AIME 2026: **96.4%** (Moonshot AI model card).
- GPQA: **90.5%** (Moonshot AI model card).

Coding:

- SWE-bench Verified: **80.2%** (Moonshot AI model card).
- SWE-bench Pro: **58.6%** (Moonshot AI model card).
- LiveCodeBench v6: **89.6%** (Moonshot AI model card).

Long context:

- Evaluated at **262,144 tokens**; no separate long-context retrieval score found in the reviewed source.

### Normalized scores (1–100)

- **Tool use: 89/100.** BrowseComp 83.2% and DeepSearchQA 92.5 F1 are strong, though Toolathlon 50.0% and MCPMark 55.9% cap consistency.
- **Reasoning: 91/100.** AIME 2026 96.4% and GPQA 90.5% are exceptional; HLE 34.7% prevents a higher score.
- **Context window: 85/100.** The verified 262k-token evaluation window is substantial, but no retrieval-at-length result was reported.
- **Multimodal: 88/100.** Officially accepts images and video as well as text, with strong MMMU-Pro results (79.4% without tools) in the model card; output remains text.
- **Coding: 91/100.** SWE-bench Verified 80.2% and LiveCodeBench v6 89.6% support a very high coding score; SWE-bench Pro 58.6% is the cap.
- **Cost efficiency: 82/100.** Open weights improve deployment choice, but no current first-party token price was verified for a stronger value judgment.
- **Overall Score: 89/100.** Half-up mean of the five quality dimensions; best suited to high-end coding and research agents.

## Refresh note

Fresh primary-source recheck did not locate a newer official Kimi K2.6 model card or comparable public benchmark table. The prior evidence remains in place; no results from other Kimi releases are substituted.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
