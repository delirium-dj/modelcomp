# Agnes 3.0 Flash - findings by Big Pickle

- Source: Agnes AI (Sapiens AI)/Agnes 3.0 Flash
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Agnes AI's high-throughput agentic Flash model (released 2026-09-11), built for tool orchestration at very low list pricing. It has since been retired in benchmark catalogues and superseded by Agnes 3.0 Pro.
- **Provider / access:** Agnes AI API (`agnes-3.0-flash`), OpenAI-compatible Chat Completions; Anthropic-compatible endpoint also offered. No OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-09-11; now marked retired in Franklin AI's catalogue. Knowledge cutoff not published.
- **IDs:** `agnes-ai/agnes-3.0-flash`
- **Context window:** 512,000 total / 65,536 max output (vendor docs).
- **Modalities:** Text and image in; text out. Reasoning/thinking mode, tool calling, streaming; no audio or video input.
- **Pricing (as of 2026-11-13):** $0.05 / 1M input, $0.15 / 1M output, $0.005 / 1M cached; $0 trial tier for entitled accounts.
- **Architecture:** Proprietary hosted model; parameter count not disclosed. Advertised at 226 tok/s decode.

### Raw benchmarks found

> Four independent benchmark rows are carried by Franklin AI's daily sync of
> Artificial Analysis evaluations; the AA Intelligence Index is 35.5.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA: **92.4%** (third-party evaluation, via Franklin AI/Artificial Analysis; flagged below)
- HLE: **38.5%**
- LCR: **81.0%**
- SciCode: **51.6%**
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **35.5** (Franklin AI lists 36 estimated; Dataconomy quotes 36)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SciCode / AA-SciCode: **51.6%**
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Franklin AI reports "no Coding Index yet"

Long context:

- LCR 81.0% is the only long-context signal; no MRCR/RULER curve at 512K.

### Normalized scores (1-100)

- **Tool use: 58/100.** The model is marketed for tool orchestration, but no Terminal-Bench, Tau3, GDPval or MCP-Atlas result exists; the score is a conservative agentic-tier estimate, not a measurement.
- **Reasoning: 65/100.** LCR 81.0 and HLE 38.5 support a mid-60s score; the published GPQA 92.4 is internally inconsistent with a 35.5 Intelligence Index and is treated as suspect rather than decisive.
- **Context window: 88/100.** Verified 512K window sits in the 500K-1M tier (85-94); only LCR (not a retrieval curve) supports it.
- **Multimodal: 78/100.** Image input and text output are confirmed; no MMMU/CharXiv score and a modest 65.5K output cap keep it below 80.
- **Coding: 55/100.** SciCode 51.6 is the only code-adjacent number and there is no SWE-bench/LiveCodeBench result, so the score stays mid-tier.
- **Cost efficiency: 99/100.** $0.05/$0.15 (with $0.005 cached) undercuts the ~$0.10/$0.20 (97-99) reference point; the $0 trial is entitlement-based, not a standing free tier.
- **Overall Score: 69/100.** Half-up mean of (58 + 65 + 88 + 78 + 55) / 5 = 68.8. Best fit: high-volume, cost-sensitive routing/agent work where a 512K window matters more than frontier reasoning — and only while the retired endpoint remains served.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-11-13
- Method: public internet research (vendor docs, Franklin AI benchmark aggregation of Artificial Analysis evaluations, Dataconomy model page); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Franklin AI — Agnes 3.0 Flash benchmark scores](https://franklineh.com/ai-benchmark/agnes-3-0-flash)
  - [Agnes AI docs — Agnes 3.0 Flash](https://wiki.agnes-ai.com/en/docs/agnes-30-flash)
  - [Dataconomy — Agnes 3.0 Flash model page](https://dataconomy.com/ai-models/agnes-3-0-flash/)
- Future sources: add a new file next to this one, e.g. `Agnes_3.0_Flash.md`, using the same headings.
