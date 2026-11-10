# Gemini 4 Carbon — findings by Iceman

- Source: Google DeepMind/Gemini 4 Carbon
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind’s Gemini 4 Carbon is positioned as the strongest Gemini 4 model for cybersecurity and long-horizon agentic coding, with frontier results on long-context, science, and security benchmarks in Google’s published Gemini 4 comparison.
- **Provider / access:** Google/DeepMind Gemini ecosystem (Gemini app, AI Studio, Gemini API/platform surfaces referenced on Gemini 4 materials). Exact OpenCode Zen route/Free ID not independently verified; local metadata lists `opencode/gemini-4-carbon` and `noFreeId`.
- **Release / knowledge:** Announced as part of Gemini 4 rollout (DeepMind Gemini 4 page announcements, Oct 2026 materials referenced). Knowledge/training cutoffs not independently verified from reviewed sources.
- **IDs:** `gemini-4-carbon` family naming in Google materials; local metadata ID `opencode/gemini-4-carbon`.
- **Context window:** Local metadata states `1M / 1M out`; Gemini 4 page shows GraphWalks evaluated at 256k–1M for Carbon. Exact official input/output limits not fully enumerated in reviewed page text beyond metadata/benchmarks.
- **Modalities:** Local metadata states text, image, speech, video in; text out. Gemini 4 family presented as multimodal.
- **Pricing (as of 2026-11-10):** Local metadata states introductory $2/$10 per 1M, standard $4/$20 per 1M, cached input $0.20 per 1M (95% off); not independently re-verified from a fetched official pricing page in this pass.
- **Architecture:** Proprietary Google DeepMind model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from the Google DeepMind Gemini 4 page performance table (Gemini 4 Carbon column).

Agent / tool use:

- Agents' Last Exam v1.1 (score): **77.4%** (DeepMind Gemini 4 page)
- OSWorld-2.1 (offline subset): **81.5%** (DeepMind Gemini 4 page)
- AutomationBench (Zapier): **53.9%** (DeepMind Gemini 4 page)
- Vending-Bench 2 (bank balance): **$16,484** (DeepMind Gemini 4 page)
- Terminal-Bench 4.0 (AA): **65.2%** (DeepMind Gemini 4 page)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- AA Index v5.0: **59** (DeepMind Gemini 4 page)
- Vals Index v2.2: **70.4%** (DeepMind Gemini 4 page)
- RiemannBench: **80.0%** (DeepMind Gemini 4 page)
- Terminal-Bench-Science 0.1 (AA): **64.8%** (DeepMind Gemini 4 page)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (local metadata mentions HLE-Diamond 69.1% but not independently verified in fetched page text for this pass)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-sweep: **9.6%** (DeepMind Gemini 4 page)
- FrontierSWE 2: **61.2%** (DeepMind Gemini 4 page)
- Terminal-Bench 4.0 (AA): **65.2%** (DeepMind Gemini 4 page)
- CWE-bench (cybersecurity/coding-related): **71.0%** (DeepMind Gemini 4 page)
- SEC-bench Pro: **88.2%** (DeepMind Gemini 4 page)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- GraphWalks 256k to 1M, BFS (F1): **96.2%** (DeepMind Gemini 4 page)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 95/100.** Very strong verified agentic/computer-use and workflow results (Agents' Last Exam 77.4%, OSWorld-2.1 81.5%, AutomationBench 53.9%, Vending-Bench $16,484, TB4.0 AA 65.2%) support frontier tool use; capped by missing several standard template tool-call benchmarks.
- **Reasoning: 95/100.** Strong general/scientific reasoning signals (AA Index 59, Vals Index 70.4%, RiemannBench 80.0%, TB-Science 64.8%) indicate top-tier reasoning; capped by absence of some canonical reasoning benchmarks in reviewed sources.
- **Context window: 99/100.** Excellent verified long-context performance (GraphWalks 96.2% at 256k–1M) and 1M-class positioning (local metadata indicates 1M/1M) support near-maximum context capability; small cap for incomplete independently fetched official spec details.
- **Multimodal: 93/100.** Gemini 4 family multimodal positioning with strong visual/structured understanding signals (Chartography 72.5%, Blueprint-Bench 2 58.6% for Carbon) and broad modality claims in metadata indicate high multimodal capability; capped by limited independently verified modality details in fetched text.
- **Coding: 95/100.** Strong coding/security-engineering results (FrontierSWE 2 61.2%, TB4.0 AA 65.2%, CWE-bench 71.0%, SEC-bench Pro 88.2%) support frontier coding/agentic engineering; capped by mixed SWE-sweep (9.6%) and missing common public coding benchmarks.
- **Cost efficiency: 80/100.** Metadata indicates competitive intro/standard pricing for a frontier model ($2/$10 intro, $4/$20 standard) but access is gated and pricing not fully re-verified in this pass; value is good for capability if available.
- **Overall Score: 95/100.** Mean of the five non-cost dims (95, 95, 99, 93, 95) = 95.4 → 95 (half-up). Best fit for long-horizon agentic coding, cybersecurity-heavy engineering, and complex multimodal/long-context workflows.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Google DeepMind’s Gemini 4 page; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 — Google DeepMind models page (includes Gemini 4 Carbon performance table)](https://deepmind.google/models/gemini/)
  - [Introducing Gemini 4 Carbon (Google blog, linked from Gemini 4 page)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
