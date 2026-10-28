# Kimi K2.8 Preview — findings by Step 5 Preview

- Source: Moonshot AI / Kimi K2.8 Preview (`kimi-for-coding`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's mid-tier coding/agentic model (fully rolled out 2026-09-11), positioned between the flagship Kimi K3 and Kimi K2.7 Code — which is why a "2.8" follows a "3". It was swapped in **in place of K2.7 Code behind the unchanged `kimi-for-coding` model ID**, so existing Kimi Code configurations picked it up with no client change. Moonshot describes coding and agent performance as "close to K3" with significantly more efficient thinking than K2.7 Code, and it gives every Kimi Code membership tier a 1M-token context (K3 caps 1M at Pro+/Allegretto+ tiers). Proprietary; no weights, no parameter count, no model card published by Moonshot.
- **Provider / access:** Kimi Code API (`kimi-for-coding` on platform.kimi.ai and Kimi Code clients: CLI, VS Code, third-party tools like OpenCode); Kimi Work / Kimi app. Not on Moonshot's Open Platform pay-as-you-go table or OpenRouter first-party; resellers list `moonshotai/kimi-k2.8-preview` routes (ZenMux ~$1/$4 per 1M, 34.5 tok/s, 1.68s TTFT; APINexL `free/kimi-k2.8` at $0 with 1M context).
- **Release / knowledge:** 2026-09-11 (Kimi Code changelog "What's New"; BenchmarkList and llm-stats agree; ZenMux lists 2026-09-14 route publication). Knowledge cutoff not disclosed.
- **IDs:** `kimi-for-coding` (official Kimi Code / platform.kimi.ai model ID, unchanged from K2.7 Code); unofficial gateway IDs `moonshotai/kimi-k2.8-preview` (ZenMux), `free/kimi-k2.8` (APINexL). Note: `kimi-for-coding-highspeed` is the *K2.7 Code Highspeed* track, not this model.
- **Context window:** 1,048,576 tokens on all Kimi Code membership tiers including the free Adagio tier (Kimi Code docs + aimodeling.com; llm-stats lists 1.0M, ZenMux route shows 1.05M — minor conflict, 1,048,576 is the documented figure). Max output not published for K2.8 (K2.7 Code was 256K).
- **Modalities:** Text, image, video in → text out (Kimi Code docs model table; llm-stats: "multimodal input"). Reasoning model with `low` / `high` / `max` thinking effort (default `max`); a non-thinking mode exists (K3-series and K2.8 requests with thinking off are served by the K2.8 non-thinking variant). Tool calls supported (agentic coding product).
- **Pricing (as of 2026-10-29):** No official per-token price — quota inside Kimi Code memberships (Adagio free → Andante legacy → Moderato/Plus → Allegretto ¥199/mo → Pro/Allegro ¥699/mo; the 1M context applies to every tier). Unofficial gateway routes: ZenMux $1.00/$4.00 per 1M; APINexL free route $0 (quota-limited, third-party, unconfirmed by Moonshot).
- **Architecture:** Not disclosed — no parameter count, no model card at launch; proprietary API/app access only.

### Raw benchmarks found

> Moonshot published no benchmark table for K2.8 Preview. The only measured public numbers come from an independent academic evaluation (SWE-Residual, HKU/UBC/Tencent, arXiv:2610.25899v1, 2026-10-19), which ran Kimi-K2.8-Preview as a coding agent at max reasoning effort on DeepSWE v1.1 (mini-swe-agent harness) and Terminal-Bench 2.1 (Terminus-2 harness). **Important caveat:** the paper's numbers are measured only on the Residual-State task subsets it constructed (90 of DeepSWE's 113 tasks; 21 of Terminal-Bench's 89 tasks) — "Ref. Clean" is the same agent's clean-start success on those same tasks, not the full benchmark.

Agent / tool use:

- Terminal-Bench 2.1 (clean-start reference, 21-task subset, Terminus-2, max effort): **42.9%** (SWE-Residual paper, Table 3 — mid-tier of the five agents evaluated: GPT-6-Sol 71.4, Gemini-3.8-Flash 47.6, GLM-5.3-Flash 38.1, Qwen-3.8-Flash 33.3)
- Terminal-Bench 2.1 (residual-start / starting-state robustness, same subset): **20.6%**, Residual Gap **22.2 pts** (SWE-Residual paper)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / MCP-Atlas / Toolathlon / SWE Atlas Codebase QnA: no verified public score found
- OSWorld / AutomationBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / AIME / ARC-AGI / CritPt / Artificial Analysis Intelligence Index / AA-Omniscience: **no verified public score found**
- Only vendor-level claim: "overall performance close to K3, significantly more efficient thinking than K2.7 Code" (Kimi Code changelog) — a qualitative assertion, not a measurement; K3's own index numbers must not be transposed onto this model.

Coding:

- DeepSWE v1.1 (clean-start reference, 90-task subset, mini-swe-agent, max effort): **57.8%** (SWE-Residual paper, Table 3 — vs GPT-6-Sol 65.6, GLM-5.3-Flash 68.9, Gemini-3.8-Flash 72.2, Qwen-3.8-Flash 51.1 on the same subset)
- DeepSWE v1.1 (residual-start): **13.0%** (lowest of the five agents), Residual Gap **44.8 pts** (second-largest)
- Acceptance-bias profile (SWE-Residual paper, Table 4 — worst or near-worst on every signature): same-tests-failing rate **88.2%** (highest of five), initially-failing tests passed 77.6% clean vs **14.4%** residual, predecessor lines kept **98.6%** (highest), left-out files changed 45.7% clean vs **8.1%** residual, step ratio 0.56 (shallowest continuation)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: no verified public score found
- Anecdotal hands-on (low weight, not scored): a head-to-head had K3 one-shot a task in 120 min/$14 while K2.8 finished a comparable job in 80 min/$10 but not in one shot; ZenMux measured ~34.5-41.1 tok/s output on its route.

Long context:

- 1M window documented across all tiers; MRCR / RULER / AA-LCR retrieval-at-length: no verified public score found (retrieval unmeasured).

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.1 clean-start 42.9% on the measured subset sits in the methodology's mid band (TB2.1 ~45-60% → 50-70) and residual-start robustness is the weakest-but-one (20.6%, gap 22.2 pts); no Tau3/GDPval/Claw-Eval numbers exist, so the missing-evidence penalty applies.
- **Reasoning: 62/100.** **Provisional — no verified public score found for any reasoning benchmark (GPQA/HLE/MMLU-Pro/AIME/AA index).** Scored at the bottom of the mid band per the methodology's missing-evidence penalty; the only supporting signal is the vendor's unquantified "close to K3" claim, which itself rests on unpublished numbers. Treat as the least reliable dimension in this report.
- **Context window: 95/100.** 1,048,576-token window documented by Moonshot and independently reflected in tracker routes (llm-stats 1.0M, ZenMux 1.05M) and granted on the free tier = ≥1M tier; 95 not 100 because no independent retrieval-at-length measurement exists.
- **Multimodal: 85/100.** Text + image + video input with text output (official docs; llm-stats "multimodal input") places it in the image/video-in band; no multimodal benchmark numbers (MMMU-Pro/Video-MME) to justify 90+.
- **Coding: 72/100.** Measured coding evidence exists but is mid-tier on both subsets (DeepSWE clean 57.8% vs 65.6-72.2 for the stronger agents; TB 2.1 clean 42.9%), with the worst residual-start record (13.0% DeepSWE, 88.2% same-failures acceptance bias); no full-benchmark SWE-bench/LiveCodeBench numbers and no vendor table. Capped in the 65-75 mid band.
- **Cost efficiency: 92/100.** A genuinely free access route exists (Kimi Code Adagio free tier carries the full 1M context; third-party $0 route) and paid memberships run ¥199-699/month — near the $0 anchor — but free/quota access is membership-gated and the unofficial $1/$4 gateway pricing is unconfirmed by Moonshot.
- **Overall Score: 74/100.** Mean of Tool 58 + Reasoning 62 + Context 95 + Multimodal 85 + Coding 72 = 372/5 = 74.4 → 74. Best fit: 1M-context coding-agent work at zero/low cost inside Kimi Code where quota suffices; not a measured peer of K3/K3.1 Pro on quality, and the weakest of the SWE-Residual cohort at inheriting half-finished work.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-29
- Method: public internet research (Kimi Code docs/changelog, SWE-Residual arXiv:2610.25899v1, BenchmarkList, llm-stats, ZenMux, aimodeling.com, ki-ai.chat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
