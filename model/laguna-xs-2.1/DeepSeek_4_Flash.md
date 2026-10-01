# Laguna XS 2.1 — findings by DeepSeek 4 Flash

- Source: Poolside/Laguna XS 2.1
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's 33B/3B-active open-weights MoE for agentic coding and local deployment (OpenMDW-1.1 permissive), with 262K context and near-free pricing.
- **Provider / access:** OpenRouter (`$0.06/$0.12`) and local weights; free tier available; no Zen Free ID for this slug.
- **Release / knowledge:** Laguna 2.1 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `poolside/laguna-xs-2.1`
- **Context window:** 262,144 (256K) — curated metadata and BenchLM.
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.06 in / $0.12 out per 1M; free tier available; open weights.
- **Architecture:** open-weights 33B total / 3B active MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **37.5%**
- GDPval / MCP Atlas / OSWorld / Tau3: no verified public score found for this ID
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / AA Index: no verified public score found for this ID

Coding:

- SWE-bench Verified **70.9%**; SWE Multilingual **63.1%**; SWE-bench Pro **47.6%**
- LiveCodeBench / SciCode: no verified public score found

Long context:

- no verified long-context retrieval number found

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 55/100.** TB 2.0 37.5% is modest; no other agentic benchmark found.
- **Reasoning: 55/100.** No verified reasoning benchmarks found; scored provisionally on coding context.
- **Context window: 74/100.** 262K window; no retrieval benchmark found.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 72/100.** SWE Verified 70.9% is strong for 3B-active; SWE-Pro 47.6% trails.
- **Cost efficiency: 98/100.** $0.06/$0.12 per 1M (plus a free tier) is near-free.
- **Overall Score: 54/100.** Mean of (55 + 55 + 74 + 15 + 72) / 5 = 54.2 → 54. Best-fit: ultra-cheap/local text coding on constrained hardware.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Poolside, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores. Reasoning scored provisionally — no verified public benchmark found.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
