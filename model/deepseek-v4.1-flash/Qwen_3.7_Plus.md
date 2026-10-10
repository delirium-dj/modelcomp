# DeepSeek V4.1 Flash — findings by Qwen 3.7 Plus

- Source: DeepSeek/DeepSeek-V4.1-Flash (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE model, released September 10, 2026. 1M context with 384K output — the largest output window in the dataset. Terminal-Bench 2.1 90.6% is the highest in the dataset. DeepSWE 74.2% is strong. Codeforces Elo 3471 is exceptional. CyberGym 88.1% is strong. HLE w/ tools 63.9% is competitive. AA AutomationBench 68.9% is solid. However, AA-Omniscience Hallucination Rate 96.5% is the highest in the dataset — the model hallucinates on nearly all factual queries. AA-Omniscience Index -5.3% is negative. AA Intelligence Index 39.5 is modest. BenchLM ranks #23 overall (67.9/100). Hands-on coding tests expose a gap between benchmark scores and real output per MindStudio. MIT-licensed open weights.
- **Provider / access:** DeepSeek API; OpenCode Zen (paid, no Zen Free ID). Open weights under MIT license: `deepseek-ai/DeepSeek-V4.1-Flash` (Hugging Face).
- **Release / knowledge:** 2026-09-10 release; knowledge cutoff not precisely documented.
- **IDs:** `deepseek/deepseek-v4.1-flash` (OpenCode Zen); `deepseek/deepseek-v4.1-flash` (DeepSeek API).
- **Context window:** 1,000,000 tokens (1M) total, 384K output — largest output window in the dataset.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-10-10):** $0.30/$1.20 per 1M in/out (some providers: $0.15/$0.60). Cache read $0.003/1M. Among the cheapest models in the dataset.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek — HIGHEST in dataset) / **74.5%** (Vals AI)
- Terminal-Bench 3.0: **30%** (DeepSeek — behind only Opus 5)
- Terminal-Bench 4.0: **31.2%** (DeepSeek) / **26.8%** (AA)
- CyberGym: **88.1%** (DeepSeek)
- HLE w/ tools: **63.9%** (DeepSeek — competitive)
- AA AutomationBench: **68.9%** (AA)
- AutomationBench: **54.8%** (DeepSeek)
- GDPval-AA: **55.0%** normalized / Elo **1600** (AA)
- AA Briefcase Elo: **1420** (AA)
- CWE-bench v1: **55.0%** (Collinear)
- Agents' Last Exam: **31.8%** (DeepSeek)
- AA ITBench: **46.9%** (AA)
- ExploitGym: **15.3%** (DeepSeek)
- GDP.pdf: **12.8%** (AA — very low)

Coding:

- Terminal-Bench 2.1: **90.6%** (DeepSeek)
- DeepSWE: **74.2%** (DeepSeek — strong; beats GPT-5.6 Sol and Claude Opus 5 per Flowtivity)
- Codeforces Elo: **3471** (DeepSeek — exceptional)
- NL2Repo: **65.4%** (DeepSeek technical report)
- OpenHarmony Bench: **60.3%** (OpenHarmony)
- AA-SciCode: **51.9%** (AA)
- ProgramBench: **20.3%** (DeepSeek)
- Bug Hunt Bench: **21.7 fixes** (Bug Hunt Bench)

Multimodal:

- BabyVision w/ Python: **89.6%** (DeepSeek)
- Chartography (with tools): **78.9%** (DeepSeek)
- AA-MMMU-Pro: **77.0%** (AA)
- ZeroBench w/ Python: **49.0%** (DeepSeek)

Reasoning / knowledge:

- APEX: **65.6%** (DeepSeek)
- AA-LCR (Long Context Reasoning): **84.0%** (AA — strong)
- GPQA Diamond: **90.9%** (DeepSeek)
- AA-HLE: **39.2%** (AA)
- HLE: **36.8%** (DeepSeek)
- AA Intelligence Index: **39.5** (AA)
- MLCR-AA: **22.8%** (AA — low)
- CritPt (Physics): **14.3%** (AA — low)
- AA-Omniscience Index: **-5.3%** (AA — negative)
- AA-Omniscience Accuracy: **46.4%** (AA)
- AA-Omniscience Hallucination Rate: **96.5%** (AA — HIGHEST in dataset)

### Normalized scores (1–100)

