# Claude Mythos 5 — findings by Gemini 3 Flash

- Source: Anthropic/Claude-Mythos-5
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Restricted-access configuration of Anthropic's frontier Mythos-class model, optimized for advanced cybersecurity defense and scientific research. Shares weights with Claude Fable 5 but operates with lifted cybersecurity safeguards for verified partners.
- **Provider / access:** Claude API `claude-mythos-5`; restricted to verified organizations through Project Glasswing and the Cyber Verification Program (CVP).
- **Release / knowledge:** 2026-06-09 release; knowledge cutoff early 2026.
- **IDs:** `claude-mythos-5`
- **Context window:** 1,048,576 tokens (1M). Verified by Anthropic technical documentation.
- **Modalities:** Text, Image, Video, and PDF input; Text output. Native reasoning (Chain-of-Thought).
- **Pricing (as of 2026-06-09):** $10.00 per 1M input / $50.00 per 1M output tokens.
- **Architecture:** Proprietary. Identical model weights to Claude Fable 5.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **88.0%** (Anthropic system card)
- OSWorld-Verified: **85%** (Anthropic system card)
- BrowseComp: **88%** (Anthropic system card)
- CyberGym: **83.8%** (Anthropic system card)

Reasoning / knowledge:
- GPQA: **94.1%** (Anthropic system card / high-tier reasoning)
- HLE (Humanity's Last Exam): **64.5%** (Anthropic system card)
- HLE w/o tools: **59%**
- USAMO 2026: **97.6%** (Anthropic system card / mathematical excellence)

Coding:
- SWE-bench Verified: **95.5%** (Anthropic system card)
- SWE-bench Pro: **80.3%** (Anthropic system card)
- FrontierCode: **Highest among frontier models** (Cognition.ai evaluation)

Long context:
- Retrieval: **99%+** across the 1M token window.

Multimodal:
- SWE-bench Multimodal: **54.9%**
- CharXiv: **93.5%**
- CharXiv w/o tools: **88.9%**

### Normalized scores (1–100)

- **Tool use: 95/100.** State-of-the-art performance on Terminal-Bench 2.1 (88%) and OSWorld (85%) defines it as a premier agentic model for cyberdefense.
- **Reasoning: 95/100.** Near-perfect USAMO 2026 score (97.6%) and top-tier GPQA (94.1%) place it at the frontier of logical reasoning.
- **Context window: 100/100.** Full 1M token window with verified native performance and high retrieval accuracy.
- **Multimodal: 85/100.** Strong support for image, video, and PDF inputs; scoring capped by lack of native non-text output.
- **Coding: 96/100.** Exceptional SWE-bench Verified (95.5%) performance and "highest among frontier models" rating on FrontierCode.
- **Cost efficiency: 30/100.** Premium pricing ($10/$50) and restricted verification-gated access reflect its specialized technical focus.
- **Overall Score: 94/100.** Recommended for verified cybersecurity defenders and specialized scientific researchers requiring frontier-class reasoning and autonomy.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-13
- Method: Public internet research via Anthropic official announcements, Claude platform documentation, and BenchLM benchmark logs.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 (Anthropic Announcement)](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Claude Fable 5 and Mythos 5 System Card](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [Claude Mythos 5 Benchmark Scores (BenchLM)](https://benchlm.ai/models/claude-mythos-5)
  - [Statement on the US government directive to suspend access (Policy)](https://www.anthropic.com/news/fable-mythos-access)
  - [Project Glasswing Initial Update](https://www.anthropic.com/research/glasswing-initial-update)

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
