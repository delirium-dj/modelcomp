# Kimi K2.7 Code — findings by Space Bunny Alpha

- Source: Moonshot AI / Kimi K2.7 Code
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused multimodal MoE model for end-to-end programming, long-horizon agentic decomposition, and multi-turn tool use.
- **Provider / access:** Hugging Face `moonshotai/Kimi-K2.7-Code`; OpenRouter `moonshotai/kimi-k2.7-code`; Kimi Code CLI and compatible local/API deployments.
- **Release / knowledge:** Released 2026-06-12 (OpenRouter dated slug); no verified exact knowledge cutoff found.
- **IDs:** `moonshotai/Kimi-K2.7-Code`; OpenRouter `moonshotai/kimi-k2.7-code`.
- **Context window:** 262,144 tokens (official model card and OpenRouter).
- **Modalities:** Text and image input, text output; native thinking mode with preserved reasoning across turns, tool calling, and structured outputs. The official model template also contains video placeholders, but the provider specification verifies text/image input.
- **Pricing (as of 2026-09-25):** OpenRouter lists $0.6562 input / $0.18 cached input / $3.30 output per 1M tokens; Artificial Analysis reports $0.95/$4.00 for Kimi's API median.
- **Architecture:** Open-weight MoE, 1T total parameters and 32B active, with a 400M-parameter vision encoder; modified-MIT license.

### Raw benchmarks found

> Moonshot's official table uses thinking mode, temperature 1.0, top-p 0.95, and a 262,144-token context unless otherwise stated. Values below are the Kimi K2.7 Code column.

Agent / tool use:

- MCP-Atlas: **76.0%**; MCP-Mark Verified: **81.1%** (official model card; 100 tool-call/100-step budgets, averaged over three runs).
- Kimi Claw 24/7 Bench: **46.9%** (official model card; 610 evaluation points across 17 scenarios).
- Artificial Analysis Tau2-Bench Telecom: **90.1%**; IFBench: **63.1%**; Agentic Index: **21.0** (OpenRouter summary).

Reasoning / knowledge:

- GPQA Diamond: **89.6%**; HLE: **35.0%**; Artificial Analysis Intelligence Index: **25.8** (OpenRouter summary).
- AA-LCR: **79.3%**; CritPt: **10.0%**; GDPval-AA: **26.3%** (OpenRouter summary).
- No separate exact-model AIME result was found in the reviewed official table.

Coding:

- Kimi Code Bench v2: **62.0**; Program Bench: **53.6**; MLS-Bench Lite: **35.1** (official model card).
- SciCode: **47.8%**; Artificial Analysis Coding Index: **60.8**; Terminal-Bench Hard: **44.7%** (OpenRouter summary).
- No exact public SWE-bench Verified or SWE-bench Pro score was found in the official table reviewed.

Long context:

- AA-LCR: **79.3%** with a 262K context (Artificial Analysis/OpenRouter).
- No standalone exact-model MRCR/RULER/GraphWalks result was found.

Multimodal:

- Text/image input and text output are verified by the OpenRouter model metadata and official model card. No exact-model public visual benchmark score was found.

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP-Atlas at 76.0%, MCP-Mark Verified at 81.1%, and Tau2 Telecom at 90.1% show strong tool use; Kimi Claw at 46.9% and the modest IFBench result cap the score.
- **Reasoning: 82/100.** GPQA at 89.6% and AA-LCR at 79.3% are strong, while HLE at 35.0%, CritPt at 10.0%, and Intelligence Index at 25.8 limit the rating.
- **Context window: 76/100.** The verified 262K context and 79.3% AA-LCR are useful but below the 500K-plus top tier.
- **Multimodal: 65/100.** Image input is supported, but no exact public visual benchmark was found.
- **Coding: 89/100.** Kimi Code Bench v2 at 62.0, Program Bench at 53.6, SciCode at 47.8%, and Coding Index at 60.8 indicate strong coding-agent performance; the missing SWE-bench result prevents a top score.
- **Cost efficiency: 79/100.** Hosted pricing is moderate but higher than many open alternatives, while the 1T/32B-active model is expensive to self-host despite native INT4 options.
- **Overall Score: 80/100.** A capable long-context multimodal coding agent with strong tool benchmarks; best for software engineering workflows that value persistent reasoning and large context, at a higher token and infrastructure cost.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: official Moonshot AI Hugging Face model card, Artificial Analysis measurements, and OpenRouter API metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.7_Code.md`, using the same headings.
