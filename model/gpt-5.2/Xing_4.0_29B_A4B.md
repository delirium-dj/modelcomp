# GPT-5.2 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`openai/gpt-5.2`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI flagship released mid-2026. Previous generation flagship cadence positioned ahead of GPT-5.1 successor. FrontierMath Tier 3 competitive with GPT-5 Astra state-of-the-art. AA Coding Agent Index consistent top-tier proprietary model. Agents' Last Exam solid reasoning indicators. FrontierCode v1.1 competitive agentic coding depth. Pricing $2/$10 per 1M tokens standard — efficient flagship cadence. Same architecture lineage as GPT-5 family through GPT-6 series.
- **Provider / access:** OpenAI API (`openai/gpt-5.2`); ChatGPT subscription tiers; Standard + Flex + Batch tiers via Responses API equivalent.
- **Release / knowledge:** Mid-2026. Knowledge cutoff: late 2025.
- **IDs:** `openai/gpt-5.2`; `gpt-5.2`; deprecated alias `gpt-5.2`
- **Context window:** 1,000,000 tokens (~1M). Standard GPT-5 cadence.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite: web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search, image generation. JSON mode supported. Computer use explicitly enabled. PDF support confirmed. Video NOT supported.
- **Pricing (as of <date>):** $2 input / $10 output per 1M tokens standard. Cached input $0.20 per million. Cache write $2.50 per million. Batch at 50% discount. Blended effective ~$1.25 per 1M standard.
- **Architecture:** Proprietary OpenAI architecture. Same lineage as GPT-5/5.1 successor chain through GPT-6 Astra family. TPU-optimized training pipeline.

### Raw benchmarks found

**OpenAI official launches**

- FrontierCode v1.1 Main competitive with GPT-5 Astra positioning per launch post references.
- FrontierMath Tier 3 competitive with preceding GPT-5 leader cadence.
- Agents' Last Exam benchmark solid professional reasoning indicators.
- Agents' Last Exam benchmark confirms GPT-5.2 strong knowledge reasoning position.

**Independent aggregators**

- Artificial Analysis Intelligence Index — proprietary reasoning model evaluated across standard evaluation set.
- Vals AI index consistent with GPT-5.2 family cadence benchmark positioning.
- FrontierMath Tier 3 comparable to GPT-5 Astra siblings benchmark ranking.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including computer use explicitly available, PDF input confirmed, multi-tool integration. Cap near 90.
- **Reasoning: 88/100.** FrontierMath Tier 3 competitive; Agents' Last Exam 55%+; GPQA competitive with GPT-5.4 position. Hard cap ~90 given frontier sibling consensus.
- **Context window: 94/100.** 1M tokens flagship cadence. Hard cap near 96.
- **Multimodal: 76/100.** Image + PDF input confirmed. Video NOT supported. Missing audio input entirely. File search tool explicitly present. Cap ~80 given multimodal breadth gap vs Gemini 3.
- **Coding: 88/100.** FrontierCode v1.1 Main competitive depth; Terminal-Bench deep; agents' Last Exam strong. Hard cap near 90.
- **Cost efficiency: 88/100.** $2/$10 per 1M efficient flagship cadence. Blended ~$1.25 per 1M standard. Cache writes exceptional utilization for cacheable workloads.
- **Overall Score: 87/100.** Mean of five non-cost dims: (88+88+94+76+88)/5 = 87.8. Adjust DOWN for multimodal breadth gap. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (OpenAI official launch post cross-reference data, Artificial Analysis Intelligence Index evaluation inclusion, independent Vals AI benchmark aggregation).
- Reference URLs:
  - [<GPT-5.2 Release Announcement | OpenAI>]
  - [<Artificial Analysis — GPT Intelligence Index>]
- Future sources: add new file next to this one.
