# Gemini 3.8 Flash — findings by Iceman

- Source: Google / Gemini 3.8 Flash
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash-series model (as of its model card), optimized for long-horizon software engineering, autonomous agents, and complex enterprise/knowledge workflows with Flash speed and cost efficiency.
- **Provider / access:** Google AI Studio / Gemini API `gemini-3.8-flash`; also distributed via Gemini app, Gemini Enterprise Agent Platform, Google AI Mode, and Google Antigravity. Supports Gemini API tool/function-calling workflows and computer use.
- **Release / knowledge:** Latest update September 2026 per Google AI model page; DeepMind model card published September 2026. Knowledge cutoff stated as March 2026 for some domains, with other domains limited to January 2025 (per model card).
- **IDs:** `google/gemini-3.8-flash` (project id), API model code `gemini-3.8-flash`. No separate Zen free ID verified in cited sources.
- **Context window:** 1,048,576 input tokens / 65,536 output tokens (Google AI model page); DeepMind model card states up to 1M input and 64K output.
- **Modalities:** Text, image, video, audio, and PDF input; text output. Thinking supported (low/medium/high; minimal not supported). Function calling, structured outputs, code execution, computer use, URL context, file search, context caching, and Google Search/Maps grounding supported per Google AI docs.
- **Pricing (as of 2026-11-11):** Introductory Gemini API pricing through 2026-12-31: $0.75/M input and $3.75/M output (including thinking tokens), standard paid tier; $1.50/M input and $7.50/M output starting 2027-01-01 (per Google AI pricing page). Free tier available in Google AI Studio; batch/flex/priority tiers also available. Paid production use and data terms follow Google terms.
- **Architecture:** Proprietary Google DeepMind Gemini-family model; parameter count and training details not publicly disclosed.

### Raw benchmarks found

> Scores below are vendor/self-reported results from official Google/DeepMind sources (model card and model documentation). No independent third-party leaderboard verification was performed in this pass beyond cited official pages.

Agent / tool use:

- Terminal-bench 2.1 (**agentic terminal coding**): **89.4%**.
- Terminal-bench 4.0 (**general agent capabilities**): **19.1%**.
- OSWorld-2.0 (**agentic computer use**, partial score, batch tool enabled): **59.0%**.
- GDPVal-AA v2 (**knowledge work Elo**): **1545**.
- Vals Finance Agent v2 (**financial analyst tasks**): **61.4%**.
- Harvey's Legal Agent Benchmark (**complex legal workflows, all pass rate**): **10.0%**.
- Tau3-Banking / Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- HLE-Verified (**multidisciplinary expert reasoning**): **54.9%**.
- GPQA Diamond / LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / BenchLM overall / Omniscience Accuracy/Hallucination Rate: **no verified public score found** in cited Gemini 3.8 Flash official pages reviewed.
- LABBench2 (**biology real-world research tasks**): **86.2%**.
- BioMysteryBench (**bioinformatics research workflows**): Human Solvable **88.8%**, Human Difficult **56.5%**.

Coding:

- DeepSWE v1.1 (**long-horizon software engineering**): **73.7%**.
- Terminal-bench 2.1 (agentic terminal coding): **89.4%**.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / AA-SciCode / DeepSWE (other naming) / Coding Index: **no verified public score found** in cited Gemini 3.8 Flash official pages reviewed beyond DeepSWE v1.1 and terminal-agent benchmarks.

Long context:

- LVBench (**long video understanding**): **87.8%** (agentic), **87.1%** (static), indicating strong long-context multimodal/video comprehension in vendor evals.
- MRCR / RULER / GraphWalks / text needle-retrieval at 1M: **no verified public score found** in cited Gemini 3.8 Flash official pages reviewed. 1M-token input window is documented.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong agentic/computer-use and enterprise-task evidence (Terminal-bench 2.1 89.4%, OSWorld-2.0 59.0%, Vals Finance 61.4%, GDPVal-AA Elo 1545) shows capable tool-augmented workflows, but very weak general agent breadth on Terminal-bench 4.0 (19.1%), low legal-workflow pass rate (10.0%), and missing Tau/MCP/Claw-style public coverage cap the score.
- **Reasoning: 88/100.** High domain-reasoning results (HLE-Verified 54.9%, LABBench2 86.2%, BioMysteryBench 88.8% human-solvable) indicate strong expert and scientific reasoning for a Flash model, but harder bioinformatics cases fall to 56.5% and several standard reasoning benchmarks (GPQA, LCR, HLE full) are not reported in cited pages.
- **Context window: 90/100.** Large 1M input / 64K output window is documented with strong long-video understanding (LVBench 87.8%/87.1%), supporting practical long-context use; lack of published MRCR/RULER/needle-at-1M retrieval evidence prevents a top-tier measured-reliability score.
- **Multimodal: 90/100.** Broad input coverage (text, image, video, audio, PDF) with strong official long-video/chart/PDF comprehension signals (LVBench 87.8% agentic, CharXiv 86.2%, GDP.PDF 35.0% all-pass but competitive context) supports high multimodal capability; output remains text-only.
- **Coding: 87/100.** Excellent agentic terminal coding (Terminal-bench 2.1 89.4%) and solid long-horizon software engineering (DeepSWE v1.1 73.7%) indicate strong coding/agent performance, but limited visibility on standard SWE-bench/LiveCodeBench metrics in cited official sources caps confidence.
- **Cost efficiency: 96/100.** Introductory Flash pricing ($0.75/$3.75 per 1M tokens through 2026-12-31, with free AI Studio access) offers strong frontier-adjacent value for agentic and coding workloads; the scheduled increase to $1.50/$7.50 after 2026-12-31 and paid-API production costs keep it below a permanent free-tier score.
- **Overall Score: 88/100.** Mean of the five non-cost quality dimensions (Tool 86, Reasoning 88, Context 90, Multimodal 90, Coding 87) = 88.2, rounded half-up to 88; best fit for cost-efficient long-context multimodal agentic coding and enterprise workflows where strong terminal/computer-use performance matters.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-11
- Method: Fresh public web research using official Google AI and Google DeepMind pages fetched in this run; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.8 Flash model page (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
  - [Gemini 3.8 Flash model card (Google DeepMind)](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
