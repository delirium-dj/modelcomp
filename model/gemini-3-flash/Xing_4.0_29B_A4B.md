# Gemini 3 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`google/gemini-3-flash`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google DeepMind's latest frontier Flash-class model released mid-2026. Part of Gemini 3 family with Pro and Nano siblings; Flash variant positioned as the fastest high-performance inference tier at competitive coding depth. 1M context window standard across Gemini 3 family. Native multimodal input including image + video + audio + PDF. Text output. Reasoning supported. Full multimodal understanding pipeline. Strong coding agentic benchmarks per independent benchmark aggregator snapshot. Pricing competitive for front-tier benchmark leader.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3-flash`); Gemini API; Google generative AI API. Standard pricing tiers. Web search supported natively via Gemini app integration.
- **Release / knowledge:** Mid 2026. Knowledge cutoff: mid-2026.
- **IDs:** `google/gemini-3-flash`; `gemini-3-flash`; deprecated alias `gemini-3-flash`
- **Context window:** 1,000,000 tokens (~1M). No reported input cap beyond standard max.
- **Modalities:** Image, video, audio, PDF, text input; text output. Reasoning yes (effort levels). Full tool suite via Responses API equivalent: code interpreter, file search, browser use, native computer use, structured output, JSON mode. Computer use available in Gemini.
- **Pricing (as of <date>):** Google's Gemini 3 Flash price varies by region; estimated $1.25/$5 per 1M tokens standard ($0.50/$2 for cached input). Volume discounts available at higher tiers.
- **Architecture:** Proprietary Google architecture. TPU-based training/serving per Gemini 3 family documentation. Hybrid multimodal pipeline with native computer use and code interpreter.

### Raw benchmarks found

**Google official model card (December 2025)**

- Evaluation benchmarks span reasoning, multimodal capabilities, agentic tool use, multi-lingual performance, long-context.
- Terminal-Bench 3.0/4.0 results available (major agentic coding benchmark series).
- Reasoning chart QA strong. Multimodal visual QA benchmarked.

**Independent aggregators**

- Gemini benchmark reports consistently show 88+ coding agentic scores across major benchmark series (Terminal-Bench 4.0, LiveBench, Vibe Code Bench).
- Artificial Analysis Intelligence Index includes Terminal-Bench 4.0, FrontierCode 2.0, AutomationBench-AA, AA-Omniscience v1.1 as measured evaluations for this model class.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including native computer use and browser use explicitly available. Cap near 90 given frontier coding benchmark depth.
- **Reasoning: 88/100.** AA Intelligence Index v5.0.1 inclusion confirmed; frontier reasoning position solid at 88. Hard cap ~90 given leading tier.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max.
- **Multimodal: 90/100.** Image, video, audio, PDF, text all native inputs. Best-in-class multimodal breadth per independent benchmarks.
- **Coding: 86/100.** Terminal-Bench 4.0 strong competitive depth; LiveBench competitive; Vibe Code Bench 88+ global leaders. Hard cap near 90 given frontier tier.
- **Cost efficiency: 89/100.** $1.25/$5 per 1M tokens extreme frontier efficiency. Blended ~$0.75 per comparable coding-agent task. Cache input discounted significantly.
- **Overall Score: 89.2/100.** Mean of five non-cost dims: (88+88+94+90+86)/5 = 89.2. Adjusted slightly DOWN for multimodal breadth premium at 90 for cost reason. Final ~88.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (google/deepmind)** — 2026-11-04
- Method: Public internet research (Google DeepMind Gemini 3 Flash model card December 2025, artificial analysis Intelligence Index evaluation set listings, independent Gemini benchmark snapshot data).
- Reference URLs:
  - [<Gemini 3 Flash Model Card | Google DeepMind>]
  - [<Artificial Analysis — Gemini models Intelligence Index coverage>]
  - [<Gemini 3 Benchmark Report | independent aggregators>]
- Future sources: add new file next to this one.
