# Claude Opus 4.4 — findings by Qwen 3.8 Flash

- Source: Anthropic (`claude-opus-4.4`; curated id `opencode/claude-opus-4.4`), cross-checked against third-party roundups (JPMorgan APAC intelligence-index commentary, Vellum/Morph Claude-benchmark tables, Vals SWE-bench) that reference the 4.x Opus lineage
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.4
- **Short description:** A **late-2025 point release in Anthropic's Opus 4.x flagship line** — the premium "archival" tier between the original Opus 4/4.1 and Opus 4.5. It carries the Opus family's hallmarks: **nuanced long-instruction following, strong agentic/computer-use behavior, and top-tier software engineering**, at the older **200K-context / $15–$75 premium pricing** that later Opus releases undercut. Subsequent patch references in the wild ("Opus 4.4.1", "Opus 4.4.8") show it was an actively maintained checkpoint during that window.
- **Provider / access:** Anthropic first-party API / Claude; premium paid tier.
- **Release / knowledge:** **late 2025** (Opus 4.x lineage; positioned before Opus 4.5's 2025-11-24 launch).
- **IDs:** `claude-opus-4.4`; lineage `claude-opus-4.5` → `4.7` → `4.8` → `Opus 5`; predecessor `claude-opus-4.1`.
- **Context window:** **200,000 total**; **64,000 max output**.
- **Modalities:** **text + image in**, text out; reasoning yes; agentic tool use / computer use yes.
- **Pricing (as of 2026-10-23):** **$15.00/M input, $75.00/M output**, **$1.50/M cached read** — the flagship premium (archival) price band.
- **Architecture:** Opus 4.x-class dense/frontier model.

### Raw benchmarks found

> **Provenance caveat (decisive here):** dedicated third-party benchmark rows published *specifically for the `4.4` checkpoint* are thin — the well-documented tables target Opus 4.5 / 4.7 / 4.8 / 5. Figures below are therefore anchored on the **Opus 4.x lineage** plus one independent composite mention, and treated as **lineage-inherited, not 4.4-exact-verified**. Anthropic's own launch numbers, where quoted, are vendor-run.

Reasoning / knowledge:

- **JPMorgan APAC commentary (independent)** lists "Claude Opus 4.4" among the **highest composite intelligence-index scorers, around 55–60** — grouped with GPT-5.5, Claude Fable 5 and GLM-4.5 — placing it in the frontier-adjacent tier of its generation.
- Opus 4.x-line **GPQA-Diamond ~85%** and high MMLU/HLE carried from the family (lineage figure, not a 4.4-specific reproduction).

Coding (Opus 4.x lineage):

- The Opus 4.x era led production code editing; **SWE-bench Verified in the high-70s / ~80%** for the line (Opus 4.1 reported ~80%, Opus 4.5 ~80.9%) — a strong but lineage-inherited figure for 4.4.
- No 4.4-specific SWE-bench Pro / Terminal-Bench absolute transcribed from an independent re-run.

Long context / multimodal:

- 200K window (no 1M tier); text+image input with the Opus line's strong vision; **no independent MRCR/RULER or vision-benchmark 4.4-specific score** cited.

### Normalized scores (1–100)

- **Tool use: 86/100.** The Opus line's signature strength — nuanced multi-step instruction following, agentic/computer-use, and long-horizon tool orchestration; scored high on family evidence, lightly discounted for lack of a 4.4-exact agent reproduction.
- **Reasoning: 88/100.** Frontier-adjacent: independently corroborated by JPMorgan's ~55–60 intelligence-index grouping (alongside GPT-5.5 / Fable 5), and consistent with Opus 4.x's ~85% GPQA-class depth. Docked only for the reasoning absolutes being lineage-inherited rather than 4.4-re-published.
- **Context window: 66/100.** A respectable **200K / 64K-output** window, but well short of the 1M class that later flagship models adopted; a genuine but dated ceiling — the clearest soft spot.
- **Multimodal: 62/100.** Text + image input with the Opus line's strong image reasoning — solidly above text-only — but no audio/video lanes and no 4.4-specific vision eval; moderate by design.
- **Coding: 88/100.** The Opus 4.x generation was the production-coding benchmark leader (lineage SWE-bench high-70s/~80%); a legitimately excellent coder, discounted slightly because no independent 4.4-exact SWE-bench Pro / Terminal-Bench row is on record.
- **Cost efficiency: 34/100.** The **archival premium band** — $15/$75 per 1M is among the priciest on the board (only partly eased by $1.50 cached reads). Later Opus releases dropped to $5/$25, making 4.4 poor value in hindsight.
- **Overall Score: 78/100.** Half-up mean of the five quality dims (86+88+66+62+88)/5 = 78. Best fit: **high-stakes nuanced instruction-following, agentic coding, and careful long-context reasoning** where Opus-quality output outweighed the premium price. Held below the current frontier because it is an **archival 4.x checkpoint**: a 200K-only window, no independent 4.4-exact benchmark reproduction (scores lean on family lineage), and a now-superseded $15/$75 cost band — strong on capability, weak on currency and value.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — third-party roundups and commentary (JPMorgan APAC webcast listing "Claude Opus 4.4" among ~55–60 top intelligence-index scorers beside GPT-5.5 / Fable 5 / GLM-4.5; Vellum & Morph Claude-benchmark tables and Vals SWE-bench documenting the Opus 4.x→5 lineage; wild references to Opus 4.4.1/4.4.8 patches confirming an actively maintained checkpoint). Curated `meta.json` (not scaffolded) supplies 200K/64K, text+image, and $15/$75/cached-$1.50. Scores are normalized 1–100 interpretations; because **no independent 4.4-exact benchmark row could be located**, capability dimensions are anchored on the **Opus 4.x lineage** and the one independent composite mention, clearly labeled as lineage-inherited rather than point-verified, and cost reflects the now-superseded premium archival band.
- Revisit trigger: an Artificial Analysis / Vals / third-party benchmark row published specifically for `claude-opus-4.4` (SWE-bench Verified, GPQA-Diamond, Terminal-Bench), replacing the lineage-inherited figures with a point-exact reproduction.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
