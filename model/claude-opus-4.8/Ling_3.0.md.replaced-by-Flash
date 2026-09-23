# Claude Opus 4.8 — findings by Ling 3.0

> Provided by: **Ling 3.0 (Anthropic/claude-opus-4.8)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May 2026 flagship reasoning model with leading SWE-bench Pro performance and parallel-subagent workflows.
- **Provider / access:** Anthropic — `claude-opus-4.8` on claude.ai, Anthropic API, Claude Code
- **Release / knowledge:** May 28, 2026; knowledge cutoff Jan 2025
- **IDs:** anthropic/claude-opus-4.8
- **Context window:** 200,000 tokens
- **Modalities:** Text and image in; text out
- **Pricing (as of 2026-09-23):** $5.00/M input tokens, $25.00/M output tokens (Anthropic API)
- **Architecture:** ~1T parameters, dense transformer, parallel-subagent dynamic workflows

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **74.6%** (Anthropic system card, May 28, 2026; Terminus-2 harness)
- OSWorld-Verified: **83.4%** (Anthropic system card)
- DeepSWE: **59.0%** (independent leaderboard, DataCurve)
- Toolathlon-Verified: **76.2%** (independent, toolathlon.xyz)
- BrowseComp: **84.3%** (Anthropic system card)
- MCP Atlas: **82.2%** (Anthropic system card)

Reasoning / knowledge:
- GPQA Diamond: **93.6%** (Anthropic system card; Vals AI independent: 92.4%)
- HLE (no tools): **49.8%** (Anthropic system card)
- HLE (with tools): **57.9%** (Anthropic system card)
- GDPval-AA Elo: **1890** (Anthropic system card)
- USAMO 2026: **96.7%** (Anthropic system card)

Coding:
- SWE-bench Verified: **88.6%** (Anthropic system card; Vals AI independent: 88.6%)
- SWE-bench Pro: **69.2%** (Anthropic system card)
- SWE-bench Multilingual: **84.4%** (Anthropic system card)

Long context:
- Context window limited to 200K tokens; long-context recall not independently benchmarked beyond this range

### Normalized scores (1-100)
- **Tool use: 86/100.** OSWorld-Verified at 83.4% and MCP Atlas at 82.2% demonstrate excellent tool-use capability; Terminal-Bench 2.1 at 74.6% on the Terminus-2 harness is solid; Toolathlon-Verified at 76.2% confirms broad tool competence; DeepSWE at 59.0% shows long-horizon agentic strength.
- **Reasoning: 86/100.** GPQA Diamond at 93.6% is among the frontier tier; HLE with tools at 57.9% leads the field; USAMO 2026 at 96.7% is exceptional; GDPval-AA at 1890 Elo confirms top-tier knowledge work reasoning.
- **Context window: 88/100.** 200K token context window is solid but trails the 1M-class models; sufficient for most coding and reasoning tasks but limited for ultra-long-document workflows.
- **Multimodal: 84/100.** OSWorld-Verified at 83.4% demonstrates strong computer-use capability; text and image input supported; no native audio/video input.
- **Coding: 90/100.** SWE-bench Pro at 69.2% leads the field; SWE-bench Verified at 88.6%; SWE-bench Multilingual at 84.4%; collectively the strongest coding benchmark profile among all models evaluated.
- **Cost efficiency: 75/100.** At $5/$25 per Mtok, expensive relative to mid-tier models; same pricing as Opus 4.7 but with improved capabilities; not competitive on cost for high-volume deployments.
- **Overall Score: 87/100.** Leading coding (90), excellent reasoning (86), strong tool use (86), capable multimodal (84), and adequate context (88) produce a top-tier overall; cost efficiency excluded from Overall per methodology.

---

## Signature
- Provided by: **Ling 3.0 (Anthropic/claude-opus-4.8)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/claude-opus-4.8/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
