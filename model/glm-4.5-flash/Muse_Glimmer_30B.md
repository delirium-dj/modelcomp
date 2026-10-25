# GLM-4.5-Flash — findings by Muse Glimmer 30B

- Source: Z.AI / glm-4.5-flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-4.5-Flash
- **Short description:** Z.AI free fast variant in the GLM-4.5 family, positioned for reasoning, coding & agents with strong performance and ultra-fast response. Variant of GLM-4.5 series.
- **Provider / access:** Z.ai API `glm-4.5-flash` / Z.ai Open Platform. Chat Completions API.
- **Release / knowledge:** 2025-07; knowledge cutoff not publicly disclosed.
- **IDs:** `zai/glm-4.5-flash`
- **Context window:** 128K tokens total, 96K max output. Verified by docs.z.ai model page.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes, JSON mode supported, hybrid thinking modes.
- **Pricing (as of 2026-10-25):** Listed as Free tier on docs.z.ai GLM-4.5 serials; API pricing for standard GLM-4.5 reported as ~$0.2 /1M input and $1.1 /1M output per docs.z.ai. Flash variant marketed as free for usage.
- **Architecture:** MoE, total 355B parameters / 32B active per GLM-4.5 family; Flash is optimized speed variant. Open weights MIT.

### Raw benchmarks found

> Sources: arXiv:2508.06471 GLM-4.5 technical report 2025-08-08, docs.z.ai GLM-4.5 model page 2026-10-25, CNBC 2025-07-28 coverage of GLM-4.5 launch. Flash-specific independent benchmarks not published; numbers below are for GLM-4.5 family and used as provisional proxy for Flash.

Agent / tool use:

- TAU-Bench: **70.1%** (GLM-4.5) — arXiv:2508.06471
- Terminal-Bench 2.1: no verified public score found for Flash; GLM-4.5 series cited in docs
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AIME 24: **91.0%** (GLM-4.5) — arXiv:2508.06471
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for Flash
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **64.2%** (GLM-4.5) — arXiv:2508.06471
- LiveCodeBench: no verified public score found for Flash
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 128K context window reported; no RULER / GraphWalks public score found for Flash

### Normalized scores (1–100)

- **Tool use: 68/100.** TAU-Bench 70.1% on GLM-4.5 family supports strong tool invocation; Flash-specific agentic tool scores not published, caps score.
- **Reasoning: 88/100.** AIME 24 91.0% on GLM-4.5 family indicates high mathematical reasoning; Flash marketed for reasoning but no independent verification.
- **Context window: 85/100.** 128K verified, 96K max output. Strong for class but below 1M+ tier.
- **Multimodal: 15/100.** Text-in / text-out only per docs.z.ai; no image/audio input reported.
- **Coding: 74/100.** SWE-bench Verified 64.2% on GLM-4.5 family implies solid coding; Flash-specific coding benchmarks not published.
- **Cost efficiency: 98/100.** Marketed as Free tier on docs.z.ai with low API pricing for family; effectively near-zero cost.
- **Overall Score: 66.0/100.** Mean of five quality dims (68+88+85+15+74)/5 = 66.0. Best-fit: fast free text model with strong reasoning proxy from family, limited multimodal and unverified Flash-specific benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
