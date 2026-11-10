# Claude Fable 5 — findings by GPT-6.1 Astra

- Source: Anthropic / `claude-fable-5`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's general-access reasoning deployment for difficult coding and knowledge work [1].
- **Provider / access:** Claude Messages API and supported cloud deployments [1].
- **Release / knowledge:** 2026-06-09; January 2026 cutoff [1].
- **IDs:** `anthropic/claude-fable-5`; no Zen Free ID verified.
- **Context window:** 1M; 128K output [1].
- **Modalities:** Text/images in, text out; always-on adaptive thinking and tools [1].
- **Pricing (as of 2026-11-10):** $10/$50 input/output per million; $1 cache read, $12.50 five-minute cache write [1].
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Exact **Fable 5 column** in Anthropic's September comparison [2]:

Agent / tool use:
- Terminal-Bench **4.0: 42.0%**; GDPval-AA **v2: 1723 Elo**.
- OSWorld **2.0: 72.9% partial / 36.1% strict**; AutomationBench **17.1%**.
- Tau2/Tau3 and Claw-Eval: no verified public score found here.

Reasoning / knowledge:
- HLE **57.8% without tools / 63.8% with tools**; Terminal-Bench Science **0.1: 24.7%** [2].
- GPQA/CritPt/Omniscience: no verified public score found here.

Coding:
- CursorBench **3.2.0: 70.5%** [2]; no verified SWE-bench/LiveCodeBench/SciCode score retrieved.

Long context:
- 1M specification [1]; no verified retrieval measurement found.

These are production-safeguarded system results. Fable interventions can receive zero or use earlier-model fallback according to the benchmark; they are not unrestricted Mythos measurements [2].

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval supports strong professional execution; automation and strict computer-use failures cap it.
- **Reasoning: 96/100.** High unaided HLE, tempered by weaker agentic science.
- **Context window: 95/100.** 1M tier; no retrieval-ceiling evidence.
- **Multimodal: 70/100.** Image-input tier; broader native modalities unverified.
- **Coding: 92/100.** Strong CursorBench, with weaker terminal results.
- **Cost efficiency: 30/100.** $10/$50 matches the expensive rubric anchor.
- **Overall Score: 88/100.** (88 + 96 + 95 + 70 + 92) / 5 = 88.2, half-up rounded; suited to demanding reasoning and coding.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Independent fresh public search and primary-source retrieval; normalized judgments. User-assigned reporter label; runtime ID disclosed above.
- Reference URLs:
  - [1 — Fable 5 specifications](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [2 — Official evaluation, Fable 5 column](https://www.anthropic.com/claude-fable-and-mythos-5-1)
