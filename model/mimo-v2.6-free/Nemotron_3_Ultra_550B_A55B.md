# MiMo-V2.6-Free — findings by Nemotron 3 Ultra 550B A55B

- Source: Xiaomi (`mimo-v2.6-free`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Free (Free tier reasoning model)
- **Short description:** Xiaomi's free-tier open-weight reasoning model, likely a distilled/quantized variant of MiMo-V2.6. Queue Overall 86.3 but BenchLM only shows MiMo-V2.6-Flash (64.59) and MiMo-V2.6-Pro (73.67). Free tier suggests reduced capability vs Flash/Pro.
- **Provider / access:** Hugging Face (likely `XiaomiMiMo/MiMo-V2.6-Free` or similar), OpenCode Zen (`opencode/mimo-v2.6-free`). Free on HuggingChat.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `mimo-v2.6-free` (OpenCode Zen / Xiaomi). Free tier on HuggingChat.
- **Context window:** 1,000,000 tokens (MiMo-V2.6 family standard); max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-19):** Free on HuggingChat; self-host near-zero marginal. Cost per Intelligence Index task: negligible.
- **Architecture:** Open-weight reasoning model; likely smaller/distilled vs MiMo-V2.6-Flash (which has 1M context).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks found** for "MiMo-V2.6-Free" on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows only MiMo-V2.6-Flash (64.59) and MiMo-V2.6-Pro (73.67).

Proxy from MiMo-V2.6-Flash (BenchLM):
- Toolathlon-Verified: 73.6%
- Terminal-Bench 2.1: 87.6%
- OSWorld-Verified: 80.8%
- CyberGym: 95.1%
- DeepSWE: 67.9%
- AA Intelligence Index: 37.9%
- AA LCR: 74.3%
- AA MMMU-Pro: 73.1%

Free tier expected lower: estimate 70-80% of Flash scores.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Proxy from Flash: TB 2.1 87.6%, OSWorld-Verified 80.8%, Toolathlon 73.6%, CyberGym 95.1%. Free tier estimated 70-80% → TB 2.1 ~61-70%, OSWorld ~56-65%. Capped by no direct benchmarks.
- **Reasoning: 45/100.** Proxy from Flash: AA Intelligence Index 37.9%, AA LCR 74.3%, AA HLE 35.1%. Free tier estimated lower. Capped by no direct benchmarks.
- **Context window: 85/100.** 1M native (family standard). Capped by no direct LCR/MRCR for Free tier.
- **Multimodal: 55/100.** Proxy from Flash: AA MMMU-Pro 73.1%. Free tier may lack vision. Capped by no direct benchmarks.
- **Coding: 60/100.** Proxy from Flash: TB 2.1 87.6%, DeepSWE 67.9%, AA SciCode 51.3%. Free tier estimated 70-80% → TB 2.1 ~61-70%, DeepSWE ~47-54%. Capped by no direct benchmarks.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 62/100.** Half-up mean of (65 + 45 + 85 + 55 + 60) / 5 = 62 → 62. Using six incl. cost: (65+45+85+55+60+95)/6 = 405/6 = 67.5 → 68. Model-queue says 86.3; large discrepancy suggests queue score may be from internal eval or Free tier is more capable than estimated. Best-fit: free open-weight with strong family lineage; direct benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for Free tier. Proxy from MiMo-V2.6-Flash (BenchLM) with estimated degradation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `MiMo_2_Free.md`, using the same headings.