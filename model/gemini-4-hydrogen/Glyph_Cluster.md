# Gemini 4 Hydrogen — findings by Glyph Cluster

- Source: Google DeepMind / Google AI (`gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google DeepMind's Gemini 4 Hydrogen is an efficient Gemini 4 frontier reasoning model positioned for everyday coding and agentic workflows, combining a unified 1M-token context window with long-decode support up to 1M tokens.
- **Provider / access:** Google Gemini Developer API / Google AI Studio model code `gemini-4-hydrogen` (documented as stable). Also referenced in this dataset as `google/gemini-4-hydrogen`.
- **Release / knowledge:** Announced November 2026 per Google AI model docs; knowledge cutoff not stated in verified sources accessed for this report.
- **IDs:** `gemini-4-hydrogen` (API/model code); `google/gemini-4-hydrogen` (dataset/provider reference).
- **Context window:** 1,048,576 tokens unified input+output context; max output 65,536 tokens by default (synchronous) or up to 1,048,576 tokens with long decode (vendor-documented).
- **Modalities:** Text, image, video, audio, and PDF in; text out. Supports thinking levels `low`, `medium`, `high`, `xhigh` (vendor-documented). Capabilities documented include agentic video understanding, code execution, computer use, function calling, structured outputs, URL context, file search, and grounding (Google Search/Maps); image/audio generation and Live API not supported.
- **Pricing (as of 2026-11-13):** Standard paid tier: $1.50 / 1M input tokens, $7.50 / 1M output tokens (including thinking tokens), $0.075 / 1M cached input tokens (implicit caching only). Free tier available with usage limits and data-use terms; batch/flex/priority/contributor tiers also documented by Google.
- **Architecture:** Proprietary (details not publicly disclosed in verified sources).

### Raw benchmarks found

> Numbers below are reported by Google DeepMind on the official Gemini 4 Hydrogen model/evals pages (accessed 2026-11-13). Comparators shown on the source page are included in notes where useful; harness/methodology details are provided by the linked DeepMind evaluation methodology page.

Agent / tool use:

- Agents' Last Exam v1.1 (score): **71.6%** (DeepMind Gemini 4 Hydrogen performance table; comparators shown: Claude Sonnet 5.5 60.4%, GPT-6.1 Terra 69.8%).
- AutomationBench-AA: **76.1%** (DeepMind; comparators: Claude Sonnet 5.5 71.8%, GPT-6.1 Terra 60.2%).
- Vending-Bench 2 (bank balance): **$14,549** (DeepMind; comparators: Claude Sonnet 5.5 $11,165, GPT-6.1 Terra $9,107).
- OSWorld-2.1 (offline subset, computer use): **77.6%** (DeepMind; comparators: Claude Sonnet 5.5 83.9%, GPT-6.1 Terra 74.2%).
- Terminal-Bench 4.1 (cheating-adjusted, agentic coding/terminal): **57.0%** (DeepMind; comparators: Claude Sonnet 5.5 63.9%, GPT-6.1 Terra —).
- Terminal-Bench 2.1: **no verified public score found** under this exact benchmark name in accessed sources.
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- HLE-Diamond: **58.8%** (DeepMind; comparators: Claude Sonnet 5.5 53.3%, GPT-6.1 Terra 47.3%).
- Terminal-Bench-Science 0.1 (science/reasoning in terminal workflows): **51.4%** (DeepMind; comparators: Claude Sonnet 5.5 59.9%, GPT-6.1 Terra 58.3%).
- GPQA Diamond: **no verified public score found** in accessed sources.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** in accessed sources.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-sweep: **13.5%** (DeepMind; comparators: Claude Sonnet 5.5 3.1%, GPT-6.1 Terra 5.8%).
- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found** beyond results listed above.

Long context:

- Unified 1,048,576-token context window and long-decode support up to 1,048,576 output tokens are vendor-documented (Google AI model docs). **No verified MRCR/RULER/GraphWalks retrieval benchmark scores** were found in accessed sources.

Multimodal understanding:

- MKA (Climb WSR accuracy): **53.4%** (DeepMind; comparators: Claude Sonnet 5.5 52.0%, GPT-6.1 Terra 43.8%).
- Chartography: **66.6%** (DeepMind; comparators: Claude Sonnet 5.5 61.6%, GPT-6.1 Terra 63.2%).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and excluded from Overall.

- **Tool use: 84/100.** Evidence: strong agentic/workflow results reported by DeepMind — Agents' Last Exam v1.1 71.6%, AutomationBench-AA 76.1%, Vending-Bench 2 $14,549, OSWorld-2.1 (offline) 77.6%, and Terminal-Bench 4.1 (cheating-adjusted) 57.0% — plus documented tool/computer-use capabilities. Capped by weaker computer-use score versus the strongest comparator shown (Claude Sonnet 5.5 83.9% on OSWorld-2.1) and limited third-party/independent verification in accessed sources.
- **Reasoning: 82/100.** Evidence: HLE-Diamond 58.8% leads comparators shown, Agents' Last Exam 71.6% indicates strong long-horizon/knowledge-work reasoning, and Terminal-Bench-Science 0.1 51.4% shows competent scientific task performance. Capped by absence of verified GPQA/HLE-full/other broad reasoning leaderboard coverage in accessed sources and lower science-bench result than top comparators shown.
- **Context window: 94/100.** Evidence: vendor-documented unified 1,048,576-token context and long-decode output support up to 1,048,576 tokens, with model positioned around long-context workflows. Capped because no verified long-context retrieval benchmark (MRCR/RULER/GraphWalks) results were found to quantify effective recall at extreme lengths.
- **Multimodal: 82/100.** Evidence: broad documented input modalities (text, image, video, audio, PDF) with text output, agentic video understanding support, and strong reported multimodal understanding results (MKA 53.4%, Chartography 66.6%, leading comparators shown). Capped by text-only output and lack of broader independent multimodal benchmark coverage in accessed sources.
- **Coding: 78/100.** Evidence: SWE-sweep 13.5% leads comparators shown on DeepMind's table and Terminal-Bench 4.1 57.0% is competitive for an efficiency-focused model, consistent with its "everyday coding and agentic workflows" positioning. Capped by modest absolute SWE-sweep score, limited verified coverage on standard coding leaderboards (SWE-bench Verified/LiveCodeBench/etc.), and stronger terminal performance from some comparators.
- **Cost efficiency: 72/100.** Evidence: $1.50 input / $7.50 output per 1M tokens (standard, including thinking tokens) with $0.075 cached input and a free tier option is materially cheaper than Gemini 4 Carbon/Argon paid pricing but not low-cost versus budget/open-weight models. Value is reasonable for a 1M-context frontier-efficiency model.
- **Overall Score: 84/100.** Mean of the five non-cost dims = (84 + 82 + 94 + 82 + 78) / 5 = 84.0. Best fit: efficient Gemini 4 option for long-context, multimodal, and agentic/coding workflows where strong tool use and throughput matter more than absolute frontier coding depth.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13
- Method: public internet research (official Google AI and Google DeepMind pages fetched directly); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google AI for Developers — Gemini 4 Hydrogen model docs](https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen)
  - [Google AI for Developers — Gemini models overview](https://ai.google.dev/gemini-api/docs/models/gemini)
  - [Google AI for Developers — Pricing (Gemini 4 Hydrogen)](https://ai.google.dev/gemini-api/docs/pricing)
  - [Google DeepMind — Gemini 4 Hydrogen (model page & benchmark table)](https://deepmind.google/models/gemini-4-hydrogen/)
  - [Google DeepMind — Gemini 4 Hydrogen evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-4-hydrogen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
