# Ox Alpha — findings by Nemotron 3.5 Super VL 120B A12B

- Source: oxalpha.org/benchmarks (community-reported), syntaxandsignal.tech/blog/ox-alpha-stealth-model-openrouter-2026, buildfastwithai.com, zenmux.ai/z-ai/glm-5.3-flashx (for context), benchable.ai/models/stealth/ox-alpha
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Stealth/anonymous reasoning model served on OpenRouter (`stealth/ox-alpha`), appeared Aug 2026; frontier reasoning model for coding, sustained agentic work, and production workloads; 1M-token context / 131,072 max output, text+image+video in → text out, mandatory reasoning (low/high/max, default max), free during preview ($0/1M); likely Zhipu AI's GLM-5.3V/GLM-5.5 per tokenizer/reasoning-schema fingerprinting (unconfirmed).
- **Provider / access:** OpenRouter (`stealth/ox-alpha`), OpenCode; anonymous/stealth provider, community-served preview. Not a vendor-documented model; figures are community-reported estimates.
- **Release / knowledge:** Appeared Aug 20, 2026 on OpenRouter; knowledge cutoff not stated; preview scheduled ~1 week then commercial pricing applies.
- **IDs:** `stealth/ox-alpha` (OpenRouter). No Free ID confirmed (free during preview only).
- **Context window:** 1,048,576 tokens (1M); max output 131,072. Verified via oxalpha.org benchmarks and syntaxandsignal.tech.
- **Modalities:** Text, image, and video in; text out; reasoning yes (mandatory, configurable effort low/high/max, default max); tool use yes (function calling, OpenAI-compatible schema); JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-16):** $0/1M input, $0/1M output during free preview; standard commercial pricing applies after preview ends.
- **Architecture:** Stealth/unannounced; likely Zhipu AI GLM-5.x family per tokenizer analysis and video token budgets matching GLM-5V-Turbo (syntaxandsignal.tech); parameter count not disclosed; reasoning model.

### Raw benchmarks found

Only community-reported figures (marked with * on oxalpha.org as directional, not vendor-datasheet):

- Intelligence Index (composite reasoning/knowledge/math): **59*** (oxalpha.org)
- Agentic coding (real-world multi-file tool tasks): **78*** (oxalpha.org)
- Throughput: **~29-30 tokens/s**, TTFT ~3.15-3.98s (syntaxandsignal.tech)
- DeepSWE 10-task subset (community): **80.0% Pass@1** (syntaxandsignal.tech; vs Fable 5 65.0%, GLM-5.3 62.0%, Grok 4.6 62.0%, GPT-5.6 Sol 52.0%)
- Kingbench multi-task reasoning: **87.50%** (2nd place; syntaxandsignal.tech; vs GLM-5.3 91.25%, Claude Opus 4.8 84.10%, Qwen 3.8 Max 83.50%)

No verified public scores found for all other benchmarks (Terminal-Bench, OSWorld, SWE-bench, LiveCodeBench, MMMU-Pro, GPQA, HLE, ARC-AGI, MRCR, etc.).

### Normalized scores (1–100)

Derived from the specs and community figures above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Evidence is extremely thin — most dims rest on two community figures; treat all scores as highly provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Agentic coding 78* (oxalpha.org), function calling supported; capped by total absence of OSWorld/Terminal-Bench/Toolathlon numbers for this exact model.
- **Reasoning: 70/100.** Intelligence Index 59* (oxalpha.org), Kingbench 87.50% (2nd place); capped by zero public GPQA/HLE/ARC-AGI/CritPt numbers.
- **Context window: 90/100.** Verified 1M tokens / 131,072 max output (oxalpha.org, syntaxandsignal.tech); capped because no public full-depth needle-recall score at 1M.
- **Multimodal: 75/100.** Text + image + video in, text out; capped by absence of public MMMU-Pro/Chartography/LVBench numbers and text-only output.
- **Coding: 76/100.** DeepSWE 80.0% Pass@1 (community); capped by zero other public coding benchmark numbers for this exact model.
- **Cost efficiency: 98/100.** Free ($0/1M) during preview — best possible cost efficiency; not counted toward Overall.
- **Overall Score: 76/100.** Half-up mean of (68 + 70 + 90 + 75 + 76) / 5 = 75.8 → 76. Best-fit recommendation: intriguing free stealth reasoning model with strong DeepSWE/Kingbench community numbers; treat all figures as unverified community reports and validate on your own tasks before production use. Preview is free but temporary.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (oxalpha.org benchmarks + syntaxandsignal.tech + buildfastwithai + buildfastwithai + ZenMux + elma.sh); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
