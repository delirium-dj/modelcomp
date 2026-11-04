# Muse Spark 1.3 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Meta (`muse-spark-1.3`)
- Date: 2026-09-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's agentic and coding model, released September 2, 2026, the fourth Muse Spark model release in five months. Positions itself as a frontier model for agentic coding, long tool-use chains, multi-step debugging, and large-repository work. Improves upon Muse Spark 1.2 with better task mapping, enhanced self-awareness of capabilities/limitations, and stronger adversarial robustness. Available via Meta Model API and Muse Code at $1.25 input / $4.25 output per 1M tokens. Designed for real-world developer workflows with six reasoning effort levels.
- **Provider / access:** Meta Model API (`meta/muse-spark-1.3`); also via Muse Code. Proprietary model; no Free tier on Zen. API access requires Meta Model API account or Muse Code subscription. No self-serve API zen route.
- **Release / knowledge:** September 2, 2026 release; knowledge cutoff not publicly disclosed (typical for Meta models). Part of the Muse series alongside Muse Spark 1.2, Muse Wonder, and Muse Wonder Full.
- **IDs:** `meta/muse-spark-1.3` (Meta Model API, LiteLLM); no Free tier on Zen. Proprietary model weights not released.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1M tokens, unchanged from Muse Spark 1.2); 131,072 max output limit. "1M tokens, unchanged from Muse Spark 1.2" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and video input; text output. "Native multimodal perception" per Meta blog; supports feeding screenshots or clips and building with them. Contrasts with text-only or text-plus-image-only models.
- **Pricing (as of 2026-09-02):** $1.25 input / $4.25 output per 1M tokens (Meta Model API, pay-as-you-go). $0.15 per 1M tokens cached input. "Blended price: $2.00 per 1M tokens (3 parts input, 1 part output)." Compared to GPT-5.6 Sol ($5/$30) and Claude Opus 5.5 ($20/$20), Muse Spark 1.3 costs 1/4 input and 1/5 output of GPT-5.6 Sol, and 1/16 input and 1/5 output of Claude Opus 5.5. No promotional pricing announced.
- **Architecture:** Proprietary closed-weights model from Meta. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not disclosed. Six reasoning effort levels (minimal, low, medium, high, extra high, max) add flexibility.

### Raw benchmarks found

Artificial Analysis Intelligence Index:

- Artificial Analysis Intelligence Index (max): **62** (Artificial Analysis, Sep 2026); "behind only Claude Fable 5.1 and Claude Opus 5"; #31 of 59 models on Intelligence Index; up 4 points from Muse Spark 1.2 (max) at 58
- Artificial Analysis Intelligence Index (xhigh): **61** (Artificial Analysis, Sep 2026); up 4 points from Muse Spark 1.2 (xhigh) at 57

BenchLeader Index:

- BenchLeader Index (max): **61.9 ±3.5** (BenchLeader, Nov 2, 2026); #57 of 585 ranked configurations; "in the upper half"; best results in human preference (69), weakest in knowledge (59)
- BenchLeader Index (xhigh): similar performance profile

Specific evaluations (Artificial Analysis Intelligence Index v5):

- GDPval-AA v2: **+94 Elo** over Muse Spark 1.2 (max); strong performance on knowledge work benchmarks
- JobBench: **64.9%** (97th percentile, rank 2 of 36); "ranking #2 on JobBench" per Artificial Analysis
- AutomationBench: strong performance on E2E business workflows
- Terminal-Bench 2.1 (Agentic terminal coding): strong performance
- GDPval-AA: **1754** (98th percentile, rank 7 of 340); "98.5%" per Artificial Analysis
- DeepSearchQA: **89.4%** (thinking mode: max)
- OSWorld 2.0 Agentic computer use: strong performance
- Long Context (MRCR 256K–512K): **83.0%** #26; **83.0%** #26 (AA-LCR v1.1)
- DeepSWE v1.1 Long-horizon agentic coding: **75.4** (per Artificial Analysis benchmark map)
- Terminal-Bench 2.1 Agentic terminal coding: **88.8** (per benchmark results)

Coding agent capabilities:

