# Claude Fable 5 — findings by Step 5 Preview

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5. Now a **legacy SKU** — listed under "Legacy models (still available)" in Anthropic's models overview, superseded by **Claude Fable 5.1** (2026-09-01). It shares weights with **Claude Mythos 5** (the verification-gated variant with cyber safeguards lifted), so the numbers below apply to both.
- **Short description:** The first Fable/Mythos-class model, launched 2026-06-09 and marketed as Anthropic's first model "made safe for general use" after the April Mythos Preview. At launch it was "state-of-the-art on nearly all tested benchmarks"; five months on it has been overtaken by Opus 5.5, Sonnet 5.5 and Fable 5.1, and it now ranks **#8 of 1009 on BenchLM (80.78)** — below three models from its own family.
- **Provider / access:** Claude API, Amazon Bedrock, Claude Models on Google Cloud (Google managed and Anthropic managed), Microsoft Foundry, and OpenCode Zen (`opencode/claude-fable-5` at **$10/$50/$1.00 cached**). The `claude-fable-5` ID remains a pinned, callable snapshot.
- **Release / knowledge:** released **2026-06-09**. Access was suspended and restored on 2026-06-12, and both Fable 5 and Mythos 5 were redeployed 2026-07-01. **Reliable knowledge cutoff and training data cutoff: Jan 2026** — five months staler than the current lineup's Jun 2026, which is a material disadvantage for a model still sold at $10/$50.
- **IDs:** `claude-fable-5` (all platforms).
- **Context window:** **1M tokens** (BenchLM records "1M+"). Max output 128K synchronous; Opus 5 and later are the models listed for the 300K Batch beta, so Fable 5 is limited to 128K.
- **Modalities:** **text and images in → text out** (Anthropic's lineup-wide statement). Adaptive thinking always on; default effort `high`.
- **Pricing (as of 2026-11-05):** **$10 input / $1.00 cached / $50 output per MTok** — the same headline rate as Fable 5.1 but with a **worse cache-read price** ($1.00 = 10% of base, vs Fable 5.1's $0.25 = 2.5%). Anthropic estimates Fable 5.1's cheaper cache reads cut typical workloads ~25% and highly agentic workloads up to 45%, so this SKU is strictly worse value on the same rate card. Batch API 50% off.
- **Architecture:** proprietary, closed weights; parameter count undisclosed (shared with Mythos 5).

### Raw benchmarks found

The **Claude Fable 5 and Claude Mythos 5 system card** is the primary source, so these numbers describe the shared weights. Artificial Analysis, Vals AI, ARC Prize and Epoch AI supply the independent rows; vendor and independent figures are shown separately.

Agent / tool use:

- **Terminal-Bench 2.1: 84.3%** (system card) / **84.6%** (AA) / **80.5%** (Vals) — three harnesses within 4.1 points, all *just under* the 88% frontier reference
- **GDPval-AA: 1,747 Elo** (system card) / 55.5% normalized — three Elo points under the 1,750 frontier reference
- **τ²-bench: 98.5%** (AA) — a strong service-workflow result, and the best in this batch
- **AA Harvey LAB v1.0: 93.6%**; OSWorld-Verified: **85%**
- AA Agentic Index: 51.0%; AA EnterpriseOps-Gym: 51.1%; AA-AnalystAgent: 48.8%; Terminal-Bench Hard: 62.9%
- **AA Tau3 Banking: 38.1%** — 11.9 points under the 50% frontier reference
- **Terminal-Bench 3.0: 34.0%** — a severe weakness on the newer terminal harness; ApprenticeBench 34%; MazeBench 11%
- **Claw-Eval: no verified public score found**

Reasoning / knowledge:

- **AA-GPQA Diamond: 92.6%** / **93.2%** (Vals) — clears the 90%+ frontier reference
- AA-HLE: **55.5%**; MMLU-Pro (Vals): 91.5% — clears the 40%+ reference
- **ARC-AGI-1: 98.5%**; **ARC-AGI-2: 89.2%**
- **FrontierMath v2 Tier 4: 90.2%**; Tiers 1–3: **87.0%** (Epoch AI)
- AA-LCR: **82.3%**; **CritPt: 28.6%**; AA-IFBench: 63.5%
- AA Intelligence Index: **49.6**; AA-Omniscience: index 43.3, accuracy **65.4%**, hallucination rate **63.6%**
- **MRCR: no verified public score found**

Coding:

- **SWE-bench Verified: 95%** (system card) / **95.0%** (Vals)
- **AA Coding Index: 76.5%** — clears the 70%+ frontier reference
- **AA-SciCode: 61.0%** — clears the 55%+ reference; SWE-bench Pro: **80%**
- LiveCodeBench (Vals): **89.8%**; **VulcanBench v3: 89.5%**; CursorBench 3.1 70.6% / 3.2 70.5%
- FrontierCode 1.1 Main: 53.5%; **FrontierSWE v2: 47.0%**; Terminal-Bench 2.1 84.3%; **Terminal-Bench 3.0: 34.0%**
- DeepSWE: **no verified public score found**

Multimodal (image-in only) — **the thinnest multimodal evidence in the Claude lineup**:

- ParseBench: 69.79%; Blueprint-Bench 2: 38.6%; OfficeQA Pro: 57.9%; Design Arena (website): 1,294 Elo
- **No MMMU-Pro, Chartography, ExtractBench or ZeroBench figure** — unlike Opus 5.5 and Sonnet 5.5, Fable 5 has no general visual-reasoning benchmark recorded at all, so its image capability is largely unverified

### Normalized scores (1–100)

- **Tool use: 84/100.** Consistently *just* short of the frontier band on every reference: Terminal-Bench 2.1 84.3–84.6% (vs 88%), GDPval-AA 1,747 Elo (vs 1,750), AA Tau3 Banking 38.1% (vs 50%). Held up by genuinely strong service-workflow and legal results — τ²-bench 98.5%, AA Harvey LAB 93.6%, OSWorld-Verified 85% — and held down by Terminal-Bench 3.0 34.0%, ApprenticeBench 34%, MazeBench 11% and the absence of any Claw-Eval figure. A strong but no-longer-frontier agentic model.
- **Reasoning: 92/100.** GPQA Diamond 92.6%/93.2% and HLE 55.5% both clear the frontier references, with ARC-AGI-2 89.2%, FrontierMath Tier 4 90.2% and MMLU-Pro 91.5% corroborating. Capped by an AA Intelligence Index of 49.6 (below the 60+ reference), CritPt 28.6%, a 63.6% hallucination rate, and no MRCR figure.
- **Context window: 96/100.** 1M-token tier with AA-LCR 82.3%. Held just under the newer Anthropic models because no MRCR retrieval run exists and — unlike Opus 5, Opus 5.5 and Sonnet 5.5 — this SKU is **not** listed for the 300K Batch extended-output beta, capping output at 128K.
- **Multimodal: 68/100.** Text + image in with text out places it in the methodology's "+image in" 60–70 band, but at the *lower* end because the evidence is nearly absent: only ParseBench 69.79%, Blueprint-Bench 2 38.6% and OfficeQA Pro 57.9% exist, with no MMMU-Pro, Chartography, ExtractBench or ZeroBench row. Compare Opus 5.5 (MMMU-Pro 87.7%, Chartography 89.0%, BenchCAD 0.962) and Sonnet 5.5 (ExtractBench 94.68%, Chartography 90.2%) — both score the same 70 on coverage but with far deeper verified capability. Fable 5's image depth is simply unproven, which is why it sits at 68 rather than 70.
- **Coding: 93/100.** SWE-bench Verified 95%/95.0%, AA Coding Index 76.5% and AA-SciCode 61.0% all clear their references, with LiveCodeBench 89.8% and VulcanBench v3 89.5% strong. Capped by FrontierSWE v2 47.0%, FrontierCode 1.1 Main 53.5%, Terminal-Bench 2.1 84.3% (under the 88% reference), Terminal-Bench 3.0 34.0% and no published DeepSWE figure.
- **Cost efficiency: 30/100.** $10/$50 per MTok maps onto the methodology's ~30 anchor, and this SKU is the worst-value way to buy it: the identical rate card on Fable 5.1 carries a 4x better cache-read price ($0.25 vs $1.00) that Anthropic estimates saves ~25% of typical and up to 45% of highly agentic workload cost. Combined with a Jan 2026 knowledge cutoff and a #8 BenchLM rank, it is dominated by Sonnet 5.5 on every axis. No free tier.
- **Overall Score: 87/100.** (84 + 92 + 96 + 68 + 93) / 5 = 86.6 → **87** → 87. Recommendation: **a legacy model with no remaining reason to select it.** Every dimension is matched or beaten by a cheaper, newer Anthropic SKU — Sonnet 5.5 ranks higher (81.84 vs 80.78) at a fifth of the price with the same 1M window unpriced, and Fable 5.1 is the same weights with better cache economics and a Jun 2026 cutoff. Keep it only if workloads already pin `claude-fable-5` and cannot migrate; otherwise migrate per Anthropic's own Fable 5 → Fable 5.1 guide.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's Claude Fable 5 / Mythos 5 system card and models-overview page as the primary sources (establishing the shared-weights relationship, legacy status, Jan-2026 knowledge cutoff, 128K output cap and absence of the 300K Batch beta), cross-checked against BenchLM's 47-row catalog (attributing each number to Anthropic's system card, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Proximal, Kaggle, LlamaIndex, NeoCognition or OpenRouter) and OpenCode Zen's pricing table. Because Fable 5 and Mythos 5 share weights, every benchmark number is explicitly labelled as applying to the shared weights. Conflicting figures are listed side by side — Terminal-Bench 2.1 84.3% / 84.6% / 80.5% across three harnesses — rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5 model documentation](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Anthropic — Claude Fable 5 and Claude Mythos 5 launch post](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Anthropic — Claude Fable 5 and Claude Mythos 5 system card](https://www.anthropic.com/claude-fable-5-mythos-5-system-card)
  - [Anthropic — Models overview (legacy status, lineup modality statement)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Claude Fable 5 benchmark scores (47 rows, 80.78/100, #8/1009)](https://benchlm.ai/models/claude-fable-5)
  - [Artificial Analysis — Claude Fable 5](https://artificialanalysis.ai/models/claude-fable-5)
  - [Vals AI — Claude Fable 5 leaderboard results](https://www.vals.ai/models/anthropic_claude-fable-5)
  - [ARC Prize — published semi-private results for Claude Fable 5](https://arcprize.org/results/anthropic-claude-fable-5)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
