# Gemini 3.5 Flash — findings by GPT 5.6 Luna

- Source: Google/Gemini 3.5 Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's fast, reasoning-capable multimodal model for coding, agents, production workflows, and long-context work.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, and downstream providers; API model ID `gemini-3.5-flash`.
- **Release / knowledge:** Published May 2026; the Google model-card family notes a 2026 release and does not expose a single independently verified cutoff for every serving surface.
- **IDs:** `gemini-3.5-flash` / Google Gemini 3.5 Flash.
- **Context window:** Approximately 1,048,576 tokens.
- **Modalities:** Text, image, audio, video, and file input; text output; configurable thinking levels and tool use.
- **Pricing (as of 2026-11-02):** Approximately $1.50 input / $9 output per 1M tokens in current API/catalogue listings; provider and cache rates vary.
- **Architecture:** Proprietary; the model card identifies it as a refinement of the Gemini 3 Flash reasoning foundation and does not disclose parameters.

## Raw benchmarks found

Google's model card reports the primary evaluation table; BenchLM and Artificial Analysis provide current independent rows.

- BenchLM current profile: **61.4/100, #49 of 1,004**, with 55 of 724 benchmark rows covered.
- Terminal-Bench 2.1: **76.2%**; SWE-Bench Pro: **55.1%**; MCP Atlas: **83.6%**; Toolathlon: **56.5%**; OSWorld-Verified: **78.4%** (Google model card).
- GDPval-AA: **1656 Elo** and CharXiv Reasoning: **84.2%** (Google evaluation table).
- Artificial Analysis Agentic Index: **27.3%** and Coding Index: **70.1%** (via BenchLM).
- MMMU-Pro: **83.6%**; ExtractBench: **79.84%**; ParseBench: **73.36%** (current independent/aggregated rows).
- FrontierMath v2 tiers 1–3: **62.807%** and HLE: **40.2%** (BenchLM aggregation).
- Context window: **1M tokens** (Google model card and current independent listings).

## Normalized scores (1–100)

- **Tool use: 83/100.** MCP Atlas 83.6%, OSWorld 78.4%, and Terminal-Bench 76.2% support a strong production-agent profile, while the lower independent agentic index caps it.
- **Reasoning: 86/100.** GPQA/HLE and FrontierMath evidence are strong for a Flash model, but it remains below the current Pro/frontier tiers.
- **Context window: 95/100.** The documented 1M-token window is a major strength; no independent full-window retrieval curve was verified.
- **Multimodal: 93/100.** Native text/image/audio/video/file input and MMMU-Pro 83.6% provide broad, direct evidence; output remains text.
- **Coding: 87/100.** Terminal-Bench, SWE-Bench Pro, and the independent coding index support a capable coding workhorse, with harness differences limiting direct comparison.
- **Cost efficiency: 90/100.** $1.50/$9 is materially below frontier Pro pricing, though output is not bargain-tier.
- **Overall Score: 88.8/100.** Mean of the five quality dimensions `(83 + 86 + 95 + 93 + 87) / 5 = 88.8`; best fit is affordable multimodal, coding, and long-context production agents.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Google DeepMind model-card evidence plus BenchLM's October 29 aggregation, Artificial Analysis rows, and the current Gemini API/catalogue information; scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Google Gemini 3.5 Flash model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/)
  - [Gemini 3.5 Flash model-card PDF](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-5-Flash-Model-Card.pdf)
  - [Gemini API model catalog](https://ai.google.dev/gemini-api/docs/models)
  - [BenchLM Gemini 3.5 Flash profile](https://benchlm.ai/models/gemini-3-5-flash)
