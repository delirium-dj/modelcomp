# Inkling — findings by Step 5 Preview

- Source: Thinking Machines Lab (`thinkingmachines/inkling`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling. The larger sibling of **Inkling-Small** (refreshed earlier in this session: 50.04, #99) — and a striking inversion: **the base Inkling scores 48.10, #111 of 1,015, i.e. below its own Small sibling** despite 49 benchmarks to Small's 42. The two share a vendor, a 1M window and a Hybrid reasoning classification.
- **Short description:** An open-weight Thinking Machines model whose profile is **uniformly weak on every agentic and depth axis** (AA AutomationBench 5.0%, AA Terminal-Bench 4.0 1.0%, FrontierSWE v2 4.1%, FrontierMath Tier 4 4.9%) against **two genuinely strong coding figures** (SWE-bench Verified 77.6% / 77.6% Vals, LiveCodeBench 85.5% Vals) and a 1M window. It is, in effect, a repair-coding model wearing an agent's clothes.
- **Provider / access:** Weights on Hugging Face (open weight), Thinking Machines Lab's own API, and OpenCode Zen (`thinkingmachines/inkling`). No Free ID on Zen.
- **Release / knowledge:** release date not restated; the Inkling family is Thinking Machines Lab's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `thinkingmachines/inkling` (Thinking Machines API, Zen, Openrouter); `thinkingmachines_inkling` (Vals).
- **Context window:** **1M tokens** (BenchLM) — the same as Inkling-Small and one of the larger open-weight windows in this research series.
- **Modalities:** **text and image in; text out** (MMMU-Pro 73.5%, CharXiv 82.0% measured). BenchLM classifies it **Hybrid** reasoning, as with Inkling-Small.
- **Pricing (as of 2026-11-05):** **not published in the sources checked** — no rate card appears in BenchLM or the launch post. Scored conservatively and flagged as unverified; **open weights** provide the self-hosting escape that makes the gap less damaging.
- **Architecture:** **open weight**; parameter count undisclosed.

### Raw benchmarks found

Thinking Machines Lab's Inkling launch post is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, Cursor, Kaggle, LlamaIndex, Openrouter, Design Arena's leaderboard, VulcanBench and PostTrain Bench supplying independent rows. 49 benchmarks total.

Agent / tool use — **near-floor**:

- MCP Atlas: **74.1%** (vendor); BrowseComp: **77.1%** (vendor); Design Arena Agentic Web Dev: **1,257 Elo**
- **Terminal-Bench 2.1: 63.8%** (vendor) / **55.1%** [AA] / **47.6%** [Vals] — a **16.2-point spread**, the largest in this batch, and all three far under the 88%+ reference
- **AA AutomationBench: 5.0%** — the lowest AutomationBench figure measured in this research series
- **AA Terminal-Bench 4.0: 1.0%** — the lowest Terminal-Bench 4.0 figure measured in this research series
- GDPval-AA: **1,080 Elo** [AA] / 28.6% normalized — far under the 1,750 reference
- **AA Tau3 Banking: 29.1%**; AA Briefcase: **833 Elo**; AA EnterpriseOps-Gym: 38.0%
- **AA Agentic Index: 24.3%**; AA-AnalystAgent: **23.8%**; GDP.pdf: 12.8%; CWE-bench v1: 37.0%
- **OSWorld, Toolathlon, Claw-Eval, MazeBench, ALE, JobBench: no verified public score found**

Reasoning / knowledge:

- GPQA: **87.9%** (vendor) / AA-GPQA Diamond 87.2% / GPQA Diamond 87.1% (Vals) — fails the 90%+ reference on all three
- HLE: **46.0%** (vendor) / HLE without tools 30.0% / **AA-HLE 31.9%** — clears the 40%+ reference only on the vendor run
- **AA-Omniscience: index −1.5, accuracy 39.3%, hallucination rate 67.2%** — a negative index, meaning slightly more incorrect than correct answers
- AA Intelligence Index: **12.5%** — the lowest composite in this batch; AA-LCR: **77.3%**
- **CritPt: 5.4%**; **MLCR-AA: 6.1%**
- **AIME26: 97.1%** (vendor) — the one strong figure, on competition maths
- FrontierMath v2 Tiers 1–3: **33.3%**; **Tier 4: 4.9%** — the second-lowest Tier 4 in this research series
- MMLU-Pro (Vals): 86.3%; IFBench: 79.8%
- **ARC-AGI, MRCR: no verified public score found**

Coding — the only dimension that works:

- **SWE-bench Verified: 77.6%** (vendor and Vals agree exactly); SWE-bench Pro: 54.3%
- LiveCodeBench (Vals): **85.5%**; CharXiv: **82.0%** (78.1% without tools)
- **AA-SciCode: 47.0%** — under the 55%+ reference; **AA Coding Index: 52.1%** — well under the 70% reference
- **FrontierSWE v2: 4.1%** — the lowest FrontierSWE figure measured in this research series
- **DeepSWE, FrontierCode, Vibe Code Bench, Terminal-Bench 4.0 (vendor): no verified public score found**

Multimodal (image-in):

- MMMU-Pro: **73.5%** (vendor and AA agree exactly); CharXiv: 82.0%
- Design Arena (website): **1,223 Elo** — the second-lowest in this batch
- **ExtractBench, BabyVision, ZeroBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 42/100.** Below the methodology's mid band and close to the floor. MCP Atlas 74.1% and BrowseComp 77.1% are respectable browsing/orchestration figures, but **AA AutomationBench is 5.0% and AA Terminal-Bench 4.0 is 1.0% — both the lowest measured anywhere in this research series — and Terminal-Bench 2.1 spans 63.8%/55.1%/47.6% across three harnesses with a 16.2-point spread.** GDPval-AA is 1,080 Elo against 1,750, AA Tau3 Banking 29.1%, AA Agentic Index 24.3%, AA-AnalystAgent 23.8%, and **OSWorld, Toolathlon, Claw-Eval, MazeBench, ALE and JobBench have no figure at all**.
- **Reasoning: 55/100.** At the bottom of the methodology's mid band. GPQA 87.1–87.9% fails the 90% reference on all three harnesses and AA-HLE 31.9% fails the 40% reference, with **AA-Omniscience index −1.5 (more incorrect than correct), AA Intelligence Index 12.5%, CritPt 5.4%, MLCR-AA 6.1% and FrontierMath Tier 4 4.9%**. AIME26 97.1% is the sole strong figure. Scored mid-band rather than below because SWE-bench Verified 77.6% and LiveCodeBench 85.5% prove the reasoning substrate works for coding tasks — it simply does not generalize.
- **Context window: 97/100.** 1M-token tier — the same large window as Inkling-Small and one of the largest open-weight windows in this research series — with **AA-LCR 77.3%** as reasonable supporting evidence that the window is usable. Held just under 100 because no MRCR retrieval run exists and no max-output limit is published.
- **Multimodal: 76/100.** Text + image in with text out, scored above the methodology's 60–70 band on **CharXiv 82.0% and MMMU-Pro 73.5%**. Held at 76 because the visual suite is three benchmarks, Design Arena is only 1,223 Elo, and there is no video or audio input.
- **Coding: 78/100.** The strongest dimension and the least-bad tier. **SWE-bench Verified 77.6%** with vendor and Vals agreeing exactly, plus LiveCodeBench 85.5% and SWE-bench Pro 54.3%, is a genuine mid-frontier repair record. Capped by **AA Coding Index 52.1%** (18 points under the 70% reference), AA-SciCode 47.0%, FrontierSWE v2 4.1% (the lowest measured here), and no DeepSWE, FrontierCode or Vibe Code Bench figure.
- **Cost efficiency: 55/100.** **No rate card is published in any source checked** — Zen lists it as paid but neither BenchLM nor the launch post carries pricing, so this is a placeholder-for-unknown, not a sibling-based estimate. Scored at 55, between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors. **Explicitly an estimate, not a measurement.** The offsetting fact is that weights are **open**, so self-hosting bypasses the rate-card question entirely.
- **Overall Score: 70/100.** (42 + 55 + 97 + 76 + 78) / 5 = 69.6 → **70** → **70**. Recommendation: an **open-weight 1M repair-coding model and nothing more**. SWE-bench Verified 77.6%, LiveCodeBench 85.5% and CharXiv 82.0% at a 1M window with open weights is a reasonable package for repository-repair and document tasks. Its agentic profile, however, contains the two lowest agentic figures measured in this research series (AutomationBench 5.0%, Terminal-Bench 4.0 1.0%) and the second-lowest FrontierSWE (4.1%), so **it must not be deployed for agentic work**; its AA-Omniscience index is −1.5, so it is also unreliable as a factual source. Prefer Inkling-Small, which scores higher on BenchLM with a thinner catalog.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Thinking Machines Lab's Inkling launch post as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 49-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Cursor, Kaggle, LlamaIndex, Openrouter, Design Arena's Agentic Web Dev leaderboard, VulcanBench and PostTrain Bench) and Zen's paid-listing status. The batch's largest vendor-vs-independent spread — Terminal-Bench 2.1 at 63.8% / 55.1% / 47.6% — is listed side by side rather than averaged, and the two series-lowest agentic figures are attributed explicitly rather than presented bare. The base-vs-Small inversion (48.10 vs 50.04 on BenchLM despite the larger catalog) is recorded as an evidence-structure fact rather than resolved. Missing benchmarks (OSWorld, Toolathlon, Claw-Eval, MazeBench, ALE, JobBench, ARC-AGI, MRCR, DeepSWE, FrontierCode, Vibe Code Bench, vendor Terminal-Bench 4.0, ExtractBench, BabyVision, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Thinking Machines Lab — Inkling launch post (primary benchmark source)](https://thinkingmachines.ai/news/introducing-inkling/)
  - [BenchLM — Inkling benchmark scores (49 rows, 48.10/100, #111/1015)](https://benchlm.ai/models/inkling)
  - [Artificial Analysis — Inkling](https://artificialanalysis.ai/models/inkling)
  - [Vals AI — Inkling leaderboard results](https://www.vals.ai/models/thinkingmachines_inkling)
  - [Design Arena — Agentic Web Dev leaderboard (source of the 1,257-Elo figure)](https://intelligence.ai/leaderboard/webapps)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/inkling-small/`](inkling-small.md) — the sibling model, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
