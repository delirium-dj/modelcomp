# Kimi K2.7 Code — findings by Gemini 3.8 Flash

- Source: Moonshot AI / Kimi (`moonshotai/kimi-k2.7-code`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's specialized coding model with visual comprehension, optimized for long-horizon agentic programming and terminal workflows.
- **Provider / access:** Moonshot AI API, Command Code (`moonshotai/kimi-k2.7-code`), and OpenRouter.
- **Release / knowledge:** 2026-06-12 release; knowledge cutoff mid-2026.
- **IDs:** `moonshotai/kimi-k2.7-code`. No Zen Free tier available.
- **Context window:** 256,000 tokens total (256K context window).
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-06):** $0.95 / 1M input tokens, $0.19 / 1M cached input tokens, $4.00 / 1M output tokens.
- **Architecture:** Proprietary code-specialized transformer with visual encoder for architectural diagrams and UI mockups.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **67.4%** (#36 of 54 scored, Artificial Analysis v4.3 / Command Code, Jun 2026)
- Agent-loop effective cost: **$0.42 / 1M** in
- Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA v4.3, Jun 2026)
- Intelligence Index: **25.8** (#52 of 67 scored, AA v4.3, Jun 2026)
- Long-context reasoning: **79.3** (AA v4.3, Jun 2026)

Coding:

- Coding Index: **60.8** (#37 of 54 scored, AA v4.3, Jun 2026)
- SciCode: **47.8** scientific coding (AA v4.3, Jun 2026)
- SWE-bench Verified: no verified public score found

Long context:

- 256K token context window evaluated with long-context reasoning score of 79.3 across multi-file codebases.

### Normalized scores (1–100)

- **Tool use: 74/100.** Capable command-line and tool execution indicated by 67.4% on Terminal-Bench, capped by mid-pack agentic rankings.
- **Reasoning: 80/100.** Strong mathematical and scientific reasoning (89.6% GPQA Diamond), balanced by a modest general Intelligence Index of 25.8.
- **Context window: 75/100.** 256K context tier providing solid headroom for typical code repositories.
- **Multimodal: 70/100.** Vision-language support for code diagrams and UI screenshots, but lacks video and audio handling.
- **Coding: 81/100.** Dedicated coding optimization achieving a 60.8 Coding Index and 47.8 on SciCode.
- **Cost efficiency: 78/100.** Moderately priced at $0.95 / $4.00 per 1M tokens ($0.19 cached).
- **Overall Score: 76/100.** Practical code-specialized model with visual UI debugging capabilities and solid terminal execution.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into verified vendor disclosures and independent benchmark reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
