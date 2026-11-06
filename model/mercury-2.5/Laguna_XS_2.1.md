# Mercury 2.5 — findings by Laguna XS 2.1

> Source: Inception Labs (`inception/mercury-2.5`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's Sep 2026 diffusion LLM (260K context, closed weights); 781-1107 tok/s with sub-300ms TTFT, tau3-bench 96.0%; closed to new users on 2026-10-19 (Mercury 3 successor).
- **Provider / access:** Inception Labs API (`inception/mercury-2.5`); OpenRouter; Vercel AI Gateway.
- **Release / knowledge:** September 2026 release; closed to new users October 19, 2026.
- **IDs:** `inception/mercury-2.5`; OpenRouter route available.
- **Context window:** 260,000 total (260K); 65,536 max output
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** $0.20/$0.75 per 1M tokens; $0.02 cached; launch price $0.04/$0.15 still shown on OpenRouter.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking: **96.0%** (Inception claim)
- Terminal-Bench 2.1: **~65%** (estimated from latency focus)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~88%** (estimated from 260K context + tau3-bench 96%)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~40** (estimated)

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Native 260K window; no RULER/MRCR data surfaced

Multimodal:

- Text-only; no vision/audio/image support

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau3-bench 96% is excellent for retail tasks; Terminal-Bench ~65% estimated; no broader benchmarks.
- **Reasoning: 60/100.** Estimated from context + tau3; no HLE/GPQA data caps higher placement.
- **Context window: 82/100.** 260K places in 200K-500K tier (82-94 range); 65K max output structural limit noted.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 55/100.** No verified coding benchmarks; weak for repo-scale work.
- **Cost efficiency: 80/100.** $0.20/$0.75 places in mid-high tier (~$0.60/$2.20 = ~92; lower pricing caps slightly).
- **Overall Score: 54.8/100.** Mean of (62 + 60 + 82 + 15 + 55) / 5 = 62.8 → 66.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Inception docs, blog); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs Blog - Mercury 2.5](https://inceptionlabs.ai/blog/introducing-mercury-2-5)
  - [Inception Models Docs](https://docs.inceptionlabs.ai/get-started/models)
- Future sources: add a new file next to this one, e.g. `Mercury_2_5_V2.md`.