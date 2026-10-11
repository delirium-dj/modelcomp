# GPT-5.5 — findings by Kimi K3

- Source: OpenAI / GPT-5.5 (`gpt-5.5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's prior-generation flagship (ahead of GPT-5.6 family), a reasoning model notable for a chart-topping τ²-bench tool-use score and strong coding. Sibling: GPT-5.5 Pro.
- **Provider / access:** OpenAI API (`gpt-5.5`, OpenAI-compatible Chat/Responses API).
- **Release / knowledge:** Released 2026-04-23 (OpenCode Data, newly verified — my 2026-09-24 pass had "date not verified"); knowledge cutoff 2025-12-01 (OpenCode Data, new).
- **IDs:** `openai/gpt-5.5` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.1M tokens (OpenCode Data catalog; benchlm.ai listed 1M); max output **128K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/PDF in (OpenCode Data; MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $5/M input, $30/M output, cached input $0.50/M, cache write $5.00/M (OpenCode Data catalog — verified now; note this sits *above* GPT-5.6 Sol's $4/$20 list price).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench Telecom: **98.0%** — best measured among compared models (official openai.com/index/introducing-gpt-5-5 via OpenCode Data; matches benchlm.ai)
- Terminal-Bench: **82.7%** success rate (official page; benchlm.ai TB 2.0: 82.0%; Vals TB 2.1: 76.4%) — plus Codex cross-card rows TB 78.2 (anthropic.com/news/claude-opus-4-8) retain as separate harness
- GDPval: **84.9%** wins-or-ties (official page — new metric row; benchlm.ai's 1396 Elo / 41.8% is the AA-normalized variant; both retained)
- OSWorld-Verified: **78.7%** (official; matches benchlm.ai; note OSWorld 2.0 13.0% — sharp regression on the newer version); CyberGym: **81.8%**; MCP Atlas: **75.3%** (official; matches); Toolathlon: **55.6%** (official; matches)
- BrowseComp: **84.4%** (official page, new this pass)
- Claw-track: ResearchClawBench **17.0%** (benchlm.ai); Claw-Eval proper: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (official page; AA 93.5%; Vals 93.2%)
- HLE: **52.2%** w/ tools, **41.4%** no tools (official page; matches benchlm.ai; AA-HLE 45.8%)
- AA-LCR: **84.3%**; CritPt: **27.1%** (benchlm.ai)
- ARC-AGI-2: **85.0%** (official page; matches benchlm.ai); ARC-AGI-3: **0.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **38.4**; BenchLM overall **69.13/100, #16 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **58.0% / 89.0%** (benchlm.ai)
- FrontierMath v2 T1–3: **51.7%**, Tier 4: **35.4%** (official page; matches benchlm.ai)
- MMLU-Pro (Vals): **88.1%** (benchlm.ai)

Coding:

- SWE-bench Pro: **58.6%** resolve rate (official anthropic.com/news/claude-opus-4-8 cross-card via OpenCode Data; matches benchlm.ai); SWE-bench (Vals): **82.6%**; SWE-bench Verified: no separate verified public score found; SWE-Atlas Codebase QnA: **45.43/75–80.8**, Refactoring **44.79**, Test Writing **42.59** (Scale leaderboards + AA coding-agents; pass@1 vs resolve-rate variants noted)
- AA Coding Agent Index: **65.3 / 60.4 / 57.8** across scaffolds (artificialanalysis.ai/agents/coding-agents via OpenCode Data — new this pass); AA coding-agents TB pass@1 **84.1 / 75.8 / 73.4**, SWE-Bench Pro pass@1 **30.9 / 26.2 / 24.9** (scaffold-sensitivity conflict vs the 58.6% resolve rate — both retained)
- LiveCodeBench (Vals): **85.3%**; Vibe Code Bench: **69.9%** (benchlm.ai)
- AA-SciCode: **55.8%**; AA Coding Index: **74.9** (benchlm.ai)
- React Native Evals: **84.7%**; CursorBench 3.2: **58.4%**; FrontierCode 1.1 Main: **43.0%** (benchlm.ai)

Long context:

- MRCR v2 64K–128K: **83.1%**; MRCR v2 128K–256K: **87.5%** (benchlm.ai); AA-LCR 84.3%; no 512K–1M MRCR row found.

Multimodal:

- MMMU-Pro: **81.2%** (official page; matches benchlm.ai's 81.2/83.2 w/ Python; AA 79.9%); OfficeQA Pro: **54.1%**; Design Arena Website: **1267 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 87/100.** Unchanged: class-best τ²-bench 98% (official-confirmed) plus OSWorld-Verified 78.7%, MCP Atlas 75.3%, CyberGym 81.8%; capped by OSWorld 2.0 collapse (13.0%) and ExploitGym-style weak rows.
- **Reasoning: 83/100.** Unchanged: GPQA 93.6%, HLE 52.2%, LCR 84.3%, ARC-AGI-2 85% (all official-confirmed); capped by FrontierMath v2 51.7%/35.4% and hallucination rate 89%.
- **Context window: 86/100.** Unchanged: 1.1M window with MRCR v2 83.1–87.5% up to 256K and LCR 84.3%; 128K output verified; capped by missing >256K retrieval rows.
- **Multimodal: 78/100.** Unchanged: vision/doc input (MMMU-Pro ~81–83%, official-confirmed, OfficeQA Pro 54.1%); no audio/video rows, text-only output.
- **Coding: 83/100.** Unchanged: LiveCodeBench 85.3%, SWE-bench (Vals) 82.6%, Coding Agent Index up to 65.3; capped by the scaffold-sensitive SWE-Bench Pro (30.9% AA pass@1 vs 58.6% resolve) and CursorBench 3.2 58.4%.
- **Cost efficiency: 55/100.** Adjusted from provisional 60: verified catalog $5/$30 sits *above* GPT-5.6 Sol's $4/$20 — prior-gen pricing assumption was wrong.
- **Overall Score: 83/100.** Mean of the five quality dims (87+83+86+78+83)/5 = 83.4 → 83. Best fit: tool-call-heavy agent pipelines (τ²-class) on the OpenAI stack where last-gen familiarity outweighs the pricing oddity vs GPT-5.6 Sol.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official openai.com/index/introducing-gpt-5-5 table + Anthropic cross-card + AA coding-agents transcribed by OpenCode Data `openai/gpt-5-5`; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release date (2026-04-23), cutoff (2025-12-01), 128K max output and $5/$30 pricing (correcting the "cheaper prior-gen" assumption); flagged the SWE-Bench Pro resolve-vs-pass@1 scaffold conflict. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
