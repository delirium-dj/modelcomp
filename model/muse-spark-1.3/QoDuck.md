# Muse Spark 1.3 — findings by QoDuck

- Source: Meta (`muse-spark-1.3`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's hosted, closed-weight agentic reasoning model (released 2026-09-02), fourth Spark release in five months, trained for long-horizon agentic workflows and competitive coding with fewer tool calls/tokens than 1.2. Contributor and Standard are the same weights — only price and Meta's training-data use differ; "max" is a reasoning-effort setting (limited preview), never a separate model.
- **Provider / access:** Meta Model API `muse-spark-1.3` (Standard) and `muse-spark-1.3-contributor` (data-rights discount); OpenCode Zen `opencode/muse-spark-1.3` via `https://opencode.ai/inference/openai/v1/responses` (Responses API, paid — no free route currently listed); also in Muse Code. Max effort limited to Meta partners pending safety testing.
- **Release / knowledge:** Released 2026-09-02 (xhigh GA same day); knowledge cutoff not disclosed by Meta or secondary spec pages.
- **IDs:** `muse-spark-1.3`, `muse-spark-1.3-contributor` (Meta); `opencode/muse-spark-1.3` (Zen — no Free ID exists today; the September "$0 Contributor Free" promotions are gone from current listings).
- **Context window:** 1,048,576 tokens; max output 131,072 tokens (docs example, via MyClaw spec table); reasoning tokens bill as output and count toward the cap. No long-context premium.
- **Modalities:** Text, image, video, PDF input; audio input flagged "not fully supported, quality may be degraded" (regression vs 1.2); text output only. Reasoning efforts minimal/low/medium/high/xhigh (`none` → HTTP 400; default high). Web search grounding $2.50/1K queries.
- **Pricing (as of 2026-11-09):** Standard $1.25 / 1M input, $4.25 / 1M output, $0.15 cached input (Meta + Zen agree; 3,000 RPM / 4M TPM). Contributor $0.10 / $0.20 / $0.002 cached — Meta may train future models on contributor data (100 RPM / 3M TPM). Max effort: no disclosed price (partner preview).
- **Architecture:** Proprietary, closed-weight; no parameter count or MoE details disclosed for 1.3 (the open-weight 816B/42B MoE "Muse Spark Open" is a different model/folder).

### Raw benchmarks found

Agent / tool use:

- Tau3-Bench Banking: **52%** max / **47%** xhigh (Artificial Analysis) — #1 performer at launch; up from 1.2's 35%.
- Terminal-Bench 2.1: **88.8%** max (Meta methodology table, ties GPT-5.6 Sol max) / **89.2%** xhigh (MyClaw quoting Meta) vs **85%** (AA independent run) — vendor-vs-independent harness gap.
- GDPval-AA v2: **1754 Elo** max / **1709 Elo** xhigh (Meta table via dev.meta.ai and MyClaw) — Opus 5 max leads at 1824 on the same chart.
- JobBench: **64.9** max / 61.2 xhigh (Meta table) — Opus 5 leads 65.7.
- OSWorld 2.0: **66.9 partial / 32.0 binary** max (Meta table) vs 57.2 xhigh (MyClaw); version mismatch flagged (1.2 ran 06.24, others 08.08).
- AutomationBench: **49.6** max (Meta table) — Opus 5 50.3, GPT-5.6 Sol 46.7.
- DeepSearchQA: **90.3** max / 89.4 xhigh — trails GPT-5.6 Sol's 93.1.
- Agentic IF Index: **57.8** (Meta internal harness — not independent evidence).
- Claw-Eval / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61** xhigh / **62** max (launch vintage, 2026-09-02) — tied GPT-5.6 Sol (max), Grok 4.6 (high), Opus 5 (high); behind only Fable 5.1 at launch. Index has since rescaled (Opus 5.5 era tops ~58–60), so 61/62 is a launch-scale figure.
- AA-LCR: **79%** (both new modes) — regression from 1.2's 83% (AA).
- AA-Omniscience: accuracy down 3 pts (xhigh) / 1 pt (max) vs 1.2; higher abstention lowered hallucination rate (AA).
- GPQA Diamond / HLE / CritPt: no verified public score found.
- MRCR (reasoning-adjacent long context): see below.

Coding:

- DeepSWE v1.1: **75.4%** max only (Meta table; xhigh cell blank) — run used mini-swe-agent, "not a Muse Code score"; mixed-harness caveat (1.2's 55.0 came from a public leaderboard).
- SWEAtlas CodeBase QnA: **59.4%** max / 54.0 xhigh (Meta table) — leads GPT-5.6 Sol 53.5 and Opus 5 52.7.
- Terminal-Bench 2.1: 88.8% max (see Tool use; AA 85%).
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found.

Long context:

- MRCR 256K–512K: **98.5%** max / 97.6% xhigh; MRCR 512K–1M: **98.1%** max / 93.1% xhigh (Meta methodology table) — near-perfect retrieval at half-million-plus, vendor harness.
- AA-LCR 79% (independent; regression vs 1.2) — conflicts with the vendor MRCR story; both retained.

Multimodal:

- Perceives video, images and documents (Meta); audio degraded (see card). MMMU / LVBench / Chartography: no verified public score found for 1.3.

**Conflicting-results notes:** (1) Terminal-Bench 2.1: Meta 88.8–89.2% vs AA 85% — Meta runs its native harness at max, AA reruns independently; both kept. (2) GDPval/MRCR/OSWorld differ by effort (max vs xhigh) — not contradictions, but max is partner-only, so GA users get the xhigh column. (3) AA found real regressions vs 1.2 (AA-LCR 83→79, Omniscience accuracy −3) that Meta's launch table omits; cost/task rose $0.40→$0.55 on ~57% more input tokens. (4) Pricing history: September's $0 Contributor-Free tier is absent from current Meta/Zen listings — contributor now $0.10/$0.20 with training-data consent. (5) Meta's internal efficiency claims (~20% fewer tool calls, ~25% fewer tokens) are vendor-internal, not independently reproduced.

### Normalized scores (1–100)

- **Tool use: 95/100.** Tau3-Banking 52% (#1) clears the ~50%+ frontier ref, Terminal-Bench 2.1 88.8% meets the ~88% ref, GDPval-AA 1754 meets ~1750+; capped below 97 by AA's lower TB rerun (85%) and Opus 5 leading several agent rows.
- **Reasoning: 92/100.** AA Index 61/62 clears the 60+ frontier anchor at launch scale; capped by AA-LCR 79% (below the 95%+ ref), Omniscience accuracy regression, and no verified GPQA/HLE figures.
- **Context window: 98/100.** 1,048,576 verified window with MRCR 98.1% at 512K–1M (max) meets the ≥98%-at-512K bar for the top tier; held at 98 because the figure is vendor-harness at partner-only max effort (xhigh: 93.1%) and AA-LCR regressed to 79%.
- **Multimodal: 88/100.** Image + video + PDF input reaches the 75–90 tier's upper end; audio input is officially degraded so the 90–100 audio tier is not earned; text-only output and no verified vision benchmarks cap it.
- **Coding: 95/100.** DeepSWE 75.4% meets the 74%+ frontier ref and TB2.1 88.8% the 85%+ ref, SWEAtlas leads the compared set; capped by the mixed-harness DeepSWE caveat, max-only availability, and missing SWE-bench Verified/LiveCodeBench evidence.
- **Cost efficiency: 90/100.** Standard $1.25/$4.25 maps to ~88, adjusted up for the $0.55/Index-task Pareto lead at launch (42% under GPT-5.6 Sol); contributor $0.10/$0.20 would score ~98 but carries the training-data caveat and is not the evaluated tier.
- **Overall Score: 93.6/100.** Mean of (95+92+98+88+95)/5 = 93.6 — frontier-level agentic coding and tool use at mid-tier prices; best-fit when long-horizon tool work matters more than raw knowledge accuracy.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: public internet research — 3 independent web searches plus direct fetches of Meta's dev page, OpenCode Zen docs, and independent coverage (Artificial Analysis via Implicator/MyClaw/eigent search results); vendor-vs-independent and effort-level conflicts compared and labelled; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark 1.3 — Meta AI dev page](https://dev.meta.ai/models/muse-spark)
  - [Muse Spark 1.3 Multimodal Evaluation Methodology — Meta Research](https://research.meta.ai/static/muse-spark-1-3-multimodal-evaluation-methodology)
  - [Muse Spark 1.3 Ties GPT-5.6 Sol at 42% Lower Cost — Implicator (Artificial Analysis results)](https://www.implicator.ai/meta-muse-spark-1-3-cost-per-task/)
  - [Muse Spark 1.3: Specs, Price, and When to Switch — MyClaw](https://myclaw.ai/blog/muse-spark-1-3)
  - [Artificial Analysis on Muse Spark 1.3 — X post](https://x.com/ArtificialAnlys/status/2095247787277553929)
  - [Muse Spark 1.3 Benchmarks, Pricing & Context Window — LLM-Stats](https://llm-stats.com/models/muse-spark-1.3)
  - [OpenCode Console Models (Zen route + pricing)](https://opencode.ai/v2/docs/console/models/)
  - [Muse Spark 1.3 — APXML specs](https://apxml.com/models/muse-spark-13)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.