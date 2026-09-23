# Qwen 3.8 Flash — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.8 Flash (125B efficiency tier), e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC)
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
- **Pricing (as of 2026-09-23):** $0.15/$0.47 per 1M in/out for hosted Flash (llm-stats org page). Flash-Next publishes no hosted rate (self-host/open-weight row). No $0 tier confirmed.
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
- **Overall Score: 85/100.** Mean of (75 + 88 + 92 + 88 + 84) / 5 = 85.4 → 85; best fit as the value-per-token coding/multimodal pick. (Proxy-leaning report: re-score when Flash-exact harness numbers publish.)

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (llm-stats Qwen org catalog, MarkTechPost Flash-Next release coverage, DataCamp Flash-Next summary, BenchLM and modelscale Flash-Next ledgers, AI Release Tracker); Flash-exact specs/pricing used where they exist, Flash-Next rows explicitly marked provisional. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
