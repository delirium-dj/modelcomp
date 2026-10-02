# Muse Spark 1.2 Contributor Free — findings by Mimo v2.6 Flash

- Source: Meta/`muse-spark-1.2-contributor-free` (OpenCode Zen free contributor tier)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Contributor Free
- **Short description:** Meta's coding-focused Muse Spark update (released 2026-08-05) co-trained with Muse Code terminal agent; same weights as standard `muse-spark-1.2`, free on OpenCode Zen as Contributor tier (training-data consent + lower rate limits). Prior-gen free coding driver below 1.3 Free.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free` (Chat Completions); Meta Model API `muse-spark-1.2` / `muse-spark-1.2-contributor`; Muse Code CLI.
- **Release / knowledge:** 2026-08-05; knowledge cutoff not disclosed.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` on Zen (Free ID exists); native `muse-spark-1.2-contributor`.
- **Context window:** 1,048,576 tokens; max output ~131K reported.
- **Modalities:** text/image/video/PDF in; text out; reasoning yes (xhigh); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** Zen Free tier $0 during free period (Cost=100 on free evaluation); Meta Contributor $0.10 in / $0.002 cached / $0.20 out per 1M (training on prompts, 60 RPM); Standard $1.25 / $0.15 / $4.25. Free-tier caveat: Contributor consent + time-limited Zen free window.
- **Architecture:** proprietary (closed weights; co-trained with Muse Code harness).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta harness, Muse Code, xhigh — vendor-run; NOT on official verified tbench.ai board as of 2026-08-26; Vals Terminus 2 = 14th/50)
- MCP Atlas: **90.3%** (Scale AI harness via Meta release; highest in Meta comparison set, above Opus 5 85.8%)
- GDPval-AA v2: **1631 Elo** (Artificial Analysis via Meta; also cited 1628)
- Meta Internal Coding Bench: **70.6%** (private 440-task Meta harness — not independently verifiable)
- OSWorld 2.0: no verified public score found for 1.2
- Tau3-Banking / Claw-Eval: no verified public score found
- Vals Index v1.2: **71.88%** rank 5/45 (independent composite; $0.69/test, lowest cost in top-5)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **57** (independent AA)
- GPQA Diamond / HLE / CritPt: no verified public score found for 1.2 specifically
- Vals Index composite covers coding + finance tasks (71.88%)

Coding:

- DeepSWE v1.1: **59.3%** (Meta Muse-Code harness; official Datacurve board did not list 1.2 as of 2026-08-26; Muse 1.1 listed at 53%)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for 1.2
- Generational gains vs 1.1: TB2.1 +6.7, DeepSWE +6.3 (partly harness — 1.1 was mini-swe-agent)

Long context:

- 1M window documented; no MRCR/RULER row for 1.2 — long-context retrieval: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** MCP Atlas 90.3% #1 in Meta's set, TB2.1 82.9% (vendor), GDPval 1631, Vals rank-5 composite; capped because TB/DeepSWE lack official verified leaderboard entries and OSWorld/Tau3 rows are missing.
- **Reasoning: 88/100.** AA Index 57 independent (above class median), solid Vals composite; capped by missing GPQA/HLE/CritPt rows for this exact model.
- **Context window: 95/100.** 1M documented; no measured ≥98% retrieval at 512K+ for 1.2 → 95.
- **Multimodal: 90/100.** Text/image/video/PDF in (video + PDF push 75–90; PDF+video together → top of band, 90); text-only out.
- **Coding: 87/100.** DeepSWE 59.3% (behind Opus 5 65 / Terra 64.8), TB2.1 82.9% vendor, Vals 71.88% rank 5; capped by DeepSWE gap and unverified leaderboard status.
- **Cost efficiency: 100/100.** Zen Free contributor tier = $0 during free period (Meta Contributor $0.10/$0.20 with training consent).
- **Overall Score: 90/100.** Mean of five quality dims (91+88+95+90+87)/5 = 90.2 → 90. Best-fit: near-free coding agent via Muse Code when free tier is on; prefer 1.3 Free when available; not for confidential code on Contributor terms.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Meta methodology/blog, VentureBeat, Kingy verified-board analysis, AiCybr, Benchgen, GLBGPT, TensorFeed, AA); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
