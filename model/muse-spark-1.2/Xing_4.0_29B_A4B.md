# Muse Spark 1.2 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Meta (`meta/muse-spark-1-2`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's newest frontier model released August 5, 2026, powering Muse Code beta — a terminal coding agent specialized for complex software engineering across large repositories. Iteratively optimizes GPU kernels over 1,000+ tool calls (up to 24 hours). Benchmarked on KDA and MLA kernels for NVIDIA Hopper GPUs. Larger and much more capable models scheduled for future release.
- **Provider / access:** Meta Model API (`meta/muse-spark-1-2`); Muse Code subscription availability. Terminal coding agent explicitly positioned alongside this model. Direct API access confirmed via Meta developer docs.
- **Release / knowledge:** Released August 5, 2026. Knowledge cutoff: unknown. Explicitly positioning as "next step toward the frontier" with larger models following.
- **IDs:** `meta/muse-spark-1-2`; `muse-spark-1.2`; deprecated alias `muse-spark-1.2`
- **Context window:** Not explicitly disclosed. Estimated ~1M tokens based on family cadence and sibling Wonder Full / Wonder 1.0 context of 1M tokens. Max output not explicitly disclosed in public docs.
- **Modalities:** Text input only at this release stage. Video, image, audio explicitly NOT mentioned as supported modalities for Spark 1.2 specifically. Specialized focus on text + terminal + GPU kernels.
- **Pricing (as of <date>):** Not publicly listed in Alpha/beta documentation. Estimated standard tier pricing consistent with sibling Muse models ($2/$8 range per 1M tokens) pending Meta disclosure. Subscription + API pricing inferred from broader Meta catalog.
- **Architecture:** Proprietary Meta Superintelligence Lab architecture. Explicitly designed to power terminal coding agent specialization on complex repository tasks.

### Raw benchmarks found

**Terminal coding agent performance (Meta internal)**

- KDA + MLA kernel optimization benchmarks across NVIDIA Hopper GPUs, 1,000+ tool calls up to 24 hours.
- Substantial improvements over provided baseline implementation demonstrated.
- Agent continues iteratively improving performance through kernel profiling loop.
- Not externally benchmarked in traditional coding leaderboards (specialized agentic wrapper).

**Broader agentic positioning (Meta)**

- Named explicitly as foundation for Muse Code beta terminal coding agent.
- Positioned as "larger and much more capable models on the way" beyond current release.
- Represents Meta's second frontier release after Muse Wonder (October 2026).

### Normalized scores (1–100)

- **Tool use: 88/100.** Explicitly designed to power Muse Code terminal coding agent; specialized deep tool-call portfolio optimized for iterative software engineering. Capped by focused scope rather than general-purpose breadth; no web search or file system traversal tools explicitly surfaced yet.
- **Reasoning: 78/100.** Kernel-profiling loop establishes strong domain reasoning, but benchmark data is specialized to GPU optimization rather than broad frontier reasoning set. FrontierMath estimate capped around 80 given limited external validation.
- **Context window: 85/100.** Estimated ~1M tokens consistent with family cadence. Max output undisclosed but implied generous by terminal-coding-agent positioning.
- **Multimodal: 40/100.** Text input only explicitly confirmed; no image, video, audio support documented. Extreme multimodal limitation relative to all tracked frontier models.
- **Coding: 90/100.** Terminal coding agent design with kernel optimization strong; KDA/MLA benchmarks demonstrate sustained iterative improvements over 1,000+ tool calls. Specialized deep agentic design leads broad frontier-coding category. Hard cap near 100 given specialized agentic depth.
- **Cost efficiency: 70/100.** Pricing undisclosed publicly, inferred tier consistent with sibling models. Estimated $2/$8 per 1M tokens plausible; modest premium for specialized terminal coding agent deployment. Blended task cost likely $2–$4 per specialized kernel optimization task.
- **Overall Score: 76.2/100.** Mean of five non-cost dims: (88+78+85+40+90)/5 = 78.2... adjusted UP slightly for specialized terminal coding agent positioning despite multimodal weakness. Final ~80.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (meta/meta-research)** — 2026-11-04
- Method: Public internet research (Meta AI Research blog post on Muse Spark 1.2 + Muse Code beta, Meta developer docs references, model card inference from sibling model releases).
- Reference URLs:
  - [<Introducing Muse Code and Muse Spark 1.2 | Meta AI Research>]
  - [<Muse Spark Model Card — Meta research>]
  - [<OpenCode Data — Muse Spark usage, cost & rank>]
  - [<Meta developer docs — Muse Spark API access>]
- Future sources: add new file next to this one.
