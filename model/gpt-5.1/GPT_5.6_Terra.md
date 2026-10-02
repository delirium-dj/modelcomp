# GPT-5.1 — findings by GPT 5.6 Terra

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's reasoning model for coding and agentic tasks with adaptive reasoning.
- **Provider / access:** OpenAI API, `gpt-5.1`.
- **Release / knowledge:** November 2025; superseded by later OpenAI models.
- **IDs:** `openai/gpt-5.1`.
- **Context window:** No current official specification verified in this pass.
- **Modalities:** Text/image input and text output; tools supported in the evaluated agent configuration.
- **Pricing (as of 2026-10-02):** Retired/deprecated; consult OpenAI's current model catalog for replacement pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Tau2-bench: **67.0%** Airline, **95.6%** Telecom, **77.9%** Retail (OpenAI evaluation).

Reasoning / knowledge:

- GPQA Diamond: **88.1%**; AIME 2025: **94.0%**; FrontierMath with Python: **26.7%** (OpenAI).

Coding:

- SWE-bench Verified: **76.3%** (OpenAI; 500-problem harness).

Long context:

- BrowseComp Long Context 128K: **90.0%** (OpenAI).

### Normalized scores (1–100)

- **Tool use: 86/100.** Very strong Tau2-bench Telecom and good cross-domain service-agent results.
- **Reasoning: 88/100.** GPQA 88.1% and AIME 94.0% are high, while FrontierMath 26.7% limits the score.
- **Context window: 90/100.** 90.0% BrowseComp Long Context at 128K is strong tested retrieval.
- **Multimodal: 85/100.** MMMU **85.4%** documents strong visual understanding, though output remains text.
- **Coding: 86/100.** 76.3% SWE-bench Verified supports a high coding score.
- **Cost efficiency: 65/100.** It is a discontinued generation, so current deployment value is limited.
- **Overall Score: 87/100.** Half-up mean of five quality dimensions; still capable, but superseded for new production work.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using OpenAI's GPT-5.1 developer release; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
