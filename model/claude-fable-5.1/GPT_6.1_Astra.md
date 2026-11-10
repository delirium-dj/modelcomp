# Claude Fable 5.1 — findings by GPT-6.1 Astra

- Source: Anthropic / `claude-fable-5-1`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Long-horizon reasoning model with production safeguards; shares underlying weights with the separately exposed Mythos 5.1 deployment [1].
- **Provider / access:** Claude Messages API, Bedrock, Google Cloud and Foundry [2].
- **Release / knowledge:** 2026-09-01; June 2026 knowledge cutoff [2].
- **IDs:** `anthropic/claude-fable-5-1`; no Zen Free ID verified.
- **Context window:** 1M; 128K maximum output [2].
- **Modalities:** Text/images in, text out; adaptive thinking always on, tool use [2].
- **Pricing (as of 2026-11-10):** Paid $10/$50 input/output per million; cache read $0.25, five-minute write $12.50, one-hour write $20; batch input/output 50% off [2].
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench **4.0: 55.8%**; GDPval-AA **v2: 1853 Elo** [1].
- OSWorld **2.0: 77.9% partial / 41.7% strict**; AutomationBench **31.4%** [1].
- Tau2/Tau3 and Claw-Eval: no verified public score found in the examined sources.

Reasoning / knowledge:
- HLE **60.9% no tools / 65.0% with tools**; Terminal-Bench Science 0.1 **52.6%** [1].
- GPQA, CritPt and Omniscience: no verified public score found in the examined sources.

Coding:
- CursorBench **3.2.0: 73.4%** [1]; SWE-bench Verified, LiveCodeBench and SciCode: no verified public score found in the examined sources.

Long context:
- 1M documented [2]; no verified MRCR/RULER measurement found.

Anthropic's production evaluation includes earlier-model fallback on some safeguard interventions; OSWorld interventions receive zero. Mythos's **60.9% Terminal-Bench** is explicitly not Fable's result [1].

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval and computer-use results support frontier agency, capped by strict success and fallback dependence.
- **Reasoning: 98/100.** Unaided HLE is exceptional; vendor-only coverage limits certainty.
- **Context window: 95/100.** 1M capacity qualifies, without a retrieval-ceiling measurement.
- **Multimodal: 70/100.** Verified image input; native audio/video generation unverified.
- **Coding: 94/100.** CursorBench and terminal evidence are strong; incomplete suite coverage caps it.
- **Cost efficiency: 30/100.** $10/$50 is the expensive rubric anchor despite discounted cache reads.
- **Overall Score: 90/100.** (94 + 98 + 95 + 70 + 94) / 5 = 90.2, half-up rounded; suited to demanding reasoning and engineering.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Fresh public search and official documents; independent normalized interpretations, not vendor scores. User-assigned reporter label; runtime ID disclosed above.
- Reference URLs:
  - [1 — Official release and evaluations](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [2 — Model specifications and pricing](https://platform.claude.com/docs/en/models/fable-5-1/overview)
