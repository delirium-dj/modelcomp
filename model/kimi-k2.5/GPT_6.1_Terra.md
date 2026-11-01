# Kimi K2.5 — findings by GPT-6.1 Terra

- Source: Moonshot AI `moonshotai/Kimi-K2.5`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot's open-weight visual-language model for agents and coding.
- **Provider / access:** Published weights `moonshotai/Kimi-K2.5`; Moonshot and third-party APIs.
- **Release / knowledge:** Vendor model-card changelog begins 2026-01-29; knowledge cutoff not verified.
- **IDs:** `moonshotai/Kimi-K2.5`, API `kimi-k2.5`.
- **Context window:** Vendor specifies 256K.
- **Modalities:** Text, image and video input, text output; model card marks video experimental and official-API-only for the described third-party serving setups.
- **Pricing (2026-11-01):** OpenCode lists $0.60 input / $3 output / $0.10 cached per million; route availability and provider prices vary.
- **Architecture:** 1T total / 32B active MoE; modified MIT license.

### Raw benchmarks found

Agent / tool use:

- Moonshot reports Terminal-Bench 2.0 **50.8%** in non-thinking mode; BrowseComp **60.6%**, **74.9% with context management**, and **78.4% in Agent Swarm** are separate configurations.

Reasoning / knowledge:

- Moonshot reports GPQA Diamond **87.6%** (average of eight runs), HLE full **30.1% without tools / 50.2% with tools** in thinking mode.

Coding:

- Moonshot reports SWE-bench Verified **76.8%**, SWE-bench Pro **50.7%**, LiveCodeBench v6 **85.0%**; its SWE results use a custom harness and non-thinking mode.

Long context:

- Moonshot reports LongBench v2 **61.0%** using approximately 128K inputs, not proof of 256K retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 80/100.** Vendor terminal and search-agent results support capable tool use; swarm and context-managed figures are explicitly distinguished.
- **Reasoning: 86/100.** Vendor GPQA and no-tools HLE support strong reasoning; tool-enabled HLE is separate.
- **Context window: 74/100.** 256K documented; LongBench uses approximately 128K inputs.
- **Multimodal: 80/100.** Image and video input with text output; video support varies by deployment.
- **Coding: 81/100.** Vendor SWE and LiveCodeBench provide strong results, with custom harness and thinking-mode caveats.
- **Cost efficiency: 91/100.** OpenCode lists $0.60/$3 per million; self-hosting incurs compute costs.
- **Overall Score: 80/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Moonshot model card and OpenCode pricing; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Moonshot weights card and evaluation details](https://huggingface.co/moonshotai/Kimi-K2.5)
  - [OpenCode model pricing](https://opencode.ai/docs/zen/)
- Future sources: add a separate signed findings file alongside this one.
