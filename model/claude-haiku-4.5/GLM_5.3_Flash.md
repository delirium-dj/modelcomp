# Claude Haiku 4.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-haiku-4-5-20251001`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's smallest current model — "the fastest model with near-frontier intelligence". Positioned for real-time, low-latency tasks (chat assistants, customer service, pair programming) and as a sub-agent in Claude Code multi-agent orchestration.
- **Provider / access:** OpenCode Zen `opencode/claude-haiku-4-5` via `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, paid); also Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, and Claude Platform on AWS.
- **Release / knowledge:** Released October 15, 2025; reliable knowledge cutoff Feb 2025 (training data cutoff Jul 2025) — verified via official Claude docs.
- **IDs:** `opencode/claude-haiku-4-5` (Zen, paid tier); Claude API `claude-haiku-4-5-20251001` (alias `claude-haiku-4-5`); Bedrock `anthropic.claude-haiku-4-5`; Vertex `claude-haiku-4-5@20251001`
- **Context window:** 200K tokens total, max output 64K (verified via official Claude docs models overview + Haiku 4.5 model page)
- **Modalities:** Text and images in, text out; extended thinking (manual `thinking.type: "enabled"` + `budget_tokens`; effort parameter not supported); tool use; vision; multilingual
- **Pricing (as of 2026-10-01):** Paid — $1.00 / 1M input, $5.00 / 1M output, $0.10 / 1M cache read, $1.25 / 1M cache write (Anthropic; identical on Zen). Batch API 50% off.
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed. Retirement commitment: not sooner than October 15, 2026. ASL-2 safety standard.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench (Terminus 2 agent framework): **40.21%** without thinking, **41.75%** with 32K thinking budget (Anthropic announcement methodology, 11-run average, n=1)
- OSWorld (OSWorld-Verified, 100 max steps): **~50.7%** (press-reported chart value; Anthropic states Haiku 4.5 surpasses Claude Sonnet 4, which scored 42.1% — provisional, chart-only)
- Tau2-Bench: verified achieved with 128K thinking budget (Anthropic methodology) — chart value not readable, no verified text number
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found (N/A — slight penalty)
- Augment agentic coding evaluation: **90% of Sonnet 4.5's performance** (Augment co-founder quote, Anthropic announcement)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- AIME: reported in announcement benchmark chart only — value not readable, no verified text number
- MMMLU (14 non-English languages): reported in announcement benchmark chart only — value not readable, no verified text number
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **73.3%** (Anthropic, simple bash/edit scaffold, averaged over 50 trials, no test-time compute, 128K thinking budget, full 500-problem set)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (200K window; no MRCR/RULER/GraphWalks numbers published)

## Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench (Terminus 2) 40.21–41.75% sits just below the methodology mid band (TB2.1 ~45–60% → 50–70); OSWorld ~50.7% (provisional) surpassing Sonnet 4's 42.1% supports computer-use automation; Tau2 verified but unpublished. Missing Claw-Eval adds the slight penalty. Capped by the absence of a same-harness TB2.1/Tau3 published number.
- **Reasoning: 45/100.** No verified public GPQA Diamond, HLE, LCR, CritPt, or Intelligence Index scores; AIME and MMMLU exist only as unreadable chart values. Vendor claims "near-frontier intelligence" and Augment pegs it at 90% of Sonnet 4.5, but with zero same-harness verified reasoning numbers the score stays below the mid band (GPQA 60–80% → 55–65); the stale Feb 2025 knowledge cutoff also caps it.
- **Context window: 70/100.** 200K tokens maps directly to the methodology tier (200K–500K = 65–84, 200K = 70). Max output 64K is at the boundary — noted as a caveat for long agentic outputs.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band; no video/PDF/audio input and no non-text output to push higher.
- **Coding: 72/100.** SWE-bench Verified 73.3% on a simple scaffold is solid, and Augment's independent eval (90% of Sonnet 4.5) confirms near-Sonnet coding quality at one-third the cost; Terminal-Bench 41.75% and missing LiveCodeBench/SciCode/Vibe numbers keep it out of the 90–100 frontier band.
- **Cost efficiency: 89/100.** $1.00/$5.00 per 1M tokens on the evaluated tier — slightly cheaper than the ~$1.25/$4.25 = ~88 reference point, plus Batch API 50% discount; not free, so it cannot reach the 97–99 band.
- **Overall Score: 60/100.** Mean of the five quality dims (48+45+70+65+72)/5 = 60.0. Best fit: low-latency sub-agent and high-volume coding assist where cost and speed dominate — for frontier reasoning or long-horizon agentic work, step up to a Sonnet/Opus-class model.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (official Anthropic docs and announcement, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
