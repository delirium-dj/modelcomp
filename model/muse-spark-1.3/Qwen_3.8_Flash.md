# Muse Spark 1.3 Max — findings by Qwen 3.8 Flash

- Source: Meta Superintelligence Labs / Muse Spark 1.3 Max (`meta/muse-spark-1.3`, reasoning effort `max`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max (max-reasoning tier of the Muse Spark 1.3 family)
- **Short description:** Meta's Sep-2026 flagship max tier — private-weights agentic model at 1M context / 131K max output. Strongest on **knowledge-work agent suites** (legal research, tax, finance) and full-stack app building; comparatively weak on terminal-style / computer-use execution in the Max-effort Vals runs. Closed weights, API-only.
- **Provider / access:** Meta developer platform (`dev.meta.ai/docs/models`), reasoning effort `max`; OpenCode Zen `opencode/muse-spark-1.3` Standard tier (the Contributor Free tier covers the standard 1.3, **not** Max — no $0 Max ID).
- **Release / knowledge:** Max tier listed 2026-09-05 (Vals AI); base 1.3 released 2026-09-02; knowledge cutoff not disclosed.
- **IDs:** `meta/muse-spark-1.3` (Standard Max).
- **Context window:** **1,048,576 total / 131,072 max output** (Meta / models.dev / Vals AI) — the curated `meta.json` "128K total / Text in/out" is a placeholder contradicted by verified data; scored on the real 1M multimodal model.
- **Modalities:** text + image + video + file in; text out; reasoning `max`; parallel tool calls; JSON mode; audio input "degraded" per Meta footnote. No non-text output.
- **Pricing (as of 2026-10-02):** **$1.25 in / $4.25 out per 1M** (cache $0.15) — same list as the standard Muse Spark 1.3 tier; Vals-measured $3.787 avg cost/test. Cost excluded from Overall.
- **Architecture:** proprietary closed weights, API-only (open-weights on roadmap only); Vals Index 58.16% (rank 9/41), 0.00% fallback, 0.65% refusal, ~23m33s avg latency (long-horizon profile).

### Raw benchmarks found

> Two very different evidence lanes exist and the rater cohort disagrees because of it. **Max-specific** rows come from Vals AI independent evaluations (`meta/muse_spark_1_3_max`, max effort). **Standard-lane** rows (TB2.1 88.8%, GPQA 93.5%, HLE 48.7%, MRCR 98.5%, DeepSWE 75.4%) are from BenchLM's `muse-spark-1-3` base-model page and are NOT measured on the Max variant — the sibling `Muse_Spark_1.3.md` (Overall 94) borrows them; the sibling `Kimi_K3.md` (Overall 75) uses only the Max-specific Vals rows. This report keeps the lanes separate and scores on the honest intersection.

Agent / tool use (Max-specific, Vals AI):

- Legal Research Bench **55.29% (rank 1/72)**; Finance Agent v2 **59.96% (4/73)**; Tax Agent Bench **72.44% (6/64)**; Harvey's Legal Agent 23.75% (2/73) → knowledge-work agents lead their fields
- Terminal-Bench 4.0 **24.75%** (15/42); Terminal-Bench Science **10.00%**; CUA-bench (computer use) **5.83%** (6/8); Vals RSI Index 19.64% (16/23) → terminal/computer-use execution is the weak spot
- Standard-lane (NOT Max): TB 2.1 88.8%, Tau3 50.5%, GDPval 1754, SWE-Atlas 59.4%

Reasoning / knowledge (Max-specific, Vals AI):

- ProofBench v1.1 **58.00%**; IOI **56.56%**; EMB **67.43%**; MysteryMechanism **36.04%**
- GPQA Diamond 93.5% / HLE 48.7% / AA Index 62 are **standard-lane** BenchLM numbers — no GPQA/HLE published for the Max variant itself; AA-Omniscience: no verified row

Coding (Max-specific, Vals AI):

- Vibe Code Bench v1.1 **85.86%** (11/106); Vibe 1-100 20.46%; Code Migration **47.41%** (13/71)
- SWE-bench Verified / LiveCodeBench / SciCode: **no Max-specific row** (DeepSWE 75.4%, SciCode 58.8% are standard-lane)

Long context: 1M window with standard-lane MRCR 98.5%/98.1% at 512K+; no Max-variant retrieval re-measurement.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Where the two lanes conflict, the score reflects Max-measured evidence first, standard-lane only as corroboration.

- **Tool use: 82/100.** The Max model wins its target category outright (Legal Research #1/72, Finance #4/73, Tax #6/64) and the standard tier's TB 2.1 88.8 corroborates the family, but Max-specific TB 4.0 24.75% / CUA 5.83% / RSI 19.64% show real terminal/computer-use weakness — knowledge-work agentic strength, execution-agent gap.
- **Reasoning: 84/100.** ProofBench 58% / IOI 56.6% / EMB 67.4% are solid mid-upper for the Max variant, and the family's standard-lane GPQA 93.5% / HLE 48.7% / AA Index 62 are frontier — but since those headline numbers were not re-measured on Max itself, this sits just above mid rather than at the 94 the self-report claims.
- **Context window: 98/100.** 1M window meets the ≥1M tier and standard-lane MRCR 98.5% at 512K+ clears the retrieval bar; trimmed a hair from 100 only because the Max variant has no independent retrieval re-measurement.
- **Multimodal: 85/100.** text + image + video + file in is the image+video+file band (75–90) with the added file-input coverage; audio degraded and text-only output keep it at the top of that band, not the >90 non-text-output tier.
- **Coding: 78/100.** Vibe Code Bench 85.86% is a strong full-stack/app-building signal, but Max-specific Code Migration 47.4% and TB 4.0 24.75% are weak for repository-scale agentic SWE, and there is no Max SWE-Verified/LiveCode row; the standard-lane DeepSWE 75.4 helps but doesn't transfer cleanly.
- **Cost efficiency: 88/100.** $1.25/$4.25 maps to the ~88 reference point; 0% fallback reduces waste, but ~23m33s avg latency signals heavy token spend per long-horizon task. Cost excluded from Overall.
- **Overall Score: 85/100.** Mean of Tool 82, Reasoning 84, Context 98, Multimodal 85, Coding 78 = 427/5 = 85.4 → 85. Best fit: long-horizon **knowledge-work** agent pipelines (legal research, tax/finance document workflows) at 1M context with multi-format (image/video/file) input — its field-leading Legal/Finance/Tax benches are the reason to pick it. It is NOT the pick for terminal-driven software engineering or computer-use automation, where its Max-effort Vals rows (TB 4.0 24.75%, CUA 5.83%) fall well short of the family's standard-tier headline, and reviewers who score it 94 by importing standard-lane GPQA/TB2.1/MRCR as if they were Max measurements are over-rating the variant.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Vals AI independent model page + benchmark tables for `meta/muse_spark_1_3_max` max-effort rows; Meta dev docs for the modality/pricing/1M-131K spec; BenchLM `muse-spark-1-3` **standard-lane** rows explicitly quarantined). Scores are normalized 1–100 interpretations, not official vendor scores. Key finding recorded for the cohort: the rater disagreement (Kimi K3 75 vs Muse Spark 1.3 self-report 94) is a **lane-mixing artifact** — GPQA 93.5 / TB 2.1 88.8 / MRCR 98.5 / DeepSWE 75.4 are measured on the base 1.3, not the Max variant, while Max's own Vals rows (TB 4.0 24.75, CUA 5.83, ProofBench 58, Vibe 85.86) tell a knowledge-work-strong / execution-weak story. Also flagged that the curated `meta.json` (128K/text-only) understates the verified 1M text+image+video+file model.
- Revisit trigger: if Meta or Artificial Analysis publish audited Max-variant GPQA/HLE/SWE-Verified/Omniscience rows (rather than the base-tier proxies), research deeper and re-score; keep this file as history.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
