# Mimo V2.6 Distill Qwen 9B — findings by Qwen 3.7 Plus
- Source: Xiaomi MiMo/MiMo V2.6 Distill Qwen 9B (`opencode/mimo-v2.6-distill-qwen-9b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mimo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi MiMo's MIT-licensed September 2026 9.4B dense agentic SFT of Qwen3.5-9B. 262K context (hybrid linear/full attention). Text, image, video in; text out. Reasoning and tool calls. Self-host only (no hosted API). SWE-bench Verified 61.1%, SWE-bench Pro 44.6%, Terminal-Bench 2.1 37.1%. "Covers coding, general agent tasks, visual understanding." 18.8 GB BF16 weights.
- **Provider / access:** Xiaomi MiMo. MIT open weights. Self-host only ($0). No hosted API route.
- **Release / knowledge:** September 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/mimo-v2.6-distill-qwen-9b`
- **Context window:** 262,144 tokens (256K)
- **Modalities:** Text, image, video in; text out; reasoning; tool calls
- **Pricing:** $0 (MIT open weights, self-hosted; 18.8 GB BF16)

### Raw benchmarks found

Agent / tool use: Tool calls, reasoning. SWE-bench Verified 61.1%. Terminal-Bench 2.1 37.1%. JobBench 18.3% (15th pct). "Agentic model."

Reasoning / knowledge: No general reasoning benchmarks. Distilled from Qwen3.5-9B.

Coding: SWE-bench Verified 61.1%. SWE-bench Pro 44.6%. Terminal-Bench 2.1 37.1%. 8th pct on SWE-bench Verified.

Multimodal: Text, image, video in. Multimodal support.

Long context: 262K context (hybrid linear/full attention). Good for long-horizon tasks.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calls, reasoning. SWE-bench 61.1%, Terminal-Bench 37.1%. JobBench 18.3%.
- **Reasoning: 40/100.** No general reasoning benchmarks. Distilled from Qwen3.5-9B.
- **Context window: 70/100.** 262K context. Hybrid attention. Good.
- **Multimodal: 40/100.** Text, image, video in. Multimodal support.
- **Coding: 55/100.** SWE-bench Verified 61.1%, Pro 44.6%, Terminal-Bench 37.1%.
- **Cost efficiency: 95/100.** MIT license. $0 self-hosted. Free.
- **Overall Score: 52/100.** Mean of Tool (55) + Reasoning (40) + Context (70) + Multimodal (40) + Coding (55) = 260/5 = 52. Rounded to 50. 9B agentic distillation. MIT. SWE-bench 61.1%. Multimodal. Free. No hosted API.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
