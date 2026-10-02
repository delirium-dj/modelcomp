# Ling 3.1 Flash — findings by Muse Spark 1.3

- Source: InclusionAI/Ant Group (`inclusionai/ling-3.1-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI hybrid-reasoning MoE (~560B total / ~25B active) for coding, multi-step analysis, and tool-using agents; step up from Ling 3.0 Flash (124B / 5.1B).
- **Provider / access:** Vercel AI Gateway via Novita (`inclusionai/ling-3.1-flash`; promo free route `inclusionai/ling-3.1-flash-free`). Chat Completions-style hosted route.
- **Release / knowledge:** 2026-09-29 launch; knowledge cutoff undisclosed.
- **IDs:** `inclusionai/ling-3.1-flash` (standard); `inclusionai/ling-3.1-flash-free` (promo to ~2026-10-13)
- **Context window:** 262,144 total, 32,768 max output (Vercel listing; vendor 1M design target, 256K trial cap).
- **Modalities:** Text in/out; reasoning yes; tool calls yes; no verified image/audio/video input found.
- **Pricing (as of 2026-10-02):** Free promo ($0 in/out) to ~2026-10-13; paid price unannounced.
- **Architecture:** Hybrid-reasoning MoE ~560B/25B per vendor; proprietary, weights unreleased.

### Raw benchmarks found

> All figures vendor-reported launch numbers (single Ant table); no independent reproduction as of 2026-10-02.

Agent / tool use:

- AutomationBench: **52.5%** (launch material via buildfastwithai 2026-10-01)
- SkillsBench: **68.7%** (launch material via buildfastwithai 2026-10-01)
- CyberGym: **87.9%** (launch table; ThreatFrontier 2026-09-30)
- Finance Agent v2: **57.9%** (launch material via buildfastwithai 2026-10-01)
- DRACO: **85.5%** (launch material via buildfastwithai 2026-10-01)
- SWE Atlas Codebase QnA: **55.9%** (launch material via buildfastwithai 2026-10-01)
- MCP-Atlas: **83.00** (launch table via ThreatFrontier 2026-09-30)
- BrowseComp: **91.67** (launch table via ThreatFrontier 2026-09-30)
- WideSearch: **83.32** (launch table via ThreatFrontier 2026-09-30)
- MultiChallenge: **69.78** (launch table via ThreatFrontier 2026-09-30)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:
- HLE: **37.44%** (launch table via ThreatFrontier 2026-09-30; up from 3.0 Flash 22.7)
- HealthBench Professional: **65.35%** (launch table via buildfastwithai/ThreatFrontier)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-Pro: **65.39%** (launch table via ThreatFrontier; leads DeepSeek-V4.1-Flash 56.77 in-table)
- Terminal-Bench 4.0: **40.40%** (launch table via ThreatFrontier; leads DeepSeek 31.20 in-table)
- DeepSWE: **59.70** (launch table via ThreatFrontier; trails DeepSeek 74.20 in-table)
- Terminal-Bench 2.1: **81.18** (launch table via ThreatFrontier; trails DeepSeek 90.60 in-table)
- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 262,144 served window (32,768 out); 1M is design target only.

### Normalized scores (1–100)

- **Tool use: 80/100.** CyberGym 87.9, DRACO 85.5, BrowseComp 91.67, MCP-Atlas 83.00, SWE Atlas QnA 55.9 show breadth; capped vendor-only, no independent run.
- **Reasoning: 74/100.** HLE 37.44 plus HealthBench 65.35; capped missing GPQA/LCR evidence, vendor-only.
- **Context window: 88/100.** 262K served with 32K out is substantial, below 1M tiers, no retrieval measure.
- **Multimodal: 15/100.** No verified non-text I/O found; text-only floor.
- **Coding: 84/100.** SWE-Pro 65.39 table-leading plus TB4 40.40; DeepSWE 59.70 trails rival; capped vendor-only.
- **Cost efficiency: 95/100.** $0 promo to ~2026-10-13; durable price unannounced.
- **Overall Score: 68/100.** Mean of five non-cost dims (80+74+88+15+84=341/5=68.2, half-up 68); reported agentic coder, test on own tasks.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-02
- Method: public internet research (buildfastwithai 2026-10-01, ThreatFrontier 2026-09-30, Vercel Gateway listing, BenchLM page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

