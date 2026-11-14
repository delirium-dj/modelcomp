- Source: Meta/Muse Wonder Full
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** The full-capability flagship of Meta's Muse Wonder series (released 2026-10-12 alongside the lighter Muse Wonder). Designed for highest-quality reasoning and creative work, with "proactive memory" that persists and integrates user information across days to months. A distinct model from `muse-wonder-1.0` (the merged canonical base entry) and from the later lightweight Muse Ember; not an alias.
- **Provider / access:** Baidu Baike and VentureBeat report Muse Wonder Full is offered through the **Muse Code subscription** while only the weaker Muse Wonder is available via the Meta Model API; a third-party model guide separately lists an API rate card for Full. Both access routes are reported with their provenance rather than merged. Meta Model API / Muse Code; no free Zen ID verified.
- **Release / knowledge:** 2026-10-12; knowledge cutoff: no verified public score found.
- **IDs:** `muse-wonder-full` family ID as cited. No free Zen ID verified.
- **Context window:** 1,000,000 tokens; maximum output 32,768 tokens (Model Field Guide, dual-source verified 2026-11-12). Baidu Baike confirms a 1M window for the series.
- **Modalities:** Baidu Baike reports text, image, voice/audio and video input for the Muse Wonder series; the Model Field Guide lists Text + Image input for Full specifically. Text out. Proactive long-term memory, complex-task and document/financial/health-document reasoning. No verified non-text output.
- **Pricing (as of 2026-11-14):** **$1.25 / 1M input, $5 / 1M output, $0.125 / 1M cached input** (Model Field Guide, published 2026-11, verified 2026-11-12, citing ai.meta.com / llama.com). Separately, Baidu Baike reports tiered pricing with the base Muse Wonder as low as **$0.20 / 1M tokens** and Muse Wonder Full via a subscription of up to **$200 / month**. These are different access models and are reported separately.
- **Architecture:** Proprietary, closed weights — Meta signalled it would no longer prioritise open models with this release. Parameter count not disclosed. Muse Ember (2026-11-10) was the first model trained using Muse Wonder Full and is designed to pair with it (Wonder plans, Ember processes bulk data) in agent frameworks.

### Raw benchmarks found

Agent / tool use:

- SWE-Marathon (agentic software engineering): **57.5** — above Claude Opus 5.5's **46.3** and GPT-6 Astra's **42.5** (measured for the Full version per VentureBeat, cited by Baidu Baike)
- Meta reports Muse Wonder beats Claude Opus 5.5, Fable 5.1 and GPT-6 Astra on some technical benchmarks (directional; no per-benchmark numbers in the retrieved pages)
- Complex-task examples: understanding leases, interpreting financial or health information
- Proactive memory sustaining personalised assistant tasks over days-to-months of interactions
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **50.1**, global **#9** (Model Field Guide); a separate composite on the same page gives **58.9**, rank **#12**, tier B, with capability subscore 78.9 and 65% data confidence — reported as a different metric, not merged
- ARC-AGI / GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-Marathon **57.5** as above (best of the three compared models)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token window with 32,768 max output and proactive long-term memory; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 93/100.** A dominant SWE-Marathon 57.5 (vs Opus 5.5 46.3, GPT-6 Astra 42.5) plus long-horizon proactive memory and a documented planner/worker agent framework; capped by no scored τ-bench/OSWorld/GDPval figures for this exact ID.
- **Reasoning: 90/100.** AA Intelligence Index 50.1 at #9 globally, with vendor-reported wins over Opus 5.5 / Fable 5.1 / GPT-6 Astra on some benchmarks; capped by a moderate index score relative to the 65-point frontier and no GPQA/HLE/ARC figures.
- **Context window: 95/100.** Full 1M context (the lighter Wonder does not open the complete window) plus unique proactive memory across months of interactions; capped by a modest 32,768 max output and no published long-context retrieval score.
- **Multimodal: 92/100.** Text, image, voice and video input reported for the series (Text + Image confirmed for Full) with document/lease/financial/health comprehension; capped by text-only output and the modality-list discrepancy between sources.
- **Coding: 93/100.** Best-in-comparison SWE-Marathon 57.5 for a long-horizon agentic engineering benchmark; capped by no SWE-bench Verified / Terminal-Bench / LiveCodeBench figure.
- **Cost efficiency: 86/100.** A very cheap published $1.25/$5/$0.125 per-1M rate card; capped by the alternative up-to-$200/month subscription-only access and the reported API/subscription discrepancy. Excluded from Overall.
- **Overall Score: 93/100.** Half-up mean of 93, 90, 95, 92, 93 = 92.6 → 93. Best fit: long-running personalised agents and multi-day software-engineering tasks where persistent memory and a full 1M window matter most.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Muse Wonder article (release, series lineup, modalities, SWE-Marathon, subscription/access, proactive memory) and the Model Field Guide Muse Wonder Full page (context, max output, pricing, AA index, modality list). The two sources disagree on API availability and pricing structure, so both are reported with provenance and never merged; the guide's 50.1 AA index and 58.9 composite are likewise kept separate. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Muse Wonder — 百度百科 (release, Muse Wonder Full, SWE-Marathon, modalities, access)](https://baike.baidu.com/item/Muse%20Wonder/69364182)
  - [Muse Wonder Full 价格、参数与上下文 — Model Field Guide](https://www.airedirector.com/model/muse-wonder-full)
