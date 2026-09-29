# LongCat 2.0 — findings by Muse Spark 1.3

- Source: Meituan/LongCat-2.0 (`meituan/longcat-2.0`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed open-weights 1.6T/48B MoE for coding and long-horizon agentic work with 1M context and sparse attention.
- **Provider / access:** Meituan LongCat API `meituan/longcat-2.0` (Chat Completions); HuggingFace `meituan-longcat/LongCat-2.0`; deep integration with Claude Code, OpenClaw, and Hermes harnesses.
- **Release / knowledge:** 2026-06-29 unveiled (vendor blog / HuggingFace); knowledge cutoff not disclosed
- **IDs:** `meituan/longcat-2.0` (no Free ID exists on Zen for this slug)
- **Context window:** 1M total tokens (vendor spec; trained on hundreds of billions of tokens of 1M-context data)
- **Modalities:** Text in/out only; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-29):** Paid $0.30/$1.20 per 1M in/out, cached input $0.006 (LongCat API)
- **Architecture:** 1.6T total / ~48B activated per token MoE plus 135B N-gram Embedding params, LongCat Sparse Attention, 3-step Multi-Token Prediction, MIT license; pretraining over 35T tokens on AI ASIC superpods

### Raw benchmarks found

Agent / tool use:

- FORTE (**general agent**): 73.2% (vendor unified in-house harness, via HuggingFace model card; vs Gemini 3.1 Pro 70.3%, GPT-5.5 77.8%, Opus 4.8 77.2%)
- Terminal-Bench 2.1: **70.8%** (vendor unified harness, via HuggingFace model card; vs Gemini 3.1 Pro 70.7%, GPT-5.5 73.8%, Opus 4.7 71.7%, Opus 4.8 78.9%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- BrowseComp (**search agent, provisional**): 79.9% (vendor harness, via HuggingFace model card; vs GPT-5.5 84.4%, Opus 4.8 84.3%)
- RWSearch (**search agent, provisional**): 78.8% (vendor harness, via HuggingFace model card; vs GPT-5.5 85.3%, Opus 4.5 81.3%)

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (vendor unified harness, via HuggingFace model card; vs Gemini 3.1 Pro 94.3%, GPT-5.5 93.6%, Opus 4.7 94.2%)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- IMO-AnswerBench (**foundational proxy, provisional**): 81.8% (vendor harness, via HuggingFace model card; vs Gemini 3.1 Pro 90.0%, GPT-5.5 79.5%)
- IFEval (**instruction-following proxy, provisional**): 90.0% (vendor harness, via HuggingFace model card)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Pro **59.5%** (vendor unified harness, via HuggingFace model card; vs Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, Opus 4.7 64.3%, Opus 4.8 69.2%); SWE-bench Multilingual **77.3%** (vs Gemini 3.1 Pro 76.9%, Opus 4.7 80.5%, Opus 4.8 84.8%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No long-context retrieval reported (no MRCR / RULER / GraphWalks value at window length found; 1M window is vendor spec with sparse-attention training only)

### Normalized scores (1–100)

- **Tool use: 76/100.** TB2.1 70.8% at parity with Gemini 3.1 Pro plus FORTE 73.2% and RWSearch 78.8%; capped by the TB2.1 gap to Opus 4.8 78.9% and missing Tau/GDPval/Claw scores.
- **Reasoning: 84/100.** GPQA 88.9% near frontier with IMO-AnswerBench 81.8% and IFEval 90.0%; capped by the GPQA gap to 94%+ frontier and zero verified HLE, LCR, or Index scores.
- **Context window: 95/100.** 1M total with dedicated long-context post-training hits the top tier; capped at 95 with no measured ≥512K retrieval score to grant 100.
- **Multimodal: 15/100.** Text in/out only per spec; capped at text-only band.
- **Coding: 82/100.** SWE-Pro 59.5% beating GPT-5.5 plus multilingual 77.3% and TB2.1 70.8%; capped by the SWE-Pro gap to Opus 4.8 69.2% and missing LiveCode/SciCode/DeepSWE numbers.
- **Cost efficiency: 94/100.** $0.30/$1.20 sits between the $0.10 and $0.60 reference tiers with $0.006 cached input; capped below free-tier 100 as paid.
- **Overall Score: 70/100.** Mean of the five non-cost dims (76+84+95+15+82)/5 = 70.4; best fit as a budget open-weights coding agent for repo-scale work.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (HuggingFace model card eval table, HuggingFace API, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
