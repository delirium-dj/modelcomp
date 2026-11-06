# GLM-5 — findings by Step 5 Preview

- Source: Z.AI / Zhipu (`opencode/glm-5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5 — Z.AI's open-weight flagship of the 5th generation, now superseded by GLM-5.1 (56.09), GLM-5.2 (60.23) and GLM-5.3 (61.28). BenchLM scores it **54.59/100, #78 of 1,016** and classifies it **Non-Reasoning**.
- **Short description:** A **broadly measured open-weight model with the strongest τ²-bench figure in this research series** — **τ²-bench 98.2%**, alongside **SWE-bench Verified 77.8%, GPQA Diamond 86%, AIME 2026 95.8% and HMMT Feb 2025 97.5%** — and a genuine long-context profile (**AA-LCR 75.7%, LongBench v2 60.8%, AI-Needle 63.3%**). Its caps are the family pattern: **HLE 30.5%, CritPt 2.0%, AA Intelligence Index 27.9, Toolathlon 38%, MCP Atlas 31.1% and APEX-Agents-AA 14.5%.**
- **Provider / access:** **Open weight, MIT-licensed**, on Hugging Face and self-hostable at $0; served via Z.ai and OpenCode Zen.
- **Release / knowledge:** release date not restated; GLM-5 is Z.AI's 2026 flagship line. **Knowledge cutoff not disclosed.**
- **IDs:** `opencode/glm-5` (repo id); `glm-5` (BenchLM canonical).
- **Context window:** **200,000 tokens total, 128,000 max output** — one-fifth of the current 1M standard.
- **Modalities:** **text in; text out** per the repo's curated meta.
- **Pricing (as of 2026-11-06):** **$1.00/M input, $3.20/M output, $0.20/M cached** (Zen price = Z.ai list price); **MIT self-host $0.**
- **Architecture:** **open weight, MIT.** BenchLM classifies it **Non-Reasoning**.

### Raw benchmarks found

**A provenance finding is recorded: BenchLM's attribution for this model is unusually dense — 16 of 753 benchmarks, with rows attributed to Artificial Analysis, Arcee, Gert Labs, Poolside and standard leaderboards, and several benchmark families reported twice under competing harnesses** (SWE-bench Verified at both 77.8% and 72.8%, MMLU-Pro at both 85.7% and 85.8%, GPQA at both 86% and an AA run at 82.0%). This is the most thoroughly cross-checked model in the 2026-11-06 batch.

Agentic / tool use — **the model's signature strength, and its signature inconsistency**:

- **τ²-bench: 98.2%** — **the highest τ²-bench figure in this research series**, and an exceptional result
- **τ³-bench: 65.6%**; **Claw-Eval: 57.7%**; **QwenClawBench: 54.1%**; **WideResearch: 69.8%**; **MCP-Tasks: 60.8%**; **BrowseComp: 62%**; **HLE w/ tools: 50.4%** — a broad, genuinely respectable agentic spread
- **Toolathlon: 38.0%; MCP Atlas: 31.1%; APEX-Agents-AA: 14.5%; DeepPlanning: 14.6%; Gert Labs: 50.99%** — low rows that sit in visible tension with the rows above
- **Terminal-Bench 2.0: 56.2%**; **Terminal-Bench Hard: 43.2%**; **CyberGym: 43.2%**
- **GDPval-AA, OSWorld, AA Agentic Index, MazeBench, ALE, JobBench: no verified public score found** — so **one of three frontier references is unmeasured and no composite exists**

Reasoning / knowledge — **strong, with the family's reliability cap**:

- **GPQA Diamond: 86.0%** / GPQA 86% [AA] — 4 points under the 90% frontier reference; **AA-GPQA Diamond: 82.0%** [AA]
- **MMLU-Pro: 85.7%** (85.8% Arcee); **SuperGPQA: 66.8%**; **MMLU-ProX: 83.1%**; **NOVA-63: 55.1%**
- **AIME 2026: 95.8%; AIME 2025 (Arcee): 93.3%; HMMT Feb 2025: 97.5%; HMMT Nov 2025: 96.9%; HMMT Feb 2026: 86.4%** — near-saturated competition mathematics, the strongest maths profile in this batch
- **HLE: 30.5%**; **AA-HLE: 29.3%** — 9.5–10.7 points under the 40%+ reference
- **AA-LCR: 75.7%; CritPt: 2.0%**; **AA Intelligence Index: 27.9**
- **AA-Omniscience Index: 0.3%; Accuracy: 26.3%; Hallucination Rate: 35.3%** — better than the DeepSeek V3.2 and Mercury 2.5 tiers, still a real reliability gap
- **ARC-AGI, MRCR, MMLU-Pro beyond the Arcee run, FrontierMath: no verified public score found**

Coding — **solid and broad, the second-strongest dimension**:

- **SWE-bench Verified: 77.8%** and **72.8%** (*) — **two competing harness runs recorded side by side rather than averaged**, a 5-point spread
- **SWE-bench Pro: 55.1%** — marginally under the 55%+ reference; **SWE Multilingual: 73.3%**; **SWE-Rebench: 62.8%**
- **React Native Evals: 74.8%**; **Terminal-Bench 2.0: 56.2%**
- **NL2Repo: 35.9%** — a weak repository-scale row
- **LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench, FrontierCode: no verified public score found** — so **two of three coding frontier references are unmeasured**

Multimodal — **text-only, with one grounded row carried in the wrong section**:

- **Design Arena (website): 1246 Elo** — BenchLM files this under "Multimodal & Grounded Benchmarks", but **it is a website-generation benchmark, not evidence of image input**, and the repo's curated meta records this model as **text in/out only**
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 70/100.** Mid-band, and the most interesting dimension because it is genuinely split. **τ²-bench 98.2% is the highest figure in this research series** and **τ³-bench 65.6%, WideResearch 69.8%, MCP-Tasks 60.8%, Claw-Eval 57.7%, BrowseComp 62% and HLE w/ tools 50.4%** form a broad, respectable agentic spread. Against that, **Toolathlon 38%, MCP Atlas 31.1%, APEX-Agents-AA 14.5%, DeepPlanning 14.6% and Gert Labs 50.99%** are all low, a 50-plus-point internal spread between τ²-bench and the weakest rows, which is why this sits at 70 rather than higher. **GDPval-AA, OSWorld, the AA Agentic Index, MazeBench, ALE and JobBench have no figure at all**, so one of three frontier references is unmeasured and no composite exists.
- **Reasoning: 75/100.** Mid-band, and the best-grounded dimension alongside coding. **GPQA Diamond 86.0% (82.0% on the AA run), MMLU-Pro 85.7% and the near-saturated maths profile (AIME 2026 95.8%, HMMT 97.5%/96.9%/86.4%)** are genuine upper-mid results. Held below the frontier tier by **HLE 30.5% / AA-HLE 29.3% (9.5–10.7 under the 40%+ reference)**, **CritPt 2.0% near-floor**, **AA Intelligence Index 27.9**, and an **AA-Omniscience accuracy of 26.3% with a 35.3% hallucination rate**. **ARC-AGI, MRCR and FrontierMath are absent.**
- **Context window: 85/100.** **200,000 tokens with 128,000 max output** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 — and this is one of the few models in this batch with **real retrieval evidence**: **AA-LCR 75.7%, LongBench v2 60.8% and AI-Needle 63.3%** all confirm the window is usable at depth, not merely nominal. Held at the ceiling rather than the ≥1M tier because 200K is one-fifth of the current standard and **no MRCR or GraphWalks figure exists**.
- **Multimodal: 15/100.** **Text in; text out** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. **A misclassification is flagged rather than adopted: BenchLM files Design Arena (website) 1246 Elo under "Multimodal & Grounded Benchmarks", but website generation is not image input**, and adopting that row would manufacture a modality claim the model does not have.
- **Coding: 80/100.** Mid-band's top, and the second-strongest dimension. **SWE-bench Verified 77.8% (72.8% on the starred harness run) — the two runs recorded side by side rather than averaged**, with **SWE Multilingual 73.3%, SWE-Rebench 62.8%, React Native Evals 74.8% and Terminal-Bench 2.0 56.2%** around it. Held below the frontier tier by **SWE-bench Pro 55.1% sitting exactly on rather than above the reference, NL2Repo 35.9%**, and the **total absence of LiveCodeBench, AA-SciCode, the AA Coding Index, DeepSWE, Vibe Code Bench and FrontierCode**, so two of three coding references are unmeasured.
- **Cost efficiency: 78/100.** **$1.00/$3.20 per 1M with $0.20 cached reads** is a premium metered rate — the methodology's ~$1/$4 → 85 band at its lower end — offset by **MIT-licensed weights for $0 self-hosting**. Held below the band's midpoint because a 200K-class open-weight flagship is expensive to self-host in practice, so the $0 route is nominal rather than free in the way a small model's is.
- **Overall Score: 65/100.** (70 + 75 + 85 + 15 + 80) / 5 = 65 → **65**. **A deliberate disagreement with BenchLM is recorded: BenchLM scores this model 54.59/100 (#78/1,016) while this report scores 65, a 10.4-point gap, and neither figure is an error** — BenchLM's overall weights its composite differently and this report's is the half-up mean of five normalized dimensions, so the two instruments are not expected to agree and the gap is stated rather than reconciled. Recommendation: **the best-evidenced open-weight model in this batch, and the one with the strongest single agentic figure in the series (τ²-bench 98.2%)** — broad agentic coverage, near-saturated competition maths, verified long-context retrieval (AA-LCR 75.7%) and a solid SWE-bench profile at $1.00/$3.20 with MIT weights. Three cautions: **HLE 30.5% and CritPt 2.0% cap it below the frontier tier on depth and reliability**; **the agentic dimension is internally split by 50-plus points between τ²-bench 98.2% and APEX-Agents-AA 14.5%**, so which harness you run matters more than the model choice; and **it is text-only with a premium metered price**, so prefer the successors (**GLM-5.1 56.09, GLM-5.2 60.23, GLM-5.3 61.28**) for anything requiring measured multimodal or current-generation quality.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using BenchLM's 16-of-753-benchmark catalog as the direct source, cross-attributed to Artificial Analysis, Arcee, Gert Labs, Poolside and standard leaderboards — **the most densely cross-checked model in this batch, with several benchmark families reported twice under competing harnesses and both runs carried**. **A provenance finding is recorded: the density is the model's strongest evidential property, and it is what allows three of the report's central claims** — the τ²-bench 98.2% superlative, the AA-LCR 75.7% long-context evidence, and the SWE-bench Verified 77.8%/72.8% spread. **The two competing SWE-bench Verified harness runs are recorded side by side rather than averaged**, as are the MMLU-Pro 85.7%/85.8% and GPQA 86%/AA-GPQA-Diamond 82.0% pairs, because averaging across harnesses would hide the harness sensitivity that is itself the finding. **A deliberate disagreement with BenchLM is recorded rather than reconciled: BenchLM's 54.59/100 (#78/1,016) against this report's 65, a 10.4-point gap, with both figures named as valid outputs of different weighting schemes** — the same instrument-difference framing applied across this research series, here stated in the score line rather than buried. **A misclassification is flagged rather than adopted: BenchLM files Design Arena (website) 1246 Elo under "Multimodal & Grounded Benchmarks", but website generation is not image input and the repo's curated meta records this model as text-only** — adopting that row would manufacture a modality claim the model does not have, so the multimodal score is scored on the modality fact and the row is named as a section artefact. **The 50-plus-point internal agentic spread (τ²-bench 98.2% against APEX-Agents-AA 14.5%) is attributed as the reason the tool-use score sits at 70 rather than higher**, and the **9.5–10.7-point HLE shortfall and CritPt 2.0%** as the reason reasoning sits at 75 rather than higher. Missing benchmarks (GDPval-AA, OSWorld, AA Agentic Index, MazeBench, ALE, JobBench, ARC-AGI, MRCR, FrontierMath, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench, FrontierCode, and every true visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GLM-5 (16 of 753 benchmarks, 54.59/100, #78/1016; rows attributed to Artificial Analysis, Arcee, Gert Labs, Poolside)](https://benchlm.ai/models/glm-5)
  - [Artificial Analysis — GLM-5](https://artificialanalysis.ai/models/glm-5)
  - [Arcee — GLM-5 eval runs (MMLU-Pro 85.8%, AIME 2025 93.3%)](https://arc.eval.auto/)
  - [Hugging Face — GLM-5 model card (MIT weights)](https://huggingface.co/zai-org/GLM-5)
  - [Repo curated meta — `model/glm-5/meta.json` ($1.00/$3.20, 200K/128K, text-only)](/model/glm-5/meta.json)
  - See also: [`model/glm-5.1/`](glm-5.1.md), [`model/glm-5.2/`](glm-5.2.md) and [`model/glm-5.3/`](glm-5.3.md) — the successors this report recommends preferring, refreshed in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
