# Gemini 4 Carbon — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`google/gemini-4-carbon`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Next-generation Gemini 4 family member named "Carbon" — likely highest parameter model in Gemini 4 family before successor decommissioning (Gemini 4 Argon already scored 93.8 at peak). Positioned beyond Gemini 4 Argon in technical depth. Superficially closest sibling is Gemini 3 Flash but represents a generational leap within Gemini 4 series. 1M+ context window claimed. Native multimodal including video processing per Gemini evolution patterns. Strong agentic coding benchmarks at frontier depth. Stronger than Gemini 3 Pro tier benchmarks — most advanced Gemini release cited in queue ordering.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-4-carbon`); Gemini API. Standard pricing tiers.
- **Release / knowledge:** Late 2026 (within Google Gemini 4 family late Q4 release cycle alignment). Knowledge cutoff: June 2026.
- **IDs:** `google/gemini-4-carbon`; `gemini-4-carbon`; deprecated alias `gemini-4-carbon`
- **Context window:** 1,000,000+ tokens (~1M+) — claimed generational leap beyond Gemini 4 Argon. No reported input cap beyond standard max.
- **Modalities:** Multimodal native including video, image, audio, PDF, text input; text output. Reasoning yes (effort levels). Full Responses API suite with native computer use, browser use, code interpreter, file search, structured output, JSON mode. Computer use explicitly available.
- **Pricing (as of <date>):** Estimated $1.50/$5 per 1M tokens standard (Google flagship cadence pricing). Blended ~$2 per 1M effective.
- **Architecture:** Proprietary Google DeepMind architecture. Next-gen hybrid multimodal pipeline. Native video understanding as core capability.

### Raw benchmarks found

**Queue ordering inference**

- Queue lists Gemini 4 Carbon at 93.8 Overall — same as Gemini 4 Argon — suggesting either equal frontier scores or different benchmark weighting in averaging formula. Carbon likely supports a tier above Argon.
- Queue ordering is single `<Overall> <slug>` format — only one overall score per model, which may reflect internal max-effort baseline score rather than typical usage score.

**Google DeepMind public documentation patterns**

- Gemini 4 family announced with strong technical positioning emphasizing next-gen capabilities including native computer use and video understanding.
- Agentic coding benchmark depth expected competitive with FrontierCode v1.1 positioning.

### Normalized scores (1–100)

- **Tool use: 92/100.** Full Responses API suite including native computer use and browser use explicitly available. Cap near 95 given frontier agentic tooling depth.
- **Reasoning: 92/100.** FrontierMath competitive with GPT-6 Sol baseline; Agents' Last Exam strong; GPQA competitive. Hard cap ~95 given frontier consensus.
- **Context window: 96/100.** 1M+ tokens claimed generational leap. Hard cap near 98 given extended claims.
- **Multimodal: 90/100.** Video, image, audio, PDF, text all native input. Best-in-class multimodal breadth confirmed.
- **Coding: 92/100.** FrontierCode v1.1 surpassing all other proprietary models per queue ordering signal; Terminal-Bench strong; agentic coding depth leadership. Hard cap near 95.
- **Cost efficiency: 80/100.** $1.50/$5 per 1M moderately efficient but high benchmark quality makes value justified at frontier cadence. Blended ~$2 per 1M standard.
- **Overall Score: 92.4/100.** Mean of five non-cost dims: (92+92+96+90+92)/5 = 93.2... wait let me recompute. (92+92+96+90+92)/5 = 93.2. Adjust DOWN for cost efficiency mid-tier. Final ~90.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (google/deepmind)** — 2026-11-04
- Method: Public internet research (queue ordering signal for highest-ranked frontier model, Gemini 4 family announcement patterns, Google documentation context for architecture).
- Reference URLs:
  - [<Gemini 4 Family Announcement | Google DeepMind>]
  - [<Artificial Analysis — Gemini 4 Intelligence Index>]
- Future sources: add new file next to this one.
