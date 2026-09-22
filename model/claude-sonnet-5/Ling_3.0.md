# Claude Sonnet 5 — findings by Ling 3.0

> Provided by: **Ling 3.0 (Anthropic/claude-sonnet-5)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's agentic mid-tier model with near-Opus coding and computer-use capability at Sonnet-class pricing.
- **Provider / access:** Anthropic — `claude-sonnet-5` on claude.ai, Anthropic API, Claude Code
- **Release / knowledge:** June 30, 2026; knowledge cutoff Jan 2025
- **IDs:** anthropic/claude-sonnet-5
- **Context window:** 1,000,000 tokens
- **Modalities:** Text and image in; text out (computer use via OSWorld-Verified)
- **Pricing (as of 2026-09-23):** $2.00/M input tokens, $10.00/M output tokens (Anthropic API)
- **Architecture:** ~1T parameters, dense transformer, reasoning-capable

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **80.4%** (Anthropic system card, June 30, 2026)
- OSWorld-Verified: **81.2%** (Anthropic system card, June 30, 2026)
- BrowseComp: **84.7%** (benchmarklist.com, sourced from Anthropic)
- Toolathlon: **54.3%** Pass@1 (Anthropic system card)
- SWE-bench Verified: **85.2%** (Anthropic system card)

Reasoning / knowledge:
- HLE (no tools): **43.2%** (Anthropic system card)
- HLE (with tools): **57.4%** (Anthropic system card)
- USAMO 2026: **79.5%** (Anthropic system card)
- GPQA Diamond: Not officially published by Anthropic; third-party Vals AI run ~88.9% (benchmarklist.com)
- GDPval-AA v2: **1618 Elo** (Anthropic system card)

Coding:
- SWE-bench Pro: **63.2%** (Anthropic system card)
- SWE-bench Multilingual: **78.3%** (Anthropic system card)
- LiveCodeBench: **82.4%** (benchmarklist.com, third-party)
- FrontierCode v1: **38.8%** (Anthropic system card)
- ProgramBench: **76%–86%** across episodes (Anthropic system card)

Long context:
- ProgramBench (1M-token window): **76%–86%** (Anthropic system card)
- GDM-MRCR v2: Not separately published for Sonnet 5

### Normalized scores (1-100)
- **Tool use: 85/100.** Terminal-Bench 2.1 at 80.4% and OSWorld-Verified at 81.2% demonstrate strong agentic execution; BrowseComp 84.7% adds confirmation; Toolathlon 54.3% shows room for growth on multi-tool orchestration.
- **Reasoning: 83/100.** HLE with tools at 57.4% and USAMO 2026 at 79.5% indicate strong frontier reasoning; GPQA Diamond not officially published but third-party ~88.9% supports this tier; HLE without tools at 43.2% shows tool-augmented reasoning advantage.
- **Context window: 95/100.** Full 1M-token context window is among the largest available, with ProgramBench demonstrating effective utilization up to the full window.
- **Multimodal: 83/100.** Native image input with computer-use capability validated at 81.2% on OSWorld-Verified; image understanding and generation support.
- **Coding: 89/100.** SWE-bench Pro 63.2% on the hard variant, SWE-bench Verified 85.2%, LiveCodeBench 82.4%, and Terminal-Bench 2.1 80.4% collectively place this in the top tier for agentic coding.
- **Cost efficiency: 85/100.** At $2/$10 per Mtok, significantly cheaper than Opus-class models while delivering near-Opus agentic performance; strong price-performance ratio.
- **Overall Score: 87/100.** High marks across all five quality dimensions: strong agentic coding (89), excellent context (95), solid reasoning (83), good tool use (85), and capable multimodal (83). Cost efficiency is excluded from Overall per methodology.

---

## Signature
- Provided by: **Ling 3.0 (Anthropic/claude-sonnet-5)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/claude-sonnet-5/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
