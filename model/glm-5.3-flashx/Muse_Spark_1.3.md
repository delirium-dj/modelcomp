# GLM 5.3 FlashX — findings by Muse Spark 1.3

- Source: Z.ai (z-ai/glm-5.3-flashx)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's high-speed serving tier of GLM-5.3-Flash — identical weights (320B total / 18B active MoE), same 1M context and native multimodality, served on an optimized stack at up to 200 tok/s for latency-bound coding and long-horizon agents.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flashx`; upstream Z.ai API and OpenRouter `z-ai/glm-5.3-flashx` (single Z.ai-hosted provider). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-09-18 serving-tier launch on Z.ai API (base GLM-5.3-Flash released 2026-08-26); knowledge cutoff unknown
- **IDs:** `z-ai/glm-5.3-flashx` (OpenRouter/Z.ai); `opencode/glm-5.3-flashx` (Zen)
- **Context window:** 1,000,000 total tokens; 131,072 max output (Vercel AI Gateway model page, verified 2026-10-07)
- **Modalities:** Text, image, video, file in; text out; reasoning on; tool calls supported (Z.ai docs + OpenRouter vendor description, verified)
- **Pricing (as of 2026-10-07):** $0.37/$1.25 per 1M in/out, $0.075–$0.09 cached input per 1M (OpenRouter + Z.ai, verified; ~2.5x the base Flash list of $0.15/$0.50 — pays for queue position, not intelligence); no free tier — paid only
- **Architecture:** Hybrid linear + sparse attention with IndexPool compression, 320B total / 18B active MoE, 45 layers (Z.ai technical report, verified); base weights MIT-licensed open weights on Hugging Face — FlashX itself is a hosted tier with no separate weights

### Raw benchmarks found

> FlashX runs the identical weights as GLM-5.3-Flash (Z.ai: "nothing about the model itself changed"; OpenRouter: "high-speed variant ... same hybrid sparse and linear attention architecture (320B/18B)"), so base Flash scores inherit directly. Lab numbers are vendor-reported (z.ai blog 2026-08-26, Mini-SWE-agent / Claude Code harnesses disclosed); third-party rows marked independently.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (z.ai lab blog, Claude Code 2.1.207 harness; third-party BenchmarkList ranks it 88th percentile, 24/194)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1773** (GDPval-AA v2, z.ai lab blog — above the ~1750 frontier bar)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.4% Toolathon Verified** (z.ai lab); **61.3% SWE Atlas Codebase QnA** (SWE Atlas leaderboard, 86th pct, rank 6/37, third-party)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **55.3% HLE w/ Tools** (full set, z.ai lab, GPT-5.6-luna-medium judge)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **57.37/100, rank #54/882** (BenchLM base-Flash page, third-party); MMLU **88.1**, BBH **86.6** (base-model lab table)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **92.0% SWE-bench (Vals AI leaderboard, third-party)**; no vendor SWE-bench Verified number published
- LiveCodeBench: **80.5% LiveCodeBench (Vals AI leaderboard, third-party)**; base-model lab table **37.6** (base-checkpoint harness, provisional)
- SciCode / AA-SciCode: **51.6%** (Artificial Analysis SciCode leaderboard, third-party)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **63.4% DeepSWE v1.1** (z.ai lab, mini-SWE-agent harness via Datacurve — beats GLM-5.2 46.2, Opus 4.8 58.0); **56.3% NL2Repo** (lab); **18.1% FrontierSWE v2** (Proximal leaderboard, third-party)

Long context:

- No verified MRCR / RULER / GraphWalks retrieval score found; 1M window verified via spec only (OpenRouter + Vercel). Architecture (IndexPool, 4.4x KV-cache cut vs GLM-5.3) is designed for 1M serving, but no measured retention number exists.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 84.3 + GDPval 1773 (above frontier bar) + Toolathlon 78.4 + SWE Atlas QnA 61.3; capped by AutomationBench 48.8 and no Tau3/Claw same-harness numbers.
- **Reasoning: 88/100.** HLE w/ Tools 55.3 is exceptional and MMLU 88.1/BBH 86.6 are strong; capped by zero verified GPQA Diamond or text-only HLE numbers.
- **Context window: 95/100.** 1M window + 131K output verified, architecture built for 1M serving; capped at 95 without a verified 512K+ retrieval measurement (tier requires ≥98% retention for 100).
- **Multimodal: 82/100.** Text/image/video/file in with measured vision rows (MMVU 80.5, Chartography w/ Tools 78.0, Vision2Web 77.8, OfficeQA Pro 62.4); capped by text-only output and no audio I/O.
- **Coding: 88/100.** Vals SWE-bench 92.0 + Vals LiveCode 80.5 + DeepSWE 63.4 + TB2.1 84.3 + SciCode 51.6; capped by DeepSWE below the 74 frontier bar and weak FrontierSWE v2 18.1.
- **Cost efficiency: 90/100.** $0.37/$1.25 paid tier with no free ID — cheap per token for its capability band but 2.5x its own base weights for speed alone.
- **Overall Score: 89/100.** Mean of the five quality dims (90+88+95+82+88)/5 = 88.6 → 89; best fit as a latency-bound agentic coding tier — buy FlashX when the queue is the bottleneck, self-host or use base Flash for batch work.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (z.ai GLM-5.3-Flash launch blog, z.ai developer docs, OpenRouter + Vercel model pages, orcarouter FlashX analyses, BenchLM/BenchmarkList/Vals/SWE Atlas leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
