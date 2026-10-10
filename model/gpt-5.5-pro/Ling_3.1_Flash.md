# GPT 5.5 Pro — findings by Ling 3.1 Flash

- Source: OpenAI (`opencode/gpt-5.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's premium extra-compute deployment of GPT-5.5 (released 2026-04-23) — identical weights with additional parallel test-time compute for correctness-critical work, at a 6x price premium over standard GPT-5.5.
- **Provider / access:** OpenAI API (Responses and Chat Completions), OpenRouter, AWS Bedrock, Azure OpenAI; ChatGPT Pro/Business/Enterprise plans. Reasoning effort control incl. xhigh; tool use, structured outputs, code execution.
- **Release / knowledge:** 2026-04-23; knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `openai/gpt-5.5-pro` (OpenAI API / OpenRouter); site tracking slug `opencode/gpt-5.5-pro`. No Free ID — paid only.
- **Context window:** 1,050,000 tokens total; 128,000 max output (LLM Reference; site meta.json's "128K total" is a scaffold stub contradicted by the verified spec).
- **Modalities:** text and image in; text out (per LLM Reference; site meta.json's "Text in/out" understates the verified spec).
- **Pricing (as of 2026-10-02):** $30/$180 per 1M input/output (OpenAI API, OpenRouter); Batch $10/$45; Flex $15/$90; Priority 2.5x; cached input ~$3/M estimated from GPT-5.5's 90% cache discount (not independently confirmed for Pro); Web Search $10/1K calls.
- **Architecture:** proprietary (OpenAI); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.2%** (observed 2026-05-28, standard GPT-5.5 weights — Pro shares headline results)
- Terminal-Bench 2.0: **82.7%** (vendor, state of the art at release; vs Gemini 3.1 Pro 68.5%, Claude ~65%)
- OSWorld-Verified: **78.7%** (computer use)
- MCP-Atlas: **75.3%** (multi-tool orchestration)
- GDPval-AA: **1785** (Pro) / 1769 (standard) — AA leaderboard
- Expert-SWE (OpenAI internal, median human completion ~20h): **73.1%** (internal eval, not independently verifiable)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (observed 2026-04-24)
- Humanity's Last Exam (no tools): **41.4%**; with tools: **52.2%**; with tools at Pro compute: **57.2%**
- ARC-AGI-2 (high effort): **83.3%**
- FrontierMath: Tier 4 **39.6%** (LLM Reference; HokAI reads 35.4%), Tiers 1–3 **51.7%**
- CritPt (xhigh, Artificial Analysis): **30.6%**
- MMLU: **92.4%** (vendor-reported)
- BrowseComp (Pro compute): **90.1%**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **82.6%** (vals.ai independent, standard weights, 2026-04-24); **88.7%** vendor-reported (HokAI, 2026-04-23) — the two disagree by 6.1 pts
- SWE-bench Pro (Public): **58.6%** (rank 16/46)
- LiveCodeBench: **91.0%** (approximate, standard GPT-5.5 score)
- GeneBench-Pro: **20.5%** (Pro) / 12.0% (standard)
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- 1.05M-token window; no MRCR / RULER / GraphWalks retrieval score published

Multimodal:

- Text and image input; no dedicated multimodal benchmark score published for this release

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1785 clears the frontier reference (1750+), with OSWorld 78.7% and MCP-Atlas 75.3% strong; Terminal-Bench 2.1 78.2% (vs the 88%+ frontier bar) and the internal-only Expert-SWE cap the score.
- **Reasoning: 91/100.** GPQA 93.6%, HLE 52.2% with tools (57.2% at Pro compute) and ARC-AGI-2 83.3% clear the frontier bars; the 41.4% no-tools HLE and CritPt 30.6% cap it below 93.
- **Context window: 95/100.** 1.05M-token window; no ≥98% retrieval-at-512K+ figure published, so 100 is not justified.
- **Multimodal: 65/100.** text + image in, text out — the +image-in band; no audio/video input.
- **Coding: 92/100.** SWE-bench Verified 82.6% independent (88.7% vendor), LiveCodeBench 91.0% and TB 2.0 82.7% are top-tier; the 6.1-pt SWE-bench disagreement and unpublished DeepSWE/SciCode cap the score.
- **Cost efficiency: 15/100.** $30/$180 per 1M is triple the $10/$50 (~30) reference on input and far beyond it on output; Batch ($10/$45) and Flex ($15/$90) improve the effective rate for non-interactive work.
- **Overall Score: 86/100.** (88+91+95+65+92)/5 = 86.2 → 86 — the accuracy-maximal GPT-5.5 setting: best-in-class agentic coding at release, but the 6x price premium and text+image-only input make standard GPT-5.5 the better default for most workloads.

---

## Update 2026-10-08 (6-day re-research)

BenchmarkList, tensor.news and ModelCadence rows found:

- FrontierMath (Epoch AI, reproduced): Tiers 1–3 v2 private **87.72%**, Tier 4 v2 private **78.05%** — strong reproduced research-math reads (vs the 51.7%/39.6% v1-era rows on file)
- ARC-AGI-1 **96.5%** (rank 9/97, $4.53/task); ARC-AGI-2 **84.6%** (rank 10/99, $10.51/task; pass@2 84.6%, rank 2/71 — the file's 83.3% is the launch reading)
- HLE (system card, 2026-06-09): **57.2%** with tools / **43.1%** no tools (rank 10/478; field leader Opus 5.5 at 67.7%) — confirms the 57.2% Pro-compute row
- Rank-1 rows: TaxBench **29.3%** mean pass^5 (rank 1/16, field leader; pass@1 77.7%, tax knowledge 84.2%, tax calculations 74.3%, data retrieval 74.5%), GeneBench **33.2%** (rank 1/16, field leader), GeneBench-Pro **20.5%** (rank 7/30, extended mode, 5 runs)
- Other: BrowseComp 90.1% (rank 8/60, field leader), GDPval 82.3% (rank 3/18), SimpleBench 76.9% (rank 3/36), BLXBench 44.5% (163/366 tests), CADGenBench 0.3871 (rank 5/18), DTBench 93.33, LMCA 63.46, Chess Puzzles 62.12 (reproduced), OTIS Mock AIME 100 (reproduced), GPQA Diamond 91.9% (Epoch, reproduced)
- Composites: Epoch Capabilities Index standing #6 of 270 (score 162.38); ModelCap Index 79.7 (#16 of 337, range 73.6–85.9); ModelCadence rescaled: Reasoning 80+2.5 (top 5%), Math 72+5.2 (top 12%), Science 69−5.9 (top 24%); 5 of 10 tensor.news scores independently reproduced
- No score change: FrontierMath v2 (87.7%/78.05%) and the reproduced GPQA 91.9% sit within the Reasoning 91 rationale

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 88 / Reasoning 91 / Context 95 / Multimodal 65 / Coding 92 / Cost 15 / Overall 86.** Factual corrections and new facts this pass (from OpenAI's API docs, launch page and Help Center):

- **API surface correction:** GPT-5.5 Pro is available on the **Responses API and Batch API only — Chat Completions is NOT supported** (the launch-era file's "Responses and Chat Completions" was wrong). Supported features: structured_outputs, function_calling, file_search, image_input, image_generation, MCP, web_search; tools: code_interpreter, hosted_shell, MCP. Reasoning effort: medium / high (default) / xhigh; some requests take several minutes (background mode recommended). Default snapshot: `gpt-5.5-pro-2026-04-23`.
- **Pricing correction: GPT-5.5 Pro offers NO cached-input discount** (API docs: "GPT-5.5 Pro does not offer a cached input discount") — the launch-era "~$3/M estimated cache" is withdrawn. Regional data-residency endpoints carry a **+10% uplift**. $30/$180 per 1M confirmed across OpenAI, llm-stats and LLM Reference (OpenAI is the lowest tracked provider). Batch $10/$45 and Flex $15/$90 stand from the launch announcement.
- **Knowledge cutoff: December 1, 2025** (API docs) — now stated, replacing the launch-era "not stated".
- **No AA Intelligence Index exists for GPT-5.5 Pro** — AA's own model page reads "N/A / Unknown" for the Pro configuration. The **55.0** circulating on aggregator pages is **GPT-5.5 (xhigh compute, standard weights), observed 2026-06-26** — not a Pro measurement. Do not cite it for Pro.
- **ChatGPT availability (Help Center):** GPT-5.5 Pro is the highest-capability GPT-5.5 option in ChatGPT ("research-grade intelligence"), restricted to Pro/Business/Enterprise/Edu plans; the picker offers Instant (GPT-5.5 Instant), Thinking (GPT-5.5 Thinking) and Pro (GPT-5.5 Pro); GPT-5.5 Thinking context is 400K on Pro tier (272K input + 128K output) and 256K on other paid tiers; reasoning modes Standard/Extended, with Pro-only Light/Heavy.
- **Launch-page re-read (2026-04-23):** GPT-5.5 Pro is "a significant step up in the difficulty and quality of work" vs GPT-5.4 Pro, "especially strong in business, legal, education, and data science"; Codex serves GPT-5.5 (not Pro) to Plus/Pro/Business/Enterprise/Edu/Go with a 400K window and a Fast mode at 1.5× speed for 2.5× cost.
- **Score impact:** none — the corrections (no cache discount, Responses-only API, Dec 2025 cutoff) tighten the card's accuracy without moving any band; the absent AA Index for Pro is disclosed rather than filled with the standard-weights 55.0.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (OpenAI API docs, GPT-5.5 launch page, ChatGPT Help Center, Artificial Analysis, LLM Reference, llm-stats, OpenRouter, vals.ai, Epoch AI, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
