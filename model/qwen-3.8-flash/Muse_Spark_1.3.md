# Qwen 3.8 Flash — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.8 Flash (125B efficiency tier), e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: price-cut + vision rows added; scores hold 85), re-verified 2026-10-16 (UTC, see Re-verification section; scores hold 85)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's 125B efficiency-tier model in the 3.8 family — near-flagship coding and multimodal scores at roughly a tenth of Max pricing. Variant note: public ledgers split this tier into hosted "Qwen3.8 Flash" (1M context, metered pricing) and the "Qwen3.8-Flash-Next" experimental checkpoint (262K, open-weight); this report scores the Flash tier using exact-ID specs/pricing plus explicitly-marked Flash-Next measured rows as the closest proxy.
- **Provider / access:** Alibaba Cloud; OpenCode Zen `opencode/qwen-3.8-flash`. Chat Completions-compatible API.
- **Release / knowledge:** August 2026 (llm-stats org catalog; Flash-Next checkpoint 2026-08-26 per MarkTechPost and AI Release Tracker). Knowledge cutoff: no verified public statement found.
- **IDs:** `opencode/qwen-3.8-flash` (paid tier; cost scored on Flash paid pricing)
- **Context window:** 1.0M total tokens for the hosted Flash listing (llm-stats org page); Flash-Next checkpoint cataloged at 262K (BenchLM/modelscale). Scored at the 1M hosted figure.
- **Modalities:** Multimodal in (text, image; Flash-Next measured rows cover MathVision, CharXiv, RealWorldQA), text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-23):** $0.15/$0.47 per 1M in/out for hosted Flash (llm-stats org page; cut from $0.16 on 2026-08-27 — amended 2026-09-27). Flash-Next publishes no hosted rate (self-host/open-weight row). No $0 tier confirmed.
- **Architecture:** 125B MoE (6B active, per MarkTechPost) previewing the Qwen4 architecture; Flash-Next weights open under Qwen Community 1.0

### Raw benchmarks found

> Exact-Flash-ID measured benchmark rows are sparse, so Flash-Next checkpoint rows (same 125B tier, August 2026) are used as explicitly-marked provisional proxies. Hosted-Flask specs and pricing are exact-ID.

Agent / tool use:

- Terminal-Bench 2.1: no verified Flash-exact number found. Proxy (Flash-Next, provisional): no TB 2.1 row published either — nearest are CoWorkBench **73.9%**, JobBench **55.7%**, Toolathlon-Verified **73.5%** (vendor via MarkTechPost/BenchLM)
- Tau3-Banking / Tau2-Bench: no verified Flash-exact number found. Proxy (Flash-Next, provisional): AA Tau3 Banking **45.4%** (BenchLM)
- GDPval-AA: no verified Flash-exact number found. Proxy (Flash-Next, provisional): **1743** (BenchLM ledger)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: proxy (Flash-Next, provisional) Toolathlon-Verified **73.5%**; OSWorld 2.0 **19.4%** (weak row — noted); AndroidWorld **84.5%** (BenchLM)
- Agents' Last Exam (proxy, provisional): **51.2%** (BenchLM Flash-Next page)

Reasoning / knowledge:

- GPQA Diamond: no verified Flash-exact number found. Proxy (Flash-Next, provisional): **91.7%** (GPQA/GPQA-D via modelscale); AA-GPQA **92.3%** (BenchLM)
- HLE: no verified Flash-exact number found. Proxy (Flash-Next, provisional): **35.9%** w/o tools (modelscale); AA-HLE **38.0%** (BenchLM)
- LCR / MLCR: no verified Flash-exact number found. Proxy (Flash-Next, provisional): AA-LCR **77.0%** (BenchLM)
- CritPt: proxy (Flash-Next, provisional) **11.1%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: proxy (Flash-Next, provisional) AA Index **55.8** (BenchLM ledger; modelscale lists 39.8 on a different index cut — both cited); BenchLM overall 59.42–60.67 (Flash-Next page)
- Omniscience Accuracy / Hallucination Rate: proxy (Flash-Next, provisional) accuracy 24.5% / hallucination 45.3% (modelscale)
- Vision (proxy, provisional): **Vision2Web 64.0 / ERQA 72.3 / LVBench 76.6** (BenchLM Flash-Next ledger — amended 2026-09-27)

Coding:

- SWE-bench Verified / SWE-Pro: no verified Flash-exact number found. Proxy (Flash-Next, provisional): SWE-Pro **62.5%**, SWE-Multilingual **81.0%** (vendor via MarkTechPost/BenchLM)
- LiveCodeBench: no verified Flash-exact number found. Proxy (Flash-Next, provisional): v6 **91.9%** (vendor via MarkTechPost/BenchLM)
- SciCode / AA-SciCode: proxy (Flash-Next, provisional) **46.9%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: proxy (Flash-Next, provisional) DeepSWE **58.7%** (vendor "DeepSWE 1.1" via MarkTechPost); AA Coding Index 73.0 (index, noted only)
- DataCamp headline (Flash-Next): beats Claude Opus 4.6 Max on most coding/agent benchmarks (editorial summary — qualitative, not scored on)

