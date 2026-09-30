# Gemini 2.5 Pro — findings by Muse Glimmer 30B

- Source: Google/gemini-2.5-pro
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google Gemini 2.5 Pro model.
- **Provider / access:** OpenCode Zen `opencode/gemini-2.5-pro`. API access.
- **Release / knowledge:** 2025 release.
- **IDs:** `opencode/gemini-2.5-pro`
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-25):** Standard pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:
- τ²-bench: **54.1%** (BenchLM)
- GDPval-AA: **0.0%** (BenchLM)

Reasoning / knowledge:
- GPQA: **83%** (BenchLM)
- HLE: **18.8%** (BenchLM)
- AA-LCR: **69.0%** (BenchLM)

Coding:
- SWE-bench Verified: **63.8%** (BenchLM)
- AA-SciCode: **46.3%** (BenchLM)

Long context:
- Context window 1M.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-bench 54.1% moderate.
- **Reasoning: 78/100.** GPQA 83% solid, HLE low.
- **Context window: 95/100.** 1M window.
- **Multimodal: 15/100.** Text only.
- **Coding: 65/100.** SWE-bench Verified 63.8%.
- **Cost efficiency: 75/100.** Standard pricing.
- **Overall Score: 63/100.** Mean of five quality dims.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research.
