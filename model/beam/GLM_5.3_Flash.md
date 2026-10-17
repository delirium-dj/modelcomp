# Beam 1.0 — findings by GLM 5.3 Flash

- Source: Reflection AI (`reflection/Beam-1.0-501B-A23B`, Apache 2.0 open weights)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0
- **Short description:** Reflection AI's first open-weight frontier model — a 501B/23B-active sparse MoE (256 experts) built for coding, advanced reasoning and long-horizon autonomous agents, announced 2026-10-05 with weights published 2026-10-16 under Apache 2.0. Reflection's own platform is a free public beta; a free "Beam" route also exists on OpenCode Zen/Go.
- **Provider / access:** OpenCode Zen route `opencode/beam` (this folder's ID; a free "Beam" tier was also added to Zen and Go per the October 2026 promo — input/output/cache at $0, no end date announced); OpenRouter `reflection/beam-1.0-501b-a23b` (4 hosts, $0.25/$1 to $1.30/$4.30 per 1M at FP8/FP4); platform.reflection.ai (free public beta); Hugging Face weights (BF16 ~1 TB, FP8 ~503 GB, NVFP4 ~294 GB) + speculative-decoding drafter. Chat Completions-style API; reasoning always on (effort low–max, default max on OpenRouter).
- **Release / knowledge:** announced 2026-10-05, weights released 2026-10-16 (AA + DataStudios + Standard Compute agree); knowledge cutoff June 30, 2026 (Standard Compute, citing the model card).
- **IDs:** `reflection/Beam-1.0-501B-A23B` (HF); `reflection/beam-1.0-501b-a23b` (OpenRouter); `opencode/beam` (Zen).
- **Context window:** 1,000,000 tokens (AA + Standard Compute + the Zen promo all agree; AA notes ~1573 A4 pages); max output ~131K on the Zen free route per the promo.
- **Modalities:** text in; text out (AA FAQ explicitly: no image input, not multimodal); reasoning yes (extended thinking); tool calls yes (function calling on Zen/OpenRouter); JSON mode not explicitly documented in the sources consulted.
- **Pricing (as of 2026-10-16):** CONFLICT across providers — AA median across 4 hosts: $0.70 in / $2.10 out / 84% cache discount ($0.57 per Intelligence Index task); OpenRouter list: $1.00 in / $3.00 out / $0.10 cached (Standard Compute, 2026-10-17); host range $0.25/$1 to $1.30/$4.30. Reflection publishes no first-party API price (its own platform is a free beta). Apache 2.0 weights are free to self-host.
- **Architecture:** open weights, Apache 2.0 (model card adds no distillation/fine-tuning/quantization restrictions); 501B total / 23B active sparse MoE, 256 experts; modified Harmony chat template; evals run at temperature 0.7, top_p 0.99; supported by Transformers, vLLM, SGLang, Unsloth, Axolotl, TokenSpeed, Dynamo.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (Reflection's own run, BF16 weights — vendor-reported only; Standard Compute flags that "every benchmark figure published so far comes from Reflection")
- Artificial Analysis Intelligence Index: **30** (#19/120 in class; open-weight median 19) — independent composite including Terminal-Bench 4.0, AutomationBench-AA and AA-Briefcase components (per-eval values not yet itemized on AA's page)
- Terminal-Bench 4.0 / AutomationBench-AA / GDPval-AA / Claw-Eval / MCP-Atlas: no itemized verified public score found (AA composite only)
- Zen/Go free-route agentic claims: reasoning + tool calling supported (aipromonow promo — capability, not a benchmark)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30** (independent — well above the open-weight class median of 19; #19 of 120 in class, 4/4 intelligence units)
- GPQA Diamond / HLE / AA-LCR / CritPt / AA-Omniscience: no itemized verified public score found (AA page published the composite without per-eval breakdowns as of 2026-10-16)

Coding:

- Terminal-Bench 2.1: **80.1%** (vendor-reported; the only coding benchmark published — unverified independently)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window verified across three sources; no MRCR/RULER/AA-LCR retrieval value published yet

Speed / efficiency (AA-measured, independent):

- Output speed: **227.9 tok/s** (#2 of 77 — exceptionally fast; class median 68.2); TTFT 1.33s
- Verbosity: 79M output tokens across the Intelligence Index — very concise vs the 130M median

### Normalized scores (1–100)

- **Tool use: 75/100.** Vendor-reported TB2.1 80.1% is frontier-adjacent but unverified independently; the AA composite (30, agentic components included) and the Zen tool-calling support are positive; zero itemized independent agentic rows cap it.
- **Reasoning: 72/100.** AA Index 30 (#19/120) is a solid independent reading well above the open-weight median — but with no itemized GPQA/HLE/LCR rows, the score rests on the composite; provisional pending per-eval publication.
- **Context window: 95/100.** 1M-token window verified across three independent sources (≥1M tier = 95–100); no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 15/100.** Text-only in/out — AA's FAQ states explicitly it does not support image input.
- **Coding: 78/100.** Vendor-reported Terminal-Bench 2.1 80.1% and the coding/agent-first positioning are promising, but every published benchmark is Reflection's own (Standard Compute's explicit caveat) — the score is provisional until independent harness runs land.
- **Cost efficiency: 90/100.** Paid routes at $0.70–$1.00 in / $2.10–$3.00 out with an 84–90% cache discount sit between the ~92 and ~88 methodology bands; a $0 Zen/Go free route exists (limited-time, standard free-tier data caveats); Apache 2.0 self-hosting is the deeper lever.
- **Overall Score: 67/100.** Mean of the five quality dims (75 + 72 + 95 + 15 + 78) / 5 = 335/5 = 67. Best fit: a fast, concise, permissively licensed open-weights coding/agent model for self-hosters and cost-sensitive agent loops — treat all vendor benchmarks as unverified until independent harnesses publish, and note the text-only ceiling.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (≥3 independent sources: artificialanalysis.ai model page fetched live, standardcompute.com review citing Reflection's announcement/HF card/OpenRouter, aipromonow Zen/Go free-route promo, DataStudios release coverage; the pricing conflict between AA's provider median and OpenRouter's list is documented, not averaged); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
