# Gemini 3.5 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (no "Free" wording; a free Google AI Studio API tier exists)
- **Short description:** Google DeepMind's I/O 2026 Flash-tier multimodal model, succeeding Gemini 3 Flash (Dec 2025) and built on its reasoning foundation with configurable thinking levels. Its distinctive strength is agentic tool orchestration rather than raw reasoning: it recorded the highest MCP Atlas score of any model tracked at launch.
- **Provider / access:** Google — Gemini API, Google AI Studio (free tier with limited rate limits), Vertex AI. Proprietary, closed weights; API only.
- **Release / knowledge:** General availability 2026-05-19 (announced at Google I/O). Knowledge cutoff not stated in the sources checked.
- **IDs:** `gemini-3.5-flash` (Gemini API / Vertex AI). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 tokens. Verified from Google's model page as compiled by HokAI (checked 2026-08-27).
- **Modalities:** text, image, audio, video and PDF input in a single call; text + tool-call output; function calling and structured output fully supported, including mixing built-in tools such as Google Search; reasoning yes (thinking levels, default medium).
- **Pricing (as of 2026-09-18):** $1.50 / 1M in and $9.00 / 1M out, with cached input at $0.15 / 1M (90% discount). Blended 3:1 price $3.38 / 1M. Notably ~3× Gemini 3 Flash's previous per-token rate. Free AI Studio tier exists but hits request caps quickly at volume.
- **Architecture:** proprietary, natively multimodal Transformer; Google has not disclosed parameter count or whether it is MoE. Sibling Gemini 3.5 Pro was announced the same day and remained in limited Vertex AI enterprise preview.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas (tool orchestration): **83.6%** — the highest recorded score as of June 2026 (HokAI/vendor)
- Terminal-Bench 2.1 / Terminal-Bench 2.0: **no verified public score found** for this checkpoint
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**
- Cost-per-task context cited by the vendor: a coding-agent loop of 1M input + 200K output ≈ $3.30; a 1,000-turn support workload at 2K in / 500 out per turn ≈ $7.50

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (HokAI/vendor)
- MMMU-Pro: **84.2%** — described as the highest multimodal reasoning result Artificial Analysis had recorded at launch
- HLE: **no verified public score found**
- ARC-AGI-2: **72.1%** versus Gemini 3.1 Pro's 77.1% — hardest abstract-reasoning tasks still favour the Pro tier
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **55** (trails GPT-5.5's 60)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **78%** (vendor-reported, 2026-05-19; ranked 15th of 28 tracked models on HokAI)
- SWE-bench Pro: **no verified public score found** for this checkpoint (Claude Opus 4.7 was cited separately at 64.3%)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**
- Output speed: **289 tok/s** median — roughly 4× GPT-5.5 and Claude Opus 4.7 (Artificial Analysis)

Long context:

- long-context recall above 100K tokens had **not been independently published** for the 3.5 generation at check time; the closest reference point is Gemini 3.1 Pro's demonstrated recall at large depths, so the 1M window is partly unmeasured.

### Normalized scores (1–100)

- **Tool use: 85/100.** 83.6% on MCP Atlas — the best tool-orchestration result of any model in this scan — plus structured multi-tool calls; capped by the complete absence of Terminal-Bench/Tau3/GDPval numbers for the checkpoint.
- **Reasoning: 85/100.** GPQA Diamond 90.4% and MMMU-Pro 84.2% are strong, but ARC-AGI-2 72.1% and an AA index of 55 show a deliberate Pro-tier gap on the hardest tasks.
- **Context window: 95/100.** 1,048,576 tokens with 65,536 output and full multimodal ingestion; unmeasured recall above 100K keeps it below the maximum.
- **Multimodal: 88/100.** Text, image, audio, video and PDF in one call with a launch-leading MMMU-Pro score; text-only output.
- **Coding: 80/100.** 78% SWE-bench Verified is solid for a mid-tier model, but the missing harder harnesses and the 3× price increase over Gemini 3 Flash cap the value story.
- **Cost efficiency: 62/100.** $1.50/$9.00 per 1M with a 90%-off cached rate is mid-priced rather than cheap, and it is 3× the prior Flash generation; free AI Studio candidates nothing for production volume.
- **Overall Score: 83/100.** (85 + 85 + 95 + 88 + 80 + 62) / 6 = 82.5 → **83**. Best fit: MCP-based coding and tool agents that need wide multimodal ingestion and are willing to pay a Flash-plus rate.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Google model page and Artificial Analysis figures as compiled by HokAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.