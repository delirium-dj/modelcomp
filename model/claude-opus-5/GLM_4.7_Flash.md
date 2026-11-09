# Claude Opus 5 — findings by GLM 4.7 Flash

- Source: Anthropic (claude-opus-5)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship reasoning model, announced July 24, 2026, designed for frontier-level reasoning, software engineering, and complex knowledge work across diverse domains.
- **Provider / access:** Anthropic API (claude-opus-5) — API-only, $5.00 in / $25.00 out per 1M tokens. No open weights.
- **Release / knowledge:** Released July 24, 2026 (official model card)
- **IDs:** claude-opus-5
- **Context window:** Not specified in public documentation; typical Claude Opus models range from 200K to 1M tokens.
- **Modalities:** Text-in, text-out, reasoning yes, tool calls yes, JSON mode yes.
- **Pricing (as of 2026-11-09):** $5.00 in / $25.00 out per 1M tokens. No data-usage/privacy caveats for free tiers reported.
- **Architecture:** Proprietary (Anthropic), not open-weights.

### Raw benchmarks found

**Coding (verified public benchmarks):**

- **SWE-bench Verified:** 97.0% (rank 1 of 72, 100th percentile) 🏆
- **SWE-bench Pro V2:** 99.4% ± 0.4 (rank 1 of 16, 100th percentile) 🏆
- **SWE-Marathon:** 48.0% (rank 1 of 8, 100th percentile) 🏆
- **SWE-bench Multilingual:** 89.5% (rank 4 of 56, 95th percentile)
- **SWE-bench Multimodal:** 59.4% (rank 2 of 17, 94th percentile)
- **LiveCodeBench:** 89.0% (rank 2 of 123, 99th percentile)
- **Android Bench:** 91.8% (rank 1 of 46, 100th percentile) 🏆
- **ProgramBench (Anthropic Harness):** 93.0% (rank 1 of 10, 100th percentile) 🏆
- **ProgramBench:** 82.3% (rank 3 of 42, 95th percentile)
- **KernelBench CUDA:** 50.7% (rank 3 of 22, 90th percentile)
- **BenchCAD:** 82.1% (rank 4 of 28, 89th percentile)
- **FrontierCode:** 63.6% (rank 5 of 37, 89th percentile)
- **SWE-bench Pro:** 79.2% (rank 5 of 62, 93rd percentile)
- **Vibe Code Bench v1.1:** 88.4% (rank 6 of 76, 93rd percentile)
- **SWE Atlas - Codebase QnA:** 66.0% (rank 4 of 42, 93rd percentile)
- **Terminal-Bench 4.0:** 52.3% (rank 10 of 41, 78th percentile)
- **FrontierSWE v2:** 52.0% (rank 6 of 20, 74th percentile)
- **SWE Atlas - Test Writing:** 62.2% (rank 2 of 30, 97th percentile)
- **SWE Atlas - Codebase QnA:** 66.0% (rank 4 of 42, 93rd percentile)
- **SWE-bench Verified:** 96.0% (rank 1 of 59, 100th percentile) 🏆
- **SWE-sweep:** 1.3% (rank 9 of 12, 27th percentile)
- **SWE Atlas - Test Writing:** 62.2% (rank 2 of 30, 97th percentile)

**Reasoning / knowledge:**

- **GPQA Diamond:** 93.4% (rank 3 of 117, 98th percentile)
- **Artificial Analysis Intelligence Index:** 63.1 (rank 2 of 325, 100th percentile) 🏆
- **HLE (Humanity's Last Exam):** 64.7% (rank 3 of 491, 100th percentile) 🏆
- **MMLU Pro:** 91.6% (rank 1 of 116, 100th percentile) 🏆
- **MMMU Pro:** 89.9% (rank 1 of 79, 100th percentile) 🏆
- **ObviousBench:** 100.0% (rank 4 of 275, 99th percentile) 🏆
- **AA-Omniscience:** 0.49 net (rank 5 of 9, 50th percentile)
- **AIIQ Composite IQ:** 135 (rank 9 of 168, 95th percentile)
- **HLE w/ tools:** 63.6% (rank 7 of 38, 84th percentile)
- **RiemannBench:** 79.0% (rank 2 of 9, 88th percentile)
- **ArxivMath:** 91.3% (rank 7 of 35, 82nd percentile)

**Tool use:**

- **Toolathlon:** 80.6 Pass@1; 87.0 Pass@3; 73.1 Pass^3; 23.5 turns (rank 1 of 43, 100th percentile) 🏆
- **DRACO:** 88.6% (rank 1 of 24, 100th percentile) 🏆
- **Terminal-Bench 3.0:** 43.3% (rank 1 of 20, 100th percentile) 🏆
- **Frontier-Bench:** 44.4% (rank 1 of 9, 100th percentile) 🏆
- **APEX-Agents:** 41.8% (rank 1 of 8, 100th percentile) 🏆
- **Hex DataBench:** 88.0% (rank 1 of 8, 100th percentile) 🏆
- **ITSMBench:** 46.1% (rank 1 of 5, 100th percentile) 🏆
- **MCP Atlas:** 87.0% (rank 4 of 54, 94th percentile)
- **AA-Briefcase:** 1720 Elo (rank 4 of 161, 98th percentile)
- **Agents' Last Exam:** 55.9% (rank 3 of 43, 95th percentile)

**Long context:**

- **AA-LCR:** 82.0% (rank 31 of 425, 93rd percentile)

**Multimodal:**

- **Design Arena:** 1382 Elo (rank 18 of 376, 95th percentile)
- **BabyVision:** 94.1% (rank 5 of 51, 92nd percentile)
- **ZEROBench:** 52.0% (rank 6 of 65, 92nd percentile)
- **Chartography:** 84.0% (rank 7 of 46, 87th percentile)
- **LVBench:** 75.4% (rank 14 of 49, 73rd percentile)
- **BenchCAD Vision2Code-1000:** 0.899 (rank 6 of 13, 58th percentile)
- **LMArena Vision Arena:** 1291.95 (rank 13 of 26, 52nd percentile)

**Science:**

- **BioMysteryBench Human-Solvable:** 90.1% (rank 1 of 14, 100th percentile) 🏆
- **VariantBench:** 49.7% (rank 1 of 15, 100th percentile) 🏆
- **BioMysteryBench Human-Difficult:** 49.4% (rank 3 of 14, 85th percentile)
- **Terminal-Bench-Science 0.1:** 30.0% (rank 8 of 12, 36th percentile)

### Normalized scores (1–100)

- **Tool use: 95/100**
- **Reasoning: 95/100**
- **Context window: 90/100**
- **Multimodal: 85/100**
- **Coding: 98/100**
- **Cost efficiency: 100/100**
- **Overall Score: 92.6/100**

---

## Signature

- Provided by: **GLM 4.7 Flash (zai/glm-4.7-flash)**
- Date: 2026-11-09
- Method: Public internet research (BenchmarkList, Anthropic model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Opus 5 Model Card](https://www.anthropic.com/news/claude-opus-5)
  - [Anthropic Claude Opus 5 System Card](https://www.anthropic.com/claude-opus-5-system-card)
  - [BenchmarkList Claude Opus 5](https://benchmarklist.com/models/anthropic-claude-opus-5)
- Note: This is the official Anthropic model, not a community clone.
- Future sources: Add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
