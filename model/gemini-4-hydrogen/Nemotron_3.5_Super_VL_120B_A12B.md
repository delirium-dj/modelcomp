# Gemini 4 Hydrogen — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google (`gemini-4-hydrogen`), Gemini API `gemini-4-hydrogen`, Google AI Studio
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's high-efficiency workhorse for agentic coding and everyday developer tasks; 1M context / 1M output continuation, 4 thinking levels, 2.5x faster generation than prior Flash generations. Available on both free and paid tiers in Google AI Studio and the Gemini API.
- **Provider / access:** Google, Gemini API (GenerateContent and Interactions API), Google AI Studio. Model ID `gemini-4-hydrogen`.
- **Release / knowledge:** Available on free and paid tiers; release date not disclosed on fetched sources.
- **IDs:** `gemini-4-hydrogen` (Gemini API model ID). Free tier available (rate-limited).
- **Context window:** Unified 1M-token context window; long decode up to 1M tokens; 64K (65,536) tokens per non-streaming hop.
- **Modalities:** Text, image, audio, video in; text out. Four configurable thinking levels: low, medium, high (default), xhigh. Structured outputs, function calling, tool calling with parallel batching and background execution.
- **Pricing (as of 2026-11-11):** Free tier free of charge (rate-limited); Paid tier — input $1.50 / 1M tokens, cached input $0.075 / 1M tokens (95% discount), output $7.50 / 1M tokens (includes thinking tokens).
- **Architecture:** Architecture details not disclosed on fetched sources. 2.5x faster throughput than prior Flash generations; thought signatures preserved across multi-turn sessions.

### Raw benchmarks found

No public performance benchmark scores (GPQA, HLE, SWE-bench, LiveCodeBench, etc.) were found in fetched sources. The DeepMind model card focuses on safety evaluations (frontier safety, CBRN, cybersecurity, harmful manipulation, loss of control) rather than capability benchmarks. Capability claims are qualitative: cleaner code, 5x fewer fabricated claims than Gemini 3.8 Flash, parallel tool call batching, better tool failure adaptation.

No verified public scores found for: GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience Accuracy/Hallucination Rate, SWE-bench Verified/Pro/Multilingual, LiveCodeBench, SciCode, Terminal-Bench, tau2-bench/tau3-bench, APEX, IFBench, BrowseComp, WebVoyager, OSWorld-Verified, Vibe Code Bench, DeepSWE, MRCR/RULER/GraphWalks, AA-Briefcase-Lite, AutomationBench-AA, MMLongBench-Doc, AA-LCR.

### Normalized scores (1–100)

Derived from the available specifications using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Native function calling, structured outputs, parallel tool call batching, background execution for long outputs, thought signature preservation; capped by absence of published tool-use benchmark scores.
- **Reasoning: 80/100.** Four configurable thinking levels including xhigh; positioned for agentic coding and complex reasoning; capped by absence of public reasoning benchmark scores (GPQA, HLE, etc.).
- **Context window: 95/100.** 1M-token context with 1M output continuation ceiling; verified on Google AI Studio docs and meta.json; capped only by no public long-context retrieval scores at full window.
- **Multimodal: 85/100.** Text, image, audio, video input; text output; broad multimodal coverage; capped by no published vision/audio benchmark scores.
- **Coding: 85/100.** Positioned for agentic coding and everyday developer tasks; cleaner code, 5x fewer fabricated claims than Gemini 3.8 Flash; capped by absence of public coding benchmark scores (SWE-bench, LiveCodeBench).
- **Cost efficiency: 90/100.** Free tier available; paid tier $1.50/$7.50 per 1M with 95% cached input discount; not counted toward Overall.
- **Overall Score: 86/100.** Half-up mean of (85 + 80 + 95 + 85 + 85) / 5 = 86. Best-fit recommendation: efficient, wide-context agentic coding model with free tier access; verify on independent benchmarks for production use.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-11
- Method: public internet research (Google AI Studio docs, DeepMind model card, model meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [What's new in Gemini 4 Hydrogen — Google AI Studio](https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen)
  - [Gemini 4 Hydrogen — Model Card, Google DeepMind](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.