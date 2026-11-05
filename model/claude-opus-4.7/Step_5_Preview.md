# Claude Opus 4.7 — findings by Step 5 Preview

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7. The figures below describe the **"Adaptive" reasoning variant** (BenchLM 68.11, #21 of 1009), which is the model people actually use; the non-adaptive `Claude Opus 4.7` sibling scores 65.18 (#31). Now **three generations behind** the current lineup: Opus 5.5 (86.29) → Opus 5 (79.68) → Opus 4.8 (69.63) → Opus 4.7 (68.11). Anthropic's models overview lists it under "Legacy models (still available)".
- **Short description:** The 4.7-generation Opus flagship, and the first model to ship Anthropic's **1M-token tokenizer and the 300K Batch extended-output beta** — so despite being a legacy SKU it retains the largest output allowance in the Anthropic lineup. It also holds a genuine distinction: **the generation that introduced adaptive thinking**. Its scores have aged predictably (Terminal-Bench 2.0 69.4%, ARC-AGI-3 0.2%, CritPt 12.0%).
- **Provider / access:** Claude API, Amazon Bedrock, Claude Models on Google Cloud (Google managed and Anthropic managed), Microsoft Foundry, Claude Platform on AWS, and OpenCode Zen (`opencode/claude-opus-4-8`) — note Zen's route uses the `claude-opus-4-8` ID at **$5/$25/$0.50**, and no separate 4.7 route appears in the current Zen model list.
- **Release / knowledge:** release date not restated for this legacy SKU. **Knowledge cutoff not restated by Anthropic** — the models-overview cutoff row covers only the current lineup (Jun 2026), and 4.7 predates the cutoff transparency policy.
- **IDs:** `claude-opus-4-7` (all platforms use the same dateless pinned ID).
- **Context window:** **1M tokens** — and this is the generation that introduced the 1M tokenizer, so the window is genuine rather than retrofitted. **Max output 128K synchronous and up to 300K on the Message Batches API** with the `output-300k-2026-03-24` beta header; Anthropic's footnote explicitly lists Claude Opus 4.7 among the models supporting it.
- **Modalities:** **text and images in → text out** (Anthropic's lineup-wide statement). Reasoning model with **adaptive thinking** — the generation that introduced it — steerable via the `effort` parameter.
- **Pricing (as of 2026-11-05):** no dedicated rate card is published for this SKU in the sources checked; Zen's nearest route is the Opus 4-series card at **$5 / $0.50 / $25 per 1M**. Batch API 50% off.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Anthropic's Opus 4.7 announcement chart is the primary source (so most rows are **vendor-run**), with Artificial Analysis, ARC Prize, the JobBench and OSWorld 2.0 papers, and OpenAI's GPT-5.5 comparison table supplying independent rows.

Agent / tool use — clearly a previous generation:

- **Terminal-Bench 2.0: 69.4%** (note: the 2.0 harness, not 2.1 — no TB2.1 figure exists for this model)
- BrowseComp: 79.3%; **MCP Atlas: 77.3%**; OSWorld-Verified: 78%; τ²-bench: 88.6%; CyberGym: 73.1%
- **GDPval-AA: 1,396 Elo** / 42.6% normalized — far under the 1,750 frontier reference
- JobBench: 45.9%; AA ITBench: 46.7%; AA-AnalystAgent: 43.8%; AA Agentic Index: 39.5%; aaTerminalBench21: 83.1% (AA's own 2.1 run)
- **OSWorld 2.0: 18.2%** — the second-worst figure in this batch
- **τ³-Banking, Claw-Eval, MazeBench, Toolathlon, AutomationBench, ALE: no verified public score found**

Reasoning / knowledge:

- **GPQA: 94.2%** (system card) / **91.4%** (AA) — clears the 90%+ frontier reference on both
- **HLE: 54.7%** (system card) / 46.9% without tools / AA-HLE 42.3% — clears the 40%+ reference
- **AA-LCR: 78.7%**; **MRCR v2 128K–256K: 59.2%** — a measured retrieval figure, and one of the few in this batch, though well below the ≥98% threshold
- ARC-AGI-2: 75.8%; **ARC-AGI-3: 0.2%**; CritPt: **12.0%**
- FrontierMath (legacy): 43.8%; Artificial Analysis Intelligence Index: **40.7**
- **AA-Omniscience: index 27.3, accuracy 48.9%, hallucination rate 42.3%** — a mid-tier reliability profile
- MMLU-Pro: **no verified public score found**; AA-IFBench: 58.6%

Coding:

- **SWE-bench Verified: 87.6%** — solidly frontier for a legacy SKU
- **AA Coding Index: 73.6%** — clears the 70% frontier reference
- SWE-bench Pro: 64.3%; Terminal-Bench 2.0: 69.4%
- **AA-SciCode, DeepSWE, LiveCodeBench, Vibe Code Bench, FrontierCode: no verified public score found** — most of the coding reference set is absent

Multimodal (image-in) — better than its generation suggests:

- **CharXiv: 91.0%** (82.1% without tools); **AA-MMMU-Pro: 78.8%**; OfficeQA Pro: 43.6%
- No ParseBench, ExtractBench, ScreenSpot or Design Arena figure.

### Normalized scores (1–100)

- **Tool use: 66/100.** The weakest agentic profile in this batch apart from the two Gemini 3 models. BrowseComp 79.3%, MCP Atlas 77.3%, OSWorld-Verified 78%, τ²-bench 88.6% and CyberGym 73.1% are respectable but all below the current frontier, GDPval-AA is 1,396 Elo against the 1,750 reference, **OSWorld 2.0 is 18.2%**, and **τ³-Banking, Claw-Eval, Toolathlon and AutomationBench are entirely missing**. Note that the only terminal figure is Terminal-Bench 2.0 at 69.4% — the 2.0 harness, not the 2.1 the rest of this batch is measured on.
- **Reasoning: 78/100.** GPQA Diamond 91.4–94.2% and HLE 42.3–54.7% both clear their references, and AA-LCR 78.7% is solid. Capped by no composite intelligence index credit (40.7), CritPt 12.0%, ARC-AGI-3 0.2%, ARC-AGI-2 only 75.8%, FrontierMath legacy 43.8%, a 42.3% hallucination rate, and MRCR v2 at just 59.2% (128K–256K) — the weakest measured retrieval in this batch.
- **Context window: 97/100.** 1M-token tier, introduced by this very generation, with **300K Batch extended output** — one of only two Anthropic SKUs (with Opus 5) that carry it — plus the batch's few measured retrieval figures at MRCR v2 59.2%. Held under 100 because 59.2% is far below the ≥98% threshold and AA-LCR at 78.7% is mid-tier.
- **Multimodal: 74/100.** Text + image in with text out. Scored at the top of the methodology's "+image in" 60–70 band because the measured depth is real: **CharXiv 91.0%** is the best document/chart figure in this batch and AA-MMMU-Pro 78.8% supports it. Held at 74 rather than the 75–90 video tier because there is no video or audio input, and OfficeQA Pro 43.6% is weak.
- **Coding: 80/100.** SWE-bench Verified 87.6% and AA Coding Index 73.6% (clears the 70% reference) keep it respectable, with SWE-bench Pro 64.3% mid-pack. Capped by Terminal-Bench 2.0 69.4% (the older harness), and by the complete absence of AA-SciCode, DeepSWE, LiveCodeBench, Vibe Code Bench and FrontierCode — so the model's position on the current coding references is unknown.
- **Cost efficiency: 45/100.** No dedicated 4.7 rate card is published; Zen's nearest route is the Opus 4-series **$5 / $0.50 / $25 per 1M**, which sits between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors. Drawn down from a pure rate-card reading because that same card buys **Opus 4.8 (69.63) or Opus 5 (79.68)**, both of which score higher, so the 4.7 is strictly dominated at equal price. Batch at 50% is the only mitigator. No free tier.
- **Overall Score: 79/100.** (66 + 78 + 97 + 74 + 80) / 5 = 78.6 → 79. Recommendation: **a legacy SKU with one genuine remaining asset** — the 300K Batch extended-output path paired with the 1M window it introduced — plus SWE-bench Verified 87.6% and the batch's best CharXiv (91.0%). That is enough for very-long-output document work already pinned to `claude-opus-4-7`. For anything else it is dominated twice over: Opus 4.8 ranks 1.5 BenchLM points higher at the same $5/$25, and Opus 5 ranks 11.6 points higher at the same price again. Migrate unless you need the 300K output specifically.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's Claude Opus 4.7 announcement chart as the primary source (so most rows are vendor-run and labelled as such), cross-checked against BenchLM's 39-row catalog for the Adaptive variant (attributing independent numbers to Artificial Analysis, ARC Prize, the JobBench and OSWorld 2.0 papers, and OpenAI's GPT-5.5 comparison table), Anthropic's models-overview page for the 1M tokenizer lineage and the 300K Batch listing, and OpenCode Zen's pricing table. The Adaptive/non-Adaptive distinction is recorded explicitly (68.11 vs 65.18 on BenchLM) and the Adaptive figures are used throughout. Missing benchmarks (τ³-Banking, Claw-Eval, Toolathlon, AutomationBench, ALE, AA-SciCode, DeepSWE, LiveCodeBench, Vibe Code Bench, FrontierCode, MMLU-Pro) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 4.7 announcement chart (primary benchmark source)](https://www.anthropic.com/news/claude-opus-4-7)
  - [Anthropic — Models overview (1M tokenizer lineage, 300K Batch listing, legacy status)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Claude Opus 4.7 (Adaptive) benchmark scores (39 rows, 68.11/100, #21/1009)](https://benchlm.ai/models/claude-opus-4-7-adaptive)
  - [Artificial Analysis — Claude Opus 4.7](https://artificialanalysis.ai/models/claude-opus-4-7)
  - [ARC Prize — official leaderboard data (ARC-AGI-2 75.8%, ARC-AGI-3 0.2%)](https://arcprize.org/leaderboard)
  - [JobBench paper (source of the 45.9% JobBench figure)](https://arxiv.org/abs/2605.26329)
  - [OSWorld 2.0 paper (source of the 18.2% OSWorld 2.0 figure)](https://arxiv.org/abs/2606.29537)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
