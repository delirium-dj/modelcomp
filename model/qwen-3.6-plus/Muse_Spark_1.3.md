# Qwen 3.6 Plus — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.6 Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Qwen-team hosted flagship (April 2026), agentic coding plus multimodal. Top use case is production coding agents at ~30x below frontier pricing.
- **Provider / access:** Alibaba Cloud (`qwen-3.6-plus`); OpenCode Zen `opencode/qwen-3.6-plus`. Chat Completions API.
- **Release / knowledge:** 2026-04-02 release; knowledge cutoff not publicly disclosed
- **IDs:** `opencode/qwen-3.6-plus` (Zen Free ID status not confirmed; scored on paid pricing below)
- **Context window:** 1M total (984k reported by Vals AI); 65,536 max output — verified via provider pages
- **Modalities:** text/image/video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-30):** $0.50 in / $3.00 out per 1M (Vals AI; llm-stats.com). No $0 free tier confirmed.
- **Architecture:** proprietary MoE (params not disclosed); private weights

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **53.18%** (vals.ai/models Qwen 3.6 Plus)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Terminal-Bench 2.0: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.37%** (Vals AI)
- MMLU Pro: **87.67%** (Vals AI)
- MMMU Pro: **84.16%** (Vals AI)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **54.4 BenchLM Alibaba rank #7** (benchlm.ai/best/alibaba-models, Sep 2026)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **78.8%** (Alibaba official via lmmarketcap.com review, Apr 2026)
- SWE-bench (Vals harness): **73.40%** (Vals AI)
- LiveCodeBench: **85.95%** (Vals AI)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench v1.1: **25.57%** (Vals AI; ~10 pts above Qwen 3.5 Plus)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks: **no verified public score found**; length verified (1M) with no retrieval score reported

### Normalized scores (1–100)

- **Tool use: 71/100.** TB2.1 53.2 is solid mid-upper; capped by missing Tau3/GDPval/Claw and TB well below 85%+ frontier.
- **Reasoning: 88/100.** GPQA 87.4 plus MMLU-Pro 87.7 and MMMU-Pro 84.2 is near-frontier; capped just below 90 with no HLE.
- **Context window: 95/100.** 1M total meets >=1M band with 66k output; capped at low end with no MRCR/RULER evidence.
- **Multimodal: 80/100.** Text/image/video in covers video band; capped without audio in or non-text out.
- **Coding: 85/100.** SWE-Verified 78.8 plus LiveCodeBench 86.0 and Vibe 25.6 is strong frontier-adjacent; capped by no DeepSWE/SciCode.
- **Cost efficiency: 88/100.** $0.50/$3.00 per 1M undercuts frontier ~30x; capped below $0 free-tier 100 and below cheaper Qwen 3.5 Plus.
- **Overall Score: 84/100.** Mean of five quality dims (71+88+95+80+85)/5=83.8; best-fit for cheap agentic coding at 1M.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
