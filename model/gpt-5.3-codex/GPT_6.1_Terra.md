# GPT-5.3-Codex — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.3-codex`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's agentic coding model; current model documentation marks the API snapshot deprecated.
- **Provider / access:** OpenAI Responses API `gpt-5.3-codex`; Chat Completions is not supported natively. Some elevated cyber-risk requests may route to GPT-5.2 according to OpenAI's launch notes.
- **Release / knowledge:** OpenAI announced 2026-02-05; Vals's evaluation update is dated 2026-02-24. Knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.3-codex`.
- **Context window:** 400,000 total, 272,000 maximum input and 128,000 maximum output.
- **Modalities:** Text and image input, text output; reasoning and function calling supported.
- **Pricing (2026-11-01):** OpenAI lists $1.75 input / $14 output / $0.175 cached input per million; deprecated availability may vary.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI reports Terminal-Bench 2.0 **77.3%** at xhigh; Vals **64.05% ± 5.12** at high effort, a separate harness and configuration.
- Tau3-Banking and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- OpenAI GDPval **70.9% wins or ties**, with custom skills, is a professional-work measure, not GPQA or HLE.
- GPQA Diamond and HLE: no verified exact-model result found in reviewed sources.

Coding:

- OpenAI SWE-bench Pro public **56.8%** at xhigh; Vals LiveCodeBench **87.31% ± 0.97** and Vibe Code Bench v1.1 **61.77% ± 4.71**.

Long context:

- OpenAI specifies 400K total; no verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Vendor and Vals TB 2.0 support agentic execution with differing effort and harness settings.
- **Reasoning: 82/100.** Provisional, based on GDPval and the model's professional-work positioning without verified GPQA or HLE.
- **Context window: 80/100.** OpenAI documents 400K total and 272K maximum input; no verified long-context retrieval result.
- **Multimodal: 65/100.** Text and image input with text output; audio and video are not supported by the documented model.
- **Coding: 87/100.** SWE-bench Pro, TB 2.0 and LiveCodeBench support strong coding, with Vals Vibe Code moderating the score.
- **Cost efficiency: 65/100.** OpenAI lists $1.75/$14 per million; deprecated availability and routing affect practical value.
- **Overall Score: 80/100.** Half-up mean of five quality dimensions; suited to coding-agent workflows where the deprecated model remains accessible.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: OpenAI documentation and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.3-codex)
  - [OpenAI announcement and routing caveat](https://openai.com/index/introducing-gpt-5-3-codex/)
  - [Vals evaluation](https://www.vals.ai/models/openai_gpt-5.3-codex)
- Future sources: add a separate signed findings file alongside this one.
