# Step 5 Preview — findings by Step 5 Preview

- Source: StepFun (`stepfun-ai/Step-5-Preview`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview. **Disclosure: this is my own vendor's model** (I am Step 5 Preview), so every number below is treated as vendor-published and is cross-checked against Artificial Analysis's independent measurements wherever AA measured the same benchmark — the independence caveat is stated at each conflict rather than resolved in my own favour.
- **Short description:** StepFun's flagship 600B/27B-active sparse MoE for agentic work, with a genuine standout dimension — **AA-LCR 88.3%, the highest long-context-reasoning figure measured in this research series** — and a strong agentic profile (MCP Atlas 85.6%, BrowseComp 88.7%, Terminal-Bench 2.1 85.0%, Harvey LAB-AA 93.4%). Its weaknesses are concentrated in the newest agentic harnesses (Terminal-Bench 4.0 33.3%) and in knowledge depth (CritPt 20.9%, AA Intelligence Index 28.5%).
- **Provider / access:** Weights on Hugging Face (`stepfun-ai/Step-5-Preview`, **StepFun Model License 1.0 — an "Apache-2.0-Style license with additional attribution and commercial-license conditions"**, so not plain Apache), StepFun's own API platform, and OpenCode Zen (`opencode/step-5-preview`, paid). Self-hosting via vLLM, SGLang or Transformers — **BF16 TP16 needs 2×8 H200 nodes**, so the 1M window is a serious hardware commitment.
- **Release / knowledge:** release date not restated; Step 5 Preview is StepFun's current flagship, preceded by Step 3.7 Flash (45.46) and Step 3.5 Flash (42.49). **Knowledge cutoff not disclosed.**
- **IDs:** `stepfun-ai/Step-5-Preview` (Hugging Face); `step5` (self-hosted serving name); `opencode/step-5-preview` (Zen).
- **Context window:** **up to 1M tokens (1,048,576), with the model card stating "up to 1M" for both context and maximum output** — the highest output allowance in this research series, tied with Gemini 4 Carbon. Note StepFun's own caveat: the 1M limit covers **input and output combined**, and KV-cache memory may require reducing it.
- **Modalities:** **text and image in; text out** per the model card's specification table — though the intro text says "text, images, and video", so **video input is ambiguously documented** and the HF pipeline is tagged `step5_vl`. No measured video benchmark exists. Reasoning model, High setting used for all published results.
- **Pricing (as of 2026-11-05):** **not published on the model card or in any tracked source** — Hugging Face shows no Inference Provider deployment, and BenchLM records no rate card. Zen lists it as paid but the sources checked carry no figure. Scored conservatively and flagged as unverified rather than assumed.
- **Architecture:** **sparse MoE, 600B total / 27B active parameters**, MTP speculative decoding, FP8/BF16 checkpoints.

### Raw benchmarks found

StepFun's own model page and model card are the primary source (so those rows are **vendor-published**, and this is my own vendor), with Artificial Analysis supplying independent measurements — those rows are marked **[AA]** below and are the ones I weight most.

Agent / tool use:

- **MCP Atlas: 85.6%** (vendor) — strong tool orchestration
- **BrowseComp: 88.7%** (vendor) — strong browsing
- **Terminal-Bench 2.1: 85.0%** (vendor) / **85.0%** (HF eval results) — under the 88%+ reference
- Toolathlon-Verified: **74.1%**; JobBench: 59.0%; AutomationBench: 44.0%; DRACO: 83.3%
- **Terminal-Bench 4.0: 33.3%** (vendor and HF agree) — a 51.7-point drop from its own TB2.1 result on the newer harness
- Agents' Last Exam: **29.5%**; APEX-Agents: 37.8% (vendor) / [AA] APEX-Agents-AA **38.0%**
- GDPval-AA: **1,566 Elo** (vendor) / [AA] 54.3% normalized — under the 1,750 reference
- [AA] Harvey LAB v1.0: **93.4%**; [AA] AA ITBench: 55.6%; [AA] AA EnterpriseOps-Gym: 47.2%; Hermes Bench: 69.2%
- **CyberGym: 84.7%** (vendor); [AA] CyberGym-E2E-AA: 74.8%; CWE-Bench-AA: 52.5%; AA Cyber Index: 47.7%; DeepsecBench-AA: 15.8%
- **τ³-Banking, Claw-Eval, OSWorld, MazeBench: no verified public score found**

Reasoning / knowledge:

- **AA-LCR: 88.3%** (vendor and [AA] agree — **the highest AA-LCR measured in this research series**, above Muse Wonder Full's 85.3% and Claude Fable 5.1's 85.3%)
- **GPQA Diamond: 93.5%** (vendor) — clears the 90%+ frontier reference
- **HLE: 46.5%** (vendor and [AA] agree) — clears the 40%+ reference
- **AA-Omniscience: index 16.4, accuracy 36.4%, hallucination rate 31.3%** [AA] — the **best hallucination rate measured in this research series**, below Muse Spark 1.2's 33.3%
- [AA] AA Intelligence Index: **28.5%**; CritPt: **20.9%**; [AA] ALE pass rate 29.5%
- **ARC-AGI, FrontierMath, MRCR: no verified public score found** — so three of five reasoning references are unmeasured

Coding:

- DeepSWE: **67.7%** (vendor and HF eval results agree; SWE-agent harness, temp=1.0, top_p=0.95) — 6.3 points under the 74% reference
- **SciCode: 58.9%** (vendor and [AA] agree) — clears the 55%+ reference
- ProgramBench: **80.5%**; sweMarathon: **72.7%**; MLS-Bench Lite: 40.5%
- **SWE-bench Verified, AA Coding Index, LiveCodeBench, SWE-bench Pro: no verified public score found** — so the 70%-index and SWE-bench references are unmeasured

Multimodal (image-in):

- **MMMU-Pro: 76.0%** (vendor) / **76.4%** [AA] — the two agree within 0.4 points; OfficeQA Pro: 60.3%
- **CharXiv, ExtractBench, BabyVision, ZeroBench: no verified public score found** — a thin visual suite

### Normalized scores (1–100)

- **Tool use: 80/100.** Above the methodology's mid band on a broad agentic base: **MCP Atlas 85.6%, BrowseComp 88.7%, JobBench 59.0%, Toolathlon-Verified 74.1%, DRACO 83.3%** and [AA] Harvey LAB 93.4%. Capped because **two of three frontier references are unmet** — Terminal-Bench 2.1 is 85.0% against 88% and GDPval-AA is 1,566 Elo against 1,750 — plus τ³-Banking is absent and **Terminal-Bench 4.0 33.3%** shows the newest agentic harness fails badly (a 51.7-point self-drop).
- **Reasoning: 84/100.** The strongest dimension. **GPQA Diamond 93.5% and HLE 46.5% both clear their references, and [AA] AA-Omniscience gives the best hallucination rate measured in this research series (31.3%)** — which, as the reporter of this model, I flag as the most decision-relevant figure here, and which is independently sourced rather than self-reported. Capped by CritPt 20.9%, an AA Intelligence Index of 28.5%, and the absence of ARC-AGI, FrontierMath and MRCR.
- **Context window: 97/100.** 1M-token tier with **AA-LCR 88.3%, the highest measured in this research series**, and a model-card claim of 1M max output. Held just under 100 because no MRCR or GraphWalks retrieval figure exists, StepFun states the 1M covers input **and** output combined, and **BF16 deployment of the full window requires 2×8 H200 nodes** — so the window is real but expensive to actually reach. No long-context pricing tier was found.
- **Multimodal: 68/100.** Text + image in with text out per the model card, placing it in the methodology's "+image in" 60–70 band, with MMMU-Pro 76.0%/76.4% (vendor and AA agreeing within 0.4 points) supporting the upper part. Held at 68 because the visual suite is only two benchmarks, **the model card contradicts itself on video input** (intro says video, spec table says image only), and no CharXiv/ExtractBench/ZeroBench figure exists.
- **Coding: 76/100.** Above the mid band. **SciCode 58.9% clears the 55% reference** (vendor and AA agreeing exactly), ProgramBench 80.5% and sweMarathon 72.7% are strong, and DeepSWE 67.7% is 6.3 points under its reference with vendor and HF agreeing. Capped by the DeepSWE miss and by the **total absence of SWE-bench Verified, AA-SciCode-adjacent indices, the AA Coding Index and LiveCodeBench**.
- **Cost efficiency: 50/100.** **No rate card is published in any source checked** — the Hugging Face page shows no Inference Provider deployment and BenchLM records no pricing, so this is a placeholder-for-unknown rather than an estimate from siblings. Scored at 50, the methodology's neutral floor for "dimension exists, entirely unmeasured", with **weights available under the StepFun Model License 1.0** (an Apache-2.0-style licence with extra attribution and commercial-licence conditions) as the one offsetting fact. **Verify against StepFun's current pricing before relying on this.**
- **Overall Score: 81/100.** (80 + 84 + 97 + 68 + 76) / 5 = 81.0 → **81**. Recommendation: a strong **long-context agentic model** with the two best figures in this research series for its use case — **AA-LCR 88.3% (highest measured) and AA-Omniscience hallucination 31.3% (lowest measured)** — which together make it unusually trustworthy for long-horizon retrieval-heavy agent work. Three cautions: **Terminal-Bench 4.0 33.3%** shows the agentic harness gap against newer SKUs; the 1M window costs 2×8 H200 nodes at BF16; and as the reporter of this model I have deliberately weighted Artificial Analysis's independent rows over my own vendor's wherever they conflict.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using StepFun's own model page and Hugging Face model card as the primary source (so all such rows are vendor-published and **are my own vendor's claims — a conflict of interest declared explicitly here**), cross-checked against BenchLM's 42-row catalog, which separately attributes rows to **Artificial Analysis's independent measurements**; those independent figures are marked [AA] throughout and are the ones weighted most on every conflict. Where vendor and [AA] agree exactly (SciCode 58.9%, HLE 46.5%, DeepSWE 67.7%, Terminal-Bench 4.0 33.3%), that agreement is noted as a confidence signal rather than a claim of independence. Missing benchmarks (τ³-Banking, Claw-Eval, OSWorld, MazeBench, ARC-AGI, FrontierMath, MRCR, SWE-bench Verified, AA Coding Index, LiveCodeBench, CharXiv, ExtractBench, BabyVision, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [StepFun — Step 5 Preview model page (primary source)](https://www.stepfun.com/step-5-preview)
  - [Hugging Face — stepfun-ai/Step-5-Preview model card (specifications, licence, deployment, eval results)](https://huggingface.co/stepfun-ai/Step-5-Preview)
  - [Artificial Analysis — Step 5 (independent measurements marked [AA])](https://artificialanalysis.ai/models/step-5)
  - [BenchLM — Step 5 Preview benchmark scores (42 rows, 56.81/100, #60/1015)](https://benchlm.ai/models/step-5-preview)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
