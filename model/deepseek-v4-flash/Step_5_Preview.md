# DeepSeek-V4-Flash — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-v4-flash`, weights `deepseek-ai/DeepSeek-V4-Flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash (part of the DeepSeek-V4 preview series, technical report arXiv:2606.19348, published 2026-04-26)
- **Short description:** The small member of DeepSeek's V4 duo (Pro: 1.6T/49B; Flash: 284B/13B) — an MIT open-weights MoE with a 1M-token context, built for "highly efficient million-token context intelligence." Its hybrid Compressed Sparse Attention + Heavily Compressed Attention design needs only 27% of V3.2's single-token FLOPs and 10% of its KV cache at 1M context; training adds Manifold-Constrained Hyper-Connections (mHC) and the Muon optimizer, on 32T+ tokens. Post-training is two-stage: domain-expert cultivation (SFT + GRPO RL) then on-policy distillation into one model. Flash ships three effort modes (non-think / Think High / Think Max), and **V4-Flash-Max matches the Pro's reasoning** with a larger budget — near-frontier quality from a 13B-active model. (A separate, API-only experimental sibling, `deepseek-v4-flash-vision-exp` — released 2026-08-21, text+image in — is covered under "Additional variant" below.)
- **Provider / access:** DeepSeek API, Hugging Face / ModelScope open weights (MIT; FP4+FP8 mixed instruct, FP8 base), vLLM/SGLang, 128+ community quantizations; ~966k HF downloads/month.
- **Release:** 2026-04-23 (V4-Flash-0423; -0731 refresh at 304B; Vision-Exp 2026-08-21).
- **Context window:** 1M tokens (max output 1M; Think Max recommends ≥384K context).
- **Modalities:** Text in → text out (mainline); non-think / high / max reasoning modes; tool calling; JSON output; dedicated `encoding` package instead of a Jinja chat template.
- **Pricing (as of 2026-10-09):** mainline weights MIT/free to self-host; hosted routes for the series track ~$0.15/M input, $0.60/M output on the official DeepSeek API (Vision-Exp rate card; third parties from $0.08/$0.20). A third-party coding benchmark measured ~$0.13 per 1,000 coding tasks for V4-Flash.
- **Architecture:** MoE with CSA+HCA hybrid attention, mHC, Muon optimizer; Flash = 284B total / 13B active (-0731: 304B).

### Raw benchmarks found

Instruct model, mode comparison (Vendor; Flash non-think / High / Max):

Knowledge & reasoning:

- MMLU-Pro: 83.0 / 86.4 / **86.2**
- SimpleQA-Verified: 23.1 / 28.9 / **34.1**; Chinese-SimpleQA: 71.5 / 73.2 / **78.9**
- GPQA Diamond: 71.2 / 87.4 / **88.1** (Pro-Max: 90.1)
- HLE: 8.1 / 29.4 / **34.8** (Pro-Max: 37.7; Opus 4.6 Max: 40.0)
- LiveCodeBench: 55.2 / 88.4 / **91.6** (Pro-Max: 93.5 — best in the vendor table)
- Codeforces rating: — / 2816 / **3052** (Pro-Max: 3206, best in table)
- HMMT Feb 2026: 40.8 / 91.9 / **94.8**; IMOAnswerBench: 41.9 / 85.1 / **88.4**

Long context:

- MRCR 1M (MMR): 37.5 / 76.9 / **78.7** (Pro-Max: 83.5; Opus 4.6 Max: 92.9 best)
- CorpusQA 1M: 15.5 / 59.3 / **60.5** (Pro-Max: 62.0; Opus 4.6 Max: 71.7 best)

Agentic:

