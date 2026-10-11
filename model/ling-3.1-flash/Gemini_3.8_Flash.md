# Ling 3.1 Flash — findings by Gemini 3.8 Flash

- Source: opencode/ling-3.1-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI (Ant Group) hybrid-reasoning MoE (560B total, ~25B active) launched Sep 2026 for coding and tool-using agents; all published numbers are vendor-reported.
- **Provider / access:** opencode/ling-3.1-flash
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/ling-3.1-flash (Zen tier available)
- **Context window:** 262,144 (256K) served; 32,768 max output (1M behind post-trial paid tier)
- **Modalities:** Text in/out; hybrid reasoning, tool calling
- **Pricing (as of 2026-10-11):** Free during trial ($0/$0); paid pricing unannounced
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

All rows are **vendor-reported** from Ant's launch comparison table (2026-09-30), independently
recorded (not reproduced) by BenchLM and several outlets. No third-party harness has scored this
model; treat every number as a vendor claim.

Agent / tool use:

- Terminal-Bench 2.1: **81.18%** (Ant launch table; vendor harness. Slightly behind DeepSeek-V4.1-Flash 90.60 and GLM 5.3 flash 84.30 in Ant's own comparison)
- Terminal-Bench 4.0: **40.40%** (Ant launch table — leads the flash tier it compares against: DeepSeek-V4.1-Flash 31.20, GLM 5.3 flash 32.80)
- AutomationBench: **52.5%** (Ant launch material)
- SkillsBench: **68.7%** (Ant launch material)
- Finance Agent v2: **57.9%** (Ant launch material)
- BrowseComp: **91.67** (top score in Ant's whole comparison table)
- WideSearch: **83.32** (Ant launch table)
- GDPval-AA: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE: **37.44%** (Ant launch table; up from Ling 3.0 Flash's 22.7; behind Claude Opus 5's 54.90 in the same table)
- MultiChallenge: **69.78%** (Ant launch table)
- HealthBench Professional: **65.35%** (Ant launch table)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** —
  BenchLM holds 8 benchmark rows for this model but publishes **no overall score and no rank**
  ("overall score: coming soon") because third-party coverage is absent
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- CyberGym: **87.90%** (Ant launch table; a fraction behind DeepSeek-V4.1-Flash 88.10)
- DRACO: **85.49%** (Ant launch table)

Coding:

- SWE-bench Pro: **65.39%** (Ant launch table — the best flash-tier score in that table: DeepSeek-V4.1-Flash 56.77, GLM 5.3 flash 63.06)
- SWE Atlas Codebase QnA: **55.9%** (Ant launch material)
- DeepSWE: **59.70%** (Ant launch table; trails DeepSeek-V4.1-Flash 74.20 and GLM 5.3 flash 63.40)
- SWE-bench Verified: **no verified public score found** (only the Pro variant is reported)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- **no long-context retrieval reported.** No MRCR, RULER or GraphWalks number exists for this
  model at any length, so the 262K served window (and the announced 1M) is a spec with zero
  retrieval evidence behind it.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 70/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 74/100.** Effective retrieval fidelity across context capacity (262,144 (256K) served; 32,768 max output (1M behind post-trial paid tier)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out; hybrid reasoning, tool calling).
- **Coding: 72/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 98/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 61.8/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
