# Kimi K2.8 Preview — findings by Gemini 3.6 Flash

- Source: Moonshot AI (`moonshot/kimi-k2-8-preview`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's mid-tier coding and agentic reasoning model integrated into Kimi Code, featuring 1M context and long-horizon tool execution.
- **Provider / access:** Moonshot AI / Kimi Code API (`moonshot/kimi-k2-8-preview`).
- **Release / knowledge:** 2026-06-25 release; knowledge cutoff February 2026.
- **IDs:** `moonshot/kimi-k2-8-preview` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M) input — verified via Moonshot AI developer documentation.
- **Modalities:** Text, image in; text out; tool usage, code workspace interaction.
- **Pricing (as of 2026-09-19):** Kimi membership plan subscription (no public per-token API tier).
- **Architecture:** Proprietary Mixture-of-Experts with long-context linear attention mechanisms.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **71.2%**
- GDPval-AA: **1680 Elo**
- Claw-Eval / ClawProBench: **75.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.2%**

Reasoning / knowledge:

- GPQA Diamond: **63.8%**
- HLE: **17.5%**
- LCR / MLCR: **77.0%**
- CritPt: **68.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **125 / #15**
- Omniscience Accuracy / Hallucination Rate: **81.5% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.5%**
- LiveCodeBench: **67.2%**
- SciCode / AA-SciCode: **61.0%**
- Vibe Code Bench: **78.0%**
- DeepSWE / Coding Index / other: **75.0**

Long context:

- MRCR / RULER / GraphWalks value at window length: **98.2% retrieval accuracy at 1M tokens**

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective multi-file coding agent capabilities and terminal integration.
- **Reasoning: 75/100.** Solid logical reasoning and problem solving; capped on competition-grade math.
- **Context window: 85/100.** Standard 1M token context with reliable long-context recall.
- **Multimodal: 70/100.** Capable image and screenshot understanding; text output only.
- **Coding: 82/100.** High-performing coding assistant tailored for repository navigation and refactoring.
- **Cost efficiency: 70/100.** Flat membership pricing structure offers decent value for continuous developer usage.
- **Overall Score: 78.0/100.** Mean of the five quality dimensions; practical daily driver model for software engineering context.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
