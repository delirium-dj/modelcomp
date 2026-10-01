# GPT-5 nano — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** The smallest and cheapest member of the GPT-5 family, released 2025-08-07. OpenAI positions it for **summarisation, classification and high-volume extraction** — the cheap, fast tier of a frontier family, not a frontier model. It ships in three reasoning-effort variants (`minimal`, `medium`, `high`) that differ materially in measured capability: Intelligence Index **7 / 12 / 13** respectively. Scored here on the **`high`** variant, which is the strongest published configuration. Not a variant or alias of another entry in this dataset; `gpt-5-nano` is its own model ID.
- **Provider / access:** OpenAI API — Responses API and Chat Completions. Also on Azure OpenAI, AWS Bedrock (`openai.gpt-5-nano-2025-08-07`), Google Vertex AI, and OpenRouter (`openai/gpt-5-nano`). Active as of 2026-09-12; OpenAI's `flex` processing tier is available at $0.025 / $0.20.
- **Release / knowledge:** released **2025-08-07**. Knowledge cutoff **2024-05-30** (Artificial Analysis and OpenAI model docs). This is the **oldest knowledge cutoff of any GPT-5-family model** — GPT-5 itself is September 2024 — and it is the single most consequential spec on this card.
- **IDs:** `gpt-5-nano` (OpenAI); dated snapshot `gpt-5-nano-2025-08-07`. OpenRouter: `openai/gpt-5-nano`. Batch variant: `openai/gpt-5-nano:batch`.
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI API docs; corroborated by Artificial Analysis, OpenRouter, Requesty and llm-stats). Note one dissenting third-party tracker (LLMLearner) lists 256K / 4K output; the 400K/128K figures are the first-party ones and are what is used here.
- **Modalities:** **text and image in; text out** (Artificial Analysis, OpenAI docs). Reasoning: yes — switchable `minimal` / `medium` / `high` effort. Tool calling, function calling, web search, structured output / JSON schema, prompt caching and computer use are all listed as supported. No documented audio or video input; PDF input is not documented for this model.
- **Pricing (as of 2026-10-01):** **$0.05 / MTok input, $0.40 / MTok output** (OpenAI pricing docs). Cache read **$0.005** (90% off), **Batch $0.025 / $0.20 (50% off)**, `flex` tier $0.025 / $0.20. Artificial Analysis blended rate at 7:2:1 cache-hit/input/output: **$0.05 / MTok**. No free tier. This is the cheapest first-party frontier-family model OpenAI has shipped.
- **Architecture:** proprietary. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard (agentic development, thinking medium, with tools): **17.4%** — **#92 of 149** (Artificial Analysis; LLMLearner records the same figure independently)
- τ²-Bench Telecom (service workflows, with tools): **36.5%** — **#109 of 155** (LLMLearner)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Output speed: **158–161 tokens/s** across all three effort variants (Artificial Analysis) — the fastest GPT-5 nano configuration is `medium` at **159 t/s**; `minimal` has the lowest time-to-first-answer-token at **0.85s**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **13** (`high`), **12** (`medium`), **7** (`minimal`) — current v4.3.2 index family. AA places the `high` variant "well above average among comparable models (median 8)", while calling $0.40 output "expensive, median $0.15".
- GPQA Diamond: **67.6%** (thinking high, no tools) — **#174 of 254** (LLMLearner)
- AIME 2025: **85.0%** (thinking high, with tools) — **#52 of 128** (LLMLearner); Requesty's chart records 83.7%
- FrontierMath: **8.3%** (thinking high, no tools) — #23 of 47; FrontierMath Tier 4 **2.1%** (thinking medium) — #36 of 50; FrontierMath Tier 4 v2 **2.4%** — #38 of 41; **FrontierMath v2 20.0%** — #41 of 43
- Humanity's Last Exam: **9.5%** (thinking high, text only) — **#145 of 218** (LLMLearner); Artificial Analysis records **9%**
- CritPt scientific reasoning: **0%** (Artificial Analysis, in the direct GPT-5 comparison table)
- MMLU-Pro: **62.0%**
- AA-Omniscience Index: **−29** — deeply negative, i.e. materially more wrong than right on knowledge questions it does not know (GPT-5 (high) is −9 on the same evaluation)
- AA-LCR v1.1 (long-context reasoning): **45%** — **#78 of 91** (both Artificial Analysis and LLMLearner)

Coding:

- SWE-bench Verified: **34.8%** (mini-SWE-agent scaffold, official SWE-bench board, observed 2025-08-07) — #1 on its board, **−42.0 points versus Claude Opus 4.5**. Some secondary trackers quote 25.0%; the official board figure is used here.
- LiveCodeBench: **78.9%** (thinking high, no tools) — **#48 of 180** (LLMLearner)
- Terminal-Bench Hard: 17.4% (see above)
- DeepSWE / SWE-bench Pro / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR v1.1: **45%** at the 400K window — **#78 of 91**, i.e. bottom decile. The 400K window is a documented spec with **no strong retrieval measurement behind it**; the one long-context number that exists is weak.
- No MRCR, RULER or GraphWalks measurement was found for this model.

