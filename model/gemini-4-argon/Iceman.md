# Gemini 4 Argon — findings by Iceman

- Source: Google DeepMind/Gemini 4 Argon
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind’s Gemini 4 Argon is a frontier model in the Gemini 4 family aimed at complex reasoning, agentic workflows, and enterprise/research problem solving. Public Gemini 4 materials position Argon for hard problems with strong multimodal and long-context capabilities.
- **Provider / access:** Google/DeepMind Gemini ecosystem (Gemini app, Google AI Studio, Gemini API/platform surfaces referenced on the Gemini 4 page). Exact OpenCode Zen route/Free ID not independently verified in this pass; local metadata lists `opencode/gemini-4-argon` and `noFreeId`.
- **Release / knowledge:** Announced as part of Gemini 4 rollout (Google DeepMind Gemini 4 page, announcements dated Sep/Oct 2026 on page). Knowledge/training cutoffs not independently verified from reviewed sources.
- **IDs:** `gemini-4-argon` family naming in Google materials; local metadata ID `opencode/gemini-4-argon` (provider route not independently verified).
- **Context window:** 1M-class long-context positioning is indicated by Gemini 4 materials/benchmarks (e.g. GraphWalks 256k–1M category shown on Gemini 4 page); exact total/input/output limits for Argon not fully specified in reviewed sources. Local metadata states `1M total (262K output; 1M via continuation)`.
- **Modalities:** Gemini 4 family is presented as multimodal; local metadata states text, image, video in and text out. Exact modality matrix for Argon not fully specified in reviewed sources.
- **Pricing (as of 2026-11-10):** Local metadata indicates intro $2/$10 per 1M and standard $4/$20 per 1M with cached input pricing; not independently verified from a fetched official pricing page in this pass.
- **Architecture:** Proprietary Google DeepMind model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are taken from the Google DeepMind Gemini 4 page performance table (Gemini 4 Argon column) unless noted. Some categories/benchmarks differ from this repo’s template labels; unmapped template items are marked not found.

Agent / tool use:

- Agents' Last Exam v1.1 (**computer use/agentic**, score): **69.0%** (DeepMind Gemini 4 page)
- OSWorld-2.1 (**computer use**, offline subset): **74.7%** (DeepMind Gemini 4 page)
- AutomationBench (**knowledge work/workflows**, Zapier): **51.3%** (DeepMind Gemini 4 page)
- Vending-Bench 2 (**agentic task**, bank balance): **$13,718** (DeepMind Gemini 4 page)
- Terminal-Bench 4.0 (AA) (**agentic coding benchmark context**): **57.1%** (DeepMind Gemini 4 page)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- AA Index v5.0 (**general capabilities**): **50** (DeepMind Gemini 4 page)
- Vals Index v2.2 (**general capabilities**): **69.2%** (DeepMind Gemini 4 page)
- RiemannBench (**science and math**): **76.0%** (DeepMind Gemini 4 page)
- Terminal-Bench-Science 0.1 (AA): **52.9%** (DeepMind Gemini 4 page)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-sweep (**agentic coding**): **4.3%** (DeepMind Gemini 4 page)
- FrontierSWE 2 (**agentic coding**): **55.0%** (DeepMind Gemini 4 page)
- Terminal-Bench 4.0 (AA): **57.1%** (DeepMind Gemini 4 page)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- GraphWalks 256k to 1M, BFS (F1): **84.2%** (DeepMind Gemini 4 page)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 88/100.** Verified agentic/computer-use and workflow results (Agents' Last Exam 69.0%, OSWorld-2.1 74.7%, AutomationBench 51.3%, Vending-Bench $13,718) indicate strong tool-use capability; capped by modest scores on some frontier agentic coding suites and missing standard tool-call benchmarks from the template.
- **Reasoning: 89/100.** Solid general/scientific reasoning signals (AA Index 50, Vals Index 69.2%, RiemannBench 76.0%, TB-Science 52.9%) show high competence; capped by lack of several canonical reasoning benchmarks (GPQA/HLE/LCR) in reviewed sources and not-top placement vs peers on some indices.
- **Context window: 94/100.** Verified long-context performance (GraphWalks 84.2% at 256k–1M) and Gemini 4 1M-class positioning support a high context score; capped slightly by incomplete independently verified exact window/output specs for this specific model in reviewed sources.
- **Multimodal: 88/100.** Gemini 4 family multimodal positioning plus strong visual/structured understanding signals (Chartography 71.6%, Blueprint-Bench 2 54.4% on the same Gemini 4 page table for Argon) indicate capable multimodal reasoning; capped by limited independently verified modality/output details.
- **Coding: 87/100.** Verified coding/agentic coding results (FrontierSWE 2 55.0%, Terminal-Bench 4.0 AA 57.1%, CWE-bench 68.0%, SEC-bench Pro 83.4%) are strong but mixed (SWE-sweep 4.3% low); capped by missing common coding benchmarks and below top peers on some coding metrics.
- **Cost efficiency: 82/100.** Local metadata indicates competitive intro/standard pricing ($2/$10 intro, $4/$20 standard) for a frontier model; scored provisionally lower confidence because pricing was not independently re-verified from a fetched official pricing page in this pass.
- **Overall Score: 89/100.** Mean of the five non-cost dims (88, 89, 94, 88, 87) = 89.2 → 89 (half-up). Best fit for complex multimodal reasoning and long-context agentic workflows where strong but not absolute-top coding/agent scores are acceptable.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Google DeepMind’s Gemini 4 page; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 — Google DeepMind models page (includes Gemini 4 Argon performance table)](https://deepmind.google/models/gemini/)
  - [Introducing Gemini 4 Argon (Google blog, linked from Gemini 4 page)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
