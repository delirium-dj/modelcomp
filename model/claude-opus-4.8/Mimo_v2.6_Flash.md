# Claude Opus 4.8 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-opus-4-8`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's general-access flagship upgrade over Opus 4.7 (2026-05-28): leads 6 of 7 published benchmarks — SWE-bench Pro 69.2%, SWE-bench Verified 88.6%, GDPval-AA 1890 Elo, HLE 49.8/57.9, OSWorld-Verified 83.4% — with ~4× fewer unflagged code flaws, Dynamic Workflows (up to 1,000 parallel subagents), effort control, and optional 2.5× fast mode. Loses TB2.1 to GPT-5.5 (74.6 vs 78.2).
- **Provider / access:** Claude API `claude-opus-4-8` (+ `claude-opus-4-8[1m]` context variant); claude.ai, Claude Code, Amazon Bedrock, Google Vertex AI, Microsoft Foundry. US-only inference at 1.1× pricing available. Paid — not free.
- **Release / knowledge:** 2026-05-28 (41 days after 4.7); knowledge cutoff not isolated in sources read (Claude 4.x era early/mid 2026).
- **IDs:** `claude-opus-4-8`, `claude-opus-4-8[1m]`.
- **Context window:** 1,048,576 tokens; 128K max output.
- **Modalities:** text + image in; text out; adaptive reasoning (effort default high; xhigh/max available); tool calls yes; computer-use tools yes; structured outputs yes; JSON mode yes; prompt caching + Batch API.
- **Pricing (as of 2026-09-22):** **$5.00 in / $25.00 out per 1M** (unchanged from 4.7); fast mode $10/$50 (~2.5× speed, 3× cheaper than prior fast tiers); cache read $0.50 / 5m $6.25 / 1h $10; batch $2.50/$12.50 (50% off). Paid API.
- **Architecture:** proprietary hybrid-reasoning (Claude 4.8 family).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- OSWorld-Verified: **83.4%** (Anthropic; vs GPT-5.5 78.7, 3.1 Pro 76.2 — near ceiling)
- GDPval-AA: **1890 Elo** (Anthropic; #1 vs GPT-5.5 1769, Opus 4.7 1753)
- MCP-Atlas: **82.2%** (Anthropic; vs 4.7 77.3)
- Finance Agent v2: **53.9%** (Anthropic; vs GPT-5.5 51.8, 3.1 Pro 43.0)
- Terminal-Bench 2.1 (Terminus-2 public harness): **74.6%** (Anthropic; **loses to GPT-5.5 78.2%**; +8.5 vs 4.7's TB2.0 66.1)
- Toolathlon: **59.9%** (Anthropic)
- BrowseComp (single-agent): **84.3%** (Anthropic; vs 4.7 79.3)
- DeepSearch: **93.1%** (Anthropic)
- Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **49.8% no tools / 57.9% with tools** (Anthropic; vs GPT-5.5 41.4/52.2, 3.1 Pro 44.4/51.4)
- GPQA Diamond: **93.6%** (Anthropic/llm-stats; vs 4.7 94.2 — flat)
- Artificial Analysis Intelligence Index: **61.4** (#1 at launch, +1.2 over GPT-5.5)
- USAMO 2026: **96.7%** (Anthropic)
- CritPt / FrontierMath: no verified public score found

Coding:

- SWE-bench Verified: **88.6%** (Anthropic; vs 4.7 87.6)
- SWE-bench Pro: **69.2%** (Anthropic; field-leading vs GPT-5.5 58.6, 3.1 Pro 54.2; +4.9 vs 4.7)
- SWE-bench Multilingual: **84.4%** (Anthropic)
- LiveCodeBench: **88.8%** (llm-stats datapack)
- Terminal-Bench 2.1: **74.6%** (see agent row — behind GPT-5.5)
- DeepSWE: no verified public score found

Long context:

- GraphWalks BFS @1M: **68.1%** (Anthropic; vs GPT-5.5 45.4% — strongest 1M long-context reasoning cited)
- GraphWalks Parents: **9.3%** (Anthropic table row — low absolute, harsh harness)
- MRCR: no verified public score found for 4.8

Multimodal:

- ScreenSpot-Pro: **87.9%** (Anthropic; GUI grounding)
- CharXiv-R: slight dip vs 4.7 (Anthropic note; score not isolated)
- MMMU / video / audio: no verified public score found (text+image only — no audio/video input)

### Normalized scores (1–100)

- **Tool use: 93/100.** OSWorld 83.4%, GDPval-AA 1890 (#1), MCP 82.2, BrowseComp 84.3, Toolathlon 59.9; capped by TB2.1 74.6 losing to GPT-5.5 and missing Tau3/Claw.
- **Reasoning: 93/100.** HLE 49.8/57.9 (best in comparison set), GPQA 93.6, AA Index 61.4 #1 at launch, USAMO 96.7; capped by GPQA flat vs 4.7 and no FrontierMath/CritPt row.
- **Context window: 90/100.** 1M documented; GraphWalks BFS 68.1% @1M is the strongest cited 1M retrieval (well above GPT-5.5 45.4) but still far below the ≥98% @512K+ bar; no MRCR row → 90 (not 95).
- **Multimodal: 65/100.** Text + image in (ScreenSpot-Pro 87.9 strong for GUI); no video/audio input, no non-text out → 60–70 band → 65.
- **Coding: 95/100.** SWE-bench Verified 88.6% + Pro 69.2% (field-leading) + Multilingual 84.4 + LCB 88.8; capped only by TB2.1 74.6 (GPT-5.5 78.2) and no DeepSWE row → 95.
- **Cost efficiency: 45/100.** $5/$25 list (≈45 band per methodology's $5–10 tier); cache read $0.50 (90% off) and batch 50% off help; fast mode doubles to $10/$50 — premium pricing for premium scores.
- **Overall Score: 87/100.** Mean of five quality dims (93+93+90+65+95)/5 = 87.2 → 87. Best-fit: production agentic SWE and knowledge-work pipelines (SWE-Pro/GDPval/OSWorld leads) where $5/$25 is acceptable; terminal-heavy shops may still prefer GPT-5.5's TB2.1 edge.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Anthropic Opus 4.8 announcement + product page + system card references, LLM Reference datapack, TECHSY archive, llm-stats, AI Models Navi); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
