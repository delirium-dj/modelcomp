# Gemini 3 Pro — findings by Gemini 3.8 Flash

- Source: Google / Gemini (`google/gemini-3-pro-preview`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's flagship frontier reasoning and multimodal model of the Gemini 3 family. Designed for complex reasoning, agentic tasks, long-context comprehension, and full omni-multimodality.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3-pro-preview`) and Google Vertex AI (`gemini-3-pro`). REST/RPC API with thinking_level controls.
- **Release / knowledge:** 2025-11-18 release; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3-pro-preview` (Google AI Studio), `google/gemini-3-pro` (Vertex AI). No dedicated Free ID on Zen.
- **Context window:** 1,048,576 tokens total (1M context window); max output ~65,536 tokens.
- **Modalities:** Native multimodal input (text, images, audio, video, PDF); text/code output; controllable reasoning depth (`thinking_level`); tool calls; structured JSON output.
- **Pricing (as of 2025-11):** $2.00 / 1M input tokens (≤ 200K), $4.00 / 1M input tokens (> 200K); $12.00 / 1M output tokens (≤ 200K), $18.00 / 1M output tokens (> 200K). Context caching available at lower rates.
- **Architecture:** Proprietary sparse mixture-of-experts (MoE) transformer trained natively across multimodal inputs.

### Raw benchmarks found

Agent / tool use:

- Berkeley Function Calling Leaderboard (BFCL): **72.51%** (evals.report, official Nov 2025)
- Terminal-Bench 2.0 / 2.1: **54.2%** (evals.report / AI/TLDR, official Nov 2025)
- Tau2-Bench (Telecom): **85.4%** pass^1 (evals.report, Nov 2025)
- GDPval-AA: **1184** Elo (evals.report, official Nov 2025)
- MCP-Atlas: **54.1%** pass rate (evals.report, official Nov 2025)
- MCP-Universe: **44.59%** overall success rate (evals.report, verified Nov 2025)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** accuracy (evals.report, official Nov 2025; 91.9% AI/TLDR)
- Humanity's Last Exam (HLE, no tools): **38.3%** accuracy (evals.report, official Nov 2025; 37.5% AI/TLDR)
- FrontierMath: **37.6%** accuracy (Tier 4: 18.8%) (evals.report, official Nov 2025)
- AIME 2026 / OTIS Mock: **91.67%** / **91.4%** accuracy (evals.report, official Nov 2025)
- Artificial Analysis Intelligence Index: **48.4** Index (evals.report, Nov 2025)
- Vectara Hallucination Leaderboard: **13.6%** hallucination rate (evals.report, official Nov 2025)

Coding:

- SWE-bench Verified: **72.9%** resolved (evals.report, official Nov 2025; 76.2% AI/TLDR)
- SWE-bench Pro: **43.30%** resolved (evals.report, official Nov 2025)
- LiveCodeBench: **91.7%** pass@1 (evals.report, verified Nov 2025)
- LiveCodeBench Pro: **2439** Codeforces Elo (evals.report, official Nov 2025)
- SciCode: **56.1%** accuracy (evals.report, verified Nov 2025)
- Vibe Code Bench: **14.30%** overall accuracy (evals.report, verified Nov 2025)

Long context:

- OpenAI-MRCR v2: **77.0%** mean similarity across long context (evals.report, verified Nov 2025)
- 1M token needle retrieval and comprehension sustained across full context window.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool utilization verified by 72.51% BFCL, 54.2% Terminal-Bench 2.0, and 85.4% Tau2-Bench Telecom, capped by MCP-Universe (44.59%) and sub-60% agentic workflow benchmarks.
- **Reasoning: 92/100.** Top-tier frontier reasoning demonstrated by 92.6% on GPQA Diamond, 38.3% on Humanity's Last Exam, and 37.6% on FrontierMath, capped only by elite specialist test-time compute scaling models.
- **Context window: 90/100.** Standard 1M token tier supported natively with verified MRCR v2 long-context retrieval, capped below the 2M+ token tiers.
- **Multimodal: 95/100.** Exceptional multimodal capabilities spanning text, image, audio, video, and PDF natively (81.0% MMMU-Pro, 87.6% Video-MMMU, 72.7% ScreenSpot-Pro), one of the strongest in class.
- **Coding: 89/100.** Excellent coding performance with 72.9% on SWE-bench Verified, 91.7% on LiveCodeBench, and 2439 Elo on LCB Pro, capped by sub-80% SWE-bench resolution.
- **Cost efficiency: 68/100.** Priced at $2.00 / $12.00 per 1M tokens ($4 / $18 for long prompts); competitive for a frontier flagship model, but not a low-cost budget option.
- **Overall Score: 90/100.** Balanced frontier model ideal for heavy multimodal workflows, high-precision mathematical and scientific reasoning, and large-context agentic tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into verified benchmark evaluations and official model disclosures; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
