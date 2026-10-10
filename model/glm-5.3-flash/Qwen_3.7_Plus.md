# GLM 5.3 Flash — findings by Qwen 3.7 Plus

- Source: Z.AI/GLM-5.3-Flash (`opencode/glm-5.3-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's (Zhipu AI) lightweight Flash-class MoE model, released August 26, 2026. Post-trained on a 743B parameter base. Engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency. DeepSWE 63.4% is strong for a Flash-class model (up from GLM-5.2's 46.2%). Terminal-Bench 2.1 84.3% and Toolathlon 78.4% demonstrate solid agentic capability. GDPval-AA Elo 1773 is competitive with frontier models. SWE-bench (Vals) 92.0% is excellent. Free Zen tier available — one of the few free-tier models with competitive agentic coding performance. Open weights. Text input/output only per project metadata, though Z.AI reports some vision benchmarks (CharXiv 89.4%, OfficeQA Pro 62.4%). AA Intelligence Index 41.8 is modest.
- **Provider / access:** Z.AI API; OpenCode Zen (free Zen tier available). Open weights: `zai-org/GLM-5.3-Flash` (Hugging Face).
- **Release / knowledge:** 2026-08-26 release; knowledge cutoff not precisely documented.
- **IDs:** `opencode/glm-5.3-flash` (OpenCode Zen). Free Zen tier available.
- **Context window:** 204,000 tokens (204K) per project metadata. BenchLM reports 1M — discrepancy with meta.json.
- **Modalities:** Text in/out (per project metadata). Z.AI reports vision benchmarks (CharXiv, OfficeQA Pro, BabyVision, MMVU, Chartography) suggesting possible image understanding capability not reflected in metadata.
- **Pricing (as of 2026-10-10):** Free Zen tier available. Paid pricing not specified in sources. Among the most affordable options given free tier access.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI; AA) / **62.9%** (Vals AI — significant discrepancy)
- Toolathlon-Verified: **78.4%** (Z.AI)
- AutomationBench: **48.8%** (Z.AI) / **60.4%** (AA)
- GDPval-AA Elo: **1773** (Z.AI — competitive with frontier)
- HLE w/ tools: **55.3%** (Z.AI)
- Agents' Last Exam: **26.3%** (Z.AI)
- AA Tau3 Banking: **47.2%** (AA)
- AA Briefcase Elo: **1454** (AA)
- AA EnterpriseOps-Gym: **33.2%** (AA)
- AA ITBench: **51.2%** (AA)
- Terminal-Bench 4.0: **32.8%** (AA — latest version)
- GDP.pdf: **15.4%** (AA)

Coding:

- DeepSWE: **63.4%** (Z.AI; vs GLM-5.2 46.2%, +17.2 pts)
- Terminal-Bench 2.1: **84.3%** (Z.AI)
- SWE-bench (Vals): **92.0%** (Vals AI)
- LiveCodeBench (Vals): **80.5%** (Vals AI)
- NL2Repo: **56.3%** (Z.AI)
- AA-SciCode: **51.6%** (AA)
- FrontierSWE v2: **18.1%** (Proximal — low)
- OpenHarmony Bench: **57.3%** (OpenHarmony)
- Bug Hunt Bench: **17.7 fixes** (Bug Hunt Bench)

Multimodal:

- CharXiv: **89.4%** (Z.AI)
- Chartography (with tools): **78.0%** (Z.AI)
- MMVU: **80.5%** (Z.AI)
- OfficeQA Pro: **62.4%** (Z.AI)
- BabyVision: **53.4%** (Z.AI)
- Design Arena Website: **1278** (OpenRouter)

Reasoning / knowledge:

- AA Intelligence Index: **41.8** (AA — modest; vs GLM-5.3 Max 45)
- GPQA Diamond: **91.2%** (AA) / **86.4%** (Vals AI)
- HLE (AA): **39.9%** (AA)
- MMLU-Pro: **86.1%** (Vals AI)
- AA-Omniscience Index: **7.5%** (AA — very low)
- AA-LCR (Long Context Reasoning): **80.0%** (AA)
- MLCR-AA: **51.1%** (AA)
- CritPt (Physics): **15.4%** (AA — low)

### Normalized scores (1–100)

- **Tool use: 81/100.** Terminal-Bench 2.1 at 84.3% is strong (matches Opus 4.8 per Z.AI). Toolathlon 78.4% is solid. GDPval-AA Elo 1773 is competitive with frontier models (near Fable 5/GPT-5.6 Sol range). AutomationBench 48.8–60.4% is moderate. However, Agents' Last Exam 26.3% is low, AA EnterpriseOps-Gym 33.2% is weak, and the Vals Terminal-Bench at 62.9% raises questions about the vendor-reported 84.3% (a 21-point discrepancy). GDP.pdf 15.4% is very low. The tool use profile is strong on terminal and tool-use benchmarks but weaker on enterprise operations and document-based agentic tasks.
- **Reasoning: 62/100.** HLE w/ tools 55.3% is competitive. GPQA Diamond 91.2% (AA) is strong. MMLU-Pro 86.1% is solid. AA-LCR 80.0% is good for long-context reasoning. However, AA Intelligence Index 41.8 is modest. AA-HLE 39.9% is low (vs Fable 5 55.5%). CritPt 15.4% is very low. AA-Omniscience Index 7.5% is the lowest in the dataset — extremely poor knowledge calibration. The reasoning profile is split: competitive on specific benchmarks (HLE w/ tools, GPQA) but weak on composite intelligence measures and knowledge calibration.
- **Context window: 78/100.** 204K tokens per project metadata (BenchLM reports 1M — discrepancy). AA-LCR 80.0% is solid for long-context reasoning. If the 204K figure is correct, this is a moderate context window — smaller than the 1M standard for frontier models. If 1M is correct, the implementation is adequate (80% LCR). The uncertainty around the actual context window size limits confidence in this score.
- **Multimodal: 75/100.** CharXiv 89.4% is excellent for chart reasoning. Chartography 78.0% is strong. MMVU 80.5% is solid for video understanding. However, OfficeQA Pro 62.4% and BabyVision 53.4% are modest. Project metadata lists text-only I/O, but Z.AI reports vision benchmarks — suggesting possible image understanding not documented in the project. The multimodal capability appears present but limited compared to full omnimodal models.
- **Coding: 76/100.** DeepSWE 63.4% is strong for a Flash-class model (+17.2 pts over GLM-5.2). SWE-bench (Vals) 92.0% is excellent. Terminal-Bench 2.1 84.3% is competitive. LiveCodeBench 80.5% is solid. However, FrontierSWE v2 18.1% is very low. AA-SciCode 51.6% is modest. NL2Repo 56.3% is moderate. The Vals Terminal-Bench at 62.9% raises questions. The coding profile is strong on SWE-bench and DeepSWE but weak on frontier-difficulty coding (FrontierSWE v2).
- **Cost efficiency: 92/100.** Free Zen tier available — one of the few free-tier models with competitive agentic coding performance (DeepSWE 63.4%, Terminal-Bench 84.3%, SWE-bench 92.0%). Open weights available for self-hosting. For cost-sensitive deployments, this is among the best value propositions: frontier-competitive coding performance at zero cost. The free tier makes this model accessible to individual developers and small teams.
- **Overall Score: 74.4/100.** Mean of five quality dims: (81 + 62 + 78 + 75 + 76) / 5 = 74.4. Z.AI's Flash-class agentic coding model. Key strengths: DeepSWE 63.4% (strong for Flash-class), SWE-bench 92.0% (excellent), Terminal-Bench 84.3%, GDPval-AA Elo 1773 (competitive with frontier), free Zen tier, open weights. Key weaknesses: AA-Omniscience Index 7.5% (lowest in dataset), AA Intelligence Index 41.8 (modest), FrontierSWE v2 18.1% (very low), significant vendor-vs-vals discrepancies on Terminal-Bench (84.3% vs. 62.9%), context window uncertainty (204K vs. 1M), text-only per metadata. Best fit for: cost-sensitive agentic coding workflows (free tier), teams wanting open weights for self-hosting, high-frequency tool call scenarios where low latency matters, and individual developers needing frontier-competitive coding performance without API costs. Not ideal for: knowledge-intensive tasks (very low Omniscience), frontier-difficulty coding (FrontierSWE v2), or workflows requiring large context windows.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Z.AI official blog, Artificial Analysis, BenchLM, Vals AI, Proximal, OpenHarmony, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
