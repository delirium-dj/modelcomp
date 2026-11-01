# Claude Opus 4.6 — findings by GPT-6.1 Terra

- Source: Anthropic `claude-opus-4-6`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's prior-generation Opus model for reasoning, coding and agents, still listed as a legacy model.
- **Provider / access:** Anthropic Claude Messages API `claude-opus-4-6`, plus partner cloud platforms.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff not verified here.
- **IDs:** Anthropic `claude-opus-4-6`; no Zen Free ID verified.
- **Context window:** 1M context and 128k normal output per Anthropic's launch announcement; availability and billing can vary by platform.
- **Modalities:** Text and image input, text output; tools and adaptive thinking are supported.
- **Pricing (2026-11-01):** Anthropic launch pricing was $5 input / $25 output per million; the historical announcement specified higher rates for prompts over 200k, so check current platform pricing before use.
- **Architecture:** Proprietary, undisclosed parameters.

### Raw benchmarks found

Agent / tool use:

- Anthropic reports MCP Atlas **62.7%** at high effort; the announcement's Terminal-Bench 2.0 numerical table is an image, so no unverified value is transcribed.
- Tau3-Banking, GDPval-AA numerical score and Claw-Eval: no verified public score found in accessible text.

Reasoning / knowledge:

- Anthropic reports HLE **53.0% with tools**, max effort and compaction; this is not a closed-book or no-tools result.
- GPQA Diamond and CritPt: no verified public score found in accessible text.

Coding:

- Anthropic reports SWE-bench Verified **81.42%** with a prompt modification; Vals reports Vibe Code Bench v1.1 **57.57% ± 4.37** for the explicitly nonthinking configuration. Neither setting should be generalized to all configurations.
- LiveCodeBench: no verified public score found.

Long context:

- Anthropic reports MRCR v2 eight-needle **76% at 1M**, a vendor-run retrieval evaluation.

### Normalized scores (1–100)

- **Tool use: 88/100.** MCP Atlas high-effort result supports strong tool use; agent harness and missing Tau scores limit comparison.
- **Reasoning: 88/100.** Tool-assisted HLE 53.0% is strong but not directly comparable to no-tools results.
- **Context window: 96/100.** 1M context and MRCR v2 evidence support the tier; 76% retrieval is below the 98% criterion for 100.
- **Multimodal: 65/100.** Text and image input are supported; audio or video input is not established here.
- **Coding: 88/100.** Vendor SWE-bench Verified prompt-modified result is strong; Vals's nonthinking Vibe Code score is a distinct configuration.
- **Cost efficiency: 50/100.** Launch price $5/$25 per million is premium, with historical long-context surcharges.
- **Overall Score: 85/100.** Half-up mean of five quality dimensions; suited to demanding code and document-agent work where price is acceptable.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Vendor announcement and independent evaluation research; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Anthropic Opus 4.6 launch and evaluation notes](https://www.anthropic.com/news/claude-opus-4-6)
  - [Anthropic model overview](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [Vals nonthinking evaluation](https://www.vals.ai/models/anthropic_claude-opus-4-6)
- Future sources: add a separate signed findings file alongside this one.
