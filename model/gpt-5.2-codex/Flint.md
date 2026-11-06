# GPT-5.2 Codex — findings by Flint

- Source: OpenAI / GPT-5.2 Codex
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex (OpenAI; GPT family — Codex tier).
- **Short description:** OpenAI's most advanced agentic coding model for professional software engineering and defensive cybersecurity; a version of GPT-5.2 optimized for agentic coding in Codex (context compaction, long-horizon work, large refactors/migrations, Windows environments, cybersecurity).
- **Provider / access:** OpenAI ChatGPT (all Codex surfaces, paid users); API access rolled out gradually after release; invite-only trusted access pilot for vetted defenders.
- **Release / knowledge:** Released 2025-12-18 (OpenAI blog / system card addendum); knowledge cutoff ~August 2025 (Artificial Analysis).
- **IDs:** `gpt-5.2-codex`; base `gpt-5.2`.
- **Context window:** 400,000 tokens (Artificial Analysis); max output not stated in verified sources.
- **Modalities:** Reasoning yes (extended thinking); text + image input, text output; multimodal (design mocks → prototypes, screenshots/diagrams/charts/UI); no audio/PDF coverage found in verified sources.
- **Pricing (as of 2026-10-28):** $1.75 input / $14.00 output per 1M tokens (OpenAI, Epoch AI, Artificial Analysis); blended cache-hit/input/output (7:2:1) ≈ $1.87 per 1M tokens; Artificial Analysis: input moderately priced, output somewhat expensive; paid tier.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

- Coding:
  - Terminal-Bench 2.0: **67%** (Epoch AI; vs Gemini 3 Pro **69%**, Claude Opus 4.5 **63%**, Grok 4 **27%**).
  - Text Arena (Coding): **1339** Elo (Epoch AI; best score **1820**).
  - ALE-Bench: **1300** (Epoch AI; best **2951**).
  - SWE-Bench Pro: claimed state of the art by OpenAI (vendor claim; independent value not confirmed).
- Cybersecurity: Professional Capture-the-Flag (CTF) eval; stronger than GPT-5.1-Codex-Max; did not reach 'High' cyber capability under OpenAI's Preparedness Framework.

### Cross-source comparison

- SWE-Bench Pro / Terminal-Bench 2.0: OpenAI claimed state of the art; independent Epoch AI Terminal-Bench 2.0 **67%** — slightly below independent **69%** for Gemini 3 Pro, partially contradicting the SOTA claim.
- Context: 400K per Artificial Analysis; knowledge cutoff August 2025.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.0 **67%**, Text Arena (Coding) **1339**, ALE-Bench **1300**; independent agentic numbers mid-high; vendor SWE-Bench Pro SOTA claim unverified independently.
- **Reasoning: 70/100.** Reasoning via extended thinking; token-efficient reasoning; independent coverage limited to agentic coding benchmarks (TB2.0 67%, Text Arena 1339) — no standalone reasoning index value (Epoch ECI **N/A**).
- **Context window: 90/100.** 400k tokens per Artificial Analysis → top-tier context band; knowledge cutoff August 2025.
- **Multimodal: 65/100.** Text + image in, text out; design-mock-to-prototype strength; no audio/PDF coverage → mid band.
- **Coding: 75/100.** Terminal-Bench 2.0 **67%** + OpenAI state-of-the-art claim on SWE-Bench Pro; agentic coding flagship tier.

- **Cost efficiency: 50/100.** $1.75 in / $14.00 out per 1M tokens — paid, moderate input / high output; scored but excluded from Overall.
- **Overall Score: 74/100.** Mean of the five quality dims (Tool 70 + Reasoning 70 + Context 90 + Multimodal 65 + Coding 75) / 5 = 74; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (OpenAI blog / system card) plus independent benchmarks/reviews (Artificial Analysis, Epoch AI) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

I made a typo: "opencode/flink" should be "opencode/flint". Fix it.</think>Fixing a typo I made in the signature:<tool_call>edit<arg_key>path</arg_key><arg_value>E:\qwik\modelcomp\model\gpt-5.2-codex\Flint.md