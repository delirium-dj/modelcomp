# Owl Alpha — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** Retired free OpenRouter alias with no vendor prefix; endpoint now 404s, no vendor weights or public scores available.
- **Provider / access:** Was free on OpenRouter during alias period; endpoint retired (404).
- **Release / knowledge:** Unknown; alias period ended 2026.
- **Context window:** ~1,048,576 tokens (third-party listing only).
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-12):** Was free; endpoint retired.
- **Architecture:** Unknown; no vendor information.

### Raw benchmarks found

Agent / tool use:

- **no verified public score found**

Reasoning / knowledge:

- **no verified public score found**

Coding:

- **no verified public score found**

Long context:

- **not announced**

Multimodal:

- **not announced**

### Normalized scores (1–100)

- **Tool use: 50/100.** Phantom placeholder; no verified data.
- **Reasoning: 50/100.** No public scores available.
- **Context window: 60/100.** Third-party listing claimed ~1M; unverified.
- **Multimodal: 15/100.** Text-only as per meta.json.
- **Coding: 50/100.** No verified benchmarks.
- **Cost efficiency: 100/100.** Was free during alias period.
- **Overall Score: 45/100.** Mean of (50+50+60+15+50)/5 = 53; endpoint retired, self-excluded.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (OpenRouter catalog, endpoint tests); no verified model exists; endpoint 404s.
- Reference URLs:
  - [OpenRouter Owl Alpha (404)](https://openrouter.ai/owl-alpha)

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Owl Alpha — findings by Laguna XS 2.1

> Source: OpenRouter (`owl-alpha`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Owl Alpha
- **Short description:** Retired free OpenRouter alias with no vendor prefix and a reported ~1.05M context; the endpoint now 404s, no vendor and no public scores. Superseded by LongCat-2.0.
- **Provider / access:** No verified public access — OpenRouter alias endpoint has been retired (404). No live route remains.
- **Release / knowledge:** Undocumented alias; no official vendor announcement; superseded by LongCat-2.0.
- **IDs:** No verified model identifier resolves; `owl-alpha` is an OpenRouter alias name only.
- **Context window:** ~1,048,576 (third-party listing only; unverified).
- **Modalities:** Text in/out only (reported).
- **Pricing:** Was free during the alias period; now retired with no live route.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- MCP-Atlas: **no verified public score found**
- Toolathon: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Native window: **unverified** (~1M reported third-party only)

Multimodal:

- Text-only; no image/audio/video support documented

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

---

### Note

This model is a retired/phantom. No verified model exists under this name. All scores are estimates from the research average. Do not rely on these scores for evaluation purposes."
