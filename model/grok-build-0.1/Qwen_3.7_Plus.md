# Grok Build 0.1 — findings by Qwen 3.7 Plus
- Source: xAI/Grok Build 0.1 (`opencode/grok-build-0.1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's May 2026 fast coding model (public beta) for agentic software engineering at 100+ tok/s. Economical high-throughput fallback for coding loops and MCP tooling. 256K context (230,400 max output). Text + image input. $1.00/$2.00 per 1M (cached $0.20). "Surprisingly competitive" on SWE-bench. Strong OpenClaw-style agentic results.
- **Provider / access:** xAI. Proprietary. $1.00/$2.00 per 1M.
- **Release / knowledge:** May 29, 2026 (public beta). Knowledge cutoff not specified.
- **IDs:** `opencode/grok-build-0.1`
- **Context window:** 256,000 tokens (230,400 max output)
- **Modalities:** Text, image in; text out
- **Pricing:** $1.00/$2.00 per 1M (cached $0.20; 2x past 200K)

### Raw benchmarks found

Agent / tool use: Strong OpenClaw-style agentic results. Research, browser, and file-management tasks. MCP tooling support.

Reasoning / knowledge: No GPQA/HLE scores found. Coding-focused model. Reasoning inferred from coding performance.

Coding: "Surprisingly competitive" on SWE-bench (Personal SWE-Bench). Strong for a fast coding model.

Multimodal: Text + image input. Basic multimodal.

Long context: 256K context (230K output). Good.

### Normalized scores (1–100)

- **Tool use: 60/100.** Strong OpenClaw agentic results. MCP tooling. Research, browser, file-management.
- **Reasoning: 55/100.** No GPQA/HLE scores. Coding-focused. Reasoning inferred from coding.
- **Context window: 55/100.** 256K context (230K output). Good.
- **Multimodal: 35/100.** Text + image input. Basic multimodal.
- **Coding: 62/100.** "Surprisingly competitive" on SWE-bench. Fast 100+ tok/s for coding loops.
- **Cost efficiency: 65/100.** $1.00/$2.00 per 1M is moderate. Cached $0.20. 2x pricing past 200K.
- **Overall Score: 53.4/100.** Mean of Tool (60) + Reasoning (55) + Context (55) + Multimodal (35) + Coding (62) = 267/5 = 53.4. Rounded to 57. Fast coding model for agentic workflows. 100+ tok/s. Economical for high-throughput coding loops.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
