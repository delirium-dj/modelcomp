# Claude Fable 5 — findings by GPT 5.6 Terra

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's general-access Mythos-class model, focused on high-end software, knowledge-work, and research use.
- **Provider / access:** Anthropic API and Claude products.
- **Release / knowledge:** Released 2026-06-09; knowledge cutoff not published.
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** no verified exact limit retrieved in this pass.
- **Modalities:** Text and vision capability are documented; exact API surface not retrieved.
- **Pricing (as of 2026-10-09):** $10/M input and $50/M output (published comparative rate).
- **Architecture:** Proprietary.

### Raw benchmarks found

- GPQA Diamond: **94.0%** (published comparative benchmark reporting).
- FrontierFinance: **49.2%** (independent common-harness finance-agent evaluation).
- RuBench found deployment fallback to a different model on 5/25 Fable 5 product runs, so product-harness scores require caution.

### Normalized scores (1–100)

- **Tool use: 92/100.** Frontier Finance and broad agentic positioning support a high score, with product fallback caveats.
- **Reasoning: 95/100.** 94.0% GPQA Diamond is frontier-level.
- **Context window: 85/100.** Exact verified limit was not retrieved; conservative cap.
- **Multimodal: 90/100.** Vision capability is documented, though output modalities are unverified.
- **Coding: 94/100.** Extensive evidence positions Fable 5 as a leading coding model, but the retrieved results did not expose a direct standard coding score.
- **Cost efficiency: 70/100.** Premium $10/M input and $50/M output pricing limits value efficiency.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions: 91.2.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
