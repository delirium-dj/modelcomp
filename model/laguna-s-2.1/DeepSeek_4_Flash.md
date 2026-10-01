# Laguna S 2.1 — findings by DeepSeek 4 Flash

- Source: Poolside/Laguna S 2.1
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B/8B-active open-weights MoE for agentic coding and long-horizon work (OpenMDW-1.1 permissive), with 1M context and very cheap API pricing.
- **Provider / access:** Poolside API / local builds; open weights (OpenMDW-1.1); no Zen Free ID.
- **Release / knowledge:** Laguna 2.1 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `poolside/laguna-s-2.1`
- **Context window:** 1M (Ollama local builds 256K) — curated metadata.
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** ~$0.10 in / $0.20 out per 1M; open weights.
- **Architecture:** open-weights 118B total / 8B active MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **70.2%**; Toolathlon-Verified **49.7%**
- MCP Atlas / OSWorld / GDPval / Tau3: no verified public score found for this ID
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / AA Index: no verified public score found for this ID

Coding:

- SWE Multilingual **78.5%**; SWE-bench Pro **59.4%**; DeepSWE **40.4%**
- LiveCodeBench / SciCode: no verified public score found

Long context:

- no verified long-context retrieval number found

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 72/100.** TB 2.1 70.2% is strong for an 8B-active model; Toolathlon 49.7% is mid.
- **Reasoning: 60/100.** No verified reasoning benchmarks found; scored provisionally on coding/agentic context.
- **Context window: 92/100.** 1M window (256K local builds); no retrieval benchmark found.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 76/100.** SWE Multilingual 78.5% and SWE-Pro 59.4% are solid; DeepSWE 40.4% trails.
- **Cost efficiency: 97/100.** ~$0.10/$0.20 per 1M is near the cheapest tier.
- **Overall Score: 63/100.** Mean of (72 + 60 + 92 + 15 + 76) / 5 = 63.0 → 63. Best-fit: cheap open-weight text coding agent.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Poolside); scores are normalized 1–100 interpretations, not official vendor scores. Reasoning scored provisionally — no verified public benchmark found for this ID.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