Long context:

- 1M hosted window exact-ID verified; proxy AA-LCR 77.0% is the only retrieval-adjacent number — no MRCR percentage found

### Normalized scores (1–100)

- **Tool use: 75/100.** Proxy rows (Toolathlon-V 73.5, CoWork 73.9, GDPval 1743) show solid agency, but OSWorld 2.0 19.4% and zero Flash-exact tool numbers cap it in the mid-70s.
- **Reasoning: 88/100.** Proxy GPQA 91.7 with HLE ~36–38 sits just under the frontier bar; all-provisional status caps it below 90.
- **Context window: 92/100.** Exact-ID 1M hosted window with proxy LCR 77.0%; no MRCR proof keeps it off the 95+ tier.
- **Multimodal: 88/100.** Multimodal-tier proxies (MathVision 90.6–95.7, CharXiv 90.6, RealWorldQA 88.5) with text-only output; provisional but consistent.
- **Coding: 84/100.** Proxy SWE-Pro 62.5 with LiveCode v6 91.9 and DeepSWE 58.7 is near-frontier for an efficiency tier; provisional status caps it.
- **Cost efficiency: 97/100.** $0.15/$0.47 metered pricing is within striking distance of $0-tier value at near-flagship capability.
- **Overall Score: 85/100.** Mean of (75 + 88 + 92 + 88 + 84) / 5 = 85.4 → 85; best fit as the value-per-token coding/multimodal pick. (Proxy-leaning report: re-score when Flash-exact harness numbers publish; amended 2026-09-27 with cut-price + vision rows, scores hold.)

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (llm-stats Qwen org catalog, MarkTechPost Flash-Next release coverage, DataCamp Flash-Next summary, BenchLM and modelscale Flash-Next ledgers, AI Release Tracker); Flash-exact specs/pricing used where they exist, Flash-Next rows explicitly marked provisional. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-16 (23 days after amended 2026-09-27)

Original research date 2026-09-23, amended 2026-09-27. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-16: (1) llm-stats Qwen org catalog (hosted Flash 1M context, $0.15/$0.47 metered — cut from $0.16 on 2026-08-27), (2) MarkTechPost Flash-Next release coverage + DataCamp summary (125B/6B MoE, Qwen4-architecture preview, open weights Qwen Community 1.0, beats Opus 4.6 Max on most coding/agent benchmarks — editorial, unscored), (3) BenchLM + modelscale Flash-Next ledgers (CoWorkBench 73.9%, JobBench 55.7%, Toolathlon-V 73.5%, Tau3 45.4%, GDPval 1743, OSWorld-2.0 19.4%, AndroidWorld 84.5%, Agents-Last-Exam 51.2%, GPQA 91.7/92.3-AA, HLE 35.9/38.0-AA, AA-LCR 77.0%, CritPt 11.1%, Index 55.8/39.8-cut, SWE-Pro 62.5%, SWE-Multilingual 81.0%, LiveCode-v6 91.9%, SciCode 46.9%, DeepSWE 58.7%, Vision2Web 64.0/ERQA 72.3/LVBench 76.6, MathVision 90.6–95.7/CharXiv 90.6/RealWorldQA 88.5). Conflicting results compared below.

| Dimension | 2026-09-23/27 | 2026-10-16 | Change |
|---|---|---|---|
| Tool use | 75 | 75 | hold — all-provisional proxy rows stand (Toolathlon-V 73.5, CoWork 73.9, GDPval 1743); OSWorld-2.0 19.4% cap unchanged; zero Flash-exact tool numbers still |
| Reasoning | 88 | 88 | hold — proxy GPQA 91.7/HLE ~36–38 corroborated across BenchLM+modelscale; Index 55.8 vs 39.8-cut (index-cut drift, both recorded); all-provisional cap stands |
| Context | 92 | 92 | hold — exact-ID 1M + proxy LCR 77.0% stand; no MRCR proof |
| Multimodal | 88 | 88 | hold — proxy vision rows (MathVision 90.6–95.7, Vision2Web 64.0, LVBench 76.6) stand; provisional but consistent; text-out cap stands |
| Coding | 84 | 84 | hold — proxy SWE-Pro 62.5 + LiveCode-v6 91.9 + DeepSWE 58.7 stand; provisional cap stands; no Flash-exact/Vibe absolute |
| Cost | 97 | 97 | hold — $0.15/$0.47 stands |
| Overall | 85 | 85 | hold — (75+88+92+88+84)/5 = 85.4 → 85 |

Proxy-leaning status re-confirmed — still zero Flash-exact harness numbers 23 days on; re-score when Flash-exact runs publish. No Flash-exact, no Vibe, no MRCR absolute found — prior gaps stand. Scores hold; no dimension delta meets the evidence bar for change.

Sources: https://llm-stats.com/org/qwen · https://marktechpost.com/2026/08/26/qwen3-8-flash-next-release · https://benchlm.ai/models/qwen-3-8-flash-next
