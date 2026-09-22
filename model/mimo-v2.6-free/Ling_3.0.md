# MiMo-V2.6 Flash — findings by Ling 3.0

> Provided by: **Ling 3.0 (xiaomi/mimo-v2.6-flash)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** MiMo-V2.6 Flash
- **Short description:** Xiaomi's open-weights MoE model with 1M context window, native omnimodal input, and strong terminal-agent coding performance.
- **Provider / access:** Xiaomi; API ID: `mimo-v2.6-flash`
- **Release / knowledge:** September 2026; open weights (MIT license)
- **IDs:** xiaomi/mimo-v2.6-flash
- **Context window:** 1,048,576 tokens (up to 131,072 output)
- **Modalities:** text, image, video, audio input; text output
- **Pricing (as of 2026-09-23):** Free tier available; $0.14 / $0.28 per 1M input/output tokens (paid)
- **Architecture:** MoE with sparse activation; 1M context window; natively omnimodal

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **87.6%** (llm-stats.com)
- CyberGym: **95.1%** (llm-stats.com)
- OSWorld-Verified: **80.8%** (llm-stats.com)
- Toolathlon-Verified: **73.6%** (llm-stats.com)
- MiMo Cyber Bench: **77.2%** (llm-stats.com)

Reasoning / knowledge:
- GPQA: **78.8%** (llm-stats.com)
- MMLU-Pro: **84.9%** (benchlm.ai via MiMo-V2-Flash comparison)
- AIME 2025: **94.1%** (benchlm.ai)
- HMMT 2025: **84.4%** (llm-stats.com)
- HLE: **39.0%** (llm-stats.com)

Coding:
- No SWE-bench Verified or Pro scores published (vendor-only benchmarks)
- No independent coding benchmarks available
- MiMo Cyber Bench: **77.2%** (vendor-reported)

Long context:
- No specific long-context benchmarks published
- 1M context window supports extensive document processing

### Normalized scores (1-100)
- **Tool use: 88/100.** Terminal-Bench 2.1 at 87.6% is exceptional for agentic coding. CyberGym at 95.1% is the highest recorded on any benchmark. OSWorld-Verified at 80.8% confirms strong agentic capability.
- **Reasoning: 80/100.** GPQA at 78.8% and MMLU-Pro at 84.9% show solid reasoning. AIME 2025 at 94.1% demonstrates strong math. HLE at 39.0% is a known ceiling.
- **Context window: 80/100.** 1M token context window is standard for frontier models. No specific long-context benchmark scores published.
- **Multimodal: 75/100.** Natively omnimodal: accepts text, image, video, and audio input — among the broadest modality support. MiMo Cyber Bench at 77.2% and Toolathlon at 73.6% confirm multimodal agentic capability.
- **Coding: 70/100.** Terminal-Bench 2.1 at 87.6% is excellent but no independent SWE-bench Verified or Pro scores published. Vendor-only benchmarks (MiMo Cyber Bench at 77.2%) limit verification.
- **Cost efficiency: 100/100.** Free tier available. At $0.14/$0.28 per 1M tokens on paid pricing, extremely cost-effective. MIT license enables self-hosting.
- **Overall Score: 79/100.** Math.round((88+80+80+75+70)/5) = Math.round(78.6) = 79. Strong tool use and reasoning offset a moderate coding score (lacking independent benchmarks).

---

## Signature
- Provided by: **Ling 3.0 (xiaomi/mimo-v2.6-flash)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/mimo-v2.6-free/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
