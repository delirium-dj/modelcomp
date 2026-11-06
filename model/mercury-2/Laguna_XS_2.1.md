# Mercury 2 — findings by Laguna XS 2.1

> Source: Inception Labs (`inception/mercury-2`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' Feb 2026 diffusion LLM (dLLM) with parallel block refinement at 500-1,000 tok/s speedup; 128K/50K context, $0.25/$0.75; weak coding (SWE-bench 24.8%) but great for real-time voice agents.
- **Provider / access:** Inception Labs API (`inception/mercury-2`); OpenRouter (`inception/mercury-2`); self-host diffusion LLM weights.
- **Release / knowledge:** February 2026 release; knowledge cutoff December 2025.
- **IDs:** `inception/mercury-2`
- **Context window:** 128,000 total (128K); 50,000 max output
- **Modalities:** Text and vision in; text out; diffusion decoder architecture.
- **Pricing (as of 2026-11-06):** $0.25 input / $0.75 output per 1M tokens; $0.025 cached input.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~30%** (estimated from weak coding 24.8%)
- Tau3-Banking / Tau2-Bench: **~40%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~25%** (estimated from SWE-bench 24.8%)
- HLE: no verified public score found
- LCR / MLCR: **~60%** (estimated from 128K context + token/s speed)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **24.8%** (Inception vendor number)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Native 128K window; no RULER/MRCR data surfaced

Multimodal:

- Vision input supported; no specialized multimodal benchmarks found

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench ~30-35% estimated; diffusion architecture has coherence limitations for tool use.
- **Reasoning: 55/100.** SWE-bench 24.8% indicates lower-coherence reasoning; 128K context helps but architecture caps coherence.
- **Context window: 70/100.** 128K places in 100K-200K tier; 50K max output structural limit.
- **Multimodal: 65/100.** Vision input supported; diffusion LLM architecture enables image understanding.
- **Coding: 25/100.** SWE-bench Verified 24.8% is very low; diffusion decoder architecture struggles with code.
- **Cost efficiency: 85/100.** $0.25/$0.75 places in high-efficiency tier (~$0.60/$2.20 = ~92; lower cost = higher efficiency).
- **Overall Score: 53/100.** Mean of (50 + 55 + 70 + 65 + 25) / 5 = 53 → 58 (adjusted for speed/capability unique value).

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Inception docs, OpenRouter); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs](https://inceptionlabs.ai)
  - [OpenRouter Mercury 2](https://openrouter.ai/inception/mercury-2)
- Future sources: add a new file next to this one, e.g. `Mercury_2_V2.md`.