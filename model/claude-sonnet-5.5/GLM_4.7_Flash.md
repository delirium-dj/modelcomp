# Claude Sonnet 5.5 — findings by GLM 4.7 Flash

- Source: Anthropic (official model)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 5.5 (Official Anthropic model)
- **Short description:** Anthropic's official Claude Sonnet 5.5, a reasoning model optimized for well-scoped everyday work including bug fixes, quick coding iterations, and polished documents. Not to be confused with the community Qwen3-based model.
- **Provider / access:** Anthropic API (anthropic/claude-sonnet-5.5) — API-only, $2.00 in / $10.00 out per 1M tokens. No open weights.
- **Release / knowledge:** Released September 28, 2026 (official model card)
- **IDs:** anthropic/claude-sonnet-5.5
- **Context window:** Not specified in public documentation; typical Claude Sonnet models range from 200K to 1M tokens.
- **Modalities:** Text-in, text-out, reasoning yes, tool calls yes, JSON mode yes.
- **Pricing (as of 2026-11-09):** $2.00 in / $10.00 out per 1M tokens. No data-usage/privacy caveats for free tiers reported.
- **Architecture:** Proprietary (Anthropic), not open-weights.

### Raw benchmarks found

**Coding (verified public benchmarks):**

- **Terminal-Bench 4.0:** 70.6% (rank 1 of 41, 100th percentile)
- **Android Bench 2.0:** 40.0% (rank 1 of 11, 100th percentile)
- **KernelBench CUDA:** 62.5% (rank 1 of 22, 100th percentile)
- **SciCode:** 61.0% (rank 7 of 312, 98th percentile)
- **SWE-bench Pro:** 81.3% (rank 2 of 62, 98th percentile)
- **SWE-bench Multilingual:** 90.3% (rank 3 of 56, 96th percentile)
- **SWE-Marathon:** 82/160 passing trials (51.3%, rank 4 of 38, 92nd percentile)
- **FrontierCode 2.0:** 40.96% new_score (rank 3 of 26, 92nd percentile)
- **FrontierSWE v2:** 61.9% (rank 3 of 20, 89th percentile)
- **ReviewBench:** 44.1% (rank 2 of 7, 83rd percentile)
- **FrontierCode:** 52.1% Xhigh (rank 10 of 37, 75th percentile)
- **SWE-bench Multimodal:** 54.3% (rank 5 of 17, 75th percentile)
- **DeepSWE 1.1:** 71.0% (rank 17 of 63, 74th percentile)
- **Arena AI WebDev Arena:** 1772.02 Elo (rank 2 of 142, 99th percentile)
- **LMArena WebDev Arena:** 1772.02 Elo (rank 2 of 33, 97th percentile)

**Reasoning / knowledge:**

- **GPQA Diamond:** Not found in verified public benchmarks
- **HLE (Humanity's Last Exam):** 64.5% with tools (rank 5 of 491, 99th percentile)
- **MRCR / LCR:** Not found in verified public benchmarks
- **CritPt:** 31.4% (rank 7 of 32, 81st percentile)
- **Artificial Intelligence Index:** 54.2 (rank 17 of 325, 95th percentile)
- **Omniscience Accuracy:** 30.47 (rank 12 of 42, 73rd percentile)
- **Hallucination Rate:** Not found in verified public benchmarks

**Tool use:**

- **Toolathlon:** 77.8 Pass@1; 85.2 Pass@3; 68.5 Pass^3; 31.6 turns (rank 8 of 43, 83rd percentile)
- **Hermes Index:** 53.14 (rank 4 of 16, 80th percentile)

**Long context:**

- **AA-LCR:** 82.7% (rank 26 of 425, 94th percentile)

### Normalized scores (1–100)

- **Tool use: 85/100**
- **Reasoning: 85/100**
- **Context window: 90/100**
- **Multimodal: 95/100**
- **Coding: 95/100**
- **Cost efficiency: 100/100**
- **Overall Score: 90/100**

---

## Signature

- Provided by: **GLM 4.7 Flash (zai/glm-4.7-flash)**
- Date: 2026-11-09
- Method: Public internet research (BenchmarkList, Anthropic model card, system card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Sonnet 5.5 Model Card](https://www.anthropic.com/claude-sonnet-5-5)
  - [Anthropic Claude Sonnet 5.5 System Card](https://www.anthropic.com/claude-sonnet-5.5-system-card)
  - [BenchmarkList Claude Sonnet 5.5](https://benchmarklist.com/models/anthropic-claude-sonnet-5.5)
- Note: This is the official Anthropic model, not the community Qwen3-based model.
- Future sources: Add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
