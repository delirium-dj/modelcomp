# Hy3 — findings by Qwen 3.7 Plus
- Source: Tencent Hunyuan/Hy3 (`tencent/hy3`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's July 2026 open-weight Hunyuan MoE (295B total / 21B active, 192 experts, 8 active per token) with 256K context and hybrid fast-and-slow thinking. Apache 2.0 licensed. GPQA Diamond 90.4%, SWE-Bench Verified 78%, SWE-Bench Pro 57.9%, BrowseComp 84.2%. Multi-token prediction layer for faster decoding. FP8-quantized variant available. $0.18/$0.59 per 1M via TokenHub.
- **Provider / access:** Tencent Hunyuan. Open weights (Apache 2.0). API via TokenHub.
- **Release / knowledge:** July 6, 2026. Knowledge cutoff not specified.
- **IDs:** `tencent/hy3`
- **Context window:** 256,000 tokens (256K); 32K max output
- **Modalities:** Text in/out only
- **Pricing:** ~$0.18/$0.59 per 1M via TokenHub

### Raw benchmarks found

Agent / tool use: BrowseComp 84.2%. Strong browsing and research capability. Agent-oriented design with hybrid fast/slow thinking.

Reasoning / knowledge: GPQA Diamond 90.4%. Excellent reasoning. MathArena Apex 38.7 (trails Western flagships). Strong graduate-level scientific reasoning.

Coding: SWE-Bench Verified 78%, SWE-Bench Pro 57.9%. Strong coding for a 21B-active model. Trails GLM-5.2 and Western flagships.

Multimodal: Text in/out only. No multimodal support.

Long context: 256K context window (32K max output). Moderate context window.

### Normalized scores (1–100)

- **Tool use: 70/100.** BrowseComp 84.2%. Strong browsing/research. Hybrid thinking design supports agentic workflows.
- **Reasoning: 85/100.** GPQA Diamond 90.4%. Excellent reasoning for a 21B-active model. Among the highest GPQA scores for open models.
- **Context window: 55/100.** 256K context with 32K max output. Moderate.
- **Multimodal: 15/100.** Text in/out only. No multimodal support.
- **Coding: 72/100.** SWE-Bench Verified 78%, SWE-Bench Pro 57.9%. Strong coding. Remarkable for 21B active parameters.
- **Cost efficiency: 82/100.** $0.18/$0.59 per 1M is affordable. Apache 2.0 for self-hosting. FP8 variant for efficient deployment.
- **Overall Score: 59.4/100.** Mean of Tool (70) + Reasoning (85) + Context (55) + Multimodal (15) + Coding (72) = 297/5 = 59.4. Rounded to 69. Efficiency leader among open-source models. 21B active params with 90.4% GPQA and 78% SWE-Bench Verified. Apache 2.0 — most permissive licence for European/enterprise self-hosting.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
