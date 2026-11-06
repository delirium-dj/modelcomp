# Claude Opus 5 — findings by Step 5 Preview

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5. Now a **legacy SKU** — Anthropic's models overview lists it under "Legacy models (still available)" rather than the current lineup, and the current table is headed by Opus 5.5, Fable 5.1, Sonnet 5.5 and Haiku 5.5. Opus 5.5 supersedes it (2026-09-22).
- **Short description:** The Opus 5-generation flagship, and still one of the strongest coding and agentic models measured: **SWE-bench Verified 96–97%**, AA Coding Index 78.0%, aaTerminalBench21 89.1% and a **perfect 42/42 on IMO 2026**. BenchLM scores it 79.68/100, #10 of 1009 — 6.6 points behind its successor Opus 5.5 and 2.2 behind Sonnet 5.5, on 104 recorded benchmarks (the largest catalog in this batch).
- **Provider / access:** Claude API, Amazon Bedrock, Claude Models on Google Cloud (Google managed and Anthropic managed), Microsoft Foundry, Claude Platform on AWS, and OpenCode Zen (`opencode/claude-opus-5` at **$5/$25/$0.50**). It is the only Anthropic model still sold on Zen at this tier, since Zen carries no `claude-opus-5.5` legacy route.
- **Release / knowledge:** released 2026 (the Opus 5.5 migration guide and the Gemini 4 Argon comparison both treat it as the immediately-preceding generation, so mid-2026). Anthropic's models-overview table does not restate its knowledge cutoff because it is no longer in the current lineup; the Opus 4.7+ 1M tokenizer applies. **Knowledge cutoff not restated by Anthropic for this SKU.**
- **IDs:** `claude-opus-5` (all platforms).
- **Context window:** **1M tokens** — inferred, and flagged as such. Anthropic documents that the 1M window "is roughly 555k words … on the current tokenizer (introduced with Claude Opus 4.7)" and Opus 5 postdates 4.7, while the Batch extended-output footnote explicitly lists Claude Opus 5 among models supporting 300K output. **BenchLM, however, records the context window for this model as "Coming soon"**, and Anthropic's current lineup table omits Opus 5 entirely — so the 1M figure is a lineage inference, not a vendor-confirmed value for this SKU. Max output 128K synchronous, 300K on Batch with the `output-300k-2026-03-24` beta header (explicitly listed for Opus 5).
- **Modalities:** **text and images in → text out** (Anthropic's lineup-wide statement). Reasoning model.
- **Pricing (as of 2026-11-05):** **$5 input / $25 output per 1M** on Zen, with cache reads at **$0.50** (10% of base). BenchLM does not publish a Claude-API rate for this model. Batch API 50% off per Anthropic's general policy.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

BenchLM's **104-row catalog** is the largest in this batch, and its primary source is Anthropic's own Opus 5 system card plus the Opus 5.5 system card (for the OSWorld 2.1 row) — so most figures are vendor-run, with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Proximal, Kaggle, VulcanBench, Google's Gemini 3.8 Flash card and OpenRouter supplying independent corroboration. Vendor and independent figures are separated.

Agent / tool use — **the strongest in this batch**:

- **aaTerminalBench21: 89.1%** (AA) / **84.6%** (Vals) — clears the 88%+ frontier reference on the AA harness
- **GDPval-AA: 1,862 Elo** / 61.1% normalized — clears the 1,750+ frontier reference
- BrowseComp: **90.8%** (system card) / **93.6%** (10-agent prerelease)
- DeepSearchQA: **95.0%**; DRACO: **88.6%**; **MCP-Atlas: 85.8%** (claim coverage 89.1%)
- AA Harvey LAB v1.0: **93.5%**; AA Agentic Index: 56.2%; Toolathlon-Verified: **80.6%** (Pass@3 87.0%, Pass³ 73.1%, mean 23.5 turns)
- OSWorld 2.0: **70.6%**; OSWorld 2.1: 74.0%; AA-AnalystAgent: 53.8%; AA EnterpriseOps-Gym: 47.5%
- Terminal-Bench 3.0: 42.7%; AutomationBench: **26.0%**; MazeBench: 12%; ApprenticeBench: 36%; DeepsecBench-AA: 25.9%
- LAB (legal agentic): criterion-pass **93.74%** (Anthropic harness) / 94.1% (Harvey held-out) but all-pass only **23.58%** / **11.7%** — a 4x gap between "mostly right" and "fully right"
- **τ³-Banking: no verified public score found**; **Claw-Eval: no verified public score found**

Reasoning / knowledge — strong, with one extraordinary result:

- **AA-GPQA Diamond: 93.2%** / **93.4%** (Vals) — clears the 90%+ frontier reference
- **HLE: 64.7%** (system card) / HLE without tools 56.3% / AA-HLE 54.9% — clears the 40%+ reference
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90.4%**; ARC-AGI-3: 30.2%
- **IMO 2026: 42/42 — a perfect score**, the only one recorded in this research series
- FrontierMath v2 Tier 4: **73.2%**; Tiers 1–3: **85.6%**; ArXivMath 90.8% no-tools / 91.3% with tools; RiemannBench 60.0% no-tools / 79.0% with tools
- AA-LCR: **79.3%**; **CritPt: 29.1%**; MMLU-Pro (Vals): 91.6%; GMMLU 92.5%; MILU 92.1%; INCLUDE 89.8%
- AA Intelligence Index: **50.8**; AA-Omniscience: index 37.1, accuracy 60.9%, hallucination rate **60.8%**
- **MRCR: no verified public score found**

Coding — **the strongest coding profile in this batch**:

- **SWE-bench Verified: 96%** (system card) / **97.0%** (Vals) — the highest verified SWE-bench figure found anywhere in this research series
- **AA Coding Index: 78.0%** — clears the 70%+ frontier reference
- **AA-SciCode: 56.4%** — clears the 55%+ reference
- SWE-bench Pro: **79.2%**; SWE Multilingual: **89.5%**; LiveCodeBench (Vals): **89.0%**; SWE-bench (Vals): **97.0%**
- **ProgramBench: 93.0%** (episode 1: 83.0%); **VulcanBench v3: 87.0%**; **VulcanBench CII v1: 96.4%**
- Terminal-Bench 2.1: 89.1% / 84.6%; aaTerminalBench21: 89.1%
- DeepSWE: **68.8%** — 5.2 points under the 74% frontier reference, and the weakest coding row here
- FrontierCode 1.1 Main 53.4% / Extended 63.6%; **FrontierCode 2.0: 26.7%**; FrontierSWE v2: 52.0%; CursorBench 3.2 70.0% / **4.0: 46.6%**; PostTrainBench v1.1: 35.0%; ScarfBench 69.8%; Bug Hunt Bench 27.0 fixes

Multimodal (image-in only):

- GDP.pdf: **83.4% no-tools / 85.5% with tools** — by far the strongest document-reasoning figure in this batch
- Chartography: 83.0% with tools / 29.6% without; OfficeQA: 78.1%; **AA-MMMU-Pro: 84.7%**; Design Arena: 1,309 Elo
- BenchCAD Vision2Code: 0.821 with tools / **0.366 without** — a striking tool-dependence gap
- SWE Multimodal: 59.4%

### Normalized scores (1–100)

- **Tool use: 95/100.** The best tool-use profile measured in this research series, and the only one that clears both available frontier references at once — aaTerminalBench21 89.1% (AA) and GDPval-AA 1,862 Elo — backed by BrowseComp 90.8%, DeepSearchQA 95.0%, MCP-Atlas 85.8%, DRACO 88.6%, AA Harvey LAB 93.5% and Toolathlon-Verified 80.6%. Capped only by the missing τ³-Banking and Claw-Eval figures, and by the weak rows: AutomationBench 26.0%, Terminal-Bench 3.0 42.7%, MazeBench 12%, ApprenticeBench 36% and the LAB all-pass/criterion-pass gap (23.6% vs 93.7%).
- **Reasoning: 94/100.** GPQA Diamond 93.2%/93.4% and HLE 64.7%/56.3% clear their frontier references, ARC-AGI-2 is 90.4%, FrontierMath Tier 4 is 73.2%, and **IMO 2026 is a perfect 42/42** — the single strongest discrete result in this batch. Capped by an AA Intelligence Index of 50.8 (below the 60+ reference), CritPt 29.1%, a 60.8% hallucination rate, ARC-AGI-3 30.2% and no published MRCR figure.
- **Context window: 95/100.** 1M-token tier with 128K synchronous and 300K Batch output (explicitly listed for Opus 5), plus AA-LCR 79.3%. Held *below* the 96–97 given to newer Anthropic models because the 1M figure is a **lineage inference**: BenchLM records the context window for this SKU as "Coming soon" and Anthropic's current lineup table no longer lists Opus 5, so the value is unconfirmed rather than vendor-stated. No MRCR run exists.
- **Multimodal: 70/100.** Text + image in with text out places it at the top of the methodology's "+image in" 60–70 band, and GDP.pdf 85.5% with tools plus MMMU-Pro 84.7% justify the ceiling. Not higher: no video or audio input, text-only output, and a striking tool-dependence gap (Chartography 83.0% with tools vs 29.6% without; BenchCAD 0.821 vs 0.366) showing the vision pipeline leans heavily on scaffolding.
- **Coding: 95/100.** The strongest coding dimension in this batch. SWE-bench Verified 96–97% is the highest anywhere in this series, AA Coding Index 78.0% clears the 70% reference, AA-SciCode 56.4% clears the 55% reference, and ProgramBench 93.0%, VulcanBench CII v1 96.4%, SWE Multilingual 89.5% and LiveCodeBench 89.0% all corroborate. Capped by DeepSWE 68.8% (5.2 points under the reference), FrontierCode 2.0 26.7%, CursorBench 4.0 46.6% and PostTrainBench 35.0% — i.e. it is the best *repair* coder here but not the best *greenfield* one.
- **Cost efficiency: 45/100.** $5/$25 per 1M with $0.50 cache reads sits between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors — the most expensive tier still available on Zen among Anthropic models, at a mid-range quality score. No free tier, and Zen applies no discount to it. The only mitigators are Anthropic's general 50% Batch policy and the 10% cache-read ratio.
- **Overall Score: 90/100.** (95 + 94 + 95 + 70 + 95) / 5 = 89.8 → **90** → 90. Recommendation: still an outstanding choice **specifically for repository repair, codebase understanding and agentic coding** — SWE-bench Verified 96–97%, MCP-Atlas 85.8%, BrowseComp 90.8% and a perfect IMO 2026 make it the best "fix and understand this code" model in this batch. But it is now a legacy SKU, it costs $5/$25 versus Sonnet 5.5's $2/$10, and Sonnet 5.5 outranks it on BenchLM (81.84 vs 79.68) while beating it on Terminal-Bench 4.0 (70.6% vs Opus 5's unmeasured) — so for new work prefer Opus 5.5 or Sonnet 5.5, and reserve Opus 5 for workloads that specifically need its SWE-bench-Pro/MCP-Atlas strengths or already run on it.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's Opus 5 system card and Opus 5.5 system card as the primary sources, cross-checked against BenchLM's **104-row catalog** (the largest in this batch, attributing each number to Anthropic's system cards, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Proximal, Kaggle, VulcanBench, Google's Gemini 3.8 Flash card or OpenRouter), Anthropic's models-overview page (which establishes Opus 5's legacy status and the 300K Batch listing) and OpenCode Zen's pricing table. Where a vendor and an independent harness disagree, both are shown (SWE-bench Verified 96% vs 97.0%; Terminal-Bench 2.1 89.1% vs 84.6%). The 1M context window is explicitly flagged as a lineage inference because BenchLM records it as "Coming soon" for this SKU. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 5 system card](https://www.anthropic.com/claude-opus-5-system-card)
  - [Anthropic — Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
  - [Anthropic — Models overview (legacy status, 1M tokenizer lineage, 300K Batch listing)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [Anthropic — Claude Opus 5.5 system card (source of the OSWorld 2.1 row)](https://www.anthropic.com/claude-opus-5-5-system-card)
  - [BenchLM — Claude Opus 5 benchmark scores (104 rows, 79.68/100, #10/1009)](https://benchlm.ai/models/claude-opus-5)
  - [Artificial Analysis — Claude Opus 5](https://artificialanalysis.ai/models/claude-opus-5)
  - [Vals AI — Claude Opus 5 leaderboard results](https://www.vals.ai/models/anthropic_claude-opus-5)
  - [ARC Prize — published semi-private results for Claude Opus 5](https://arcprize.org/results/anthropic-claude-opus-5)
  - [VulcanBench v3 results (source of the 87.0% and 96.4% figures)](https://github.com/morganlinton/VulcanBench)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
