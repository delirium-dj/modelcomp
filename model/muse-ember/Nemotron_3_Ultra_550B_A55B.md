# Muse Ember — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta (`muse-ember`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember (Max reasoning variant)
- **Short description:** Meta's smallest and most efficient model in the Muse family, released November 9, 2026. Proprietary reasoning model with text and image input, text output. Positioned as highly cost-effective with strong intelligence for its price tier.
- **Provider / access:** Meta Model API (`muse-ember-1.0`), OpenRouter (`meta/muse-ember`). Chat Completions API. No Free tier ID on OpenCode Zen (Crouton Alpha was the free stealth preview, retired Nov 9, 2026).
- **Release / knowledge:** Released 2026-11-09; knowledge cutoff not published.
- **IDs:** `muse-ember-1.0` (Meta Model API), `meta/muse-ember` (OpenRouter). Revealed stealth alias: `crouton-alpha` (retired).
- **Context window:** 1,000,000 tokens. Verified via Artificial Analysis and Meta API docs.
- **Modalities:** Text and image input; text output. Reasoning: yes (extended thinking / chain-of-thought). Tool calls: not explicitly documented. JSON mode: not documented.
- **Pricing (as of 2026-11-10):** Input $0.10 / MTok; Output $0.50 / MTok (Meta API). Blended rate ~$0.0728/MTok (7:2:1 cache/input/output). Cache discount 96%. Very competitive pricing.
- **Architecture:** Proprietary (parameter count not disclosed). Not open weights. Meta's smallest/most-efficient Muse model.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **36** — ranked #2 of 34 in price tier (Artificial Analysis, 2026-11-10)
- Terminal-Bench 4.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2.1: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE-Diamond: no verified public score found (included in AA Intelligence Index but no individual score)
- LCR / MLCR: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found (included in AA Intelligence Index but no individual score)
- Artificial Analysis Intelligence Index: **36** / #2 of 34 (Artificial Analysis, 2026-11-10)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (included in AA Intelligence Index but no individual score)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (FrontierCode 2.0 included in AA Intelligence Index but no individual score)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval reported (model supports 1M context but no public MRCR/RULER/GraphWalks scores found)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 70/100.** AA Intelligence Index includes agentic evals (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0, GDPval-AA); score of 36 places it near top of price tier. No individual agentic benchmark scores published. Capped by no public tool-use breakdown.
- **Reasoning: 75/100.** AA Intelligence Index incorporates reasoning evals (HLE-Diamond, CritPt v2 Hard, GDP.pdf); score of 36 well above tier median (24). Marketed as reasoning model with extended thinking. Capped by no public GPQA/HLE/CritPt scores.
- **Context window: 95/100.** 1M token context window — top tier. Only capped by models with 2M+ windows (e.g., GPT-6 Sol, Muse Wonder).
- **Multimodal: 75/100.** Text and image input; text output. Standard vision capability. No audio/video input documented.
- **Coding: 68/100.** AA Intelligence Index includes coding evals (Terminal-Bench 4.0, FrontierCode 2.0); score of 36 suggests solid coding for price tier. No public SWE-bench/LiveCodeBench scores. Capped by no individual coding breakdown.
- **Cost efficiency: 95/100.** $0.10/$0.50 per MTok is extremely competitive (median $0.24/$0.80 in tier). 96% cache discount. Blended cost $0.0728/MTok among lowest. Proprietary but very cheap.
- **Overall Score: 77/100.** Mean of (70+75+95+75+68)/5 = 76.6 → 77. Best-fit: highly cost-effective reasoning model with strong intelligence-for-price; great for budget-conscious agentic workloads.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-10
- Method: Public internet research via Artificial Analysis leaderboard (artificialanalysis.ai/models/muse-ember) and Meta documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis: Muse Ember](https://artificialanalysis.ai/models/muse-ember)
  - [Meta Model API](https://ai.meta.com/llama/)
  - [OpenRouter: meta/muse-ember](https://openrouter.ai/models/meta/muse-ember)

---