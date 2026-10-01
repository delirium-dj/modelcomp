# DeepSeek V4 Flash 0731 — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/deepseek-v4-flash`), BenchLM (`https://benchlm.ai/models/deepseek-v4-flash`), DeepSeek-V4 technical report (`https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/resolve/main/DeepSeek_V4.pdf`), DeepSeek API updates (`https://api-docs.deepseek.com/zh-cn/updates/`), Vals AI leaderboards, ARC Prize, OpenRouter benchmarks
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash 0731 (Max)
- **Short description:** DeepSeek AI's July 2026 open-weights MoE reasoning model; 284B parameters (13B active), 1M context, text-only. Released as a faster, more cost-efficient variant of DeepSeek V4 Pro.
- **Provider / access:** DeepSeek API; 19 API providers; OpenCode Zen via OpenAI-compatible endpoint
- **Release / knowledge:** Released July 31, 2026; knowledge cutoff not published
- **IDs:** `opencode/deepseek-v4-flash` (Zen, per `meta.json`); `deepseek-ai/DeepSeek-V4-Flash-0731` (HuggingFace)
- **Context window:** 1M total (per AA model page and BenchLM — both agree; `meta.json` says 128K — discrepancy noted)
- **Modalities:** Text input only, text output (per AA model page: "Supports: text"; `meta.json` says "Text in/out" — consistent)
- **Pricing (as of 2026-10-01):** $0.44 input / $1.32 output per 1M tokens (DeepSeek API, per AA model page); cache discounted 97%; BenchLM canonical page uses slug `deepseek-v4-flash-0731`
- **Architecture:** Mixture-of-Experts (MoE); 284B total parameters, 13B active
- **License:** MIT
- **Open weights:** Yes — [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
- **Reasoning:** Yes (chain-of-thought)
- **Speed:** 204.1 tokens/s output (DeepSeek API, per AA model page)
- **TTFT:** 0.93s (DeepSeek API, per AA model page)
- **Status:** Deprecated (AA page notes DeepSeek launched DeepSeek V4.1 Flash as newer release)

### Raw benchmarks found

> Sources: DeepSeek-V4 technical report (`https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/resolve/main/DeepSeek_V4.pdf`), BenchLM (`https://benchlm.ai/models/deepseek-v4-flash-0731`), Vals AI leaderboards, ARC Prize, OpenRouter benchmarks, and AA model benchmarks. BenchLM covers 56 of 618 benchmarks.

Agent / tool use:

- **Terminal-Bench 2.1:** **82.7%** — (DeepSeek V4 Flash 0731 update via BenchLM)
- **Terminal-Bench 2.0:** **56.9%** — (DeepSeek-V4 technical report)
- **Terminal-Bench 2.1 (Vals):** **67.0%** — (Vals AI: Terminal-Bench 2.1 leaderboard via BenchLM)
- **BrowseComp:** **73.2%** — (DeepSeek-V4 technical report)
- **MCP Atlas:** **69%** — (DeepSeek-V4 technical report)
- **CyberGym:** **76.7%** — (DeepSeek V4 Flash 0731 update via BenchLM)
- **Toolathlon-Verified:** **70.3%** — (DeepSeek V4 Flash 0731 update via BenchLM)
- **Toolathlon:** **47.8%** — (DeepSeek-V4 technical report)
- **HLE w/ tools:** **45.1%** — (DeepSeek-V4 technical report)
- **GDPval-AA (normalized):** **46.3%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA Agentic Index:** **41.7%** — (Artificial Analysis model benchmarks via BenchLM)
- **Agents' Last Exam:** **25.2%** — (DeepSeek V4 Flash 0731 update via BenchLM)
- **AutomationBench:** **25.1%** — (DeepSeek V4 Flash 0731 update via BenchLM)
- **AA Briefcase:** not found for this model
- **τ²-bench:** no verified public score found
- **ResearchClawBench:** no verified public score found
- **OSWorld-Verified:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **34** — (AA model page, rank #10/117, above open-weight large-class median of 18)
- **BenchLM Intelligence Index:** **34.3%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-GPQA Diamond:** **90.8%** — (Artificial Analysis model benchmarks via BenchLM)
- **GPQA Diamond (Vals):** **89.9%** — (Vals AI: GPQA Diamond leaderboard via BenchLM)
- **GPQA / GPQA-D (DeepSeek tech report):** **88.1%** — (DeepSeek-V4 technical report)
- **AA-HLE:** **38.6%** — (Artificial Analysis model benchmarks via BenchLM)
- **HLE (DeepSeek tech report):** **34.8%** — (DeepSeek-V4 technical report)
- **MMLU-Pro:** **86.2%** — (DeepSeek-V4 technical report and Vals AI leaderboard)
- **MMLU-Pro (Vals):** **86.2%** — (Vals AI: MMLU Pro leaderboard via BenchLM)
- **AA-LCR:** **79.7%** — (Artificial Analysis model benchmarks via BenchLM)
- **MRCR 1M:** **78.7%** — (DeepSeek-V4 technical report)
- **CorpusQA 1M:** **60.5%** — (DeepSeek-V4 technical report)
- **CritPt:** **16.6%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-Omniscience Index:** **-14.3%** — (Artificial Analysis model benchmarks via BenchLM; more incorrect than correct)
- **AA-Omniscience Accuracy:** **40.4%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** **91.7%** — (Artificial Analysis model benchmarks via BenchLM)
- **SimpleQA:** **34.1%** — (DeepSeek-V4 technical report)
- **Chinese-SimpleQA:** **78.9%** — (DeepSeek-V4 technical report)

Mathematics:

- **HMMT Feb 2026:** **94.8%** — (DeepSeek-V4 technical report)
- **IMOAnswerBench:** **88.4%** — (DeepSeek-V4 technical report)
- **Apex:** **33.0%** — (DeepSeek-V4 technical report)
- **Apex Shortlist:** **85.7%** — (DeepSeek-V4 technical report)

Coding:

- **SWE-bench (Vals):** **88.8%** — (Vals AI: SWE-bench leaderboard via BenchLM)
- **SWE-bench Verified:** **79%** — (DeepSeek-V4 technical report)
- **SWE-bench Pro:** **52.6%** — (DeepSeek-V4 technical report)
- **SWE-bench Multilingual:** **73.3%** — (DeepSeek-V4 technical report)
- **LiveCodeBench Pass@1-COT:** **91.6%** — (DeepSeek-V4 technical report)
- **LiveCodeBench (Vals):** **87.3%** — (Vals AI: LiveCodeBench leaderboard via BenchLM)
- **DeepSWE:** **54.4%** — (DeepSeek V4 Flash 0731 update via BenchLM)
- **NL2Repo:** **54.2%** — (DeepSeek V4 Flash 0731 update via BenchLM)
- **DSBench-FullStack:** **68.7%** — (DeepSeek V4 Flash 0731 update via BenchLM)
- **DSBench-Hard:** **59.6%** — (DeepSeek V4 Flash 0731 update via BenchLM)
- **AA-SciCode:** **50.3%** — (Artificial Analysis model benchmarks via BenchLM)
- **VulcanBench v3:** **88.4%** — (VulcanBench Eval Suite 3 leaderboard via BenchLM)
- **OpenHarmony Bench:** **53.8%** — (OpenHarmony Bench official leaderboard via BenchLM)
- **AA Coding Index:** **69.1%** — (Artificial Analysis model benchmarks via BenchLM)
- **Codeforces:** **3052.0** — (DeepSeek-V4 technical report; rating, not percentage)
- **Terminal-Bench 2.0:** **56.9%** — (DeepSeek-V4 technical report; also listed under coding on BenchLM)

Multimodal:

- Supports text input only (per AA model page: "Supports: text")
- **Design Arena Website:** **1215** — (OpenRouter model benchmarks via BenchLM; agentic web-design benchmark, not multimodal vision)

Arc / reasoning competitions:

- **ARC-AGI-1:** **89.0%** — (ARC Prize: DeepSeek V4 Flash 0731 verified results)
- **ARC-AGI-2:** **61.4%** — (ARC Prize: DeepSeek V4 Flash 0731 verified results)

Instruction following:

- **IFBench:** **77%** — (Z.AI: Muse Glimmer launch post references IFBench 77% for comparison; not directly attributed to DeepSeek V4 Flash — **not verified for this model**)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
  > Confidence: high — 56 public benchmarks found across 6 sources (DeepSeek tech report, BenchLM, Vals AI, ARC Prize, OpenRouter, AA model benchmarks).

- **Tool use: 72/100.** Terminal-Bench 2.1 at 82.7% (DeepSeek update via BenchLM) is excellent. GDPval-AA at 46.3% (AA, above 40% threshold) and AA Agentic Index at 41.7% (above 40% threshold) are decent. CyberGym at 76.7%, Toolathlon-Verified at 70.3%, MCP Atlas at 69%, BrowseComp at 73.2%, aaTerminalBench21 at 83.9% (Vals), and HLE w/ tools at 45.1% are all positive. However, Agents' Last Exam at 25.2% and AutomationBench at 25.1% are very poor. Mixed agentic performance with strong terminal benchmarks but weak on other agentic tasks.

- **Reasoning: 64/100.** AA Intelligence Index at 34 (rank #10/117, above median of 18). AA-GPQA Diamond at 90.8% (AA) and 89.9% (Vals) are exceptional — among the highest seen. MMLU-Pro at 86.2% is very good. LCR at 79.7% and MRCR-1M at 78.7% are excellent. ARC-AGI-1 at 89.0% is outstanding. However, HLE at 38.6% is moderate (below 40% threshold), CritPt at 16.6% is very low (physics reasoning), Omniscience Index at -14.3% (more incorrect than correct), and AA-Omniscience Accuracy at only 40.4%. II + 30 formula: 34 + 30 = 64. The high GPQA/MMLU/ARC scores are offset by poor HLE/CritPt/Omniscience.

- **Context window: 85/100.** 1M tokens per AA model page and BenchLM (>1,000K tier → 85). Note: `meta.json` says 128K — significant discrepancy; all public sources confirm 1M.

- **Multimodal: 30/100.** Text input only (per AA model page: "Supports: text"). No image, speech, or video input support. The Design Arena Website score of 1215 is an agentic web-design benchmark, not a multimodal vision benchmark — does not contribute to multimodal score.

- **Coding: 83/100.** Exceptional coding performance: SWE-bench (Vals) at 88.8%, SWE-bench Verified at 79%, LiveCodeBench Pass@1-COT at 91.6%, VulcanBench v3 at 88.4%, and AA Coding Index at 69.1%. Terminal-Bench 2.1 at 82.7% and DeepSWE at 54.4% also strong. DSBench-FullStack at 68.7% and NL2Repo at 54.2% are moderate. ProgramBench not found for this model but was 19.0% for GLM-5.3 (no comparable data). Very strong overall coding capability.

- **Cost efficiency: 65/100.** $0.44 input / $1.32 output per 1M tokens (in the methodology's $0.15–1.00 / $1.00–1.50 tier ≈ 65). Cache hits discounted 97%. Open weights under MIT license available for self-hosting.

- **Overall Score: 67/100.** Mean of five non-cost dimensions: (72 + 64 + 85 + 30 + 83) / 5 = 334 / 5 = 66.8 → 67. Strong reasoning (GPQA 90.8%, II 34) and coding (SWE-bench 88.8% on Vals, LiveCodeBench 91.6%) drive the score. Limited by text-only modality (30). Open weights under MIT license; 284B parameters (13B active MoE).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via DeepSeek technical report, BenchLM, AA model benchmarks, Vals AI, ARC Prize, and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Tech_Report.md`, using the same headings.

---
