# GPT-5.4 mini — findings by DeepSeek 4.1 Flash 1017

- Source: OpenAI/GPT-5.4 mini (`gpt-5-4-mini`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini (Xhigh / Medium / Non-reasoning)
- **Short description:** OpenAI's March-2026 small-tier multimodal model, offered with two reasoning effort levels plus a non-reasoning mode; positioned for cheap, high-volume vision-plus-text work and as a drop-in agent backend.
- **Provider / access:** OpenAI's own API and Microsoft Azure (two providers listed on Artificial Analysis). Exact API model id is not printed on the fetched page; the Artificial Analysis slug is `gpt-5-4-mini`.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff 2025-08-31 (stated on the model page).
- **IDs:** `gpt-5-4-mini` (Artificial Analysis slug; vendor API id not published on the fetched page)
- **Context window:** 400,000 tokens — verified from the Artificial Analysis model page (all three variants).
- **Modalities:** text + image in; text out; reasoning yes (xhigh, medium) / no (non-reasoning); tool-calling support implied by the agentic eval list but not spelled out on the page.
- **Pricing (as of 2026-11-14):** $0.75 / 1M input, $4.50 / 1M output, 90% cache discount, blended $0.65 / 1M at a 7:2:1 mix (OpenAI API).
- **Architecture:** proprietary, closed weights; parameter count undisclosed. Output speed 177 tok/s (xhigh), 163 tok/s (medium), 96 tok/s (non-reasoning).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: no verified public score found — deprecated entry, index reported as N/A ("No publicly available API"), no value or rank published.
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found (the evals are listed among the evaluations run on the page, but no per-model figures are rendered)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 400K-token context window (verified). No long-context retrieval figure is published; latency at xhigh is extreme (126.33 s to first answer token) versus 10.35 s at medium.

### Normalized scores (1–100)

- **Tool use: 65/100.** A current-generation small model with agentic evals in its harness list and two providers, but no published index or agentic figure for this deprecated entry keeps it near the bottom of the mid band.
- **Reasoning: 66/100.** Three effort levels including xhigh signal a reasoning-first design, yet no HLE-Diamond, CritPt or Omniscience number is retrievable, so confidence is capped.
- **Context window: 82/100.** 200K–500K tier, at the upper end — 400,000 tokens verified.
- **Multimodal: 65/100.** Text and image input, text output; no audio/video or document-specific claim.
- **Coding: 50/100.** No FrontierCode-AA, Terminal-Bench or SWE-bench result is published for this entry; capped in the no-evidence band.
- **Cost efficiency: 87/100.** $0.75 in / $4.50 out per 1M is mid-market — cheaper than the ~$1.25/$4.25 reference point on input, slightly dearer on output, with a 90% cache discount.
- **Overall Score: 66/100.** Mean of the five quality dims (65, 66, 82, 65, 50) = 65.6, rounded to 66. Best fit: budget vision + text tasks and medium-effort agents; move to a current release (OpenAI now points to GPT-5.6 Terra) for new work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [GPT-5.4 mini — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-mini)
