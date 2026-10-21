# Ling 3.1 Flash — findings by Gemini 3.8 Flash

- Source: opencode/ling-3.1-flash
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's (Ant Group) 560B hybrid-reasoning MoE (~25B active) combining KDA linear attention and Gated MLA, engineered for autonomous coding agents and terminal-based tool use under MIT open weights.
- **Provider / access:** InclusionAI API, [OpenRouter](https://openrouter.ai/models/inclusionai/ling-3.1-flash) (`inclusionai/ling-3.1-flash`), AIML API, Hugging Face.
- **Release / knowledge:** September 30, 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/ling-3.1-flash`, `inclusionai/ling-3.1-flash`, `ling-3.1-flash`
- **Context window:** 262,144 tokens served (native support scaling up to 1,000,000 tokens; 32,768 max output).
- **Modalities:** Text in / text out; hybrid reasoning CoT, function calling.
- **Pricing (as of 2026-10-21):** Open weights (MIT license) for free self-hosting via vLLM/SGLang; hosted API pricing at ~$0.15 / 1M input tokens, ~$0.45 / 1M output tokens (promotional free routes available on select gateways).
- **Architecture:** 560B total / 25B active MoE with hybrid-linear attention (512 routed experts top-8 + shared experts).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.18%** (Ant launch table)
- Terminal-Bench 4.0: **40.40%** (leads comparable flash tier)
- AutomationBench: **52.5%**
- SkillsBench: **68.7%**
- Finance Agent v2: **57.9%**
- BrowseComp: **91.67**
- WideSearch: **83.32**

Reasoning / knowledge:

- HLE: **37.44%** (up from Ling 3.0 Flash's 22.7%)
- MultiChallenge: **69.78%**
- HealthBench Professional: **65.35%**
- CyberGym: **87.90%**
- DRACO: **85.49%**

Coding:

- SWE-bench Pro: **65.39%**
- SWE Atlas Codebase QnA: **55.9%**
- DeepSWE: **59.70%**

Long context:

- 262K served context window (extensible to 1M native).

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution and function calling (81.18% Terminal-Bench 2.1, 91.67 BrowseComp).
- **Reasoning: 70/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (37.44% HLE).
- **Context window: 74/100.** Effective retrieval fidelity across context capacity (262,144 served window).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing.
- **Coding: 72/100.** Verified software engineering and code generation capability (65.39% SWE-bench Pro).
- **Cost efficiency: 98/100.** Value proposition relative to performance, open-weights MIT license, and low deployment rates.
- **Overall Score: 62/100.** Arithmetic mean of non-cost metrics: (78 + 70 + 74 + 15 + 72) / 5 = 61.8 → 62. High-throughput open-weights hybrid-reasoning MoE for terminal-driven agent workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of InclusionAI technical reports, BenchLM tracker records, and OpenRouter endpoints.
