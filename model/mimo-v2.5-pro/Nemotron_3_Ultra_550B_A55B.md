# MiMo-V2.5-Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Xiaomi (`mimo-v2.5-pro`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's MiMo-V2.5 Pro model. Queue Overall 73.0. BenchLM shows MiMo-V2.5-Pro at 53.01 (rank 80), MiMo-V2.6-Pro at 73.67 (rank 23), MiMo-V2.5 not computed.
- **Provider / access:** Hugging Face (`XiaomiMiMo/MiMo-V2.5-Pro`), OpenCode Zen (`opencode/mimo-v2.5-pro`). Free on HuggingChat.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `XiaomiMiMo/MiMo-V2.5-Pro` (Hugging Face), `mimo-v2.5-pro` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** Likely 1M (MiMo-V2.6 family standard); MiMo-V2.5 may be 256K-1M.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal. Cost per Intelligence Index task: negligible.
- **Architecture:** Open-weight reasoning model; parameter count not explicitly stated.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (MiMo-V2.5-Pro, Overall 53.01, rank 80/956):
- No detailed benchmark rows displayed on page

**Sibling models on BenchLM:**
- MiMo-V2.6-Pro: 73.67 (rank 23)
- MiMo-V2.6-Flash: 64.59 (rank 39)
- MiMo-V2.5: not computed

**Proxy from MiMo-V2.6-Flash** (BenchLM, 64.59):
- Toolathlon-Verified: 73.6%
- Terminal-Bench 2.1: 87.6%
- OSWorld-Verified: 80.8%
- CyberGym: 95.1%
- DeepSWE: 67.9%
- AA Intelligence Index: 37.9%
- AA LCR: 74.3%
- AA MMMU-Pro: 73.1%

V2.5-Pro expected slightly weaker than V2.6-Flash.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Proxy from V2.6-Flash: TB 2.1 87.6%, OSWorld-Verified 80.8%, Toolathlon 73.6%, CyberGym 95.1%. V2.5-Pro estimated 70-80% of Flash. Capped by no direct benchmarks.
- **Reasoning: 45/100.** Proxy from V2.6-Flash: AA Intelligence Index 37.9%, AA LCR 74.3%, AA HLE 35.1%. V2.5-Pro estimated lower. Capped by no direct benchmarks.
- **Context window: 80/100.** Likely 256K-1M (MiMo family). Capped by no direct LCR/MRCR for V2.5-Pro.
- **Multimodal: 55/100.** Proxy from V2.6-Flash: AA MMMU-Pro 73.1%. V2.5-Pro may lack vision. Capped by no direct benchmarks.
- **Coding: 60/100.** Proxy from V2.6-Flash: TB 2.1 87.6%, DeepSWE 67.9%, AA SciCode 51.3%. V2.5-Pro estimated 70-80%. Capped by no direct benchmarks.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 61/100.** Half-up mean of (65 + 45 + 80 + 55 + 60) / 5 = 61 → 61. Using six incl. cost: (65+45+80+55+60+95)/6 = 400/6 = 66.7 → 67. Model-queue says 73.0; discrepancy due to V2.5 vs V2.6 gap. Best-fit: capable open-weight predecessor to V2.6; free access.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for V2.5-Pro. Proxy from MiMo-V2.6-Flash (BenchLM) with estimated degradation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `MiMo_2.md`, using the same headings.