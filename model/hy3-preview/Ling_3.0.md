# HY3 Preview — findings by Ling 3.0

> Provided by: **Ling 3.0 (Tencent/hy3-preview)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** HY3 Preview
- **Short description:** Tencent's earlier preview release of the HY3 MoE architecture; 295B total parameters with 21B activated, supporting up to 256K token context with hybrid reasoning.
- **Provider / access:** Tencent Cloud TokenHub, Hugging Face, OpenRouter, Kilo Code
- **Release / knowledge:** 2026-04-23
- **IDs:** tencent/hy3-preview, Tencent-Hunyuan/Hy3-preview
- **Context window:** 256,000 tokens, 262,144 max output
- **Modalities:** Text input; text output
- **Pricing (as of 2026-09-23):** ~$0.18/$0.60 per million input/output tokens (OpenRouter); free tier available on Tencent Cloud
- **Architecture:** 295B total params, 21B active, Mixture of Experts, MIT license, open weights

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.0: **54.4%** (Modeligent / modelscale.dev)
- SWE-bench Verified: **74.4%** (Modeligent / modelscale.dev)
- AA Coding Index: **58.8** (Artificial Analysis)
- AA Agentic Index: **25.6** (Artificial Analysis)
- SciCode: **41.2%** (Modeligent / BenchLM)

Reasoning / knowledge:
- GPQA Diamond: **89.7%** (modelscale.dev / Artificial Analysis)
- HLE: **33.5%** (Artificial Analysis)
- GDPval-AA: **35.8** (Artificial Analysis)
- AA Omniscience Index: **-18.5** (Artificial Analysis)
- Text Arena Coding: **1460.7** (Modeligent / Lmarena)

Coding:
- SWE-bench Verified: **74.4%** (Modeligent / modelscale.dev)
- Terminal-Bench 2.0: **54.4%** (Modeligent)
- SciCode: **41.2%** (Modeligent / BenchLM)
- AA Coding Index: **58.8** (Artificial Analysis)
- SWE-1.7 Lightning: Not applicable (different model)

Long context:
- 256K token context window
- No long-context specific benchmarks reported

### Normalized scores (1-100)
- **Tool use: 58/100.** Terminal-Bench 2.0 (54.4%), SWE-bench Verified (74.4%), AA Agentic Index (25.6) — moderate agentic tool-use; AA Agentic Index is notably low.
- **Reasoning: 65/100.** GPQA Diamond (89.7%), HLE (33.5%), GDPval-AA (35.8) — GPQA is very strong but HLE and GDPval are mid-tier; Intelligence Index not available.
- **Context window: 48/100.** 256K token context window; smaller than 1M competitors; adequate for moderate tasks.
- **Multimodal: 15/100.** Text-only model; no image, audio, or video input support. Per rules, text-only = Multimodal 15.
- **Coding: 60/100.** SWE-bench Verified (74.4%), Terminal-Bench 2.0 (54.4%), SciCode (41.2%), AA Coding Index (58.8) — moderate coding performance; below HY3 final release.
- **Cost efficiency: 100/100.** Free tier available; $0.18/$0.60 pricing is very low.
- - **Overall Score: 49/100.** Mean of five non-cost dimensions: (58+65+48+15+60)/5 = 49.

---

## Signature
- Provided by: **Ling 3.0 (Tencent/hy3-preview)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/hy3-preview/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
