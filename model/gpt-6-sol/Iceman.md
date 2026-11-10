# GPT-6 Sol — findings by Iceman

- Source: OpenAI/GPT-6 Sol
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI’s GPT-6 Sol is a cost-efficient GPT-6 family model for complex coding and agentic workflows, expanding Astra-era capabilities to a faster, lower-priced tier. It targets professional work, coding, computer use, and long-context tasks.
- **Provider / access:** OpenAI ChatGPT Work/Codex (rollout per announcement) and OpenAI API as `gpt-6-sol`; announced availability also via cloud partners in GPT-6 family context. Local metadata lists `opencode/gpt-6-sol` and `noFreeId`.
- **Release / knowledge:** Introduced in “Introducing GPT‑6 Sol and Luna” announcement (Sep 22, 2026 update context on Astra page; Sol/Luna post). Developer docs list knowledge cutoff April 20, 2026.
- **IDs:** `gpt-6-sol` (OpenAI API/docs). Local metadata ID `opencode/gpt-6-sol`.
- **Context window:** 1,050,000 context window; 922,000 maximum input tokens; 128,000 max output tokens (OpenAI developer docs). Local metadata states 1,050,000 total (128K output).
- **Modalities:** Text and image input; text output (OpenAI developer docs).
- **Pricing (as of 2026-11-10):** Standard API pricing $2 / 1M input tokens and $10 / 1M output tokens; cached input $0.20 / 1M; cache writes $2.50 / 1M (OpenAI docs/announcement). Long-context (>272K input) and processing-mode multipliers apply per docs.
- **Architecture:** Proprietary OpenAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s “Introducing GPT‑6 Sol and Luna” announcement and OpenAI developer docs.

Agent / tool use:

- AutomationBench 1.0.6 (**business workflows**, xhigh effort): **33.2%**, cost per task **$0.27** (OpenAI announcement)
- Agents’ Last Exam v1 (**complex professional workflows**, max effort): **56.4%** (OpenAI announcement)
- OSWorld 2.0 offline (v2026.08.08, partial reward, xhigh effort): **60.5%** (OpenAI announcement)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Internal factuality evaluation: stated as ~half as many mistakes as GPT-5.6 Sol predecessor, approaching Astra-level reliability (OpenAI announcement; qualitative/internal metric, not a standard public benchmark number).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1 (max effort): **68.8%** (OpenAI announcement)
- FrontierCode 1.1 Main: stated as substantial improvement over GPT-5.6 Sol and able to match Claude Fable 5.1 xhigh at much lower cost (OpenAI announcement; exact GPT-6 Sol numeric score not stated in fetched text).
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- 1,050,000-token context window (922K max input, 128K output) per OpenAI developer docs; no standalone MRCR/RULER/GraphWalks numeric score reported for GPT-6 Sol in reviewed sources.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 88/100.** Verified agentic/professional workflow and computer-use results (AutomationBench 33.2%, Agents’ Last Exam 56.4%, OSWorld 2.0 offline 60.5%) show strong tool-driven capability at this tier; capped by limited breadth of standardized tool benchmarks and lower scores than top frontier peers.
- **Reasoning: 86/100.** Strong practical reasoning/professional-task performance (Agents’ Last Exam 56.4%, improved factuality claims) indicates good reasoning; capped by lack of canonical public reasoning benchmarks (GPQA/HLE/ARC/AA Index) in reviewed sources.
- **Context window: 95/100.** Large verified context (1.05M window, 922K max input, 128K output) supports long workflows and agentic coding; capped slightly by absence of reported long-context retrieval stress scores for this specific model.
- **Multimodal: 80/100.** Verified text+image input and text output support vision-grounded tasks; capped by limited modality/output breadth and lack of extracted multimodal benchmark numbers.
- **Coding: 89/100.** Verified DeepSWE v1.1 68.8% and strong comparative coding/agentic coding positioning (FrontierCode improvement, cost-efficient performance) indicate high coding capability; capped by missing common public coding benchmarks (SWE-bench Verified/LiveCodeBench) and no exact FrontierCode numeric score in reviewed text.
- **Cost efficiency: 90/100.** Competitive pricing ($2/$10 per 1M, cached input discounts and improved caching) delivers strong value for capability, especially for agentic/coding workloads.
- **Overall Score: 88/100.** Mean of the five non-cost dims (88, 86, 95, 80, 89) = 87.6 → 88 (half-up). Best fit for cost-efficient agentic coding, computer use, and long-context professional workflows where near-frontier capability is desired without Astra-tier pricing.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement and developer docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT‑6 Sol and Luna (OpenAI announcement)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [GPT-6 Sol model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-6-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
