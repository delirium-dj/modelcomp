# Gemini 4 Hydrogen — findings by GPT-6.1 Sol

- Source: Google DeepMind / `gemini-4-hydrogen`
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** Gemini 4 Hydrogen (native free and paid API access).
- **Short description:** Google's Gemini 4 execution-oriented model for everyday coding, multimodal knowledge work and agentic workflows. Its model card says it is adapted from Gemini 4 Carbon; Hydrogen is a distinct model, not a Carbon reasoning-effort tier.[1][6]
- **Provider / access:** Google AI Studio and the Gemini API, plus the Gemini app, Gemini for business and Google Antigravity. Native access uses Gemini's generate-content API, not an OpenAI Responses model ID. The live Zen catalog also lists `opencode/gemini-4-hydrogen`, with a Google generate-content integration.[1][2][8]
- **Release / knowledge:** Released **2026-11-12**; launch post updated November 13. The inspected Zen catalog reports a **March 2026** knowledge cutoff; this is a gateway specification, not a cutoff independently stated in the Hydrogen model card.[2][6][8]
- **IDs:** Native `gemini-4-hydrogen`; Zen `opencode/gemini-4-hydrogen`, canonical ID `google/gemini-4-hydrogen`. No separate Hydrogen Free ID was present in the inspected Zen catalog. Google's native Free Tier is independently documented.[1][7][8]
- **Context window:** **1,048,576 tokens shared by input and output**; default synchronous maximum output **65,536**, with background long decode allowing up to the shared **1,048,576-token** budget. This does not mean 1M input plus an additional 1M output. Zen advertises the same context but **65,536** maximum output.[1][6][8]
- **Modalities:** Text, image, video, audio and PDF input; **text output only**. Function calling, code execution, computer use, structured output, file search and URL context are supported. Thinking levels are low, medium, high and xhigh; high is the default. Audio/image generation and the Live API are not supported. Caching is implicit only.[1][8]
- **Pricing (as of 2026-11-14):** Google's standard Free Tier lists input, output and implicit caching as **free of charge**, with product-improvement data use and no free Search/Maps grounding. Paid standard is **$1.50 input / $7.50 output / $0.075 cached input per 1M tokens**, flat across the context window; thinking tokens are billable. Batch/Flex are **$0.75/$3.75/$0.0375**; paid Priority is **$2.70/$13.50/$0.135**. Invite-only Contributor pricing is **$0.75/$3.75/$0.0375**, with product-improvement use. Free access is quota-limited, not a promise of unlimited inference. Zen's inspected paid token rates are **$1.50/$7.50/$0.075**.[2][7][8]
- **Architecture:** Proprietary; adapted from Carbon. No parameter count or independently specified dense/MoE configuration was verified for Hydrogen.[5][6]

### Raw benchmarks found

The following task results are the **Hydrogen** column of Google's public performance table, not Carbon's results. Google's methodology generally uses the highest thinking setting, with explicit exceptions below. These are versioned metrics, not interchangeable with the older similarly named benchmarks.[3][4]

Agent / tool use:

- **Terminal-Bench 4.1: 57.0%**, cheating-adjusted accuracy; Google self-computed with a mini-swe-agent vision harness at **high** effort, averaging five attempts per task. This is not best-of-five success and not Terminal-Bench 2.1.[2][3][4]
- **Agents' Last Exam v1.1: 71.6%** rubric score; Google's Antigravity-CLI **1.4.8**, **122-task** set from October 17, a **five-hour** window and safety filters enabled. The October 26 task update was not applied.[3][4]
- **AutomationBench-AA: 76.1%** in Google's table, attributed to Artificial Analysis. AA's fetched methodology defines its score as the share of task objectives achieved with guardrail-violating tasks scoring zero, **not** the percentage of fully completed workflows; its static page did not expose the individual Hydrogen row.[3][4][9]
- **OSWorld-2.1: 77.6%**, on the **82-task offline subset**. Google's method takes the maximum over three single-attempt runs with a **500-step** limit; this is not full-suite pass@1.[3][4]
- **Vending-Bench 2: $14,549** bank balance, vendor table attribution to Andon Labs. This is a monetary outcome, not a percentage.[3][4]
- Terminal-Bench 2.1, Tau2/Tau3, GDPval-AA, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas and SWE Atlas Codebase QnA: **no verified public score found** for this exact subject in the sources inspected.

Reasoning / knowledge:

