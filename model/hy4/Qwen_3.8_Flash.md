# Hy4 — findings by Qwen 3.8 Flash

- Source: Tencent Hunyuan (`tencent/hy4`; HF `tencent/Hy4-preview`, Apache 2.0)
- Date: 2026-10-02 (UTC) / second pass 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (preview)
- **Short description:** Tencent's August-2026 open-weights flagship preview — a **770B-total / 49B-active MoE, Apache 2.0**, built for long-horizon coding and productivity agents. BenchLM shows an elite-but-bimodal agentic panel (GDPval-AA 1678, TB 2.1 85.4% AA vs **55.1% Vals**, ALE 22.8%) with GPQA 92.3 and HLE 43.4 unfurnished — the strongest text-only agentic open model between Hy3 and whatever Tencent GA-ships next. Preview status: expect churn.
- **Provider / access:** open weights HF `tencent/Hy4-preview`; self-host; no verified hosted rate; no Zen Free ID.
- **Release / knowledge:** August 2026 (catalog); cutoff not verified.
- **IDs:** `tencent/hy4` / HF `tencent/Hy4-preview`.
- **Context window:** **1M total = 960K in / 64K out** (catalog + BenchLM). Note the usable input is **just under the 1M threshold** — relevant to the v4 banding below.
- **Modalities:** **Text in / text out** per catalog (the curated `meta.json` agrees); reasoning yes; tool calls; JSON per serving stack. The single OfficeQA Pro 66.2 row is document-workflow text quality, not vision.
- **Pricing (as of 2026-10-02):** Apache 2.0 → self-host cost only (770B-class hardware). Cost excluded from Overall.
- **Architecture:** MoE 770B/49B active, Apache 2.0.

### Raw benchmarks found

> Verified via the qualifying `Kimi_K3.md` BenchLM scorecard (2026-09-24). Lane note: TB 2.1 shows one of the cohort's widest AA↔Vals gaps (85.4 vs 55.1) — harness choice swings this model ±15 points, so dims are scored between the lanes rather than at either extreme.

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (AA) / **55.1%** (Vals); GDPval-AA: **1678 Elo** — top-decile, second only to GLM 5.3's 1769 in this queue
- MCP Atlas **83.7%**; Toolathlon-Verified **74.1%**; WideResearch **83.9%**; DRACO **77.2%**; BankerToolBench **78.6%**; CyberGym **78.4%**
- JobBench 61.7; skillsBench 62.9; **APEX-Agents 37.1; Agents' Last Exam 22.8** (long-horizon generalist still weak); τ³/Claw-Eval: no row

Reasoning / knowledge:

- GPQA Diamond: **92.3%**; HLE: **43.4% no-tools / 55.4% w/ tools** — clears the 40% frontier bar unfurnished (rare in this band)
- CritPt: **16.9%** (soft); Apex math 74.2; BenchLM overall **59.61 / #44 of 507**
- AA Intelligence Index / LCR / Omniscience: **no verified rows** — the honesty profile of this preview is simply unmeasured

Coding:

- SWE-bench Pro: **65.7%**; SWE Multilingual: **82.9%**; DeepSWE: **64.3%**; NL2Repo 58.9
- **sweMarathon 31.9; ProgramBench 17.5; PostTrain Bench 35.6** — sustained-autonomy tail is where it drops; SWE-Verified/LCB/SciCode: no row

Long context:

- 1M-spec window (960K usable in) with **zero retrieval measurement** — no MRCR/RULER/LCR rows at all.

Multimodal:

- None tracked; OfficeQA Pro 66.2 is the only adjacent row.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. The unmeasured context-retrieval and honesty lanes, plus the 15-point TB lane war, are why this file and Kimi K3 land in the same place from slightly different arithmetic.

- **Tool use: 80/100.** GDPval 1678 + MCP Atlas 83.7 + WideResearch 83.9 + Toolathlon 74.1 is elite breadth; but the AA-Vals TB gap (85.4↔55.1) says results depend on who holds the scaffold, and ALE 22.8/APEX 37.1 are not elite. Four below Kimi K3's 84 for the lane split.
- **Reasoning: 78/100.** GPQA 92.3 and unfurnished HLE 43.4 are frontier-adjacent; CritPt 16.9 is soft and there's no AA Index or Omniscience row at all — an unmeasured honesty lane on a preview caps this below the cohort's 78.3… which it effectively matches. 78.
- **Context window: 88/100.** 960K usable input technically falls in the **500K–1M band (85–94)** rather than the ≥1M band — scored near that band's top, then discounted for having zero retrieval measurements behind the spec. Kimi K3's 80 underweights the sheer 64K-output-capable length; the cohort's 89.2 nearly matches this read.
- **Multimodal: 16/100.** Text-only deployment (band 10–20); OfficeQA is text-document work, not vision. Cohort's 20.8 sits within the same floor band — no real disagreement.
- **Coding: 76/100.** SWE-Pro 65.7 / Multilingual 82.9 / DeepSWE 64.3 is a strong modern-harness trio, but sweMarathon 31.9 and ProgramBench 17.5 show marathon autonomy breaks and there's no SWE-V/LCB anchor. A shade under Kimi's 78.
- **Cost efficiency: 88/100.** Apache 2.0 free weights; self-hosting a 770B/49B is datacenter money but marginal per-token is hardware-only. Matches the qualifying read. Cost excluded from Overall.
- **Overall Score: 67.6/100.** Mean of Tool 80, Reasoning 78, Context 88, Multimodal 16, Coding 76 = 338/5 = 67.6 → **68**. Best fit: **self-hosted long-horizon text agents and multilingual repo work where Apache licensing is the requirement** — GDPval-top-2 open weights with a frontier-rare unfurnished HLE pass, held back by preview-status unknowns (no honesty panel) and harness-dependent execution. Sits exactly on the Kimi K3/67–cohort/68.7 band: this is one of the rare folders where the measurement and the reputation agree.

