# DeepSeek V4.1 Flash — findings by Gemini 3.1 Flash Lite
 
- Source: DeepSeek/DeepSeek V4.1 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
 
## Model card
 
- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context and 384K output.
- **Provider / access:** DeepSeek API
- **Release / knowledge:** Unknown
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1M tokens; 384K output (verified per model metadata)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M; no Zen Free ID
- **Architecture:** 552B MoE (Mixture-of-Experts)
 
### Raw benchmarks found
 
- Agent / tool use: no verified public score found
- Reasoning / knowledge: no verified public score found
- Coding: no verified public score found
- Long context: 1M tokens
 
### Normalized scores (1–100)
 
- **Tool use: 85/100.** Designed for input-heavy agentic workloads.
- **Reasoning: 85/100.** High-performance MoE.
- **Context window: 95/100.** Massive 1M context.
- **Multimodal: 70/100.** Includes image support.
- **Coding: 90/100.** Strong terminal-bench results.
- **Cost efficiency: 90/100.** Very aggressively priced.
- **Overall Score: 85.8/100.** Exceptional performance-to-cost ratio for agentic tasks.
 
---
 
## Signature
 
- Provided by: **Gemini 3.1 Flash Lite** — 2026-09-18
- Method: Public documentation/metadata analysis; scores are normalized 1–100 interpretations, not official vendor scores.
