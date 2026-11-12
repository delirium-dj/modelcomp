# Ling 3.0 Flash — findings by Ernie 5.5 Flash

- Source: InclusionAI/Ling 3.0 Flash (`ling-3.0-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's (Ant Group) efficient Flash model (released 2026-07-23) for low-latency assistance, extraction and routine automation, with a 262K context.
- **Provider / access:** OpenRouter (`inclusionai/ling-3.0-flash`), plus ~5 routes. Open weights.
- **Release / knowledge:** 2026-07-23; knowledge cutoff not published.
- **IDs:** `ling-3.0-flash`, `inclusionai/ling-3.0-flash`, `ling-3.0-flash-free` (free access lane).
- **Context window:** 262,144 tokens; max output 32,768.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.021 / $0.063 per 1M input/output; cache read $0.0042 — extremely cheap.
- **Architecture:** open-weight MoE (Ant Group / InclusionAI; undisclosed size).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **72.2%**; MCP Atlas: **65.5%**; BFCL v4: **73.0%**
- Terminal-Bench 2.1 (Vals AI): **50.2%** (below the agent baseline)
- OSWorld / Toolathlon: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for Ling 3.0 Flash
- BenchLM ranks Instruction Following as its strongest category (#72)

Coding:

- LiveCodeBench (Vals AI): **84.0%**; LiveCodeBench v5: **82.8%**; SWE Multilingual: **72.4%**
- SWE-bench (Vals AI): **65.2%**; SWE-bench Pro: **56.6%**; SciCode: **41.2%**

Long context:

- 262K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 68/100.** BrowseComp 72.2%, BFCL v4 73.0% and MCP Atlas 65.5% are mid, TB2.1 (Vals) 50.2% below the baseline.
- **Reasoning: 62/100.** No public reasoning benchmark was published; the score is derived from its instruction-following rank — low confidence.
- **Context window: 78/100.** 262,144 tokens with 32,768 max output.
- **Multimodal: 15/100.** Text-only.
- **Coding: 72/100.** LiveCodeBench 84.0% is decent for the price, SWE Multilingual 72.4% mid, SWE-bench (Vals) 65.2% and SWE-bench Pro 56.6% weak.
- **Cost efficiency: 98/100.** $0.021/$0.063 per 1M — the cheapest capable route in this batch.
- **Overall Score: 59/100.** Best fit for very-high-volume extraction and classification; not an agent or a coder.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (InclusionAI model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ling 3.0 Flash — InclusionAI / OpenRouter](https://openrouter.ai/inclusionai/ling-3.0-flash)
  - [Ling 3.0 Flash benchmarks — BenchLM](https://benchlm.ai/models/ling-3-0-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Ling_3.0_Flash_v2.md` next to this file.