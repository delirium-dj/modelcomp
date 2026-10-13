# GPT-5.1 — findings by Qwen 3.7 Plus
- Source: OpenAI/GPT-5.1 (`opencode/gpt-5.1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's November 2025 usability flagship revision of GPT-5 with adaptive Instant/Thinking variants. Positioned as a low-cost conversational generalist with 400K context. Achieved 87.3% on GPQA Diamond, 81.9% on τ²-bench, 80.0% on AA-LCR, and 72.9% on IFBench. AA-Omniscience Index is 5.4% (51.9% hallucination rate), showing improved knowledge reliability over GPT-5. AA Intelligence Index 24.7% and AA Coding Index 49.4% indicate mid-tier performance, superseded by GPT-5.2 and later models. Text and image input only (no audio/video).
- **Provider / access:** OpenAI (API, ChatGPT). Proprietary.
- **Release / knowledge:** November 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/gpt-5.1`
- **Context window:** 400,000 tokens (400K); 128K output
- **Modalities:** Text, image in; text out
- **Pricing:** $1.25/$10.00 per 1M; $0.125 cached

### Raw benchmarks found

Agent / tool use: τ²-bench 81.9% · Gert Labs 41.24% · GDPval-AA 16.3%.

Reasoning / knowledge: GPQA Diamond 87.3% · HLE 28.5% · AA Intelligence Index 24.7% · AA-LCR 80.0% · AA-Omniscience 5.4% (accuracy 37.7%, hallucination 51.9%) · ARC-AGI-1 72.83% · CritPt 4.9% · IFBench 72.9% · FrontierMath v2 Tiers 1-3 31.0% · FrontierMath v2 Tier 4 12.5%.

Coding: AA Coding Index 49.4% · Vibe Code Bench 24.61%.

Multimodal: AA-MMMU-Pro 75.5% · Design Arena Website 1191.

Long context: 400K native context window.

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench 81.9% is strong. Gert Labs 41.24% and GDPval-AA 16.3% are modest. Limited agentic benchmark coverage for a flagship model.
- **Reasoning: 60/100.** GPQA Diamond 87.3% is strong. AA-LCR 80.0% and IFBench 72.9% show good reasoning and instruction following. However, AA Intelligence Index at 24.7% and HLE 28.5% are modest. FrontierMath scores (31.0%/12.5%) are mid-tier. Superseded by newer models.
- **Context window: 75/100.** 400K context with 128K output is good but now trails current frontier models offering 1M+ context.
- **Multimodal: 50/100.** Text and image input only (no audio/video). MMMU-Pro 75.5% is solid for vision understanding. Limited by lack of audio/video support.
- **Coding: 45/100.** AA Coding Index 49.4% and Vibe Code Bench 24.61% are modest for a flagship model. Significantly trails current frontier coding models. Not positioned as a coding specialist.
- **Cost efficiency: 55/100.** $1.25/$10.00 per 1M with $0.125 cached is moderate. No free tier. Positioned as low-cost conversational generalist.
- **Overall Score: 57/100.** Mean of Tool (55) + Reasoning (60) + Context (75) + Multimodal (50) + Coding (45) = 285/5 = 57.0.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