- **Tool use: 73/100.** Terminal-Bench 2.1 90.6% is the HIGHEST in the dataset. Terminal-Bench 3.0 30% is strong (behind only Opus 5). CyberGym 88.1% is strong. AA AutomationBench 68.9% is solid. HLE w/ tools 63.9% is competitive. GDPval-AA Elo 1600 is competitive. CWE-bench 55% is moderate. However, Terminal-Bench 4.0 26.8% (AA) is low (latest version), ExploitGym 15.3% is low, GDP.pdf 12.8% is very low, and the gap between vendor-reported TB 2.1 (90.6%) and Vals AI (74.5%) is a concerning 16-point discrepancy. Agents' Last Exam 31.8% is low. The tool use profile is exceptional on terminal benchmarks but weak on document-based agentic tasks.
- **Reasoning: 48/100.** AA-LCR 84% is strong for long-context reasoning. GPQA Diamond 90.9% is excellent. APEX 65.6% is solid. However, AA Intelligence Index 39.5 is modest. AA-HLE 39.2% is low. CritPt 14.3% is low. MLCR 22.8% is weak. AA-Omniscience Index -5.3% is negative. AA-Omniscience Hallucination Rate 96.5% is the HIGHEST in the dataset — the model hallucinates on nearly all factual queries, making it unreliable for knowledge-intensive tasks without external verification.
- **Context window: 88/100.** 1M tokens total with 384K output — the largest output window in the dataset. AA-LCR 84% is strong for long-context reasoning. The 384K output cap is exceptional — 3x the standard 128K. For input-heavy agentic workloads requiring long-form output generation, this is the best option in the dataset.
- **Multimodal: 79/100.** BabyVision w/ Python 89.6% is excellent. Chartography 78.9% is strong. AA-MMMU-Pro 77% is solid. Image input supported. The multimodal capability is strong for vision tasks with Python code generation.
- **Coding: 75/100.** Terminal-Bench 2.1 90.6% is the highest in the dataset. DeepSWE 74.2% is strong (beats GPT-5.6 Sol and Claude Opus 5 per Flowtivity). Codeforces Elo 3471 is exceptional — among the highest competitive programming ratings. NL2Repo 65.4% is solid. However, ProgramBench 20.3% is low. AA-SciCode 51.9% is modest. Hands-on coding tests expose a gap between benchmark scores and real output per MindStudio. The coding profile is exceptional on headline benchmarks but may not translate consistently to real-world coding tasks.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M is among the cheapest. Cache read at $0.003/1M is essentially free. MIT-licensed open weights for self-hosting. 384K output window reduces the need for multi-turn generation. For cost-sensitive agentic coding workflows, this is among the best value propositions: highest Terminal-Bench in the dataset at pennies per task.
- **Overall Score: 72.6/100.** Mean of five quality dims: (73 + 48 + 88 + 79 + 75) / 5 = 72.6. DeepSeek's MIT-licensed 552B Flash MoE. Key strengths: Terminal-Bench 2.1 90.6% (HIGHEST in dataset), DeepSWE 74.2% (strong), Codeforces 3471 Elo (exceptional), CyberGym 88.1% (strong), AA-LCR 84% (strong), 384K output (largest in dataset), 1M context, MIT-licensed open weights, ultra-cheap ($0.30/$1.20), GPQA Diamond 90.9% (excellent). Key weaknesses: AA-Omniscience Hallucination Rate 96.5% (HIGHEST in dataset — model hallucinates on nearly all factual queries), AA-Omniscience Index -5.3% (negative), AA Intelligence Index 39.5 (modest), Terminal-Bench 4.0 26.8% (low), GDP.pdf 12.8% (very low), significant vendor-vs-vals discrepancy on TB 2.1 (90.6% vs. 74.5%), hands-on coding gap per MindStudio. Best fit for: terminal/CLI agentic workflows where Terminal-Bench performance matters, competitive programming (Codeforces 3471), cost-sensitive deep research (384K output), teams wanting MIT-licensed open weights, and long-form code generation (384K output). Not ideal for: any task requiring factual reliability (96.5% hallucination rate), knowledge-intensive workflows, document-based agentic tasks (GDP.pdf 12.8%), or production use without external fact-checking.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across DeepSeek official announcement, BenchLM, Artificial Analysis, Vals AI, Flowtivity, MindStudio, Hugging Face model card, Collinear CWE-bench, OpenHarmony, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
