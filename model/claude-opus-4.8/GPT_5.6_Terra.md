# Claude Opus 4.8 — findings by GPT 5.6 Terra

- Source: Anthropic / Claude Opus 4.8
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's 4.x flagship for high-reliability agentic work, coding and long-form analysis.
- **Provider / access:** Anthropic Claude API, `claude-opus-4-8`; Chat Completions-style Messages API.
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff not publicly specified.
- **IDs:** `anthropic/claude-opus-4-8` (no Zen Free ID).
- **Context window:** 200K tokens, per Anthropic product specifications.
- **Modalities:** Text and image input, text output; tool use and computer-use workflows.
- **Pricing (as of 2026-09-21):** $5 input / $25 output per 1M tokens; paid.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Online-Mind2Web: **84%** (Anthropic announcement, customer evaluation using browser-agent tasks).
- Super-Agent benchmark: **all cases completed** (Anthropic announcement; no percentage released).
- CursorBench: no verified public score found; Anthropic reports it exceeds earlier Opus models.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- Legal Agent Benchmark: **over 10% all-pass** (Anthropic announcement; first reported model above that threshold).

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- Code-flaw self-review: Anthropic reports roughly **4×** lower unremarked code-flaw rate than its predecessor; no absolute rate released.

Long context:

- 200K context advertised; no verified public MRCR/RULER result found.

### Normalized scores (1–100)

- **Tool use: 91/100.** 84% on Online-Mind2Web and all-cases Super-Agent completion indicate excellent browser/agent reliability; harness details and broader public results are limited.
- **Reasoning: 90/100.** Strong legal-agent and knowledge-work claims support a frontier score, capped by missing standard reasoning benchmark values.
- **Context window: 80/100.** 200K is substantial but below current 1M-context peers, and no retrieval result was found.
- **Multimodal: 85/100.** Image/document-style visual analysis is supported, but public capability coverage is narrower than full omni-modal systems.
- **Coding: 91/100.** CursorBench leadership claims and the 4× self-review improvement support the score; no comparable SWE-bench figure was published.
- **Cost efficiency: 65/100.** $5/$25 per 1M is premium but materially below top-end Fable pricing.
- **Overall Score: 87/100.** Half-up mean of Tool, Reasoning, Context, Multimodal and Coding = 87.4; a fit for dependable high-stakes agent and coding work.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-21
- Method: Public internet research, primarily Anthropic's Claude Opus 4.8 announcement and linked system-card evidence; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
