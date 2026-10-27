# Claude Sonnet 3.7 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-sonnet-3.7`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's **February-2025 hybrid-reasoning pioneer** — the Sonnet that **introduced user-visible extended ("choose-your-depth") thinking** to the family, bridging fast non-reasoning replies and a deliberative reasoning mode in one model. A capable launch-era coder (**SWE-bench Verified 63.7%** vendor; **66.40%** under an independent scaffold) at 200K context and $3/$15, now **deprecated, retired from the Claude API (2026-02-19) and shut down entirely** — replaced by Sonnet 4.6+. Historical significance only.
- **Provider / access:** Anthropic API `claude-sonnet-3.7` (**retired 2026-02-19**, fully shut down). **Not on OpenCode Zen**; **no free tier** (`noFreeId: true`). Proprietary / closed weights.
- **Release / knowledge:** Released **February 2025**; **knowledge cutoff October 1, 2024**. **Deprecated** (AA banner → Claude 4 Sonnet); retired from the first-party API and shut down.
- **IDs:** `anthropic/claude-sonnet-3.7`; AA `claude-3-7-sonnet` (non-reasoning). The AA **reasoning variant page (`claude-3-7-sonnet-reasoning`) 404'd** on my pass.
- **Context window:** **200K standard**; **128K max output** per Anthropic (⚠ **models.dev lists 64K for the dated id** — discrepancy flagged; Anthropic's own figure is 128K).
- **Modalities:** **Text + image in → text out** (AA-confirmed). Extended thinking (hybrid reasoning) supported — the model's defining feature. No video/audio; text-only output.
- **Pricing (as of 2026-10-27):** **$3 / $15** per 1M in/out; **$0.30 cached read** (90% cache discount). Premium flagship-era pricing for a now-retired, shut-down mid-tier model — gateway rates only.
- **Architecture:** Proprietary; parameters undisclosed. Hybrid-reasoning Sonnet-tier (non-reasoning + extended-thinking modes in one checkpoint).

### Raw benchmarks found

> Independent anchors: **Artificial Analysis** (`claude-3-7-sonnet`, deprecation-flagged, only a **2/4-unit** Estimated Index — weak signal strength) and **swebench.com** (an independent scaffolded run). Vendor figures (63.7% / 70.3% high-compute) are Anthropic's launch claim. Launch-era AIME/GPQA vendor numbers are not re-verified here since the model has been deprecated, shut down, and rebased.

Independent (current, rebased):

- **AA Intelligence Index (Non-reasoning): 15 (Estimated), #32/57 — "below average"** among comparable non-reasoning models (**median 17**), with only **2 of 4 units** for Intelligence (a weak/partial estimate reflecting deprecation). AA: "below average in intelligence and somewhat expensive when comparing to other non-reasoning models of similar price." The reasoning-variant AA page is not available (404), so no reasoning-mode Index could be confirmed.
- **SWE-bench Verified (independent scaffold):** **swebench.com — "Aime-coder v1" 66.40%** for Claude 3.7 Sonnet. An independent (scaffold-assisted) corroboration sitting just above the vendor un-scaffolded figure.

Vendor (Anthropic, launch):

- **SWE-bench Verified 63.7%** without a scaffold (**70.3%** in the high-compute setting) — Anthropic's Feb-2025 launch claim, which also shipped **Claude Code** as the agentic harness alongside this model.

> Provenance: AA Index 15 (only a 2/4-unit estimate, below the non-reasoning median) is neutral but a weak signal; the swebench.com 66.40% (Aime-coder scaffold) is an independent run; the 63.7%/70.3% are vendor. The independent (66.4%) and vendor (63.7%) SWE figures cluster tightly in the **~64–66%** band — a well-corroborated but **mid-range** coder by Oct-2026 leader standards (95%+), and now deprecated/shut down. No Vals SWE row, Epoch ECI composite, or AA reasoning-mode Index was located for Sonnet 3.7 specifically.
> Meta verification: **largely accurate** — February 2025 ✓, hybrid-reasoning pioneer that introduced user-visible extended thinking ✓, **$3/$15** + $0.30 cached (90% discount) ✓, **SWE-bench Verified 63.7% (70.3% high compute)** ✓ (matches Anthropic launch), **retired from the API 2026-02-19** ✓, "shut down entirely and replaced by Sonnet 4.6+" ✓, text+image in → text out ✓ (AA), knowledge cutoff Oct 2024 ✓ (AA). **One flag:** context/max-out — meta correctly notes **200K total, 128K max out per Anthropic, while models.dev lists 64K for the dated id**; I score the 200K reality and treat Anthropic's 128K-out as authoritative over the 64K tracker figure.

### Normalized scores (1–100)

- **Tool use: 77/100.** The Sonnet line is built for agentic editing, and this model shipped **alongside Claude Code** (its launch harness) with extended thinking for multi-step tool use. But it's the oldest, deprecated, and **fully shut down** — held clearly below Sonnet 4 (80) and Sonnet 4.5 (82). Deprecated/retired-agentic tier.
- **Reasoning: 76/100.** **AA Index 15 (only 2/4 units) is "below average"** for its non-reasoning class (median 17) — a weak, partial estimate. Its historical significance is introducing **hybrid/extended thinking**, but the absolute Index is dated (current frontier open-weight models score 42–45) and the reasoning-mode AA page is unavailable. Below-median-and-rebased band; one point under Sonnet 4 (77, which had a full 4/4-unit Index 17).
- **Context window: 76/100.** **200K standard / 128K output** (Anthropic) — the 200K tier, same nominal window as Sonnet 4 but older and now shut down. Scored at the 200K tier (not credited higher for the disputed models.dev 64K figure).
- **Multimodal: 78/100.** **Text + image in → text out** (AA-confirmed). Verified image-input tier; no video/audio, text-only output. Same tier as Sonnet 4.
- **Coding: 77/100.** The defining launch use case (shipped with Claude Code). Independent **66.40% (Aime-coder scaffold)** corroborates the vendor **63.7%** — a tight **~64–66%** band, well-evidenced but **mid-range** by Oct-2026 standards (current leaders 95%+), and the model is deprecated/shut down. Below Sonnet 4 (79, ~61–75% band with a 72.7% vendor claim).
- **Cost efficiency: 66/100.** **$3/$15** is premium flagship-era pricing for a now-**retired and fully shut-down** mid-tier model — poor current value (you can't even call it first-party anymore), though $0.30 cached reads helped batch workloads when live. Not counted toward Overall.
- **Overall Score: 77/100.** Mean of Tool 77 + Reasoning 76 + Context 76 + Multimodal 78 + Coding 77 = 384 / 5 = 76.8 → 77. Best fit: the **hybrid-reasoning pioneer of the 200K era** — historically important as the Sonnet that introduced user-visible extended thinking and shipped with Claude Code, with tightly-corroborated ~64–66% SWE-bench — but **deprecated, retired from the API (2026-02-19), and shut down entirely**. Pin it only to document the lineage; use **Claude 4.5 Sonnet / Sonnet 5.x** for anything new. **Divergence note:** curated queue 76.2 vs my 77 → **+0.8** (tightly aligned). The independent 66.40% scaffold corroboration and the model's genuine historical significance (first extended-thinking Sonnet, Claude Code launch sibling) nudge it just above the curated score; the below-median 2/4-unit AA Index 15, deprecation, full shutdown, 200K context, and premium $3/$15 pricing keep it from higher. Consistent with — and one point below — its successor claude-sonnet-4 (78), as expected for the older, retired, fully-shut-down predecessor.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `claude-3-7-sonnet` non-reasoning page — deprecation-flagged, 2/4-unit Estimated Index 15 below median 17, 200K, text+image, knowledge Oct 2024; the reasoning-variant page `claude-3-7-sonnet-reasoning` 404'd; swebench.com leaderboard for the independent Aime-coder v1 66.40% SWE-bench Verified run; Anthropic "Claude 3.7 Sonnet and Claude Code" news for the 63.7%/70.3% vendor figures, Feb-2025 release, and Claude Code launch pairing; Anthropic pricing/API-retirement notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
