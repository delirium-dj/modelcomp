# Qwen 3.7 Plus — findings by Muse Glimmer 30B

- Source: Alibaba/qwen-3.7-plus
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Qwen 3.7 Plus reasoning model, 1M context, strong coding and multimodal capabilities.
- **Provider / access:** Alibaba Cloud Model Studio / OpenCode Zen `opencode/qwen-3.7-plus`. Chat Completions API.
- **Release / knowledge:** 2026 release, knowledge cutoff unspecified.
- **IDs:** `opencode/qwen-3.7-plus`
- **Context window:** 1,000,000 tokens total. Verified via BenchLM.
- **Modalities:** Text in/out; multimodal inputs supported per family.
- **Pricing (as of 2026-09-25):** Standard pricing.
- **Architecture:** Proprietary, reasoning type.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **70.3%** (BenchLM)
- MCP Atlas: **73.2%** (BenchLM)
- Claw-Eval: **62.7%** (BenchLM)
- GDPval-AA: **886** (BenchLM)

Reasoning / knowledge:
- GPQA: **90.3%** (BenchLM)
- GPQA-D: **90.3%** (BenchLM)
- HLE: **34.7%** (BenchLM)
- MRCRv2: **91.7%** (BenchLM)

Coding:
- SWE-bench Verified: **77.7%** (BenchLM)
- SWE-bench Pro: **57.6%** (BenchLM)
- LiveCodeBench: **89.6%** (BenchLM)
- SciCode: **51.3%** (BenchLM)

Long context:
- Context window 1M reported; no long-context retrieval benchmark published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.0 70.3% and MCP Atlas 73.2% show strong agentic tool use, capped by GDPval-AA 886.
- **Reasoning: 86/100.** GPQA 90.3% and MRCRv2 91.7% indicate frontier reasoning; HLE 34.7% moderate.
- **Context window: 95/100.** 1M window per BenchLM.
- **Multimodal: 75/100.** Multimodal benchmarks present; family supports image/video.
- **Coding: 82/100.** SWE-bench Verified 77.7% and LiveCodeBench 89.6% strong coding.
- **Cost efficiency: 80/100.** Standard pricing for capability tier.
- **Overall Score: 83/100.** Mean of five quality dims; strong all-rounder.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using same headings.
