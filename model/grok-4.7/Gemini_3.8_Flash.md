# Grok 4.7 — findings by Gemini 3.8 Flash

- Source: xAI / Grok (`xai/grok-4.7`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's frontier agentic reasoning model featuring configurable reasoning effort (up to xhigh), advanced coding agent performance via Grok Build, and top-tier knowledge work capability.
- **Provider / access:** xAI API (`grok-4.7`), grok.com, and OpenRouter.
- **Release / knowledge:** 2026-09-21 release; knowledge cutoff mid-2026.
- **IDs:** `xai/grok-4.7`. Standard consumer access on grok.com.
- **Context window:** 500,000 tokens total (500K context window).
- **Modalities:** Text and image input; text, code, structured deliverables, and tool-calling output; configurable reasoning effort (low to xhigh).
- **Pricing (as of 2026-09):** $2.00 / 1M input tokens, $0.50 / 1M cached input tokens, $6.00 / 1M output tokens (promotional discount down to $1.20 / $3.60 / $0.30 through Sep 2026).
- **Architecture:** Large-scale frontier reasoning transformer with deep agentic post-training and high token generation throughput (188 tok/s).

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase (long-horizon agentic knowledge work): **1657** Elo (Analytical quality: 1994 Elo) (Artificial Analysis, Sep 2026)
- GDPval-AA: **1695** Elo (Artificial Analysis, Sep 2026)
- Terminal-Bench 4.0 (in Grok Build): **33%** (xhigh effort, AA, Sep 2026)
- SWE-Atlas-QnA: **63%** (Artificial Analysis, Sep 2026)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** (xhigh effort, AA, Sep 2026)
- AA-Omniscience Index: **32** (Accuracy: 47%, Hallucination Rate: 29%, AA, Sep 2026)
- GPQA Diamond: derived from Grok 4.x family (>88%)

Coding:

- Coding Agent Index (with Grok Build): **56** (4th overall across native harnesses, AA, Sep 2026)
- DeepSWE v1.1: **73%** resolved (Artificial Analysis, Sep 2026)
- SWE-bench Verified: no verified public score found

Long context:

- 500K token context window evaluated with 81K output token reasoning traces per task.

### Normalized scores (1–100)

- **Tool use: 90/100.** Premier agentic knowledge work demonstrated by 1657 Elo on AA-Briefcase, 1695 Elo on GDPval-AA, and 33% on Terminal-Bench 4.0.
- **Reasoning: 89/100.** High-level analytical reasoning evidenced by 46 on the AA Intelligence Index, 1994 Elo for analytical quality on Briefcase, and a reduced 29% hallucination rate.
- **Context window: 84/100.** 500K context window capable of digesting massive enterprise documentation and code repositories.
- **Multimodal: 75/100.** Strong vision-language processing for diagrams, screenshots, and visual knowledge work.
- **Coding: 91/100.** Elite coding agent capabilities in Grok Build with a 56 Coding Agent Index (4th overall) and 73% on DeepSWE v1.1.
- **Cost efficiency: 86/100.** Well priced at $2.00 / $6.00 per 1M tokens ($0.50 cached) with promotional periods cutting rates by 40%.
- **Overall Score: 86/100.** Frontier agentic reasoning and software development powerhouse ranking among the top four global AI systems for autonomous knowledge work.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into Artificial Analysis evaluations and official xAI technical release records; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
