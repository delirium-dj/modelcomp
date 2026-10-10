# MiMo V2.6 Pro — findings by Qwen 3.7 Plus

- Source: Xiaomi/MiMo V2.6 Pro (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship open-weights omnimodal MoE model, released September 21–22, 2026. 1.02T total parameters with 42B active per token. Scored 46.32 on the Artificial Analysis Intelligence Index — the highest of any open-weight model at release, surpassing Kimi K3 and Qwen3.8 Max. MIT license. Trained in under 6 days for ~$2.62M via large-scale RL (30 steps, 750K trajectories). Natively omnimodal (text, image, video, audio in). Priced at ~$0.13/task, a fraction of closed frontier models. Named in Anthropic's September 2026 distillation report (GTG-16008), though no direct evidence linking to MiMo-V2.6's training pipeline has been confirmed.
- **Provider / access:** Xiaomi API; OpenRouter; self-hostable via Hugging Face (MIT license). No OpenCode Zen Free ID.
- **Release / knowledge:** 2026-09-21/22 release; knowledge cutoff not precisely documented.
- **IDs:** `xiaomi/mimo-v2.6-pro` (OpenRouter). No free OpenCode Zen ID.
- **Context window:** 1,000,000 tokens (1M) total; 128,000 max output.
- **Modalities:** Text, image, video, and audio in; text out. Natively omnimodal with 681M-param vision encoder, 308M AudioTokenizer, 127M audio patch encoder. Reasoning yes (RL-trained). Tool calls supported.
- **Pricing (as of 2026-10-10):** $0.435 in / $0.87 out per 1M tokens (Xiaomi API). Cached input: $0.0036/M. UltraSpeed variant: $4.35/$8.70 (20× faster). ~1/20th to 1/60th the price of GPT-6 Astra / Claude Fable 5.1 for comparable workloads.
- **Architecture:** Sparse MoE; 1.02T total params, 42B active per token; 70 layers (1 dense + 69 MoE). MIT license. Open weights on Hugging Face. Trained via 30 RL steps, ~750K trajectories, ~$2.62M total training budget. Led by Fuli Luo (ex-DeepSeek).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi; vs Claude Opus 5's 89.1%)
- Terminal-Bench 4.0: **34.9%** (Xiaomi) / **34.8%** (Artificial Analysis)
- AutomationBench: **53.1%** (Xiaomi; vs Claude Opus 5's 50.3%; vs DeepSeek V4.1 Flash's 54.8%)
- AA AutomationBench: **58.6%** (Artificial Analysis)
- Toolathlon-Verified: **76.9%** (Xiaomi; vs GPT-5.6 Sol's 74.9%)
- OSWorld-Verified: **82.0%** (Xiaomi)
- JobBench: **62.0%** (Xiaomi; vs Claude Opus 5's 65.7%)
- GDPval-AA (Elo): **1673** (Xiaomi) / **59.3% normalized** (Artificial Analysis)
- AA-Briefcase: **1516 Elo** (Artificial Analysis)
- Agents' Last Exam: **31.6%** (Xiaomi; ties Claude Opus 5)
- CyberGym: **94.0%** (Xiaomi)
- ExploitGym: **17.8%** (Xiaomi)

Reasoning / knowledge:

- HLE (Humanity's Last Exam): **49.4%** (Artificial Analysis)
- AA-Omniscience Accuracy: **34.8%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **40.6%** (Artificial Analysis — moderate; better than GPT-5.5's 86%)
- AA-Omniscience Index: **8.4%** (Artificial Analysis)
- AA Intelligence Index: **46.32** (highest open-weight at release; ties Grok 4.7; trails closed frontier models)

Coding:

- DeepSWE v1.1: **71.9%** (Xiaomi; vs Claude Opus 5's 74.0%, DeepSeek V4.1 Flash's 74.2%)
- Terminal-Bench 2.1: **89.9%** (also listed under coding)
- AA-SciCode: **60.9%** (Artificial Analysis)
- ProgramBench: **26.5%** (Xiaomi)
- Bug Hunt Bench: **22.7 fixes** (public data)

Long context:

- AA-LCR (Long Context Reasoning): **86.3%** (Artificial Analysis)
- MLCR-AA (Medical LCR): **18.3%** (Artificial Analysis)
- CritPt (Physics reasoning): **26.6%** (Artificial Analysis)
- GDP.pdf: **19.2%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 89.9% leads Claude Opus 5 (89.1%). Toolathlon-Verified 76.9% leads GPT-5.6 Sol (74.9%). CyberGym 94.0% is exceptional. OSWorld 82.0% is strong. AutomationBench 53.1% beats Claude Opus 5 (50.3%). However, JobBench 62.0% trails Opus 5 (65.7%), and Terminal-Bench 4.0 at 34.9% is modest. Agents' Last Exam 31.6% ties Opus 5. Strong agentic performer that competes with closed frontier models on most tool-use benchmarks.
- **Reasoning: 85/100.** HLE 49.4% is competitive (between GPT-5.5 standard's 41.4% and Opus 4.7's 46.9% — actually exceeds both). AA Intelligence Index 46.32 is #1 open-weight but trails closed frontier models. AA-Omniscience accuracy 34.8% is moderate. Hallucination rate 40.6% is reasonable (better than GPT-5.5's 86%, worse than Claude Opus 4.8's 35.9%). GDP.pdf 19.2% and CritPt 26.6% suggest room for growth on professional document and physics reasoning. Solid reasoning but not best-in-class.
- **Context window: 86/100.** 1M-token context with 128K max output. AA-LCR at 86.3% is strong long-context reasoning. Standard frontier-class window. No specific MRCR or GraphWalks scores published for direct comparison with GPT-5.5/Claude models. Solid but not provably best-in-class due to limited long-context retrieval benchmarks.
- **Multimodal: 90/100.** Natively omnimodal: text, image, video, AND audio input. This is the most complete input modality set of any model in this dataset. 681M vision encoder, 308M AudioTokenizer, 127M audio patch encoder. Text output only (no audio/video output). The native omnimodal architecture is a significant advantage over text+image-only competitors.
- **Coding: 88/100.** Terminal-Bench 2.1 at 89.9% leads Claude Opus 5 (89.1%). DeepSWE 71.9% is competitive (vs Opus 5's 74.0%, Flash V4.1's 74.2% — within 2.3 points). AA-SciCode 60.9% is solid. However, JobBench 62.0% trails Opus 5 (65.7%), and ProgramBench 26.5% is modest. The coding performance is frontier-competitive, trailing the very best by only a few points on most benchmarks.
- **Cost efficiency: 97/100.** $0.435/$0.87 per 1M tokens is exceptionally cheap — ~$0.13/task on Artificial Analysis. Cached input at $0.0036/M is nearly free. This is 1/20th to 1/60th the price of closed frontier models for comparable performance. MIT license allows self-hosting for even lower marginal cost. The best cost-efficiency of any model in this dataset that scores within striking distance of the frontier. Only the UltraSpeed variant ($4.35/$8.70) is priced higher, and it's still cheaper than most closed models.
- **Overall Score: 87.4/100.** Mean of five quality dims: (88 + 85 + 86 + 90 + 88) / 5 = 87.4. A landmark open-weight release: #1 open-weight model on the AA Intelligence Index (46.32), beating Claude Opus 5 on Terminal-Bench 2.1 (89.9% vs 89.1%), AutomationBench (53.1% vs 50.3%), and Toolathlon-Verified (76.9% vs n/a), while costing ~1/20th the price. Natively omnimodal (text/image/video/audio), MIT licensed, self-hostable. Best fit for high-volume agentic workloads, cost-sensitive deployments, and teams wanting frontier-competitive performance with full model ownership. The distillation controversy (Anthropic's GTG-16008 allegation) is an unresolved reputational risk. Gaps remain on JobBench, DeepSWE, and professional document reasoning vs. closed frontier leaders.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Xiaomi official announcements, Artificial Analysis, BenchLM, Shattered.io, VentureBeat, Kingy AI, SiliconANGLE, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
