# Claude Mythos 5.1 — findings by Step 5 Preview

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1. **Not a separate set of weights from Claude Fable 5.1** — Anthropic's own model page states it "is the same model as Claude Fable 5.1, available only to organizations verified through Anthropic's verification programs". The two names exist only because the safeguards differ: Mythos has the cyber safeguards lifted. The page's own short description is literally "Claude Fable 5.1 for verified organizations".
- **Short description:** The verification-gated variant of Anthropic's demanding-reasoning tier, released 2026-09-01 and restricted to organizations verified through the **Cyber Verification Program**. Because the safeguards that prevent offensive-cyber use are removed, the *capability* reachable through this SKU is materially higher than Fable 5.1's even though the weights, specs, pricing and every published benchmark are identical.
- **Provider / access:** **Verification required** — Claude API, Amazon Bedrock (`anthropic.claude-mythos-5-1`), Claude Models on Google Cloud (Google managed), Microsoft Foundry. **No OpenCode Zen route** (Zen carries `claude-fable-5-1`, not Mythos), because it is not self-serve. Status: Active (verification required); retirement not sooner than 2027-09-01.
- **Release / knowledge:** released **2026-09-01**; reliable knowledge cutoff and training data cutoff both **Jun 2026**.
- **IDs:** `claude-mythos-5-1` (all four platforms).
- **Context window:** **1M tokens** (~555k words / 2.5M Unicode chars on the Opus 4.7+ tokenizer); **max output 128K** synchronous. Note that unlike Opus 5.5, **the 300K Batch extended-output beta is not listed for Mythos 5.1** — Anthropic's footnote enumerates it for Opus 5.5, Opus 5, Sonnet 5.5, Sonnet 5, Haiku 5.5, Opus 4.8/4.7/4.6 and Sonnet 4.6, and Fable 5.1 / Mythos 5.1 are absent from that list.
- **Modalities:** **text and images in → text out** (Anthropic's lineup-wide statement). No video or audio. Adaptive thinking always on, cannot be disabled; default effort `high`; comparative latency **Slower** (matched with Fable 5.1, above Opus 5.5's Moderate).
- **Pricing (as of 2026-11-05):** **$10 input / $0.25 cached / $50 output per MTok**; 5m cache write $12.50, 1h cache write $20; Batch API 50% off. Cache reads at 2.5% of base — the best cache-read rate in the lineup, alongside Fable 5.1.
- **Architecture:** proprietary, closed weights; parameter count undisclosed (shared with Fable 5.1).

### Raw benchmarks found

**All benchmark numbers below apply to the shared Fable 5.1 / Mythos 5.1 weights.** They come from the joint *Claude Fable 5.1 and Claude Mythos 5.1 system card* and independent Artificial Analysis / Vals AI runs transcribed by BenchLM, and are recorded here rather than re-derived — a separate Mythos measurement would be a different evaluation of the same weights, not new evidence.

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (AA) / **85.0%** (Vals) — 6.4-point harness spread
- GDPval-AA: **1,764 Elo** / 62.7% normalized; AA Harvey LAB v1.0: **93.0%**; AA Briefcase: 1,669 Elo; AA Agentic Index: 58.0%
- AA Tau3 Banking: **47.2%**; Toolathlon-Verified: **77.8%**
- Terminal-Bench 4.0: **55.8%** (system card) / **52.0%** (AA)
- OSWorld 2.1: **80.7%**; OSWorld 2.0: 41.7%
- AutomationBench: **31.4%** (vendor) vs **AA AutomationBench 59.4%**
- GDP.pdf: 26.2%; **MazeBench: 10%**; AA Cyber Index: 25.0%; CyberGym-E2E-AA: 0.8%; CWE-bench v1: 58.0%
- **Claw-Eval: no verified public score found**

Reasoning / knowledge:

- **AA-GPQA Diamond: 93.7%** / **93.4%** (Vals); AA-HLE **59.1%**; HLE **65%**; HLE no-tools **60.9%**
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90%**
- FrontierMath v2 Tier 4: **87.8%**; Tiers 1–3: **90.2%** (Epoch AI)
- MMLU-Pro (Vals): 92.4%; AA-LCR: **85.3%**; GraphWalks BFS 256K–1M: 65.0%
- CritPt: **29.7%**; MLCR-AA: **15.6%**; AA-Omniscience: index 46.3, accuracy **68.4%**, hallucination rate **70.0%**
- Artificial Analysis Intelligence Index: **49.0**
- **MRCR: no verified public score found**

Coding:

- AA Coding Index: **81.6%**; LiveCodeBench (Vals): **90.5%**; SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**
- AA-SciCode: **63.1%**; ProgramBench: **87.6%**; Terminal-Bench 2.1: 91.4% / 85.0%
- DeepSWE: **67.4%** (below the 74% reference); CursorBench 3.2 73.4% / 4.0 51.8%; FrontierSWE v2 56.3%; **FrontierCode 2.0 32.4%**; PostTrainBench v1.1 40.2%; SWE Multimodal 54.7%
- SWE-bench Verified: **no verified public score found**

