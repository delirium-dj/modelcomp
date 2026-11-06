# DeepSeek V4 Pro 0813 — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4-Pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro 0813. The **pro-reasoning (0813)** variant of the V4 Pro family, and the highest-scored DeepSeek in BenchLM's corpus at **62.65/100, #42 of 1,015** — though note it scores *below* its own Flash sibling's rank position differently and *above* DeepSeek V3.2 (50.05) by a wide margin. BenchLM's canonical slug is `deepseek-v4-pro-0813`.
- **Short description:** The **best-evidenced model in this research series — 61 benchmarks** — with a profile that is strong across the board rather than exceptional in one place: τ²-bench 96.2%, SWE-bench 96.4% (Vals), LiveCodeBench 93.5%, AA-LCR 80.3%, ARC-AGI-1 90.0%, MRCR 1M 83.5%, and an AA Intelligence Index of 53.2% (the highest composite in this series). Its one serious defect is **AA-Omniscience hallucination 94.1%** with an index of 0.8.
- **Provider / access:** Weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Pro`, **open weight**, incl. the full DeepSeek-V4 technical report), DeepSeek's own API, and OpenCode Zen. Self-hosting available.
- **Release / knowledge:** release date not restated; the 0813 tag is DeepSeek's 2026-08-13 revision of the V4 Pro line. **Knowledge cutoff not disclosed.**
- **IDs:** `deepseek-ai/DeepSeek-V4-Pro` (Hugging Face); `deepseek/deepseek-v4-pro` (Openrouter); `deepseek/deepseek-v4-pro-0813` (Vals, ARC).
- **Context window:** **1M tokens** (BenchLM), with **MRCR 1M 83.5% and CorpusQA 1M 62.0%** measured at that depth — the strongest long-context retrieval evidence in this research series.
- **Modalities:** **text in; text out** as the primary mode — the multimodal table carries only a single Design Arena row (1,258 Elo) and no image benchmark, so this is effectively a **text-only reasoning model** with an unmeasured visual side.
- **Pricing (as of 2026-11-05):** **not published in the sources checked** — the BenchLM row carries no rate card and the repo meta.json's pricing was not confirmed on the card. Scored conservatively and flagged as unverified; **open weights** provide the self-hosting escape.
- **Architecture:** **open weight** MoE; parameter count undisclosed in the sources checked.

### Raw benchmarks found

DeepSeek's own DeepSeek-V4 technical report and the V4 Pro 0813 API-update comparison table are the primary source (so those rows are **vendor-published**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Mistral AI, OpenHarmony and Openrouter supplying independent rows. 61 benchmarks total — the deepest evidence base in this research series.

Agent / tool use — **strong, with one enormous spread**:

- **τ²-bench: 96.2%** [AA] — the strongest τ²-bench figure in this research series
- **Terminal-Bench 2.1: 87.9%** (vendor) / **54.7%** (Vals) — a **33.2-point vendor-vs-independent spread, the largest measured anywhere in this research series**
- BrowseComp: **83.4%**; **MCP Atlas: 73.6%**; Toolathlon-Verified: **74.1%**; Toolathlon: 51.8%
- GDPval-AA: **1,306 Elo** (vendor) / **54.5% normalized** [AA]
- **AA Agentic Index: 49.6%**; AA EnterpriseOps-Gym: 49.6%; APEX-Agents-AA: 24.3%; AA Tau3 Banking: 39.6%
- CyberGym: **83.3%**; AutomationBench: 31.8%; Agents' Last Exam: 25.7%; HLE w/ tools: 60.0%; Finch: 67.4%
- **OSWorld, Toolathlon-Verified on the newer harness, Terminal-Bench 4.0, Claw-Eval, MazeBench, ALE, JobBench: no verified public score found**

Reasoning / knowledge — **the strongest composite in this research series**:

- **AA Intelligence Index: 53.2%** — the highest composite measured in this research series
- **GPQA Diamond: 90.1%** (vendor) / **92.8%** [AA] / 92.4% (Vals) — clears the 90%+ reference on all three, with AA measuring above the vendor
- HLE: **42.7%** (vendor) / **AA-HLE 41.0%** — clears the 40%+ frontier reference on both
- **AA-Omniscience: index 0.8, accuracy 49.1%, hallucination rate 94.1%** — an index of 0.8 means almost exactly as many incorrect as correct answers, on a 94.1% hallucination rate
- **AA-LCR: 80.3%**; **MRCR 1M: 83.5%**; **CorpusQA 1M: 62.0%** — the best 1M-depth retrieval evidence here
- **ARC-AGI-1: 90.0%**; **ARC-AGI-2: 61.3%** [ARC Prize]; CritPt: **18.0%**; AA-IFBench: 76.5%
- MMLU-Pro: 87.5% (vendor) / 87.0% (Vals); Chinese-SimpleQA: 84.4%
- **HMMT Feb 2026: 95.2%**; IMOAnswerBench: **89.8%**; Apex Shortlist: 90.2%; Apex: 38.3%
- **FrontierMath: no verified public score found**

Coding — **strong and unusually corroborated**:

- **SWE-bench Verified: 80.6%** (vendor) / **96.4%** (Vals) — a **15.8-point gap in the unfavourable direction**, i.e. the independent run scores higher, which is unusual and worth noting
- **LiveCodeBench Pass@1-COT: 93.5%** (vendor) / **87.5%** (Vals)
- **SWE-bench Pro: 55.4%**; SWE Multilingual: 76.2%; NL2Repo: 61.5%; DSBench-FullStack: 71.1%; DSBench-Hard: 67.2%
- **AA Coding Index: 68.8%** — just under the 70% frontier reference; **AA-SciCode: 51.0%** — under the 55% reference
- **DeepSWE: 62.7%** — 11.3 points under the 74% reference; Vibe Code Bench: 49.93%; OpenHarmony Bench: 59.0%; Codeforces: 3,206
- **FrontierCode, Terminal-Bench 4.0: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,258 Elo**
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 72/100.** Above the methodology's mid band. **τ²-bench 96.2% [AA] is the strongest in this research series**, with BrowseComp 83.4%, MCP Atlas 73.6%, Toolathlon-Verified 74.1%, CyberGym 83.3% and GDPval-AA 54.5% corroborating a genuinely broad agentic base. Capped because **Terminal-Bench 2.1 is 87.9% (vendor) against only 54.7% (Vals) — a 33.2-point spread, the largest in this research series — AA Agentic Index is 49.6%, AA Tau3 Banking 39.6%, APEX-Agents-AA 24.3%, and OSWorld, Claw-Eval, MazeBench, ALE and JobBench are entirely absent.**
- **Reasoning: 78/100.** Above the methodology's mid band and the strongest dimension. **The AA Intelligence Index of 53.2% is the highest composite in this research series**, GPQA Diamond clears 90% on all three harnesses (92.8% [AA] above the vendor's 90.1%), AA-HLE 41.0% clears the 40% reference, and **MRCR 1M 83.5% / CorpusQA 1M 62.0% / AA-LCR 80.3%** give the best long-context reasoning evidence here, with ARC-AGI-1 90.0%, HMMT 95.2% and IMOAnswerBench 89.8% supporting. Capped by **AA-Omniscience index 0.8 with a 94.1% hallucination rate**, CritPt 18.0%, Apex 38.3%, ARC-AGI-2 61.3%, and no FrontierMath figure.
- **Context window: 99/100.** 1M-token tier with the **strongest retrieval evidence in this research series — MRCR 1M 83.5% and CorpusQA 1M 62.0% both measured at full depth**, plus AA-LCR 80.3%. Scored at 99 rather than 100 only because no max-output limit is published and no long-context pricing tier was found.
- **Multimodal: 55/100.** **Effectively unmeasured.** Text is the demonstrated mode; the only visual row is a Design Arena 1,258-Elo website score, and MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no figure at all. Scored at the bottom of the methodology's 60–70 "+image in" band, and below it, because there is **no evidence of image input capability whatsoever** in the sources checked — this is a text-only reasoning model until shown otherwise, and it is flagged as such rather than assumed.
- **Coding: 78/100.** Above the methodology's mid band. **SWE-bench Verified 80.6% (vendor) and LiveCodeBench 93.5%/87.5%** are strong, with SWE-bench Pro 55.4%, SWE Multilingual 76.2%, DSBench-FullStack 71.1% and Vibe Code Bench 49.93% corroborating. Note the **15.8-point SWE-bench gap runs in the favourable direction (Vals 96.4% above the vendor's 80.6%)**, which is the reverse of the usual pattern. Capped by **AA Coding Index 68.8%** (1.2 points under the 70% reference), **AA-SciCode 51.0%** (under 55%), **DeepSWE 62.7%** (11.3 under 74%), and no FrontierCode or Terminal-Bench 4.0 figure.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked** — BenchLM's row carries no pricing and the repo meta.json's figures were not confirmed on the card, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60, on the methodology's ~$3/$15 anchor, as a neutral mid-band default for an open-weight model whose API price is unverified. **Explicitly an estimate, not a measurement** — the offsetting fact is that weights are open, so self-hosting bypasses the rate card, and DeepSeek's flagship API pricing is historically well below the Claude/GPT tier.
- **Overall Score: 76/100.** (72 + 78 + 99 + 55 + 78) / 5 = 76.4 → **76** → **76**. Recommendation: **the best-evidenced model in this research series (61 benchmarks) and the strongest long-context reasoner** — MRCR 1M 83.5%, AA-LCR 80.3%, AA Intelligence Index 53.2%, GPQA Diamond 92.8%, ARC-AGI-1 90.0% and τ²-bench 96.2%, at 1M context with open weights. Three cautions: **its 94.1% hallucination rate means it is unsafe as a factual assistant** despite the near-zero index; **the 33.2-point Terminal-Bench vendor-vs-Vals spread** means its agentic-coding claim must be re-verified on your own harness; and **it is effectively a text-only model**, with no measured visual benchmark of any kind.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using DeepSeek's DeepSeek-V4 technical report and the V4 Pro 0813 API-update comparison table as the primary source (so those rows are vendor-published and labelled as such), cross-checked against BenchLM's **61-row catalog — the deepest evidence base in this research series** — which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Mistral AI, OpenHarmony and Openrouter. Conflicting figures are listed side by side — Terminal-Bench 2.1 87.9% (vendor) vs 54.7% (Vals), SWE-bench Verified 80.6% (vendor) vs 96.4% (Vals), GPQA Diamond 90.1%/92.8% (AA)/92.4% (Vals) — rather than averaged, and both the 33.2-point spread (the series' largest) and the unusually favourable-direction SWE-bench gap are flagged explicitly as evidence-structure facts. The 94.1% hallucination rate and the near-zero Omniscience index are attributed rather than presented bare, and the total absence of visual benchmarks is stated as a finding rather than left implicit. Missing benchmarks (OSWorld, Terminal-Bench 4.0, Claw-Eval, MazeBench, ALE, JobBench, FrontierMath, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — DeepSeek-V4 technical report (primary benchmark source, 60+ rows)](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/resolve/main/DeepSeek_V4.pdf?download=true)
  - [DeepSeek — V4 Pro 0813 API update and Agent comparison table](https://api-docs.deepseek.com/quick_start/pricing/)
  - [BenchLM — DeepSeek V4 Pro 0813 benchmark scores (61 rows, 62.65/100, #42/1015)](https://benchlm.ai/models/deepseek-v4-pro-0813)
  - [Artificial Analysis — DeepSeek V4 Pro](https://artificialanalysis.ai/models/deepseek-v4-pro)
  - [Vals AI — DeepSeek V4 Pro 0813 leaderboard results](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813)
  - [ARC Prize — published Semi-Private results for DeepSeek V4 Pro 0813](https://arcprize.org/results/deepseek-v4-pro-0813)
  - [Openrouter — DeepSeek V4 Pro benchmarks](https://openrouter.ai/deepseek/deepseek-v4-pro/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
