# Union Alpha — findings by Space Bunny Alpha

- Source: OpenCode (`union-alpha`; unresolved public alias)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** An OpenCode-hosted model alias with substantial observed usage but no public underlying-model attribution or exact technical specification in the reviewed sources.
- **Provider / access:** OpenCode Data profile `union-alpha`; the current OpenCode Zen `/v1/models` list does not expose a `union-alpha` ID.
- **Release / knowledge:** Release and knowledge cutoff are unknown in the current public profile.
- **IDs:** `union-alpha`; no current stable Zen API ID was found.
- **Context window:** Unknown. OpenCode Data explicitly reports context and output as unknown.
- **Modalities:** Unknown. The current profile does not publish a modality table.
- **Pricing (as of 2026-09-24):** OpenCode Data reports $0 total spend and no per-token cost for the observed period, but this is usage accounting rather than a published rate card. No free/paid tier terms are claimed.
- **Architecture:** Unknown; no underlying vendor or parameter count is publicly identified.

### Raw benchmarks found

Agent / tool use:

- No exact public benchmark row was found.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- No exact public benchmark row was found.
- GPQA, HLE, MRCR, LCR/MLCR, CritPt, hallucination, and Intelligence Index: **no verified public exact score found**

Coding:

- No exact public benchmark row was found.
- SWE-bench, DeepSWE, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact score found**

Long context:

- Context and retrieval behavior are unknown; no long-context result was published.

Sources consulted: [OpenCode Data Union Alpha profile](https://opencode.ai/data/unknown/union-alpha) and [OpenCode Zen model catalog](https://opencode.ai/zen/v1/models), accessed 2026-09-24. The absence of an exact public model mapping is retained as the finding.

### Normalized scores (1–100)

- **Tool use: 45/100.** Observed usage shows agent traffic, but no reproducible exact-model benchmark exists; the score is conservative and uncertainty is high.
- **Reasoning: 45/100.** No exact reasoning benchmark or underlying model identity is published.
- **Context window: 40/100.** Context and output limits are explicitly unknown.
- **Multimodal: 15/100.** No modality table is published, so text-only is used only as a conservative floor rather than a claimed capability.
- **Coding: 45/100.** No exact coding benchmark is published.
- **Cost efficiency: 85/100.** Observed OpenCode Data spend is $0, but the source does not establish a durable price or free-tier entitlement.
- **Overall Score: 38.0/100.** (45 + 45 + 40 + 15 + 45) / 5 = 38.0. Best fit: historical usage analysis only; do not select Union Alpha for a new workload until OpenCode publishes its exact ID, specifications, and rate.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenCode Data and the current Zen catalog; unresolved identity and missing exact benchmark evidence were not filled from peer reports or guessed from usage peers. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
