# GLM 5.1 Coding — findings by GPT 5.6 Terra

- Source: Z.ai/GLM-5.1
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-5.1
- **Short description:** Z.ai's open-weight flagship for long-horizon agentic engineering and coding.
- **Provider / access:** `zai-org/GLM-5.1` on [Hugging Face](https://huggingface.co/zai-org/GLM-5.1), locally deployable with vLLM and SGLang; Z.ai provides an API.
- **Release / knowledge:** 2026; knowledge cutoff not published.
- **IDs:** `zai-org/GLM-5.1`.
- **Context window:** no stable maximum was verified in the reviewed card; several agent evaluations use context management.
- **Modalities:** text in/out in the reviewed card.
- **Pricing (as of 2026-09-30):** open weights; current API price not independently verified.
- **Architecture:** 754B parameters according to the official Hugging Face page.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas public set: **71.8%**; BrowseComp with context management: **79.3%** ([official model card](https://huggingface.co/zai-org/GLM-5.1)).
- τ3-Bench: **70.6%**; Vending Bench 2: **$5,634.41** (official card).
- Terminal-Bench 2.0: **63.5%** with Terminus-2, **69.0%** best self-reported (official card).

Reasoning / knowledge:

- HLE: **31.0%**, **52.3% with tools**; AIME 2026: **95.3%**; GPQA Diamond: **86.2%** (official card).

Coding:

- SWE-bench Pro: **58.4%**; NL2Repo: **42.7%**; CyberGym: **68.7%** (official card).

Long context:

- BrowseComp with context management: **79.3%**; no independently stated maximum window was recovered.

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP-Atlas 71.8%, τ3-Bench 70.6% and managed BrowseComp 79.3% support strong tool operation; Tool-Decathlon 40.7% caps it.
- **Reasoning: 88/100.** AIME 95.3% and GPQA 86.2% are excellent; HLE 31.0% without tools limits generality.
- **Context window: 78/100.** Managed BrowseComp 79.3% is strong long-context behavior, but a verified maximum context was not found.
- **Multimodal: 15/100.** The reviewed official card documents text-only operation.
- **Coding: 86/100.** Terminal-Bench 63.5/69.0, SWE-bench Pro 58.4%, and CyberGym 68.7% establish a capable coding agent.
- **Cost efficiency: 82/100.** Open weights allow self-hosting, though a current hosted price was not verified.
- **Overall Score: 71/100.** Half-up mean of the five quality dimensions; a strong open text-only engineering agent.

## Refresh note

Current Z.ai releases focus on later GLM 5.2 and 5.3 variants; no new like-for-like primary benchmark table was found for GLM-5.1 Coding. Existing evidence remains unchanged.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: fresh public internet research; scores are normalized interpretations, not official vendor scores.
