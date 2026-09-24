# GLM-5.3 Flash — findings by Muse Spark 1.2

- Source: Z.ai (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Flash
- **Short description:** Z.ai's Flash sibling of GLM-5.3 (2026-08-26) pushing Pareto frontier: 57 Intelligence at $0.045/task discounted; 320B/18B, 1M multimodal with mHC.
- **Provider / access:** Z.ai API `glm-5.3-flash` via OpenCode Zen `z-ai/glm-5.3-flash` (Chat Completions via adapter); HuggingFace `zai-org/GLM-5.3-Flash` MIT weights
- **Release / knowledge:** 2026-08-26; knowledge cutoff not disclosed
- **IDs:** `z-ai/glm-5.3-flash` (also `ox-alpha` stealth preview; no Free tier beyond promo)
- **Context window:** 1,048,576 total (1M in / ~32K out) — verified via Z.ai blog, HuggingFace safetensors, and docs.z.ai (Artificial Analysis page shows 400K dispute, HF verifiable preferred)
- **Modalities:** Text, image in (native multimodal per Z.ai blog, OfficeQA/CharXiv/MVbench); text out; reasoning yes (locked max); tool calls yes; JSON mode yes — video per Z.ai multimodal corpus but text+image primary
- **Pricing (as of 2026-09-24):** $0.15 in / $0.50 out per 1M (list; promo $0.075/$0.25 through 2026-09-09 50% off); cache read $0.03 ($0.015 promo); blended ~$0.10/M
- **Architecture:** 320B total / 18B active MoE, hybrid sparse+linear attention with Manifold-Constrained Hyper-Connections (mHC), trained 30T multimodal tokens, MIT

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai + Artificial Analysis independent 84.27 — vs Opus 4.8 85.0, Gemini 3.7 Flash 85.8, GPT-5.6 Terra 87.4)
- Terminal-Bench 4.0: **33%** (Artificial Analysis, Flash — vs GLM-5.3 max 42%)
- AutomationBench v1.0.6 / AA: **48.8% (Z.ai v1.0.6) / 60% AA** (Artificial Analysis — vs Flash max 60%, vs 5.3 max 62%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2: **1773** (Z.ai via AA) / **1655** (AA page) — vs GLM-5.3 max 1634, Opus 4.8 1582
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon Verified: **78.4%** (Z.ai self-reported — vs DeepSeek V4 Vision 75.9, Opus 4.8 76.2; no independent leader yet)
- Agents' Last Exam: **26.3%** (Z.ai — vs Opus 4.8 27.0, Terra 28.0)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Artificial Analysis — vs model gap note)
- HLE: **39.9% no tools** (Artificial Analysis) / **55.3% with tools** (Z.ai, 300K judge) — vs Opus 57.9% with tools
- LCR / MLCR: **AA-LCR 80%** (Artificial Analysis)
- CritPt: **15%** (Artificial Analysis — vs max 19%)
- Artificial Analysis Intelligence Index: **42 (v4.3, max)** (Artificial Analysis — vs 5.3 max 45; v4.1.1 57 vs 60)
- GDP.pdf: **15%** (Artificial Analysis)
- AA-Briefcase: **1449** (Artificial Analysis)
- Omniscience: **7** (Artificial Analysis — vs max 14)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (Z.ai Code Bench proxy 29.0 vs Opus 29.5 instead)
- LiveCodeBench: **no verified public score found** (LiveBench composite 71.6 overall vs ox-alpha 69.2)
- SciCode: **52%** (Artificial Analysis — vs max 59%)
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **63.4% (Z.ai) / 63% (deepswe.ai leaderboard, ±9.5)** (independent confirms 63 vs Z.ai 63.4)
- NL2Repo: **56.3%** (Z.ai — vs DeepSeek Vision 57.7, Opus 69.7)
- OfficeQA Pro / CharXiv / Chartography: **62.4% / 89.4% / 78.0%** (Z.ai vision coding overlap)

Long context:

- AA-LCR 80% at 1M; 1M total window verified via HF safetensors; OSWorld 2.0 59.1% (Z.ai) vs Opus 54.8

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 84.3% independent + Automation 48.8%/60% AA + GDPval 1773 top + Toolathlon 78.4%; capped by TB4.0 33% vs max 42% and lack of Tau3/Claw independent.
- **Reasoning: 85/100.** GPQA 91.2% + HLE 39.9% (55.3% w/tools) + AA Index 42 (57 on v4.1.1) + AA-LCR 80% + Briefcase 1449; capped by SciCode 52% vs max 59% and CritPt 15% vs 19%.
- **Context window: 96/100.** 1,048,576 total verified via HF MIT weights; tier 95-100 for ≥1M but capped below 100 by AA-LCR 80% flat vs max 80% (not 90%+).
- **Multimodal: 78/100.** Text+image native (OfficeQA 62.4 vs Opus 48.9 + CharXiv 89.4 vs 89.9 + MVbench 77.8 vs 67.1); capped by AA text-only dispute and no video/audio output despite 30T multimodal training claim.
- **Coding: 86/100.** DeepSWE 63.4% leading GLM-5.2 46.2 and DeepSeek Vision 59.3; TB2.1 84.3% + SciCode 52%; capped by NL2Repo -13pp vs Opus and no SWE-bench Verified publication.
- **Cost efficiency: 88/100.** $0.15/$0.50 list ($0.075 promo) blended $0.10; 9× cheaper than GLM-5.3 max $0.90 at 3 points intelligence cost; ~88 vs Free 100 but not $0.
- **Overall Score: 87/100.** Mean of five non-cost dims (88+85+96+78+86)/5=86.6 → 87; best-fit Pareto frontier Flash coder at fraction of frontier cost.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Z.ai blog 2026-08-26, Artificial Analysis 42/45 vs 57, datacamp.com, qubrid.ai 2026-09-01, themodelgap.com 2026-08-26, capitalandcompute.net); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
