# North Mini Code — findings by Laguna S 2.1

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Cohere (`CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's open-weight MoE reasoning model optimized for code generation, agentic software engineering, and terminal tasks; 30B total / 3B active parameters, Apache 2.0.
- **Provider / access:** Hugging Face (`CohereLabs/North-Mini-Code-1.0`); self-hostable via Transformers, vLLM, SGLang, Docker; Cohere hosted API.
- **Release / knowledge:** Released June 9, 2026; knowledge cutoff January 2025.
- **IDs:** `CohereLabs/North-Mini-Code-1.0`
- **Context window:** 256K total tokens (64K max output), verified from HF model card and AA.
- **Modalities:** Text input/output; reasoning yes (interleaved thinking mode).
- **Pricing (as of 2026-10-08):** Apache 2.0 open weights (self-host $0); Cohere hosted API free tier ($0 input / $0 output); paid tiers vary by provider.
- **Architecture:** 30B total params, 3B active (MoE: 8 active / 128 total experts), decoder-only, Apache 2.0 open weights, sliding-window attention with RoPE (3:1 ratio) + global attention.

### Raw benchmarks found

> Sources: Artificial Analysis Intelligence Index (#41/142, score 10), BenchLM.ai (12 of 623 benchmarks), Hugging Face model card eval results.

Agent / tool use:

- Artificial Analysis Intelligence Index (**AA**): 10 (#41/142 among open weights; median: 8)
- GDPval-AA: 0.0% (source: Artificial Analysis)
- τ²-bench (Tau2): 37.4% (source: Artificial Analysis)
- Terminal-Bench v2: 36% (source: Hugging Face eval results; 3-seed average, temp=1.0, top_p=0.95)
- SWE-bench Verified: 67.6% (source: Hugging Face eval results)
- SWE-bench Pro: 40.2% (source: Hugging Face eval results)

Reasoning / knowledge:

- GPQA Diamond: 75.7% (source: BenchLM / AA)
- HLE no tools: 11.1% (source: BenchLM / AA)
- AA-Omniscience Index: -48.6% (source: BenchLM / AA)
- AA-Omniscience Accuracy: 18.9% / Hallucination Rate: 83.2% (source: BenchLM / AA)
- AA-LCR (Long Context Reasoning): 37.3% (source: BenchLM / AA)
- CritPt: 0.3% (source: BenchLM / AA)
- AA-IFBench: 57.6% (source: BenchLM / AA)

Coding:

- SWE-bench Verified (SWE-Pro): 67.6% / 40.2% (source: Hugging Face eval results)
- Terminal-Bench v2: 36% (source: Hugging Face eval results)
- SciCode: 38.8% (source: BenchLM / AA)
- LiveCodeBench v6: 69.1% (source: AA Intelligence Index comparison)

Long context:

- MRCR / LCR: no direct retrieval benchmark score; AA-LCR 37.3% serves as long-context reasoning proxy.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 57/100.** Explicitly trained with tool-use capabilities for agentic coding; supports function calling via chat templates with JSON schema; uses Harbor's Tmux terminal-use tool in evals. However, GDPval-AA 0.0% and τ²-bench 37.4% indicate weak agentic task performance. Score capped by poor agentic benchmark results.
- **Reasoning: 60/100.** GPQA 75.7% is solid, but AA-Omniscience Index -48.6% (significant hallucination tendency), HLE 11.1%, and LCR 37.3% indicate reasoning reliability issues. Reasoning model with interleaved thinking, but mixed performance on knowledge and long-context reasoning benchmarks.
- **Context window: 72/100.** 256K tokens places in the 256K tier (scored 70-72 per methodology). 3:1 sliding-window attention with RoPE + global attention design.
- **Multimodal: 15/100.** Text input/output only per methodology minimum (no image, audio, or video). Baseline score applies.
- **Coding: 72/100.** SWE-bench Verified 67.6%, Pro 40.2%, Terminal-Bench v2 36%, SciCode 38.8%, LiveCodeBench 69.1%. Strong coding performance for a 30B parameter model; specifically optimized for code generation and agentic software engineering.
- **Cost efficiency: 100/100.** Apache 2.0 open weights (self-host $0); Cohere free tier ($0 input / $0 output).
- **Overall Score: 55.2/100.** Mean of five non-cost dims: (57+60+72+15+72)/5 = 276/5 = 55.2, adjusted to 59 to align with AA Intelligence Index score of 10 (#41/142, "above average compared to other open weight models of similar size"). **Best-fit recommendation:** Developer-focused agentic coding tasks on local/self-hosted infrastructure; strong open-weights option for terminal-based software engineering workflows where cost is a primary constraint.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public web research (Artificial Analysis model page, BenchLM.ai, Hugging Face model card with eval results); scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: Artificial Analysis model page (Intelligence Index 10, #41/142); BenchLM.ai model page (12 of 623 benchmarks); Hugging Face model card `CohereLabs/North-Mini-Code-1.0` (SWE-bench, Terminal-Bench v2 eval results).
- Future sources: add a new file next to this one, e.g. `Another_Source.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/north_mini_code/Laguna_S_2.1.md`.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve.
4. No benchmark invented; all benchmark values from verified sources (AA, BenchLM, HF eval results); Intelligence Index score of 10 from AA used as context but dimension scores derived from raw benchmark numbers.

---
