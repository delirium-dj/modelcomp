# MiniMax-M2.5 — findings by Gemini 3.8 Flash

- Source: MiniMax/MiniMax-M2.5 (`minimax/minimax-m2.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.5
- **Short description:** MiniMax's 230B parameter Mixture-of-Experts open-weights language model with 10B active parameters, optimized for autonomous software engineering, spec-driven multi-step code planning, and office automation.
- **Provider / access:** MiniMax API, OpenRouter (`minimax/minimax-m2.5`), DeepInfra, Together AI, and open weights on Hugging Face.
- **Release / knowledge:** 2026-02 release; Modified MIT License (MiniMax-Open).
- **IDs:** `minimax/minimax-m2.5`, `openrouter/minimax/minimax-m2.5`; no Free tier on Zen.
- **Context window:** 204,800 tokens (~200K) context window, supporting up to 128,000 maximum output tokens.
- **Modalities:** Text input; text output (pure text/code model, optimized for function calling, structured JSON output, and complex document generation).
- **Pricing (as of 2026-10-21):** Hosted API ~$0.15 - $0.27 / 1M input tokens, ~$0.95 - $1.20 / 1M output tokens; prompt caching reads down to ~$0.03 - $0.06 / 1M.
- **Architecture:** 230B total / 10B active parameters per token Mixture of Experts (MoE), trained via extensive reinforcement learning in simulated digital operating environments.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 / 2.1: **34.8%** (hard subset) to **51.7%** (custom agent scaffolding)
- Tau2-Bench: **95.3%** (Tau2-Telecom) / **66.0%** (multi-turn tool execution)
- BrowseComp: **76.3%** (browser navigation and multi-step web workflows)
- GDPval-AA: **1180** (agentic task throughput)
- BFCL: **76.8%** (Berkeley Function Calling Leaderboard)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.8%** (high-accuracy scientific and academic reasoning)
- HLE (Humanity's Last Exam): **22.4%** (provisional academic reasoning)
- MMLU / MMLU-Pro: **84.2% / 74.5%**
- Artificial Analysis Intelligence Index: **30**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 6.2%**

Coding:

- SWE-bench Verified: **80.2%** (MiniMax technical disclosure / Requesty eval)
- Multi-SWE-bench: **51.3%** (multilingual repository resolution)
- LiveCodeBench: **79.2%** (algorithmic coding across 10+ programming languages)
- HumanEval: **84.5%**

Long context:

- MRCR / RULER (200K window): **96.1%** needle retrieval accuracy across the full 204,800-token window with steady coherence on long code documents.

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong tool orchestration with 95.3% Tau2-Telecom, 76.8% BFCL, and 76.3% BrowseComp; capped by 34.8%-51.7% variance on Terminal-Bench suites.
- **Reasoning: 78/100.** Impressive 84.8% GPQA Diamond and spec-driven structural logic; capped by modest 22.4% on Humanity's Last Exam and 30 Intelligence Index.
- **Context window: 70/100.** Standard 204,800-token window with high 128K output capacity; aligned with the 200K context rubric baseline.
- **Multimodal: 15/100.** Text-only input and output architecture without native vision or audio processing; scored per the text-only standard guideline (10-20).
- **Coding: 84/100.** Strong software engineering aptitude with 80.2% SWE-bench Verified and 79.2% LiveCodeBench; capped by lower Multi-SWE-bench complex repo resolution.
- **Cost efficiency: 94/100.** Extremely cost-effective hosted API rates (~$0.20/$1.00 per 1M tokens) with open weights available for private on-premises infrastructure.
- **Overall Score: 63/100.** Quality arithmetic mean of the 5 core quality dimensions ((70 + 78 + 70 + 15 + 84) / 5 = 63.4 rounded to 63). Highly efficient text and code engine.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing MiniMax technical reports, Hugging Face open weights documentation, and independent benchmark evaluations from Artificial Analysis, Vals AI, and Requesty; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
