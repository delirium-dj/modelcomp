- Source: Google DeepMind/Gemini 3 Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's 2025-12-18 lightweight model that became the default in the Gemini app and Search AI Mode, replacing Gemini 2.5 Flash. Focused on advanced reasoning, visual understanding and interactive code generation with voice-driven site building. A distinct model; Gemini 3 Pro and the 3.5/3.6/3.7/3.8 Flash versions are separate.
- **Provider / access:** Gemini app and Google Search AI Mode (default), Google AI Studio, Gemini API, Vertex AI.
- **Release / knowledge:** 2025-12-18; knowledge cutoff: no verified public score found.
- **IDs:** `gemini-3-flash` family ID as cited. No free Zen ID verified.
- **Context window:** the Gemini 3 generation is documented with **1,000,000 tokens** (Baidu Baike Gemini 3 article); no Flash-specific verified figure — reported as a generation-level spec, not a Flash-specific one.
- **Modalities:** text, image and voice/audio in (voice-driven site building, multimodal content recognition), text and code out; interactive code generation, advanced reasoning, visual understanding. No verified video input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — reported as free/very low cost in developer coverage (zero-cost high-frequency calls), but no verified public price found.
- **Architecture:** Proprietary, closed weights; the Gemini 3 line uses a sparse MoE with >1T parameters trained on TPUs (generation-level, not Flash-specific). Parameter count for Flash not disclosed.

### Raw benchmarks found

Agent / tool use:

- Default model in the Gemini app and Search AI Mode at launch — strong adoption evidence
- DISBench image-retrieval evaluation (2026-03): multimodal models including **Gemini-3-Pro** showed weaknesses in planning, state management and long-range reasoning — a family-level finding, not a Gemini 3 Flash score
- February 2026 military-simulation wargame: Gemini 3 Flash played a role whose decisions raised ethical/safety concerns about AI in command systems (context, not scored)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Advanced reasoning cited at launch (qualitative; no named numeric benchmark in the retrieved pages)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- Interactive code generation and voice-driven website building (qualitative)
- One developer report (secondary CSDN): a 12-page PDF structured-extraction task completed in **1.7s** on Gemini 3 Flash vs **8.2s** / $0.00032 on the older Gemini Pro — a latency anecdote, not a benchmark
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token generation-level window; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 83/100.** Default serving model for the Gemini app and Search AI Mode with native interactive coding and voice-driven site building; capped by no scored agent harness figure and family-level DISBench planning/state-management weaknesses.
- **Reasoning: 82/100.** Launch-positioned advanced reasoning with a 1M-class generation window; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 85/100.** Generation-level 1M-token window; capped by no Flash-specific verified figure and no retrieval benchmark.
- **Multimodal: 85/100.** Voice, image and text input with multimodal content recognition and visual understanding; capped by text/code-only output, no verified video input, and no published multimodal benchmark.
- **Coding: 82/100.** Interactive code generation and voice site-building with a strong latency profile; capped by no SWE-bench / Terminal-Bench figure.
- **Cost efficiency: 92/100.** Free/near-zero-cost high-frequency serving as Google's default consumer model, with a documented 1.7s vs 8.2s latency advantage; capped by no verifiable rate card. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 83, 82, 85, 85, 82 = 83.4 → 83. Best fit: very high-volume consumer multimodal and interactive-code workloads where zero-cost default serving dominates; superseded by the 3.5–3.8 Flash line.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini 3 Flash article retrieved via public web search excerpt (release, default-model role, modalities, platforms, DISBench and wargame context) and the Baidu Baike Gemini 3 article excerpt for the generation-level 1M context and MoE architecture. A CSDN developer latency anecdote and free-tier coverage are labelled secondary, not benchmarks. DISBench/wargame items are family/context notes, never Gemini 3 Flash scores. Every row without a verified figure is marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Gemini 3 Flash — 百度百科 (retrieved via search excerpt; release, role, modalities)](https://baike.baidu.com/item/Gemini%203%20Flash/67097435)
  - [Gemini 3 — 百度百科 (retrieved via search excerpt; generation 1M context, MoE)](https://baike.baidu.com/item/Gemini%203/67006466)
