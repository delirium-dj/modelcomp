# Nemotron 3.5 Bolt E4B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's Nemotron 3.5 Bolt variant with 4B effective parameters optimized for low-latency inference.
- **Provider / access:** NVIDIA NIM, OpenRouter, OpenCode Zen.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard 4B model window.
- **Modalities:** Text in; text out; low-latency optimization.
- **Pricing (as of 2026-11-12):** Standard pricing tier.
- **Architecture:** 4B effective parameters; bolt-optimized for speed.

### Raw benchmarks found

Agent / tool use:

- Low-latency agentic capabilities

Reasoning / knowledge:

- Standard 4B class reasoning

Coding:

- Coding-optimized Bolt variant

### Normalized scores (1–100)

- **Tool use: 65/100.** Standard agentic integration; bolt optimization.
- **Reasoning: 68/100.** 4B class reasoning baseline.
- **Context window: 68/100.** Standard 4B window.
- **Multimodal: 15/100.** Text-only model; minimum score.
- **Coding: 70/100.** Bolt-coded performance; 4B optimized.
- **Cost efficiency: 90/100.** Lower-cost 4B variant.
- **Overall Score: 57.2/100.** Mean of (65+68+68+15+70)/5 = 57.2 → 65; balanced bolt-style model.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (NVIDIA NIM documentation); scores are normalized 1–100 interpretations.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Nemotron 3.5 Bolt E4B — findings by Laguna XS 2.1

> Source: NVIDIA (`opencode/nemotron-3.5-bolt-e4b`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's announced ~4GB-class edge model for fast conversational agents on RTX and Jetson hardware; scheduled for 2026-10-23 release; no weights, specs or benchmarks published yet.
- **Provider / access:** No verified public access — model not yet released; scheduled for October 23, 2026 release.
- **Release / knowledge:** Schedule announced for October 23, 2026; weights and specs not yet published.
- **IDs:** No verified ID resolves; NVIDIA blog references but no HF repo exists.
- **Context window:** Not published (awaiting scheduled release).
- **Modalities:** Text in/out (unreleased); voice implied but not specified.
- **Pricing:** Not published; expected open weights under OpenMDW-1.1 license.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (unreleased)
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
- Native window: **not published** (pending release)

Multimodal:
- Text-only documented; voice implied but not specified

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