Vision / multimodal:

- DocVQA (documents and charts): **78.3%** — **#5 of 5**, i.e. best-in-class on its board (LLMLearner)
- MMMU-Pro: **61.0%** (thinking high) — **#84 of 115** (LLMLearner; Artificial Analysis independently records 61.0%)
- MMMU: **57.6%** — #50 of 61 (LLMLearner)
- Chatbot Arena Elo: **1200** (AI Value Index)

### Normalized scores (1–100)

- **Tool use: 32/100.** The weakest dimension and the honest reason not to use this model for agents. Terminal-Bench Hard **17.4% at #92 of 149** and τ²-Bench Telecom **36.5% at #109 of 155** are bottom-decile agentic numbers, and no Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Toolathlon or MCP-Atlas figure exists at any effort level. It supports function calling and web search as an interface, but every harness that actually measures multi-step agentic reliability puts it near the floor. What it *is* fast at is single-shot extraction and classification — a task shape these harnesses do not score.
- **Reasoning: 58/100.** A genuinely split profile that lands mid-scale. On the upside, **AIME 2025 at 85.0% (#52 of 128)**, GPQA Diamond 67.6% inside the methodology's 60–80% band, and MMLU-Pro 62.0% — the math is genuinely good for the price. Capping it hard: **HLE 9.5% (#145 of 218)**, **CritPt 0%**, FrontierMath v2 20.0% at #41 of 43, an Intelligence Index of 13, and an **AA-Omniscience Index of −29**, which says that on knowledge it does not have, it guesses wrong more often than right. Reasoning here is narrow and arithmetic-flavoured, not scientific or encyclopaedic — and the 2024-05-30 knowledge cutoff explains much of why.
- **Context window: 74/100.** **400,000 tokens in, 128,000 out** places it in the methodology's 200K–500K band. Scored in the upper half of that band for the raw spec — a 128K output ceiling is the joint-largest of any model at this price — but **not** higher, because the single measured retrieval number, **AA-LCR 45% at #78 of 91, is bottom-decile**. A large window that the model demonstrably struggles to use is a spec, not a capability, and there is no MRCR, RULER or GraphWalks result to argue otherwise.
- **Multimodal: 68/100.** **Text and image in, text out** — the "+image in = 60–70" band, scored near its top on measured quality rather than on breadth: **DocVQA 78.3% at #5 of 5** is genuinely best-in-class for document and chart reading, which is the practical multimodal workload for a cheap extraction model. Capped there by MMMU 57.6% and MMMU-Pro 61.0% (#84 of 115) — fine at reading documents, weak at reasoning over diagrams — and by the absence of any audio, video or PDF input.
- **Coding: 55/100.** Split down the middle, and the split is the finding. **LiveCodeBench 78.9% (#48 of 180)** says the algorithmic coding is real and above the mid-band. **SWE-bench Verified 34.8%** on the official board — **42 points behind Claude Opus 4.5** — and Terminal-Bench Hard 17.4% say that the moment a task requires holding a repository in mind, editing files and iterating, it collapses. Competitive-programming-shaped work at low reasoning cost; not a software-engineering agent at any price.
- **Cost efficiency: 96/100.** **$0.05 in / $0.40 out per MTok**, cache read **$0.005**, **Batch $0.025 / $0.20**, `flex` $0.025 / $0.20, and an Artificial Analysis blended rate of **$0.05 / MTok** — the cheapest first-party frontier-family rate available. Held at 96 rather than 97–99 for one reason: the output rate of $0.40 is **2.7× the $0.15 class median**, and this model's entire intended use — summarisation and extraction over long documents — is output-heavy relative to input-heavy reasoning. Batch and caching bring the real figure lower still; the risk is the 2024-05-30 knowledge cutoff forcing expensive re-reads and re-asks, not the token price.
- **Overall Score: 57/100.** (32 + 58 + 74 + 68 + 55) / 5 = 57.4 → **57**. Best fit: **very high-volume summarisation, classification, routing and document/chart extraction at 400K input**, especially on Batch or `flex`, where the $0.025/$0.20 rate and $0.005 cache read make it nearly free relative to anything else on a first-party API. Explicitly not a fit for agentic work, repository-scale coding, scientific reasoning, or any query where a May-2024 knowledge cutoff is disqualifying — route those to a bigger model rather than paying to discover the ceiling here.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — OpenAI's API documentation and pricing pages (`developers.openai.com/api/docs/models`), the official SWE-bench leaderboard record for `mini-SWE-agent`, Artificial Analysis's GPT-5 nano model page and release comparison (including the direct GPT-5 vs GPT-5 nano table), LLMLearner's independent benchmark tracker, AI Atlas's sourced benchmark and provider matrix, and Requesty / llm-stats provider rate cards. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores; where a secondary tracker disagrees with a first-party source (context window, SWE-bench), the first-party figure is used and the disagreement is noted.
- Future sources: add a new file next to this one, e.g. `GPT_5_Nano_High.md`, using the same headings — the three effort variants are distinct enough to warrant separate files.