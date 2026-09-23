# Claude Sonnet 4.5 — findings by Mimo v2.6 Flash

- Source: Anthropic / Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September 2025 hybrid-reasoning Sonnet that led SWE-bench Verified and computer-use at launch; legacy-but-active SKU (successor: Sonnet 4.6 → Sonnet 5) still widely used in Claude Code and third-party agents. Paired with `claude-sonnet-4-5-thinking` variant.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude apps / Claude Code. Folder meta id `opencode/claude-sonnet-4.5`.
- **Release / knowledge:** **2025-09-29**; reliable knowledge cutoff **Jan 2025**, training-data cutoff **Jul 2025**. Status Active (legacy); retirement not sooner than 2026-09-29.
- **IDs:** `claude-sonnet-4-5-20250929` (alias `claude-sonnet-4-5`); Bedrock `anthropic.claude-sonnet-4-5-20250929-v1:0`.
- **Context window:** **200K** standard (max output **64K**). 1M beta (`context-1m-2025-08-07`) existed but was **deprecated 2026-04-30** and performed poorly (MRCR v2 8-needle **18.5%** at 1M — yage.ai timeline). Effective long-context tier is therefore the 200K GA window, not 1M.
- **Modalities:** text / image / PDF in; text out; extended thinking (budget_tokens, interleaved thinking on for vendor scores); tool use, prompt caching, batch API.
- **Pricing (as of 2026-09-23):** **$3.00 / $15.00** per 1M in/out; cache read **$0.30** (−90%); 5m cache write $3.75; Batch **50%** off. No Free ID.
- **Architecture:** proprietary (undisclosed params). Released under ASL-3.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **61.4%** (Anthropic launch table — led the field at Sep 2025; ModelBeats rank now #25/29 as later models hit 75–85%)
- Terminal-Bench 2.0: **51.0%** (Claude Sonnet 4.6 system card comparison table) / **50%** (BenchLM shared row)
- τ²-bench (retail): **86.2%** (llm-stats); airline/telecom reported with prompt addenda (Anthropic methodology footnote)
- MCP-Atlas: **43.8%** pass rate, 62.1% mean coverage (Scale AI arXiv 2602.00933 Table 3)
- JobBench: **27.7%**; VITA-Bench **17.0%**; Gert Labs **48.51%** (BenchLM ledger)
- Toolathlon / MCP Atlas (llm-stats index rows) / OSWorld 2.0 / Tau3-Banking: **no verified public score found** for this ID in reviewed rows
- Agentic public-lane composite: **55.4 / #~100 of 151** (BenchLM directional index)

Reasoning / knowledge:

- GPQA (Diamond): **83.4%** (BenchLM / Anthropic Opus 4.5 system-card cross-list); Vals GPQA-D **84.5%** cited in some mirrors
- AIME 2025: **87.0%** (llm-stats)
- ARC-AGI-2: **13.6%** (BenchLM / Opus 4.5 system card — far below 2026 frontier 50–92%)
- HLE: **~9.4%** (BenchGecko cross-list; exact harness label differs from Anthropic launch table — treat as low-single-digit-to-teens, not frontier 40%+)
- MMMLU (multilingual): **89.1%** (llm-stats); MMLU-Pro **83.0%** (Serenities aggregate)
- Artificial Analysis Intelligence Index: **37** (reasoning variant) / **23–29** (non-reasoning / estimated rows — AA page now marked deprecated)
- LMArena Text (style-control): **1453–1456** (OfoxAI / Serenities; ~#47–49 of 374)
- CritPt / LCR / Omniscience standalone rows: **no verified public score found** for this ID in reviewed rows

Coding:

- SWE-bench Verified: **77.2%** (Anthropic, 10-trial mean, 200K thinking budget, full 500-problem set); **82.0%** with parallel test-time compute (high-compute row); 1M-context config 78.2% (not primary)
- LiveCodeBench: **62.0%** (Serenities) / **71.4%** (AA via Kilo — harness labels differ; both mid-band)
- Aider Polyglot: **68.0%** (Serenities)
- HumanEval+: **90.0%**; MATH **87.0%**; GSM8K **95.5%** (Serenities aggregate)
- AA Coding Index: **52.1%** (AA / Kilo)
- SWE-bench Pro / DeepSWE / Terminal-Bench 2.1: **no verified public score found** for this ID in reviewed rows

Long context:

- GA window **200K**; no published MRCR/RULER score at 200K in reviewed rows
- Historical 1M beta: MRCR v2 8-needle **18.5%** at 1M (yage.ai long-context timeline; Anthropic did not market this as a strength)
- Net: solid within 200K for code+chat agents; not a long-context model by 2026 standards

Multimodal:

- MMMUval: **77.8%** (llm-stats shared row)
- CharXiv / MMMU-Pro / video/audio: **no verified public score found** for this ID in reviewed rows (text+image+PDF in; text out only — no native video/audio pipeline)

### Normalized scores (1–100)

- **Tool use: 73/100.** OSWorld 61.4% and τ²-retail 86.2% were launch-frontier and still respectable; TB2.0 ~50–51% and MCP-Atlas 43.8% sit mid-band well short of 2026 75%+ / 60%+ refs; low JobBench/VITA rows cap the mid-70s.
- **Reasoning: 71/100.** GPQA 83.4% and AIME 87% clear the strong-upper band, but ARC-AGI-2 13.6% and HLE ~9% are far below frontier (50%+/40%+); AA Index 37 (reasoning) is mid-pack. No CritPt/LCR rows to push higher.
- **Context window: 68/100.** 200K GA is the honest number (1M beta deprecated and scored 18.5% MRCR); usable for agent loops with context editing/memory tools shipped alongside, but no ≥1M tier and no strong published retrieval scores at depth.
- **Multimodal: 68/100.** Text/image/PDF in with MMMUval 77.8% is solid image-in quality; no video/audio, text-only output, and no CharXiv/MMMU-Pro rows block the 75+ multimodal band.
- **Coding: 78/100.** SWE-bench Verified 77.2% (82% high-compute) was SOTA at launch and remains upper-mid; LiveCodeBench 62–71%, Aider 68%, AA Coding 52% are solid but short of 2026 DeepSWE 74%+ / SWE-Pro 60%+ / Coding Index 70%+ frontier refs; no SWE-Pro or DeepSWE row for this ID.
- **Cost efficiency: 60/100.** $3/$15 is the methodology's ~$3/$15 ≈60 tier with −90% cache and 50% batch helping repetitive agents; no Free ID; competitive vs Opus but no longer price-performance leader vs Sonnet 5 ($2/$10 intro → permanent) or open-weight peers.
- **Overall Score: 71.6/100.** Mean of (73 + 71 + 68 + 68 + 78) / 5 = 71.6; best-fit as Anthropic's proven agentic-coding workhorse when 200K context is enough and the mature Claude Code / Agent SDK ecosystem matters more than topping 2026 leaderboards.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-23
- Method: fresh public web research (Anthropic launch post + methodology footnotes, Sonnet 4.6 system card comparison, BenchLM ledger, llm-stats, Artificial Analysis, ModelBeats OSWorld, Scale MCP-Atlas arXiv, yage.ai long-context timeline, Serenities/Kilo aggregates); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
