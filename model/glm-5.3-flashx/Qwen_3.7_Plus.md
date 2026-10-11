# GLM 5.3 FlashX — findings by Qwen 3.7 Plus

- Source: Z.AI/GLM-5.3-FlashX (`opencode/glm-5.3-flashx`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.AI's (Zhipu AI) high-speed serving variant of GLM-5.3-Flash with identical weights, delivering ~200 tok/s for low-latency multimodal agentic coding. Post-trained on a 743B parameter base. All benchmark results are identical to GLM-5.3-Flash: DeepSWE 63.4%, Terminal-Bench 2.1 84.3%, SWE-bench (Vals) 92.0%, Toolathlon 78.4%, GDPval-AA Elo 1773. The FlashX variant adds ~200 tok/s output speed (vs. ~49 tok/s for standard Flash), 1M context with 128K output, and native multimodal support (text/image/video in). AA Intelligence Index 41.8 is modest. Open weights. Text/image/video input supported. The key differentiator from standard Flash is speed: ~4x faster output for latency-sensitive agentic workflows.
- **Provider / access:** Z.AI API; OpenCode Zen. Open weights: `zai-org/GLM-5.3-Flash` (Hugging Face, shared with standard Flash).
- **Release / knowledge:** Released alongside GLM-5.3-Flash (2026-08-26); knowledge cutoff not precisely documented.
- **IDs:** `opencode/glm-5.3-flashx` (OpenCode Zen).
- **Context window:** 1,048,576 tokens (1M) total, 128K output.
- **Modalities:** Text, image, video in; text out. Native multimodal support.
- **Pricing (as of 2026-10-10):** $0.37/$1.25 per 1M in/out. Slightly higher than standard GLM-5.3-Flash but still very affordable.

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

- DeepSWE: **63.4%** (Z.AI; vs. GLM-5.2 46.2%, +17.2 pts)
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

- AA Intelligence Index: **41.8** (AA — modest; vs. GLM-5.3 Max 45)
- GPQA Diamond: **91.2%** (AA) / **86.4%** (Vals AI)
- HLE (AA): **39.9%** (AA)
- MMLU-Pro: **86.1%** (Vals AI)
- AA-Omniscience Index: **7.5%** (AA — very low)
- AA-LCR (Long Context Reasoning): **80.0%** (AA)
- MLCR-AA: **51.1%** (AA)
- CritPt (Physics): **15.4%** (AA — low)

### Normalized scores (1–100)

- **Tool use: 81/100.** Identical to GLM-5.3-Flash. Terminal-Bench 2.1 at 84.3% is strong. Toolathlon 78.4% is solid. GDPval-AA Elo 1773 is competitive with frontier models. AutomationBench 48.8–60.4% is moderate. However, Agents' Last Exam 26.3% is low, AA EnterpriseOps-Gym 33.2% is weak, and the Vals Terminal-Bench at 62.9% raises questions about the vendor-reported 84.3% (a 21-point discrepancy). GDP.pdf 15.4% is very low.
- **Reasoning: 62/100.** Identical to GLM-5.3-Flash. HLE w/ tools 55.3% is competitive. GPQA Diamond 91.2% (AA) is strong. MMLU-Pro 86.1% is solid. AA-LCR 80.0% is good. However, AA Intelligence Index 41.8 is modest. AA-HLE 39.9% is low. CritPt 15.4% is very low. AA-Omniscience Index 7.5% is very low.
- **Context window: 82/100.** 1M tokens total with 128K output. AA-LCR 80.0% is solid for long-context reasoning. The 1M context window is standard for frontier models. 128K output is generous. The FlashX variant runs at ~200 tok/s, making long-context workflows significantly faster than standard Flash (~49 tok/s).
- **Multimodal: 75/100.** Identical to GLM-5.3-Flash. CharXiv 89.4% is excellent. Chartography 78.0% is strong. MMVU 80.5% is solid. Text, image, and video input supported natively. The FlashX variant's higher speed benefits multimodal agentic workflows where latency matters.
- **Coding: 76/100.** Identical to GLM-5.3-Flash. DeepSWE 63.4% is strong. SWE-bench (Vals) 92.0% is excellent. Terminal-Bench 2.1 84.3% is competitive. LiveCodeBench 80.5% is solid. However, FrontierSWE v2 18.1% is very low. AA-SciCode 51.6% is modest. The Vals Terminal-Bench at 62.9% raises questions.
- **Cost efficiency: 93/100.** $0.37/$1.25 per 1M is very affordable. The FlashX variant's ~200 tok/s output speed (vs. ~49 tok/s for standard Flash) means tasks complete ~4x faster, reducing effective cost-per-task when accounting for time value. Open weights available for self-hosting. For latency-sensitive agentic workflows, FlashX offers the best speed-to-intelligence ratio at this price point.
- **Overall Score: 75/100.** Mean of five quality dims: (81 + 62 + 82 + 75 + 76) / 5 = 75.2. Z.AI's high-speed serving variant of GLM-5.3-Flash. Key strengths: identical intelligence to GLM-5.3-Flash (DeepSWE 63.4%, SWE-bench 92.0%, Terminal-Bench 84.3%, GDPval-AA Elo 1773), ~200 tok/s output speed (4x faster than standard Flash), 1M context with 128K output, native multimodal support (text/image/video), open weights, very affordable ($0.37/$1.25). Key weaknesses: AA-Omniscience Index 7.5% (very low), AA Intelligence Index 41.8 (modest), FrontierSWE v2 18.1% (very low), significant vendor-vs-vals discrepancy on Terminal-Bench (84.3% vs. 62.9%), same intelligence as standard Flash (no accuracy improvement). Best fit for: latency-sensitive agentic coding workflows where ~200 tok/s speed matters, multimodal agentic tasks requiring fast image/video processing, teams wanting GLM-5.3-Flash intelligence with 4x faster output, and cost-sensitive deployments where speed and affordability are both critical. Not ideal for: tasks where maximum intelligence is needed over speed (use GLM-5.3 Max instead), knowledge-intensive tasks (very low Omniscience), or frontier-difficulty coding (FrontierSWE v2).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Z.AI official blog, Artificial Analysis, BenchLM, Vals AI, Proximal, OpenHarmony, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores. Benchmarks are identical to GLM-5.3-Flash (same weights, faster serving).
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
