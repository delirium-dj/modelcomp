# GPT-6 Astra — findings by Kimi K3.1 Pro

- Source: OpenAI/GPT-6 Astra (`openai/gpt-6-astra`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's proprietary frontier reasoning model for long-horizon agents, coding, scientific reasoning and multimodal professional work, with a 1.05M-token context window.
- **Provider / access:** OpenAI API and OpenRouter Chat Completions at `https://openrouter.ai/api/v1/chat/completions`; reasoning effort, tools, structured response formats and streaming are supported.
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff not verified in the reviewed material.
- **IDs:** `openai/gpt-6-astra` on OpenRouter; no OpenCode Zen Free ID verified.
- **Context window:** 1,050,000 tokens total and up to 128,000 completion tokens (OpenRouter).
- **Modalities:** Text, image, video and document/PDF in; text out; reasoning, tool calls, computer use and structured outputs. Audio support was not verified.
- **Pricing (as of 2026-11-01):** $10 input / $50 output per 1M tokens; reports describe higher long-context charges above 272K tokens, so very large prompts require a current price check.
- **Architecture:** Proprietary; parameter count, routing and weights not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59.6%** (BenchmarkList launch-post record); the official Terminal-Bench leaderboard reports **58.2% ±2.8%** at max with Codex, reflecting different runs.
- Terminal-Bench-Science 0.1: **68.1%** at max, ranked #1 in BenchmarkList's record.
- Tau3-Banking: **43.1% pass@1** at `xhigh` (Artificial Analysis via BenchmarkList).
- GDPval-AA: **1573 Elo** at max (Artificial Analysis via BenchmarkList).
- OSWorld 2.0: **73.5%** at max (BenchmarkList).
- BrowseComp: **94.2% ±3.2%** at `xhigh` (BenchmarkList verified record).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas: **no verified public score found**; SWE Atlas Codebase QnA: **60.9%** at max.

Reasoning / knowledge:

- GPQA Diamond: **96.3%** at `xhigh`; **96.1%** at max (BenchmarkList).
- HLE: **57.2% with tools** at max (BenchmarkList).
- Artificial Analysis Intelligence Index: **61.2**, ranked #4 of 324 in BenchmarkList's launch-post record.
- ARC-AGI-1 / ARC-AGI-2 / ARC-AGI-3: **98.5% / 95.0% / 99.9%** (BenchmarkList).
- CritPt: **31.7%** at max (BenchmarkList verified record).
- AA-Omniscience Index: **42.43** at max; separate accuracy and hallucination percentages were not verified.
- LCR / MLCR: AA-LCR **80.7%** at max; MLCR **no verified public score found**.

Coding:

- FrontierSWE v2: **65.5%** at max, five trials in the Proximus harness (BenchmarkList verified record).
- DeepSWE 1.1: **74.1% pass@1** at `xhigh`, 95% CI 71.3–77.0%, mini-SWE-agent (BenchmarkList verified record).
- Terminal-Bench 2.1: **89.9%** (BenchmarkList).
- FrontierCode Main: **64.5%** at max (BenchmarkList).
- SciCode: **56.5%** at max (BenchmarkList).
- Vibe Code Bench v1.1: **89.6%** (BenchmarkList).
- SWE-bench Verified / SWE-Pro: **no verified public score found**; this is not substituted with FrontierSWE or DeepSWE.
- LiveCodeBench: **no verified public score found**.

Long context:

- OpenAI MRCR v2 8-needle: **100% at 256K–512K** and **96.3% at 512K–1M** (BenchmarkList launch-post records).

Multimodal:

- MMMU-Pro: **87.8%** with Python at max; LVBench: **87.5%**; Chartography: **91.0% with tools** (BenchmarkList).

### Normalized scores (1–100)

- **Tool use: 97/100.** BrowseComp 94.2%, OSWorld 73.5% and leading Terminal-Bench-Science results demonstrate exceptional agency; middling Tau3-Banking and GDPval-AA relative to the top model cap a perfect score.
- **Reasoning: 98/100.** GPQA 96.3%, HLE 57.2%, ARC-AGI results and AA Intelligence Index 61.2 provide broad, difficult reasoning evidence; CritPt 31.7% shows remaining physics limits.
- **Context window: 99/100.** The 1.05M window is validated by MRCR 100% at 256K–512K and 96.3% at 512K–1M, with only minor long-range degradation.
- **Multimodal: 97/100.** MMMU-Pro 87.8%, LVBench 87.5% and Chartography 91.0% establish excellent image, chart, document and long-video understanding; text-only output and unverified audio cap the score.
- **Coding: 97/100.** FrontierSWE 65.5%, DeepSWE 74.1%, Terminal-Bench 2.1 89.9% and FrontierCode 64.5% show consistently frontier coding across long-horizon harnesses.
- **Cost efficiency: 45/100.** $10/$50 per 1M tokens and potential long-context surcharges make Astra expensive despite strong per-task capability; no free route was verified.
- **Overall Score: 97.6/100.** Half-up mean of 97, 98, 99, 97 and 97; best fit for the hardest long-context, multimodal and agentic engineering tasks where premium cost is acceptable.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-01
- Method: Independent public internet research using three successful searches, OpenAI launch-result records aggregated by BenchmarkList, OpenRouter API documentation and the Terminal-Bench leaderboard; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-6 Astra launch](https://openai.com/index/gpt-6-astra/)
  - [BenchmarkList — GPT-6 Astra benchmark records and harnesses](https://benchmarklist.com/models/openai-gpt-6-astra/)
  - [OpenRouter — GPT-6 Astra API](https://openrouter.ai/openai/gpt-6-astra)
  - [Terminal-Bench — official leaderboard](https://www.tbench.ai/)
  - [Artificial Analysis — Terminal-Bench 4.0](https://artificialanalysis.ai/evaluations/terminalbench-4-0)
- Future sources: add a new file next to this one using the same headings.
