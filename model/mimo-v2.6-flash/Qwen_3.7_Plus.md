# MiMo V2.6 Flash — findings by Qwen 3.7 Plus

- Source: Xiaomi/MiMo-V2.6-Flash (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE model (309B total / 15B active parameters), released September 21, 2026. 1M context with text/image/video/audio input. Tuned for long-horizon agentic coding at ultra-low cost. Terminal-Bench 2.1 87.6% is among the highest in the dataset. DeepSWE 67.9% is strong. OSWorld 80.8% is excellent for computer use. CyberGym 95.1% is exceptional. Vibe Code Bench 78.96% is solid. However, significant concerns about "benchmaxxing" — AA-Omniscience Index -12.7% is the worst in the dataset, ProgramBench 0.5% is near-zero, ExploitGym 6% is very low, and AA Intelligence Index 38 is modest. A Reddit post titled "MiMo-V2.6 is a benchmaxxed scam" highlights the gap between strong headline benchmarks and weak general intelligence. MIT-licensed open weights. Ultra-cheap at $0.14/$0.28 per 1M with cached input at $0.0028.
- **Provider / access:** Xiaomi API; OpenCode Zen (paid, no Zen Free ID for this slug — the free tier lives in mimo-v2.6-free/). Open weights under MIT license: `XiaomiMiMo/MiMo-V2.6-Flash-RL` (Hugging Face).
- **Release / knowledge:** 2026-09-21 release; knowledge cutoff not precisely documented.
- **IDs:** `xiaomi/mimo-v2.6-flash` (OpenCode Zen); `xiaomi/mimo-v2.6-flash` (Xiaomi API).
- **Context window:** 1,000,000 tokens (1M) total.
- **Modalities:** Text, image, video, audio in; text out. Omnimodal input support.
- **Pricing (as of 2026-10-10):** $0.14/$0.28 per 1M in/out (Xiaomi API). Cached input $0.0028/1M. Cost per task: ~$0.06. Output speed: 56.6 tok/s. Among the cheapest models in the dataset.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report) / **76.4%** (Vals AI)
- OSWorld-Verified: **80.8%** (Xiaomi — excellent computer use)
- Toolathlon-Verified: **73.6%** (Xiaomi)
- CyberGym: **95.1%** (Xiaomi — exceptional)
- JobBench: **61.2%** (Xiaomi)
- AutomationBench: **52.3%** (Xiaomi) / **64.05%** (AA)
- GDPval-AA: **55.5%** normalized / Elo **1600** (AA)
- Agents' Last Exam: **27.6%** (Xiaomi)
- Terminal-Bench 4.0: **28.8%** (Xiaomi) / **22.73%** (AA) / **24.24%** (Vals AI)
- ExploitGym: **6.0%** (Xiaomi — very low)

Coding:

- DeepSWE: **67.9%** (Xiaomi — strong)
- Terminal-Bench 2.1: **87.6%** (Xiaomi)
- Vibe Code Bench v1.1: **78.96%** (Vals AI)
- CyberBench v1.1: **75.36%** (Vals AI)
- Code Migration: **40.93%** (Vals AI)
- AA-SciCode: **51.3%** (AA) / **51.27%** (Vals AI)
- ProgramBench: **26.0%** (Xiaomi) / **0.5%** (Vals AI — near-zero)

Multimodal:

- OSWorld-Verified: **80.8%** (Xiaomi — computer use)
- AA-MMMU-Pro: **73.1%** (AA)

Reasoning / knowledge:

