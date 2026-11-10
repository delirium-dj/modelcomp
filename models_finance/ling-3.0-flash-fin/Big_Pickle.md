# Ling 3.0 Flash Fin (free) — findings by Big Pickle

- Source: Ant Group / inclusionAI (`inclusionai/ling-3.0-flash-fin`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin (free)
- **Short description:** Ant Group's first finance-enhanced open-weights MoE, continued-trained from Ling 3.0 Flash on high-quality financial data with financial institutions and domain experts (built with CICC). Best fit: SOURCE-GROUNDED FINANCIAL RESEARCH — retrieving and citing primary sources, valuation spreadsheets, and investment reports at zero token cost; keep it away from general agentic execution.
- **Provider / access:** OpenRouter free endpoint (`inclusionai/ling-3.0-flash-fin:free`, rate-limited) and NovitaAI free; DeepInfra paid fp4 ($0.06/$0.18 per 1M); BF16 weights (≈255 GB / 64 shards) on Hugging Face under **MIT** license (FP8/INT4/FP4 quantizations too). No Zen Free ID — the endpoint itself is free.
- **Release / knowledge:** Surfaced as an unannounced free API listing 2026-08-27; official launch 2026-08-28 (announced alongside FinFIRST benchmark); MIT weights released 2026-09-03; first Artificial Analysis independent score 2026-09-16. Free API trial ran ~1 month (through ~late Sep 2026); no paid list price published by Ant.
- **IDs:** `ling-3.0-flash-fin` (OpenRouter `inclusionai/ling-3.0-flash-fin:free`; HF `inclusionAI/Ling-3.0-flash-Fin` etc.).
- **Context window:** 262,144 tokens; up to 32,768 completion tokens.
- **Modalities:** text in/out only (no image/audio/video; no enforced JSON `response_format`).
- **Pricing (as of 2026-09-23):** $0 / $0 per 1M on the free API endpoints; MIT weights = free to self-host. DeepInfra fp4 list $0.06/$0.18 (blended ~$0.09/M, among the cheapest fifth of ranked models per BenchLeader).
- **Architecture:** MoE, 124B total / 5.1B active; explicit reasoning mode; finance-tuned variant of Ling 3.0 Flash (base scores 21 on AA Index v4.3); ~67k output tokens per AA Index task (~34% more than the VL sibling).

### Raw benchmarks found

Agent / tool use (Artificial Analysis v4.x unless noted; run stored at BenchLeader):

- AA Agentic Index: **29.3**; AutomationBench-AA: **7%**; Terminal-Bench v4.0: **0%** (difficult terminal tasks)
- GDPval-AA v2: **1171 Elo** (agentic professional work; vs VL 1225; above MiniMax-M2.7's 1087); GDPval-AA 33.5%
- AA-Briefcase: **967 Elo** (complex business workflows; passes 23.5% of rubric checks)
- τ²-Bench Banking (AA): **38.6%** (#37); Analyst Agent (AA): **16.3%** (#22); APEX-Agents (AA): **27.4%** (#15; vendor chart claims 29.2%)
- Finance Agent v2 (InclusionAI launch chart): **59.8%** (vs Gemini 3.5 Flash 57.9%)
- AA-Omniscience: **−14.6** (#166; accuracy 17.9%, non-hallucination 60.5%)
- Finance & Accounting Index (AA): **24** (business-knowledge accuracy 17%, business-knowledge hallucination 33%)

Reasoning / knowledge:

- AA Intelligence Index: **23.0** (#145; v4.3 — vendor card's older v4.1.1 figure of 41 is NOT comparable)
- GPQA Diamond (BF16, HF card): **86.30%** (85.26 FP8 / 84.38 FP4)
- HLE (AA): **22.6%** (#150); CritPt (AA): **2.6%** (#141)
- FinFIRST (Ant-built, CICC-validated): strong on source selection/citation, but **no third-party run published**

Coding:

- AA Coding Index: **55.6** (#110); SciCode (AA): **42.4%** (41.84 BF16 / 41.24 FP4)

Long context:

- Window 262K; **AA-LCR: 73.7%** (#130) — a real long-context comprehension measurement.

### Normalized scores (1–100)

- **Tool use: 50/100.** Document- and spreadsheet-oriented agentic work holds up (GDPval 1171 Elo, Finance Agent 59.8%, τ²-Banking 38.6%), but hard general agentic execution is essentially absent: AutomationBench 7%, Terminal-Bench v4.0 0%, AA-Omniscience −14.6.
- **Reasoning: 60/100.** GPQA 86.3% is respectable and the finance domain tuning is real (Finance & Accounting Index 24), yet the v4.3 Intelligence Index 23, HLE 22.6%, and CritPt 2.6% cap it at mid-tier.
- **Context window: 78/100.** 262K with a measured AA-LCR 73.7% — solidly in the 200K–500K band with retrieval evidence.
- **Multimodal: 15/100.** Strictly text-in / text-out.
- **Coding: 66/100.** AA Coding Index 55.6 and SciCode 42.4% are mid-tier; coding is not its focus.
- **Cost efficiency: 100/100.** Permanently free (rate-limited) endpoints plus MIT open weights; even paid fp4 hosting blends ~$0.09/M.
- **Overall Score: 54/100.** (50 + 60 + 78 + 15 + 66) / 5 = 53.8 → **54** (BenchLeader overall index ≈ 55.4, consistent). Best-fit: budget finance research/citation workflows; do not route general agentic or terminal-heavy work through it.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (artificialanalysis.ai article, openrouter.ai, orcarouter.ai analysis, huggingface.co model cards + README commit, benchlm.ai, benchleader.com, opengodmode.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.