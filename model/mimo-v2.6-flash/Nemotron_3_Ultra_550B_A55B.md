# MiMo-V2.6-Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (MiMo-V2.6-Flash-RL)
- **Short description:** Xiaomi's open-weight reasoning model with strong cybersecurity (CyberGym 95.1%), agentic tool use (Terminal-Bench 2.1 87.6%, OSWorld-Verified 80.8%), and 1M context, free on Hugging Face / cheap via inference providers.
- **Provider / access:** Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`), vLLM/SGLang self-host, OpenCode Zen (`opencode/mimo-v2.6-flash`), others. Chat Completions API compatible.
- **Release / knowledge:** 2026 release (technical report); knowledge cutoff not explicitly stated.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Flash-RL` (Hugging Face), `mimo-v2.6-flash` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** 1,000,000 tokens total; max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/video/audio input noted.
- **Pricing (as of 2026-10-19):** Free on HuggingChat; inference providers ~$0.20–$0.60/M in, $0.40–$1.00/M out. Blended ≈ $0.30/M (open-weight, self-host near-zero marginal). Cost per Intelligence Index task: negligible.
- **Architecture:** Open-weight reasoning model; parameter count not explicitly stated in benchmarks.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Toolathlon-Verified: **73.6%** (Xiaomi technical report)
- AutomationBench: **52.3%** (Xiaomi technical report)
- Agents' Last Exam: **27.6%** (Xiaomi technical report)
- Terminal-Bench 4.0: **28.80%** (Xiaomi technical report)
- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report)
- OSWorld-Verified: **80.8%** (Xiaomi technical report)
- JobBench: **61.2%** (Xiaomi technical report)
- CyberGym: **95.1%** (Xiaomi technical report)
- ExploitGym: **6.0%** (Xiaomi technical report)
- GDPval-AA normalized: **55.4%** (Artificial Analysis)

Reasoning / knowledge:

- AA Intelligence Index: **37.9%** (Artificial Analysis)
- AA HLE: **35.1%** (Artificial Analysis)
- AA Omniscience Index: **-12.7%** (Artificial Analysis)
- AA Omniscience Accuracy: **27.0%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **54.4%** (Artificial Analysis)
- AA LCR: **74.3%** (Artificial Analysis)
- CritPt: **12.0%** (Artificial Analysis)

Coding:

- DeepSWE: **67.9%** (Xiaomi technical report)
- ProgramBench: **26.0%** (Xiaomi technical report)
- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report)
- AA SciCode: **51.3%** (Artificial Analysis)

Multimodal:

- AA MMMU-Pro: **73.1%** (Artificial Analysis)

Long context:

- AA LCR: **74.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** TB 2.1 87.6% (exceeds 88%+ frontier), OSWorld-Verified 80.8%, Toolathlon 73.6%, CyberGym 95.1% (exceeds 80%+ frontier), JobBench 61.2%. Capped by TB 4.0 28.8%, AutomationBench 52.3%, Agents' Last Exam 27.6%, ExploitGym 6.0%, GDPval-AA 55.4%.
- **Reasoning: 55/100.** AA Intelligence Index 37.9% (<60 frontier), AA LCR 74.3%, AA HLE 35.1% (<40%+), CritPt 12.0%, AA Omniscience Index -12.7%, AA Omniscience Hallucination 54.4%. Limited knowledge/reasoning benchmarks.
- **Context window: 90/100.** 1M native context; AA LCR 74.3% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: 500K-1M = 85-94.
- **Multimodal: 55/100.** AA MMMU-Pro 73.1% suggests some visual capability, but no detailed multimodal benchmarks from Xiaomi report. Methodology: partial multimodal = 50-60.
- **Coding: 72/100.** TB 2.1 87.6%, DeepSWE 67.9%, AA SciCode 51.3% (exceeds 55%? no, below 55% frontier). Capped by ProgramBench 26.0%, limited coding benchmark coverage.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.30/M blended. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 70/100.** Half-up mean of (78 + 55 + 90 + 55 + 72) / 5 = 70 → 70. Using six incl. cost: (78+55+90+55+72+95)/6 = 445/6 = 74.2 → 74. Model-queue says 88; discrepancy suggests queue Overall uses different weighting. Best-fit: strong cybersecurity/agentic open-weight model at zero cost; CyberGym 95.1% and TB 2.1 87.6% stand out; reasoning/knowledge and multimodal are weaker.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Xiaomi technical report, Hugging Face model card), independent benchmark aggregators (BenchLM, Artificial Analysis), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.md`, using the same headings.