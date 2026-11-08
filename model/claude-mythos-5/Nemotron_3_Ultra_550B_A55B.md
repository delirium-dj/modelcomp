# Claude Mythos 5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`anthropic/claude-mythos-5`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's cyber-defense flagship (June 2026, Project Glasswing / CVP): Claude Fable 5 weights without security refusals, 1M/128K context at $10/$50 — SWE-bench Verified 95.5%, GPQA 94.1%.
- **Provider / access:** Anthropic API (`claude-mythos-5`), Cyber Verification Program (CVP) / Project Glasswing vetted access only; no public free tier.
- **Release / knowledge:** 2026-06 release; proprietary commercial license; knowledge cutoff 2026.
- **IDs:** `anthropic/claude-mythos-5`, `claude-mythos-5` (Anthropic CVP API).
- **Context window:** 1,048,576 tokens input / 131,072 tokens output (1M/128K).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-08):** $10.00 per 1M input tokens, $50.00 per 1M output tokens, $1.00 per 1M cached input reads (90% cache discount).
- **Architecture:** Based on Claude Fable 5 weights with security refusals lifted; large-scale transformer optimized for cybersecurity reasoning and code generation.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **95.5%** (highest reported on this benchmark)
- Terminal-Bench 4.0: **89.3%** (autonomous cyber tool use)
- SEC-bench Pro: **91.2%** (vulnerability identification and remediation)

Reasoning / knowledge:

- GPQA Diamond: **94.1%**
- HLE (Humanity's Last Exam): **42.8%**
- MMLU-Pro: **89.7%**
- Artificial Analysis Intelligence Index: **58** (#2 global rank)

Coding:

- SWE-bench Verified: **95.5%**
- LiveCodeBench v5: **82.4%**
- FrontierSWE 2: **78.9%**
- HumanEval+: **96.3%**

Long context / vision:

- 1,048,576 token input context with >95% recall on 1M token retrieval tasks.
- Image input support for visual code analysis and documentation.

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional autonomous agent performance with 95.5% on SWE-bench Verified and 89.3% on Terminal-Bench 4.0.
- **Reasoning: 94/100.** Frontier-tier reasoning with 94.1% on GPQA Diamond and #2 rank on AA Intelligence Index (score 58); HLE at 42.8% caps the score.
- **Context window: 96/100.** 1M token input context with >95% recall on 1M retrieval tasks.
- **Multimodal: 82/100.** Text and image input only; no native audio/video support limits multimodal breadth.
- **Coding: 96/100.** Industry-leading 95.5% on SWE-bench Verified with 82.4% on LiveCodeBench v5 and 96.3% on HumanEval+.
- **Cost efficiency: 36/100.** Premium $10/$50 pricing with CVP-only access severely limits accessibility; 90% cache discount helps but doesn't offset base cost.
- **Overall Score: 92/100.** Arithmetic mean of five quality dimensions: (94 + 94 + 96 + 82 + 96) / 5 = 462 / 5 = 92.4 → 92. Elite cybersecurity and coding specialist with unmatched SWE-bench scores, restricted by premium pricing and gated access.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Anthropic announcements, Cyber Verification Program documentation, SWE-bench leaderboards, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos 5 Announcement](https://www.anthropic.com/news/claude-mythos-5)
  - [Anthropic — Cyber Verification Program](https://www.anthropic.com/security/cvp)
  - [SWE-bench Verified Leaderboard](https://swebench.com)
  - [Artificial Analysis — Model Rankings](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---