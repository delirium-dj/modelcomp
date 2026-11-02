# Claude Opus 4.7 — findings by GPT 5.6 Luna

- Source: Anthropic / Claude Opus 4.7
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's proprietary hybrid-reasoning model for advanced software engineering, long-running agents, professional knowledge work, and high-resolution vision. It is a distinct release from Opus 4.6, not a serving-tier alias.
- **Provider / access:** Anthropic Claude API, Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry; API ID `claude-opus-4-7`. Anthropic's Messages API supports extended/adaptive thinking and tool calls.
- **Release / knowledge:** Released April 16, 2026; the current Anthropic platform documentation lists a January 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-4-7` and Anthropic API ID `claude-opus-4-7`. No OpenCode Zen Free ID was verified.
- **Context window:** 1,000,000 tokens; maximum output 128,000 tokens in the current platform documentation.
- **Modalities:** Text and image input, text output, adaptive/extended thinking, tool calls, JSON/tool calling, and higher-resolution vision. Anthropic documents images up to 2,576 pixels on the long edge.
- **Pricing (as of 2026-11-02):** $5 per 1M input tokens and $25 per 1M output tokens. Anthropic lists the same base pricing as Opus 4.6; independent listings report a 90% cache discount. Paid model; no Free tier was verified.
- **Architecture:** Proprietary; Anthropic does not disclose parameter count or internal architecture details.

### Raw benchmarks found

Sources were compared rather than treating a single leaderboard as authoritative. Figures differ by harness, effort, model variant, safeguards, and whether the result is vendor-reported.

Agent / tool use:

- Tau2-bench: **74%** (BenchLM, attributed to Artificial Analysis)
- Terminal-Bench 2.1: **68.5%** (BenchLM, Vals AI leaderboard)
- TerminalBenchHard: **54.5%** (Artificial Analysis, via the current BenchLM profile)
- Gert Labs: **65.59%** and ResearchClawBench: **20.7%** (current BenchLM profile)
- Anthropic customer evaluations report **90.9%** on Harvey's BigLaw Bench; this is not a general-purpose public leaderboard.
- BenchLM overall: **65.18/100, #31 of 1,004**, with 29 of 724 benchmark rows covered.

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (Artificial Analysis aggregate) versus **90.2%** (Vals AI leaderboard via BenchLM).
- Humanity's Last Exam: **33.3%** (Artificial Analysis aggregate).
- Artificial Analysis Intelligence Index: **41**, estimated; BenchLM also presents a **30.9%** percentage-scale result. These scales are not averaged.
- AA-Omniscience Accuracy: **44.7%**; hallucination rate **54.1%**; AA-LCR: **75.7%**.

Coding:

- SWE-bench Verified: **82.0%** (Vals AI leaderboard via BenchLM)
- LiveCodeBench: **85.1%** (Vals AI leaderboard via BenchLM)
- Vibe Code Bench: **71.0%** (Vals AI v1.1 via BenchLM)
- FrontierCode 1.1 Main: **38.5%** (Cognition leaderboard via BenchLM)
- Anthropic reports a 13% improvement on its internal 93-task coding benchmark relative to Opus 4.6 and a customer CursorBench result above 70%; neither replaces the public figures above.

Long context:

- Context capacity is **1M tokens** and AA-LCR is **75.7%**. No public MRCR/RULER score at a stated full-window length was verified.

### Normalized scores (1–100)

- **Tool use: 87/100.** Tau2-bench at 74%, terminal results, and Anthropic's API tool support establish strong agentic use, while the moderate terminal scores cap it below the top tier.
- **Reasoning: 89/100.** GPQA is 88.5–90.2%, HLE is 33.3%, and AA-LCR is 75.7%; source variation and HLE keep it below the highest frontier score.
- **Context window: 95/100.** The 1M-token window is verified and AA-LCR is strong, but no independent full-window retrieval curve was found.
- **Multimodal: 88/100.** Text/image input, text output, and higher-resolution vision are verified; no audio/video output or broad independent multimodal suite was found.
- **Coding: 90/100.** SWE-bench 82.0%, LiveCodeBench 85.1%, and Vibe Code Bench 71.0% establish excellent coding ability; FrontierCode 38.5% and harness variance cap the score.
- **Cost efficiency: 62/100.** $5/$25 pricing and measured output around 53.7 tokens/second make it expensive for routine workloads despite the reported cache discount.
- **Overall Score: 89.8/100.** Mean of the five quality dimensions `(87 + 89 + 95 + 88 + 90) / 5 = 89.8`; best fit is difficult, long-running software and research-agent work where reliability matters more than token cost.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: direct comparison of Anthropic's current platform/launch documentation, Artificial Analysis measurements, and BenchLM's independent aggregation; conflicting composite scales and benchmark harnesses were kept separate, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Anthropic Claude Opus 4.7 platform documentation](https://platform.claude.com/docs/en/models/opus-4-7/overview)
  - [Anthropic Opus 4.7 announcement](https://www.anthropic.com/news/claude-opus-4-7)
  - [BenchLM Claude Opus 4.7 profile](https://benchlm.ai/models/claude-opus-4-7)
