# GPT-6.1 Terra — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-6.1-terra`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI proprietary reasoning model (Max configuration tracked by Artificial Analysis) with leading-class aggregate intelligence for its price tier, multimodal text/image input, and 1M-token context.
- **Provider / access:** OpenRouter lists `openai/gpt-6.1-terra` served by OpenAI, Azure, Amazon Bedrock and others (EU in-region routing available via Azure on eligible plans per OpenRouter). Artificial Analysis tracks provider pricing/performance.
- **Release / knowledge:** Released 2026-10-26 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `openai/gpt-6.1-terra`
- **Context window:** 1M tokens (Artificial Analysis).
- **Modalities:** Text and image input; text output; reasoning supported. Tool use supported via API parameters per OpenRouter capabilities listing.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $1.00 / 1M input, $5.00 / 1M output, 95% cache discount; blended ~$0.73/1M (7:2:1) per AA FAQ. OpenRouter provider pricing varies ($0.50/$2.50 to $2/$10 tiers shown).
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for the exact model/ID `gpt-6.1-terra` from accessible sources (primarily Artificial Analysis aggregates). Detailed per-eval component scores were not fully extractable from fetched page text.

Agent / tool use:

- Artificial Analysis Intelligence Index (composite including agentic evals such as AA-Briefcase/AutomationBench/Terminal-Bench components): **51** overall index (rank #19/74 in comparable-class snapshot), well above median 40.
- Time per Intelligence Index task: **13.8 min** (slower than median 12.8 min); cost per Intelligence Index task: **$0.96** (Artificial Analysis).
- Terminal-Bench 2.1: **no verified public score found** (component not extracted)
- Tau3-Banking / Tau2-Bench / GDPval-AA: **no verified public score found** (components not extracted)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** (#19/74, well above median 40) (Artificial Analysis).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (HLE-Diamond included in index but exact score not extracted)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AA-Omniscience: **no verified public score found** (component not extracted)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench / SciCode: **no verified public score found**
- Coding/terminal components included in Intelligence Index but exact scores **not extracted**.

Long context:

- Context window: **1M tokens** (Artificial Analysis). No verified MRCR/RULER/GraphWalks retrieval score found.

Performance/efficiency (AA snapshot): TTFA **147.37s**, output speed **73 tok/s**, output tokens from Intelligence Index **99.4M** (somewhat verbose vs median 72.8M).

### Normalized scores (1–100)

> Derived from AA Intelligence Index 51 and aggregate performance/cost/verbosity/context metadata. Lack of extracted per-benchmark component scores caps precision.

- **Tool use: 72/100.** Strong above-median composite intelligence (51 vs 40) in an index that includes agentic/tool-use evaluations suggests solid tool-use capability; without extracted Terminal-Bench/GDPval-AA/MCP specifics, score is moderated.
- **Reasoning: 76/100.** High AA Intelligence Index (#19/74) indicates strong reasoning/knowledge-work performance for its price tier; specific GPQA/HLE/CritPt components not extracted.
- **Context window: 90/100.** 1M-token context window reported; no verified long-context retrieval benchmark score found.
- **Multimodal: 55/100.** Text and image input supported with text output; no verified vision benchmark scores found in accessible sources.
- **Coding: 74/100.** Composite index includes coding/terminal evaluations and overall score is well above median, implying strong coding ability; exact SWE-bench/LiveCodeBench values not extracted.
- **Cost efficiency: 78/100.** Well priced at $1/$5 with 95% cache discount and low $0.96 per Intelligence Index task for its intelligence level, despite slower latency.
- **Overall Score: 73/100.** Mean of five non-cost dims `(72+76+90+55+74)/5 = 73.4` → **73** (half-up). Best fit as a high-intelligence, cost-effective large-context reasoning model with solid coding/agentic potential and moderate multimodal evidence.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6.1 Terra (Max)](https://artificialanalysis.ai/models/gpt-6-1-terra)
  - [OpenRouter — openai/gpt-6.1-terra](https://openrouter.ai/openai/gpt-6.1-terra)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
