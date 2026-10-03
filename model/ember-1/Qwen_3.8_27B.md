# Ember-1 — findings by Qwen 3.8 27B

- Source: Fireworks/Ember-1 (`fireworks/ember-1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's token-efficient specialized reasoning model built on Moonshot AI's Kimi K3; delivers K3-class quality with ~40% fewer tokens, aimed at agentic coding where reasoning tokens are the dominant cost.
- **Provider / access:** Fireworks Serverless (research preview) as `fireworks/ember-1`, Chat Completions API; also on OpenRouter as `fireworks/ember-1`. No OpenCode Zen ID found (no Free ID).
- **Release / knowledge:** Released 2026-09-23 (Fireworks blog, "Introducing Ember-1"); knowledge cutoff not disclosed.
- **IDs:** `fireworks/ember-1` (no Free ID on Zen)
- **Context window:** 1,048,576 total (1M) per OpenRouter model spec; max output not disclosed.
- **Modalities:** text + image in, text out; reasoning (on by default, `reasoning_effort` tunable); tool calls; JSON mode (`response_format`).
- **Pricing (as of 2026-10-03):** $3.00 in / $15.00 out per 1M tokens (same list as base Kimi K3 API: uncached $3/M, cached $0.30/M per Fireworks). Fireworks reports 35–50% token reduction vs K3 across seven benchmarks and ~39% total-token reduction in live customer A/B tests.
- **Architecture:** Proprietary; specialized efficiency training on top of Moonshot AI Kimi K3 (50+ training experiments, 200+ evaluations, no customer data per Fireworks).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks blog 2026-09-23, N=89; beats K3-max 80.9% at -51.9% cost)
- Tau2-Bench (Airline): **66%** (Fireworks blog, N=50; K3 arms all 64%)
- Bedside Bench (Doximity, Specialized Intelligence Index): Pareto frontier on cost/task vs open and closed models incl. GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5 (500 clinical cases / 10 categories); no verified public numeric SII score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MRCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no direct Ember-1 entry found (reference only: base Kimi K3 at reasoning max = AA Index 44; Fireworks states Ember-1 matches K3-max quality across seven benchmarks)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **92.2%** (Fireworks blog, N=500; K3-max 93.2% at -15.5% cost)
- SWE-Interact: **20.0%** (Fireworks blog, N=75; K3-max 21.3%)
- DeepSWE 1.1: **75.2%** (Fireworks blog, N=113; K3-max 66.4% at -23.7% cost)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (1M context per OpenRouter spec; 512K+ retrieval unverified)

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 82.0% (N=89) sits just under the 88%+ frontier reference; Tau2-Bench Airline 66% beats every K3 arm; Bedside Bench cost/task Pareto frontier; capped by missing independent Tau3 / GDPval-AA verified numbers.
- **Reasoning: 72/100.** No direct GPQA/HLE published; quality verified equivalent to base Kimi K3 (AA Index 44 at max, above the methodology mid-band 20–35) across seven benchmarks with 35–50% shorter traces and 0.753 vs 0.751 in the production A/B; capped by the absent direct reasoning-benchmark evidence.
- **Context window: 95/100.** 1M total context (1,048,576) per OpenRouter spec = >=1M band (95–100); no verified 512K+ retrieval to award 100.
- **Multimodal: 65/100.** text + image in, text out (+image in = 60–70 band); no verified video/audio input.
- **Coding: 88/100.** SWE-bench Verified 92.2% and DeepSWE 1.1 75.2% (>=74% frontier reference) with SWE-Interact 20.0% and TB2.1 82.0% just under the 85% reference; capped by absent public SciCode / LiveCodeBench numbers.
- **Cost efficiency: 65/100.** $3/$15 per 1M lists at ~60 per methodology, +5 for the verified Pareto cost/task lead (-51.9% vs K3-max on TB2.1, 39% total-token reduction in live customer A/B, Bedside Bench cost/task frontier).
- **Overall Score: 80/100.** (82 + 72 + 95 + 65 + 88) / 5 = 80.4 → 80. Best fit: agentic coding and tool-heavy loops where reasoning tokens dominate cost and K3-class quality is required.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-10-03
- Method: public internet research (Fireworks blog "Introducing Ember-1" 2026-09-23, OpenRouter model spec, Artificial Analysis leaderboard for base-K3 reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
