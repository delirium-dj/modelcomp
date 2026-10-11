# MiMo V2.6 Free — findings by Qwen 3.7 Plus

- Source: Xiaomi/MiMo-V2.6-Free (`opencode/mimo-v2-6-free`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's open-weights omnimodal Flash MoE (309B total / 15B active parameters) served as the $0 Zen free tier. MIT license. Based on the MiMo V2.6-Flash architecture with exceptional agentic capabilities: CyberGym 95.1%, OSWorld-Verified 80.8%, Terminal-Bench 2.1 87.6%, Toolathlon-Verified 73.6%. DeepSWE 67.9% is strong for a 15B-active model. 1M context window with 128K output. Omnimodal: text + image + video + audio input. AA Intelligence Index 37.9%. AA-Omniscience Index -12.7% (negative — more wrong than right). 54.4% hallucination rate. Top pick for high-volume agentic coding at near-zero cost.
- **Provider / access:** OpenCode Zen ($0 free tier); paid fallback $0.14/$0.28 per 1M. Open weights under MIT license (Hugging Face: `XiaomiMiMo/MiMo-V2.6-Flash-RL`). Self-hosting possible but requires significant compute (309B MoE).
- **Release / knowledge:** Released September 22, 2026 (MiMo V2.6 series). Knowledge cutoff not precisely documented.
- **IDs:** `opencode/mimo-v2-6-free` (OpenCode Zen free tier); `mimo-v2-6-flash` (Xiaomi API); `XiaomiMiMo/MiMo-V2.6-Flash-RL` (Hugging Face).
- **Context window:** 1,048,576 tokens (1M); 128K output tokens. AA-LCR 74.3% confirms effective long-context reasoning. Among the largest context windows available.
- **Modalities:** Text, image, video, audio in; text out. Full omnimodal support — one of few models supporting all four input modalities.
- **Pricing (as of 2026-10-10):** Free on OpenCode Zen tier ($0 in/out). Paid fallback: $0.14 per 1M input; $0.28 per 1M output; $0.0028 cached. Among the cheapest models available — Flash input is ~12.5x cheaper than GPT-5.2 ($1.75) and ~50x cheaper than Claude Opus 4.5 ($5.00).

### Raw benchmarks found

Agent / tool use:

- CyberGym: **95.1%** (Xiaomi — exceptional cybersecurity)
- OSWorld-Verified: **80.8%** (Xiaomi — excellent computer use)
- Terminal-Bench 2.1: **87.6%** (Xiaomi — excellent terminal use)
- Toolathlon-Verified: **73.6%** (Xiaomi — strong tool use)
- JobBench: **61.2%** (Xiaomi — moderate-strong)
- GDPval-AA (normalized): **55.5%** (AA — moderate)
- AutomationBench: **52.3%** (Xiaomi — moderate)
- Agents' Last Exam: **27.6%** (Xiaomi — low)
- Terminal-Bench 4.0: **28.8%** (Xiaomi — low)
- ExploitGym: **6.0%** (Xiaomi — very low)

Coding:

- Terminal-Bench 2.1: **87.6%** (Xiaomi — excellent)
- DeepSWE: **67.9%** (Xiaomi — strong)
- AA-SciCode: **51.3%** (AA — moderate)
- ProgramBench: **26.0%** (Xiaomi — low)

Multimodal:

- AA-MMMU-Pro: **73.1%** (AA — strong)

Reasoning / knowledge:

- AA-LCR: **74.3%** (AA — strong long-context reasoning)
- AA-HLE: **35.1%** (AA — low)
- CritPt: **12.0%** (AA — low)
- AA Intelligence Index: **37.9%** (AA — moderate)
- AA-Omniscience Index: **-12.7%** (AA — NEGATIVE; more wrong than right)
- AA-Omniscience Accuracy: **27.0%** (AA — very low)
- AA-Omniscience Hallucination Rate: **54.4%** (AA — moderate-high)

### Normalized scores (1–100)

- **Tool use: 76/100.** CyberGym 95.1% is exceptional (cybersecurity). OSWorld-Verified 80.8% is excellent (computer use). Terminal-Bench 2.1 87.6% is excellent (terminal use). Toolathlon-Verified 73.6% is strong (tool use). JobBench 61.2% is moderate-strong. GDPval-AA 55.5% is moderate. AutomationBench 52.3% is moderate. Agents' Last Exam 27.6% is low. Terminal-Bench 4.0 28.8% is low. ExploitGym 6% is very low. The model excels at computer use, terminal operations, and cybersecurity but struggles on newer/harder agentic benchmarks.
- **Reasoning: 42/100.** AA-LCR 74.3% is strong. However, AA-HLE 35.1% is low. CritPt 12% is low. AA-Omniscience Index -12.7% is negative (more wrong than right). AA-Omniscience Accuracy 27% is very low. AA-Omniscience Hallucination Rate 54.4% is moderate-high. The reasoning profile is weak — strong long-context reasoning but poor knowledge reliability and very low open-ended reasoning.
- **Context window: 95/100.** 1M context (1,048,576 tokens) with 128K output. Among the largest context windows available. AA-LCR 74.3% confirms effective long-context reasoning. The 1M context is class-leading.
- **Multimodal: 55/100.** AA-MMMU-Pro 73.1% is strong. The model supports text + image + video + audio input (full omnimodal), one of few models with all four input modalities. However, benchmark coverage is very limited (only one multimodal benchmark reported by BenchLM). The omnimodal support is a significant differentiator for versatility, but the limited benchmark data makes it hard to assess depth of visual/audio capabilities.
- **Coding: 58/100.** Terminal-Bench 2.1 87.6% is excellent. DeepSWE 67.9% is strong. However, AA-SciCode 51.3% is moderate. ProgramBench 26% is low. The coding profile is anchored by exceptional terminal/cybersecurity coding (CyberGym 95.1%, Terminal-Bench 87.6%) and strong DeepSWE, but weaker on scientific coding and program generation.
- **Cost efficiency: 100/100.** FREE on OpenCode Zen tier ($0 in/out). Even the paid fallback ($0.14/$0.28 per 1M) is ~12.5x cheaper than GPT-5.2 on input and ~50x cheaper than Claude Opus 4.5. MIT license allows free self-hosting. The combination of $0 pricing + 1M context + omnimodal input + strong agentic capabilities (CyberGym 95.1%, OSWorld 80.8%, Terminal-Bench 87.6%) makes this arguably the best value model available for high-volume agentic workloads.
- **Overall Score: 65.2/100.** Mean of five quality dims: (76 + 42 + 95 + 55 + 58) / 5 = 65.2. MiMo V2.6 Free is Xiaomi's open-weights omnimodal Flash MoE (309B/15B active) served as the $0 Zen free tier. Key strengths: CyberGym 95.1% (exceptional cybersecurity), Terminal-Bench 2.1 87.6% (excellent terminal use), OSWorld-Verified 80.8% (excellent computer use), Toolathlon-Verified 73.6% (strong tool use), DeepSWE 67.9% (strong), 1M context window (class-leading), 128K output, full omnimodal input (text + image + video + audio), MIT license (free self-hosting), $0 free tier pricing, paid fallback $0.14/$0.28 per 1M (extremely cheap), AA-LCR 74.3% (strong long-context reasoning), JobBench 61.2% (moderate-strong). Key weaknesses: AA-Omniscience Index -12.7% (negative — more wrong than right), AA-Omniscience Accuracy 27% (very low), AA-Omniscience Hallucination Rate 54.4% (moderate-high), AA-HLE 35.1% (low), CritPt 12% (low), Terminal-Bench 4.0 28.8% (low), Agents' Last Exam 27.6% (low), ExploitGym 6% (very low), ProgramBench 26% (low), limited independent benchmark coverage (BenchLM only 24 of 625 benchmarks), AA Intelligence Index 37.9% (moderate). Best fit for: high-volume agentic coding at zero cost, cybersecurity tasks (CyberGym 95.1%), computer-use agents (OSWorld 80.8%), terminal operations (Terminal-Bench 87.6%), long-context work (1M window), omnimodal applications (text + image + video + audio), cost-sensitive deployments ($0 free tier), tool-use workflows (Toolathlon 73.6%). Not ideal for: knowledge-intensive tasks requiring factual reliability (negative Omniscience), frontier reasoning (HLE 35.1%, CritPt 12%), autonomous SWE requiring high reliability (Agents' Last Exam 27.6%), program generation (ProgramBench 26%), tasks requiring deep multimodal understanding (limited benchmark coverage).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Xiaomi MiMo official site, BenchLM, Artificial Analysis, MyClaw review, Hugging Face model card, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
