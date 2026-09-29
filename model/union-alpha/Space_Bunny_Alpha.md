# Union Alpha — findings by Space Bunny Alpha

- Source: OpenCode (`union-alpha`; OpenRouter `stealth/union-alpha`; underlying model unattributed)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** An OpenCode-hosted / OpenRouter-listed stealth model alias with substantial observed usage and **no public underlying-developer attribution**. OpenRouter publishes concrete technical specifications for the route even though the model identity remains anonymous.
- **Provider / access:** OpenCode Data profile `union-alpha`. The OpenCode Zen model table and the live `https://opencode.ai/zen/v1/models` response were re-checked on 2026-09-29: **`union-alpha` is no longer present in the Zen free table**, and it is not in the Zen model ID list at all. The route is separately and currently documented on **OpenRouter as `stealth/union-alpha`**.
- **Release / knowledge:** Release date and knowledge cutoff remain unpublished. OpenRouter's page was first indexed 2026-09-16.
- **IDs:** `union-alpha` (OpenCode); `stealth/union-alpha` (OpenRouter, current live ID).
- **Context window:** **262,144 tokens** context with **131,072** maximum completion tokens (OpenRouter `stealth/union-alpha` specifications, accessed 2026-09-29; the OpenRouter compare page independently lists 262,144). This supersedes the previous "unknown" finding from 2026-09-24, when OpenCode Data still reported context and output as unknown.
- **Modalities:** **Text and image input, text output** (OpenRouter architecture metadata for `stealth/union-alpha`). OpenRouter describes Union Alpha as "a multimodal model built for research, coding, and agentic workflows, while delivering frontier-level performance across a broad range of general-purpose tasks." This supersedes the previous conservative text-only floor.
- **Pricing (as of 2026-09-29):** **$0 input / $0 output** — OpenRouter lists the model as **Free** (compare page price field: "Free"), consistent with its stealth-preview status. This is a preview entitlement rather than a durable rate card.
- **Architecture:** Unknown; no underlying vendor or parameter count is publicly identified. OpenRouter states Union Alpha is "a stealth model… developed and operated by a third-party provider who has chosen to remain anonymous during this preview," that OpenRouter routes requests to it but is not its developer, owner, or provider, and that prompts and completions may be retained by the provider but are not used for training. All use is governed by the Stealth Model Terms.

### Raw benchmarks found

Agent / tool use:

- No exact public benchmark row was found.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact score found**
- OpenRouter's marketing characterization ("built for research, coding, and agentic workflows") is a vendor description, not a measured result, and is not converted into a score.

Reasoning / knowledge:

- No exact public benchmark row was found.
- GPQA, HLE, MRCR, LCR/MLCR, CritPt, hallucination, and Intelligence Index: **no verified public exact score found**

Coding:

- No exact public benchmark row was found.
- SWE-bench, DeepSWE, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact score found**

Long context:

- **262,144-token context window and 131,072-token maximum completion** are published specifications (OpenRouter), but no retrieval-at-length or long-context benchmark result was published. The capacity is documented; the retrieval behavior is not measured.

Sources consulted: [OpenRouter `stealth/union-alpha`](https://openrouter.ai/stealth/union-alpha), [OpenRouter compare view](https://openrouter.ai/compare/stealth/union-alpha), [OpenCode Data Union Alpha profile](https://opencode.ai/data/unknown/union-alpha), [OpenCode Zen model catalog](https://opencode.ai/zen/v1/models), and [OpenCode Zen documentation](https://opencode.ai/docs/zen/), accessed 2026-09-29. An unverified third-party claim that Union Alpha is an "unbiased / Pareto-optimal" model was found in secondary discussion; it is **explicitly not adopted** here because no methodology, evaluation, or primary source supports it.

### Normalized scores (1–100)

- **Tool use: 45/100.** Observed usage shows agent traffic and the vendor describes agentic workflows, but no reproducible exact-model benchmark exists; the score is conservative and uncertainty is high.
- **Reasoning: 45/100.** No exact reasoning benchmark or underlying model identity is published.
- **Context window: 72/100.** Upgraded from 40: OpenRouter now publishes concrete limits of **262,144 context / 131,072 max completion**, which is above the 200K tier. It stops well below the 500K+ band because no retrieval-at-length result exists.
- **Multimodal: 60/100.** Upgraded from the 15 text-only floor: OpenRouter's architecture metadata specifies **text and image input with text output**, so image input is a documented capability. The score is moderate rather than high because no visual benchmark was published and the exact modality contract beyond text/image is not stated.
- **Coding: 45/100.** No exact coding benchmark is published. The third-party "unbiased/pareto" characterization is not adopted.
- **Cost efficiency: 70/100.** Downgraded from 85. OpenRouter lists the route as **Free ($0/$0)**, but it is explicitly a limited stealth preview with no published rate card, no Zen free-table presence as of 2026-09-29, and OpenRouter notes the provider may retain prompts and completions. The real price is currently zero but the entitlement's durability and Zen availability are both unestablished.
- **Overall Score: 53.4/100.** (45 + 45 + 72 + 60 + 45) / 5 = 267 / 5 = 53.4. Best fit: OpenRouter preview experimentation on coding/agentic and image tasks at zero cost; do not select Union Alpha for a production workload until a benchmark row appears or the developer is identified.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of the OpenRouter `stealth/union-alpha` model page and compare view, OpenCode Data, and the current Zen model catalog; unresolved identity and missing exact benchmark evidence were not filled from peer reports or guessed from usage peers, and an unverified third-party quality claim was explicitly rejected. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Union_Alpha_Update.md`, using the same headings.
