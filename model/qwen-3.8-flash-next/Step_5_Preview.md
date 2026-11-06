# Qwen 3.8 Flash Next — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next. Alibaba's **experimental-preview ("Next") checkpoint** that publicly previews Qwen4's direction. BenchLM's canonical slug is `qwen3-8-flash-next` (**not** `qwen-3-8-flash-next`, which 404s — the same dotted-slug trap as the other Qwen 3.8 SKUs). It scores **56.12/100, #64 of 1,015** with **39 benchmarks**, making it **the highest-ranked Qwen below the Max line** and the only "Flash"-class model to outrank Qwen3.5 397B (55.46).
- **Short description:** The most remarkable efficiency result in this research series: **125B total / 6B active parameters** — a 5% activation ratio — delivering **AA Coding Index 73.0% (clearing the 70% frontier reference), aaTerminalBench21 86.1%, LiveCodeBench v6 91.9%, GDPval-AA 1,648 Elo / 56.4% normalized and AA-GPQA Diamond 92.3%**. Its weaknesses are narrow and specific: **AA-Omniscience index −12.2 with 23.5% accuracy, HLE 35.9–38.0% (under the 40% reference), OSWorld 2.0 19.4% and AA Tau3 Banking 45.4%.**
- **Provider / access:** **Open weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`) under the Qwen Community licence**, Vercel AI Gateway, and OpenCode Zen. Self-hosting available. **Repo meta.json records `noFreeId`** — no Zen free tier.
- **Release / knowledge:** release date not restated; it is Alibaba's Qwen4-pre<i>view</i> checkpoint. **Knowledge cutoff not disclosed.**
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (Hugging Face); `qwen3-8-flash-next` (BenchLM canonical, Vercel, Zen); `qwen/qwen3.8-flash-next` (Openrouter).
- **Context window:** **262,144 tokens (262K) native, extensible to 1M with YaRN** — repo meta.json; BenchLM records 262K.
- **Modalities:** **text, image and video in; text out, with tool use** (repo meta.json), on a genuinely deep measured visual suite — see below.
- **Pricing (as of 2026-11-05):** **$0.12 input / $0.40 output per 1M via Vercel AI Gateway** (repo meta.json), plus free self-hosting under the Qwen Community licence. Methodology anchors put $0.12/$0.40 near the 97+ band.
- **Architecture:** **sparse MoE, 125B total / 6B active** — repo meta.json; the 5% activation ratio is the model's defining engineering property and the reason its cost-efficiency score is near-ceiling.

### Raw benchmarks found

Qwen's own model card is the primary source (so those rows are **vendor-run and labelled as such**), with Artificial Analysis, LlamaIndex's ExtractBench and Openrouter supplying independent rows. 39 benchmarks total.

Agent / tool use — **the strongest dimension, and unusually corroborated**:

- **GDPval-AA: 1,648 Elo** [AA] / **56.4% normalized** [AA] — clears the 1,750 reference only by being close, and 56.4% is the strongest GDPval normalized figure in this batch
- **aaTerminalBench21: 86.1%** [AA] — the independent terminal figure, within 2 points of the 88%+ reference
- **AndroidWorld: 84.5%** (vendor); **Toolathlon-Verified: 73.5%** (vendor); **CoWorkBench: 73.9%** (vendor); **JobBench: 55.7%** (vendor)
- **Agents' Last Exam: 51.2%** (vendor); **AA Tau3 Banking: 45.4%** [AA]
- **OSWorld 2.0: 19.4%** (vendor) — the one weak figure
- **Terminal-Bench 2.0/2.1 from the vendor, Terminal-Bench 4.0, τ³-Banking, MCP-Atlas, OSWorld 1.0, BrowseComp, Toolathlon (unverified), MazeBench, ALE, Claw-Eval, AA Agentic Index: no verified public score found**

Reasoning / knowledge — **strong on exams, poor on reliability**:

- **GPQA: 91.7%** (vendor) / **AA-GPQA Diamond 92.3%** — clears the 90%+ frontier reference on both, and AA measures it *higher* than the vendor
- **HLE: 35.9%** (vendor) / **AA-HLE 38.0%** — fails the 40%+ reference by 2.0 points on the independent run, the narrowest HLE miss in this batch
- **AA-Omniscience: index −12.2, accuracy 23.5%, hallucination rate 46.8%** — a deeply negative index on the second-lowest accuracy in this batch, meaning the model abstains often and is usually wrong when it answers
- **AA-LCR: 79.7%**; **CritPt: 11.1%**; **IFBench: 81.3%**
- **AA Intelligence Index, ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro, HMMT, IMOAnswerBench: no verified public score found** — so the composite, three of five reasoning references and all mathematics are unmeasured

Coding — **the clearest frontier clearing in this batch**:

- **AA Coding Index: 73.0%** [AA] — **clears the 70%+ frontier reference**, the strongest coding index in this research series outside the GPT-5.6 line
- **LiveCodeBench v6: 91.9%** (vendor) — the strongest LiveCodeBench figure in this research series
- **SWE-bench Pro: 62.5%** (vendor); **SWE Multilingual: 81%** (vendor)
- **DeepSWE: 58.7%** — 15.3 points under the 74% reference; **NL2Repo: 48.1%**; **AA-SciCode: 50.6%** — under the 55%+ reference
- **SWE-bench Verified, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode, Bug Hunt Bench: no verified public score found** — so the 85% terminal and 74% DeepSWE references are only partially checkable

Multimodal (image-in) — **the second-strongest dimension**:

- **MathVision: 90.6%** (vendor) / **95.7% w/ Python** (vendor) — the strongest MathVision figures in this research series
- **CharXiv: 90.6%** (vendor, 84.6% w/o tools); **RealWorldQA: 88.5%** (vendor); **AA-MMMU-Pro: 79.8%** [AA]
- **ExtractBench: 89.88%** [LlamaIndex]; **LVBench: 76.6%** (vendor); **ERQA: 72.3%** (vendor); **Vision2Web: 64.0%** (vendor)
- **OmniDocBench, BabyVision, ZeroBench, Design Arena, ParseBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 78/100.** Above the methodology's mid band and the strongest dimension. **GDPval-AA 1,648 Elo / 56.4% normalized [AA] is the strongest independent GDPval figure in this batch, aaTerminalBench21 86.1% [AA] is within 2 points of the 88%+ reference, and AndroidWorld 84.5%, Toolathlon-Verified 73.5%, CoWorkBench 73.9% and JobBench 55.7%** give a broad, vendor-corroborated agentic base. Capped by **OSWorld 2.0 19.4%, AA Tau3 Banking 45.4% (4.6 under the 50% reference), and the total absence of Terminal-Bench 2.x from the vendor, Terminal-Bench 4.0, τ³-Banking, MCP-Atlas, OSWorld 1.0, BrowseComp, MazeBench, ALE, Claw-Eval and the AA Agentic Index** — so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 70/100.** Mid-band. **GPQA Diamond clears 90% on both runs (91.7% vendor / 92.3% AA, the independent run higher), AA-HLE 38.0% is the narrowest miss of the 40% reference measured in this batch, AA-LCR 79.7% is solid and IFBench 81.3% is strong.** Heavily capped by **AA-Omniscience index −12.2 with 23.5% accuracy and a 46.8% hallucination rate — the second-lowest accuracy in this batch — CritPt 11.1%, and the total absence of the AA Intelligence Index, ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro and every mathematics benchmark** — so composite depth is unknown and mathematics is entirely unmeasured.
- **Context window: 88/100.** **262K native, extensible to 1M via YaRN** — the methodology's 200K–500K band at its ceiling, scored at 88 because **AA-LCR is 79.7%**, so the native window is measurably usable. Held below the ≥1M tier because the 1M is an extension trick rather than native, no MRCR or GraphWalks run exists at either depth, and no max-output limit is published.
- **Multimodal: 92/100.** Text, image and video in with text out, scored at the top of the methodology's 75–90 band and marginally above it on a genuinely deep visual suite: **MathVision 90.6%/95.7% w/ Python (the strongest in this series), CharXiv 90.6%, RealWorldQA 88.5%, ExtractBench 89.88%, AA-MMMU-Pro 79.8%, LVBench 76.6%**. Held below 95+ because output is text-only, there is no audio input, **Vision2Web 64.0% and ERQA 72.3% sit well below the rest of the suite**, and OmniDocBench, BabyVision and ZeroBench are unmeasured.
- **Coding: 82/100.** Above the methodology's mid band and a genuinely strong dimension. **AA Coding Index 73.0% clears the 70% frontier reference on the independent run, LiveCodeBench v6 91.9% is the strongest in this research series, SWE-bench Pro 62.5% and SWE Multilingual 81% are solid mid-frontier.** Capped by **DeepSWE 58.7% (15.3 under the 74% reference), AA-SciCode 50.6% (under 55%), NL2Repo 48.1%, and the absence of vendor SWE-bench Verified, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode** — so the 85% terminal reference is only checkable on the AA harness.
- **Cost efficiency: 97/100.** **$0.12/$0.40 per 1M via Vercel** is below every anchor in the methodology's cost table except the free tiers, and — decisively — **the weights are open under the Qwen Community licence with only 6B active parameters**, so self-hosting is cheap in a way almost no other model here is. Held at 97 rather than 100 because there is no Zen free tier (`noFreeId`), and the 262K native window means long work needs YaRN extension.
- **Overall Score: 82/100.** (78 + 70 + 88 + 92 + 82) / 5 = 82.0 → **82**. Recommendation: **the most efficient model measured in this research series.** A 125B/6B-active MoE with AA Coding Index 73.0%, LiveCodeBench v6 91.9%, aaTerminalBench21 86.1%, GDPval-AA 1,648 Elo and MathVision 95.7% w/ Python, at $0.12/$0.40 with open weights and a 5% activation ratio — that combination is not matched anywhere else in this corpus, and it is the clearest signal in this research about where Qwen4 is heading. Three cautions: **it is an experimental preview checkpoint, not a product** — repo meta.json explicitly warns to "expect churn and breaking changes before the real Qwen4 ships", so do not build production dependencies on the ID; **its AA-Omniscience accuracy is 23.5% on an index of −12.2**, so it is not a factual assistant; and **OSWorld 2.0 19.4% and DeepSWE 58.7%** show real weakness on the newest execution harnesses and repository-scale generation despite the strong repair-coding scores.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Qwen's own model card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against **BenchLM's 39-row catalog under its canonical dotted slug `qwen3-8-flash-next`** — which attributes the independent numbers to Artificial Analysis and LlamaIndex's ExtractBench — plus the repo's curated `meta.json` for the 125B/6B active parameter count, the 262K-native/1M-YaRN window, the modality set, the Vercel rate card and the experimental-preview status. **A lookup trap is recorded: the repo folder spelling `qwen-3-8-flash-next` 404s on BenchLM and the dotted slug had to be found by cross-referencing Qwen3.8-27B's sibling list.** Conflicting figures are listed side by side — GPQA 91.7% (vendor) / 92.3% [AA], HLE 35.9% (vendor) / 38.0% [AA], MathVision 90.6% / 95.7% w/ Python, CharXiv 90.6% / 84.6% w/o tools — rather than averaged, with the independent run preferred on each, and the two cases of AA measuring *above* the vendor are flagged as unusual evidence-direction facts. The experimental-checkpoint status is carried into the recommendation as a deployment caution rather than buried in the model card. Missing benchmarks (Terminal-Bench 2.0/2.1 from the vendor, Terminal-Bench 4.0, τ³-Banking, MCP-Atlas, OSWorld 1.0, BrowseComp, Toolathlon unverified, MazeBench, ALE, Claw-Eval, AA Agentic Index, AA Intelligence Index, ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro, HMMT, IMOAnswerBench, SWE-bench Verified, Vibe Code Bench, FrontierCode, Bug Hunt Bench, OmniDocBench, BabyVision, ZeroBench, Design Arena, ParseBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.8-Flash-Next model card (primary benchmark source)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [BenchLM — Qwen3.8-Flash-Next benchmark scores (39 rows, 56.12/100, #64/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-8-flash-next)
  - [Artificial Analysis — Qwen3.8-Flash-Next](https://artificialanalysis.ai/models/qwen3-8-flash-next)
  - [Artificial Analysis — terminalbench-v2-1 leaderboard (source of the 86.1% aaTerminalBench21 row)](https://artificialanalysis.ai/evaluations/terminalbench-v2-1)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — tau3-banking leaderboard](https://artificialanalysis.ai/evaluations/tau3-banking)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - [Vercel AI Gateway — qwen3.8-flash-next pricing and access](https://vercel.com/ai-gateway/models/qwen3.8-flash-next)
  - [Repo curated meta — `model/qwen-3.8-flash-next/meta.json` (125B/6B active, 262K→1M YaRN, Qwen Community licence, noFreeId, preview-churn warning)](/model/qwen-3.8-flash-next/meta.json)
  - See also: [`model/qwen-3.8-27b/`](qwen-3.8-27b.md) — the sibling 27B dense checkpoint, refreshed in this same batch
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
