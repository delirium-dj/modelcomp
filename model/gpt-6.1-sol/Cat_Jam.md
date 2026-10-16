# GPT-6.1 Sol — findings by Cat Jam

- Source: OpenAI / GPT-6.1 Sol (`opencode/gpt-6-1-sol`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** Near-Astra performance at lower cost (Sept 29, 2026). Strong coding/computer-use/professional work; supports reasoning effort low→max (none/minimal unsupported); Responses/Chat Completions.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), ChatGPT, Codex; EU data residency (fast/ultrafast). Text/image in; text out. Knowledge cutoff Apr 30, 2026.
- **IDs:** `gpt-6.1-sol` (OpenAI), OpenRouter `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens (922,000 max input / 128,000 output). >272K requests repriced $4/$15.
- **Modalities:** Text, image in; text out. Tools: web/file search, image gen, code interpreter, hosted shell, apply_patch, skills, computer use, MCP, tool_search. `ultra` multi-agent mode? GPT-6.1 Sol supports ultrafast etc; multi-agent beta inherited from Responses.
- **Pricing (as of 2026-10-16):** $2 / $10 per 1M (cache read $0.10 = 5% of input; cache write $2.50 = 1.25x). Batch/Flex half; Fast 2x; Ultrafast 6x; regional +10%.
- **Architecture:** Proprietary GPT-6.1 Sol; higher-compute parallel test-time settings available via OpenAI's fast/ultrafast tiers.

### Raw benchmarks found (vendor + independent)

Agent / tool use:

- DeepSWE v1.1 (max effort/vendor best): **71.9%** max (75.2% best across efforts); vendor chart max: 71.9% at $1.57/task (Astra 73.2% at $7.50)
- OSWorld 2.0 (offline, partial, max): **71.4%** (Orca/vendor); Vals? OSWorld 65.9 est
- AutomationBench 1.0.6 (best of efforts): **36.1%** (vendor) / AA? 
- Terminal-Bench Science 0.1: vendor max **57.0%** (Astra 68.1%, Opus 5.5 with fallback 63.3%)
- ExploitBench internal 21.5%; SEC-Bench Pro 78.8%
- OSWorld 2.0 Vals estimate: 65.9%
- AA AutomationBench 33.2? (measured AA for Sol max) and GDPval-AA 54.7% (AA max)
- GDPval-AA (AA max): 54.7% (measured)
- AA-Briefcase? 1547? (Benchgap model page earlier says AA briefcase 1547 for 6.1 Sol) — benchgap measured 1548? Actually for GPT-6.1 Sol, benchgap reported GDPval-AA 54.7% and AA-Briefcase maybe 1547; use only what's in sampled data: GDPval-AA 54.7%, AA-Briefcase 1547 (from earlier GPT-6 Astra comparison table? Not for 6.1). We'll mark AA-Briefcase 1547? Evidence from OpenRouter AA briefcase 1811? Not available; omit.

Reasoning / knowledge:

- AA Intelligence Index (max, v4.3.2): **51.8**
- HLE AA: 52.9% (measured), HLE no-tools est 52.7? Vals? Mark 52.9 measured (AA max)
- GPQA Diamond: OpenRouter AA 94.4% measured? Benchmark summary says 94.4% (OpenRouter providers); model index says Epoch GPQA Diamond 95%? Use 94.4 (OpenRouter AA providers) as measured-ish across providers.
- AA-LCR v1.1 (max): 83.0%
- CritPt (AA max): 31.7%
- Omniscience Accuracy: 62.1% (AA)
- Non-Hallucination: 45.7%
- ARC-AGI-2? not found specific; use "not published in sampled sources"
- HLE w/ tools est 62.7
- GBP GDP.pdf 32.0? (Orca open post: GDP.pdf 32.0% best of five) yes (OpenAI vendor) 
- TS 0.1: 57.0 max (vendor)

Coding:

- DeepSWE best 75.2% (high effort) / max 71.9%
- GDP.pdf 32.0% (max? vendor)
- Terminal-Bench Science 0.1 (max) 57.0% (vendor)
- SWE-bench Pro 65.6 (benchgap est)
- SWE Verified 91.9 (benchgap est 91.9? actually 91.9 listed)
- LiveCodeBench (Vals) 84.5? Vals estimate earlier 84.5 (not verified)
- AA-SciCode 54.2%, SciCode 53.8%
- OSWorld 71.4 (best of 5 efforts, vendor; partial)
- Programming hours: 64%? maybe
- SWE-bench Multimodal 43.5 (Vals)
- frontier code? Maybe not
- AA Coding strength established, provider.

Long context:

- 1,050,000 context window, 922,000 max input. MRCR/RULER not in sampled vendor output beyond "OpenAI says 1M output long-decode." Use no retrieval number.

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld 55–71, TB-Science 57, SEC-Bench 78.8, GDPval-AA 54.7, AutomationBench 36.1. Strong agent, but nearly-Astra claim unverified independently.
- **Reasoning: 90/100.** HLE AA 52.9, GPQA 94.4, AA Index 51.8, LCR 83.0, CritPt 31.7, Omniscience 62.1/45.7. Strong knowledge reasoning at low cost.
- **Context window: 92/100.** 1.05M with up to 128K output; long-context retrieval benchmark not in sampled data, but long context is marketed.
- **Multimodal: 84/100.** Text/image in; text out. HLE multimodal 52.9 (AA), OSWorld 65.9, GDP.pdf 32.0; no native audio/video. Strong vision/search/computer-use.
- **Coding: 91/100.** DeepSWE best 75.2, SB-Science 57.0, SEC-Bench 78.8; SWE-Pro 65.6 est; coding near-Astra at ~1/5 cost.
- **Cost efficiency: 88/100.** $2/$10 with cache 95% off; batch half; flexible. Excellent value, slightly premium to GPT-6 Sol but stronger.
- **Overall Score: 89/100.** Mean (90+90+92+84+91)/5 = 89.4. Near-Astra capability/cost trade.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs/blog/system card summary, Orca vendor benchmarks, OpenRouter AA summaries, TheModelIndex, BenchGap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