- Terminal Bench 2.0: 49.1 / 56.6 / **56.9** (GPT-5.4 xHigh 75.1 best)
- SWE-bench Verified: 73.7 / 78.6 / **79.0** (Pro-Max: 80.6; Opus 4.6 Max: 80.8 best)
- SWE-bench Pro: 49.1 / 52.3 / **52.6** (Pro-Max: 55.4); SWE-Multilingual: 69.7 / 70.2 / **73.3**
- BrowseComp: — / 53.5 / **73.2** (Pro-Max: 83.4)
- HLE w/ tools: — / 40.3 / **45.1**; MCPAtlas public: 64.0 / 67.4 / **69.0** (Pro-Max: 73.6, vs Opus 4.6 Max 73.8)
- GDPval-AA (Elo): **1395** (Max; Pro-Max: 1554; GPT-5.4 xHigh 1674 best)
- Toolathlon: 40.7 / 43.5 / **47.8** (Pro-Max: 51.8)
- SkillsBench v1.1: **44.7** (third-party leaderboard); Long-Horizon Terminal-Bench: 2 tasks solved (3 h runs, Terminus 2)

Base-model checkpoints: MMLU 88.7 / MMLU-Pro 68.3 / LongBench-V2 44.7 / HumanEval 69.5 / MATH 57.4 (vs V3.2-Base and V4-Pro-Base in the card).

Additional variant — DeepSeek-V4-Flash-Vision-Exp (API-only, image input, third-party/vendor evals via llmboard):

- Terminal-Bench 2.1: **83.9%**; NL2Repo: **57.7%**; DeepSWE: **59.3%**; DSBench-Hard: 63.6%
- Agents' Last Exam: 27.3%; AutomationBench: 25.7%; ZEROBench: 0.35
- LiveBench (AA): reasoning 85.40, math 87.81, instruction 70.96
- LLMBoard aggregate: **72.57**

### Normalized scores (1–100)

- **Tool use: 64/100.** MCPAtlas 69.0% (max), BrowseComp 73.2% and HLE-with-tools 45.1% are upper-mid-band agentic results from a 13B-active model; below the frontier band on Toolathlon 47.8% (Pro-Max 51.8%), GDPval Elo 1395 (vs 1750+ frontier) and TB 2.0 56.9%.
- **Reasoning: 82/100.** GPQA Diamond 88.1%, LiveCodeBench 91.6%, HMMT 94.8%, IMOAnswerBench 88.4% and Codeforces 3052 are all near the frontier band (GPQA 90%+/HLE 40%+); HLE 34.8% and SimpleQA 34.1% (hallucination-prone on obscure facts) hold it just under.
- **Context window: 90/100.** A genuine 1M-token window in the 500K–1M/≥1M range with the best long-context evidence in its class at 13B active — MRCR 1M at 78.7% MMR and CorpusQA 60.5% at 1M — but retrieval is not the ≥98% at 512K+ that the top band requires (Opus 4.6 Max scores 92.9% MRCR for comparison).
- **Multimodal: 12/100.** The mainline open-weights model is text-only (text in → text out), the methodology's 10–20 band; vision lives only in the separate API-only Vision-Exp variant (covered in `deepseek-v4-vision-exp`).
- **Coding: 72/100.** SWE-bench Verified 79.0%, SWE-Multilingual 73.3%, LiveCodeBench 91.6% and SkillsBench 44.7% are strong open-weights coding; Terminal-Bench 2.0 56.9% and SWE-bench Pro 52.6% (Pro-Max reaches 55.4%) keep it below the frontier band, though it beats GPT-5.5 on SWE-Pro in DeepSeek's own comparison.
- **Cost efficiency: 97/100.** 13B active parameters at ~$0.15/$0.60 per million tokens (third parties from $0.08/$0.20), MIT weights, ~$0.13 per 1,000 measured coding tasks, and the cheapest serious 1M-context option in the market — squarely in the methodology's ~$0.1/$0.2 ≈ 97–99 tier.
- **Overall Score: 64/100.** Best-fit recommendation: the efficiency champion of the V4 series — Pro-class reasoning from 13B active parameters with a real 1M window at flash-model prices; text-only, so pair it with Vision-Exp or another vision model for image work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (DeepSeek Hugging Face model card + arXiv:2606.19348 abstract, llmboard.ai aggregated provider/benchmark data incl. the Vision-Exp variant, third-party coding-cost measurements); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V5.md`, using the same headings.
