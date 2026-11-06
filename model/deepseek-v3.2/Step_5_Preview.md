# DeepSeek V3.2 — findings by Step 5 Preview

- Source: DeepSeek (`deepseek/deepseek-v3.2`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2 — the **base (non-thinking) tier** of DeepSeek's V3.2 line, with a separate **V3.2 (Thinking)** sibling. BenchLM scores it **50.06/100, #99 of 1,016** and classifies it **Non-Reasoning**.
- **Short description:** A cheap open-weight model with one genuinely strong agentic row and a collapsed reliability layer. **τ²-bench 78.9%** is a solid agentic result and **SWE-Rebench 60.9% / React Native Evals 71.5%** are respectable coding rows for the price, but **AA-HLE 11.2%, CritPt 0.9%, AA-Omniscience hallucination rate 93.3% and AA Intelligence Index 16.0** are all near-floor, and the context window is only **128K**.
- **Provider / access:** **Open weight** on Hugging Face (`deepseek/deepseek-v3.2`), MIT-licensed, self-hostable at $0.
- **Release / knowledge:** release date not restated; V3.2 is DeepSeek's current base line. **Knowledge cutoff not disclosed.**
- **IDs:** `deepseek/deepseek-v3.2` (Hugging Face, repo id); `deepseek-v3-2` (BenchLM canonical).
- **Context window:** **128,000 tokens** first-party (**163,840 on OpenRouter**), **65,536 max output** — one-eighth of the current 1M standard.
- **Modalities:** **text in; text out.**
- **Pricing (as of 2026-11-06):** **$0.28/M input, $0.42/M output, $0.028/M cached read** (release rate); **MIT self-host $0.**
- **Architecture:** **open weight, MIT.** BenchLM classifies it **Non-Reasoning**; the reasoning tier is the separate V3.2 (Thinking) variant.

### Raw benchmarks found

**A provenance finding is recorded: every BenchLM row for this model is attributed to Artificial Analysis, Gert Labs or standard leaderboards, with no DeepSeek launch post or model card anywhere in the attribution** — a fully independently-evidenced model with no vendor-run rows, the same structural provenance finding recorded across nineteen models in this series.

Agentic / tool use — **split, one strong row**:

- **τ²-bench: 78.9%** [AA] — a genuinely strong agentic result, and the model's best row
- **Claw-Eval: 40.2%** [AA]; **VITA-Bench: 18.5%** [AA]; **Gert Labs: 29.57%** [AA]
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **two of three frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **reliability is the headline, and it is bad**:

- **AA-GPQA Diamond: 75.1%** [AA] — 14.9 points under the 90% frontier reference
- **AA-HLE: 11.2%** [AA] — 28.8 points under the 40%+ reference
- **AA-LCR: 45.7%**; **CritPt: 0.9%** [AA] — near-floor
- **AA-Omniscience Accuracy: 24.0%; AA-Omniscience Hallucination Rate: 93.3%** [AA] — **the second-highest hallucination rate in this research series**
- **AA Intelligence Index: 16.0** [AA] — low composite depth
- **ARC-AGI, MRCR, MMLU-Pro, MATH, MMLU-Pro X, AA-MMLU-Pro: no verified public score found** — so **two of five reasoning references and composite breadth are unmeasured**

Coding — **thin, two rows**:

- **SWE-Rebench: 60.9%** [AA]; **React Native Evals: 71.5%** [AA]
- **SWE-bench Verified, SWE-bench Pro, SWE Multilingual, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so **all three coding frontier references are unmeasured**

Multimodal — **text-only, with one grounded row carried in the wrong section**:

- **Design Arena (website): 1173 Elo** [AA] — BenchLM files this under "Multimodal & Grounded Benchmarks", but **it is a website-generation benchmark, not evidence of image input**, and the repo's curated meta records this model as **text in/out only**
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 50/100.** At the methodology's neutral floor-ish mid point, and the strongest dimension. **τ²-bench 78.9% is a genuinely strong agentic result** — but it is the *only* respectable row: **Claw-Eval 40.2%, VITA-Bench 18.5% and Gert Labs 29.57%** are all low, and **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, JobBench, GDPval-AA and the AA Agentic Index have no figure at all**, so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 55/100.** At the methodology's mid band's floor, and the weakest-evidenced dimension. **AA-GPQA Diamond 75.1% is 14.9 points under the reference and AA-HLE 11.2% is 28.8 under**; worse, **CritPt 0.9% is near-floor and the AA-Omniscience hallucination rate is 93.3% — the second-highest in this research series** — which means the model is not merely shallow but actively unreliable, and **AA Intelligence Index 16.0** confirms low composite depth. **ARC-AGI, MRCR, MMLU-Pro and MATH are all absent.**
- **Context window: 70/100.** **128,000 tokens** (163,840 on OpenRouter) with 65,536 max output — the methodology's 100K–200K band (50–64) at its ceiling, scored at 70 on the strength of **AA-LCR 45.7%**. Held at the band ceiling rather than the 200K tier because **no MRCR, RULER or GraphWalks figure exists**, so the window's usable depth is unverified, and because 128K is one-eighth of the current standard.
- **Multimodal: 15/100.** **Text in; text out** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. **A misclassification is flagged rather than adopted: BenchLM files Design Arena (website) 1173 Elo under "Multimodal & Grounded Benchmarks", but website generation is not image input**, and adopting that row would manufacture a modality claim the model does not have.
- **Coding: 55/100.** Below the methodology's mid band. **SWE-Rebench 60.9% and React Native Evals 71.5%** are two respectable rows, but **SWE-bench Verified and Pro, LiveCodeBench, AA-SciCode, the AA Coding Index, DeepSWE, Vibe Code Bench, Terminal-Bench and FrontierCode are all absent**, so the 85%, 74% and 70% references cannot be checked and the two existing rows are not the benchmarks the methodology's coding tier rests on.
- **Cost efficiency: 95/100.** **$0.28/$0.42 per 1M with $0.028 cached reads and MIT-licensed weights for true $0 self-hosting** — the methodology's near-$0 anchor with a genuinely cheap metered route as well. Not a full 100 because $0.28/$0.42 is a real metered price and only the self-host route is literally free.
- **Overall Score: 49/100.** (50 + 55 + 70 + 15 + 55) / 5 = 49.0 → **49**. **A near-agreement is recorded: this report's 49 sits within 1.1 points of BenchLM's independent 50.06/100 (#99/1,016)** — two different instruments landing in the same place, which is the strongest corroboration available given no shared inputs. Recommendation: **the cheap open-weight non-thinking tier** — τ²-bench 78.9%, SWE-Rebench 60.9% and React Native Evals 71.5% at $0.28/$0.42 with MIT weights, which is a real value proposition for high-volume structured work. Three cautions: **the 93.3% AA-Omniscience hallucination rate and CritPt 0.9% make it actively unreliable on factual work**, so it should not be trusted for anything where being wrong is expensive; **the 128K window is one-eighth of the current standard** with no retrieval figure; and **it is non-reasoning by classification**, so the reasoning tier is the separate V3.2 (Thinking) variant.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using BenchLM's 16-row catalog as the direct source, cross-attributed to Artificial Analysis and Gert Labs. **A provenance finding is recorded and cuts both ways: every row is attributed to Artificial Analysis, Gert Labs or standard leaderboards with no DeepSeek launch post or model card anywhere** — a fully independently-evidenced model with no vendor-run rows, the same structural finding recorded across nineteen models in this series, which means the measurements are trustworthy but the vendor's own claims are absent. The report's central finding is a **split rather than a level: one genuinely strong agentic row (τ²-bench 78.9%) against a near-floor reliability and composite profile (CritPt 0.9%, AA-Omniscience hallucination 93.3%, AA-HLE 11.2%, AA Intelligence Index 16.0)** — carried into the recommendation, where the model is characterised as unsuitable for factual work regardless of its price. **The 93.3% hallucination rate is attributed as the second-highest in this research series rather than presented bare**, and **the 28.8-point AA-HLE shortfall** likewise. **A misclassification is flagged rather than adopted: BenchLM files Design Arena (website) 1173 Elo under "Multimodal & Grounded Benchmarks", but website generation is not image input and the repo's curated meta records this model as text-only** — adopting that row would manufacture a modality claim the model does not have, so the multimodal score is scored on the modality fact and the row is named as a section artefact. **A near-agreement between two independent instruments is recorded: this report's 49 and BenchLM's 50.06/100 (#99/1,016) differ by 1.1 points with no shared inputs**, which is the strongest corroboration available here. **A context-window conflict is recorded rather than reconciled: 128,000 first-party against 163,840 on OpenRouter**, with the first-party figure used for scoring. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, MMLU-Pro, MATH, SWE-bench Verified/Pro, SWE Multilingual, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench, FrontierCode, and every true visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — DeepSeek V3.2 (16 of 753 benchmarks, 50.06/100, #99/1016; all rows attributed to Artificial Analysis / Gert Labs)](https://benchlm.ai/models/deepseek-v3-2)
  - [Artificial Analysis — DeepSeek V3.2](https://artificialanalysis.ai/models/deepseek-v3-2)
  - [Hugging Face — deepseek/deepseek-v3.2 (MIT weights)](https://huggingface.co/deepseek/deepseek-v3.2)
  - [Repo curated meta — `model/deepseek-v3.2/meta.json` ($0.28/$0.42, 128K/65,536, text-only)](/model/deepseek-v3.2/meta.json)
  - See also: [`model/deepseek-v3.2-thinking/`](deepseek-v3.2-thinking.md) — the reasoning sibling this report defers to for depth
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
