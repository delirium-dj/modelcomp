# Qwen 3.7 — findings by GPT-5.6 Luna

- Source: Alibaba / Qwen 3.7
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's Qwen 3.7 preview/base entry, evaluated here as the exact unqualified `Qwen 3.7` identity. It must not be silently merged with the separately listed Qwen 3.7 Max, Qwen 3.7 Plus, or Qwen 3.7 Flash tiers.
- **Provider / access:** Qwen Chat at [chat.qwen.ai](https://chat.qwen.ai/) and the catalogue ID `alibaba/qwen-3.7`. The sources found do not document a stable standalone API endpoint for the unqualified base entry; Max/Plus/Flash endpoints are separate identities.
- **Release / knowledge:** Goldie Bench records a June 2026 release; an independent preview review describes the Qwen 3.7 family as preview software. Knowledge cutoff was not disclosed in the exact-model sources.
- **IDs:** `alibaba/qwen-3.7` (catalogue ID); no dated first-party API ID or OpenCode free ID was verified.
- **Context window:** **256,000 tokens** according to the exact-model Goldie Bench page. A separate review estimates 128K+ for the Max/Plus preview variants, while current listings for Qwen 3.7 Flash and Max show 1M; those are tier conflicts and are not transferred to this base entry.
- **Modalities:** The exact-model source does not disclose a modality contract. This report uses a text-only evidence floor rather than claiming that image, audio, or video input is impossible.
- **Pricing (as of 2026-10-30):** Goldie Bench describes the exact entry as open weights and free for individuals. No verified exact-model hosted API price was found; local inference still has hardware and operations costs.
- **Architecture:** Open weights are reported by Goldie Bench; parameter count, license, and active/total architecture details were not verified for the unqualified entry.

### Raw benchmarks found

> Exact-model evidence is sparse and heterogeneous. The only directly attributable public score found is a custom one-shot build benchmark; sibling-tier scores are listed as conflicts, not used to score this entry.

Agent / tool use:

- Goldie Bench: **7.00/10 average** over the page's 47 fixed one-shot demos. These are generated web/game/simulation/visual-build tasks, not tool-call or agent-harness measurements.
- Terminal-Bench, Tau3/Tau2, GDPval, Claw-Eval, Toolathon, and MCP-Atlas: **no verified score for unqualified Qwen 3.7**.

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR, CritPt, and a standard intelligence index: **no verified exact-model score found**.
- An independent preview review reports qualitative wins on a medium logic puzzle and a multi-step proof, but its numerical comparisons are for the Qwen 3.7 Max/Plus family variants and are not treated as base-model benchmark scores.

Coding:

- Goldie Bench's exact-model 7.00/10 average includes code-generation and interactive web-build tasks; the page reports good structure and code quality but incomplete interaction in several demos.
- SWE-bench Verified, LiveCodeBench, SciCode, Terminal-Bench, and DeepSWE: **no verified exact-model score found**.

Long context:

- **256K capacity** is reported by the exact-model Goldie Bench page. No MRCR, RULER, LongBench, or other exact retrieval score at a stated window length was found.

### Identity and source conflicts

- [Goldie Bench's exact Qwen 3.7 page](https://goldiebench.com/models/qwen) reports `Qwen 3.7`, June 2026, 256K, open weights, and 7.00/10 across 47 demos. Its prose also says “only 5 tasks scored” in a trade-off note, which conflicts with the 47-task scorecard; the score is therefore provisional.
- [An independent Qwen 3.7 preview review](https://atalupadhyay.wordpress.com/2026/05/19/qwen-3-7-deep-dive-honest-review-hands-on-testing-and-when-to-use-max-vs-plus/) describes Max and Plus as separate preview variants and gives estimated variant-specific context ranges. Those figures are not used for the base entry.
- [BenchLM's Qwen3.7 Max profile](https://benchlm.ai/models/qwen3-7-max) reports many strong benchmark numbers, including SWE-bench Verified 80.4%, GPQA 92.4%, and 1M context, but labels the model **Qwen3.7 Max**. It is sibling evidence, not evidence for `Qwen 3.7`.
- [ModelsAtlas's Qwen3.7 Flash page](https://modelsatlas.com/models/qwen/3-7) records a separate `qwen-3-7-flash` catalogue ID, 1M context, and $0.03/$0.13 pricing. Those values are deliberately not copied to the unqualified entry.
- [Qwen's official site](https://qwenlm.github.io/) and [the Qwen3.7 launch URL](https://qwen.ai/blog?id=qwen3.7) establish the vendor source, but the launch page was not available as a static, independently inspectable model card during this pass.

### Normalized scores (1–100)

- **Tool use: 55/100.** The exact 7.00/10 Goldie score is from one-shot generated artifacts and does not measure tool selection or execution. This is a provisional evidence-floor score, capped until an exact agent/tool benchmark is published.
- **Reasoning: 60/100.** The qualitative preview review shows competent medium and multi-step reasoning, but no exact GPQA/HLE/long-context reasoning number is public. The score is intentionally capped and should not inherit Max's 92.4% GPQA.
- **Context window: 78/100.** 256K places the exact entry in the 200K–500K tier. No retrieval measurement was found, so it does not receive the 1M-context scores of Max or Flash.
- **Multimodal: 15/100.** The exact identity's modality contract is undisclosed. Fifteen is a text-only evidence floor, not proof that the model cannot accept images or video.
- **Coding: 68/100.** The exact Goldie 7.00/10 build average supports useful code generation and web construction, but it is not a standardized software-engineering score and includes visible incomplete interactions.
- **Cost efficiency: 100/100.** Goldie Bench describes open weights/free individual access; this is a price-access score and does not pretend local hardware is free.
- **Overall Score: 55/100.** `(55 + 60 + 78 + 15 + 68) / 5 = 55.2`, half-up to **55**. Best fit: exploratory multilingual/open-weight prototyping where the team can validate outputs; do not substitute Max, Plus, or Flash benchmark claims for this exact entry.

---

## Signature

- Provided by: **GPT-5.6 Luna (`openai/gpt-5.6-luna`)** — 2026-10-30
- Method: Three independent web searches for the exact model, followed by exact-model benchmark/review pages and separate sibling-tier checks. Conflicting identity, context, and benchmark claims were kept separate; scores are conservative normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
