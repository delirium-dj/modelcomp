# Gemini 3.1 Pro — findings by Glyph Cluster

- Source: Google / Google DeepMind (`gemini-3.1-pro-preview`, Gemini 3.1 Pro)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (preview model code: `gemini-3.1-pro-preview`; Google AI/DeepMind also document a `gemini-3.1-pro-preview-customtools` endpoint)
- **Short description:** Google DeepMind's next-iteration Gemini 3-series reasoning model, optimized for complex software engineering, agentic workflows, multimodal understanding, and long-context tasks. Proprietary, natively multimodal reasoning model.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.1-pro-preview`), Vertex AI, Gemini app, NotebookLM, Gemini CLI, Google Antigravity, Android Studio (per Google blog). OpenRouter lists `google/gemini-3.1-pro-preview`.
- **Release / knowledge:** Announced/published 2026-02-19 (Google blog and DeepMind model card). Reliable knowledge/training cutoff not explicitly stated in fetched sources.
- **IDs:** `gemini-3.1-pro-preview` (Google AI model code), `gemini-3.1-pro-preview-customtools` (custom-tools optimized endpoint). OpenRouter: `google/gemini-3.1-pro-preview`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google AI docs). DeepMind model card states "token context window of up to 1M" input and 64K token output.
- **Modalities:** Inputs: text, image, video, audio, and PDF. Output: text (Google AI docs / DeepMind model card). Thinking/reasoning supported; tool use/function calling, code execution, search grounding, URL context, structured outputs, caching, batch API, etc. supported (per Google AI docs capabilities list).
- **Pricing (as of 2026-11-10):** Google AI docs reference a pricing page for `gemini-3.1-pro-preview`; specific per-token rates not fully extracted in this run. Artificial Analysis (preview listing) reports ~$2.00 / 1M input and ~$12.00 / 1M output for comparable pricing tier. Paid model.
- **Architecture:** Proprietary; based on Gemini 3 Pro (DeepMind model card). Parameter count and detailed architecture not publicly disclosed.

### Raw benchmarks found

> Primary sources: DeepMind Gemini 3.1 Pro model card (published Feb 2026), Google blog announcement, Google AI developer docs, Artificial Analysis preview page, OpenRouter page.

Agent / tool use:

- τ2-bench (**agentic and tool use**, DeepMind model card): Retail **90.8%**, Telecom **99.3%**.
- MCP Atlas (**multi-step workflows using MCP**): **69.2%** (DeepMind model card).
- BrowseComp (**agentic search**, Search + Python + Browse): **85.9%** (DeepMind model card).
- APEX-Agents (**long horizon professional tasks**): **33.5%** (DeepMind model card).
- Terminal-Bench 2.0 (**agentic terminal coding**, Terminus-2 harness): **68.5%** (DeepMind model card).
- GDPval-AA Elo (**expert tasks**): **1317** (DeepMind model card).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- ARC-AGI-2 (**abstract reasoning puzzles**, ARC Prize Verified): **77.1%** (DeepMind model card; Google blog highlights >2x Gemini 3 Pro).
- GPQA Diamond (**scientific knowledge**, no tools): **94.3%** (DeepMind model card).
- Humanity's Last Exam (**academic reasoning, full set text+MM**, no tools): **44.4%**; with Search+Code: **51.4%** (DeepMind model card).
- SciCode (**scientific research coding**): **59%** (DeepMind model card).
- MMMU-Pro (**multimodal understanding and reasoning**, no tools): **80.5%** (DeepMind model card).
- MMMLU (**multilingual Q&A**): **92.6%** (DeepMind model card).
- Artificial Analysis Intelligence Index: **N/A / not published** for preview listing on fetched AA page.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-Bench Verified (**agentic coding**, single attempt): **80.6%** (DeepMind model card).
- SWE-Bench Pro (Public, **diverse agentic coding tasks**, single attempt): **54.2%** (DeepMind model card).
- LiveCodeBench Pro (**competitive coding**, Elo): **2887** (DeepMind model card).
- Terminal-Bench 2.0: **68.5%** (agentic terminal coding; also relevant to coding).
- SciCode: **59%** (scientific coding).

Long context:

- MRCR v2 (8-needle), 128k average: **84.9%** (DeepMind model card).
- MRCR v2 (8-needle), 1M pointwise: **26.3%** (DeepMind model card).
- Context window up to **1,048,576 tokens** input (Google AI docs).

### Normalized scores (1–100)

> Scores are normalized interpretations from verified vendor/model-card benchmarks and specs, not official vendor scores. Overall uses the five non-cost quality dimensions only.

- **Tool use: 90/100.** Strong verified agentic/tool-use results: τ2-bench 90.8%/99.3%, BrowseComp 85.9%, MCP Atlas 69.2%, Terminal-Bench 2.0 68.5%, and GDPval-AA Elo 1317; APEX-Agents 33.5% shows limits on long-horizon professional tasks, capping the score below absolute frontier leaders.
- **Reasoning: 94/100.** Excellent reasoning/knowledge benchmarks: ARC-AGI-2 77.1%, GPQA Diamond 94.3%, HLE 44.4% (51.4% with tools), MMMU-Pro 80.5%, MMMLU 92.6%; demonstrates major gains over Gemini 3 Pro, with remaining headroom on hardest exam-style reasoning.
- **Context window: 88/100.** Large 1M-token-class input window (1,048,576) is top-tier on capacity, but verified MRCR v2 long-context retrieval degrades sharply at 1M pointwise (26.3%) despite strong 128k performance (84.9%), reducing effective long-context reliability.
- **Multimodal: 88/100.** Broad multimodal input support (text, image, video, audio, PDF) with strong multimodal reasoning evidence (MMMU-Pro 80.5%); output is text-only, and no verified native image/audio/video generation in this model's core spec.
- **Coding: 90/100.** Strong coding results: SWE-Bench Verified 80.6%, Terminal-Bench 2.0 68.5%, LiveCodeBench Pro Elo 2887, SWE-Bench Pro 54.2%, SciCode 59%; competitive with leading coding models but not uniformly dominant across all agentic coding suites.
- **Cost efficiency: 72/100.** Indicative pricing around ~$2/$12 per 1M input/output (AA preview reference) is moderate for a high-capability frontier model, better than ultra-premium tiers but still paid. Not included in Overall.
- **Overall Score: 90/100.** Mean of the five non-cost dimensions (Tool 90, Reasoning 94, Context 88, Multimodal 88, Coding 90) = 450/5 = 90.0 (half-up). Best fit: complex reasoning, multimodal analysis, and agentic/coding workflows that benefit from strong benchmarked capability and large context, with awareness of 1M-context retrieval limits.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched Google/DeepMind documentation, model card, blog announcement, and benchmark-aggregator/provider pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepMind — Gemini 3.1 Pro model card](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [Google AI — Gemini 3.1 Pro preview docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)
  - [Google Blog — Gemini 3.1 Pro announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Artificial Analysis — Gemini 3.1 Pro Preview](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [OpenRouter — google/gemini-3.1-pro-preview](https://openrouter.ai/google/gemini-3.1-pro-preview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.