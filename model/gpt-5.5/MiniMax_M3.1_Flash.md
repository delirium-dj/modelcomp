# GPT-5.5 — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's April-2026 flagship, positioned as "state-of-the-art intelligence at half the cost of competitive frontier coding models" — a long-context-heavy generalist with an unusually complete public long-context ladder (MRCR v2 across nine length bands, Graphwalks at 256k and 1M). It is now **deprecated** in favour of GPT-5.6 Sol, and it is the base weights of the much more expensive `gpt-5.5-pro` configuration.
- **Provider / access:** OpenAI API `gpt-5.5` (single snapshot `gpt-5.5-2026-04-23`) — Chat Completions, Responses and Batch; no Live/Realtime/Assistants/Fine-tuning/Embeddings; OpenRouter `openai/gpt-5.5` (+ `:batch`); OpenCode Zen `opencode/gpt-5.5` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released **2026-04-23** (launch blog, updated 2026-04-24: "GPT‑5.5 and GPT‑5.5 Pro are now available in the API"; OpenRouter's API availability is 2026-04-24). Knowledge cutoff **Dec 01, 2025**.
- **IDs:** `gpt-5.5` (OpenAI API, snapshot `gpt-5.5-2026-04-23`), `openai/gpt-5.5` (+ `:batch`) (OpenRouter), `opencode/gpt-5.5` (Zen). No `gpt-5.5-instant-05-26` / `-06-26` ids exist in the API (the OpenAI model page 404s for them); Instant is served as `chat-latest`.
- **Context window:** **1,050,000 tokens** = 922,000 max input + 128,000 max output. Artificial Analysis displays "922k" — the max-*input* figure, which is the same arithmetic it applies to plain GPT-5.5 and is not a different limit.
- **Modalities:** text and image in, text out. Reasoning effort: "none, low, medium (default), high and xhigh". Tools: function_calling, web_search, file_search, tool_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp. Rate limits: Build 5,000 RPM / 1M TPM; Launch 10,000 / 4M; Grow 15,000 / 40M; **Long Context (>272K)**: Build 500 RPM / 1M TPM, Launch 2,000 / 10M, Grow 8,000 / 20M.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$5.00 in / $0.50 cached in / $30.00 out** (≤272K context); **$10.00 / $1.00 / $45.00** (>272K) — "prompts with >272K input tokens are priced at 2x input and 1.5x output"; no cache-write price published; Batch & Flex **$2.50 / $0.25 / $15.00**; Fast mode **$12.50 / $1.25 / $75.00**; regional (data-residency) endpoints +10%. OpenCode Zen lists the same two tiers.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. System card published 2026-04-23 (updated 2026-04-24). "Fast mode, generating tokens 1.5x faster for 2.5x the cost".

### Raw benchmarks found

> OpenAI's launch-blog numbers are marked "vendor" (run at xhigh effort in a research environment); Artificial Analysis, Vals AI, the official Terminal-Bench board, the BenchLM ledger and community trackers are independent.

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (vendor) / **82.0%** (tbench.ai leaderboard, via BenchLM) / **76.4%** (Vals AI, on 2.1); Terminal-Bench 2.1 **84.27%** (AA) / 76.40% (Vals); Terminal-Bench 4.0 **14.65%** (AA) / 13.64% (AA variant) — no official-board row retrievable
- Terminal-Bench-Hard **60.61%** (AA); MCP Atlas **75.3%** (vendor) / 75.3% (via BenchLM); Toolathlon **55.6%** (vendor); AutomationBench **47.30%** (AA)
- BrowseComp **84.4%** (vendor) / 84.4% (via BenchLM); JobBench **42.7%** (via BenchLM); OSWorld-Verified **78.7%** (vendor) / OSWorld 2.0 **13.0%** (via BenchLM); FinanceAgent v1.1 **60.0%** (vendor); GDPval **84.9%** wins-or-ties (vendor) / GDPval-AA 1350.71 (AA) / 1396 (via BenchLM)
- Tau2-bench Telecom **98.0%** (vendor, original prompts) / **93.86%** (AA); Tau3-Banking **38.97%** (AA); APEX-Agents **37.68%** (AA); EnterpriseOps-Gym-AA 46.64%; AnalystAgent 50.0%; IFBench **75.85%** (AA); Bench Tool-Agent-User Evaluation 98% (via BenchLM); Gert Labs 72.93% (via BenchLM)
- Claw-Eval / Toolathon / MCP-Atlas (non-vendor): **no verified public score found** beyond the vendor row

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (vendor) / **93.54%** (AA) / **93.18%** (Vals AI)
- HLE: **41.4%** without tools / **52.2%** with tools (vendor) / **45.78%** (AA) / 52.2% (via BenchLM)
- FrontierMath legacy aggregate **51.7%** (T1–3) / 35.4% (T4) (vendor, April benchmark); FrontierMath v2: Tiers 1–3 **85.263%**, Tier 4 **72.500%** (Epoch AI, via BenchLM) — measured after Epoch's June revision
- ARC-AGI-1 **95.0%** (vendor, ARC Prize Verified) / 95.00% (via BenchLM); ARC-AGI-2 **85.0%** (vendor) / 85% (via BenchLM); **ARC-AGI-3: no official score** — the 0.4% attributed by BenchLM is a later semi-private result, and an Ask HN thread is literally titled "GPT-5.5 – No ARC-AGI-3 scores"
- MMLU-Pro 88.14% (Vals) / 88.1% (via BenchLM); BixBench 80.5% (vendor); TaxEval v2 74.98% (Vals); CorpFin 68.4% (#1, Vals); LegalBench 86.52% (#13/151, Vals); Omniscience accuracy **57.95%** with a **89.02% hallucination rate** (AA); HealthBench: **no verified public score found**

Coding:

- SWE-bench Pro: **58.6%** (vendor) / 58.6% (via BenchLM) — with the caveat "Labs have noted evidence of memorization on this eval" (Anthropic); SWE-bench Verified **82.60%** (Vals AI, #1 of 88)
- LiveCodeBench **85.30%** (Vals AI); Terminal-Bench 2.0 82.7% / 82.0%; Terminal-Bench 2.1 84.27% (AA) / 76.40% (Vals); Terminal-Bench 4.0 14.65%
- FrontierCode 1.1 Main **43.0%** (via BenchLM); CursorBench 3.2 **58.4%** / 3.1 59.2%; Vibe Code Bench v1.1 **69.85%** (Vals) / 69.85% (via BenchLM); React Native Evals 84.7%; PostTrainBench 27.2%; ProgramBench 0.50% (Vals); SRE Bench 3.82% (Vals); Harvey LAB 3.75% (Vals)
- FrontierSWE v2, DeepSWE: **no verified public score found** for GPT-5.5

Long context (the model's standout — the only complete public ladder in the batch):

- **MRCR v2 8-needle** (vendor): 4K–8K **98.1%**, 8K–16K 93.0%, 16K–32K 96.5%, 32K–64K 90.0%, **64K–128K 83.1%**, **128K–256K 87.5%**, 256K–512K 81.5%, **512K–1M 74.0%**
- **Graphwalks** (vendor): BFS 256k 73.7, BFS 1M 45.4, parents 256k 90.1, parents 1M 58.5
- AA-LCR 80.33% (short band); no independent MRCR/Graphwalks replication for GPT-5.5
- 1,050,000 tokens (922K input + 128K output)

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 78/100.** Solid agentic profile — Terminal-Bench 2.0 82.7% (vendor) / 82.0% (tbench) / 84.27% on 2.1 (AA), BrowseComp 84.4%, τ²-bench 93.86% (Telecom 98.0% on original prompts), MCP Atlas 75.3%, FinanceAgent v1.1 60.0%, OSWorld-Verified 78.7%, GDPval 84.9% wins-or-ties, JobBench 42.7%, Toolathlon 55.6%, APEX-Agents 37.68%. Capped by the rubric's anchors (TB2.1 ~88%+ → 84.27% at best, τ3 ~50%+ → 38.97%, GDPval ~1750+ → 1350.71 Elo), by Terminal-Bench 4.0 at only 14.65%, and by OSWorld 2.0 at 13.0%.
- **Reasoning: 87/100.** GPQA Diamond 93.54–93.6%, FrontierMath v2 85.263% (T1–3) / 72.500% (T4), ARC-AGI-1 95.0% / ARC-AGI-2 85.0% (ARC Prize Verified), HLE 41.4% / 52.2%, MMLU-Pro 88.14%, BixBench 80.5%, TaxEval v2 74.98%, CorpFin 68.4% (#1), LegalBench 86.52%. Held below 90 because the current Artificial Analysis Intelligence Index is **38** (under the rubric's 60+ anchor; BenchLM's 69.2 is a different composite), because **ARC-AGI-3 has no official score**, and because of the **89.02% hallucination rate** on Omniscience — corroborated by a community thread titled "GPT-5.5 hallucinates 3x more than MIT-licensed GLM-5.2".
- **Context window: 95/100.** 1,050,000 tokens (922K input + 128K output) — the rubric's top tier (≥1M = 95–100) — with the deepest long-context disclosure in the batch (MRCR v2 across nine bands, Graphwalks at 256k and 1M). Not 100: the rubric's extra condition is "≥98% retrieval at 512K+", and OpenAI's own 512K–1M figure is **74.0%** (MRCR) with Graphwalks BFS at 45.4% — clear degradation at the top of the window.
- **Multimodal: 70/100.** Text and image in, text out, with real vision evidence — MMMU-Pro 79.88% (AA) / 88.27% (Vals) / 83.2% with Python (vendor), OfficeQA Pro 54.1%, and image input through the vision stack. The rubric's "+image in = 60–70" band is the ceiling and is met at its top: no video or audio input is documented, and there is no non-text output.
- **Coding: 78/100.** SWE-bench Verified 82.60% (Vals, #1 of 88), Terminal-Bench 2.0 82.7% (vendor) / 82.0% (tbench) / 2.1 84.27% (AA), LiveCodeBench 85.30%, Vibe Code Bench 69.85%, CursorBench 3.2 58.4%, FrontierCode 43.0%. Capped by Terminal-Bench 4.0 at 14.65% (the benchmark that now defines agentic coding), SWE-bench Pro 58.6% (with the vendor-side memorization caveat), ProgramBench 0.50% and SRE Bench 3.82% on Vals' harness, and by the complete absence of DeepSWE and FrontierSWE numbers.
- **Cost efficiency: 48/100.** The evaluated route — OpenCode Zen `opencode/gpt-5.5` — is billed at **$5.00 in / $30.00 out** per 1M (≤272K) and **$10.00 / $45.00** above it, with a $0.50 cached read. The rubric's anchors run "~$3/$15 = ~60" and "~$10/$50 = ~30", so $5/$30 lands just under 60; Artificial Analysis measures $2.63 per Index task (#93 of 114) and the 88M output tokens make it verbose relative to its index score. Batch/Flex halve the rate and Fast mode triples it — the 0.1× cache-read discount is the only structural saving.
- **Overall Score: 81.6/100.** (78 + 87 + 95 + 70 + 78) / 5 = 81.6 — best-fit: a long-context specialist's generalist — the only model here with a complete 9-band MRCR ladder and a 1M window that at least holds ~74–87% retrieval at 256K+ — with frontier-tier GPQA and FrontierMath T1–3, but with Terminal-Bench 4.0 at 14.65%, no ARC-AGI-3, an 89% hallucination rate and $5/$30 pricing; for agentic coding today, GPT-6.1 Sol or Claude Sonnet 5.5 are both cheaper and stronger.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Context 922k vs 1.05M.** Resolved: OpenRouter's "922K input, 128K output" sums to 1,050,000; AA's 922k is the max-input figure and it applies to plain GPT-5.5 identically.
2. **Terminal-Bench 2.0 — 82.7% (OpenAI) vs 82.0% (tbench.ai leaderboard).** Vendor run versus leaderboard re-run; AA's 84.27% on the 2.1 generation agrees within ~2 points.
3. **Terminal-Bench 4.0 14.65% vs Terminal-Bench 2.0 82.0%** are different benchmark generations (66 vs 89 tasks) and are not comparable; the 4.0 top score in AA's table is 63.6%.
4. **OSWorld 2.0 13.0% vs OSWorld-Verified 78.7%** — different benchmark generations, not a model contradiction. Both are listed.
5. **Hallucination 89.02% (AA Omniscience)** is corroborated by the community ("GPT-5.5 hallucinates 3x more than MIT-licensed GLM-5.2") and stands in sharp contrast to OpenAI's claim for the *Instant* variant ("52.5% fewer hallucinated claims than GPT‑5.3 Instant").
6. **Index scale clash.** AA 38 (#67/217) vs BenchLM 69.21/100 (#20/956) vs Vals Index 67.8% (#2) are three different composites; only AA's value enters the rubric.
7. **GDPval — 84.9% wins-or-ties (OpenAI) vs GDPval-AA 1350.71 (AA) vs 1396 (via BenchLM).** Different metrics on the same benchmark family; the Elo figures are used for the tool-use cap.
8. **Release date — 2026-04-23 (OpenAI, AA, Vals) vs "Apr 24, 2026" (OpenRouter API availability).** The launch date is used.
9. **SWE-bench Pro 58.6%** carries a published caveat that "Labs have noted evidence of memorization on this eval" — recorded so the coding score is read with it.
10. **Claude Fable 5.1's own comparison claims Opus 5.5 at "1861"/"1890" GDPval-AA Elo** — an Anthropic-published number for a different model that is roughly 470 Elo above OpenAI's and AA's own GPT-5.5 figure; not used, but noted as a marker of how far vendor GDPval-Elo claims drift between vendors.
11. **Absent ids.** `gpt-5.5-instant-05-26` / `-06-26` appear in Artificial Analysis's slug list but 404 on OpenAI's model page and are absent from the OpenRouter API and Zen — Instant is served as `chat-latest`. The dataset's `gpt-5.5` folder therefore tracks the base model, not the Instant snapshots.

### Notes on identity

- `gpt-5.5` is a distinct model id from `gpt-5.5-pro` (the same weights under a parallel-test-time-compute configuration, $30/$180 — see that folder's report), from `gpt-5.4` / `gpt-5.6-sol` / `gpt-6-sol` (other generations), and from the non-existent `gpt-5.5-instant-*` snapshots.
- Effort levels (none/low/medium/high/xhigh) are parameters on one model; OpenAI's published evals all ran at **xhigh**, which is above the API default of medium.
- The "Fast mode" and "cybersecurity variant" (`gpt-5.5-cyber`, $12.50/$1.25/$75) are service and safety variants, not separate models.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, launch blog and the GPT-5.5 system card; independent trackers Artificial Analysis (model page with per-evaluation values, deprecated banner), Vals AI (own runs, SWE-bench and other leaderboards), the official Terminal-Bench board (no GPT-5.5 row), the BenchLM evidence ledger, OpenRouter and OpenCode Zen catalogs, and Hacker News coverage. Vendor-vs-independent conflicts — including the context-window arithmetic, the OSWorld generation mismatch and the hallucination-rate dispute — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
