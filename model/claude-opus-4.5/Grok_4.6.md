# Claude Opus 4.5 — findings by Grok 4.6

- Source: Anthropic (`claude-opus-4-5-20251101`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic’s 2025-11-24 Opus flagship (legacy vs 2026 Opus 5.x): 200K context, extended thinking, text+image in. Strong SWE-bench Verified at launch; still on the Claude API as a cheaper-than-Opus-4.1 but smaller-window model.
- **Provider / access:** Anthropic Messages API `claude-opus-4-5-20251101` / `claude-opus-4-5`; Bedrock, Vertex, Microsoft Foundry. Extended thinking; default effort `high`.
- **Release / knowledge:** 2025-11-24; reliable knowledge cutoff **May 2025**, training data cutoff **Aug 2025** (Anthropic platform overview).
- **IDs:** `anthropic/claude-opus-4-5`. No OpenCode Zen Free ID found.
- **Context window:** **200K** tokens; max output **64K** (Anthropic docs). Not the 1M Opus 5.x window.
- **Modalities:** text and images → text; tools / computer use (OSWorld). Audio/video not on the overview I/O row.
- **Pricing (as of 2026-10-01):** **$5 / $25** per 1M; cache read $0.50; 5m cache write $6.25; 1h $10; Batch 50% off (Anthropic).
- **Architecture:** proprietary. Third-party “400B MoE” claims (InferenceBench) are **not** used here — Anthropic’s card does not publish weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-bench 2.0: **59.3%** (Anthropic system card vs Sonnet 4.5 50.0%, Gemini 3 Pro 54.2%)
- τ²-Bench Retail: **88.9%**; Telecom: **98.2%** (system card)
- MCP Atlas: **62.3%** (system card)
- OSWorld: **66.3%** (system card / LLM Stats)
- Tau3 / TB 4.0 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.0%** system card (64k thinking, 5-trial avg **86.95%**); Artificial Analysis **86.6%** (AI Atlas, 2026-09)
- AIME: **90%** (LLM Stats secondary table)
- ARC-AGI-2 Verified: **37.6%** (system card)
- MMLU: **88.3%** (LLM Stats); MMMLU **90.8%** (system card)
- HLE / Intelligence Index: no verified public score found in this pass

Coding:

- SWE-bench Verified: **80.9%** no-thinking / **80.60%** 64k thinking (system card); LLM Stats **80.9%**
- SWE-bench Pro: **52.0%** no-thinking / **51.60%** 64k thinking (system card)
- SWE-bench Multilingual: **76.20%** (system card)
- Aider Polyglot: **89.4%**; HumanEval: **84.9%** (LLM Stats)
- Community SWE-Verified Sonar agent **79.2%** (AI Atlas, 2025-12-05)
- DeepSWE / LiveCodeBench: no verified public score found

Long context:

- 200K native. MRCR / RULER / AA-LCR: no verified public score found.

Multimodal extras:

- MMMU validation: **80.7%** (system card)

### Normalized scores (1–100)

- **Tool use: 85/100.** τ² Retail/Telecom 88.9%/98.2% and MCP Atlas 62.3% are strong; TB 2.0 59.3% is mid-high (45–60% band). Capped by OSWorld 66.3% (not 80%+ 2026 computer-use) and no TB 4.0/Tau3.
- **Reasoning: 84/100.** GPQA 87% is near 90%+; ARC-AGI-2 37.6% is notable. Capped by no HLE/Index and a May 2025 knowledge cutoff.
- **Context window: 70/100.** 200K maps to the documented 70 anchor. 64K max out is a caveat.
- **Multimodal: 65/100.** Image in, text out → 60–70 (MMMU 80.7%).
- **Coding: 90/100.** SWE-Verified 80.9% is above the 74%+ spirit of the coding ref; Aider 89.4% helps. Capped by SWE-Pro ~52% and no DeepSWE.
- **Cost efficiency: 50/100.** $5/$25 is worse than $3/$15 ≈60 and far from $1.25/$4.25 ≈88. Cache $0.50. Not $0.
- **Overall Score: 79/100.** (85+84+70+65+90)/5 = 78.8 → 79 half-up. Best-fit: late-2025 coding Opus at 200K; prefer Opus 5.x for 1M context and 2026 agent suites.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (Anthropic platform overview + Opus 4.5 system card, LLM Stats, AI Atlas); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
