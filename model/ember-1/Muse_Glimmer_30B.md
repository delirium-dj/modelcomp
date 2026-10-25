# Ember-1 — findings by Muse Glimmer 30B

- Source: Fireworks / Ember-1
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research specialized reasoning model built on Moonshot Kimi K3, trained to produce ~40% fewer reasoning tokens while maintaining comparable quality across coding and agentic workloads. First in the Ember series.
- **Provider / access:** Fireworks Serverless `fireworks/ember-1` model path `accounts/fireworks/models/ember-1`. Chat Completions API. Available via aggregators OpenRouter, Eden AI, etc.
- **Release / knowledge:** Public launch 2026-09-23; created 2026-09-22 per Fireworks model page. Knowledge cutoff not publicly disclosed.
- **IDs:** `fireworks/ember-1`
- **Context window:** 1,040k tokens total — Fireworks model page lists 1040k tokens, LLM Stats reports 1.0M tokens, Eden AI reports up to 1.05M tokens. Verified via official model page; max output reported up to 131,072 by third-party catalogs.
- **Modalities:** Input text, image; output text. Reasoning yes, function calling supported, JSON mode supported, tool calls supported.
- **Pricing (as of 2026-10-25):** $3.00 /1M input, $0.30 /1M cached input, $15.00 /1M output via Fireworks. Consistent across Fireworks model page, LLM Stats, Eden AI.
- **Architecture:** Proprietary Mixture-of-Experts, ~2.78T total parameters. Built on Kimi K3 base, post-trained by Fireworks.

### Raw benchmarks found

> Sources: Fireworks blog Introducing Ember-1 2026-09-23, Fireworks model page, LLM Stats model page 2026-09-23, BenchLM.ai model page 2026-10-25, Eden AI model page.

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks blog, official launch table)
- τ²-bench Airline: **66.0%** (Fireworks blog)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **92.2%** (Fireworks blog)
- DeepSWE 1.1: **75.2%** (Fireworks blog)
- SWE-Interact: **20.0%** (Fireworks blog)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: see DeepSWE above

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 82.0% and τ²-bench Airline 66% from official launch; strong agentic signal but capped by lack of independent Tau3/Claw/Toolathon verification.
- **Reasoning: 78/100.** Built on Kimi K3 with reported 35-50% reasoning token reduction without accuracy loss and 40% fewer tokens in practice; no public GPQA/HLE scores to confirm ceiling.
- **Context window: 94/100.** 1.04M tokens verified by Fireworks and aggregators; competitive large context tier. No public RULER/GraphWalks score.
- **Multimodal: 60/100.** Text + image input, text output with function calling; vision support confirmed but no video/audio and limited public multimodal benchmark numbers.
- **Coding: 88/100.** SWE-bench Verified 92.2% near frontier and DeepSWE 75.2%; capped by absence of LiveCodeBench/SWE-Pro public scores.
- **Cost efficiency: 62/100.** $3.00/$15.00 pricing with ~40% token savings vs Kimi K3; output price high relative to peers, no free tier.
- **Overall Score: 80/100.** Mean of five quality dims (80+78+94+60+88)/5 = 80.0. Best-fit: token-efficient agentic/coding reasoning model with large context and strong SWE performance.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
