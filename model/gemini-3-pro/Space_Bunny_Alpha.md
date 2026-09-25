# Gemini 3 Pro Preview (high) — findings by Space Bunny Alpha

- Source: Google DeepMind / Gemini 3 Pro Preview
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro Preview (high)
- **Short description:** Google's proprietary multimodal reasoning model for advanced coding, agentic workflows, multimodal understanding, and long-context work.
- **Provider / access:** Google Gemini API `gemini-3-pro-preview`; Google AI Studio and Gemini app. No current OpenRouter record for the exact text model was found in the reviewed catalog.
- **Release / knowledge:** Artificial Analysis lists 2025-11-18; no verified exact knowledge cutoff found.
- **IDs:** `gemini-3-pro-preview`; high-reasoning variant reported by Artificial Analysis.
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text, image, audio, and video input; text output; reasoning is supported and the high variant is evaluated here. Google documents function calling and structured outputs for Gemini models.
- **Pricing (as of 2026-09-25):** Artificial Analysis lists $2.00 input / $12.00 output per 1M tokens; pricing is provider-dependent and the preview model is deprecated.
- **Architecture:** Proprietary; parameter count was not disclosed.

### Raw benchmarks found

> The official Google DeepMind comparison page labels the exact model as Gemini 3 Pro Thinking (High) and reports it alongside Gemini 3.1 Pro. The values below are the Gemini 3 Pro column, not the 3.1 Pro column.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2 harness): **56.9%** (Google DeepMind official comparison).
- Tau2-Bench Retail / Telecom: **85.3% / 98.0%** (Google DeepMind official comparison).
- MCP Atlas: **54.1%**; BrowseComp with search, Python, and browsing: **59.2%** (Google DeepMind official comparison).
- APEX-Agents: **18.4%**; GDPval-AA: **1,195 Elo** (Google DeepMind official comparison).

Reasoning / knowledge:

- Humanity's Last Exam, no tools / search plus code: **37.5% / 45.8%** (Google DeepMind official comparison).
- ARC-AGI-2: **31.1%**; GPQA Diamond: **91.9%** (Google DeepMind official comparison).
- Artificial Analysis Intelligence Index: **28 estimated** (exact Gemini 3 Pro Preview high; model is deprecated).
- MMMLU: **91.8%** (Google DeepMind official comparison).

Coding:

- SWE-bench Verified, single attempt: **76.2%**; SWE-bench Pro public: **43.3%** (Google DeepMind official comparison).
- SciCode: **56%**; LiveCodeBench Pro: **2,439 Elo** (Google DeepMind official comparison).
- Terminal-Bench 2.0: **56.9%** (Google DeepMind official comparison).

Long context:

- MRCR v2 8-needle at 128K average: **77.0%**; at 1M pointwise: **26.3%** (Google DeepMind official comparison).
- The 1M context is verified, but retrieval quality degrades substantially at the full 1M setting in the published MRCR result.

Multimodal:

- MMMU-Pro, no tools: **81.0%** (Google DeepMind official comparison).
- Text, image, audio, and video inputs with text output are verified by the Artificial Analysis technical specification.

### Normalized scores (1–100)

- **Tool use: 87/100.** Tau2 Telecom at 98.0%, Retail at 85.3%, Terminal-Bench at 56.9%, and MCP Atlas at 54.1% show strong tool and agent capability; BrowseComp and APEX are more modest.
- **Reasoning: 88/100.** GPQA at 91.9%, HLE at 45.8% with tools, ARC-AGI-2 at 31.1%, and the 28-point Intelligence Index indicate strong but not frontier-leading reasoning for its generation.
- **Context window: 88/100.** The 1M window is excellent, but MRCR falls to 26.3% at 1M pointwise, so the score is below models with stronger full-window retrieval.
- **Multimodal: 92/100.** Native text/image/audio/video input and 81.0% MMMU-Pro provide broad multimodal capability, though public exact-model visual evidence is limited.
- **Coding: 86/100.** SWE-bench Verified at 76.2%, SciCode at 56%, LiveCodeBench at 2,439 Elo, and Terminal-Bench at 56.9% are strong; SWE-bench Pro at 43.3% caps the rating.
- **Cost efficiency: 76/100.** At $2/$12, the preview model is moderately priced but more expensive than many open alternatives and is now deprecated.
- **Overall Score: 88/100.** A capable multimodal reasoning and coding model with a 1M context, best for multimodal agents and long-context work while the preview remains available; newer Gemini 3.1 Pro is the successor to prefer.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: Google DeepMind's official Gemini 3.1 Pro comparison table, Google Gemini model documentation, and Artificial Analysis model metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_Pro.md`, using the same headings.
