# Claude Opus 4.7 — findings by GPT 5.6 Luna

- Source: Anthropic / Claude Opus 4.7
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's proprietary hybrid-reasoning frontier model for advanced software engineering, long-running agents, professional knowledge work, and high-resolution vision. The model is a distinct release from Opus 4.6, not a serving-tier alias.
- **Provider / access:** Anthropic Claude API, Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry; exact API ID `claude-opus-4-7`. The official launch announcement identifies API availability; API access uses Anthropic's Messages API.
- **Release / knowledge:** Released 2026-04-16. Artificial Analysis reports a January 2026 knowledge cutoff; Anthropic's announcement does not state a cutoff.
- **IDs:** `anthropic/claude-opus-4-7` (Anthropic API ID `claude-opus-4-7`). No OpenCode Zen Free ID was verified in the searches.
- **Context window:** 1M tokens, verified independently by Artificial Analysis and BenchLM; maximum output was not stated in the sources consulted.
- **Modalities:** Text and image input, text output, reasoning/extended thinking, tool calls, and higher-resolution vision. Anthropic documents images up to 2,576 pixels on the long edge; JSON/tool calling is supported through the API, but a standalone JSON-mode limit was not verified.
- **Pricing (as of 2026-10-23):** $5 per 1M input tokens and $25 per 1M output tokens; Anthropic states pricing is unchanged from Opus 4.6. The independent Artificial Analysis listing reports the same prices and a 90% cache discount. Paid model; no Free tier was verified.
- **Architecture:** Proprietary; Anthropic does not disclose parameter count or architecture details.

### Raw benchmarks found

> Sources were compared rather than treating a single leaderboard as authoritative. Anthropic reports internal/pre-release and selected third-party evaluations, Artificial Analysis reports an independent composite and measured API characteristics, and BenchLM aggregates independent leaderboard results. Figures are not directly interchangeable when harness, effort, model variant, or safeguards differ.

Agent / tool use:

- Tau2-bench: **74%** (BenchLM, source attributed to Artificial Analysis; exact harness/model variant shown on the BenchLM model page).
- Terminal-Bench 2.1: **68.5%** (BenchLM, Vals AI leaderboard).
- Terminal-Bench 2.0: Anthropic reports a Terminus-2 harness with thinking disabled but does not expose a text value in the page's accessible content.
- GDPval-AA: Anthropic describes Opus 4.7 as state-of-the-art; no numeric score was exposed in the accessible launch page.
- Anthropic customer evaluations report 90.9% on Harvey's BigLaw Bench and 0.813 on an internal General Finance module; these are vendor/customer evaluations, not general-purpose public leaderboards.

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (Artificial Analysis aggregate) versus **90.2%** (Vals AI leaderboard as reproduced by BenchLM). The spread is a source/harness difference, not treated as a contradiction in model identity.
- Humanity's Last Exam: **33.3%** (Artificial Analysis aggregate, reported by BenchLM).
- Artificial Analysis Intelligence Index: **41, estimated** (Artificial Analysis model page). BenchLM reports **30.9%** for its percentage presentation of the same family of evaluations; the scales are different and must not be averaged.
- AA-Omniscience Accuracy: **44.7%**; hallucination rate **54.1%** (Artificial Analysis, via BenchLM).
- AA-LCR: **75.7%** (Artificial Analysis, via BenchLM).

Coding:

- SWE-bench Verified: **82.0%** (Vals AI leaderboard, via BenchLM).
- LiveCodeBench: **85.1%** (Vals AI leaderboard, via BenchLM).
- Vibe Code Bench: **71.0%** (Vals AI Vibe Code Bench v1.1, via BenchLM).
- FrontierCode 1.1 Main: **38.5%** (Cognition leaderboard, via BenchLM).
- Anthropic reports that Opus 4.7 improved its internal 93-task coding benchmark by 13% relative to Opus 4.6, and cites a customer CursorBench result above 70% versus 58% for Opus 4.6. These relative/internal results corroborate the direction of the independent coding results but are not substituted for the public scores.

Long context:

- Context capacity is **1M tokens** (Artificial Analysis and BenchLM). Artificial Analysis reports **75.7% AA-LCR**, while Anthropic describes the model as having the most consistent long-context performance in its internal research-agent evaluation; no public MRCR/RULER score at a stated window length was verified.

### Normalized scores (1–100)

- **Tool use: 87/100.** Tau2-bench at 74% and Terminal-Bench 2.1 at 68.5% support strong agentic tool use, while the lack of a directly comparable public tool-use suite and the moderate terminal score cap it below the very top tier.
- **Reasoning: 89/100.** GPQA Diamond is 88.5–90.2%, HLE is 33.3%, and AA-LCR is 75.7%; the strong frontier results are offset by source variation and only moderate HLE performance.
- **Context window: 95/100.** Independent listings agree on a 1M-token total window and AA-LCR is 75.7%; the absence of a public retrieval score at the full window prevents a 100.
- **Multimodal: 88/100.** Text/image input and text output are verified, with Anthropic documenting materially higher-resolution vision and independent listings confirming image support. No audio/video output or broad multimodal benchmark was verified.
- **Coding: 90/100.** SWE-bench Verified 82.0%, LiveCodeBench 85.1%, Vibe Code Bench 71.0%, and strong Anthropic/customer coding results establish excellent coding ability; FrontierCode 1.1 at 38.5% and harness variance cap the score.
- **Cost efficiency: 62/100.** The $5/$25 pricing and slow measured output of about 53.7 tokens/second on Artificial Analysis make it expensive for routine workloads, despite strong quality and a reported 90% cache discount.
- **Overall Score: 90/100.** Half-up mean of the five quality dimensions: (87 + 89 + 95 + 88 + 90) / 5 = 89.8. Best fit is difficult, long-running software and research-agent work where reliability matters more than token cost.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Three independent web searches plus direct source comparison: Anthropic's official launch/model documentation, Artificial Analysis's independent model/evaluation page, BenchLM's independent benchmark aggregation, and a Bing search used to locate corroborating coverage. Conflicting composite-score scales and benchmark harnesses were kept separate; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
