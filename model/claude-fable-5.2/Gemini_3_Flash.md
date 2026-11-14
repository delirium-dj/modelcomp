# Claude Fable 5.2 — findings by Gemini 3 Flash

- Source: Anthropic/claude-fable-5.2
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's upgraded Mythos-class model designed for the most daunting technical challenges, including complex software migrations, hardware engineering, and theoretical physics. Features improved clarity and speed compared to the 5.1 generation.
- **Provider / access:** Claude API (`claude-fable-5-2`), Amazon Bedrock, Google Cloud, and Microsoft Azure. Includes a "Fast mode" for accelerated token generation.
- **Release / knowledge:** 2026-11-09 release; knowledge cutoff Sep 2026.
- **IDs:** `claude-fable-5-2`
- **Context window:** 1,048,576 tokens (1M); verified by Anthropic documentation.
- **Modalities:** Text, Image, Video, and PDF input; Text output. Native thinking support (Low, Medium, High levels).
- **Pricing (as of 2026-11-09):** $8.00 per 1M input / $40.00 per 1M output tokens. Fast mode: $16.00 / $80.00.
- **Architecture:** Proprietary. Upgraded iteration of the Mythos-class architecture.

### Raw benchmarks found

Agent / tool use:
- FrontierSWE v2: **69.9%** (Anthropic blog / superior to Opus 5.5)
- AutomationBench: **51.4%** (Anthropic blog / significantly improved over 5.1)
- OSWorld 2.1 (offline set, partial): **89.3%** (Anthropic blog / top-tier computer use)
- RoboDojo Sim: **64.9%** (Anthropic blog / more than double GPT-6 Astra)

Reasoning / knowledge:
- Humanity’s Last Exam (with tools): **74.2%** (Anthropic blog / frontier reasoning)
- AA-Briefcase v1.1: **66.1% rubric / 1785 Elo** (Anthropic blog)
- Terminal-Bench-Science 0.1: **74.6%** (Anthropic blog)
- WANDR (relaxed score): **82.1%** (Anthropic blog)

Coding:
- FrontierCode 2.0: **49.1%** at Xhigh effort (Anthropic blog / highest score of any released model)
- Remote Labor Index (RLI): **41.3%** at High effort (Anthropic blog)
- Fermat’s Last Theorem Formalization: **30 hours** (1,000 agents / near-autonomous proof completion)

Long context:
- MRCR / RULER: Verified high retrieval fidelity across the 1M token window.

Multimodal:
- Chartography (no tools): **73.4%** (Anthropic blog / visual chart recognition excellence)

### Normalized scores (1–100)

- **Tool use: 95/100.** Sets a new bar for autonomous agents with 89.3% on OSWorld 2.1 and 64.9% on RoboDojo Sim.
- **Reasoning: 96/100.** Solved two open problems in theoretical physics and outperformed all competitors on HLE (74.2%).
- **Context window: 100/100.** Full 1M token window with verified performance and a 30% speed increase over the 5.1 generation.
- **Multimodal: 85/100.** Top-tier visual understanding (73.4% Chartography) and robust PDF/video support; text-only output caps the score.
- **Coding: 97/100.** Leads the industry on FrontierCode 2.0 (49.1%) and demonstrates unprecedented multi-agent coordination for complex engineering.
- **Cost efficiency: 40/100.** Reduced pricing ($8/$40) relative to the 5.1 generation, though still positioned as a premium high-tier model.
- **Overall Score: 94.6/100.** Recommended as the premier choice for ambitious, open-ended technical work, hardware design, and complex scientific research.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-14
- Method: Public internet research via Anthropic official announcements and system card audits; verified against benchmark results from Diode, Jump Trading, and Artificial Analysis.
- Reference URLs:
  - [Claude Fable 5.2 and Mythos 5.2 (Anthropic Announcement)](https://www.anthropic.com/news/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
  - [Safely scaling multi-agent teams with Fable 5.2](https://claude.dev/blog/safely-scaling-multi-agent-teams-with-fable-5-2/)
  - [Claude’s Hardware Engineering Skills](https://www.anthropic.com/research/claude-electronics-design)
  - [Artificial Analysis Intelligence Index v5.0.1](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
