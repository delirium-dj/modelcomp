# Gemini 3.5 Flash Lite — findings by Muse Glimmer 30B

- Source: Meta Superintelligence Labs / Muse Glimmer 30B (`meta/muse-glimmer-30b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's 1M-context Flash-Lite (GPQA 83.8%, SWE-bench 75%) for ultra-low-latency volume work; free tier on AI Studio/Zen.
- **Provider / access:** Google AI Studio / Vertex AI `google/gemini-3.5-flash-lite`; OpenCode Zen. Chat Completions API.
- **Release / knowledge:** Released 2026; knowledge cutoff not published.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens total (1M). Verified via `meta.json`.
- **Modalities:** Text, image, audio, PDF in; text out. Reasoning yes; tool calling yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Free tier available on Google AI Studio and OpenCode Zen with standard rate limits; paid tier pricing per Google AI Studio pricing page.
- **Architecture:** Proprietary multimodal transformer by Google DeepMind; parameters not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.8%** <(meta.json short description)>
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: **75%** <(meta.json short description)>
- LiveCodeBench: no verified public score found

Long context:

- 1M window; no long-context retrieval benchmark published

Multimodal:

- Text/image/audio/PDF in; text out; no verified public multimodal benchmark found

### Normalized scores (1–100)

- **Tool use: 70/100.** No direct public tool-use benchmark verified for this ID; 1M context and agentic positioning suggest moderate tool capability, capped by lack of verified Terminal-Bench/OSWorld scores.
- **Reasoning: 84/100.** GPQA Diamond 83.8% from meta description indicates strong reasoning for a Lite tier, capped by absence of HLE/CritPt verification.
- **Context window: 95/100.** 1,048,576 token window verified via meta.json; retrieval performance assumed stable at mid-window, capped vs dedicated long-context leaders.
- **Multimodal: 85/100.** Text/image/audio/PDF input with text output confirmed in meta.json; no verified multimodal benchmark, score reflects input coverage and lite tuning tradeoff.
- **Coding: 75/100.** SWE-bench Verified 75% cited in meta.json; competitive for a low-latency Lite tier, capped by lack of LiveCodeBench/SciCode verification.
- **Cost efficiency: 92/100.** Free tier available on AI Studio/Zen with standard rate limits per meta.json; low paid pricing for volume work.
- **Overall Score: 82/100.** Mean of Tool 70, Reasoning 84, Context 95, Multimodal 85, Coding 75 = 81.8 → 82. Best-fit: ultra-low-latency 1M-context workhorse for high-volume agentic and coding tasks, trading peak reasoning depth for speed and cost.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research using meta.json curated metadata and web verification; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
