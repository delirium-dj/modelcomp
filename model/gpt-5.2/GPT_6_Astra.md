# GPT-5.2 — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.2
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** GPT-5.2; Thinking/base API model, not Pro or Instant.
- **Short description:** Previous flagship reasoning model for professional work and coding.
- **Provider / access:** OpenAI Chat Completions and Responses APIs.
- **Release / knowledge:** December 11, 2025; August 31, 2025 cutoff.
- **IDs:** `gpt-5.2`, `gpt-5.2-2025-12-11`; no Free API tier or verified Free Zen ID.
- **Context window:** 400,000 tokens; 128,000 output maximum.
- **Modalities:** Text/image input, text output; none/low/medium/high/xhigh reasoning, streaming, function calling and structured outputs. Native audio/video unsupported.
- **Pricing (as of 2026-10-03):** $1.75 input / $14 output / $0.175 cached input per million.
- **Architecture:** Proprietary; parameter count undisclosed. [Official API specification](https://developers.openai.com/api/docs/models/gpt-5.2).

### Raw benchmarks found

Agent / tool use:

- Tau2 Telecom **98.7%** with an added helpful instruction, Retail **82.0%**; BrowseComp **65.8%**, MCP-Atlas **60.6%**, Toolathlon **46.3%**. GDPval wins/ties **70.9%**, not AA Elo. [OpenAI launch evaluations](https://openai.com/index/introducing-gpt-5-2/).
- Terminal-Bench 2.1, Tau3, GDPval-AA Elo, Claw-Eval/ClawProBench and SWE Atlas: no verified public score found in reviewed sources.

Reasoning / knowledge:

- GPQA Diamond **92.4%**, HLE **34.5% without tools / 45.5% with search and Python**, ARC-AGI-2 Verified **52.9%**. Same launch table; maximum API effort except professional evaluations using heavy.
- LCR/MLCR, CritPt, AA Intelligence Index, BenchLM and Omniscience: no verified public score found in reviewed sources.

Coding:

- SWE-bench Verified **80.0%**, SWE-Bench Pro Public **55.6%**, same vendor evaluation.
- LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified public score found in reviewed sources.

Long context:

- OpenAI MRCRv2 eight-needle **77.0% at 128K–256K**; GraphWalks BFS **94.0% below 128K**, same launch table. Full 400K retrieval unverified.

### Normalized scores (1–100)

- **Tool use: 79/100.** Telecom and MCP results support useful tools; Toolathlon and BrowseComp show clear limits.
- **Reasoning: 88/100.** GPQA is strong, while HLE and abstract reasoning leave substantial headroom.
- **Context window: 82/100.** 400K sits in the 200K–500K tier; retrieval degrades well below the advertised maximum.
- **Multimodal: 70/100.** Native image understanding is useful; sampled-video evaluations do not establish native video API input.
- **Coding: 84/100.** Verified 80% and SWE-Pro 55.6% support capable engineering, with vendor harness dependence.
- **Cost efficiency: 67/100.** Moderate input cost but $14 output makes long reasoning runs comparatively expensive.
- **Overall Score: 81/100.** Half-up mean of 79, 88, 82, 70 and 84 is 81; suitable for established professional and coding integrations.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Pro results excluded.
- Future sources: Add a separate signed findings file alongside this report.
