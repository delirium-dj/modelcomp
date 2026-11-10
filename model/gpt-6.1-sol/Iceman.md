# GPT-6.1 Sol — findings by Iceman

- Source: OpenAI/GPT-6.1 Sol
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI’s GPT-6.1 Sol is an upgraded Sol-tier model positioned as near-Astra capability for complex coding, computer use, and professional work at substantially lower cost, with strong long-context and agentic workflow support.
- **Provider / access:** OpenAI ChatGPT (Work/Codex availability per announcement) and OpenAI API as `gpt-6.1-sol`; also listed for cloud providers in docs. Local metadata lists `opencode/gpt-6.1-sol` and `noFreeId`.
- **Release / knowledge:** Announced/released in 2026 (OpenAI “GPT-6.1 Sol” page). Developer docs list knowledge cutoff April 30, 2026.
- **IDs:** `gpt-6.1-sol` (default snapshot/alias as documented).
- **Context window:** 1,050,000 context window; 922,000 maximum input tokens; 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output (OpenAI developer docs).
- **Pricing (as of 2026-11-10):** Standard API pricing $2 / 1M input tokens, $0.10 / 1M cached input tokens, $2.50 / 1M cache writes, $10 / 1M output tokens (OpenAI docs/announcement). Long-context (>272K) and processing-mode multipliers apply per docs.
- **Architecture:** Proprietary OpenAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s GPT-6.1 Sol announcement and OpenAI developer docs.

Agent / tool use:

- AutomationBench 1.0.6 (**multi-step business workflows**): **scores 2.2 percentage points above Opus 5.5 at medium reasoning effort** and **+4.8 percentage points vs GPT-6 Sol at same setting** (OpenAI announcement; absolute GPT-6.1 Sol percentage not explicitly stated in extracted text).
- OSWorld 2.0 offline (**demanding computer-use workflows**, v2026.08.08, partial reward, max reasoning effort): **outperforms GPT-6 Sol by 7 percentage points** and is **within 2.1 percentage points of Astra** at max effort (OpenAI announcement; absolute score not explicitly stated in extracted text).
- GDP.pdf (**professional questions over complex PDF documents**): stated to score higher than Opus 5.5 with fallbacks and approach GPT-6 Astra at ~1/5 cost per task (OpenAI announcement; exact numeric score not explicitly stated in extracted text).
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Factuality evaluation (difficult prompts, de-identified ChatGPT conversations flagged for prior errors): at low reasoning effort, share of responses with at least one factual error reduced from **11.4% (GPT-6 Sol)** to **7.7% (GPT-6.1 Sol)** (~32% reduction); across tested settings error rate within **1.9 percentage points of GPT-6 Astra** (OpenAI announcement; internal/stress-test evaluation, not a standard public benchmark).
- Terminal-Bench Science 0.1 (**scientific workflows**): more than doubles GPT-6 Sol’s score at max reasoning effort at less than half the cost per task; **$5.47 average cost per task** at max effort (vs $23.21 Opus 5.5, $23.80 Astra). GPT-6 Astra highest at **68.1%** (OpenAI announcement; absolute GPT-6.1 Sol score not explicitly stated in extracted text).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- DeepSWE v1.1 (**complex software-engineering tasks in real codebases**): **matches GPT-6 Astra at roughly one-fifth of the cost** and **eclipses GPT-6 Sol’s best score by 6.4 percentage points** at lower reasoning effort and cost (OpenAI announcement; absolute GPT-6.1 Sol percentage not explicitly stated in extracted text).
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- 1,050,000-token context window (922K max input, 128K output) per OpenAI developer docs; no standalone MRCR/RULER/GraphWalks numeric score reported for GPT-6.1 Sol in reviewed sources.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Several results are reported comparatively without absolute scores in extracted text; scores are capped for limited numeric specificity.

- **Tool use: 91/100.** Strong comparative evidence in agentic/computer-use/professional workflows (AutomationBench improvement vs Opus 5.5/GPT-6 Sol, OSWorld 2.0 near Astra, GDP.pdf near Astra/high vs Opus 5.5 with fallbacks) indicates very strong tool/agent capability; capped by missing absolute scores for key benchmarks in extracted text.
- **Reasoning: 89/100.** Improved factuality and strong scientific/workflow performance claims (Terminal-Bench Science gains, near-Astra factuality on stress set) support high reasoning; capped by lack of canonical public reasoning benchmark numbers in reviewed sources.
- **Context window: 95/100.** Verified 1.05M context (922K max input, 128K output) is excellent for long-horizon tasks; capped slightly by absence of reported long-context retrieval stress scores.
- **Multimodal: 81/100.** Verified text+image input and text output support vision-grounded workflows; capped by limited modality breadth and no extracted multimodal benchmark numbers.
- **Coding: 93/100.** DeepSWE v1.1 results indicate near-Astra, substantially improved coding/agentic software-engineering performance at lower cost; capped by missing absolute DeepSWE score and absence of common public coding benchmarks in reviewed sources.
- **Cost efficiency: 93/100.** Very strong value proposition ($2/$10, $0.10 cached input, cache writes/batch/flex options) with near-frontier performance claims at much lower cost than Astra.
- **Overall Score: 90/100.** Mean of the five non-cost dims (91, 89, 95, 81, 93) = 89.8 → 90 (half-up). Best fit for cost-efficient agentic coding, computer use, and long-context professional workflows where near-Astra capability is desired.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement and developer docs; scores are normalized 1–100 interpretations from verified/comparative figures, not official vendor scores.
- Reference URLs:
  - [GPT-6.1 Sol (OpenAI announcement)](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [GPT-6.1 Sol model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
