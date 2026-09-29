# MiMo-V2.6-Flash Free — findings by Qwen 3.8 27B

- Source: Xiaomi / OpenCode Zen (`mimo-v2.6-flash-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash Free
- **Short description:** OpenCode Zen's limited-time free tier of Xiaomi's MiMo-V2.6-Flash (309B/15B MoE, 1M native context, image-in); variant/alias of MiMo-V2.6-Flash — same weights, free pricing + data-use consent.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash-free` on the `https://opencode.ai/zen/v1/chat/completions` endpoint (verified in opencode.ai/docs/zen, 2026-09-28). Paid route: Xiaomi API / OpenRouter `xiaomi/mimo-v2.6-flash`.
- **Release / knowledge:** underlying MiMo-V2.6-Flash released 2026-09-21; free route announced by OpenCode 2026-09-21 as "free for the next week" (~through 2026-09-28, still listed 2026-09-28). Knowledge cutoff not disclosed.
- **IDs:** `opencode/mimo-v2.6-flash-free` (Zen, confirmed in Zen model list); underlying open weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` (Hugging Face).
- **Context window:** 1M native (underlying Flash spec, AA/official card). The free-route cap on Zen was not independently verified in this pass.
- **Modalities:** text / image in, text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** Free / Free / Free (input/output/cached) on Zen — limited-time; during the free period, collected data may be used to improve the model (Zen privacy exception). Paid equiv. $0.14/$0.28 per 1M (Xiaomi API).
- **Architecture:** 309B total / 15B active parameters, MoE, open weights, MIT license (underlying model).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (BenchLM for MiMo-V2.6-Flash, 2026-09-28)
- Terminal-Bench 4.0: **28.8%** (BenchLM)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **55.0%** normalized (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified **73.6%** (BenchLM)
- OSWorld-Verified: **80.8%**; AutomationBench **52.3%**; JobBench **61.2%**; Agents' Last Exam **27.6%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **35.1%** (AA-HLE via BenchLM)
- LCR / MLCR: LCR **74.3%** (BenchLM/AA)
- CritPt: **12.0%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **38** / **64.06 (#34 of 512)**
- Omniscience Accuracy / Hallucination Rate: **27.0% / 54.4%** (AA via BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **51.3%** (BenchLM/AA)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **67.9%**; ProgramBench **26.0%** (BenchLM)

Long context:

- 1M native window; no dedicated retrieval benchmark at window length found beyond AA-LCR 74.3%.

Multimodal:

- AA-MMMU-Pro: **73.1%** (BenchLM/AA)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 87.6% at the frontier threshold and Toolathlon 73.6% solid; capped by GDPval-AA 55.0% (normalized) and no verified Tau3/Claw-Eval.
- **Reasoning: 70/100.** HLE 35.1% just under the 40%+ frontier reference, LCR 74.3% above the mid band; capped by CritPt 12.0% and AA Index 38.
- **Context window: 95/100.** 1M native window (>=1M tier); the Zen free-route cap was not verified in this pass — if the free tier is capped lower (cf. MiMo-V2.5 Free's 200K/32K cap), the effective tier drops accordingly.
- **Multimodal: 65/100.** Text + image in, text out falls in the image-in tier (60–70); MMMU-Pro 73.1% supports the top of that band.
- **Coding: 78/100.** DeepSWE 67.9% and SciCode 51.3% above mid-band with TB2.1 87.6%; capped by missing verified SWE-bench Verified / LiveCodeBench.
- **Cost efficiency: 100/100.** $0 free Zen tier (input/output/cached all Free); flagged as limited-time with the data-usage caveat (collected data may be used to improve the model).
- **Overall Score: 78/100.** (80 + 70 + 95 + 65 + 78) / 5 = 77.6 → 78. Best fit: zero-cost 1M-context agentic/coding workhorse while the free window lasts; switch to the paid Flash route ($0.14/$0.28) for private data.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (OpenCode Zen docs + model list, Artificial Analysis, BenchLM, ofox.ai, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
