# Gemini 2.5 Flash — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 2.5 Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **ERA NOTE:** A May 2025 thinking model, now access-limited ("limiting access to the 2.5 models to users who have actively used them in the past… not deprecated and will continue to be served until further notice"; new projects are directed to 3.5 Flash-Lite or 3.8 Flash). Benchmark evidence is 2025-vintage; scores are anchored to the 2026-10 frontier per methodology.

## Model card

- **Name:** Gemini 2.5 Flash (`gemini-2.5-flash`; Preview 04-17 deprecated 2025-07-15; variants: `gemini-2.5-flash-image` "Nano Banana", `gemini-2.5-flash-native-audio-preview-12-2025` Live, `gemini-2.5-flash-preview-tts` TTS)
- **Short description:** Google DeepMind's price-performance thinking model for low-latency, high-volume tasks — dynamic thinking-budget control, native tools (Search grounding, code execution, URL context, function calling), 1M context, multimodal input; "the second most capable model in the Gemini family" at launch, overtaking 1.5 Pro.
- **Provider / access:** Google — Gemini API (AI Studio) and Vertex AI; access now limited to past active users (see note above).
- **Release / knowledge:** Preview 2025-04-17; GA/stable 2025-05-20 (Google I/O); pricing updated 2025-06-17. Knowledge cutoff not captured in the sources reviewed.
- **IDs:** `gemini-2.5-flash`; repo folder `gemini-2.5-flash`.
- **Context window:** 1,000,000 tokens; max output 64K (65.5K per llm-stats Google row; DeepInfra row lists 1.0M output).
- **Modalities:** Text, image, audio, video in; text out (image generation via the separate `gemini-2.5-flash-image` endpoint).
- **Pricing (as of 2026-10):** $0.30 input / $2.50 output per 1M (single price tier regardless of input size; thinking vs non-thinking price difference removed 2025-06-17 — input up from $0.15, output down from $3.50); cached input $0.567/1M per LLMLearner (value as captured, not independently confirmed); AI Olympus still lists the old $0.15/$0.60 preview rates.
- **Architecture:** Not disclosed in captured sources (thinking model with dynamic budget control).

### Raw benchmarks found

**Vendor model card (Google DeepMind, May 2025):**
- GPQA Diamond (thinking, no tools) **82.8%** (vs 1.5 Pro May 58.1%, 2.0 Flash 50.5%; 2.5 Pro 86.4%).
- AIME 2025 (thinking, no tools) **72.0%**; AIME 2024 **88.0%**.
- SWE-bench Verified **48.9%** (single attempt, self-reported; Sophon lists 28.7 — conflicting third-party value).
- LiveCodeBench **59.3%** (2.5 Pro: 74.2%, up from 1.5 Pro's 30.5%).
- HLE **12.1%** (best reported, effort unspecified); CritPt **1.4%**; FrontierMath Tier 4 **4.2%**; SimpleQA (no tools) **26.9%**; ARC-AGI-1 ~32%; SAGE **44.8**; MedCode ~40; MedScribe **83.0**.
- Long-context: SoTA on LOFT and MRCR at 128K context (per the Gemini 2.X report); "the only one… to support context lengths of 1M+ tokens" among the compared models.
- LMArena: 2.5 Pro scores 120+ Elo above 1.5 Pro (Flash-specific Elo not captured).

## Scores

- **Tool use: 56/100.** Native tools (Search grounding, code execution, URL context, function calling) with thinking-budget control; no Tau-bench/MCP-Atlas run captured. Mid-band.
- **Reasoning: 63/100.** GPQA 82.8% and AIME 2025 72.0% / AIME 2024 88.0% are solid; HLE 12.1%, CritPt 1.4%, FrontierMath T4 4.2%, SimpleQA 26.9% drag; 2025-vintage against the 2026-10 frontier.
- **Context window: 91/100.** 1M tokens with SoTA LOFT/MRCR results at 128K (measured); no 1M-scale MRCR value captured, so the top band is not justified.
- **Multimodal: 73/100.** Text, image, audio, and video input (plus separate image-generation and Live-audio endpoints); Flash-specific MMMU-class values not captured in the sources reviewed; scored on documented input breadth and the report's "significantly increased image understanding" claim.
- **Coding: 59/100.** SWE-bench Verified 48.9% (vendor card; Sophon's 28.7 conflicts) and LiveCodeBench 59.3% are 2025-mid-tier; Aider Polyglot captured only for 2.5 Pro (82.2%).
- **Cost efficiency: 76/100.** $0.30/$2.50 per 1M (blended ≈$0.85/M at 3:1) — mid-tier pricing for a thinking model; the June 2025 restructure raised input 2× but cut output 29% and removed the thinking surcharge.
- **Overall Score: 68.4/100.** Mean of Tool use 56, Reasoning 63, Context window 91, Multimodal 73, Coding 59 = 68.4 (Cost efficiency excluded per methodology).

> **Gap vs folder average (70.8): −2.4.** Small gap; the model's historical "second most capable in family" status and 1M thinking-model positioning are reflected in the Context and Multimodal scores, while the 2025-vintage benchmark suite (HLE 12.1%, SWE-bench 48.9%) caps Reasoning and Coding.

## Notes

- Verification trail: Google Developers Blog (2025-06-17 pricing update, Flash-Lite preview, deprecation of 04-17 preview), Gemini API models docs (access limitation note, variant endpoints), Gemini 2.X report PDF (SoTA LOFT/MRCR at 128K, LiveCodeBench/Aider/SWE-bench progression, 2.5 Flash "second most capable"), LLMLearner (46 tracked results: AIME 2024 88.0, AIME 2025 72.0, CritPt 1.4, FrontierMath T4 4.2, GPQA 82.8, HLE 12.1, SimpleQA 26.9, MedScribe 83.0, pricing effective 2026-01-04), ayautomate (SWE-bench Verified 48.9, LiveCodeBench 59.3), Sophon (SWE-bench 28.7, GPQA 79 — conflicting), llm-stats (pricing, 65.5K output), AI Olympus (old preview pricing, GPQA 85.2).
- Known conflicts: SWE-bench Verified 48.9% (vendor card) vs 28.7 (Sophon); GPQA 82.8 (card/LLMLearner) vs 79 (Sophon) vs 85.2 (AI Olympus); cached-input price unconfirmed.
- Open questions: Flash-specific LMArena Elo; MMMU-class score; whether the access limitation is still enforced.
- Future sources: Google's retirement notices for the 2.5 family; archived AA snapshots.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Gemini 2.5 Flash Overall=68.4 (Tool=56 Reasoning=63 Context=91 Multimodal=73 Coding=59 Cost=76; 2025-vintage thinking model; access-limited)`
