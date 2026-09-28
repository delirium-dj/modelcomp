# GPT-6 Sol — findings by Pixel Canary

- Source: OpenAI / GPT-6 Sol (`openai/gpt-6-sol`, also `gpt-6-sol`, `openai.gpt-6-sol`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Evidence warning:** GPT-6 Sol shipped **five days ago** (2026-09-22). The tracker publishes only **5 benchmark rows** and records **0% coverage**, plus **no runtime record at all**. Every score below is therefore low-confidence and should be re-checked within a few weeks.

## Model card

- **Name:** GPT-6 Sol — the "Sol" tier of OpenAI's GPT-6 generation, for complex coding and agentic workflows, with reasoning-effort settings from `none` to `max`.
- **Short description:** A brand-new mid-tier GPT-6 at $2 / $10 that is not yet beating the models it is meant to replace: its only deep-field result (DeepSWE 1.1, 38 competitors) puts it 13th, behind GPT-5.6 Sol and far behind Muse Spark 1.3.
- **Data-quality note:** the local `meta.json` says "128K total / Text in/out" — the public spec is 1.1M context (922K max input) / 128K output, text + image in. `meta.json` needs refreshing.
- **Provider / access:** OpenAI API; **22 tracked offerings** incl. OpenRouter, Azure, Amazon Bedrock (`openai.gpt-6-sol`), Vercel AI Gateway, ZenMux, NanoGPT, LLM Gateway, Kilo Gateway at $2 / $10; Bedrock $2.20 / $11, Cortecs $2.40 / $12, Venice AI $2.50 / $12.50; cheapest route **$1.60 / $8 (Ofox)**.
- **Release / knowledge:** released **2026-09-22**; knowledge cutoff **2026-04-20** — the freshest cutoff in this entire comparison.
- **IDs:** `opencode/gpt-6-sol`, `openai/gpt-6-sol`, `gpt-6-sol`, `openai.gpt-6-sol`. No Free ID — paid only.
- **Context window:** 1.1M nominal (product text: 1,050,000-token context, **922,000 max input**) / 128K max output.
- **Modalities:** image + text in; text out. Tool use, computer use and configurable reasoning effort yes; no audio/video input, no generation.
- **Pricing (as of 2026-09-27):** official OpenAI **$2 / 1M input, $10 / 1M output**; floor $1.60 / $8 (Ofox). Cache-read and batch rates not yet tracked (no verified public figure). Paid only.
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-27): **5 rows published, coverage 0% / 5 benchmark families** — the thinnest evidence base in this dataset; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **79.9**.

Agent / tool use:

- Agents' Last Exam: **56.40%** (#2/21) — the strongest showing, second place in a 21-model agentic field
- OSWorld 2.0 (computer use): **64.40%** (#6/14)
- AutomationBench v1.0.6: **33.20%** (#3/4)
- GDPval-AA, Terminal-Bench, MCP Atlas, Toolathlon, tau-bench family: no verified public score found

Coding:

- DeepSWE 1.1: **68.80%** (#13/38) — 6.6 points behind GPT-5.6 Sol (72.70%) and 6.6 behind Muse Spark 1.3's leading 75.40% on the identical test
- FrontierCode 1.1: **49.30%** (#5/20)
- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench: no verified public score found

Reasoning / knowledge:

- No GPQA, HLE, Omniscience, SimpleQA, LiveBench or arena row exists for this ID yet — **no verified public score found** in any reasoning family.

Long context:

- No MRCR / RULER / GraphWalks row; the 1.1M (922K max input) window is advertised but unmeasured.

Runtime: **no provider speed or latency record is linked to this ID** ("No runtime data").

### Normalized scores (1-100)

- **Tool use: 78/100.** Agents' Last Exam 56.40% (#2/21) is a genuinely strong debut and OSWorld 2.0 64.40% (#6/14) is serviceable, but AutomationBench v1.0.6 33.20% (#3/4) is weak and there is no GDPval/Terminal/MCP evidence at all.
- **Reasoning: 70/100.** Not one reasoning, knowledge or factuality row is published five days after release; the only defensible reading is "unknown, tentatively frontier-adjacent", so this score is an explicit low-confidence placeholder anchored on the agentic rows.
- **Context window: 84/100.** 1.1M nominal with a documented 922K max input and 128K output, and the freshest cutoff in the set (2026-04-20); capped by zero retrieval measurements.
- **Multimodal: 70/100.** Text + image in only, and no vision benchmark (MMMU-Pro or equivalent) has been published for this ID, so image skill is assumed rather than demonstrated.
- **Coding: 72/100.** DeepSWE 1.1 68.80% across 38 competitors (#13) and FrontierCode 1.1 49.30% (#5/20) are respectable but currently *behind* GPT-5.6 Sol and GPT-5.5 on equivalent tests — the headline caveat for anyone upgrading on generation number alone.
- **Cost efficiency: 86/100.** $2 / $10 with a $1.60 / $8 floor across 22 providers is the cheapest current OpenAI flagship tier, undercutting GPT-5.5 ($5 / $30) by 3×; docked because throughput is completely unmeasured and no cache pricing exists yet.
- **Overall Score: 74.8/100.** Half-up mean of (78 + 70 + 84 + 70 + 72) = 374 / 5 = 74.8, Cost excluded. Cross-check: the independent LLMBoard composite is 79.9, but that composite is built on only 5 families and no reasoning row exists yet on either source. Best fit: teams that need the newest OpenAI knowledge cutoff at a low price and can wait for the benchmark record to fill in; on today's evidence GPT-5.6 Sol remains the better-measured OpenAI choice.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. the full 22-row provider table; the profile publishes only 5 benchmark rows and no runtime record) + local `meta.json`; no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
