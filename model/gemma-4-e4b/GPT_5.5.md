# Gemma 4 E4B — findings by GPT 5.5

- Source: Google (`gemma-4-e4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Compact Google Gemma 4 model optimized for efficiency, local inference, and small-model reasoning.
- **Provider / access:** Open weights and hosted routes such as DeepInfra/Vertex-style deployments depending on provider.
- **Release / knowledge:** Gemma 4 technical report published July 2026; cutoff not stated.
- **IDs:** `gemma-4-e4b`, `google/gemma-4-e4b-it` style route names.
- **Context window:** Public Gemma 4 suite emphasizes long-context improvements; exact E4B ceiling varies by host and was not fully recovered.
- **Modalities:** Text-focused small model; no verified native multimodal support for E4B.
- **Pricing (as of 2026-10-05):** Hosted route example: **$0.02/M input** and **$0.10/M output**; AI IQ effective cost estimate **$0.0554/M input+output**.
- **Architecture:** Gemma 4 efficient small model; exact dense/MoE details for E4B depend on checkpoint naming.

### Raw benchmarks found

Agent / tool use:

- Community report says a Gemma 4 E4B local 4B model solved a 100,000+ tool lazy-discovery crisis benchmark, matching Claude Sonnet 4.6 efficiency; this is anecdotal.

Reasoning / knowledge:

- Controlled empirical paper evaluates Gemma-4-E4B on ARC-Challenge, GSM8K, Math Level 1-3, and TruthfulQA MC1 under zero-shot, CoT, and few-shot CoT prompting.
- Enterprise benchmark summary reports Gemma 4 E4B at **83.6%** on its aggregate task suite.

Coding:

- DataRaceBench study evaluates Gemma4-E4B and Gemma4-31B on identifying, explaining, and repairing OpenMP data races.

Long context:

- Gemma 4 technical report states the suite improves on long-context benchmarks, but exact E4B context ceiling was not recovered.

### Normalized scores (1–100)

- **Tool use: 42/100.** Tool evidence is anecdotal and scaffold-dependent.
- **Reasoning: 62/100.** Controlled benchmark coverage and 83.6% enterprise aggregate support good small-model reasoning.
- **Context window: 58/100.** Long-context improvements exist, but exact E4B ceiling is unclear.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 56/100.** DataRaceBench and small-model coding utility support moderate coding credit.
- **Cost efficiency: 98/100.** Extremely low hosted pricing/open weights make it excellent value.
- **Overall Score: 47/100.** Half-up mean of the five quality dimensions; best fit is very cheap local/hosted small-model reasoning.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

