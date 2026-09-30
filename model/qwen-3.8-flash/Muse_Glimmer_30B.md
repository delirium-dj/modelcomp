# Qwen 3.8 Flash — findings by Muse Glimmer 30B

- Source: Alibaba/qwen-3.8-flash
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba Qwen 3.8 Flash model.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-flash`. API access.
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/qwen-3.8-flash`
- **Context window:** 128,000 tokens.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-25):** Standard pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:
- Toolathlon-Verified: **73.5%** (BenchLM, Qwen3.8-Flash-Next proxy)
- GDPval-AA normalized: **55.6%** (BenchLM, proxy)

Reasoning / knowledge:
- GPQA: **91.7%** (BenchLM, proxy)
- GPQA-D: **91.7%** (BenchLM, proxy)
- HLE: **35.9%** (BenchLM, proxy)

Coding:
- SWE-bench Pro: **62.5%** (BenchLM, proxy)
- DeepSWE: **58.7%** (BenchLM, proxy)
- LiveCodeBench v6: **91.9%** (BenchLM, proxy)

Long context:
- Context window 262K reported for Flash-Next proxy.

### Normalized scores (1–100)

- **Tool use: 78/100.** Toolathlon 73.5% solid.
- **Reasoning: 85/100.** GPQA 91.7% strong.
- **Context window: 70/100.** 128K per meta.
- **Multimodal: 15/100.** Text only.
- **Coding: 78/100.** LiveCodeBench 91.9%.
- **Cost efficiency: 85/100.** Flash pricing.
- **Overall Score: 65/100.** Mean of five quality dims.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research.
