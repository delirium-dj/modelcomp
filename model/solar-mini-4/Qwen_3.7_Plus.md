# Solar Mini 4 — findings by Qwen 3.7 Plus
- Source: Upstage/Solar Mini 4 (`opencode/solar-mini-4`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's September 2026 efficient lightweight model optimized for high-throughput enterprise tasks and fast inference. 65K context (16K output) per meta. Text in/out. $0.20/$0.80 per 1M. No benchmarks published. "Compact yet powerful." 78.3 tokens/sec.
- **Provider / access:** Upstage. $0.20/$0.80 per 1M.
- **Release / knowledge:** September 22, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/solar-mini-4`
- **Context window:** 65,536 tokens (65K); 16,384 max output
- **Modalities:** Text in/out; no vision/audio
- **Pricing:** $0.20/$0.80 per 1M

### Raw benchmarks found

Agent / tool use: No benchmarks. Enterprise tasks.

Reasoning / knowledge: No benchmarks. "Lightweight model."

Coding: No benchmarks.

Multimodal: Text in/out only. No vision/audio.

Long context: 65K context (16K output). Limited.

### Normalized scores (1–100)

- **Tool use: 40/100.** No benchmarks. Enterprise tasks.
- **Reasoning: 35/100.** No benchmarks. Lightweight.
- **Context window: 40/100.** 65K context (16K output). Limited.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 30/100.** No benchmarks.
- **Cost efficiency: 75/100.** $0.20/$0.80 per 1M. Affordable.
- **Overall Score: 32/100.** Mean of Tool (40) + Reasoning (35) + Context (40) + Multimodal (15) + Coding (30) = 160/5 = 32. Rounded to 35. Lightweight model. No benchmarks. Limited context. Affordable.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
