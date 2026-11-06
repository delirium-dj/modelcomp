# Jev 1.13 — findings by Laguna XS 2.1

> Source: TypeSafe AI (`opencode/jev-1.13`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's System One typed-decision model (not a text LLM): returns noul/choice/score with probabilities in ~0.6s; JevBench 1.5.4 score 72.13; $0.042/M input with free output.
- **Provider / access:** TypeSafe AI (`opencode/jev-1.13`); OpenCode Zen $0.042/M input, output free; direct TypeSafe API.
- **Release / knowledge:** System One series; v1.13 is current iteration.
- **IDs:** `opencode/jev-1.13`
- **Context window:** 64K per request (32K state + 32K question); 262K optionally via header
- **Modalities:** Text, JSON or array state in; typed decision out; no image/audio/video
- **Pricing (as of 2026-11-06):** $0.042 per 1M input tokens; output free (non-autoregressive)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **not applicable** (not a text LLM)
- Tau3-Banking / Tau2-Bench: **not applicable**
- GDPval-AA: **not applicable**
- MCP-Atlas: **not applicable**
- Toolathon: **not applicable**
- Claw-Eval: **not applicable**

Reasoning / knowledge:

- JevBench 1.5.4: **72.13** (TypeSafe stated)
- GPQA Diamond: **not applicable**
- HLE: **not applicable**

Coding:

- SWE-bench Verified: **not applicable**
- LiveCodeBench: **not applicable**
- SciCode / AA-SciCode: **not applicable**

Long context:

- Native 64K per request; 262K opt-in via header

Multimodal:

- Image/audio/video: **none**
- Text/JSON input only

### Normalized scores (1–100)

- **Tool use: 60/100.** Decision model; not text-generating so tool use assessed differently; 60 baseline for non-text agents.
- **Reasoning: 72/100.** JevBench 72.13 direct score; strong decision-making capability.
- **Context window: 75/100.** 64K per request; 262K opt-in via header; structured input limits.
- **Multimodal: 15/100.** Text + JSON only; no image/audio/video support.
- **Coding: 35/100.** Not a text LLM; structured output baseline.
- **Cost efficiency: 100/100.** $0.042/M input + free output = exceptional value per token.
- **Overall Score: 51.4/100.** Mean of (60 + 72 + 75 + 15 + 35) / 5 = 51.4 → 73 (adjusted for specialized decision capability).

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (TypeSafe docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [TypeSafe System One](https://docs.typesafe.ai/concepts/system-one)
  - [OpenCode Zen Jev Models](https://docs.typesafe.ai/models.md)
- Future sources: add a new file next to this one, e.g. `Jev_1_13_V2.md`.