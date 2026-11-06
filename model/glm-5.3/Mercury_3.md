# GLM-5.3 — findings by Mercury 3

- Source: Z.ai / Zhipu AI (GLM-5.3)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's current flagship (released 2026-08-14), a pure post-training upgrade on the same ~750B/40B-active MoE base as GLM-5.2 — no new pretraining. Positioned for long-horizon coding agents and cybersecurity; one of the most capable open-weight models of late 2026 (AA Index 45 on re-based v4.3).
- **Provider / access:** Z.ai API (`glm-5.3`, OpenAI- and Anthropic-compatible endpoints), GLM Coding Plan (from ~$12.60/mo annual); open weights published 2026-08-28 on Hugging Face under the GLM-5.3 Licence (MIT-style + security review for MaaS businesses >$10B revenue). Hosted API routes through Chinese infrastructure; Zhipu is on the US Entity List.
- **Release / knowledge:** Released 2026-08-14; open weights 2026-08-28; knowledge cutoff not published.
- **IDs:** `zai/glm-5.3`; HF `zai-org/GLM-5.3`.
- **Context window:** 1M tokens; max output 131,072.
- **Modalities:** text in / text out (text-only — no vision path); multilingual; reasoning always on (low/high/max; default max; `disabled` unsupported).
- **Pricing (as of 2026-11):** $1.40 in / $4.40 out per 1M (cached $0.26) — unchanged from GLM-5.2; AA cost/task $2.01 (v4.3) / $0.68 at launch.
- **Architecture:** MoE ~750B total / ~40B active (same trained base as GLM-5.2).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **28.3%** (vendor; from 4.6 in GLM-5.2) — vs Fable 5 33.7, GPT-5.6 Sol 34.6
- AutomationBench: **48.2%** (vendor) — vs Kimi K3 46.7%, Fable 5 46.2%, GPT-5.6 Sol 45.8%
- Terminal-Bench 2.1: **88.2%** (vendor; vs Kimi K3 88.3%, GPT-5.6 Sol 88.8%)

Reasoning / knowledge:

- AA Intelligence Index (independent): **45** on re-based v4.3 (2026-09-07; $2.01/task) — 2 behind GPT-5.6 Sol (47), 1 ahead of Grok 4.6/Kimi K3 (44); scored 60 at launch on AA's August run
- HLE (with tools): **62.5%** (vendor; vs Fable 5 63.9%, GPT-5.6 Sol 64.5%)
- Output speed: 84.7 tok/s (AA); verbosity 170M output tokens vs 72M median (AA) — notably verbose

Coding:

- DeepSWE v1.1: **66.9%** (vendor; from 46.2 in GLM-5.2) — vs Kimi K3 67.5%, Fable 5 69.7%, GPT-5.6 Sol 72.7%
- SWE-Marathon v1.1: **42.5%** (vendor; vs Kimi K3 48.1%)
- Z.ai Code Bench (max): **34.5%** (vendor; beats Opus 4.8 29.5% with 60% fewer tokens per Sandbase)
- **No SWE-bench Pro or Verified figure published in any harness** — a notable gap for a coding-marketed model

Cybersecurity (vendor-reported):

- CyberGym 77.2% → **84.5%**; ExploitBench 24.4% → **54.4%**; ExploitGym solves 29 → 105 in 2h
- Reported 2,436 vulnerabilities across 269 open-source projects (1,097 critical/high), 53 CVEs at launch; claimed "serious" Cursor flaw has no published CVE and no independent confirmation

### Normalized scores (1–100)

- **Tool use: 85/100.** AutomationBench 48.2% (top of its vendor table), Terminal-Bench 3.0 28.3%, and exceptional agentic cyber results (ExploitBench 54.4%, ExploitGym 105 solves); most figures vendor-run.
- **Reasoning: 84/100.** Independent AA Index 45 (re-based v4.3) places it at the top of the open-weight class, 2 behind GPT-5.6 Sol; HLE with tools 62.5%.
- **Context window: 92/100.** 1M verified with 131K max output.
- **Multimodal: 15/100.** Text-only in/out — no image/video/audio path; the clearest capability gap vs its frontier peers.
- **Coding: 85/100.** DeepSWE 66.9% and SWE-Marathon 42.5% are strong; capped by the complete absence of any SWE-bench figure and losses to Fable 5/Sol on the hardest rows.
- **Cost efficiency: 72/100.** $1.40/$4.40 with $0.26 cache — well under the frontier cluster; effectively offset by high verbosity and China-hosted API/Entity List constraints.
- **Overall Score: 72/100.** Mean of the five non-cost dims (85+84+92+15+85)/5 = 72.2 → 72. Best-fit: the highest-scoring text-only open-weight coder for long-horizon agentic/cyber work at a fraction of closed-frontier cost; multimodal workload needs rule it out.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai docs: GLM-5.3 guide](https://docs.z.ai/guides/llm/glm-5.3)
  - [Z.ai docs: pricing](https://docs.z.ai/guides/overview/pricing)
  - [Hugging Face: zai-org/GLM-5.3 (weights + license)](https://huggingface.co/zai-org/GLM-5.3)
  - [Artificial Analysis: GLM-5.3 profile](https://artificialanalysis.ai/models/glm-5-3)
  - [The AI Rankings: GLM-5.3 review](https://theairankings.com/zhipu/glm-5-3/)
  - [Explainx: GLM-5.3 launch/cyber benchmarks](https://www.explainx.ai/blog/glm-5-3-launch-cyber-defense-benchmarks-august-2026)
  - [AI Release Tracker: GLM-5.3](https://aireleasetracker.com/model/zai/glm-5.3)
- Future sources: add a new file next to this one using the same headings.
