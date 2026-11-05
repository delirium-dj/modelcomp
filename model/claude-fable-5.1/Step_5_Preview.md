# Claude Fable 5.1 — findings by Step 5 Preview

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1. Anthropic positions it for "demanding reasoning and long-horizon agentic work" — specifically, the model to reach for when evals on Claude Opus 5.5 at higher effort still fall short.
- **Short description:** The tier above Opus 5.5, sharing weights with the verification-gated **Claude Mythos 5.1** (Mythos = Fable with the cyber safeguards lifted; the names exist only because the safeguards differ). BenchLM scores it 81.08/100, #7 of 1009.
- **Provider / access:** Claude API, Amazon Bedrock, Claude Models on Google Cloud (Google managed and Anthropic managed), Microsoft Foundry, Claude Platform on AWS, and OpenCode Zen (`opencode/claude-fable-5-1` at $10/$50/$0.25).
- **Release / knowledge:** released **September 2026** (launch page effective 2026-09-01); reliable knowledge cutoff and training data cutoff both **Jun 2026**.
- **IDs:** `claude-fable-5-1` across all platforms.
- **Context window:** **1M tokens**; **max output 128K** synchronous, **300K on the Message Batches API** with the `output-300k-2026-03-24` beta header.
- **Modalities:** **text and images in → text out** — Anthropic's models overview states that *all* current models share this modality set, so Fable 5.1 has no video or audio input. Adaptive thinking is always on and cannot be disabled; default effort `high` (the highest default in the lineup, vs Opus 5.5's `medium`).
- **Pricing (as of 2026-11-05):** **$10 input / $0.25 cached input / $50 output per MTok** — the top pricing tier, but with the **best cache-read discount in the Claude lineup at 2.5% of base** (vs 10% general, 5% on Opus 5.5/Sonnet 5.5). Anthropic estimates that lower cache-read rate reduces typical usage-based Fable workloads by **~25%** and highly agentic workloads by **up to 45%**. Batch API 50% off.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

BenchLM's 64-row catalog is the index. The **Claude Fable 5.1 and Claude Mythos 5.1 system card is the primary source for most numbers**, so these figures describe the shared weights — they apply to Mythos 5.1 as well, with safeguards the only difference. Vendor and Artificial Analysis runs are listed separately where both exist.

Agent / tool use:

- **Terminal-Bench 2.1: 91.4%** (Artificial Analysis) / **85.0%** (Vals AI) — a 6.4-point spread across independent harnesses
- **GDPval-AA: 1,764 Elo** (AA leaderboard) / 62.7% normalized
- **AA Harvey LAB v1.0: 93.0%**; AA Briefcase: 1,669 Elo; AA Agentic Index: 58.0%
- AA Tau3 Banking: **47.2%** — 2.8 points under the 50% frontier reference
- Toolathlon-Verified: **77.8%** (Pass@3 81.5%, Pass³ 73.1%, mean 23.7 turns)
- Terminal-Bench 4.0: **55.8%** (system card) / **52.0%** (AA)
- OSWorld 2.1: **80.7%**; OSWorld 2.0: 41.7%
- AutomationBench: **31.4%** (vendor benchmark) vs **AA AutomationBench 59.4%** — the vendor figure is less than half the AA measurement of the AA-named benchmark; both retained
- AA ITBench: 49.5%; AA-AnalystAgent: 57.5%; ApprenticeBench: 72%
- GDP.pdf: 26.2%; **MazeBench: 10%**; CWE-bench v1: 58.0%; AA Cyber Index: 25.0%; CyberGym-E2E-AA: 0.8%
- **Claw-Eval: no verified public score found**

Reasoning / knowledge:

- **AA-GPQA Diamond: 93.7%** / **93.4%** (Vals AI) — two independent harnesses agree within 0.3 points
- AA-HLE: **59.1%**; HLE (system card): **65%**; HLE without tools: **60.9%**
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90%**
- FrontierMath v2 Tier 4: **87.8%**; Tiers 1–3: **90.2%** (Epoch AI)
- MMLU-Pro (Vals): 92.4%; AA-LCR: **85.3%**; GraphWalks BFS 256K–1M: 65.0%
- CritPt: **29.7%**; MLCR-AA: **15.6%**
- AA-Omniscience: index 46.3, accuracy **68.4%** (the best accuracy in this batch), **hallucination rate 70.0%** (high)
- Artificial Analysis Intelligence Index: **49.0** — below the 60+ frontier reference
- **MRCR: no verified public score found**

Coding:

- **AA Coding Index: 81.6%** — clears the 70% frontier reference
- **LiveCodeBench (Vals): 90.5%**; SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**
- AA-SciCode: **63.1%** (clears the 55% reference); ProgramBench: **87.6%**
- DeepSWE: **67.4%** — below the 74% reference, and the clearest coding weakness
- CursorBench 3.2: 73.4% / 4.0: 51.8%; FrontierSWE v2: 56.3%; **FrontierCode 2.0: 32.4%**; PostTrainBench v1.1: 40.2%; SWE Multimodal: 54.7%; Bug Hunt Bench: 43.0 fixes
- SWE-bench Verified: **no verified public score found** for this exact ID

