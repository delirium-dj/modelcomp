# GPT-6.1 Sol — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-6.1 Sol (`opencode/gpt-6.1-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's near-Astra intelligence model for complex coding, computer use, and professional work at one-fifth of Astra's cost. Upgrades GPT-6 Sol with substantial improvements across agentic tasks.
- **Provider / access:** OpenAI API `gpt-6.1-sol`; ChatGPT Work and Codex (Plus, Pro, Business, Enterprise, Edu). Responses API for tool calling; Chat Completions supported without tool calling.
- **Release / knowledge:** 2026-09-29; knowledge cutoff 2026-04-30
- **IDs:** `opencode/gpt-6.1-sol` (Zen Free ID exists)
- **Context window:** 1,050,000 total (922K input, 128K output). Verified from OpenAI API docs.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $2/1M input, $0.10/1M cached input, $10/1M output. Paid tier — no free tier. Prompts >272K input tokens priced at 2x input/cache and 1.5x output.
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **+2.2pp above Opus 5.5** at medium reasoning effort; +4.8pp from GPT-6 Sol
- OSWorld 2.0 (offline set): **+7pp over GPT-6 Sol** at max reasoning; within 2.1pp of Astra
- GDP.pdf: **higher than Opus 5.5 with fallbacks** at less than half the cost per task
- Terminal-Bench Science 0.1: **more than doubles GPT-6 Sol** at max reasoning; $5.47/task vs $23.21 for Opus 5.5
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- DeepSWE v1.1: **matches GPT-6 Astra** (~77.9%); eclipses GPT-6 Sol by 6.4pp
- Factuality: **7.7% error rate** at low reasoning effort (down from 11.4% for GPT-6 Sol); within 1.9pp of Astra
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- DeepSWE v1.1: **matches GPT-6 Astra** (~77.9%)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- Context window: **1,050,000 total** (922K input, 128K output)
- No long-context retrieval benchmark scores found

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic performance: +2.2pp above Opus 5.5 on AutomationBench, within 2.1pp of Astra on OSWorld 2.0, more than doubles GPT-6 Sol on Terminal-Bench Science. Missing Terminal-Bench 2.1, Tau3, and Claw-Eval scores.
- **Reasoning: 82/100.** Near-Astra intelligence on professional work; factuality error rate of 7.7% (within 1.9pp of Astra). Missing direct GPQA Diamond, HLE, and MRCR/LCR scores.
- **Context window: 95/100.** 1,050,000 total context (922K input) is top-tier. 128K output is good but not industry-leading.
- **Multimodal: 65/100.** Text and image input; text output. No video or audio input support.
- **Coding: 88/100.** Matches GPT-6 Astra on DeepSWE v1.1 (~77.9%), which is SOTA. Missing SWE-bench Verified, LiveCodeBench, and SciCode scores.
- **Cost efficiency: 68/100.** $2/$10 per 1M input/output; $0.10/1M cached input. Mid-range for frontier models — same pricing tier as Gemini 4 Argon introductory.
- **Overall Score: 83/100.** Mean of (85 + 82 + 95 + 65 + 88) / 5 = 83. Best-fit recommendation: strong near-Astra agentic model at a fraction of the cost; ideal for production coding and computer-use workflows where Astra's full price isn't justified.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-01
- Method: public internet research (official OpenAI blog, OpenAI API docs, TechCrunch, The Register, third-party benchmark comparisons); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
