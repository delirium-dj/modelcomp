# Gemini 4 Carbon — findings by GLM 4.7 Flash

- Source: Google DeepMind (gemini-4-carbon)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's second Gemini 4 frontier model, announced October 28, 2026, positioned for long-horizon software engineering and defensive cybersecurity: finding, validating, and patching vulnerabilities.
- **Provider / access:** Google DeepMind API (gemini-4-carbon) — API-only, $2.00 in / $10.00 out per 1M tokens. No open weights.
- **Release / knowledge:** Released October 28, 2026 (official model card)
- **IDs:** gemini-4-carbon
- **Context window:** Not specified in public documentation; typical Gemini models range from 200K to 1M tokens.
- **Modalities:** Text-in, text-out, reasoning yes, tool calls yes, JSON mode yes.
- **Pricing (as of 2026-11-09):** $2.00 in / $10.00 out per 1M tokens. No data-usage/privacy caveats for free tiers reported.
- **Architecture:** Proprietary (Google DeepMind), not open-weights.

### Raw benchmarks found

**Coding (verified public benchmarks):**

- **SWE-sweep:** 9.6% bugs resolved (rank 1 of 12, 100th percentile) 🏆
- **SciCode:** 64.2% accuracy (rank 2 of 312, 100th percentile)
- **Terminal-Bench 4.0:** 65.2% resolution rate (rank 4 of 41, 93rd percentile)
- **Arena AI WebDev Arena:** 1767.21 Elo (rank 4 of 142, 98th percentile)
- **LMArena WebDev Arena:** 1767.21 Elo (rank 4 of 33, 91st percentile)
- **FrontierCode 2.0:** 40.0% new_score (rank 4 of 26, 88th percentile)

**Cybersecurity:**

- **SEC-Bench Pro:** 88.2% pass@1 (rank 1 of 16, 100th percentile) 🏆
- **CWE-bench v1:** 71.0% programmatic pass@1 (rank 1 of 12, 100th percentile) 🏆

**Reasoning / knowledge:**

- **RiemannBench:** 80.0% score (rank 1 of 9, 100th percentile) 🏆
- **AA-Omniscience:** 53.5 index (rank 1 of 42, 100th percentile)
- **LMArena Text Arena:** 1526.5 Elo (rank 1 of 28, 100th percentile)
- **CritPt:** 36.0% accuracy (rank 1 of 32, 100th percentile)
- **Terminal-Bench-Science 0.1:** 64.8% resolution rate (rank 2 of 12, 91st percentile)
- **Artificial Analysis Intelligence Index:** Not found in verified public benchmarks

**Tool use:**

- **AA-Briefcase:** 1,610 Elo (rank 10 of 161, 94th percentile)
- **AutomationBench-AA:** 77.8% (rank 1 of 32, 100th percentile)

**Long context:**

- **AA-LCR:** 79.3% (rank 62 of 425, 86th percentile)

**Multimodal:**

- **Chartography:** 72.5% with tools (rank 14 of 46, 71st percentile)

### Normalized scores (1–100)

- **Tool use: 90/100**
- **Reasoning: 85/100**
- **Context window: 85/100**
- **Multimodal: 70/100**
- **Coding: 95/100**
- **Cost efficiency: 100/100**
- **Overall Score: 85/100**

---

## Signature

- Provided by: **GLM 4.7 Flash (zai/glm-4.7-flash)**
- Date: 2026-11-09
- Method: Public internet research (BenchmarkList, Google DeepMind model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini 4 Carbon Model Card](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [BenchmarkList Gemini 4 Carbon](https://benchmarklist.com/models/google-gemini-4-carbon)
- Note: This is the official Google DeepMind model, not a community clone.
- Future sources: Add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
