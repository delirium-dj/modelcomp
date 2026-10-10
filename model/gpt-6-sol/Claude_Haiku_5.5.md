I'll start by searching for public information on "GPT 6 Sol" to check whether it exists and has verifiable benchmarks.The first results give the model ID, context window, and pricing, but they conflict in places. I'll look for official benchmark numbers next.# GPT-6 Sol — findings by Claude Haiku 5.5

- Source: OpenAI/GPT-6 Sol (`gpt-6-sol`), with OpenRouter ID `openai/gpt-6-sol`
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol. Paid API only. No free tier ID verified.
- **Short description:** GPT-6 Sol is OpenAI's mid-tier model in the GPT-6 family, between Astra (flagship) and Luna (low-cost). It is aimed at coding and agentic workflows. Launched 2026-09-22. Some aggregator pages call it "GPT-6 Ultra" or describe a freemium tier, but these claims are unsupported by primary sources and were not used.
- **Provider / access:** OpenAI API as `gpt-6-sol`, which aggregators list for both Responses and Chat Completions. OpenRouter as `openai/gpt-6-sol`, plus a `:batch` variant. No official OpenAI model page was retrieved to confirm the API details directly. ChatGPT Free and Go users get Luna, not Sol.
- **Release / knowledge:** 2026-09-22. Knowledge cutoff: no verified public score found.
- **IDs:** `openai/gpt-6-sol` (OpenRouter), `gpt-6-sol` (OpenAI API). No Free ID exists on Zen that I could verify.
- **Context window:** 1,050,000 total (OpenRouter), with max output 128K (Vals and CometAPI). Verified by two aggregators, not by an OpenAI primary source.
- **Modalities:** Input: text, image, and file/PDF (OpenRouter, Vals). Video and audio not supported (Vals). Output: text only. Reasoning effort levels none, low, medium, high, xhigh, and max (CometAPI, AA). Tool calls and structured output are listed by aiindigo, but that source is secondary. JSON mode: no verified public score found.
- **Pricing (as of 2026-10-10):** $2.00 input / $10.00 output per 1M tokens (OpenRouter, Vals). Cached input: no verified public score found. Paid only ($). No free API tier verified.
- **Architecture:** Proprietary. Weights private (Vals). Parameter count and MoE status: no verified public score found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.15%** (Vals.ai, rank #6 of 73)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public Elo found**. Artificial Analysis reports Sol dropped about 100 Elo versus GPT-5.6 Sol (AA, GDPval-AA v2.1, max effort).
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **SWE Atlas QnA 58%** (Artificial Analysis, Codex harness, max)
- Also: AutomationBench-AA **62%** (AA, max); Terminal-Bench 4.0 **43.9%** (AA, max); Terminal-Bench 4.0 **44.44%** (Vals.ai)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **47.9%** (Artificial Analysis, max effort; xhigh 46.3%)
- LCR / MLCR: **81.3%** (Artificial Analysis AA-LCR, xhigh)
- CritPt: **30.9%** (Artificial Analysis, max effort)
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / no verified rank** (AA, max effort; AA's median for the tier is 26. Note that AA's page marks the max-effort variant as deprecated for non-default workloads.)
- Omniscience Accuracy / Hallucination Rate: **no verified accuracy found / 60%** (AA-Omniscience, max effort, down from 92% for GPT-5.6 Sol)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **57.6%** (Artificial Analysis, max effort)
- Vibe Code Bench: **87.82%** (Vals.ai; rank truncated in source snippet)
- DeepSWE / Coding Index / other: **DeepSWE v1.1 68.8%** (secondary source tosea.ai, $2.74/task); **Artificial Analysis Coding Agent Index 57** (Codex harness, max, up 2 from GPT-5.6 Sol)

Long context:

- no long-context retrieval reported (no verified MRCR, RULER, or GraphWalks score at 512K or above)

### Normalized scores (1-100)

- **Tool use: 72/100.** Terminal-Bench 2.1 83.15% (Vals, #6 of 73) sits between the mid and frontier bands. Terminal-Bench 4.0 is 43.9% and AutomationBench-AA is 62%. Capped by the lack of any verified Tau3 score, no absolute GDPval Elo, and a roughly 100 Elo drop versus GPT-5.6 Sol on GDPval.
- **Reasoning: 80/100.** HLE at 47.9% meets the frontier threshold of 40%+. CritPt is 30.9%. The AA Index of 48 is below the frontier threshold of 60. GPQA is unverified. Capped by the Index and the missing GPQA.
- **Context window: 95/100.** Verified total of 1.05M falls in the ">=1M" tier. The 100 level requires verified retrieval at 98% or above at 512K+, which I could not find.
- **Multimodal: 78/100.** Text, image, and PDF/file input, text output. No video or audio. Falls in the "+video/PDF in" band (75-90), set toward the lower end because video is unsupported.
- **Coding: 84/100.** SciCode 57.6% meets the 55%+ frontier threshold. Terminal-Bench 2.1 at 83.15% is just under the 85% threshold. DeepSWE at 68.8% is under the 74% threshold, and that figure comes from a secondary source. Capped by the lack of verified SWE-bench Verified or LiveCodeBench scores.
- **Cost efficiency: 74/100.** Not counted in Overall. At $2/$10 per 1M, the price is between the ~$1.25/$4.25 anchor (88) and the $3/$15 anchor (60). Artificial Analysis reports about $1.06 per task for the Index at max effort, roughly half the cost of GPT-5.6 Sol.
- **Overall Score: 81.8/100.** Mean of Tool use (72), Reasoning (80), Context window (95), Multimodal (78), and Coding (84) = 409 / 5 = 81.8. Best fit: a strong choice for coding and agentic workloads that need a 1M context and cost less per task than GPT-5.6 Sol. It is not the best pick for the hardest scientific reasoning, where Astra leads.

---

## Signature

- Provided by: **Claude Haiku 5.5 (anthropic/claude-haiku-5-5)** — 2026-10-10
- Method: public internet research via web search. Primary sources were Artificial Analysis, Vals.ai, OpenRouter, and launch coverage. Several claims rest on secondary aggregators (eesel, CometAPI, tosea, aiindigo), which were used for context only where marked. Conflicting claims were excluded: aiindigo's "GPT-6 Ultra" flagship and "freemium" pricing, and an OpenAI Help Center page that still lists Sol as a GPT-5.6 model. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
