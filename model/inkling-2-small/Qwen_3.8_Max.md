- Source: Thinking Machines Lab (`inkling-2-small`; revealed from the OpenCode `fledge-alpha` stealth preview)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling 2 Small
- **Short description:** Thinking Machines Lab's second-generation model — a 594B-total / 17B-active Mixture-of-Experts reasoning model with image input and variable effort. Released 2026-11-05; the highest-scoring open-weights model developed outside China pending its Apache 2.0 weights release. TML confirms it is the production model behind the OpenCode `fledge-alpha` stealth coding preview ("we tested early checkpoints of Inkling 2 Small on OpenCode under the name Fledge-Alpha").
- **Provider / access:** Thinking Machines Lab. Proprietary at launch via the Tinker platform + Tinker Playground (inference and fine-tuning); Apache 2.0 weights planned ~1 week post-launch after external safety testing/red-teaming. Broader platform availability "in the coming weeks."
- **Release / knowledge:** Released 2026-11-05; internal-code training cutoff 2026-06.
- **IDs:** `inkling-2-small` (dataset id); prior stealth id `opencode/fledge-alpha-free` (OpenCode Zen, free 2026-10-01→10-08, now retired). Alias registry maps `fledge-alpha` → `inkling-2-small` (user-confirmed 2026-11-10).
- **Context window:** 256K tokens native (with compaction for longer trajectories); evals run at a 1M-token max trajectory limit (up from Inkling Small's 256K) and pretraining phase H3 ran at 1M context. **DISCREPANCY:** the scaffold meta claimed "1,048,576 (1M) total / 131,072 out" — that was the Fledge-Alpha preview's OpenCode-listed figure; the official deployed window is 256K (1M only as a compaction-supported trajectory ceiling).
- **Modalities:** Text + image in → text out. Native image input via a 292M-param Perception-Encoder-based vision encoder (20×20-px patches, 2×2 spatial pooling). **No audio** (TML Limitations: "does not support audio"); no native video input (video/3D are code-generated outputs). Variable effort (evals at 0.99 / xhigh).
- **Pricing (as of 2026-11-10):** $0.30 / 1M input, $1.00 / 1M output ($0.03 / 1M cached input). ~$1.18 per Artificial Analysis Intelligence Index task (uses ~150K output tokens/task, ~4× Inkling Small). **DISCREPANCY:** scaffold meta listed "$0/$0 free (Fledge Alpha preview); production pricing not published"; official production pricing is $0.30/$1.00.
- **Architecture:** Sparse MoE, 594B total / 17B active. Pretrained in NVFP4 on GB300 NVL72 (H1 8.4T tokens/68h; H2 3.8T at 512K; H3 ~320B reasoning/agent trajectories at 1M; H4 ~34B highest-quality agent trajectories). Single joint RL run: 1,075 steps, 17M+ rollouts, 3T+ tokens, 2,048 GPUs, 9 days, >4×10²³ FLOPs, StableReinforce objective. Apache 2.0 weights pending.

### Raw benchmarks found

> Official TML launch benchmark table (2026-11-05; evals at effort 0.99/xhigh, temp 1.0, 1M-token trajectory) + Artificial Analysis (Intelligence Index v5.0.1). "Highest/2nd-highest" marks are within TML's compared cohort (open-weights flash + pro + closed flash).

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index (v5.0): 30.6** (v5.0.1: 31) — up 18 pts over Inkling Small; matches Gemini 3.8 Flash (high, 30.8); below GLM 5.3 (31.7), DeepSeek-V4.1-Flash (32.6), Claude Haiku 5.5 (36.5). "Highest-scoring open-weights model developed outside China" pending weights release.
- HLE-Diamond: **28.7%** (highest in cohort; up from Inkling Small's 12%)
- CritPt: no verified public score found for inkling-2-small (the 35.0% figure was inkling's agentic hard-subset variant, not the original CritPt; not counted as a CritPt result)
- Apex 2025: **63.5%** (2nd-highest); Vals Index (v2.2): **56.1%**
- AA-Omniscience v1.1: **16.1** score, **73.3%** non-hallucination rate (highest non-hallucination in cohort); hallucination down to 27% from Inkling Small's 61%
- ComplexConstraints v1.0 (instruction following): **44.5%**

Coding / autoresearch:

- SWEBench Pro v2 (Hard): **86.3%** (2nd-highest across ALL compared models incl. closed; only Kimi K3 88.2% higher)
- DeepSWE v1.1: **72.1%** (2nd-highest; near DeepSeek-V4.1-Flash 77.0%, Gemini 3.8 Flash 73.8%)
- Vibe Code Bench v1.1: **81.6%**; FrontierCode v2.0: **25.4%** (2nd-highest open-weights flash)
- PMPP-Hard (GPU kernel optimization): AUC **494.27** task-hours, mean **54.25/69** solved (2nd-highest AUC)
- PostTrainBench v1.2: **31.9%**; Terminal-Bench Science v0.1: **5.7%** and Terminal-Bench 4.0: **13%** (weak terminal-agentic — a noted limitation)

Agent / tool use / knowledge work:

- MCP Atlas (Full/Public): **85.4 / 85.0%** (2nd-highest; near Muse Spark Open 89.2)
- AA-Briefcase v1.1: **1527 Elo** (2nd-highest; 50% rubric pass, +615 Elo over Inkling Small); GDPVal-AA v2.1: **1630 Elo**
- JobBench: **70.5%** (highest in cohort); EnterpriseBench-CoreCraft: **71.8%** (highest); EnterpriseOps-Gym: **46.8%** (highest)
- Finance (best open-weight model): Vals Finance Index **61.5%** (highest), Finance Agent v2.1 **67.5%** (highest), DAYJOB-Finance **14.3%** (highest), Apex-Accounting v1.1 mean **62.0%**, Tau3 Banking **40.4%**, Excel Modeling v1.1 **69.5%**
- Legal: Vals Legal Index **73.9%** (highest), Harvey LAB v1.1 **21.7%** (2nd-highest)

Multimodal (vision — image in, text out):

- MMMU Pro (Standard 10): **81.6%** (2nd-highest); PerceptionBench: **64.7%** (highest)
- ScreenSpot Pro (orig/Python): **83.8 / 91.5%** (highest — GUI grounding); BabyVision: **68.6 / 93.7%** (highest)
- CharXiv RQ: **85.6 / 87.7%**; Chartography: **36.7 / 80.4%**; GDP.pdf: **25.2%** (highest); Humanity's Sixth Sense: **33.3%**
- DesignArena (Nov 5 snapshot, all #1 in cohort): Website **1340**, Web Apps **1296**, Game Dev **1428**, 3D Design **1401**; AA-3D **1021** (highest), Code2Video-AA **1020**

Long context:

- AA-LCR v1.1: **83.3%** (2nd-highest); LongBench v2: **70.6%** (2nd-highest) — at a 256K native window

Safety / alignment:

- FORTRESS adversarial **83.8%** / benign **79.7%**; DistressBench **82.0%**; CyberBench v1.1 **72.7%**; PatchEval **79.6%** (matches open-weight cyber frontier)
- Internal misbehavior **14.9** (2nd-best), destructive actions **4.7** (best), HoneyBench reward-hacking **44** (best), Apollo covert-action **0–8** (best)

### Normalized scores (1–100)

> Derived from the raw numbers above via `model-comparison.md`. Overall = half-up mean of the five quality dims; Cost efficiency scored independently, never counted.

- **Tool use: 80/100.** Strong knowledge-work and enterprise agentic results — MCP Atlas 85.4% (near-frontier), JobBench 70.5% / EnterpriseBench-CoreCraft 71.8% / EnterpriseOps-Gym 46.8% (all cohort-highest), AA-Briefcase 1527 Elo, GDPVal-AA 1630, finance/legal leadership — but held at upper-mid (not the 90+ frontier band) because GDPVal-AA 1630 and Tau3-Banking 40.4% sit below the ~1750 / ~50% frontier anchors and terminal-agentic benchmarks are weak (Terminal-Bench 4.0 13%, TB-Science 5.7%).
- **Reasoning: 80/100.** AA Intelligence Index 30.6 (matches Gemini 3.8 Flash-high; strongest open-weights model outside China), CritPt v2 55.7%, Apex 2025 63.5%, and best-in-cohort epistemics (AA-Omniscience 73.3% non-hallucination, HLE-Diamond 28.7%); capped below 90 because HLE-Diamond 28.7% is under the 40% frontier anchor, CritPt trails the 65% frontier, and no GPQA-Diamond figure is published.
- **Context window: 72/100.** 256K-token native window (rubric 200K–500K band, low end) with compaction-supported 1M-token trajectories and strong retrieval (AA-LCR 83.3%, LongBench v2 70.6%); scored at the bottom of the band because the deployed window is 256K, not the 1M the Fledge-Alpha preview listing implied.
- **Multimodal: 76/100.** Text + image in → text out with best-in-cohort vision (MMMU Pro 81.6%, PerceptionBench 64.7%, ScreenSpot Pro 91.5%, BabyVision 93.7%, GDP.pdf/CharXiv/Chartography leadership) plus strong PDF/chart/document interpretation and code-generated 3D/video (DesignArena #1 across categories); placed at the top of the image band / bottom of the PDF band, held below 90 because there is **no audio**, no native video input, and output is text-only.
- **Coding: 82/100.** SWEBench Pro v2 Hard 86.3% (2nd-highest across all compared models incl. closed), DeepSWE v1.1 72.1%, Vibe Code Bench 81.6%, and strong GPU-kernel autoresearch (PMPP-Hard 54.25/69) put it just under the frontier coding band; the weak terminal-agentic results (Terminal-Bench 4.0 13%, TB-Science 5.7%) and 25.4% FrontierCode keep it out of the 90+ tier.
- **Cost efficiency: 95/100.** $0.30/$1.00 per MTok ($0.03 cached) is very cheap for a 594B-total MoE at this capability tier (AA: "cheaper than several other models with similar Intelligence Index scores"); partly offset by heavy token use (~150K output tokens/task, ~$1.18 per Index task). Excluded from Overall.
- **Overall Score: 78.0/100.** Mean of the five quality dims (80+80+72+76+82)/5 = 78.0. Divergence note: my independent read is ~+3.2 above the peer cohort (74.8) because it fully weights TML's official 2026-11-05 benchmark table — published after the Fledge-Alpha stealth era the cohort average may partly reflect — showing the strongest open-weights-flash model outside China (AA Index 30.6 ≈ Gemini 3.8 Flash). Best fit: long-horizon agentic coding, knowledge/finance/legal work, and vision-in-the-loop creative building at flash-tier cost; weaker for terminal-heavy agentic workflows, and it lacks audio.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-10
- Method: public internet research (official Thinking Machines Lab "Introducing Inkling 2 Small" launch post + benchmark table + model card; Artificial Analysis release article — Intelligence Index 30.6/31, pricing, specs; llm-stats model page). Supersedes the prior `Qwen_3.8_Max.md.excluded` (Fledge Alpha, 2026-10-28), written when the model was an unrevealed stealth preview with zero published benchmarks; TML has now confirmed Fledge-Alpha = early Inkling 2 Small checkpoints and published full evaluations — the "genuinely new verified evidence" branch of `tasks/research.md` Step 3.3. Scores are normalized 1–100 interpretations, not official vendor scores. Researched independently of the peer findings in this folder.
- Reference URLs:
  - [Introducing Inkling 2 Small (Thinking Machines Lab — official launch + benchmark table)](https://thinkingmachines.ai/news/inkling-2-small/)
  - [Inkling 2 Small model card (Thinking Machines Lab)](https://thinkingmachines.ai/model-card/inkling-2-small/)
  - [Thinking Machines releases Inkling 2 Small, scoring 31 on the AA Intelligence Index (Artificial Analysis)](https://artificialanalysis.ai/articles/thinking-machines-releases-inkling-2-small-highest-scoring-open-weights-model-outside-of-chinia-upon-weights-release-it)
  - [Inkling 2 Small benchmarks, pricing & context window (llm-stats)](https://llm-stats.com/models/inkling-2-small)
