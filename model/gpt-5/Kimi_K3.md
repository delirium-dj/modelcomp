# GPT-5 — findings by Kimi K3

- Source: OpenAI (`gpt-5`; Zen listing `opencode/gpt-5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship — a unified router system pairing a fast answering model with a deeper reasoning model (`gpt-5-thinking`). Set math/coding records at launch; superseded by GPT-5.1+, now deprecated on some catalogs.
- **Provider / access:** OpenAI Responses/Chat Completions API (`gpt-5`, plus `gpt-5-mini`/`nano`/`chat-latest` family), ChatGPT; OpenCode Zen listing `opencode/gpt-5`. Responses API is the full-feature surface (reasoning effort, verbosity controls).
- **Release / knowledge:** Released 2025-08-07 (OpenAI "Introducing GPT-5"); knowledge cutoff May 1, 2025 (airank tracker listing).
- **IDs:** `opencode/gpt-5` (Zen), `gpt-5` (OpenAI API, dated snapshot `gpt-5-2025-08-07`). No Zen Free ID — paid only.
- **Context window:** 400K total (432.8K per airank tracker) / 128K max output.
- **Modalities:** Text + image (+file) in; text out. Reasoning yes (effort levels); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-27):** OpenAI $1.25 / $10.00 per 1M in/out, cached input $0.125 (OpenAI platform pricing); OpenCode Zen $1.07 / $8.50 per 1M. (Note: airank's $30/$120 row misattributes a different SKU.)
- **Architecture:** Proprietary routed system (auto-switching fast + reasoning sub-models).

### Raw benchmarks found

Agent / tool use:

- Tau-bench (retail/airline class, AA harness era): **80.0%** (airank)
- MCP-Atlas: **44.5%** (airank)
- GDPval: **34.8** (airank scale, not Elo — harness-specific, treat cautiously)
- BrowseComp: **20.1%** (airank)
- Terminal-Bench 2.x / Tau3 / Claw-Eval: no verified public score found for the exact `gpt-5` ID
- AA note: GPT-5 High and Medium topped AA-LCR at launch (Artificial Analysis GPT-5 article)

Reasoning / knowledge:

- GPQA Diamond: **87.3%** (airank; matches OpenAI launch table)
- HLE: **25.32%** (airank; OpenAI launch cited ~26.5% with tools family-wide)
- AIME 2025: **94.6%** (OpenAI launch, no tools)
- LCR / AA-LCR: benchmark-topping at launch per Artificial Analysis article (exact % in chart)
- Artificial Analysis Intelligence Index / BenchLM overall: AA published a dedicated GPT-5 analysis (2025-08-07); current index value not text-retrievable
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **74.9%** (OpenAI launch; verified across airank, hokai, imseankim coverage)
- Aider Polyglot: **88%** (imseankim benchmark roundup)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- Note: independent 16x Engineer real-world eval rated GPT-5 7.46/10, behind Claude Opus 4's 8.92 (imseankim)

Long context:

- 400K window with AA-LCR lead at launch; no MRCR/RULER numbers found

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau-bench 80% with launch-era agentic leadership (AA-LCR win); capped by BrowseComp 20.1% and missing TB2.x/Tau3 rows for the exact ID.
- **Reasoning: 86/100.** GPQA 87.3%, AIME 94.6%, HLE 25.3% (near launch-era ceiling with search); capped by 2026 reasoning frontier being well past it.
- **Context window: 82/100.** 400K lands mid 200K–500K band; the launch-time AA-LCR top spot justifies upper placement against fixed-window peers.
- **Multimodal: 68/100.** Image (+file) in, text out → 60–70 band; strong MMMU 78.4%; no audio/video-in on the API surface scored here, no non-text output.
- **Coding: 84/100.** SWE-bench 74.9% was #1 at launch and Aider 88% is strong; capped by later models (Opus 4.5+, GPT-5.1+) exceeding it and a weaker independent real-world coding rating.
- **Cost efficiency: 82/100.** $1.25/$10 is slightly worse than the $1.25/$4.25 (~88) anchor on the output side; Zen's $1.07/$8.50 helps.
- **Overall Score: 80/100.** (78+86+82+68+84)/5 = 79.6 → 80. Best fit: legacy ChatGPT-era app integrations that still pin `gpt-5`; new builds should start from GPT-5.x successors.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-27
- Method: public internet research (airank.dev model page, OpenAI developer launch coverage, hokai.io, imseankim roundup, Artificial Analysis GPT-5 article); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
