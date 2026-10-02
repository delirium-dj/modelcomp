# Ember 1 — findings by GLM 5.3

- Source: Fireworks AI (`fireworks/ember-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1 (Ember-1)
- **Short description:** The first specialized model from Fireworks Research — built on Kimi K3 and trained (50+ experiments, 200+ evaluations) to reason efficiently: "Kimi K3's quality with 40% fewer tokens". Flag: a distilled/retrained variant of Kimi K3, not an independent architecture; Research Preview on Fireworks Serverless (two-week research releases, made permanent based on demand).
- **Provider / access:** Fireworks Serverless API, model path `accounts/fireworks/models/ember-1` (OpenAI-compatible REST / Python clients). Not on OpenCode Zen.
- **Release / knowledge:** released 2026-09-22 (model card; blog published 2026-09-23). Knowledge cutoff not published.
- **IDs:** `accounts/fireworks/models/ember-1`. No Zen ID.
- **Context window:** 1,040K tokens (official model card spec; matches BenchLM's 1.04M).
- **Modalities:** text and image input, text output; reasoning always part of the loop (shorter traces by design); function calling supported; fine-tuning not supported (training on customer data not used; enterprise customization offered separately).
- **Pricing (as of 2026-10-02):** $3.00 / $15.00 per MTok in/out ($0.30 cached input) — identical list price to Kimi K3, but ~40% fewer tokens per task at comparable quality, i.e. roughly 60% of K3's cost per task (official A/B: 39% total-token reduction, 71.3% reasoning-token reduction).
- **Architecture:** proprietary, 2.78T-parameter Mixture-of-Experts (inherited from the K3 base, 2.8T-class); calibrated: no; built via Fireworks Serverless Training with new reasoning-shortening algorithms across math, coding, instruction following, conversation, search, tool use, and software engineering.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (official launch post; N=89 — beats K3-max's 80.9%, at -51.9% tokens / -$23.1 per task)
- τ²-bench Airline: **66%** (official; N=50; beats K3's 64%)
- GDPval / OSWorld / MCP Atlas: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME: no verified public score found for Ember-1 itself (vendor's validated claim is quality parity with K3-max across seven benchmarks)
- Specialized Intelligence Index (Doximity Bedside Bench, 500 physician-validated clinical cases): sets a new Pareto frontier on cost/task across open and closed models including GPT-5.6 Sol, GPT-6 Astra, and Claude Opus 5 (official; scores in charts)
- BenchLM composite: not computed (unranked; 5 of 645 rows covered)

Coding:

- SWE-bench Verified: **92.2%** (official; N=500; K3-max: 93.2% — parity within 1 point, at -15.5% tokens / -$68.1 per task)
- DeepSWE 1.1: **75.2%** (official; N=113 — beats K3-max's 66.4% by 8.8 points, at -23.7% tokens / -$126.9 per task)
- SWE-Interact: **20.0%** (official; N=75; K3-max: 21.3%)
- Terminal-Bench 2.1: **82.0%** (see tool use)
- Live A/B (two customers' production coding traffic): score 0.753 vs K3's 0.751, steps 21.4 vs 23.8, output tokens 29.9K vs 49.3K (official)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found (1,040K window, official spec)

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 82.0% beats its own K3-max parent (80.9%) and sits near the 88%+ frontier band; τ²-bench Airline 66% is solid mid. No OSWorld/GDPval/MCP rows exist. Capped by thin breadth beyond terminal-style agentic work.
- **Reasoning: 72/100.** No direct GPQA/HLE rows exist for Ember-1; the score rests on the vendor's validated quality-parity-with-K3-max claim (seven benchmarks + production A/B at 0.753 vs 0.751) plus the Bedside Bench Pareto frontier over frontier-class models. Capped by the absence of direct reasoning benchmark numbers.
- **Context window: 92/100.** 1,040K tokens (official spec) earns the ≥1M tier; no published retrieval-quality rows, so not the full 95+.
- **Multimodal: 65/100.** Image input officially supported (plus function calling); no measured vision scores and no video/audio input. Image-in band (60-70).
- **Coding: 92/100.** SWE-bench Verified 92.2% (within a point of K3-max), DeepSWE 1.1 75.2% (above the 74%+ frontier reference, beating K3-max by 8.8 points), TB2.1 82.0% — a top-tier agentic-coding profile validated in production A/B. Capped only by the research-preview status and no long-horizon coding rows beyond SWE-Interact 20.0%.
- **Cost efficiency: 78/100.** Same $3/$15 list price as K3 (≈60 bracket on tokens alone), but the model's entire purpose is cost-per-task: ~35-50% fewer tokens at equal quality (39% total-token reduction in live A/B; per-task savings of $23-127 across official benchmark runs). Best value measured in this pass for high-volume agentic coding.
- **Overall Score: 81/100.** Half-up mean of the five quality dims: (85 + 72 + 92 + 65 + 92) / 5 = 81.2 → 81. A token-efficient Kimi K3: near-frontier agentic coding at roughly half the per-task cost — the go-to for volume coding workloads, pending its research-preview graduation.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-02
- Method: public internet research (Fireworks official launch post with K3-comparison eval tables, official model card for specs/pricing, BenchLM tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
