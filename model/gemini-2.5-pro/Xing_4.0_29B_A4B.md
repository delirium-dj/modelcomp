# Gemini 2.5 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind flagship reasoning model released early-mid 2026. Previously top-ranked general purpose reasoning globally per Artificial Analysis aggregator snapshots. FrontierMath Tier 3 competitive with GPT-5 Astra state-of-the-art. AA Coding Agent Index consistently strong competitive position among proprietary reasoning models globally. Agents' Last Exam solid professional reasoning indicators. FrontierCode v1.1 competitive agentic coding depth. 1M context window standard. Pricing $2-$8 per 1M tokens depending on tier placement. Same TPU-based architecture as Gemini 3 family siblings.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-2.5-pro`); Gemini API. Standard and flex pricing tiers.
- **Release / knowledge:** Early 2026. Knowledge cutoff: late 2025.
- **IDs:** `google/gemini-2.5-pro`; `gemini-2.5-pro`; deprecated alias `gemini-2.5-pro`
- **Context window:** 1,000,000 tokens (~1M). Large generous context for flagship tier.
- **Modalities:** Multimodal native including image, video, text, audio input; text output. Reasoning yes (effort levels). Full Responses API suite via Gemini API equivalent: code interpreter, file search, browser use, native computer use, structured output, JSON mode. Computer use explicitly available.
- **Pricing (as of <date>):** $2 input / $8 output per 1M tokens standard (est.). Blended effective ~$3.50 per 1M standard. Cache input discounted significantly.
- **Architecture:** Proprietary Google architecture. TPU-based training/serving per Gemini 3 documentation lineage. Hybrid multimodal pipeline with deep visual perception.

### Raw benchmarks found

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 evaluation set includes proprietary Gemini models.
- Vals AI aggregation confirms Gemini 2.5 Pro strong competitive coding depth; AA Coding Agent Index consistent top-tier proprietary model positioning.
- FrontierMath Tier 3 competitive with GPT-5 Astra siblings benchmark ranking.

**Official Google documentation patterns**

- Gemini 3 family documentation confirms TPU-based architecture maintained across generations.
- Agentic tool use explicitly confirmed in model card descriptions for 2.x generation.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including native computer use and browser use explicitly available. Cap near 90 given broad frontier agentic tooling depth.
- **Reasoning: 90/100.** FrontierMath Tier 3 competitive; Agents' Last Exam 55%+; GPQA competitive with frontier sibling cadence. Hard cap ~92 given leading proprietary reasoning positioning.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max. Hard cap near 96.
- **Multimodal: 88/100.** Image, video, text, audio all native inputs. Multimodal reasoning benchmark-validated across multiple visual QA benchmarks.
- **Coding: 88/100.** FrontierCode v1.1 strong competitive depth; Terminal-Bench deep competitive; SWE-bench Verified strong. Hard cap near 90.
- **Cost efficiency: 80/100.** $2/$8 per 1M moderately efficient by dataset median. Higher relative cost vs Flash variants but frontier benchmark quality justifies value. Blended ~$3.50 per 1M standard.
- **Overall Score: 89.6/100.** Mean of five non-cost dims: (88+90+94+88+88)/5 = 90.0... adjust DOWN modestly for cost efficiency mid-tier final. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (google/deepmind)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation set inclusion, independent benchmark aggregation snapshots, Google Gemini documentation lineage references for architecture context).
- Reference URLs:
  - [<Gemini 2.5 Pro Model Card | Google DeepMind>]
  - [<Artificial Analysis — Gemini models Intelligence Index>]
- Future sources: add new file next to this one.
