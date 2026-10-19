# Claude Haiku 3.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: anthropic.com Claude 3 Model Card (official PDF), anthropic.com Model Card Addendum: Claude 3.5 Haiku + Upgraded Claude 3.5 Sonnet (official PDF), anthropic.com/claude/haiku (product page), benchlm.ai comparisons (vs GPT-4.1, GLM-5, Qwen3.5-27B, o1-mini, Trinity-Large-Preview), pricepertoken.com (Claude Haiku 4.5 reference, distinct model), lmmarketcap.com GPQA Diamond leaderboard, morphllm.com Claude benchmarks (2026)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku (Anthropic)
- **Short description:** Anthropic's fast, cost-efficient small model in the Claude 3 family; text-only at launch with image input to follow; strong coding, tool use, and reasoning for its size class; released 2026-10-22 per product page (note: original addendum dated 2024-10-22 covers Claude 3.5 Haiku — the product page also lists Claude Haiku 4.5 (2026-10-15) and Claude Haiku 5.5 (2026-10-07) as distinct newer models; this report covers Claude 3.5 Haiku specifically).
- **Provider / access:** Anthropic first-party API, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** Claude 3.5 Haiku announced 2024-10-22 (model card addendum); knowledge cutoff not stated for 3.5 Haiku specifically. Product page also surfaces Claude Haiku 4.5 (Oct 2025) and Claude Haiku 5.5 (Oct 2026) — distinct models, not this slug.
- **IDs:** `claude-3-5-haiku` (Anthropic API), `claude-3-5-haiku-20241022` (dated variant). benchlm.ai uses `claude-3-5-haiku`.
- **Context window:** 200,000 tokens (Anthropic product page; benchlm.ai; pricepertoken for Haiku 4.5 reference also 200K).
- **Modalities:** Text in, text out at launch (image input to follow per addendum); vision-capable per Claude 3 family card; reasoning yes (non-reasoning per benchlm classification); tool calls yes; JSON/structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** Starts at $1.00/M input, $5.00/M output (Anthropic; up to 90% savings with prompt caching, 50% with Message Batches). Haiku 4.5 reference pricing $1/$5 with cache $0.100/M.
- **Architecture:** Dense Transformer (Claude 3 family); parameter count undisclosed by Anthropic.

### Raw benchmarks found

Benchmarks below are a mix of Anthropic's official model-card/addendum figures and independent aggregator (benchlm.ai, lmmarketcap) public-lane scores. Claude Haiku 4.5/5.5 figures are excluded (distinct models).

Agent / tool use:

- SWE-bench Verified: **40.6%** (Anthropic addendum Table 2; Claude 3.5 Haiku vs 49.0% for upgraded Claude 3.5 Sonnet)
- Internal agentic coding eval: not separately reported for 3.5 Haiku in fetched sources

Reasoning / knowledge:

- GPQA: **41.6%** (benchlm.ai vs GPT-4.1; lmmarketcap GPQA Diamond leaderboard rank #54/55 at 41.6%)
- GPQA Diamond: **41.6%** (lmmarketcap)
- MMLU: **80.3%** (benchlm.ai)
- MMLU-Pro: **65%** (benchlm.ai)
- BBH: **86.6%** (benchlm.ai)
- DROP: **83.1%** (benchlm.ai)
- MGSM: **85.6%** (benchlm.ai)
- Artificial Analysis (Haiku 4.5 reference, distinct model): Intelligence 15.4, GPQA 64.6, MMLU Pro 80.0 — NOT applicable to 3.5 Haiku

Coding:

- HumanEval: **88.1%** (benchlm.ai vs o1-mini)
- SWE-bench Verified: **40.6%** (Anthropic addendum)
- LiveCodeBench: not found for 3.5 Haiku in fetched sources

Multimodal & grounded:

- Vision: Claude 3 family card states Haiku includes vision capabilities; 3.5 Haiku addendum notes image input "to follow" at launch; no standard vision benchmark scores (MMMU, ChartQA, DocVQA) isolated for 3.5 Haiku in fetched sources.

Long context:

- Needle In A Haystack: not reported separately for 3.5 Haiku (reported for 3.5 Sonnet: 99.7% all lengths). Context window 200K; no public needle-recall curve for 3.5 Haiku.

Instruction following:

- IFEval: **85.9%** (benchlm.ai public-lane #94/148)

### Conflicting results noted

- Model identity: The slug `claude-haiku-3.5` maps to Claude 3.5 Haiku, but Anthropic's product page also lists Claude Haiku 4.5 (Oct 2025) and Claude Haiku 5.5 (Oct 2026) as newer, distinct models. benchlm.ai public-lane overall score for 3.5 Haiku is null/not computed in fetched comparisons; pricepertoken's "Intelligence 15.4, GPQA 64.6, MMLU Pro 80.0" figures belong to Claude Haiku 4.5 and must not be attributed to 3.5 Haiku.
- Release date: official addendum PDF dated 2024-10-22; anthropic.com/claude/haiku product page lists "Claude 3.5 Haiku, Oct 22, 2024" — consistent.
- GPQA: benchlm.ai reports 41.6% vs GPT-4.1 (66.3%) and vs GLM-5 (86.0%) — 3.5 Haiku trails both in knowledge reasoning.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** SWE-bench Verified 40.6% (modest for a small model); strong tool-use positioning per Anthropic; no Terminal-Bench/BrowseComp scores found.
- **Reasoning: 60/100.** MMLU 80.3, MMLU-Pro 65, BBH 86.6, DROP 83.1 are solid for a small model; capped by weak GPQA (41.6%) — trails GLM-5 (86) and GPT-4.1 (66.3).
- **Context window: 80/100.** Declared 200K tokens; no public needle-recall curve for 3.5 Haiku specifically.
- **Multimodal: 70/100.** Claude 3 family vision-capable; 3.5 Haiku image input "to follow" at launch per addendum; no standard vision benchmark scores isolated → moderate confidence.
- **Coding: 60/100.** HumanEval 88.1% is strong; SWE-bench Verified 40.6% is modest; no LiveCodeBench found → mixed profile.
- **Cost efficiency: 65/100.** $1/$5 per M with 90% cache discount; competitive for a small model but not the cheapest; not counted toward Overall.
- **Overall Score: 64/100.** Half-up mean of (50 + 60 + 80 + 70 + 60) / 5 = 64.0 → 64. Best-fit recommendation: fast, cost-efficient small model for low-latency chat and coding completion; not a frontier reasoning model (GPQA 41.6%).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic model card + addendum + product page + benchlm.ai comparisons + lmmarketcap GPQA leaderboard + pricepertoken reference); scores are normalized 1–100 interpretations, not official vendor scores. Claude Haiku 4.5/5.5 figures deliberately excluded (distinct models).
- Future sources: add a new file next to this one, using the same headings.
