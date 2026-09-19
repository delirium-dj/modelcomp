# Gemini 3.8 Flash — findings by Ox Alpha

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's most intelligent Flash model, engineered for long-horizon software engineering, autonomous agents, and complex enterprise workflows at Flash-class speed/cost. Iteration on Gemini 3.7 Flash (per official model card); the workhorse of the Gemini 3 family.
- **Provider / access:** Google Gemini API `gemini-3.8-flash` (stable), Google AI Studio, Gemini App/Enterprise Agent Platform, Google Antigravity. Generative Language API style; OpenAI-compatibility layer also available. Supports Batch/Flex/Priority inference.
- **Release / knowledge:** Published 2026-09-02 (model card); knowledge cutoff March 2026 (some domains limited to January 2025 per Gemini 3 family note).
- **IDs:** `gemini-3.8-flash` (no separate Free ID evaluated on OpenCode Zen; Google AI Studio free-tier availability exists but is rate-limited and may train on data).
- **Context window:** 1,048,576 input tokens / 65,536 output tokens (verified from official Gemini API docs model page, 2026-09).
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking supported (low/medium/high; "minimal" errors). Function calling, search grounding (Google Search/Maps), code execution, computer use (Preview), URL context, structured outputs/JSON mode, caching supported. No native image/audio generation.
- **Pricing (as of 2026-09):** $1.50 in / $7.50 out per 1M tokens regular; $0.75 in / $3.75 out per 1M via discounted consumption modes (per official model card comparison table). Cached input cheaper per Google's standard caching tiers. AI-Studio free tier exists but with data-usage caveats.
- **Architecture:** Proprietary, closed weights. Based on Gemini 3.7 Flash (per model card); parameter counts not disclosed. Reasoning model with adjustable effort levels.

### Raw benchmarks found

> From the official Google model card (deepmind.google, published 2026-09-02) and Gemini API docs. No third-party leaderboards with this exact model were verifiable at research time.

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (official model card; best of compared frontier set incl. Claude Opus 5 at 89.1%)
- Terminal-Bench 4.0: **19.1%** (official model card; far behind Claude Opus 5's 51.8%)
- Vals Finance Agent v2: **61.4%** (official model card; best in compared set)
- Harvey's Legal Agent Benchmark: **10.0%** all-pass (official model card; best in compared set)
- GDPVal-AA v2: **Elo 1545** (official model card)
- OSWorld-2.0 (agentic computer use, batch tool enabled): **59.0%** (official model card)
- GDP.PDF: **35.0%** all-pass (official model card)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE-Verified: **54.9%** (official model card; top of compared set, barely ahead of GPT-5.6 Sol at 54.5%)
- CharXiv Reasoning: **86.2%** (official model card)
- GPQA Diamond: no verified public score found for this exact model
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (AA page did not expose a number at fetch time)
- BioMysteryBench: **88.8%** Human-Solvable / **56.5%** Human-Difficult; LABBench2: **86.2%** (official model card)

Coding:

- DeepSWE v1.1 (long-horizon software engineering): **73.7%** (official model card; second only to Claude Opus 5's 74.0%, ahead of GPT-5.6 Sol's 72.7%)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (1M window advertised; no MRCR/RULER/GraphWalks value on the model card)

### Normalized scores (1–100)

- **Tool use: 88/100.** Best-in-class agentic finance/legal results (Vals FABv2 61.4%, Harvey 10.0% all-pass) and top Terminal-Bench 2.1 (89.4%) plus solid OSWorld-2.0 59.0%; capped by the very weak Terminal-Bench 4.0 showing (19.1%), which exposes limits on harder, longer-horizon tool chains.
- **Reasoning: 84/100.** HLE-Verified 54.9% leads the compared frontier set, GDPVal-AA Elo 1545 and CharXiv 86.2% are strong; capped because several core reasoning benchmarks (GPQA, CritPt, AA Index) are unverifiable and the Flash class trails Pro/Opus tier on the hardest multi-step tasks.
- **Context window: 85/100.** 1M-token input with 64K output is top-tier on paper (per official docs); capped below the highest scores because no public retrieval benchmark (MRCR/RULER) verifies near-limit recall.
- **Multimodal: 85/100.** Full input coverage (text/image/video/audio/PDF) with strong long-video understanding (LVBench 87.8% agentic, 87.1% static) and chart reasoning (CharXiv 86.2%); capped by text-only output and no native image/audio generation.
- **Coding: 88/100.** DeepSWE v1.1 73.7% essentially matches Claude Opus 5 (74.0%) at a fraction of the price and Terminal-Bench 2.1 89.4% is best-in-set; capped by missing public SWE-bench Verified/LiveCodeBench numbers and weak TB4.
- **Cost efficiency: 90/100.** Not free, but $0.75/$3.75 per 1M (discounted modes; $1.50/$7.50 regular) for frontier-comparable agentic and coding performance is exceptional value at paid price points; only free tiers score higher.
- **Overall Score: 86/100.** Mean of the five quality dimensions (88+84+85+85+88)/5 = 86.0. Best fit: high-volume agentic coding and knowledge-work agents that need near-Opus quality at Flash economics.

---

## Signature

- Provided by: **Ox Alpha (ox-alpha)** — 2026-09-19
- Method: public internet research (official Google DeepMind model card + Gemini API docs, fetched 2026-09-19); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.