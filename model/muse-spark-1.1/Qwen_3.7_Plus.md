# Muse Spark 1.1 — findings by Qwen 3.7 Plus

- Source: Meta Superintelligence Labs/Muse-Spark-1.1 (`opencode/muse-spark-1.1`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' multimodal reasoning model released July 9, 2026, built for agentic tasks with major gains in tool/computer use, coding, and multimodal understanding over predecessor Muse Spark. AA Intelligence Index 51 (xhigh). Strong agentic profile: Terminal-Bench 2.1 80.0% (self-reported) / 69.3% (Vals AI), MCP Atlas 88.1%, OSWorld-Verified 80.8%, Cybench 92.9%, DeepSearchQA 84.9%. Coding: SWE-bench Pro 61.5% (top on Scale's standardized public set), LiveCodeBench 85.9% (Vals), SWE-bench 82.0% (Vals), AA Coding Index 71.3. HLE 62.1% with tools (52.2% without) is strong. GPQA Diamond 89.8% (AA) / 91.2% (Vals). Multimodal: CharXiv 88.4%, Design Arena 1275 Elo. 1M context with active management (MRCR 1M 54.1%). Multi-agent orchestration: trained to delegate across parallel subagents. AA-Omniscience Hallucination Rate 50% is moderate. Proprietary (not open-weight). Entry-frontier pricing at $1.25/$4.25.
- **Provider / access:** Meta Model API (public preview), Meta AI app, meta.ai. Proprietary — no open weights.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff not precisely documented.
- **IDs:** `opencode/muse-spark-1.1` (OpenCode/OpenRouter); `meta/muse-spark-1.1` (Meta Model API).
- **Context window:** 1,048,576 tokens (1M); 131K output. Model actively manages context — remembers actions, retrieves from earlier work, compacts context.
- **Modalities:** Text, image, PDF/file in; text out. Multimodal perception and reasoning including video understanding.
- **Pricing (as of 2026-10-10):** $1.25 in / $4.25 out per 1M tokens; $0.15 cached. Entry-frontier pricing — significantly cheaper than premium-tier models.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (Meta self-reported; Vals AI: 69.3%)
- MCP Atlas: **88.1%** (Meta — excellent tool use)
- Toolathlon: **75.6%** (Meta — strong multi-tool)
- OSWorld-Verified: **80.8%** (Meta — strong computer use)
- WebArena-Verified: **69%** (Meta — moderate web browsing)
- DeepSearchQA: **84.9%** (Meta — strong deep research)
- Cybench: **92.9%** (Meta — excellent cybersecurity)
- CyberGym: **59.0%** (Meta — moderate)
- Finance Agent v2: **57.2%** (Meta — moderate financial agentic)
- DeepSWE: **53.3%** (Meta — moderate autonomous SWE)
- JobBench: **54.7%** (Meta — moderate)
- OSWorld 2.0: **14.2%** (Meta — low on hardest version)
- ExploitGym: **0.8%** (Meta — very low)
- GDPval-AA: **1375 Elo** (Meta; AA normalized: 35.7%)
- AA Agentic Index: **27.5%** (AA — low)

Coding:

