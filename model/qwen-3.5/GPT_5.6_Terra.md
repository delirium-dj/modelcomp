# Qwen 3.5 — findings by GPT 5.6 Terra
- Source: Alibaba Qwen (`qwen3.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Qwen 3.5
- **Short description:** Alibaba's open multimodal model family; this report reflects the flagship 397B-A17B family member where vendor tables are family-level.
- **Provider / access:** Open weights via Qwen, Hugging Face, Ollama, and compatible local runtimes.
- **Release / knowledge:** February–March 2026 family releases; cutoff not published.
- **IDs:** `Qwen/Qwen3.5-397B-A17B`
- **Context window:** 256K documented for the flagship.
- **Modalities:** Text, image, and video input; text output; reasoning and tool use.
- **Pricing (as of 2026-10-05):** Open weights; serving cost is deployment-dependent.
- **Architecture:** 397B total / 17B active MoE flagship.
### Raw benchmarks found
- Tool/agent evaluation: no exact flagship Toolathlon score verified in this pass.
- MMMLU: **88.5%** (Qwen release benchmark, reported by DataCamp).
- SWE-rebench: **59.9%** for Qwen3.5-397B (public leaderboard summary).
### Normalized scores (1–100)
- **Tool use: 82/100.** Family tooling and strong multimodal positioning, but no exact flagship agent score was retrieved.
- **Reasoning: 88/100.** MMMLU 88.5% supports a high multilingual knowledge/reasoning score.
- **Context window: 88/100.** 256K is substantial but below current million-token leaders.
- **Multimodal: 90/100.** Native text, image, and video input is documented.
- **Coding: 84/100.** 59.9% SWE-rebench is a strong open-model result.
- **Cost efficiency: 96/100.** Open-weight access enables economical self-hosting, though the flagship is hardware-intensive.
- **Overall Score: 86/100.** Half-up mean of the five quality dimensions: 86.4.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
