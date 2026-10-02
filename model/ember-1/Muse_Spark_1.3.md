# Ember-1 — findings by Muse Spark 1.3

- Source: Fireworks AI/Ember-1 (`ember-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research specialized MoE preview built on Kimi K3. Top use case is token-efficient agentic coding at K3-max quality with ~40% fewer tokens.
- **Provider / access:** Fireworks AI Serverless (`accounts/fireworks/models/ember-1`); OpenRouter `fireworks/ember-1`. Chat Completions API.
- **Release / knowledge:** 2026-09-23 release (Research Preview); knowledge cutoff not publicly disclosed
- **IDs:** `ember-1` (Fireworks); `accounts/fireworks/models/ember-1` (serverless route)
- **Context window:** 1.04M total (1M listed by most trackers); max output 943.7K reported by lmmarketcap.com — verified via listings only, not via retrieval measurement
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-24):** $3.00 in / $15.00 out per 1M; cache read $0.30 per 1M (Fireworks AI, OpenRouter). No $0 free tier.
- **Architecture:** MoE, 2.78T params reported by llmreference.com (unconfirmed by vendor); built on Kimi K3 via 50+ Fireworks Serverless Training experiments; proprietary, weights not released

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (n=89): **82.0%** (Fireworks official blog fireworks.ai/blog/ember-1, Sep 2026; vs K3-max 80.9%)
- Tau2-Bench Airline (n=50): **66%** (Fireworks official blog; vs K3-max 64%)
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (themodelbeat.com: no Epoch AI scores yet as of Sep 2026)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Bedside Bench (SII, 500 cases): **Pareto frontier** (Fireworks official; vs GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5 on cost/task — leadership claim without single pass-rate number)

Coding:

- SWE-bench Verified (n=500): **92.2%** (Fireworks official blog; vs K3-max 93.2%)
- SWE-Interact (n=75): **20.0%** (Fireworks official blog; vs K3-max 21.3%)
- DeepSWE 1.1 (n=113): **75.2%** (Fireworks official blog; vs K3-max 66.4%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks: **no verified public score found**; 1M+ length verified via listings with no retrieval score reported

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 82.0 plus Tau2-Airline 66 beats K3-max; capped below 90 with TB under 88 frontier and no Tau3/GDPval.
- **Reasoning: 86/100.** K3-max parity across 7 vendor benchmarks plus Bedside Bench Pareto frontier; capped with no direct GPQA/HLE number.
- **Context window: 96/100.** 1.04M total meets >=1M band; capped below 100 with no MRCR/RULER retrieval evidence.
- **Multimodal: 65/100.** Text/image in with tool-use vision covers image band; capped without video/PDF/audio in or non-text out.
- **Coding: 93/100.** SWE-Verified 92.2 plus DeepSWE 75.2 above 74 frontier with TB 82.0; capped by SWE-Interact 20.0 and no LiveCodeBench.
- **Cost efficiency: 60/100.** $3/$15 per 1M matches $3/$15 ≈60 tier; premium vs K3 efficiency gains noted but priced at flagship level.
- **Overall Score: 85/100.** Mean of five quality dims (87+86+96+65+93)/5=85.4; best-fit for token-efficient K3-class agentic coding.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
