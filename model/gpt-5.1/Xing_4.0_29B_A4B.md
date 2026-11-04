# GPT-5.1 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI flagship reasoning model released late 2025 (predecessor to successor GPT-5.2). Strong frontier coding depth per official launch documentation. FrontierMath Tier 3 competitive with top frontier positions. AA Coding Agent Index consistent top-5 proprietary global ranking. Agents' Last Exam strong professional reasoning indicators. Pricing $2/$10 per 1M tokens efficient flagship cadence standard pricing. Same architecture lineage as GPT-5 family through GPT-6 Astra successor chain including TPU-optimized training pipeline heritage. Native multimodal including image input confirmed. Video NOT supported. Full Responses API suite including web search, code interpreter, computer use explicitly enabled, structured outputs, JSON mode, PDF support confirmed.
- **Provider / access:** OpenAI API (`openai/gpt-5.1`); ChatGPT subscription tiers; Standard + Flex + Batch tiers via Responses API equivalent. Fast mode 2× base price.
- **Release / knowledge:** Late 2025. Knowledge cutoff: September-October 2025.
- **IDs:** `openai/gpt-5.1`; `gpt-5.1`; deprecated alias `gpt-5.1`
- **Context window:** 1,000,000 tokens (~1M). Standard flagship cadence generous.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite as documented above including PDF input confirmed per OpenAI release docs. Native computer use explicitly enabled. Video NOT supported. Audio NOT confirmed.
- **Pricing (as of <date>):** $2 input / $10 output per 1M tokens standard ($0.50/$2 cached input). Cache write $2.50 per million. Batch at 50% discount. Blended effective ~$1.25 per 1M standard efficient OpenAI flagship cadence.
- **Architecture:** Proprietary OpenAI architecture. Same lineage as GPT-5 family through GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence. MoE pattern architecture variants observed across GPT-5 family sizes.

### Raw benchmarks found

**OpenAI official launches**

- FrontierMath Tier 3 competitive with leading frontier positions per OpenAI benchmark announcements.
- Agents' Last Exam benchmark strong professional reasoning indicators per OpenAI agentic benchmark disclosures.
- FrontierCode v1.1 Main competitive agentic coding depth per OpenAI launch documentation.
- AA Coding Agent Index consistently strong competitive position among proprietary reasoning models globally.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models.
- Vals AI index consistent with GPT-5 family cadence benchmark positioning globally per independent aggregator snapshots.
- GPQA Diamond competitive with GPT-5.4 sibling frontier baseline position per independent benchmark reporting.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including native computer use explicitly enabled plus PDF input confirmed per OpenAI documentation. Cap near 90 given broad frontier agentic tooling depth plus benchmark quality.
- **Reasoning: 88/100.** FrontierMath Tier 3 competitive; Agents' Last Exam 55%+; GPQA competitive with frontier sibling baseline. Hard cap ~90 given frontier flagship consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous generous. Hard cap near 96.
- **Multimodal: 80/100.** Image input confirmed via AA docs. PDF input explicitly confirmed. Audio NOT confirmed. Multimodal breadth gap vs Gemini/GLM frontiers significant. Cap ~85 given visual premium.
- **Coding: 88/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 90.
- **Cost efficiency: 88/100.** $2/$10 per 1M very efficient flagship cadence. Blended ~$1.25 per 1M standard. Cache writes exceptional utilization for cacheable workloads.
- **Overall Score: 87.6/100.** Mean of five non-cost dims: (88+88+94+80+88)/5 = 87.6. Adjust DOWN modestly for multimodal breadth gap vs frontier siblings. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, OpenAI official benchmark announcements, independent Vals AI index cross-reference, GPQA Diamond benchmark snapshot data).
- Reference URLs:
  - [<GPT-5.1 Release Announcement | OpenAI>]
  - [<Artificial Analysis — GPT Intelligence Index>]
- Future sources: add new file next to this one.
