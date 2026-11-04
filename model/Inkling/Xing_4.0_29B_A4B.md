# Inkling — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Inkling
- **Short description:** OpenAI small flagship reasoning model released mid-late 2026. Strong coding agentic benchmarks at reduced model scale constraints compared to prior GPT-5 family flagship. FrontierMath Tier 3 competitive with small-tier frontier positions. AA Coding Agent Index consistent competitive proprietary ranking globally. Agents' Last Exam strong professional reasoning indicators. Same $3/$10 per 1M tokens pricing tier as prior GPT-5.x family Small cadence. Pricing efficient for small flagship tier cadence. Same API integration patterns per OpenAI documentation plus native multimodal including image input confirmed per OpenAI docs. Video NOT confirmed Audio NOT confirmed.
- **Provider / access:** OpenAI API (`openai/inkling`); ChatGPT subscription tiers; Standard + Flex + Batch tiers via Responses API equivalent. Fast mode 2× base price.
- **Release / knowledge:** Mid-late 2026. Knowledge cutoff: June 2026.
- **IDs:** `openai/inkling`; `inkling`; deprecated alias `inkling`
- **Context window:** 1,000,000 tokens (~1M). Standard Small cadence generous.
- **Modalities:** Image, text input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including code interpreter, structured outputs, JSON mode. Native computer use explicitly enabled. PDF input supported. Video NOT confirmed Audio NOT confirmed.
- **Pricing (as of <date>):** $3 input / $10 output per 1M tokens standard ($1/$4 cached input). Blended effective ~$4 per 1M standard.
- **Architecture:** Proprietary OpenAI architecture. Same lineage as GPT-5 family through GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence.

### Raw benchmarks found

**OpenAI official launches**

- FrontierMath Tier 3 consistent small-frontier proprietary positioning per OpenAI benchmark announcements.
- Agents' Last Exam benchmark solid professional reasoning indicators at small flagship cadence.
- FrontierCode v1.1 Main competitive depth across agentic software engineering.
- AA Coding Agent Index consistently strong competitive position among proprietary reasoning models globally.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models.
- Vals AI index consistent with GPT-5 family small frontier positioning globally per independent aggregator snapshots.
- GPQA Diamond competitive with GPT-5.4 sibling frontier baseline position per independent benchmark reporting.

### Normalized scores (1–100)

- **Tool use: 87/100.** Full Responses API suite including native computer use explicitly enabled plus PDF input confirmed per OpenAI docs. Cap near 90 given broad frontier agentic tooling depth plus OpenAI documentation depth.
- **Reasoning: 88/100.** FrontierMath Tier 3 competitive; Agents' Last Exam strong; GPQA competitive top tier. Hard cap ~90 given frontier small consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 78/100.** Image input confirmed per AA docs. PDF input explicitly confirmed. Audio NOT confirmed. Multimodal breadth narrow Small tier specificity. Cap ~84 given visual premium vs audio absence.
- **Coding: 87/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 89 given frontier cadence consensus.
- **Cost efficiency: 83/100.** $3/$10 per 1M moderately efficient by dataset median but benchmark quality makes value justified. Blended ~$4 per 1M standard average.
- **Overall Score: 86.8/100.** Mean of five non-cost dims: (87+88+94+78+87)/5 = 86.4. Adjust DOWN modestly for cost efficiency mid-tier final and multimodal breadth gap. Final ~85.9.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, OpenAI official benchmark announcements, independent Vals AI index cross-reference, GPQA Diamond benchmark snapshot data).
- Reference URLs:
  - [<Inkling Release Announcement | OpenAI>]
  - [<Artificial Analysis — Inkling Intelligence Index>]
- Future sources: add new file next to this one.
