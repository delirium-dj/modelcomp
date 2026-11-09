# Claude Opus 4.7 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7 (Adaptive reasoning variant) — **LEGACY SKU (three generations behind)**
- **Short description:** Anthropic's April-2026 Opus — long-horizon agentic coding and computer-use flagship that introduced the 1M tokenizer and 300K Batch extended-output. **Now three generations behind** (Opus 5.5 → Opus 5 → Opus 4.8 → Opus 4.7). Listed under "Legacy models (still available)". BenchLM (Adaptive): 68.11/100, #21/1009.
- **Provider / access:** Anthropic API (`claude-opus-4-7`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry, AWS. **OpenCode Zen carries Opus 4.8 route (`opencode/claude-opus-4-8` at $5/$25), no separate 4.7 route.** Anthropic Messages API.
- **Release / knowledge:** 2026-04-16 release; **knowledge cutoff not restated by Anthropic** (models-overview cutoff covers current lineup only). Superseded by Opus 4.8 (May 2026), Opus 5, Opus 5.5.
- **IDs:** `claude-opus-4-7` (all platforms). **Adaptive reasoning variant** (BenchLM 68.11, #21) is the main SKU; non-adaptive sibling scores 65.18 (#31).
- **Context window:** 1,000,000 tokens (1M) — **this generation introduced the 1M tokenizer**; max output 128K sync, **300K on Message Batches API** with `output-300k-2026-03-24` beta header (one of two Anthropic SKUs with this, alongside Opus 5).
- **Modalities:** Text, image in; text out. Adaptive thinking (effort parameter); tool calls; JSON mode. **No audio/video.**
- **Pricing (as of 2026-11-08):** **No dedicated rate card published for this SKU**; Zen's nearest route is Opus 4-series at **$5/M in, $0.50/M cache read, $25/M out** (same as Opus 4.8/5). Batch 50% off. Fast mode research preview $30/$150. **Strictly dominated at equal price by Opus 4.8 (69.63) and Opus 5 (79.68) at same $5/$25.**
- **Architecture:** Proprietary, closed weights; **introduced adaptive thinking**; parameter count undisclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official Anthropic sources. **Average of 23 qualifying raters: 89.9 Overall** (Tool 90, Reasoning 91.3, Context 94.2, Multimodal 81.5, Coding 92.3). Queue: 89.9. Step 5 Preview: 79. GLM 5.3 Flash: 82. My original: 70.

Agent / tool use:

- Terminal-Bench 2.0: **69.4%** (vendor) / **aaTerminalBench21: 83.1%** (AA) — **note: 2.0 harness, no TB 2.1 figure** (Step 5 / GLM)
- Terminal-Bench 2.1: **68.5%** (Vals) / **69.7%** (GLM, thinking-high) / **83.1%** (aaTerminalBench21, AA) — **no official TB 2.1 figure from Anthropic** (Step 5 / GLM)
- Terminal-Bench Hard: **51.5–54.5%** (aggregators) (GLM)
- BrowseComp: **79.3%** (vendor) / **79.3%** (Step 5)
- MCP Atlas: **77.3%** (vendor) / **77.3–79.1%** deep-thinking (Epoch hub) / **77.3%** (Step 5 / GLM)
- OSWorld-Verified: **78.0%** (vendor) / **78.0%** (Step 5)
- OSWorld 2.0: **18.2%** (vendor) / **18.2%** (Step 5) — **second-worst in batch** (Step 5)
- GDPval-AA v2.1: **Elo 1,396** (vendor/aggregator) / **42.6% normalized** (AA) / **Elo 1,396** (GLM / Step 5) — far under 1,750+ frontier
- aaTerminalBench21: **83.1%** (AA) (Step 5)
- τ²-Bench Telecom: **88.6%** (vendor) / **88.6%** (Step 5)
- τ³-Banking: **40.2%** (aggregator/AA) (GLM / Step 5)
- GDPval-AA: **Elo 1,396** / **42.6% normalized** (AA) (GLM / Step 5)
- AA Agentic Index: **39.5%** (AA) / **39.5%** (Step 5)
- AA ITBench: **46.7%** (AA) / **46.7%** (Step 5)
- AA-AnalystAgent: **43.8%** (AA) / **43.8%** (Step 5)
- JobBench: **45.9%** (Step 5)
- AutomationBench: **13.4%** (Epoch hub — weak) (GLM)
- Agents' Last Exam: **21.1%** (GLM)
- CyberGym: **73.1%** (Step 5)
- JobBench: **45.9%** (Step 5)
- AA ITBench: **46.7%** (Step 5)
- AA-AnalystAgent: **43.8%** (Step 5)
- AA Agentic Index: **39.5%** (Step 5)
- Finance Agent v1.1: **64.4%** (vendor, SOTA at launch) (GLM)
- Finance Agent v2: **51.5%** (GLM)
- GDPval-AA v2.1: **Elo 1,396** / **1,396 Elo** (GLM / Step 5)
- AA Briefcase v1.1: **Elo 1,252** (aggregators) (GLM)
- **τ³-Banking / Claw-Eval / Toolathlon / AutomationBench / ALE: no verified public score found** (Step 5 / GLM)
- GDPval-AA: **Elo 1,396** (GLM / Step 5)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (vendor, system card) / **91.4%** (AA) / **91.41%** (GLM) — **clears 90%+ on both** (Step 5 / GLM)
- HLE: **54.7%** with tools (vendor) / **46.9%** without (vendor) / **42.3%** AA-HLE (AA) / **54.7% / 46.9%** (Step 5) — clears 40%+ reference
- AA-LCR: **78.7%** (AA) / **78.7%** (Step 5 / GLM)
- MRCR v2 128K–256K: **59.2%** (vendor) / **59.2%** (Step 5) — **one of few measured retrieval figures in batch, well below ≥98% threshold** (Step 5)
- ARC-AGI-2: **75.8%** (ARC Prize semi-private, max) / **75.8%** (Step 5 / GLM)
- ARC-AGI-1: **93.5%** (ARC Prize semi-private) / **93.5%** (Step 5 / GLM)
- ARC-AGI-3: **0.2%** (ARC Prize semi-private) / **0.2%** (Step 5 / GLM) — **very weak**
- FrontierMath v2: Tiers 1-3 **70.2%** / Tier 4 **31.7%** (Epoch AI) / Tiers 1-3 **43.8%** / Tier 4 **22.9%** (GLM, vendor) — **large discrepancy (vendor vs Epoch)**
- AA Intelligence Index: **40.7** (AA) / **40.7** (Step 5) — no composite index credit
- CritPt: **12.0%** (AA) / **12.0%** (Step 5) — **weak**
- AA-Omniscience: index **27.3**, accuracy **48.9%**, hallucination **42.3%** (AA) / **48.88%** (GLM)
- HLE: **54.7%** w/tools (vendor) / **46.9%** w/o tools (vendor) / **42.3%** AA-HLE (AA) / **54.7% / 46.9%** (Step 5) — clears 40%+ ref
- MMLU-Pro: **no verified public score found** (GLM / Step 5)
- AA-IFBench: **58.6%** (GLM)
- CritPt: **12.0%** (AA) / **12.0%** (Step 5) — weak
- FrontierMath v2: Tiers 1-3 **43.8%** / Tier 4 **22.9%** (GLM) / Tiers 1-3 **70.2%** / Tier 4 **31.7%** (Epoch v2 w/tools) — **large vendor-Epoch discrepancy**
- AA-Omniscience: accuracy **48.9%** / hallucination **42.3%** (Step 5) / index **48.88%** (GLM)
- FrontierMath legacy: **43.8%** (GLM)
- AA-Omniscience: **48.88%** (GLM)
- CritPt: **12.0%** (AA) / **12.0%** (Step 5)
- FrontierMath: T1-3 **43.8%**, Tier 4 **22.9%** (GLM) / T1-3 **70.2%** / Tier 4 **31.7%** (Epoch v2 w/tools) — **large vendor-Epoch discrepancy**

Coding:

- SWE-bench Verified: **87.6%** (vendor, memorization-screened) / **87.6%** (Step 5 / GLM) — **solidly frontier for legacy SKU**
- SWE-bench Pro: **64.3%** (vendor) / **64.3%** (Step 5 / GLM)
- SWE-bench (Vals): **83.1%** (Terminus-2) / **69.7%** (thinking-high, rank 43/61) / **83.1%** (GLM)
- SWE-bench Pro: **64.3%** (vendor) / **64.3%** (Step 5)
- Terminal-Bench 2.0: **69.4%** (vendor, Terminus-2, thinking disabled) / **69.4%** (Step 5)
- Terminal-Bench 2.1 (Vals): **83.1%** (aggregator Terminus-style) / **69.7%** (thinking-high, rank 43/61) / **83.1%** (GLM)
- Terminal-Bench Hard: **51.5–54.5%** (aggregators) (GLM)
- LiveCodeBench: **76.91%** (llmboard) / **76.91%** (GLM)
- LiveBench: **76.91%** (GLM)
- SWE-bench (Vals): **83.1%** / **69.7%** (thinking-high) (GLM)
- SWE-bench Pro: **64.3%** (vendor) / **64.3%** (Step 5)
- FrontierSWE: **63.0%** (llmboard) / **63.0%** (GLM)
- Vibe Code Bench v1.1: **71.0%** (Vals) / **71.0%** (Step 5)
- CursorBench: **70%** (partner eval) / **70%** (GLM)
- FrontierCode 1.1 Main: **38.5%** (Cognition) / **38.5%** (GLM)
- AA Coding Index: **73.6%** (AA) / **73.6%** (Step 5) — clears 70%+ frontier reference
- DeepSWE: **no verified public score found** (GLM / Step 5)
- LiveCodeBench: **no verified public score found** (Step 5 / GLM)
- AA-SciCode / Vibe Code Bench / FrontierCode: **no verified public score found** (Step 5 / GLM)
- SWE-bench Verified: **87.6%** (vendor, memorization-screened) / **87.6%** (Step 5 / GLM) — **solidly frontier for legacy SKU**
- AA Coding Index: **73.6%** (AA) / **73.6%** (Step 5) — clears 70%+ frontier reference

Multimodal:

- CharXiv: **91.0%** with tools / **82.1%** without (vendor) / **91.0%** (Step 5 / GLM) — **best document/chart figure in batch**
- AA-MMMU-Pro: **78.8%** (AA) / **78.8%** (Step 5)
- OfficeQA Pro: **43.6%** (vendor) / **43.6%** (Step 5) — weak
- XBOW Visual Acuity: **98.5%** (partner eval) (GLM)
- MMMU-Pro: **78.8%** (GLM)
- CharXiv-R: **91.0%** w/tools / **82.1%** w/o (GLM)
- Vision2Web: **XBOW Visual Acuity 98.5%** (partner eval) (GLM)

Long context:

- MRCR v2 128K–256K: **59.2%** (vendor) / **59.2%** (Step 5) — **one of few measured retrieval figures in batch, well below ≥98% threshold** (Step 5)
- AA-LCR: **78.7%** (AA) / **78.7%** (Step 5)
- MRCR v2 128K–256K: **59.2%** — weakest measured retrieval in batch (Step 5)
- **No vendor MRCR / RULER / GraphWalks score found** (GLM)
- Aggregator long-context memory probes weak: Context Arena **46.7**, EBR-bench **19.1** (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 23 qualifying raters = **89.9 Overall** (Tool 90, Reasoning 91.3, Context 94.2, Multimodal 81.5, Coding 92.3). Queue: 89.9. Step 5 Preview: 79. GLM 5.3 Flash: 82. My original: 70. **LEGACY: three generations behind, superseded by Opus 4.8/5/5.5.**

- **Tool use: 78/100.** (was 55) TB 2.0 **69.4%**, BrowseComp **79.3%**, MCP Atlas **77.3%**, OSWorld-Verified **78.0%**, τ²-Bench Telecom **88.6%**, GDPval-AA **1,396 Elo**, CyberGym **73.1%**, aaTerminalBench21 **83.1%**. **Capped by:** no TB 2.1 (only 2.0), OSWorld 2.0 **18.2%** (2nd worst in batch), GDPval **1,396 Elo** (under 1,750+ frontier), no τ³-Banking/Claw-Eval/Toolathlon/AutomationBench/ALE, TB Hard **51.5-54.5%**.
- **Reasoning: 84/100.** (was 55) GPQA Diamond **94.2% vendor / 91.4% AA** (clears 90%+ on both), ARC-AGI-2 **75.8%**, HLE **54.7% w/tools**, MRCR v2 128K-256K **59.2%**, AA-LCR **78.7%**, ARC-AGI-1 **93.5%**, ARC-AGI-2 **75.8%**, ARC-AGI-3 **0.2%** (very weak). **Capped by:** AA Intelligence Index **40.7** (no composite credit), CritPt **12.0%**, ARC-AGI-3 **0.2%**, FrontierMath T4 **22.9%** (Epoch) / **31.7%** (vendor), hallucination **42.3%**, MRCR **59.2%** (weakest in batch).
- **Context window: 96/100.** (was 95) 1M native, **300K Batch output** (this gen introduced it), AA-LCR **78.7%**, MRCR v2 **59.2%** (weakest measured retrieval in batch). Held at 96 (not 98) due to MRCR **59.2%** (far below ≥98% threshold) and no GraphWalks/RULER.
- **Multimodal: 74/100.** (was 65) Text + image in; CharXiv **91.0%** (best document/chart figure in batch), AA-MMMU-Pro **78.8%**, XBOW Visual Acuity **98.5%** (partner eval). **Capped by:** no video/audio/PDF input, text-only output, OfficeQA Pro **43.6%** (weak), Design Arena not published.
- **Coding: 86/100.** (was 80) SWE-bench Verified **87.6%** (solidly frontier for legacy), SWE-bench Pro **64.3%**, LiveCodeBench **76.91%** (llmboard), AA Coding Index **73.6%** (clears 70%+ ref), DeepSWE (no verified), AA-SciCode (no verified), LiveCodeBench (no verified), FrontierCode 1.1 **38.5%**, Vibe Code **71.0%**, CursorBench **70%**. **Capped by:** no AA-SciCode/DeepSWE/LiveCodeBench/Vibe Code/FrontierCode, TB 2.0 **69.4%** (older harness), two newer Opus generations ahead.
- **Cost efficiency: 45/100.** (was 45) $5/$25 legacy list unchanged; **Opus 4.8 (69.63) and Opus 5 (79.68) beat it at same $5/$25**. Batch 50% off. $0.50 cache read. No free tier. Fast mode $30/$150.
- **Overall Score: 83.6/100.** (was 70) Half-up mean of (78 + 84 + 96 + 74 + 86) / 5 = 418 / 5 = 83.6 → **84**. **Below average of 23 qualifying raters (89.9).** Best-fit: **Legacy SKU with genuine remaining asset** — 300K Batch extended-output + 1M window it introduced, SWE-bench Verified 87.6%, CharXiv 91.0% (batch best). **Strictly dominated at equal $5/$25 by Opus 4.8 (69.63) and Opus 5 (79.68).** Migrate unless 300K Batch output specifically needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 79), GLM 5.3 Flash (2026-11-02, Overall 82) + official Anthropic sources (Opus 4.7 announcement chart, system card, models overview, pricing). **Average of 23 qualifying raters: 89.9 Overall.** Queue: 89.9. **Critical findings:** Legacy (3 gens behind); 300K Batch output + 1M window (introduced by this gen); SWE-bench Verified 87.6% (legacy frontier); CharXiv 91.0% (batch best); MRCR 59.2% (weakest in batch); strictly dominated at $5/$25 by Opus 4.8/5; no TB 2.1/DeepSWE/AA-SciCode/LiveCodeBench.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
  - [Anthropic — Models Overview (1M tokenizer lineage, 300K Batch, legacy status)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Opus 4.7 Adaptive (68.11/100, #21/1009, 39 rows)](https://benchlm.ai/models/claude-opus-4-7-adaptive)
  - [Artificial Analysis — Opus 4.7](https://artificialanalysis.ai/models/claude-opus-4-7)
  - [ARC Prize — Opus 4.7](https://arcprize.org/leaderboard)
  - [JobBench](https://arxiv.org/abs/2605.26329)
  - [OSWorld 2.0](https://arxiv.org/abs/2606.29537)
  - [OpenCode Zen — Model List](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---