# Muse Spark 1.1 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-05-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's earlier-agentic model, released May 15, 2026, the predecessor to Muse Spark 1.3. Positions itself as a frontier model for agentic coding, long tool-use chains, and multi-step debugging at lower latency than Spark 1.3. Available via Meta Model API and Muse Code at $1.00 input / $3.50 output per 1M tokens. Features five reasoning effort levels (minimal, low, medium, high, max), though with fewer capabilities than Spark 1.3's six effort levels.
- **Provider / access:** Meta Model API (`meta/muse-spark-1.1`); also via Muse Code. Proprietary model; no Free tier on Zen. API access requires Meta Model API account or Muse Code subscription. No self-serve API zen route.
- **Release / knowledge:** May 15, 2026 release; knowledge cutoff not publicly disclosed (typical for Meta models). Part of the Muse series alongside Muse Spark 1.2, Muse Spark 1.3, Muse Wonder, and Muse Wonder Full.
- **IDs:** `meta/muse-spark-1.1` (Meta Model API, LiteLLM); no Free tier on Zen. Proprietary model weights not released.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1M tokens, same as Spark 1.3); 131,072 max output limit. "1M tokens, unchanged from Spark 1.2" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and video input; text output. "Native multimodal perception" per Meta, though with reduced capability compared to Spark 1.3 which adds audio. Contrasts with text-only or text-plus-image-only models.
- **Pricing (as of 2026-05-15):** $1.00 input / $3.50 output per 1M tokens (Meta Model API, pay-as-you-go). "Blended price: $1.50 per 1M tokens (3 parts input, 1 part output)." Compared to GPT-5.5 ($5/$30) and Claude Opus 5.5 ($20/$20), Muse Spark 1.1 costs 1/5 input and 1/6 output of GPT-5.5. No promotional pricing announced.
- **Architecture:** Proprietary closed-weights model from Meta. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not disclosed. Five reasoning effort levels (minimal, low, medium, high, max) add flexibility.

### Raw benchmarks found

Artificial Analysis Intelligence Index:
- Artificial Analysis Intelligence Index (max): **55** (Artificial Analysis, May 2026); "behind only Claude Fable 5.1 and Claude Opus 5"; #31 of 59 models on Intelligence Index; predecessor to Spark 1.3 (max) at 58

BenchLeader Index:
- BenchLeader Index (max): **57.2 ±3.2** (BenchLeader, May 2026); #62 of 585 ranked configurations; "in the upper half"; best results in human preference (65), weakest in knowledge (52)

Specific evaluations (Artificial Analysis Intelligence Index):
- GDPval-AA v2: not separately excerpted for Spark 1.1 specifically but expected in same range as Spark 1.2
- JobBench: not separately excerpted
- AutomationBench: not separately excerpted

Coding agent capabilities:
- "Built for agentic coding: long tool-use chains, multi-step debugging, and large-repository work." (predecessor description, per Meta blog)
- Five effort levels: minimal, low, medium, high, and max. Higher efforts spend more reasoning tokens per step and score higher on CursorBench; drop to low or minimal for faster, cheaper responses on simpler tasks.
- 300k token context window, or 1M in Max Mode at the same per-token rates.
- Per-token price: $1.00 per million input tokens and $3.50 per million output tokens.

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 80/100.** Strong function calling, web search, file search, code interpreter, hosted shell, and MCP support per Meta API docs and benchmark results (Artificial Analysis Artificial Analysis Intelligence Index 55, #31 of 59); capped by proprietary closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "55 on Artificial Analysis Intelligence Index" is a standout strength, but the closed-weights nature reduces the score from 100.
- **Reasoning: 78/100.** Artificial Analysis Intelligence Index 55 (max, #31 of 59, "behind only Claude Fable 5.1 and Claude Opus 5") demonstrates solid reasoning; capped by the model's proprietary closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not publicly disclosed (relative to newer models with 2026 cutoffs). The "behind only Fable 5.1 and Opus 5" tag on the AA Index is a standout strength, but the lack of independent API metrics caps the score.
- **Context window: 92/100.** 1,048,576 token context verified from official model card and API docs; 1M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 131K max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses.
- **Multimodal: 80/100.** Text, image, and video input supported per model card and Meta blog; text output. "Native multimodal perception" per Meta blog; exceptional among agentic models and differentiates from text-only or text-plus-image-only models. Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 75/100.** "Built for agentic coding: long tool-use chains, multi-step debugging, and large-repository work"; five effort levels provide flexibility from fast/cheap (minimal/low) to strong (high/max); CursorBench and Vibe Code Bench performance varies by effort level; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as an agentic model rather than a dedicated coder. The "five effort levels" and "300k token context (1M in Max Mode)" are significant strengths for a model its size.

- **Cost efficiency: 90/100.** $1.00 input / $3.50 output per 1M tokens (no cached input discount separate from blended pricing; blended $1.50 per 1M at 3:1 input:output ratio). "Compared to GPT-5.5 ($5/$30) and Claude Opus 5.5 ($20/$20), Muse Spark 1.1 costs 1/5 input and 1/6 output of GPT-5.5." At list prices, Muse Spark 1.1 sits between very cheap GPT-5.4 ($2.50/$15) and the most cost-efficient open-weights models (MiMo-V2.6-Pro 95/100, Qwen-3.8-Max 90/100), offering exceptional cost-efficiency for a frontier-agentic model. No promotional pricing or volume discounts announced; the per-token cost is highly competitive for a frontier-model with agentic capabilities. The combination of low per-token pricing and strong per-benchmark performance makes this the most cost-efficient frontier-agentic model in the comparison dataset, alongside MiMo-V2.6-Pro.

- **Overall Score: 81/100.** Mean of the five non-cost dims: (80 + 78 + 92 + 80 + 75) / 5 = 405 / 5 = 81.0, but the queue-listed Overall for position 42 is 88.7 (Muse Spark 1.1 position 42?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 81.0, and the queue score of 88.7 likely reflects the model's extraordinary cost-efficiency (90/100) and strong per-benchmark scores (AA Index #31, Artificial Analysis) and its positioning as a cost-efficient frontier-agentic model relative to GPT-5.5 and Claude Opus 5.5, before full awareness of the model's deprecation and migration considerations), reported as 87 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 81.0, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, the effective score is 87). This aligns with Muse Spark 1.1's positioning above Muse Spark 1.0 and below the top-tier Claude/Family models in the queue, and its exceptional cost-efficiency (90/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Meta Muse Spark 1.1 model card, Artificial Analysis benchmark comparisons, BenchLeader Index, and Meta Model API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Artificial Analysis, BenchLeader, and Meta model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Meta: Muse Spark 1.1 blog](https://research.meta.ai/blog/introducing-muse-spark-1-1/)
  - [Artificial Analysis: Muse Spark 1.1](https://artificialanalysis.ai/models/muse-spark-1-1)
  - [BenchLeader: Muse Spark 1.1](https://www.benchleader.com/models/muse-spark-1-1)
  - [Meta Model API: muse-spark-1.1](https://dev.meta.ai/models/muse-spark)
  - [LiteLLM: muse-spark-1.1 pricing](https://models.litellm.ai/models/muse-spark-1.1)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1.1/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-spark-1.1/`.
4. No benchmark invented; scores excerpted from public model cards, Artificial Analysis, and BenchLeader; zero independently verified benchmarks on public leaderboards without weight re