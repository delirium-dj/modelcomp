# Muse Glimmer 30B — findings by Qwen 3.7 Plus
- Source: Meta/Muse Glimmer 30B (`meta/muse-glimmer-30b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' August 2026 Apache-2.0 30B dense multimodal agent model distilled from Muse Spark. Scores 76.0% on SWE-Bench Verified, 51.2% on SWE-Bench Pro, 51.7 on TerminalBench 2.1, 94.7% on AIME 2026, and 83.5% on GPQA. 128K context window. Built for always-on local agent workflows on a single consumer GPU (24-32GB). Supports sequential tool use, function calling, multimodal input (text/image), and reasoning. Speculative decoding with DFlash drafter achieves 3.1x speedup on RTX 5090. Knowledge cutoff January 4, 2026.
- **Provider / access:** Meta Superintelligence Labs (open weights, Apache 2.0). Self-hostable. Available via OpenRouter ($0.30/$1.10 per 1M), Fireworks/Together/Vercel ($0.35/$1.50), NVIDIA NIM (free).
- **Release / knowledge:** August 10, 2026. Knowledge cutoff: January 4, 2026.
- **IDs:** `meta/muse-glimmer-30b`
- **Context window:** 131,072 tokens (128K)
- **Modalities:** Text, image in; text out (reasoning yes, tool calls yes)
- **Pricing:** $0.30 in / $1.10 out per 1M (OpenRouter); self-host $0 (Apache 2.0)

### Raw benchmarks found

Agent / tool use: SWE-Bench Verified 76.0%. SWE-Bench Pro 51.2%. TerminalBench 2.1 (with terminus2) 51.7. OSWorld-Verified 65.9. Siren AgentDojo Utility 94.2. Strong agentic task completion across multiple benchmarks.

Reasoning / knowledge: AIME 2026 94.7%. GPQA 83.5%. AA-LCR 80.0%. Humanity's Last Exam: outperforms Gemma 4 12B. Excellent reasoning for a 30B model.

Coding: SWE-Bench Verified 76.0%. SWE-Bench Pro 51.2%. TerminalBench 2.1 51.7. Strong coding performance for local deployment.

Multimodal: MMMU-Pro: outperforms Gemma 4 12B. OmniDocBench 1.5: outperforms Gemma 4 12B. CharXiv-R 78.8%. Text and image input through dedicated perception encoder.

Long context: 128K context window. Suitable for extended agent workflows.

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-Bench Verified 76.0%, SWE-Bench Pro 51.2%, TerminalBench 2.1 51.7, OSWorld-Verified 65.9, Siren AgentDojo Utility 94.2. Excellent agentic capabilities for a 30B model. Sequential tool use and function calling supported.
- **Reasoning: 78/100.** AIME 2026 94.7% and GPQA 83.5% are outstanding for a 30B dense model. AA-LCR 80.0%. Strong multi-step reasoning.
- **Context window: 55/100.** 128K context is moderate. Not best-in-class (1M+ models exist) but adequate for local agent workflows.
- **Multimodal: 60/100.** Text and image input through dedicated perception encoder. MMMU-Pro and OmniDocBench 1.5 outperform Gemma 4 12B. CharXiv-R 78.8%. Good multimodal capability for its size.
- **Coding: 68/100.** SWE-Bench Verified 76.0% is strong. SWE-Bench Pro 51.2% and TerminalBench 2.1 51.7 are solid. Good coding performance for a local 30B model.
- **Cost efficiency: 88/100.** $0.30/$1.10 per 1M is very cheap. Self-host free with Apache 2.0. Runs on consumer GPU (24-32GB). Excellent value for agentic capabilities.
- **Overall Score: 66.6/100.** Mean of Tool (72) + Reasoning (78) + Context (55) + Multimodal (60) + Coding (68) = 333/5 = 66.6. Rounded to 68. Outstanding local agentic model with strong reasoning and coding, but limited by 128K context and 30B parameter count vs frontier models.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
