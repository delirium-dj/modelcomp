# Owl Alpha — findings by Ling 3.1 Flash

- Source: OpenRouter (`openrouter/owl-alpha`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** OpenRouter stealth foundation model for agentic workloads — native tool use, long-context tasks, code generation, and automated workflows; compatible with Claude Code, OpenClaw, and mainstream productivity tools. Disclosed by AI BENCHY as the stealth version of Meituan's LongCat 2.0.
- **Provider / access:** OpenRouter (`openrouter/owl-alpha`, Stealth provider — $0/1M in and out); released 2026-04-28.
- **Release / knowledge:** Released 2026-04-28; knowledge cutoff not stated.
- **IDs:** `openrouter/owl-alpha` (OpenRouter Stealth). No OpenCode Zen Free ID found.
- **Context window:** 1,048,576 tokens — verified on OpenRouter and Benchable.
- **Modalities:** text in; text out; tool calls yes (natively supported; Tool Calling 10.0/10.0 in AI BENCHY's suite); JSON mode not stated.
- **Pricing (as of 2026-10-10):** $0 / 1M input, $0 / 1M output (OpenRouter Stealth provider — free tier; "price data currently unavailable, suggesting potential free-tier usage" per Benchable).
- **Architecture:** undisclosed (stealth); disclosed by AI BENCHY as Meituan LongCat 2.0 under the hood.

### Raw benchmarks found

Agent / tool use:

- Tool Calling (AI BENCHY suite): **10.0/10.0** (1/1 tests fully passed, 2026-06-04 run)
- Data parsing and extraction (AI BENCHY): **10.0/10.0** (2/2 tests)
- Coding (Benchable): **90.9%** accuracy (65th percentile)
- Email Classification (Benchable): **97.0%** accuracy (46th percentile)
- Terminal-Bench 2.1 / τ³-Banking / GDPval-AA / MCP-Atlas / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Mathematics (Benchable): **95.0%** accuracy (89th percentile)
- Reasoning (Benchable): **79.6%** accuracy (57th percentile)
- General Knowledge (Benchable): **52.0%** accuracy (16th percentile — notable weakness)
- Ethics (Benchable): **77.8%** accuracy (18th percentile)
- Hallucinations (Baseline, Benchable): perfect accuracy (effectively acknowledges uncertainty)
- General Intelligence (AI BENCHY): **4.3/10** (0/1 tests); Puzzle Solving: **5.3/10** (7.2 consistency); Trivia: **3.0/10**
- GPQA / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found

Coding:

- Coding (Benchable): **90.9%** accuracy (65th percentile)
- Coding (AI BENCHY): **5.4/10** (1/3 tests; ranks #1 in AI BENCHY's category ranking)
- Instructions following (AI BENCHY): **6.5/10** (1/2 tests); Benchable instruction following: **60.8%** (56th percentile)
- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M-token window; no MRCR / RULER / GraphWalks retrieval number reported — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Native tool use with perfect AI BENCHY Tool Calling (10.0, 1/1) and Data parsing (10.0, 2/2) scores and 90.9% coding accuracy — but the samples are tiny (1–2 tests) and no Terminal-Bench, GDPval-AA, or MCP-Atlas number exists.
- **Reasoning: 62/100.** Mathematics 95.0% and Reasoning 79.6% (Benchable) are strong, but General Intelligence 4.3/10, Trivia 3.0/10, and General Knowledge 52.0% (16th percentile) are weak — a lopsided profile with no GPQA/HLE/Index number.
- **Context window: 95/100.** Native 1,048,576-token window; no 512K+ retrieval percentage published, so 100 is not justified.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band.
- **Coding: 72/100.** Benchable Coding 90.9% (65th percentile) and AI BENCHY's #1 coding rank are strong, but AI BENCHY's own coding suite scored only 5.4/10 (1/3 tests) — the evidence is contradictory across suites.
- **Cost efficiency: 100/100.** $0/$0 per 1M on the OpenRouter Stealth provider — free tier.
- **Overall Score: 63/100.** Mean of Tool 70, Reasoning 62, Context 95, Multimodal 15, Coding 72 = 62.8 → 63. Best-fit: free 1M-context agentic stealth model for tool-driven workflows; thin third-party evidence and a disclosed LongCat 2.0 identity mean scores should be re-verified against the named model.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (OpenRouter listing, Benchable model profile, AI BENCHY benchmark runs 2026-04-30 to 2026-06-04); scores are normalized 1–100 interpretations, not official vendor scores. Third-party suites used tiny samples (1–2 tests per category); AI BENCHY discloses Owl Alpha as Meituan LongCat 2.0.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
