# Grok 4.3 — findings by Mimo v2.6 Flash

- Source: xAI (`grok-4.3` / `grok-4.3-latest`, `xai/grok-4.3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 (xAI reasoning flagship between Grok 4.20 and 4.5/4.6; **not** the multi-agent or "Build" variants)
- **Short description:** xAI's 2026-04-30 reasoning model positioned as the enterprise-agent workhorse — 1M context, configurable reasoning, and (per xAI/Bedrock) the lowest hallucination rate and best τ²-Bench Telecom tool-calling score among frontier models, at roughly 40–60% lower token prices than Grok 4.20.
- **Provider / access:** xAI API `grok-4.3` (alias `grok-4.3-latest`, Chat Completions, OpenAI-compatible); Amazon Bedrock GA 2026-06-17 (`xai.grok-4.3`); Oracle OCI (`xai.grok-4.3`); Venice, Krater and other aggregators. **No OpenCode Zen Free ID** — paid only.
- **Release / knowledge:** released **2026-04-30**; **knowledge cutoff December 2025** (Oracle OCI model page).
- **IDs:** `grok-4.3` (xAI), `grok-4.3-latest` (alias), `xai/grok-4.3` (Bedrock/OCI).
- **Context window:** **1,000,000 tokens (1M)** total prompt + response (xAI docs, OCI, Venice, Krater, CloudPrice). Max output disagrees by host: 32K (Venice), 131,000 (OCI playground cap), 900K (Krater catalogue) — treat max output as host-configured, not a model constant. Higher-context pricing applies above 200K input (xAI docs).
- **Modalities:** **text + image in; text out** (xAI docs "Text, Image → Text"); Krater also lists file input. **Reasoning model** with configurable effort **none / low / medium / high**; function calling, structured outputs, prompt caching and web search supported (xAI docs, Venice, CloudPrice capability flags). No audio/video.
- **Pricing (as of 2026-09-24):** **$1.25 / 1M input, $2.50 / 1M output, $0.20 / 1M cached input** (xAI docs us-east-1; CloudPrice confirms $1.25/$2.50); batch API supported (50% off typically); rates above 200K context are higher. Venice resells at $1.42/$2.83. Paid, no free tier.
- **Architecture:** proprietary; xAI states only an "improved architecture compared with Grok 4.20" (OCI docs) — parameter count, MoE shape and weights undisclosed.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = `no verified public score found`.

Agent / tool use:

- τ²-Bench Telecom: **98%** (Artificial Analysis, +5 pts over Grok 4.20 — tied with GLM-5.1); xAI/Amazon Bedrock news claims **#1** on AA's Tau2 Telecom
- GDPval-AA: **Elo 1500** (Artificial Analysis; +321 vs Grok 4.20 0309 v2's 1179; beats Gemini 3.1 Pro Preview, Muse Spark, GPT-5.4 mini, Kimi K2.5; trails GPT-5.5 (xhigh) by 276 Elo, ~17% expected win rate)
- IFBench: **81%** (Artificial Analysis, carried over from Grok 4.20 0309 v2)
- AA Agentic Index: **17.3** (Krater catalogue, AA-sourced)
- Terminal-Bench 2.0 / 2.1: **no verified public score found** for Grok 4.3 specifically
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** at launch (Artificial Analysis, 2026-04-30) — placed xAI just above Muse Spark and Claude Sonnet 4.6, 4 points ahead of Grok 4.20; costs **$395** to run the full suite (~20% below Grok 4.20 0309 v2)
- AA-Omniscience: **#1 on the benchmark** per xAI/Amazon Bedrock ("lowest hallucination rate among frontier models"); the AA launch article frames it as **+8 accuracy / −8 non-hallucination-rate** vs Grok 4.20 0309 v2 — so accuracy rose while the non-hallucination component fell
- GPQA: **65.8** (pricepertoken.com benchmark row, 49th percentile — **provenance uncertain, treat as provisional**)
- HLE: **no verified public score found**
- CritPt / LCR / MLCR / MMLU-Pro: **no verified public score found**

Coding:

- AA Coding Index: **35.2** (pricepertoken.com, 46th percentile) / **42.2** (Krater catalogue, AA-sourced) — two published values for the same index, both listed
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE: **no verified public score found** for Grok 4.3
- Terminal-Bench: **no verified public score found**
- Vals AI: **#1 on Case Law and Corporate Finance** benchmarks (xAI/Amazon Bedrock news, 2026-06-17) — document-understanding wins, not coding suites
- BenchLM aggregate: **64.0 / 100, public rank #42** (90% interval 53.7–74.2, updated 2026-08-15)

Long context:

- **no long-context retrieval reported** — no MRCR / RULER / NIAH figures published for Grok 4.3; 1M window documented but unmeasured publicly

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Bench Telecom **98%** (AA, joint-best among frontier models) and GDPval-AA **Elo 1500** are exactly the methodology's tool-use anchors — Telecom is frontier-grade, GDPval sits between the `900–1200 → 50–70` and `1750+ → 90–100` references; missing Terminal-Bench, Claw-Eval and MCP numbers cap it at 82.
- **Reasoning: 75/100.** AA Intelligence Index **53** at launch is high-mid (frontier reference is 60+), AA-Omniscience is #1 for hallucination, and IFBench 81% is strong — but GPQA ~65.8 only reaches the 60–80 mid band, HLE is unverified, and no LCR/CritPt data exists, holding it in the mid-70s.
- **Context window: 95/100.** Full 1,000,000-token window hits the ≥1M tier; without a published retrieval measurement (≥98% at 512K+) it cannot take the top of the band, and host-dependent max output (32K–131K) plus above-200K pricing are noted caveats.
- **Multimodal: 68/100.** Text + image (+ file) input and text output only — the top of the "+image in" band (60–70); no video/audio/PDF-verified input, no non-text output.
- **Coding: 62/100.** Only the AA Coding Index (35.2 / 42.2, two conflicting published values) is measurable and it sits well under the 70%+ frontier reference; SWE-bench, LiveCodeBench, SciCode, DeepSWE and Terminal-Bench are all `no verified public score found`, so there is no stronger evidence to raise it.
- **Cost efficiency: 90/100.** $1.25 / $2.50 with $0.20 cached input is cheaper than the methodology's `~$1.25/$4.25 ≈ 88` anchor and AA explicitly places it on the intelligence-vs-cost Pareto frontier (−37.5% input / −58.3% output vs Grok 4.20); held below the 90s-plus by paid-only access and above-200K surcharges.
- **Overall Score: 76/100.** (82 + 75 + 95 + 68 + 62) / 5 = 76.4 → **76** — best fit: a competitively priced 1M-context enterprise agent model with best-in-class tool-calling and low-hallucination claims, but thin public coding-suite evidence.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (xAI docs `grok-4.3` model page, Artificial Analysis launch article 2026-04-30, Amazon Bedrock GA news 2026-06-17, Oracle OCI model page, CloudPrice version/pricing API, BenchLM comparison page, Krater/Venice/pricepertoken catalogues); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
