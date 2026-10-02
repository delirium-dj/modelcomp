# Kimi K2.7 Code HighSpeed — findings by Kimi K3

- Source: Moonshot AI (`kimi-for-coding-highspeed`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Moonshot AI's high-speed serving tier of Kimi K2.7 Code — per official Kimi Code docs, the same coding ability as `kimi-for-coding` (K2.7 Code at the time) with ~5–6× faster output at 3× quota consumption. K2.7 Code itself is a 1T-parameter-class open-weight agentic coding model (Val's measured #1 open-weight on SWE-bench Verified and Terminal-Bench 2.1 at launch).
- **Provider / access:** Kimi Code (CLI / Desktop / VS Code / web) via model ID `kimi-for-coding-highspeed`; Pro plan and above (legacy Allegretto and above). OpenAI-compatible and Anthropic-compatible endpoints (`https://api.kimi.com/coding/v1` / `https://api.kimi.ai/coding/v1`). Note: `kimi-for-coding` (standard tier) has since been upgraded in place to K2.8 Preview — capability claims below reference the K2.7 Code base model measured at its June 2026 launch.
- **Release / knowledge:** HighSpeed tier GA'd 2026-07-09 (Kimi Code "What's New"); K2.7 Code base released 2026-06-12 (Vals AI model page / Moonshot platform docs).
- **IDs:** `kimi-for-coding-highspeed` (Kimi Code); base weights are open (`kimi-k2.7-code` on Moonshot's platform). No Free ID exists on OpenCode Zen.
- **Context window:** 262,144 tokens (official Kimi Code model table); Vals lists max output 256K for the base model.
- **Modalities:** Text + image + video in; text out (official Kimi Code model table). Thinking always ON for this tier (no effort levels); tool calls via Kimi Code harness and OpenAI/Anthropic-compatible APIs.
- **Pricing (as of 2026-10-01):** Kimi Code subscription-bound (Pro/Allegretto+); HighSpeed consumes quota at 3× the standard rate (official docs). Base `kimi-k2.7-code` API list price $0.95 / $4.00 per MTok (Vals AI; okou.ai lists $1.14/$4.80 on its route). Not metered per token inside Kimi Code plans.
- **Architecture:** Open-weight ~1T-parameter MoE coding model (per Vals/third-party listings; Moonshot platform docs); HighSpeed is a serving-tier speed-up of the same weights, not a separate training run.

### Raw benchmarks found

Base model Kimi K2.7 Code, evaluated independently by Vals AI (2026-06-13; the HighSpeed tier runs these same weights with officially identical coding ability):

Agent / tool use:

- Terminal-Bench 2.1: **67.04%** (±0.38, Vals AI; #1 open-weight, rank 37/75 overall)
- SkillsBench: **50.04%** (±4.24, Vals AI; rank 23/35)
- GDPval-AA / Tau3-Banking / Claw-Eval / Toolathon: **no verified public score found** for this variant

Coding:

- SWE-bench Verified: **78.20%** (±1.85, Vals AI; #1 open-weight at eval time, matching Claude Opus 4.6 (Thinking) and GPT-5.4 (xhigh), narrowly ahead of GPT-5.3 Codex per Vals)
- LiveCodeBench: **82.05%** (±1.07, Vals AI; rank 58/143 — a relative weak spot per Vals)
- Vibe Code Bench v1.1: **47.21%** (±5.19, Vals AI; #3 open-weight)
- Code Migration: **25.39%** (±4.16, Vals AI); ProgramBench: **0.00%** (Vals AI run — flagged as an anomalous harness result, not necessarily capability)
- Moonshot first-party: ~30% fewer thinking tokens than K2.6 with higher scores on Kimi Code Bench v2, Program Bench, MLS Bench Lite (vendor claim, kimi.ai resources page)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found** for this variant (coding-focused model; reasoning published only as token-efficiency claims vs K2.6)

Long context:

- 262K window documented; **no MRCR/RULER retrieval benchmark published**. Vals observed 54m20s average latency on long tasks (long-horizon orientation).

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 67.04% (#1 open-weight) sits above the 45–60% mid band; SkillsBench 50.04% corroborates agentic tooling strength; capped by missing Tau3/GDPval-AA/Claw-Eval numbers.
- **Reasoning: 68/100.** No GPQA/HLE published; scored above-mid on the strength of SWE-bench Agentic reasoning and vendor-documented ~30% thinking-token efficiency — explicitly capped by absent science/math benchmarks.
- **Context window: 70/100.** 262K window maps to the lower 200K–500K band; no published needle/retrieval depth numbers.
- **Multimodal: 78/100.** Official text+image+video input (Kim Code model table) → image+video-in band (75–90) near its floor — multimodal input documented but not benchmarked, text-only output.
- **Coding: 86/100.** SWE-bench Verified 78.20% + TB 2.1 67.04% + LCB 82.05% + Vibe 47.21% (all third-party Vals AI) put it at the bottom edge of the 90–100 frontier band; held at 86 by the weak LiveCodeBench/ProgramBench results.
- **Cost efficiency: 80/100.** Base API $0.95/$4.00 maps near the ~$1.25/$4.25 → ~88 reference, but HighSpeed's 3× quota multiplier on subscription plans materially raises effective cost per task — balanced mid-high.
- **Overall Score: 76/100.** Half-up mean of the five quality dims: (78 + 68 + 70 + 78 + 86) / 5 = 76.0 → 76. Best fit: interactive agentic coding loops that need open-weight-class quality at 5–6× speed inside Kimi Code; step down to the standard tier when quota efficiency matters, step up to K3 for max-effort frontier problems.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (official Kimi Code docs — models page + What's New changelog; Vals AI model/benchmark pages for K2.7 Code; okou.ai / codersera cross-references for pricing); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark numbers belong to the measured base model (K2.7 Code); the HighSpeed tier shares its weights per official docs.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
