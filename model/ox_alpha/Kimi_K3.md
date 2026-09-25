# Ox Alpha — findings by Kimi K3

- Source: Z.ai (Zhipu, stealth preview) / Ox Alpha (`openrouter/stealth/ox-alpha`, formerly `opencode/ox-alpha` on OpenCode Zen)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth preview; confirmed 2026-08-26 as Z.ai's GLM-5.3-Flash)
- **Short description:** Anonymous frontier reasoning model that appeared on OpenRouter on 2026-08-20 under provider "Stealth" for coding, sustained agentic work and production workloads; hit #1 on OpenRouter's usage leaderboard. Z.ai confirmed authorship on 2026-08-26 and open-sourced it as GLM-5.3-Flash (MIT weights). Variant of the `glm-5.3-flash` entry.
- **Provider / access:** `openrouter/stealth/ox-alpha` (Chat Completions) during the free preview; also briefly on OpenCode Zen free tier. Preview ended ~2026-08-27; both listings are now gone. Successor access: GLM-5.3-Flash open weights (MIT).
- **Release / knowledge:** 2026-08-20 (stealth appearance); identity confirmed 2026-08-26; weights released as GLM-5.3-Flash.
- **IDs:** `stealth/ox-alpha` (OpenRouter, delisted), `opencode/ox-alpha` (Zen, delisted). No current live ID.
- **Context window:** 1,048,576 tokens total / 131,072 max output (OpenRouter model catalog during preview; corroborated by buildfastwithai and local-ai-zone reviews).
- **Modalities:** text/image/video in; text out; tool/function calls; JSON structured output. Audio input verified REJECTED (Ben Davis fingerprinting — matches GLM-5V behavior).
- **Pricing (as of 2026-09-25):** $0/$0 during preview (ended 2026-08-27). Post-reveal, distributed as open weights (MIT) — self-host cost only; no hosted price verified for the `ox-alpha` ID itself.
- **Architecture:** MoE, estimated ~744B total / ~40B active (Ben Davis technical fingerprinting, estimated — not officially disclosed; the released GLM-5.3-Flash card lists a smaller active config).

### Raw benchmarks found

Agent / tool use:

- DeepSWE Pass@1: **80%** (Ben Davis independent 10-task test, 2026-08-21; unaudited, small sample — provisional)
- Documented agent workflow: **69 tool calls, 1 error, 0 retry loops** (Ben Davis, 2026-08-21)
- Regression sweep: **51,469/51,469 tests passed** on generated code (same source)
- OpenRouter usage: **#1 leaderboard position during listing, >2× DeepSeek traffic** (explainx.ai / Bloomberg, 2026-08)
- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index for this exact ID: **no verified public score found**
- Omniscience / hallucination: **no verified public score found**

Coding:

- DeepSWE: **80% Pass@1** (same small-sample source above; note this is a different framework from SWE-bench Verified)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- MRCR / RULER at 1M: **no long-context retrieval score reported**; 1,048,576-token window verified by the OpenRouter catalog entry.

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** Strong direct evidence — clean 69-call agentic run with a single error and zero retry loops, plus full tool-calling/JSON support — but no audited TB2.1/Tau3/GDPval number; capped by unaudited, small-sample evidence.
- **Reasoning: 68/100.** No GPQA/HLE for this exact ID; the 80% DeepSWE result implies strong multi-step reasoning but comes from a 10-task community test. Capped by missing frontier reference scores.
- **Context window: 95/100.** Verified 1,048,576-token window → 95–100 band; no verified ≥98% retrieval at 512K+ for 100.
- **Multimodal: 80/100.** Text + image + video input verified (75–90 band); audio input explicitly rejected and no non-text output → mid-band.
- **Coding: 80/100.** DeepSWE 80% Pass@1 beats the 74%+ frontier reference, but small sample (10 tasks) and unaudited harness cap the score below the 90+ the raw number would otherwise imply.
- **Cost efficiency: 100/100.** $0 during its entire evaluated preview window; afterwards MIT open weights (self-host at infra cost). Caveat: no paid hosted tier exists under this ID.
- **Overall Score: 79/100.** Half-up mean of (72 + 68 + 95 + 80 + 80)/5 = 79.0. Best fit: long-horizon agentic coding on huge repos at zero token cost — while the preview lasted; today evaluate the identical GLM-5.3-Flash weights instead.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-25
- Method: public internet research (local-ai-zone comprehensive analysis citing Ben Davis fingerprinting + OpenRouter catalog; siliconangle / codersera / techbytes confirmation reports; buildfastwithai review). Scores are normalized 1–100 interpretations, not official vendor scores. Benchmark sample sizes are small and unaudited — treat as provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
