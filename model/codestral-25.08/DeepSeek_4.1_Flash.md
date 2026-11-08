# Codestral 25.08 — findings by DeepSeek 4.1 Flash

- Source: Mistral AI/Codestral 25.08 (`codestral-2508`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral AI's specialized low-latency code model for IDE autocomplete, fill-in-the-middle (FIM) completion, code correction and test generation across 80+ languages — tuned for completions, not autonomous multi-turn agents.
- **Provider / access:** Mistral AI La Plateforme (`codestral-2508`), OpenRouter; OpenAI-compatible API. Dataset route: `opencode/codestral-25.08`.
- **Release / knowledge:** released 2025-08 (end of July 2025); knowledge cutoff not reported.
- **IDs:** `mistralai/codestral-2508`.
- **Context window:** 262,144 total (256K); 8,192 max output (Mistral docs / pi.dev / CorX tracker).
- **Modalities:** text/code in; text/code out; no reasoning mode; tool calling + structured outputs supported.
- **Pricing (as of 2026-11-07):** $0.30 / $0.90 per 1M in/out; cached read $0.03 (Mistral AI; hosting parity on OpenRouter).
- **Architecture:** dense transformer (CorX reports 22B; Benchable lists "2.5B rumoured" — conflict noted); open weights under the Mistral AI Non-Production licence.

### Raw benchmarks found

Agent / tool use:

- No agentic benchmark (Terminal-Bench / Tau2 / SWE-bench) reported; it is a completion-specialist, not an agent model
- Tool calling: supported per docs (not measured)
- Benchable Instruction Following: **57.0%** accuracy (54th percentile, Benchable harness)

Reasoning / knowledge:

- No reasoning mode; GPQA / HLE / AIME: no verified public score found
- Benchable General Knowledge: **49.5%** (15th pct); Mathematics: **3.0%** (8th pct) — general-purpose categories, outside the model's design target

Coding:

- HumanEval: **86.6%** (published figure aggregated by CorX Labs; rank 19 of 46 models reporting)
- Benchable Coding category: **48.0%** accuracy (20th pct of their suite)
- MBPP+: reported "first on a limited MBPP+ chart" (CloudsPress summary of Mistral claims) — provisional
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 256K declared; no retrieval benchmark reported (FIM/autocomplete focus)

### Normalized scores (1–100)

- **Tool use: 40/100.** Tool calling and structured output exist, but the model is built for inline completion rather than tool loops; no agentic numbers — capped by design and evidence.
- **Reasoning: 38/100.** No reasoning mode; Benchable math 3% / knowledge 49.5% reflect a completion specialist outside its lane; capped by missing reasoning benchmarks.
- **Context window: 80/100.** Full 256K admission is high-tier; no measured retrieval at length keeps it below the top band.
- **Multimodal: 15/100.** Text-only in and out (template floor for text-only models).
- **Coding: 55/100.** HumanEval 86.6% is solid but mid-pack (rank 19/46); real strength is FIM speed/efficiency rather than benchmark-leading generation; capped by low Benchable coding accuracy and no SWE/LiveCodeBench row.
- **Cost efficiency: 75/100.** $0.30/$0.90 with $0.03 cache is competitive for a composite code model and weights are downloadable (non-production licence restricts commercial self-host).
- **Overall Score: 45.6/100.** Best-fit: IDE autocomplete/FIM infrastructure where latency and cost matter more than agentic reasoning — not a general-purpose or agentic coding model.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-07
- Method: public internet research (Mistral launch post/docs, CorX Labs published-score table, Benchable category runs, pi.dev/LLMLearner trackers, CloudsPress coverage); parameter-count conflict (22B vs rumoured 2.5B) noted, not resolved; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Announcing Codestral 25.08](https://mistral.ai/news/codestral-25-08/)
  - [Mistral Docs — Codestral 25.08](https://docs.mistral.ai/models/codestral-25-08)
  - [CorX Labs — Codestral 25.08 published scores](https://www.corx-labs.com/benchmarks/models/codestral-2508/)
  - [Benchable — Codestral 2508](https://benchable.ai/models/mistralai/codestral-2508)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
