# Muse Spark 1.3 Max — findings by GLM 5.3 Flash

- Source: Meta (`meta/muse-spark-1-3-max`, Meta Model API `muse-spark-1.3` with `reasoning_effort: max`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max
- **Short description:** The "max" reasoning-effort configuration of Muse Spark 1.3 (Meta Superintelligence Labs) — same checkpoint and per-token price as the shipping model, with the highest reasoning setting that was safety-gated for two days before general availability on 2026-09-04. Flag: this is a variant/configuration of `muse-spark-1.3`, not a separate architecture.
- **Provider / access:** Meta Model API (model id `muse-spark-1.3`, effort parameter now accepts `max`) and Muse Code terminal coding agent; third-party gateways may still enumerate only up to `xhigh` — check the route before assuming `max` is reachable. Chat Completions-style API.
- **Release / knowledge:** Max configuration GA 2026-09-04 (announced by chief AI officer Alexandr Wang; Vals AI lists the row as released Sep 5, 2026); base model released 2026-09-02; knowledge cutoff not disclosed.
- **IDs:** `meta/muse-spark-1-3-max` (aggregator key; native id is `muse-spark-1.3` + `max` effort — no Free ID on OpenCode Zen found)
- **Context window:** 1M tokens total; max output 131,072 (Vals AI model page hyperparameter table) — verified via vals.ai.
- **Modalities:** text, image, video, file/PDF in; text out; reasoning always on (effort ladder minimal→low→medium→high→xhigh→max); tool calls (Muse Code, OSWorld-class agent use); JSON mode not separately documented.
- **Pricing (as of 2026-10-02):** $1.25 / $4.25 per 1M (cached input $0.15/1M, standard tier) — identical to every other effort level and to Muse Spark 1.2's list price; reasoning tokens bill as output. Contributor tier $0.10/$0.20 per 1M in exchange for training on your prompts (rate-limited, poor default for confidential code). No free Zen ID — paid.
- **Architecture:** Proprietary (private weights); open-weights release promised by Zuckerberg without a date.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8 at max** vs 89.2 at xhigh (vendor-reported, Meta's own Muse Code harness — max is the one suite where the Sep 2 configuration wins)
- Terminal-Bench 4.0: **24.75% ±0.51** (Vals AI, independent, rank 15/42)
- OSWorld 2.0 (computer-use): **66.9 at max** vs 57.2 at xhigh (vendor-reported)
- GDPval-AA v2 (knowledge-work Elo): **1,754 at max** vs 1,709 at xhigh (vendor-reported)
- JobBench (long-horizon professional): **64.9 at max** vs 61.2 at xhigh (vendor-reported)
- CUA-bench: **5.83%** (Vals AI, N=8, rank 6/8)
- Artificial Analysis Coding Agent Index: **68 (max, Muse Code harness)** — 2nd behind Claude Opus 5 (xhigh), ahead of Claude Fable 5 (67) and GPT-5.6 Sol (65); xhigh config scores 64 on the same board (independent, ~+4 index points for max)
- Claw-Eval: no verified public score found
- Legal Research Bench: **55.29% ±3.46** (Vals AI, rank 1/72); Harvey's Legal Agent Benchmark: **23.75% ±3.55** (Vals AI, rank 2/73)
- Finance Agent (v2): **59.96% ±2.06** (Vals AI, rank 4/73); Tax Agent Bench: **72.44% ±2.88** (Vals AI, rank 6/64); EMB: **67.43% ±3.06** (Vals AI); CyberBench v1.1: **72.74% ±5.67** (Vals AI)

Reasoning / knowledge:

- DeepSearchQA: **89.4** (tie max vs xhigh, vendor-reported)
- IOI: **56.56% ±2.52** (Vals AI, rank 18/38)
- ProofBench v1.1: **58.00% ±4.96** (Vals AI, rank 20/44)
- MysteryMechanism: **36.04% ±3.23** (Vals AI, rank 9/21)
- Vals Index: **58.16% ±1.19** (Vals AI, rank 9/41, cost/test $3.787, latency 23m33s, fallback 0.00%, refusal 0.65%)
- Vals RSI Index: **19.64%** (Vals AI, rank 16/23)
- Artificial Analysis Intelligence Index v4.2: **53** vs comparable-model median 29 (the launch-week "62" was measured on the previous index version — not comparable)
- HLE / GPQA Diamond / MLCR / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **75.4** (vendor-reported, max configuration — the day-one headline, unreproduced by an independent harness as of writing)
- Vibe Code Bench v1.1: **85.86% ±2.51** (Vals AI, rank 11/106); Vibe Code Bench (1-100 scale): **20.46% ±3.85** (Vals AI, rank 6/20)
- Code Migration: **47.41% ±4.26** (Vals AI, rank 13/71)
- LiveCodeBench / SciCode / SWE-bench Verified: no verified public score found for the max configuration

Long context:

- no long-context retrieval reported (1M window advertised; no MRCR/RULER/GraphWalks numbers found for the max configuration)

Cost / token efficiency:

- AA instrumented run: ~130M tokens vs a 79M median, ~$1,335 total, ~$0.95/task at ~190 output tok/s (verbosity caveat, independent)
- Vals AI: $3.787/test, 23m33s latency (independent)
- Contributor tier: $0.10/$0.20 per 1M with mandatory training-data consent

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 88.8% and GDPval-AA v2 1,754 hit the frontier refs (88%+ / 1750+), and AA's Coding Agent Index places it 2nd overall (68); Vals' Terminal-Bench 4.0 (24.75%) and CUA-bench (5.83%, N=8) show the TB2.1-era vendor numbers do not carry to harder independent harnesses, capping it below 90.
- **Reasoning: 82/100.** DeepSearchQA 89.4, IOI 56.56% and Vals Index 58.16% (rank 9/41) indicate strong reasoning, but the max-vs-xhigh deltas concentrate on agentic loops (OSWorld +9.7, JobBench +3.7) rather than raw knowledge benchmarks, and HLE/GPQA remain unmeasured — capped at 82.
- **Context window: 95/100.** 1M-token context window (Vals AI hyperparameter table) lands in the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ to justify 100. Max output 131K is generous, not a caveat.
- **Multimodal: 85/100.** Text, image, video, and file/PDF input with text output (Vals AI modality list) — the +video/PDF-in band (75–90); no audio input or non-text output advertised.
- **Coding: 89/100.** DeepSWE v1.1 75.4 (above the 74%+ frontier ref), Vibe Code v1.1 85.86% and TB2.1 88.8 are frontier-class, but Code Migration 47.41%, Vibe (1-100) 20.46% and the unverified status of the DeepSWE vendor number keep it at the bottom edge of 90–100.
- **Cost efficiency: 82/100.** List price $1.25/$4.25 per 1M maps to ~88 on the inverse-pricing rubric, adjusted down for max's verbosity: AA measured ~130M tokens (~$0.95/task, ~1.6× the median) and Vals $3.79/test at 23m33s — the bill is in token volume, not the price list. The $0.10/$0.20 Contributor tier exists but carries mandatory training-data consent.
- **Overall Score: 87.8/100.** Mean of the five quality dims (88+82+95+85+89)/5 = 87.8 → 89. Best fit: long-horizon agentic and knowledge-work loops (computer-use, briefs, multi-step tool work) where max's gains are largest; A/B against xhigh for high-volume or single-turn workloads where it mainly adds tokens.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-02
- Method: public internet research (Vals AI model page, OrcaRouter analysis, launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
