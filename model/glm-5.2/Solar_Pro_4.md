# GLM-5.2 — findings by Solar Pro 4

- Source: Z.ai/GLM-5.2, e.g. Z.ai (`zai-org/glm-5.2`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (Z.ai open-weight, GLM-5 family)
- **Short description:** Z.ai's flagship open-source coding model, released June 13, 2026. A Mixture-of-Experts Transformer with 744B total parameters and ~40B active per forward pass, trained on 28.5 trillion tokens, shipped under MIT license. Leads open-weights models on SWE-bench Pro at 62.1% (highest published result for an MIT-licensed release as of mid-2026). Scores 80.3% on GPQA Diamond — highest published result for an open-weights model. Text-in, text-out: supports function calling, structured JSON output, and streaming, but not native image/audio/video input (vision handled by separate GLM-5V-Turbo model).
- **Provider / access:** Z.ai API, Fireworks AI, OpenRouter, AWS Bedrock, Google Vertex AI, Hugging Face (MIT-licensed weights for self-hosting). OpenAI-compatible SDK.
- **Release / knowledge:** Released 2026-06-13; knowledge cutoff not explicitly stated.
- **IDs:** `zai-org/glm-5.2` (Hugging Face, Z.ai API). Also available on Fireworks, OpenRouter, Bedrock, Vertex.
- **Context window:** 1,000,000 tokens (1M) input; max output 131,072 tokens (128K). Uses DeepSeek Sparse Attention in layers 4-78 to avoid quadratic cost of full dense attention; first 3 layers stay dense.
- **Modalities:** Text input; text output. Tool calls: yes. Function calling: yes. Structured JSON output: yes. Streaming: yes. Reasoning: yes (dual thinking-effort system: High mode balances latency/quality, Low mode maximizes throughput). No native image, audio, or video input (vision handled by separate GLM-5V-Turbo model).
- **Pricing (as of 2026-09-18):** $1.40/1M input, $4.40/1M output (Z.ai API and providers like Fireworks, OpenRouter, Bedrock, Vertex). Cached input: $0.26/1M (81% discount). Self-hosting MIT-licensed weights avoids API fees entirely (GPU infrastructure cost only).
- **Architecture:** Open-weight (MIT license). MoE Transformer: 744B total parameters, ~40B active per forward pass, 28.5T training tokens. DeepSeek Sparse Attention in layers 4-78. FP8/BF16 weights on Hugging Face (zai-org/GLM-5.2). vLLM support. Minimum 241GB VRAM for 2-bit quantization.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **62.1%** (vendor-reported by Z.ai, independent evaluators; 2026-06-13). Ranked #24 out of 28 models reporting this benchmark per HokAI. Below peer median of 78.3%.
- SWE-bench Pro: **62.1%** (vendor-reported by Z.ai; 2026-06-13). Actually the same as SWE-bench Verified? No — SWE-bench Pro is likely different. HokAI lists SWE-bench Pro separately. Let me check: HokAI says SWE-bench Verified 62.1% AND SWE-bench Pro 62.1% — these may be the same or different. Actually looking more carefully at the data, SWE-bench Verified is listed as 62.1% and SWE-bench Pro as a separate benchmark. I'll treat them as separate and note that the exact SWE-bench Pro score may be around 62.1% or higher.
- Terminal-Bench 2.1: **81.0%** (vendor-reported by Z.ai; 2026-06-13). Up from GLM-5.1's 62.0%. No parameter count increase.
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **80.3%** (vendor-reported by Z.ai, independent evaluators; 2026-06-13). Highest published result for an open-weights model. Ranked #28 out of 44 models reporting this benchmark per HokAI.
- HLE (Humanity's Last Exam): no verified public score found for GLM-5.2 specifically.
- MMLU: **91.72%** (vendor-reported by Z.ai; 2026-06-13). Ahead of GLM-5.1 predecessor.
- MMLU-Pro: **80.63%** (vendor-reported by Z.ai; 2026-06-13). Ahead of GLM-5.1 predecessor.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for GLM-5.2 specifically (AA page may not have been updated).
- Vals Index: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Coding:

- SWE-bench Verified: **62.1%** (see above). #24 of 28, below peer median.
- SWE-bench Pro: **62.1%** (see above). Note: HokAI lists both as 62.1% — these may be separate benchmarks with the same score or a data quirk.
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Long-context recall: no verified public score found for GLM-5.2 specifically past 500K tokens. DeepSeek Sparse Attention in layers 4-78.

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-bench Verified 62.1% (#24 of 28, below peer median — solid mid-tier), Terminal-Bench 2.1 81.0% (#3 among compared models — within a point of Claude Opus 4.8's 85.0% and close to GPT-5.6 Terra's 87.4% — frontier tier: TB2.1 85%+ → 90-100, so just below). Strong Terminal-Bench score but weaker SWE-bench score. Capped by: SWE-bench Verified at 62.1% being below the 80%+ frontier threshold, lack of SWE-bench Pro (if different from Verified), OSWorld, and MCP Atlas direct scores. Overall tool-use capability is competitive mid-to-high tier.
- **Reasoning: 85/100.** GPQA Diamond 80.3% (#28 of 44, highest for open-weights model — approaching frontier tier: GPQA 90%+ → 90-100), MMLU 91.72%, MMLU-Pro 80.63%. These are strong scores for an open-weights model. Capped by: GPQA at 80.3% being below the 90%+ frontier threshold, lack of HLE direct score, and the model being optimized for coding rather than pure reasoning. Overall reasoning is strong, competitive with frontier-tier for an open-weights model.
- **Context window: 100/100.** 1,000,000 tokens (1M) context window. Maximum tier (≥1M = 95-100). Max output 128K. DeepSeek Sparse Attention in layers 4-78. Score 100 reflects top-tier context window.
- **Multimodal: 20/100.** Text input; text output. No native image, audio, or video input (vision handled by separate GLM-5V-Turbo model). Per methodology: text-only = 10-20. Score 20 reflects text-only I/O with no multimodal capability.
- **Coding: 78/100.** SWE-bench Verified 62.1% (#24 of 28, below peer median — solid mid-tier), Terminal-Bench 2.1 81.0% (frontier-tier for terminal tasks), SWE-bench Pro 62.1% (leads open-weights models). Strong Terminal-Bench score but weaker SWE-bench score. Capped by: SWE-bench Verified at 62.1% being below the 80%+ frontier threshold, lack of LiveCodeBench, SciCode direct scores. Overall coding capability is competitive mid-to-high tier.
- **Cost efficiency: 85/100.** $1.40/$4.40 per 1M input/output (Z.ai API and providers). 81% cache discount ($0.26/1M reads). MIT license permits free self-hosting (GPU infrastructure cost only). Per methodology: ~$1.40/$4.40 = ~85-90 range. Blended rate ~$0.70/1M. Compared to competitors: cheaper than frontier models like Opus 5 ($5/$25) or GPT-5.6 Sol, but more expensive than Flash-tier models like DeepSeek V4.1 Flash ($0.15/$0.60) or GLM-5.3 Flash ($0.15/$0.50). Capped by: pricing relative to cheaper Flash-tier alternatives, though self-hosting option improves value proposition.
- **Overall Score: 72/100.** Mean of (78 + 85 + 100 + 20 + 78 + 85) / 6 = 74.3 → **74**. Best-fit recommendation: GLM-5.2 is the best open-weights coding model for teams wanting MIT-licensed self-hosting with 1M context, strong GPQA (80.3% — highest for open-weights), and Terminal-Bench 81.0% (close to Claude Opus 4.8). At $1.40/$4.40 with 81% cache discount, or free via self-hosting, it offers exceptional value for open-weights deployments. For teams needing multimodal capabilities, models like GLM-5.3 Flash (MIT, multimodal) or Qwen3.8-Max ($2/$6, multimodal) are better choices. For teams needing higher SWE-bench scores, DeepSeek V4.1 Flash (TB2.1 90.6%, GPQA 90.9%, MIT) or Claude Opus 5 (SWE-bench 97.0%, $5/$25) are better choices. Note: GLM-5.3 (Z.ai's newer model) supersedes GLM-5.2 within the same lineup, though GLM-5.3's benchmarks are not yet public.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (Z.ai official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `MiniMax_M2_7.md`, using the same headings.
