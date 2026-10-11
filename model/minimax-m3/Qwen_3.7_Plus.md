# MiniMax M3 — findings by Qwen 3.7 Plus

- Source: MiniMax/MiniMax-M3 (`minimax-ai/minimax-m3`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's flagship open-weight multimodal MoE model released June 1, 2026. ~230B total / 9.8B active parameters (some sources cite 428B total). First MiniMax M-series model with native multimodality (image + video input) and 1M context, over text-only M2.7. AA Intelligence Index 55 — leads open-weight peers Kimi K2.6 (54) and MiMo-V2.5-Pro (54). SWE-bench Verified 80.5% (self-reported) / 75.0% (Vals AI independent). Terminal-Bench 2.1 66.0% (self-reported) / 53.6% (Vals AI). Native multimodal: MMMU-Pro 78.6%, VideoMMMU 84.6%, Video-MME 85.4%, OmniDocBench 91.6%. Novel MSA (MiniMax Sparse Attention) architecture achieves 1/20 per-token compute at 1M context vs. prior gen. GPQA Diamond 92.9% is strong. HLE 39% is moderate. AA-Omniscience Index 1.4% is extremely low — model attempts only 30.9% of questions (heavy abstention: 16.1% hallucination rate, 15.0% accuracy). GDPval-AA ~1670 Elo (level with Claude Sonnet 4.6). Remarkably cheap at $0.30/$1.20 per 1M tokens.
- **Provider / access:** MiniMax first-party API, SiliconFlow, GMI, Novita, OpenRouter. Open weights planned (commercially restricted license expected, similar to M2.7).
- **Release / knowledge:** Released 2026-06-01; knowledge cutoff not precisely documented.
- **IDs:** `minimax-ai/minimax-m3` (MiniMax API, OpenRouter).
- **Context window:** 1,048,576 tokens (1M) / 512K output. Pricing doubles above 512K input.
- **Modalities:** Text, image, video in; text out. Natively multimodal via interleaved training from step 0. Can operate desktop computer (OSWorld-Verified 70.1%).
- **Pricing (as of 2026-10-10):** $0.30 in / $1.20 out per 1M tokens (≤512K); $0.60/$2.40 (512K–1M). Among cheapest frontier-class models.

### Raw benchmarks found

Agent / tool use:

- τ³-Banking: **15.3%** (AA — very low)
- AA Agentic Index: **30.8%** (AA — low)
- GDPval-AA: **1245 Elo** (AA; MiniMax reports ~1670 on internal GPDval-Rubrics)
- AA-Briefcase: **1091 Elo** (AA — modest)
- MCP Atlas: **74.2%** (MiniMax — strong tool use)
- BankerToolBench: **76.1%** (MiniMax — strong financial tool use)
- BrowseComp: **83.5%** (MiniMax — strong web browsing)
- OSWorld-Verified: **70.1%** (MiniMax — strong computer use; 68.7% → 70.1% at 200 max steps)
- Claw-Eval: **74.5%** (MiniMax — Pass³ score)
- AA Harvey LAB v1.0: **88.4%** (AA — strong legal agentic work)
- AA AutomationBench: **21.3%** (AA — low)
- AA EnterpriseOps-Gym: **32.1%** (AA — low)
- AA Tau3 Banking: **15.3%** (AA — very low)
- OSWorld 2.0: **4.6%** (OSWorld 2.0 paper — very low)
- Terminal-Bench 4.0: **2.0%** (AA — very low on hardest version)

Coding:

- SWE-bench Verified: **80.5%** (MiniMax self-reported; Vals AI independent: 75.0%)
- SWE-bench Pro: **59.0%** (MiniMax — frontier-class)
- Terminal-Bench 2.1: **66.0%** (MiniMax; Vals AI: 53.6%; AA: 65.2%)
- AA Coding Index: **58.6** (AA)
- AA-SciCode: **47.1%** (AA)
- KernelBench Hard: **28.8%** (MiniMax — low)
- NL2Repo: **42.1%** (MiniMax)
- LiveCodeBench (Vals): **82.2%** (Vals AI — strong)
- SWE-fficiency: **34.8%** (MiniMax)
- VIBE V2: **50.1%** (MiniMax)
- SVG-Bench: **63.7%** (MiniMax)

Multimodal:

- MMMU-Pro: **78.6%** (AA; MiniMax: 78.1% — level with GPT-5.5 xhigh 79.9%)
- VideoMMMU: **84.6%** (MiniMax — strong video understanding)
- Video-MME (with subtitle): **85.4%** (MiniMax — strong)
- OmniDocBench 1.5: **91.6%** (MiniMax — excellent document understanding)
- OfficeQA Pro: **45.1%** (MiniMax — moderate office document tasks)
- Design Arena Website: **1263 Elo** (OpenRouter)

Reasoning / knowledge:

- AA Intelligence Index: **55** (AA — leads open-weight peers; vs. M2.7's 50, +5 points)
- GPQA Diamond: **92.9%** (AA; Vals: 92.7%; MiniMax blog: 93%)
- HLE: **39.0%** (AA — moderate; vs. M2.7's 28%, +11 points)
- AA-LCR: **83.0%** (AA — strong long-context reasoning; confirms 1M context utility)
- CritPt: **3.7%** (AA — low; vs. M2.7's 1%, improvement)
- IFBench: **82.9%** (AA — strong instruction following; vs. M2.7's 76%, +7)
- MMLU-Pro (Vals): **84.2%** (Vals AI)
- USAMO 2026: **85.7%** (MiniMax — strong math)
- AA-Omniscience Index: **1.4%** (AA — extremely low)
- AA-Omniscience Accuracy: **16.7%** (AA — very low; model attempts only 30.9% of questions)
- AA-Omniscience Hallucination Rate: **18.4%** (AA — low hallucination when attempted, but due to heavy abstention)

Long context / efficiency:

- Context window: **1M** tokens (1,048,576)
- MSA architecture: **1/20 per-token compute** at 1M context vs. prior gen
- Prefill speedup: **>9×** over previous model; decode speedup: **>15×**
- Intelligence Index token usage: **~91M output tokens** (~81M reasoning) — similar to M2.7's ~87M
- Pricing: **$0.30/$1.20** per 1M (≤512K) — among cheapest frontier-class models

### Normalized scores (1–100)

- **Tool use: 55/100.** Highly split profile. BrowseComp 83.5% is excellent. MCP Atlas 74.2% and BankerToolBench 76.1% are strong. OSWorld-Verified 70.1% is strong (computer use). AA Harvey LAB 88.4% is excellent. However, τ³-Banking 15.3% is very low. AA Agentic Index 30.8% is low. AA-Briefcase 1091 Elo is modest. OSWorld 2.0 4.6% is very low. Terminal-Bench 4.0 2.0% is very low. The model excels at specialized tool tasks (browsing, legal, finance, computer use) but struggles on standardized agentic evals.
- **Reasoning: 62/100.** AA Intelligence Index 55 leads open-weight peers. GPQA Diamond 92.9% is strong. HLE 39% is moderate. IFBench 82.9% is strong (instruction following). USAMO 2026 85.7% is strong (math). AA-LCR 83% confirms effective long-context reasoning. However, CritPt 3.7% is low. AA-Omniscience Accuracy 16.7% is very low (heavy abstention — only 30.9% of questions attempted). The reasoning profile is solid for open-weight but trails closed-source frontier models.
- **Context window: 92/100.** 1M tokens with 512K output — among the largest. MSA architecture makes the 1M context efficient (1/20 per-token compute vs. prior gen). AA-LCR 83% confirms the long context is actually usable, not just a headline number. Pricing doubles above 512K but remains cheap. One of the best context windows available.
- **Multimodal: 82/100.** Native multimodal from step 0 (interleaved training). MMMU-Pro 78.6% is strong (level with GPT-5.5). VideoMMMU 84.6% and Video-MME 85.4% are strong video understanding. OmniDocBench 91.6% is excellent document understanding. OSWorld-Verified 70.1% demonstrates computer-use capability. Only limitation: no audio/speech input. Among the strongest multimodal profiles in this price tier.
- **Coding: 60/100.** SWE-bench Verified 80.5% (self-reported) / 75.0% (Vals AI) is strong. SWE-bench Pro 59% is frontier-class. Terminal-Bench 2.1 66% is strong. LiveCodeBench 82.2% (Vals) is excellent. However, AA Coding Index 58.6 is moderate. KernelBench Hard 28.8% is low. SWE-fficiency 34.8% is low. NL2Repo 42.1% is moderate. Notable discrepancy between self-reported and independent scores (SWE-bench: 80.5% vs. 75.0%; Terminal-Bench: 66% vs. 53.6%). The coding profile is strong but not frontier-leading.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M tokens is 5–10× cheaper than comparable frontier models ($2–$5/$6–$15 typical). Even at the long-context tier ($0.60/$2.40), still dramatically cheaper. Open weights (planned, commercially restricted). MSA architecture reduces compute costs. The model delivers frontier-class coding and multimodal at a fraction of the cost. Among the best value propositions available.
- **Overall Score: 70.2/100.** Mean of five quality dims: (55 + 62 + 92 + 82 + 60) / 5 = 70.2. MiniMax M3 is MiniMax's open-weight multimodal flagship. Key strengths: 1M context with efficient MSA architecture (1/20 compute), native multimodal (video/image/document, MMMU-Pro 78.6%, VideoMMMU 84.6%, OmniDocBench 91.6%), SWE-bench Verified 80.5% / 75% (Vals), Terminal-Bench 2.1 66%, AA Intelligence Index 55 (leads open-weight peers), GPQA Diamond 92.9%, BrowseComp 83.5%, OSWorld-Verified 70.1% (computer use), remarkably cheap ($0.30/$1.20), open weights planned. Key weaknesses: τ³-Banking 15.3% (very low), AA Agentic Index 30.8% (low), AA-Omniscience Index 1.4% (extremely low — heavy abstention at 30.9% attempt rate), AA-Omniscience Accuracy 16.7% (very low), OSWorld 2.0 4.6% (very low), Terminal-Bench 4.0 2.0% (very low), self-reported vs. independent benchmark discrepancies (SWE-bench 80.5% vs. 75.0%, Terminal-Bench 66% vs. 53.6%), no audio input, commercially restricted license expected. Best fit for: cost-sensitive teams needing frontier-class coding and multimodal, long-context document/video analysis (1M + OmniDocBench 91.6%), computer-use agentic workflows (OSWorld 70.1%), teams wanting open weights for customization, video understanding pipelines. Not ideal for: standardized agentic benchmarks (τ³-Banking, AA Agentic Index weak), knowledge-intensive tasks requiring high recall (AA-Omniscience extremely low due to abstention), teams needing permissive open-source licensing.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across MiniMax official blog, Artificial Analysis, BenchLM, Vals AI, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
