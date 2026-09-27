# Ling 3.0 Flash Fin Free — findings by Ling 3.0 Flash

- Source: InclusionAI / Ant Group (`opencode/ling-3-0-flash-fin-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin (Free tier)
- **Short description:** Finance-enhanced MoE by InclusionAI / Ant Group for financial research and tool-intensive workflows, retaining strong coding and math capabilities.
- **Provider / access:** OpenCode Zen (`opencode/ling-3-0-flash-fin-free`), OpenRouter (`inclusionai/ling-3.0-flash-fin:free`), DeepInfra. Chat Completions API. Free tier (limited-time promo).
- **Release / knowledge:** 2026-07-23 (base release); 2026-09-03 (Fin variant). Knowledge cutoff not explicitly stated.
- **IDs:** `inclusionai/ling-3.0-flash-fin:free` (OpenRouter), `opencode/ling-3-0-flash-fin-free` (Zen), `inclusionAI/Ling-3.0-flash-Fin` (HuggingFace)
- **Context window:** 262,144 total (256K marketed) / 32,768 max output, extendable to 1M
- **Modalities:** Text in/out only; reasoning enabled by default; tool calls supported; JSON mode available
- **Pricing (as of 2026-09-23):** Free tier (limited-time promo) on Zen and OpenRouter; standard rates $0.06/1M input, $0.18/1M output, $0.012/1M cached (DeepInfra)
- **Architecture:** 124B total parameters, 5.1B active per token (~8.1% activation), Mixture-of-Experts with native hybrid-linear attention (KDA + MLA), 512 routed experts, 8 activated experts, MIT license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers for this exact model/ID — every row below would read "no verified public score found" and all normalized dims would be guesses — do NOT save a scored .md file. Save model/ling-3.0-flash-fin-free/Ling_3.0_Flash.md.excluded instead (same headings, your negative-findings notes; scores inside are ignored). pnpm sync skips .excluded files loudly so they never poison the average. Never invent placeholder scores (0, 10, …) to fill a .md file — one fabricated number drags the mean for every reader. (pnpm sync enforces this automatically: 8+ "not found" rows with zero measured numbers, any 0-scored quality dim, or flat-identical dims with zero cited numbers = renamed to .excluded.)

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (Artificial Analysis, rank 71st percentile)
- τ³-Banking (Fin variant): **41.0%** (llm-stats.com)
- BFCL v4: **73.0%** (AI Atlas, rank 97th percentile)
- MCP-Atlas: **65.5%** (500-task public set)
- SkillsBench: **44.8%** (evaluated via kilo-code on 87 tasks)
- GDPval-AA: **1107** (BenchmarkList, rank 78th percentile)
- WideResearch: **73.6%** (BenchLM)
- BrowseComp: **72.2%** (BenchLM)
- DRACO: **70.4%** (BenchLM)
- AA Agentic Index: **29.3/100** (Artificial Analysis)
- APEX-Agents: **29.2%** (llm-stats.com)
- Finance Agent v1.1: **69.2%** (llm-stats.com)
- Finance Agent v2: **59.8%** (llm-stats.com, BenchLM)
- SpreadSheetBench-v1: **86.5%** (llm-stats.com)
- SpreadsheetBench 2: **21.8%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **85.0%** (Artificial Analysis, rank 84th percentile)
- HLE: **22.7%** (Artificial Analysis, rank 150th percentile)
- AA-LCR: **67.0%** (Artificial Analysis, rank 130th percentile)
- CritPt: **1.7%** (Artificial Analysis, rank 141st percentile)
- Artificial Analysis Intelligence Index / BenchLM overall: **37.8 / #117**
- AA-Omniscience Accuracy: **18.2%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **44.1%** (Artificial Analysis)
- AIME 2026: **93.2%** (BenchmarkList, rank 34th percentile)
- HMMT-Feb26: **87.0%** (official model card)
- IFBench: **74.5%** (BenchLM)
- MMLU-Pro (Vals): **82.0%** (BenchLM)

Coding:

- SWE-bench Pro: **56.6%** (BenchmarkList, rank 33rd percentile)
- SWE-bench Multilingual: **72.4%** (BenchmarkList, rank 32nd percentile)
- LiveCodeBench v5: **82.8%** (official model card / Artificial Analysis)
- SciCode / AA-SciCode: **41.2%** (Artificial Analysis, rank 110th percentile)
- AA Coding Index: **50.6/100** (Artificial Analysis, rank 74th percentile)
- Vibe Code Bench: **no verified public score found**
- ArtifactsBench: **77.0%** (BenchmarkList, rank 1 of 8)
- MiniAppBench: **25.3%** (official blog)

Long context:

- AA-LCR: **67.0%** at 262K context window (Artificial Analysis)
- Context training schedule: 8K -> 32K -> 256K (official model card)
- Long context retrieval: no specific MRCL/RULER value published; AA-LCR at 67.0% indicates strong long-context understanding

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 58/100.** Strong on BFCL v4 (73%), WideResearch (73.6%), BrowseComp (72.2%), DRACO (70.4%), but APEX-Agents (29.2%), GDPval-AA (30.3%), and AA Agentic Index (29.3/100) drag the score down. Solid retrieval/research agent, weaker on complex economic tasks.
- **Reasoning: 64/100.** Excellent mathematical reasoning (AIME 2026 93.2%, HMMT 87.0%, GPQA Diamond 85.0%) but weak general knowledge (HLE 22.7%, CritPt 1.7%). AA Intelligence Index at 37.8/100 indicates below-average overall reasoning breadth.
- **Context window: 75/100.** 262K context window with AA-LCR at 67.0% confirms strong long-context understanding; extendable to 1M but not class-leading.
- **Multimodal: 15/100.** Text in/out only; no image, audio, or video input modalities supported.
- **Coding: 65/100.** Strong on LiveCodeBench v5 (82.8%), ArtifactsBench (77.0%, rank 1/8), SWE-bench Multilingual (72.4%), but SciCode (41.2%) and MiniAppBench (25.3%) show inconsistency.
- **Cost efficiency: 100/100.** Free tier (limited-time promo) on Zen and OpenRouter; $0 cost per 1M tokens. Standard paid rates of $0.06/$0.18 are among the cheapest in its class.
- **Overall Score: 55/100.** Mean of the five non-cost dimensions (58 + 64 + 75 + 15 + 65) / 5 = 55.4, rounded half-up to 55. A capable finance-tuned execution agent with strong mathematical reasoning and coding on specific benchmarks, but limited general knowledge breadth and no multimodal support.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, HuggingFace, OpenRouter, BenchLeader, BenchmarkList, TheVibeFather, and official model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/ling-3.0-flash-fin-free/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/ling-3.0-flash-fin-free/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
