# Kimi K2.6 — findings by GPT-6.1 Terra

- Source: Moonshot AI `kimi-k2.6`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot's open-weight multimodal model for long-horizon coding and agent orchestration.
- **Provider / access:** Moonshot Chat Completions `kimi-k2.6`; weights `moonshotai/Kimi-K2.6`.
- **Release / knowledge:** Vals reports 2026-04-20 release; knowledge cutoff not verified.
- **IDs:** Moonshot `kimi-k2.6`.
- **Context window:** Moonshot specifies 256K context; Vals lists 262K with a maximum output up to 256K subject to context.
- **Modalities:** Text, image and video input; text output. The model card notes video support is experimental and official-API-only for the described third-party serving setups.
- **Pricing (2026-11-01):** Vals lists $0.95 input / $4 output per million for its evaluated route; vendor pricing and access restrictions may change.
- **Architecture:** 1T total / 32B active MoE; modified MIT license.

### Raw benchmarks found

Agent / tool use:

- Moonshot reports Terminal-Bench 2.0 **66.7%** with Terminus-2, Toolathlon **50.0%**, and Claw Eval **80.9% pass@3**. Vals TB 2.1 **53.56% ± 2.08** is a different version and harness.

Reasoning / knowledge:

- Moonshot GPQA Diamond **90.5%**, HLE full **34.7%** and HLE with tools **54.0%**; Vals GPQA **89.14% ± 2.00**.

Coding:

- Moonshot SWE-bench Verified **80.2%**, SWE-bench Pro **58.6%**, LiveCodeBench v6 **89.6%**; Vals Vibe Code Bench v1.1 **37.89% ± 4.91**.

Long context:

- 256K context documented; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vendor Toolathlon and Claw plus Vals TB 2.1 support capable agents; evaluation setups differ.
- **Reasoning: 88/100.** GPQA and full HLE support strong reasoning, with tool-assisted HLE separately identified.
- **Context window: 74/100.** Moonshot specifies 256K; no verified retrieval score.
- **Multimodal: 80/100.** Images and video in, text out; video support varies by deployment.
- **Coding: 84/100.** Vendor SWE and LiveCodeBench are strong, tempered by Vals Vibe Code.
- **Cost efficiency: 88/100.** Vals reports $0.95/$4 per million for its route.
- **Overall Score: 82/100.** Half-up mean of five quality dimensions; useful for open-weight visual coding and orchestration.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Moonshot API and weights documentation with independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Moonshot API guide](https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart)
  - [Moonshot weights and benchmark card](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [Vals evaluation](https://www.vals.ai/models/kimi_kimi-k2.6)
- Future sources: add a separate signed findings file alongside this one.
