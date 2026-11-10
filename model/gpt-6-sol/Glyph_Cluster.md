# GPT-6 Sol — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-6-sol`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI proprietary reasoning model (Max configuration tracked by Artificial Analysis) positioned as an above-average intelligence, reasonably priced frontier model with multimodal text/image input and strong aggregate AA performance for its tier.
- **Provider / access:** OpenRouter lists `openai/gpt-6-sol` served by OpenAI, Azure, Amazon Bedrock and others (EU in-region routing available via Azure on eligible plans per OpenRouter). Artificial Analysis tracks provider performance/pricing.
- **Release / knowledge:** Released 2026-09-22 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `openai/gpt-6-sol`
- **Context window:** 1M tokens (Artificial Analysis; ~1575 A4 pages estimate shown). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported. Tool use supported via API parameters per OpenRouter capabilities listing.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $2.00 / 1M input, $10.00 / 1M output, 90% cache discount; blended ~ $1.54/1M (7:2:1) per AA FAQ. OpenRouter provider pricing varies ($1/$5 to $4/$20 tiers shown).
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for the exact model/ID `gpt-6-sol` from accessible sources (primarily Artificial Analysis aggregates). Detailed per-eval breakdown values were not fully extractable from fetched page text beyond index/aggregate metrics.

Agent / tool use:

- Artificial Analysis Intelligence Index (composite, includes agentic evals such as AA-Briefcase/AutomationBench/Terminal-Bench components in index methodology): **44** overall index (rank #31/74 in AA comparable-class snapshot).
- Time per Intelligence Index task: **7.5 min**; cost per Intelligence Index task: **$2.47** (Artificial Analysis).
- Terminal-Bench 2.1: **no verified public score found** (individual component score not extracted)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (component score not extracted)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44** (#31/74, above median 40 in comparable class) (Artificial Analysis).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (index includes HLE-Diamond component but exact score not extracted)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AA-Omniscience (index components): **no verified public score found** (not extracted)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- FrontierCode/Terminal-Bench coding components: included in Intelligence Index methodology but exact scores **not extracted**.

Long context:

- Context window: **1M tokens** (Artificial Analysis). No verified MRCR/RULER/GraphWalks retrieval score found.

Performance/efficiency (AA snapshot): TTFA **46.46s**, output speed **120 tok/s**, output tokens from Intelligence Index **65.1M** (fairly concise vs median 72.8M).

### Normalized scores (1–100)

> Derived from AA Intelligence Index 44 and aggregate performance/cost/verbosity/context metadata. Lack of extracted per-benchmark component scores caps precision.

- **Tool use: 62/100.** AA Intelligence Index includes agentic/tool-use evaluations and the model scores above median (44 vs 40) with good task time/cost efficiency; without extracted Terminal-Bench/GDPval-AA/MCP specifics, score is moderated.
- **Reasoning: 66/100.** Above-average AA Intelligence Index (44, #31/74) indicates solid reasoning/knowledge-work capability for its price tier; specific GPQA/HLE component scores not extracted.
- **Context window: 90/100.** 1M-token context window reported; no verified long-context retrieval benchmark score found, so tier credit given with evidence limitation.
- **Multimodal: 55/100.** Text and image input supported with text output; no verified vision benchmark scores found in accessible sources.
- **Coding: 64/100.** Composite index includes coding/terminal evaluations and overall score is above median, suggesting competent coding; no extracted SWE-bench/LiveCodeBench absolutes.
- **Cost efficiency: 55/100.** Moderately priced at $2/$10 with $2.47 per Intelligence Index task and reasonable speed/verbosity; competitive for capability but not low-cost.
- **Overall Score: 67/100.** Mean of five non-cost dims `(62+66+90+55+64)/5 = 67.4` → **67** (half-up). Best fit as a balanced, above-average proprietary reasoning model with large context and moderate multimodal/coding evidence from aggregate benchmarks.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6 Sol (Max)](https://artificialanalysis.ai/models/gpt-6-sol)
  - [OpenRouter — openai/gpt-6-sol](https://openrouter.ai/openai/gpt-6-sol)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
