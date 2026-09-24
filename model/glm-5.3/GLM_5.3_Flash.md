# GLM-5.3 — findings by GLM 5.3 Flash

- Source: Z.ai / Zhipu AI (`glm-5.3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's August 2026 flagship — the same ~750B MoE base as GLM-5.2 with every gain from scaled-up post-training (no new pretraining); built for long-horizon coding agents, with a standout offensive-security capability (ExploitBench more than doubling). Flagship weights were withheld at launch for safety hardening; the MIT-licensed GLM-5.3-Flash is a separately trained sibling, not this model's weights.
- **Provider / access:** Z.ai API (`glm-5.3`, OpenAI-compatible at `https://api.z.ai/api/coding/paas/v4`, plus Anthropic-compatible endpoint `/api/anthropic`); GLM Coding Plan flat rate (from ~$12.60/mo Lite annual); weights announced for late August 2026, not yet published at verification. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-08-14; knowledge cutoff not verified.
- **IDs:** `glm-5.3` (Z.ai API). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens; 131,072 max output (verified via Z.ai docs and theairankings).
- **Modalities:** text input; text output; multilingual; reasoning always on (cannot disable — `thinking.type: "enabled"` with `reasoning_effort`: low/high/max, default max); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $1.40 / $4.40 per 1M in/out; cached input $0.26 per 1M — unchanged from GLM-5.2/5.1. China-hosted API; Zhipu is on the US Entity List (data-residency/compliance caveat).
- **Architecture:** Mixture-of-Experts ~750B total / ~40B active — same base as GLM-5.2; licence not yet published (MIT expected for the GLM-5 line, unconfirmed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2** (Z.ai launch table; vs GLM-5.2's 81.0, Kimi K3's 88.3, GPT-5.6 Sol's 88.8)
- Terminal-Bench 3.0: **28.3** (Z.ai launch table; up from 4.6; open-source SOTA claim; beats Kimi K3's 17.4, trails Fable 5's 33.7 and Sol's 34.6)
- AutomationBench: **48.2%** (Z.ai launch table; up from 26.2%; leads Kimi K3's 46.7%)
- Agents' Last Exam: **28.5** (Z.ai docs, up from 23.8)
- CyberGym: **84.5%** (Z.ai docs, up from 77.2%); ExploitBench: **54.4%** (up from 24.4%, ExploitGym solves 29 → 105)
- Tau3-Banking, GDPval-AA, Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE (with tools): **62.5%** (Z.ai launch table; vs GLM-5.2's 54.7%, Kimi K3's 59.8%, Fable 5's 63.9%)
- Artificial Analysis Intelligence Index: **60 (max)** on AA's August run; **45** on the re-based v4.3 scale of 7 Sep 2026 ($2.01/task) (independent, Artificial Analysis)
- Cost per index task: **$0.68** launch-era — lowest of any model in the frontier cluster (Artificial Analysis)
- GPQA Diamond: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Output speed: 84.7 tokens/sec (AA; more than double Kimi K3's 38.2); verbosity 170M output tokens vs 72M median

Coding:

- DeepSWE v1.1: **66.9** (Z.ai launch table; up from 46.2; beats Grok 4.6's 65.9, trails Fable 5's 69.7 and Sol's 72.7)
- SWE-Marathon v1.1: **42.5** (Z.ai launch table; up from 19.4)
- Z.ai Code Bench (max): **34.5%** (in-house benchmark; up from 23.4%)
- SWE-bench Verified / SWE-bench Pro: **no verified public score found in any harness** (Z.ai published none; GLM-5.2 had 62.1% SWE-bench Pro)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- No long-context retrieval value verified (1M window claimed; no MRCR/RULER/GraphWalks value found)

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 88.2% hits the ~88%+ frontier reference, AutomationBench 48.2% leads its row and Terminal-Bench 3.0 28.3% is an open-source SOTA claim; missing Tau3/GDPval and the weak absolute TB3.0 value keep it under 95.
- **Reasoning: 88/100.** HLE with tools 62.5% is frontier-class (clears Kimi K3) and the independent AA Index of 60 at launch hit the 60+ frontier reference (45 on the re-based scale); no GPQA number and the Index re-basing cap it under 90.
- **Context window: 95/100.** 1M tokens maps to the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 15/100.** Text-only in/out — no vision path, the clearest capability gap vs Sol/Fable 5/Grok 4.6/Kimi K3.
- **Coding: 87/100.** DeepSWE 66.9% and SWE-Marathon 42.5% (up ~2x from 5.2) are near-frontier and TB2.1 88.2% is elite; the complete absence of any SWE-bench figure — for a model marketed on coding — caps it.
- **Cost efficiency: 90/100.** $1.40/$4.40 per 1M (cached $0.26) sits just above the ~$1.25/$4.25 = ~88 methodology reference; $0.68/task was the lowest in the frontier cluster — docked on verbosity (170M tokens vs 72M median) inflating real bills.
- **Overall Score: 75/100.** Mean of the five quality dims (90 + 88 + 95 + 15 + 87) / 5 = 75. Best-fit: long-horizon coding agents at frontier-cluster quality and open-model prices — best avoided where vision, self-hosting today, or Western data residency are required.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (theairankings.com model page with Z.ai docs and Artificial Analysis data, llm-stats, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.md`, using the same headings.
