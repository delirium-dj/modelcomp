# GLM 5.2 — findings by Qwen 3.8 Flash

- Source: Z.AI / Zhipu (`opencode/glm-5.2`; weights `zai-org/GLM-5.2`, MIT)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's previous-generation open-weights flagship — a **1M-context MoE (`glm_moe_dsa`, ~754B-class, MIT)** released 2026-06-13, strongest-in-class on τ²-Telecom tool use (**99.1%, #1**) with GPQA up to 91.9% at max reasoning effort. The base model behind the separately-scored `glm-5.2-coding` serving (my report there: 69).
- **Provider / access:** Z.AI API; ~30 OpenRouter providers (Baseten, Fireworks, DeepInfra, Novita…); open weights HF `zai-org/GLM-5.2`; free Zen tier listed in curated `meta.json` (`opencode/glm-5.2`).
- **Release / knowledge:** 2026-06-13 (BenchLeader); cutoff not verified.
- **IDs:** `zai/glm-5.2` / `opencode/glm-5.2` (Zen); HF `zai-org/GLM-5.2`.
- **Context window:** **1M native** (measured across providers); some low-cost hosts cap at 262K, and this Zen listing at **204K** (curated `meta.json`) — a serving-tier spread that matters to the Context score.
- **Modalities:** **Text in / text out**; reasoning with 9 measured effort settings; tool calls; JSON. No vision/audio rows exist — vision is the separate GLM-5V line. Curated `meta.json` ("Text in/out") is honest.
- **Pricing (as of 2026-10-02):** typical **$1.40 / $4.40 per 1M** (Z.AI/Baseten); fp8/fp4 floors ~**$0.56 / $1.76–1.80**; blended ~$0.64/$2.02; free Zen tier. Cost excluded from Overall.
- **Architecture:** open-weight MoE, MIT, low activation for fast decode (66–218 tok/s by provider).

### Raw benchmarks found

> Aggregated via the qualifying `Kimi_K3.md` (BenchLeader multi-source panel: AA / Epoch / Vals / LiveBench / LMArena / Scale SEAL, fetched 2026-09-24), cross-referenced with my `model/glm-5.2-coding/Qwen_3.8_Flash.md` (same base weights, coding-tuned serving). Max-effort numbers quoted; effort settings are a real variance source.

Agent / tool use:

- τ²-Bench Telecom (AA): **99.1% (#1)**; τ²-Banking (AA): 34.6% — bimodal: perfect structured telecom agents, weak banking
- Terminal-Bench 2.1: **77.9%** (AA; Vals 67.8); TB-Hard: 50.8%; **TB 4.0 (AA): 1.0%** (collapse on the hardest tier); MCP Atlas: 77.8% (#15)
- GDPval (AA): **42.9%**; APEX-Agents (AA): 33.7% (#6); LMArena Agent: **#4**

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Epoch #23) / 89.5 (AA) / 85.6 (Vals); HLE (AA): **41.1%** — clears the 40% bar unfurnished
- AIME 2026: 90.0; HMMT Feb 2026: 92.4; ARC-AGI-1 77.0 but **ARC-AGI-2: 22.8%**; CritPt 20.9; MMLU-Pro 86.7
- AA Intelligence Index: **33.7** (max effort, #77); BenchLeader Index #67/736; **AA-Omniscience: accuracy 24.3% / non-hallucination 73.7%** — decent honesty for the class

Coding:

- SWE-bench Verified (Epoch): **78.7%** (#5 of 33); SWE-bench (Vals): 82.8%
- LiveCodeBench (Vals): 69.5; SciCode (AA): 51.2; **DeepSWE: 43.8** (weak); Vibe Code v1.1 64.0; Code Migration 37.9
- SWE Atlas (Scale SEAL): Codebase QnA 48.1 (#5) / Refactoring 42.4 (#9) / Test Writing 41.5 (#10); LMArena WebDev 1600 (#21)

Long context:

- AA-LCR: **78.3%** within 1M; **no MRCR/RULER row**; some serving tiers cap the window well below native.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Consistency anchor: my `glm-5.2-coding` report scored the same weights (text-only 15 floor included) at 69 under a coding-serving lens.

- **Tool use: 82/100.** τ²-Telecom #1 at 99.1 + MCP Atlas 77.8 + LMArena Agent #4 is an elite top line, but TB 4.0 at 1.0%, banking at 34.6% and GDPval 42.9% show it breaks on the hardest/least-structured tiers — 2 below Kimi K3's 84 for that bimodality.
- **Reasoning: 81/100.** GPQA 89.5–91.9 across three lanes, HLE 41.1 unfurnished (rare), AIME/HMMT 90+, honest-ish Omniscience — held back by ARC-AGI-2 22.8 and AA Index 33.7 (#77). A point above the cohort's 82.3's nearest rater is unwarranted; 81 it is.
- **Context window: 88/100.** 1M native with AA-LCR 78.3 → top band discounted for no MRCR probe and the 204K/262K hosting spread; matches the qualifying read.
- **Multimodal: 15/100.** Text in/out, zero vision rows (band 10–20, mid). The folder cohort's 34.3 is inflated by raters crediting family/arena reputation this ID doesn't carry.
- **Coding: 82/100.** SWE-V 78.7 (#5) and SWE-Atlas placements are strong, but LCB 69.5, DeepSWE 43.8 and Code Migration 37.9 cap it below the 85+ frontier-coder band — a hair under the cohort's 80.8↔83 range midpoint.
- **Cost efficiency: 88/100.** $0.56–$1.40 in / $1.76–$4.40 out plus MIT self-hosting plus a free Zen tier — straddles the $1.25/$4.25→88 anchor with the floor pulling up and the ceiling pulling down. Cost excluded from Overall.
- **Overall Score: 70/100.** Mean of Tool 82, Reasoning 81, Context 88, Multimodal 15, Coding 82 = 348/5 = 69.6 → **70**. Best fit: **open-weights agentic text work at 1M context** — #1-tier structured tool use and top-5 SWE at fp4/fp8 prices, for teams that can host or accept a 204K Zen cap; not for multimodal or hardest-tier autonomy (TB4.0 1.0%). Lands below the cohort's 73.3 chiefly because this file holds the Multimodal floor firm at 15 and prices the TB4.0/ARC-AGI-2 tail honestly, and within 1 point of my coding-serving sibling (69) as it should be.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` BenchLeader aggregate (AA/Epoch/Vals/LiveBench/LMArena/Scale SEAL rows, 2026-09-24) + my own `model/glm-5.2-coding/Qwen_3.8_Flash.md` cross-reference + curated `meta.json` (204K Zen listing, free tier). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) the τ²-Telecom-99.1-vs-Banking-34.6 bimodality, (b) TB 4.0 1.0% as the autonomy ceiling, (c) 1M-native vs 204/262K served spread, (d) no MRCR row.
- Revisit trigger: if MRCR-1M or τ³ rows appear for `zai-org/GLM-5.2`, re-check Context/Tool; if the Zen free lane is retired, Cost notes here go stale (Overall unaffected).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
