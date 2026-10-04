# Qwen 3.8 — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen (curated id `opencode/qwen-3.8`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (open-weights release `Qwen3.8-2.4T-A95B`)
- **Short description:** The August 2026 open-weights release that brings a Qwen-Max-class model to public weights for the first time: a 2.4 T-parameter sparse MoE (95 B active) built on the Qwen3.5 architecture, aimed at agentic coding and "cowork" knowledge work. **Variant flag:** this is the same 3.8-generation weight family as `model/qwen-3.8-max/` (the QwenCloud hosted endpoint) — scored here as the *self-hosted / open-weights* entry, with the third-party trackers that label the artifact `Qwen3.8 Max` noted below.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-2.4T-A95B` (weights, updated 2026-08-13); hosted via QwenCloud `qwen3.8-max`; third-party paid route confirmed on Together AI (`https://api.together.xyz/v1/chat/completions`, Chat Completions). Artificial Analysis tracks the reasoning variant as `qwen3-8-2-4t-a95b`.
- **Release / knowledge:** weights 2026-08-13 (hosted Max announced 2026-08-02, previewed at WAIC 2026-07-19); knowledge cutoff not disclosed on the card I could retrieve.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (HF), `qwen3.8-max` (QwenCloud), `together/qwen3-8-max`; curated site id `opencode/qwen-3.8`.
- **Context window:** 262,144 tokens verified on the Artificial Analysis model page; BenchLM's card lists 1M and the vendor blog markets the family at 1M — the 1M figure is **not** reproduced by the aggregator page I checked, so I score the verified 262 K and treat 1 M as an unverified vendor/hosted-tier claim.
- **Modalities:** text in / text out per Artificial Analysis (reasoning yes); the release benchmark table additionally reports image- and video-understanding scores (MMMU-Pro, Video-MME, OCRBench V2), so vision input exists in the family even where the tracked text endpoint does not expose it. Tool calls yes (Terminal-Bench/Toolathlon/OSWorld measured).
- **Pricing (as of 2026-10-04):** $2.00 in / $6.00 out per 1M tokens with an 88 % cached-input discount (Artificial Analysis); $2.16 average cost per Intelligence-Index task. No $0 free tier found for this ID; self-hosting the open weights is the cheap path but is not the priced endpoint.
- **Architecture:** 2.4 T total / 95 B active, sparse MoE, open weights under the "Qwen3.8-Max License" (Artificial Analysis labels it open-weights, commercial-use-restricted class).

### Raw benchmarks found

Numbers are the family/release table reported by BenchLM (`benchlm.ai/models/qwen3-8-max`, updated 2026-10-02, sources: Qwen release blog + Vals AI + independent leaderboards) and the Artificial Analysis model page. BenchLM overall 72.12/100, rank **#16 of 783**; Artificial Analysis Intelligence Index **40**, rank **#6 of 118** in class.

Agent / tool use:

