# DeepSeek V4.1 Flash — findings by Step 5 Preview

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash. **All benchmark numbers below describe the shared V4.1-Flash lineage, which BenchLM tracks under the "1017" checkpoint name** — the repo's sibling folder `deepseek-v4.1-flash-1017` is documented as the 2026-10-17 updated checkpoint that retired v4-flash routes now serve, so the two are one serving lineage rather than two models. This is recorded explicitly rather than presenting 1017 figures as freshly-measured base-V4.1-Flash evidence.
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for long-context agentic work, with two headline strengths — **the largest output allowance measured anywhere in this research series (384K)** and frontier-grade terminal coding (**Terminal-Bench 2.1 90.6%**, DeepSWE 77.0%) at $0.30/$1.20. It also carries **the worst hallucination rate measured in this entire research series (96.5%)** and a **negative AA-Omniscience index (−5.3)**, meaning more incorrect than correct answers.
- **Provider / access:** Weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash-1017`, MIT), DeepSeek's own API, OpenRouter, and OpenCode Zen (`opencode/deepseek-v4.1-flash`) at **$0.30/$1.20 peak, $0.15/$0.60 off-peak**.
- **Release / knowledge:** release date not restated; the V4.1-Flash lineage is DeepSeek's 2026 line, with the 1017 checkpoint dated 2026-10-17. **Knowledge cutoff not disclosed.**
- **IDs:** `deepseek/deepseek-v4.1-flash` (Zen, DeepSeek API); `deepseek-ai/DeepSeek-V4.1-Flash-1017` (Hugging Face).
- **Context window:** **1,000,000 tokens total with 384,000 max output** (both stated in the repo meta.json and BenchLM). The 384K output is the largest allowance measured in this research series.
- **Modalities:** **text and image in; text out** (repo meta.json and BenchLM agree).
- **Pricing (as of 2026-11-05):** **$0.30 input / $1.20 output per 1M at peak**, halving to **$0.15/$0.60 off-peak** on the hosted route. **MIT open weights** allow self-hosting. Methodology anchors put $0.30/$1.20 between ~$0.10/$0.20 (≈97–99) and ~$0.60/$2.20 (≈92).
- **Architecture:** **open-weight MoE, MIT licence, 552B total (16B active CED MoE per the sibling meta.json)**.

### Raw benchmarks found

DeepSeek's V4.1-Flash model cards are the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, Kaggle, Cognition, Cursor, Collinear, STEMBench and OpenRouter supplying independent rows.

Agent / tool use:

- **Terminal-Bench 2.1: 90.6%** (DeepSeek model card) / **74.5%** (Vals AI) — a **16.1-point vendor-vs-independent gap**, the largest in this batch
- Terminal-Bench 4.0: **42.3%** (1017 card); **terminalBench3: 30.0%** — clear generational decline
- **AutomationBench: 60.5%** (1017 card); Agents' Last Exam: 35.4%
- **CyberGym: 88.1%** (vendor) — the best CyberGym figure in this batch
- **GDPval-AA: 55.0% normalized** (AA; no Elo figure published) — under the 1,750+ frontier reference
- AA ITBench: 46.9%; CWE-bench v1: 55.0%; **CWE-Bench-AA: 68.3%**; DeepsecBench-AA: 31.2%; AA Cyber Index: 40.8%; CyberGym-E2E-AA: 22.9%
- **MazeBench: 1%**; ExploitGym: 15.3%
- **τ³-Banking, τ²-bench, BrowseComp, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval: no verified public score found** — so two of three frontier references are entirely unmeasured

Reasoning / knowledge — **the weakest reliability in this research series**:

- **GPQA: 90.9%** / GPQA-D 90.9% (DeepSeek model card) — just clears the 90%+ frontier reference
- **HLE: 42.6%** (1017 card) — clears the 40%+ reference on the vendor run; **AA-HLE 39.2%** — fails it on the independent run
- HLE with tools: 63.9% (vendor)
- AA-LCR: **84.0%**; AA Intelligence Index: **39.5**; CritPt: **14.3%**
- FrontierMath v2 Tiers 1–3: **67.4%**; Tier 4: **26.8%**; Apex: 65.6%; STEMBench: 2.54
- **AA-Omniscience: index −5.3, accuracy 46.4%, hallucination rate 96.5%** — the worst figures measured anywhere in this research series; an index of −5.3 means more incorrect than correct answers
- **MRCR, ARC-AGI, GPQA from AA/Vals: no verified public score found**

Coding:

- **Terminal-Bench 2.1: 90.6%** — clears the 85% frontier reference on the vendor run
- **DeepSWE: 77.0%** — clears the 74% frontier reference
- **Codeforces: 3,471.0** rating — the only Codeforces figure measured in this research series
- NL2Repo: 68.2%; ScarfBench: 69.0%; OpenHarmony Bench: 60.3%; Bug Hunt Bench: 39.1 fixes
- **AA-SciCode: 51.9%** — 3.1 points under the 55% reference
- **FrontierCode 2.0: 19.3%**; ProgramBench: 29.1%; Terminal-Bench 4.0: 42.3%
- **SWE-bench Verified, AA Coding Index, LiveCodeBench, SWE-bench Pro: no verified public score found**

Multimodal (image-in):

- **ExtractBench: 87.11%**; **BabyVision w/ Python: 92.5%**; Chartography (tools): 83.0%; ParseBench: 64.56%; AA-MMMU-Pro: 77.0%; ZeroBench w/ Python: 51.0%; Design Arena: 1,302 Elo

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong on paper, with a large caveat. Terminal-Bench 2.1 90.6% (DeepSeek's own card) clears the 88% reference and CyberGym 88.1% is the best in this batch, with AutomationBench 60.5% and CWE-Bench-AA 68.3% supporting. But **Vals measures Terminal-Bench 2.1 at only 74.5% — a 16.1-point gap against the vendor's own number** — and GDPval-AA has no Elo figure, τ³-Banking and BrowseComp are missing, MazeBench is 1%, Terminal-Bench 4.0 is 42.3% and Agents' Last Exam is 35.4%. Two of three references are unmet or unmeasurable.
- **Reasoning: 60/100.** The weakest dimension, and reliability is the entire story. GPQA 90.9% and HLE 42.6% clear their references on the vendor's runs, but **AA measures HLE at 39.2% (failing), and the AA-Omniscience index is −5.3 with a 96.5% hallucination rate — the worst measured anywhere in this research series.** Add CritPt 14.3%, FrontierMath Tier 4 26.8%, an AA Intelligence Index of 39.5 and no MRCR or ARC-AGI figure. A model that knows graduate-level science and cannot be trusted to report it.
- **Context window: 98/100.** 1M-token tier with **384K max output — the largest allowance measured in this research series**, 84K more than Claude's 300K Batch path and 3x GPT-6 Astra's 128K. AA-LCR 84.0% is solid. Held at 98 rather than 100 because no MRCR retrieval run exists — a real gap given that this model's marketing case is long-context work.
- **Multimodal: 80/100.** Text + image in with text out. Scored above the methodology's "+image in" 60–70 band because the document and vision-evidence tiers are explicitly measured and strong — **ExtractBench 87.11%, BabyVision 92.5% with Python, Chartography 83.0% with tools** — which is unusual depth for an image-in-only model. Held at 80 because there is no video or audio input and ZeroBench is only 51.0% even with Python.
- **Coding: 78/100.** Terminal-Bench 2.1 90.6% and DeepSWE 77.0% both clear their references, and the **Codeforces 3,471 rating is the only competitive-programming figure measured in this series**. Capped by AA-SciCode 51.9% (under the 55% reference), FrontierCode 2.0 19.3%, ProgramBench 29.1%, Terminal-Bench 4.0 42.3%, the same 16.1-point Terminal-Bench vendor gap, and no SWE-bench Verified, AA Coding Index or LiveCodeBench figure.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M sits between the methodology's ~$0.10/$0.20 (≈97–99) and ~$0.60/$2.20 (≈92) anchors, and three factors push it to the top of that range: **the off-peak route halves it to $0.15/$0.60**, **MIT weights make self-hosting unrestricted**, and the 384K output window means fewer round-trips. Held just under the 97–99 tier because it is not a $0 route.
- **Overall Score: 80/100.** (82 + 60 + 98 + 80 + 78) / 5 = 79.6 → 80. Recommendation: a strong **cheap long-context coding workhorse** — Terminal-Bench 2.1 90.6%, DeepSWE 77.0%, Codeforces 3,471 and the series' largest 384K output at $0.30/$1.20 under MIT. One caveat overrides everything: **its 96.5% hallucination rate and −5.3 Omniscience index are the worst measured in this research series**, so it must never be deployed for unattended factual or retrieval work, and the 16.1-point Terminal-Bench vendor-vs-Vals gap needs resolving on your own harness before trusting the favourable direction.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using DeepSeek's V4.1-Flash model cards as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 52-row catalog — which tracks this lineage under the **"1017" checkpoint name**, a mapping recorded explicitly here because the repo's sibling `deepseek-v4.1-flash-1017` folder documents the same serving lineage — plus Artificial Analysis, Vals AI, Epoch AI, Kaggle, Cognition, Cursor, Collinear, STEMBench and Openrouter for the independent rows, and the repo's own meta.json for the 1M/384K window, modality and pricing facts. The 16.1-point Terminal-Bench 2.1 vendor-vs-Vals gap and the negative Omniscience index are recorded rather than smoothed over. Missing benchmarks (τ³-Banking, τ²-bench, BrowseComp, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, SWE-bench Verified, AA Coding Index, LiveCodeBench, MRCR, ARC-AGI) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek — DeepSeek-V4.1-Flash model card (source of Terminal-Bench 90.6%, GPQA 90.9%, CyberGym, Codeforces)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [DeepSeek — DeepSeek-V4.1-Flash-1017 model card (source of DeepSWE 77.0%, AutomationBench, ALE rows)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [DeepSeek — API pricing](https://api-docs.deepseek.com/quick_start/pricing)
  - [BenchLM — DeepSeek V4.1 Flash 1017 benchmark scores (52 rows, 65.22/100, #30/1009)](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [Artificial Analysis — DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
  - [Vals AI — DeepSeek V4.1 Flash leaderboard results](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash)
  - [Cognition — FrontierCode 2.0 (source of the 19.3% figure)](https://cognition.com/blog/frontier-code-2.0)
  - [Collinear — CWE-bench v1 leaderboard](https://cwe-bench.com/)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
