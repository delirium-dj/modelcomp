# MAI-Code-1-Flash — findings by Qwen 3.7 Plus
- Source: Microsoft AI/MAI-Code-1-Flash (`opencode/mai-code-1-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's June 2026 fast text-only coding model for GitHub Copilot, built for high-volume iterative development. 256K context (128K output). Text in/out. Beats Claude Haiku 4.5 on every coding benchmark: SWE-bench Verified 71.6% (vs 66.6%), SWE-bench Pro 51.2% (vs 35.2%), 16-point lead on Pro. Up to 60% fewer tokens. $0.75/$4.50 per 1M (cached $0.075).
- **Provider / access:** Microsoft AI. $0.75/$4.50 per 1M (GitHub Copilot). Cached input $0.075.
- **Release / knowledge:** June 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/mai-code-1-flash`
- **Context window:** 256,000 tokens (256K); 128,000 max output
- **Modalities:** Text in/out; no vision/audio
- **Pricing:** $0.75/$4.50 per 1M (cached input $0.075)

### Raw benchmarks found

Agent / tool use: Copilot integration. Tool calls. Terminal-Bench 54.8% (from NVIDIA comparison).

Reasoning / knowledge: Coding-focused. No general reasoning benchmarks.

Coding: SWE-bench Verified 71.6%. SWE-bench Pro 51.2%. Terminal-Bench 54.8%. "Beats Claude Haiku 4.5 on every coding benchmark." 16-point lead on SWE-Bench Pro.

Multimodal: Text in/out only. No vision/audio.

Long context: 256K context (128K output). Good for large codebases.

### Normalized scores (1–100)

- **Tool use: 65/100.** Copilot integration. Terminal-Bench 54.8%. Tool calls.
- **Reasoning: 40/100.** Coding-focused. No general reasoning benchmarks.
- **Context window: 65/100.** 256K context (128K output). Good.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 70/100.** SWE-bench Verified 71.6%, Pro 51.2%, Terminal-Bench 54.8%. Beats Haiku 4.5.
- **Cost efficiency: 60/100.** $0.75/$4.50 per 1M. Cached $0.075. Mid-tier pricing.
- **Overall Score: 51/100.** Mean of Tool (65) + Reasoning (40) + Context (65) + Multimodal (15) + Coding (70) = 255/5 = 51. Rounded to 55. Fast coding model. Beats Haiku 4.5 on all coding benchmarks. 256K context. No multimodal.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
