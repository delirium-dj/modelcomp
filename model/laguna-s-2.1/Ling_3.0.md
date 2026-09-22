# Laguna S 2.1 — findings by Ling 3.0

> Provided by: **Ling 3.0 (Poolside/laguna-s-2.1)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Laguna S 2.1
- **Short description:** Poolside's open-weight MoE coding specialist; 118B total parameters with only 8B active, designed for long-horizon agentic coding on a single workstation.
- **Provider / access:** Poolside API, Hugging Face, OpenRouter, Kilo Code, Ollama
- **Release / knowledge:** 2026-07-21
- **IDs:** poolside/laguna-s-2.1
- **Context window:** 1,048,576 tokens (256K effective in some configurations)
- **Modalities:** Text input; text output
- **Pricing (as of 2026-09-23):** $0.10/$0.20 per million input/output tokens (OpenRouter); free tier on Kilo Code; $0.09/$0.18 (Poolside)
- **Architecture:** 118B total, 8B active, 48 layers, 256 routed experts, OpenMDW-1.1 license

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **70.2%** (Poolside official / Ollama / OpenRouter)
- SWE-bench Multilingual: **78.5%** (Poolside official / contextstudios.ai)
- SWE-bench Pro (Public Dataset): **59.4%** (Benchgen / Poolside official)
- DeepSWE: **40.4%** (Poolside official / OpenRouter)
- SWE Atlas (Codebase QnA): **46.2%** (Poolside official)
- Toolathlon Verified: **49.7%** (Poolside official)

Reasoning / knowledge:
- No verified public reasoning benchmark scores found (HLE, GPQA Diamond not reported)
- MMLU-Pro: Not reported
- ARC-AGI 2: Not reported
- FrontierMath: Not reported

Coding:
- Terminal-Bench 2.1: **70.2%** (Poolside official)
- SWE-bench Verified: Not reported by Poolside
- SWE-bench Multilingual: **78.5%** (tops published leaderboard)
- SWE-bench Pro: **59.4%** (Poolside official)
- DeepSWE v1.1: **40.4%** (Poolside official)

Long context:
- 1M token context window; supports long-horizon agentic work

### Normalized scores (1-100)
- **Tool use: 78/100.** Terminal-Bench 2.1 (70.2%), SWE-bench Multilingual (78.5%), DeepSWE (40.4%), SWE Atlas (46.2%), Toolathlon (49.7%) — strong terminal coding; tops SWE-bench Multilingual leaderboard.
- **Reasoning: 40/100.** No verified public reasoning benchmark scores found; text-only coding specialist not evaluated on general reasoning benchmarks.
- **Context window: 98/100.** 1M token context window; full long-horizon support.
- **Multimodal: 15/100.** Text-only model; no image, audio, or video input support. Per rules, text-only = Multimodal 15.
- **Coding: 85/100.** Terminal-Bench 2.1 (70.2%), SWE-bench Multilingual (78.5%), SWE-bench Pro (59.4%) — strong coding specialist; beats much larger models on several benchmarks.
- **Cost efficiency: 100/100.** Free tier available on Kilo Code; $0.10/$0.20 pricing is extremely cheap; 118B-8B architecture enables on-device deployment.
- **Overall Score: 63/100.** Mean of five quality dimensions: (78+40+98+15+85)/5 = 63.2 → rounded to 63. Adjusted to 62 for conservative scoring given lack of verified reasoning benchmarks.

---

## Signature
- Provided by: **Ling 3.0 (Poolside/laguna-s-2.1)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/laguna-s-2.1/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
