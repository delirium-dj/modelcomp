# GLM 5.1 — findings by Qwen 3.8 Max

- Source: Z AI (`glm-5.1`; id `opencode/glm-5.1`; AA `glm-5-1`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Z AI's April-2026 open-weight long-horizon agentic coding flagship — a **744B-total / 40B-active MoE (MIT)**, **200K context**, **reasoning**, **text-only**, built to sustain **8-hour autonomous** coding sessions on self-hosted weights. At release it was genuinely SOTA-tier: vendor **SWE-bench Pro 58.4%** (reported above GPT-5.4, Claude Opus 4.6, Gemini 3.1) and **#3 on Code Arena**, with an **independent Vals AI Terminal-Bench 2.1 of 56.9%** corroborating real agentic skill. Now **deprecated** (AA flags GLM-5.2 as the successor; Z AI's path points to GLM-5.3), so the **AA Intelligence Index is N/A** and hosted pricing is expensive ($1.28/$4.07). Best-fit: a self-hostable MIT multi-hour coding agent — but validate against the newer GLM releases first.

## Model card

- **Name:** GLM 5.1 (vendor "GLM-5.1"; AA renders "GLM-5.1 (Reasoning)")
- **Short description:** Z AI's open-weight 744B/40B-active MoE for long-horizon agentic coding; the successor to GLM-5 and the release **before** GLM-5.2 / GLM-5.3. Text-only, reasoning. A distinct shipped artifact — **not** GLM-5, GLM-5.2, GLM-5.2-coding, or any GLM-5.3 variant.
- **Provider / access:** HuggingFace `zai-org/GLM-5.1` (MIT weights, self-host $0); Z.ai first-party API; **6 API providers** per AA (good coverage). Zen price = Z.ai list price. No Free ID (`noFreeId`).
- **Release / knowledge:** Released **2026-04-07** (AA FAQ; coverage 2026-04-08). **Deprecated** — AA continues only the default 10k-input workload; GLM-5.2 launched as the successor. Knowledge cutoff not independently confirmed.
- **IDs:** `opencode/glm-5.1` (no standing Free ID on Zen)
- **Context window:** **200K** (AA spec table + FAQ agree; meta 202,752 nominal, 200K–204,800 served); **128,000 max output** (meta).
- **Modalities:** Text in → text out. **TEXT-ONLY** (AA FAQ: "does not support image input… not multimodal"). **Reasoning** (AA: extended thinking / chain-of-thought). Native agentic / tool use for multi-hour coding.
- **Pricing (as of 2026-10-30):** AA median **$1.28 / $4.07** per 1M in/out ("expensive" vs $0.50 / $2.10 medians), **80% cache discount**, blended $0.85. Z.ai list **$1.40 / $4.40** ($0.26 cached input). Self-host **$0** (MIT).
- **Architecture:** Open-weight MoE, **744B total / 40B active** per token (AA-confirmed — resolves the "754B" figure that circulates in some coverage as an error), **MIT license** (commercial use allowed). TTFT 1.67s (≈ the 1.66s open-weight median).

### Raw benchmarks found

> The AA **Intelligence Index is N/A** on v5.0 (GLM-5.1 is deprecated and not among the 29 of 718 scored). AA independently measures **Speed** and **Cost**. Capability numbers below are **vendor (Z AI)** plus one **independent** source (Vals AI Terminal-Bench 2.1) and third-party coverage (marktechpost).

Agent / tool use:

- Terminal-Bench 2.1: **56.9%** (**Vals AI — independent**), corroborating real agentic terminal skill (mid-tier absolute, but independently measured rather than vendor-only).
- **8-hour autonomous execution** (vendor standout): sustains multi-hour agentic coding sessions, treating context "as an environment it can explore" — a genuine long-horizon differentiator.
- GDPval-AA / AutomationBench-AA / FrontierCode: N/A (AA Index not scored)

Reasoning / knowledge:

- AA Intelligence Index: **N/A** on v5.0 (deprecated, not scored).
- Reasoning model (AA-confirmed); **#3 on Code Arena** at release (third-party, Elo-style coding leaderboard).

