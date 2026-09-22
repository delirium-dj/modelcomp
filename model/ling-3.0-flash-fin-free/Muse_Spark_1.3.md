# Ling 3.0 Flash Fin Free — findings by Muse Spark 1.3

- Source: InclusionAI/Ling-3.0-flash-Fin (Ant Group), e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** Ant Group InclusionAI's finance-tuned MoE (124B/5.1B) for source-grounded financial research, valuation spreadsheets, and tool-intensive banking workflows, served as a limited-time $0 Zen promo. Retains base coding/math with document-heavy finance specialization.
- **Provider / access:** OpenCode Zen `opencode/ling-3-0-flash-fin-free` at `https://opencode.ai/zen/v1/chat/completions` (Chat Completions, OpenAI-compatible). Weights `inclusionAI/Ling-3.0-flash-Fin` (BF16, MIT) + FP4/FP8 quants; SGLang/vLLM compatible.
- **Release / knowledge:** 2026-08-27 unannounced free API listing; 2026-08-28 official launch with CICC; 2026-09-03 MIT BF16 weights; 2026-09-16 first independent AA score; knowledge cutoff undisclosed
- **IDs:** `opencode/ling-3-0-flash-fin-free` (Zen Free promo); `inclusionAI/Ling-3.0-flash-Fin` (HF)
- **Context window:** 262,144 total (256K marketed) / 32,768 max out — verified via Pi (`pi.dev/models/opencode/ling-3-0-flash-fin-free`), Vercel AI Gateway, and HF card (thinking mode on by default, temp 1.0 / top-p 0.95 / top-k 20 recommended)
- **Modalities:** text in/out only; reasoning yes (thinking mode default); tool calls yes (function calling for data/calc tools); JSON mode via standard chat API
- **Pricing (as of 2026-09-22):** Free $0 in/out Zen limited-time promo tier (Vercel promo + Zen access; paid list price unpublished — scored 100 only for the evaluated $0 tier, outputs need professional review, not investment advice)
- **Architecture:** MoE 124B total / 5.1B active per token, same arch as Ling-3.0-flash (SGLang/vLLM runtimes), finance fine-tune with CICC experts; FinFIRST (123 items, 701 granular points, Apache-2.0) released alongside for verification

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench v4.0: **0%** (orcarouter 2026-08-27 review of AA data: both Fin and VL score 0% — verified zero, not missing)
- AutomationBench-AA: **7%** (orcarouter review of AA data; VL 16% on same cut)
- GDPval-AA v2: **1171 Elo** (Artificial Analysis article 2026-09-16; VL 1225, MiniMax-M2.7 1087 on same set) and **29.6%** (OpenRouter AA panel for Fin — different normalization, both listed)
- AA-Briefcase: **967 Elo** (AA article; VL 986; rubric 23.5% vs 24.9%, Analytical 866 vs 907, Presentation 1095 vs 1076)
- Tau3-Banking: **no verified public score found with a number** (HF card lists τ³-Banking among evaluated suites — FinFIRST, FinSearchComp, FinCRAFT, Finance Agent, APEX-Agents, SpreadsheetBench, τ³-Banking — but publishes no τ³-Banking percentage)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- FinCRAFT: **54.23% BF16** (HF `Fin-fp4` card table; FP8 55.91%, INT4 54.48%, FP4 54.73%)
- FinSearchComp Verified (FSC-verified): **78.28% BF16** (HF card; FP8 77.48%)
- Finance tooling note: vendor reports competitive with similarly sized + larger general models on source selection and tool-intensive financial tasks (HF/haimaker summaries — qualitative, unscored)

Reasoning / knowledge:

- GPQA Diamond: **86.30% BF16** (HF card table; FP8 85.26%, INT4 85.39%, FP4 84.38%) — Fin-specific, not base proxy
- HLE: **22.6%** (OpenRouter AA panel + puter aggregate; orcarouter notes Fin below VL on broad reasoning)
- LCR: **73.7%** (OpenRouter AA `AA-LCR` + puter `LCR Long-context reasoning` 73.7%)
- CritPt: **2.6%** (OpenRouter AA panel)
- Artificial Analysis Intelligence Index: **23 points v4.3** (AA article 2026-09-16, independent; parent Ling-3.0-flash 21, VL 25 on same revision — older v4 build 38 for base is NOT comparable)
- Artificial Analysis Finance & Accounting Index: **24 points** (AA article; ties VL 24; business-knowledge acc 17% vs VL 11%, non-hallu 67% vs 81%)
- Artificial Analysis Coding Index: **55.6** (OpenRouter AA panel; 61st percentile per puter) and Agentic Index **27.9** (OpenRouter AA panel)
- Omniscience Accuracy / Non-Hallucination: **17.9% / 60.5%** (OpenRouter AA panel; business-knowledge non-hallu 67% per AA article — different slice, both listed)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified Fin-specific public score found** (prior twin's 56.6% was base-model proxy and is NOT carried here)
- LiveCodeBench: **no verified public score found**
- SciCode: **41.84% BF16** (HF card; FP8 42.70%) and **42.4%** (OpenRouter AA `SciCode` + puter `Scientific programming` 42.4% — same cut, both listed)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: Coding Index **55.6** above (AA); no Fin-specific DeepSWE run published

Long context:

- AA-LCR 73.7% at 262K family (OpenRouter AA panel — longest-context proxy)
- MRCR / RULER / GraphWalks at stated length: **no MRCR/RULER percentage reported at 256K** (262,144 window verified; retrieval proof is LCR-only)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 62/100.** GDPval 1171 + Briefcase 967 show document-workflow competence with FinCRAFT 54.2/FSC 78.3 finance-tool strength; capped hard by Automation 7% and TB4.0 0% on general agentic execution.
- **Reasoning: 70/100.** GPQA 86.3 Fin-specific is strong with Index 23 beating parent (21); capped by HLE 22.6, CritPt 2.6, and hallu 60.5–67 trailing VL (81).
- **Context window: 73/100.** 262K tier (200K–500K maps 65–84, 200K = 70) with LCR 73.7% support; capped below 1M models with no 512K+ proof.
- **Multimodal: 15/100.** Text-only in/out (verified Pi/Vercel/HF); standard text-only band.
- **Coding: 68/100.** SciCode ~42 with Coding Index 55.6 (61st percentile); capped by zero Fin-specific SWE/LiveCode/Vibe runs.
- **Cost efficiency: 100/100.** $0 Zen/Vercel promo tier in/out; paid list unpublished so scored only on evaluated $0 tier.
- **Overall Score: 58/100.** Mean of the five non-cost dims (62+70+73+15+68)/5 = 57.6 → 58; best-fit as niche finance-research + spreadsheet agent, not a general planner/coder.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-22
- Method: public internet research (HF `inclusionAI/Ling-3.0-flash-Fin-fp4` card tables, AA article 2026-09-16, OpenRouter AA panel + puter aggregate, orcarouter 2026-08-27 review, haimaker/vercel/pi model pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
