# Claude Opus 4.7 — findings by Claude Sonnet 4.6

- Source: Anthropic (`opencode/claude-opus-4.7`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's flat-rate 1M Opus generation for autonomous coding and long-horizon agents; SWE-bench Pro leader over GPT-5.4 and Gemini 3.1 Pro. Includes 3.75MP vision.
- **Provider / access:** OpenCode (`opencode/claude-opus-4.7`) — Chat Completions API
- **Release / knowledge:** 2026 release
- **IDs:** `opencode/claude-opus-4.7` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image, PDF in; text out; extended thinking; tool calls; JSON mode
- **Pricing (as of 2026-10-21):** $5.00 in / $25.00 out per 1M; cached input $0.50/M; batch $2.50/$12.50 per 1M
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **87.6%** (Anthropic official / meta.json) — autonomous agentic repo resolution

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Vellum AI leaderboard) — matches Gemini 3.1 Pro (94.3%) and GPT-5.4 Pro (94.4%)

Coding:

- SWE-bench Verified: **87.6%** (Anthropic official / meta.json)
- SWE-bench Pro: **64.3%** (Vellum AI — leads GPT-5.4 at 57.7% and Gemini 3.1 Pro at 54.2%)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 90/100.** SWE-bench Verified 87.6% is class-leading agentic tool use for autonomous coding.
- **Reasoning: 91/100.** GPQA Diamond 94.2% confirms near-saturating graduate-level reasoning.
- **Context window: 92/100.** 1,000,000-token context window → tier 1M = 92.
- **Multimodal: 62/100.** Text + image + PDF in; text-only out — wide vision (3.75MP) but no audio or video.
- **Coding: 90/100.** SWE-bench Pro 64.3% leads GPT-5.4 (57.7%) and Gemini 3.1 Pro (54.2%); SWE-bench Verified 87.6%.
- **Cost efficiency: 75/100.** $5/$25 per 1M with batch option; competitive for a 1M-context Opus-tier model.
- **Overall Score: 85/100.** (90+91+92+62+90)/5 = 85.0. Best fit: long-horizon autonomous coding agents.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Anthropic official, Vellum AI leaderboard, The AI Corner); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
