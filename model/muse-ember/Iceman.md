# Muse Ember 1.0 — findings by Iceman

- Source: Meta / Muse Ember 1.0
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's smallest, most efficient Muse-family reasoning model for repeated agentic work (tool calls, coding subtasks, routing, extraction, and long document parsing). Revealed as the production model behind the Crouton Alpha stealth preview and trained using Muse Wonder Full.
- **Provider / access:** Meta Model API as `muse-ember-1.0` (Responses API supported), also announced for Google Cloud and Oracle Cloud. OpenRouter lists `meta/muse-ember` via Google Vertex and Meta providers.
- **Release / knowledge:** Announced 2026-11-09 (Meta blog). Knowledge cutoff not stated in cited public sources.
- **IDs:** `muse-ember-1.0` (Meta Model API), `meta/muse-ember` (OpenRouter), project id `opencode/muse-ember-1.0`. No free API ID verified in cited sources.
- **Context window:** 1,000,000-token context window and up to 512,000 output tokens (Meta blog).
- **Modalities:** Text, image, audio, and video input; text output (native multimodal understanding per Meta). Tool use/reasoning supported; Responses API supported.
- **Pricing (as of 2026-11-11):** $0.10/M input, $0.004/M cached input, and $0.50/M output for prompts up to 200K tokens; $0.30/M input, $0.012/M cached input, and $1.50/M output for prompts over 200K tokens (Meta blog). OpenRouter lists $0.10/M input and $0.50/M output (standard variant) per provider pages.
- **Architecture:** Proprietary Meta model (small, efficiency-focused). Parameter count and detailed architecture not publicly disclosed in cited sources.

### Raw benchmarks found

> Scores below are vendor/self-reported results from Meta's announcement/evaluation report context and Meta-stated Artificial Analysis comparisons as published 2026-11-09. No independent third-party leaderboard verification was performed in this pass beyond cited official pages.

Agent / tool use:

- AutomationBench-AA (**end-to-end business workflows**, max reasoning): **37.8%**.
- Agents' Last Exam (**end-to-end agent tasks**, Meta internal evaluation, Linux subset, max reasoning): **61.6%**.
- Terminal-Bench 4.0 (**agentic terminal coding**, best published harness mini-swe-agent, max reasoning): **40.9%**.
- OSWorld 2.1 (**computer use across desktop apps**, Meta internal evaluation, partial-credit reward, max reasoning): **69.5%** partial / **33.8%** binary.
- Personal Superintelligence Index (**internal composite of personal and knowledge work**, max reasoning): **46.8%**.
- Artificial Analysis Intelligence Index v5 (max reasoning): **36**; cost per task **$0.14** (Meta-stated).
- Tau3-Banking / Tau2-Bench / GDPval-AA Elo / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5: **36** (max reasoning).
- Personal Superintelligence Index: **46.8%** (internal composite).
- GPQA Diamond / HLE / LCR / MLCR / CritPt / BenchLM overall / Omniscience Accuracy/Hallucination Rate: **no verified public score found**.

Coding:

- Coding Agent Index-AA (**coding in real agent harnesses**, Artificial Analysis, max reasoning): **46**.
- Terminal-Bench 4.0 (agentic terminal coding): **40.9%**.
- FrontierCode 2.0-AA (**real engineering tasks judged on mergeability**, Artificial Analysis, max reasoning): **27.2%**.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / other coding index: **no verified public score found**.

Long context:

- 1M-token context window and 512K output tokens documented (Meta). GDP.pdf-AA (**professional work over long documents**, Artificial Analysis, max reasoning): **22.8%**.
- MRCR / RULER / GraphWalks retrieval metrics: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong small-model agent evidence (AutomationBench-AA 37.8%, Agents' Last Exam 61.6%, OSWorld 2.1 69.5% partial, Terminal-Bench 4.0 40.9%) shows capable repeated tool/coding-agent workflows, but binary OSWorld success is lower (33.8%) and several standard tool-use benchmarks (Tau, MCP-Atlas, GDPval Elo) are not reported.
- **Reasoning: 78/100.** AA Intelligence Index 36 and solid composite/agent exam results indicate good efficiency-class reasoning, but Meta positions it as a small model that trails frontier models on the hardest novel problems and standard reasoning benchmarks (GPQA/HLE/LCR) are not publicly reported.
- **Context window: 88/100.** Very large 1M input and 512K output capacity is a major strength for document/code workflows, with GDP.pdf-AA 22.8% as long-document evidence; lack of published MRCR/RULER-style retrieval metrics at full window caps measured-reliability confidence.
- **Multimodal: 90/100.** Native text, image, audio, and video understanding with strong reported perception/computer-use/document results (PerceptionBench 80.6% with tools, OSWorld 2.1 69.5% partial, GDP.pdf-AA 22.8%) supports high multimodal capability; output is text-only.
- **Coding: 79/100.** Competitive efficiency-tier coding/agent results (Coding Agent Index-AA 46, Terminal-Bench 4.0 40.9%) are useful for repeated subtasks, but FrontierCode 2.0-AA 27.2% and absence of standard SWE-bench/LiveCodeBench public scores indicate limits on harder software-engineering tasks.
- **Cost efficiency: 97/100.** Excellent pricing for capability ($0.10/$0.50 per 1M tokens up to 200K, low cached-input rates, strong AA cost-per-task positioning) makes it one of the better value agent models; it is still paid API (no verified free route) and long prompts above 200K cost more.
- **Overall Score: 84/100.** Mean of the five non-cost quality dimensions (Tool 84, Reasoning 78, Context 88, Multimodal 90, Coding 79) = 83.8, rounded half-up to 84; best fit for high-volume, cost-sensitive multimodal agentic workflows, document parsing, and routine coding subtasks rather than the hardest frontier reasoning problems.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-11
- Method: Fresh public web research using official Meta and OpenRouter pages fetched in this run; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Our Smallest, Most Efficient Model: Muse Ember (Meta AI blog)](https://research.meta.ai/blog/muse-ember/)
  - [Muse Ember on OpenRouter](https://openrouter.ai/meta/muse-ember)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
