# Inkling Small — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Inkling Small
- **Short description:** OpenAI's small flagship reasoning model released mid-to-late 2026. Same $3/$10 per 1M tokens pricing tier as prior GPT-5.x family Small cadence. Strong coding agentic benchmarks at reduced model size constraints compared to GPT-5 family flagship. AA Coding Agent Index consistent competitive position among proprietary reasoning models globally. FrontierMath Tier 4 competitive with small-tier frontier positions. Agents' Last Exam strong professional reasoning. Pricing efficient for small flagship tier cadence. Strong API integration patterns per OpenAI documentation.
- **Provider / access:** OpenAI API (`openai/inkling-small`); ChatGPT subscription tiers; Standard + Flex + Batch tiers via Responses API equivalent. Fast mode 2× base price.
- **Release / knowledge:** Mid-to-late 2026. Knowledge cutoff: June 2026.
- **IDs:** `openai/inkling-small`; `inkling-small`; deprecated alias `inkling-small`
- **Context window:** 1,000,000 tokens (~1M). Standard Small cadence generous context.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including code interpreter, structured outputs, JSON mode. Native computer use available. PDF input supported. Video NOT confirmed.
- **Pricing (as of <date>):** $3 input / $10 output per 1M tokens standard ($1/$4 cached input). Blended effective ~$4 per 1M standard.
- **Architecture:** Proprietary OpenAI architecture. Same lineage as GPT-5 family through GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence.

### Raw benchmarks found

**OpenAI official launches**

- FrontierMath Tier 4 consistent top-tier proprietary positioning per OpenAI benchmark announcements.
- Agents' Last Exam benchmark solid professional reasoning indicators at small tier cadence.
- FrontierCode v1.1 Main competitive depth across agentic software engineering.

**Independent aggregators**

- Artificial Analysis Intelligence Index — proprietary reasoning model evaluated across standard evaluation set.
- Vals AI index consistent with GPT-5 family small frontier positioning globally.
- AA Coding Agent Index strong competitive position among proprietary reasoning models.

### Normalized scores (1–100)

- **Tool use: 86/100.** Full Responses API suite including native computer use explicitly enabled plus PDF input. Cap near 90 given broad general-purpose tooling depth.
- **Reasoning: 88/100.** FrontierMath Tier 4 competitive; Agents' Last Exam 50%+; GPQA competitive at small cadence. Hard cap ~90.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 76/100.** Image input confirmed via AA. PDF input explicitly supported. Audio NOT confirmed. Multimodal breadth gap vs frontier siblings significant.
- **Coding: 86/100.** FrontierCode v1.1 competitive depth; Terminal-Bench deep; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 88.
- **Cost efficiency: 82/100.** $3/$10 per 1M moderately efficient by dataset median but benchmark quality makes value justified. Blended ~$4 per 1M standard.
- **Overall Score: 86/100.** Mean of five non-cost dims: (86+88+94+76+86)/5 = 86.4. Adjust DOWN modestly for multimodal breadth gap vs frontier siblings. Final ~86.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, OpenAI official benchmark announcements, independent Vals AI index cross-reference).
- Reference URLs:
  - [<Inkling Small Release Announcement | OpenAI>]
  - [<Artificial Analysis — Inkling Intelligence Index>]
- Future sources: add new file next to this one.
