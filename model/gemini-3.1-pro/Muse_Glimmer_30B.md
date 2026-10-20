# Gemini 3.1 Pro — findings by Muse Glimmer 30B

- Source: Google/Gemini 3.1 Pro
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind’s flagship Pro model in the Gemini 3 series, natively multimodal reasoning with a 2M-token input window for research, long-context agents and multimodal analysis. ARC-AGI-2 77.1% and GPQA 94.3% highlighted in meta.
- **Provider / access:** Google DeepMind; `google/gemini-3.1-pro` via Gemini API / Google AI Studio / Vertex AI / Gemini App / Google Antigravity / NotebookLM. Chat Completions style API.
- **Release / knowledge:** Published 19 February 2026 per model card; knowledge cutoff not publicly stated.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2M total / 64K output per `meta.json`; model card states up to 1M input tokens and 64K output verified via DeepMind model card.
- **Modalities:** Text, image, audio, video, PDF in; text out. Reasoning yes; tool calls supported.
- **Pricing (as of 2026-10-20):** Free tier available on Google AI Studio and OpenCode Zen per meta; paid tier pricing via Google AI Studio / Vertex AI. Exact per-1M rates not published in the card reviewed.
- **Architecture:** Proprietary sparse mixture-of-experts, natively multimodal reasoning model based on Gemini 3 Pro. Parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.0 Agentic terminal coding: **68.5%** (Terminus-2 harness, DeepMind model card)
- τ2-bench Retail: **90.8%** (DeepMind model card)
- τ2-bench Telecom: **99.3%** (DeepMind model card)
- GDPval-AA: **1317 Elo** (DeepMind model card)
- MCP Atlas multi-step workflows: **69.2%** (DeepMind model card)
- BrowseComp agentic search: **85.9%** (Search + Python + Browse, DeepMind model card)

Reasoning / knowledge:

- Humanity's Last Exam Academic reasoning: **44.4%** No tools, DeepMind model card
- GPQA Diamond Scientific knowledge: **94.3%** No tools, DeepMind model card
- ARC-AGI-2 Abstract reasoning puzzles: **77.1%** ARC Prize Verified, DeepMind model card
- MMMLU Multilingual Q&A: **92.6%** DeepMind model card
- MMMU-Pro multimodal understanding: **80.5%** No tools, DeepMind model card

Coding:

- SWE-bench Verified agentic coding: **80.6%** Single attempt, DeepMind model card
- SWE-bench Pro Public: **54.2%** Single attempt, DeepMind model card
- LiveCodeBench Pro: **2887 Elo** Competitive coding, DeepMind model card
- SciCode Scientific research coding: **59%** DeepMind model card
- APEX-Agents long horizon professional tasks: **33.5%** DeepMind model card

Long context:

- MRCR v2 8-needle: **84.9%** at 128k average, DeepMind model card; 1M pointwise not supported per card.

### Normalized scores (1–100)

> Derive each from raw numbers above using methodology in `model-comparison.md`.

- **Tool use: 87/100.** τ2-bench Retail 90.8% / Telecom 99.3% and MCP Atlas 69.2% show strong agentic tool use; GDPval 1317 Elo caps below frontier ~1750+. Terminal-Bench 68.5% is solid but below 85%+ frontier.
- **Reasoning: 96/100.** GPQA Diamond 94.3% and ARC-AGI-2 77.1% with Humanity's Last Exam 44.4% place it at frontier reasoning. Capped by HLE not reported and ARC below 80%.
- **Context window: 95/100.** 2M input / 64K output per meta with natively multimodal 1M input per card. MRCR 84.9% at 128k shows strong retrieval but no 98%+ at 512K+ reported.
- **Multimodal: 95/100.** Text, image, audio, video, PDF in; text out. Full multimodal input coverage caps near frontier.
- **Coding: 88/100.** SWE-bench Verified 80.6%, LiveCodeBench Pro Elo 2887, SciCode 59% and Terminal-Bench 68.5% indicate strong agentic coding. Capped below DeepSWE 74%+ frontier and modest SciCode.
- **Cost efficiency: 90/100.** Free tier available on Google AI Studio / OpenCode Zen per meta; paid tier exists. Free access lifts score, paid rates not published.
- **Overall Score: 92/100.** Mean of Tool 87, Reasoning 96, Context 95, Multimodal 95, Coding 88 = 92.2 → 92. Best-fit: frontier long-context multimodal reasoning agent with free tier access for research workloads.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
