# Kimi K2.7 Code HighSpeed — findings by GPT 6 Astra

- Source: Moonshot AI / Kimi K2.7 Code HighSpeed
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Kimi K2.7 Code HighSpeed.
- **Short description:** Faster serving tier of K2.7 Code, explicitly documented as the same model; quality scores are inherited model evidence, not an independent HighSpeed rerun.
- **Provider / access / IDs:** Kimi API `kimi-k2.7-code-highspeed`, Chat Completions; Responses and Anthropic Messages compatibility also documented. [Protocol support](https://www.kimi.ai/academy/use-kimi-api-in-codex-and-claude-code).
- **Release / knowledge:** Exact HighSpeed launch date and knowledge cutoff unverified.
- **Context window:** 262,144 tokens; output ceiling unverified.
- **Modalities:** Text/image/video input, text output, mandatory thinking and tool calls. Responses compatibility currently excludes direct video; use the native API.
- **Serving:** Vendor advertises approximately 180 tokens/s, up to 260 for short context; this is not a latency guarantee. [Exact-model equivalence and capabilities](https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart).
- **Architecture:** K2.7 Code's 1T/32B-active MoE, Modified MIT weights; paid hosted tier. [Weights](https://huggingface.co/moonshotai/Kimi-K2.7-Code).
- **Pricing (checked 2026-10-05):** Last indexed official table lists input/output/cache $1.90/$8/$0.38 per million tokens. Its [pricing article](https://www.kimi.ai/pt-br/resources/kimi-k2-7-code-pricing) is now redirected; rates are provisional rather than confirmed live billing.

### Raw benchmarks found

Verified parent-model results, applicable through the publisher's explicit same-model statement:

- **Tools:** MCP Atlas 76.0; MCP Mark Verified 81.1; Kimi Claw 24/7 46.9.
- **Coding:** Kimi Code Bench v2 62.0; Program Bench 53.6; MLS Bench Lite 35.1.
- **Harness:** Publisher evaluations using Kimi Code CLI with thinking, temperature 1.0, top-p 0.95 and 262K context; exceptions include OpenClaw for Claw. [Table and methodology](https://huggingface.co/moonshotai/Kimi-K2.7-Code).
- **Missing:** Separate HighSpeed quality rerun, GPQA, HLE, CritPt, SWE-Pro, Terminal-Bench 2.1 and full-window retrieval: no verified public score found. Faster serving is not evidence of higher quality.

### Normalized scores (1–100)

- **Tool use: 83/100.** Same-model MCP results support useful agent workflows; endpoint-specific reliability is unmeasured.
- **Reasoning: 72/100.** Provisional coding/ML-task proxy; general reasoning evidence remains incomplete.
- **Context window: 75/100.** 262K documented capacity without retrieval validation.
- **Multimodal: 85/100.** Video/image support through the native API; no native audio evidence.
- **Coding: 83/100.** Same-model engineering results; no quality bonus for throughput.
- **Cost efficiency: 78/100.** Last verified published rates are twice standard K2.7 Code; current billing needs confirmation.
- **Overall Score: 80/100.** Half-up mean of 83, 72, 75, 85 and 83; faster coding service with a price premium.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh primary-source research; same-model benchmark inheritance explicitly disclosed; scores are interpretations.
- Future sources: add a separate report beside this file.

