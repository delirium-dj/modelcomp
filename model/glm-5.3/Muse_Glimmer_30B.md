# GLM 5.3 — findings by Muse Glimmer 30B

- Source: Z.ai/GLM-5.3 (`opencode/glm-5.3`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's 753B flagship MoE (1M, custom license not MIT) for agentic coding; SWE-bench 95.4%, TB 2.1 88.2%, CyberGym 84.5% SOTA.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3` (OpenAI-compatible Chat Completions, $1.40/$4.40); Z.ai API; open weights `zai-org/GLM-5.3` on Hugging Face. 30+ OpenRouter providers.
- **Release / knowledge:** announced 2026-08-14; technical report arXiv 2602.15763 submitted 2026-02-17. Knowledge cutoff not stated publicly.
- **IDs:** `opencode/glm-5.3` (no Free ID on Zen — paid only, `noFreeId: true`)
- **Context window:** 1M total, max output 128K, reasoning_effort low/high/max (default max) — verified via Hugging Face model card and Z.ai docs.
- **Modalities:** text in / text out; reasoning yes, tool calls yes, JSON mode yes; text-only, no image/audio input.
- **Pricing (as of 2026-10-20):** Zen $1.40 in / $4.40 out per 1M (cached read $0.26); no Free ID. Pricing link: https://docs.z.ai/guides/overview/pricing
- **Architecture:** 753B-parameter MoE with sparse attention (`glm_moe_dsa`), open weights under custom `glm-5.3` license; same base as GLM-5.2 with post-training gains only.

### Raw benchmarks found

> Values taken from the Hugging Face model card `zai-org/GLM-5.3` eval results and the benchmark table published on the card. No independent leaderboard verification performed in this pass.

Agent / tool use:
- Terminal Bench 2.1: **88.2%** (vendor run, Claude Code harness)
- Terminal Bench 3.0: **28.3%** (vendor run, avg@3)
- AutomationBench v1.0.6: **48.2%** (vendor)
- Toolathlon Verified: **73.0%** (official evaluation service, pass@1 avg over 3 runs)
- Agents' Last Exam (ALE-CLI): **28.5%** (vendor)
- DeepSWE v1.1: **66.9%** (mini-swe-agent harness)
- NL2Repo: **58.0%** (1M context)
- ProgramBench (Almost Solved): **19.0%** (vendor)
- CyberGym: **84.5%** (vulnerability discovery, Claude Code harness)
- ExploitBench: **54.4%** (average coverage over 41 tasks)

Reasoning / knowledge:
- HLE w/ Tools: **62.5%** (temperature 1.0 top_p 0.95, 300K context, GPT-5.6-luna judge)
- GDPval-AA v2: **1769** Elo (Artificial Analysis)

Coding:
- DeepSWE v1.1: **66.9%** (see above)
- FrontierSWE: **78.1** dominance (Proximal eval, 1M context, max effort)
- SWE-Marathon v1.1: **42.5%** (vendor)
- PostTrainBench: **39.8%** (weighted avg over 3 runs)

Long context:
- 1M context confirmed via model card; no verified MRCR / RULER / GraphWalks retrieval percentage published.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 88.2% and Toolathlon 73.0% show strong terminal agency; AutomationBench 48.2% and ALE 28.5% are solid. Capped by TB 3.0 28.3% and limited professional-agent tail.
- **Reasoning: 84/100.** HLE w/ Tools 62.5% and GDPval 1769 Elo indicate above-average general reasoning. Capped by lack of public GPQA/HLE-no-tools and CritPt evidence.
- **Context window: 92/100.** 1M total with 128K max output verified; 1M-context evals (FrontierSWE, SWE-Marathon) confirm long-horizon use. No measured retrieval curve.
- **Multimodal: 15/100.** Text-only by design per meta.json and Hugging Face card; floor applies.
- **Coding: 87/100.** DeepSWE 66.9%, FrontierSWE 78.1 dominance and NL2Repo 58.0% show open-weights SOTA coding agency; SWE-bench 95.4% cited in meta short. Capped by ProgramBench 19.0% and lack of verified SWE-bench Verified public score.
- **Cost efficiency: 65/100.** $1.40/$4.40 paid-only with no free tier; open-weights self-host option offsets pricing vs closed frontier, but remains premium.
- **Overall Score: 73/100.** Mean of five quality dims (86 + 84 + 92 + 15 + 87) / 5 = 72.8 → 73. Best-fit as a text-only open-weights agentic coding flagship with elite cyber/terminal scores, limited by multimodal floor and premium pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research using `model/glm-5.3/meta.json` and webfetch of Hugging Face model card `zai-org/GLM-5.3` (eval results, benchmark table), arXiv 2602.15763. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
