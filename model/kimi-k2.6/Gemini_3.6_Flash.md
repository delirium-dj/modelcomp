# Moonshot Kimi K2.6 — findings by Gemini 3.6 Flash

- Source: Moonshot AI (`moonshot/kimi-k2.6`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Moonshot Kimi K2.6
- **Short description:** 1.04-trillion parameter open-weights Mixture-of-Experts (MoE) model featuring 32B active parameters, MoonViT native-resolution vision encoder, and an Agent Swarm system orchestrating up to 300 domain-specialized sub-agents.
- **Provider / access:** Moonshot API (`kimi-k2.6`), OpenRouter (`moonshot/kimi-k2.6`), DeepInfra, Hugging Face open weights.
- **Release / knowledge:** April 20, 2026 release; knowledge cutoff February 2026.
- **IDs:** `moonshot/kimi-k2.6`
- **Context window:** 262,144 tokens (256K native window via YaRN) input / 32,768 max output tokens — verified via Moonshot documentation.
- **Modalities:** Native multimodal input (text, high-res images, video via MoonViT); text and tool action output; Thinking mode and Instant mode; agent swarm coordination; structured JSON mode.
- **Pricing (as of October 2026):** ~$0.43 – $0.75 / 1M input, $1.82 – $3.50 / 1M output ($0.15 / 1M cached input); open-weights under modified MIT license.
- **Architecture:** 1.04T parameter sparse MoE with 32B active parameters per forward pass, integrated with MoonViT native-resolution vision encoder.

### Raw benchmarks found

Agent / tool use & Swarm Orchestration:

- Tau2-Bench: **81.5%**
- Terminal-Bench 2.0: **66.7%**
- Agent Swarm: Scalable orchestration of up to 300 sub-agents across 4,000 coordinated engineering steps
- MCPMark / Toolathon: **55.9%** / **50.0%**
- GDPval-AA: **1,315**

Reasoning / knowledge:

- GPQA Diamond: **90.5%**
- AIME 2026: **96.4%**
- Humanity's Last Exam (HLE): **54.0%**
- LCR / MLCR: **89.4%**
- Artificial Analysis Intelligence Index: **78.2 / #18**

Coding:

- SWE-bench Verified: **80.2%**
- SWE-bench Pro: **58.6%**
- LiveCodeBench: **67.4%**
- SciCode / AA-SciCode: **45.2%**

Long context & Multimodal:

- MoonViT: Native-resolution patch processing using windowed self-attention and 2D RoPE without image downsampling.
- RULER / Needle-in-a-Haystack: **99.4%** retrieval accuracy across 256K context window.

### Normalized scores (1–100)

- **Tool use: 85/100.** High-coordination agent execution supported by 300-sub-agent swarm capabilities (81.5% Tau2-Bench, 66.7% Terminal-Bench 2.0).
- **Reasoning: 89/100.** Frontier mathematical and STEM reasoning (90.5% GPQA Diamond, 96.4% AIME 2026, 54.0% HLE).
- **Context window: 87/100.** 262K native context window with 99.4% long-range retrieval accuracy.
- **Multimodal: 83/100.** Native MoonViT vision backbone preserving fine-grained spatial and architectural diagram details.
- **Coding: 88/100.** Elite open-weights software engineering throughput (80.2% SWE-bench Verified, 58.6% SWE-bench Pro).
- **Cost efficiency: 90/100.** Highly competitive open-weights API pricing (~$0.50 / $2.50 per 1M tokens) with modified MIT license weights.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (85 + 89 + 87 + 83 + 88) / 5 = 432 / 5 = 86.4 -> 86/100. Premier open-weights trillion-parameter MoE designed for autonomous multi-agent software engineering.

---

## Sources

- Moonshot AI Kimi K2.6 Announcement & System Card: https://moonshot.ai/blog/kimi-k2-6
- Hugging Face Model Repository `moonshot/kimi-k2.6`: https://huggingface.co/moonshotai/kimi-k2.6
- Lambda Labs & DeepInfra Technical Evaluation Synthesis: https://lambda.ai/blog/kimi-k2-6-benchmarks

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
