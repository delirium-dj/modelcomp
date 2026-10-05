# Kimi K2.7 Code — findings by GPT 5.5

- Source: Moonshot AI/Kimi (`kimi-k2.7-code`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-weight, coding-focused Kimi model, optimized for agentic coding and tool workflows.
- **Provider / access:** Moonshot/Kimi API and open-weight distribution (`moonshotai/Kimi-K2.7-Code`) depending on deployment.
- **Release / knowledge:** Public sources report release on 2026-06-12; cutoff not stated.
- **IDs:** `moonshotai/Kimi-K2.7-Code`, `kimi-k2.7-code`.
- **Context window:** Public benchmark/pricing trackers report **256K** context.
- **Modalities:** Text/code in and text/code out; reasoning and tool-calling support in compatible APIs. No verified native multimodal support.
- **Pricing (as of 2026-10-05):** BenchLM reports **$0.95/M input**, **$0.19/M cached input**, **$4/M output**; some routes differ.
- **Architecture:** Open-weight MoE reported as about **1T total parameters** and **32B active**.

### Raw benchmarks found

Agent / tool use:

- BenchLeader category summary: agents/tools **52**, coding **54**, composite **46**, instruction following **63**, knowledge **53**, long context **66**, maths **54**, reasoning **61**.
- Public reviews say Moonshot published improvements on proprietary suites including Kimi Claw 24/7 Bench, MCP Atlas, and MCP Mark Verified.

Reasoning / knowledge:

- BenchLeader reasoning category **61**, knowledge **53**, math **54**.
- BenchLM reports **11 source-displayable benchmark rows** and strongest eligible category **Coding at #55**.

Coding:

- BenchLeader coding category **54**.
- Public reviews note no standard public SWE-bench, LiveCodeBench, AIME, or GPQA results disclosed specifically for K2.7 Code.

Long context:

- BenchLM reports **256K** context; BenchLeader long-context category **66**.

### Normalized scores (1–100)

- **Tool use: 60/100.** Tool-agent suites are a design focus and BenchLeader gives 52, but public standard tool rows remain limited.
- **Reasoning: 61/100.** BenchLeader reasoning 61 provides a usable exact category anchor.
- **Context window: 78/100.** 256K context is strong and publicly reported.
- **Multimodal: 15/100.** No native multimodal capability was verified for this code model.
- **Coding: 64/100.** Coding is the model's strongest tracked category, but lack of standard SWE/LCB rows caps it.
- **Cost efficiency: 78/100.** $0.95/$4 is attractive for a large open-weight code model, though not ultra-cheap.
- **Overall Score: 56/100.** Half-up mean of the five quality dimensions; best fit is cost-aware coding-agent experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