Coding:

- SWE-bench Pro: **58.4%** (vendor; marktechpost corroborates it as SOTA at release, reported above GPT-5.4, Claude Opus 4.6, and Gemini 3.1). SWE-bench Pro is harder than SWE-bench Verified. No independent SWE-bench Verified score found.

Long context:

- **200K** window (AA spec + FAQ); the multi-hour agentic framing is about sustained tool-use over long sessions rather than a raw retrieval benchmark. No independent MRCR / RULER score found.

Speed / cost (AA-measured, independent):

- Output speed **76.9 tok/s**, **#36/78** (3 of 4 units; above the 74 median).
- TTFT **1.67s** (≈ median 1.66s). Cost $1.28 / $4.07 (AA median), 80% cache discount, blended $0.85.

> **Meta-verification:** `meta.json` is accurate — id `opencode/glm-5.1` ✓, **744B/40B** ✓ (AA confirms; the "754B" in some coverage is the error), MIT ✓, 200K (202,752 nominal) ✓, 128K max out ✓, text-only ✓, SWE-bench Pro 58.4% ✓, Terminal-Bench 2.1 56.9% (Vals AI) ✓, $1.40/$4.40 with $0.26 cached ✓, `noFreeId` ✓. **Flags:** (1) **DEPRECATED** — AA explicitly flags GLM-5.2 as the successor (meta's tradeoff points further to GLM-5.3); (2) the **"GLM-5.1-Coding" name exists only as a dataset label** — no vendor, model card, or route ever carried it, so no `-coding` SKU benchmarks may be attributed here (reattribution guard); (3) **AA Index N/A** → the only independent capability signal is Vals TB2.1 56.9%; (4) hosted cost is "expensive" ($1.28/$4.07 AA median).

### Normalized scores (1–100)

- **Tool use: 78/100.** Independent **Vals AI Terminal-Bench 2.1 56.9%** plus the genuinely notable **8-hour autonomous** long-horizon agentic capability — better-corroborated than vendor-only peers (hy3, LongCat 2.0), though 56.9% is mid-tier in absolute terms and the model is now deprecated.
- **Reasoning: 78/100.** Confirmed reasoning model (AA), 744B/40B scale, SOTA-tier coding at release and Code Arena #3, but the **AA Intelligence Index is N/A** (deprecated) so there is no independent reasoning Index — capped below frontier reasoning models.
- **Context window: 76/100.** **200K** total (AA spec + FAQ agree; 128K max out). Solid mid-tier window; the multi-hour agentic strength is about sustained tool use, not a larger raw window — well below the 1M of LongCat 2.0 / frontier.
- **Multimodal: 50/100.** Text-only — AA FAQ confirms no image input. Text-only floor.
- **Coding: 80/100.** Vendor **SWE-bench Pro 58.4%** (SOTA at release, reported above GPT-5.4 / Claude Opus 4.6 / Gemini 3.1), **#3 Code Arena**, and independent Vals TB2.1 56.9% — a strong, well-corroborated coding flagship, held below elite because the AA Index is N/A and it is now superseded.
- **Cost efficiency: 74/100.** MIT open-weight (self-host **$0**) is a plus, but hosted is "expensive" ($1.28/$4.07 AA median; $1.40/$4.40 Z.ai list; blended $0.85, 80% cache discount) and a 744B model is very heavy to self-host. Not counted in Overall.
- **Overall Score: 72/100.** Mean of the five quality dims (78+78+76+50+80)/5 = 72.4 → 72. Divergence **+2.4** vs curated 69.6. The independently-corroborated coding/tool skill and 8-hour agentic horizon lift it, but the text-only floor (50), 200K window, deprecation, and absent AA Index hold it to a strong-but-superseded open-weight coder. Best-fit: a self-hostable MIT multi-hour coding agent — check GLM-5.2/5.3 first.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-30
- Method: public internet research (Artificial Analysis `glm-5-1` page incl. FAQ + deprecation banner, Z AI blog, marktechpost GLM-5.1 launch coverage, Vals AI Terminal-Bench 2.1, Code Arena); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
