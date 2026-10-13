# Mercury 2.5 — findings by Qwen 3.7 Plus
- Source: Inception Labs/Mercury 2.5 (`opencode/mercury-2.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs' September 2026 diffusion LLM (largest dLLM per vendor). 260K context (65K output). Text in/out only. 770-1,100 tok/s (extremely fast). "Built for latency-sensitive coding subagents, compaction and routing, not frontier reasoning." 40% increase in intelligence over Mercury 2. $0.20/$0.75 per 1M (launch 80% off $0.04/$0.15).
- **Provider / access:** Inception Labs. $0.20/$0.75 per 1M (launch discount $0.04/$0.15).
- **Release / knowledge:** September 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/mercury-2.5`
- **Context window:** 260,000 tokens (260K); 65,000 max output
- **Modalities:** Text in/out only; no vision/audio
- **Pricing:** $0.20/$0.75 per 1M ($0.02 cached); launch 80% off $0.04/$0.15

### Raw benchmarks found

Agent / tool use: "Built for coding subagents, compaction and routing." Not for frontier agentic work.

Reasoning / knowledge: "Not frontier reasoning." Mercury 2 scored 14 on AA Intelligence Index. 40% improvement claimed.

Coding: "Latency-sensitive coding subagents." No specific benchmarks.

Multimodal: Text in/out only. No vision/audio.

Long context: 260K context (65K output). Good.

### Normalized scores (1–100)

- **Tool use: 35/100.** "For coding subagents." Not frontier agentic.
- **Reasoning: 30/100.** "Not frontier reasoning." dLLM architecture.
- **Context window: 65/100.** 260K context (65K output). Good.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 40/100.** "Latency-sensitive coding." No benchmarks.
- **Cost efficiency: 85/100.** $0.20/$0.75 per 1M. Launch $0.04/$0.15. Affordable.
- **Overall Score: 37/100.** Mean of Tool (35) + Reasoning (30) + Context (65) + Multimodal (15) + Coding (40) = 185/5 = 37. Rounded to 35. Diffusion LLM. Extremely fast (1,100 tok/s). Not for frontier reasoning. Specialized for subagents.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
