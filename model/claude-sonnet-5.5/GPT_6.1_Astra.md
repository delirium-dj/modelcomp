# Claude Sonnet 5.5 — findings by GPT-6.1 Astra

- Source: Anthropic / `claude-sonnet-5-5`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's faster model for everyday engineering and professional agent workflows [1].
- **Provider / access:** Claude Messages API, apps, Bedrock, Google Cloud and Foundry [2].
- **Release / knowledge:** 2026-09-28; June 2026 cutoff [2].
- **IDs:** `anthropic/claude-sonnet-5-5`; no Zen Free ID verified.
- **Context window:** 1M; 128K synchronous output, 300K batch-only beta [2].
- **Modalities:** Text/images in, text out; adaptive thinking and tool use [2].
- **Pricing (as of 2026-11-10):** $2 input/$10 output per million; $0.10 cache read, $2.50 five-minute write, $4 one-hour write; batch 50% off input/output [2].
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

Anthropic's production evaluation [1], with effort and fallback caveats; benchmark versions remain distinct.

Agent / tool use:
- Terminal-Bench **4.0: 70.6%**; GDPval-AA **v2.1: 1844 Elo**; AA-Briefcase **v1.1: 1811**.
- OSWorld **2.1: 80.1% partial**. Tau2/Tau3 and Claw-Eval: no verified public score found in the examined sources.

Reasoning / knowledge:
- HLE **64.5% with tools**. GPQA, CritPt and Omniscience: no verified public score found here.

Coding:
- FrontierCode **1.1 Main: 46.2% at max**; CursorBench **4.0: 55.5%** [1].
- SWE-bench Verified, LiveCodeBench and SciCode: no verified public score found here.

Long context:
- 1M capacity documented [2]; no verified retrieval measurement found.
- Chartography **61.6% without tools** [1], a visual benchmark rather than retrieval evidence.

### Normalized scores (1–100)

- **Tool use: 96/100.** Terminal and GDPval results support frontier agency; partial OSWorld caps confidence.
- **Reasoning: 96/100.** Assisted HLE is strong; missing unaided coverage prevents a ceiling rating.
- **Context window: 95/100.** Verified 1M capacity, without retrieval-ceiling evidence.
- **Multimodal: 70/100.** Image tier supported by Chartography; native audio/video generation unverified.
- **Coding: 94/100.** Strong CursorBench and terminal results, tempered by FrontierCode's harder tasks.
- **Cost efficiency: 73/100.** $2/$10 provides moderate frontier value; cache discounts help repeated workloads.
- **Overall Score: 90/100.** (96 + 96 + 95 + 70 + 94) / 5 = 90.2, half-up rounded; best suited to iterative coding and professional automation.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Independent fresh web search and official-source retrieval; scores are normalized judgments. User-assigned reporter label; runtime ID disclosed above.
- Reference URLs:
  - [1 — Official announcement and benchmarks](https://www.anthropic.com/claude-sonnet-5-5)
  - [2 — API specifications](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
