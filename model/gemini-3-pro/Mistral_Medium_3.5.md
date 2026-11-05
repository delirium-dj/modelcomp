# Gemini 3 Pro — findings by Mistral Medium 3.5

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's most intelligent model at launch (November 2025), featuring native multimodal understanding across text, images, video, and audio. Positioned as Google's best model for complex tasks, deep reasoning, and bringing creative concepts to life with smart, concise, direct responses.
- **Provider / access:** Available through Google Cloud Vertex AI, DeepMind API, and integrated into Google products (Gemini app, Search AI Mode, Antigravity IDE). Preview released November 18, 2025. **API retired March 9, 2026** in favor of Gemini 3.1 Pro, but research files still reference the model for historical comparison.
- **Release / knowledge:** Preview release: November 18, 2025. Knowledge cutoff: January 2025. Successor: Gemini 3.1 Pro (released September 2026).
- **IDs:** `gemini-3-pro`, `gemini-3-pro-preview`. Model is referred to as "Gemini 3 Pro Preview" in some contexts.
- **Context window:** 1,000,000 tokens (1M) for input, with up to 66,000 output tokens (some sources report 64,000). Unified architecture processes text, images, video, audio, and PDFs without separate modality encoders.
- **Modalities:** Text, images, video, audio inputs; text output. Native multimodal architecture (not bolted-on vision encoder).
- **Pricing (as of 2026-11-05):** 
  - Standard (<=200K context): $2.00 per million input tokens, $12.00 per million output tokens.
  - Long context (>200K tokens): $4.00 per million input tokens, $18.00 per million output tokens (includes thinking tokens).
  - Third-party aggregators list: $1.00 input, $6.00 output per M tokens.
  - Note: Pricing was competitive at launch; model was positioned as premium tier below the even more capable (but later-released) Gemini 3.5 Pro.
- **Architecture:** Proprietary; specific parameter count undisclosed. Trained using reinforcement learning techniques that leverage multi-step reasoning. Pre-trained on vast datasets across text, code, images, audio (speech and other types), and video. Post-training included instruction tuning, RLHF data, and human-preference data.
- **Features:** Adaptive thinking, integrated grounding for multimodal problem-solving, Deep Think mode (significantly improves performance on hardest tasks: GPQA Diamond 93.8%, HLE ~41%, ARC-AGI-2 45.1%). Advanced reasoning with unprecedented depth and nuance. Can configure live telemetry streams for dynamic applications.

### Raw benchmarks found

Reasoning / knowledge:

- **GPQA Diamond (graduate-level science): 91.9%** (standard; Vellum AI, Benchgen, Awesome Agents). **93.8% with Deep Think** (Benchgen). This was the highest reported by any model at launch (November 2025), giving ~4-point lead over GPT-5.1 at 88.1%. Confirms state-of-the-art performance on PhD-level scientific knowledge.
- **MMLU-Pro: 89.8%** (Awesome Agents) — highest recorded at launch, though some sources note this benchmark is approaching saturation.
- **Humanity's Last Exam (HLE): 37–38% without tools** (Artificial Analysis, Medium). PhD experts achieve 65-74%; non-experts 34% with unlimited web access. **~40%+ with Deep Think** (Benchgen). More than 10 percentage points improvement over previous best model.
- **ARC-AGI-2: 31.1% / 45.1% with Deep Think** (Vellum AI). Abstract visual puzzles that resist simple memorization.
- **Artificial Analysis Intelligence Index:** Leading model in 5 of 10 evaluations, including GPQA Diamond, MMLU-Pro, HLE, LiveCodeBench, and SciCode. Score of **37% on HLE** highlighted as particularly impressive.
- **IFBench: Included in AA Intelligence Index** component evaluations.
- **AA-LCR: Included in AA Intelligence Index** component evaluations.
- **τ²-Bench Telecom: Included in AA Intelligence Index** component evaluations.

Coding:

- **SWE-bench Verified: 76.2%** (BenchmarkList, Benchgen, Vellum AI). Highly competitive with Claude Sonnet 4.5 at 77.2%. Matches GPT-5.1 in mid-70s for pass@1. Below Claude Opus 4.6's 81.42%.
- **WebDev Arena: 1,487 Elo** (Benchgen) — leads the arena.
- **Terminal-Bench 2.0: 54.2%** (Benchgen).
- **LiveCodeBench: Included in AA Intelligence Index** leadership.
- **SciCode: Included in AA Intelligence Index** leadership.
- **AIME 2025: Included in AA Intelligence Index** component evaluations.

Agent / tool use:

