# Claude Haiku 4.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-haiku-4-5-20251001`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's smallest current model — "the fastest model with near-frontier intelligence". Positioned for real-time, low-latency tasks (chat assistants, customer service, pair programming) and as a sub-agent in Claude Code multi-agent orchestration.
- **Provider / access:** OpenCode Zen `opencode/claude-haiku-4-5` via `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, paid); also Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, and Claude Platform on AWS.
- **Release / knowledge:** Released October 15, 2025; reliable knowledge cutoff Feb 2025 (training data cutoff Jul 2025) — verified via official Claude docs.
- **IDs:** `opencode/claude-haiku-4-5` (Zen, paid tier); Claude API `claude-haiku-4-5-20251001` (alias `claude-haiku-4-5`); Bedrock `anthropic.claude-haiku-4-5`; Vertex `claude-haiku-4-5@20251001`
- **Context window:** 200K tokens total, max output 64K (verified via official Claude docs models overview + Haiku 4.5 model page; benchlm 200K)
- **Modalities:** Text and images in, text out; extended thinking (manual `thinking.type: "enabled"` + `budget_tokens`; effort parameter not supported); tool use; vision; multilingual
- **Pricing (as of 2026-10-09):** Paid — $1.00 / 1M input, $5.00 / 1M output, $0.10 / 1M cache read, $1.25 / 1M cache write (Anthropic; identical on Zen). Batch API 50% off.
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed. Retirement commitment: not sooner than October 15, 2026. ASL-2 safety standard.

## Raw benchmarks found

> Anthropic announcement + Vals AI/Epoch rows via benchlm.ai (updated 2026-10-09). Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **43.8%** (Vals AI — fills the previously-missing same-harness TB row; corroborates the Terminus-2 reading below); Terminal-Bench (Terminus 2, Anthropic methodology): **40.21%** without thinking, **41.75%** with 32K thinking budget (11-run average, n=1)
- OSWorld (OSWorld-Verified, 100 max steps): **~50.7%** (press-reported chart value; Anthropic states Haiku 4.5 surpasses Claude Sonnet 4, which scored 42.1% — provisional, chart-only)
- JobBench: **16.0%** (JobBench paper — fills; weak)
- Tau2-Bench: verified achieved with 128K thinking budget (Anthropic methodology) — chart value not readable, no verified text number
- GDPval-AA / Claw-Eval: no verified public score found
- Augment agentic coding evaluation: **90% of Sonnet 4.5's performance** (Augment co-founder quote, Anthropic announcement)

Reasoning / knowledge:

- GPQA Diamond (Vals): **72.2%** (Vals AI via benchlm.ai — fills the previously-missing verified GPQA row)
- MMLU-Pro (Vals): **78.7%** (Vals AI — fills)
- FrontierMath v2: Tiers 1–3 **5.9%**, Tier 4 **2.1%** (Epoch AI via benchlm.ai — fills; weak)
- HLE / LCR / MLCR / CritPt: no verified public score found
- AIME / MMMLU (14 non-English languages): reported in announcement benchmark chart only — value not readable, no verified text number
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **73.3%** (Anthropic, simple bash/edit scaffold, averaged over 50 trials, 128K thinking budget — corroborated)
- SWE-bench (Vals): **66.6%** (Vals AI — fills the independent corroboration)
- LiveCodeBench (Vals): **41.2%** (fills the previously-missing LCB row)
- VulcanBench v3: **76.2%** (VulcanBench July 2026 expanded report via benchlm.ai — fills)
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (200K window; no MRCR/RULER/GraphWalks numbers published)

Multimodal / vision:

- Design Arena Website: **1127** (OpenRouter); no measured vision benchmark beyond the announcement chart

## Normalized scores (1–100)

- **Tool use: 47/100.** TB2.1 (Vals) 43.8% (filled) corroborates the Terminus-2 40.21–41.75% reading, just below the methodology mid band; OSWorld ~50.7% (provisional) supports computer use; the filled JobBench 16.0% is weak; missing Claw-Eval adds the slight penalty.
- **Reasoning: 62/100.** Now verified instead of unknown: GPQA Diamond (Vals) 72.2% and MMLU-Pro 78.7% sit in the 60–80% high-mid band (→ 55–65); the newly-filled FrontierMath v2 5.9%/2.1% rows are weak; HLE/LCR still missing and the stale Feb 2025 knowledge cutoff caps it at the band top.
- **Context window: 70/100.** 200K tokens maps directly to the methodology tier (200K–500K = 65–84, 200K = 70). Max output 64K is at the boundary — noted as a caveat for long agentic outputs.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band; no video/PDF/audio input and no non-text output to push higher.
- **Coding: 72/100.** SWE-bench Verified 73.3% (Anthropic) / 66.6% (Vals) is solid, VulcanBench 76.2% and Augment's independent eval (90% of Sonnet 4.5) confirm near-Sonnet coding quality at one-third the cost; the filled LCB 41.2% is weak and missing SciCode/Vibe keep it out of the 90–100 frontier band.
- **Cost efficiency: 89/100.** $1.00/$5.00 per 1M tokens on the evaluated tier — slightly cheaper than the ~$1.25/$4.25 = ~88 reference point, plus Batch API 50% discount; not free, so it cannot reach the 97–99 band.
- **Overall Score: 63/100.** Mean of the five quality dims (47 + 62 + 70 + 65 + 72) / 5 = 63.2 → 63. Best fit: low-latency sub-agent and high-volume coding assist where cost and speed dominate — for frontier reasoning or long-horizon agentic work, step up to a Sonnet/Opus-class model.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing Vals AI, Epoch AI, VulcanBench and the Anthropic announcement — official plus independent sources, conflicts compared; official Claude docs verified 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing GPQA (Vals) 72.2%, MMLU-Pro 78.7%, TB2.1 43.8%, SWE-bench (Vals) 66.6%, LCB 41.2%, VulcanBench 76.2%, FrontierMath 5.9%/2.1%, JobBench 16.0% — Reasoning 45→62, Tool 48→47, Overall 60→63.
- Future sources: add a new file next to this one, e.g. `Haiku_5.5.md`, using the same headings.
