# Inkling Small — findings by Space Bunny

- Source: Thinking Machines Lab (`thinkingmachines/Inkling-Small`; Zen route `opencode/inkling-small`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-04 (Overall 72).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small (Thinking Machines Lab's smaller open-weight Inkling; the flagship `Inkling` is a separate 975B-total model)
- **Short description:** Thinking Machines Lab's released open-weight general-purpose multimodal reasoning model — 276B total / 12B active MoE, native text+image+audio input, controllable reasoning effort. Positioned as the efficient sibling of the 975B `Inkling`, explicitly aimed at agentic/tool-use systems, coding assistants, chatbots and RAG. Not a tier alias: a distinct checkpoint with different weights from the flagship `Inkling` (2026-07-15).
- **Provider / access:** open weights on Hugging Face (`thinkingmachines/Inkling-Small`, plus `Inkling-Small-NVFP4`); API via the Tinker fine-tuning platform and third-party providers (Artificial Analysis, DeepInfra, Baseten, OpenRouter `thinkingmachines/Inkling-Small`). Self-host via SGLang / vLLM / TokenSpeed / Unsloth / Transformers. Chat Completions-compatible gateway.
- **Release / knowledge:** released **2026-07-30**. Knowledge cutoff not stated numerically on the model card — described only as "information available as of its training cutoff" (**not verified**).
- **IDs:** `opencode/inkling-small` (Zen). Also `thinkingmachines/Inkling-Small` (HF and Tinker), `thinkingmachines/Inkling-Small:peft:262144` (Tinker 256K variant), `inkling-small` (AA / OpenRouter), `inkling-small:free` and `inkling-small:batch` variants listed by Vector Wire. No Zen Free ID confirmed as a distinct $0 tier — scored on paid pricing.
- **Context window — the single most consequential revision this pass.** The weights support **1M tokens**, but **nothing hosted serves more than 262K.**
  - Thinking Machines' own product page (`thinkingmachines.ai/inkling`) states, for Inkling-Small: "Context: **1M tokens (64K / 256K on Tinker)**". 64K and 256K are the two context lengths actually offered on Tinker.
  - Vals AI ran Inkling-Small at a **262k** context window with **262,144 max output tokens** (hyperparameter panel on the Vals model page).
  - Artificial Analysis's model page reports a 1000k context window (the self-hosting ceiling).
  - Artificial Analysis's own **2026-07-30 launch article said "Context window: 256K tokens (Inkling supports 1M)"** — so AA's own launch-day reading was that 256K was Inkling-Small's number and 1M was the flagship's.
  - **Conclusion:** the 1M figure is a weights/self-hosting ceiling, not a provisioned window. The first pass scored 1M as if it were usable in production. Highest *measured* window for any hosted route is 262,144.
- **Modalities:** text, image (pixel input, 40px–4096px per dimension), and **audio** (WAV, 16kHz, ideally under 2 min) in; text out. Tinker's changelog for 2026-07-30 confirms the Playground "accepts image and audio input when chatting with Inkling and Inkling-Small", and the Tinker model table tags both models "Hybrid + Audio + Vision". **Conflict recorded:** Vals' Inkling-Small capability panel lists only *text input supported, image input supported* and marks **video input not supported** — audio is absent from that listing. The vendor's own Playground behaviour is the better evidence for audio; noted so the two are not averaged. Reasoning: supported with controllable effort (Vector Wire records minimal/low/medium/high/xhigh; Vals runs at reasoning effort 0.99). Tool calling: supported per OpenRouter listing.
- **Pricing (as of 2026-10-17):** **$0.30 in / $1.20 out per 1M** at Artificial Analysis / OpenRouter, with an **80% cache-hit discount ($0.06/M)** giving a blended 7:2:1 rate of **$0.222/M**. Other providers previously recorded: DeepInfra $0.45/$1.20, Baseten $0.50/$1.20.
  - First-party Tinker list (as of the pricing page dated 2026-10-14), 64K context: prefill $1.16, cached prefill $0.116, sample $2.88, train $3.46. The 256K variant: prefill $2.32, cached $0.232, sample $5.78, train $6.94. Both rows are still stamped "Limited-time 50% discount", i.e. $0.58 / $1.44 for 64K sampling.
  - **Correction to a lead:** the "launch discount expired 2026-07-17" claim is **not supported for Inkling-Small**. 2026-07-17 is two days after the *flagship* Inkling launched (2026-07-15); Inkling-Small launched 2026-07-30, and Tinker's own pricing page, dated **2026-10-14**, still carries Inkling-Small at 50% off. Recorded as still-live rather than expired.
  - Cheaper than 59% of 328 priced models at a 3:1 blend (first pass); the third-party route remains materially cheaper than Tinker even after Tinker's discount.
- **Architecture:** 42-layer decoder-only transformer with sparse MoE feed-forward — each token routed to **6 of 256 experts** plus 2 shared experts active every token. Hybrid local/global attention. Natively multimodal: hierarchical patch encoder for images, discrete token encoding for audio, projected into a shared hidden space. **276B total, 12B active** (Artificial Analysis reports 266B total / 12B active — a minor discrepancy with the vendor's 276B, both recorded). Numerics: BF16, MXFP8, NVFP4. Self-hosting needs ≥600 GB aggregated VRAM (BF16: 4× B300 or 8× H200) or ≥180 GB (NVFP4). **Apache 2.0.**

### Raw benchmarks found

> Second pass adds a **full independent Vals AI evaluation (Vals model page + benchmark leaderboards, read 2026-10-17)** and the **current Artificial Analysis v4.3.2 component set**. Vendor launch figures are Thinking Machines' own at reasoning effort 0.99. Ranks in parentheses.

**Aggregator mislabelling — two instances found, both corrected.**

- The first pass recorded **Terminal-Bench 4.0: 1.01**. That figure belongs to **MiniMax-M3** (#45 on the Vals Terminal-Bench 4.0 leaderboard). Inkling-Small's own Vals result is **0.00% ±0.00 (#48/49)**. The aggregator line the first pass used had simply copied a neighbouring model's row.
- The first pass recorded **GPQA Diamond 89.5%** as the model's score with no source label. That is Thinking Machines' **vendor** figure (also republished by Artificial Analysis in its launch article: "GPQA Diamond (89% vs 87%)"). Vals measures **83.59% ±2.04 (#57/138)**. Both numbers are correct for what they are; the vendor one must not be presented as independent.

**Independent — Vals AI (model page read 2026-10-17; leaderboards updated 2026-10-16 where noted):**

- Vals Index: **25.46% ±1.03, #48 of 49**. *Conflict recorded:* a search-index snippet of the same page returned "50.37% ±1.47" earlier in this session; the live page renders 25.46%, and the Vals Index leaderboard (updated 10/16/2026) and the BenchLM and BenchLeader mirrors both independently show Inkling-Small at **25.46 / 25.5**. The live value is used.
- Terminal-Bench 4.0: **0.00% ±0.00 (#48/49)** — a hard zero on 66 frontier-difficulty tasks, and one of only two models on the board at zero. Mercury 2.5 is the other. The run finished in 11m45s at $0.32/test.
- SWE-bench: **82.20% ±1.71 (#20/88)** — this **beats the vendor's 80.2%** and is the single strongest new result for the model.
- LiveCodeBench: **85.93% ±0.99 (#26/143)**, essentially tied with GPT-5.6 Terra (85.93%). Benchmark frozen for new releases as of 2026-09-01 ("performance has saturated").
- GPQA Diamond: **83.59% ±2.04 (#57/138)** vs vendor 89.5%.
- MMLU Pro: **85.57% ±0.35 (#58/138)**
- ProofBench v1.1: **6.00% ±2.39 (#47/50)**
- Code Migration: **13.68% ±3.81 (#59/78)**
- SkillsBench: **33.58% ±3.66 (#32/35)** (OpenHands harness)
- Vibe Code Bench v1.1: **19.05% ±3.40 (#85/113)**
- ProgramBench: **0.50% ±0.50 (#31/64)**
- IOI: **9.33% ±4.47 (#43/44)**
- Harvey's Legal Agent Benchmark: **1.67% ±0.83 (#53/80)**
- MedScribe **84.11% (#38/109)** · MedCode **37.89% (#75/107)** · TaxEval v2 **75.51% (#18/145)** · LegalBench **82.99% (#62/151)** · Tax Agent Bench **15.39% (#50/70)** · EMB **31.76% (#63/75)** · SAGE **32.74% (#74/91)** · CyberBench v1.1 **64.11% (#34/47)** · Finance Agent v2 **41.26% (#61/79)** · Legal Research Bench **25.48% (#52/79)** · MortgageTax **62.28% (#55/98)** · Public Benefits Bench v1.1 **59.41% (#34/50)**

**Independent — Artificial Analysis (v4.3.2, current component set):**

- Artificial Analysis Intelligence Index: **26**, rank **#29 / 120** — "well above average among comparable models (median: 19)". The first pass's 25.7 (#126/427) is the same reading in an older field size.
- **Correction to a lead, and a warning about the vendor's own model card.** The vendor card's headline "AA Index v4.1 = 40.0%" is a **retired scale and is not a current claim.** Artificial Analysis's own 2026-07-30 article read Inkling-Small at **40** and Inkling at **41** on that scale; the current v4.3.2 reading is **26**. Anyone quoting "40" today is quoting a four-month-old index that has since been re-based (v4.3 replaced Terminal-Bench v2.1 with the far harder Terminal-Bench 4.0 and swapped τ³-Banking for AutomationBench-AA, with private held-out weighting raised to 45%). Record both, use 26.
- Components: AA-Briefcase v1.1 **912 Elo** · GDPval-AA v2.1 **1123–1124 Elo** · AutomationBench-AA **5%** · Terminal-Bench 4.0 **1%** · SciCode **50%** · Humanity's Last Exam **33%** · GDP.pdf **11%** · CritPt **8%** · **AA-Omniscience −9** (Accuracy 31%, Hallucination Rate 57%) · AA-LCR v1.1 **76%**
- Speed **199.4 output tok/s (#9/78)**, TTFT 1.68–2.26s, **Cost per Intelligence Index task $0.09 (#11)**. "Somewhat verbose" — 140M output tokens, vs a 130M median.

Vendor-reported (Thinking Machines, 2026-07-30, effort 0.99 — retained for the conflict record):

- SWE-bench Verified **80.2%** (superseded by Vals 82.20%) · SWE-bench Pro **55.9%** · SciCode **49.7%** · GPQA Diamond **89.5%** · HLE **33.3%**, **47.8% with tools** · IFBench **82.2%** · MCP Atlas **79.6%** · Terminal-Bench 2.1 **55.1%** · Toolathlon Verified **54.4%** · τ³-Banking **15.5%** · τ²-Bench Telecom **37%** · CritPt **8.3%** · SimpleQA **20.6%** · AIME 2026 **95.5%** · MMMU-Pro **74.0%** · MMAU **77.0%** · VoiceBench **90.1%** · GDPval-AA v2 **1269 Elo** · ARC-AGI-2 **40.1%**
- Vector Wire rollup (first pass): agentic median 79.6% (#6/7), coding median 48.70% (5th of 10), multimodal median 74.0%, math −44.7% vs leaders, factuality −36.3% vs leaders.

Long context:

- AA-LCR v1.1 **76%** (Artificial Analysis, current) — capable, not elite.
- Context Arena (GDM-MRCRv2 multi-needle): median **24.4%** across reasoning modes; AUC falls to **~4.5–5.0% at the 1M mark** (carried from the 2026-10-04 first pass; not re-measured this session).
- **No retrieval benchmark of any kind has been published at any length above 262K**, because no measured route offers one. The 1M ceiling is therefore entirely unmeasured in production conditions.

### Normalized scores (1–100)

- **Tool use: 62/100** (unchanged). The headline item resolves to a hard **Terminal-Bench 4.0 zero (#48/49)** — worse than the 1.01 the first pass used, but the difference is immaterial to the score, and correcting the mislabelled aggregator row is what matters. Against that: **SWE-bench 82.20% (#20/88)** beats the vendor's own number, MCP Atlas 79.6% and GDPval-AA 1269 Elo show real agentic competence, and Toolathlon Verified 54.4% is serviceable. Offsetting the other way, and newly visible with independent data: **AutomationBench-AA 5%**, **SkillsBench 33.58% (#32/35)**, τ³-Banking 15.5%, and Vector Wire's agentic median 28.6% behind leaders. Genuinely two-sided; held rather than moved in either direction.
- **Reasoning: 71/100** (was 74). Cut on new independent evidence, not on opinion. **GPQA Diamond measured 83.59% (#57/138) against the vendor's 89.5%** — a 5.9-point overstatement that matters because GPQA was the load-bearing row for this score, and because IFBench 82.2% is likewise vendor-only and carries no independent check. Confirmed weak: HLE 33.3% (#69/478), CritPt 8.3%, AA-Omniscience **−9** (negative index — more wrong than right, with 31% accuracy), SimpleQA 20.6%. AA Index 26 and 33.58% SkillsBench do not offset a 57th-place GPQA.
- **Context window: 65/100** (was 72). Cut on the provisioning fact established above: the highest **measured** window on any hosted route is **262,144** (Vals, at max output 262,144), and Thinking Machines' own product page sells only **64K / 256K on Tinker**. The 1M figure is the self-hosting ceiling and has never been measured under retrieval load in a hosted configuration. AA-LCR 76% is capable at the lengths tested; the Context Arena AUC collapse to ~4.5–5% at 1M (carried forward) is what stops this from scoring on the advertised number.
- **Multimodal: 82/100** (unchanged). Broad native text + image + **audio** input, vendor-confirmed by Tinker's Playground behaviour and the "Hybrid + Audio + Vision" architecture tag. **No new independent vision or audio benchmark was found for Inkling-Small this pass** — MMMU-Pro 74.0%, MMAU 77.0%, CharXiv-R 77.4%, VoiceBench 90.1% and AudioMC 54.9% all remain vendor or first-pass figures, and Vals' capability panel omits audio. Held, not raised, on unchanged evidence.
- **Coding: 72/100** (unchanged, on genuinely split evidence). Up: **SWE-bench 82.20% (#20/88)** independently verified and *above* the vendor's claim, **LiveCodeBench 85.93% (#26/143)**, SciCode 50% on AA, SWE-bench Pro 55.9%. Down, and harder to argue away: **Code Migration 13.68% (#59/78)**, **Vibe Code Bench v1.1 19.05% (#85/113)**, **ProgramBench 0.50% (#31/64)**, **ProofBench 6.00% (#47/50)**, and Vector Wire's coding median 30.4% behind leaders. Strong on the two most standard code benchmarks, near-floor on end-to-end app building and repository-scale porting. Net unchanged.
- **Cost efficiency: 88/100** (unchanged). $0.30 / $1.20 with an 80% cache discount (blended $0.222/M, $0.09 per Intelligence Index task, #11 on cost) is genuinely cheap for a 276B / 12B-active multimodal model you can also self-host and fine-tune. Not 100: it is a paid list SKU, no $0 Zen tier is confirmed, and Tinker still applies a **limited-time** 50% discount to its own first-party rates — the third-party route is currently the cheaper of the two, which is itself an odd configuration.
- **Overall Score: 70/100.** Best fit as an open-weights (Apache 2.0), cheap, audio-and-image-capable reasoning model you can actually self-host and fine-tune — with the practical context budget treated as **256K, not 1M**. Mean of the five non-cost dims: (62 + 71 + 65 + 82 + 72) / 5 = 70.4 → 70.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: public internet research (Vals AI model page and benchmark leaderboards — Terminal-Bench 4.0, SkillsBench, Code Migration, LiveCodeBench, Vals Index — for the independent evaluation; Artificial Analysis model page, component comparisons and the 2026-07-30 launch article for the current v4.3.2 composite and the retired-scale warning; `thinkingmachines.ai/inkling` product page, `thinkingmachines.ai/news/inkling-small/`, `thinkingmachines.ai/tinker/pricing/` and the Tinker docs models table for context provisioning and first-party pricing; Vals capability panels for modality conflicts). Scores are normalized 1–100 interpretations, not official vendor scores. Vendor-reported and independently-measured rows are labelled per row above.
- Corrections made to the 2026-10-04 first pass: (1) **Terminal-Bench 4.0 1.01 → 0.00% (#48/49)** — the old figure belonged to MiniMax-M3, an aggregator copy error; (2) **Context window 1M → 262,144 as the highest measured hosted window**, with 1M reclassified as the self-hosting ceiling; (3) the **"50% launch discount expired 2026-07-17" claim is withdrawn** — Tinker's pricing page, dated 2026-10-14, still carries Inkling-Small at 50% off, and 2026-07-17 is two days after the *flagship* Inkling's launch, not this model's; (4) **Reasoning 74 → 71** on Vals GPQA Diamond 83.59% (#57/138) against the vendor's 89.5%; (5) the vendor card's **"AA Index 40.0%"** is explicitly marked a retired v4.1 scale superseded by the current 26.
- Still unmeasured / unresolved: any retrieval benchmark above 262K; any independent audio or vision benchmark for Inkling-Small; SWE-bench Verified as a distinct Verified-only measurement (Vals' "SWE-bench" row is a single implementation, not the Verified subset); AA Coding Index; any published knowledge cutoff; whether Vals' omission of audio from the capability panel reflects a real limitation or a listing gap.
- Re-run when: (a) Vals completes a second independent pass or publishes an audio-capable benchmark row; (b) Thinking Machines or a third party provisions Inkling-Small above 256K and publishes a retrieval result at that length; (c) the Tinker 50% discount is withdrawn (its pricing page carries the "Limited-time" stamp today); (d) Artificial Analysis re-bases the Intelligence Index again, or publishes an Inkling-Small Coding Index value.
- Future sources: add a new file next to this one, e.g. `Inkling_Small_2.md`, using the same headings.