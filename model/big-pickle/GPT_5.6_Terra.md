# Big Pickle — findings by GPT 5.6 Terra

- Source: OpenCode Zen/Big Pickle
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Big Pickle
- **Short description:** Anonymous, free stealth coding model offered through OpenCode Zen.
- **Provider / access:** OpenCode Zen model ID `big-pickle`; underlying developer and architecture are not disclosed.
- **Release / knowledge:** stealth model; release date and cutoff unknown.
- **IDs:** `big-pickle`.
- **Context window:** not publicly verified.
- **Modalities:** text coding workflow; no verified multimodal support.
- **Pricing (as of 2026-09-30):** free through its documented Zen route, subject to service limits.
- **Architecture:** undisclosed.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8% (63/124)**, evaluated with mini-swe-agent and the official harness in a public reproducibility report ([GitHub](https://github.com/PhillipChaffee/big-pickle-swe-atlas)).

Reasoning / knowledge:

- No verified public general-reasoning benchmark found.

Coding:

- SWE Atlas Codebase QnA: **50.8%**; TypeScript subset **58.1%**, Python **55.2%**, Go **50.0%**, C **38.5%** (public harness report).

Long context:

- No verified context or retrieval result found.

### Normalized scores (1–100)

- **Tool use: 76/100.** A 50.8% codebase-agent resolve rate is meaningful but reported from one external harness configuration.
- **Reasoning: 65/100.** No transparent general reasoning score is available.
- **Context window: 55/100.** No documented maximum context or retrieval evidence was found.
- **Multimodal: 15/100.** No verified multimodal capability.
- **Coding: 78/100.** 50.8% across 124 SWE Atlas tasks, including 58.1% TypeScript, supports useful software-engineering performance.
- **Cost efficiency: 100/100.** The current route is free.
- **Overall Score: 58/100.** Half-up mean of the five quality dimensions; promising free coding route with anonymous provenance and limited benchmark breadth.

## Refresh note

Fresh public-source recheck found no newer authoritative model card or comparable benchmark table for this exact route. Existing evidence is retained.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: fresh public internet research; scores are normalized interpretations, not official vendor scores.
