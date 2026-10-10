# GLM-5.3 Flash — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/glm-5-3-flash`), BenchLM (`https://benchlm.ai/models/glm-5-3-flash`), Z.AI launch post (`https://z.ai/blog/glm-5.3-flash`), HuggingFace (`https://huggingface.co/zai-org/GLM-5.3-Flash`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Flash
- **Short description:** Z.AI's September 2026 lightweight open-weights MoE reasoning model from the GLM-5 family; 320B total / 18B active, 1M context, text+image input, MIT-licensed. Flagship open-weights model with top-tier intelligence at ultra-low cost.
- **Provider / access:** Z.AI API; OpenCode Zen: `opencode/glm-5.3-flash`; HuggingFace open weights `zai-org/GLM-5.3-Flash`; 20 API providers
- **Release / knowledge:** August 26, 2026 (Z.AI launch post); knowledge cutoff June 2026
- **IDs:** `opencode/glm-5.3-flash` (Zen, per `meta.json`); `z-ai/glm-5.3-flash` (AA slug); `zai-org/GLM-5.3-Flash` (HuggingFace)
- **Context window:** 1M total (per AA model page, BenchLM, and Z.AI launch post); `meta.json` says 204K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page and Z.AI launch post); `meta.json` says "Text in/out" — **discrepancy noted** (AA shows "Supports: text and image")
- **Pricing (as of 2026-09-25):** $0.15 input / $0.50 output per 1M tokens; cache discount 83%; $0.10 blended with cache; $0.25 per Intelligence Index task
- **Architecture:** Mixture-of-Experts (320B total / 18B active)
- **License:** MIT (open weights)
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** 47.0 tokens/s output (per AA, rank #50/117 in speed); TTFT 3.29s (per AA FAQ)
- **Context window (meta.json):** 204K — **discrepancy with AA's 1M**

### Research log

1. Fetched AA model page `https://artificialanalysis.ai/models/glm-5-3-flash` — Intelligence Index 42 (rank #4/117 open-weights)
2. Fetched BenchLM page `https://benchlm.ai/models/glm-5-3-flash` — 37 of 618 benchmarks covered with verified scores
3. Fetched Z.AI launch post `https://z.ai/blog/glm-5.3-flash` — primary source for agentic and coding benchmarks
4. Cross-referenced Vals AI leaderboards and OpenRouter benchmark pages
5. Verified against HuggingFace model card `zai-org/GLM-5.3-Flash`

### Raw benchmarks found

> Sources: Z.AI GLM-5.3-Flash launch post (`https://z.ai/blog/glm-5.3-flash`), BenchLM (`https://benchlm.ai/models/glm-5-3-flash`), Artificial Analysis model benchmarks, Vals AI, OpenRouter. BenchLM covers 37 of 618 benchmarks.

Agent / tool use:

- **Terminal-Bench 2.1:** **84.3%** — (Z.AI launch post; also AA terminalbench-v2-1 leaderboard via BenchLM)
- **aaTerminalBench21 (AA):** **84.3%** — (Artificial Analysis: terminalbench-v2-1 leaderboard via BenchLM)
- **Terminal-Bench 2.1 (Vals):** **62.9%** — (Vals AI: Terminal-Bench 2.1 leaderboard)
- **τ²-bench:** no verified public score found
- **GDPval-AA (Elo):** **1773** — (Z.AI launch post; AA: gdpval-aa leaderboard via BenchLM)
- **AA Briefcase Elo:** **1452** — (Artificial Analysis: aa-briefcase leaderboard via BenchLM)
- **AA AutomationBench:** **60.4%** — (Artificial Analysis: automationbench-aa leaderboard via BenchLM)
- **AutomationBench:** **48.8%** — (Z.AI launch post)
- **AA ITBench:** **51.2%** — (Artificial Analysis: itbench-aa leaderboard via BenchLM)
- **AA EnterpriseOps-Gym:** **33.2%** — (Artificial Analysis: enterprise-ops-gym-aa leaderboard via BenchLM)
- **AA Terminal-Bench 4.0:** **32.8%** — (Artificial Analysis: terminalbench-v4-0 leaderboard via BenchLM)
- **Toolathlon-Verified:** **78.4%** — (Z.AI launch post)
- **Agents' Last Exam:** **26.3%** — (Z.AI launch post)
- **GDP.pdf:** **15.4%** — (Artificial Analysis: gdp-pdf leaderboard via BenchLM)
- **AA Tau3 Banking:** **47.2%** — (Artificial Analysis: tau3-banking leaderboard via BenchLM)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **42** (rank #4/117 open-weights, median: 18) — (AA model page; AA: artificial-analysis-intelligence-index leaderboard)
- **BenchLM Intelligence Index:** **41.8%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-GPQA Diamond:** **91.2%** — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **GPQA Diamond (Vals):** **86.4%** — (Vals AI: GPQA Diamond leaderboard)
- **AA-HLE:** **39.9%** — (Artificial Analysis: humanitys-last-exam leaderboard via BenchLM)
- **AA-LCR:** **80.0%** — (Artificial Analysis: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **CritPt:** **15.4%** — (Artificial Analysis: critpt leaderboard via BenchLM)
- **MLCR-AA:** **51.1%** — (Artificial Analysis: mlcr-aa leaderboard via BenchLM)
- **AA-Omniscience Index:** **7.5%** — (Artificial Analysis: omniscience leaderboard via BenchLM)
- **MMLU-Pro (Vals):** **86.1%** — (Vals AI: MMLU Pro leaderboard)

Coding:

- **SWE-bench (Vals):** **92.0%** — (Vals AI: SWE-bench leaderboard)
- **SWE-bench Verified:** no verified public score found
- **LiveCodeBench (Vals):** **80.5%** — (Vals AI: LiveCodeBench leaderboard)
- **DeepSWE:** **63.4%** — (Z.AI launch post)
- **NL2Repo:** **56.3%** — (Z.AI launch post)
- **AA Coding Index:** **74.8%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-SciCode:** **51.6%** — (Artificial Analysis: scicode leaderboard via BenchLM)
- **VulcanBench v3:** **78.3%** — (VulcanBench Eval Suite 3 leaderboard via BenchLM)
- **OpenHarmony Bench:** **57.3%** — (OpenHarmony Bench official leaderboard)

Multimodal & grounded:

- **MMVU:** **80.5%** — (Z.AI launch post)
- **CharXiv:** **89.4%** — (Z.AI launch post)
- **Chartography (tools):** **78.0%** — (Z.AI launch post)
- **BabyVision:** **53.4%** — (Z.AI launch post)
- **OfficeQA Pro:** **62.4%** — (Z.AI launch post)
- **Design Arena Website:** **1280** — (OpenRouter model benchmarks)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded.
  > Confidence: high — 37 public benchmarks found across 5 sources (AA, BenchLM, Z.AI launch post, Vals AI, OpenRouter).

- **Tool use: 82/100.** Terminal-Bench 2.1 at 84.3% (both Z.AI and AA) is strong. GDPval-AA Elo 1773 is exceptional (table best over GPT-5.6 Sol 1730). AA Briefcase 1452 Elo and AA AutomationBench 60.4% are solid. Toolathlon-Verified 78.4% is above frontier. However, TB 4.0 at 32.8%, Agents' Last Exam at 26.3%, and GDP.pdf at 15.4% are weak. No τ²-bench score found. Strong overall agentic performance despite some weak spots.
- **Reasoning: 85/100.** AA Intelligence Index 42 (rank #4/117 open-weights, well above median 18) is excellent. GPQA Diamond 91.2% (AA) and 86.4% (Vals) are exceptional. HLE 39.9% is just below 40% threshold. LCR 80.0% is strong. CritPt 15.4% is weak. MLCR-AA 51.1% is moderate. Omniscience Index 7.5% is positive but low. MMLU-Pro 86.1% (Vals) is excellent.
- **Context window: 95/100.** 1M tokens (verified by AA, BenchLM, and Z.AI launch post) — top tier. `meta.json` claims 204K, which is incorrect. LCR 80.0% at 1M context shows good long-context reasoning. No retrieval-percentage figure found.
- **Multimodal: 65/100.** Text and image input, text output (per AA model page: "Supports: text and image"). +image-in only, no video/audio/PDF verified. `meta.json` says "Text in/out" — discrepancy noted.
- **Coding: 83/100.** SWE-bench (Vals) 92.0% is excellent. LiveCodeBench (Vals) 80.5% is strong. Terminal-Bench 2.1 84.3% (also AA and Z.AI) is strong. DeepSWE 63.4%, NL2Repo 56.3%, VulcanBench 78.3%, and AA-SciCode 51.6% are solid. No SWE-bench Verified score found. Strong open-weights coding capability.
- **Cost efficiency: 98/100.** $0.15 in / $0.50 out per 1M tokens — extremely low cost (~$0.10 blended). MIT license allows self-hosting. Open weights available.
- **Overall Score: 82/100.** Mean of five quality dimensions: (82 + 85 + 95 + 65 + 83) / 5 = 410 / 5 = 82.0 → 82. Premier open-weights reasoning model with exceptional value. Strong across all dimensions except multimodal (text+image only, no video/audio/PDF). `meta.json` discrepancies noted: claims 204K context vs verified 1M; claims text-only vs verified text+image input.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis, BenchLM, Z.AI launch post, Vals AI, and OpenRouter; zero-influence: did not read peer `model/` findings files during research. Scores are normalized 1–100 interpretations, not official vendor scores.
- Meta.json discrepancies: `meta.json` lists 204K context window and text-only modalities, but AA model page, BenchLM, and Z.AI launch post all show 1M context window with text+image input support. `meta.json` appears to be a placeholder for this model.
- Future sources: add a new file next to this one, e.g. `ZAI_GLM_5.3_Flash_Tech_Report.md`, using the same headings.
