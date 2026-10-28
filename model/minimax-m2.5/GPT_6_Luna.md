# MiniMax-M2.5 — findings by GPT-6 Luna

- Source: MiniMax/MiniMax-M2.5 (`MiniMaxAI/MiniMax-M2.5`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.5
- **Short description:** MiniMax's open-weight model for coding, agentic tool use, search, office work, and productivity tasks. Its training emphasizes completing multi-step jobs in real digital environments.
- **Provider / access:** Hugging Face weights `MiniMaxAI/MiniMax-M2.5`; API routes include MiniMax and OpenRouter. The publisher's model card describes API usage and local inference.
- **Release / knowledge:** Released 2026-02-12 in provider catalogs; cutoff not stated.
- **IDs:** `MiniMaxAI/MiniMax-M2.5`; OpenRouter route `minimax/minimax-m2.5`.
- **Context window:** Approximately 204,800 tokens on the OpenRouter listing; max output 131,072 tokens on that route. Hosted provider limits can differ.
- **Modalities:** Text input/output; reasoning and tool use. No image/audio/video input documented for this checkpoint.
- **Pricing (as of 2026-10-28):** OpenRouter listing: $0.30 input, $0.03 cached input, and $1.20 output per 1M tokens. The model weights are released under MiniMax's Modified-MIT license; hardware costs apply to self-hosting.
- **Architecture:** Open-weight large language model; the sources reviewed do not provide a verified total/active parameter count for this checkpoint. Modified-MIT license.

### Raw benchmarks found

MiniMax reports the following results in its model card. SWE-family results use an internal Claude Code scaffolding with the default system prompt overridden and are averaged over four runs; BrowseComp uses context management.

Agent / tool use:

- BrowseComp: **76.3%** with context management (MiniMax model card).
- MiniMax reports improved agentic search and tool use, but no separate public MCP-Atlas or Toolathlon score was verified in the text-readable results.

Reasoning / knowledge:

- AIME 2025: **86.3**; GPQA Diamond: **85.2**; HLE without tools: **19.4** (MiniMax model card appendix).
- IFBench: **70.0** (MiniMax model card).

Coding:

- SWE-Bench Verified: **80.2%**; Multi-SWE-Bench: **51.3%** (MiniMax model card; SWE harness/multi-run details above).
- SciCode: **44.4** (MiniMax model card).

Long context:

- AA-LCR: **69.5** (MiniMax model card; model-publisher evaluation using the public evaluation set/method).
- No MRCR/RULER result was found in the text-readable card.

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 76.3 and the publisher's real-environment agent evaluation support strong search/tool performance; third-party replication was not found.
- **Reasoning: 86/100.** AIME 86.3 and GPQA 85.2 are strong, while HLE 19.4 and vendor-only results cap the score.
- **Context window: 82/100.** The hosted route lists roughly 205K context and AA-LCR 69.5; no retrieval result verifies performance at the full window.
- **Multimodal: 15/100.** The documented checkpoint is text-only input/output.
- **Coding: 91/100.** SWE-Bench Verified 80.2% and Multi-SWE-Bench 51.3% are strong; the proprietary harness and absence of independent confirmation cap the rating.
- **Cost efficiency: 90/100.** Open weights and $0.30/$1.20 hosted rates are competitive, although self-hosting the large checkpoint requires substantial compute.
- **Overall Score: 72/100.** Half-up mean of the five quality dimensions (88+86+82+15+91)/5 = 72.4; a strong fit for coding and agent workflows where text-only input is sufficient.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research using MiniMax's model card and provider listings. Publisher-reported benchmark values retain the stated harness/configuration; normalized scores are independent interpretations.
- Sources: [MiniMax-M2.5 model card](https://huggingface.co/MiniMaxAI/MiniMax-M2.5); [MiniMax M2.5 GitHub repository](https://github.com/MiniMax-AI/MiniMax-M2.5); [OpenRouter listing](https://openrouter.ai/minimax/minimax-m2.5).
