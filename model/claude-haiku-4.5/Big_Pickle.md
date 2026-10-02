# Claude Haiku 4.5 — findings by Big Pickle

- Source: Anthropic (`opencode/claude-haiku-4.5`, API model `claude-haiku-4-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest and cheapest frontier-class model, released 2025-10-15 — the first Haiku with extended thinking, computer use and context awareness, matching Sonnet 4 on coding, computer use and agentic tasks at roughly one-third the cost and more than twice the speed. Explicitly positioned for sub-agents, parallelized execution and high-volume workloads rather than maximum-capability work.
- **Provider / access:** Anthropic Claude Platform (`claude-haiku-4-5`, snapshot `claude-haiku-4-5-20251001`); Amazon Bedrock; Google Cloud Vertex AI; Microsoft Foundry; OpenRouter; OpenCode Zen `opencode/claude-haiku-4.5`.
- **Release / knowledge:** released 2025-10-15 (snapshot dated 2025-10-01); knowledge cutoff February 2025.
- **IDs:** `opencode/claude-haiku-4.5` (Zen, standard pricing); upstream `claude-haiku-4-5`.
- **Context window:** 200,000 tokens; up to 64,000 max output tokens, with a thinking budget of up to 128K tokens.
- **Modalities:** text and image input; text output; extended thinking with controllable reasoning depth (summarized or interleaved thought output); full tool support including coding, bash, web search and computer use.
- **Pricing (as of 2026-10-02):** $1.00 in / $5.00 out per 1M — Anthropic's cheapest current model; cache read $0.10, cache write $1.25 (1h $2.00); up to 90% savings with prompt caching and 50% with batch processing. OpenRouter's weighted-average realized input price is ~$0.64.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Coding:

- SWE-bench Verified: **73.3%** (Anthropic) — edges out Sonnet 4's 72.7% in the same comparison, at one-third the blended cost ($6.00 vs $18.00 per 1M+1M)
- Terminal-Bench: **41.75%**; Terminal-Bench Hard: **27.3%** (AI/TLDR; Artificial Analysis)
- SciCode: **42.2%**; Artificial Analysis Coding Index: **43.9** at reasoning effort

Agent / tool use:

- τ²-Bench Telecom: **54.7%** at reasoning (**32.5%** non-reasoning) — Artificial Analysis
- IFBench (instruction following): **54.3%** reasoning (**42.0%** non-reasoning)
- Artificial Analysis Agentic Index: **8.0** — the honest counterweight to the "best coding model" framing
- Computer use: a headline supported capability with no published OSWorld / OSWorld-Verified figure for this ID

Reasoning / knowledge:

- GPQA Diamond: **67.2%** at reasoning (**64.6%** non-reasoning) — Artificial Analysis
- HLE: **10.4%** reasoning (**4.2%** non-reasoning); CritPt: **0.0%** in both modes
- Artificial Analysis Intelligence Index: **16.9** at reasoning effort
- AA-Omniscience Accuracy / Non-Hallucination Rate: **18.0% / 72.7%** reasoning (**14.4% / 74.3%** non-reasoning) — low accuracy but comparatively high non-hallucination

Long context:

- AA-LCR: **74.3%** at reasoning (**49.7%** non-reasoning) — Artificial Analysis
- 200K window documented; no MRCR / RULER / GraphWalks row published

Vision / generation:

- Design Arena Elo: Website **1159**, Data Visualization **1139**, 3D **1101** — top placements in Anthropic's fast-model tier

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-Bench Telecom 54.7% and IFBench 54.3% at reasoning effort are mid-pack, and the Agentic Index of just 8.0 shows Haiku 4.5 is not built for long autonomous runs; the strengths are real but narrow — native computer use, bash, web search, and a latency profile (TTFT p95 1.09s on Anthropic, 0.30s on Vertex) tuned for parallel sub-agent fan-out rather than solo deep work.
- **Reasoning: 56/100.** GPQA Diamond 67.2% and HLE 10.4% at reasoning effort put it well below frontier reasoners, with CritPt at 0.0% and an Intelligence Index of 16.9; the gap between reasoning and non-reasoning modes is real but small on GPQA (67.2 vs 64.6), so the thinking dial buys less here than the branding implies.
- **Context window: 74/100.** A verified 200,000-token window with a 64K output and 128K thinking ceiling, plus AA-LCR 74.3% at reasoning effort — a measured long-context result, not just a documented spec, though 200K is now unremarkable among frontier models.
- **Multimodal: 76/100.** Text and image input with Design Arena placement at 1159 Elo on Website and 1139 on Data Visualization — the arena results show genuinely competitive output quality for a fast model, even though no MMMU-class comprehension benchmark was published.
- **Coding: 74/100.** SWE-bench Verified 73.3% is the standout: it beats Sonnet 4's 72.7% at a third of the price, which is why Anthropic led with it. Terminal-Bench Hard 27.3%, SciCode 42.2% and an AA Coding Index of 43.9 show the ceiling clearly — superb repo-fix work, weak on long autonomous engineering tasks.
- **Cost efficiency: 92/100.** $1/$5 with $0.10 cache reads, $1.25 cache writes and 50% batch is the best rate card in this comparison, realized input prices around $0.64 on OpenRouter, and it is explicitly designed for sub-agent workloads where token volume multiplies.
- **Overall Score: 69.2/100.** Half-up mean of the five quality dims. Best fit as the default sub-agent, classifier, high-volume tool-caller and parallelized-execution layer in a Claude Code stack; do not route deep reasoning or frontier agentic work to it.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Anthropic Claude Haiku product page, OpenRouter model page incl. Artificial Analysis and Design Arena rows, AI/TLDR benchmark compilation, LLM Stats provider table, AnotherWrapper pricing comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.md`, using the same headings.

---