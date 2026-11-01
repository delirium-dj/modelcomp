# GPT-5.6 Terra — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.6-terra`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's general-purpose reasoning and coding model, independently evaluated by Vals.
- **Provider / access:** OpenRouter Chat Completions exposes `openai/gpt-5.6-terra`; its EU-routed Azure price is a separate deployment price. OpenAI's exact native endpoint was not independently verified.
- **Release / knowledge:** Vals reports release 2026-07-09; knowledge cutoff not verified.
- **IDs:** `openai/gpt-5.6-terra` on OpenRouter; no Zen Free ID verified.
- **Context window:** Vals lists 1M context and 128k maximum output; no verified retrieval result at long context found.
- **Modalities:** Vals reports MMMU Pro visual evaluation; text output. Other modalities not established by the cited sources. OpenRouter lists tool calling and structured response support.
- **Pricing (2026-11-01):** Vals lists $2 input / $12 output per million; OpenRouter's EU-routed Azure deployment lists $2.20 / $13.20, a distinct route.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **22.73% ± 2.31**; this is not a Terminal-Bench 2.1 result.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals GPQA Diamond **90.91% ± 1.91** and ProofBench v1.1 **74.00% ± 4.41**.
- HLE and CritPt: no verified public score found.

Coding:

- Vals LiveCodeBench **85.93% ± 1.02**, Vibe Code Bench v1.1 **74.59% ± 4.20**, and SWE-bench **95.40% ± 0.94**; Vals does not identify the SWE-bench variant in the displayed result, so it is not relabeled Verified.

Long context:

- Vals lists 1M context; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Vals Terminal-Bench 4.0 is an agent-coding measurement with a limited harness; missing broader tool-use scores make this provisional.
- **Reasoning: 89/100.** GPQA Diamond and ProofBench support strong reasoning, with no verified HLE result here.
- **Context window: 96/100.** Vals lists 1M; absence of verified long-context retrieval prevents the maximum score.
- **Multimodal: 65/100.** Vals MMMU Pro confirms visual evaluation, but broader modalities are not established here.
- **Coding: 85/100.** LiveCodeBench and Vibe Code support strong coding, tempered by lower agent-terminal performance and uncertain SWE-bench variant.
- **Cost efficiency: 68/100.** Paid $2/$12 per million according to Vals; provider and deployment rates differ.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions; useful for multimodal reasoning and coding, with agent harness limitations.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent evaluator and provider-route research; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Vals GPT-5.6 Terra evaluation](https://www.vals.ai/models/openai_gpt-5.6-terra)
  - [OpenRouter GPT-5.6 Terra route](https://openrouter.ai/openai/gpt-5.6-terra)
- Future sources: add a separate signed findings file alongside this one.
