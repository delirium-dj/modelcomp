# Kimi K2.5 — findings by Muse Glimmer 30B

- Source: Moonshot AI / kimi-k2.5
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.5 – Visual Agentic Intelligence
- **Short description:** Open-source native multimodal agentic model built by continual pre-training on ~15 T mixed visual + text tokens on top of Kimi-K2-Base. Native vision-language integration with instant / thinking modes and Agent Swarm orchestration. Emphasis on coding with vision and parallel multi-agent execution.
- **Provider / access:** Moonshot AI / Kimi. Web/app/API/Kimi Code; open weights `moonshotai/Kimi-K2.5` on Hugging Face; GitHub `moonshotai/Kimi-K2.5`
- **Release / knowledge:** Officially released January 27 2026; arXiv 2602.02276 submitted 2 Feb 2026. Knowledge cutoff not disclosed.
- **IDs:** Hugging Face `moonshotai/Kimi-K2.5`; arXiv 2602.02276; GitHub `moonshotai/Kimi-K2.5`
- **Context window:** 256K tokens
- **Modalities:** Input text, image, video; output text/code. Vision encoder MoonViT 400M.
- **Pricing as of 2026-10-24:** Per-token pricing not published on public docs at time of inspection. Platform notice: K2 series will no longer be available to newly registered users from October 31 2026; retirement planned end of December 2026.
- **Architecture:** Mixture-of-Experts; total 1 T parameters, activated 32 B; 61 layers, 1 dense + 60 MoE; attention hidden dim 7,168; MoE hidden dim per expert 2,048; attention heads 64; 384 experts, 8 selected + 1 shared; vocab 160K; MLA attention; SwiGLU activation.

### Raw benchmarks found

**Official model card / tech blog – Moonshot**

Reasoning & Knowledge
- Humanity’s Last Exam – Full: 30.1
- Humanity’s Last Exam – Full w/ tools: 50.2
- AIME 2025: 96.1
- HMMT 2025 Feb: 95.4
- IMO-AnswerBench: 81.8
- GPQA-Diamond: 87.6
- MMLU-Pro: 87.1

Vision
- MMMU-Pro: 78.5
- CharXiv RQ: 77.5
- MathVision: 84.2
- MathVista mini: 90.1
- OCRBench: 92.3
- OmniDocBench 1.5: 88.8
- InfoVQA val: 92.6
- VideoMMMU: 86.6
- LongVideoBench: 79.8

Coding
- SWE-Bench Verified: 76.8
- SWE-Bench Pro: 50.7
- SWE-Bench Multilingual: 73.0
- Terminal-Bench 2.0: 50.8 – evaluated non-thinking with Terminus-2
- LiveCodeBench v6: 85.0
- OJBench cpp: 57.4
- SciCode: 48.7

Long context / agentic
- LongBench v2: 61.0
- AA-LCR: 70.0
- BrowseComp: 60.6; w/ ctx manage 74.9; Agent Swarm 78.4
- WideSearch item-f1: 72.7; Agent Swarm 79.0
- DeepSearchQA: 77.1
Source: https://huggingface.co/moonshotai/Kimi-K2.5 ; https://www.kimi.ai/blog/kimi-k2-5

**Conflicts / notes**
- Context length consistently 256K / 262,144 tokens across official sources.
- Parameter count official 1 T total / 32 B active; some community mirrors list 1.1 T – treated as rounding.
- Terminal-Bench 2.0 50.8 in model card vs community evaluation 43.2* – difference due to thinking-mode / context-management settings per footnotes.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 50.8, BrowseComp 60.6 / 78.4 Agent Swarm, WideSearch 72.7 / 79.0 Agent Swarm. Solid agentic with context management lift.
- **Reasoning: 74/100.** GPQA-Diamond 87.6, MMLU-Pro 87.1, AIME 2025 96.1, HLE Full 30.1 / w/ tools 50.2. Strong math/reasoning, general knowledge limited.
- **Context window: 78/100.** 256K tokens verified; LongBench v2 61.0, AA-LCR 70.0.
- **Multimodal: 85/100.** Text, image, video input → text/code output; strong vision suite: MMMU-Pro 78.5, MathVision 84.2, OCRBench 92.3, VideoMMMU 86.6.
- **Coding: 78/100.** SWE-Bench Verified 76.8, LiveCodeBench v6 85.0, SWE-Bench Pro 50.7, SciCode 48.7. Competent coding with vision integration.
- **Cost efficiency: 55/100.** Pricing not publicly listed; platform retirement notice reduces accessibility.
- **Overall Score: 77/100.** Mean of Tool 68, Reasoning 74, Context 78, Multimodal 85, Coding 78. Strong multimodal agentic coding model with solid vision performance.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
