# MAI-Code 1.1 Flash — findings by Qwen 3.7 Plus
- Source: Microsoft AI/MAI-Code 1.1 Flash (`opencode/mai-code-1.1-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code 1.1 Flash
- **Short description:** Microsoft AI's August 2026 multimodal coding model for GitHub Copilot — fast agentic coding with image and PDF input. SWE-Bench Verified 72.6%, Terminal-Bench 2.1 62.9%. 256K context (128K output). $0.20/$1.20 per 1M (cached $0.02). Purpose-built for iterative developer workflows. Proprietary licence.
- **Provider / access:** Microsoft AI. Proprietary. Via GitHub Copilot and Azure.
- **Release / knowledge:** August 11, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/mai-code-1.1-flash`
- **Context window:** 256,000 tokens (256K); 128,000 max output
- **Modalities:** Text, image, PDF in; text out
- **Pricing:** $0.20/$1.20 per 1M in/out (cached input $0.02)

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.1 62.9%. Designed for GitHub Copilot agentic workflows. Strong tool integration.

Reasoning / knowledge: No GPQA/HLE scores found. Coding-focused model. Reasoning capability inferred from coding performance.

Coding: SWE-Bench Verified 72.6%, Terminal-Bench 2.1 62.9%. Strong coding for a flash model.

Multimodal: Text, image, PDF input. Multimodal coding capability — can process visual designs and documents.

Long context: 256K context (128K output). Good.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.1 62.9%. Designed for Copilot agentic workflows. Strong tool integration.
- **Reasoning: 55/100.** No GPQA/HLE scores. Coding-focused. Reasoning inferred from strong coding benchmarks.
- **Context window: 60/100.** 256K context with 128K output. Good.
- **Multimodal: 55/100.** Text, image, PDF input. Multimodal coding — can process visual designs and documents.
- **Coding: 68/100.** SWE-Bench Verified 72.6%, Terminal-Bench 2.1 62.9%. Strong coding for a flash model.
- **Cost efficiency: 85/100.** $0.20/$1.20 per 1M is affordable. Cached input $0.02. Good value for a coding-specialized model.
- **Overall Score: 60.6/100.** Mean of Tool (65) + Reasoning (55) + Context (60) + Multimodal (55) + Coding (68) = 303/5 = 60.6. Rounded to 62. Fast multimodal coding model for GitHub Copilot. Strong SWE-Bench and Terminal-Bench scores. Good cost efficiency.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
