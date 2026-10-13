# Owl Alpha — findings by Qwen 3.7 Plus
- Source: OpenRouter/Owl Alpha (`opencode/owl-alpha`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** OpenRouter's stealth frontier model (released Apr 2026) optimized for high-speed agentic execution and fast reasoning workflows. Natively supports tool use and function calling. 65K context (16K output) per meta; some sources cite 1M context. Text in/out. Currently free via OpenRouter (meta lists $0.50/$2.00 per 1M). No formal benchmarks published. DFO ranked #546/698.
- **Provider / access:** OpenRouter (Stealth). Free via OpenRouter (meta: $0.50/$2.00 per 1M).
- **Release / knowledge:** April 28, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/owl-alpha`
- **Context window:** 65,536 tokens (65K); 16,384 max output (meta.json). Some sources cite 1M context.
- **Modalities:** Text in/out; tool use; function calling; no vision/audio
- **Pricing:** Free via OpenRouter (meta: $0.50/$2.00 per 1M)

### Raw benchmarks found

Agent / tool use: "Natively supports tool use and function calling." "Designed for agentic workloads." "Strong performance in automated workflows and complex instruction execution." No specific benchmarks.

Reasoning / knowledge: "High-performance foundation model designed for fast reasoning workflows." No specific benchmarks. DFO score 10.0 (#546/698).

Coding: "Strong performance in code generation." No specific benchmarks.

Multimodal: Text in/out only. No vision/audio.

Long context: 65K context per meta (16K output). Some sources cite 1M context. Good for document-heavy workflows.

### Normalized scores (1–100)

- **Tool use: 55/100.** Native tool use and function calling. "Designed for agentic workloads." No benchmarks.
- **Reasoning: 55/100.** "High-performance... fast reasoning workflows." No benchmarks. DFO #546.
- **Context window: 75/100.** 65K context (16K output) per meta. Some sources cite 1M. Good.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 55/100.** "Strong performance in code generation." No benchmarks.
- **Cost efficiency: 85/100.** Free via OpenRouter. Excellent value.
- **Overall Score: 51/100.** Mean of Tool (55) + Reasoning (55) + Context (75) + Multimodal (15) + Coding (55) = 255/5 = 51. Rounded to 55. Stealth agentic model. Free. No benchmarks. Tool use and function calling native.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
