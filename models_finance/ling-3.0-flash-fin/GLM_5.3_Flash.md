# Ling 3.0 Flash Fin Free — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`opencode/ling-3-0-flash-fin-free`; upstream `inclusionAI/Ling-3.0-flash-Fin`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free (finance-enhanced free tier of Ling-3.0-flash-Fin)
- **Short description:** The first finance-enhanced model in Ant's Ling family — Ling-3.0-flash continued-trained on high-quality financial data with financial institutions and domain experts, built for end-to-end financial research agents (retrieval → evidence review → calculation → modeling → report). Retains general reasoning, coding, and math capability from the base model.
- **Provider / access:** OpenCode Zen free tier `opencode/ling-3-0-flash-fin-free` (Chat Completions; limited-time promo — Zen's free-period privacy note explicitly says collected data may be used to improve the model); OpenRouter `inclusionai/ling-3.0-flash-fin` (DeepInfra, $0.06/$0.18 per 1M, $0.012 cached); open weights on Hugging Face (MIT, BF16, shared SGLang/vLLM runtimes with the base).
- **Release / knowledge:** Hugging Face repo created 2026-09-03 (AA lists the Fin release as 2026-09-11; OpenRouter lists Aug 27 for the family). Knowledge cutoff: not published in reviewed sources.
- **IDs:** `opencode/ling-3-0-flash-fin-free` (Zen), `inclusionai/ling-3.0-flash-fin` (OpenRouter/DeepInfra/HF).
- **Context window:** 262,144 tokens total (marketed 256K; AA: 262K) / 32K max output (Zen catalog).
- **Modalities:** text in / text out only (AA confirms no image input); reasoning model (thinking on by default — recommended temp 1.0, top-p 0.95, top-k 20); tool calling supported (Novita/DeepInfra routes).
- **Pricing (as of 2026-09-21):** **$0** on the evaluated Zen free tier (limited-time promo, with the training-data caveat above); paid routes $0.06/$0.18 per 1M (DeepInfra via OpenRouter, cache $0.012); MIT weights make self-hosting free.
- **Architecture:** MoE, 124B total / 5.1B active per token (hybrid-linear "bailing" architecture inherited unchanged from Ling-3.0-flash; BF16 checkpoint); domain continued-training only, no architecture change; FinFIRST evaluation dataset open-sourced alongside.

### Raw benchmarks found

> Independent Artificial Analysis rows via OpenRouter's benchmark table (fetched 2026-09-21). The vendor's own finance evals (FinFIRST, FinSearchComp Verified, FinCRAFT, Finance Agent, APEX-Agents, SpreadsheetBench) are claimed "competitive with similarly sized and substantially larger general-purpose models" but published only as charts — no numeric table surfaced; treated as unverified claims.

Agent / tool use:

- Agentic Index (AA): **27.9**
- GDPval-AA: **29.6%** (OpenRouter AA table)
- Tau3-Banking / Tau2-Bench: no verified public score found (vendor-claimed τ³-Banking eval, chart-only)
- Terminal-Bench 4.0: no verified public score found (component of AA's Index composite, not broken out on OpenRouter)
- MCP Atlas / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE: **22.6%** (OpenRouter AA table)
- AA Intelligence Index: **22.6** (OpenRouter; AA model page rounds to 23, rank #3/65 within the open-weights size class, well above the class median 8)
- AA-LCR: **73.7%** (strong long-context reasoning)
- AA-Omniscience: Accuracy **17.9%** / Non-Hallucination **60.5%**
- CritPt: **2.6%** (very weak on research physics)
- GPQA Diamond: no verified public score found (OpenRouter's DeepInfra auto-eval row shows 19.7%, unattributed to AA — noted, not scored)
- MMLU-Pro / LCR / MLCR: no verified public score found

Coding:

- Coding Index (AA): **55.6**
- SciCode: **42.4%**
- CritPt (science-coding overlap): **2.6%**
- SpreadsheetBench: vendor-claimed eval, chart-only — no verified public score found
- SWE-bench Verified / SWE-Pro / LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR / RULER / GraphWalks at window length; AA-LCR 73.7% is the only long-context evidence)

Operational notes (context, not scored): 156 tok/s output, 2.86 s TTFT (AA, InclusionAI API); very verbose (250M output tokens on the Index run vs 100M class median).

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic Index 27.9 and GDPval-AA 29.6% are the only measured agent rows and both sit low-mid; the vendor's tool-intensive finance-agent claims (τ³-Banking, Finance Agent, APEX-Agents) come without publishable numbers — mid-band with an evidence gap.
- **Reasoning: 58/100.** HLE 22.6% and AA-LCR 73.7% (long-context reasoning is a real strength) plus Intelligence Index 22.6 (top of the open-weights size class, #3/65) put it in the mid band; AA-Omniscience accuracy 17.9% and CritPt 2.6% drag it down.
- **Context window: 72/100.** 262,144 tokens (256K marketed) lands on the 200K tier baseline of 70 with a small bump for headroom; 32K max output noted; no published retrieval benchmark caps it there.
- **Multimodal: 15/100.** Text in/out only — AA confirms no image input.
- **Coding: 58/100.** Coding Index 55.6 and SciCode 42.4% are mid-band; no SWE-bench/LiveCodeBench/DeepSWE rows exist for the Fin variant, and SpreadsheetBench results are chart-only — scored on the AA rows alone.
- **Cost efficiency: 100/100.** Evaluated tier is $0 (Zen free promo; AA also lists a $0.00/$0.00 route) — the standard free-tier score, flagged: time-limited, and the free period's collected data may be used to improve the model; MIT weights remain the unlimited self-host escape hatch.
- **Overall Score: 53/100.** (60 + 58 + 72 + 15 + 58) / 5 = 52.6 → 53. Best fit: a free, tool-using specialist for financial research, evidence review, and spreadsheet/valuation workflows; keep general coding and physics-adjacent reasoning on a stronger generalist and re-check once the vendor's finance benchmark numbers are published as a table.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-21
- Method: public internet research (OpenRouter AA benchmark table + DeepInfra pricing, AA model page, Hugging Face model card, OpenCode Zen free-period privacy notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

