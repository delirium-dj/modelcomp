# MiMo V2.5 Free — findings by Qwen 3.7 Plus
- Source: Xiaomi/MiMo-V2.5 (`opencode/mimo-v2.5-free`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's April 2026 native omni-modal open-weights Sparse MoE model (310B total / 15B active parameters) for text, image, video, and audio understanding plus strong agentic coding. Inherits hybrid sliding-window attention architecture from MiMo-V2-Flash. Achieves 62.3 on Claw-Eval (general subset), AA Coding Index 56.8, AA Intelligence Index 25, Video-MME 87.7%, OmniDocBench 87.2%, and HR-Bench (4k) 88.5%. 1M native context window. Surpasses MiMo-V2-Pro in agentic performance. MIT license. Available on Free Zen tier. Priced at ~$0.14/$0.28 per 1M natively.
- **Provider / access:** Xiaomi (API, AI Studio). Open weights (MIT license) — self-hostable. Free Zen capped tier available.
- **Release / knowledge:** April 22, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/mimo-v2.5-free`
- **Context window:** 1,048,576 tokens (1M native), 131K max output
- **Modalities:** Text, image, audio, video in; text out (native omni-modal)
- **Pricing:** Free Zen tier; native ~$0.14/$0.28 per 1M in/out

### Raw benchmarks found

Agent / tool use: Claw-Eval 62.3 (general subset) · AA Agent Index 20.8 · Matches Claude Sonnet 4.6 on multimodal agentic work.

Reasoning / knowledge: AA Intelligence Index 25 · LLM Stats Reasoning Index 35.4 · Surpasses MiMo-V2-Pro in agentic performance.

Coding: AA Coding Index 56.8 · SWE-Bench Pro (outperforms MAI-Code-1-Flash) · MiMo Coding Bench: matches MiMo-V2.5-Pro at half the cost · LLM Stats Coding Index 28.7.

Multimodal: Video-MME 87.7% · OmniDocBench 87.2% · HR-Bench (4k) 88.5% · DailyOmni 83.5% · GraphWalks 87.0% · Matches Gemini 3 Pro on video understanding.

Long context: 1M native context. Progressive extension from 32K → 256K → 1M during training.

### Normalized scores (1–100)

- **Tool use: 55/100.** Claw-Eval 62.3 on general subset shows strong daily agentic capability. AA Agent Index 20.8 is moderate. Surpasses MiMo-V2-Pro in agentic performance. Matches Claude Sonnet 4.6 on multimodal agentic work.
- **Reasoning: 45/100.** AA Intelligence Index 25 is well above average for open-weights models (median 18). LLM Stats Reasoning Index 35.4 is moderate. Limited traditional reasoning benchmark coverage available.
- **Context window: 90/100.** 1M native context is frontier-class. Progressive extension during training (32K → 256K → 1M). 131K max output is generous.
- **Multimodal: 70/100.** Native omni-modal support (text, image, audio, video). Video-MME 87.7%, OmniDocBench 87.2%, HR-Bench 88.5%, DailyOmni 83.5%, GraphWalks 87.0% — all strong. Matches Gemini 3 Pro on video. Comprehensive multimodal capability.
- **Coding: 55/100.** AA Coding Index 56.8 is moderate. MiMo Coding Bench shows strong everyday coding results. SWE-Bench Pro performance noted. Closes gap with MiMo-V2.5-Pro at half the cost.
- **Cost efficiency: 97/100.** Extraordinary value. Free Zen tier available. ~$0.14/$0.28 per 1M is among the cheapest for any omni-modal model. MIT open weights enable free self-hosting.
- **Overall Score: 63/100.** Mean of Tool (55) + Reasoning (45) + Context (90) + Multimodal (70) + Coding (55) = 315/5 = 63. Adjusted to 61 given moderate reasoning scores and limited traditional benchmark coverage, though outstanding multimodal capability and cost efficiency.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
