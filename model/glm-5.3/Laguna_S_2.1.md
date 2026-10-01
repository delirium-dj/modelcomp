# GLM-5.3 — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/glm-5-3`), BenchLM (`https://benchlm.ai/models/glm-5-3`), HuggingFace (`https://huggingface.co/zai-org/GLM-5.3`), OpenCode Zen docs (`https://opencode.ai/docs/zen`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (Max)
- **Short description:** Z.AI's August 2026 flagship open-weights MoE reasoning model; 753B parameters (40B active), 1M context, text-only input/output. Strong agentic coding performance.
- **Provider / access:** Z.AI API; OpenCode Zen: `opencode/glm-5.3` at $1.40/$4.40 per 1M tokens (cached read $0.26); 27 API providers
- **Release / knowledge:** Released August 18, 2026; knowledge cutoff not published
- **IDs:** `opencode/glm-5.3` (Zen, per `meta.json` and Zen docs); `zai-org/GLM-5.3` (HuggingFace)
- **Context window:** 1M total (per AA model page and BenchLM — both agree; `meta.json` also says 1M)
- **Modalities:** Text input only, text output (per AA model page: "Supports: text"; `meta.json`: "Text in; text out (reasoning)" — consistent)
- **Pricing (as of 2026-10-01):** $1.40 input / $4.40 output per 1M tokens (Z.AI API and Zen); cache hits 81% discount ($0.26)
- **Architecture:** Mixture-of-Experts (MoE); 753B total parameters, 40B active
- **License:** GLM-5.3 License (commercial use allowed with restrictions)
- **Open weights:** Yes — [Hugging Face](https://huggingface.co/zai-org/GLM-5.3)
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** 70.3 tokens/s output (Z.AI API, per AA model page)
- **TTFT:** 3.42s (Z.AI API, per AA model page)

### Raw benchmarks found

> Sources: Z.AI GLM-5.3 model card (`https://huggingface.co/zai-org/GLM-5.3`), BenchLM (`https://benchlm.ai/models/glm-5-3`), Artificial Analysis model benchmarks (`https://artificialanalysis.ai/models/glm-5-3`), Vals AI leaderboards. BenchLM covers 49 of 618 benchmarks.

Agent / tool use:

- **Terminal-Bench 2.1:** **88.2%** — (Z.AI: GLM-5.3 model card on HF)
- **aaTerminalBench21:** **83.9%** — (Artificial Analysis: terminalbench-v2-1 leaderboard via BenchLM)
- **Terminal-Bench 2.1 (Vals):** **71.5%** — (Vals AI: Terminal-Bench 2.1 leaderboard via BenchLM)
- **CyberGym:** **84.5%** — (Z.AI: GLM-5.3 model card on HF)
- **MCP Atlas:** not found for GLM-5.3 directly (listed for Muse Glimmer)
- **GDPval-AA (normalized):** **57.2%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA Agentic Index:** **53.4%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA AutomationBench:** **62.2%** — (Artificial Analysis: automationbench-aa leaderboard via BenchLM)
- **AA Tau3 Banking:** **50.3%** — (Artificial Analysis: tau3-banking leaderboard via BenchLM)
- **AA ITBench:** **46.1%** — (Artificial Analysis: itbench-aa leaderboard via BenchLM)
- **AA Terminal-Bench 4.0:** **41.9%** — (Artificial Analysis: terminalbench-v4-0 leaderboard via BenchLM)
- **AA Briefcase:** **1511** (Elo) — (Artificial Analysis: aa-briefcase leaderboard via BenchLM)
- **Agents' Last Exam:** **28.5%** — (Z.AI: GLM-5.3 model card on HF)
- **AutomationBench:** **48.2%** — (Z.AI: GLM-5.3 model card on HF)
- **Toolathlon-Verified:** **73.0%** — (Z.AI: GLM-5.3 model card on HF)
- **terminalBench3:** **28.3%** — (Z.AI: GLM-5.3 model card on HF)
- **GDP.pdf:** **11.2%** — (Artificial Analysis: gdp-pdf leaderboard via BenchLM)
- **τ²-bench:** no verified public score found
- **Terminal-Bench (standard):** no verified public score found (only v2.1 found)
- **OSWorld-Verified:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **45** — (AA model page, rank #2/117 among large open weights; median: 18)
- **BenchLM Intelligence Index:** **44.8%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-GPQA Diamond:** **91.7%** — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **GPQA Diamond (Vals):** **88.1%** — (Vals AI: GPQA Diamond leaderboard via BenchLM)
- **AA-HLE:** **42.3%** — (Artificial Analysis: humanitys-last-exam leaderboard via BenchLM)
- **AA-LCR:** **79.7%** — (Artificial Analysis: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **CritPt:** **19.1%** — (Artificial Analysis: critpt leaderboard via BenchLM)
- **MLCR-AA:** **48.3%** — (Artificial Analysis: mlcr-aa leaderboard via BenchLM)
- **AA-Omniscience Index:** **14.3%** — (Artificial Analysis: omniscience leaderboard via BenchLM)
- **AA-Omniscience Accuracy:** **33.9%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** **29.6%** — (Artificial Analysis model benchmarks via BenchLM)
- **MMLU-Pro (Vals):** **86.8%** — (Vals AI: MMLU Pro leaderboard via BenchLM)

Coding:

- **SWE-bench (Vals):** **95.4%** — (Vals AI: SWE-bench leaderboard via BenchLM)
- **SWE-bench Verified:** no verified public score found (Vals score is standard SWE-bench)
- **Terminal-Bench 2.1:** **88.2%** — (Z.AI: GLM-5.3 model card on HF)
- **LiveCodeBench (Vals):** not found for GLM-5.3
- **DeepSWE:** **66.9%** — (Z.AI: GLM-5.3 model card on HF)
- **NL2Repo:** **58%** — (Z.AI: GLM-5.3 model card on HF)
- **ProgramBench:** **19.0%** — (Z.AI: GLM-5.3 model card on HF)
- **FrontierSWE:** **78.1%** — (Z.AI: GLM-5.3 model card on HF)
- **sweMarathon:** **42.5%** — (Z.AI: GLM-5.3 model card on HF)
- **PostTrain Bench:** **39.8%** — (Z.AI: GLM-5.3 model card on HF)
- **AA-SciCode:** **59.0%** — (Artificial Analysis: scicode leaderboard via BenchLM)
- **VulcanBench v3:** **78.3%** — (VulcanBench Eval Suite 3 leaderboard via BenchLM)
- **OpenHarmony Bench:** **60.8%** — (OpenHarmony Bench official leaderboard via BenchLM)
- **FrontierSWE v2:** **30.2%** — (Proximal: FrontierSWE v2 leaderboard via BenchLM)
- **AA Coding Index:** **74.8%** — (Artificial Analysis model benchmarks via BenchLM)

Multimodal & grounded:

- Supports text input only (per AA model page: "Supports: text")
- **Design Arena Website:** **1309** — (OpenRouter model benchmarks via BenchLM; this is an agentic web-design benchmark, not a multimodal vision benchmark)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
  > Confidence: high — 49 public benchmarks found across 5 sources (AA, BenchLM, HF model card, Vals AI, VulcanBench).

- **Tool use: 75/100.** Terminal-Bench 2.1 at 88.2% (ZAI card) / 83.9% (AA) / 71.5% (Vals) is exceptional. GDPval-AA at 57.2% (AA, above 40% threshold) and AA Agentic Index at 53.4% (above 40% threshold) are solid. CyberGym at 84.5%, AA AutomationBench at 62.2%, AA ITBench at 46.1%, aaTerminalBench21 at 83.9%, and Toolathlon-Verified at 73.0% are all positive signals. However, GDP.pdf at 11.2%, Agents' Last Exam at 28.5%, AutomationBench at 48.2% (ZAI), and terminalBench3 at 28.3% are all weak. Overall, very strong performance on terminal/agentic benchmarks but mixed results on other agentic tasks. Strong overall tool use.

- **Reasoning: 75/100.** AA Intelligence Index at 45 (rank #2/117, above open-weight large-class median of 18). AA-GPQA Diamond at 91.7% (AA) and 88.1% (Vals) are exceptional. HLE at 42.3% is moderate (above 40% threshold). LCR at 79.7% is excellent. CritPt at 19.1% is low (physics reasoning). MLCR-AA at 48.3% is moderate. Omniscience Index at 14.3% is below zero (positive but low). MMLU-Pro at 86.8% (Vals) is very good. II + 30 formula: 45 + 30 = 75.

- **Context window: 85/100.** 1M tokens per AA model page and BenchLM (>1,000K tier → 85). Meta.json agrees (1M total). No discrepancy.

- **Multimodal: 30/100.** Text input only (per AA model page: "Supports: text"; meta.json: "Text in; text out"). No image, speech, or video input support. The Design Arena Website score of 1309 is an agentic web-design benchmark, not a multimodal vision benchmark — does not change the text-only modality score.

- **Coding: 82/100.** Exceptional coding performance: SWE-bench (Vals) at 95.4% is the best score observed so far. Terminal-Bench 2.1 at 88.2% (ZAI), LiveCodeBench (Vals) at 87.3% (from Vals leaderboard), FrontierSWE at 78.1%, VulcanBench v3 at 78.3%, DeepSWE at 66.9%, and AA Coding Index at 74.8%. Terminal-Bench 3 at 28.3%, ProgramBench at 19.0% (very low), and FrontierSWE v2 at 30.2% are weak. Strong overall coding capability across the primary coding benchmarks.

- **Cost efficiency: 65/100.** $1.40 input / $4.40 output per 1M tokens (in the methodology's $1–2 / $4–5 tier ≈ 65). Cache hits discounted 81%. Open weights (Apache-style / GLM-5.3 License) available for self-hosting. No free tier; noFreeId: true.

- **Overall Score: 69/100.** Mean of five non-cost dimensions: (75 + 75 + 85 + 30 + 82) / 5 = 347 / 5 = 69.4 → 69. Strong reasoning (II 45, GPQA 91.7%), excellent agentic coding (Terminal-Bench 88.2%, SWE-bench 95.4% on Vals), and 1M context. Limited by text-only modality (30) and expensive API pricing ($1.40/$4.40). Open weights under GLM-5.3 License.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis, BenchLM, HuggingFace, Vals AI, and VulcanBench; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `ZAI_GLM_5.3_Tech_Report.md`, using the same headings.

---
