# Inkling — findings by MiniMax M3.1 Flash

- Source: Thinking Machines Lab (`thinkingmachines/inkling`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's July-2026 **open-weights flagship** — "Inkling is a Mixture-of-Experts Transformer with 975B total parameters, 41B active" — a native **encoder-free multimodal** model (text, image and audio in) pretrained on 45T tokens, released under **Apache 2.0**. It is the larger sibling of **Inkling-Small** (276B/12B active, scored in `model/inkling-small/`), a separate training run rather than a resized or renamed variant.
- **Provider / access:** Hugging Face `thinkingmachines/Inkling` (Apache 2.0, BF16 + NVFP4 checkpoints); OpenRouter `thinkingmachines/inkling` (canonical `thinkingmachines/inkling-20260715`); Tinker (`thinkingmachines` serving); models.dev `thinkingmachines/Inkling`. **Not on OpenCode Zen** and no `inkling` entry in OpenCode's inference model list.
- **Release / knowledge:** released **2026-07-15** ("Inkling: Our Open-Weights Model"). Knowledge cutoff: **no date published** — "Inkling's knowledge is limited to information available as of its training cutoff". Rate limits: **none published** (OpenRouter `per_request_limits: null`; Tinker documents pricing only).
- **IDs:** `thinkingmachines/inkling` (OpenRouter), `thinkingmachines/Inkling` (models.dev / HF), `thinkingmachines/Inkling:peft:262144` (the 256K-serving variant on models.dev).
- **Context window:** "up to 1M tokens"; OpenRouter lists **524,288** for its top provider and 1,048,576 on the free tier; AA lists 1M; Tinker serves **64K and 256K** variants. Max output: OpenRouter top provider 471,859; Vals records 256k.
- **Modalities:** text + image + audio in, text out — dMel audio encoder, 40×40-patch hMLP vision encoder, no separate modality towers.
- **Reasoning controls:** hybrid/controllable effort — OpenRouter efforts max / high / medium / low / minimal / none (default **high**); Tinker and AA label **xhigh**; the vendor's own evaluation tables were run at **effort 0.99**.
- **Pricing (as of 2026-10-19, per 1M tokens):** OpenRouter and AA **$1.00 in / $4.05 out**, cache read $0.17; Tinker serverless the same, training/sampling **$3.74 / $9.36** with a 50% promotional discount to $1.87 / $4.68 (the price BenchLM carries).
- **Architecture:** MoE, **975B total / 41B active**; 66 layers, **256 routed experts + 2 shared, 6 routed active**; DeepSeek-V3-style router; relative positional embeddings; pretrained on 45T tokens of text/image/audio/video on NVIDIA GB300 NVL72.

### Raw benchmarks found

> The vendor launch table is marked "vendor" (effort 0.99, temp 1.0); Artificial Analysis, Vals AI, the BenchLM ledger and the Hugging Face eval export are independent.

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (vendor) / **55.1%** (AA) / **47.6%** (Vals AI)
- Terminal-Bench 4.0: **0.51%** (Vals AI) / 1.0% (AA, via BenchLM) — effectively zero
- MCP Atlas: **76.0%** (vendor) / 74.1% (HF card and BenchLM); Toolathlon **45.5%**; τ³-Banking **23.7%** (vendor) / 29.1% (AA, via BenchLM); BrowseComp **77.1%**; GDPval-AA v2 **1238** (vendor) / 1233 (HF card); AutomationBench-AA **5.0%** (via BenchLM)
- CWE-bench v1 **37.0%**; FrontierSWE v2 **4.1%**; SimpleQA Verified **43.9%**; AA-Briefcase Elo **832** (via BenchLM); AA-Omniscience 2.1
- IPI / Claw-Eval / APEX-Agents / Toolathon-independent: **no verified public score found** beyond the above

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (vendor) / **87.12%** (Vals AI) / 87.9% (via BenchLM)
- AIME 2026 **97.1%**; IFBench **79.8%**; Global-MMLU-Lite 88.7%; MMLU-Pro 86.30% (Vals) / 86.3% (via BenchLM)
- Artificial Analysis Intelligence Index: **25** (#32/121 open-weight); Coding Index 52.1, Agentic Index 24.3; 224.0 t/s, TTFT 1.73s
- FrontierMath v2: Tiers 1–3 **33.333%**, Tier 4 **4.878%** (Epoch AI, via BenchLM) — among the weakest maths results in the catalogue
- CritPt **5.4%** (via BenchLM); AA-LCR 77.3%; Omniscience accuracy 22.5% (BenchLM) with hallucination 26.4%; ARC-AGI-1 79.5%, ARC-AGI-2 36.5%
- Vals Index **28.96%** (#21/22) — Vals' own "accuracy 34.10%" at launch vs 28.96% today

Coding:

- SWE-bench Verified **77.6%** (vendor and HF eval export) / 77.60% (Vals); SWE-bench Pro **54.3%**
- LiveCodeBench **85.52%** (Vals) / 85.5% (via BenchLM); Terminal-Bench 2.1 63.8%
- No DeepSWE figure published; IOI 14.94% (Vals) — low; FrontierMath 33.333% / 4.878%

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published.** "Up to 1M" is the only long-context statement, with Tinker serving 64K/256K.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 66/100.** Terminal-Bench 2.1 63.8% (vendor) / 55.1% (AA) / 47.6% (Vals), MCP Atlas 76.0% / 74.1%, Toolathlon 45.5%, BrowseComp 77.1%, GDPval-AA 1238–1233, τ³-Banking 23.7–29.1%. Capped by the rubric's anchors (TB2.1 ~88%+ → 63.8% at best; τ3 ~50%+ → 29.1%; GDPval ~1750+ → 1238), by **Terminal-Bench 4.0 at 0.51–1.0%**, by **AutomationBench-AA 5.0%**, by FrontierSWE v2 at 4.1% and CWE-bench at 37.0%, and by the absence of any Claw-Eval, Toolathlon-independent or IPI row.
- **Reasoning: 72/100.** AIME 2026 **97.1%**, GPQA Diamond 87.12–87.9%, IFBench 79.8%, Global-MMLU-Lite 88.7%, MMLU-Pro 86.30%, and a 224 t/s / 1.73s TTFT profile. Capped by FrontierMath v2 at **33.333% / 4.878%** (the weakest maths Tier-4 figure in this dataset), by CritPt 5.4%, by ARC-AGI-2 36.5%, by the AA Intelligence Index of **25**, and by the low Omniscience accuracy (~22.5%).
- **Context window: 94/100.** "Up to 1M tokens" (AA), 524,288 on OpenRouter's paid route, 1,048,576 on its free tier, and Tinker serving 64K/256K — the rubric's top tier (≥1M = 95–100) on the vendor's own claim. One point below because the *deployed* context in Tinker's own catalogue is 64K/256K and **no long-context retrieval measurement exists**.
- **Multimodal: 90/100.** A genuinely native encoder-free omni-modal model — text, image **and audio** in — which puts it in the rubric's "+audio in = 90–100" band, with measured support: MMMU-Pro 73.5% (vendor) / 78.50% (Vals), CharXiv 78.1% / 82.0% with Python, Audio MC **56.6%**, MMAU 77.2%, **VoiceBench 91.4%**, FORTRESS adversarial 78.0% / benign 95.9%, StrongREJECT 98.6%, OmniDocBench-class document work implied by CharXiv. The audio numbers are the distinguishing evidence — most models in this dataset cannot take audio at all.
- **Coding: 72/100.** SWE-bench Verified 77.6% / SWE-bench Pro 54.3%, LiveCodeBench 85.52%, Terminal-Bench 2.1 63.8%, FrontierMath 33.333%. Capped by the absence of any DeepSWE figure, by Terminal-Bench 4.0 at ~1%, by FrontierSWE v2 4.1%, by IOI 14.94%, and by SWE-bench Pro 54.3%.
- **Cost efficiency: 85/100.** The evaluated route is OpenRouter / Tinker serverless at **$1.00 in / $4.05 out** per 1M with a $0.17 cache read — comfortably inside the rubric's "~$1.25/$4.25 ≈ 88" tier, and the weights are **Apache 2.0**, so self-hosting is free. The deductions are the 3× price for training/sampling runs (the $3.74/$9.36 rate, halved to $1.87/$4.68 on promotion) and the fact that **no OpenCode Zen route exists**, so the dataset's usual gateway cannot serve it.
- **Overall Score: 78.8/100.** (66 + 72 + 94 + 90 + 72) / 5 = 78.8 — best-fit: a **975B/41B-active Apache-2.0 omni-modal open model** whose real differentiator is **native audio input** (VoiceBench 91.4%, Audio MC 56.6%) plus a 1M-token window at $1/$4 — but whose agentic and coding profile is well below the frontier (Terminal-Bench 4.0 ~1%, AutomationBench-AA 5.0%, FrontierMath Tier 4 4.9%), so it is a strong *multimodal-understanding* model rather than a strong agent.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA index — 25 (site) vs 25 (OpenRouter) vs BenchLM's "25.0%"** — consistent; the launch-day AA figure was 41.0 for Inkling (and 40.0 for Small), so the v4.3.2 re-baselining explains the drop.
2. **MCP Atlas — 76.0% (launch post) vs 74.1% (HF card / BenchLM).** Small transcription gap; both listed.
3. **GDPval-AA v2 — 1238 (post) vs 1233 (HF card); τ³-Banking 23.7 (post) vs 29.1 (AA, via BenchLM).**
4. **GPQA Diamond — 87.2% (vendor) vs 87.12% (Vals) vs 87.9% (via BenchLM).**
5. **SciCode — 46.1% (vendor) vs 47.0% (AA/BenchLM).**
6. **Vals Index — 34.10% at launch (a launch post) vs 28.96% today**, a scoring-pool change rather than a regression.
7. **Terminal-Bench 2.1 — 63.8% (vendor) vs 55.1% (AA) vs 47.6% (Vals)** — a 16-point spread across harnesses; AA is the anchor.
8. **Context — "up to 1M" (vendor, AA) vs 524,288 (OpenRouter top provider) vs 64K/256K (Tinker's served variants).** The deployed limits are the honest ones for the context score.
9. **HLE is measured in two conditions** (text-only 29.7% vs with tools 46.0%) and BenchLM/AA label them differently from the vendor — both are reported with their condition.
10. **No independent re-run of Inkling's coding claims exists beyond Vals and the HF eval export**, and the HF export repeats the vendor's own numbers rather than re-measuring them — noted as a weakness in the evidence base, not in the model.

### Notes on identity

- `Inkling` and `inkling-small` are **two separate training runs of the same family**, not a rename or a preview of one another: "alongside it we are sharing a preview of Inkling-Small, a lighter-weight model with 12B active parameters, trained with a similar recipe"; "Inkling-Small began training after its larger counterpart, which let us improve its training process"; and "we post-trained an earlier checkpoint, Inkling-Small (preview), in part using on-policy distillation with Inkling as the teacher." Inkling-Small went preview → GA on 2026-07-30; Inkling itself has no separate preview.
- The two share the "scalable post-training stack" and the same routing design (6-of-256+2), which is why their benchmark rows move together; the smaller model's headline results are in `model/inkling-small/`.
- Other 2026 models named "Inkling" from different labs exist in the wider world, but OpenRouter's `inkling` filter returns only `thinkingmachines/*` — so this dataset's Inkling is Thinking Machines Lab's.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Thinking Machines Lab's launch post and model card, the Hugging Face repository and eval export, OpenRouter's API and model page, models.dev, the Tinker serving/pricing documentation, Artificial Analysis (model page, index, class ranking), the BenchLM evidence ledger and Vals AI, plus negative verification at OpenCode Zen, swebench.com, LiveCodeBench, ARC Prize, Epoch AI and LMArena. Vendor-vs-independent conflicts — the Terminal-Bench spread, the context-window claim and the AA re-baselining — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Inkling.md`, using the same headings.
