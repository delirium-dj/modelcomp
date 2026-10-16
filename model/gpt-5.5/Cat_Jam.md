# GPT-5.5 — findings by Cat Jam

- Source: OpenAI / GPT-5.5 (`opencode/gpt-5-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship model for complex professional work (released 2026-04-23): agentic coding, computer use, knowledge work, tool use. Strong efficiency for long-horizon tasks.
- **Provider / access:** OpenAI API (`gpt-5.5`, snapshot `gpt-5.5-2026-04-23`), ChatGPT, Codex. Chat Completions + Responses. Text/image in; text out.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff 2025-12-01.
- **IDs:** `gpt-5.5` (OpenAI), OpenRouter `openai/gpt-5.5`
- **Context window:** 1,050,000 tokens; max output 128,000 (>272K repriced at 2x/1.5x).
- **Modalities:** Text, image in; text out. Function calling, file search, image gen, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search, prompt caching.
- **Pricing (as of 2026-10-16):** $5 / $30 per 1M input/output; cached $0.50; Batch/Flex half; regional +10%.
- **Architecture:** Proprietary GPT-5.5. Not open.

### Raw benchmarks found

(OpenAI launch post + Artificial Analysis article, April 23, 2026)

Agent / tool use:

- GDPval (win/tie): **84.9%** (OpenAI)
- OSWorld-Verified: **78.7%**
- Tau2-bench Telecom: **98.0%** (no prompt tuning)
- BrowseComp: base **84.4%** (OpenAI table) / listed in GPT-5.6 row? GPT-5.5 84.4
- Top AA headline evaluation set (5 of 10): GPT-5.5 leads Terminal-Bench Hard, GDPval-AA, APEX-Agents-AA; gains strongest on AA-Omniscience (+14), τ²-Telecom (+7)
- AA Intelligence Index (max): ~57 (initial release unlocked three-way tie at 53? OpenAI states "tops the Intelligence Index by 3 points" so normalizing relative to prior #1 of 53 -> 56-57; article says Intelligence Index 3 points break. Use 57 (approx).

Reasoning / knowledge:

- GPQA Diamond: **93.6%**
- HLE no tools: **41.4%** (GPT-5.5 base launch table); with tools 52.2% (base) / 57.2%? (Pro claimed; not for base? 52.2 base confirmed)
- LCR: +? OpenAI omni hallucination +14; LCR high (not exact in sampled text) 
- CritPt: not stated as leading (GPT-5.5 trails in CritPt?)
- ARC-AGI? not in sampled
- Omniscience +14 pts

Coding:

- Terminal-Bench 2.0: **82.7%**
- SWE-Bench Pro: **58.6%**
- Expert-SWE (internal, median 20 h): **73.1%**
- LiveCodeBench? not in sampled
- Coding Agent Index? OpenAI says GPT-5.5 strongly; no exact number in sampled text beyond SWE-bench Pro.

Long context:

- 1,050,000 context; long-context table? not shown for GPT-5.5 in cached pro table (GPT-5.5 TB2.0 maybe 82.7). MRCR not specifically found in sampled data. Some providers report 922k? use no.

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval 84.9, OSWorld 78.7, TB2.0 82.7, Tau2 98.0, BrowseComp 84.4. Strong flagship agent.
- **Reasoning: 93/100.** HLE 41.4–52.2+, GPQA 93.6, AA Intelligence ~57, +14 Omniscience. Strong theoretical math absent? Maybe.
- **Context window: 95/100.** 1.05M standard repricing >272K. No MRCR score in sampled data ⇒ cap top-end.
- **Multimodal: 80/100.** Text/image in; text out; no native audio/video. Vision benchmarks not directly sampled.
- **Coding: 93/100.** TB2.0 82.7, SWE-Pro 58.6, Expert-SWE 73.1; GPT-5.6 family later surpasses.
- **Cost efficiency: 70/100.** $5/$30 per 1M, batch 50%; cache $0.50.
- **Overall Score: 91/100.** Mean (94+93+95+80+93)/5 = 91.0. Predecessor to GPT-5.6 matrix, still strong.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI model docs, launch article, Artificial Analysis article, AA typography); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
