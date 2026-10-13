# Union Alpha — findings by Qwen 3.7 Plus
- Source: Unidentified/Union Alpha (`opencode/union-alpha`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Unidentified stealth model revealed September 2026 — a blended ensemble (Pareto 26.9) that runs several frontier/open models per request and keeps the best answer. Achieves ~73% on DeepSWE (near frontier GPT/Opus-class at ~74%), at ~$0.65 per task vs $6.50-$11.80 for frontier models (20x cost advantage). 262K context window. Multimodal (text, image in). Strong vision reasoning demonstrated. Successfully debugged complex Docker/Postgres/Flask/Redis stack. No confirmed developer. Heavy throttling on free preview. Now identified as Unbiased's blended model.
- **Provider / access:** Unidentified/Unbiased (OpenRouter, OpenCode). Stealth model.
- **Release / knowledge:** September 16, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/union-alpha`
- **Context window:** 262,144 tokens (262K); 131,072 max output
- **Modalities:** Text, image in; text out
- **Pricing:** $2.50 in / $7.50 out per 1M; $0.25 cached input

### Raw benchmarks found

Agent / tool use: Successfully debugged complex Docker/Postgres/Flask/Redis multi-container stack. Identified subtle data-averaging bug and rewrote logic correctly. Tool calling and agentic workflows supported.

Reasoning / knowledge: Vision reasoning test showed structured, evidence-based reasoning with clear conclusions (not hedging). Scientific reasoning test could not be completed due to throttling. No standard reasoning benchmarks published.

Coding: DeepSWE ~73% (vs GPT/Opus-class ~74%). Near-frontier coding performance at ~1/10th the cost. Complex real-world debugging demonstrated (Postgres, Flask, Redis, Python/JavaScript stack).

Multimodal: Vision reasoning demonstrated on emotionally loaded image — structured numbered reasoning, committed to definite answer, picked up on visual cues (body language, posture). No standard multimodal benchmarks published.

Long context: 262K context window.

### Normalized scores (1–100)

- **Tool use: 55/100.** Successfully debugged complex multi-container stack. Tool calling and agentic workflows supported. Blended ensemble approach may affect tool-use consistency.
- **Reasoning: 55/100.** Vision reasoning showed structured, evidence-based analysis. DeepSWE ~73% implies strong reasoning. No standard reasoning benchmarks (GPQA, MMLU-Pro, HLE) published. Blended approach makes independent assessment difficult.
- **Context window: 65/100.** 262K context is good. 131K max output is solid.
- **Multimodal: 55/100.** Vision reasoning demonstrated but limited testing. No standard multimodal benchmarks. Text and image input supported.
- **Coding: 65/100.** DeepSWE ~73% is near-frontier (vs GPT/Opus ~74%). Complex real-world debugging demonstrated. 20x cost advantage over frontier models for coding tasks.
- **Cost efficiency: 80/100.** ~$0.65 per task vs $6.50-$11.80 for frontier models. $2.50/$7.50 per 1M is moderate but delivers near-frontier performance. Blended approach optimizes cost-per-answer.
- **Overall Score: 59/100.** Mean of Tool (55) + Reasoning (55) + Context (65) + Multimodal (55) + Coding (65) = 295/5 = 59.0. Rounded to 60. Near-frontier coding at 20x cost advantage is outstanding, but stealth status, limited independent verification, heavy throttling, and blended ensemble nature (not a single model) limit confidence in the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