Multimodal (image-in only): ParseBench **78.12%**; Design Arena **1,312 Elo**; SWE Multimodal 54.7%. **No MMMU-Pro, Chartography or ZeroBench figure** — the least-evidenced multimodal profile in the Claude lineup.

Safety / access notes that are Mythos-specific rather than shared-weights:

- This is the SKU on which Anthropic's cyber capability is *reachable*; the joint system card's cyber evaluations describe the same weights Fable 5.1 gates behind classifiers.
- Anthropic states the Fable 5.1 classifiers "prevent Fable from making any progress" on offensive-cyber tasks and that more than 95% of Fable sessions involve no fallback at all — so for those sessions the two are behaviourally identical, and for the remainder Mythos 5.1 is strictly more capable.

### Normalized scores (1–100)

> **These are the shared-weights scores.** Because Anthropic states the models are the same model, the five quality dimensions are scored identically to `claude-fable-5.1`; scoring them differently on the same weights would be double-counting. The one genuine behavioural difference — that Mythos's cyber safeguards are lifted — is a *capability-access* difference the published benchmarks do not measure, so it is recorded as a note rather than folded into a number.

- **Tool use: 93/100.** Hits all three methodology frontier references simultaneously — Terminal-Bench 2.1 91.4% (AA), GDPval-AA 1,764 Elo (above the 1,750 reference) and AA Tau3 Banking 47.2% (2.8 points short) — plus AA Harvey LAB 93.0%, AA Briefcase 1,669 and Toolathlon-Verified 77.8%. Capped by MazeBench 10%, GDP.pdf 26.2%, CyberGym-E2E-AA 0.8% and no Claw-Eval figure.
- **Reasoning: 92/100.** GPQA Diamond 93.7%/93.4% and HLE 59.1–65% clear the frontier references, backed by ARC-AGI-2 90%, FrontierMath Tier 4 87.8% and the best AA-Omniscience accuracy in this batch (68.4%). Capped by an AA Intelligence Index of 49.0 (below the 60+ reference), CritPt 29.7%, MLCR-AA 15.6% and a 70.0% hallucination rate.
- **Context window: 97/100.** 1M-token tier with 128K output and the best long-context reasoning figure in this batch (AA-LCR 85.3%). Held under 100 because no MRCR run exists, GraphWalks BFS at 256K–1M is 65.0%, and the 300K Batch extended-output beta is *not* available on this SKU.
- **Multimodal: 70/100.** Text + image in with text out, at the top of the methodology's "+image in" band, supported by ParseBench 78.12% and Design Arena 1,312 Elo but with no MMMU-Pro, Chartography or ZeroBench figure at all — the thinnest multimodal evidence in this batch.
- **Coding: 90/100.** AA Coding Index 81.6%, Terminal-Bench 2.1 91.4% and AA-SciCode 63.1% all clear their references, with LiveCodeBench 90.5% and SWE-bench Pro 81.2% strong. Capped by DeepSWE 67.4% (below the 74% reference), FrontierCode 2.0 32.4% and no published SWE-bench Verified figure.
- **Cost efficiency: 30/100.** $10/$50 per MTok maps onto the methodology's ~30 anchor. The 2.5% cache-read price is the best in the lineup, but NeuralTrust's independent measurement of the shared weights at **$7.63 per index task** is the worst of any frontier model checked. No free tier, and access requires a verification programme rather than self-serve signup.
- **Overall Score: 88/100.** (93 + 92 + 97 + 70 + 90) / 5 = 88.4 → **88** → 88. Recommendation: identical to Fable 5.1 on measured quality — request it through the Cyber Verification Program **only** if you specifically need the unsafeguarded cyber capability, since for every other workload it is the same weights at the same price with less access. Note also that this SKU lacks the 300K Batch extended-output beta that Opus 5.5 offers.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's official Mythos 5.1 model documentation as the primary source (which establishes the shared-weights relationship, the verification gate, specs, pricing, availability and the absence of the 300K Batch beta on this SKU), plus the joint Claude Fable 5.1 / Mythos 5.1 system card and BenchLM's catalog for the shared benchmark evidence. Because the weights are shared, every benchmark number is explicitly labelled as applying to both models rather than presented as Mythos-specific evidence. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos 5.1 model documentation](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Anthropic — Claude Fable and Mythos 5.1 launch](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Anthropic — Claude Fable 5.1 and Claude Mythos 5.1 system card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)
  - [Anthropic — Cyber Verification Program](https://support.claude.com/en/articles/14604842)
  - [BenchLM — Claude Fable 5.1 / Mythos 5.1 shared benchmark catalog](https://benchlm.ai/models/claude-fable-5-1)
  - [Artificial Analysis — Claude Fable 5.1 (shared weights)](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [OpenCode Zen — model list and Console pricing (no Mythos route)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
