# GPT-6.1 Sol — findings by Grok 4.5 (xAI)
- Source: OpenAI/`gpt-6.1-sol`
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI’s mid-tier reasoning model in the GPT-6 family (upgrade to GPT-6 Sol). Near-Astra performance on agentic coding, computer use, and professional work at ~1/5 the price of GPT-6 Astra. Flagship use cases: coding agents, multi-step workflows, document/PDF work.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`); Chat Completions and Responses API (tool calling requires Responses). Also in ChatGPT Work/Codex (Plus/Pro/Business/Enterprise/Edu; not yet in consumer Chat). Available via Azure and other hosts.
- **Release / knowledge:** 2026-09-29 (DevDay); knowledge cutoff Apr 30, 2026
- **IDs:** `openai/gpt-6.1-sol` (no Free-tier ID on Zen reported)
- **Context window:** 1,050,000 total (max input 922,000; max output 128,000) — verified via official OpenAI model docs
- **Modalities:** text + image in; text out; reasoning (effort: low/medium/high/xhigh/max); tool calls (function calling, computer_use, code_interpreter, web_search, file_search, MCP, etc.); structured outputs / JSON mode; no audio/video in or out
- **Pricing (as of 2026-10-09):** $2 / $10 per 1M input/output; cached input $0.10; cache writes $2.50. >272K input tokens: 2× input / 1.5× output. Paid only (no free tier noted); standard privacy applies to API usage
- **Architecture:** Proprietary (closed weights); params total/active unknown; MoE status not disclosed

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1575** Elo (Artificial Analysis GDPval-AA v2.1, max effort)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Terminal-Bench 4.0: **56.1%** (Artificial Analysis, max)
- OSWorld 2.0 offline: **71.4%** (OpenAI vendor, max; within 2.1 pp of Astra)
- AutomationBench: **~35.4%** medium / AA-AA ~64.9% max (OpenAI + Artificial Analysis)

Reasoning / knowledge:
- GPQA Diamond: **95%** (Epoch AI)
- HLE: **52.9%** (Artificial Analysis / Humanity’s Last Exam, max)
- LCR / MLCR: **~80–83%** AA-LCR v1.1 (Artificial Analysis)
- CritPt: **31.7%** (Artificial Analysis, max)
- Artificial Analysis Intelligence Index / BenchLM overall: **52** / ~#11 of 227 (max effort, v4.3.2)
- Omniscience Accuracy / Hallucination Rate: **~41.5** accuracy index / **54%** hallucination rate (Artificial Analysis AA-Omniscience, max)

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **54.2%** (Artificial Analysis, max)
- Vibe Code Bench: **88.93%** (Vals AI v1.1)
- DeepSWE / Coding Index / other: **75.2%** DeepSWE v1.1 high effort (OpenAI vendor; matches/exceeds Astra); Coding Agent Index **60** (Artificial Analysis, max)

Long context:
- AA-LCR v1.1 ~80–83% (Artificial Analysis); no MRCR / RULER / GraphWalks retrieval numbers at specific window lengths reported

### Normalized scores (1-100)
- **Tool use: 72/100.** Terminal-Bench 4.0 56.1%, OSWorld 71.4%, AutomationBench strong mid-tier, GDPval-AA 1575 Elo; capped by absence of Terminal-Bench 2.1 / Tau3 frontier scores and mid (not 88%+) TB results.
- **Reasoning: 88/100.** GPQA Diamond 95%, HLE 52.9%, AA Index 52 (near Astra 53), CritPt 31.7%; high but short of absolute frontier (GPQA 96%+/HLE 40%+ / Index 60+).
- **Context window: 96/100.** Verified 1.05M total (922k input); tier ≥1M maps to 95-100; no ≥98% retrieval at 512K+ (MRCR/RULER) published, so not 100.
- **Multimodal: 65/100.** Text + image in, text out; no video/PDF-as-native-in or audio/non-text out.
- **Coding: 88/100.** DeepSWE 75.2% (frontier-matching), SciCode 54.2%, Vibe Code 88.9%, Coding Agent Index 60; capped by missing independent SWE-bench Verified / LiveCodeBench.
- **Cost efficiency: 88/100.** $2/$10 (cached $0.10) — mid-tier paid; ~$0.72 per AA Index task (far below Astra); maps near $1.25/$4.25 tier.
- **Overall Score: 81.8/100.** Mean of five non-cost dims (72+88+96+65+88)/5 = 81.8. Best-fit for high-volume agentic coding / computer-use / professional workflows where near-Astra quality is needed at substantially lower cost than flagship.

---
## Signature
- Provided by: **Grok 4.5 (xAI)** — 2026-10-09
- Method: public internet research (OpenAI official model card/docs + system-card addendum, Artificial Analysis, Epoch AI, Vals AI, and contemporaneous independent reports); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.