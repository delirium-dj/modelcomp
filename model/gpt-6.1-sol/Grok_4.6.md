# GPT-6.1 Sol — findings by Grok 4.6

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI’s 2026-09-29 DevDay mid-tier reasoning model: near GPT-6 Astra on agentic coding/computer use at GPT-6 Sol list price ($2/$10), with cheaper cached input. Successor to GPT-6 Sol; not Astra.
- **Provider / access:** OpenAI Responses API `gpt-6.1-sol` (functions, web/file search, code, hosted shell, computer use, MCP). Also Codex and ChatGPT Work. Effort: `none` removed vs GPT-6 Sol (AI Catchup).
- **Release / knowledge:** 2026-09-29; knowledge cutoff **April 30, 2026** (AI Catchup).
- **IDs:** `openai/gpt-6.1-sol`. No OpenCode Zen Free ID found.
- **Context window:** 1,050,000 total; up to 922,000 input / 128,000 max output (HokAI / DataCamp). Requests **>272K input** bill 2× input/cache and 1.5× output for the **whole** request.
- **Modalities:** text and image in; text out; reasoning; tools / computer use. Audio/video native I/O: not listed on the launch cards used here.
- **Pricing (as of 2026-10-01):** $2 / $10 per 1M in/out; cached input $0.10; cache writes $2.50. Batch/Flex 50% off; Fast 2× Standard. AA blended ~$1.47/M; ~67 tok/s (HokAI, 2026-09-30).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 offline: **71.4%** at max effort (OpenAI table via AI Catchup / AI Reiter)
- AutomationBench: **36.1%** max / **35.4%** medium / **33.2%** high (OpenAI table). DataCamp paraphrases “2.2 points above Opus 5.5 at medium” — keep the numeric table as primary.
- Terminal-Bench Science 0.1: **57.0%** at max, **$5.47**/task (OpenAI; Astra 68.1% / ~$23.80)
- Terminal-Bench 2.1 / 4.0: no verified public score found
- Tau3 / Tau2 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52** (HokAI citing AA, 2026-09-30)
- GPQA Diamond: no verified public score found
- HLE / CritPt / LCR / Omniscience: no verified public score found in this pass
- GDP.pdf: **32.0%** high / **31.0%** max (OpenAI table)

Coding:

- DeepSWE v1.1: **75.2%** at **high** effort (~$0.65/task); **71.9%** xhigh/max; **73.0%** medium; **64.4%** low (OpenAI table). Launch copy: matches Astra (~74.1–74.8%) at ~1/5 task cost.
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1.05M window. AA-LCR / MRCR / RULER / GraphWalks: no verified public score found. Practical cheap window is 272K before the whole-request surcharge.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld 2.0 71.4% is strong computer-use; Index 52 implies competitive agentic evals. Capped by AutomationBench 36.1% (well below Xiaomi/Anthropic 50–71% tables), missing TB 4.0/Tau3, and vendor-only terminal-science 57% vs Astra 68.1%.
- **Reasoning: 86/100.** Intelligence Index 52 is near the 60+ frontier ref (Sonnet 5.5 max is 56). Capped by no public GPQA/HLE/CritPt/Omniscience for this ID and GDP.pdf ~31–32%.
- **Context window: 96/100.** ≥1M maps to 95–100; 100 needs ~98% retrieval at 512K+. No LCR %; 272K billing cliff is a cost caveat, not a smaller window.
- **Multimodal: 65/100.** Image in, text out → 60–70 band. No native audio/video on the launch I/O list.
- **Coding: 91/100.** DeepSWE 75.2% clears the 74%+ frontier ref and is the best public coding number for this ID. Capped by missing SWE-Verified/LiveCodeBench/SciCode.
- **Cost efficiency: 72/100.** List $2/$10 matches the Sonnet 5.5 band (between ~$1.25/$4.25 ≈88 and ~$3/$15 ≈60). Cache $0.10 is better than Sonnet’s $0.20. >272K 2×/1.5× surcharge pulls long jobs down. Not $0.
- **Overall Score: 85/100.** (88+86+96+65+91)/5 = 85.2 → 85 half-up. Best-fit: default OpenAI coding/computer-use agent at Sol price; keep Astra for TB-Science / hardest OSWorld.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (HokAI, AI Catchup, AI Reiter, Vellum, DataCamp; OpenAI launch tables as quoted there); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
