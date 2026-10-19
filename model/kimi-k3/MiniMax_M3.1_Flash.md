# Kimi K3 — findings by MiniMax M3.1 Flash

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's July-2026 open-weight frontier model — "Today, we are introducing Kimi K3 — our most capable model. Kimi K3 is a 2.8T-parameter model built on our Kimi Delta Attention" — and the strongest open-weight model on the Artificial Analysis Intelligence Index (44, #5 of 121 open-weight models; **#1 among open-weight models on AA-Briefcase with an Elo of 1543**). It is a **different model** from the Kimi K2.x line (K2.5 / K2.6 / K2.7 / K2.8) and from the Kimi K2 "Thinking" predecessors.
- **Provider / access:** Moonshot API `kimi-k3` at `https://api.moonshot.ai/v1` (`POST /v1/chat/completions`, OpenAI- and Anthropic-protocol compatible); Kimi Code ids `k3` (1M ctx) and `k3-256k` (256K, image only) at `https://api.kimi.ai/coding/v1` (overseas) / `https://api.kimi.com/coding/v1` (China) — plan-gated ("your plan is below Moderato / Plus and can't call `k3`, `k3-256k`"); OpenRouter `moonshotai/kimi-k3` (+ `:batch`); OpenCode Zen `opencode/kimi-k3` (`https://opencode.ai/inference/openai/v1/chat/completions`).
- **Release / knowledge:** released **2026-07-16** (AA, Vals AI, ARC Prize, OpenRouter `created=1784215858`). Weights promised "by July 27, 2026" and **are live**: Hugging Face `moonshotai/Kimi-K3` — public, not gated, 96 safetensors shards, 2,779,931,837,184 total parameters, 1,012,867 downloads last month, 11,773 likes. Knowledge cutoff: **not published** (OpenRouter `knowledge_cutoff: null`).
- **IDs:** `kimi-k3` (Moonshot API), `moonshotai/kimi-k3` (canonical `moonshotai/kimi-k3-20260715`, OpenRouter), `opencode/kimi-k3` (Zen), `moonshotai/Kimi-K3` (Hugging Face weights).
- **Context window:** **1,048,576 tokens** (1M; BenchLM lists 1.05M). Max output: `max_completion_tokens` default **131,072**, maximum 1,048,576; OpenRouter lists 943,718 for its top provider.
- **Modalities:** text and image in, text out (OpenRouter modality string `text+image+video->text`; the blog also claims video understanding). Vision tower: **MoonViT-V2, 401M parameters**. Reasoning: **always on** — "Kimi K3 always has thinking enabled, and will return `reasoning_content`" — with `reasoning_effort` = `low | high | max` (default `max`); `temperature=1.0`, `top_p=0.95`, `n=1` are fixed.
- **Pricing (as of 2026-10-19, per 1M tokens):** cache write **$3.00** (5-min TTL) / **$6.00** (1-hour TTL), cached input **$0.30**, input **$3.00**, output **$15.00** — "Pricing is $0.30/MTok for cache-hit input, $3.00/MTok for cache-miss input, and $15.00/MTok for output." OpenCode Zen lists $3.00 / $15.00 / $0.30 cached read. **OpenRouter's API prices it at $0.239 in / $11.936 out** — a large deviation from the vendor list price, recorded as a conflict below.
- **Architecture:** Mixture-of-Experts, **2.8T total / 104B activated**; 93 layers (1 dense), 69 Kimi Delta Attention + 24 Gated MLA layers, 96 heads, latent MoE dim 3584 / per-expert 3072, **896 experts with 16 selected** (plus 2 shared), vocab 160K, SiTU-GLU, MXFP4 weights / MXFP8 activations (quantization-aware training), 5-layer MTP speculative decoder on the Flash sibling. License: **Kimi K3 License** — "Commercial use is allowed with restrictions" (AA).

### Raw benchmarks found

