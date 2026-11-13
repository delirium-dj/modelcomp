# Ling-3.1-flash — findings by Ernie 5.5 Flash

- Source: inclusionAI / Ant Group (`ling-3.1-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.1-flash (Ling 3.1 Flash)
- **Short description:** Ant Group inclusionAI's hybrid-reasoning MoE, ~560B total / ~25B active, aimed at general agents, search, office work and software development with extra tuning for medicine, finance and materials science. Text-only successor to Ling-3.0-flash; the multimodal follow-up is Ling-3.2-flash.
- **Provider / access:** Ant Ling developer platform (`developer.ant-ling.com`), OpenAI- and Anthropic-compatible endpoints; runs in Claude Code, Kilo Code, Qwen Code and Hermes Agent. API-only at launch (two-week free trial); open weights promised with paid service.
- **Release / knowledge:** 2026-09-29/30 (announced 30 Sep 2026); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.1-flash` (Phaseo / OpenRouter-style), `ling-3.1-flash` (Ant Ling native). A `:free` route `inclusionai/ling-3.1-flash:free` existed during the trial.
- **Context window:** 262,144 tokens at launch, with the full 1M window planned for paid service (Phaseo: 1M native cap; BenchmarkList: 256K at launch). Verified from vendor docs and two aggregators.
- **Modalities:** text in / text out (no image, video or audio input — vision arrives with Ling-3.2-flash). Explicit thinking/reasoning mode, function calling, structured output, tool use.
- **Pricing (as of 2026-11-12):** $0.30 / 1M input, $0.90 / 1M output (post-trial; Artificial Analysis listing cited by launch coverage). Free for the first two weeks after launch.
- **Architecture:** ~560B total / ~25B active MoE, hybrid linear-attention design (successor to the 124B/5.1B Ling-3.0-flash), proprietary weights at launch.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1673 Elo** (rank 21/359, 94th percentile; self-reported by Ant, field leader Opus 5.5 at 1866)
- Terminal-Bench 4.0: **40.4%** (rank 15/41, 65th percentile; self-reported)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- AA-Briefcase: **1398 Elo** (rank 37/161, rubric pass rate 46.5%; verified)
- CyberGym: **87.9%** (rank 7/44, 86th percentile) · Finance Agent v2: **57.9%** (rank 14/56) · DRACO: **85.5%** (rank 7/24) · MultiChallenge: **69.8%** (rank 4/44)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **55.9%** (SWE Atlas Codebase QnA, rank 17/42)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **39.4%** (rank 50/491, 90th percentile; source: Artificial Analysis-style listing)
- LCR / MLCR: **AA-LCR 83.0%** (rank 22/425, 95th percentile)
- CritPt: **no verified public score found**
- AIIQ Composite IQ: **120** (rank 55/168; abstract 102, math 110, academic 131, programmatic 140, computer use 115, reliability 118)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (SWE Atlas Codebase QnA 55.9% is comprehension, not patch generation)
- LiveCodeBench: **no verified public score found**
- SciCode: **54.1%** (rank 42/312, 87th percentile)
- SkillsBench: **68.7%** (rank 5/22)
- Terminal-Bench 4.0: **40.4%** (also the agentic figure above)

Long context:

- AA-LCR **83.0%** at long-context reasoning (95th percentile) — the strongest published long-context signal; no MRCR/RULER table for the 256K launch window.

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong agentic cluster: GDPval-AA 1673 Elo (94th pct), AA-Briefcase 1398 Elo, CyberGym 87.9%, DRACO 85.5%, Finance Agent v2 57.9%; capped by Terminal-Bench 4.0 at only 40.4% and no Tau3/Claw-Eval coverage.
- **Reasoning: 80/100.** HLE 39.4% and AIIQ composite 120 (programmatic 140) are near-frontier for an efficiency-tier model, with MultiChallenge 69.8% showing solid instruction retention; no GPQA Diamond number keeps it out of the mid-80s.
- **Context window: 74/100.** 262,144 tokens at launch (1M planned for paid service) lands in the 200K–500K band; AA-LCR 83.0% is good but the launch window is the limiting factor.
- **Multimodal: 15/100.** Text-only input and output; vision/video input only arrives with Ling-3.2-flash, so this is a floor score per methodology.
- **Coding: 66/100.** SciCode 54.1%, SkillsBench 68.7%, SWE Atlas Codebase QnA 55.9% and Terminal-Bench 4.0 40.4% describe a competent but not frontier coding model; no SWE-bench Verified or LiveCodeBench figure exists.
- **Cost efficiency: 94/100.** $0.30/$0.90 per 1M with a two-week free trial is roughly 10× below frontier pricing for a 560B-class model; not counted toward Overall.
- **Overall Score: 62/100.** Mean of tool use 76, reasoning 80, context 74, multimodal 15, coding 66. Best fit: cost-sensitive text agents, office/research workflows and coding assistance where 256K context suffices; add Ling-3.2-flash when images or video are involved.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (vendor docs, BenchmarkList, Phaseo, launch coverage); scores are normalized 1–100 interpretations, not official vendor scores. All Ling figures are Ant self-reported unless marked verified.
- Reference URLs:
  - [BenchmarkList — Ling 3.1 Flash (14 benchmark rows)](https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
  - [Phaseo — Inclusion AI: Ling 3.2 Flash (family lineage + Ling 3.1 dates)](https://phaseo.app/models/inclusionai/ling-3.2-flash)
  - [Ant Ling developer docs — Ling models](https://developer.ant-ling.com/en/docs/models/ling/)
  - [LLM Releases — Ling-3.1-flash release date & context](https://www.llm-releases.com/models/ling-3-1-flash)
  - [Sumus — Ling 3.2 Flash: price & benchmarks (Ling 3.1 pricing/lineage)](https://sumus.im/blog/ling-3-2-flash)