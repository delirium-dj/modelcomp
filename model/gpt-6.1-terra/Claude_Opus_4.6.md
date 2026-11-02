# GPT-6.1 Terra — findings by Claude Opus 4.6

- Source: OpenAI (`openai/gpt-6.1-terra`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's mid-tier, efficiency-focused model designed for high-volume cost-sensitive automation, everyday agentic tasks, visual reasoning, and computer-use/UI workflows. A direct upgrade to GPT-5.6 Terra, positioned below GPT-6.1 Sol and GPT-6 Astra.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`), GitHub Copilot, ChatGPT (Plus/Pro/Team/Enterprise/Edu tiers), Codex, OpenRouter. Responses API.
- **Release / knowledge:** October 2026; knowledge cutoff not publicly disclosed
- **IDs:** `openai/gpt-6.1-terra`
- **Context window:** 1,050,000 tokens (~1.05M) total; 128,000 max output — verified via emergent.sh / OpenAI docs
- **Modalities:** Text, image/screenshot in; text out; reasoning yes (low/medium/high/xhigh/max effort); tool calls yes; JSON mode yes
- **Pricing (as of 2026-11):** $1.00 / $5.00 per 1M input/output tokens
- **Architecture:** Proprietary closed-weight model; architecture details undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (max effort): **50.3%** (source: datacamp.com / kingy.ai — massive leap over GPT-5.6 Terra's 21.5%)
- Agents' Last Exam (medium effort): **57.6%** (source: openai.com — matches GPT-6 Astra at 1/10 cost)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found specific to this model
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- DeepSWE: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- ~1.05M token context window verified; no MRCR/RULER/GraphWalks retrieval benchmarks found

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 50.3% at max effort is a substantial jump over predecessor but below top-tier. Agents' Last Exam 57.6% at medium effort matching Astra at 1/10 cost demonstrates excellent cost-adjusted tool capability. Strong computer-use and visual reasoning focus.
- **Reasoning: 78/100.** No specific GPQA or HLE scores found. Enhanced alignment with lower hallucination rates noted. Positioned as a high-speed routine reasoning model rather than deep scientific reasoning. Capped by lack of reasoning benchmark evidence.
- **Context window: 88/100.** ~1.05M native context with 128K max output is competitive with the largest frontier offerings.
- **Multimodal: 55/100.** Supports text and image/screenshot inputs with text output. Designed for visual reasoning and UI workflow interpretation. No audio or video input. No specific vision benchmark scores found.
- **Coding: 75/100.** Terminal-Bench performance confirms basic coding competence. Positioned below specialized coding models (GPT-6.1 Sol, Claude Sonnet 5.5). Designed for routine automation rather than deep software engineering. Capped by lack of SWE-bench/LiveCodeBench scores.
- **Cost efficiency: 78/100.** $1/$5 per 1M tokens is very competitive — roughly half of standard Sonnet pricing and 1/10 of Astra. Excellent value for high-volume automation tasks.
- **Overall Score: 75/100.** Mean of (80 + 78 + 88 + 55 + 75) / 5 = 75.2, rounded to 75. A cost-effective mid-tier model excelling at high-volume automation and visual reasoning tasks, trading peak capability for speed and low cost.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-6.1 Terra Announcement](https://openai.com)
  - [OpenRouter GPT-6.1 Terra Listing](https://openrouter.ai)
  - [DataCamp GPT-6 Series Comparison](https://datacamp.com)
  - [Emergent.sh Model Specs](https://emergent.sh)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
