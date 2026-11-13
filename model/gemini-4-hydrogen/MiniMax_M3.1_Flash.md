# Gemini 4 Hydrogen — findings by MiniMax M3.1 Flash

- Source: Google DeepMind/Gemini 4 Hydrogen (`gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's fast, efficient Gemini 4 model for everyday coding, tool-using agents, and multimodal knowledge work. It combines a unified 1M-token context window and up to 1M-token long decode with four selectable reasoning levels and a free API tier.
- **Provider / access:** Google Gemini API through both the GenerateContent and Interactions APIs, Google AI Studio, Gemini for business, the Gemini app, Google Search, and Google Antigravity. The public API model ID is `gemini-4-hydrogen`.
- **Release / knowledge:** Generally available 2026-11-12. The November 2026 official model card does not publish a separate knowledge cutoff for Hydrogen.
- **IDs:** `gemini-4-hydrogen` (Gemini API and AI Studio).
- **Context window:** 1,048,576 tokens shared by input, thinking, and output; 65,536 tokens by default for synchronous responses and up to 1,048,576 tokens through background long decode. Verified by Google's model page and developer guide.
- **Modalities:** Text, image, audio, video, and PDF input; text output; reasoning with `low`, `medium`, `high`, and `xhigh` thinking levels; function calling, code execution, computer use, file search, Google Search and Maps grounding, URL context, structured outputs, implicit context caching, and batch/flex/priority inference. Live API and audio generation are not supported.
- **Pricing (as of 2026-11-13):** Free-tier input and output at no charge, rate-limited, with submitted content used to improve Google's products. Standard paid tier: $1.50 per 1M input tokens and $7.50 per 1M output tokens, including thinking tokens; implicit cache reads are $0.075 per 1M. Batch and flex pricing is $0.75 input/$3.75 output per 1M.
- **Architecture:** Proprietary Google DeepMind model adapted from Gemini 4 Carbon; parameter count and detailed architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.1: **57.0%** cheating-adjusted (Google DeepMind performance table; Google launch comparison reports 57% versus 18.2% for Gemini 3.8 Flash)
- Agents' Last Exam v1.1: **71.6%** (Google DeepMind performance table)
- AutomationBench-AA: **76.1%** (Google DeepMind performance table)
- OSWorld-2.1: **77.6%** on the offline subset (Google DeepMind performance table)
- Vending-Bench 2: **$14,549** bank balance (Google DeepMind performance table)
- Agent Arena: **5th overall** on the live multi-step-agent benchmark (Google launch announcement)
- Vals Tax Agent Bench: **52.3%**, ranked 1st overall (Google launch announcement)
- Vals Legal Research Bench: **55.8%**, tied for 1st (Google launch announcement)
- Agent honesty evaluation: **94% honesty rate**; overreach reduced by up to **81%**, under-service by up to **79%**, and misaligned actions/task shortcutting cut by **12x** versus Gemini 3.8 Flash (Google launch announcement)
- GDPval-AA: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE-Diamond: **58.8%** (Google DeepMind performance table and launch announcement)
- Artificial Analysis Intelligence Index: **51 at default `high`** and **54 at `xhigh`**; Hydrogen scores 51 versus Argon's 50 (Google launch announcement citing Artificial Analysis)
- Terminal-Bench-Science 0.1: **51.4%** (Google DeepMind performance table)
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-sweep: **13.5%** (Google DeepMind performance table; iterative repository coding and bug-repair task)
- Terminal-Bench 4.1: **57.0%** cheating-adjusted (Google DeepMind performance table)
- Fabricated claims: reduced by **more than 5x** compared with Gemini 3.8 Flash (Google launch announcement)
- Execution speed: **2.5x faster** at the default `high` setting than Gemini 3.8 Flash; partner workflows ran **2x–2.8x faster** while using **12%–23% fewer tokens** (Google launch announcement)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- The official API supports a **1,048,576-token unified context window** and background long decode up to the same limit; no verified public MRCR, RULER, or GraphWalks retrieval result was found for Hydrogen.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 4.1 at 57.0%, AutomationBench-AA at 76.1%, OSWorld-2.1 at 77.6%, and first-place Vals tax and legal results show strong agentic execution; absent Tau and MCP figures cap it below the frontier leaders.
- **Reasoning: 92/100.** HLE-Diamond at 58.8% and an Artificial Analysis Intelligence Index of 51 at `high`/54 at `xhigh` are frontier-grade results, supported by top-ranked professional-agent evaluations.
- **Context window: 98/100.** Google verifies a 1,048,576-token unified input/thinking/output window with up to 1M-token long decode, placing Hydrogen in the top tier; no public long-context retrieval measurement caps it below 100.
- **Multimodal: 90/100.** Native text, image, audio, video, and PDF input plus 53.4% on MKA and 66.6% on Chartography provide unusually broad and well-verified multimodal coverage.
- **Coding: 90/100.** A 57.0% cheating-adjusted Terminal-Bench 4.1, 13.5% SWE-sweep, 2.5x speed gain, more-than-5x reduction in fabricated claims, and strong iterative-repository behavior support a frontier-adjacent coding score.
- **Cost efficiency: 78/100.** The paid $1.50 input/$7.50 output per 1M rate is competitive, with 50% batch/flex rates and a free tier; the free tier's data-use caveat and billable thinking tokens prevent a top score.
- **Overall Score: 91.8/100.** A fast, broad 1M-context multimodal model for production agents and everyday coding; best fit as an efficient worker/verifier in multi-model workflows.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Google's official Gemini API documentation, Gemini 4 Hydrogen model card, DeepMind performance pages, and launch announcement after the web-search service returned HTTP 402; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Hydrogen model page](https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen)
  - [What's new in Gemini 4 Hydrogen](https://ai.google.dev/gemini-api/docs/whats-new-gemini-4-hydrogen)
  - [Introducing Gemini 4 Hydrogen launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
  - [Gemini 4 model performance and benchmark methodology](https://deepmind.google/models/gemini/)
  - [Gemini 4 Hydrogen model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf)
  - [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- Future sources: add a new file next to this one, e.g. `Gemini_4_Hydrogen.md`, using the same headings.
