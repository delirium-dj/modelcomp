# Mistral Large 3 — findings by Qwen 3.8 Flash

- Source: Mistral AI (`mistral-large-3` / "Large 3 2512", curated id `opencode/mistral-large-3`), cross-checked against Artificial Analysis, Mistral launch coverage and independent surveys
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note:** the curated `meta.json` is a **scaffolded placeholder** ("128K / Text in-out / Standard pricing"). First-party + AA evidence overrides it: Mistral Large 3 is a **675B-total / 41B-active** Apache‑2.0 open-weights MoE with a **256K** window and **text + image** input. It is the **predecessor of `mistral-large-4`** (queue 85) and is now **deprecated** on AA, so the current independent Intelligence Index reads **N/A** for the non-reasoning endpoint — which caps reasoning/tool confidence below Large 4.

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's most capable open-weight model of its generation (released **2025-12-02**) — a 675B/41B-active sparse MoE with native vision, positioned as a strong general/coding/multimodal instruct model. Since superseded by **Mistral Large 4** (2026-10-06); AA now benchmarks Large 3 only on a reduced (deprecated-model) cadence.
- **Provider / access:** Mistral **La Plateforme** API + Hugging Face weights (**Apache 2.0**, self-hostable); 3 live API providers per AA; also cloud marketplaces. Chat Completions + vision.
- **Release / knowledge:** released **2025-12-02**; knowledge cutoff not published.
- **IDs:** `mistral-large-3` / "Large 3 2512".
- **Context window:** **256K tokens** (AA). No published MRCR/RULER retrieval absolute for this exact ID.
- **Modalities:** **text + image in; text out** (AA); the AA page measured the **non-reasoning** variant (a reasoning variant may exist).
- **Pricing (as of 2026-11-06):** **$0.50 / $1.50 per 1M** in/out (AA; blended ~$0.29, cache 90% off) + free Apache-2.0 self-host. AA 78 tok/s, TTFT 2.54s.
- **Architecture:** 675B total / 41B active sparse MoE, open weights.

### Raw benchmarks found

> Provenance: AA model page is independent for the *spec/price/speed* rows; the composite **Intelligence Index is N/A** for the deprecated non-reasoning endpoint, so general reasoning/knowledge absolutes are not independently confirmed here. Capability absolutes below are secondary/aggregator-sourced and flagged provisional.

Coding:

- SWE-Pro: **56.2%** (secondary coverage; provisional — not AA-same-harness)
- Quality-retention (multi-turn) leaderboard: ranked ~#69 region (secondary)

Reasoning / knowledge:

- MMLU-Pro: reported for the launch family (harder variant; **no independent AA same-harness absolute located** for this ID)
- GPQA Diamond / HLE / AA Intelligence Index: **no verified public score found** (AA Index N/A on the deprecated endpoint)

Agent / tool use:

- Terminal-Bench / τ² / GDPval / MCP-Atlas: **no verified public score found for this exact ID**

Long context / Multimodal:

- 256K window (AA); **no MRCR/RULER retrieval absolute**
- Vision: image input supported (AA); **no MMMU-Pro absolute located** for this ID

### Normalized scores (1–100)

- **Tool use: 60/100.** A capable generalist with tool/function calling and coding-agent adjacency, but **no verified agentic absolutes** for this exact (now-deprecated) ID — the missing independent evidence caps confidence.
- **Reasoning: 62/100.** Strong MMLU-Pro-class general knowledge for a 2025 open-weight flagship, but the AA Intelligence Index reads **N/A** here (deprecated non-reasoning endpoint) and it sits a full generation behind Large 4 — provisional mid-tier.
- **Context window: 78/100.** **256K** is a genuine strength for whole-document/long-form work; docked only for the absence of a published retrieval-quality absolute (MRCR/RULER).
- **Multimodal: 60/100.** Native **text + image in** (vision), text out — solid multimodal perception, but no audio/video input and no generation, and no published MMMU-Pro absolute.
- **Coding: 66/100.** SWE-Pro ~56.2 (provisional) reflects a good open-weight coder of its generation; held below the 2026 agentic-coding frontier and confidence-capped by secondary-only provenance.
- **Cost efficiency: 82/100.** Apache-2.0 self-host (free) plus $0.50/$1.50 (blended ~$0.29) is excellent value for a 675B MoE.
- **Overall Score: 65.2/100.** Half-up mean of the five quality dims (60+62+78+60+66)/5 = 65.2 (Cost excluded). Best fit: teams wanting a **sovereign, Apache-licensed, vision-capable open-weight flagship** at one generation's remove from the frontier. Scores are deliberately confidence-capped: this ID is **deprecated on AA with no current Intelligence Index**, so reasoning/tool/coding rest on provisional secondary evidence rather than same-harness measurement.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-06
- Method: public internet research — Artificial Analysis "Mistral Large 3" model page (675B/41B MoE, Apache 2.0, 256K ctx, text+image in / text out, non-reasoning endpoint with **Intelligence Index N/A**, $0.50/$1.50 blended $0.29, 78 tok/s, 3 providers, **deprecated** — superseded by Large 4 Preview) plus secondary capability coverage (SWE-Pro 56.2, MMLU-Pro family) and an academic survey noting the 2025-12 release. The scaffolded `meta.json` (128K/text/Standard) is overridden with AA specs. Vendor/aggregator provenance is flagged inline and provisional numbers marked; **no independent AA Intelligence Index absolute exists for this ID**, so no reasoning/coding number is presented as same-harness. Scores are normalized 1–100 interpretations, not official scores.
- Reference URLs:
  - [Artificial Analysis — Mistral Large 3 model page](https://artificialanalysis.ai/models/mistral-large-3)
  - [Artificial Analysis — Mistral Large 4 (successor) announcement](https://artificialanalysis.ai/articles/mistral-large-4-france-ai)
  - [The Model Index — Mistral Large 3 2512 (SWE-Pro 56.2, coverage)](https://www.themodelindex.ai/)
- Revisit trigger: a reasoning-variant AA Intelligence Index row for Large 3, or independent same-harness GPQA/HLE/SWE-bench Verified/MMMU-Pro absolutes that replace the provisional secondary numbers.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
