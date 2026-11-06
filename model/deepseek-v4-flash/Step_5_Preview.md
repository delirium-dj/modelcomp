# DeepSeek-V4-Flash — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-v4-flash`, weights `deepseek-ai/DeepSeek-V4-Flash`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash (part of the DeepSeek-V4 preview series, technical report arXiv:2606.19348, published 2026-04-26)
- **Short description:** The small member of DeepSeek's V4 duo (Pro: 1.6T/49B; Flash: 284B/13B) — an MIT open-weights MoE with a 1M-token context, built for "highly efficient million-token context intelligence." Its hybrid Compressed Sparse Attention + Heavily Compressed Attention design needs only 27% of V3.2's single-token FLOPs and 10% of its KV cache at 1M context; training adds Manifold-Constrained Hyper-Connections (mHC) and the Muon optimizer, on 32T+ tokens. Post-training is two-stage: domain-expert cultivation (SFT + GRPO RL) then on-policy distillation into one model. Flash ships three effort modes (non-think / Think High / Think Max), and **V4-Flash-Max matches the Pro's reasoning** with a larger budget. The **0731 refresh (304B) is a substantial leap** over the April 0423 numbers first reported here — official Terminal-Bench 2.1 went from 56.9% (TB 2.0) to 82.7%, Vals AI measured SWE-bench Verified at 88.8%, and ARC Prize semi-private results landed at ARC-AGI-1 89.0% / ARC-AGI-2 61.4%. (A separate, API-only experimental sibling, `deepseek-v4-flash-vision-exp` — released 2026-08-21, text+image in — is covered under "Additional variant" below.)
- **Provider / access:** DeepSeek API, Hugging Face / ModelScope open weights (MIT; FP4+FP8 mixed instruct, FP8 base), vLLM/SGLang, 128+ community quantizations; ~966k HF downloads/month.
- **Release:** 2026-04-23 (V4-Flash-0423; -0731 refresh at 304B; Vision-Exp 2026-08-21).
- **Context window:** 1M tokens (max output 1M; Think Max recommends ≥384K context).
- **Modalities:** Text in → text out (mainline); non-think / high / max reasoning modes; tool calling; JSON output; dedicated `encoding` package instead of a Jinja chat template.
- **Pricing (as of 2026-10-19):** mainline weights MIT/free to self-host; hosted routes for the series track ~$0.15/M input, $0.60/M output on the official DeepSeek API (Vision-Exp rate card; third parties from $0.08/$0.20). A third-party coding benchmark measured ~$0.13 per 1,000 coding tasks for V4-Flash.
- **Architecture:** MoE with CSA+HCA hybrid attention, mHC, Muon optimizer; Flash = 284B total / 13B active (-0731: 304B).

### Raw benchmarks found

Instruct model, mode comparison (Vendor, 0423 card; Flash non-think / High / Max):

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

Agentic (0423):

- Terminal Bench 2.0: 49.1 / 56.6 / **56.9** (GPT-5.4 xHigh 75.1 best)
- SWE-bench Verified: 73.7 / 78.6 / **79.0** (Pro-Max: 80.6; Opus 4.6 Max: 80.8 best)
- SWE-bench Pro: 49.1 / 52.3 / **52.6** (Pro-Max: 55.4); SWE-Multilingual: 69.7 / 70.2 / **73.3**
- BrowseComp: — / 53.5 / **73.2** (Pro-Max: 83.4)
- HLE w/ tools: — / 40.3 / **45.1**; MCPAtlas public: 64.0 / 67.4 / **69.0** (Pro-Max: 73.6, vs Opus 4.6 Max 73.8)
- GDPval-AA (Elo): **1395** (Max; Pro-Max: 1554; GPT-5.4 xHigh 1674 best)
- Toolathlon: 40.7 / 43.5 / **47.8** (Pro-Max: 51.8)
- SkillsBench v1.1: **44.7** (third-party leaderboard); Long-Horizon Terminal-Bench: 2 tasks solved (3 h runs, Terminus 2)

