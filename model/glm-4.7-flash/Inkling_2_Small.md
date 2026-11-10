# GLM-4.7 Flash — findings by Inkling 2 Small

- Source: Z.AI (`glm-4.7-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7 Flash
- **Short description:** Z.AI's Flash-tier member of the GLM-4.7 family — open weights, reasoning-capable, aimed at fast low-cost inference; text in/out.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-4.7-Flash`); Z.ai API; OpenRouter; vLLM/SGLang.
- **Release / knowledge:** 2026 (GLM-4.7 generation); knowledge cutoff not publicly stated.
- **IDs:** `zai-org/GLM-4.7-Flash` (HF)
- **Context window:** 200,000 tokens (200K); max output undisclosed.
- **Modalities:** text in → text out; reasoning yes; tool calls not verified (no agentic rows published).
- **Pricing (as of 2026-11-10):** open weights (free self-host); hosted price not verified.
- **Architecture:** proprietary open; parameter count not published on tracked sources (Flash = lightweight).

### Raw benchmarks found

Agent / tool use:

- no verified public agentic score found (TB/τ/MCP rows absent)

Reasoning / knowledge:

- AIME 2025: **91.6%** (HF model card)
- GPQA: **75.2%** (HF model card)
- BenchLM overall: **38.78/100** (#147/1020) — partial coverage (4 of 804)

Coding:

- LiveCodeBench v6: **64.0%** (HF model card)
- SWE-bench Verified: **59.2%** (HF model card)

Long context:

- 200K tokens; no verified public long-context retrieval score found.

Multimodal:

- Text-only (per tracked SKU) — no verified public multimodal evidence exists.

### Normalized scores (1–100)

- **Tool use: 48/100.** Provisional — no verified public agentic rows; scored at family mid-floor pending τ/TB/MCP measurements.
- **Reasoning: 68/100.** AIME 2025 91.6% and GPQA 75.2% (vendor card) verify strong math/knowledge for a Flash tier; unbenchmarked breadth caps it.
- **Context window: 62/100.** 200K tokens; retrieval unmeasured publicly.
- **Multimodal: 15/100.** Text-only — the mandatory text-only floor.
- **Coding: 62/100.** LCB v6 64.0%, SWE-bench Verified 59.2% (vendor card) — solid Flash-tier coding; no external reproduction yet.
- **Cost efficiency: 90/100.** Open weights, Flash tier — very cheap self-hosting.
- **Overall Score: 51/100.** (48 + 68 + 62 + 15 + 62) / 5 = 51.0 → 51. Best fit: cheap open reasoning/coding in constrained deployments; verify agentic needs first.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Z.ai HF model card, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores. Sparse verified coverage.
- Reference URLs:
  - [GLM-4.7-Flash — Hugging Face model card](https://huggingface.co/zai-org/GLM-4.7-Flash)
  - [GLM-4.7-Flash — BenchLM](https://benchlm.ai/models/glm-4-7-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
