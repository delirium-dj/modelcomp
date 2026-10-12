# GPT-5.6 Luna — findings by Kimi K3

- Source: OpenAI / GPT-5.6 Luna (`gpt-5.6-luna`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's lighter GPT-5.6 variant (siblings Sol/Terra/Cyber) — keeps solid TB 2.1 (84.7%) and FrontierMath (78.6%) at roughly 1/20 of Sol's price; live on Zen (~#24 weekly, 99.9% cache-served input).
- **Provider / access:** OpenAI API (`gpt-5.6-luna`, OpenAI-compatible); OpenCode Zen route live.
- **Release / knowledge:** Released 2026-07-09 (OpenCode Data, newly verified — my 2026-09-24 pass had "date not verified"); knowledge cutoff 2026-02-16 (OpenCode Data, new).
- **IDs:** `openai/gpt-5.6-luna` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.1M tokens (OpenCode Data; benchlm.ai listed 1.05M); max output **128K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/PDF in (OpenCode Data; MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** **$0.20/M input, $1.20/M output, $0.02/M cached input, $0.25 cache write** (OpenCode Data catalog — verified now; 20× cheaper than Sol's $4/$20, 10× below Terra).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (official openai.com/index/gpt-5-6/ table via OpenCode Data; matches benchlm.ai; Vals 79.0%); TB 3.0: **14.3%** (benchlm.ai)
- Tau3-Banking (AA): **31.1%** (benchlm.ai)
- GDPval-AA: **1582 Elo** (47.2% normalized) (benchlm.ai)
- OSWorld: **45.6%** (official page; matches benchlm.ai); CyberGym: **77.9%**; Toolathlon: **53.4%** (official; matches); BrowseComp: **83.3%** (official; matches); AA Harvey LAB: **87.9%** (benchlm.ai)
- Agents' Last Exam: **50.3** (official page — new this pass)
- AA Agentic Index: **42.7%**; ApprenticeBench: **7%** (benchlm.ai)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (official page; GPQA-D 92.3; AA 91.1%; Vals 91.7%)
- HLE (AA-HLE): **39.5%** (benchlm.ai)
- AA-LCR: **83.7%**; MLCR-AA: **19.4%**; CritPt: **20.6%** (benchlm.ai)
- ARC-AGI-2: **59.5%**; ARC-AGI-3: **0.2%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **51.2** (AA "GPT-5.6 has landed" article via OpenCode Data; matches benchlm.ai); BenchLM overall **65.6/100, #25 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **42.7% / 92.6%** (benchlm.ai)
- FrontierMath v2 T1–3: **78.6%** (official page; matches), Tier 4: **58.5%** (benchlm.ai); MMLU-Pro (Vals): **86.0%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **93.0%**; SWE-bench Pro: **62.7%** resolve rate (official page; matches benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): no verified public score found
- DeepSWE: **67.2%** (official page; matches benchlm.ai)
- AA-SciCode: **53.6%**; AA Coding Index: **71.5**; AA Coding Agent Index: **74.6** (AA article — new this pass); VulcanBench v3: **85.5%**; CursorBench 3.2: **61.1%** (benchlm.ai)

Long context:

- AA-LCR 83.7% at the ~1.1M window (benchlm.ai); 128K output verified; no MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **78.4%** (official page; matches benchlm.ai); PDF input catalog-listed (new)

### Normalized scores (1–100)

- **Tool use: 79/100.** Unchanged: TB 2.1 84.7%, GDPval-AA 1582, Harvey LAB 87.9% (official-confirmed where published); capped by Tau3-Banking 31.1%, TB 3.0 14.3%, ApprenticeBench 7%.
- **Reasoning: 78/100.** Unchanged: GPQA 92.3%, LCR 83.7%, FrontierMath 78.6/58.5; capped by hallucination 92.6%, HLE 39.5%, ARC-AGI-3 0.2%.
- **Context window: 87/100.** Unchanged: 1.1M window with LCR 83.7%; 128K output verified; capped by missing max-window probes.
- **Multimodal: 68/100.** Unchanged: MMMU-Pro ~78.4% vision/PDF input; no audio/video rows; text-only output.
- **Coding: 79/100.** Unchanged: SWE-bench (Vals) 93.0%, official SWE-bench Pro 62.7%, DeepSWE 67.2%; capped by SciCode 53.6%.
- **Cost efficiency: 90/100.** Raised from provisional 76: verified $0.20/$1.20 — 20× cheaper than Sol, near-Flash-tier economics for an OpenAI reasoning model.
- **Overall Score: 78/100.** Mean of the five quality dims (79+78+87+68+79)/5 = 78.2 → 78 (unchanged). Best fit: cost-conscious OpenAI workloads needing 1M context without Sol-tier spend — the value pick of the GPT-5.6 family.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official openai.com/index/gpt-5-6/ table + artificialanalysis.ai "GPT-5.6 has landed" article transcribed by OpenCode Data `openai/gpt-5-6-luna` incl. verified pricing/usage; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release (2026-07-09), cutoff (2026-02-16), 128K output and the strikingly low $0.20/$1.20 price. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
