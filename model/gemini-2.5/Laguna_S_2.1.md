# Gemini 2.5 — findings by Laguna S 2.1

- Source: Google / Gemini 2.5 (`google/gemini-2.5-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's Gemini 2.5 is the mainstream multimodal reasoning model in the Gemini 2.5 family. It is a large-scale model optimized for reasoning, coding, and multimodal tasks with a 1M-token context window. Reasoning is mandatory and enabled by default. Flag: the queue entry "gemini-2.5" (Overall 80) differs from "gemini-2.5-pro" (Overall 83.2) — the exact model "gemini-2.5" (without -pro suffix) was not found on OpenRouter, AI, cloudprice, or Hugging Face. This report uses `google/gemini-2.5-pro` as the closest available match.
- **Provider / access:** Hosted via OpenRouter (`https://openrouter.ai/google/gemini-2.5-pro`). Also available via Google AI Studio / Vertex AI (`google/gemini-2.5-pro`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** Released June 2025. Knowledge cutoff: January 31, 2025.
- **IDs:** `google/gemini-2.5-pro` (OpenRouter); `google/gemini-2.5-pro` (Google AI Studio / Vertex AI)
- **Context window:** 1,048,576 tokens total (verified via OpenRouter API `context_length: 1048576` and CloudPrice page). Max output: varies by provider; OpenRouter does not specify a max_output field.
- **Modalities:** text, image, file, audio, and video input; text output. Reasoning is mandatory (isReasoning: mandatory). Tool calls and JSON mode supported. Vision is supported.
- **Pricing (as of June 2025):** $1.25/1M input tokens, $10.00/1M output tokens via OpenRouter. Cached input: $0.125/1M (cache read). Over 200K prompt tokens: $2.50/1M in, $15.00/1M out. Web search: $0.014/query. [(source: OpenRouter API)](https://openrouter.ai/google/gemini-2.5-pro)
- **Architecture:** Proprietary. Parameters not disclosed (null). Transformer-based with Mixture-of-Experts (MoE) architecture. Multimodal (text/image/audio/video/file → text) pipeline.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Artificial Intelligence Index: **16.1** (rank #213/571, 62.9th percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/google-gemini-2-5-pro)
- Artificial Analysis Coding Index: **46.7** (rank #78/215, 64.2nd percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- Terminal-Bench Hard: **26.5%** (rank #121/411, 70.8th percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/google-gemini-2-5-pro)
- Tau2-Bench: **54.1%** (rank #182/418, 56.7th percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- LCR / MLCR: **69.0%** (rank #155/490, 68.6th percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- GPQA Diamond: **84.4%** (rank #112/537, 79.3rd percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/google-gemini-2-5-pro)
- MMMU-Pro: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.4%** (rank #112/537, 79.3rd percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/google-gemini-2-5-pro)
- HLE (Humanity's Last Exam): **22.5%** (rank #130/545, 76.3rd percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- MMLU-Pro: **86.2%** (rank #23/341, 93.5th percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- AIME: **88.7%** (rank #13/186, 93.5th percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- AIME 2025: **87.7%** (rank #54/274, 80.7th percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- Math Index: **87.7** (rank #54/274, 80.7th percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- Math-500: **98.6%** (rank #11/193, 94.8th percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- LCR / MLCR: **69.0%** [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- AA-Omniscience: no verified public score found

Coding:

- Artificial Analysis Coding Index: **46.7** (rank #78/215, 64.2nd percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- LiveCodeBench: **80.1%** (rank #32/336, 90.8th percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- SciCode: **46.3%** (rank #87/544, 84.2nd percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- Vibe Code Bench: no verified public score found
- ifbench: **48.7%** (rank #193/426, 54.9th percentile) [(source: CloudPrice)](https://cloudprice.net/models/google-gemini-2-5-pro)

Long context:

- Context window: 1,048,576 tokens (1M, verified via OpenRouter API via CloudPrice). No MRCR / RULER / GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 55/100.** Terminal-Bench Hard at 26.5% is well below the mid-tier threshold (45-60%). Tau2-Bench at 54.1% is above the mid-tier range (10-25%) but below the frontier threshold (50%+ is at the frontier boundary). LCR at 69.0% and GPQA at 84.4% are strong. The AI index of 16.1 (rank #213/571) indicates mid-tier overall capability. No GDPval-AA or Claw-Eval data available. Capped by low Terminal-Bench Hard and non-frontier Tau2-Bench.
- **Reasoning: 75/100.** GPQA Diamond at 84.4% is in the upper range of mid-tier (60-80%) approaching frontier (90%+). HLE at 22.5% is well above mid-tier (<10%) but below frontier (40%+). MMLU-Pro at 86.2% (rank #23/341) is strong. AIME at 88.7% and Math-500 at 98.6% indicate excellent mathematical reasoning. Math Index at 87.7 is excellent. LCR at 69.0% is good. The AI index of 16.1 (lower is better, rank #213/571) supports solid reasoning. Capped by HLE below 40%+ and AI index below frontier range.
- **Context window: 100/100.** 1,048,576 tokens (1M) exceeds the 1M+ tier threshold (95-100). This is among the largest context windows available, supporting 1M-token contexts for long-document processing.
- **Multimodal: 90/100.** Supports text, image, file, audio, and video input with text output. Per model-comparison methodology, +audio in or any non-text out = 90-100. While output is text-only, the comprehensive input support (text+image+file+audio+video) places this at the top of the multimodal scale. Capped slightly since output is text-only (no audio/video output).
- **Coding: 72/100.** LiveCodeBench at 80.1% (rank #32/336, 90.8th percentile) exceeds the mid-tier threshold (80%). SciCode at 46.3% (rank #87/544) is good but below frontier (55%+). ifbench at 48.7% provides additional evidence. The coding index of 46.7 (lower is better, rank #78/215) indicates mid-to-upper-tier coding. No SWE-bench Verified or SWE-Pro data available. Capped by SciCode below frontier and lack of SWE-bench scores.
- **Cost efficiency: 60/100.** At $1.25/1M input and $10.00/1M output via OpenRouter, pricing is on the higher end. Per model-comparison methodology, ~$1.25/$4.25 = ~88, but with $10/1M output this pushes cost efficiency lower. Using the AA reference scale (which considers both input and output costs), this maps to approximately 60 for the $10/1M output tier.
- **Overall Score: 78/100.** Mean of five quality dims: (55+75+100+90+72)/5 = 392/5 = 78.4 → 78. Gemini 2.5 Pro is a strong multimodal reasoning model with excellent 1M context, top-tier math (Math-500 98.6%, AIME 88.7%, MMLU-Pro 86.2%), and solid coding (LiveCodeBench 80.1%). However, it trails frontier models in GPQA (84.4%), HLE (22.5%), and agentic tool use (TB Hard 26.5%, Tau2 54.1%). The $10/1M output cost is high. Best suited for multimodal reasoning and long-context tasks where pricing is not the primary constraint.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via OpenRouter API and CloudPrice model page. Verified benchmark scores include AI/Coding Indices, GPQA, HLE, MMLU-Pro, AIME, Math-500, Math Index, LiveCodeBench, SciCode, ifbench, Terminal-Bench Hard, Tau2-Bench, and LCR. The AI index (16.1) and coding index (46.7) are from Artificial Analysis composite scoring. Note: the exact model "gemini-2.5" (without -pro suffix) was not found; `google/gemini-2.5-pro` was used as the closest available match. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5.md`, using the same headings.