- AA-LCR (Long Context Reasoning): **74.3%** (AA)
- ProofBench v1.1: **63.0%** (Vals AI)
- BioMysteryBench: **69.26%** (Vals AI)
- AA Intelligence Index: **38** (AA) / **37.9** (AA model page)
- AA-HLE: **35.1%** (AA)
- CritPt (Physics): **12.0%** (AA — low)
- AA-Omniscience Index: **-12.7%** (AA — worst in dataset, negative)
- AA-Omniscience Accuracy: **27.0%** (AA)
- AA-Omniscience Hallucination Rate: **54.4%** (AA)
- GDP.pdf: **9.0%** (AA — very low)
- MysteryMechanism: **21.62%** (Vals AI — low)

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 87.6% is among the highest in the dataset. OSWorld 80.8% is excellent for computer use. Toolathlon 73.6% is solid. CyberGym 95.1% is exceptional. GDPval-AA Elo 1600 is competitive. AA AutomationBench 64.05% is solid. However, Terminal-Bench 4.0 22.73% is low (latest version), ExploitGym 6% is very low, Agents' Last Exam 27.6% is low, and the gap between vendor-reported TB 2.1 (87.6%) and Vals AI (76.4%) raises questions. JobBench 61.2% is moderate. The tool use profile is exceptional on specific benchmarks (TB 2.1, CyberGym) but weak on others (TB 4.0, ExploitGym).
- **Reasoning: 48/100.** AA-LCR 74.3% is decent for long-context reasoning. ProofBench 63% is moderate. BioMysteryBench 69.26% is solid. However, AA Intelligence Index 38 is modest. AA-HLE 35.1% is low. CritPt 12% is low. AA-Omniscience Index -12.7% is the worst in the dataset (negative score). GDP.pdf 9% is very low. MysteryMechanism 21.62% is low. The reasoning profile is deeply split: decent on LCR and some domain-specific benchmarks, but catastrophically weak on knowledge calibration (Omniscience -12.7%) and general intelligence measures.
- **Context window: 82/100.** 1M tokens total. AA-LCR 74.3% is decent for long-context reasoning. The 1M context window is standard for frontier models. Output limit not published. The combination of 1M context and omnimodal input makes this suitable for long-horizon agentic workflows.
- **Multimodal: 72/100.** AA-MMMU-Pro 73.1% is solid. OSWorld 80.8% demonstrates computer use capability. Omnimodal input support (text, image, video, audio) is the broadest in the Flash tier. The multimodal capability is broad in input types but moderate in benchmark performance.
- **Coding: 62/100.** DeepSWE 67.9% is strong. Vibe Code Bench 78.96% is solid. CyberBench 75.36% is strong. However, ProgramBench 0.5% (Vals) is near-zero — possibly the lowest coding score in the dataset. Code Migration 40.93% is modest. AA-SciCode 51.3% is modest. The coding profile is split: strong on DeepSWE and Vibe Code Bench, but catastrophically weak on ProgramBench. This pattern is consistent with "benchmaxxing" concerns — strong performance on popular benchmarks with very weak performance on others.
- **Cost efficiency: 96/100.** $0.14/$0.28 per 1M is among the cheapest in the dataset. Cached input at $0.0028/1M is essentially free. Cost per task: ~$0.06. MIT-licensed open weights for self-hosting. For cost-sensitive high-frequency agentic workflows, this is among the best value propositions: strong Terminal-Bench and DeepSWE performance at pennies per task. The MIT license has no commercial restrictions.
- **Overall Score: 66.4/100.** Mean of five quality dims: (68 + 48 + 82 + 72 + 62) / 5 = 66.4. Xiaomi's MIT-licensed omnimodal Flash model. Key strengths: Terminal-Bench 2.1 87.6% (among highest), DeepSWE 67.9% (strong), OSWorld 80.8% (excellent), CyberGym 95.1% (exceptional), 1M context, omnimodal input (text/image/video/audio), ultra-cheap ($0.14/$0.28), MIT-licensed open weights, Vibe Code Bench 78.96% (solid). Key weaknesses: AA-Omniscience Index -12.7% (worst in dataset), ProgramBench 0.5% (near-zero), AA Intelligence Index 38 (modest), ExploitGym 6% (very low), GDP.pdf 9% (very low), Terminal-Bench 4.0 22.73% (low), significant "benchmaxxing" concerns (strong headline benchmarks with very weak general intelligence). Best fit for: cost-sensitive agentic coding workflows where Terminal-Bench and DeepSWE performance matters, high-frequency tool call scenarios at ultra-low cost, teams wanting MIT-licensed open weights for self-hosting, and omnimodal input workflows. Not ideal for: knowledge-intensive tasks (worst Omniscience in dataset), general-purpose intelligence (AA Index 38), or tasks requiring consistent performance across diverse benchmarks (benchmaxxing concerns).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Xiaomi MiMo official site, BenchLM, Artificial Analysis, Vals AI, AIEvals, Xiaomi technical report (Hugging Face), and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