Multimodal (image-in only, per Anthropic's lineup-wide modality statement):

- ParseBench: **78.12%**; Design Arena (website): **1,312 Elo**; SWE Multimodal: 54.7%
- MMMU-Pro / Chartography / ZeroBench: **no verified public score found** — unlike Opus 5.5, no MMMU-Pro figure is recorded, so multimodal depth here is the least-evidenced of the batch

Safety:

- Gray Swan indirect prompt injection (15 attempts): **1.0%** — same as Claude Opus 5.5, worse than Gemini 4 Carbon's 0.0% and Gemini 4 Argon's 0.7%

### Normalized scores (1–100)

- **Tool use: 93/100.** The only model in this batch that hits all three methodology frontier references at once — Terminal-Bench 2.1 91.4% (AA), GDPval-AA 1,764 Elo (above the 1,750 reference) and AA Tau3 Banking 47.2% (2.8 points short) — plus AA Harvey LAB 93.0%, AA Briefcase 1,669 and Toolathlon-Verified 77.8%. Capped by MazeBench 10%, GDP.pdf 26.2%, CyberGym-E2E-AA 0.8% and no Claw-Eval figure.
- **Reasoning: 92/100.** GPQA Diamond 93.7%/93.4% and HLE 59.1–65% both clear the frontier references, backed by ARC-AGI-2 90%, FrontierMath Tier 4 87.8%, MMLU-Pro 92.4% and the best AA-Omniscience accuracy in the batch (68.4%). Capped by an AA Intelligence Index of 49.0 (below the 60+ reference), CritPt 29.7%, MLCR-AA 15.6% and a 70.0% hallucination rate.
- **Context window: 97/100.** 1M-token tier with 128K synchronous and 300K Batch output, and the best long-context reasoning figure in this batch (AA-LCR 85.3%). Held just under 100 because no MRCR retrieval run exists and GraphWalks BFS at 256K–1M is 65.0%.
- **Multimodal: 70/100.** Text + image in with text out puts it at the top of the methodology's "+image in" 60–70 band, and the two measured results support the ceiling (ParseBench 78.12%, Design Arena 1,312 Elo). But unlike Opus 5.5 there is **no MMMU-Pro, Chartography or ZeroBench figure at all**, so the depth is thinly evidenced and cannot justify exceeding the band.
- **Coding: 90/100.** AA Coding Index 81.6% clears the 70% reference, Terminal-Bench 2.1 91.4% clears the 85% reference and AA-SciCode 63.1% clears the 55% reference, with LiveCodeBench 90.5% and SWE-bench Pro 81.2% strong. Capped by DeepSWE 67.4% (below the 74% reference), FrontierCode 2.0 32.4%, CursorBench 4.0 51.8% and no published SWE-bench Verified figure.
- **Cost efficiency: 30/100.** $10/$50 per MTok maps directly onto the methodology's ~30 anchor. The 2.5% cache-read price is the best in the lineup and Anthropic claims ~25% (typical) to 45% (highly agentic) workload savings, but NeuralTrust's independent measurement of **$7.63 per index task** is the worst of any frontier model checked — above GPT-6 Astra's $3.26, Claude Opus 5.5's $5.98 and Muse Spark 1.3's $1.60. No free tier.
- **Overall Score: 88/100.** (93 + 92 + 97 + 70 + 90) / 5 = 88.4 → 88. Recommendation: the pick when Opus 5.5 at maximum effort is genuinely not enough — it is the strongest tool-use model in this batch and the only one meeting all three tool-use frontier references simultaneously, with the best cache economics in the Claude lineup. It is the wrong pick on price: at $10/$50 and $7.63 per index task it costs roughly 2.3x GPT-6 Astra for a lower measured intelligence index, so reserve it for the hardest long-horizon agentic work where the capability gap is real.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's official model documentation and the **Claude Fable 5.1 and Claude Mythos 5.1 system card** as the primary source, cross-checked against BenchLM's 64-row catalog (which attributes every number to the system card, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Collinear, NeoCognition, Kaggle, LlamaIndex or OpenRouter), Anthropic's models-overview comparison table and OpenCode Zen pricing. Because Fable 5.1 and Mythos 5.1 share weights, all benchmark numbers are explicitly labelled as applying to the shared weights. Conflicting figures are listed side by side — Terminal-Bench 2.1 91.4% vs 85.0%, Terminal-Bench 4.0 55.8% vs 52.0%, AutomationBench 31.4% vs 59.4% — rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.1 model documentation](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [Anthropic — Claude Fable and Mythos 5.1 launch](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Anthropic — Claude Fable 5.1 and Claude Mythos 5.1 system card](https://www.anthropic.com/claude-fable-5-1-and-mythos-5-1-system-card)
  - [BenchLM — Claude Fable 5.1 benchmark scores (64 rows, 81.08/100, #7/1009)](https://benchlm.ai/models/claude-fable-5-1)
  - [Artificial Analysis — Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [Vals AI — Claude Fable 5.1 leaderboard results](https://www.vals.ai/models/anthropic_claude-fable-5-1)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
