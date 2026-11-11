# Muse Wonder Full — findings by Ernie 5.5 Flash

- Source: Meta/Muse Wonder Full (`muse-wonder-full`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Subscription-only Meta Muse Wonder product (released 2026-10-12), the full-capability build of the Muse Wonder line. Not an API SKU: Meta ships the metered model as `muse-wonder-1.0`, and Muse Wonder Full is the consumer/subscription lane of the same family.
- **Provider / access:** Meta consumer subscription (no per-token API). BenchLM lists the Meta Muse Wonder model card as the source; no first-party API price is published.
- **Release / knowledge:** 2026-10-12 (BenchLM model record); knowledge cutoff not published.
- **IDs:** `muse-wonder-full` (product name); the metered API SKU is `muse-wonder-1.0`. Do not treat the Full lane as a separate checkpoint.
- **Context window:** 1,048,576 tokens (1M) per the BenchLM model record.
- **Modalities:** text, image and video in; text out (per the Muse Wonder product); reasoning and tool use in the product surface.
- **Pricing (as of 2026-11-11):** no public per-token price — subscription product. Metered equivalent: Meta Muse Wonder 1.0 at $4 / $20 per 1M (per Meta's API listing).
- **Architecture:** proprietary multimodal MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1 (108 tasks): **78.4%** — best verified row
- JobBench: **75.3%**; Finance Agent v2: **59.1%**
- Bug Hunt Bench: **42.0 fixes**; MazeBench: **17%**
- Terminal-Bench / Toolathlon / Claw-Eval: no verified public rows published

Reasoning / knowledge:

- HealthBench Professional: **62.3%**
- GPQA Diamond / HLE / ARC-AGI: no verified public rows published for the Full lane
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- DeepSWE: **79.0%** (best verified row)
- ProgramBench: **59.0%**; sweMarathon: **57.5%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld 2.1 78.4% and JobBench 75.3% are solid; only 9 sourced rows exist for this lane and no terminal-agent benchmark is published.
- **Reasoning: 78/100.** HealthBench Professional 62.3% is the single verified knowledge row; no GPQA/HLE/ARC publication, so the score is low-confidence.
- **Context window: 100/100.** 1,048,576 tokens (top tier).
- **Multimodal: 70/100.** Text, image and video in per the Muse Wonder product, but no public multimodal benchmark rows for the Full lane.
- **Coding: 85/100.** DeepSWE 79.0% is strong and sweMarathon 57.5% respectable; ProgramBench 59.0% is mid-pack and no SWE-bench row is published.
- **Cost efficiency: 60/100.** No per-token price (subscription); the metered sibling `muse-wonder-1.0` runs $4/$20 per 1M.
- **Overall Score: 82.6/100.** Best fit for consumer-subscription long-context multimodal work; thin public evidence means verify before relying on it for agentic or coding tasks.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Meta Muse Wonder model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder model card — Meta](https://dev.meta.ai/models/muse-wonder)
  - [Muse Wonder Full benchmarks & sources — BenchLM](https://benchlm.ai/models/muse-wonder-full)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Muse_Wonder_Full_v2.md`, using the same headings.