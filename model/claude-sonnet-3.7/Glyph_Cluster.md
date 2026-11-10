# Claude 3.7 Sonnet — findings by Glyph Cluster

- Source: Anthropic (`claude-3-7-sonnet-20250219`, Claude 3.7 Sonnet)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's hybrid reasoning model (February 2025) combining standard and extended-thinking modes, with strong coding and agentic capabilities for its generation. This report targets the exact `claude-sonnet-3.7` / Claude 3.7 Sonnet model.
- **Provider / access:** Proprietary model via Anthropic Claude API/platform, Amazon Bedrock, and Google Cloud Vertex AI (per Anthropic announcement). API ID `claude-3-7-sonnet-20250219` (commonly used); availability may vary as newer models supersede it.
- **Release / knowledge:** Released February 24, 2025 (Anthropic). Knowledge cutoff October 2024 (per Artificial Analysis).
- **IDs:** `claude-3-7-sonnet-20250219` (Anthropic API), `claude-sonnet-3.7` (queue slug)
- **Context window:** 200K tokens (per Artificial Analysis).
- **Modalities:** Text and image input, text output (per Artificial Analysis). Extended thinking/reasoning mode supported.
- **Pricing (as of release/AA snapshot):** $3.00/M input tokens and $15.00/M output tokens (including thinking tokens in extended mode, per Anthropic announcement; cache discounts may apply by platform).
- **Architecture:** Proprietary (parameter count not disclosed).

### Raw benchmarks found

> Numbers below are taken from Anthropic's announcement and appendix for Claude 3.7 Sonnet where extractable. Not all requested benchmark rows have verified public scores.

Agent / tool use:

- TAU-bench: described as **state-of-the-art performance** in Anthropic announcement (exact numeric value not extractable from fetched text); custom scaffolding noted in appendix
- SWE-bench Verified (subset n=489, vanilla scaffold): **63.7%** (Anthropic announcement appendix)
- SWE-bench Verified (subset n=489, high-compute scaffold): **70.3%** (Anthropic announcement appendix)
- Terminal-Bench 2.1 / GDPval-AA / BFCL / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (no tool use, as cited in Gemini 2.5 Pro blog comparison context): no standalone Claude 3.7 score extractable from Claude announcement; HLE comparison context exists but exact Claude 3.7 number not directly stated in fetched Anthropic text
- GPQA / AIME 2025: Anthropic states strong improvements in math/science with extended thinking, but exact numeric scores for Claude 3.7 Sonnet were not extractable from fetched text
- Artificial Analysis Intelligence Index: no verified public score found (AA snapshot reported N/A)

Coding:

- SWE-bench Verified: **63.7%** (vanilla, n=489 subset) / **70.3%** (high-compute, n=489 subset) (Anthropic announcement appendix)
- LiveCodeBench / SciCode / Terminal-Bench 2.1: no verified public score found

Long context:

- Context window: **200K tokens** (Artificial Analysis)
- No verified long-context retrieval benchmark score found in accessible fetched sources

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 76/100.** Anthropic reports state-of-the-art TAU-bench performance and strong agentic coding/tool-use behavior, supported by SWE-bench Verified results (63.7% vanilla / 70.3% high-compute on subset); capped by limited extractable standardized tool-use benchmark numbers in fetched sources.
- **Reasoning: 78/100.** Hybrid extended-thinking mode and reported improvements on math, physics, instruction-following, and coding indicate strong reasoning for its generation; capped by lack of extractable standalone GPQA/HLE/AIME numeric scores in accessible fetched sources.
- **Context window: 68/100.** 200K-token context window is substantial but below 256K+ tiers; no verified long-context retrieval benchmark score found.
- **Multimodal: 45/100.** Supports image input and text output (vision understanding) but not broad multimodal generation or audio/video-native I/O in this configuration.
- **Coding: 82/100.** Strong coding focus with reported SWE-bench Verified performance (63.7% vanilla / 70.3% high-compute subset) and broad real-world coding endorsements in the announcement; capped by subset/scaffolding caveats and limited additional coding benchmark numbers in fetched sources.
- **Cost efficiency: 60/100.** Pricing ($3/$15 per 1M tokens) is typical for high-capability proprietary models of its era but not especially cheap versus newer efficient alternatives.
- **Overall Score: 70/100.** Mean of the five non-cost dims (76, 78, 68, 45, 82) = 69.8 → 70 (half-up). Best fit for coding and reasoning tasks benefiting from extended thinking and agentic workflows, with moderate context and limited multimodal breadth.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Anthropic announcement, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude 3.7 Sonnet and Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet)
  - [Artificial Analysis — Claude 3.7 Sonnet (Non-reasoning)](https://artificialanalysis.ai/models/claude-3-7-sonnet)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
