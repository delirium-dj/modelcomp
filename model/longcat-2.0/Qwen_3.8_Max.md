# LongCat 2.0 — findings by Qwen 3.8 Max

- Source: Meituan / LongCat (`longcat-2.0`; id `meituan/longcat-2.0`; AA `longcat-2-0`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Meituan's June-2026 open-weight flagship for autonomous coding agents — a **1.6T-total / 48B-active MoE (MIT)**, **1M context**, **reasoning**, **text-only**, pre-trained on 50K+ AI ASICs. Headline vendor numbers are strong (SWE-bench Pro 59.5%, "highest public among Chinese models," edging GPT-5.5's 58.6; Terminal-Bench 2.1 70.8%), but the **AA Intelligence Index is N/A** (not in v5.0's 29/718) and the one independent signal — AA's Terminal-Bench 2.1 ≈ **50.19%** — lands ~20 points below the vendor claim, the same vendor-inflation pattern seen across Chinese open-weight coders. Serving is heavy (TTFT 2.70s, only 1 API provider). Best-fit: a self-hostable MIT 1M-context agentic coder where you can validate the terminal numbers yourself.

## Model card

- **Name:** LongCat 2.0 (vendor "LongCat-2.0"; AA renders "LongCat 2.0")
- **Short description:** Meituan's open-weight 1.6T/48B-active MoE built for autonomous coding agents; the GA successor to LongCat-Flash (560B MoE, Sep 2025). Text-only, reasoning. A distinct shipped artifact — **not** the later `longcat-2.5-preview` (self-excluded, its only real table belongs here) nor `longcat-2.5`.
- **Provider / access:** HuggingFace `meituan-longcat/LongCat-2.0` (MIT weights, self-host $0); OpenRouter `meituan/longcat-2.0`; SiliconFlow. **AA lists only 1 API provider** (thin hosted access). Not on OpenCode Zen (`noFreeId`).
- **Release / knowledge:** Released **2026-06-29** (AA FAQ; vendor blog 2026-06-30). Knowledge cutoff not independently confirmed. Pre-trained on 50K+ AI ASICs (a system-scale engineering claim from the vendor).
- **IDs:** `meituan/longcat-2.0` (no standing Free ID on Zen)
- **Context window:** **1.0M** total (AA spec table and FAQ agree — no inconsistency); max output not published.
- **Modalities:** Text in → text out. **TEXT-ONLY** (AA FAQ: "does not support image input… not multimodal"). **Reasoning** (AA: extended thinking / chain-of-thought). Native agentic / tool use for coding.
- **Pricing (as of 2026-10-30):** AA median **$0.75 / $2.95** per 1M in/out ("somewhat expensive" vs $0.50 / $2.10 medians), **98% cache discount**, blended $0.46. OpenRouter is cheaper at **$0.30 / $1.20** ($0.006 cached read); SiliconFlow $0.75 / $2.95; self-host **$0** (MIT).
- **Architecture:** Open-weight MoE, **1.6T total / 48B active** per token, **MIT license** (commercial use allowed). Trillion-parameter serving is heavy — TTFT 2.70s (high end vs 1.66s median for similar open-weight models).

### Raw benchmarks found

> The AA **Intelligence Index is N/A** on v5.0 (LongCat 2.0 is not among the 29 of 718 scored; every capability eval reads "No publicly available API"). AA does independently measure **Speed** and **Cost**, and runs a standalone **Terminal-Bench 2.1** eval. Capability numbers below are therefore mostly **vendor (Meituan blog / HF card)** — the sole independent capability signal is AA's Terminal-Bench 2.1.

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (vendor self-report) vs **≈50.19% AA-independent** (meta-cited) — a **~20-point vendor-inflation gap**. The independent ~50% is mid-tier agentic, mirroring the Tencent hy3/hy4 pattern.
- SWE-bench Pro: **59.5%** (vendor) — agentic software engineering; coverage calls it the highest public SWE-bench Pro among Chinese models, edging GPT-5.5 (58.6), below Claude Opus 4.8. Vendor-only, no independent confirmation.
- GDPval-AA / AutomationBench-AA / FrontierCode: N/A (AA Index not scored)

Reasoning / knowledge:

- AA Intelligence Index: **N/A** on v5.0 (not scored) — no independent reasoning measurement.
- Vendor claims overall performance "comparable to Google's Gemini 3.1" (unverified marketing claim).

Coding:

- SWE-bench Pro **59.5%** (vendor; harder than SWE-bench Verified). No SWE-bench Verified / LiveCodeBench / SciCode independent score found.

Long context:

- **1.0M** window is spec (AA-confirmed in both spec table and FAQ); no independently verified long-context retrieval (MRCR / RULER) score found.

Speed / cost (AA-measured, independent):

- Output speed **75.2 tok/s**, **#38/78** (3 of 4 units; above the 74 median for similar open-weight models).
- TTFT **2.70s** (high end vs 1.66s median — trillion-param serving penalty).
- Cost $0.75 / $2.95 (AA median), 98% cache discount, blended $0.46.

> **Meta-verification:** `meta.json` is accurate and notably candid — MIT ✓, 1.6T/48B ✓, 1M ✓, text-only ✓, SWE-bench Pro 59.5% ✓, Terminal-Bench 2.1 70.8% self-reported **vs 50.19% on AA** ✓ (the inflation flag is the meta's own), $0.30/$1.20 OpenRouter ✓, self-host $0 ✓, and the tradeoff correctly warns "every headline number is vendor-published — AA's Terminal-Bench 2.1 lands 20 points lower." **Flags:** (1) **AA Cost uses $0.75/$2.95** (SiliconFlow median), not the cheaper $0.30/$1.20 OpenRouter headline — so AA rates it "somewhat expensive" while OpenRouter is mid-pack; (2) **only 1 API provider** per AA (thin hosted access); (3) **AA Index N/A** → zero independent capability confirmation beyond the standalone Terminal-Bench 2.1; (4) heavy trillion-param serving (TTFT 2.70s).

### Normalized scores (1–100)

- **Tool use: 74/100.** Vendor Terminal-Bench 2.1 70.8% looks strong, but AA's independent run is ≈50.19% (~20 points lower) — real-world agentic terminal work is mid-tier, and SWE-bench Pro is vendor-only. Scored for the independent signal, not the marketing number.
- **Reasoning: 76/100.** Confirmed reasoning model (AA) at 1.6T scale with a vendor "Gemini 3.1-comparable" claim, but the **AA Intelligence Index is N/A** (no independent confirmation) and the one independent number is inflated — capped below frontier reasoning models.
- **Context window: 85/100.** Genuine **1.0M** window (AA spec + FAQ agree), strong for RAG and long agent sessions; no independent MRCR/RULER retrieval score found, so held at the proven-1M band rather than the top.
- **Multimodal: 50/100.** Text-only — AA FAQ confirms no image input. Text-only floor.
- **Coding: 76/100.** Vendor SWE-bench Pro 59.5% is strong in absolute terms (Pro is harder than Verified; edges GPT-5.5), but uncorroborated (AA Index N/A) and the independent terminal signal (~50%) is mid-tier — a coding-focused model whose real numbers need self-validation.
- **Cost efficiency: 80/100.** MIT open-weight (self-host **$0**) is a major plus, but hosted is "somewhat expensive" ($0.75/$2.95 AA median; $0.30/$1.20 OpenRouter; blended $0.46, 98% cache discount), trillion-param serving is heavy (TTFT 2.70s), and only 1 API provider. Not counted in Overall.
- **Overall Score: 72/100.** Mean of the five quality dims (74+76+85+50+76)/5 = 72.2 → 72. Divergence **+1.6** vs curated 70.4 — close alignment. The 1M context and reasoning scale lift it, but the text-only floor (50), absent AA Index, and vendor-inflated terminal numbers hold it to a solid-mid open-weight agentic coder. Best-fit: a self-hostable MIT 1M-context coding agent where you validate the terminal benchmarks yourself.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-30
- Method: public internet research (Artificial Analysis `longcat-2-0` page incl. FAQ, Meituan LongCat blog `longcat.chat/blog/longcat-2.0`, HuggingFace `meituan-longcat/LongCat-2.0` card, Terminal-Bench 2.1 coverage / aiiq.org aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
