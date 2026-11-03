# Claude Sonnet 4 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-sonnet-4`)
- Date: 2026-10-27 (UTC)
- Re-researched: 2026-11-03 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-03):** **Confirmation HOLD + provenance update — AA Intelligence Index now N/A; all five dimensions HOLD; Overall stays 78.** AA `claude-4-sonnet` still carries the **deprecation banner** (“Anthropic has launched a newer release, Claude 4.5 Sonnet”; only 10k-workload perf continues) and under the **v5.0 Intelligence Index now reports “N/A / Unknown out of 4 units”** for Intelligence/Speed/Cost — the draft’s **Index 17 (4/4 Estimated)** has been **retired** (AA no longer runs the harder v5.0 basket on deprecated models). This is a **measurement withdrawal consistent with deprecation**, NOT a capability change: Reasoning was already scored as “above-median-but-rebased, dated absolute Index,” and N/A **reinforces** that low-current-standing read — nothing to lift. **Modality text+image in → text out ✓; AA still quotes the legacy 1M beta window (production 200K, as the draft credits); knowledge Mar 1 2025 ✓.** **BenchLM `claude-4-sonnet` → 404**; independent coding cluster unchanged: **Epoch AI 61% / swebench.com Harness AI 74.80% / SWE-agent 66.60%** (vendor 72.7%). No new neutral row.
>
> **Curated reference updated:** queue L107 = **77.9** (draft cited 77 — stale). Gap moves from **+1.0** to **+0.1** (my 78 vs curated 77.9 — essentially aligned).

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's **May-2025 balanced-coding Sonnet** (released alongside Opus 4) — "steady, well-behaved edits that anchored countless early agentic pipelines." A strong launch-era coder (**SWE-bench Verified 72.7%** vendor; **61–74.8%** across independent harnesses) at 200K context and $3/$15, now **deprecated and retired from the Claude API (2026-06-15)** — still served on Bedrock and Google Cloud Vertex. Superseded by Claude 4.5 Sonnet and the Sonnet 5.x line. [2026-11-03 re-research: **confirmation HOLD; all five HOLD; Overall stays 78.** AA `claude-4-sonnet` now reports **Intelligence Index N/A** under v5.0 (deprecated — the draft’s Index 17 estimate retired); modality/200K/retired status re-confirmed; BenchLM 404. Curated 77→**77.9** (L107), gap +1.0→**+0.1**.]
- **Provider / access:** Anthropic API `claude-sonnet-4` (**retired 2026-06-15**), still on **AWS Bedrock** and **Google Cloud Vertex AI**. **Not on OpenCode Zen**; **no free tier** (`noFreeId: true`). Proprietary / closed weights.
- **Release / knowledge:** Released **May 22, 2025**; **knowledge cutoff March 1, 2025**. **Deprecated** (AA banner → Claude 4.5 Sonnet); retired from the first-party Claude API mid-2026.
- **IDs:** `anthropic/claude-sonnet-4`; AA `claude-4-sonnet` (non-reasoning).
- **Context window:** **200K standard** (Anthropic production), **64K max output**; a **1M-token beta** existed and is what **AA and some trackers still quote** (⚠ discrepancy flagged — the real production window is 200K).
- **Modalities:** **Text + image in → text out** (AA-confirmed). Extended thinking supported. No video/audio; text-only output.
- **Pricing (as of 2026-10-27):** **$3 / $15** per 1M in/out; **$0.30 cached read, $3.75 cached write**. Premium flagship-era pricing for a now-deprecated mid-tier model.
- **Architecture:** Proprietary; parameters undisclosed. Balanced Sonnet-tier with optional extended thinking.

### Raw benchmarks found

> Independent anchors: **Artificial Analysis** (`claude-4-sonnet`, deprecation-flagged but with a **full 4/4-unit** Estimated Index), **Epoch AI** (independent SWE-bench Verified harness run), and **swebench.com** (two harness rows). Vendor figure (72.7% / 80.2% high-compute) is Anthropic's launch claim. Launch-era AIME/GPQA vendor numbers are not re-verified here since the model has been deprecated and rebased.

