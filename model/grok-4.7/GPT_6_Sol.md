# Grok 4.7 — findings by GPT-6 Sol

- Source: SpaceXAI (`grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (paid API; separate limited free access in Grok Build, but no OpenCode Zen Free ID).
- **Short description:** SpaceXAI’s proprietary reasoning model for coding, agentic tasks, and knowledge work. `xhigh` is a reasoning-effort setting; Grok 4.7 Fast is a faster, higher-priced serving variant, not a separate public xAI API model.
- **Provider / access:** xAI API `grok-4.7` via Responses or Chat Completions; OpenCode Zen `opencode/grok-4.7` via Responses; Cloudflare `xai/grok-4.7` via Chat Completions. Also available through Grok Build and Cursor.
- **Release / knowledge:** 2026-09-21; knowledge cutoff May 2026.
- **IDs:** `grok-4.7` (xAI API), `opencode/grok-4.7` (Zen), `xai/grok-4.7` (Cloudflare). **No Zen Free ID exists** for this model in the published Zen listing.
- **Context window:** 500,000 tokens total, verified in xAI’s model documentation; xAI specifies no separate text-output limit and does not publish a fixed input/output split.
- **Modalities:** Text and image input; PDF attachment through agentic document search; text output. Reasoning: yes, with configurable effort. Function/tool calls and structured JSON outputs: yes. Native audio or video input and non-text output are not listed for this model.
- **Pricing (as of 2026-09-25):** Paid xAI/Zen rate per 1M tokens below 200,000 prompt tokens: **$2 input / $0.50 cached input / $6 output**; at or above that threshold: **$4 / $1 / $12**, applied to the request’s tokens. Grok Build’s free access is **not** a free Zen/API rate. Zen says its providers ordinarily use zero retention and do not train on customer data; do not assume that paid-Zen statement describes Grok Build’s separate free access.
- **Architecture:** Proprietary, closed weights. SpaceXAI describes a larger base model than Grok 4.6 but does not disclose verified total/active parameter counts or MoE status.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.41%** (Vals AI, launch-report rank **#18/67**, `xhigh`; Terminus 2 harness, pass@1). **Do not conflate versions:** Terminal-Bench 4.0 results are **26%** (Artificial Analysis, `xhigh`), **28.28%** (Vals AI, launch-report **#4/31**, `xhigh`), and **37.6%** (SpaceXAI self-report, `xhigh`); these use different evaluations or harnesses.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1,695 Elo** (Artificial Analysis GDPval-AA v2.1, independently evaluated at `xhigh`; no rank stated in the cited comparison).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **43%** (Artificial Analysis, independently evaluated at `xhigh`).
- LCR / MLCR: **77%** (Artificial Analysis AA-LCR v1.1, `xhigh`); MLCR-AA: no verified public score found.
- CritPt: **18%** (Artificial Analysis, `xhigh`).
- Artificial Analysis Intelligence Index / BenchLM overall: **46 / #21 of 210** (Artificial Analysis Intelligence Index v4.3.2, `xhigh`; rank is the cited model-page snapshot, not a fixed lifetime rank).
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **57%** (Artificial Analysis SciCode, `xhigh`).
- Vibe Code Bench: **86.17%** (Vals AI v1.1, launch-report **#5/97**, `xhigh`; this is the dated launch result, not a claim that the rank remains unchanged).
- DeepSWE / Coding Index / other: **71.0%** DeepSWE v1.1 (SpaceXAI self-report, marked _high effort_); **46.3%** CursorBench 4.0 (SpaceXAI self-report, launch table’s `xHigh` setting). Neither is presented as an independent leaderboard run.

Long context:

- no long-context retrieval reported. The **77%** AA-LCR v1.1 result above measures long-context reasoning, not MRCR/RULER retrieval at the advertised **500,000-token** limit.

### Normalized scores (1-100)

- **Tool use: 82/100.** Vals Terminal-Bench 2.1, AA GDPval-AA, and AA AutomationBench-AA (**66%**, `xhigh`) support strong agentic performance; the lower independent Terminal-Bench 4.0 result and absent Tau3 score cap it.
- **Reasoning: 84/100.** HLE and AA-LCR are strong, but an AA Index of **46**, CritPt **18%**, and no verified GPQA Diamond result do not establish the specified 90–100 frontier tier.
- **Context window: 85/100.** The verified **500,000-token** total reaches the bottom of the 500K–1M tier; no retrieval-at-limit result justifies a higher placement.
- **Multimodal: 78/100.** Image input and PDF attachment/document search extend beyond text-only use; no documented native audio/video input or non-text output caps the score.
- **Coding: 86/100.** Independent SciCode and Vals Vibe Code Bench results are strong; self-reported DeepSWE remains below the specified frontier threshold, while SWE-bench Verified and LiveCodeBench scores are unverified.
- **Cost efficiency: 82/100.** Scored on the evaluated paid `xhigh` API tier at **$2/$6** per 1M input/output tokens; the **$4/$12** long-context rate prevents a free-tier or bargain-tier score. **Not included in Overall.**
- **Overall Score: 83.0/100.** `(82 + 84 + 85 + 78 + 86) / 5 = 83.0`, half-up rounded; best fit for agentic coding and document-heavy knowledge work where native audio/video is unnecessary.

---

## Signature

- Provided by: **ChatGPT (openai/gpt-6-sol)** — 2026-09-25
- Method: Fresh public-web research of SpaceXAI documentation and launch results, Artificial Analysis, Vals AI, and OpenCode Zen; normalized 1–100 scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
