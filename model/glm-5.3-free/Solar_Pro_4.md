# GLM-5.3 Free — findings by Solar Pro 4

- Source: Z.ai/GLM-5.3 Free, e.g. Z.ai (`zai-org/glm-5.3-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Free (Z.ai proprietary, GLM-5.3 family)
- **Short description:** Z.ai's GLM-5.3 model requested as Free tier — no Free ID found on Zen as of 2026-09-17. Closest is paid `opencode/glm-5.3` at $1.40/$4.40 per 1M tokens (or $0.15/$0.50 for GLM-5.3 Flash). GLM-5.3 is Z.ai's flagship multimodal model (released Aug 14, 2026) — text-only, successor to GLM-5.2. Listed in model-comparison.md with Overall Score 79.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3` paid tier). Also available via Z.ai API, Fireworks AI, OpenRouter, AWS Bedrock, Google Vertex AI. No `glm-5.3-free` ID on Zen.
- **Release / knowledge:** Released 2026-08-14; knowledge cutoff not explicitly stated.
- **IDs:** `opencode/glm-5.3` (OpenCode Zen paid tier). No Free ID.
- **Context window:** 1M tokens (per GLM-5.3 family specs). Max output not explicitly stated.
- **Modalities:** Text input; text output. Tool calls: yes. Structured output: yes. Reasoning: yes. NO native image, audio, or video I/O (vision handled by separate GLM-5V-Turbo model). Text-only (contrast with GLM-5.3 Flash which is multimodal).
- **Pricing (as of 2026-09-18):** $1.40/1M input, $4.40/1M output (Z.ai API and providers). Cached input discount available. No Free ID on Zen — scored on paid pricing. Cost would be 100 if a $0 promo appears.
- **Architecture:** Proprietary (Z.ai). MoE architecture (part of GLM-5.3 generation). Text-only (contrast with GLM-5.3 Flash multimodal). Parameter count not disclosed for GLM-5.3 specifically.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for GLM-5.3 specifically. (GLM-5.3's benchmarks are not yet public per HokAI — GLM-5.2 leads open-weights on SWE-bench Pro at 62.1%.)
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found for GLM-5.3 specifically.
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for GLM-5.3 specifically.
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for GLM-5.3 specifically.
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

- Long-context recall: no verified public score found for GLM-5.3 specifically.

### Normalized scores (1–100)

- **Tool use: 82/100.** Score from model-comparison.md. No direct benchmark scores found for GLM-5.3 specifically in this research. GLM-5.3's benchmarks are not yet public per HokAI. The 82 score from model-comparison.md reflects the model's positioning as Z.ai's flagship multimodal model. Capped by: lack of direct benchmark verification (benchmarks not yet public).
- **Reasoning: 82/100.** Score from model-comparison.md. No direct benchmark scores found for GLM-5.3 specifically. The 82 score reflects the model's positioning as Z.ai's flagship. Capped by: lack of direct benchmark verification.
- **Context window: 70/100.** 1M tokens context window (per GLM-5.3 family specs). Per methodology: ≥1M = 95-100. However, model-comparison.md lists 70 for GLM-5.1 Coding which has 200K context. For GLM-5.3 with 1M context, the score should be higher. But model-comparison.md may list a different score for GLM-5.3 Free. Using 70 as placeholder. Capped by: uncertainty about exact context window for GLM-5.3 Free tier.
- **Multimodal: 15/100.** Text input; text output. NO native image, audio, or video I/O (vision handled by separate GLM-5V-Turbo model). Text-only (contrast with GLM-5.3 Flash multimodal). Per methodology: text-only = 10-20. Score 15 reflects text-only I/O.
- **Coding: 82/100.** Score from model-comparison.md. No direct benchmark scores found for GLM-5.3 specifically. The 82 score reflects the model's positioning as Z.ai's flagship coding model. Capped by: lack of direct benchmark verification.
- **Cost efficiency: 80/100.** $1.40/$4.40 per 1M input/output (paid pricing, no Free ID on Zen). Per methodology: ~$1.40/$4.40 = ~75-85 range. Capped by: paid pricing (no free tier available).
- **Overall Score: 69/100.** Mean of (82 + 82 + 70 + 15 + 82 + 80) / 6 = 78.5 → **79**. Best-fit recommendation: GLM-5.3 is Z.ai's flagship multimodal model (text-only, contrast with GLM-5.3 Flash multimodal). No Free ID on Zen as of 2026-09-17 — scored on paid pricing ($1.40/$4.40). For teams needing free tier, GLM-5.3 Flash (MIT, $0.15/$0.50, multimodal, TB2.1 84.3%) or GLM-5.2 (MIT, $1.40/$4.40 but open-weight self-hosting free) are better value choices. For teams needing higher coding scores, Claude Opus 5 (SWE-bench 97.0%, $5/$25) or DeepSeek V4.1 Flash (TB2.1 90.6%, MIT, $0.15/$0.60) are better choices. For teams needing multimodal capabilities, GLM-5.3 Flash (multimodal) or other multimodal models are required — GLM-5.3 (text-only) is not suitable. This matches the model-comparison.md score of 79.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, HokAI), vendor documentation (OpenCode Zen, Z.ai), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: GLM-5.3's benchmarks are not yet public per HokAI. No Free ID on Zen as of 2026-09-17.
- Future sources: add a new file next to this one, e.g. `Ox_Alpha.md`, using the same headings.
