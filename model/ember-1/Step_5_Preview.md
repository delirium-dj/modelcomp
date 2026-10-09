# Ember-1 — findings by Step 5 Preview

- Source: Fireworks (`accounts/fireworks/models/ember-1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's first own model (released 2026-09-22, Research Preview) — a post-trained, token-efficient specialization of Moonshot's Kimi K3 that produces ~40% fewer tokens at comparable quality (71.3% reasoning-token reduction and 39% total-token reduction in live customer A/B tests, quality delta +0.002). It beats K3-max on Terminal-Bench 2.1 and DeepSWE v1.1 while costing less per task, and set the cost/task Pareto frontier on Doximity's Bedside Bench clinical benchmark.
- **Provider / access:** Fireworks Serverless API (`accounts/fireworks/models/ember-1`, Research Preview with two-week access windows); OpenRouter `fireworks/ember-1`; Vercel AI Gateway `fireworks/ember-1`. API-only — no weights published.
- **Release / knowledge:** 2026-09-22 (announcement; catalogs list Sep 22–24). Knowledge cutoff inherited from Kimi K3, not separately disclosed.
- **IDs:** `fireworks/ember-1` (OpenRouter/Vercel), `accounts/fireworks/models/ember-1` (Fireworks).
- **Context window:** 1,048,576 tokens (1M; some sources list 1,040,576); max output 131,072 tokens.
- **Modalities:** Text + image in → text out (Vals AI capability record); function calling; 56 tok/s measured throughput, 1.06s latency on Fireworks.
- **Pricing (as of 2026-10-09):** $3.00 / MTok input, $15.00 output, $0.30 cached input — identical to the public Kimi K3 rate card; the entire value proposition is the lower token count, not a lower sticker price.
- **Architecture:** MoE with ~2.78T total parameters (inherited from Kimi K3); proprietary post-training on Fireworks' own data (no customer data).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks' own run — beats K3-max's 80.9%; independent tracker ranks it #22/43)
- Terminal-Bench 4.0: **19.7%** (Vals AI — independent)
- τ²-Bench Airline: **66.0%** (Fireworks run; #7/25 on llmboard)
- SWE-Interact: **20.0%** (Fireworks run)
- Specialized Intelligence Index / Bedside Bench (Doximity, 500 physician-validated clinical cases): **#1 on the cost/task Pareto frontier** across open and closed models incl. GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5
- OSWorld / AutomationBench / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI-2 / MMLU-Pro: **no verified public score found**
- Vals Index: **50.81% ±1.28** (#27/45)
- ProofBench v1.1: **61.0%**; EMB (equity/mergers benchmark): **63.4%**; Finance Agent v2: **51.9%**; Tax Agent Bench: **68.0%** (all Vals AI)

Coding:

- SWE-bench Verified: **92.2%** (Fireworks run; #3/117, 98.3rd pct on llmboard; K3-max 93.2%)
- DeepSWE v1.1: **75.2%** (Fireworks run; #4/43, 92.9th pct; K3-max 66.4%; GPT-6 Astra 74.1%)
- Vibe Code Bench v1.1: **83.9%** (Vals AI — #16/110)
- Code Migration: **32.5%** (Vals); IOI: **46.3%** (Vals); Harvey's Legal Agent Benchmark: **9.2%** (Vals)
- LiveCodeBench / SWE-bench Pro / FrontierCode: **no verified public score found**

Long context:

- 1M-token window inherited from K3; **no MRCR / RULER / AA-LCR number published** for Ember-1

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 2.1 82.0% and τ²-Bench Airline 66.0% (both vendor-run) are respectable, and the Bedside Bench cost/task frontier shows real agentic economics; capped hard by the independent Terminal-Bench 4.0 reading of 19.7%, SWE-Interact 20.0%, and no OSWorld/AutomationBench/GDPval data.
- **Reasoning: 72/100.** With no GPQA/HLE published, the evidence is the Vals Index 50.8% plus ProofBench 61.0% and EMB 63.4% — a solid mid-tier by proxy and consistent with inheriting K3-class reasoning; capped because the flagship reasoning suites are entirely unmeasured for this exact model.
- **Context window: 90/100.** 1,048,576-token window with 131K output is the ≥1M tier; no long-context retrieval benchmark (MRCR/RULER/AA-LCR) exists for Ember-1, so it cannot reach the 95+ band the methodology reserves for verified 512K+ retrieval.
- **Multimodal: 65/100.** Text + image in → text out is the 60–70 band, placed at its midpoint with no MMMU-Pro/CharXiv number published to justify the top of the band.
- **Coding: 86/100.** SWE-bench Verified 92.2%, DeepSWE v1.1 75.2% (beating K3-max and GPT-6 Astra on Fireworks' runs), Vibe Code Bench 83.9% and TB2.1 82.0% are frontier-adjacent; capped by Code Migration 32.5%, IOI 46.3%, Legal Agent 9.2% and every headline number being vendor-reported on Fireworks' own harness.
- **Cost efficiency: 58/100.** $3/$15 per MTok is the methodology's ~$3/$15 ≈ 60 tier before token savings; the 40% token reduction effectively moves real task cost toward ~$2/$9 equivalent — the model's entire pitch — but the list rate itself is mid-tier and there is no free tier.
- **Overall Score: 78/100.** Best-fit recommendation: a K3-quality workhorse for reasoning-token-heavy agentic coding at ~40% lower effective cost — strongest where reasoning traces dominate the bill; verify on your own harness since nearly every score is Fireworks' own.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Fireworks Ember-1 announcement blog, Vals AI model page, OpenRouter/Vercel catalogs, llmboard, allthemodels, TensorFeed, WPNews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
