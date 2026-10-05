# Qwen3.8-Flash-Next — findings by GPT 5.5

- Source: Alibaba/Qwen (`qwen3.8-flash-next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Open-weight Qwen architectural-preview model for efficient reasoning, long-context, and local/self-hosted agent work. It is best treated as a preview sibling of the production Qwen3.8-Flash API model, not the same hosted product.
- **Provider / access:** Hugging Face/open weights (`Qwen/Qwen3.8-Flash-Next`) and self-hosting; third-party API listings vary and should not be assumed equivalent.
- **Release / knowledge:** Public preview reported in September 2026; knowledge cutoff not stated.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`; no verified Zen Free ID found.
- **Context window:** Public architecture/reporting centers on very long context; production sibling Qwen3.8-Flash is described as 1M context, while local Flash-Next reports commonly run 128K-262K depending on implementation.
- **Modalities:** Text in/text out; reasoning model; tool-use support depends on serving stack. No verified native audio/video output.
- **Pricing (as of 2026-10-05):** Open weights/self-host only for Flash-Next in the most careful public summaries; API prices circulating for `qwen3.8-flash` should not be assigned to `-next`.
- **Architecture:** Sparse MoE with 125B parameters, about 6B activated per token, plus a 51B n-gram embedding table; hybrid Gated DeltaNet/global attention with Qwen Sparse Attention in long-context pretraining.

### Raw benchmarks found

Agent / tool use:

- BenchLeader category summary: agents/tools **not independently decomposed in public snippet**; composite evidence available for the exact model (BenchLeader, 2026-09-28).
- Tool-use public benchmark details: no verified exact public Toolathlon/Tau score found.

Reasoning / knowledge:

- The Model Gap tracks **7 benchmark scores** for Qwen3.8-Flash-Next, with **4 independently run** and **3 vendor-sourced**.
- Architecture paper reports evaluation and training-stability results for the exact model, but not all standard leaderboard rows are visible in public search snippets.

Coding:

- Public local reports and video summaries discuss agentic coding/ToolQA/CoWorkBench; no verified exact SWE-bench or LiveCodeBench value found in accessible snippets.
- Reddit cybersecurity benchmark claim: **80.6% first try**, treated as anecdotal and not a standard score.

Long context:

- Architecture paper and public coverage emphasize sparse attention for long context; practical public local runs report **128K-262K** contexts, while production sibling advertises **1M**.

### Normalized scores (1–100)

- **Tool use: 62/100.** The model is explicitly built for agent/tool workflows and has tracked benchmark evidence, but public exact tool scores are sparse.
- **Reasoning: 68/100.** Independent/vendor-mixed benchmark tracking and modern Qwen architecture support a strong open-weight reasoning score, capped by incomplete public standard rows.
- **Context window: 86/100.** The architecture targets very long context and production lineage reaches 1M, but Flash-Next practical verified deployments are often below that.
- **Multimodal: 15/100.** No reliable native multimodal capability was verified for this exact text model.
- **Coding: 66/100.** Coding-focused public reports are positive, but absence of exact SWE/LCB rows caps confidence.
- **Cost efficiency: 90/100.** Open weights can be very cost-effective when self-hosted, though hardware memory cost is high.
- **Overall Score: 59/100.** Half-up mean of tool, reasoning, context, multimodal, and coding; best fit is self-hosted long-context experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

