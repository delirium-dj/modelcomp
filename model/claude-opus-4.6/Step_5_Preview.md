# Claude Opus 4.6 — findings by Step 5 Preview

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6. Now **four generations behind** the current lineup: Opus 5.5 (86.29) → Opus 5 (79.68) → Opus 4.8 (69.63) → Opus 4.7 (68.11) → Opus 4.6 (61.82). Anthropic's models overview lists it under "Legacy models (still available)", and **BenchLM classifies it as Non-Reasoning** — the second such model in this batch after Gemini 3 Pro. A separate sibling, **Claude Opus 4.6 (Adaptive)**, is tracked as its own folder; the figures below describe the base variant.
- **Short description:** A 4.6-generation legacy model whose most interesting feature is a **provenance problem**: its BrowseComp row (83.7%) is sourced from the **Claude Mythos Preview system card** — a *different, later* model — so its best agentic number is not actually its own. Strip that out and the agentic record is thin. It also holds the **worst CritPt score measured anywhere in this research series (2.8%)** and an **AA-HLE of 19.1% against Anthropic's own HLE of 53%**, a 33.9-point vendor-vs-independent gap.
- **Provider / access:** Claude API, Amazon Bedrock, Claude Models on Google Cloud, Microsoft Foundry, Claude Platform on AWS. **No rate card is published for this SKU in the sources checked, and it is absent from Zen's current model list** — consistent with its legacy status.
- **Release / knowledge:** release date not restated for this legacy SKU; the 4.6 generation is the 2026 mid-cycle predecessor of 4.7/4.8/5. **Knowledge cutoff not restated by Anthropic.**
- **IDs:** `claude-opus-4-6` (all platforms use the same dateless pinned ID).
- **Context window:** **1M tokens** (BenchLM). Max output not restated for this SKU, and it is **not** in the 300K Batch extended-output list, so output is capped at 128K.
- **Modalities:** **text and images in → text out** (Anthropic's lineup-wide statement). BenchLM classifies it Non-Reasoning.
- **Pricing (as of 2026-11-05):** **not published in the sources checked.** Anthropic's current pricing page covers only the current lineup; Zen's model list omits 4.6 entirely. Cost efficiency is therefore scored conservatively and flagged as unverified rather than assumed from sibling SKUs.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Anthropic's Opus 4.6 system card is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, the Claw-Eval and CyberGym leaderboards, Cognition, Cursor, Kaggle, LlamaIndex, the JobBench paper, Meta's Muse Spark chart, Arcee's Trinity-Large-Thinking table, Qwen's comparison charts and OpenRouter supplying independent rows.

Agent / tool use:

- **Claw-Eval: 70.4%** — one of only two models in this entire research series with a published Claw-Eval figure (the other is GPT-6 Astra's absence; Kimi K3, Muse Spark 1.2, GLM-5.3-Flash and Claude Mythos 5 are all missing)
- **BrowseComp: 83.7%** — **provenance caveat: sourced from the Claude Mythos Preview system card, a different and later model**, so this number is lineage-adjacent rather than a direct 4.6 measurement
- OSWorld-Verified: 72.7%; τ²-bench: 84.8%; DeepSearchQA: 73.7%; CyberGym: 66.6%; AndroidWorld: 62.0%
- **Terminal-Bench 2.0: 65.4%** — note the 2.0 harness, not 2.1; no TB2.1 or TB4.0 figure exists for this model
- terminalBenchHard: 48.5%; JobBench: 36.7%; **ApprenticeBench: 5%**; ResearchClawBench: 19.9%; Gert Labs: 61.85%
- **τ³-Banking, GDPval-AA, OSWorld 2.x, MCP-Atlas, Toolathlon, AutomationBench, MazeBench, Agents' Last Exam: no verified public score found**

Reasoning / knowledge:

- **GPQA: 91.3%** (system card) / **GPQA-D 89.2%** (Arcee) / **AA-GPQA Diamond 84.0%** — clears the 90% reference only on Anthropic's own run
- **HLE: 53%** (system card) / HLE without tools 40% / **AA-HLE 19.1%** — a **33.9-point vendor-vs-independent gap**, the largest measured in this batch
- SuperGPQA: **95%**; MMLU-Pro: 82% (Qwen) / **89.1%** (Arcee); AIME25 (Arcee): **99.8%**
- **AA Intelligence Index: 26.4**; **AA-LCR: 67.0%** — the weakest AA-LCR in this batch
- **CritPt: 2.8%** — the worst scientific-reasoning score measured anywhere in this research series
- FrontierMath v2 Tiers 1–3: **66.0%**; Tier 4: **26.8%**; ARC-AGI-3: 0.5%
- **AA-Omniscience: index 2.4, accuracy 45.8%, hallucination rate 80.1%**; HealthBench Hard: 14.8%; MedXpertQA (Text): 52.1%; AA-IFBench: 44.6%
- **MRCR: no verified public score found**

Coding:

- **SWE-bench Verified: 80.8%** (system card) / **75.6%*** (Arcee) — a 5.2-point vendor-vs-independent gap
- React Native Evals: **84.1%**; LiveCodeBench Pro: 70.7%; Vibe Code Bench: 57.57%
- SWE-bench Pro: 53.4%; SWE-Rebench: 65.3%; **FrontierCode 1.1 Main: 26.9%**; Terminal-Bench 2.0: 65.4%
- **DeepSWE, AA Coding Index, AA-SciCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Multimodal (image-in):

- MMMU-Pro: **77.3%** (system card) / AA-MMMU-Pro **72.5%**; ScreenSpot Pro: **83.1%**; MedXpertQA (MM): 64.8%; ERQA: 51.6%; ParseBench: 54.07%; Design Arena: 1,290 Elo

### Normalized scores (1–100)

- **Tool use: 62/100.** Weak, and weaker than the headline suggests. **Claw-Eval 70.4% is a genuinely valuable data point** — one of only two such figures in this research series — and BrowseComp 83.7%, τ²-bench 84.8% and OSWorld-Verified 72.7% are respectable. But the BrowseComp figure is *provenance-compromised* (Mythos Preview system card, not 4.6), **Terminal-Bench is only at the 2.0 harness (65.4%)**, and ApprenticeBench 5%, JobBench 36.7% and terminalBenchHard 48.5% show the execution layer is not competitive. GDPval-AA, τ³-Banking, OSWorld 2.x, MCP-Atlas, Toolathlon and MazeBench are all missing.
- **Reasoning: 58/100.** The weakest dimension. GPQA 91.3% (Anthropic) and HLE 53% (Anthropic) appear to clear their references, but **AA measures GPQA at 84.0% and HLE at 19.1%** — a 33.9-point gap on the same model — and independently this is what the model actually does. On the AA evidence it fails both references. Compounding that: **CritPt 2.8% is the worst score measured anywhere in this research series**, AA Intelligence Index 26.4, AA-LCR 67.0% (weakest in batch), FrontierMath Tier 4 26.8%, ARC-AGI-3 0.5%, hallucination rate 80.1% and no MRCR. Scored on the independent measurements, not the vendor's.
- **Context window: 88/100.** 1M-token tier, but at the low end because **AA-LCR is 67.0% — the weakest long-context reasoning in this batch** — there is no MRCR or GraphWalks measurement, output is capped at 128K (no 300K Batch beta), and no max-output limit is published. A large window with the least-measured usable depth.
- **Multimodal: 76/100.** Text + image in with text out. Scored at the top of the methodology's "+image in" 60–70 band because the measured depth is real — **ScreenSpot Pro 83.1%, MMMU-Pro 77.3%** — with ERQA 51.6% and MedXpertQA (MM) 64.8% middling. Held at 76 because there is no video or audio input, ParseBench is 54.07%, and AA measures MMMU-Pro 4.8 points lower than the system card.
- **Coding: 68/100.** SWE-bench Verified 80.8% (Anthropic) / 75.6% (Arcee) and React Native Evals 84.1% are the strengths, with LiveCodeBench Pro 70.7% acceptable. Capped by SWE-bench Pro 53.4%, SWE-Rebench 65.3%, **FrontierCode 1.1 Main 26.9%**, Terminal-Bench 2.0 65.4%, and the complete absence of DeepSWE, the AA Coding Index and AA-SciCode — so all three of the methodology's coding references are unmeasured for this SKU.
- **Cost efficiency: 55/100.** **No rate card is published for this SKU in any source checked** — Anthropic's pricing page covers only the current lineup and Zen's model list omits 4.6 entirely. Scored conservatively at 55, between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors, on the assumption that a four-generation-legacy Anthropic flagship would sit in that band if a route existed. **Explicitly an estimate, not a measurement** — verify against Anthropic's or Bedrock's current pricing before relying on it.
- **Overall Score: 70/100.** (62 + 58 + 88 + 76 + 68) / 5 = 70.4 → 70. Recommendation: **a legacy SKU with nothing to recommend it over its successors.** On BenchLM it scores 61.82 against Opus 4.7's 65.18, Opus 4.8's 69.63 and Opus 5's 79.68, and its independent HLE (19.1%) and CritPt (2.8%) are the worst measured here. Its two genuinely useful artefacts are the **Claw-Eval 70.4% figure** (one of only two in this series) and the **BrowseComp provenance lesson** — that Google/Meta-style comparison tables can attribute a *later* model's system-card number to an earlier one, which is exactly the kind of error this whole research corpus is structured to catch. Migrate unless pinned to `claude-opus-4-6`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's Claude Opus 4.6 system card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 51-row catalog (attributing independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, the Claw-Eval and CyberGym leaderboards, Cognition, Cursor, Kaggle, LlamaIndex, the JobBench paper, Meta's Muse Spark chart, Arcee's Trinity-Large-Thinking table, Qwen's comparison charts and Openrouter) and Anthropic's models-overview page for legacy status and Batch-output eligibility. Two provenance problems are recorded explicitly rather than smoothed over: the **BrowseComp 83.7% row is sourced from the Claude Mythos Preview system card, a different and later model**, and the **33.9-point vendor-vs-AA gap on HLE (53% vs 19.1%)** is resolved in favour of the independent measurement. Missing benchmarks (τ³-Banking, GDPval-AA, OSWorld 2.x, MCP-Atlas, Toolathlon, AutomationBench, MazeBench, Agents' Last Exam, DeepSWE, AA Coding Index, AA-SciCode, MRCR) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 4.6 system card (primary benchmark source)](https://www.anthropic.com/claude-opus-4-6-system-card)
  - [Anthropic — Models overview (legacy status, 300K Batch listing, lineup modality statement)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Claude Opus 4.6 benchmark scores (51 rows, 61.82/100, #47/1009)](https://benchlm.ai/models/claude-opus-4-6)
  - [Artificial Analysis — Claude Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6)
  - [Claw-Eval leaderboard (source of the 70.4% figure)](https://claw-eval.github.io/)
  - [Arcee — Trinity-Large-Thinking comparison table (source of the SWE-bench Verified* 75.6% and AIME25 rows)](https://www.arcee.ai/blog/trinity-large-thinking)
  - [Meta AI — Muse Spark comparison chart (source of several independent rows)](https://ai.meta.com/blog/introducing-muse-spark-msl/)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
