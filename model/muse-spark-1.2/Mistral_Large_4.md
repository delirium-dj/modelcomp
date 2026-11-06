# Muse Spark 1.2 — findings by Mistral Large 4

- Source: Meta (`muse-spark-1.2` / `opencode/muse-spark-1.2`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's second Muse Spark release (2026-08-05), a drop-in predecessor of 1.3 with strong agentic coding inside Muse Code; tier names (Contributor/Free/Standard/Max) are one model — same weights, only price and Meta's training-data use differ. Planned open-weights release reported by CNBC (not landed in reviewed sources).
- **Provider / access:** Meta Model API (`muse-spark-1.2` standard; `muse-spark-1.2-contributor` rate-limited), OpenCode Zen (`opencode/muse-spark-1.2`, Contributor Free $0), OpenRouter (`meta/muse-spark-1.2`), Pi (`opencode/muse-spark-1-2-contributor-free`).
- **Release / knowledge:** Released 2026-08-05 (OpenRouter/aireleasetracker); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `muse-spark-1.2` (Meta Model API); `opencode/muse-spark-1.2` (Zen, Free tier exists); `meta/muse-spark-1.2` (OpenRouter).
- **Context window:** 1,000,000 tokens; 131,072 max output (Muse family standard).
- **Modalities:** Text, image, video in; text out; reasoning; tool calls (Muse Code harness).
- **Pricing (as of 2026-11-05):** Standard $1.25 / $4.25 per 1M, cached input $0.15; Contributor $0.10 / $0.20 (Meta may train on prompts); OpenCode Zen Contributor Free $0.00 (time-limited, data-consent caveat).
- **Architecture:** Proprietary, weights not disclosed (open-weights release signalled, not landed); Muse Spark lineage.

### Raw benchmarks found

Meta/AA coverage cross-checked against BenchLM, Vals, aireleasetracker, kingy, felloai, aicybr; conflicts noted:

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** — 2nd at launch behind the leader (felloai/kingy; Meta ran inside Muse Code harness — harness caveat per kingy)
- MCP Atlas: **90.3%** (benchgen, Muse Spark 1.2)
- GDPval-AA: **1631 Elo** (BenchLM); early private-preview figure 1444 (felloai — superseded, conflict noted)
- Vals Index: **71.88, #11** (BenchLM)
- BenchLM composite: **#30 of 216 at 65.54/100**
- Artificial Analysis Intelligence Index: **~55** — effectively tied with GPT-5.5 (xhigh, 55), behind Opus 5 (61), Fable 5 (60), GPT-5.6 Sol (59) (AA article)
- OSWorld / Claw-Eval / AutomationBench: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM); HLE: **45.5%** (BenchLM); SciCode 56%→59% vs 1.3 (AA)
- CritPt: 18% (xhigh) per AA vs-1.3 comparison

Coding:

- DeepSWE v1.1: **59.3%** (BenchLM/aireleasetracker)
- SWE-Atlas Codebase QnA: 59.4% at 1.3; 1.2 figure not captured — no verified 1.2 number cited
- SWE-bench Verified / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 1M window (official); no verified MRCR/RULER score found for 1.2 specifically

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 82.9% (2nd) and MCP Atlas 90.3% are frontier-tier; harness caveat (Muse Code) noted.
- **Reasoning: 88/100.** GPQA 90.4%, HLE 45.5%, AA ~55 tied with GPT-5.5 xhigh.
- **Context window: 96/100.** 1M family window in the 95–100 tier; no verified 512K+ retrieval for 1.2.
- **Multimodal: 85/100.** Text/image/video in, text out; no audio or non-text output.
- **Coding: 92/100.** TB 2.1 82.9% and DeepSWE 59.3% lead the pre-1.3 field; 1.3 (75.4 DeepSWE) supersedes it.
- **Cost efficiency: 100/100.** $0 Contributor Free tier on OpenCode Zen scores 100; caveats: time-limited, training-data consent (not for confidential code); paid fallback $1.25/$4.25 ≈ 88.
- **Overall Score: 90/100.** Half-up mean of (90 + 88 + 96 + 85 + 92) / 5 = 90.2 → 90. Best fit: free-tier agentic coding fallback when Muse Spark 1.3 Free is unavailable; upgrade to 1.3 for +16 DeepSWE points.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, Meta/AA/OpenRouter/Zen cited, 2026-11-05 UTC); cross-checked against BenchLM, Vals, aireleasetracker, kingy, felloai, aicybr, codersera, AA; conflicting figures (GDPval 1444 preview vs 1631 launch; AA ~55 vs Bloomberg 62 for 1.3) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark 1.2 — OpenRouter (released 2026-08-05)](https://openrouter.ai/meta/muse-spark-1.2)
  - [BenchLM — muse-spark-1-2 (#30/216 at 65.54; TB 82.9, GPQA 90.4, HLE 45.5)](https://benchlm.ai/models/muse-spark-1-2)
  - [Artificial Analysis — Muse Spark 1.2 benchmarks (AA ~55, tied GPT-5.5 xhigh)](https://artificialanalysis.ai/articles/muse-spark-1-2)
  - [felloai — Muse Spark (TB 82.9% 2nd, early GDPval 1444 preview note)](https://felloai.com/meta-muse-spark/)
  - [aireleasetracker — Muse Spark 1.2 (DeepSWE 59.3, TB 82.9, BullshitBench 50%)](https://aireleasetracker.com/model/meta/muse-spark-1.2)
  - [aicybr — Muse Spark 1.2 guide (Vals 71.88 #5/45, pricing tiers)](https://aicybr.com/blog/meta-muse-code-muse-spark-1-2-complete-guide)
  - [aireiter — 1.2 API pricing (Standard $1.25/$4.25 vs Contributor $0.10/$0.20)](https://aireiter.com/blog/muse-spark-1-2-api-pricing-guide)
  - [developer.meta.com — Muse Code blog (contributor model routing, $0.15 cached)](https://developer.meta.com/ai/resources/blog/build-with-muse-code/)
  - [Pi — opencode/muse-spark-1-2-contributor-free ($0)](https://pi.dev/models/opencode/muse-spark-1-2-contributor-free)
  - [codersera — 1.3 vs 1.2 comparison](https://codersera.com/blog/muse-spark-1-3-vs-1-2-2026/)
