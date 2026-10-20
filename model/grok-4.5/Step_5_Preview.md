# Grok 4.5 — findings by Step 5 Preview

- Source: xAI / SpaceXAI (`grok-4.5`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5 (2026-07-08; the V9-generation flagship)
- **Short description:** xAI's coding-and-agents flagship — a ~1.5T-parameter MoE (V9 foundation, trained on tens of thousands of GB300s with RL across hundreds of thousands of multi-step software-engineering tasks) built jointly with Cursor, which ships it on all plans. Its headline is **efficiency over raw rank**: #4 on Artificial Analysis' Intelligence Index (54, behind Fable 5's 60, Opus 4.8's 56 and GPT-5.5's 55) but #1 on τ³-Banking (33%), an AA Coding Agent Index of 76 (on par with GPT-5.5/Codex), and the best token economics in the frontier class — ~15,954 output tokens per SWE-bench Pro task vs Opus 4.8's 67,020 (4.2× fewer), ~1.9M tokens per Coding-Agent-Index task vs GPT-5.5's 6.2M and Fable 5's 7.2M, and $2.49 per coding-agent task vs $5.07/$11.80. Snorkel's independent GDPval+ run had it leading GPT-5.5 and Opus 4.8 overall (29% vs 22%/21% mean pass). Context was narrowed to 500K (from Grok 4.3's 1M) to point the model at engineering work.
- **Provider / access:** xAI API (`grok-4.5`), Grok Build (default model), Cursor (all plans), Microsoft Office add-ins, OpenRouter; EU access followed mid-July 2026.
- **Release:** 2026-07-08.
- **Context window:** 500K tokens (higher rates above 200K).
- **Modalities:** Text and image in → text out; configurable reasoning effort (low/medium/high, default high); server-side tools (web search, X search, code execution) billed per call.
- **Pricing (as of 2026-10-09):** $2/M input, $6/M output, $0.30–0.50 cached input; >200K context doubles to $4/$12/$0.60; Cursor fast variant $4/$18; no batch discount at launch.
- **Speed:** 80 TPS (xAI) / 62.8 TPS (AA, 2026-10-19 — revised down from the 85.6–91.3 first-pass read); TTFT 12.03s.

### Raw benchmarks found

- BenchLM composite (2026-10-19): **63.31/100** overall, #42 of 956 models, 34 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **39** (#65/217 — the file's 54 was the launch-era scale), 62.8 tok/s, TTFT 12.03s, $2.00/$6.00 with 85% cache discount (blended $1.21/M; $0.88 per Index task), 500k context, 2 providers, 77M Index tokens (concise) — DEPRECATED on AA (suggests Grok 4.6)

Artificial Analysis (independent, high reasoning):

- Intelligence Index: **54** (#4 of 168; Fable 5 60, Opus 4.8 56, GPT-5.5 55)
- Coding Agent Index: **76** (Grok Build harness; on par with GPT-5.5/Codex, just below Fable 5/Claude Code)
- τ³-Banking: **33%** (#1 of 28); GPQA Diamond: **93%** (#4); Terminal-Bench 2.1: **82–83.3%** (#5)
- GDPval-AA v2: **1,543 Elo** (AA); independent RankLLMs composite reads **Elo 1526**; cost per Coding-Agent-Index task $2.49 (GPT-5.5 $5.07, Fable 5 $11.80)

xAI launch table (competitor figures from their system cards):

- DeepSWE 1.0 (provider harnesses): **62.0%** (Fable max 66.1, GPT-5.5 xhigh 64.31, Opus 4.8 max 55.75, Opus 4.7 max 40.12)
- DeepSWE 1.1 (neutral mini-swe-agent harness): **53%** (Fable 70, GPT-5.5 67, Opus 4.8 59, GLM 5.2 44)
- Terminal-Bench 2.1: **83.3%** (Fable 84.3, GPT-5.5 83.4, Opus 4.8 78.9)
- SWE-bench Pro: **64.7%** (Fable 80.4, Opus 4.8 69.2, GPT-5.5 58.6, GLM 5.2 62.1)
- SWE-Marathon (pass@1): **29.0%** (Opus 4.8 26.0, Fable 24.0, Opus 4.7 16.0)
- Token efficiency: 15,954 avg output tokens/SWE-Pro task (Opus 4.8 max: 67,020)

Third-party:

- Snorkel GDPval+ (~2,000 expert tasks, Harbor + Grok Build): **29% mean pass** vs GPT-5.5 22%, Opus 4.8 21%; leads in legal (40%), education (58%), healthcare (35%), QA analysis (37%); lowest error prevalence in all six tracked categories
- TensorFeed aggregation: SWE-bench Verified 86.6, MMLU-Pro 89.2, FrontierCode v1.1 42.4, Terminal-Bench 4.0 8.6
- Caveats flagged by trackers: 54% hallucination rate (vs Grok 4.3's 25%), CursorBench scores contaminated by training-data overlap, and a 9-point self-harness vs neutral-harness swing on DeepSWE
- New independent rows (2026-10-19): Terminal-Bench 2.1 (Vals) **67.8%** (well below the 83.3% vendor row — harness spread), Terminal-Bench 3.0 **15.7%**, SWE-Multilingual **78%**, CursorBench 3.2 **66.7%**, VulcanBench v3 **89.9%**, LiveCodeBench (Vals) **87.4%**, AA Coding Index **72.5%**, PostTrainBench 23.4%, GDPval-AA **44.2% normalized / Elo 1,430** (AA — updates the 1,543 read), AA-MMMU-Pro **80.4%** (first published MMMU — fills the prior gap), Design Arena Website **1281**, AA-LCR **79.3%** (first published long-context measure), CritPt **15.4%**, ARC-AGI-1 **85.67%** / ARC-AGI-2 **52.6%** / ARC-AGI-3 **0.3%** (ARC Prize), AA-HLE **42.7%**, Epoch FrontierMath v2 Tiers 1–3 **57.193%** / Tier 4 **24.390%** (mid-band math)

### Normalized scores (1–100)

- **Tool use: 84/100.** The best agentic tool-use profile measured at its price point: τ³-Banking 33% (#1 on the board), AA Coding Agent Index 76, Terminal-Bench 2.1 83.3%, GDPval-AA Elo 1,543 and a leading independent GDPval+ pass rate — frontier-band agentic execution with the cheapest cost per completed task.
- **Reasoning: 86/100.** GPQA Diamond 93%, MMLU-Pro 89.2%, SWE-bench Verified 86.6% and AA Intelligence Index 54 sit inside the frontier band; the index still ranks it 4th behind Fable 5/Opus 4.8/GPT-5.5, and its high hallucination rate (54%) keeps reliability mid-pack.
- **Context window: 88/100.** 500K is the 500K–1M band (85–94) — but it is a step down from Grok 4.3's 1M with no published explanation, and no MRCR/RULER retrieval curve is published, so mid-band.
- **Multimodal: 68/100.** Text + image in → text out is the 60–70 band; the first published MMMU row (AA-MMMU-Pro 80.4%, 2026-10-19) is strong for the band, so it now sits at the top of the band rather than on an unpublished claim. Raised from 66.
- **Coding: 80/100.** SWE-bench Pro 64.7% (above GPT-5.5, below Fable 5/Opus 4.8), TB 2.1 83.3% (near-GPT-5.5), SWE-Marathon 29% (best in its comparison set) — but the neutral-harness DeepSWE 1.1 (53%) vs provider-harness 1.0 (62%) gap shows scaffold sensitivity, and CursorBench contamination is an open caveat.
- **Cost efficiency: 94/100.** $2/$6 list — and the frontier class's best effective economics: 4.2× fewer output tokens than Opus 4.8 per SWE-Pro task, ~$2.49 per coding-agent task (vs $5.07 GPT-5.5, $11.80 Fable 5), 85+ tok/s. The >200K-context surcharge and per-call tool fees are the caveats.
- **Overall Score: 81/100.** Mean of the five non-cost dims (84+86+88+68+80)/5 = 81.2 (Multimodal raised 66→68 on the newly measured AA-MMMU-Pro 80.4%; Overall unchanged). Best-fit recommendation: the frontier's price-performance pick for tool-heavy agent work — near-top intelligence, the board's best τ³-Banking score and 4× token efficiency at a third of Opus's output price; 500K context, image-only multimodality and a high hallucination rate are the trade-offs.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (deprecated, suggests Grok 4.6: Index 39 #65/217 on the current scale — the file's 54 was launch-era; output speed revised to 62.8 t/s; $2/$6 confirmed, $0.88/task) and BenchLM (composite 63.31/100, #42/956, 34/644 benchmarks): the file's multimodal and long-context gaps are now measured — AA-MMMU-Pro 80.4% (Multimodal raised 66→68; Overall unchanged at 81) and AA-LCR 79.3% — plus new rows TB2.1 (Vals) 67.8% (harness spread vs the 83.3% vendor row), TB3.0 15.7%, VulcanBench v3 89.9%, SWE-Multilingual 78%, GDPval-AA Elo 1,430 (updates the 1,543 read), ARC-AGI-1 85.67%/ARC-AGI-2 52.6%, Epoch FrontierMath v2 57.2%/24.4%. Second-pass verification (2026-10-10) cross-referenced rankllms.com (independent composite — SWE-bench Verified 68.2%, GPQA 56.0%, OSWorld 47.1%, GDPVal-AA Elo 1526, AA Intelligence Index 56, composite 51.2 #35). Prior pass (2026-10-09) used xAI launch post + docs, Artificial Analysis via ARMES/eesel/AgentRiot, Snorkel GDPval+ evaluation, TensorFeed and Awesome Agents trackers.
- Future sources: add a new file next to this one, e.g. `Grok_4_6.md`, using the same headings.
