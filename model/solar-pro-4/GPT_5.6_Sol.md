# Solar Pro 4 — findings by GPT 5.6 Sol

- Source: Upstage (`solar-pro4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Commercial reasoning model optimized for long documents, terminal work, and multi-step tool execution.
- **Provider / access:** Upstage API, SolarChat, OpenRouter, and dedicated deployment.
- **Release:** 2026-08-11.
- **Context window:** 512K input; 128K output.
- **Modalities:** Text input and output.
- **Pricing:** $0.30/M input, $0.06/M cached input, and $1.20/M output.

### Raw benchmarks found

- Terminal-Bench v2.1 **57.0**, BrowseComp **49.2**, MCP-Atlas **61.4**, and SWE-bench Verified **70.6**.
- GPQA Diamond **89.0**, MMLU-Pro **86.3**, AIME 2026 **95.3**, and LiveCodeBench **87.8**.
- AA-LCR **71.0** ([official announcement](https://www.upstage.ai/blog/en/solar-pro-4)).

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong terminal, browsing, MCP, and repository-agent evidence supports reliable tool workflows.
- **Reasoning: 89/100.** GPQA 89 and AIME 95.3 are excellent.
- **Context window: 90/100.** A 512K window, 128K output, and AA-LCR 71 make long-document work a major strength.
- **Multimodal: 15/100.** No verified native image, audio, or video input.
- **Coding: 90/100.** LiveCodeBench 87.8 and SWE-bench Verified 70.6 are high-end results.
- **Cost efficiency: 96/100.** Low token prices are exceptional for this level of agentic performance.
- **Overall Score: 74/100.** Half-up mean of the five non-cost dimensions; excellent text agent whose overall is reduced by absent multimodality.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Upstage's official launch report; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
