# GPT-5 — findings by Kimi K3

- Source: OpenAI (`gpt-5`; Zen listing `opencode/gpt-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship — a unified system pairing a fast answering model with a deeper reasoning model (`gpt-5-thinking`). Set math/coding records at launch; now the "previous" generation per OpenAI docs, which recommend GPT-6 Astra / GPT-5.x successors.
- **Provider / access:** OpenAI Responses/Chat Completions/Batch API (`gpt-5`, plus `gpt-5-mini`/`nano`/`chat-latest` family), ChatGPT; OpenCode Zen listing `opencode/gpt-5`. Responses API is the full-feature surface (reasoning effort minimal/low/medium/high, verbosity controls).
- **Release / knowledge:** Released 2025-08-07 (OpenAI "Introducing GPT-5"); knowledge cutoff 2024-09-30 (OpenAI platform docs).
- **IDs:** `opencode/gpt-5` (Zen), `gpt-5` (OpenAI API, default snapshot `gpt-5-2025-08-07`). No Zen Free ID — paid only.
- **Context window:** 400K total window, 272K max input, 128K max output (OpenAI platform docs).
- **Modalities:** Text + image in; text out. Reasoning yes (effort levels); tool calls yes (function calling, web/file search, code interpreter, image generation, MCP); JSON mode yes.
- **Pricing (as of 2026-09-29):** OpenAI $1.25 / $10.00 per 1M in/out, cached input $0.125 (OpenAI platform docs); OpenCode Zen $1.07 / $8.50 per 1M.
- **Architecture:** Proprietary routed system (auto-switching fast + reasoning sub-models).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **86.5%** (GPT-5 medium effort, benchlm.ai via AA); Tau-bench (retail/airline class, earlier AA harness): **80.0%** (airank)
- MCP-Atlas: **44.5%** (airank)
- GDPval: **34.8** (airank scale, not Elo — harness-specific, treat cautiously)
- BrowseComp: **20.1%** (airank)
- Terminal-Bench 2.x / Tau3 / Claw-Eval: no verified public score found for the exact `gpt-5` ID
- AA note: GPT-5 High and Medium topped AA-LCR at launch (Artificial Analysis GPT-5 article)

Reasoning / knowledge:

- GPQA Diamond: **87.3%** (airank; matches OpenAI launch table); AA-GPQA Diamond (medium): **84.2%** (benchlm.ai)
- HLE: **25.32%** (airank; OpenAI launch cited ~26.5% with tools family-wide); AA-HLE (medium): **25.4%** (benchlm.ai)
- AIME 2025: **94.6%** (OpenAI launch, no tools); AA MATH-500 (medium): **99.1%** (benchlm.ai)
- AA-LCR (medium): **76.0%**; CritPt (medium): **0.0%** (benchlm.ai); launch-era AA-LCR top spot per Artificial Analysis article
- Artificial Analysis Intelligence Index (medium): **22.9**; BenchLM overall (medium) **44.87/100, #107 of 512** (2026-09-28)
- AA-Omniscience Accuracy / Hallucination Rate (medium): **39.5% / 83.2%** (benchlm.ai); AA-IFBench **70.6%**

Coding:

- SWE-bench Verified: **74.9%** (OpenAI launch; #1 at launch, verified across airank, hokai, imseankim coverage)
- Aider Polyglot: **88%** (imseankim benchmark roundup)
- LiveCodeBench / SWE-bench Pro / Vibe Code Bench: no verified public score found
- Note: independent 16x Engineer real-world eval rated GPT-5 7.46/10, behind Claude Opus 4's 8.92 (imseankim)

Long context:

- 400K window (272K max input) with AA-LCR lead at launch; current AA-LCR (medium) 76.0%; no MRCR/RULER numbers found

Multimodal:

- AA-MMMU-Pro (medium): **74.3%**; Design Arena Website: **1192 Elo** (benchlm.ai); MMMU 78.4% (prior research roundup)

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-bench 86.5% (medium) was launch-era leadership; capped by BrowseComp 20.1%, MCP-Atlas 44.5% and missing TB2.x/Tau3 rows for the exact ID — mid-tier by 2026 standards.
- **Reasoning: 77/100.** GPQA ~84–87%, AIME 94.6%, MATH-500 99.1%; capped by AA Intelligence Index 22.9 and 2026 frontier models ~10 GPQA points ahead.
- **Context window: 76/100.** 400K window in the 65–84 band; launch-time AA-LCR top spot, now 76.0% (medium) — solid, not best-in-class against 1M-window successors.
- **Multimodal: 68/100.** Image in, text out → 60–75 band; AA-MMMU-Pro 74.3%; no audio/video-in, no non-text output.
- **Coding: 76/100.** SWE-bench Verified 74.9% was #1 at launch and Aider 88% is strong; capped by later successors (GPT-5.5 88.7%, SWE-bench Pro-era scores) and a weaker independent real-world coding rating.
- **Cost efficiency: 78/100.** Zen $1.07/$8.50 per 1M (~78 band anchor); OpenAI list $1.25/$10 slightly worse on the output side, cheap $0.125 caching helps.
- **Overall Score: 74.6/100.** (76+77+76+68+76)/5 = 74.6. Best fit: legacy ChatGPT-era app integrations that still pin `gpt-5`; new builds should start from GPT-5.x/6.x successors.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (OpenAI platform docs, airank.dev model page, OpenAI developer launch coverage, hokai.io, imseankim roundup, Artificial Analysis GPT-5 article, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: corrected knowledge cutoff to 2024-09-30 (OpenAI docs, was 2025-05-01); confirmed 400K/272K-in/128K-out, snapshot `gpt-5-2025-08-07`, $1.25/$10 list + Zen $1.07/$8.50; added 2026 benchlm.ai rows (τ² 86.5%, AA Index 22.9, AA-MMMU-Pro 74.3%, MATH-500 99.1%); recalibrated all dims honestly as mid-tier by 2026 standards (Tool use 78→76, Reasoning 86→77, Context 82→76, Coding 84→76, Cost 82→78; Overall 80→74.6).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