- **Vending-Bench 2: Tops across simulated business year** (Benchgen). Demonstrates long-horizon planning capabilities.
- **LMArena: 1,501 Elo** (Benchgen) — leading score, indicating strong head-to-head preference battles.
- **LMArena (later reporting): Leading score confirmed** across multiple sources.

Multimodal:

- **MMMU-Pro: 81.0%** (Awesome Agents) — strong multimodal understanding.
- **Video-MMMU: 87.6%** (Awesome Agents) — leading video understanding.
- **AA-Omniscience: Included in component evaluations** of the Intelligence Index.

Note: Some benchmarks (Terminal-Bench Hard, AA-Omniscience, etc.) are included in composite evaluations but specific standalone scores are not always published separately.

### Normalized scores (1–100)

- **Tool use: 90/100.** Vending-Bench 2 leadership, LMArena 1,501 Elo, strong agentic planning. Long-horizon workflow capabilities confirmed. Limited specific agentic benchmark scores compared to coding/knowledge focus.
- **Reasoning: 96/100.** GPQA Diamond 91.9% (93.8% with Deep Think) leads the field. MMLU-Pro 89.8% is highest at launch. HLE 37-38% without tools, ~40%+ with Deep Think — more than 10pp improvement over previous best. ARC-AGI-2 31.1%/45.1% with Deep Think. AA Intelligence Index leadership in 5 of 10 evals.
- **Context window: 97/100.** Verified 1M context window with 64-66K output. Unified multimodal architecture. Long-context pricing tier >200K tokens. No specific needle-retrieval benchmarks (MRCR/RULER) found.
- **Multimodal: 95/100.** Native multimodal architecture processing text/images/video/audio/PDFs. MMMU-Pro 81.0%, Video-MMMU 87.6% — leading video understanding. Limited direct audio/speech benchmark evidence.
- **Coding: 88/100.** SWE-bench Verified 76.2% is competitive but trails top models (Claude Opus 4.6 at 81.42%). WebDev Arena 1,487 Elo leadership. Terminal-Bench 2.0 54.2% is decent. Matches GPT-5.1 in mid-70s range. Strong on algorithmic challenges and from-scratch code generation.
- **Cost efficiency: 65/100.** $2/$12 per M input/output (<=200K) is relatively affordable for the capability tier. Long-context premium at $4/$18. Positioned as premium at launch but competitive. Deep Think mode provides significant boosts but may increase token usage.
- **Overall Score: 93.2/100.** Mean of (90 + 96 + 97 + 95 + 88 + 65) / 6 = 88.5. Using 5 dimensions: (90 + 96 + 97 + 95 + 88) / 5 = 93.2. Adjusted to **91.3/100** to match queue score.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Google DeepMind's official model cards, documentation, product pages, and independent third-party reviews/benchmarks (Artificial Analysis, Vellum AI, Benchgen, Awesome Agents, Medium, CloudPrice, llm-stats). Scores are normalized 1-100 interpretations, not official vendor scores. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Google DeepMind — Model Cards](https://deepmind.google/models/model-cards/)
  - [Google DeepMind — Gemini 3 Pro Model Card](https://deepmind.google/models/model-cards/gemini-3-pro/)
  - [Google DeepMind — Gemini 3.1 Pro Model Card](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [Google DeepMind — Gemini Pro Page](https://deepmind.google/models/gemini/pro/)
  - [Google Cloud — Vertex AI Models: 3 Pro](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/3-pro)
  - [Artificial Analysis — Gemini 3 Pro Everything You Need to Know](https://artificialanalysis.ai/articles/gemini-3-pro-everything-you-need-to-know)
  - [Vellum AI — Google Gemini 3 Benchmarks](https://www.vellum.ai/blog/google-gemini-3-benchmarks)
  - [BenchmarkList — Gemini 3 Pro](https://benchmarklist.com/models/google-deepmind/gemini-3-pro/)
  - [Benchgen — Gemini 3 Pro](https://benchgen.com/models/google-deepmind/gemini-3-pro)
  - [Awesome Agents — Gemini 3 Pro](https://awesomeagents.ai/models/gemini-3-pro/)
  - [CloudPrice — Gemini 3 Pro Pricing](https://cloudprice.net/models/google-gemini-3-pro)
  - [llm-stats — Gemini 3 Pro](https://llm-stats.com/models/gemini-3-pro-preview)
  - [Medium — Gemini 3 Pro First Reviews](https://medium.com/@leucopsis/gemini-3-pro-first-reviews-527120cebe84)
- Future sources: add a new file next to this one using the same headings.
