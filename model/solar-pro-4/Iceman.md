# Solar Pro 4 — findings by Iceman

- Source: Upstage/Solar Pro 4
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage’s Solar Pro 4 is a closed agentic flagship model (512K context, 128K output) optimized for Korean/Japanese enterprise agents, tool use, and reasoning/coding tasks.
- **Provider / access:** Upstage API / hosted providers (e.g. OpenRouter). Local metadata lists `upstage/solar-pro4`, pricing $0.30/$1.20 per 1M, and `noFreeId`.
- **Release / knowledge:** Official Upstage blog post reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `solar-pro4`, `upstage/solar-pro4`.
- **Context window:** 524,288 tokens (512K); 131,072 max output.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** $0.30/M input, $1.20/M output, $0.06 cached (Upstage/OpenRouter per metadata).
- **Architecture:** Proprietary closed model. Architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from the official Upstage Solar Pro 4 blog benchmark table/context (as reviewed via `webfetch`).

Agent / tool use:

- Terminal-Bench 2.1: **57.0%**
- APEX-Agents: **18.7%**
- Terminal-Bench 4.0: **0%** (as noted in local metadata)
- GDPval-AA Elo: **1106** (blog context; local metadata notes not 1277)

Reasoning / knowledge:

- GPQA Diamond: **89.0%**
- HLE: **27.6%**
- ARC-AGI-2: **54.2%**
- AA Intelligence Index: **35.4**

Coding:

- LiveCodeBench: **87.8%**
- SWE-bench Verified: **70.6%**

Long context:

- 512K context supported. No standalone numeric long-context retrieval benchmark extracted from reviewed blog.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Some agentic rows are modest.

- **Tool use: 74/100.** Moderate terminal/agent benchmark performance (Terminal-Bench 2.1 57.0%, APEX-Agents 18.7%) despite strong general agent positioning.
- **Reasoning: 82/100.** Strong science/reasoning and solid index signals (GPQA Diamond 89.0%, ARC-AGI-2 54.2%, HLE 27.6%, AA Intelligence Index 35.4).
- **Context window: 88/100.** 512K context and 128K output support for long workflows.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 84/100.** Strong coding performance (LiveCodeBench 87.8%, SWE-bench Verified 70.6%).
- **Cost efficiency: 86/100.** Competitive pricing for a flagship closed model ($0.30/$1.20).
- **Overall Score: 74/100.** Mean of the five non-cost dims (74, 82, 88, 40, 84) = 73.6 → 74. Best fit for text-only enterprise/reasoning and coding agents where long context and cost matter more than top-tier terminal-agent benchmarks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Upstage official blog and local metadata; scores are normalized 1–100 interpretations from vendor-published figures, not official vendor scores.
- Reference URLs:
  - [Solar Pro 4 blog (Upstage)](https://www.upstage.ai/blog/en/solar-pro-4)
  - [Solar Pro 4 (OpenRouter)](https://openrouter.ai/upstage/solar-pro4)
  - Local repository metadata consulted: `model/solar-pro-4/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
