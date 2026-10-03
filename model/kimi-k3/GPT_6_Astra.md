# Kimi K3 — findings by GPT 6 Astra

- Source: Moonshot AI / Kimi K3
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Kimi K3, max reasoning evaluated
- **Short description:** Large open-weight multimodal reasoning model focused on agentic work.
- **Provider / access:** Kimi API; protocol and exact API identifier unverified.
- **Release / knowledge:** July 16, 2026; cutoff unverified.
- **IDs:** Kimi K3; Zen Free ID not verified.
- **Context window:** Approximately 1M tokens; output limit unverified.
- **Modalities:** Text/image input, text output; reasoning and agent workflows.
- **Pricing (as of 2026-10-03):** $3 input, $15 output, $0.30 cache per million tokens.
- **Architecture:** 2.8T total, 104B active; Kimi K3 License. Weight availability and specifications are reported by [AA release registry](https://artificialanalysis.ai/models/releases/kimi-k3); license text not independently reviewed.

### Raw benchmarks found

Agent / tool use:

- Current max results: GDPval-AA v2.1 1538 Elo; AutomationBench-AA 58%; Terminal-Bench 4.0 13%; AA-Briefcase v1.1 1501 Elo.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Current Intelligence Index 44; HLE 47%; CritPt 23%; AA-Omniscience index 20, not an accuracy percentage. GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode 59%; newer terminal result above. SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- AA-LCR v1.1 89%; not a verified 1M needle-retrieval result.

All current measurements: [AA low-versus-max comparison](https://artificialanalysis.ai/models/comparisons/kimi-k3-low-vs-kimi-k3), max column. Historical Index 57 and GDPval-AA v2 1668 belong to the [July launch evaluation](https://artificialanalysis.ai/articles/kimi-k3-achieves-3-in-the-artificial-analysis-intelligence-index-comparable-to-opus-4-8-and-gpt-5-5), a different suite/version.

### Normalized scores (1–100)

- **Tool use: 85/100.** Good knowledge-work and workflow performance; weaker terminal results cap breadth.
- **Reasoning: 89/100.** HLE and LCR show strong reasoning; CritPt remains challenging.
- **Context window: 95/100.** 1M capacity; no qualifying high-accuracy retrieval measurement for a bonus.
- **Multimodal: 70/100.** Image input supported; no verified native audio/video pathway.
- **Coding: 83/100.** Strong scientific coding but limited newer terminal performance and missing repository evidence.
- **Cost efficiency: 60/100.** $3/$15 matches the methodology anchor; max reasoning adds token costs.
- **Overall Score: 84/100.** Half-up mean (85 + 89 + 95 + 70 + 83) / 5 = 84.4; useful for knowledge-heavy agent tasks.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, with benchmark versions kept separate.
- Future sources: add a separate signed report using these headings.