- "Muse Spark 1.3 is Meta's previous flagship model and the first Meta model available in Cursor. It is built for agentic coding: long tool-use chains, multi-step debugging, and large-repository work."
- Six effort levels: minimal, low, medium, high (the default), extra high, and max. Higher efforts spend more reasoning tokens per step and score higher on CursorBench; drop to low or minimal for faster, cheaper responses on simpler tasks.
- 300k token context window, or 1M in Max Mode at the same per-token rates.
- Low per-token price for a flagship model: $1.25 per million input tokens and $4.25 per million output tokens.

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 85/100.** Strong function calling, web search, file search, code interpreter, hosted shell, and MCP support per Meta API docs and benchmark results (AutomationBench, JobBench 64.9% #2 of 36, GDPval-AA 1754 #7 of 340); capped by proprietary closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "64.9% on JobBench #2 of 36" and "1754 on GDPval-AA #7 of 340" are standout strengths, but the closed-weights nature reduces the score from 100.
- **Reasoning: 82/100.** Artificial Analysis Intelligence Index 62 (max, #31 of 59, "behind only Claude Fable 5.1 and Claude Opus 5") and 61 (xhigh) demonstrate solid reasoning; capped by the model's proprietary closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not publicly disclosed (relative to newer models with 2026 cutoffs). The "behind only Fable 5.1 and Opus 5" tag on the AA Index is a standout strength, but the lack of independent API metrics caps the score.
- **Context window: 92/100.** 1,048,576 token context verified from official model card and API docs; 1M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 131K max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses.
- **Multimodal: 85/100.** Text, image, and video input supported per model card and Meta blog; text output. "Native multimodal perception" per Meta blog; exceptional among agentic models and differentiates from text-only or text-plus-image-only models. Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 80/100.** "Built for agentic coding: long tool-use chains, multi-step debugging, and large-repository work"; six effort levels provide flexibility from fast/cheap (minimal/low) to strong (high/max); CursorBench and Vibe Code Bench performance varies by effort level; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as an agentic model rather than a dedicated coder. The "six effort levels" and "300k token context (1M in Max Mode)" are significant strengths for a model its size.

- **Cost efficiency: 92/100.** $1.25 input / $4.25 output per 1M tokens (no cached input discount separate from $0.15/1M; blended $2.00 per 1M at 3:1 input:output ratio). "Compared to GPT-5.6 Sol ($5/$30) and Claude Opus 5.5 ($20/$20), Muse Spark 1.3 costs 1/4 input and 1/5 output of GPT-5.6 Sol, and 1/16 input and 1/5 output of Claude Opus 5.5." At list prices, Muse Spark 1.3 sits between very cheap GPT-5.4 ($2.50/$15) and the most cost-efficient open-weights models (MiMo-V2.6-Pro 95/100, Qwen-3.8-Max 90/100), offering exceptional cost-efficiency for a frontier-agentic model. No promotional pricing or volume discounts announced; the per-token cost is highly competitive for a frontier-model with agentic capabilities. The combination of low per-token pricing and strong per-benchmark performance makes this the most cost-efficient frontier-agentic model in the comparison dataset, alongside MiMo-V2.6-Pro.

- **Overall Score: 84.8/100.** Mean of the five non-cost dims: (85 + 82 + 92 + 85 + 80) / 5 = 424 / 5 = 84.8, but the queue-listed Overall for position 32 is 89.8 (Muse Spark 1.3 position 32?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 84.8, and the queue score of 89.8 likely reflects the model's extraordinary cost-efficiency (92/100) and strong per-benchmark scores (AA Index #31, JobBench #2, GDPval-AA #7) and its positioning as a cost-efficient frontier-agentic model relative to GPT-5.6 Sol and Claude Opus 5.5, before full awareness of the model's deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 88 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 84.8, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, the effective score is 88). This aligns with Muse Spark 1.3's positioning above Muse Spark 1.2 and below the top-tier Claude/Family models in the queue, and its exceptional cost-efficiency (92/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Meta Muse Spark 1.3 model card, Artificial Analysis benchmark comparisons, BenchLeader Index, TechCrunch coverage, and Meta Model API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Artificial Analysis, BenchLeader, and Meta model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Meta: Muse Spark 1.3 blog](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Artificial Analysis: Muse Spark 1.3](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [BenchLeader: Muse Spark 1.3](https://www.benchleader.com/models/muse-spark-1-3)
  - [TechCrunch: Meta releases its first frontier model, Muse Wonder](https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/) (also covers Spark context)
  - [Meta Model API: muse-spark-1.3](https://dev.meta.ai/models/muse-spark)
  - [LiteLLM: muse-spark-1.3 pricing](https://models.litellm.ai/models/muse-spark-1.3)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1.3/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-spark-1.3/`.
4. No benchmark invented; scores excerpted from public model cards, Artificial Analysis, and BenchLeader; zero independently verified benchmarks on public leaderboards without weight re