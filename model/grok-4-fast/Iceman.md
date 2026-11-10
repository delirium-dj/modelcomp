# Grok 4 Fast — findings by Iceman

- Source: xAI/Grok 4 Fast
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (reasoning and non-reasoning variants)
- **Short description:** xAI’s Grok 4 Fast is a cost-efficient 2M-context reasoning/search model with unified reasoning/non-reasoning modes and native tool use, designed for high-throughput agentic and information-seeking workloads.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`) and Grok products. Local metadata lists `opencode/grok-4-fast` and `noFreeId` (deprecated for 4.1 Fast per metadata).
- **Release / knowledge:** Announced September 19, 2025 (xAI news). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `grok-4-fast`, `grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`.
- **Context window:** 2,000,000 tokens (2M); ~30,000 max output (local metadata/xAI announcement).
- **Modalities:** Text and image input; text output (local metadata; search/tool workflows supported).
- **Pricing (as of 2026-11-10):** xAI announcement/API pricing: $0.20 / 1M input and $0.50 / 1M output for <128K tokens; $0.40 / $1.00 for ≥128K tokens; cached input $0.05 / 1M. Local metadata notes $0.20/$0.50 per 1M in/out baseline.
- **Architecture:** Proprietary xAI unified model (shared weights for reasoning and non-reasoning modes via prompting). Architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from xAI’s “Grok 4 Fast” announcement unless noted.

Agent / tool use:

- BrowseComp: **44.9%** (vs Grok 4 43.0%)
- SimpleQA: **95.0%**
- Reka Research Eval: **66.0%**
- BrowseComp (zh): **51.2%**
- X Bench Deepsearch (zh): **74.0%**
- X Browse (internal): **58.0%**
- Native tool use (code execution, web browsing, X search) trained end-to-end with tool-use RL

Reasoning / knowledge:

- GPQA Diamond: **85.7%**
- AIME 2025 (no tools): **92.0%**
- HMMT 2025 (no tools): **93.3%**
- HLE (no tools): **20.0%**
- Artificial Analysis Intelligence Index: SOTA price-to-intelligence positioning claimed (independent review cited by xAI)

Coding:

- LiveCodeBench (Jan–May): **80.0%**
- SWE-bench Verified / SWE-Pro: **no verified public score found**

Long context:

- 2M token context window documented; no standalone MRCR/RULER/GraphWalks numeric retrieval benchmark score extracted.

Multimodal:

- Text/image input supported per metadata/product context; no multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 89/100.** Strong verified search/agentic tool-use performance (BrowseComp 44.9%, SimpleQA 95.0%, Reka Research Eval 66.0%, X Bench Deepsearch zh 74.0%, X Browse 58.0%) and native tool-use training indicate excellent information-seeking/tool workflows.
- **Reasoning: 86/100.** Very strong reasoning/math results (AIME 2025 92.0%, HMMT 2025 93.3%, GPQA Diamond 85.7%) with moderate HLE (20.0% no tools).
- **Context window: 98/100.** 2M context window is exceptional for long-horizon agent, search, and document workflows.
- **Multimodal: 78/100.** Text/image input support is useful, but multimodal depth/benchmark evidence is limited in reviewed sources.
- **Coding: 84/100.** Strong LiveCodeBench (Jan–May) 80.0% indicates high coding capability, though broader coding benchmark coverage (SWE-bench/Terminal-Bench) was not extracted.
- **Cost efficiency: 97/100.** Very low token pricing and high token efficiency (reported ~40% fewer thinking tokens than Grok 4 on average for comparable performance) make it highly cost-efficient.
- **Overall Score: 87/100.** Mean of the five non-cost dims (89, 86, 98, 78, 84) = 87.0 → 87. Best fit for high-volume, cost-efficient reasoning/search and long-context agent workflows (now superseded by Grok 4.1 Fast in some contexts).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to xAI announcement; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Grok 4 Fast announcement (xAI)](https://x.ai/news/grok-4-fast)
  - Local repository metadata consulted: `model/grok-4-fast/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
