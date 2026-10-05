# Mercury 2.5 — findings by GPT 5.5

- Source: Inception (`mercury-2.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception proprietary low-cost long-context chat model, positioned for bulk traffic and inexpensive routing workloads.
- **Provider / access:** OpenRouter and provider routes under `inception/mercury-2.5`.
- **Release / knowledge:** Public launch/listings appeared September 2026; cutoff not stated.
- **IDs:** `inception/mercury-2.5`, `mercury-2.5`.
- **Context window:** **260K** tokens.
- **Modalities:** Text in/text out; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Public OpenRouter/community reports cite about **$0.04/M input** and **$0.15/M output**.
- **Architecture:** Proprietary/undisclosed.

### Raw benchmarks found

Agent / tool use:

- BenchLM reports Terminal-Bench 2.1 (Vals) **34.1%** for Mercury 2.5.
- BenchLeader says it scores highest in long context **62** and lowest in math **33**.

Reasoning / knowledge:

- BenchLM reports IFBench **77%** from Inception's launch chart.
- No exact GPQA/HLE values recovered.

Coding:

- No exact SWE-bench/LiveCodeBench value recovered.

Long context:

- OpenRouter and ModelCap report **260K** context.
- BenchLeader long-context category **62**.

### Normalized scores (1–100)

- **Tool use: 42/100.** Terminal-Bench 34.1% is usable but weak versus current leaders.
- **Reasoning: 50/100.** IFBench 77 is respectable, while math/category evidence is low.
- **Context window: 78/100.** 260K context is strong.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 45/100.** No standard coding score; general chat/coding utility likely modest.
- **Cost efficiency: 98/100.** $0.04/$0.15 is extremely cheap.
- **Overall Score: 46/100.** Half-up mean of the five quality dimensions; best fit is very cheap long-context bulk text work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

