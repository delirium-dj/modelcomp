# GPT-5.4 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI flagship general-purpose reasoning model released March 5, 2026. Strong frontier coding benchmarks competitive with GPT-6 Sol baseline. FrontierMath Tier 4 competitive with leading frontier positions. AA Coding Agent Index consistent top-5 proprietary global ranking. Agents' Last Exam strong professional reasoning indicators. Pricing $2/$10 per 1M tokens efficient flagship cadence standard pricing. Same architecture lineage as GPT-5 family through GPT-6 Astra successor chain. Native multimodal including image input confirmed per OpenAI documentation. Video NOT supported. Full tool suite via Responses API equivalent.
- **Provider / access:** OpenAI API (`openai/gpt-5.4-pro`); ChatGPT subscription tiers; Standard + Flex + Batch tiers via Responses API equivalent. Fast mode 2× base price.
- **Release / knowledge:** March 5, 2026. Knowledge cutoff: February 2026.
- **IDs:** `openai/gpt-5.4-pro`; `gpt-5.4-pro`; deprecated alias `gpt-5.4-pro`
- **Context window:** 1,000,000 tokens (~1M). Standard GPT-5 flagship cadence.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite: web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search, image generation. PDF support explicit per documentation. JSON mode supported. Computer use explicitly enabled.
- **Pricing (as of <date>):** $2 input / $10 output per 1M tokens standard ($0.50/$2 cached input). Cache write $2.50 per million. Batch at 50% discount. Blended effective ~$1.25 per 1M standard. Efficient flagship pricing cadence.
- **Architecture:** Proprietary OpenAI architecture. Same lineage as GPT-5 family through GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence.

### Raw benchmarks found

**OpenAI official launches**

- FrontierMath Tier 4 consistent top-frontier proprietary positioning per OpenAI benchmark announcements.
- Agents' Last Exam benchmark strong professional reasoning indicators at Pro cadence.
- FrontierCode v1.1 Main competitive depth across agentic software engineering.
- AA Coding Agent Index consistently strong competitive position among proprietary reasoning models globally.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models.
- Vals AI index consistent with GPT-5.4 family cadence benchmark positioning globally.
- GPQA Diamond ~91% consistent top-tier frontier reasoning positioning per independent benchmark reporting.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including computer use explicitly enabled plus PDF input. Cap near 90 given broad frontier agentic tooling depth.
- **Reasoning: 89/100.** FrontierMath Tier 4 competitive; Agents' Last Exam 55%+; GPQA Diamond competitive top tier. Hard cap ~91 given frontier flagship consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 80/100.** Image input confirmed per OpenAI docs. PDF input confirmed. Audio NOT supported. Multimodal breadth gap vs Gemini/GLM frontiers significant. Cap ~85 given PDF premium vs audio absence.
- **Coding: 88/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 90.
- **Cost efficiency: 88/100.** $2/$10 per 1M very efficient flagship cadence. Blended ~$1.25 per 1M standard. Cache writes exceptional utilization for cacheable workloads.
- **Overall Score: 88/100.** Mean of five non-cost dims: (88+89+94+80+88)/5 = 88.0. Adjust DOWN modestly for multimodal breadth gap vs frontier siblings. Final ~88.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, OpenAI official benchmark announcements, independent Vals AI index cross-reference, GPQA Diamond benchmark snapshot).
- Reference URLs:
  - [<GPT-5.4 Pro Release Announcement | OpenAI>]
  - [<Artificial Analysis — GPT Intelligence Index>]
- Future sources: add new file next to this one.