> Moonshot's own card / blog claims are marked "vendor"; Artificial Analysis, Vals AI, the official DeepSWE leaderboard, ARC Prize and the BenchLM ledger are independent.

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (vendor, Kimi Code harness) / **85%** (AA) / **80.90%** (Vals AI)
- Terminal-Bench 4.0: **12.63%** (AA) / **17.17% ± 0.51** (Vals AI) — no row on the official tbench.ai board
- Toolathlon-Verified **76.5%** (vendor) / 73.2% (via BenchLM); MCP-Atlas **84.2%** (vendor); BrowseComp **91.2%** (vendor, 90.4% without compaction); DeepSearchQA **95.0%** (vendor); JobBench **54.3%** (vendor) / 52.9% (via BenchLM); APEX-Agents **41.0%** (vendor) / 37.6% (AA); AutomationBench **30.8%** (vendor, public subset) / **58.27%** (AA AutomationBench-AA)
- Tau3-Banking: **33.4%** (vendor) / **45.98%** (AA); Agents' Last Exam **28.29%** (kimi_code) and 26.97% (claude_code), from the official HF eval export of 2026-10-01; OSWorld-V **84.8%** (vendor); SaaS-Bench 60.1%; ResearchRubrics 76.2%; MCPMark-V 94.5%
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (vendor) / **93.54%** (AA) / **92.93%** (Vals AI)
- HLE: **43.5%** without tools / **56.0%** with tools (vendor) / **46.90%** (AA)
- LCR / MLCR: AA-LCR v1.1 **88.67%** (AA) / 74.7% (vendor card)
- CritPt: **23.43%** (AA) / 23.4% (vendor)
- Artificial Analysis Intelligence Index: **44** (Max, #5/121 open weights) / 43.6 (OpenRouter AA mirror) / **57** (July launch article) — and the "Kimi K3 (Low)" variant scores **30** (#22/121)
- ARC-AGI-1 **94.5%** / ARC-AGI-2 **60.4%** at max (ARC Prize verified; high 86.7/55.0, low 65.7/12.4) — ARC-AGI-2 is a weak spot
- MathVision **94.3%** / **97.8%** with Python; CharXiv 84.8% / 91.3%; OmniDocBench 91.1%; PerceptionBench 58.5%; AA-Briefcase Elo **1543** ("the second-highest score overall", AA article), rubric 51%, $10.57 per task, 56.4 min/task, 120k output tokens, 83 turns
- SciCode **59.49%** (AA) / 58.7% (vendor); Harvey Lab 94.6% (vendor); Corpus/finance/legal rows: CorpFin v2 71.6%, Legal Research 44.2%, MCPMark-V 94.5%

Coding:

- SWE-bench: **93.40% ± 1.11** (Vals AI) / **95.10%** (Vals AI, 2026-07-16 update) — **no row on swebench.com**
- DeepSWE v1.1: **67.5%** (vendor card; 67.3 with mini-SWE-agent) / **69% ± 5%**, $4.65, 81k tokens (official DeepSWE leaderboard, `kimi-k3[max]`)
- Terminal-Bench 2.1 88.3% (vendor) / 85% (AA) / 80.90% (Vals); Terminal-Bench 4.0 12.63% (AA) / 17.17% (Vals)
- LiveCodeBench **87.19% ± 0.97** (Vals AI)
- FrontierSWE v1 **81.2%** (vendor card) / FrontierSWE v2 **25.9% ± 11.8** (#6, Proximal) — a benchmark-generation difference, not a contradiction
- Kimi Code Bench v2 **72.9%**; ProgramBench 77.8%; sweMarathon 42.0%; PostTrainBench 36.6%; MLS-Bench-Lite 48.3%; CursorBench 3.2 60.8%; FrontierCode 43.61% (AA); Bug Hunt Bench 21.0 fixes; SpreadsheetBench 2 34.8%
- Vibe Code Bench / terminal-bench 3.0: **no verified public score found** for Kimi K3

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for Kimi K3. AA-LCR v1.1 88.67% covers the short band only. 1,048,576-token window with a 131,072-token default max output (up to 1,048,576).

Performance profile (AA, Max): Index 44 (#5/121 open weights), output **41.6 t/s** (#69/78), cost per Index task **$2.00** (#41/43), 160M output tokens, TTFT 3.67s, 20 API providers. Kimi K3 (Low): Index 30 (#22/121), 39.6 t/s, $1.15 per task, 22M output tokens. Design Arena website Elo **1336** (rank 3) per OpenRouter.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 78/100.** Strong tool-and-agent profile — MCP-Atlas 84.2%, Toolathlon-Verified 76.5%, BrowseComp 91.2%, DeepSearchQA 95.0%, OSWorld-V 84.8%, Terminal-Bench 2.1 88.3% (vendor, Kimi Code harness) / 85% (AA), Agents' Last Exam 28.29%, JobBench 54.3%, APEX-Agents 41.0%, McpMark-V 94.5%. Capped below the frontier band because the rubric's anchors are only partly met (TB2.1 ~88%+ → 88.3% vendor but 80.90% independently; τ3 ~50%+ → 33.4% vendor / 45.98% AA; GDPval ~1750+ → 1686 vendor / 1532.59 AA) and because Terminal-Bench 4.0 is only 12.63–17.17%, the benchmark that now defines agentic terminal work.
- **Reasoning: 86/100.** GPQA Diamond 93.5%, HLE 43.5–56.0%, AA-LCR 88.67%, MathVision 94.3% / 97.8% with Python, CharXiv 91.3%, AA-Briefcase Elo 1543 (second-highest overall), OmniDocBench 91.1%, SciCode 59.49%. Capped by the current Artificial Analysis Intelligence Index of **44** (56 at launch on the older index), **ARC-AGI-2 60.4% at max** (a real weakness for a frontier open model), CritPt 23.43%, and no FrontierMath v2 score published for K3.
- **Context window: 95/100.** 1,048,576-token window with a 131,072-token default max output (up to 1,048,576), which clears the 64K output line and sits in the rubric's top window tier (≥1M = 95–100). Not 100: no long-context retrieval measurement exists (no MRCR / RULER / GraphWalks), and AA-LCR 88.67% covers the short band only.
- **Multimodal: 88/100.** Text and image in, video claimed and exercised (Video-MME 90.0%, MMVU 82.1% published by Moonshot), with a 401M-parameter MoonViT-V2 vision tower — the rubric's "+video/PDF = 75–90" band. Vision evidence is strong (MMMU-Pro 81.6% / 83.4% with Python, CharXiv 91.3%, MathVision 97.8%, BabyVision 85.7%, OmniDocBench 91.1%), but held at 88 because the strongest vision rows are vendor-published, ZeroBench is only 23.0% / 41.0% with Python, and no AA MMMU-Pro figure exists for this model.
- **Coding: 84/100.** SWE-bench 93.40% (Vals) / 95.10%, LiveCodeBench 87.19%, Terminal-Bench 2.1 85% (AA) / 88.3% (vendor) — above the 85% anchor — and SciCode 59.49% above the 55% anchor, plus FrontierSWE v1 81.2% and Kimi Code Bench v2 72.9%. Capped by DeepSWE 67.5–69% (under the rubric's 74% anchor), Terminal-Bench 4.0 12.63–17.17%, FrontierSWE v2 25.9%, PostTrainBench 36.6%, Bug Hunt 21.0 fixes, and the absence of a Vibe Code Bench score.
- **Cost efficiency: 60/100.** The evaluated route — OpenCode Zen `opencode/kimi-k3` — is billed at **$3.00 in / $15.00 out** per 1M with a $0.30 cached read, matching Moonshot's own published price, and the rubric's anchor for that price point is "~$3/$15 = ~60". Two caveats in both directions: the 0.1× cache-read rate and the "Low" effort variant ($1.15 per Index task on AA) make long agentic runs cheap, while OpenRouter's own API route lists a markedly lower $0.239 / $11.936 (unverified against Moonshot's list) and the Kimi Code plan is a separate subscription. No free tier for the API.
- **Overall Score: 86.2/100.** (78 + 86 + 95 + 88 + 84) / 5 = 86.2 — best-fit: the strongest open-weight model available (AA open-weight #1 on Briefcase, 44 on the index, 1M context, real downloadable 2.8T weights under a commercial-with-restrictions licence) with superb math/vision and a very deep tool stack, but a clear agentic-terminal gap (Terminal-Bench 4.0 ~13–17%) that makes it a strong second-model or research workhorse rather than the primary coding agent.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 88.3% (vendor, Kimi Code harness) vs 85% (AA) vs 80.90% (Vals AI).** Harness variance; AA used.
2. **Terminal-Bench 4.0 — 12.63% (AA) vs 17.17% ± 0.51 (Vals).** Same verdict (weak); both listed.
3. **DeepSWE — 67.5% (Moonshot card) vs 69% ± 5% (official DeepSWE leaderboard).** Within the error bar; both listed.
4. **SWE-bench — 93.40% (Vals) vs 95.10% (Vals, launch update) vs no swebench.com row at all.** Vals-only evidence; the official leaderboard has no Kimi K3 entry, so this number is single-harness.
5. **FrontierSWE v1 81.2% vs v2 25.9%.** Different benchmark generations; both listed, and the v1 number is not used to imply v2 strength.
6. **AA index — 44 (page) vs 43.6 (OpenRouter mirror) vs 57 (July launch article) vs BenchLM 69.95/100.** Different index versions/scales; the current AA 44 is used.
7. **AA-LCR 74.7 (Moonshot card, "AA as of Jul 23") vs 88.67% (AA-LCR v1.1 leaderboard).** A month-old card figure versus the live tracker.
8. **SciCode 58.7 (card) vs 59.49% (AA); τ³-Banking 33.4 (card) vs 45.98% (AA); GDPval-AA 1686 (card) vs 1532.59 (AA); HLE 43.5/56.0 (card) vs 46.90% (AA); MMMU-Pro 81.6 vs 80.52% (AA).** In each case the card and AA differ; both are listed and AA is used for scoring.
9. **AutomationBench 30.8% (Moonshot public subset) vs 58.3% (AA AutomationBench-AA).** Different metrics (task completion vs objective share).
10. **Pricing — $3/$15 (Moonshot and Zen) vs $0.239/$11.936 (OpenRouter API) vs "$0.238 / $16 per 1M" (OpenRouter page header).** The vendor list price is used; the aggregator deviation is flagged as unverified and material.
11. **Toolathlon 76.5 vs 73.2%; JobBench 54.3 vs 52.9%; APEX-Agents 41.0 vs 37.6%.** Moonshot's card vs BenchLM's transcription of the same blog; small transcription gaps.
12. **IPI 52.7%.** BenchLM attributes this to Google's Gemini 4 Argon launch chart, but that chart is a GIF image — the number is not verifiable from page text, and as an attack-success rate its direction is undefined. Not scored.
13. **FrontierMath 71.579% / 36.585%** belong to **Gemini 3.7 Flash** (Epoch: "gemini-3.7-flash_high"), not to Kimi K3 — corrected attribution, no K3 FrontierMath score exists.

### Notes on identity

- `kimi-k3` is a distinct model from the Kimi K2.x line (K2.5 $0.60/$3.00 deprecated 2026-08-05, K2.6 $0.95/$4.00, K2.7 Code $0.95/$4.00, K2.8 — which has no OpenCode Zen row and is served as `kimi-for-coding`).
- `k3` and `k3-256k` are the **Kimi Code** plan ids of the same model at two context sizes (1M and 256K, the latter image-only), not separate models.
- Weights are genuinely published (Hugging Face `moonshotai/Kimi-K3`, 2,779,931,837,184 parameters) under the Kimi K3 License; BenchLM's "Source Type | Pending" / "Weight availability is pending" entries are stale relative to the live repository.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Moonshot's Kimi K3 tech blog, the Hugging Face model card and repo API (parameter count, shards, licence, download counts), Moonshot API / Kimi Code docs (ids, effort levels, pricing, plan gating), the Artificial Analysis model page and launch article, OpenRouter's API and model page, Vals AI, the official DeepSWE leaderboard, ARC Prize, the BenchLM evidence ledger, and OpenCode Zen's catalog. Vendor-vs-independent conflicts — including the OpenRouter price deviation and a mis-attributed FrontierMath row — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