**New in the 2026-10-19 re-run — the 0731 refresh (official DeepSeek update page, via BenchLM's 56-row aggregate):**

- Terminal-Bench 2.1: **82.7%** (0731; vs 56.9% on TB 2.0 in the original card — Vals AI's independent TB 2.1 run reads **67.0%**)
- Toolathlon-Verified: **70.3%**; CyberGym: **76.7%**; NL2Repo: **54.2%**; DeepSWE: **54.4%**; DSBench-FullStack: **68.7%**; DSBench-Hard: **59.6%**
- Agents' Last Exam: **25.2%**; AutomationBench: **25.1%** (both weak)

**New independent measurements (2026-10-19 re-run):**

- Vals AI: SWE-bench Verified **88.8%**, LiveCodeBench **87.3%**, Terminal-Bench 2.1 **67.0%**, GPQA Diamond **89.9%**, MMLU-Pro **86.2%**
- ARC Prize (published semi-private results): ARC-AGI-1 **89.0%**, ARC-AGI-2 **61.4%**
- Artificial Analysis: Intelligence Index **34.3%**, AA-GPQA Diamond **90.8%**, AA-HLE **38.6%**, AA-LCR **79.7%**, CritPt **16.6%**, AA-SciCode **50.3%**, AA Coding Index **69.1%**, AA Agentic Index **41.7%**, GDPval-AA normalized **46.7%**; AA-Omniscience Index **−14.3** (accuracy 40.4%, hallucination rate **91.7%** — extremely weak knowledge reliability)
- VulcanBench v3: **88.4%**; OpenHarmony Bench: **53.8%**; Design Arena Website: **1208**; MazeBench: **0%**

Base-model checkpoints: MMLU 88.7 / MMLU-Pro 68.3 / LongBench-V2 44.7 / HumanEval 69.5 / MATH 57.4 (vs V3.2-Base and V4-Pro-Base in the card).

Additional variant — DeepSeek-V4-Flash-Vision-Exp (API-only, image input, third-party/vendor evals via llmboard):

- Terminal-Bench 2.1: **83.9%**; NL2Repo: **57.7%**; DeepSWE: **59.3%**; DSBench-Hard: 63.6%
- Agents' Last Exam: 27.3%; AutomationBench: 25.7%; ZEROBench: 0.35
- LiveBench (AA): reasoning 85.40, math 87.81, instruction 70.96
- LLMBoard aggregate: **72.57**

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **four scores raised on new evidence — Tool use 64 → 72, Reasoning 82 → 83, Coding 72 → 78, Overall 64 → 67** (Context 90, Multimodal 12, Cost 97 unchanged). The driver is the 0731 refresh measured by independent harnesses, not vendor self-reports alone: Vals AI's SWE-bench Verified 88.8%, ARC Prize's ARC-AGI-2 61.4% / ARC-AGI-1 89.0%, and AA's GPQA 90.8% / HLE 38.6% / Agentic Index 41.7% all sit well above the 0423-era numbers this report was built on. What still caps each dimension: Tool use at 72 (GDPval normalized 46.7%, Agents' Last Exam 25.2%, AutomationBench 25.1%), Reasoning at 83 (composite Index 34.3% vs 60+ frontier, and a 91.7% hallucination rate), Coding at 78 (DeepSWE 54.4% and SWE-bench Pro 52.6% vs the 74%/85% frontier references).

- **Tool use: 72/100.** The 0731 numbers transform the picture: Terminal-Bench 2.1 82.7% (official) / 67.0% (Vals), Toolathlon-Verified 70.3%, CyberGym 76.7%, MCPAtlas 69.0%, BrowseComp 73.2% and HLE-with-tools 45.1% are now solidly upper-mid-band; still short of frontier on GDPval (normalized 46.7%, Elo 1395 vs 1750+), Agents' Last Exam 25.2% and AutomationBench 25.1%.
- **Reasoning: 83/100.** AA-GPQA Diamond 90.8% clears the frontier reference, AA-HLE 38.6% sits just under the 40% bar, and ARC-AGI-1 89.0% / ARC-AGI-2 61.4% are genuine frontier signals; HLE 34.8%, SimpleQA 34.1%, the composite Index of 34.3% and the 91.7% hallucination rate hold it just below the top band.
- **Context window: 90/100.** A genuine 1M-token window in the ≥1M range with the best long-context evidence in its class at 13B active — MRCR 1M 78.7% MMR, CorpusQA 60.5% at 1M, and the new AA-LCR 79.7% — but retrieval is not the ≥98% at 512K+ the top band requires (Opus 4.6 Max scores 92.9% MRCR).
- **Multimodal: 12/100.** The mainline open-weights model is text-only (text in → text out), the methodology's 10–20 band; vision lives only in the separate API-only Vision-Exp variant (covered in `deepseek-v4-vision-exp`).
- **Coding: 78/100.** Vals SWE-bench Verified 88.8%, LiveCodeBench 87.3–91.6%, VulcanBench 88.4%, Terminal-Bench 2.1 67.0–82.7% and SWE-Multilingual 73.3% are now near-frontier open-weights coding; DeepSWE 54.4%, SWE-bench Pro 52.6% and DSBench-Hard 59.6% are what keep it out of the 85+ tier.
- **Cost efficiency: 97/100.** 13B active parameters at ~$0.15/$0.60 per million tokens (third parties from $0.08/$0.20), MIT weights, ~$0.13 per 1,000 measured coding tasks, and the cheapest serious 1M-context option in the market — squarely in the methodology's ~$0.1/$0.2 ≈ 97–99 tier.
- **Overall Score: 67/100.** Mean of 72/83/90/12/78 = 67.0 → 67. Best-fit recommendation: the efficiency champion of the V4 series — near-frontier reasoning, coding and long-context from 13B active parameters at flash-model prices with MIT weights; text-only (pair with Vision-Exp for images) and hallucination-prone on obscure facts.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — BenchLM's 56-row aggregate (0731 official update-page numbers, Vals AI runs, ARC Prize semi-private results, AA per-benchmark rows incl. Omniscience) plus the DeepSeek Hugging Face model card + arXiv:2606.19348 and llmboard.ai for the Vision-Exp variant; original run used the same vendor card/report plus third-party coding-cost measurements. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a next file next to this one, e.g. `DeepSeek_V4_1_Flash.md`, using the same headings.