- SWE-bench Pro: **61.5%** (Meta — top on Scale's standardized public set; Muse Spark 1.1 tops at 61.5% public, 51.5% commercial)
- Terminal-Bench 2.1: **80.0%** (Meta; Vals: 69.3%)
- AA Coding Index: **71.3** (AA — strong)
- AA-SciCode: **58.8%** (AA — moderate)
- LiveCodeBench (Vals): **85.9%** (Vals AI — excellent)
- SWE-bench (Vals): **82.0%** (Vals AI — strong)

Multimodal:

- CharXiv: **88.4%** (Meta — strong chart understanding)
- BabyVision: **76.3%** (Meta — moderate)
- Design Arena Website: **1275 Elo** (OpenRouter — strong web design)

Reasoning / knowledge:

- HLE: **62.1%** with tools (Meta; without tools: 52.2%)
- AA-HLE: **46.2%** (AA)
- AA-GPQA Diamond: **89.8%** (AA; Vals: 91.2%)
- MMLU-Pro (Vals): **88.7%** (Vals AI — strong)
- HealthBench Professional: **59.3%** (Meta — moderate)
- AA-LCR: **77.7%** (AA — strong long-context reasoning)
- MRCR 1M: **54.1%** (Meta — moderate long-context recall)
- CritPt: **15.1%** (AA — moderate)
- AA-Omniscience Index: **28.1%** (AA — modest)
- AA-Omniscience Accuracy: **52.1%** (AA — moderate)
- AA-Omniscience Hallucination Rate: **50.0%** (AA — moderate; model hallucinates half the time when uncertain)

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 88.1% is excellent. Terminal-Bench 2.1 80% (self-reported) / 69.3% (Vals) is strong. OSWorld-Verified 80.8% is strong (computer use). Cybench 92.9% is excellent (cybersecurity). DeepSearchQA 84.9% is strong (deep research). Toolathlon 75.6% is strong. However, AA Agentic Index 27.5% is low. OSWorld 2.0 14.2% is low. ExploitGym 0.8% is very low. Finance Agent v2 57.2% is moderate. The model excels at specialized agentic tasks (computer use, cybersecurity, research, tool use) but scores low on standardized AA agentic composites.
- **Reasoning: 68/100.** HLE 62.1% with tools is strong (52.2% without tools). GPQA Diamond 89.8% (AA) / 91.2% (Vals) is strong. MMLU-Pro 88.7% is strong. AA-LCR 77.7% confirms effective long-context reasoning. CritPt 15.1% is moderate. AA-HLE 46.2% is moderate. AA-Omniscience Accuracy 52.1% is moderate. The reasoning profile is solid — HLE with tools is a standout, and GPQA Diamond is strong.
- **Context window: 90/100.** 1M tokens with 131K output. Model actively manages context — remembers actions, retrieves from earlier work, compacts to preserve critical steps. MRCR 1M 54.1% demonstrates functional long-context recall. AA-LCR 77.7% confirms effective long-context reasoning. The active context management is a differentiator — not just a large window but trained behavior for using it effectively.
- **Multimodal: 78/100.** Text, image, PDF/file input supported. CharXiv 88.4% is strong (chart understanding). Design Arena 1275 Elo is strong (web design). BabyVision 76.3% is moderate. OSWorld-Verified 80.8% demonstrates visual grounding for computer use. The model handles visual-to-code, ultra-descriptive captioning, and multimodal agentic workflows. Limitation: no audio/speech input.
- **Coding: 72/100.** SWE-bench Pro 61.5% is top on Scale's standardized public set. LiveCodeBench 85.9% (Vals) is excellent. SWE-bench 82.0% (Vals) is strong. Terminal-Bench 2.1 80% is strong. AA Coding Index 71.3 is strong. However, DeepSWE 53.3% is moderate (autonomous SWE). AA-SciCode 58.8% is moderate. The coding profile is strong for practical coding and in-editor work, moderate for autonomous software engineering.
- **Cost efficiency: 85/100.** $1.25/$4.25 per 1M with $0.15 cached is entry-frontier pricing — significantly cheaper than premium models ($2–$5/$6–$15 typical). The cached rate of $0.15 is very competitive for agentic workloads with high cache hit rates. Combined with 1M context reducing round-trips and multi-agent orchestration optimizing latency, the effective cost per completed task is likely very competitive. Not as cheap as MiniMax M3 ($0.30/$1.20) but substantially cheaper than Claude/GPT flagships.
- **Overall Score: 76/100.** Mean of five quality dims: (72 + 68 + 90 + 78 + 72) / 5 = 76.0. Muse Spark 1.1 is Meta's agentic multimodal reasoning model. Key strengths: Terminal-Bench 2.1 80% / 69.3% (Vals), MCP Atlas 88.1%, OSWorld-Verified 80.8% (computer use), Cybench 92.9% (cybersecurity), DeepSearchQA 84.9% (deep research), SWE-bench Pro 61.5% (top on Scale public set), LiveCodeBench 85.9% (Vals), AA Coding Index 71.3, HLE 62.1% with tools (strong), GPQA Diamond 89.8% / 91.2% (Vals), 1M context with active management (compaction, retrieval, memory), multi-agent orchestration (parallel subagent delegation), entry-frontier pricing ($1.25/$4.25, $0.15 cached). Key weaknesses: AA Agentic Index 27.5% (low), OSWorld 2.0 14.2% (low), ExploitGym 0.8% (very low), AA-Omniscience Hallucination Rate 50% (modate — hallucinates half the time when uncertain), DeepSWE 53.3% (moderate autonomous SWE), proprietary (no open weights), MRCR 1M 54.1% (moderate long-context recall). Best fit for: agentic workflows requiring computer use (OSWorld 80.8%), cybersecurity tasks (Cybench 92.9%), deep research (DeepSearchQA 84.9%), multi-agent orchestration with 1M context, cost-sensitive teams wanting frontier-class coding and agentic at entry-tier pricing, teams in the Meta ecosystem. Not ideal for: teams needing open weights (proprietary), autonomous SWE (DeepSWE 53.3% moderate), tasks requiring high knowledge recall without hallucination (50% hallucination rate), long-context recall precision (MRCR 1M 54.1% moderate).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Meta AI official blog, BenchLM, Vals AI, Artificial Analysis, Morph, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
