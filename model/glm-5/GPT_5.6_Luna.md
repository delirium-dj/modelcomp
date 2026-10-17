# GLM-5 - findings by GPT 5.6 Luna

- Source: Z.ai/zai-org/GLM-5
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Z.ai's open-weight reasoning model for long-horizon agentic engineering and coding. It is a distinct successor to GLM-4.7, not a coding-plan alias.
- **Provider / access:** Z.ai API `glm-5`; compatible chat-completions endpoints documented by Z.ai. Self-hosting is supported through vLLM, SGLang, Transformers, and other runtimes.
- **Release / knowledge:** 2026-02-11 per Artificial Analysis; knowledge cutoff not disclosed.
- **IDs:** `zai-org/GLM-5`; Z.ai API `glm-5`.
- **Context window:** 200K tokens, verified by Artificial Analysis; the model card reports 128K for its Terminal-Bench harness and 202,752 for HLE-with-tools.
- **Modalities:** text in and text out; reasoning and tool calling supported. No verified image/audio/video input found.
- **Pricing (as of 2026-10-17):** Z.ai/Artificial Analysis reports $1.00 per 1M input and $3.20 per 1M output; provider pricing may differ.
- **Architecture:** 744B total / 40B active MoE, MIT license, open weights.

### Raw benchmarks found

Independent sources disagreed on some values or evaluation conditions. I retained the Z.ai model-card values when the harness was explicit, and treated Artificial Analysis's Intelligence Index as an independent estimate.

Agent / tool use:

- HLE with tools: **50.4%** (Z.ai model card; full tool-enabled setup).
- BrowseComp: **62.0%**, or **75.9%** with context management (Z.ai model card).
- tau2-Bench: **89.7%** (Z.ai model card).
- MCP-Atlas public set: **67.8%** (Z.ai model card).
- Artificial Analysis Intelligence Index: **28 estimated**, rank **24/120** (Artificial Analysis, accessed 2026-10-17).

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Z.ai model card; HF card reproduces the result).
- HLE: **30.5%** text-only (Z.ai model card).
- HLE with tools: **50.4%** (Z.ai model card).
- AIME 2026 I: **92.7%** (Z.ai model card).

Coding:

- SWE-bench Verified: **77.8%** (Z.ai model card; Hugging Face evaluation record also lists 77.8%, while its independent leaderboard entry lists 72.8% under a different run).
- SWE-bench Multilingual: **73.3%** (Z.ai model card).
- Terminal-Bench 2.0: **56.2% / 60.7%** verified Terminus-2 conditions (Z.ai model card).
- CyberGym: **43.2%** (Z.ai model card).

Long context:

- Reported context limit is 200K tokens; no independent retrieval score at the full limit was found.

### Normalized scores (1-100)

- **Tool use: 88/100.** Strong BrowseComp, tau2-Bench, MCP-Atlas and tool-enabled HLE results; capped because most figures are vendor-reported and agent-harness dependent.
- **Reasoning: 87/100.** GPQA 86.0, HLE 30.5 and AIME 92.7 show frontier reasoning; capped by the middling HLE text score and source disagreement.
- **Context window: 84/100.** Verified 200K advertised context; capped because no full-window independent retrieval result was found.
- **Multimodal: 15/100.** Verified sources describe text-only input and output.
- **Coding: 86/100.** SWE-bench Verified 77.8 and strong Terminal-Bench/CyberGym results; capped by the 72.8 independent SWE-bench record and harness variance.
- **Cost efficiency: 78/100.** $1/$3.20 is usable but expensive relative to many open-weight alternatives.
- **Overall Score: 72/100.** Half-up mean of the five non-cost dimensions; strongest fit is text-only agentic engineering where tool use matters more than multimodality.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** - 2026-10-17
- Method: Three independent public web searches and source comparison: Z.ai/Hugging Face model card (2026-02-11), Hugging Face evaluation records, and Artificial Analysis (accessed 2026-10-17). Scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
