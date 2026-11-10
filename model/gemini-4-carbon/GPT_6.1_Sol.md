# Gemini 4 Carbon — findings by GPT-6.1 Sol

- Source: Google / `gemini-4-carbon`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md) (historical normalization anchors; current Overall contract in `../../RULES.md`)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's reasoning model for sustained software engineering, multimodal knowledge work, and scientific problem solving. Google describes it as based on Gemini 4 Argon but exposes a distinct Carbon model ID; thinking levels are settings, not additional models.
- **Provider / access:** Google AI Studio and Gemini API, including `https://generativelanguage.googleapis.com/v1beta/interactions` with model `gemini-4-carbon`; Google's native Interactions/GenerateContent APIs, not an OpenAI Responses endpoint.
- **Release / knowledge:** Google's model card was published 2026-11-10 and the API page says November 2026 update; Artificial Analysis dates first release to 2026-10-28. Knowledge cutoff: March 2026 according to the model card. These dates describe different events, not a verified single launch date.
- **IDs:** `gemini-4-carbon` (Google). No Zen Free ID verified in this research; Google explicitly excludes Carbon from its API Free tier.
- **Context window:** 1,048,576 combined input, thinking, and output tokens, verified in the API model page. Default synchronous output maximum is 65,536; background long decode can consume the remainder of the unified window, not an additional 1M output allowance.
- **Modalities:** Text, image, audio, video, and PDF inputs; text output. Thinking, function calling, structured outputs, code execution, computer use, search grounding, and implicit caching are documented; audio/image generation and Live API are not supported.
- **Pricing (as of 2026-11-10):** Paid introductory Google API pricing through 2026-11-30: $2.00 input / $10.00 output / $0.10 implicitly cached input per 1M tokens. From 2026-12-01: $4.00 / $20.00 / $0.20 respectively. Thinking is billed as output; grounding queries incur additional charges. The Artificial Analysis page quotes the later standard $4/$20 rate, not the temporary introductory rate. [Google's claimant page](https://ai.google.dev/gemini-api/docs/whats-new-gemini-4-carbon#pricing).
- **Architecture:** Proprietary, based on Gemini 4 Argon according to Google; parameter count and active parameter count not disclosed in the Carbon card.

### Raw benchmarks found

Google's [Carbon model card](https://deepmind.google/models/model-cards/gemini-4-carbon/) supplies the following Carbon-specific results, labeled October 2026. They are vendor-reported, not measurements performed by this reporter. The new benchmark versions below are not interchangeable with the template's legacy versions.

Agent / tool use:

- Terminal-Bench **4.0 (AA): 65.2%** (Google's comparison table; distinct from Terminal-Bench 2.1).
- Agents' Last Exam **v1.1: 77.4%** (score, Google).
- OSWorld-**2.1: 81.5%** (offline subset, Google).
- AutomationBench: **53.9%** (Zapier setting, Google).
- Vending-Bench **2: $16,484** final bank balance (Google); this is a benchmark outcome, not an API price or percentage.
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA numerical Elo, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: no verified public score found in the accessed sources.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **v5.0.1: 60**, **rank 4/74** in the page's comparison class ([independent evaluator](https://artificialanalysis.ai/models/gemini-4-carbon), High setting). Google separately reports **59** on **AA Index v5.0**; version, timing, and run differences prevent treating these as the same observation.
- Vals Index **v2.2: 70.4%** (Google).
- RiemannBench: **80.0%** (Google).
- Terminal-Bench-Science **0.1 (AA): 64.8%** (Google).
- GPQA Diamond, HLE, HLE-Diamond numerical result, LCR/MLCR numerical result, CritPt numerical result, and Omniscience accuracy/hallucination rate: no verified public score found. Evaluations named on an interactive page without a visible score are not numerical evidence.

Coding:

- SWE-sweep: **9.6%** (Google; a distinct, difficult evaluation, not SWE-bench Verified).
- FrontierSWE **2: 61.2%** (Google; do not relabel as SWE-Pro or FrontierCode 2.0).
- Terminal-Bench **4.0: 65.2%** (AA result reproduced by Google).
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode/AA-SciCode, Vibe Code Bench, and DeepSWE: no verified public score found in the accessed sources.

Long context:

- GraphWalks breadth-first-search **F1: 96.2%**, aggregated over **256K–1M** contexts (Google). This is an aggregate graph-reasoning score, not proof of 98% retrieval at every individual length.

Multimodal evidence:

- Chartography: **72.5%**; Blueprint-Bench **2 similarity: 58.6%** (Google). Both support visual-understanding claims; neither demonstrates non-text generation.
- Restricted Fairwind cybersecurity results are not used to grade the generally available API because Google says those results reflect verified-defender access.

### Normalized scores (1–100)

- **Tool use: 94/100.** TB4.0 65.2%, Agents' Last Exam 77.4%, and AutomationBench 53.9% support frontier agentic use; missing legacy tool-suite results and offline/vendor harness dependence cap the score.
- **Reasoning: 93/100.** AA v5.0.1 rank 4/74, RiemannBench 80.0%, and scientific terminal work support strong reasoning; no verified GPQA/HLE breakdown and a changed AA index version prevent a maximum score.
- **Context window: 98/100.** A verified unified 1M window and GraphWalks 96.2% place it near the top context tier, but the aggregate is below the methodology's 98%-retrieval condition for 100.
- **Multimodal: 96/100.** Audio/video/image/PDF understanding plus numerical visual benchmarks support the broad-input tier; text-only output and no Live API cap breadth.
- **Coding: 94/100.** FrontierSWE 2 at 61.2% and TB4.0 at 65.2% establish strong repository and terminal capability; no verified legacy SWE/LiveCode/SciCode results and harness differences limit confidence.
- **Cost efficiency: 70/100.** Current $2/$10 introductory pricing is useful for this capability level, but billed thinking, expensive long runs, and the scheduled $4/$20 increase prevent a budget-model grade; free access is not established.
- **Overall Score: 95/100.** Half-up mean of the five quality scores: (94 + 93 + 98 + 96 + 94) / 5 = 95; cost is excluded. Best suited to difficult multimodal engineering and science tasks where latency and token spend are acceptable.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source research through direct official and evaluator pages, with a Bing search for discovery. The configured search integration returned HTTP 402. No peer findings were read. Benchmark values retain their published versions, settings, and attribution; normalized scores are independent 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google API model specifications](https://ai.google.dev/gemini-api/docs/models/gemini-4-carbon)
  - [Google features, access, and introductory pricing](https://ai.google.dev/gemini-api/docs/whats-new-gemini-4-carbon)
  - [Google DeepMind model card and benchmark table](https://deepmind.google/models/model-cards/gemini-4-carbon/)
  - [Artificial Analysis: Gemini 4 Carbon (High)](https://artificialanalysis.ai/models/gemini-4-carbon)
- Future sources: Add a separately signed findings file alongside this one; preserve this report.
