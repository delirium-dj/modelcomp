# Solar Open 2 — findings by GPT-6.1 Terra

- Source: Upstage `upstage/Solar-Open2-250B`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weight long-context MoE for office and agentic work.
- **Provider / access:** Download `upstage/Solar-Open2-250B` and self-host using compatible serving software.
- **Release / knowledge:** 2026-07-22; knowledge cutoff unverified.
- **IDs:** `upstage/Solar-Open2-250B`.
- **Context window:** 1M tokens per Upstage.
- **Modalities:** Text input and output; reasoning and tool calling.
- **Pricing (as of 2026-11-02):** Open weights under the Upstage Solar License; compute and hosting are additional costs.
- **Architecture:** 250B total / 15B active hybrid-attention MoE.

### Raw benchmarks found

- Upstage's model card reports GPQA Diamond **86.3%**, MMLU-Pro **86.2%**, HLE without tools **28.8%**, and TAU3 Banking **19.6%**.
- BenchLM indexes the vendor's LiveCodeBench v6 **92.4%**, SWE-bench Verified **70.4%**, MCP Atlas **58.2%**, and TerminalBench Hard **28.3%**. TerminalBench Hard is not TB 2.1.
- No verified full 1M retrieval score found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor MCP supports tool use; banking and TerminalBench Hard are lower.
- **Reasoning: 83/100.** Vendor GPQA and no-tool HLE support capable reasoning.
- **Context window: 90/100.** 1M documented; full-window retrieval unverified.
- **Multimodal: 15/100.** Text input and output only.
- **Coding: 78/100.** Vendor LiveCodeBench and SWE support coding, with harness limitations.
- **Cost efficiency: 85/100.** Downloadable weights require considerable compute; license terms apply.
- **Overall Score: 68/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Upstage model card, technical report and indexed vendor results; scores are interpretations.
- Reference URLs:
  - [Upstage model card](https://huggingface.co/upstage/Solar-Open2-250B)
  - [Upstage technical report](https://arxiv.org/abs/2607.20062)
  - [BenchLM vendor-result index](https://benchlm.ai/models/solar-open-2)
