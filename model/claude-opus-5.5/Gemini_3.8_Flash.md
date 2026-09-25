# Claude Opus 5.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-opus-5.5`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's upgraded flagship Opus-tier foundation model for long-running agentic coding, computer use, and professional knowledge work.
- **Provider / access:** Anthropic Messages API (`claude-opus-5-5`), Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-opus-5-5`. No Zen Free tier available.
- **Context window:** 1,000,000 tokens input context; synchronous max output 128,000 tokens (up to 300,000 tokens via Batch API).
- **Modalities:** Text, code, image, and PDF input; text, code, and tool calling output; reasoning/thinking support; computer-use capabilities.
- **Pricing (as of 2026-09):** $4.00 / 1M input tokens, $0.20 / 1M prompt cache read, $20.00 / 1M output tokens. Batch API offers 50% discount ($2.00 / $10.00).
- **Architecture:** Proprietary large-scale autoregressive transformer with deep agentic and tool reasoning optimization.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro: **89.9%** resolved (Anthropic system card, Sep 2026 / HokAI)
- Terminal-Bench 4.0: **66.4%** at xhigh reasoning effort (Anthropic system card, Sep 2026)
- GDPval-AA v2.1: **1846** Elo (Anthropic system card, Sep 2026 / HokAI)
- Tau2-Bench / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **67.7%** (Anthropic system card, Sep 2026)
- Artificial Analysis Intelligence Index: **58** Index (Artificial Analysis / HokAI, Sep 2026)
- GPQA Diamond: no verified public score found (omitted in Sep 2026 system card)
- HLE (no tools): no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Multilingual: **93.9%** resolved (Anthropic system card, Sep 2026)
- SWE-bench Multimodal: **61.4%** resolved (Anthropic system card, Sep 2026)
- SWE-bench Verified: no verified public score found (omitted in Sep 2026 system card)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- ProgramBench: 1M token context window evaluated with high retention across codebases and long documents up to 128K output tokens.

### Normalized scores (1–100)

- **Tool use: 94/100.** Exemplary agentic and tool capabilities evidenced by 89.9% on SWE-bench Pro, 66.4% on Terminal-Bench 4.0, and 1846 Elo on GDPval-AA v2.1.
- **Reasoning: 89/100.** Outstanding frontier reasoning confirmed by 67.7% on Humanity's Last Exam with tools and 58 on the AA Intelligence Index, though pure non-tool diamond benchmark data was not published in the card.
- **Context window: 90/100.** Standard 1M-token context ceiling with massive 128K synchronous output buffer and documented long-range coherence across ProgramBench.
- **Multimodal: 75/100.** High-quality vision and PDF document comprehension (61.4% SWE-bench Multimodal), but lacks native audio and video input capabilities.
- **Coding: 94/100.** Industry-leading coding capabilities highlighted by 89.9% on SWE-bench Pro and 93.9% on SWE-bench Multilingual.
- **Cost efficiency: 58/100.** Premium frontier pricing at $4.00 / $20.00 per million tokens (20% lower than Opus 5), which limits use in high-throughput budget applications.
- **Overall Score: 88/100.** Elite agentic coding and knowledge-work powerhouse best suited for complex multi-step software engineering and autonomous tool execution.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into verified vendor system cards and benchmark databases; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
