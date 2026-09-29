# Claude Opus 4.5 — findings by Kimi K3

- Source: Anthropic (`claude-opus-4-5-20251101`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November 2025 Opus flagship — first model to break 80% on SWE-bench Verified, launched with a ~67% Opus-tier price cut. Still served as an active legacy model; superseded by Opus 4.6 → 4.8 → 5.x.
- **Provider / access:** Anthropic Claude API (Messages API, `platform.claude.com`), Amazon Bedrock (InvokeModel), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; extended thinking + effort parameter (default `high`).
- **Release / knowledge:** Released 2025-11-24 (Anthropic newsroom); reliable knowledge cutoff May 2025, training data cutoff Aug 2025 (platform.claude.com model page).
- **IDs:** `anthropic/claude-opus-4.5` (API snapshot `claude-opus-4-5-20251101`; alias `claude-opus-4-5`). Status: Active (legacy); **retirement committed not sooner than 2026-11-24** — under two months away as of this writing. No Zen Free ID — paid only.
- **Context window:** 200K tokens input / 64K max output (platform.claude.com models overview).
- **Modalities:** Text + image in; text out. Extended thinking (reasoning) yes; tool calls yes; JSON/structured output via tool use.
- **Pricing (as of 2026-09-29):** $5.00 / $25.00 per 1M tokens in/out (paid; batch 50% off; prompt-cache reads 10% of input price per Anthropic pricing docs).
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.3%** (BenchLM; Anthropic launch via DataCamp)
- Tau2-Bench: **86.3%**, Tau3-Bench: **70.2%** (BenchLM)
- OSWorld / OSWorld-Verified: **66.3%** (BenchLM; Anthropic launch table)
- Claw-Eval: **59.6%**; QwenClawBench: 52.3% (BenchLM)
- MCP-Atlas: **42.3%**, Toolathlon: **43.5%** (BenchLM)
- GDPval-AA: no verified public score found
- Vending-Bench 2 final balance: **$4,967.06** (Anthropic system card via Vellum); BrowseComp-Plus: 70.48% → **85.30%** with context-management/memory/subagent techniques (Anthropic launch footnote)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (Anthropic launch via Vellum; AA-GPQA Diamond 81.0% per BenchLM)
- HLE: **30.8%** no-tools (BenchLM); **~43.2%** with web search (Anthropic via Vellum); AA-HLE 13.2% (BenchLM)
- ARC-AGI-2: **37.6%** (Anthropic via Vellum / llm-stats — >2× GPT-5.1's 17.6%)
- LCR / AA-LCR: **70.7%** (BenchLM)
- CritPt: **0.3%** (BenchLM)
- Artificial Analysis Intelligence Index: **23.7**; BenchLM overall: **55.09 / #54 of 508** (partial coverage, 58 of 486 benchmarks)
- Omniscience Accuracy / Hallucination Rate: **40.9% / 76.2%** (AA via BenchLM)

Coding:

- SWE-bench Verified: **80.9%** (Anthropic launch — first model above 80%; ahead of GPT-5.1 76.3%, Gemini 3 Pro 76.2%; highest-effort +4.3 pts over Sonnet 4.5 with 48% fewer tokens)
- SWE-bench Pro: **57.1%**, SWE-bench Multilingual: **77.5%** (BenchLM)
- LiveCodeBench v6: **84.8%** (BenchLM)
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found
- Aider Polyglot: +10.6 points over Sonnet 4.5 (Anthropic launch chart; absolute value not stated in text)

Long context:

- LongBench v2: **64.4%** (BenchLM); no MRCR/RULER at ≥512K reported for the 200K window

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2 86.3% + Tau3 70.2%, OSWorld 66.3% (best-in-class computer use at launch) and BrowseComp-Plus 85.3% (with techniques) are strong; capped by Terminal-Bench 2.0 at 59.3% and weak MCP-Atlas 42.3%.
- **Reasoning: 88/100.** GPQA 87.0% sits at the bottom edge of the 87–94% → 88–93 band, so the band floor applies; ARC-AGI-2 37.6% led its generation; band-floor score reflects HLE 30.8% no-tools and AA Index 23.7 holding it at the low end.
- **Context window: 70/100.** Tier mapping: 200K–500K band, 200K base = 70; LongBench v2 64.4% and AA-LCR 70.7% are serviceable, no long-retrieval wins beyond window size.
- **Multimodal: 68/100.** Image in, text out (60–75 band); strong vision scores (MMMU 80.7% per Anthropic launch, MMMU-Pro 70.6% per BenchLM) sit mid-band; no audio/video-native input or non-text output caps it.
- **Coding: 88/100.** SWE-bench Verified 80.9% was SOTA at launch (top of the 70–80% band), LiveCodeBench 84.8%, SWE-bench Pro 57.1%; capped by the 2026 frontier (Opus 5.x) having moved past it on harder agentic suites.
- **Cost efficiency: 45/100.** $5/$25 per 1M matches the $5/$25 ≈ 45 band anchor; 67% cheaper than the prior Opus but firmly paid-tier.
- **Overall Score: 79/100.** (80+88+70+68+88)/5 = 78.8 → 79. Best fit: reliable legacy pick for coding/agent workflows pinned to late-2025 behavior — but plan migration before the ≥2026-11-24 retirement window.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (Anthropic newsroom launch post + platform models docs, BenchLM model page, Vellum benchmark breakdown, DataCamp coverage); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed release/pricing/context against platform.claude.com; added knowledge cutoff (May 2025) and retirement commitment (not sooner than 2026-11-24 — imminent); added BrowseComp-Plus 85.3%; band-rule fixes: Reasoning 82→88 (GPQA band floor), Cost 50→45 ($5/$25 anchor), Overall 78→79.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
