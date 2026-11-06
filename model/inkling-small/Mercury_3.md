# Inkling-Small — findings by Mercury 3

- Source: Thinking Machines Lab (Inkling-Small)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's second open-weight release (2026-07-30), a quarter-sized sibling of flagship Inkling (276B/12B active MoE vs 975B/41B). Matches or exceeds Inkling on reasoning and agentic coding at much lower compute; aimed at cheaper multimodal-agent deployment.
- **Provider / access:** Thinking Machines Lab API + Tinker (chat, fine-tuning) + downloadable open weights on Hugging Face (`thinkingmachines/Inkling-Small`). License: Apache 2.0.
- **Release / knowledge:** Released 2026-07-30; knowledge cutoff not published.
- **IDs:** `thinkingmachines/Inkling-Small`.
- **Context window:** up to 1M tokens per model card (some API listings serve 524K).
- **Modalities:** text + image + audio input (natively multimodal, encoder-free: dMel spectrograms for audio, 40×40 image patches); text output; variable thinking effort (minimal→xhigh); audio intelligence emphasized.
- **Pricing (as of 2026-11):** API ~$0.30–0.58 in / $1.20–1.44 out per 1M (cached $0.06); Tinker-hosted rates apply; open weights free.
- **Architecture:** Sparse MoE transformer, 276B total / 12B active; trained on NVIDIA GB300 NVL72.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas (public/all): **79.6/79.2%** (Thinking Machines / Scale AI)
- Toolathlon Verified: **54.4%**
- Terminal-Bench 2.1 (best harness): **64.7%**; but Terminal-Bench 4.0: **0.0%** (#45 per Model Beats — flagged discrepancy)
- Tau 3 Banking: **15.5%**; GDPval-AA v2: **1269 Elo**; AA-Briefcase: **917 Elo**

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- HLE: **31.6%** text-only / **47.8%** with tools (ahead of Inkling's 29.7% text-only at every thinking budget)
- AIME 2026: **95.5%**; HMMT Feb 2026: **90.2%**
- CritPt: **8.3%**; ARC-AGI-1 **84.0%**; ARC-AGI-2 **40.1%**
- AA Index v4.1: **40.0**; SimpleQA Verified: **20.6%**

Coding:

- SWE-bench Verified: **80.2%** (official bash-only harness; Model Beats lists 82.2%)
- SWE-bench Pro (public): **55.9%**
- SciCode: **48.7%**

Long context:

- Up to 1M per model card; 524K in several API listings; no independent long-context retrieval benchmark captured

Multimodal:

- MMMU Pro: **74.0%**; Charxiv RQ: 77.4% original / 81.3% with Python
- Audio MC: **54.9%**; MMAU: **77.0%**; VoiceBench: **90.1%**

Safety/epistemics:

- StrongREJECT 98.4%; FORTRESS adversarial 71.6% / benign 96.9%; ForecastBench Brier 61.3 (no search) / 61.5 (with search)

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 79.6% and Toolathlon 54.4% are strong, but Terminal-Bench 4.0 = 0.0% (Model Beats, #45) and Tau 3 Banking 15.5% flag inconsistent agentic results.
- **Reasoning: 86/100.** GPQA Diamond 89.5%, HLE 31.6%/47.8%, AIME 2026 95.5%, ARC-AGI-2 40.1% — excellent for 12B active; CritPt 8.3% caps upside.
- **Context window: 88/100.** Up to 1M per model card (524K in several served listings) — generous for the weight class; no independent retrieval verification captured.
- **Multimodal: 84/100.** Native audio+image+text input with strong audio benchmarks (VoiceBench 90.1%, MMAU 77.0%) and vision (MMMU Pro 74.0%); text-only output.
- **Coding: 84/100.** SWE-bench Verified 80.2–82.2% and SWE-bench Pro 55.9% — open-weight leaderboard territory, though below closed frontier (best 97%/89.9%).
- **Cost efficiency: 85/100.** API $0.30–0.58/$1.20–1.44 with $0.06 cache, plus Apache 2.0 open weights — excellent value and self-hostable.
- **Overall Score: 84/100.** Mean of the five non-cost dims (78+86+88+84+84)/5 = 84.0. Best-fit: the most efficient strong open-weight multimodal reasoning model of mid-2026, at a fraction of Inkling's compute.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Thinking Machines Lab: Introducing Inkling-Small (official)](https://thinkingmachines.ai/news/inkling-small/)
  - [Thinking Machines Lab: Inkling-Small model card](https://thinkingmachines.ai/model-card/inkling-small/)
  - [Hugging Face: thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)
  - [Model Beats: Inkling-Small benchmarks/pricing/hardware](https://modelbeats.com/models/inkling-small)
  - [BenchLeader: Inkling Small benchmark index](https://www.benchleader.com/models/inkling-small)
  - [llm-stats: Inkling-Small](https://llm-stats.com/models/inkling-small)
  - [BenchmarkList: Inkling-Small](https://benchmarklist.com/models/thinking-machines-inkling-small/)
- Future sources: add a new file next to this one using the same headings.
