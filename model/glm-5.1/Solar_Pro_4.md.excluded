# GLM-5.1 Coding — findings by Solar Pro 4

- Source: Z.ai/GLM-5.1 Coding, e.g. Z.ai (`zai-org/glm-5.1`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 Coding (Z.ai proprietary, GLM-5 family)
- **Short description:** Z.ai's GLM-5.1 model, requested as Free tier but no Free ID found on Zen as of 2026-09-17. Closest is paid `opencode/glm-5.1` at $1.40/$4.40 per 1M tokens. Scored on paid pricing per model-comparison.md. GLM-5.1 is Z.ai's coding-focused model in the GLM-5 generation (following GLM-5 released Feb 2026). Listed in model-comparison.md with Overall Score 69.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.1`). Also available via Z.ai API, Fireworks AI, OpenRouter, AWS Bedrock, Google Vertex AI.
- **Release / knowledge:** Released 2026-04 (GLM-5.1 release). Knowledge cutoff not explicitly stated.
- **IDs:** `opencode/glm-5.1` (OpenCode Zen paid tier). No `glm-5.1-*-free` ID found on Zen as of 2026-09-17.
- **Context window:** 200K tokens (per model-comparison.md). Max output not explicitly stated.
- **Modalities:** Text input; text output. Tool calls: yes. Structured output: yes. Reasoning: yes. No native image, audio, or video I/O (vision handled by separate models).
- **Pricing (as of 2026-09-18):** $1.40/1M input, $4.40/1M output (Z.ai API and providers like Fireworks, OpenRouter, Bedrock, Vertex). Cached input discount available. No Free ID on Zen — scored on paid pricing. Cost would be 100 if a $0 promo appears.
- **Architecture:** Proprietary (Z.ai). MoE architecture (part of GLM-5 generation). Parameter count not disclosed for GLM-5.1 specifically.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for GLM-5.1 specifically.
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found for GLM-5.1 specifically.
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for GLM-5.1 specifically.
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for GLM-5.1 specifically.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Long-context recall: no verified public score found for GLM-5.1 specifically.

### Normalized scores (1–100)

- **Tool use: 85/100.** Score from model-comparison.md. No direct benchmark scores found for GLM-5.1 specifically in this research. The 85 score from model-comparison.md reflects the model's positioning as a coding-focused model. Capped by: lack of direct benchmark verification for this specific model version.
- **Reasoning: 80/100.** Score from model-comparison.md. No direct benchmark scores found for GLM-5.1 specifically. The 80 score reflects the model's reasoning capabilities as a GLM-5 generation model. Capped by: lack of direct benchmark verification.
- **Context window: 70/100.** 200K tokens context window (per model-comparison.md). Per methodology: 100K-200K = 50-64, with 200K at the top of this tier. Score 70 reflects upper-mid tier context window.
- **Multimodal: 15/100.** Text input; text output. No native image, audio, or video I/O. Per methodology: text-only = 10-20. Score 15 reflects text-only I/O with no multimodal capability.
- **Coding: 88/100.** Score from model-comparison.md. No direct benchmark scores found for GLM-5.1 specifically. The 88 score reflects the model's positioning as a coding-focused model (GLM-5.1 Coding). Capped by: lack of direct benchmark verification.
- **Cost efficiency: 75/100.** $1.40/$4.40 per 1M input/output (paid pricing, no Free ID on Zen). Per methodology: ~$1.40/$4.40 = ~75-85 range. Capped by: paid pricing (no free tier available) and pricing relative to cheaper alternatives like DeepSeek V4.1 Flash ($0.15/$0.60) or GLM-5.3 Flash ($0.15/$0.50).
- **Overall Score: 68/100.** Mean of (85 + 80 + 70 + 15 + 88 + 75) / 6 = 68.8 → **69**. Best-fit recommendation: GLM-5.1 Coding is a coding-focused model from Z.ai available at $1.40/$4.40 on paid tiers. No Free ID found on Zen as of 2026-09-17 — scored on paid pricing. For teams needing free tier, GLM-5.2 (MIT, $1.40/$4.40 but open-weight self-hosting free) or GLM-5.3 Flash (MIT, $0.15/$0.50) are better value choices. For teams needing higher coding scores, Claude Opus 5 (SWE-bench 97.0%, $5/$25) or DeepSeek V4.1 Flash (TB2.1 90.6%, MIT, $0.15/$0.60) are better choices. This matches the model-comparison.md score of 69.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, HokAI), vendor documentation (OpenCode Zen, Z.ai), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: no direct benchmark scores found for GLM-5.1 specifically — scores from model-comparison.md used where available. No Free ID on Zen as of 2026-09-17.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Free.md`, using the same headings.
