# Kimi K2.7 Code — findings by Ernie 5.5 Flash

- Source: Moonshot AI/Kimi K2.7 Code (`kimi-k2.7-code`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused Kimi model (released 2026-06-12), stronger on long-horizon repo work with less overthinking, at a 262K context.
- **Provider / access:** Moonshot AI API (`kimi-k2.7-code`), Azure, DeepInfra, OpenCode Go, Jalapeno, Empirio Labs, plus ~55 routes. Open weights.
- **Release / knowledge:** 2026-06-12; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `kimi-k2.7-code`, `moonshotai/Kimi-K2.7-Code`, `azure/kimi-k2.7-code`, `opencode-go/kimi-k2.7-code`.
- **Context window:** 262,144 tokens (271,360 on Jalapeno); max output 262,144.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.95 / $4.00 per 1M input/output; cache read $0.19 (DeepInfra $0.68/$3.40).
- **Architecture:** open-weight MoE (Moonshot AI).

### Raw benchmarks found

Agent / tool use:

- MCPMark-Verified: **81.1**; MCP Atlas: **76%**; Terminal-Bench 2.1 (Vals): **67.0%**
- Kimi Claw 24/7 Bench: **46.9%**; CursorBench 3.2: **49.7%**
- Terminal-Bench 4.x / OSWorld / Toolathlon: no verified public rows published

Reasoning / knowledge:

- FrontierMath v2 Tiers 1–3: **54.035%**; MLS-Bench Lite: **35.1%**
- GPQA Diamond / HLE / ARC-AGI: no verified public rows published for the Code tier

Coding:

- LiveCodeBench (Vals AI): **82.1%**; SWE-bench (Vals AI): **78.2%**
- Kimi Code Bench v2: **62.0%**; ProgramBench: **53.6%**; OpenHarmony Bench v1.0: **52.1%**
- SWE-bench Pro / DeepSWE / FrontierCode: no verified public rows published

Long context:

- 262K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** MCPMark-Verified 81.1 and MCP Atlas 76% are good for tool-use loops, TB2.1 (Vals) 67.0% mid; Kimi Claw 46.9% and CursorBench 3.2 49.7% are weak.
- **Reasoning: 62/100.** FrontierMath T1–3 54.0% and MLS-Bench Lite 35.1% are the only verified reasoning rows and both are mid/low.
- **Context window: 78/100.** 262,144 tokens.
- **Multimodal: 60/100.** Text and image in only; no public image-understanding benchmark rows for the Code tier.
- **Coding: 78/100.** LiveCodeBench 82.1% and SWE-bench (Vals) 78.2% are decent, ProgramBench 53.6% mid; no SWE-bench Pro or DeepSWE row was published.
- **Cost efficiency: 88/100.** $0.95/$4.00 per 1M with open weights.
- **Overall Score: 70.0/100.** Best fit for self-hosted repo-level coding at a small context; K3.1 Pro is better on every measured axis for a similar price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Moonshot AI model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K2.7 Code — Moonshot AI / Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
  - [Kimi K2.7 Code benchmarks & sources — BenchLM](https://benchlm.ai/models/kimi-k2-7-code)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Kimi_K2.7_Code_v2.md`, using the same headings.