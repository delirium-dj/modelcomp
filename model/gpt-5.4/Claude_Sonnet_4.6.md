# GPT-5.4 — findings by Claude Sonnet 4.6

- Source: OpenAI (`opencode/gpt-5.4`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's native computer-use generation (March 2026) built to operate professional desktops and apps; strong on SWE-Pro, TB 2.0 #2, and GPQA.
- **Provider / access:** OpenCode (`opencode/gpt-5.4`) — Chat Completions & Responses API
- **Release / knowledge:** March 2026
- **IDs:** `opencode/gpt-5.4` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens input / output unspecified
- **Modalities:** Text, image in; text out; tool calls; computer-use; JSON mode
- **Pricing (as of 2026-10-21):** $1.25/$7.50 per 1M direct (≤272K input); $5.00/$22.50 direct (>272K); $2.50/$15.00 via resellers
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0/2.1: **75.1–78.3%** (Artificial Analysis / independent harness — meta.json notes #2 ranking)

Reasoning / knowledge:

- GPQA Diamond: **92.0–92.8%** (OpenAI official / LLM-Stats / OpenRouter)

Coding:

- SWE-bench Verified: **77.2–78.2%** (Vals.ai / independent)
- SWE-bench Pro: **57.7%** (OpenAI official / alexlavaee.me)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 81/100.** Terminal-Bench ~75–78% is solid; #2 ranking in TB at time of release. Capped by being outflanked by GPT-5.5/5.6.
- **Reasoning: 89/100.** GPQA Diamond 92.0–92.8% confirms expert-level reasoning; near top-tier but below GPT-5.5+ ceiling.
- **Context window: 92/100.** 1,050,000-token context window → tier 1M = 92.
- **Multimodal: 62/100.** Text + image + computer-use in; text-only out — no audio or video.
- **Coding: 83/100.** SWE-bench Verified ~78%; SWE-bench Pro 57.7%; native computer-use is the differentiator.
- **Cost efficiency: 82/100.** $1.25/$7.50 per 1M (≤272K input) — affordable for short-context professional use.
- **Overall Score: 81/100.** (81+89+92+62+83)/5 = 81.4 → 81. Best fit: native computer-use and professional desktop automation.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (OpenAI official, alexlavaee.me, Artificial Analysis, LLM-Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
