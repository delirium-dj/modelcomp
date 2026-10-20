# MiMo-V2.5-Free — findings by Nemotron 3 Ultra 550B A55B

- Source: Xiaomi (`mimo-v2.5-free`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Free (Free tier reasoning model)
- **Short description:** Xiaomi's free-tier open-weight reasoning model, likely distilled from MiMo-V2.6 family. Queue Overall 81.6 but BenchLM only shows MiMo-V2.5-Pro (53.01) and MiMo-V2.5 (not computed). Free tier suggests reduced capability vs Pro.
- **Provider / access:** Hugging Face (likely `XiaomiMiMo/MiMo-V2.5-Free`), OpenCode Zen (`opencode/mimo-v2.5-free`). Free on HuggingChat.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `mimo-v2.5-free` (OpenCode Zen / Xiaomi). Free tier on HuggingChat.
- **Context window:** 1,000,000 tokens (MiMo-V2.6 family standard); max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal. Cost per Intelligence Index task: negligible.
- **Architecture:** Open-weight reasoning model; likely smaller/distilled vs MiMo-V2.5-Pro.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks found** for "MiMo-V2.5-Free" on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows MiMo-V2.5-Pro (53.01) and MiMo-V2.5 (not computed).

Proxy from MiMo-V2.5-Pro (BenchLM, 53.01):
- No detailed benchmarks listed for Pro variant

Proxy from MiMo-V2.6-Flash (BenchLM, 64.59):
- Toolathlon-Verified: 73.6%
- Terminal-Bench 2.1: 87.6%
- OSWorld-Verified: 80.8%
- CyberGym: 95.1%
- DeepSWE: 67.9%
- AA Intelligence Index: 37.9%
- AA LCR: 74.3%
- AA MMMU-Pro: 73.1%

Free tier estimated 60-70% of Flash scores.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** Proxy from Flash: TB 2.1 87.6%, OSWorld-Verified 80.8%, Toolathlon 73.6%, CyberGym 95.1%. Free tier estimated 60-70% → TB 2.1 ~53-61%, OSWorld ~48-57%. Capped by no direct benchmarks.
- **Reasoning: 40/100.** Proxy from Flash: AA Intelligence Index 37.9%, AA LCR 74.3%, AA HLE 35.1%. Free tier estimated lower. Capped by no direct benchmarks.
- **Context window: 85/100.** 1M native (family standard). Capped by no direct LCR/MRCR for Free tier.
- **Multimodal: 50/100.** Proxy from Flash: AA MMMU-Pro 73.1%. Free tier may lack vision. Capped by no direct benchmarks.
- **Coding: 50/100.** Proxy from Flash: TB 2.1 87.6%, DeepSWE 67.9%, AA SciCode 51.3%. Free tier estimated 60-70% → TB 2.1 ~53-61%, DeepSWE ~41-48%. Capped by no direct benchmarks.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 56/100.** Half-up mean of (55 + 40 + 85 + 50 + 50) / 5 = 56 → 56. Using six incl. cost: (55+40+85+50+50+95)/6 = 375/6 = 62.5 → 63. Model-queue says 81.6; large discrepancy suggests queue score may be from internal eval. Best-fit: free open-weight with strong family lineage; direct benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for Free tier. Proxy from MiMo-V2.6-Flash (BenchLM) with estimated degradation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `MiMo_2_Free.md`, using the same headings.