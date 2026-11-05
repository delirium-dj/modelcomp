# Muse Spark 1.3 — findings by Mistral Large 4

- Source: Meta (`muse-spark-1.3` / `opencode/muse-spark-1.3`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs' proprietary frontier reasoning model (first Meta release that is not open-weights, hard break from the Llama family), tuned for agentic and long-horizon coding; ships via Muse Code and the Meta Model API. Tier names (Contributor/Free/Standard/Max) are one model — same weights, only price and Meta's training-data use differ.
- **Provider / access:** Meta Model API / Muse Code (`muse-spark-1.3`, dev.meta.ai), OpenCode Zen (`opencode/muse-spark-1.3`, incl. Free Contributor tier), OpenRouter (`meta/muse-spark-1.3`). Max reasoning variant in limited preview for Meta partners.
- **Release / knowledge:** Released 2026-09-02 (fourth Muse Spark release in five months; original Muse Spark "Avocado" launched 2026-04-08). Knowledge cutoff not published in the sources reviewed.
- **IDs:** `muse-spark-1.3` (Meta Model API); `opencode/muse-spark-1.3` (Zen, Free Contributor tier exists); `meta/muse-spark-1.3` (OpenRouter).
- **Context window:** 1,000,000 tokens total; 131,072 max output (per Vercel AI Gateway changelog / kie.ai / Zen listings).
- **Modalities:** Natively multimodal — text/image/video in, text out (Artificial Analysis model page); reasoning with effort levels (xhigh shipping, max in limited preview); tool calls / function calling; JSON mode.
- **Pricing (as of 2026-11-05):** Standard $1.25 / $4.25 per 1M in/out, cached input $0.15 (Meta Model API; unchanged from 1.2); OpenCode Zen Contributor/Free tier $0.10 / $0.20 — and a $0 Free tier paid with training-data consent (do not use for confidential code); ~$0.55 per AA Intelligence Index task vs ~$0.94–0.95 for peers.
- **Architecture:** Proprietary, weights/params not disclosed; built in a nine-month ground-up rebuild of Meta's AI stack (Hyperion data centre), RL-trained across diverse agent harnesses.

### Raw benchmarks found

Vendor table (research.meta.ai report) cross-checked against BenchLM, Artificial Analysis, DataCamp, Flowtivity, LISTIFY, explainx:

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (tied with GPT-5.6 Sol; AA lists 85%/86% variants) (Meta via BenchLM/AA)
- Tau3-Bench: **47%–52%** (Banking 47%, Retail 52% per AA; BenchLM 50.5%) — harness-dependent spread (AA vs BenchLM)
- GDPval-AA: **1709–1754 Elo** (AA write-up 1709/1754 across variants); Opus 5 still leads GDPval-AA v2 per explainx — conflicting, both cited
- SWE-Atlas Codebase QnA: **59.4%** (BenchLM)
- AutomationBench: **49.6%** per Meta's table; LISTIFY notes some sources list 49.4% — conflicting, both cited
- OSWorld 2.0 / JobBench / DeepSearchQA: Meta table has DeepSearchQA 90.3%/93.1%; some sources list 89.4%/93.0% — conflicting, both cited; Opus 5 leads the agent group (explainx/AIToolsReview)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM)
- HLE: **48.7%** (BenchLM)
- LCR: **83%** (BenchLM)
- Artificial Analysis Intelligence Index: **61 (xhigh, shipping) / 62 (max, limited preview)** per AA launch article and X post — conflicting reading: AA's (Max) model page shows 37, index-version drift, both cited; peers at 61 cost 70%+ more per task ($0.55 vs $0.94/$0.95)
- CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **75.4%** (beats Claude Opus 5's 74.0 per DataCamp/explainx; Meta table)
- Terminal-Bench 2.1: **88.8%** (above)
- SciCode: **58.8%** (BenchLM)
- SWE-Atlas: **59.4%** (BenchLM)
- SWE-bench Verified / LiveCodeBench: no verified public score found for this exact ID
- Efficiency: ~20% fewer tool calls and ~25% fewer tokens than Muse Spark 1.2 on comparable engineering tasks (Meta)

Long context:

- MRCR: **98.5% / 98.1%** at 256k–512k context (BenchLM) — meets the ≥98% retrieval bar at 512K within the 1M window

### Normalized scores (1–100)

- **Tool use: 92/100.** TB 2.1 88.8% and Tau3 ~50% are frontier-tier and it needs 20% fewer tool calls, but Opus 5 still leads GDPval-AA v2/OSWorld/AutomationBench and no Claw-Eval number exists.
- **Reasoning: 90/100.** GPQA 93.5%, HLE 48.7%, LCR 83% and AA Index 61–62 put it in the 90–100 band; capped by the conflicting AA (Max) reading of 37 (index-version drift) and no CritPt/Omniscience numbers.
- **Context window: 100/100.** 1M window with MRCR 98.5% at 256k–512k meets the 100-tier bar (≥1M and ≥98% retrieval at 512K+).
- **Multimodal: 85/100.** Text/image/video in, text out (natively multimodal per AA); no audio-in or non-text output evidence found.
- **Coding: 95/100.** DeepSWE 75.4% (top of the published frontier table), TB 2.1 88.8%, SciCode 58.8%, SWE-Atlas 59.4% — frontier ref band 90–100.
- **Cost efficiency: 100/100.** $0 Free Contributor tier on OpenCode Zen scores 100 per methodology; caveats: time-limited, Meta may train on prompts (not for confidential code); paid fallback $1.25/$4.25 ≈ 88, $0.10/$0.20 Contributor ≈ 97–99.
- **Overall Score: 92/100.** Half-up mean of (92 + 90 + 100 + 85 + 95) / 5 = 92.4 → 92. Best fit: default free-tier driver for agentic coding and long-horizon work while the Zen Free tier lasts; escalate to Opus 5.5 for GDPval-class knowledge work.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official Meta research blog fetched, 2026-11-05 UTC); official Meta announcement/evals report prioritized, cross-checked against BenchLM, Artificial Analysis, DataCamp, Flowtivity, LISTIFY, explainx, kie.ai, VentureBeat; conflicting figures (AA Index 61/62 vs 37; DeepSearchQA 90.3 vs 89.4; AutomationBench 49.6 vs 49.4; GDPval 1709 vs 1754) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Muse Spark 1.3 — Meta AI Research (official)](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Muse Spark 1.3 — Meta AI dev portal](https://dev.meta.ai/models/muse-spark)
  - [Muse Spark 1.3: Meta reaches the frontier — Artificial Analysis](https://artificialanalysis.ai/articles/muse-spark-1-3)
  - [Muse Spark 1.3 (max) — Artificial Analysis model page (conflicting Index 37 reading)](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [BenchLM — muse-spark-1-3 (TB 88.8%, GPQA 93.5%, HLE 48.7%, MRCR 98.5%)](https://benchlm.ai/models/muse-spark-1-3)
  - [DataCamp — Muse Spark 1.3 features, benchmarks, pricing](https://www.datacamp.com/blog/muse-spark-1-3)
  - [Flowtivity — Muse Spark 1.3 benchmarks for AI agents (DeepSWE 75.4%, MRCR 98.5%)](https://flowtivity.ai/blog/meta-muse-spark-1-3-benchmarks-ai-agents/)
  - [LISTIFY — deep dive with conflicting benchmark readings](https://www.listify.cool/en/blog/meta-muse-spark-1-3-deep-dive)
  - [kie.ai — What Is Muse Spark 1.3? (1M context, tier pricing)](https://kie.ai/blog/what-is-muse-spark-1-3)
  - [explainx.ai — launch benchmarks vs Opus 5 (agent-benchmark gap)](https://explainx.ai/blog/meta-muse-spark-1-3-launch-benchmarks-pricing-september-2026)
  - [VentureBeat — frontier claim vs limited-preview max variant](https://venturebeat.com/technology/meta-says-muse-spark-1-3-has-frontier-performance-but-its-best-results-come-from-a-model-developers-cant-broadly-use-yet)
  - [OpenRouter — meta/muse-spark-1.3](https://openrouter.ai/meta/muse-spark-1.3)
