# Claude 3.5 Haiku — findings by Qwen 3.8 Flash

- Source: Anthropic (`anthropic/claude-3-5-haiku-20241022`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's small/fast member of the Claude 3.5 family (Oct 2024), the first Haiku to support tool use; positioned for low-latency, high-volume tasks. A **2024 legacy** model now superseded by Haiku 4.5 — scored here on its own evidence, not the modern Claude brand.
- **Provider / access:** Anthropic API + Bedrock/Vertex + aggregators (DigitalOcean, ZenMux). Chat Completions. IDs below.
- **Release / knowledge:** 2024-10-22 (`claude-3-5-haiku-20241022`); knowledge cutoff early 2024.
- **IDs:** `anthropic/claude-3-5-haiku-20241022`
- **Context window:** **200K** tokens (verified across OpenRouter/aggregators; the curated `meta.json` "128K" is a scaffold placeholder, corrected).
- **Modalities:** text + image input; text out; tool use (first Haiku with function calling); no native audio/video; not a reasoning-model variant.
- **Pricing (as of 2026-10-04):** input **$0.80**/1M, output **$4.00**/1M, cached input $0.08/1M. Paid; very fast (≈170 tok/s, TTFT ~100 ms).
- **Architecture:** proprietary dense small model (params undisclosed).

### Raw benchmarks found

> Independent aggregator (Serenities AI / Artificial-Analysis rollup, Oct 2026) with per-benchmark ranks; SWE-bench differs by harness (aggregator 22.0 vs swebench.com "Tools" 40.6) — both are legacy-low. Ranks (of N) confirm it sits in the back half of the 2026 field on every knowledge/reasoning/coding axis.

Agent / tool use:
- First Haiku with tool use; no frontier τ²-bench / Terminal-Bench / GDPval number published for this ID — **no verified public score found** (basic function-calling only)
- BBH: **82.9%** (12th/13 — weak for its peer set)

Reasoning / knowledge:
- GPQA Diamond: **35.0%** (129th/140) — below the 40% frontier bar, mid-low even for 2024
- MMLU-Pro: **60.0%** (60th/66) · ARC-AGI: **12.0%** (55th/66)
- MATH: **62.0%** · GSM8K: **84.0%**
- HLE: **no verified public score found** · Artificial Analysis Index: **not published**

Coding:
- SWE-bench Verified: **22.0%** (aggregator) / 40.6% (swebench.com "Tools" harness) — legacy-low either way
- LiveCodeBench: **28.0%** (57th/66) · HumanEval+: **74.0%** (57th/66, a near-saturated metric)
- SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:
- 200K standard window; no MRCR / RULER / GraphWalks retrieval % reported.
- Speed: TTFT 100 ms (5th/92), output 170 tok/s (14th/94) — genuinely fast, though speed is not a scored dimension.
- Chatbot Arena ELO: **1180** (70th/74 — entry-level human preference).

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4 with a legacy discount: scored on this 2024 model's own measured numbers, not Claude's 2026 flagship reputation. Its 200K window (tier anchors 70) is the one dimension that still holds up.

- **Tool use: 46/100.** First Haiku with function calling, but no measured τ²/Terminal-Bench/GDPval result and BBH 82.9 (#12/13) is weak; real but dated tool support only.
- **Reasoning: 40/100.** GPQA Diamond 35.0 (#129/140) sits under the mid band, MMLU-Pro 60.0 and ARC-AGI 12.0 are back-half; a 2024 budget reasoner by the numbers.
- **Context window: 70/100.** Verified 200K lands exactly on the 200K tier anchor; no long-context retrieval proof to push higher.
- **Multimodal: 55/100.** Genuine image input (Claude 3-family vision) credited in the +image band, discounted for model size and no audio/video/PDF-native evidence.
- **Coding: 42/100.** SWE-bench Verified 22.0 (40.6 best-harness) and LiveCodeBench 28.0 are low; the 74 HumanEval+ is a saturated legacy metric and doesn't lift it.
- **Cost efficiency: 78/100.** $0.80/$4.00 was mid in 2024 but is poor value in 2026 next to modern cheap fast models; speed is excellent but not a scored dim.
- **Overall Score: 50.6/100.** (46+40+70+55+42)/5 — a fast, cheap 2024 workhorse whose real value today is latency + tool-calling on simple tasks, not frontier quality. Best fit: high-volume extraction/classification/simple chat where speed and 200K context matter more than reasoning depth.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen3.8-flash)** — 2026-10-04
- Method: fresh public web research (independent aggregator benchmark rollup with ranks, swebench.com harness split, OpenRouter spec/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Revisit trigger: a re-measurement on current 2026 agentic/coding suites (τ², Terminal-Bench, SWE-bench 2026) would firm Tool/Coding; the model is legacy and unlikely to be re-benchmarked.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
