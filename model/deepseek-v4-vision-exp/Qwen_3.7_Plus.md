# DeepSeek V4 Vision Exp — findings by Qwen 3.7 Plus
- Source: DeepSeek/DeepSeek V4 Vision Exp (`opencode/deepseek-v4-vision-exp`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE (V4-Flash-Vision-Exp, August 2026) built on V4-Flash architecture with added visual modules. Designed for multi-modal code understanding, UI layout reasoning, and image-to-code generation. Achieved 36.5 on ApexBench Pass@1, 35.0% on ZeroBench Pass@5 (beating Opus 4.8's 34.0%), 27.3% on Agents' Last Exam (beating Opus 4.8's 25.7%), and 83.9% on Terminal-Bench 2.1. MIT license with open weights. Free Zen tier available. Text agent performance matches V4-Flash (no regression). Ships with vLLM and SGLang support including DSpark speculative decoding.
- **Provider / access:** DeepSeek (API, open weights, Free Zen tier). MIT license.
- **Release / knowledge:** August 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/deepseek-v4-vision-exp`
- **Context window:** 200,000 tokens (200K)
- **Modalities:** Text, image, PDF in; text out
- **Pricing:** Free Zen tier available; images tokenized up to 384 tokens each at V4-Flash pricing

### Raw benchmarks found

Agent / tool use (text): Terminal-Bench 2.1 83.9% · NL2Repo 57.7% · Cybergym 75.3% · DeepSWE 59.3% · Toolathlon-Verified 75.9% · DSBench-Hard 63.6%.

Agent / tool use (multimodal): ApexBench Pass@1 36.5 · Agents' Last Exam 27.3% · Chartography 64.3% · ZeroBench Pass@5 35.0%.

Reasoning / knowledge: No traditional knowledge benchmarks published. Text agent performance matches V4-Flash baseline (no regression on non-vision tasks).

Coding: DeepSWE 59.3% · DSBench-Hard 63.6% · NL2Repo 57.7% (image-to-code and full-stack tasks).

Multimodal: ApexBench 36.5 · ZeroBench Pass@5 35.0% · Agents' Last Exam 27.3% · Chartography 64.3%.

Long context: 200K native context window.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.1 83.9%, Toolathlon-Verified 75.9%, and Cybergym 75.3% show strong text agent capability. Multimodal agent benchmarks (ZeroBench 35.0%, Agents' Last Exam 27.3%) beat Opus 4.8 on 2 of 4 multimodal benchmarks. Competitive agentic performance.
- **Reasoning: 55/100.** No traditional knowledge benchmarks (GPQA, MMLU-Pro, HLE) published for this experimental vision model. Text agent performance matches V4-Flash baseline, suggesting reasoning capability is preserved but not enhanced. Scored conservatively due to lack of reasoning benchmark data.
- **Context window: 55/100.** 200K context is moderate — smaller than V4 Pro's 1M/384K. Adequate for most document and code tasks but not optimized for very long contexts.
- **Multimodal: 50/100.** Native support for text, image, and PDF input. Beats Opus 4.8 on ZeroBench and Agents' Last Exam (multimodal agent tasks). Chartography 64.3% shows visual understanding capability. Limited to image/PDF (no audio/video). Experimental vision modules added to V4-Flash architecture.
- **Coding: 55/100.** DeepSWE 59.3% (beats Opus 4.8's 58.0%), DSBench-Hard 63.6%, NL2Repo 57.7%. Moderate coding performance focused on multimodal code understanding and UI layout reasoning. Not as strong as V4 Pro on pure text coding tasks.
- **Cost efficiency: 85/100.** Free Zen tier available for experimentation. MIT license enables free self-hosting. V4-Flash pricing for image tokens is very affordable. Excellent cost profile for multimodal capabilities.
- **Overall Score: 56/100.** Mean of Tool (65) + Reasoning (55) + Context (55) + Multimodal (50) + Coding (55) = 280/5 = 56.0.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
