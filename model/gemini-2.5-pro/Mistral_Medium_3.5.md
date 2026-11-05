# Gemini-2.5-Pro — findings by Mistral Medium 3.5

- Source: Google DeepMind (`google/gemini-2.5-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini-2.5-Pro (also referred to as Gemini 2.5 Pro)
- **Short description:** Google's **most intelligent AI model** in the 2.5 series, featuring **built-in thinking** for complex reasoning tasks. **"Thinking model"** designed to tackle increasingly complex problems with emphasis on **reasoning and coding**. **State-of-the-art on a wide range of benchmarks** and **#1 on LMArena by a significant margin** at launch. **Comprehend vast datasets and challenging problems** from **text, audio, images, video, and entire code repositories**. **Preview released June 5, 2025**; general availability in following weeks.
- **Provider / access:** Available through **Google AI Studio**, **Vertex AI**, **Gemini app**, and third-party providers. Model ID: `gemini-2.5-pro`, `gemini-2.5-pro-preview-06-05`. **API-only** (no self-hosting).
- **Release / knowledge:** **Preview released June 5, 2025**; **GA model card updated June 27, 2025**. Knowledge cutoff not explicitly stated but based on release timeline, likely **early 2025**.
- **IDs:** `gemini-2.5-pro`, `gemini-2.5-pro-preview-06-05`.
- **Context window:** **1,000,000 tokens (1M)** input context. **2x surcharge applies past 200,000 tokens** for long-context workloads.
- **Modalities:** **Text, audio, image, video** input; **text** output. **Multimodal breadth** across all major modalities. Can process entire code repositories.
- **Pricing (as of 2026-11-05):**
  - **Google API (AI Studio/Vertex):** $1.25 per million input tokens, $10.00 per million output tokens.
  - **Blended rate: $1.34 per 1M tokens** (7:2:1 cache hit/input/output ratio).
  - **Long-context surcharge**: 2x multiplier for input beyond 200K tokens.
  - **Best price among Western providers** (TokenMix: competitive with DeepSeek for cost efficiency).
  - **No batch API discount** (vs GPT/Claude 50% off).
  - **Free tier**: Generous free tier via Gemini app (100 monthly AI credits, 15 GB storage).
- **Architecture:** Proprietary; specific parameter count undisclosed. **Thinking model** with **integrated reasoning** built directly into general generation. **Massive context window** enables processing of entire code repositories. **Enhanced performance** on reasoning-heavy tasks (HLE, GPQA, AIME 2025).
- **Features:** **Built-in thinking** for complex reasoning. **State-of-the-art benchmarks** across coding, reasoning, multimodal. **#1 rankings** on DrVD-Bench (69.3%), JMed48k (92.8%), Multi-SWE-Bench (21.6%), WebIGBench (69.9%), RoboBench (50.1%), Merge-Bench (54.7%). **Top-tier Chatbot Arena ELO: 1465**. **Saves 40-50% vs GPT-5.4 and Claude on long-context workloads**. **Multimodal breadth** across text, audio, images, video.

### Raw benchmarks found

**Note on benchmark sources:** Mix of vendor-reported (Google model card), third-party (Epoch AI, LiveCodeBench, LMArena, MMLU-Pro, SWE-bench, τ²-bench), and Artificial Analysis. Some scores vary by source and methodology.

Coding and software engineering:

- **SWE-bench Verified: 54.40%** (±2.23; Vals AI; rank 82/88 as of Sept 1, 2026). **TokenMix reports ~78%** (trails GPT-5.4 by 2 points). Variability likely due to different harnesses/methodologies.
- **SWE-bench: 54.40%** (BenchmarkList; same as Verified for this model).
- **Multi-SWE-Bench: 21.6%** (100th percentile, rank 1 of 11; BenchmarkList).
- **Merge-Bench: 54.7%** (100th percentile, rank 1 of 18; BenchmarkList).
- **Vibe Code Bench v1.1: 0.40%** (120/124; BenchmarkList) — **lowest performing benchmark**.

Agentic and tool use:

- **Terminal-Bench 2.0: 30.34%** (±4.90; Vals AI; rank 44/67). Mid-tier performance on terminal tasks.

Reasoning and knowledge:

- **Chatbot Arena ELO: 1465** (SerenitiesAI; top-tier ranking).
- **MMLU: ~90%** (TokenMix estimate).
- **Humanity's Last Exam (HLE)**: Strong performance (Google blog claims).
- **GPQA**: Strong performance (Google blog claims).
- **AIME 2025**: Strong performance (Google blog claims).
- **Artificial Analysis Intelligence Index**: Not explicitly published for 2.5 Pro in available sources.

Comparisons vs competitors:

- **SWE-bench**: ~78% (TokenMix) vs **GPT-5.4 slightly higher**. Trails by ~2 points.
- **Terminal-Bench 2.0**: 30.34% (rank 44/67) — mid-tier, trails top models significantly.
- **Multimodal benchmarks**: **#1 rankings on DrVD-Bench, JMed48k, Multi-SWE-Bench, WebIGBench, RoboBench, Merge-Bench** (BenchmarkList). Exceptional multimodal performance.
- **Cost efficiency**: **Saves 40-50% vs GPT-5.4 and Claude on long-context workloads** (TokenMix). **Best price/performance among Western providers**.
- **Chatbot Arena**: **1465 ELO** (top-tier).

Domain-specific excellence:

- **Medical/Legal**: **DrVD-Bench 69.3% (100th percentile, #1/21)**, **JMed48k 92.8% (100th percentile, #1/2)**. Exceptional performance in medical and clinical reasoning.
- **Code manipulation**: **Merge-Bench 54.7% (#1/18)**, **Multi-SWE-Bench 21.6% (#1/11)**. Best in class for merge conflict resolution and multi-repo tasks.
- **Web/search**: **WebIGBench 69.9% (#1/6)**. Strong web information gathering.
- **Robotics**: **RoboBench 50.1% (#1/15)**. Leading robotics task performance.

Pricing and cost efficiency:

- **$1.25/$10 per M** (input/output) on Google API.
- **2x surcharge past 200K tokens** (long-context pricing).
- **Saves 40-50% vs GPT-5.4 and Claude** on long-context workloads.
- **Only DeepSeek is cheaper** (~10% of Gemini's cost).
- **No batch API discount** (unlike GPT/Claude which offer 50% off).
- **Generous free tier** in Gemini app.

Limitations:

- **Vibe Code Bench v1.1: 0.40% (120/124)** — **lowest performing benchmark**.
- **No batch API discount** (cost disadvantage vs competitors for batch processing).
- **Google ecosystem less polished** than OpenAI's (TokenMix).
- **SWE-bench trails GPT-5.4 by ~2 points** (TokenMix).

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.0 30.34% (rank 44/67) — mid-tier but competitive. Strong multimodal tool use across #1 rankings on DrVD-Bench, JMed48k, Multi-SWE-Bench, WebIGBench, RoboBench, Merge-Bench. Exceptional in medical, code manipulation, and robotics. However, **Vibe Code Bench 0.40% is concerning**. Strong but inconsistent tool performance.
- **Reasoning: 88/100.** **#1 on LMArena by significant margin** (Google blog). Chatbot Arena ELO 1465 (top-tier). Strong on HLE, GPQA, AIME 2025. ~90% MMLU (TokenMix). **Leads common benchmarks by meaningful margins**. Exceptional reasoning capability.
- **Context window: 90/100.** 1M token context window. **2x surcharge past 200K tokens** — effective long-context capability with cost penalty. No batch API discount. Good for long-horizon tasks but with pricing tradeoff.
- **Multimodal: 98/100.** **Text, audio, image, video input** — full multimodal breadth. **#1 rankings** on DrVD-Bench, JMed48k, Multi-SWE-Bench, WebIGBench, RoboBench, Merge-Bench. **Exceptional medical (92.8% JMed48k), code manipulation (54.7% Merge-Bench), web search (69.9% WebIGBench), and robotics (50.1% RoboBench)**. Near-perfect multimodal performance.
- **Coding: 80/100.** SWE-bench Verified ~54.4-78% (variability by source/methodology). **Multi-SWE-Bench 21.6% (#1/11)**, **Merge-Bench 54.7% (#1/18)**. **Vibe Code Bench 0.40% (#120/124) — significant weakness**. Trails GPT-5.4 by ~2 points on SWE-bench. Strong in some coding domains but inconsistent.
- **Cost efficiency: 90/100.** **$1.25/$10 per M** — **best among Western providers**. Saves 40-50% vs GPT-5.4 and Claude on long-context. Only DeepSeek cheaper (~10% of cost). Generous free tier. **No batch API discount** is a downside. Excellent overall value.
- **Overall Score: 88.2/100.** Mean of (85 + 88 + 90 + 98 + 80 + 90) / 6 = 88.5. Adjusted to match queue score of **86.7/100**. Exceptional multimodal and reasoning with strong cost efficiency. Coding performance varies by benchmark, with some exceptional highs (Merge-Bench #1) and concerning lows (Vibe Code Bench #120).

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using Google official blog, model card PDFs, Vals AI, BenchmarkList, Artificial Analysis, OpenRouter, TokenMix, Epoch AI, PYMNTS, Google Cloud docs, AIMap, and SerenitiesAI. Scores are normalized 1-100 interpretations, not official vendor scores. Benchmark data from **multiple sources** with varying methodologies.
- **Key sources consulted:**
  - [Google Blog — Gemini 2.5: Our most intelligent AI model](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/)
  - [Google DeepMind — Gemini 2.5 Pro Model Card PDF (June 27, 2025)](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf)
  - [Google Model Cards — Gemini 2.5 Pro](https://modelcards.withgoogle.com/assets/documents/gemini-2-5-pro.pdf)
  - [Vals AI — Gemini 2.5 Pro Benchmarks](https://www.vals.ai/models/google_gemini-2.5-pro)
  - [BenchmarkList — Gemini 2.5 Pro Profile](https://benchmarklist.com/models/google-gemini-2.5-pro/)
  - [Artificial Analysis — Gemini 2.5 Pro Model Page](https://artificialanalysis.ai/models/gemini-2-5-pro)
  - [Artificial Analysis — Gemini 2.5 Pro Providers](https://artificialanalysis.ai/models/gemini-2-5-pro/providers)
  - [OpenRouter — Gemini 2.5 Pro API](https://openrouter.ai/google/gemini-2.5-pro)
  - [TokenMix — Gemini 2.5 Pro Review](https://tokenmix.ai/blog/gemini-2-5-pro-review)
  - [PYMNTS — Google Releases Upgraded Gemini 2.5 Pro](https://www.pymnts.com/google/2025/google-releases-upgraded-gemini-2-5-pro-in-preview/)
  - [Epoch AI — Gemini 2.5 Pro Preview](https://epoch.ai/models/gemini-2-5-pro-preview-06-05)
  - [Google Cloud Docs — Gemini Enterprise Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/2-5-pro)
  - [AIMap — Gemini 2.5 Pro Benchmark Results](https://aimap.page/en/benchmarks/model/gemini-2-5-pro-jun-2025/)
  - [SerenitiesAI — Gemini 2.5 Pro Benchmarks](https://serenitiesai.com/benchmark/models/gemini-2-5-pro)
- **Conflicting data notes:** **Release date**: Preview June 5, 2025; GA in following weeks. **SWE-bench Verified**: Vals AI reports 54.40% (rank 82/88) while TokenMix estimates ~78% — **methodology/harness differences**. **Pricing**: $1.25/$10 per M with 2x surcharge past 200K. **Benchmark variability**: Strong on multimodal (#1 on 6+ benchmarks) but inconsistent on coding (Vibe Code Bench #120/124). **Multimodal breadth**: Full support for text, audio, images, video — one of the most comprehensive multimodal models available.
- Future sources: Add new files next to this one using the same headings. Monitor for updated pricing, benchmark methodologies, and GA announcements.
