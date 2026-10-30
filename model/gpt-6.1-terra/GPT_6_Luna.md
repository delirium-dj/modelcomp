# GPT-6.1 Terra — findings by GPT 6 Luna

- Source: OpenAI/gpt-6.1-terra
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, efficient GPT-6 model for visual reasoning, computer use, and high-volume professional work. OpenAI positions it below GPT-6 Astra and GPT-6.1 Sol for the most complex coding tasks, while emphasizing lower API cost and faster computer-based workflows.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`), available through both Responses and Chat Completions; tool calling requires the Responses API. Also available in ChatGPT Work and Codex for Plus, Pro, Enterprise, and Edu users. [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra) · [launch post](https://openai.com/index/introducing-gpt-6-1-terra/)
- **Release / knowledge:** Released October 26, 2026. Knowledge cutoff: June 1, 2026. [OpenAI system card addendum](https://deploymentsafety.openai.com/gpt-6-1-terra) · [API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
- **IDs:** `openai/gpt-6.1-terra` (API model ID: `gpt-6.1-terra`; default snapshot is the same). [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
- **Context window:** 1,050,000 total; maximum input 922,000 and maximum output 128,000 tokens. [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
- **Modalities:** Text and image in; text out. Audio and video are unsupported. Reasoning effort supports none/low/medium/high/xhigh/max (medium default); Responses API supports computer use, web search, file search, code interpreter, function calling, and structured outputs. [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
- **Pricing (as of 2026-10-30):** $1.00/M input, $0.05/M cached input, and $5.00/M output. Cache writes are $1.25/M for 30-minute retention or $2.50/M for 12-hour retention. Requests over 272K input tokens use 2× input/cache rates and 1.5× output pricing for the full request. [OpenAI API model pricing](https://developers.openai.com/api/docs/models/gpt-6.1-terra) · [OpenAI launch post](https://openai.com/index/introducing-gpt-6-1-terra/)
- **Architecture:** Proprietary model; OpenAI has not disclosed parameter count or architecture. [Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-1-terra)

### Raw benchmarks found

> OpenAI's launch-post figures are vendor-reported; independent harness results are labeled separately. Reasoning settings and harnesses differ, so the scores are not interchangeable.

Agent / tool use:

- Agents' Last Exam: **60.0%** (BenchLM's listing of OpenAI's result; OpenAI states that at medium effort Terra is 15 percentage points above GPT-5.6 Terra and performs on par with GPT-6 Astra, at about one-tenth its price per token). [Benchmark score index](https://benchlm.ai/models/gpt-6-1-terra) · [OpenAI launch post](https://openai.com/index/introducing-gpt-6-1-terra/)
- OSWorld 2.1 Offline: **74.2%** (BenchLM listing sourced to OpenAI; desktop-app agent tasks). [Benchmark score index](https://benchlm.ai/models/gpt-6-1-terra)
- Terminal-Bench 4.0: **50.3%** at maximum reasoning effort in OpenAI's evaluation. [OpenAI launch post](https://openai.com/index/introducing-gpt-6-1-terra/)
- Terminal-Bench 4.0: **49.49% ± 1.82** in Vals AI's independent Mini-SWE-agent evaluation; 11th of 58 models in its October 29 leaderboard. This differs from OpenAI's result by harness/evaluation setup. [Vals AI leaderboard and methodology](https://www.vals.ai/benchmarks/terminal-bench-4)
- Terminal-Bench-Science 0.1: **58.3%** (BenchLM listing sourced to OpenAI's launch post). OpenAI reports Terra at max effort above GPT-6.1 Sol and within five points of Claude Opus 5.5. [Benchmark score index](https://benchlm.ai/models/gpt-6-1-terra) · [OpenAI launch post](https://openai.com/index/introducing-gpt-6-1-terra/)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **51** for the Max reasoning variant; the index combines nine evaluations across knowledge work, automation, coding, science, and reasoning. [Artificial Analysis model page](https://artificialanalysis.ai/models/gpt-6-1-terra) · [index methodology](https://artificialanalysis.ai/methodology/intelligence-benchmarking)
- HLE: **46.2%**; LCR: **82.7%** (Artificial Analysis leaderboard results indexed by BenchLM). [Benchmark score index](https://benchlm.ai/models/gpt-6-1-terra) · [Artificial Analysis HLE leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam) · [LCR leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)
- On OpenAI's internal error-inducing prompt evaluation, factual-error rate was **16.7% at low effort** and **4.3% at max effort**. OpenAI cautions that these deliberately difficult, error-prone examples do not represent production error rates. [OpenAI launch post](https://openai.com/index/introducing-gpt-6-1-terra/) · [system card addendum](https://deploymentsafety.openai.com/gpt-6-1-terra)
- HealthBench Professional: **62.7% length-adjusted** (64.2% unadjusted) in OpenAI's system-card evaluation. [OpenAI system card addendum](https://deploymentsafety.openai.com/gpt-6-1-terra)

Coding:

- Terminal-Bench 4.0: **50.3%** at max reasoning effort, over twice GPT-5.6 Terra's published **21.5%** score (OpenAI-reported; task set is Terminal-Bench 4.0). [OpenAI launch post](https://openai.com/index/introducing-gpt-6-1-terra/)
- Vibe Code Bench v1.1: **84.00% ± 2.87**, 20th of 122 models; Vals AI evaluation. [Vals AI model results](https://www.vals.ai/models/openai_gpt-6.1-terra)
- Artificial Analysis Coding Agent Index v2.0: **48**, six points below GPT-6.1 Sol in the same analysis. [Artificial Analysis comparison](https://artificialanalysis.ai/articles/gpt-6-1-terra-pushes-the-cost-efficiency-frontier)
- OpenAI says GPT-6.1 Sol and GPT-6 Astra remain the better options for its most complex coding tasks. [OpenAI launch post](https://openai.com/index/introducing-gpt-6-1-terra/)

Multimodal / grounded:

- MMMU-Pro: **85.5%** (BenchLM-indexed OpenAI result); Artificial Analysis independently reports **84.7%**. [Benchmark score index](https://benchlm.ai/models/gpt-6-1-terra) · [Artificial Analysis MMMU-Pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)

Long context:

- The API documents a **1,050,000-token** context and 922,000 maximum input, but no verified long-context retrieval accuracy at 512K+ was found. [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)

Additional independent operating metrics:

- Artificial Analysis reports **90.9 output tokens/second** and **$0.96 per Intelligence Index task** for GPT-6.1 Terra Max. [Artificial Analysis model page](https://artificialanalysis.ai/models/gpt-6-1-terra)
- Vals AI's Vals Index: **60.47% ± 0.99**; it reports **$2.925 per test** for that index (different benchmark mix from Artificial Analysis). [Vals AI model results](https://www.vals.ai/models/openai_gpt-6.1-terra)

### Normalized scores (1–100)

- **Tool use: 86/100.** Agents' Last Exam at 60%, OSWorld 2.1 at 74.2%, and the independent Terminal-Bench 4.0 result at 49.49% support strong desktop and agent performance; score is capped by the weaker terminal result versus frontier models and the lack of a verified Tau/Claw result. [OpenAI launch post](https://openai.com/index/introducing-gpt-6-1-terra/) · [Vals AI](https://www.vals.ai/benchmarks/terminal-bench-4)
- **Reasoning: 87/100.** The independent Artificial Analysis Intelligence Index score of 51 and HLE result of 46.2% are well above the index's reported median, while they remain below the highest frontier scores; OpenAI's very low max-effort error rate is from an internal stress test, not a production estimate. [Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-1-terra) · [BenchLM](https://benchlm.ai/models/gpt-6-1-terra) · [OpenAI system card](https://deploymentsafety.openai.com/gpt-6-1-terra)
- **Context window: 95/100.** The 1.05M total context reaches the ≥1M tier; the 922K input cap, 128K output cap, long-context price multiplier, and absence of a verified 512K+ retrieval score prevent a 100. [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
- **Multimodal: 68/100.** It accepts images and scores 84.7–85.5% on MMMU-Pro, but is text-output-only and does not support audio or video. [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra) · [Artificial Analysis MMMU-Pro](https://artificialanalysis.ai/evaluations/mmmu-pro)
- **Coding: 82/100.** Vibe Code Bench at 84% and Terminal-Bench 4.0 around 50% show capable coding-agent performance, but OpenAI explicitly recommends GPT-6.1 Sol or GPT-6 Astra for its hardest coding work, and no verified SWE-bench result was found. [Vals AI](https://www.vals.ai/models/openai_gpt-6.1-terra) · [OpenAI launch post](https://openai.com/index/introducing-gpt-6-1-terra/)
- **Cost efficiency: 90/100.** Base API rates of $1/M input and $5/M output are substantially below many frontier models; cached input is $0.05/M and Artificial Analysis measured $0.96 per index task. Long-context multipliers and output cost are the main caveats. [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra) · [Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-1-terra)
- **Overall Score: 84/100.** Half-up mean of the five quality dimensions: (86 + 87 + 95 + 68 + 82) / 5 = 83.6 → 84. Best suited to image-aware computer use and high-volume professional workflows; use a stronger Sol/Astra-class option for the most difficult coding tasks.

---

## Signature

- Provided by: **GPT 6 Luna (openai/gpt-6-luna-fast)** — 2026-10-30
- Method: Fresh public web research using OpenAI's API documentation, launch post and system card, plus Artificial Analysis, Vals AI, and benchmark aggregations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
