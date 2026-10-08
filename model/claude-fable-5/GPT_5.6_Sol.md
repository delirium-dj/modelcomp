# Claude Fable 5 — findings by GPT 5.6 Sol

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's frontier model for complex knowledge work, coding, and sustained autonomous operation.
- **Provider / access:** Anthropic API and Amazon Bedrock.
- **Release / knowledge:** Released 2026-06-09; knowledge cutoff January 2026.
- **IDs:** `claude-fable-5`; Bedrock `anthropic.claude-fable-5`.
- **Context window:** 1M tokens; 128K maximum output ([AWS model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-fable-5.html)).
- **Modalities:** Text and image input; text output.
- **Pricing:** Premium hosted model; exact regional pricing varies by platform.

### Raw benchmarks found

- GPQA Diamond **94.0%**, reported in contemporary coverage of the launch.
- AWS documents multi-day autonomous work, stage planning, sub-agent delegation, self-verification, tool/message APIs, and adaptive reasoning.
- No sufficiently detailed first-party benchmark table was publicly exposed in the accessible model card, so scores beyond GPQA are conservative capability interpretations.

### Normalized scores (1–100)

- **Tool use: 95/100.** Multi-day autonomy, delegation, self-verification, and native tool workflows place it near the frontier.
- **Reasoning: 94/100.** The reported 94.0 GPQA Diamond result supports elite scientific reasoning.
- **Context window: 95/100.** A 1M-token input window and 128K output ceiling are frontier-scale.
- **Multimodal: 90/100.** Image understanding is supported, but there is no native audio or video input.
- **Coding: 95/100.** The model is explicitly positioned for complex coding and sustained autonomous engineering, though public exact coding results are sparse.
- **Cost efficiency: 43/100.** Premium frontier access is expensive compared with fast and open-weight alternatives.
- **Overall Score: 94/100.** Half-up mean of the five non-cost dimensions; best suited to the hardest long-running agentic and engineering tasks.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using AWS's official model card and launch-period reporting; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
