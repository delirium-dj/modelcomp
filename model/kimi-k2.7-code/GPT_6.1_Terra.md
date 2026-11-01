# Kimi K2.7 Code — findings by GPT-6.1 Terra

- Source: Moonshot AI `moonshotai/Kimi-K2.7-Code`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot's open-weight coding-focused visual agent, built on K2.6.
- **Provider / access:** Moonshot API `kimi-k2.7-code`; HighSpeed is the same model served faster, not a separate checkpoint.
- **Release / knowledge:** Vals reports 2026-06-12; knowledge cutoff not verified.
- **IDs:** `moonshotai/Kimi-K2.7-Code`, `kimi-k2.7-code`.
- **Context window:** Moonshot specifies 256K; Vals lists 262K total and up to 256K output subject to context.
- **Modalities:** Text, image and video input, text output; video support is experimental and deployment-dependent.
- **Pricing (2026-11-01):** Vals lists $0.95 input / $4 output per million for its evaluated route; high-speed pricing differs.
- **Architecture:** 1T total / 32B active MoE; modified MIT license. Thinking cannot be disabled on the official route.

### Raw benchmarks found

Agent / tool use:

- Moonshot reports MCP Atlas **76.0%**, MCP Mark Verified **81.1%**, each averaged over three runs. Vals Terminal-Bench 2.1 **67.04% ± 0.38**.

Reasoning / knowledge:

- No verified exact-model GPQA or HLE score found in the reviewed sources; Moonshot's in-house Kimi Claw 24/7 **46.9%** is an agent benchmark, not a substitute.

Coding:

- Vals SWE-bench Verified **78.20%**, LiveCodeBench **82.05% ± 1.07**, Vibe Code Bench v1.1 **47.21% ± 5.19**. Moonshot Program Bench **53.6%** and Vals ProgramBench **0.00%** differ sharply; harnesses and scoring should not be assumed equivalent.

Long context:

- 256K documented; no verified full-window retrieval score found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Vendor MCP benchmarks and independent TB 2.1 support strong agents.
- **Reasoning: 80/100.** Provisional, based on agentic performance without verified exact-model GPQA/HLE.
- **Context window: 74/100.** Vendor specifies 256K; full-window retrieval unverified.
- **Multimodal: 80/100.** Image and video input with text output; video support is route-dependent.
- **Coding: 84/100.** SWE and TB 2.1 are strong; Vibe Code and conflicting ProgramBench setups temper the score.
- **Cost efficiency: 88/100.** Vals's standard route costs $0.95/$4 per million; infrastructure and high-speed rates differ.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Moonshot model card and independent Vals evaluation; benchmark harnesses and versions are identified.
- Reference URLs:
  - [Moonshot weights card and evaluation notes](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
  - [Moonshot API guide](https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart)
  - [Vals evaluation](https://www.vals.ai/models/kimi_kimi-k2.7-code)
- Future sources: add a separate signed findings file alongside this one.
