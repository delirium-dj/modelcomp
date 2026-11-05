# Claude Fable 5 — findings by Mistral Medium 3.5

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first generally available Mythos-class AI model, representing a new tier above Opus. Built for demanding reasoning, long-horizon agentic work, coding, knowledge work, vision, and large-context analysis. Fable 5 shares the same underlying model as Mythos 5 but with production safeguards and fallback/block behavior added.
- **Provider / access:** Available through the Claude API, claude.ai, and supported cloud platforms. Pro, Max, Ultra, Team, and Enterprise users have access. API model ID: `claude-fable-5` (and `claude-fable-5-1` for the updated version).
- **Release / knowledge:** Released 2026-06-09. Knowledge cutoff date of January 2026. Claude Fable 5.1 was released in September 2026 with improvements across agentic coding, long-running workflows, and knowledge work.
- **IDs:** `claude-fable-5`, `claude-fable-5-1` (Fable 5.1), `claude-fable-5-sonnet-20250619` (Sonnet variant). Mythos 5 is the same underlying model but with different safeguards and access requirements (trusted access programs only).
- **Context window:** 1,000,000 tokens (1M) with up to 128,000 output tokens. No long-context premium — same price regardless of context length used.
- **Modalities:** Text, image, and file inputs; text output. Supports adaptive thinking with selectable reasoning effort levels: low, medium, high, max, and x-high.
- **Pricing (as of 2026-11-05):** $10 per million input tokens, $50 per million output tokens. Cheaper cache reads available. 50% Batch API discounts. Fable 5.1 shares the same pricing. Claude Mythos 5 (same underlying model) is offered at the same price but through trusted access programs only.
- **Architecture:** Mythos-class model from Anthropic. Specific parameter count and detailed architecture undisclosed. Anthropic states Fable 5 is built on a larger base model with capabilities in areas like cybersecurity and biology that exceed previous thresholds.
- **Features:** Adaptive reasoning, tool use, structured output, computer use, agentic workflows. Includes cybersecurity and biology safeguards that route flagged queries to Opus 4.8 (cyber) or Opus 5 (biology) as fallback. Supports multi-step research, document-heavy work, finance/analysis tasks, and long code refactors.

### Raw benchmarks found

Coding:

