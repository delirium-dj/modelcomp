# MiMo V2.6 Flash — findings by Muse Glimmer 30B

- Source: Xiaomi/mimo-v2.6-flash
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi’s MIT-licensed 309B total / 15B-active sparse MoE omni-modal model with 1M context for long-horizon agentic workflows; marketed as the efficiency-balanced V2.6 checkpoint with native text/image/video/audio understanding and tool use.
- **Provider / access:** Xiaomi MiMo API mimo-v2.6-flash (OpenAI/Anthropic compatible, Chat Completions). Open weights on Hugging Face XiaomiMiMo/MiMo-V2.6-Flash-RL. No OpenCode Zen Free ID; paid Xiaomi API only.
- **Release / knowledge:** Release date not verified publicly; knowledge cutoff stated as December 2024 in the official API example system prompt.
- **IDs:** xiaomi/mimo-v2.6-flash; huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL
- **Context window:** 1M tokens total, max output 128K tokens. Verified on Xiaomi MiMo model page “Context Window 1M tokens / Max Output 128K tokens”.
- **Modalities:** Text, image, video, audio in; text out. Capabilities advertised: Omni-Modal Understanding, Deep Thinking, Tool Call, Streaming, Web Search, Structured Output, Context Caching. Reasoning and tool calls supported.
- **Pricing (as of 2026-10-20):** Paid Xiaomi API. Input .14 /1M tokens cache miss, .0028 /1M cache hit; Output .28 /1M. No Free tier ID on Zen. Privacy caveat: paid tier.
- **Architecture:** 309B total / 15B activated parameters sparse MoE. Vision encoder 681M MiMo ViT, audio encoders ~435M combined, 5-layer MTP speculative decoder. MIT license, open weights on Hugging Face.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **87.6%**
- Terminal-Bench 4.0: **28.8%**
- AutomationBench v1.0.6: **52.3%**
- Toolathlon-Verified: **73.6%**
- OSWorld-Verified: **80.8%**
- JobBench: **61.2%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Agents’ Last Exam: **27.6%**

Coding:
- DeepSWE v1.1: **67.9%**
- MiMo Code Bench: **61.2%**
- ProgramBench: **26.0%**
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 87.6% near frontier, supported by Toolathlon 73.6% and OSWorld 80.8%; capped by missing GDPval-AA/Tau3.
- **Reasoning: 58/100.** No GPQA/HLE public scores; Agents’ Last Exam 27.6% indicates moderate reasoning; capped by missing core benchmarks.
- **Context window: 95/100.** 1M total/128K output verified; no verified ≥98% retrieval evidence.
- **Multimodal: 95/100.** Text/image/video/audio in; audio-in puts it in 90–100 band; no independent multimodal benchmark.
- **Coding: 78/100.** DeepSWE 67.9% + TB2.1 87.6% solid; capped by missing SWE-bench Verified/LiveCodeBench/SciCode and ProgramBench 26%.
- **Cost efficiency: 95/100.** .14/.28 with .0028 cache hit low-cost paid.
- **Overall Score: 83/100.** Mean of five quality dims = 82.6 → 83.

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