- Terminal-Bench 2.1 (**agentic coding/terminal**): **86.6 %** (Qwen release blog, via BenchLM) / Vals AI harness **67.4 %**
- OSWorld-Verified: **86.1 %**; OSWorld 2.0: **19.4 %** (same table)
- Toolathlon-Verified: **72.5 %**; AutomationBench-AA: **27.3 %**
- WebArena-Verified **66.8 %**, AndroidWorld **85.3 %**, MobileWorld **77.8 %**
- CoWorkBench **74.8 %**, JobBench **53.4 %**, skillsBench **70.2 %**, Agents' Last Exam **52.4 %**, WideResearch **81.9 %**, GDPval-AA: **no independent number found in this scan** (proxied by CoWorkBench/JobBench)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6 %** (blog table) / **93.7 %** (Vals AI)
- HLE: **43.6 %** without tools, **56.2 %** with tools
- MRCRv2: **92.9 %**; LongBench v2: **66.3 %**
- MMLU-Pro: **88.6 %** (Vals AI); IFBench **82.8 %**
- Artificial Analysis Intelligence Index: **40** (#6/118 in class); CritPt / AA-Omniscience: **not publicly available for this artifact**

Coding:

- SWE-bench (Vals): **85.6 %**; LiveCodeBench (Vals): **87.9 %**
- SWE-bench Pro: **67.7 %**; DeepSWE: **56.6 %**; FrontierSWE **73.5 %** (v2: 15.8 %)
- PaperBench **93.0 %**, NL2Repo **55.9 %**, MLS-Bench Lite **41.0 %**, OpenHarmony Bench **60.8 %**, VulcanBench v3 **81.2 %**
- SciCode: **no number found in this scan** (Artificial Analysis lists it "under review / not publicly available")

Multimodal / long context:

- MMMU-Pro **82.3 %**, MathVision **95.2 %** (97.7 % with Python), CharXiv **93.5 %**, OmniDocBench 1.5 **92.1 %**, OCRBench V2 **74.2 %**, ScreenSpot Pro **84.5 %**
- Video-MME (with subtitle) **90.4 %**, VideoMMMU **88.7 %**, MLVU **90.8 %**, LVBench **81.8 %**, MMVU **82.4 %**
- Long-context retrieval: MRCRv2 **92.9 %** (at the tracked window); no RULER/1M-scale retrieval measurement found

Speed: 37.8–38 output tokens/s (Artificial Analysis) — notably slow for the class; relevant to agent-loop cost, not scored.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 86.6 %, Toolathlon-Verified 72.5 %, OSWorld-Verified 86.1 % and AndroidWorld 85.3 % are frontier-band, so tool calling is essentially top-tier; capped below 90 by the soft AutomationBench-AA 27.3 % / OSWorld 2.0 19.4 % results and the absent GDPval-AA number.
- **Reasoning: 90/100.** GPQA Diamond 92.6–93.7 %, HLE 43.6 % (56.2 % with tools) and MRCR 92.9 % put it in the methodology's frontier band; capped by a still-middling Intelligence Index (40) and no CritPt/Omniscience disclosure.
- **Context window: 80/100.** 262 K verified (Artificial Analysis) with 92.9 % MRCR retrieval sits in the 200–500 K band and earns the upper part of it; the vendor/BenchLM 1 M claim is unverified for this artifact, which is what keeps it out of the 95+ tier.
- **Multimodal: 80/100.** Image, document (OmniDocBench 92.1 %, OCRBench V2 74.2 %) and video (Video-MME 90.4 %, MLVU 90.8 %) input are measured strong, but no audio input and no non-text output were found, and the tracked text endpoint exposes text only — the methodology maps "video/PDF in" to 75–90.
- **Coding: 86/100.** SWE-bench 85.6 %, LiveCodeBench 87.9 %, SWE-bench Pro 67.7 % and PaperBench 93.0 % are near-frontier; DeepSWE 56.6 %, FrontierSWE v2 15.8 % and MLS-Bench 41.0 % show it has not cleared the hardest long-horizon sets, so it lands just under the 90 band.
- **Cost efficiency: 70/100.** $2.00 in / $6.00 out ($2.16 per index task) is expensive for an open-weights model — between the methodology's $1.25/$4.25 (~88) and $3/$15 (~60) anchors; the 88 % cached-input discount and self-host option nudge it up, 38 tok/s output speed nudges it down.
- **Overall Score: 85/100.** Mean of the five quality dimensions (88 + 90 + 80 + 80 + 86) / 5 = 84.8 → 85; Cost excluded per `RULES.md`. Best fit: the open-weights pick when you need Max-class agentic coding and can tolerate a 262 K window and slow served throughput — choose `qwen-3.8-max` instead when a hosted 1 M window is the requirement.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-04
- Method: fresh public internet research (Qwen release blog, Hugging Face model card, Artificial Analysis model page, BenchLM, Together AI, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
