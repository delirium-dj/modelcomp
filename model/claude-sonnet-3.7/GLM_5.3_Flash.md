# Claude Sonnet 3.7 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7 (vendor style at release: Claude 3.7 Sonnet)
- **Short description:** Anthropic's "most intelligent model to date" at release (Feb 2025) and the first hybrid reasoning model on the market — one model that answers instantly or thinks step-by-step with a visible, budget-controlled thinking mode. Also launched alongside Claude Code, Anthropic's first agentic coding CLI.
- **Provider / access:** Claude API `claude-3-7-sonnet-20250219` (Anthropic Messages API); Amazon Bedrock; Google Cloud Vertex AI. Not in the current OpenCode Zen endpoint list — no Zen Free ID (registry retains `opencode/claude-sonnet-3.7` for reporting).
- **Release / knowledge:** Released 2025-02-24 (Anthropic announcement); knowledge cutoff Nov 2024 (vendor-documented at release).
- **IDs:** `claude-3-7-sonnet-20250219` / `claude-3-7-sonnet-latest` (no Zen ID currently listed)
- **Context window:** 200K tokens total, max output 64K (128K with extended thinking, per vendor documentation at release)
- **Modalities:** Text and image in, text out; hybrid reasoning (standard + extended thinking with budget_tokens, visible thinking); tool use; JSON mode
- **Pricing (as of 2026-10-01):** Paid — $3.00 / 1M input, $15.00 / 1M output (thinking tokens included), unchanged from predecessors at release.
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed. Later superseded by Sonnet 4/4.5/4.6/5.x; still a legacy tracked entry.

### Raw benchmarks found

Agent / tool use:

- TAU-bench: state-of-the-art claim at release with a planning-tool prompt addendum and 100-step budget (Anthropic appendix) — chart value not readable, no verified text number
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Vendor/partner evaluations: Cursor "best-in-class for real-world coding tasks... advanced tool use"; Vercel "exceptional precision for complex agent workflows" (qualitative, Anthropic announcement)

Reasoning / knowledge:

- GPQA Diamond: reported in announcement benchmark chart only — value not readable, no verified text number
- AIME: reported in announcement benchmark chart only — value not readable, no verified text number
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Instruction-following, general reasoning, multimodal: chart-only values (announcement table)

Coding:

- SWE-bench Verified: **62.3%** vanilla scaffold (chart value, widely reported; official-leaderboard parity, n=500) / **63.7%** no-scaffold on the n=489 solvable subset (Anthropic appendix text) / **70.3%** high-compute scaffold with parallel attempts + rejection sampling + scoring-model ranking on n=489 (Anthropic appendix text) — state-of-the-art at release
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (200K window; no MRCR/RULER numbers published at release)

## Normalized scores (1–100)

- **Tool use: 58/100.** TAU-bench state-of-the-art at release (Feb 2025) with a documented planning-tool scaffold and 100-step budget; partner evaluations confirm strong agentic tool use — but the TAU-bench value is chart-only and no Terminal-Bench 2.1/GDPval numbers exist, so the score stays in the upper-mid band rather than the 90–100 frontier band.
- **Reasoning: 55/100.** First hybrid reasoning model with budget-controlled extended thinking; GPQA/AIME values exist only as unreadable chart values, so the score rests on the documented hybrid-reasoning design and SOTA-at-release positioning, not verified same-harness numbers. Capped by absence of published GPQA 60–80%+ text evidence and the Nov 2024 knowledge cutoff.
- **Context window: 70/100.** 200K tokens maps directly to the methodology tier (200K–500K = 65–84, 200K = 70).
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band; no video/PDF/audio input.
- **Coding: 65/100.** SWE-bench Verified 70.3% (high-compute, n=489) / 62.3% vanilla — state-of-the-art at release and still strong; no LiveCodeBench/SciCode/Vibe numbers and an older harness keep it out of the 90–100 frontier band.
- **Cost efficiency: 60/100.** $3.00/$15.00 per 1M tokens matches the methodology reference ($3/$15 = ~60).
- **Overall Score: 63/100.** Mean of the five quality dims (58+55+70+65+65)/5 = 62.6 → 63. Best fit: a strong 2025-generation hybrid reasoner/coder, now superseded — use for legacy reproducibility; for frontier work step up to Sonnet 4.6/5.x-class models.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (official Anthropic announcement + appendix, vendor documentation); scores are normalized 1–100 interpretations, not official vendor scores.