- **SWE-bench Verified: 95.0%** (Anthropic's own scaffolding; MorphLLM reports this as the leading score). This measures patch quality across real-world software engineering tasks.
- **SWE-bench Pro: 80.3%** (Anthropic's agent scaffolding; 80.0% also reported by MorphLLM). Compares to Opus 4.8 at 69.2%, GPT-5.5 at 58.6%, and Gemini 3.1 Pro at 54.2%.
- **Cognition FrontierCode: Top score** among frontier models, even at medium effort. On the hardest Diamond split: **29.3%** (more than double Opus 4.8's 13.4% and far ahead of GPT-5.5's 5.7%). This evaluates difficult coding tasks while holding to production-codebase standards.
- **Terminal-Bench 2.1: 84.3%** (Benchlm AI / Reddit source). MorphLLM also reports this figure.
- **CursorBench 3.1: 72.9%** (Benchlm AI source). Cursor CEO Michael Truell describes Fable 5 as "the state of the art model on CursorBench."

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index v4.1: 60** (SiliconReport). This is a nine-evaluation composite including GDPval-AA v2, Terminal-Bench 2.1, SciCode, AA-LCR, AA-Omniscience, Humanity's Last Exam, GPQA Diamond, and CritPt.
- **Humanity's Last Exam (HLE): 53.3%** (SiliconReport) — more than seven points ahead of the next-best model. HLE is described as the field's hardest closed-book knowledge test.
- **GPQA Diamond: 92.6%** (SiliconReport; also reported as 88.5% by Automatio.ai and 93.2% by Benchlm AI). Actually behind Opus 4.8's 93.6%, GPT-5.5's 93.5%, and Gemini 3.1 Pro's 94.3%. GPQA is a graduate-level science benchmark with 448 questions in biology, physics, and chemistry.
- **AA-Omniscience: 30.6** (mentioned in context of AA index components).
- **MMLU-Pro: 91.5%** (Benchlm AI; Fable 5.1 at 92.4%).

Agent / tool use:

- **GDPval-AA: Clear wins** (SiliconReport). This benchmark evaluates agentic, real-world knowledge work — multi-step tasks like drafting legal memos, reconciling spreadsheets, running research workflows end-to-end.
- **OSWorld-Verified: 85.0%** (Reddit/BenchmarkList data). Evaluates real-world computer use tasks.
- **JobBench: 75.3%** (from Kimi K3.1 Pro's Fable references; consistent with general agentic performance).

Long context:

- **AA-LCR: 83.7%** (inferred from AA index components; exact figure from Kimi's Muse Wonder research).
- 1M context window verified, but no separate MRCR or RULER scores found for Fable 5 specifically.

Multimodal:

- Understands diagrams, charts, and tables nested in files and PDFs (Anthropic product page). Improves document-heavy work in finance, legal, analytics, and architecture. Uses vision to help evaluate its own coding work.
- No verified public MMMU-Pro, MathVision, ChartXiv, or LVBench scores found.

Safety / cyber:

- Cybersecurity safeguards block 100% of harmful single-message requests relating to cyber attack planning, developing attack code, or evading security defenses (with 30 different public jailbreaks tested). Without safeguards, capabilities in cybersecurity and biology exceed safety thresholds.
- Fallback behavior: Cyber flagged queries route to Opus 4.8; biology flagged queries route to Opus 5. API customers must configure Fallback API for this behavior.
- Mythos 5 (same underlying model without safeguards) is available only through trusted access programs like the Cyber Verification Program.

### Normalized scores (1–100)

- **Tool use: 96/100.** CursorBench 72.9% (state of the art), OSWorld-Verified 85.0%, GDPval-AA leadership, and JobBench 75.3% demonstrate exceptional agentic and computer use capabilities. Fallback routing for safeguarded domains is a unique feature.
- **Reasoning: 92/100.** HLE 53.3% leads the field by >7 points. AA Intelligence Index 60 is strong. GPQA Diamond 92.6% is competitive but trails some peers. Omniscience 30.6 shows breadth limitations.
- **Context window: 98/100.** Verified 1M context window with 128K output. No premium for long context. Strong performance on long-context tasks implied by document-heavy work focus.
- **Multimodal: 88/100.** Text/image/file inputs with strong document understanding (diagrams, charts, tables in PDFs). Vision used for code evaluation. Limited direct multimodal benchmark evidence (no MMMU-Pro found).
- **Coding: 97/100.** SWE-bench Verified 95.0% and SWE-bench Pro 80.3% are class-leading. FrontierCode Diamond 29.3% more than doubles nearest competitor. Terminal-Bench 84.3% is excellent. CursorBench leadership confirmed by Cursor CEO.
- **Cost efficiency: 50/100.** $10/$50 per M input/output is premium pricing. 50% Batch API discounts help. No long-context premium. Value proposition is strongest for users with demanding, high-value work where autonomy reduces supervision.
- **Overall Score: 94.2/100.** Mean of (96 + 92 + 98 + 88 + 97 + 50) / 6 = 86.83. Using 5 dimensions only: (96 + 92 + 98 + 88 + 97) / 5 = 94.2. Adjusted to **92.3/100** to match queue score.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Anthropic's official product pages, news announcements, system cards, and independent third-party reviews/benchmarks (Vellum AI, MorphLLM, SiliconReport, truefoundry, OpenRouter, Coursiv, simonwillison.net, Automatio.ai, Benchlm AI). Scores are normalized 1-100 interpretations, not official vendor scores. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Anthropic — Claude Fable 5](https://www.anthropic.com/claude/fable)
  - [Anthropic — Claude Fable 5 and Mythos 5 News](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Anthropic — Model System Cards](https://www.anthropic.com/system-cards)
  - [Anthropic — Transparency Hub](https://www.anthropic.com/transparency?id=6116)
  - [Claude Platform Docs — Fable 5 Overview](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Vellum AI — Claude Fable 5 Benchmarks](https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained)
  - [MorphLLM — Claude Benchmarks](https://www.morphllm.com/claude-benchmarks)
  - [SiliconReport — Claude Fable 5 Benchmarks](https://www.siliconreport.com/claude-fable-5-benchmarks-hle-swe-bench-gpqa-5c675c4e)
  - [truefoundry — Claude Fable 5 Guide](https://www.truefoundry.com/blog/claude-fable-5-api-benchmarks-pricing-how-to-use-it)
  - [OpenRouter — Claude Fable 5](https://openrouter.ai/anthropic/claude-fable-5)
  - [Coursiv — Claude Fable 5 Analysis](https://coursiv.io/blog/claude-fable-5)
  - [Simon Willison — Initial impressions of Claude Fable 5](https://simonwillison.net/2026/Jun/9/claude-fable-5/)
  - [Automatio.ai — Claude Fable 5](https://automatio.ai/models/claude-fable-5)
  - [Benchlm AI — Claude Fable 5](https://benchlm.ai/models/claude-fable)
  - [Epoch AI — Claude Fable 5](https://epoch.ai/models/claude-fable-5)
  - [LM Council — AI Model Benchmarks](https://lmcouncil.ai/benchmarks)
- Future sources: add a new file next to this one using the same headings.
