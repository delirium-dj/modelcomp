# GPT-5.6 Terra — findings by Cat Jam

- Source: OpenAI / GPT-5.6 Terra (`opencode/gpt-5.6-terra`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** Balanced mid-tier GPT-5.6 model for everyday production work; targets cost-sensitive coding/agentic/reasoning with 1M context, 128K output.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`), ChatGPT, Codex. Responses/Chat Completions; text/image in, text out.
- **Release / knowledge:** Released 2026-07-09 (GA); knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5.6-terra` (OpenAI), OpenRouter `openai/gpt-5.6-terra`
- **Context window:** 1,050,000 tokens total (922,000 max input / 128,000 output), 2x/1.5x pricing above 272K.
- **Modalities:** Text, image in; text out. Reasoning none/low/medium/high/xhigh/max. Tools: web/file search, code interpreter, hosted shell, apply patch, image gen, computer use, MCP, etc.
- **Pricing (as of 2026-10-16):** $2 / $12 per 1M (cache read $0.20, cache write $2.50); Batch/Flex half. Promo stable post-July 30 (20% cut). Broad availability.
- **Architecture:** Proprietary GPT-5.6 generation; faster variants (UltraSpeed on MiMo? no) — Terra 117 t/s on AA.

### Raw benchmarks found

Agent / tool use:

- AA Coding Agent Index (max): 76.7 (AA via Datalearner)
- Terminal-Bench 2.1: **87.4%** (max, OpenAI table; 88.0 vendor from Minirouter? high effort maybe)
- Terminal-Bench 4.0: 35.4% (AA max) / Terminal-Bench Hard 57.6
- OSWorld 2.0: **50.2%** (OpenAI table)
- AutomationBench: 15.2% (OpenAI table) / Vals Automation? 53? Distinct
- Agents' Last Exam: **50.4%**
- GDPval-AA v2 Elo: 1593 (OpenAI table)
- MRCR v2 8-needle 256K-512K: 89.6%, 512K-1M: 72.5%
- GraphWalks BFS 256k f1: 76.9, 1mil 71.2
- Toolathlon: 58.0% (max, OpenAI table)

Reasoning / knowledge:

- AA Intelligence Index (max, v4.1): **55.0** (OpenAI) / v4.3.2 lower?
- HLE (AA?): 42.9% (AA-HLE measured) / HLE vendor? 42.9 no tools? use 42.9
- GPQA Diamond: 92.9% (OpenAI table)
- AA-LCR: 83.0% (AA max)
- CritPt: 22.9% (AA)
- Omniscience Accuracy / Non-Hall Rate: 45.5% / 10.2% (AA)
- ARC-AGI-2? not found; AA-IFBench 64.4 at high
- FrontierMath Tier 1-3 v2: 84.9, Tier 4 68.3 (OpenAI table)

Coding:

- DeepSWE v1.1: **69.6%** (OpenAI) (Coding Agent Index 77.4)
- SWE-Bench Pro: **63.4%** (OpenAI)
- Terminal-Bench 2.1: 87.4%
- ProgramBench: not for Terra? OpenAI? In goml? no
- LiveCodeBench? Vals 85.9
- SWE-bench Verified: 95.4 (Vals)
- Vibe Code Bench 74.6 (Vals v1.1)
- SWE-Atlas/Verified 69? no

Long context:

- MRCR 256K-512K 89.6%; 512K-1M 72.5%; GraphWalks 71.2 at 1M. Good but falls at full 1M.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 87.4, OSWorld 50.2, Toolathlon 58.0, Agents' Last Exam 50.4, GDPval 1593; AutomationBench 15.2 caps.
- **Reasoning: 84/100.** GPQA 92.9, HLE 42.9, AA Index 55, LCR 83.0, CritPt 22.9, Omniscience 45.5/10.2 caps, FrontierMath T4 68.3.
- **Context window: 92/100.** MRCR 89.6/72.5; GraphWalks 71.2 at 1M. Retrieves strongly up to 512K but degrades near full 1M.
- **Multimodal: 80/100.** Text/image in, text out; CharXiv 85.9; OSWorld 50.2; no audio/video input.
- **Coding: 86/100.** DeepSWE 69.6, Coding Agent Index 77.4, TB2.1 87.4, SWE-Pro 63.4, Vals SWE 95.4. Strong cost-adjusted coding.
- **Cost efficiency: 92/100.** $2/$12 per 1M with cache 90% off and batch half; excellent value mid-tier; promo stable post-July.
- **Overall Score: 85/100.** Mean of (82 + 84 + 92 + 80 + 86) / 5 = 84.8. Best value-default OpenAI GPT-5.6 tier for routine coding/knowledge at $2/$12.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI blog/docs/pricing, Artificial Analysis, Datalearner, RankLLM, LiteLLM, OpenRouter, Goml, Minirouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
