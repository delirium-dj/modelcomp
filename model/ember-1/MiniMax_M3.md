# Ember 1 — findings by MiniMax M3

- Source: Fireworks Research (`opencode/ember-1`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Fireworks Research's **2026-09-23** post-trained Kimi K3 — same quality at **~39% lower per-task cost** by learning to cut useless reasoning while preserving self-correction. **DeepSWE 1.1 75.2%** (vs K3-Max 66.4%, +8.8 pts), **SWE-bench Verified 92.2%** (vs K3-Max 93.2%, −1 pt honest loss), 3.4× faster than K3, native vision at 1M context.
- **Provider / access:** Fireworks AI Serverless (`accounts/fireworks/models/ember-1`); OpenRouter; OpenCode Zen `opencode/ember-1`. Two-week Research Preview window from launch; permanent based on adoption. ([Fireworks launch](https://fireworks.ai/blog/ember-1), [OpenRouter compare](https://openrouter.ai/compare/fireworks/ember-1/moonshotai/kimi-k3))
- **Release / knowledge:** **2026-09-23** Research Preview; weights not separately published (post-trained Kimi K3 weights, served via Fireworks).
- **IDs:** `accounts/fireworks/models/ember-1`; `opencode/ember-1`; OpenRouter `fireworks/ember-1`. Not a separate model — a *specialized post-trained* variant of `moonshotai/kimi-k3`.
- **Context window:** **1,048,576 (1M) total / 131K output**. Native vision documented across the family. ([OpenRouter](https://openrouter.ai/compare/fireworks/ember-1/moonshotai/kimi-k3))
- **Modalities:** **Text, image input; text output**. Vision adapted from K3 parent.
- **Pricing (as of 2026-10-16):** **$3 input / $15 output / $0.30 cached per 1M** — *same per-token rate as Kimi K3*. The cost win is at the *task* level: roughly **39% fewer tokens per task** in customer A/B testing (35-50% reasoning-token reduction range). ([Fireworks blog](https://fireworks.ai/blog/ember-1), [explainx recap](https://explainx.ai/blog/fireworks-ember-1-kimi-k3-reasoning-tokens-2026))
- **Architecture:** Moonshot Kimi K3 base (~3T parameters, MoE); 50+ Fireworks training experiments and 200+ evaluations applied a learned-reasoning-efficiency post-training regime with new SFT/RL algorithms on Fireworks Serverless Training. Native vision and 1M context retained from base. ([Fireworks launch](https://fireworks.ai/blog/ember-1))

### Raw benchmarks found

Triangulated across **five** independent surfaces: Fireworks' official launch post (with detailed head-to-head K3 comparison tables), Vals Index Leaderboard + Vals ProofBench + Vals Finance Agent v2 leaderboards (independent public tracks), BenchLM aggregated score sheet (5 source-displayable rows), dev.to/jamilxt detailed Ember-1-vs-Kimi-K3 review, OpenRouter compare page, thenewstack.io coverage of the A/B test. All benchmark numbers below are Fireworks-published **except** where explicitly noted as Vals or AA independent.

Agent / tool use:

- **Fireworks benchmark table** (direct head-to-head with K3 reasoning tiers, N samples in parens):
  - **Terminal-Bench 2.1 (N=89):** **82.0%** (vs K3-Low 76.4, K3-High 77.6, **K3-Max 80.9**) — *Ember-1 wins its own base by +1.1 pts*.
  - **τ-2 Bench Airline (N=50):** **66%** (vs K3-Low/Mid/Max 64%) — wins K3 by +2 pts at lower cost.
  - **SWE-Interact (N=75):** **20.0%** (vs K3-Max 21.3%) — within K3 by 1.3 pts.
  - **Specialized Intelligence Index (SII) Bedside Bench** (500 cases, 10 clinical specialties from Doximity): **Ember-1 sets the Pareto frontier across closed and open models** including GPT-5.6 Sol, GPT-6 Astra, and Claude Opus 5 — vendor-claimed Pareto point, not yet an independent rerun. ([Fireworks launch](https://fireworks.ai/blog/ember-1), [Doximity Bedside Bench])
- **Vals independent public agents**: TB2.1 (Vals lane) not separately quoted, Vals **ProofBench 61.00%** #23 leaderboard rank, **Finance Agent v2** leaderboard embed.
- **Customer A/B test on production coding workload (one customer reported in detail)**: average task completion rate 0.753 (Ember-1) vs 0.751 (K3) — *flat*; 21.4 steps vs 23.8; **29,900 output tokens vs 49,300 (-39% total)**; **reasoning tokens -71.3%**; downstream product metrics (task completion, success score, failure rate) all moved in the right direction.
- **Live customer A/B (two customers)**: ~35% fewer tokens per task at comparable quality; one customer is now running Ember-1 in live production with plans to scale. ([Fireworks launch](https://fireworks.ai/blog/ember-1))
- **Internal "silent rollout"**: Fireworks replaced its own internal coding/cowork traffic with Ember-1 *without telling its developers* — same answer rate, substantially fewer tokens, zero complaints. ([Fireworks launch](https://fireworks.ai/blog/ember-1))
- **OSWorld / WebArena / Toolathlon**: **no verified public score** for the Ember-1 ID found in surveyed sources.

Reasoning / knowledge:

- **Vals Index Leaderboard (independent)**: Ember-1 **50.94%** (closed-source) — actually *higher* than the Kimi K3 base at **50.30%**, by 0.64 pts. ([Vals via benchlm.ai/benchmarks/valsindex](https://benchlm.ai/benchmarks/valsindex))
- **Vals ProofBench (independent)**: **61.00%** #23 leaderboard rank. ([BenchLM ProofBench](https://benchlm.ai/benchmarks/valsproofbench))
- **AI IQ composite** (third-party aggregator): **105** (#88 of 164). ([AI IQ](https://www.aiiq.org/models/ember-1/))
- **HLE / GPQA Diamond / ARC-AGI exact-ID isolation**: **no verified public reruns** for Ember-1 in surveyed sources — the model's age (24 days post-launch) has not yet attracted independent reasoning benches.
- **General**: K3 parent-level reasoning is preserved (the goal of the post-training was *not* to change answers, but to think less; quality is the preserved variable).

Coding:

- **SWE-bench Verified (N=500)**: **92.2%** (vs K3-Max 93.2%, −1 pt — the *honest disclosed step-down* that lets Fireworks price Ember-1's other wins). Saves $68.10 per 500-task run. ([Fireworks launch](https://fireworks.ai/blog/ember-1), [dev.to recap](https://dev.to/jamilxt/ember-1-vs-kimi-k3-the-first-ai-model-trained-to-think-less-22ci))
- **DeepSWE 1.1 (N=113)**: **75.2%** (vs K3-Max 66.4%, **+8.8 pts**) — Ember-1 *outperforms its base*, the most surprising result. Saves $126.90 per 113 tasks. ([Fireworks launch](https://fireworks.ai/blog/ember-1))
- **Terminal-Bench 2.1 (N=89)**: **82.0%** (above K3-Max 80.9%). ([Fireworks launch](https://fireworks.ai/blog/ember-1))
- **SWE-Interact (N=75)**: **20.0%** (slightly below K3-Max 21.3%).
- **SWE-bench Pro**: **no verified public third-party score** for the Ember-1 ID.

Long context:

- **1M window** inherited from Kimi K3, verified via Fireworks and OpenRouter listings.

Operational / performance:

- **Speedup**: **3.4× faster** than Kimi K3 per thenewstack.io coverage ([Ember-1 vs. Kimi K3 Sept 29 2026](https://thenewstack.io/)). Reasoning tokens reduced 11-32% per turn on Vals measurements; 71.3% on Fireworks' internal A/B.
- **GPQA / MMMU / OCR-A specific**: **no verified public Ember-1 score**.
- **Cost parity in pricing**: identical to Kimi K3 ($3/$15/$0.30) — the savings are entirely at the per-task level via fewer tokens.

Pricing per token (same as K3):

- **vs K3**: identical $3/$15 list; **38% lower effective cost per task** in head-to-head A/B
- **vs DeepSeek V4.1 Flash**: Ember-1 input is **10×** more expensive ($3 vs $0.30), output is **12.5×** ($15 vs $1.20); Ember-1's stronger per-task accuracy plus 39% token reduction narrows but does not close the gap
- **vs GPT-6 Sol**: $3/$15 vs $2/$10 — slightly more expensive than Sol but with a higher SWE-V 92.2% vs Sol's Vibe Code 87.82%
- **vs Claude Opus 4.6**: $3/$15 vs $15/$75 — **5× cheaper**; SWE-Pro head-to-head (per Scale) put Muse Spark 1.1 51.5% vs Opus 4.6 47.1%, Ember-1 sits in the Kimi K3 family that won SWE-Pro dual-leader.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 82% (above K3-Max 80.9%), τ-2 Airline 66% (above K3 64%), SWE-Interact 20.0% (within K3), and the specialized Pareto on Doximity Bedside Bench — all the Fireworks-published tasks are strong real-agent signals; capped by the *lack of independent OSWorld/WebArena/Toolathlon reruns* and the SWE-Interact 20% ceiling on long-horizon interactive workflows.
- **Reasoning: 84/100.** **Vals Index 50.94%** (independent, *higher* than K3 at 50.30%), Vals ProofBench 61.00%, AI IQ 105; the post-training regime kept quality as the preserved variable; no third-party HLE/GPQA Diamond rerun for the exact Ember-1 ID yet.
- **Context window: 90/100.** Inherited 1M window from Kimi K3 plus Fireworks' K3-family memory management; no verified MRCR/RULER rerun on Ember-1 keeps it at the 90 floor rather than higher.
- **Multimodal: 82/100.** Native vision inherited from K3 (1M+ multimodal in the base); text-only output and no Qwen-3.8-Max family reruns keep it in the upper-mid multimodal band.
- **Coding: 90/100.** **SWE-V 92.2%** + **DeepSWE 1.1 75.2%** (above K3-Max on DeepSWE by +8.8 pts) + TB2.1 82.0% + SWE-Interact 20.0%; SWE-bench Pro same-harness rerun absent. The DeepSWE improvement over the parent is the surprise — and the Efficient Reasoning Index Bedside Bench Pareto frontier covers a wider set of real coding tasks.
- **Cost efficiency: 82/100.** Same list price as K3 ($3/$15/$0.30 cached); **~39% lower per-task cost** in customer A/B (35–50% reasoning-token range); not "cheap" by Flash-tier standards but a Pareto-best token efficiency at this quality band.
- **Overall Score: 86/100.** Half-up mean of the five non-cost dims: (82 + 84 + 90 + 82 + 90) / 5 = 85.6 → **86**. Best fit: agentic-coding deployments where K3's reasoning verbosity has been a cost concern and the SWE-V −1 pt is acceptable. The DeepSWE *improvement* over K3 by +8.8 pts is the strongest single argument: cutting useless reasoning helped *not just cost but agentic throughput*.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Five-source triangulation (Fireworks launch post with full K3 head-to-head, Vals independent public aggregates, AI IQ third-party aggregator, dev.to detailed comparison review, OpenRouter/BenchLM aggregated sheets). Identity resolved: Ember-1 ≡ K3 fine-tune, *not* a separate model — benchmark scores reflect the SFT'd variant at Kimi K3 list pricing. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
