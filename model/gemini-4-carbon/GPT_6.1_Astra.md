# Gemini 4 Carbon — findings by GPT-6.1 Astra

- Source: Google DeepMind / `gemini-4-carbon`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Argon-derived reasoning model for long-horizon engineering and scientific workflows [1].
- **Provider / access:** Gemini API `generateContent` and AI Studio; current official API documentation confirms the route [2].
- **Release / knowledge:** October 2026 evaluations; model card published 2026-11-10; March 2026 knowledge cutoff [1].
- **IDs:** `google/gemini-4-carbon`; no Zen Free ID verified.
- **Context window:** Unified 1,048,576 input-plus-output tokens; 65,536 synchronous output or long decode within the same 1M budget [2].
- **Modalities:** Text/image/video/audio/PDF in, text out; thinking, tools, code execution, computer use and structured output [2].
- **Pricing (as of 2026-11-10):** No free API tier. $2/$10 input/output per million and $0.10 implicit cache through November 30; $4/$20/$0.20 from December 1. Thinking is billed; standard paid data not used for product improvement [3].
- **Architecture:** Proprietary Gemini 4 Argon derivative; parameter counts undisclosed [1].

### Raw benchmarks found

Official October evaluations published in the model card [1]:

Agent / tool use:
- Terminal-Bench **4.0 (AA): 65.2%**; AutomationBench **53.9%**.
- Agents' Last Exam **v1.1: 77.4% score**; OSWorld-2.1 offline subset **81.5%**.
- Tau2/Tau3, GDPval-AA and Claw-Eval: no verified public score found here.

Reasoning / knowledge:
- AA Index **v5.0: 59**; Vals Index **v2.2: 70.4%**; RiemannBench **80.0%**.
- Terminal-Bench Science **0.1 (AA): 64.8%**. GPQA/HLE/CritPt: no verified public score found here.

Coding:
- FrontierSWE **2: 61.2%**; SWE-sweep **9.6%** [1]. These are not SWE-bench Verified.
- LiveCodeBench/SciCode: no verified public score found here.

Long context:
- GraphWalks BFS F1 **96.2% at 256K–1M** [1].
- Chartography **72.5%**; Blueprint-Bench 2 similarity **58.6%** [1].

### Normalized scores (1–100)

- **Tool use: 96/100.** Strong automation and computer-use evidence, capped by subset/harness dependence.
- **Reasoning: 96/100.** RiemannBench and AA evaluations support frontier reasoning; newer index versions are not equated to historical scales.
- **Context window: 98/100.** 1M plus 96.2% GraphWalks is strong, below the 98% retrieval ceiling requirement.
- **Multimodal: 95/100.** Broad input coverage and visual tests; text-only output limits the ceiling.
- **Coding: 95/100.** Strong FrontierSWE and terminal performance, with substantial remaining SWE-sweep failures.
- **Cost efficiency: 73/100.** Current $2/$10 rate offers moderate value but expires and thinking adds cost.
- **Overall Score: 96/100.** (96 + 96 + 98 + 95 + 95) / 5 = 96; strongest fit is sustained multimodal reasoning over large inputs.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Fresh public search and current primary documents; independent normalized judgments. User-assigned reporter label; runtime ID disclosed above.
- Reference URLs:
  - [1 — Official model card](https://deepmind.google/models/model-cards/gemini-4-carbon/)
  - [2 — API specifications](https://ai.google.dev/gemini-api/docs/models/gemini-4-carbon)
  - [3 — Pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-4-carbon)