- **HLE-Diamond: 58.8%**, Google's table attributed to AA. This is the revised Diamond benchmark, not original HLE.[2][3][4]
- **Artificial Analysis Intelligence Index v5.0.1:** independently displayed **54 at xhigh**, **51 at high**, **41 at medium** and **27 at low**. The headline xhigh configuration ranks **16/80** on the fetched page. These are composite index points, not accuracy percentages or v4 index scores.[5]
- **Terminal-Bench-Science 0.1: 51.4%**; Google self-computed with mini-swe-agent vision, averaging five attempts per task.[3][4]
- GPQA Diamond, original HLE, LCR/MLCR, CritPt and Omniscience accuracy/hallucination rate: **no verified public score found** in the retrieved exact-model text.

Coding:

- **SWE-sweep: 13.5%** subtask-weighted reward, self-computed using Antigravity-CLI **1.4.8** with safety filters. It is a bug-discovery/repair evaluation, not SWE-bench Verified or SWE-Pro; the low absolute percentage cannot be mapped directly to their scales.[3][4]
- Terminal-Bench 4.1 **57.0%** also supplies coding/terminal evidence under the conditions above.[3][4]
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: **no verified public score found** for Hydrogen in the retrieved sources.

Multimodal:

- **MKA: 53.4%** climb WSR accuracy; Google self-computed.[3][4]
- **Chartography: 66.6%**, self-computed without tools using the official benchmark setup.[3][4]

Long context:

- The **1,048,576-token** shared window is documented, but **no verified public long-context retrieval score found** for Hydrogen. The Carbon GraphWalks row on the same product page is not transferred to this model.[1][3]

### Normalized scores (1–100)

These are evidence-based interpretations under the project's dimensional rubric, not official model scores. Newer benchmark versions are interpreted using their task definitions and stated comparisons, not by pretending they share an old benchmark's numeric scale.

- **Tool use: 89/100.** ALE **71.6%**, AutomationBench-AA **76.1%** and offline OSWorld **77.6%** support broad agentic execution; mixed trial-selection rules and missing Tau/Claw evidence cap confidence.[3][4][9]
- **Reasoning: 90/100.** HLE-Diamond **58.8%** and independently verified AA v5.0.1 **54 xhigh / 51 high** support strong reasoning, but not across-the-board frontier leadership; missing exact GPQA/CritPt measurements and effort sensitivity cap the score.[3][5]
- **Context window: 95/100.** The documented shared **1M** window reaches the highest size tier; no measured high-retention retrieval result justifies 100, and long decode consumes that same budget.[1][6]
- **Multimodal: 95/100.** Audio/video/image/PDF input and MKA/Chartography evidence justify the broad-input tier; text-only output and no native media generation cap it below 100.[1][3]
- **Coding: 88/100.** SWE-sweep **13.5%** and cheating-adjusted TB4.1 **57.0%** establish useful iterative coding, but absent conventional repository/programming scores and harness dependence prevent a top-band claim.[3][4]
- **Cost efficiency: 100/100.** Scored on the verified native **$0 Free Tier**, not on a nonexistent free Zen ID; quota limits, product-improvement use and paid grounding constrain its practical value, while production paid standard remains **$1.50/$7.50**.[7][8]
- **Overall Score: 91/100.** Half-up rounded quality mean: `(89 + 90 + 95 + 95 + 88) / 5 = 91.4`; cost excluded. Best fit: broad-input, long-context everyday agent work, with paid/free and thinking-level trade-offs made explicit.

---

## Signature

- Provided by: **GPT-6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-14 UTC
- Method: Independent public-web research. The search integration returned HTTP 402 on the initial query and its simpler retry, so this pass used direct vendor/AA webfetch, live pricing/catalog HTTP fetches and shell download of official PDFs. The session's PDF reader was unsupported; `pypdf` text extraction was used for the downloaded methodology/model card. Vendor-mediated numbers are labelled separately from independently displayed AA results. No peer reports or local dataset values were used as evidence. Scores are normalized interpretations, not vendor scores.
- Reference URLs:
  - [1 — Google API Hydrogen specifications](https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen)
  - [2 — Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
  - [3 — DeepMind Gemini performance tables](https://deepmind.google/models/gemini/)
  - [4 — Official Hydrogen evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-4-hydrogen)
  - [5 — Artificial Analysis Hydrogen profile](https://artificialanalysis.ai/models/gemini-4-hydrogen)
  - [6 — Official Hydrogen model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf)
  - [7 — Google API pricing, Hydrogen section](https://ai.google.dev/gemini-api/docs/pricing#gemini-4-hydrogen)
  - [8 — Live Zen model catalog](https://opencode.ai/zen/v1/models)
  - [9 — AA AutomationBench metric definition](https://artificialanalysis.ai/evaluations/automationbench-aa)
- Future sources: add a new independently signed report next to this file using the same headings.
