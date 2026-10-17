# MiMo V2.6 Flash — findings by MiniMax M3

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active per token), released 2026-09-22 as the Flash-class member of the V2.6 family (with V2.6 Pro). The RL-tuned `MiMo-V2.6-Flash-RL` checkpoint delivers frontier-adjacent Terminal-Bench 2.1 (87.6%) at sub-frontier pricing.
- **Provider / access:** Xiaomi API; Hugging Face (weights, MIT); OpenCode Zen `opencode/mimo-v2.6-flash`. Chat Completions-compatible.
- **Release / knowledge:** Released 2026-09-22. Knowledge cutoff late-2025 / early-2026 (Xiaomi not officially disclosed).
- **IDs:** `xiaomi/mimo-v2.6-flash`; HF: `XiaomiMiMo/MiMo-V2.6-Flash-RL`. The Zen free tier lives in `mimo-v2.6-free/`, not this slug.
- **Context window:** 1M tokens.
- **Modalities:** Text, image, video, audio in; text out (natively omnimodal).
- **Pricing (as of 2026-10-13):** Paid $0.14 input / $0.28 output per 1M (Xiaomi API). Cached input $0.0028 (50× discount).
- **Architecture:** Sparse MoE — 309B total parameters, 15B active per token. MIT-licensed open weights. RL-tuned variant adds 30 training steps over the SFT base.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report; BenchLM; buildfastwithai) — sits below Opus 4.8 (85.0), GPT-5.6 Terra (87.4) cohort at this tier.
- Terminal-Bench 4.0: **28.8%** (Xiaomi technical report) — much weaker on the harder harness variant.
- OSWorld-Verified: **80.8%** (Xiaomi technical report).
- Toolathlon-Verified: **73.6%** (Xiaomi technical report; BenchLM).
- AutomationBench: **52.3%** (Xiaomi technical report).
- Agents' Last Exam: **27.6%** (Xiaomi technical report).
- JobBench: **61.2%** (Xiaomi technical report).
- CyberGym: **95.1%** (Xiaomi technical report) — LEAD in cyber defense coverage.
- ExploitGym: **6.0%** (Xiaomi technical report) — very weak on offensive exploitation.
- GDPval-AA (normalized): **55.3%** (Artificial Analysis).
- MCP Atlas / Tau3 / Claw-Eval: **no verified public score found** for this exact model/ID.

Reasoning / knowledge:

- AA Intelligence Index: **37.9%** (Artificial Analysis).
- AA-HLE: **35.1%** (Artificial Analysis).
- AA-Omniscience Index: **-12.7%** (Artificial Analysis) — negative score means more incorrect than correct answers on the probing prompt set.
- AA-Omniscience Accuracy: **27.0%** (Artificial Analysis).
- AA-Omniscience Hallucination Rate: **54.4%** (Artificial Analysis).
- AA-LCR: **74.3%** (Artificial Analysis).
- CritPt: **12.0%** (Artificial Analysis).
- GPQA Diamond / Humanity's Last Exam / ARC-AGI-2: **no verified public score found** for this exact model/ID.

Coding:

- DeepSWE v1.1: **67.9%** (Xiaomi technical report; BenchLM).
- ProgramBench: **26.0%** (Xiaomi technical report).
- SWE-bench Verified / Pro / LiveCodeBench: **no verified public score found** for this exact model/ID at standard harness (Xiaomi uses DeepSWE v1.1 in catalog substitutions).
- AA-SciCode: **51.3%** (Artificial Analysis).

Multimodal / long context:

- AA-MMMU-Pro: **73.1%** (Artificial Analysis).
- MMMU / CharXiv / Blueprint-Bench 2: **no verified public score found**.
- MRCR / RULER / GraphWalks at 1M: **no verified public score found** for this exact model/ID.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 87.6% (Xiaomi). Toolathlon-Verified 73.6%. OSWorld-Verified 80.8%. CyberGym 95.1% (LEAD in defensive cyber). JobBench 61.2%. Capped at 84 because Terminal-Bench 4.0 28.8% is weak on the harder harness, ExploitGym 6.0% is very weak, and MCP Atlas / Tau3 for this exact model/ID are not published.
- **Reasoning: 60/100.** AA Intelligence Index 37.9% (well below AA's open-weights median of 18-30 range; competitive with GLM-5.3 Flash family). AA-LCR 74.3% strong on long context. AA-HLE 35.1%, AA-Omniscience -12.7% (negative). CritPt 12.0%. Capped at 60 because AA-Omniscience Accuracy 27.0% and Hallucination Rate 54.4% are weak, and GPQA Diamond / HLE / ARC-AGI-2 for this exact model/ID at standard harness are not published.
- **Context window: 90/100.** 1M context window. AA-LCR 74.3%. Capped at 90 because no MRCR / RULER at window length for this exact model/ID is published.
- **Multimodal: 78/100.** Native omnimodal (text + image + video + audio in). AA-MMMU-Pro 73.1%. Capped at 78 because no CharXiv / Blueprint-Bench specific number for this exact model/ID is published.
- **Coding: 72/100.** DeepSWE v1.1 67.9%. ProgramBench 26.0% weak. AA-SciCode 51.3%. Capped at 72 because SWE-bench Verified / Pro / LiveCodeBench specific numbers for this exact model/ID at standard harness are not published (Xiaomi uses DeepSWE v1.1 in catalog substitutions).
- **Cost efficiency: 95/100.** $0.14 in / $0.28 out (Xiaomi API). Cached input $0.0028 (50× discount). MIT-licensed weights. Capped at 95 because output is still $0.28/MTok (not free).
- **Overall Score: 77/100** Half-up mean of Tool 84, Reasoning 60, Context 90, Multimodal 78, Coding 72 = 384/5 = 76.8 → half-up 77. MiMo V2.6 Flash is Xiaomi's cost-efficient omnimodal Flash: 1M context, MIT-licensed 309B/15B MoE, Terminal-Bench 2.1 87.6% (frontier-adjacent), CyberGym 95.1% (LEAD), and Toolathlon-Verified 73.6% at $0.14/$0.28. Trails on Terminal-Bench 4.0 (28.8%), ProgramBench (26%), and Reasoning (AA Intelligence Index 37.9%, AA-Omniscience negative).

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Xiaomi MiMo-V2.6-Flash-RL Hugging Face model card, MiMo-V2.6 technical report PDF via BenchLM, Artificial Analysis MiMo V2.6 Flash page, BenchLM model profile, buildfastwithai review, llm-stats.com specs page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Flash_Xiaomi.md`, using the same headings.
