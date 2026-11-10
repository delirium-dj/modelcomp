# Gemini 4 Argon — findings by GPT-6.1 Astra

- Source: Google DeepMind / `gemini-4-argon`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's sparse-MoE reasoning model for software engineering and document-heavy professional work. This general model is distinct from dedicated `-cyber` SKUs.
- **Provider / access:** Gemini API `generateContent`, Google AI Studio and Gemini products [1][2]. Current official documentation supersedes launch-day reporting that no public ID existed.
- **Release / knowledge:** Announced 2026-09-30 [4]; model card published 2026-10-13; knowledge cutoff March 2026 [2].
- **IDs:** `google/gemini-4-argon`; stable code `gemini-4-argon`. No Zen Free ID verified.
- **Context window:** Unified input-plus-output limit 1,048,576 tokens; ordinary synchronous output 65,536, long decode up to 1,048,576 within the same shared budget [1].
- **Modalities:** Text/image/video/audio/PDF input, text output; thinking, function calling, structured output, code execution and computer use. No image/audio generation or Live API [1].
- **Pricing (as of 2026-11-10):** Standard paid $2 input / $10 output / $0.10 implicit cache per million through November 30; $4/$20/$0.20 from December 1. Thinking is billed. No free tier; paid standard data not used for product improvement. Invite-only Contributor $1/$5 permits product improvement; batch/flex $1/$5 during the promotion [3].
- **Architecture:** Proprietary sparse mixture-of-experts Transformer; parameter counts undisclosed [2].

### Raw benchmarks found

All figures below are Google's October model-card evaluations [2], with benchmark versions retained.

Agent / tool use:
- AutomationBench: **51.3%**; Vals Finance Agent v2: **65.4%**.
- Terminal-Bench 4.0: **57.4%**; Agent's Last Exam: **39.5%**; OSWorld-2.0 offline subset partial: **69.2%**.
- Tau2/Tau3, GDPval-AA, Claw-Eval and MCP-Atlas: no verified public score found in the sources examined.

Reasoning / knowledge:
- Vals Index: **68.9%**; LABBench 2: **88.8%**; RiemannBench: **76.0%**.
- Terminal-Bench Science 0.1: **57.6%**. GPQA, HLE, CritPt and Omniscience: no verified public score found in the sources examined.

Coding:
- DeepSWE v1.1: **77.9%**; FrontierSWE v2: **55.0%**; Vibe Code Bench: **91.9%**.
- LiveCodeBench and SciCode: no verified public score found in the sources examined.

Long context:
- GraphWalks BFS F1: **99.7% up to 128K**, **84.2% at 256K–1M**. The short-window result does not establish 98% retrieval at 512K+.
- Multimodal: Chartography **71.6%**; LVBench **91.7%**.

### Normalized scores (1–100)

- **Tool use: 93/100.** AutomationBench and finance-agent results support advanced workflows; partial OSWorld and incomplete tool-suite coverage cap it.
- **Reasoning: 94/100.** LABBench and RiemannBench establish strong scientific reasoning, with a weaker terminal-science result and no verified unaided GPQA here.
- **Context window: 96/100.** Unified 1M capacity plus measured long-context reasoning earns a small uplift; 84.2% GraphWalks prevents the retrieval ceiling.
- **Multimodal: 95/100.** Audio/video/PDF input and LVBench support broad understanding; text-only output limits the score.
- **Coding: 97/100.** DeepSWE clears the frontier reference; FrontierSWE and terminal performance temper the rating.
- **Cost efficiency: 73/100.** Current $2/$10 standard pricing offers reasonable frontier value but is promotional and tool calls add cost.
- **Overall Score: 95/100.** Half-up mean: (93 + 94 + 96 + 95 + 97) / 5 = 95; strongest fit is long-context multimodal engineering and knowledge work.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Independent fresh public search and direct vendor-document retrieval; normalized interpretations, not official scores. Assigned reporter label differs from the runtime ID shown above.
- Reference URLs:
  - [1 — API specifications](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon)
  - [2 — Official model card and evaluation table](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [3 — Current pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-4-argon)
  - [4 — Launch-day coverage, historical availability only](https://www.datacamp.com/blog/gemini-4-argon)
