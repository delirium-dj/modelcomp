# Big Pickle — findings by Muse Glimmer 30B

- Source: OpenCode / opencode/big-pickle
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen free stealth slot that has survived repeated purges. Identity is undisclosed by OpenCode; meta notes maintainer-confirmed GLM-4.6 in 2025 with a DeepSeek-class swap reported by mid-2026. Text-only reasoning model used as a low-cost fallback.
- **Provider / access:** OpenCode Zen `opencode/big-pickle`, `https://opencode.ai/inference/openai/v1/chat/completions` via `@ai-sdk/openai-compatible`. Chat Completions only, NOT Responses API.
- **Release / knowledge:** Catalog entry 2025-10-17 (models.dev); knowledge cutoff publicly reported as 2025-01 by community metadata.
- **IDs:** `opencode/big-pickle` / `big-pickle` (`owned_by: opencode`; historically `zen/big-pickle`)
- **Context window:** 200,000 total tokens, ~160,000 input / 32,000 max output. Verified by models.dev / Pi.dev metadata and OpenCode docs; meta.json states 200K total (32K max output).
- **Modalities:** Text in / text out only. Reasoning yes via interleaved `reasoning_content`; tool_call true; structured_output true; attachments false.
- **Pricing (as of 2026-10-25):** Free $0/$0/$0 on OpenCode Zen limited-time stealth tier. OpenCode states: “During its free period, collected data may be used to improve the model.”
- **Architecture:** Proprietary / undisclosed. `open_weights = false`. Parameter count not published; underlying checkpoint has been swapped at least once.

### Raw benchmarks found

> Sources: OpenCode Zen pricing & privacy page 2026-10-25, models.dev model page for big-pickle, GitHub PhillipChaffee/big-pickle-swe-atlas (community SWE Atlas run 2026-08-11). No official model card from vendor.

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8%** Task Resolve Rate (63/124) — community run 2026-08-11 using mini-swe-agent 2.4.6, Scale verifier, judge `claude-opus-4-5-20251101`. Repo: PhillipChaffee/big-pickle-swe-atlas. By language TS 58.1%, Py 55.2%, Go 50.0%, C 38.5%.
- ORPT-Bench (community): composite **0.615**, success 67% — cited in prior Big Pickle findings, no independent re-run located.
- Terminal-Bench 2.1, Tau2/Tau3, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, BenchLM overall, Omniscience Accuracy/Hallucination Rate: **no verified public score found** for `big-pickle`.

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, AA Coding Index: **no verified public score found**. Community SWE Atlas 50.8% is the only public coding-adjacent measurement.
- SWE Atlas breakdown: Code Onboarding 60.7%, Architecture & system design 52.3%, Root-cause analysis 45.9%, Security 45.5%.

Long context:

- MRCR / RULER / GraphWalks: **no verified public score found**. 200K window is reported metadata only.

### Normalized scores (1–100)

- **Tool use: 42/100.** Single community SWE Atlas Codebase QnA 50.8% is the strongest verifiable tool use signal; no Terminal-Bench, Tau, GDPval-AA or Claw scores exist. Single-trial n=124 run with reduced sandbox resources caps confidence.
- **Reasoning: 52/100.** Catalog describes a reasoning model with interleaved reasoning_content, but zero public GPQA/HLE/LCR/CritPt scores. Score reflects capability claim without independent validation.
- **Context window: 70/100.** 200K total with 32K max output is above median free tier; output cap and lack of long-context retrieval benchmarks limit score.
- **Multimodal: 15/100.** Text in/out only, no image/audio/video/attachment support.
- **Coding: 60/100.** Community SWE Atlas 50.8% resolves to mid-pack coding within Mini-SWE-Agent scaffold; no SWE-bench Verified / LiveCodeBench numbers.
- **Cost efficiency: 100/100.** $0/$0/$0 free stealth tier on OpenCode Zen during free period.
- **Overall Score: 48/100.** Mean of five quality dims (42+52+70+15+60)/5 = 47.8 → 48. Best-fit: zero-cost low-information stealth model with a single community tool benchmark anchoring capability.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; OpenCode Zen docs, models.dev metadata, GitHub community SWE Atlas reproduction, meta.json. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
