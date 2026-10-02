# Qwen 3.5 Plus — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.5 Plus (`opencode/qwen-3.5-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus (hosted 397B-A17B)
- **Short description:** Alibaba Qwen-team hosted MoE flagship, 397B total / 17B active. Top use case is cost-efficient frontier-class coding and knowledge work via API.
- **Provider / access:** Alibaba Cloud (`qwen-3.5-plus`); OpenRouter `qwen/qwen-3.5-plus`; OpenCode Zen `opencode/qwen-3.5-plus`. Chat Completions API.
- **Release / knowledge:** 2026-02-16 release; knowledge cutoff not publicly disclosed
- **IDs:** `opencode/qwen-3.5-plus` (Zen Free ID status not confirmed; scored on paid pricing below)
- **Context window:** 262K native open-weight (Qwen3.5-397B-A17B); 1M total on Plus hosted endpoint (991k reported by Vals AI) — verified via provider pages
- **Modalities:** text/image/video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-28):** $0.260 in / $1.560 out per 1M (pricepertoken.com; Alibaba/OpenRouter). Tiered by context on Alibaba Cloud (~$0.48/$1.20 per morphllm.com). No $0 free tier confirmed.
- **Architecture:** 397B total / 17B active MoE, 256 experts (8 routed + 1 shared), open-weights for base 397B-A17B; Plus is hosted production variant

### Raw benchmarks found

Agent / tool use:

- BFCL v4 (tool use): **72.9** (morphllm.com Qwen 3.5 vs GLM-5 comparison, Feb 2026)
- Terminal-Bench 2.1: **52.5%** (morphllm.com, same table)
- Terminal-Bench 2.0 (Vals harness): **41.57%** (vals.ai/models Qwen 3.5 Plus, Feb 2026)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (Alibaba official via morphllm.com/id8.co.in); **87.37%** (Vals AI independent); **84.8%** (Epoch AI via themodelbeat.com)
- MMLU-Pro: **87.8** (Alibaba official via morphllm.com/id8.co.in); **87.18%** (Vals AI)
- MMLU: **88.5%** (morphllm.com)
- AIME 2026 I: **91.3** (morphllm.com); AIME 2024/2025: **86.7%** (Epoch AI), **88.9** (id8.co.in compilation)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMMU: **85** (id8.co.in compilation); MathVista: **90.3** (morphllm.com); IFEval: **92.6** (id8.co.in)

Coding:

- SWE-bench Verified: **76.4%** (Alibaba official via morphllm.com/id8.co.in); SWE-bench (Vals harness): **71.20%** (vals.ai)
- LiveCodeBench: **83.6** (LiveCodeBench v6 via morphllm.com); **85.33%** (Vals AI)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **15.74%** (Vals AI Vibe Code Bench v1.1)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks: **no verified public score found**; context length verified (262K native, 1M hosted) but no long-context retrieval score reported

### Normalized scores (1–100)

- **Tool use: 70/100.** BFCL 72.9 plus TB2.1 52.5 is solid mid-upper; capped by missing Tau3/GDPval and TB well below 85%+ frontier.
- **Reasoning: 88/100.** GPQA 88.4 plus MMLU-Pro 87.8 and AIME 91.3 is near-frontier knowledge; capped just below 90 by GPQA <90 and no HLE.
- **Context window: 95/100.** 1M hosted Plus tier meets >=1M band; capped at low end of band with no MRCR/RULER retrieval evidence.
- **Multimodal: 80/100.** Text/image/video in covers video/PDF band; capped without audio in or non-text out.
- **Coding: 84/100.** SWE-Verified 76.4 plus LiveCodeBench 83.6-85.3 is strong; capped by low Vibe 15.7 and no DeepSWE/SciCode.
- **Cost efficiency: 90/100.** $0.26/$1.56 per 1M is cheap frontier-adjacent paid pricing; capped below $0 free-tier 100.
- **Overall Score: 83/100.** Mean of five quality dims (70+88+95+80+84)/5=83.4; best-fit for cheap frontier coding/knowledge via API.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
