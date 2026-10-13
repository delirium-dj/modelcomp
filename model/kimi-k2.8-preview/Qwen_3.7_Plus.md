# Kimi K2.8 Preview — findings by Qwen 3.7 Plus
- Source: Moonshot AI/Kimi K2.8 Preview (`moonshot/kimi-k2-8-preview`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's September 2026 mid-tier coding and agentic model inside Kimi Code, positioned between K2.7 Code and flagship K3. Multimodal capabilities (text, image in). 1M context window. Proprietary license. Preview designation indicates active development with enterprise feedback being gathered. No benchmark scores independently published. Bridges specialized K2.7 Code variant and generalist multimodal models.
- **Provider / access:** Moonshot AI (Kimi platform, API). Proprietary.
- **Release / knowledge:** September 11, 2026. Knowledge cutoff not specified.
- **IDs:** `moonshot/kimi-k2-8-preview`
- **Context window:** 1,048,576 tokens (1M)
- **Modalities:** Text, image in; text out
- **Pricing:** Kimi membership plan (no per-token billing, no Zen Free ID)

### Raw benchmarks found

Agent / tool use: No specific benchmark scores published. Positioned as coding and agentic model between K2.7 Code and K3.

Reasoning / knowledge: No standard reasoning benchmarks published. Preview model with limited independent evaluation.

Coding: No specific coding benchmarks published. Positioned between K2.7 Code (Kimi Code Bench v2 62.0%) and K3 (DeepSWE 67.5%).

Multimodal: Vision understanding introduced (text + image). No standard multimodal benchmarks published.

Long context: 1M native context window.

### Normalized scores (1–100)

- **Tool use: 55/100.** Positioned as coding and agentic model. No specific benchmark scores published. Inferred from K2.7 Code's strong MCP Atlas (76.0%) and MCP Mark Verified (81.1%).
- **Reasoning: 55/100.** No standard reasoning benchmarks published. Positioned between K2.7 Code and K3 in capability.
- **Context window: 75/100.** 1M context is good but not best-in-class (2M models exist).
- **Multimodal: 50/100.** Vision understanding introduced. No standard multimodal benchmarks published.
- **Coding: 60/100.** Positioned between K2.7 Code (Kimi Code Bench v2 62.0%) and K3 (DeepSWE 67.5%). No specific benchmarks published for this preview.
- **Cost efficiency: 70/100.** Kimi membership plan pricing. No per-token billing. Moderate value proposition.
- **Overall Score: 59/100.** Mean of Tool (55) + Reasoning (55) + Context (75) + Multimodal (50) + Coding (60) = 295/5 = 59.0. Preview status, limited benchmark coverage, and proprietary licensing limit the score. Positioned between K2.7 Code and K3 in capability.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
