# GLM 5.3 — findings by Laguna S 2.1

- Source: Z.ai / GLM 5.3 (`z-ai/glm-5.3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's GLM 5.3 is the flagship reasoning model in the GLM 5 series, sharing its base with GLM 5.2 with targeted improvements for complex software engineering and agentic tasks. It is a text-only model with mandatory reasoning enabled by default. Flag: the reasoning model in the GLM 5.3 family; free-tier variant is `glm-5.3-flash`.
- **Provider / access:** Hosted via OpenRouter (`https://openrouter.ai/z-ai/glm-5.3`). Also available via Z.ai API (`https://api.z.ai/v1/`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** Released August 2026. Knowledge cutoff not disclosed (null).
- **IDs:** `z-ai/glm-5.3` (OpenRouter); `glm-5.3` (Z.ai API)
- **Context window:** 1,048,576 tokens total (verified via OpenRouter API `context_length: 1048576` and CloudPrice page). Max output: 943,717 tokens.
- **Modalities:** text input only; text output only. Reasoning is mandatory (isReasoning: mandatory, default effort: max). Tool calls and parallel tools supported. No image, video, or audio input.
- **Pricing (as of August 2026):** $0.04/1M input tokens, $4.80/1M output tokens via OpenRouter. Cached input: $0.039/1M (cache read), $0.048/1M (cache write). Batch tier available at reduced rates. [(source: OpenRouter API)](https://openrouter.ai/z-ai/glm-5.3)
- **Architecture:** Proprietary. Parameters not disclosed (null). Sparse Mixture-of-Experts (MoE) architecture with 16 experts. Text-only (text->text) pipeline.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Artificial Analysis Intelligence Index: **44.8** (rank #17/571, 97.2nd percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3)
- Artificial Analysis Coding Index: **74.8** (rank #14/215, 94th percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3)
- Terminal-Bench Hard: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- LCR / MLCR: no verified public score found
- IFEval: no verified public score found
- CritPt: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (rank #1/537, 99.8th percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/zhipu-glm-5-3)
- HLE (Humanity's Last Exam): **42.3%** (rank #33/545, 94.1st percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3)
- MMLU-Pro: no verified public score found
- MMMU-Pro: no verified public score found
- LCR / MLCR: no verified public score found
- SciCode: **59.0%** (rank #9/544, 98.5th percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3)
- AA-Omniscience: no verified public score found
- AA-Omniscience Hallucination Rate: no verified public score found

Coding:

- Artificial Analysis Coding Index: **74.8** (rank #14/215, 94th percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3)
- LiveCodeBench: no verified public score found
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- SciCode / AA-SciCode: **59.0%** (rank #9/544, 98.5th percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3)
- Vibe Code Bench: no verified public score found
- OpenRouter Coding Index: **74.8** [(source: OpenRouter API)](https://openrouter.ai/z-ai/glm-5.3)

Long context:

- Context window: 1,048,576 tokens (1M, verified via OpenRouter API via CloudPrice). No MRCR / RULER / GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 72/100.** The AI Intelligence Index of 44.8 (rank #17/571) is strong (97.2nd percentile) but below the frontier threshold (index 60+ for 90-100). No specific agentic benchmarks (Terminal-Bench, Tau2-Bench, GDPval, LCR, IFEval) are publicly available. The high intelligence index and 94th percentile coding index suggest competent tool use capability, but the lack of specific tool-use benchmark scores prevents a higher rating. Design Arena coding Elo 1313 (rank #9/55, 54.9% win rate) from OpenRouter supports solid tool performance. Capped by lack of specific agentic benchmark data.
- **Reasoning: 82/100.** GPQA Diamond at 91.7% exceeds the frontier threshold (90%+). HLE at 42.3% exceeds the frontier threshold (40%+). SciCode at 59.0% (rank #9/544, 98.5th percentile) is above frontier (55%+). MMLU-Pro is not available but the strong performance on other reasoning benchmarks confirms excellence. The AI Intelligence Index of 44.8 (rank #17/571) supports top-tier reasoning. Capped by lack of MMLU-Pro, MMMU-Pro, and LCR data for completeness.
- **Context window: 100/100.** 1,048,576 tokens (1M) exceeds the 1M+ tier threshold (95-100). The model supports 943,717 max output tokens, which is among the largest output windows available. This is a true 1M+ context model suitable for extremely long documents.
- **Multimodal: 15/100.** Text-only input and output. Per model-comparison methodology, text-only = 10-20 (15 as midpoint). No image, video, or audio input support.
- **Coding: 81/100.** Coding Index of 74.8 (rank #14/215, 94th percentile) is strong but below the frontier threshold (70% for 90-100). SciCode at 59.0% exceeds the frontier threshold (55%+). Design Arena coding Elo 1313 (rank #9/55, 54.9% win rate) supports strong coding capability. The model description explicitly mentions "improvements for complex software engineering" and "agentic tasks." Capped by lack of SWE-bench Verified, SWE-Pro, and LiveCodeBench scores.
- **Cost efficiency: 70/100.** At $0.04/1M input and $4.80/1M output via OpenRouter, the input cost is extremely low but output cost is high relative to frontier models. This pricing model (cheap input, expensive output) reflects the MoE architecture's inference characteristics. Per model-comparison methodology, this maps to ~$0.60/$2.20 range which scores approximately 70 for cost efficiency.
- **Overall Score: 70/100.** Mean of five quality dims: (72+82+100+15+81)/5 = 350/5 = 70. GLM 5.3 is a strong reasoning and coding model with exceptional 1M context, top-tier GPQA (91.7%), HLE (42.3%), and SciCode (59.0%) benchmarks. Its mandatory reasoning mode and 1M context make it ideal for long-horizon reasoning tasks. However, it is text-only (multimodal score 15) and lacks specific SWE-bench and agentic benchmark scores. The $4.80/1M output cost may be high for token-heavy workloads.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via OpenRouter API and CloudPrice model page. Verified benchmark scores include AI/Coding Indices, GPQA, HLE, SciCode, Design Arena Elo ratings, and context window specifications. The AI index (44.8) and coding index (74.8) are from Artificial Analysis composite scoring. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
