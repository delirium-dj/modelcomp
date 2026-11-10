# GPT-6.1 Terra — findings by Iceman

- Source: OpenAI/GPT-6.1 Terra
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI’s GPT-6.1 Terra is a fast, efficient model for visual reasoning, precise computer use, coding, and clear writing, designed to balance capability, speed, and cost for high-volume professional workflows.
- **Provider / access:** OpenAI ChatGPT Work/Codex (availability per announcement) and OpenAI API as `gpt-6.1-terra` (Responses/Chat Completions supported per developer docs). Local metadata lists `opencode/gpt-6.1-terra` and `noFreeId`.
- **Release / knowledge:** Announced in 2026 (OpenAI “GPT-6.1 Terra” page). Developer docs list knowledge cutoff June 1, 2026.
- **IDs:** `gpt-6.1-terra`.
- **Context window:** 1,050,000 context window; 922,000 maximum input tokens; 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output (OpenAI developer docs). Local metadata states text/image in, text out.
- **Pricing (as of 2026-11-10):** Standard API pricing $1 / 1M input tokens, $0.05 / 1M cached input tokens, $1.25 / 1M cache writes (30-min retention shown), $5 / 1M output tokens (OpenAI docs/announcement). Prompts >272K input priced at 2x input/cache and 1.5x output for full request; Batch/Flex 50% lower, Fast mode 2x, regional processing premium applies.
- **Architecture:** Proprietary OpenAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s GPT-6.1 Terra announcement and OpenAI developer docs. Some results are reported comparatively without absolute scores in extracted text.

Agent / tool use:

- Agents’ Last Exam (**professional tasks including computer use / multi-step work**): at medium reasoning effort, scores **+15 percentage points vs GPT-5.6 Terra** at about one-third the cost, and performs on par with GPT-6 Astra at ~1/10 price per token (OpenAI announcement; absolute GPT-6.1 Terra score not explicitly stated). At max effort, over 3x as token efficient as Claude Opus 5.5 and ~1/4 its price per token (~9x lower cost per task), and completes tasks over 3x faster than GPT-6 Astra and GPT-6.1 Sol.
- OSWorld 2.1 (**desktop app multistep tasks**): at medium reasoning effort, surpasses GPT-5.6 Terra’s best score at a fraction of cost per task (OpenAI announcement; absolute score not explicitly stated).
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- MMMU-Pro (**visual reasoning benchmark**): outperforms GPT-5.6 Terra at every reasoning setting and nearly matches GPT-6 Astra and GPT-6.1 Sol at much lower cost (OpenAI announcement; absolute score not explicitly stated).
- Internal factuality benchmark (error-inducing prompts): error rate at low reasoning effort fell from **53.6% (GPT-5.6 Terra)** to **16.7% (GPT-6.1 Terra)**; at maximum effort fell by 18 percentage points to **4.3%**, nearly matching GPT-6 Astra and GPT-6.1 Sol (OpenAI announcement; internal stress-test evaluation).
- Terminal-Bench-Science 0.1 (**scientific workflows with code**): at max reasoning, surpasses GPT-6.1 Sol at lower cost and comes within 5 points of Opus 5.5 at less than 1/5 estimated cost (OpenAI announcement; absolute GPT-6.1 Terra score not explicitly stated).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- Terminal-Bench 4.0 (**coding agents solving command-line problems**): **50.3%** at maximum reasoning effort (OpenAI announcement), more than double GPT-5.6 Terra’s published score of 21.5%.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,050,000-token context window (922K max input, 128K output) per OpenAI developer docs; no standalone MRCR/RULER/GraphWalks numeric score reported in reviewed sources.

Multimodal:

- Text and image input supported; strong visual reasoning/computer-use positioning with MMMU-Pro comparative results (absolute not extracted). No additional multimodal benchmark numbers clearly extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Several key results are comparative without absolute scores; scores are capped accordingly.

- **Tool use: 91/100.** Strong comparative computer-use/agentic performance (Agents’ Last Exam parity with Astra at much lower cost in stated setting, OSWorld 2.1 improvement over GPT-5.6 Terra, emphasis on precise computer use) indicates high tool/agent capability; capped by missing absolute scores for key benchmarks.
- **Reasoning: 88/100.** Major factuality gains and strong visual/scientific reasoning claims (MMMU-Pro near Astra/Sol at lower cost, Terminal-Bench-Science near Opus 5.5 comparative) support high reasoning; capped by limited absolute canonical reasoning benchmark numbers.
- **Context window: 95/100.** Verified 1.05M context (922K max input, 128K output) is excellent for long-horizon and high-volume workflows; capped slightly by absence of reported long-context retrieval stress scores.
- **Multimodal: 86/100.** Verified text+image input and strong comparative visual reasoning/computer-use positioning (MMMU-Pro, screen/document interpretation) indicate high multimodal utility; capped by text-only output and limited extracted multimodal benchmark numerics.
- **Coding: 90/100.** Verified Terminal-Bench 4.0 50.3% at max effort (more than double GPT-5.6 Terra’s 21.5%) demonstrates strong coding/agentic coding gains; capped by missing broader public coding benchmark coverage in reviewed sources.
- **Cost efficiency: 94/100.** Very strong pricing ($1/$5, $0.05 cached input) with high capability-per-dollar claims and broad processing discounts makes it highly cost-efficient for volume workflows.
- **Overall Score: 90/100.** Mean of the five non-cost dims (91, 88, 95, 86, 90) = 90.0 → 90. Best fit for cost-efficient visual reasoning, computer use, coding, and long-context professional automation where high throughput and low per-token cost matter.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement and developer docs; scores are normalized 1–100 interpretations from verified/comparative figures, not official vendor scores.
- Reference URLs:
  - [GPT-6.1 Terra (OpenAI announcement)](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [GPT-6.1 Terra model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
