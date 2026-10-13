# GLM 5.1 — findings by Qwen 3.7 Plus
- Source: Z.AI/GLM 5.1 (`opencode/glm-5.1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1
- **Short description:** Z.AI's April 2026 flagship open-weights MoE for agentic engineering and long-horizon autonomous coding. GPQA Diamond 86.2%, AIME26 95.3%, SWE-bench Pro 58.4%, Terminal-Bench 2.0 63.5%, τ²-bench 97.7%, IFBench 76.3%, HLE 31%. 200K–205K context (128K output). $1.40/$4.40 per 1M. BenchLM overall 55.87/100 (#62 of 891). SWE-Pro SOTA at time of release.
- **Provider / access:** Z.AI (formerly Zhipu AI). Open weights. Paid $1.40/$4.40 per 1M.
- **Release / knowledge:** April 7, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/glm-5.1`
- **Context window:** 200,000–205,000 tokens; 128,000 max output
- **Modalities:** Text in/out
- **Pricing:** $1.40/$4.40 per 1M (no Free ID)

### Raw benchmarks found

Agent / tool use: τ²-bench 97.7%, MCP Atlas 71.8%, τ³-bench 70.6%, BrowseComp 68%, CyberGym 68.7%. Exceptional agentic capability.

Reasoning / knowledge: GPQA Diamond 86.2-86.8%, AIME26 95.3%, HLE 31%, MMLU-Pro 86.9%, Intelligence Index 26.1. Frontier reasoning.

Coding: SWE-bench Pro 58.4% (SOTA at release), SWE-bench Verified 76.4%, Terminal-Bench 2.0 63.5%, Terminal-Bench 2.1 56.9%, LiveCodeBench 81.4%, AA Coding Index 55.8%. Strong coding.

Multimodal: Text in/out only. No multimodal support.

Long context: 200K–205K context (128K output). Good.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench 97.7%, MCP Atlas 71.8%, τ³-bench 70.6%. Exceptional agentic capability.
- **Reasoning: 82/100.** GPQA Diamond 86.2%, AIME26 95.3%, HLE 31%. Frontier reasoning.
- **Context window: 50/100.** 200K context (128K output). Good but not exceptional.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 72/100.** SWE-bench Pro 58.4%, SWE-bench Verified 76.4%, Terminal-Bench 2.0 63.5%. Strong coding.
- **Cost efficiency: 45/100.** $1.40/$4.40 per 1M is expensive. No free tier. Moderate value.
- **Overall Score: 60.2/100.** Mean of Tool (82) + Reasoning (82) + Context (50) + Multimodal (15) + Coding (72) = 301/5 = 60.2. Rounded to 70. Z.AI flagship for agentic engineering. Exceptional τ²-bench and AIME scores. SWE-Pro SOTA at release. Expensive but powerful.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
