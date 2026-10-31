# Muse Wonder — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** Meta / Muse Wonder (`muse-wonder-1.0` API model)
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`

## Model card

- **Name:** Muse Wonder — Meta's frontier agentic model (non-Full variant)
- **Short description:** Meta's first frontier-class agentic model, released 2026-10-12 (Meta Superintelligence Labs, six weeks after Muse Spark 1.3). API-callable preview; the stronger Muse Wonder Full (56 AA index) is Muse Code-only. Aurora claims Active Memory + Active Focus agentic features; trained at Prometheus data center.
- **Provider / access:** Meta Model API (preview, `muse-wonder-1.0`), Muse Code, Muse app (subscribers). Preview status; no public weights (closed).
- **Release / knowledge:** Released 2026-10-12. Knowledge cutoff: not disclosed.
- **IDs:** `muse-wonder-1.0` (Meta Model API, preview); OpenRouter `meta/muse-wonder`.
- **Context window:** 1,048,576 tokens (1M). Max output: not disclosed on the Ridge/Command-Code row (AA: 131K per OpenCode).
- **Modalities:** Text, image, video, audio, PDF in; text out. Reasoning default on (minimal-to-max).
- **Pricing (2026-10-31):** $4.00 per 1M input, $0.20 cached, $20.00 per 1M output. Cost per AA-Index task ≈ $4.52 (AA).
- **Architecture:** Proprietary; parameters undisclosed. MSA (MiniMax) was the M3 family — not this model.

### Raw benchmarks found

> Evidence: Ridge Ledger, Command Code (ArtIndex v4.3), Artificial Analysis, LLM Match Maker. All numbers below are for the Wonder (API) row; the stronger Full row is a separate folder.

**Agent / tool use:**
- Terminal-Bench 4.0 (Vals AI): **49.5%** (joint 11th of 39, measured).
- Harvey LAB-AA v1.1: **10%** (max) — 2nd of 28; material hallucinations per task 0.89 (Ridge).
- Terminal-Bench 4.0-AA: **57.1%** (Ridge/Meta chart; vs Opus 5.5 59.6) — close.
- AutomationBench-AA: leads on Meta's chart (45.4) — vendor claim.
- AA Intelligence Index v4.3.2 (max): **52** — tied with Claude Sonnet 5.5 (8th of 39, Ridge; Command Code 52.4, #6 of 74).
- Long-context reasoning (sub-score): **80.7** (Command Code, v4.3).
- SCI-Code: **60.3** (Command Code, v4.3).
- Coding Agent Index (Wonder max, Muse Code): **63** (AA newsroom chart).
- DeepSWE 1.1: 79.0 (Meta's chart) — vendor chart; vs Claude Opus 5.5 75.1.
- ProgramBench: 59.0 (vs Opus 5.5 70.5) — vendor chart.
- SWEBench Verified: not scored (Ridge policy: no longer adding models).

**Reasoning / knowledge:**
- AA Intelligence Index v4.3.2: **52** (max) — mid-tier-comparable, tied with Sonnet 5.5; v5.0: **43** (11th of 26).
- HLE/GPQA/CritPt/LCR: not published for this snapshot.
- Long-context reasoning sub-score: **80.7** (Command Code, v4.3).

**Coding:**
- Terminal-Bench 4.0 (Vals AI): **49.5%** measured (joint 11th of 39).
- Coding Agent Index (max): **63** (AA newsroom chart; tuned to Muse Code).
- SWEBench Verified: not scored.

**Long context / cost / speed:**
- 1M context; max output 131K (OpenCode).
- Cost per AA-index task ≈ $4.52 (AA).
- Speed: TTFT not published for this snapshot.

### Normalized scores (1–100)

- **Tool use: 74/100.** TB4.0 49.5% measured (mid-tier band); Harvey LAB-AA 10% (2nd of 28, strong); AA v4.3.2 index 52 (mid). GDPval-AA/OSWorld not measured → provisional.
- **Reasoning: 62/100.** AA v4.3.2 index 52 (mid-tier band 55–65); Long-context reasoning sub-score 80.7 is a strong sub-signal; GPQA/HLE/CritPt/LCR unmeasured → provisional.
- **Context window: 96/100.** 1M (1,048,576) — ≥1M tier (95–100); 100 only with ≥98% retrieval at 512K+ (unverified).
- **Multimodal: 80/100.** Text + image + video + audio + PDF in, text out — +video/PDF in tier (75–90).
- **Coding: 72/100.** TB4.0 49.5% measured (mid); Coding Agent Index 63 (mid-upper); no SWE-bench Verified (Ridge policy) → provisional.
- **Cost efficiency: 54/100.** $4.00/$20.00 per 1M — beyond the $3/$15 reference (60), toward $10/$50 (30); $4.52 per AA-index task.
- **Overall Score: 77/100.** (74+62+96+80+72)/5 = 384/5 = 76.8 → half-up 77. Best fit: frontier-agentic model for API teams; strongest near Sonnet 5.5 on the AA v4.3.2 index, but steep $/token and no verified coding board yet.

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Ridge Ledger — Muse Wonder](https://www.ridgebench.com/models/muse-wonder)
  - [Command Code — Muse Wonder pricing & benchmarks](https://commandcode.ai/models/muse-wonder-1-0)
  - [Artificial Analysis — Muse Wonder article](https://artificialanalysis.ai/articles/muse-wonder)
  - [Artificial Analysis — Muse Wonder (max) model page](https://artificialanalysis.ai/models/muse-wonder-full)
  - [LLM Match Maker — Muse Wonder](https://www.llmmatchmaker.com/blog/muse-wonder)
  - [Meta Newsroom — Introducing Muse Wonder and Muse Wonder Full](https://about.fb.com/news/2026/10/introducing-muse-wonder-and-muse-wonder-full/)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; spans all five quality dims; provisional ratings where benchmarks are missing (no GPQA/HLE/SWE-bench for this snapshot).