## Second-pass update — 2026-11-04 (UTC)

**Status: preview promoted to GA on 2026-11-04 with vision + computer use — Multimodal band corrected; other bands held; Overall 68 → 73.**

Tencent shipped **Hy4 GA on 4 November 2026**. Two independent sources confirm the headline change: Tencent's own **@TencentHunyuan** post ("Hy4 is here, **new with vision**. Firmly among the leading open models") and the OrcaRouter GA analysis (*Tencent Hy4 GA: Vision, Computer Use at Same Price*, fetched 2026-11-04). GA adds **image input** and **computer use** (mouse/keyboard + CLI+GUI, sandbox on Tencent Cloud Agent Runtime) — this is the **first Hy model that reads an image and drives a desktop**, so pass-1's "text in / text out" model card is now superseded.

What GA did **not** ship is the evidence the trigger asked for. OrcaRouter is explicit: **no Terminal-Bench row, no SWE-bench row, no model card, no independent evaluation** — the only GA numbers are Tencent's own non-standard task suites (GameDev +19.1%, GameLogic +9.8%, a 213-expert finance panel averaging 3.04 vs Kimi K3.1 Pro 2.68 / GLM-5.3 2.68, a claimed hallucination drop 15.76%→5.45%, IRAB research +12.03, BioExperimentBench 30.4/100). The August preview table (TB 2.1 85.4, SWE-Pro 65.7, DeepSWE 64.3, Toolathlon 74.1, ALE 22.8) remains the *only* comparable benchmark set, and Tencent did **not** update it. The **revisit trigger's specific condition ("GA with an AA panel — Index/LCR/Omniscience + hosted rate card") PARTIALLY fired**: a hosted rate card is now confirmed ($0.834 in / $2.501 out / $0.042 cache on the Singapore endpoint, unchanged from preview; mainland ¥6/¥18/¥0.3), but there is still **no independent evaluation** of the GA build. GA weights are also **not yet released** — the Apache-2.0 HF repo holds only the preview (FP8 checkpoint >700 GB); GA is currently **API-only**, with open weights and a system card "planned, undated."

**Band decisions:**

- **Multimodal: 16 → 45 (REVISED).** Image input is now a confirmed modality fact (two sources), so the model leaves the 10–20 text-only floor and enters the v4 +image band. Entered at the band's **discounted floor** — not the mid-band — because there is **zero published visual benchmark** for the GA build (OrcaRouter: "treat the demo as a vendor illustration; there is no published visual benchmark attached"), the vision encoder is undescribed, and the build is not yet self-hostable. Deeper discount than `claude-sonnet-3.5` (55) and `claude-mythos-5` (65), whose image input is at least a shipping, established modality.
- **Tool / Reasoning / Context / Coding: HELD** (80 / 78 / 88 / 76). Computer-use, vision-reasoning, and shorter-CoT are GA capability *claims* with no measured row; per methodology (recalc only on evidence) they earn no band credit until an AA panel or system-card table appears. Context stays 88 (1,048,576-token total window confirmed, still zero MRCR/RULER retrieval measurement). The preview's GA-proxy numbers are unchanged from pass-1.
- **Cost note (excluded from Overall):** hosted rate now published (previously "no verified hosted rate"); cached-input $0.042/M beats Hy3's $0.059 — a genuine long-context agent-loop advantage. Apache-2.0 openness is now preview-only (GA API-only pending weights).

**New Overall:** Tool 80 + Reasoning 78 + Context 88 + Multimodal **45** + Coding 76 = 367/5 = **73.4 → 73** (was 68). The +5 is a **modality-band correction, not a quality credit** — it reflects confirmed image input at the unmeasured floor, and reverses toward ~68 if the vision claim is later shown weak, or rises into the 60–70 band once a visual benchmark is published.

Sources (this pass): Tencent **@TencentHunyuan** GA announcement (vision); OrcaRouter *Tencent Hy4 GA: Vision, Computer Use at Same Price* (fetched 2026-11-04 — GA date, rate card, missing-benchmark audit, weights status); pass-1 base (`Kimi_K3.md` BenchLM scorecard, HF `tencent/Hy4-preview`, SCMP, tencent.com release).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` BenchLM scorecard (GDPval/TB-lanes/MCP/WideResearch/GPQA/HLE/SWE-Pro/DeepSWE/marathon rows) + catalog context split (960K/64K) + curated `meta.json` (honest here). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) the **85.4↔55.1 TB harness split** — reroute cautiously, (b) zero Omniscience/AA-Index rows on a preview: honesty unknown, not assumed, (c) 960K usable input is band-adjacent to, not inside, the ≥1M tier.
- Revisit trigger: when Tencent promotes Hy4-preview to GA with an AA panel (Index/LCR/Omniscience) and a hosted rate card — Context and Reasoning both have headroom once measured.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. GA-ship pass: preview promoted to GA 2026-11-04 with **vision + computer use** (Tencent @TencentHunyuan + OrcaRouter). Corrected **Multimodal 16→45** (confirmed image input, discounted to band floor for zero measured visual quality + not-yet-routable). All other bands held — GA published **no independent benchmark** (only vendor task suites) and **no released weights** (API-only). Trigger partially fired (rate card yes / AA panel no). **Overall 68→73**, flagged as a modality-band correction rather than a capability credit.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