Independent (current, rebased):

- **AA Intelligence Index (Non-reasoning): 17 (Estimated), #43/297 — "well above average"** among comparable non-reasoning models (median 7), with a **full 4 of 4 units** (a relatively strong estimate despite deprecation). AA: "amongst the leading models in intelligence when comparing to other non-reasoning models."
- **SWE-bench Verified (independent harnesses):** **Epoch AI 61% (±2%)**; **swebench.com — Harness AI 74.80%** (2025-07-31) and **SWE-agent 66.60%** (2025-05-22). A harness-dependent cluster of **~61–75%**.

Vendor (Anthropic, launch):

- **SWE-bench Verified 72.7%** (**80.2%** in the high-compute setting) — sits inside the independent 61–75% band's upper range. Positioned at launch for balanced coding (Opus 4 was the "world's best coding model"; Sonnet 4 the balanced sibling).

> Provenance: AA Index 17 (4/4-unit estimate, well above the non-reasoning median) and the independent SWE-bench runs (Epoch 61%, Harness AI 74.80%, SWE-agent 66.60%) are neutral; the 72.7%/80.2% are vendor. The independent SWE cluster (~61–75%) brackets the vendor claim, so coding is well-corroborated but mid-range by Oct-2026 leader standards (95%+). No Vals SWE row or Epoch ECI composite was located for Sonnet 4 specifically (Epoch's ECI page now leads with Opus 5.5 / Sonnet 5.5).
> Meta verification: **accurate** — May 2025 ✓, **$3/$15** + $0.30/$3.75 cache ✓, **SWE-bench Verified 72.7% (80.2% high compute)** ✓ (matches Anthropic launch), **retired from Claude API 2026-06-15** ✓, "still on Bedrock and Google Cloud" ✓, "gone from Zen" ✓, text+image ✓ (AA). **One flag:** context — meta correctly notes **200K is Anthropic's production window while AA/trackers quote the old 1M beta**; I score the 200K reality and treat 1M as a legacy beta. AA also confirms knowledge cutoff **Mar 2025** and deprecated status.

> **Independent (added 2026-11-03, AA + BenchLM):** **Confirmation HOLD + provenance update.** AA `claude-4-sonnet` remains **deprecated** and now shows **Intelligence Index / Speed / Cost all “N/A / Unknown out of 4 units”** — the draft’s **Index 17 (4/4 Estimated)** is **retired** under the v5.0 basket (AA does not run the harder set on deprecated models). **No new capability signal** — the removal confirms, not reverses, the dated/rebased standing, so Reasoning stays 77. **Modality text+image → text, 1M beta (production 200K), Mar-2025 cutoff** all re-confirmed. **BenchLM 404**; independent coding cluster **unchanged** (Epoch 61% / Harness AI 74.80% / SWE-agent 66.60%). All five HOLD; Overall stays 78.

### Normalized scores (1–100)

- **Tool use: 80/100.** The Sonnet line is built for agentic editing — extended thinking + tool use, and it "anchored countless early agentic pipelines." Independent coding-agent harnesses (SWE-bench 61–74.8%) double as agentic evidence. Held below the successor 4.5 (82) because it's older, deprecated, and retired from the first-party API. [2026-11-03: **HOLD at 80** — no new independent agentic data (BenchLM 404, AA Index N/A); deprecation/API-retirement cap persists.]
- **Reasoning: 77/100.** **AA Index 17 (4/4 units) is "well above average"** for its non-reasoning class (median 7) — a decent signal — but the **absolute** Index is dated (current frontier open-weight models score 42–45), and it's a deprecated May-2025 model. Above-median-but-rebased band. [2026-11-03: **HOLD at 77** — the draft’s “AA Index 17 (4/4 est)” is now **N/A** under v5.0 (not run on deprecated); removal **reinforces** the dated/low-current-standing read, provides no lift.]
- **Context window: 76/100.** **200K standard / 64K output** — the 200K tier. The **1M was a legacy beta** (what AA quotes), not the production window, so it isn't credited at the 1M tier. Sits just below Sonnet 4.5 (77) reflecting its older/retired status. [2026-11-03: **HOLD at 76** — 200K production window re-confirmed (AA still quotes legacy 1M beta, not credited); no post-deprecation LCR.]
- **Multimodal: 78/100.** **Text + image in → text out** (AA-confirmed). Verified image-input tier; no video/audio, text-only output. [2026-11-03: **HOLD at 78** — AA re-confirms **text+image → text**; no new multimodal data. Image tier unchanged.]
- **Coding: 79/100.** The defining use case. Independent **SWE-bench Verified 61% (Epoch) / 66.60% (SWE-agent) / 74.80% (Harness AI)** corroborate the vendor **72.7%** — a well-evidenced but **mid-range** coder by Oct-2026 standards (current leaders 95%+), and deprecated. Strong-published/independent-corroborated tier. [2026-11-03: **HOLD at 79** — independent SWE cluster **unchanged** (Epoch 61% / Harness AI 74.80% / SWE-agent 66.60%); no new neutral row; deprecated.]
- **Cost efficiency: 68/100.** **$3/$15** is premium flagship-era pricing for a now-deprecated, API-retired mid-tier model — poor current value versus cheaper successors and current leaders, though $0.30 cached reads help batch workloads. Not counted toward Overall. [2026-11-03: **HOLD at 68 (excluded)** — $3/$15 premium for an API-retired mid-tier; unchanged.]
- **Overall Score: 78/100.** *(2026-11-03: Confirmation HOLD — all five HOLD; AA Index now N/A on this deprecated model (v5.0 not run), reinforcing the dated/rebased standing; Overall stays 78.)* Mean of Tool 80 + Reasoning 77 + Context 76 + Multimodal 78 + Coding 79 = 390 / 5 = 78.0 → 78. Best fit: the **balanced-coding Sonnet of the 200K era** — dependable, well-behaved agentic edits with independently-corroborated ~61–75% SWE-bench — but **deprecated and retired from the Claude API (2026-06-15)**. Pin it only to preserve old pipeline behavior (Bedrock/Vertex); use **Claude 4.5 Sonnet / Sonnet 5.x** for anything new. **Divergence note:** curated queue **77.9** (L107) vs my 78 → **+0.1** (essentially aligned; 2026-11-03 refresh from draft’s stale 77/+1.0). The multi-harness SWE-bench corroboration nudge it just above the curated score (the earlier “full-4/4-unit AA Index 17” is now retired to N/A under v5.0, but the above-median-for-its-class read held); deprecation, API retirement, 200K-not-1M context, and premium $3/$15 pricing keep it from higher. Consistent with — and one point below — its successor claude-sonnet-4.5 (79), as expected for the older, retired predecessor.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27; re-researched **2026-11-03** by Qwen 3.8 Max (AA `claude-4-sonnet` now shows **Intelligence Index N/A** under v5.0 for deprecated models — provenance update, no dimension change; modality/200K/retired status re-confirmed; BenchLM 404, independent SWE cluster unchanged; all five HOLD, Overall stays 78; curated L107 refreshed 77→77.9, gap +1.0→+0.1).
- Method: public internet research (Artificial Analysis `claude-4-sonnet` non-reasoning page, deprecation-flagged with a full 4/4-unit Estimated Index; Epoch AI independent SWE-bench Verified run for 61%; swebench.com leaderboard for Harness AI 74.80% / SWE-agent 66.60%; Anthropic "Introducing Claude 4" news for the 72.7%/80.2% vendor figures and release date; Anthropic pricing/API-retirement notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
