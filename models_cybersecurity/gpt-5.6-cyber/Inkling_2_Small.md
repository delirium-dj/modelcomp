# GPT-5.6 Cyber — findings by Inkling 2 Small

- Source: OpenAI (`gpt-5.6-cyber`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Cyber (GPT-5.6 Cyber, Daybreak Red)
- **Short description:** OpenAI's purpose-trained cybersecurity model for authorized vulnerability research and security testing — an alias for purpose-trained cybersecurity models, available only to approved Daybreak Red customers. Successor positioning to the GPT-6-class cyber SKUs.
- **Provider / access:** OpenAI Daybreak Red program (verified organizations); API via Responses API only (Chat Completions not supported); Amazon Bedrock (`openai.gpt-5.6-cyber`).
- **Release / knowledge:** 2026 (GPT-5.6 generation); knowledge cutoff Feb 16, 2026.
- **IDs:** `gpt-5.6-cyber` (snapshot; immutable alias)
- **Context window:** 400,000 tokens (maximum input 272,000); max output 128,000 tokens.
- **Modalities:** text + image in; text out; reasoning yes; Responses API with full tool suite (web_search, file_search, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search); structured outputs; prompt caching.
- **Pricing (as of 2026-11-10):** $12.50 / 1M input, $75.00 / 1M output, cached input $1.25; >272K inputs priced 2x input / 1.5x output. Daybreak Red contract required — not publicly purchasable.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- ExploitGym: **32.1%** (OpenAI: GPT-6 Cyber launch post, per BenchLM; GPT-5.6 Cyber tracked at 3 of 812)
- No public τ²/OSWorld/CyberGym rows for this ID — no verified public agentic score found beyond ExploitGym

Reasoning / knowledge:

- no verified public score found (BenchLM: 3 of 812 covered; AA has no rows)

Coding:

- no verified public SWE/LCB rows found for this ID

Long context:

- 400K tokens (272K effective input cap); no verified public long-context retrieval score found

Multimodal:

- Text + image in; no verified public multimodal benchmark rows found for this ID

### Normalized scores (1–100)

- **Tool use: 55/100.** ExploitGym 32.1% is the only measured row (Daybreak sibling GPT-6 Cyber lineage); full tool suite documented officially (hosted_shell, computer_use, apply_patch, MCP) — capability documented, measurement thin; scored provisional.
- **Reasoning: 70/100.** Provisional — no public reasoning rows; inferred from GPT-5.6 Sol siblings (FrontierMath 90.9%, GPQA-class GPQA 91+) minus the specialist Cyber delta — NOT verified; scored conservatively for a 272K-input specialist.
- **Context window: 78/100.** 400K window (272K effective input cap); max output 128K — official docs verified; retrieval unmeasured publicly.
- **Multimodal: 62/100.** Text+image in, text out; no measured rows — provisional from sibling capability.
- **Coding: 62/100.** Provisional — no public coding rows for this ID; the purpose-trained cyber toolchain (hosted_shell, apply_patch, MCP) is documented but unmeasured publicly.
- **Cost efficiency: 8/100.** $12.50/$75 per 1M — most expensive public OpenAI tier tracked; Daybreak Red contract required.
- **Overall Score: 65/100.** (55 + 70 + 78 + 62 + 62) / 5 = 65.4 → 65. Best fit: verified Daybreak Red security teams doing authorized vulnerability research/exploit validation — not for general work; extremely high price.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI API docs, BenchLM, OpenAI Daybreak/launch pages); scores are normalized 1–100 interpretations, not official vendor scores. Sparse verified coverage — most rows provisional.
- Reference URLs:
  - [GPT-5.6 Cyber — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.6-cyber)
  - [GPT-5.6 Cyber — BenchLM](https://benchlm.ai/models/gpt-5-6-cyber)
  - [Expanding Daybreak as the Cyber Defense Window Narrows — OpenAI](https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/)
  - [Daybreak — OpenAI](https://openai.com/daybreak/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
