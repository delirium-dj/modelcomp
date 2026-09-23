# Claude Opus 4.8 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model (2026-05-28), 41 days after 4.7, with dynamic workflows, effort control and 2.5× fast mode; leads Intelligence Index at launch.
- **Provider / access:** Anthropic API `anthropic/claude-opus-4.8` (also `claude-opus-4-8[1m]`), Claude.ai, Bedrock/Vertex/Azure, and OpenCode Zen `anthropic/claude-opus-4.8` (Chat Completions via adapter)
- **Release / knowledge:** 2026-05-28; knowledge cutoff 2025-11 (training data cutoff per predecessor lineage)
- **IDs:** `anthropic/claude-opus-4.8` (no Free tier; fast mode $10/$50)
- **Context window:** 1,000,000 total (1M / 128K out; standard 200K listing; cache write $6.25, hit $0.5/1M) — verified via Anthropic announcement + system card
- **Modalities:** Text, image, PDF in; text out; reasoning yes (adaptive + extended, high/extra/max; xhigh→extra renamed); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $5.00 / $25.00 per 1M in/out (unchanged from 4.7); fast mode $10/$50 (3× cheaper than prior fast)
- **Architecture:** Proprietary (Opus family)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic 2026-05-28, Terminus-2 harness — vs Opus 4.7 66.1%, GPT-5.5 78.2%; GPT-5.5 Codex CLI 83.4%)
- Tau3-Banking / Tau2-Bench: **94.4% Telecom (τ²-bench pass^1)** (evals.report official; Artificial Analysis +5.9 pts vs 4.7)
- GDPval-AA: **1890 Elo** (Anthropic + Artificial Analysis — vs GPT-5.5 1769, Opus 4.7 1753; implies ~67% win rate vs GPT-5.5, 15% fewer turns, 35% fewer tokens than 4.7)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.2% MCP-Atlas** (Anthropic — vs 4.7 79.1%; AutomationBench 15.5% vs 9.9%)
- OSWorld-Verified: **83.4%** (Anthropic — vs 4.7 82.8% updated, GPT-5.5 78.7%; allthings.how verified)
- Online-Mind2Web: **84%** (Anthropic Tech Lead)
- Finance Agent v2: **53.9%** (Anthropic — field-leading vs GPT-5.5 51.8%)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (evals.report official — vs 4.7 94.2% slight regression, Gemini 3.1 Pro 94.3% leads narrowly)
- HLE (Humanity's Last Exam): **49.8% no-tools / 57.9% with tools** (evals.report / Founden — vs 4.7 46.9%/54.7%; leads tight contest at launch)
- LCR / MLCR: **no verified public score found** (AA-LCR roughly flat vs 4.7 per Artificial Analysis)
- CritPt: **higher than Gemini 3.1 Pro** (Artificial Analysis — behind GPT-5.4/5.5 per Founden; no isolated numeric disclosed)
- Artificial Analysis Intelligence Index / BenchLM overall: **61.4 (Artificial Analysis, 2026-05-28)** (new #1 — vs GPT-5.5 xhigh 60.2, Opus 4.7 57.3; +4.1 vs 4.7)
- AA-Omniscience Index: **27.4 (Accuracy 46.6%, Hallucination 35.9%)** (Artificial Analysis — #2 behind Gemini 3.1 Pro 32.9)
- AIME 2026 / USAMO 2026: **100% AIME / 96.7% USAMO** (evals.report / Founden — vs 4.7 69.3% USAMO)
- ARC-AGI-2: **72.08%** (evals.report official)

Coding:

- SWE-bench Verified / SWE-Pro: **88.6% Verified / 69.2% Pro** (evals.report Official — vs 4.7 87.6%/64.3%, GPT-5.5 58.6% Pro, Gemini 3.1 Pro 54.2% Pro)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found** (flat vs 4.7 per Artificial Analysis)
- Vibe Code Bench: **82.72% overall** (evals.report Official)
- DeepSWE: **58%** (evals.report Verified)
- CursorBench: **63.8%** (evals.report)
- SWE-bench Multilingual: **84.4%** (Founden — vs 80.5% for 4.7)

Long context:

- MRCR / GraphWalks: **BFS 85.9% at 256K / 68.1% at 1M; Parents 83.3% at 1M** (Anthropic — vs 4.7 76.9%/40.3% BFS, 56.6% Parents; dramatic 1M gains)

### Normalized scores (1–100)

- **Tool use: 89/100.** GDPval 1890 #1 + OSWorld 83.4% + Online-Mind2Web 84% + MCP-Atlas 82.2% + τ2 Telecom 94.4%; capped by Terminal 74.6% still trailing GPT-5.5 78.2% and no Claw-Eval.
- **Reasoning: 90/100.** AA Index 61.4 #1 + HLE 49.8%/57.9% lead + AIME 100% + USAMO 96.7% + ARC-AGI-2 72%; capped by GPQA 93.6% slight regression vs 94.2% and CritPt still behind GPT-5.5.
- **Context window: 92/100.** 1,000,000 total; GraphWalks BFS 68.1% at 1M (vs 40.3%) + Parents 83.3% big jump; tier ≥1M but capped below 96 without MRCR ≥90% at 1M.
- **Multimodal: 78/100.** Text/image/PDF in → text out; CharXiv 89.9% + ScreenSpot-Pro 87.9% strong but no audio/video in, capped below omni 90 tier.
- **Coding: 90/100.** SWE-Pro 69.2% +10.6 over GPT-5.5 + Verified 88.6% near saturation + Multilingual 84.4% + Vibe 82.7%; trails only GPT-5.5 on Terminal, hence 90 not 94.
- **Cost efficiency: 60/100.** $5/$25 paid (fast $10/$50), no $0 Free ID; cheaper than Opus 5 tier but paid vs free competitors.
- **Overall Score: 88/100.** Mean of five non-cost dims (89+90+92+78+90)/5=87.8 → 88; best-fit for enterprise agentic coding and long-context autonomous work as Intelligence Index leader.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Anthropic Opus 4.8 announcement 2026-05-28, system card, Artificial Analysis 2026-05-28, evals.report, Founden, MLQ); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
