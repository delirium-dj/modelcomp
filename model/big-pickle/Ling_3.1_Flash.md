# Big Pickle — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Big Pickle
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** Big Pickle is an **anonymous stealth model** on OpenCode Zen (`big-pickle`, OpenAI-compatible endpoint `https://opencode.ai/zen/v1`; LiteLLM route `openai/big-pickle`). The developer is undisclosed; the only benchmark is a single self-reported community run. Identity is unverified and was not used to score any dimension.

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen's free stealth model — described in the model registry as a "reasoning model for deliberate analysis, multi-step problem solving, and tool use"; free for a limited time while the team collects feedback to improve the model.
- **Provider / access:** OpenCode Zen (pay-as-you-go table: Free input / Free output / Free cached read). "Big Pickle is a stealth model that's free on OpenCode for a limited time."
- **Release / knowledge:** 2025-10-17 (models.dev registry). Knowledge cutoff not captured.
- **IDs:** `big-pickle`; folder `big-pickle`.
- **Context window:** 200,000 tokens (models.dev registry; max input 160,000, max output 32,000).
- **Modalities:** Not documented (text assumed; no image/video evidence captured).
- **Pricing (as of 2026-10):** $0.00 / $0.00 per 1M (free during the stealth period; no announced end date).
- **Data terms:** "During its free period, collected data may be used to improve the model."
- **Architecture:** Not disclosed (anonymous).

### Raw benchmarks found

**Self-reported community run (GitHub repository, covered by BitIDE AI Compass and LavX News, 2026-08-16):**
- **SWE Atlas Codebase QnA: 50.8% task resolve rate (63/124)** — via Scale AI's SWE Atlas Codebase QnA benchmark using the mini-swe-agent scaffold; the agent accessed big-pickle through OpenCode Zen's OpenAI-compatible endpoint, routed via LiteLLM as `openai/big-pickle`.
- Consumption: 674M input / 4.3M output tokens, at $0 model cost (free stealth period). Full-run cost: ~$70 Modal compute (at reduced sandbox resources; roughly 2-3x more at the declared 16 CPU/16 GB) + ~$25 Anthropic API judging + $0 model.
- "The result leads other Mini-SWE-Agent entries in the published comparison."
- **Caveats (from the coverage itself):** a single trial, smaller sandboxes, and an unconfirmed model identity limit the claim. Not an independent, replicated measurement.

**No other benchmarks captured:** no SWE-bench, Terminal-Bench, GPQA, HLE, or tool-use rows exist in the sources reviewed.

## Scores

- **Tool use: 49/100.** One self-reported SWE Atlas Codebase QnA run (50.8%, mini-swe-agent, single trial); tool use is claimed in the registry description but unmeasured elsewhere.
- **Reasoning: 46/100.** No reasoning benchmark captured; "deliberate analysis, multi-step problem solving" is a description, not evidence.
- **Context window: 70/100.** 200K tokens per the models.dev registry; no long-context retrieval benchmark captured.
- **Multimodal: 15/100.** No multimodal evidence; treated as text-only until documented otherwise.
- **Coding: 51/100.** The single self-reported SWE Atlas Codebase QnA 50.8% is the only coding evidence — credited with its caveats (single trial, reduced sandboxes, unconfirmed identity).
- **Cost efficiency: 100/100.** Free during stealth (caveat: limited time, no end date; collected data may be used to improve the model).
- **Overall Score: 46.2/100.** Mean of Tool use 49, Reasoning 46, Context window 70, Multimodal 15, Coding 51 = 46.2.

> **Gap vs folder average (56.1): −9.9.** The peer set appears to credit the free price and the 50.8% SWE Atlas headline; this report also credits both, but the evidence base is one self-reported, single-trial community run with reduced sandboxes and an unconfirmed identity, plus zero standard benchmarks. The gap is an evidence gap, not a capability verdict; an independent replication or identity confirmation would change the score.

## Notes

- Verification trail: OpenCode Zen docs (pay-as-you-go table; stealth-model notice; data-retention notice), models.dev `providers/opencode/models/big-pickle.toml` (name, description, release date 2025-10-17, 200K/160K/32K limits, zero pricing), BitIDE AI Compass (SWE Atlas Codebase QnA 50.8% = 63/124; mini-swe-agent scaffold; token consumption; run-cost breakdown), LavX News (2026-08-16; the same run with the single-trial/sandbox/identity caveats), pi.dev and Coolhand Labs ($0.00 pricing confirmation; pricing history since 2026-08-12).
- Known conflicts: none — there is only one benchmark source, so nothing to reconcile.
- Open questions: the developer's identity; standard benchmark rows; context-window confirmation from the provider; an end date for the free period.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: identity confirmation, independent replications, standard benchmark rows.
