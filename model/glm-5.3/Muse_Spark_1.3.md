# GLM 5.3 — findings by Muse Spark 1.3

- Source: Z.ai/GLM-5.3 (`opencode/glm-5.3`)
- Date: 2026-09-24 (UTC); re-verified 2026-09-29 (UTC, user-signed-off re-research: AA v4.3 comparison row — Index 45/SciCode 59/HLE 42/CritPt 19/LCR 80/TB4.0 42 — + NL2Repo/Toolathlon/GDPval/APEX rows + cutoff Mar 2026 + GLM-5.3-License correction + base-743B noted; Tool 88 → 90, Reasoning 86 → 89, Context 90 → 92, Coding 89 → 90, Overall 74 → 75)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai flagship open-weights reasoning MoE for agentic coding and long-horizon engineering work. Top use case is terminal-based coding agents and cybersecurity-assisted engineering.
- **Provider / access:** Z.ai API + Coding Plan (`z-ai/glm-5.3`); open weights since 2026-08-28 under custom GLM-5.3 License — NOT MIT (commercial OK with attribution; MaaS >$10B needs review — corrects filed MIT placeholder — re-verified 2026-09-29). Chat Completions and Responses-style API.
- **Release / knowledge:** 2026-08-14 release (Z.ai launch blog; weights 2026-08-28); knowledge cutoff Mar 2026 (same base/pretrain as 5.2 per benchgen — re-verified 2026-09-29)
- **IDs:** `opencode/glm-5.3` (no Free ID exists on Zen — paid only)
- **Context window:** 1M tokens total, 128K max output, three effort levels (low/high/max, default max), always reasoning — verified via Z.ai launch blog and docs (Aug 2026).
- **Modalities:** text in; text out; reasoning yes (cannot be disabled); tool calls yes; JSON mode yes; text-only, no image/audio input.
- **Pricing (as of 2026-09-24):** $1.40 / $4.40 per 1M input/output tokens, cached read $0.26; paid tier only ($).
- **Architecture:** open-weights MoE, 743B same-base as 5.2 (filed 753B variant noted; cheapestinference/inferencex consensus — re-verified 2026-09-29); post-training-only release; GLM-5.3 License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.ai launch blog 2026-08-14 vendor run, Claude Code harness)
- Terminal-Bench 3.0: **28.3%** (Z.ai launch blog 2026-08-14 vendor run, avg@3; open-source SOTA claim at release)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AutomationBench: **48.2%** (Z.ai figures via VentureBeat 2026-08-14; up from 26.2 on GLM-5.2)
- Agents' Last Exam (CLI): **28.5%** (Z.ai launch blog 2026-08-14; up from 23.8)
- Toolathlon Verified: **73.0%**; NL2Repo: **58.0%** (z.ai blog — re-verified 2026-09-29)
- GDPval-AA v2: **1769 Elo** vendor (**1634** AA-comparison scale — re-verified 2026-09-29)
- Terminal-Bench 4.0: **42%** (AA comparison — re-verified 2026-09-29)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (aggregator TensorFeed.ai citing vendor materials, Aug 2026; provisional — no independent leaderboard entry verified)
- HLE: **62.5% with tools** (TensorFeed.ai citing vendor materials; Z.ai blog notes HLE-with-tools run at 300K context with GPT-5.6-luna judge)
- HLE: **42%** (AA comparison scale — re-verified 2026-09-29); LCR: **80%** (AA comparison — re-verified 2026-09-29); CritPt: **19%** (AA comparison — re-verified 2026-09-29); Omniscience: **14** (AA comparison — re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **45** (AA v4.3 comparison; Briefcase 1504 on same row — re-verified 2026-09-29); BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMLU-Pro: **86.8%** (TensorFeed.ai citing vendor materials, provisional)
- CyberGym: **84.5%** / ExploitBench: **54.4%** (TensorFeed.ai citing vendor materials; emergent cyber capability, provisional)

Coding:

- SWE-bench Verified / SWE-Pro: **95.4% SWE-bench Verified** (TensorFeed.ai citing independent evaluator, Aug 2026; provisional — vendor blog does not report SWE-bench Verified directly; closest vendor coding numbers below)
- LiveCodeBench: **no verified public score found**
- SciCode: **59.0%** (AA comparison; ModelBeat/Epoch corroborates — re-verified 2026-09-29)
- Vibe Code Bench: **no verified public score found**
- APEX: **56.6%** (ModelBeat/Epoch AI — re-verified 2026-09-29)
- DeepSWE / Coding Index / other: **DeepSWE v1.1 66.9%** (Z.ai launch blog 2026-08-14; vs GPT-5.6 Sol 72.7%); **FrontierSWE 78.1 dominance** (Z.ai launch blog, Proximal eval at 1M context); **SWE-Marathon v1.1 42.5%** (Z.ai launch blog); **NL2Repo 58.0%** (Z.ai launch blog table); **PostTrainBench 39.8%** (Z.ai launch blog table)

Long context:

- No verified MRCR / RULER / GraphWalks score found for GLM-5.3; vendor reports 1M context with 128K max output and long-horizon evals (FrontierSWE at 1M, SWE-Marathon at 1M) but no public retrieval-percentage curve.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 88.2% plus TB4.0 42%, Toolathlon 73.0% and GDPval 1769 show elite terminal agency; capped by TB3.0 28.3% trailing Sol 34.6%.
- **Reasoning: 89/100.** GPQA 88.1% plus Index 45, HLE 42–62.5%, LCR 80% and CritPt 19% show strong reasoning; capped by provisional vendor-only provenance on GPQA/MMLU rows.
- **Context window: 92/100.** 1M total with 128K max output and LCR 80% measured plus 1M-context evals (FrontierSWE, SWE-Marathon); capped by no verified MRCR/RULER retention curve.
- **Multimodal: 15/100.** Text in / text out only per vendor docs; text-only floor, capped with no image/audio/video input.
- **Coding: 90/100.** DeepSWE 66.9% plus FrontierSWE 78.1, SciCode 59.0%, NL2Repo 58.0% and SWE-Marathon 42.5% show strong coding; capped by SWE-V 95.4% provisional status and Vibe gap.
- **Cost efficiency: 65/100.** $1.40/$4.40 is well below closed frontier coding rates with open-weights option; paid-only with no free tier, capped below free Flash tiers.
- **Overall Score: 75/100.** Mean of the five non-cost dims (90+89+92+15+90)/5 = 75.2 → 75; best-fit open-weights agentic coding workhorse where terminal agency outweighs text-only limits.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-24
- Method: public internet research (Z.ai GLM-5.3 launch blog 2026-08-14, Z.ai docs, VentureBeat 2026-08-14, TensorFeed.ai aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
